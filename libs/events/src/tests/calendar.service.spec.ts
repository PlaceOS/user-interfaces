import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import {
    Calendar,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { mockReply } from '@placeos/ts-client/compat';
import {
    calendars,
    type PlaceCalendarCalendar,
} from '@placeos/ts-client/staff';
import { CalendarService } from '../lib/calendar.service';
import { httpFailure } from './staff-test-data';

// The real calendar.fn wrappers run; only the staff calendars operation beneath them is stubbed.
vi.mock('@placeos/ts-client/staff', { spy: true });

const CALENDAR: PlaceCalendarCalendar = {
    id: 'calendar-1',
    ref: null,
    summary: 'Calendar',
    primary: true,
    can_edit: true,
};

describe('CalendarService', () => {
    let spectator: SpectatorService<CalendarService>;
    const createService = createServiceFactory({
        service: CalendarService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: signal(true),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(calendars.query).mockResolvedValue(mockReply([]));
        spectator = createService();
    });

    it('should not load calendars until requested', () => {
        expect(calendars.query).not.toHaveBeenCalled();
    });

    it('should allow getting calendars', async () => {
        vi.mocked(calendars.query).mockResolvedValue(mockReply([CALENDAR]));
        await spectator.service.loadCalendars();
        const list = spectator.service.calendar_list();
        expect(list).toEqual(spectator.service.calendars);
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Calendar);
        expect(calendars.query).toHaveBeenCalled();
    });

    it('should share one request between concurrent loads', async () => {
        vi.mocked(calendars.query).mockResolvedValue(mockReply([CALENDAR]));
        await Promise.all([
            spectator.service.loadCalendars(),
            spectator.service.loadCalendars(),
        ]);
        await spectator.service.loadCalendars();
        expect(calendars.query).toHaveBeenCalledTimes(1);
    });

    it('should handle a failed calendar request and retry on the next load', async () => {
        vi.mocked(calendars.query).mockResolvedValueOnce(httpFailure(500));
        await expect(
            spectator.service.loadCalendars(),
        ).resolves.toBeUndefined();
        expect(spectator.service.calendar_list()).toEqual([]);

        vi.mocked(calendars.query).mockResolvedValueOnce(mockReply([CALENDAR]));
        await spectator.service.loadCalendars();
        expect(spectator.service.calendar_list()).toHaveLength(1);
        expect(calendars.query).toHaveBeenCalledTimes(2);
    });
});
