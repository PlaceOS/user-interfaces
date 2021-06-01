import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { DeskFlowStateService } from 'apps/workplace/src/app/bookings/desk-flow/desk-flow-state.service';
import { DeskFlowListingComponent } from 'apps/workplace/src/app/bookings/desk-flow/desk-flow-listing.component';
import { DeskBookingComponent } from '../app/desk-booking.component';
import { FooterMenuComponent } from '../app/footer-menu.component';

import { of } from 'rxjs';

import * as common_mod from '@placeos/common';

describe('DeskBookingComponent', () => {
    let spectator: Spectator<DeskBookingComponent>;
    const createComponent = createComponentFactory({
        component: DeskBookingComponent,
        declarations: [
            MockComponent(DeskFlowListingComponent),
            MockComponent(FooterMenuComponent),
        ],
        providers: [
            { provide: DeskFlowStateService, useValue: { setHost: jest.fn() } },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: Router, useValue: { navigate: jest.fn() } },
        ],
    });

    beforeEach(() => {
        const spy = jest.spyOn(common_mod, 'current_user', 'get');
        spy.mockImplementation(() => of({} as any));
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should reset to map after time', () => {
        jest.useFakeTimers();
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation(() => 5);
        spectator.component.resetCountdown();
        expect(router.navigate).not.toHaveBeenCalled();
        jest.runOnlyPendingTimers();
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
        jest.useRealTimers();
    });
});
