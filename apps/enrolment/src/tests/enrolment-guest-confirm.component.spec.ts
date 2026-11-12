import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { settingSignal, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { EnrolmentGuestConfirmComponent } from '../app/enrolment-guest-confirm.component';
import { EnrolmentStateService } from '../app/enrolment-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('EnrolmentGuestConfirmComponent', () => {
    let spectator: Spectator<EnrolmentGuestConfirmComponent>;
    let state: EnrolmentStateService;

    const createComponent = createComponentFactory({
        component: EnrolmentGuestConfirmComponent,
        providers: [
            MockProvider(SettingsService, {
                // The real setting store, so the field follows its own key
                signal: settingSignal,
            } as Partial<SettingsService>),
            // Zoneless shallow rendering of mat-form-field/signal-forms
            // otherwise trips endless change detection (NG0103)
            { provide: ComponentFixtureAutoDetect, useValue: false },
        ],
        detectChanges: false,
    });

    /** [Update, Check In] action buttons — the upload fields render their own */
    const buttons = () =>
        spectator.queryAll('button.w-32') as HTMLButtonElement[];

    function fillValidDetails() {
        state.model.update((m) => ({
            ...m,
            name: 'Guest User',
            email: 'guest@example.com',
            organisation: 'ACME',
            accepted_terms_conditions: true,
        }));
    }

    beforeEach(() => {
        settingSignal('guests.vaccine_check').set(false);
        (ts_client.get as any).mockReset();
        (ts_client.get as any).mockResolvedValue({});
        (ts_client.post as any).mockReset();
        (ts_client.post as any).mockResolvedValue({});
        (ts_client.patch as any).mockReset();
        (ts_client.patch as any).mockResolvedValue({});
        spectator = createComponent();
        state = spectator.inject(EnrolmentStateService);
        spectator.detectChanges();
    });

    it('should block both actions while the form is invalid', () => {
        expect(buttons().every((btn) => btn.disabled)).toBe(true);
    });

    it('should allow both actions once the required details are given', () => {
        fillValidDetails();
        spectator.detectChanges();

        expect(buttons()).toHaveLength(2);
        expect(buttons().every((btn) => !btn.disabled)).toBe(true);
    });

    it.each([
        ['no name', { name: '' }],
        ['no organisation', { organisation: '' }],
        ['no email', { email: '' }],
        ['a malformed email', { email: 'not-an-email' }],
        ['unaccepted terms', { accepted_terms_conditions: false }],
    ])('should block both actions with %s', (_, change) => {
        fillValidDetails();
        state.model.update((m) => ({ ...m, ...change }));
        spectator.detectChanges();

        expect(buttons().every((btn) => btn.disabled)).toBe(true);
    });

    it('should save the details when the update action is used', async () => {
        const update_guest = vi
            .spyOn(state, 'updateGuest')
            .mockResolvedValue(undefined);
        fillValidDetails();
        spectator.detectChanges();
        buttons()[0].click();

        expect(update_guest).toHaveBeenCalledTimes(1);
    });

    it('should check the guest in when the check in action is used', async () => {
        const checkin = vi.spyOn(state, 'checkin').mockResolvedValue(undefined);
        fillValidDetails();
        spectator.detectChanges();
        buttons()[1].click();

        expect(checkin).toHaveBeenCalledTimes(1);
    });

    it('should hide the vaccination proof field by default', () => {
        expect(spectator.element.textContent).not.toContain(
            'Vaccination Proof',
        );
    });

    it('should show the vaccination proof field when the setting is enabled', () => {
        settingSignal('guests.vaccine_check').set(true);
        spectator.detectChanges();

        expect(spectator.element.textContent).toContain('Vaccination Proof');
    });
});
