import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { getUnixTime, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import {
    Calendar,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { CalendarService } from '../lib/calendar.service';

// The real calendar.fn wrappers run; only the ts-client GET beneath them is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

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
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not load calendars until requested', () => {
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should allow getting calendars', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([{}] as any);
        await spectator.service.loadCalendars();
        const list = spectator.service.calendar_list();
        expect(list).toEqual(spectator.service.calendars);
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Calendar);
        expect(ts_client.get).toHaveBeenCalledWith(`/api/staff/v1/calendars`);
    });

    it('should allow getting free busy', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([
            {
                resource: {
                    id: 'sys-1',
                    email: 'sys-1@place.tech',
                    bookable: true,
                },
            },
        ] as any);
        const list = await spectator.service.getFreeBusyDate(1, 'CAL-1');
        expect(list).toHaveLength(1);
        expect(list[0]).toBeInstanceOf(Space);
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining(
                `/api/staff/v1/calendars/free_busy?period_start=${getUnixTime(
                    startOfDay(1),
                )}`,
            ),
        );
    });

    it('should allow checking space availability', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        const is_free = await spectator.service.checkSpacesAvailability(
            ['sys-1'],
            1,
            2,
        );
        expect(is_free).toBeTruthy();
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining(
                `/api/staff/v1/calendars/availability?period_start=1&period_end=2&system_ids=sys-1`,
            ),
        );
    });
});
