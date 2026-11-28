import { Calendar } from '@placeos/common';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import {
    queryCalendarAvailability,
    queryCalendarPermission,
    queryCalendars,
    querySpaceFreeBusy,
} from '../lib/calendar.fn';

describe('Calendar API Methods', () => {
    beforeEach(() => {
        clearEndpointMocks();
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
    });

    describe('queryCalendars', () => {
        it('should list calendars from the API', async () => {
            const query = vi.fn(() => [{ id: 'cal-1', summary: 'Mine' }]);
            mockEndpoint('staff.calendars.query', query);
            const list = await queryCalendars();
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(list[0].id).toBe('cal-1');
            expect(query).toHaveBeenCalled();
        });
    });

    describe('queryCalendarAvailabilty', () => {
        it('should get calendar availability from the API', async () => {
            const availability = vi.fn(() => [
                {
                    id: 'room-1@place.tech',
                    system: { id: 'room-1' },
                    availability: [
                        {
                            status: 'busy' as const,
                            starts_at: 60,
                            ends_at: 120,
                            timezone: 'UTC',
                        },
                    ],
                },
            ]);
            mockEndpoint('staff.calendars.availability', availability);
            const list = await queryCalendarAvailability({
                period_start: 1,
                period_end: 2,
                ignore: 'booking-1',
            });
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(Calendar);
            expect(list[0].resource.id).toBe('room-1');
            expect(list[0].availability).toEqual([
                { date: 60_000, duration: 1, status: 'busy' },
            ]);
            // The API document has no `ignore` parameter
            expect(availability).toHaveBeenCalledWith({
                period_start: 1,
                period_end: 2,
            });
        });

        it('should give no calendars when the API has no match', async () => {
            mockEndpoint('staff.calendars.availability', () => null);
            await expect(
                queryCalendarAvailability({ period_start: 1, period_end: 2 }),
            ).resolves.toEqual([]);
        });
    });

    describe('querySpaceFreeBusy', () => {
        it('should get free/busy status for bookable room calendars', async () => {
            const free_busy = vi.fn(() => [
                {
                    id: 'room-1@place.tech',
                    system: { id: 'room-1', bookable: true },
                },
                {
                    id: 'room-2@place.tech',
                    system: { id: 'room-2', bookable: false },
                },
                { id: 'personal@place.tech' },
            ]);
            mockEndpoint('staff.calendars.freeBusy', free_busy);
            const list = await querySpaceFreeBusy({
                period_start: 1,
                period_end: 2,
            });
            // Calendars without a bookable room are left out
            expect(list.map((_) => _.id)).toEqual(['room-1']);
            expect(free_busy).toHaveBeenCalledWith({
                period_start: 1,
                period_end: 2,
            });
        });
    });

    describe('queryCalendarPermission', () => {
        it('should give the edit permission of the API', async () => {
            const check = vi.fn(() => ({ can_edit: true }));
            mockEndpoint('staff.calendars.checkPermission', check);
            await expect(
                queryCalendarPermission('user@place.tech'),
            ).resolves.toEqual({ can_edit: true, has_access: false, role: '' });
            expect(check).toHaveBeenCalledWith({
                user_email: 'user@place.tech',
            });
        });
    });
});
