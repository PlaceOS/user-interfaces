import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import {
    Calendar,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { CalendarService } from '../lib/calendar.service';

jest.mock('../lib/calendar.fn.ts');

import * as cal_fn from '../lib/calendar.fn';

describe('CalendarService', () => {
    let spectator: SpectatorService<CalendarService>;
    const createService = createServiceFactory({
        service: CalendarService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: signal(true),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (cal_fn as any).queryCalendars = jest.fn(() =>
            Promise.resolve([new Calendar()]),
        );
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not load calendars until requested', () => {
        expect(cal_fn.queryCalendars).not.toHaveBeenCalled();
    });

    it('should allow getting calendars', async () => {
        (cal_fn as any).queryCalendars = jest.fn(() =>
            Promise.resolve([new Calendar()]),
        );
        await spectator.service.loadCalendars();
        const list = spectator.service.calendar_list();
        expect(list).toEqual(spectator.service.calendars);
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Calendar);
    });

    it('should allow getting free busy', async () => {
        (cal_fn as any).querySpaceFreeBusy = jest.fn(() =>
            Promise.resolve([new Space()]),
        );
        const list = await spectator.service.getFreeBusyDate(1, 'CAL-1');
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Space);
        expect(cal_fn.querySpaceFreeBusy).toHaveBeenCalledWith(
            {
                period_start: getUnixTime(startOfDay(0)),
                period_end: getUnixTime(endOfDay(0)),
                calendars: 'CAL-1',
            },
            spectator.inject(OrganisationService),
        );
    });

    it('should allow checking space availability', async () => {
        (cal_fn as any).queryCalendarAvailability = jest.fn(() =>
            Promise.resolve([]),
        );
        (cal_fn as any).queryCalendars = jest.fn(() => Promise.resolve([]));
        const is_free = await spectator.service.checkSpacesAvailability(
            ['sys-1'],
            1,
            2,
        );
        expect(is_free).toBeTruthy();
        expect(cal_fn.queryCalendarAvailability).toHaveBeenCalledWith({
            period_start: 1,
            period_end: 2,
            system_ids: 'sys-1',
        });
    });
});
