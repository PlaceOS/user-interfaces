import { CalendarEvent, GuestUser, Space, VERSION } from '@placeos/common';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    type EndpointName,
    httpError,
    mockEndpoint,
    type MockHandler,
    respond,
} from '@placeos/ts-client/mock';
import {
    checkinEventGuest,
    eventSpaceIds,
    queryAllEvents,
    queryEventListOrThrow,
    queryEvents,
    querySpaceAvailability,
    saveEvent,
    showEvent,
} from '../lib/events.fn';

/** Answers the calls of a staff endpoint with `handler` and records each input */
function mock<K extends EndpointName>(name: K, handler: MockHandler<K>) {
    const spy = vi.fn(handler);
    mockEndpoint(name, spy);
    return spy;
}

describe('Event API Methods', () => {
    const app_version = VERSION.raw || VERSION.version || VERSION.hash;
    const app_name = 'PlaceOS';

    beforeEach(() => {
        vi.clearAllMocks();
        clearEndpointMocks();
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
    });

    describe('queryEvents', () => {
        it('should list events with the staff query operation', async () => {
            const query = mock('staff.events.query', () => [{}]);
            const events = await queryEvents({
                period_start: 1,
                period_end: 2,
            });
            expect(events).toHaveLength(1);
            expect(events[0]).toBeInstanceOf(CalendarEvent);
            expect(query).toHaveBeenCalledWith({
                period_start: 1,
                period_end: 2,
            });
        });

        it('should return an empty list when the request fails', async () => {
            mock('staff.events.query', () => {
                throw httpError(503);
            });
            await expect(
                queryEvents({ period_start: 1, period_end: 2 }),
            ).resolves.toEqual([]);
        });
    });

    describe('queryAllEvents', () => {
        // The API document has no pages for events, so the list is one request
        it('should list the events with one request, without a limit', async () => {
            const query = mock('staff.events.query', () => [
                { id: 'event-1' },
                { id: 'event-2' },
            ]);
            const events = await queryAllEvents({
                period_start: 1,
                period_end: 2,
                limit: 200,
            });
            expect(events.map((_) => _.id)).toEqual(['event-1', 'event-2']);
            expect(query).toHaveBeenCalledTimes(1);
            expect(query).toHaveBeenCalledWith({
                period_start: 1,
                period_end: 2,
            });
        });

        it('should return an empty list when the request fails', async () => {
            mock('staff.events.query', () => {
                throw httpError(503);
            });
            await expect(
                queryAllEvents({ period_start: 1, period_end: 2 }),
            ).resolves.toEqual([]);
        });

        it('should return an empty list after an abort', async () => {
            const controller = new AbortController();
            mock('staff.events.query', () => {
                controller.abort();
                return [{ id: 'event-1' }];
            });
            const events = await queryAllEvents(
                { period_start: 1, period_end: 2 },
                { signal: controller.signal },
            );
            expect(events).toEqual([]);
        });
    });

    describe('queryEventListOrThrow', () => {
        it('should list calendars from the x-calendar-issue header', async () => {
            mock('staff.events.query', () =>
                respond([{}], {
                    status: 206,
                    headers: {
                        'x-calendar-issue': 'Room1@Place.com, room2@place.com',
                    },
                }),
            );
            const result = await queryEventListOrThrow({
                period_start: 1,
                period_end: 2,
            });
            expect(result.events).toHaveLength(1);
            expect(result.failed_calendars).toEqual([
                'room1@place.com',
                'room2@place.com',
            ]);
        });
    });

    describe('showEvent', () => {
        it('should get an event with the staff show operation', async () => {
            const show = mock('staff.events.show', () => ({ id: '1' }));
            const event = await showEvent('1', { calendar: 'cal-1' });
            expect(event).toBeInstanceOf(CalendarEvent);
            expect(event.id).toBe('1');
            expect(show).toHaveBeenCalledWith({ id: '1', calendar: 'cal-1' });
        });
    });

    describe('saveEvent', () => {
        it('should create new events', async () => {
            const create = mock('staff.events.create', () => ({}));
            await saveEvent({});
            expect(create.mock.calls[0][0].body).toMatchObject({
                extension_data: expect.objectContaining({
                    app_name,
                    app_version,
                }),
            });
        });

        it('should send every selected room as a resource attendee', async () => {
            const create = mock('staff.events.create', () => ({}));
            const resources = [
                new Space({ id: 'space-1', email: 'one@example.com' }),
                new Space({ id: 'space-2', email: 'two@example.com' }),
            ];

            await saveEvent(new CalendarEvent({ resources }));

            expect(create.mock.calls[0][0].body).toMatchObject({
                attendees: expect.arrayContaining([
                    expect.objectContaining({
                        email: 'one@example.com',
                        resource: true,
                    }),
                    expect.objectContaining({
                        email: 'two@example.com',
                        resource: true,
                    }),
                ]),
            });
        });

        it('should update existing events', async () => {
            const update = mock('staff.events.update', () => ({}));
            await saveEvent({ id: '1' });
            expect(update).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: '1',
                    body: expect.objectContaining({
                        extension_data: expect.objectContaining({
                            app_name,
                            app_version,
                        }),
                    }),
                }),
            );
        });

        it('should save a whole series to the recurring master', async () => {
            const update = mock('staff.events.update', () => ({}));
            await saveEvent({
                id: 'instance-1',
                recurring_event_id: 'master-1',
                update_master: true,
            });
            expect(update).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: 'master-1',
                    body: expect.objectContaining({ id: 'master-1' }),
                }),
            );
        });
    });

    describe('querySpaceAvailability', () => {
        const start = new Date(2028, 5, 15, 10).valueOf();
        const own_period: [number, number] = [start, 60];
        /** A busy block of the API from a start in ms and a length in minutes */
        const busyBlock = (date: number, duration: number) => ({
            status: 'busy' as const,
            starts_at: date / 1000,
            ends_at: date / 1000 + duration * 60,
            timezone: 'UTC',
        });
        /** Stub the availability and free/busy endpoints. */
        const mockCalendars = (
            available: string[],
            busy: { date: number; duration: number }[] = [],
        ) => ({
            availability: mock('staff.calendars.availability', () =>
                available.map((id) => ({
                    id: `${id}@test.com`,
                    system: { id },
                })),
            ),
            free_busy: mock('staff.calendars.freeBusy', () => [
                {
                    id: 'room-1@test.com',
                    system: { id: 'room-1', bookable: true },
                    availability: busy.map((block) =>
                        busyBlock(block.date, block.duration),
                    ),
                },
            ]),
        });

        it('should mark rooms that the availability API leaves out as busy', async () => {
            const { free_busy } = mockCalendars(['room-2']);
            await expect(
                querySpaceAvailability(['room-1', 'room-2'], start, 60),
            ).resolves.toEqual([false, true]);
            expect(free_busy).not.toHaveBeenCalled();
        });

        it('should ignore the edited booking when it is the only busy block', async () => {
            mockCalendars([], [{ date: start, duration: 60 }]);
            await expect(
                querySpaceAvailability(
                    ['room-1', 'room-2'],
                    start,
                    60,
                    'room-1',
                    undefined,
                    own_period,
                ),
            ).resolves.toEqual([true, false]);
        });

        it('should ignore the edited booking in every room of the event', async () => {
            mock('staff.calendars.availability', () => []);
            mock('staff.calendars.freeBusy', () =>
                ['room-1', 'room-2'].map((id) => ({
                    id: `${id}@test.com`,
                    system: { id, bookable: true },
                    availability: [busyBlock(start, 60)],
                })),
            );
            await expect(
                querySpaceAvailability(
                    ['room-1', 'room-2'],
                    start,
                    60,
                    ['room-1', 'room-2'],
                    undefined,
                    own_period,
                ),
            ).resolves.toEqual([true, true]);
        });

        it('should keep a room busy when another booking overlaps the edited one', async () => {
            mockCalendars(
                [],
                [
                    { date: start, duration: 60 },
                    { date: start + 30 * 60 * 1000, duration: 60 },
                ],
            );
            await expect(
                querySpaceAvailability(
                    ['room-1'],
                    start,
                    60,
                    'room-1',
                    undefined,
                    own_period,
                ),
            ).resolves.toEqual([false]);
        });
    });

    it('should list every room of an event, or fall back to its system', () => {
        expect(
            eventSpaceIds(
                new CalendarEvent({
                    resources: [
                        { id: 'room-1', email: 'room-1@test.com' },
                        { id: 'room-2', email: 'room-2@test.com' },
                    ] as any,
                }),
            ),
        ).toEqual(['room-1', 'room-2']);
        expect(
            eventSpaceIds(
                new CalendarEvent({ system: { id: 'sys-1' } } as any),
            ),
        ).toEqual(['sys-1']);
        expect(eventSpaceIds(undefined)).toEqual([]);
    });

    describe('checkinEventGuests', () => {
        it('should check in an event guest with the staff operation', async () => {
            const check_in = mock('staff.events.guestCheckin', () => ({
                email: 'guest@example.com',
            }));
            const guest = await checkinEventGuest('1', 'guest-1', true);
            expect(guest).toBeInstanceOf(GuestUser);
            expect(guest.email).toBe('guest@example.com');
            expect(check_in).toHaveBeenCalledWith({
                id: '1',
                guest_id: 'guest-1',
                state: true,
            });
        });
    });
});
