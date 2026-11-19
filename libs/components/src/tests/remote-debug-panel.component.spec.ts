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

    it('should start and stop live logs at the selected level', async () => {
        spectator.click('[start-logs]');
        expect(call).toHaveBeenCalledWith('request_logs', [
            'DEV-1',
            'info',
            { history: 1000 },
        ]);

        emit('device:DEV-1', { logs: { id: 'req-1', level: 'info' } });
        await spectator.component.setLevel('debug');
        expect(call).toHaveBeenCalledWith('set_level', ['DEV-1', 'debug']);

        spectator.click('[stop-logs]');
        expect(call).toHaveBeenCalledWith('stop_logs', ['DEV-1']);
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
