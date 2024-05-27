import { Router } from '@angular/router';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { endOfYear } from 'date-fns';

import { SettingsService } from '@placeos/common';
import { PaymentsService } from '@placeos/payments';

jest.mock('libs/calendar/src/lib/calendar.fn');
jest.mock('libs/events/src/lib/events.fn');
jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import * as cal_mod from 'libs/calendar/src/lib/calendar.fn';
import * as event_mod from 'libs/events/src/lib/events.fn';
import { EventFormService } from '../lib/event-form.service';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';
import { fakeAsync, tick } from '@angular/core/testing';

describe('EventFormService', () => {
    let spectator: SpectatorService<EventFormService>;
    const createService = createServiceFactory({
        service: EventFormService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: of(true),
                building: { id: 'bld-1' },
                building_list: new BehaviorSubject([]),
                active_building: new BehaviorSubject({}),
            } as any),
            MockProvider(Router, {
                navigate: jest.fn(),
                events: new Subject(),
            }),
            MockProvider(PaymentsService, {
                makePayment: jest.fn(),
                payment_module: '',
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(AssetStateService, {}),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (cal_mod as any).querySpaceAvailability = jest.fn(() => of([]));
        (ts_client as any).querySystems = jest.fn(() => of({ data: [] }));
        spectator = createService();
    });

    afterEach(() => spectator.service.clearForm());

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should handle view changes', fakeAsync(() => {
        expect(spectator.service.view).toBe('form');
        spectator.service.setView('find');
        tick(301);
        expect(spectator.service.view).toBe('find');
    }));

    it('should handle form changes', () => {
        spectator.service.newForm();
        const form = spectator.service.form;
        expect(spectator.service.form).toBeInstanceOf(FormGroup);
        const spy = jest.spyOn(spectator.service, 'storeForm');
        expect(spectator.service.storeForm).not.toBeCalled();
        let date = endOfYear(Date.now()).valueOf();
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
        expect(spectator.service.form.value.title).toBe(null);
        sessionStorage.setItem('PLACEOS.event_form', '{ "title": "Test" }');
        spectator.service.loadForm();
        expect(spectator.service.form.value.title).toBe('Test');
    });

    it('should list available spaces', async () => {
        // const space_list = [{ id: 'space-1' }, { id: 'space-2' }];
        // (ts_client.querySystems as any) = jest.fn(() => of(space_list));
        // spectator.service.setView('find');
        // spectator.service.newForm();
        // spectator.service.form.patchValue({
        //     date: addDays(Date.now(), 7).valueOf(),
        // });
        // let spaces = await spectator.service.available_spaces
        //     .pipe(take(1))
        //     .toPromise();
        // expect(spaces).toEqual([]);
        // (cal_mod.querySpaceAvailability as any).mockImplementation(() =>
        //     of([...space_list])
        // );
        // spectator.service.setView('find');
        // await timer(301).toPromise();
        // spaces = await spectator.service.available_spaces
        //     .pipe(take(1))
        //     .toPromise();
        // TODO: Fix
        // expect(spaces).toEqual(space_list);
    });

    it('should allow filtering of available spaces', async () => {
        // TODO: Fix
        // const space_list = [{ id: 'space-1' }, { id: 'space-2' }];
        // (ts_client.querySystems as any) = jest.fn(() => of(space_list))
        // spectator.service.setView('find');
        // spectator.service.newForm(new CalendarEvent({ event_start: 1 }));
        // await spectator.service.available_spaces.pipe(take(1)).toPromise();
        // expect(cal_mod.querySpaceAvailability).toBeCalledWith(
        //     {
        //         period_start: 1,
        //         period_end: 1801,
        //         zone_ids: 'bld-1',
        //         features: undefined,
        //         capacity: undefined,
        //     },
        //     spectator.inject(OrganisationService)
        // );
        // spectator.service.setOptions({
        //     features: ['VidConf'],
        //     zone_ids: ['lvl-1', 'lvl-2'],
        //     capacity: 32,
        // });
        // await timer(301).toPromise();
        // await spectator.service.available_spaces.pipe(take(1)).toPromise();
        // expect(cal_mod.querySpaceAvailability).toBeCalledWith(
        //     {
        //         period_start: 1,
        //         period_end: 1801,
        //         zone_ids: 'lvl-1,lvl-2',
        //         features: 'VidConf',
        //         capacity: 32,
        //     },
        //     spectator.inject(OrganisationService)
        // );
    });

    it('should reject posting invalid form', async () => {
        spectator.service.newForm();
        await expect(spectator.service.postForm()).rejects.toBe(
            'Some form fields are invalid. [host, assets]'
        );
    });

    it('should reject posting unavailable spaces', async () => {
        // TODO: Fix
        // spectator.service.newForm();
        // spectator.service.form.patchValue({
        //     host: 'jim@place.tech',
        //     creator: 'jim@place.tech',
        //     title: 'Test Booking',
        //     resources: [{} as any],
        // });
        // await expect(spectator.service.postForm()).rejects.toBe(
        //     '1 space(s) are not available at the selected time'
        // );
    });

    it('should allow posting event details', async () => {
        // TODO: Fix
        // (event_mod as any).saveEvent = jest.fn(() => of({}));
        // spectator.service.newForm();
        // spectator.service.form.patchValue({
        //     host: 'jim@place.tech',
        //     creator: 'jim@place.tech',
        //     title: 'Test Booking',
        //     resources: [],
        // });
        // await expect(spectator.service.postForm()).resolves.toBeTruthy();
        // expect(spectator.service.view).toBe('success');
    });

    it('should clear form on navigation away from form', () => {
        const spy = jest.spyOn(spectator.service, 'clearForm');
        expect(spectator.service.clearForm).not.toBeCalled();
        const router = spectator.inject(Router);
        (router.events as any).next(
            new NavigationEnd(1, '/book/spaces/form', '/book/spaces/form')
        );
        expect(spectator.service.clearForm).not.toBeCalled();
        (router.events as any).next(
            new NavigationEnd(1, '/schedule', '/schedule')
        );
        expect(spectator.service.clearForm).toBeCalled();
        spy.mockRestore();
    });
});
