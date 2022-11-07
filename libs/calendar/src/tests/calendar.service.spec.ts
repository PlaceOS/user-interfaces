import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { BehaviorSubject, of } from 'rxjs';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';

import { OrganisationService } from '@placeos/organisation';
import { CalendarService } from '../lib/calendar.service';

jest.mock('../lib/calendar.fn.ts');

import * as cal_fn from '../lib/calendar.fn';
import { Calendar } from '../lib/calendar.class';
import { first } from 'rxjs/operators';
import { Space } from '@placeos/spaces';

describe('CalendarService', () => {
    let spectator: SpectatorService<CalendarService>;
    const createService = createServiceFactory({
        service: CalendarService,
        providers: [
            {
                provide: OrganisationService,
                useValue: { initialised: new BehaviorSubject(false) },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow getting calendars', async () => {
        (cal_fn as any).queryCalendars = jest.fn(() => of([new Calendar()]));
        (spectator.inject(OrganisationService).initialised as any).next(true);
        const list = await spectator.service.calendar_list
            .pipe(first((_) => _?.length > 0))
            .toPromise();
        expect(list).toEqual(spectator.service.calendars);
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Calendar);
    });

    it('should allow getting free busy', async () => {
        (cal_fn as any).querySpaceFreeBusy = jest.fn(() => of([new Space()]));
        const list = await spectator.service
            .getFreeBusyDate(1, 'CAL-1')
            .toPromise();
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Space);
        expect(cal_fn.querySpaceFreeBusy).toHaveBeenCalledWith(
            {
                period_start: getUnixTime(startOfDay(0)),
                period_end: getUnixTime(endOfDay(0)),
                calendars: 'CAL-1',
            },
            spectator.inject(OrganisationService)
        );
    });

    it('should allow checking space availability', async () => {
        (cal_fn as any).queryCalendarAvailability = jest.fn(() => of([]));
        (cal_fn as any).queryCalendars = jest.fn(() => of([]));
        const is_free = await spectator.service.checkSpacesAvailability(
            ['sys-1'],
            1,
            2
        );
        expect(is_free).toBeTruthy();
        expect(cal_fn.queryCalendarAvailability).toHaveBeenCalledWith({
            period_start: 1,
            period_end: 2,
            system_ids: 'sys-1',
        });
    });
});
