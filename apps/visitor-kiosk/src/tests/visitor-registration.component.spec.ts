import { signal } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    Region,
    SettingsService,
    User,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
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
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                overrides: settings_overrides,
                signal: jest.fn(() => signal(undefined)),
            } as any),
        ],
    });

    beforeEach(() => {
        window.PLACEOS_PUBLIC_MODE = false;
        sessionStorage.clear();
        settings_overrides.set([]);
        spectator = createComponent({ detectChanges: false });
    });

    it('should keep registration form fields bindable after initialisation', fakeAsync(() => {
        const console_error = jest
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();
        tick(350);
        spectator.detectChanges();

        expect(typeof spectator.component.form.asset_name).toBe('function');
        expect(spectator.component.form.asset_name()).toBeDefined();
        expect(typeof spectator.component.form.asset_id).toBe('function');
        expect(spectator.component.form.asset_id()).toBeDefined();
        expect(typeof spectator.component.form.user).toBe('function');
        expect(spectator.component.form.user()).toBeDefined();
        expect(typeof spectator.component.form.phone).toBe('function');
        expect(spectator.component.form.phone()).toBeDefined();
        expect(typeof spectator.component.form.company).toBe('function');
        expect(spectator.component.form.company()).toBeDefined();
        expect(typeof spectator.component.form.title).toBe('function');
        expect(spectator.component.form.title()).toBeDefined();
        expect(typeof spectator.component.form.pass_number).toBe('function');
        expect(spectator.component.form.pass_number()).toBeDefined();
        expect(typeof spectator.component.form.duration).toBe('function');
        expect(spectator.component.form.duration()).toBeDefined();
        expect(spectator.component.host()).toBeNull();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(console_error).not.toHaveBeenCalled();
        console_error.mockRestore();
    }));

    it('should expose a selected host after one is chosen', () => {
        const host = new User({
            id: 'host-1',
            name: 'Host User',
            email: 'host@example.com',
        });

        spectator.component.setHost(host);

        expect(spectator.component.host()).toEqual(host);
    });

    it('should keep the host field bindable when the user value is cleared', fakeAsync(() => {
        const console_error = jest
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();

        spectator.component.form_value.update((value) => ({
            ...value,
            user: null as any,
        }));
        tick(350);
        spectator.detectChanges();

        expect(typeof spectator.component.form.user).toBe('function');
        expect(console_error).not.toHaveBeenCalled();
        console_error.mockRestore();
    }));

    it('should keep registration fields bindable when settings overrides change', fakeAsync(() => {
        const console_error = jest
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        TestBed.runInInjectionContext(() => spectator.component.ngOnInit());
        spectator.detectChanges();

        settings_overrides.set([
            { name: 'bookings.default_duration', value: 90 },
        ]);
        tick(350);
        spectator.detectChanges();

        expect(typeof spectator.component.form.user).toBe('function');
        expect(typeof spectator.component.form.duration).toBe('function');
        expect(console_error).not.toHaveBeenCalled();
        console_error.mockRestore();
    }));
});
