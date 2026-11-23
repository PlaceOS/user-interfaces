import {
    formatBytes,
    remoteDebugResultView,
    remoteDebugStatusRows,
} from '../lib/remote-debug-result-view';

describe('remoteDebugStatusRows', () => {
    const status = {
        device_time: 200_000,
        timezone: 'Australia/Sydney',
        online: true,
        websocket: false,
        visible: true,
        screen: { width: 1920, height: 1080, pixel_ratio: 1 },
        memory: { used: 900, limit: 1000 },
        storage: { usage: 10, quota: 1000 },
        setting_overrides: [],
        log_counts: { debug: 4, info: 2, warn: 0, error: 1 },
    };
    const row = (
        rows: ReturnType<typeof remoteDebugStatusRows>,
        label: string,
    ) => rows?.find((_) => _.label === label);

    it('should mark the values that can be a problem', () => {
        // The device clock is 2 minutes ahead of the driver
        const rows = remoteDebugStatusRows(status, 80_000);

        expect(row(rows, 'Clock')).toEqual({
            label: 'Clock',
            value: '2 min ahead of the driver, Australia/Sydney',
            warn: true,
        });
        expect(row(rows, 'Connection')?.warn).toBe(true);
        expect(row(rows, 'Memory')).toMatchObject({
            value: '900 B of 1000 B (90%)',
            warn: true,
        });
        expect(row(rows, 'Storage')?.warn).toBe(false);
        expect(row(rows, 'Logs since load')).toMatchObject({
            value: '1 error, 2 info, 4 debug',
            warn: true,
        });
        expect(row(rows, 'Setting overrides')).toMatchObject({
            value: 'None',
            warn: false,
        });
    });

    it('should leave out fields with bad values', () => {
        const rows = remoteDebugStatusRows(
            { device_time: 1000, screen: 'big', memory: { used: 'a' } },
            1000,
        );

        expect(rows?.map((_) => _.label)).toEqual(['Clock']);
        expect(rows?.[0].value).toBe('In sync with the driver');
        expect(remoteDebugStatusRows({ online: true }, 1000)).toBeNull();
    });
});

describe('remoteDebugResultView', () => {
    it('should show storage items as a list, and other data as JSON', () => {
        const result = (type: 'storage' | 'settings', data: unknown) =>
            remoteDebugResultView({
                id: 'cmd-1',
                type,
                received_at: 1,
                result: { ok: true, data },
            });

        expect(
            result('storage', [{ key: 'mock', length: 4 }, { key: 1 }]),
        ).toEqual({ kind: 'storage', items: [{ key: 'mock', length: 4 }] });
        expect(result('settings', { 'app.title': 'Lobby' }).kind).toBe('data');
        expect(result('settings', undefined).kind).toBe('done');
    });
});

describe('formatBytes', () => {
    it('should show bytes with a unit', () => {
        expect(formatBytes(512)).toBe('512 B');
        expect(formatBytes(20_480)).toBe('20 KB');
        expect(formatBytes(1.5 * 1024 * 1024)).toBe('1.5 MB');
    });
});
