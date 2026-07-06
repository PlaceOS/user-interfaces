import { Router } from '@angular/router';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/vitest';
import { SettingsService, setCurrentUser, StaffUser } from '@placeos/common';
import { signal } from '@angular/core';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ParkingStateService } from '../../app/parking/parking-state.service';
import { ParkingTopbarComponent } from '../../app/parking/parking-topbar.component';
import { ParkingComponent } from '../../app/parking/parking.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('ParkingComponent', () => {
    let spectator: SpectatorRouting<ParkingComponent>;
    let settings_map: Record<string, any>;

    const createComponent = createRoutingFactory({
        component: ParkingComponent,
        providers: [
            MockProvider(ParkingStateService, {
                levels: signal([]),
                org_initialised: signal(true),
                startPolling: vi.fn(),
                setOptions: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => settings_map[name]),
            }),
        ],
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(ParkingTopbarComponent),
        ],
    });

    beforeEach(() => {
        settings_map = {
            'app.parking.show_requests': true,
            'app.parking.hide_users': false,
            'app.parking.hide_vehicles': false,
            'app.parking.hide_users_and_vehicles': false,
            'app.feature_groups': { 'parking-requests': ['parking-team'] },
            'app.admin_group': 'admin',
        };
        // currentUser() is a workspace-lib fn (not spyable under the bundling
        // builder); seed the real user store instead.
        setCurrentUser(new StaffUser({ groups: ['staff'] } as any));
        spectator = createComponent();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        setCurrentUser(new StaffUser({ groups: ['staff'] } as any));
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should hide requests from users outside the configured group', () => {
        expect(spectator.component.can_view_requests).toBe(false);
    });

    it('should allow admins to view requests', () => {
        setCurrentUser(new StaffUser({ groups: ['admin'] } as any));

        expect(spectator.component.can_view_requests).toBe(true);
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
