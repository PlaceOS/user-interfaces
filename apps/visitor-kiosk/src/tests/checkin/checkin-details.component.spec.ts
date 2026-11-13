import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import {
    setNotifyOutlet,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { CheckinDetailsComponent } from '../../app/checkin/checkin-details.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// Workspace modules cannot be intercepted by the native unit-test builder, so
// instead of mocking `notifyError` we spy on the snackbar outlet it routes to.
function createSnackbarSpy() {
    return {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
}

function guestForm() {
    return {
        host: '',
        name: 'Visitor',
        email: 'visitor@example.com',
        phone: '',
        organisation: '',
        pass_number: '',
    };
}

describe('CheckinDetailsComponent', () => {
    let spectator: SpectatorRouting<CheckinDetailsComponent>;
    let snackbar: ReturnType<typeof createSnackbarSpy>;
    /** Shared by every test, so reset before each component is created */
    const form = signal(guestForm());
    const state = {
        updateGuest: vi.fn(async () => undefined),
        checkinGuest: vi.fn(async () => null),
        form,
        event: signal({}),
        metadata: '',
    };
    const createComponent = createRoutingFactory({
        component: CheckinDetailsComponent,
        declarations: [mockComponent(IconComponent)],
        providers: [
            MockProvider(CheckinStateService, state as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        settingSignal('induction_enabled', false).set(false);
        settingSignal('induction_details').set(undefined);
        settingSignal('induction_after_details', false).set(false);
        settingSignal('allow_user_photo', false).set(false);
        settingSignal('allow_printing_label').set(undefined);
        snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        form.set(guestForm());
        state.metadata = '';
        spectator = createComponent();
    });

    afterEach(() => setNotifyOutlet(null, true));

    it('should disable browser autocomplete on every input', () => {
        const inputs = spectator.queryAll('input');

        expect(inputs.length).toBeGreaterThan(0);
        expect(
            inputs.every(
                (input) => input.getAttribute('autocomplete') === 'off',
            ),
        ).toBe(true);
    });

    it('should allow updating guest details', async () => {
        const service = spectator.inject(CheckinStateService);
        expect(service.updateGuest).not.toHaveBeenCalled();
        expect(service.checkinGuest).not.toHaveBeenCalled();
        spectator.click('button[next]');
        await new Promise((resolve) => setTimeout(resolve, 0));
        await spectator.fixture.whenStable();
        expect(service.updateGuest).toHaveBeenCalledTimes(1);
        expect(service.checkinGuest).toHaveBeenCalledTimes(1);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'results',
        ]);
    });

    it('does not check in while a required detail is missing', async () => {
        const service = spectator.inject(CheckinStateService);
        service.form.update((form) => ({ ...form, name: '' }));

        await spectator.component.updateGuest();

        expect(service.updateGuest).not.toHaveBeenCalled();
        expect(service.checkinGuest).not.toHaveBeenCalled();
    });

    it('waits for induction acceptance before checking in', async () => {
        settingSignal('induction_enabled', false).set(true);
        settingSignal('induction_details').set('Terms and conditions');
        settingSignal('induction_after_details', false).set(true);
        const service = spectator.inject(CheckinStateService);

        await spectator.component.updateGuest();

        expect(service.updateGuest).toHaveBeenCalledTimes(1);
        expect(service.checkinGuest).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'induction',
        ]);
    });

    it('shows the form again when saving guest details fails', async () => {
        const service = spectator.inject(CheckinStateService);
        vi.mocked(service.updateGuest).mockRejectedValueOnce(
            new Error('Save failed'),
        );

        await spectator.component.updateGuest();

        expect(snackbar.open).toHaveBeenCalledWith(
            'Save failed',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(service.checkinGuest).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it.each([
        [undefined, 'photo'],
        [false, 'results'],
    ])(
        'opens %s after check-in when photos are allowed and label printing is %s',
        async (allow_printing_label, page) => {
            settingSignal('allow_user_photo', false).set(true);
            settingSignal('allow_printing_label').set(allow_printing_label);

            await spectator.component.updateGuest();

            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                page,
            ]);
        },
    );

    it('stays on the form when check-in fails', async () => {
        const service = spectator.inject(CheckinStateService);
        vi.mocked(service.checkinGuest).mockRejectedValueOnce(
            new Error('Check-in failed'),
        );

        await spectator.component.updateGuest();

        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('checks in a self-registered visitor without saving again', async () => {
        const service = spectator.inject(CheckinStateService);
        service.metadata = 'registered';

        await spectator.component.ngOnInit();

        await vi.waitFor(() =>
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'results',
            ]),
        );
        expect(service.updateGuest).not.toHaveBeenCalled();
        expect(service.checkinGuest).toHaveBeenCalledTimes(1);
    });

    it('returns to the scan page when no visitor is loaded', async () => {
        const service = spectator.inject(CheckinStateService);
        service.form.update((form) => ({ ...form, email: '' }));

        await spectator.component.ngOnInit();

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'scan',
        ]);
    });
});
