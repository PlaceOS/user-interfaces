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

    it('should handle a failed calendar request and retry on the next load', async () => {
        vi.mocked(ts_client.get).mockRejectedValueOnce(
            new Response(null, { status: 500 }),
        );
        await expect(
            spectator.service.loadCalendars(),
        ).resolves.toBeUndefined();
        expect(spectator.service.calendar_list()).toEqual([]);

        vi.mocked(ts_client.get).mockResolvedValueOnce([
            {},
        ] as unknown as Awaited<ReturnType<typeof ts_client.get>>);
        await spectator.service.loadCalendars();
        expect(spectator.service.calendar_list()).toHaveLength(1);
        expect(ts_client.get).toHaveBeenCalledTimes(2);
    });
});
