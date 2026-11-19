import { RemoteDebugSeenDevice, RemoteSetupDevice } from '@placeos/common';

import { displayDeviceIds } from '../../app/displays/display-admin.component';

const debugDevice = (id: string, url: string, last_seen: number) =>
    ({
        id,
        app: 'signage',
        version: '1',
        build: 'a',
        url,
        user_agent: '',
        started_at: 0,
        last_seen,
    }) satisfies RemoteDebugSeenDevice;

const setupDevice = (
    id: string,
    system_id: string,
    last_seen: number,
    app: RemoteSetupDevice['app'] = 'signage',
): RemoteSetupDevice => ({ id, app, config: { system_id }, last_seen });

describe('displayDeviceIds', () => {
    it('should list the devices that show a display, newest first', () => {
        const ids = displayDeviceIds(
            'sys-1',
            [
                debugDevice(
                    'DEV-A',
                    'https://p.test/signage/#/signage/sys-1',
                    30,
                ),
                debugDevice(
                    'DEV-B',
                    'https://p.test/signage/#/signage/sys-1?debug=true',
                    10,
                ),
                // Another display that starts with the same ID
                debugDevice(
                    'DEV-C',
                    'https://p.test/signage/#/signage/sys-10',
                    50,
                ),
            ],
            [
                setupDevice('DEV-D', 'sys-1', 20),
                setupDevice('DEV-E', 'sys-2', 40),
                // A booking panel of a room with the same system ID
                setupDevice('DEV-F', 'sys-1', 60, 'booking-panel'),
                // Known to both drivers: the newest time counts
                setupDevice('DEV-B', 'sys-1', 5),
            ],
        );

        expect(ids).toEqual(['DEV-A', 'DEV-D', 'DEV-B']);
    });
});
