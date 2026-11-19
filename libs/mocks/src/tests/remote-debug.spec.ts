import {
    RemoteDebugCommandResult,
    RemoteDebugDevice,
    RemoteDebugDeviceState,
    RemoteLogEntry,
    RemoteLogsView,
} from '@placeos/common';
import { mockSystem } from '@placeos/ts-client';

import {
    createRemoteDebugSystem,
    MockRemoteDebugModule,
    REMOTE_DEBUG_MOCK_SYSTEM,
} from '../lib/realtime/remote-debug';

describe('mock RemoteDebug driver', () => {
    const device_id = 'DEV-TEST00000001';
    const device: RemoteDebugDevice = {
        id: device_id,
        app: 'control',
        version: '1.0.0',
        build: 'abc',
        url: 'https://placeos.test/control/',
        user_agent: 'Test',
        started_at: 1000,
    };
    const entry = (seq: number): RemoteLogEntry => ({
        seq,
        timestamp: seq,
        level: 'info',
        source: 'console',
        message: `line ${seq}`,
    });
    let mod: MockRemoteDebugModule;

    beforeEach(() => {
        vi.useFakeTimers();
        createRemoteDebugSystem();
        mod = mockSystem(REMOTE_DEBUG_MOCK_SYSTEM)['RemoteDebug'][0];
    });

    afterEach(() => vi.useRealTimers());

    const state = () => mod[`device:${device_id}`] as RemoteDebugDeviceState;
    const view = () => mod[`logs:${device_id}`] as RemoteLogsView;

    it('should set, change and clear the log request of a device', () => {
        const id = mod.call('request_logs', [
            device_id,
            'info',
            { history: 50 },
        ]);
        expect(state().logs).toEqual({ id, level: 'info', history: 50 });

        mod.call('set_level', [device_id, 'debug']);
        expect(state().logs).toMatchObject({ id, level: 'debug' });

        mod.call('stop_logs', [device_id]);
        expect(state().logs).toBeNull();
    });

    it('should clear the log request when the duration ends', () => {
        mod.call('request_logs', [device_id, 'warn', { duration: 5000 }]);

        vi.advanceTimersByTime(5000);

        expect(state().logs).toBeNull();
    });

    it('should start the duration again when the level changes', () => {
        mod.call('request_logs', [device_id, 'warn', { duration: 5000 }]);
        vi.advanceTimersByTime(4000);
        mod.call('set_level', [device_id, 'debug']);

        vi.advanceTimersByTime(4000);
        expect(state().logs).toMatchObject({ level: 'debug' });
        vi.advanceTimersByTime(1000);
        expect(state().logs).toBeNull();
    });

    it('should keep posted entries once each and start again after a reload', () => {
        const id = mod.call('request_logs', [device_id, 'info']);
        mod.call('post_logs', [device_id, 'old-request', [entry(9)], device]);
        mod.call('post_logs', [device_id, id, [entry(2), entry(1)], device]);
        mod.call('post_logs', [device_id, id, [entry(2), entry(3)], device]);

        expect(view().entries.map((_) => _.seq)).toEqual([1, 2, 3]);

        const reloaded = { ...device, started_at: 2000 };
        mod.call('post_logs', [device_id, id, [entry(1)], reloaded]);

        expect(view()).toEqual({ device: reloaded, entries: [entry(1)] });
        expect(mod.devices[device_id]).toMatchObject({ started_at: 2000 });
    });

    it('should keep the log request when it adds a command, and keep the result', () => {
        const request_id = mod.call('request_logs', [device_id, 'info']);
        const command_id = mod.call('send_command', [
            device_id,
            'settings',
            { keys: ['app.title'] },
        ]);
        expect(state()).toEqual({
            logs: expect.objectContaining({ id: request_id }),
            commands: [
                { id: command_id, type: 'settings', keys: ['app.title'] },
            ],
        });

        const result = { ok: true, data: { 'app.title': 'Panel' } };
        mod.call('command_result', [device_id, command_id, result, device]);

        expect(state().commands).toEqual([]);
        const results = mod[
            `results:${device_id}`
        ] as RemoteDebugCommandResult[];
        expect(results).toEqual([
            {
                id: command_id,
                type: 'settings',
                result,
                received_at: expect.any(Number),
            },
        ]);
    });

    it('should not add commands that are not valid', () => {
        expect(
            mod.call('send_command', [device_id, 'navigate', { path: 'x' }]),
        ).toBeNull();
        expect(mod.call('send_command', [device_id, 'run_script'])).toBeNull();
        expect(state()).toBeFalsy();
    });

    it('should have seeded logs for the remote setup mock devices', () => {
        const seeded = mod['logs:DEV-MOCK0001'] as RemoteLogsView;

        expect(seeded.device?.app).toBe('booking-panel');
        expect(seeded.entries.length).toBeGreaterThan(0);
        expect(mod.devices['DEV-MOCK0001']).toBeDefined();
    });
});
