import { CalendarEvent, GuestUser, Space, VERSION } from '@placeos/common';
import {
    checkinEventGuest,
    eventSpaceIds,
    MAX_EVENT_PAGES,
    queryAllEvents,
    queryEventListOrThrow,
    queryEvents,
    querySpaceAvailability,
    saveEvent,
    showEvent,
} from '../lib/events.fn';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('Event API Methods', () => {
    const app_version = VERSION.raw || VERSION.version || VERSION.hash;
    const app_name = 'PlaceOS';

    beforeEach(() => vi.clearAllMocks());

    describe('queryEvents', () => {
        it('should allow calling GET request for listing events', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{}] as any);
            const events = await queryEvents({
                period_start: 1,
                period_end: 2,
            });
            expect(events).toHaveLength(1);
            expect(events[0]).toBeInstanceOf(CalendarEvent);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/events?period_start=1&period_end=2`,
            );
            spy.mockReset();
        });

        it('should return an empty list when the request fails', async () => {
            vi.mocked(ts_client.get).mockRejectedValueOnce(
                new Error('offline'),
            );
            await expect(
                queryEvents({ period_start: 1, period_end: 2 }),
            ).resolves.toEqual([]);
        });
    });

    describe('queryAllEvents', () => {
        it('should join the events of every page', async () => {
            const last = vi.fn(async () => ({
                data: [new CalendarEvent({ id: 'event-3' })],
                next: null,
            }));
            const second = vi.fn(async () => ({
                data: [new CalendarEvent({ id: 'event-2' })],
                next: last,
            }));
            vi.mocked(ts_client.query).mockResolvedValue({
                data: [new CalendarEvent({ id: 'event-1' })],
                next: second,
            } as never);
            const events = await queryAllEvents({
                period_start: 1,
                period_end: 2,
            });
            expect(events.map((_) => _.id)).toEqual([
                'event-1',
                'event-2',
                'event-3',
            ]);
            expect(ts_client.query).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: { period_start: 1, period_end: 2 },
                    endpoint: '/api/staff/v1/events',
                }),
            );
        });

        it('should return an empty list when a page request fails', async () => {
            vi.mocked(ts_client.query).mockResolvedValue({
                data: [new CalendarEvent({ id: 'event-1' })],
                next: async () => {
                    throw new Error('offline');
                },
            } as never);
            await expect(
                queryAllEvents({ period_start: 1, period_end: 2 }),
            ).resolves.toEqual([]);
        });

        it('should stop and throw when the page chain does not end', async () => {
            const next = vi.fn(async () => ({ data: [{}], next }));
            vi.spyOn(ts_client, 'query').mockResolvedValue({
                data: [{}],
                next,
            } as any);
            await expect(queryAllEvents({} as any)).rejects.toThrow(
                `more than ${MAX_EVENT_PAGES} pages`,
            );
            expect(next).toHaveBeenCalledTimes(MAX_EVENT_PAGES - 1);
        });

        it('should stop requesting pages after an abort', async () => {
            const controller = new AbortController();
            const next = vi.fn(async () => {
                controller.abort();
                return { data: [{}], next };
            });
            vi.spyOn(ts_client, 'query').mockResolvedValue({
                data: [{}],
                next,
            } as any);
            const events = await queryAllEvents({} as any, {
                signal: controller.signal,
            });
            expect(events).toEqual([]);
            expect(next).toHaveBeenCalledTimes(1);
        });
    });

    describe('queryEventListOrThrow', () => {
        it('should list calendars from the x-calendar-issue header', async () => {
            vi.spyOn(ts_client, 'get').mockResolvedValue([{}] as any);
            const headers_spy = vi
                .spyOn(ts_client, 'responseHeaders')
                .mockReturnValue({
                    'x-calendar-issue': 'Room1@Place.com, room2@place.com',
                });
            const result = await queryEventListOrThrow({
                period_start: 1,
                period_end: 2,
            });
            expect(result.events).toHaveLength(1);
            expect(result.failed_calendars).toEqual([
                'room1@place.com',
                'room2@place.com',
            ]);
            expect(headers_spy).toHaveBeenCalledWith(
                new URL(
                    '/api/staff/v1/events?period_start=1&period_end=2',
                    document.baseURI,
                ).href,
            );
            headers_spy.mockReset();
        });
    });

    describe('showEvent', () => {
        it('should allow calling GET request for a specific event', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue({} as any);
            const event = await showEvent('1');
            expect(event).toBeInstanceOf(CalendarEvent);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/events/1`,
            );
            spy.mockReset();
        });
    });

    describe('saveEvent', () => {
        it('should create new events', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            await saveEvent({});
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/events`,
                expect.objectContaining({
                    extension_data: expect.objectContaining({
                        app_name,
                        app_version,
                    }),
                }),
            );
            spy.mockReset();
        });
        it('should send every selected room as a resource attendee', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue('');
            const resources = [
                new Space({ id: 'space-1', email: 'one@example.com' }),
                new Space({ id: 'space-2', email: 'two@example.com' }),
            ];

            await saveEvent(new CalendarEvent({ resources }));

            expect(spy).toHaveBeenCalledWith(
                `/api/staff/v1/events`,
                expect.objectContaining({
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
                }),
            );
        });
        it('should update existing events', async () => {
            const spy = vi.spyOn(ts_client, 'patch');
            spy.mockResolvedValue({} as any);
            await saveEvent({ id: '1' });
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/events/1`,
                expect.objectContaining({
                    extension_data: expect.objectContaining({
                        app_name,
                        app_version,
                    }),
                }),
            );
            spy.mockReset();
        });

        it('should save a whole series to the recurring master', async () => {
            vi.mocked(ts_client.patch).mockResolvedValue({} as never);
            await saveEvent({
                id: 'instance-1',
                recurring_event_id: 'master-1',
                update_master: true,
            });
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/events/master-1`,
                expect.objectContaining({ id: 'master-1' }),
            );
        });
    });

    describe('querySpaceAvailability', () => {
        const start = new Date(2028, 5, 15, 10).valueOf();
        const own_period: [number, number] = [start, 60];
        /** Stub the availability and free/busy endpoints. */
        const mockCalendars = (
            available: string[],
            busy: { date: number; duration: number }[] = [],
        ) =>
            vi.mocked(ts_client.get).mockImplementation((async (url: string) =>
                url.includes('/free_busy')
                    ? [
                          {
                              id: 'room-1@test.com',
                              resource: { id: 'room-1', bookable: true },
                              availability: busy.map((block) => ({
                                  ...block,
                                  status: 'busy',
                              })),
                          },
                      ]
                    : available.map((id) => ({
                          id: `${id}@test.com`,
                          resource: { id },
                      }))) as unknown as typeof ts_client.get);

        it('should mark rooms that the availability API leaves out as busy', async () => {
            mockCalendars(['room-2']);
            await expect(
                querySpaceAvailability(['room-1', 'room-2'], start, 60),
            ).resolves.toEqual([false, true]);
            expect(ts_client.get).not.toHaveBeenCalledWith(
                expect.stringContaining('/free_busy'),
            );
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
            vi.mocked(ts_client.get).mockImplementation((async (url: string) =>
                url.includes('/free_busy')
                    ? ['room-1', 'room-2'].map((id) => ({
                          id: `${id}@test.com`,
                          resource: { id, bookable: true },
                          availability: [
                              { date: start, duration: 60, status: 'busy' },
                          ],
                      }))
                    : []) as unknown as typeof ts_client.get);
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
        it('should allow calling POST request for checking in an event guest', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            const guest = await checkinEventGuest('1', 'guest-1', true);
            expect(guest).toBeInstanceOf(GuestUser);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/events/1/guests/guest-1/checkin?state=true`,
                '',
            );
            spy.mockReset();
        });
    });
});
