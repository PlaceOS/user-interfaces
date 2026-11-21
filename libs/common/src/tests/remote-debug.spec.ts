import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import * as ts_client from '@placeos/ts-client';

import { deviceId } from '../lib/device-id';
import { OrganisationService } from '../lib/org/organisation.service';
import {
    MAX_REMOTE_LOG_BUFFER_BYTES,
    MAX_REMOTE_LOG_QUEUE_BYTES,
    REMOTE_DEBUG_MEMORY_BYTES,
    REMOTE_DEBUG_UPLOAD,
    RemoteDebugCommand,
    RemoteDebugService,
    RemoteLogEntry,
    RemoteLogRequest,
    SCREEN_CAPTURE,
} from '../lib/remote-debug';
import { MAX_CAPTURE_BYTES } from '../lib/screen-capture';
import { SettingsService } from '../lib/settings.service';
import { UploadsService } from '../lib/uploads.service';

vi.mock('@placeos/ts-client', { spy: true });

/** RemoteDebug driver module whose device binding the test sets */
function fakeModule() {
    let listener: ((value: unknown) => void) | undefined;
    const execute = vi.fn((_method: string, _args?: unknown[]) =>
        Promise.resolve(),
    );
    const mod = {
        id: 'RemoteDebug_1',
        name: 'RemoteDebug',
        index: 1,
        system: { id: 'sys-debug' },
        execute,
        variable: vi.fn((_name: string) => ({
            bindThenSubscribe: (next: (value: unknown) => void) => {
                listener = next;
                return () => (listener = undefined);
            },
        })),
    };
    const emit = (value: unknown) => listener?.(value);
    return {
        mod,
        execute,
        emit,
        emitLogs: (logs: RemoteLogRequest) => emit({ logs }),
        emitCommands: (commands: RemoteDebugCommand[]) => emit({ commands }),
    };
}

/** Messages of the entries in each `post_logs` call */
function sentMessages(execute: ReturnType<typeof fakeModule>['execute']) {
    return execute.mock.calls
        .filter(([method]) => method === 'post_logs')
        .map(([, args]) =>
            (args![2] as RemoteLogEntry[]).map((_) => _.message),
        );
}

/** Results of the `command_result` calls, by command ID */
function sentResults(execute: ReturnType<typeof fakeModule>['execute']) {
    return Object.fromEntries(
        execute.mock.calls
            .filter(([method]) => method === 'command_result')
            .map(([, args]) => [args![1], args![2]]),
    );
}

describe('RemoteDebugService', () => {
    const methods = ['log', 'debug', 'info', 'warn', 'error'] as const;
    let originals: Record<string, Console[(typeof methods)[number]]>;
    let driver: ReturnType<typeof fakeModule>;
    let org: {
        initialised: ReturnType<typeof signal<boolean>>;
        organisation: { id: string } | undefined;
    };
    let service: RemoteDebugService;
    const upload = vi.fn(async (_file: File) => 'upload-1');
    const settings: Record<string, unknown> = {
        'app.name': 'Booking Panel',
        'app.title': 'Panel',
        'app.maps.access_token': 'secret-1',
        'app.maps': {
            access_token: 'secret-1',
            keys: { google: 'k1' },
            zoom: 3,
        },
        'app.maps.keys.google': 'k1',
    };

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
        originals = Object.fromEntries(methods.map((_) => [_, console[_]]));
        for (const method of methods) console[method] = vi.fn();
        driver = fakeModule();
        org = { initialised: signal(false), organisation: { id: 'org-1' } };
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: { remote_debug: { id: 'sys-debug' } },
        } as never);
        vi.mocked(ts_client.getModule).mockReturnValue(driver.mod as never);
        TestBed.configureTestingModule({
            providers: [
                provideRouter([{ path: 'bootstrap', children: [] }]),
                // Drawing the page needs a real browser. The encoders have their own tests
                {
                    provide: SCREEN_CAPTURE,
                    useValue: async () => ({
                        captureSnapshot: async (width: number) => ({
                            mime: 'image/webp' as const,
                            bytes: new Uint8Array(300_000),
                            width,
                            height: 720,
                            frames: 1,
                            duration: 0,
                        }),
                        captureAnimation: vi.fn(),
                        MAX_MEDIA_BYTES: 4 * 1024 * 1024,
                    }),
                },
                { provide: REMOTE_DEBUG_UPLOAD, useValue: upload },
                { provide: OrganisationService, useValue: org },
                {
                    provide: SettingsService,
                    useValue: {
                        get: (key: string) => settings[key],
                        debug_overrides: signal({ debug: true }),
                    },
                },
            ],
        });
        service = TestBed.inject(RemoteDebugService);
    });

    afterEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        for (const method of methods) console[method] = originals[method];
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    async function connect() {
        org.initialised.set(true);
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(0);
    }

    it('should read the binding of the organisation zone', async () => {
        await connect();

        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'org-1',
            'bindings',
        );
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-debug',
            'RemoteDebug',
        );
    });

    it('should keep capture and read the bindings again after a failed read', async () => {
        vi.mocked(ts_client.showMetadata).mockRejectedValueOnce(
            new Error('offline'),
        );
        await connect();
        console.info('while offline');
        expect(ts_client.getModule).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.getModule).toHaveBeenCalledWith(
            'sys-debug',
            'RemoteDebug',
        );
        expect(service.entries.map((_) => _.message)).toContain(
            'while offline',
        );
    });

    it('should use the organisation zone of the authority on a limited start', async () => {
        org.organisation = undefined;
        // The authority is not available yet after an offline start
        vi.mocked(ts_client.authority).mockReturnValue(undefined as never);
        await connect();
        expect(ts_client.showMetadata).not.toHaveBeenCalled();

        vi.mocked(ts_client.authority).mockReturnValue({
            config: { org_zone: 'org-2' },
        } as never);
        await vi.advanceTimersByTimeAsync(60_000);

        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'org-2',
            'bindings',
        );
    });

    it('should register a fixed device, then each 15 minutes', async () => {
        vi.mocked(ts_client.isFixedDevice).mockReturnValue(true);
        vi.mocked(ts_client.is_connected).mockReturnValue(true);
        const registers = () =>
            driver.execute.mock.calls.filter(([m]) => m === 'register');
        await connect();
        // The first call is in a random wait of 1 minute maximum
        await vi.advanceTimersByTimeAsync(60_000);
        expect(registers()).toHaveLength(1);
        expect(registers()[0][1]).toEqual([
            expect.objectContaining({ id: deviceId() }),
        ]);

        await vi.advanceTimersByTimeAsync(15 * 60_000);

        expect(registers()).toHaveLength(2);
    });

    it('should not register while the websocket is down', async () => {
        vi.mocked(ts_client.isFixedDevice).mockReturnValue(true);
        vi.mocked(ts_client.is_connected).mockReturnValue(false);
        await connect();
        await vi.advanceTimersByTimeAsync(5 * 60_000);
        expect(driver.execute).not.toHaveBeenCalled();

        // After the reconnect, the next try is in a random wait of 1 minute maximum
        vi.mocked(ts_client.is_connected).mockReturnValue(true);
        await vi.advanceTimersByTimeAsync(60_000);

        expect(
            driver.execute.mock.calls.filter(([m]) => m === 'register'),
        ).toHaveLength(1);
    });

    it('should not register a device that is not fixed', async () => {
        vi.mocked(ts_client.isFixedDevice).mockReturnValue(false);
        await connect();
        await vi.advanceTimersByTimeAsync(16 * 60_000);

        expect(driver.execute).not.toHaveBeenCalled();
    });

    it('should stop capture when the organisation has no binding', async () => {
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as never);
        console.info('before init');
        expect(service.entries.length).toBe(1);

        await connect();
        console.info('after init');

        expect(ts_client.getModule).not.toHaveBeenCalled();
        expect(service.entries).toEqual([]);
    });

    it('should send buffered entries at the requested level, then new entries', async () => {
        console.debug('debug line');
        console.warn('startup warning');
        await connect();
        expect(driver.mod.variable).toHaveBeenCalledWith(
            `device:${deviceId()}`,
        );

        driver.emitLogs({ id: 'req-1', level: 'info' });
        await vi.advanceTimersByTimeAsync(0);
        console.info('live line');
        await vi.advanceTimersByTimeAsync(1000);

        expect(driver.execute).toHaveBeenCalledWith(
            'post_logs',
            [
                deviceId(),
                'req-1',
                [expect.objectContaining({ level: 'warn', source: 'console' })],
                expect.objectContaining({ id: deviceId() }),
            ],
            30_000,
        );
        expect(sentMessages(driver.execute)).toEqual([
            ['startup warning'],
            ['live line'],
        ]);
    });

    it('should keep 8,000 entries and send 1,000 at a time', async () => {
        await connect();
        for (let i = 1; i <= 8001; i++) console.info(`line ${i}`);
        expect(service.entries.length).toBe(8000);
        expect(service.entries[0].message).toBe('line 2');

        driver.emitLogs({ id: 'req-1', level: 'info' });
        await vi.advanceTimersByTimeAsync(10_000);
        const newest = sentMessages(driver.execute).flat();
        driver.execute.mockClear();
        driver.emitLogs({ id: 'req-2', level: 'info', before: 7002 });
        await vi.advanceTimersByTimeAsync(10_000);
        const older = sentMessages(driver.execute).flat();

        expect(newest.length).toBe(1000);
        expect([newest[0], newest[999]]).toEqual(['line 7002', 'line 8001']);
        expect(older.length).toBe(1000);
        expect([older[0], older[999]]).toEqual(['line 6002', 'line 7001']);
    });

    it('should not send the ts-client lines of its own calls', async () => {
        await connect();
        driver.execute.mockImplementation(async (method: string) => {
            console.debug(
                `%c[PlaceOS]%c[WS] %c[EXEC](1) sys-debug, RemoteDebug_1, ${method}`,
                'color: #0288D1',
                'color: #009688',
                'color: default',
            );
            console.debug('[PlaceOS][WS] [SUCCESS](1)');
            // The binding change that the call causes
            console.debug(
                `%c[PlaceOS]%c[WS] %c[NOTIFY] sys-debug, RemoteDebug_1, logs:${deviceId()} changed`,
                'color: #0288D1',
                'color: #009688',
                'color: default',
                [],
            );
        });
        console.warn('real warning');
        driver.emitLogs({ id: 'req-1', level: 'debug' });
        await vi.advanceTimersByTimeAsync(3000);

        expect(sentMessages(driver.execute)).toEqual([['real warning']]);
    });

    it('should keep the logs within their memory limit', async () => {
        await connect();
        // 2,000 characters are about 4 KB each, so 8 MB holds about 2,000 entries
        const long = 'x'.repeat(2000);
        for (let i = 1; i <= 3000; i++) console.info(`${i} ${long}`);

        const kept = service.entries;
        const bytes = kept.reduce(
            (sum, _) => sum + _.message.length * 2 + 64,
            0,
        );
        expect(bytes).toBeLessThanOrEqual(MAX_REMOTE_LOG_BUFFER_BYTES);
        expect(kept.length).toBeGreaterThan(2000);
        expect(kept.at(-1)?.message.startsWith('3000 ')).toBe(true);
    });

    it('should fit logs and a capture in the memory budget', () => {
        expect(
            MAX_REMOTE_LOG_BUFFER_BYTES +
                MAX_REMOTE_LOG_QUEUE_BYTES +
                MAX_CAPTURE_BYTES,
        ).toBeLessThanOrEqual(REMOTE_DEBUG_MEMORY_BYTES);
    });

    it('should change the level without sending history again', async () => {
        await connect();
        console.error('old error');
        driver.emitLogs({ id: 'req-1', level: 'error' });
        await vi.advanceTimersByTimeAsync(0);

        driver.emitLogs({ id: 'req-1', level: 'debug' });
        console.debug('new debug line');
        await vi.advanceTimersByTimeAsync(1000);

        expect(sentMessages(driver.execute)).toEqual([
            ['old error'],
            ['new debug line'],
        ]);
    });

    it('should send a failed batch again', async () => {
        await connect();
        driver.execute.mockRejectedValueOnce(new Error('offline'));
        console.warn('warning');
        driver.emitLogs({ id: 'req-1', level: 'warn' });
        await vi.advanceTimersByTimeAsync(1000);

        expect(sentMessages(driver.execute)).toEqual([
            ['warning'],
            ['warning'],
        ]);
    });

    it('should send a full queue in order when a slow call ends', async () => {
        await connect();
        let release = () => {};
        let running = 0;
        let most = 0;
        driver.execute.mockImplementation(async (method: string) => {
            if (method !== 'post_logs') return;
            most = Math.max(most, ++running);
            // The first call stays open until the test releases it
            if (driver.execute.mock.calls.length === 1) {
                await new Promise<void>((resolve) => (release = resolve));
            }
            running--;
        });
        driver.emitLogs({ id: 'req-1', level: 'info', history: 0 });
        console.info('first');
        await vi.advanceTimersByTimeAsync(1000);
        for (let i = 1; i <= 1500; i++) console.info(`line ${i}`);
        await vi.advanceTimersByTimeAsync(5000);
        release();
        await vi.advanceTimersByTimeAsync(15_000);

        const batches = sentMessages(driver.execute);
        expect(most).toBe(1);
        expect(batches.every((_) => _.length <= 100)).toBe(true);
        // The queue keeps 1,000 entries, so the oldest 500 lines are removed
        const lines = batches.slice(1).flat();
        expect([lines.length, lines[0], lines.at(-1)]).toEqual([
            1000,
            'line 501',
            'line 1500',
        ]);
    });

    it('should stop at the end of the duration and not apply the request again', async () => {
        await connect();
        driver.emitLogs({
            id: 'req-1',
            level: 'info',
            history: 0,
            duration: 5000,
        });
        await vi.advanceTimersByTimeAsync(5000);
        console.info('after end');
        driver.emitLogs({ id: 'req-1', level: 'info' });
        await vi.advanceTimersByTimeAsync(1000);

        expect(service.request).toBeNull();
        expect(driver.execute).not.toHaveBeenCalled();
    });

    it('should run each command one time and send its result', async () => {
        await connect();
        console.error('failed to load');
        const commands: RemoteDebugCommand[] = [
            { id: 'cmd-1', type: 'status' },
            { id: 'cmd-2', type: 'settings', keys: ['app.title', 'missing'] },
            { id: 'cmd-3', type: 'navigate', path: '/bootstrap' },
        ];
        driver.emitCommands(commands);
        await vi.advanceTimersByTimeAsync(0);
        driver.emitCommands(commands);
        await vi.advanceTimersByTimeAsync(0);

        const results = sentResults(driver.execute);
        expect(
            driver.execute.mock.calls.filter(([m]) => m === 'command_result'),
        ).toHaveLength(3);
        expect(results['cmd-1']).toMatchObject({
            ok: true,
            data: {
                device: { id: deviceId(), app: 'Booking Panel' },
                setting_overrides: ['debug'],
                log_counts: { error: 1 },
                last_error: { message: 'failed to load' },
            },
        });
        expect(results['cmd-2']).toEqual({
            ok: true,
            data: { 'app.title': 'Panel', missing: null },
        });
        expect(results['cmd-3']).toEqual({
            ok: true,
            data: { url: '/bootstrap' },
        });
    });

    it('should leave out the values of credential settings', async () => {
        await connect();
        driver.emitCommands([
            {
                id: 'cmd-1',
                type: 'settings',
                keys: [
                    'app.maps.access_token',
                    'app.maps',
                    'app.maps.keys.google',
                ],
            },
        ]);
        await vi.advanceTimersByTimeAsync(0);

        expect(sentResults(driver.execute)['cmd-1'].data).toEqual({
            'app.maps.access_token': '[Filtered]',
            'app.maps': {
                access_token: '[Filtered]',
                keys: '[Filtered]',
                zoom: 3,
            },
            'app.maps.keys.google': '[Filtered]',
        });
    });

    it('should clear the caches and send the counts in the result', async () => {
        await connect();
        const deleted: string[] = [];
        const unregister = vi.fn(async () => true);
        vi.stubGlobal('caches', {
            keys: async () => ['app-1', 'app-2'],
            delete: async (name: string) => deleted.push(name) > 0,
        });
        Object.defineProperty(navigator, 'serviceWorker', {
            configurable: true,
            value: { getRegistrations: async () => [{ unregister }] },
        });
        let sent = () => {};
        driver.execute.mockImplementation(
            () => new Promise<void>((resolve) => (sent = resolve)),
        );
        driver.emitCommands([{ id: 'cmd-1', type: 'clear_cache' }]);
        await vi.advanceTimersByTimeAsync(0);

        // The caches are clear while the result is on its way
        expect(deleted).toEqual(['app-1', 'app-2']);
        expect(unregister).toHaveBeenCalled();
        expect(sentResults(driver.execute)['cmd-1']).toEqual({
            ok: true,
            data: { caches: 2, workers: 1 },
        });
        sent();
        vi.unstubAllGlobals();
        delete (navigator as { serviceWorker?: unknown }).serviceWorker;
    });

    it('should not reload when it cannot save the command ID', async () => {
        await connect();
        vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
            throw new Error('Quota exceeded');
        });
        driver.emitCommands([{ id: 'cmd-1', type: 'clear_cache' }]);
        await vi.advanceTimersByTimeAsync(0);

        // Without the saved ID, the app would run the command after each reload
        expect(sentResults(driver.execute)['cmd-1']).toEqual({
            ok: false,
            error: 'Local storage is not available',
        });
    });

    it('should not run a command that it handled before a reload', async () => {
        localStorage.setItem(
            'PLACEOS.remote_debug.handled_commands',
            JSON.stringify(['cmd-1']),
        );
        await connect();
        driver.emitCommands([
            { id: 'cmd-1', type: 'reload' },
            { id: 'cmd-2', type: 'storage' },
        ]);
        await vi.advanceTimersByTimeAsync(0);

        expect(Object.keys(sentResults(driver.execute))).toEqual(['cmd-2']);
        expect(sentResults(driver.execute)['cmd-2'].data).toContainEqual({
            key: 'PLACEOS.remote_debug.handled_commands',
            length: expect.any(Number),
        });
    });

    it('should upload a snapshot and send the upload ID in its result', async () => {
        await connect();
        driver.emitCommands([{ id: 'cmd-1', type: 'snapshot', width: 5000 }]);
        await vi.advanceTimersByTimeAsync(0);

        const file = upload.mock.calls[0][0];
        expect([file.name, file.type, file.size]).toEqual([
            `remote-debug-${deviceId()}-cmd-1.webp`,
            'image/webp',
            300_000,
        ]);
        // The file does not go through the driver, as PlaceOS logs call arguments
        expect(driver.execute.mock.calls.map(([method]) => method)).toEqual([
            'command_result',
        ]);
        // The width is limited to 1,920
        expect(sentResults(driver.execute)['cmd-1']).toEqual({
            ok: true,
            data: {
                mime: 'image/webp',
                width: 1920,
                height: 720,
                frames: 1,
                duration: 0,
                bytes: 300_000,
                upload_id: 'upload-1',
            },
        });
    });

    it('should ignore commands that are not valid', async () => {
        await connect();
        driver.emit({
            commands: [
                { id: 'cmd-1', type: 'navigate', path: 'https://evil.test' },
                { id: 'cmd-2', type: 'run_script' },
                { id: 'cmd-3', type: 'animation', format: 'mp4' },
                { type: 'status' },
            ],
        });
        await vi.advanceTimersByTimeAsync(0);

        expect(driver.execute).not.toHaveBeenCalled();
    });

    it('should capture uncaught errors and promise rejections', () => {
        window.dispatchEvent(
            new ErrorEvent('error', { error: new TypeError('bad value') }),
        );
        const rejection = new Event(
            'unhandledrejection',
        ) as PromiseRejectionEvent;
        Object.defineProperty(rejection, 'reason', { value: 'timeout' });
        window.dispatchEvent(rejection);

        expect(
            service.entries.map((_) => [_.source, _.message.split('\n')[0]]),
        ).toEqual([
            ['error', 'TypeError: bad value'],
            ['rejection', 'Unhandled rejection: timeout'],
        ]);
    });
});

describe('REMOTE_DEBUG_UPLOAD', () => {
    it('should upload a capture that only support users can read', async () => {
        const uploadFileToCompletion = vi.fn(async () => 'upload-1');
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: UploadsService,
                    useValue: { uploadFileToCompletion },
                },
            ],
        });
        const file = new File(['x'], 'remote-debug.webp');

        const id = await TestBed.inject(REMOTE_DEBUG_UPLOAD)(file);

        expect(id).toBe('upload-1');
        expect(uploadFileToCompletion).toHaveBeenCalledWith(
            file,
            false,
            'support',
        );
        TestBed.resetTestingModule();
    });
});
