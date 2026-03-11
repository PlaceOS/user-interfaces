import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { PaymentsService } from '@placeos/payments';
import { BehaviorSubject, of, Subject } from 'rxjs';

import { Booking, OrganisationService } from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { BookingFormService } from '../lib/booking-form.service';
import * as booking_mod from '../lib/bookings.fn';

jest.mock('@placeos/ts-client');
jest.mock('libs/bookings/src/lib/bookings.fn');

import * as ts_client from '@placeos/ts-client';
import { endOfYear } from 'date-fns';
import { MockProvider } from 'ng-mocks';

describe('BookingFormService', () => {
    let spectator: SpectatorService<BookingFormService>;
    const createService = createServiceFactory({
        service: BookingFormService,
        providers: [
            MockProvider(Router, {
                navigate: jest.fn(),
                events: new Subject(),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_building: new BehaviorSubject({ id: 'bld-1' }),
                organisation: { id: 'org-1' },
                building: { id: 'bld-1' },
            } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(PaymentsService, {
                makePayment: jest.fn(),
                enabled: true,
            }),
        ],
    });

    beforeEach(() => {
        (ts_client as any).listChildMetadata = jest.fn(() =>
            of([
                {
                    metadata: {
                        desks: {
                            details: [{ id: 'desk-1' }, { id: 'desk-1' }],
                        },
                    },
                    zone: { id: 'lvl-1' },
                },
            ]),
        );
        spectator = createService();
        (ts_client as any).cleanObject = jest.fn((a) => a);
    });

    afterEach(() => spectator?.service?.clearForm());

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should handle view changes', () => {
        expect(spectator.service.view()).toBe('form');
        spectator.service.setView('map');
        expect(spectator.service.view()).toBe('map');
    });

    it('should handle form changes', () => {
        spectator.service.newForm('desk');
        const form = spectator.service.form;
        expect(spectator.service.form).toBeInstanceOf(FormGroup);
        const spy = jest.spyOn(spectator.service, 'storeForm');
        expect(spectator.service.storeForm).not.toBeCalled();
        const date = endOfYear(Date.now()).valueOf();
        spectator.service.form.patchValue({ date });
        expect(spectator.service.storeForm).toBeCalled();
        expect(spectator.service.form.value.date).toBe(date);
        spectator.service.resetForm();
        expect(form).toBe(spectator.service.form);
        expect(spectator.service.form.value.date).not.toBe(date);
        spectator.service.form.patchValue({ date });
        expect(spectator.service.form.value.date).toBe(date);
        spectator.service.clearForm();
        expect(spectator.service.form.value.date).not.toBe(date);
        spy.mockRestore();
    });

    it('should allow reloading previous form details', () => {
        spectator.service.loadForm();
        expect(spectator.service.form).toBeInstanceOf(FormGroup);
        expect(spectator.service.form.value.title).toBe('Booking');
        sessionStorage.setItem('PLACEOS.booking_form', '{ "title": "Test" }');
        spectator.service.loadForm();
        expect(spectator.service.form.value.title).toBe('Test');
    });

    it.todo('should list asset features');

    it.todo('should list available assets');

    it.todo('should allow filtering of available assets');

    it.todo('should allow confirming booking details');

    // it('should allow posting booking details', fakeAsync(async () => {
    //     (booking_mod as any).queryBookings = jest.fn(() =>
    //         of([{ asset_id: 'desk-1' }])
    //     );
    //     spectator.service.newForm();
    //     tick(1000);
    //     spectator.service.form.patchValue({
    //         date: Date.now(),
    //         asset_id: 'desk-1',
    //         user_email: 'jim@example.com',
    //     });
    //     tick(1000);
    //     await expect(spectator.service.postForm()).rejects.toBe(
    //         'desk-1 is not available at the selected time'
    //     );

    //     (booking_mod as any).saveBooking = jest.fn(() => of({}));
    //     (booking_mod as any).queryBookings = jest.fn(() => of([]));
    //     spectator.service.form.patchValue({ asset_id: 'desk-2' });
    //     await spectator.service.postForm();
    //     expect(spectator.service.view).toBe('success');
    // }));

    it('should clear form on navigation away from form', () => {
        const spy = jest.spyOn(spectator.service, 'clearForm');
        expect(spectator.service.clearForm).not.toBeCalled();
        const router = spectator.inject(Router);
        (router.events as any).next(
            new NavigationEnd(1, '/book/desks/form', '/book/desks/form'),
        );
        expect(spectator.service.clearForm).not.toBeCalled();
        (router.events as any).next(
            new NavigationEnd(1, '/schedule', '/schedule'),
        );
        expect(spectator.service.clearForm).toBeCalled();
        spy.mockRestore();
    });

    it('should show user friendly names for invalid form fields', async () => {
        spectator.service.newForm('desk');
        spectator.service.form.patchValue({ asset_id: '' });
        const error = `${await spectator.service
            .postForm()
            .catch((err) => err)}`;
        expect(error === 'FORM.INVALID_FIELDS' || error.includes('Desk')).toBe(
            true,
        );
        expect(error).not.toContain('asset_id');
    });

    it('should keep past start time when loading an in-progress booking for edit', () => {
        jest.useFakeTimers();
        const booking_date = Date.now() - 10 * 60 * 1000;
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'booking-1',
                booking_type: 'visitor',
                date: booking_date,
                duration: 60,
                asset_id: 'visitor@example.com',
            }),
        );
        jest.runAllTimers();

        expect(spectator.service.form.getRawValue().date).toBe(booking_date);
        jest.useRealTimers();
    });

    it('should store visitor_name in extension data when saving visitor bookings', async () => {
        const save_booking = booking_mod.saveBooking as jest.Mock;
        (spectator.inject(PaymentsService) as any).enabled = false;
        save_booking.mockReset();
        save_booking.mockImplementation((booking: Booking) => of(booking));
        spectator.service.newForm(
            'visitor',
            new Booking({
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                asset_id: 'visitor@example.com',
            }),
        );
        spectator.service.form.patchValue({
            booking_type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor One',
            title: 'Vendor Interview',
        });

        await spectator.service.postForm(true);

        expect(save_booking).toHaveBeenCalledTimes(1);
        expect(
            (save_booking.mock.calls[0][0] as Booking).extension_data
                .visitor_name,
        ).toBe('Visitor One');
        expect((save_booking.mock.calls[0][0] as Booking).description).toBe(
            'Vendor Interview',
        );
    });

    it('should only clear grouped visitor edit form after all siblings are saved', async () => {
        const clear_form = jest.spyOn(spectator.service, 'clearForm');
        const saved_forms: {
            asset_id: string;
            zones: string[];
            location: string;
        }[] = [];
        const post_form = jest
            .spyOn(spectator.service, 'postForm')
            .mockImplementation(async () => {
                const value = spectator.service.form.getRawValue();
                saved_forms.push({
                    asset_id: value.asset_id,
                    zones: [...(value.zones || [])],
                    location: value.location,
                });
                return new Booking({
                    ...value,
                    id:
                        value.asset_id === 'visitor.one@example.com'
                            ? 'booking-parent'
                            : 'booking-child',
                });
            });
        spectator.service.newForm(
            'visitor',
            new Booking({
                id: 'booking-parent',
                booking_type: 'visitor',
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                zones: ['org-1', 'bld-1'],
                extension_data: { location: 'Main Lobby' },
            }),
        );
        spectator.service.form.patchValue({
            id: 'booking-parent',
            booking_type: 'visitor',
            title: 'Vendor Visit',
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            zones: ['org-1', 'bld-1'],
            location: 'Main Lobby',
        });
        spectator.service.setOptions({
            type: 'visitor',
            group: true,
            members: [
                {
                    name: 'Visitor One',
                    email: 'visitor.one@example.com',
                } as any,
                {
                    name: 'Visitor Two',
                    email: 'visitor.two@example.com',
                } as any,
            ],
        });
        clear_form.mockClear();

        await spectator.service.editFormForGroup([
            new Booking({
                id: 'booking-parent',
                asset_id: 'visitor.one@example.com',
                booking_type: 'visitor',
            }),
            new Booking({
                id: 'booking-child',
                parent_id: 'booking-parent',
                asset_id: 'visitor.two@example.com',
                booking_type: 'visitor',
            }),
        ]);

        expect(post_form).toHaveBeenCalledTimes(2);
        expect(post_form).toHaveBeenNthCalledWith(1, true, false);
        expect(post_form).toHaveBeenNthCalledWith(2, true, false);
        expect(clear_form).toHaveBeenCalledTimes(1);
        expect(saved_forms[0].zones).toEqual([
            'org-1',
            'bld-1',
        ]);
        expect(saved_forms[1].location).toBe('Main Lobby');
    });

});
