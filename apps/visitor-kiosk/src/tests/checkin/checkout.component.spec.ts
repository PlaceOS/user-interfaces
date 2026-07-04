import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
}));

import * as common_mod from '@placeos/common';
import { OrganisationService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { CheckoutComponent } from '../../app/checkin/checkout.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckoutComponent', () => {
    let spectator: SpectatorRouting<CheckoutComponent>;
    const createComponent = createRoutingFactory({
        component: CheckoutComponent,
        detectChanges: false,
        declarations: [mockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: {
                    event: signal<any>({ id: 'booking-1' }),
                    checkinGuest: jest.fn(async () => null),
                },
            },
            MockProvider(OrganisationService, {
                waitUntilInitialised: async () => null,
            } as any),
        ],
    });

    beforeEach(() => {
        (common_mod.notifySuccess as jest.Mock).mockClear();
        spectator = createComponent();
        spectator.inject(CheckinStateService).event.set({ id: 'booking-1' });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('redirects to checkin when there is no event', async () => {
            spectator.inject(CheckinStateService).event.set(null);
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
            ]);
        });

        it('stays on the page when an event is present', async () => {
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        });
    });

    describe('checkout', () => {
        it('checks out the guest and returns to welcome on success', async () => {
            const state = spectator.inject(CheckinStateService);
            await spectator.component.checkout();
            expect(state.checkinGuest).toHaveBeenCalledWith(false);
            expect(spectator.component.loading()).toBe(false);
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/welcome',
            ]);
            expect(common_mod.notifySuccess).toHaveBeenCalled();
        });

        it('does not navigate when checkout fails', async () => {
            const state = spectator.inject(CheckinStateService);
            (state.checkinGuest as jest.Mock).mockRejectedValueOnce(
                new Error('failed'),
            );
            await spectator.component.checkout();
            expect(spectator.component.loading()).toBe(false);
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
            expect(common_mod.notifySuccess).not.toHaveBeenCalled();
        });
    });

    describe('template interactions', () => {
        it('checks out the guest when the checkout button is clicked', async () => {
            await spectator.component.ngOnInit();
            spectator.detectChanges();
            await spectator.fixture.whenStable();
            spectator.click('button[btn]');
            expect(
                spectator.inject(CheckinStateService).checkinGuest,
            ).toHaveBeenCalledWith(false);
        });
    });
});
