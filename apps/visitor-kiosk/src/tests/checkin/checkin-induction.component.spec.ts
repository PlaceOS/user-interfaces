import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';

import {
    OrganisationService,
    setNotifyOutlet,
    settingSignal,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

// Workspace modules cannot be intercepted by the native unit-test builder, so
// instead of mocking `notify*` we spy on the snackbar outlet they route to
// (`panelClass` carries the notification type: info/success/error).
function createSnackbarSpy() {
    return {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
}

import { CheckinInductionComponent } from '../../app/checkin/checkin-induction.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

/** Reset the module-cached setting signals so tests are deterministic */
function resetSettings() {
    settingSignal('induction_enabled', false).set(false);
    settingSignal('induction_details').set(undefined);
    settingSignal('induction_after_details', false).set(false);
    settingSignal('allow_user_photo', false).set(false);
    settingSignal('allow_printing_label').set(undefined);
}

describe('CheckinInductionComponent', () => {
    let spectator: SpectatorRouting<CheckinInductionComponent>;
    let snackbar: ReturnType<typeof createSnackbarSpy>;
    const event = signal<unknown>({ induction: 'pending' });
    let console_error: ReturnType<typeof vi.spyOn>;
    const createComponent = createRoutingFactory({
        component: CheckinInductionComponent,
        detectChanges: false,
        providers: [
            {
                provide: CheckinStateService,
                useValue: {
                    event,
                    declineInduction: vi.fn(async () => null),
                    completeInduction: vi.fn(async () => null),
                    checkinGuest: vi.fn(async () => null),
                    setError: vi.fn(),
                },
            },
            MockProvider(OrganisationService, {
                waitUntilInitialised: async () => null,
            }),
        ],
        imports: [MatCheckboxModule, FormsModule],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        resetSettings();
        spectator = createComponent();
        event.set({
            induction: 'pending',
        });
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        console_error.mockRestore();
    });

    describe('ngOnInit navigation', () => {
        it('only redirects to checkin when there is no event', async () => {
            settingSignal('induction_enabled', false).set(true);
            settingSignal('induction_details').set('Terms and conditions');
            event.set(null);
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledTimes(1);
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
            ]);
        });

        it('redirects to details when induction is disabled', async () => {
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'details',
            ]);
        });

        it('redirects to results when induction runs after details', async () => {
            settingSignal('induction_after_details', false).set(true);
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'results',
            ]);
        });

        it('redirects past induction when it has already been accepted', async () => {
            settingSignal('induction_enabled', false).set(true);
            settingSignal('induction_details').set('Terms and conditions');
            event.set({
                induction: 'accepted',
            });
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'details',
            ]);
        });

        it('stays on the induction when enabled and not yet accepted', async () => {
            settingSignal('induction_enabled', false).set(true);
            settingSignal('induction_details').set('Terms and conditions');
            event.set({
                induction: 'pending',
            });
            await spectator.component.ngOnInit();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        });
    });

    describe('is_enabled', () => {
        it('is only enabled when induction is turned on and has details', () => {
            expect(spectator.component.is_enabled()).toBe(false);
            settingSignal('induction_enabled', false).set(true);
            expect(spectator.component.is_enabled()).toBe(false);
            settingSignal('induction_details').set('Some terms');
            expect(spectator.component.is_enabled()).toBe(true);
        });
    });

    describe('decline', () => {
        it('declines the induction and routes to the error page', async () => {
            const state = spectator.inject(CheckinStateService);
            await spectator.component.decline();
            expect(state.declineInduction).toHaveBeenCalledTimes(1);
            expect(state.setError).toHaveBeenCalledWith(
                'APP.VISITOR_KIOSK.INDUCTION_DECLINED',
            );
            expect(snackbar.open).toHaveBeenCalledWith(
                expect.anything(),
                expect.anything(),
                expect.objectContaining({ panelClass: ['info'] }),
            );
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'error',
            ]);
        });

        it('stays on the induction when declining fails', async () => {
            const state = spectator.inject(CheckinStateService);
            state.declineInduction.mockRejectedValueOnce(new Error('failed'));
            await spectator.component.decline();
            expect(snackbar.open).toHaveBeenCalledWith(
                'Error declining induction',
                'OK',
                expect.objectContaining({ panelClass: ['error'] }),
            );
            expect(state.setError).not.toHaveBeenCalled();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
            expect(spectator.component.loading()).toBe(false);
        });
    });

    describe('continue', () => {
        it('completes the induction and routes to details by default', async () => {
            const state = spectator.inject(CheckinStateService);
            await spectator.component.continue();
            expect(state.completeInduction).toHaveBeenCalledTimes(1);
            expect(snackbar.open).toHaveBeenCalledWith(
                expect.anything(),
                expect.anything(),
                expect.objectContaining({ panelClass: ['success'] }),
            );
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'details',
            ]);
        });

        it('routes to photo when induction runs after details and photos are allowed', async () => {
            settingSignal('induction_after_details', false).set(true);
            settingSignal('allow_user_photo', false).set(true);
            await spectator.component.continue();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'photo',
            ]);
        });

        it('routes to results when induction runs after details without photos', async () => {
            settingSignal('induction_after_details', false).set(true);
            settingSignal('allow_user_photo', false).set(false);
            await spectator.component.continue();
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'results',
            ]);
        });

        it('stays on the induction when accepting fails', async () => {
            settingSignal('induction_after_details', false).set(true);
            const state = spectator.inject(CheckinStateService);
            state.completeInduction.mockRejectedValueOnce(new Error('failed'));
            await spectator.component.continue();
            expect(snackbar.open).toHaveBeenCalledWith(
                'Error completing induction',
                'OK',
                expect.objectContaining({ panelClass: ['error'] }),
            );
            expect(state.checkinGuest).not.toHaveBeenCalled();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
            expect(spectator.component.loading()).toBe(false);
        });

        it('stays on the induction when check-in after details fails', async () => {
            settingSignal('induction_after_details', false).set(true);
            const state = spectator.inject(CheckinStateService);
            state.checkinGuest.mockRejectedValueOnce(new Error('failed'));
            await spectator.component.continue();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
            expect(spectator.component.loading()).toBe(false);
        });

        it('accepts the induction before checking in', async () => {
            settingSignal('induction_after_details', false).set(true);
            const state = spectator.inject(CheckinStateService);

            await spectator.component.continue();

            expect(state.completeInduction).toHaveBeenCalledTimes(1);
            expect(state.checkinGuest).toHaveBeenCalledTimes(1);
            expect(
                state.completeInduction.mock.invocationCallOrder[0],
            ).toBeLessThan(state.checkinGuest.mock.invocationCallOrder[0]);
        });
    });

    describe('template interactions', () => {
        it('declines when the decline button is clicked', async () => {
            settingSignal('induction_enabled', false).set(true);
            settingSignal('induction_details').set('Terms');
            event.set({
                induction: 'pending',
            });
            spectator.detectChanges();
            await spectator.fixture.whenStable();
            spectator.click('button.clear');
            expect(
                spectator.inject(CheckinStateService).declineInduction,
            ).toHaveBeenCalled();
        });
    });
});
