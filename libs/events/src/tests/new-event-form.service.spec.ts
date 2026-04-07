import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BehaviorSubject, Subject } from 'rxjs';

import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';

import { EventFormService } from '../lib/new-event-form.service';

describe('EventFormService', () => {
    let service: EventFormService;
    let init_spy: jest.SpiedFunction<EventFormService['init']>;

    beforeEach(() => {
        sessionStorage.clear();
        init_spy = jest
            .spyOn(EventFormService.prototype, 'init')
            .mockResolvedValue(undefined);

        TestBed.configureTestingModule({
            providers: [
                EventFormService,
                {
                    provide: OrganisationService,
                    useValue: {
                        building: { id: 'bld-1', timezone: 'Australia/Sydney' },
                        building_list: new BehaviorSubject([]),
                        active_building: new BehaviorSubject({}),
                        active_region: new BehaviorSubject({}),
                        initialised: new BehaviorSubject(true),
                        organisation: { id: 'org-1' },
                        region: { id: 'reg-1' },
                    },
                },
                {
                    provide: SettingsService,
                    useValue: {
                        get: jest.fn(() => undefined),
                        overrides$: new BehaviorSubject([]),
                    },
                },
                {
                    provide: Router,
                    useValue: {
                        events: new Subject(),
                    },
                },
                {
                    provide: AssetStateService,
                    useValue: {
                        setOptions: jest.fn(),
                    },
                },
                {
                    provide: MatDialog,
                    useValue: { open: jest.fn() },
                },
            ],
        });

        service = TestBed.inject(EventFormService);
    });

    afterEach(() => {
        init_spy.mockRestore();
        sessionStorage.clear();
    });

    it('should refresh last_success when saved event has same start time', () => {
        const date = 1775527143000;
        service.last_success.set(
            new CalendarEvent({
                id: 'event-1',
                title: 'Previous booking',
                date,
                date_end: date + 30 * 60 * 1000,
            }),
        );
        sessionStorage.setItem(
            'PLACEOS.last_modified_event',
            JSON.stringify({
                id: 'event-2',
                title: 'Updated booking',
                date,
                date_end: date + 60 * 60 * 1000,
            }),
        );

        service.loadLastSuccess();

        expect(service.last_success()?.id).toBe('event-2');
        expect(service.last_success()?.title).toBe('Updated booking');
        expect(service.last_success()?.date_end).toBe(date + 60 * 60 * 1000);
    });
});
