import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    RemoteDebugSeenDevice,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import {
    RemoteDebugPanelComponent,
    RemoteDebugViewService,
} from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import {
    filterRemoteDebugDevices,
    RemoteDebugComponent,
} from '../../app/remote-debug/remote-debug.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

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

const devices = [
    device(
        'DEV-AAA',
        'Booking Panel',
        'https://p.test/booking-panel/#/panel/sys-1',
    ),
    device('DEV-BBB', 'Signage', 'https://p.test/signage/#/signage/sys-2'),
];

describe('filterRemoteDebugDevices', () => {
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

describe('RemoteDebugComponent', () => {
    let spectator: Spectator<RemoteDebugComponent>;
    let views: number;
    const createComponent = createComponentFactory({
        component: RemoteDebugComponent,
        providers: [
            {
                provide: RemoteDebugViewService,
                useFactory: () => {
                    views++;
                    return {
                        state: signal('ready'),
                        devices: signal(devices),
                        now: signal(0),
                    };
                },
            },
            MockProvider(ActivatedRoute, {
                queryParamMap: of(convertToParamMap({ device: 'DEV-AAA' })),
            }),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
        overrideComponents: [
            [
                RemoteDebugComponent,
                {
                    remove: {
                        imports: [
                            ApplicationSidebarComponent,
                            RemoteDebugPanelComponent,
                        ],
                    },
                    add: {
                        imports: [
                            MockComponent(ApplicationSidebarComponent),
                            MockComponent(RemoteDebugPanelComponent),
                        ],
                    },
                },
            ],
        ],
        detectChanges: false,
    });

    const open = (groups: string[]) => {
        setCurrentUser(new StaffUser({ id: 'user-1', groups }));
        views = 0;
        spectator = createComponent();
        spectator.detectChanges();
    };

    afterEach(() => setCurrentUser(new StaffUser({ id: 'user-1' })));

    it('should not start the viewer for a user who cannot debug', () => {
        open(['staff']);

        expect(spectator.query('[not-allowed]')).toBeTruthy();
        expect(spectator.query('remote-debug-panel')).toBeNull();
        expect(views).toBe(0);
    });

    it('should open the device of the link for a support user', () => {
        open(['placeos_support']);

        expect(spectator.query('[not-allowed]')).toBeNull();
        // The mock panel has the input as a plain value
        const panel = spectator.query(RemoteDebugPanelComponent) as unknown as {
            device_id: string;
        };
        expect(panel.device_id).toBe('DEV-AAA');
        expect(views).toBe(1);
    });

    it('should open the only device that matches the filter', () => {
        open(['placeos_admin']);
        const router = spectator.inject(Router);

        spectator.component.query.set('signage');
        spectator.detectChanges();
        // The user sees the device before Open goes to it
        expect(spectator.query('[device-count]')).toHaveText(
            'Open shows DEV-BBB.',
        );
        spectator.dispatchFakeEvent('form', 'submit');
        expect(router.navigate).toHaveBeenLastCalledWith([], {
            queryParams: { device: 'DEV-BBB' },
            queryParamsHandling: 'merge',
        });

        // Text that matches more devices only filters the list
        spectator.component.query.set('dev-');
        spectator.detectChanges();
        expect(spectator.query('button[type="submit"]')).toBeDisabled();
        spectator.dispatchFakeEvent('form', 'submit');
        expect(router.navigate).toHaveBeenCalledTimes(1);
    });
});
