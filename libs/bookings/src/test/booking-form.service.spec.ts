import { Router } from '@angular/router';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { FormGroup } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';
import { BookingFormService } from '../lib/booking-form.service';

jest.mock('@placeos/ts-client');
jest.mock('libs/bookings/src/lib/bookings.fn');

import * as ts_client from '@placeos/ts-client';
import * as booking_mod from 'libs/bookings/src/lib/bookings.fn';

describe('BookingFormService', () => {
    let spectator: SpectatorService<BookingFormService>;
    const createService = createServiceFactory({
        service: BookingFormService,
        providers: [
            {
                provide: OrganisationService,
                useValue: { initialised: of(true), building: { id: 'bld-1' } },
            },
            {
                provide: Router,
                useValue: { navigate: jest.fn(), events: new Subject() },
            },
            { provide: MatDialog, useValue: { open: jest.fn() } },
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
            ])
        );
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should handle view changes', () => {
        expect(spectator.service.view).toBe('form');
        spectator.service.setView('map');
        expect(spectator.service.view).toBe('map');
    });

    it('should handle form changes', () => {
        expect(spectator.service.form).toBeFalsy();
        spectator.service.newForm();
        const form = spectator.service.form;
        expect(spectator.service.form).toBeInstanceOf(FormGroup);
        const spy = jest.spyOn(spectator.service, 'storeForm');
        expect(spectator.service.storeForm).not.toBeCalled();
        spectator.service.form.patchValue({ date: 0 });
        expect(spectator.service.storeForm).toBeCalled();
        expect(spectator.service.form.value.date).toBe(0);
        spectator.service.resetForm();
        expect(form).toBe(spectator.service.form);
        expect(spectator.service.form.value.date).not.toBe(0);
        spectator.service.form.patchValue({ date: 0 });
        expect(spectator.service.form.value.date).toBe(0);
        spectator.service.clearForm();
        expect(spectator.service.form.value.date).not.toBe(0);
        expect(form).not.toBe(spectator.service.form);
        spy.mockRestore();
    });

    it('should allow reloading previous form details', () => {
        spectator.service.loadForm();
        expect(spectator.service.form).toBeInstanceOf(FormGroup);
        expect(spectator.service.form.value.title).toBe('Desk booking');
        sessionStorage.setItem('PLACEOS.booking_form', '{ "title": "Test" }');
        spectator.service.loadForm();
        expect(spectator.service.form.value.title).toBe('Test');
    });

    it.todo('should list asset features');

    it.todo('should list available assets');

    it.todo('should allow filtering of available assets');

    it.todo('should allow confirming booking details');

    it('should allow posting booking details', async () => {
        (booking_mod as any).saveBooking = jest.fn(() => of({}));
        (booking_mod as any).queryBookings = jest.fn(() =>
            of([{ asset_id: 'desk-1', user_email: 'jim@1.com' }])
        );
        await expect(spectator.service.postForm()).rejects.toBe(
            'No form for booking'
        );
        spectator.service.newForm();
        spectator.service.form.patchValue({
            asset_id: 'desk-1',
        });
        await expect(spectator.service.postForm()).rejects.toBe(
            'desk-1 is not available at the selected time'
        );
        spectator.service.form.patchValue({ asset_id: 'desk-2' });
        await spectator.service.postForm();
        expect(spectator.service.view).toBe('success');
    });

    it('should clear form on navigation away from form', () => {
        const spy = jest.spyOn(spectator.service, 'clearForm');
        expect(spectator.service.clearForm).not.toBeCalled();
        const router = spectator.inject(Router);
        (router.events as any).next(
            new NavigationEnd(1, '/book/desks/form', '/book/desks/form')
        );
        expect(spectator.service.clearForm).not.toBeCalled();
        (router.events as any).next(
            new NavigationEnd(1, '/schedule', '/schedule')
        );
        expect(spectator.service.clearForm).toBeCalled();
        spy.mockRestore();
    });
});
