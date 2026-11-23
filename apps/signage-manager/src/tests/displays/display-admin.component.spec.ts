import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { RemoteDebugSeenDevice, RemoteSetupDevice } from '@placeos/common';
import {
    RemoteDebugPanelComponent,
    RemoteDebugViewService,
} from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import {
    DisplayAdminComponent,
    displayDeviceIds,
} from '../../app/displays/display-admin.component';

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
                // The player route of a display with a template
                debugDevice(
                    'DEV-G',
                    'https://p.test/signage/#/template/tpl-1/sys-1',
                    25,
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

        expect(ids).toEqual(['DEV-A', 'DEV-G', 'DEV-D', 'DEV-B']);
    });
});

describe('DisplayAdminComponent', () => {
    let spectator: Spectator<DisplayAdminComponent>;
    const devices = signal<RemoteDebugSeenDevice[]>([]);
    const createComponent = createComponentFactory({
        component: DisplayAdminComponent,
        providers: [
            {
                provide: RemoteDebugViewService,
                useValue: {
                    state: signal('ready'),
                    devices,
                    now: signal(Date.now()),
                },
            },
        ],
        overrideComponents: [
            [
                DisplayAdminComponent,
                {
                    remove: { imports: [RemoteDebugPanelComponent] },
                    add: {
                        imports: [MockComponent(RemoteDebugPanelComponent)],
                    },
                },
            ],
        ],
        detectChanges: false,
    });

    it('should keep the selected device when a heartbeat changes the order', () => {
        const url = 'https://p.test/signage/#/signage/sys-1';
        devices.set([
            debugDevice('DEV-A', url, 20),
            debugDevice('DEV-B', url, 10),
        ]);
        spectator = createComponent({ props: { display_id: 'sys-1' } });
        spectator.detectChanges();
        expect(spectator.component.selected()).toBe('DEV-A');

        devices.set([
            debugDevice('DEV-A', url, 20),
            debugDevice('DEV-B', url, 30),
        ]);
        spectator.detectChanges();

        expect(spectator.component.device_ids()).toEqual(['DEV-B', 'DEV-A']);
        expect(spectator.component.selected()).toBe('DEV-A');
    });
});
