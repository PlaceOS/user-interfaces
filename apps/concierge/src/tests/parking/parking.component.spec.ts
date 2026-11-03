import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    SpectatorRouting,
    createRoutingFactory,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ParkingStateService } from '../../app/parking/parking-state.service';
import { ParkingTopbarComponent } from '../../app/parking/parking-topbar.component';
import { ParkingComponent } from '../../app/parking/parking.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('ParkingComponent', () => {
    let spectator: SpectatorRouting<ParkingComponent>;
    let settings_map: Record<string, any>;

    const createComponent = createRoutingFactory({
        component: ParkingComponent,
        providers: [
            MockProvider(ParkingStateService, {
                levels: signal([]),
                org_initialised: signal(true),
                org_refreshing: signal(false),
                startPolling: vi.fn(),
                setOptions: vi.fn(),
                can_view_requests: false,
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => settings_map[name]),
            }),
        ],
        declarations: [
            MockComponent(ApplicationSidebarComponent),
            MockComponent(ParkingTopbarComponent),
        ],
    });

    beforeEach(() => {
        settings_map = {
            'app.parking.hide_users': false,
            'app.parking.hide_vehicles': false,
            'app.parking.hide_users_and_vehicles': false,
        };
        spectator = createComponent();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should not show the no parking floors message while org data refreshes', () => {
        const state = spectator.inject(ParkingStateService) as any;
        const overlay = () => spectator.query('main > .absolute.inset-0.z-50');

        state.org_refreshing.set(true);
        spectator.detectChanges();
        expect(overlay()).toBeNull();

        state.org_refreshing.set(false);
        spectator.detectChanges();
        expect(overlay()).not.toBeNull();
    });

    it('should redirect blocked users from the requests route', () => {
        const router = spectator.inject(Router);
        const state = spectator.inject(ParkingStateService);
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        Object.defineProperty(router, 'url', {
            value: '/book/parking/events/requests',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(state.setOptions).toHaveBeenCalledWith({
            request_filter: 'bookings',
        });
        expect(spectator.component.view()).toBe('list');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'parking', 'events', 'list'],
            { replaceUrl: true },
        );
    });

    it('should redirect hidden user management tab to spaces', () => {
        const router = spectator.inject(Router);
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        settings_map['app.parking.hide_users'] = true;
        Object.defineProperty(router, 'url', {
            value: '/book/parking/manage/users',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(spectator.component.view()).toBe('spaces');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'parking', 'manage', 'spaces'],
            { replaceUrl: true },
        );
    });

    it('should redirect hidden vehicle management tab to spaces', () => {
        const router = spectator.inject(Router);
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        settings_map['app.parking.hide_vehicles'] = true;
        Object.defineProperty(router, 'url', {
            value: '/book/parking/manage/fleet',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(spectator.component.view()).toBe('spaces');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'parking', 'manage', 'spaces'],
            { replaceUrl: true },
        );
    });

    it('should keep the combined user and vehicle tab setting working', () => {
        const router = spectator.inject(Router);
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        settings_map['app.parking.hide_users_and_vehicles'] = true;
        Object.defineProperty(router, 'url', {
            value: '/book/parking/manage/fleet',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(spectator.component.view()).toBe('spaces');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'parking', 'manage', 'spaces'],
            { replaceUrl: true },
        );
    });
});
