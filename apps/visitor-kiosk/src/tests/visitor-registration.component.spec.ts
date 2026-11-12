import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    EMPTY_USER,
    isEmptyUser,
    OrganisationService,
    Region,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { CheckinStateService } from '../app/checkin/checkin-state.service';
import { VisitorRegistrationComponent } from '../app/visitor-registration.component';

describe('VisitorRegistrationComponent', () => {
    let spectator: SpectatorRouting<VisitorRegistrationComponent>;
    const settings_overrides = signal([]);
    const createComponent = createRoutingFactory({
        component: VisitorRegistrationComponent,
        providers: [
            BookingFormService,
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                region: new Region({ id: 'region-1' }),
                building: { id: 'bld-1' },
                initialised: signal(true),
                active_building: signal({ id: 'bld-1' }),
                waitUntilInitialised: vi.fn(() => Promise.resolve()),
            } as unknown as Partial<OrganisationService>),
            MockProvider(SettingsService, {
                get: vi.fn(),
                overrides: settings_overrides,
                signal: vi.fn(() => signal(undefined)),
            }),
        ],
    });

    /** Fill every field that a visitor registration needs */
    function fillValidForm() {
        spectator.component.setHost(
            new User({ id: 'host-1', email: 'host@example.com' }),
        );
        spectator.inject(BookingFormService).model.update((m) => ({
            ...m,
            asset_name: 'Visitor',
            asset_id: 'visitor@example.com',
        }));
    }

    beforeEach(() => {
        settingSignal('allow_self_registration', false).set(false);
        settingSignal('induction_enabled', false).set(false);
        settingSignal('induction_details').set(undefined);
        settingSignal('induction_after_details', false).set(false);
        window.PLACEOS_PUBLIC_MODE = false;
        sessionStorage.clear();
        settings_overrides.set([]);
        spectator = createComponent({ detectChanges: false });
    });

    it('should keep registration form fields bindable after initialisation', async () => {
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        vi.useFakeTimers();
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(350);
        spectator.detectChanges();

        const fields = [
            'asset_name',
            'asset_id',
            'user',
            'phone',
            'company',
            'title',
            'pass_number',
            'duration',
        ] as const;
        for (const name of fields) {
            const field = spectator.component.form[name];
            expect(typeof field, name).toBe('function');
            expect(field(), name).toBeDefined();
        }
        expect(spectator.component.host()).toBeNull();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(console_error).not.toHaveBeenCalled();
        console_error.mockRestore();
        vi.useRealTimers();
    });

    it('should expose a selected host after one is chosen', () => {
        const host = new User({
            id: 'host-1',
            name: 'Host User',
            email: 'host@example.com',
        });

        spectator.component.setHost(host);

        expect(spectator.component.host()).toEqual(host);
    });

    it('should disable browser autocomplete on every input', async () => {
        vi.useFakeTimers();
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(350);
        spectator.detectChanges();

        const inputs = spectator.queryAll('input');
        expect(inputs.length).toBeGreaterThan(0);
        expect(
            inputs.every(
                (input) => input.getAttribute('autocomplete') === 'off',
            ),
        ).toBe(true);
        vi.useRealTimers();
    });

    it('does not register a visitor without a name', async () => {
        const booking_form = spectator.inject(BookingFormService);
        const post_form = vi.spyOn(booking_form, 'postForm');
        vi.useFakeTimers();
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        vi.useRealTimers();
        spectator.component.setHost(
            new User({ id: 'host-1', email: 'host@example.com' }),
        );
        booking_form.model.update((m) => ({
            ...m,
            asset_name: ' ',
            asset_id: 'visitor@example.com',
        }));

        await spectator.component.register();

        expect(post_form).not.toHaveBeenCalled();
    });

    it('should keep cleared host blank in the backing model', () => {
        spectator.component.setHost(null);

        expect(spectator.component.form_value().user).toEqual(EMPTY_USER);
        expect(isEmptyUser(spectator.component.form_value().user)).toBe(true);
        expect(spectator.component.host()).toBeNull();
    });

    it('should keep the host field bindable when the user value is cleared', async () => {
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        vi.useFakeTimers();
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();

        spectator.component.form_value.update((value) => ({
            ...value,
            user: null,
        }));
        await vi.advanceTimersByTimeAsync(350);
        spectator.detectChanges();

        expect(typeof spectator.component.form.user).toBe('function');
        expect(console_error).not.toHaveBeenCalled();
        console_error.mockRestore();
        vi.useRealTimers();
    });

    it('should keep registration fields bindable when settings overrides change', async () => {
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        vi.useFakeTimers();
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();

        settings_overrides.set([
            { name: 'bookings.default_duration', value: 90 },
        ]);
        await vi.advanceTimersByTimeAsync(350);
        spectator.detectChanges();

        expect(typeof spectator.component.form.user).toBe('function');
        expect(typeof spectator.component.form.duration).toBe('function');
        expect(console_error).not.toHaveBeenCalled();
        console_error.mockRestore();
        vi.useRealTimers();
    });

    it('returns to the welcome page when self-registration is turned off', async () => {
        vi.useFakeTimers();
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        await vi.advanceTimersByTimeAsync(1_000);
        vi.useRealTimers();

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/welcome',
        ]);
    });

    describe('register', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            settingSignal('allow_self_registration', false).set(true);
            TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
            vi.useRealTimers();
            fillValidForm();
        });

        it('saves the visitor as self-registered and opens the details', async () => {
            const booking = new Booking({ id: 'visit-1', asset_id: 'v@b.com' });
            const post_form = vi
                .spyOn(spectator.inject(BookingFormService), 'postForm')
                .mockResolvedValue(booking);

            await spectator.component.register();

            expect(post_form).toHaveBeenCalledWith(true);
            expect(spectator.component.form_value()).toEqual(
                expect.objectContaining({
                    self_registered: true,
                    attendees: [
                        expect.objectContaining({
                            name: 'Visitor',
                            email: 'visitor@example.com',
                        }),
                    ],
                    zones: ['org-1', 'region-1', 'bld-1'],
                }),
            );
            const checkin = spectator.inject(CheckinStateService);
            expect(checkin.event()).toBe(booking);
            expect(checkin.metadata).toBe('registered');
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'details',
            ]);
        });

        it('opens the induction first when it comes before the details', async () => {
            settingSignal('induction_enabled', false).set(true);
            settingSignal('induction_details').set('Terms');
            vi.spyOn(
                spectator.inject(BookingFormService),
                'postForm',
            ).mockResolvedValue(new Booking({ id: 'visit-1' }));

            await spectator.component.register();

            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/checkin',
                'induction',
            ]);
        });

        it('stays on the form when the registration fails', async () => {
            vi.spyOn(
                spectator.inject(BookingFormService),
                'postForm',
            ).mockRejectedValue(new Error('Server error'));

            await spectator.component.register();

            expect(spectator.inject(CheckinStateService).event()).toBeNull();
            expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
            expect(spectator.component.loading()).toBe(false);
        });
    });
});
