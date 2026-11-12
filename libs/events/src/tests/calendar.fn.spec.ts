import {
    queryCalendarAvailability,
    queryCalendars,
    querySpaceFreeBusy,
} from '../lib/calendar.fn';

vi.mock('@placeos/ts-client', { spy: true });

import { Calendar } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

describe('Calendar API Methods', () => {
    beforeEach(() => vi.clearAllMocks());

    describe('queryCalendars', () => {
        it('should GET calendars from API', async () => {
            vi.mocked(ts_client.get).mockResolvedValue([{}] as any);
            const list = await queryCalendars();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars`,
            );
        });
    });
    describe('queryCalendarAvailabilty', () => {
        it('should GET calendar availability from API', async () => {
            vi.mocked(ts_client.get).mockResolvedValue([{}] as any);
            const list = await queryCalendarAvailability({
                period_start: 1,
                period_end: 2,
            });
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/availability?period_start=1&period_end=2`,
            );
        });
    });
    describe('querySpaceFreeBusy', () => {
        it('should GET free/busy status for bookable room calendars', async () => {
            vi.mocked(ts_client.get).mockResolvedValue([
                { resource: { id: 'room-1', bookable: true } },
                { resource: { id: 'room-2', bookable: false } },
                { id: 'personal@place.tech' },
            ] as never);
            const list = await querySpaceFreeBusy({
                period_start: 1,
                period_end: 2,
            });
            // Calendars without a bookable room resource are left out
            expect(list.map((_) => _.id)).toEqual(['room-1']);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/calendars/free_busy?period_start=1&period_end=2`,
            );
        });
    });
});
