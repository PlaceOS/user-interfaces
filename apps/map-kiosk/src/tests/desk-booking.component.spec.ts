import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { DeskBookingComponent } from '../app/desk-booking.component';
import { FooterMenuComponent } from '../app/footer-menu.component';

import { of } from 'rxjs';

import * as common_mod from '@placeos/common';

jest.mock('@placeos/common', () => {
    return {
        __esModule: true, //    <----- this __esModule: true is important
        ...jest.requireActual('@placeos/common'),
    };
});

describe('DeskBookingComponent', () => {
    let spectator: Spectator<DeskBookingComponent>;
    const createComponent = createComponentFactory({
        component: DeskBookingComponent,
        declarations: [MockComponent(FooterMenuComponent)],
        providers: [
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: Router, useValue: { navigate: jest.fn() } },
        ],
    });

    beforeEach(() => {
        Object.defineProperty(common_mod, 'current_user', {
            get: () => of({} as any),
        });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should reset to map after time', () => {
        jest.useFakeTimers();
        const router = spectator.inject(Router);
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(() => 5);
        spectator.component.resetCountdown();
        expect(router.navigate).not.toHaveBeenCalled();
        jest.runOnlyPendingTimers();
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
        jest.useRealTimers();
    });
});
