import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { RemoteDebugCommandResult, RemoteLogsView } from '@placeos/common';

import { RemoteDebugPanelComponent } from '../lib/remote-debug-panel.component';
import { RemoteDebugViewService } from '../lib/remote-debug-view.service';

describe('RemoteDebugPanelComponent', () => {
    let spectator: Spectator<RemoteDebugPanelComponent>;
    let listeners: Record<string, (value: unknown) => void>;
    let call: ReturnType<typeof vi.fn>;

    const logs: RemoteLogsView = {
        device: null,
        entries: [1, 2, 3].map((seq) => ({
            seq,
            timestamp: seq * 1000,
            level: seq === 3 ? 'error' : 'info',
            source: 'console',
            message: seq === 3 ? 'Failed to load' : `line ${seq}`,
        })),
    };

    const createComponent = createComponentFactory({
        component: RemoteDebugPanelComponent,
        providers: [MockProvider(MatDialog)],
        detectChanges: false,
    });

    beforeEach(() => {
        listeners = {};
        call = vi.fn(async () => 'id-1');
        const mod = {
            variable: (name: string) => ({
                bindThenSubscribe: (next: (value: unknown) => void) => {
                    listeners[name] = next;
                    return () => delete listeners[name];
                },
            }),
        };
        spectator = createComponent({
            providers: [
                {
                    provide: RemoteDebugViewService,
                    useValue: {
                        module: signal(mod),
                        devices: signal([]),
                        now: signal(Date.now()),
                        call,
                    },
                },
            ],
            props: { device_id: 'DEV-1' },
        });
        spectator.detectChanges();
    });

    const emit = (name: string, value: unknown) => {
        listeners[name](value);
        spectator.detectChanges();
    };

    it('should show the logs of the device, newest first, and filter them', () => {
        emit('logs:DEV-1', logs);

        const lines = () =>
            spectator.queryAll('[logs] ol li').map((_) => _.textContent ?? '');
        expect(
            lines().map((_) => _.match(/(line \d|Failed to load)/)?.[0]),
        ).toEqual(['Failed to load', 'line 2', 'line 1']);

        spectator.component.filter.set('failed');
        spectator.detectChanges();
        expect(lines()).toHaveLength(1);
    });

    it('should count the entries of each level, and show one level', () => {
        emit('logs:DEV-1', logs);

        expect(spectator.component.level_counts()).toEqual({
            debug: 0,
            info: 2,
            warn: 0,
            error: 1,
        });
        spectator.component.toggleShownLevel('error');
        spectator.detectChanges();
        expect(spectator.queryAll('[logs] ol li')).toHaveLength(1);

        // The same level again shows all entries
        spectator.component.toggleShownLevel('error');
        spectator.detectChanges();
        expect(spectator.queryAll('[logs] ol li')).toHaveLength(3);
    });

    it('should page back through the entries, then ask the device for older ones', async () => {
        emit('logs:DEV-1', {
            device: null,
            entries: Array.from({ length: 600 }, (_, i) => ({
                seq: i + 101,
                timestamp: i,
                level: 'info',
                source: 'console',
                message: `line ${i + 101}`,
            })),
        });
        const shown = () => spectator.component.shown_entries();
        expect([shown()[0].seq, shown().at(-1)?.seq]).toEqual([700, 201]);

        await spectator.component.loadOlder();
        expect([shown()[0].seq, shown().at(-1)?.seq]).toEqual([200, 101]);
        expect(call).not.toHaveBeenCalled();

        await spectator.component.loadOlder();
        expect(call).toHaveBeenCalledWith('request_logs', [
            'DEV-1',
            'info',
            { history: 1000, before: 101 },
        ]);
        // The page stays until older entries arrive
        expect([shown()[0].seq, shown().at(-1)?.seq]).toEqual([200, 101]);

        emit('logs:DEV-1', {
            device: null,
            entries: Array.from({ length: 700 }, (_, i) => ({
                seq: i + 1,
                timestamp: i,
                level: 'info',
                source: 'console',
                message: `line ${i + 1}`,
            })),
        });
        expect([shown()[0].seq, shown().at(-1)?.seq]).toEqual([100, 1]);
    });

    it('should keep the page when the driver drops the older entries', async () => {
        const entry = (seq: number, message: string) => ({
            seq,
            timestamp: seq,
            level: 'info' as const,
            source: 'console' as const,
            message,
        });
        const view = (seqs: [number, string][]) => ({
            device: null,
            entries: seqs.map(([seq, message]) => entry(seq, message)),
        });
        emit(
            'logs:DEV-1',
            view([
                [5, 'Failed'],
                [6, 'line 6'],
                [7, 'line 7'],
            ]),
        );
        spectator.component.filter.set('line');
        const shown = () =>
            spectator.component.shown_entries().map((_) => _.seq);

        await spectator.component.loadOlder();
        expect(call).toHaveBeenCalledWith('request_logs', [
            'DEV-1',
            'info',
            { history: 1000, before: 5 },
        ]);
        // A full driver keeps its newest entries, so no older entry arrives
        emit(
            'logs:DEV-1',
            view([
                [6, 'line 6'],
                [7, 'line 7'],
                [8, 'line 8'],
            ]),
        );
        expect(shown()).toEqual([8, 7, 6]);
    });

    it('should send log requests to the driver in the order they were made', async () => {
        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        const sent: string[] = [];
        let release = () => {};
        // Each call stays open until the test releases it
        call.mockImplementation((method: string, args: unknown[]) => {
            sent.push(method === 'set_level' ? `${method} ${args[1]}` : method);
            return new Promise((resolve) => (release = () => resolve(null)));
        });
        const settle = () => new Promise((resolve) => setTimeout(resolve));

        // A level change, then Load older, a stop and a new request
        const all = Promise.all([
            spectator.component.setLevel('debug'),
            spectator.component.stopLogs(),
            spectator.component.startLogs(),
        ]);
        await settle();
        // The next call waits until the running call finishes
        expect(sent).toEqual(['set_level debug']);
        release();
        await settle();
        expect(sent).toEqual(['set_level debug', 'stop_logs']);
        release();
        await settle();
        release();
        await all;

        expect(sent).toEqual(['set_level debug', 'stop_logs', 'request_logs']);
        // The new request uses the level that the user selected
        expect(call).toHaveBeenLastCalledWith('request_logs', [
            'DEV-1',
            'debug',
            { history: 1000 },
        ]);
    });

    it('should show the newest entries again when the user selects Newest', async () => {
        const entry = (seq: number) => ({
            seq,
            timestamp: seq,
            level: 'info' as const,
            source: 'console' as const,
            message: `line ${seq}`,
        });
        emit('logs:DEV-1', { device: null, entries: [5, 6, 7].map(entry) });
        await spectator.component.loadOlder();
        expect(call).toHaveBeenCalledWith('request_logs', [
            'DEV-1',
            'info',
            { history: 1000, before: 5 },
        ]);
        spectator.component.showNewest();

        // Older entries that arrive later do not move the page
        emit('logs:DEV-1', { device: null, entries: [4, 5, 6, 7].map(entry) });

        expect(spectator.component.older_than()).toBeNull();
    });

    it('should not send a level change for a device without live logs', async () => {
        await spectator.component.setLevel('debug');

        expect(call).not.toHaveBeenCalled();
    });

    it('should send quick level changes one at a time, in order', async () => {
        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        const levels: string[] = [];
        // Like ts-client, a call with the same arguments as a running call joins it
        const running = new Map<string, Promise<null>>();
        call.mockImplementation((method: string, args: unknown[]) => {
            const key = JSON.stringify([method, args]);
            const joined = running.get(key);
            if (joined) return joined;
            if (method === 'set_level') levels.push(args[1] as string);
            const result = new Promise<null>((resolve) =>
                setTimeout(() => resolve(null)),
            ).finally(() => running.delete(key));
            running.set(key, result);
            return result;
        });

        await Promise.all(
            (['debug', 'warn', 'debug'] as const).map((_) =>
                spectator.component.setLevel(_),
            ),
        );

        expect(levels).toEqual(['debug', 'warn', 'debug']);
    });

    it('should send each command when the user selects them quickly', async () => {
        const sent: unknown[] = [];
        // Like ts-client, a call with the same text of its arguments as a
        // running call joins it. An object shows as `[object Object]`
        const running = new Map<string, Promise<string>>();
        call.mockImplementation((method: string, args: unknown[]) => {
            const key = `${method}|${args}`;
            const joined = running.get(key);
            if (joined) return joined;
            sent.push(args[2]);
            const result = new Promise<string>((resolve) =>
                setTimeout(() => resolve(`cmd-${sent.length}`)),
            ).finally(() => running.delete(key));
            running.set(key, result);
            return result;
        });

        await Promise.all([
            spectator.component.send('animation', { format: 'webp' }),
            spectator.component.send('animation', { format: 'gif' }),
        ]);

        expect(sent).toEqual([{ format: 'webp' }, { format: 'gif' }]);
    });

    it('should show the level of the driver when no call waits', async () => {
        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        let release = () => {};
        call.mockImplementation(
            () => new Promise((resolve) => (release = () => resolve(null))),
        );
        const changed = spectator.component.setLevel('debug');
        // The call starts after the calls before it
        await new Promise((resolve) => setTimeout(resolve));
        // A new request, such as one for older entries, arrives before the
        // driver applies the level change
        emit('device:DEV-1', { logs: { id: 'req-2', level: 'info' } });
        // The driver applies the level before its call returns
        emit('device:DEV-1', { logs: { id: 'req-2', level: 'debug' } });
        release();
        await changed;

        expect(spectator.component.level()).toBe('debug');
    });

    it('should keep the selected level until the binding shows it', async () => {
        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        call.mockResolvedValue(null);

        // The call returns before the binding shows the new level
        await spectator.component.setLevel('debug');
        expect(spectator.component.level()).toBe('debug');

        emit('device:DEV-1', { logs: { id: 'req-1', level: 'debug' } });
        expect(spectator.component.level()).toBe('debug');
    });

    it('should show the level of the binding after a failed call', async () => {
        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        call.mockRejectedValue(new Error('timeout'));

        await spectator.component.setLevel('debug');

        expect(spectator.component.level()).toBe('info');
    });

    it('should not send waiting calls after the panel closes', async () => {
        let release = () => {};
        call.mockImplementation(
            () => new Promise((resolve) => (release = () => resolve(null))),
        );
        spectator.component.send('status');
        const reload = spectator.component.send('reload');
        await new Promise((resolve) => setTimeout(resolve));
        spectator.fixture.destroy();
        release();
        await reload;

        expect(call.mock.calls.map(([, args]) => args[1])).toEqual(['status']);
    });

    it('should start and stop live logs at the selected level', async () => {
        // Log request calls run in a queue, so they start after a microtask
        const settle = () => new Promise((resolve) => setTimeout(resolve));
        spectator.click('[start-logs]');
        await settle();
        expect(call).toHaveBeenCalledWith('request_logs', [
            'DEV-1',
            'info',
            { history: 1000 },
        ]);

        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        await spectator.component.setLevel('debug');
        expect(call).toHaveBeenCalledWith('set_level', ['DEV-1', 'debug']);

        spectator.click('[stop-logs]');
        await settle();
        expect(call).toHaveBeenCalledWith('stop_logs', ['DEV-1']);
    });

    it('should leave out bad values from the driver', () => {
        // `DatePipe` throws for a time that is not a date
        emit('logs:DEV-1', {
            device: { id: 'DEV-1', started_at: 'yesterday' },
            entries: [{ seq: 4 }, ...logs.entries],
        });
        emit('results:DEV-1', [
            { id: 'cmd-1', type: 'status', received_at: 1 },
            {
                id: 'cmd-3',
                type: 'status',
                received_at: 'soon',
                result: { ok: true },
            },
            {
                id: 'cmd-2',
                type: 'status',
                received_at: 2,
                result: { ok: false, error: 'Timed out' },
            },
        ]);

        expect(spectator.queryAll('[logs] ol li')).toHaveLength(3);
        expect(spectator.component.device()).toBeNull();
        expect(spectator.component.shown_results().map((_) => _.id)).toEqual([
            'cmd-2',
        ]);
        expect(spectator.query('[results]')?.textContent).toContain(
            'Timed out',
        );
    });

    it('should show a snapshot result as an image of its upload', () => {
        const result: RemoteDebugCommandResult = {
            id: 'cmd-1',
            type: 'snapshot',
            received_at: 1,
            result: {
                ok: true,
                data: {
                    mime: 'image/webp',
                    width: 1280,
                    height: 800,
                    frames: 1,
                    duration: 0,
                    bytes: 20_480,
                    upload_id: 'upload-1',
                },
            },
        };
        emit('results:DEV-1', [result]);

        expect(
            spectator.component.mediaUrl(spectator.component.media(result)!),
        ).toBe('/api/engine/v2/uploads/upload-1/url');
        expect(spectator.query('[results] img')).toBeTruthy();
        expect(spectator.query('[results]')?.textContent).toContain('20 KB');
    });
});
