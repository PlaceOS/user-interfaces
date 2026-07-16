import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';

import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { CheckoutComponent } from '../../app/checkin/checkout.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// Workspace modules cannot be intercepted by the native unit-test builder, so
// instead of mocking `notifySuccess` we spy on the snackbar outlet it routes to
// (`panelClass: ['success']`).
function createSnackbarSpy() {
    return {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
}

describe('CheckoutComponent', () => {
    let spectator: SpectatorRouting<CheckoutComponent>;
    let snackbar: ReturnType<typeof createSnackbarSpy>;
    const createComponent = createRoutingFactory({
        component: CheckoutComponent,
        detectChanges: false,
        declarations: [mockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: {
                    event: signal<any>({ id: 'booking-1' }),
                    checkinGuest: vi.fn(async () => null),
                },
            },
            MockProvider(OrganisationService, {
                waitUntilInitialised: async () => null,
            } as any),
        ],
    });

    beforeEach(() => {
        snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        spectator = createComponent();
        (spectator.inject(CheckinStateService) as any).event.set({ id: 'booking-1' });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('redirects to checkout when there is no event', async () => {
            (spectator.inject(CheckinStateService) as any).event.set(null);
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkout',
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
            expect(snackbar.open).toHaveBeenCalledWith(
                expect.anything(),
                expect.anything(),
                expect.objectContaining({ panelClass: ['success'] }),
            );
        });

        it('does not navigate when checkout fails', async () => {
            const state = spectator.inject(CheckinStateService);
            (state.checkinGuest as any).mockRejectedValueOnce(
                new Error('failed'),
            );
            await spectator.component.checkout();
            expect(spectator.component.loading()).toBe(false);
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
            expect(snackbar.open).not.toHaveBeenCalled();
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
