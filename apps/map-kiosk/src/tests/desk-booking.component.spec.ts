import { fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { DeskBookingComponent } from '../app/desk-booking.component';
import { FooterMenuComponent } from '../app/footer-menu.component';

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
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should reset to map after time', fakeAsync(() => {
        const router = spectator.inject(Router);
        spectator.component.countdown_time.set(5);
        spectator.component.resetCountdown();
        expect(router.navigate).not.toHaveBeenCalled();
        tick(5);
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
    }));
});
