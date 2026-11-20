import { RemoteDebugSeenDevice } from '@placeos/common';

import { filterRemoteDebugDevices } from '../../app/remote-debug/remote-debug.component';

const device = (
    id: string,
    app: string,
    url: string,
): RemoteDebugSeenDevice => ({
    id,
    app,
    url,
    version: '1',
    build: 'a',
    user_agent: '',
    started_at: 0,
    last_seen: 0,
});

describe('filterRemoteDebugDevices', () => {
    const devices = [
        device(
            'DEV-AAA',
            'Booking Panel',
            'https://p.test/booking-panel/#/panel/sys-1',
        ),
        device('DEV-BBB', 'Signage', 'https://p.test/signage/#/signage/sys-2'),
    ];

    it('should match the ID, app or address, ignoring case', () => {
        const ids = (query: string) =>
            filterRemoteDebugDevices(devices, query).map((_) => _.id);

        expect(ids('')).toEqual(['DEV-AAA', 'DEV-BBB']);
        expect(ids('dev-bbb')).toEqual(['DEV-BBB']);
        expect(ids('booking')).toEqual(['DEV-AAA']);
        expect(ids('sys-2')).toEqual(['DEV-BBB']);
        expect(ids('kiosk')).toEqual([]);
    });
});
