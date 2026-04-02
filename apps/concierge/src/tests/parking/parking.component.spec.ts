import { Router } from '@angular/router';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { SettingsService, currentUser } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ParkingStateService } from '../../app/parking/parking-state.service';
import { ParkingTopbarComponent } from '../../app/parking/parking-topbar.component';
import { ParkingComponent } from '../../app/parking/parking.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        currentUser: jest.fn(() => ({ groups: ['staff'] })),
    };
});

describe('ParkingComponent', () => {
    let spectator: SpectatorRouting<ParkingComponent>;
    let settings_map: Record<string, any>;

    const createComponent = createRoutingFactory({
        component: ParkingComponent,
        providers: [
            MockProvider(ParkingStateService, {
                levels: of([]),
                startPolling: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((name: string) => settings_map[name]),
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
            'app.feature_groups': { 'parking-requests': ['parking-team'] },
            'app.admin_group': 'admin',
        };
        (currentUser as jest.Mock).mockReturnValue({
            groups: ['staff'],
        } as any);
        spectator = createComponent();
    });

    afterEach(() => {
        jest.restoreAllMocks();
        (currentUser as jest.Mock).mockReturnValue({
            groups: ['staff'],
        } as any);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should hide requests from users outside the configured group', () => {
        expect(spectator.component.can_view_requests).toBe(false);
    });

    it('should allow admins to view requests', () => {
        (currentUser as jest.Mock).mockReturnValue({
            groups: ['admin'],
        } as any);

        expect(spectator.component.can_view_requests).toBe(true);
    });

    it('should redirect blocked users from the requests route', () => {
        const router = spectator.inject(Router);
        jest.spyOn(router, 'navigate').mockResolvedValue(true);
        Object.defineProperty(router, 'url', {
            value: '/book/parking/events/requests',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(spectator.component.view()).toBe('bookings');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'parking', 'events', 'bookings'],
            { replaceUrl: true },
        );
    });
});
