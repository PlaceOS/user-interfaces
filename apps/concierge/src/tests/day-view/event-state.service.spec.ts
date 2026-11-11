import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { EventDetailsModalComponent, SpacesService } from '@placeos/events';
import {
    endOfDay,
    endOfMonth,
    endOfWeek,
    getUnixTime,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { EventsStateService } from '../../app/day-view/events-state.service';

import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { NEVER, of, Subject } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import {
    Building,
    BuildingLevel,
    CalendarEvent,
    OrganisationService,
    Region,
    SettingsService,
} from '@placeos/common';

/**
 * Flush the reactive graph so resource loaders run and propagate their
 * resolved values into the dependent signals.
 */
async function settle(rounds = 8) {
    for (let i = 0; i < rounds; i++) {
        // The async variant drains microtasks interleaved with the timer
        // advance — the sync one leaves resource loaders stuck mid-await.
        await vi.advanceTimersByTimeAsync(300);
        TestBed.tick();
        await Promise.resolve();
    }
}

describe('EventsStateService', () => {
    let spectator: SpectatorService<EventsStateService>;
    let week_start = 0;

    // `queryEvents` is a workspace fn (not mockable under the bundling
    // builder); it resolves to ts-client `get('/…/events?<query>')`, so both
    // stubbing and assertions happen at that boundary.
    const event_get_calls = () =>
        vi
            .mocked(ts_client.get)
            .mock.calls.filter(([url]) => String(url).includes('/events?'));
    const last_event_params = (): Record<string, string> => {
        const calls = event_get_calls();
        const url = String(calls[calls.length - 1]?.[0] || '');
        return Object.fromEntries(new URLSearchParams(url.split('?')[1]));
    };
    const createService = createServiceFactory({
        service: EventsStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building({ id: 'bld-123', parent_id: 'reg-123' }),
                region: new Region({ id: 'reg-123' }),
                active_region: signal({ id: 'reg-123' }),
                active_building: signal({
                    id: 'bld-123',
                    parent_id: 'reg-123',
                }),
                active_levels: signal([]),
                buildingsForRegion: vi.fn(() => [
                    new Building({ id: 'bld-123', parent_id: 'reg-123' }),
                ]),
            } as any),
            MockProvider(SettingsService, {
                get: ((name: string) =>
                    name === 'app.week_start' ? week_start : false) as any,
                time_format: 'h:mm a',
            } as Partial<SettingsService>),
            MockProvider(SpacesService, { find: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn(), closeAll: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        week_start = 0;
        // `requestSpacesForZone` calls ts-client `querySystems`; return
        // spaces without room_booking_url so the API-event loader runs.
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                { id: 'space-1', email: '1', bookable: true },
                { id: 'space-2', email: '2', bookable: true },
            ],
        } as any);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        spectator = createService();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    it('should list events', async () => {
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(spectator.service.event_list()).toHaveLength(0);
        vi.mocked(ts_client.get).mockResolvedValue([
            { resources: [{ email: '1' }] },
            { resources: [{ email: '2' }] },
        ] as any);
        spectator.service.setZones(['bld-234']);
        await settle();
        expect(spectator.service.event_list()).toHaveLength(2);
    });

    it('should only flag shown rooms whose calendars did not load', async () => {
        vi.mocked(ts_client.responseHeaders).mockReturnValue({
            'x-calendar-issue': '1,group-events@place.com',
        });
        spectator.service.setZones(['bld-123']);
        await settle();
        expect(
            spectator.service.failed_spaces().map((space) => space.id),
        ).toEqual(['space-1']);
        vi.mocked(ts_client.responseHeaders).mockReset();
    });

    it('should filter events by period, room, zone and type', () => {
        const event = (id: string, extra: Record<string, unknown> = {}) =>
            new CalendarEvent({
                id,
                date: Date.now(),
                duration: 60,
                resources: [
                    { email: 'room-1@place.tech', zones: ['lvl-1'] } as any,
                ],
                ...extra,
            });
        const events = [
            event('internal'),
            event('external', {
                attendees: [{ email: 'guest@other.com', visit_expected: true }],
            }),
            event('other-room', {
                resources: [
                    { email: 'room-2@place.tech', zones: ['lvl-2'] } as any,
                ],
            }),
            event('yesterday', { date: Date.now() - 24 * 60 * 60 * 1000 }),
        ];
        const start = new Date(Date.now() - 60 * 60 * 1000);
        const end = new Date(Date.now() + 60 * 60 * 1000);
        const filter = (filters: Record<string, unknown>) =>
            (spectator.service as any)
                .filterEvents(events, start, end, filters)
                .map((_: CalendarEvent) => _.id);

        expect(filter({})).toEqual(['internal', 'external', 'other-room']);
        expect(filter({ space_emails: ['room-2@place.tech'] })).toEqual([
            'other-room',
        ]);
        expect(filter({ zone_ids: ['lvl-1'] })).toEqual([
            'internal',
            'external',
        ]);
        expect(filter({ hide_type: ['external'] })).toEqual([
            'internal',
            'other-room',
        ]);
    });

    it('should hide setup and breakdown events unless overflow is enabled', () => {
        const booking = new CalendarEvent({
            id: 'booking',
            date: Date.now(),
            duration: 60,
            resources: [],
        });
        const setup = new CalendarEvent({
            id: 'setup',
            body: 'main_event_id=booking',
            date: Date.now(),
            duration: 30,
            resources: [],
        });
        const start = new Date(Date.now() - 60 * 60 * 1000);
        const end = new Date(Date.now() + 2 * 60 * 60 * 1000);

        expect(
            (spectator.service as any)
                .filterEvents([booking, setup], start, end, {}, [], {})
                .map((event) => event.id),
        ).toEqual(['booking']);
        expect(
            (spectator.service as any)
                .filterEvents([booking, setup], start, end, {}, [], {
                    show_overflow: true,
                })
                .map((event) => event.id),
        ).toEqual(['booking', 'setup']);
    });

    it('should keep only the latest local update for a replaced event', () => {
        const original = new CalendarEvent({
            id: 'booking',
            date: Date.now(),
            duration: 60,
            resources: [
                {
                    email: 'room@example.com',
                    response_status: 'tentative',
                } as any,
            ],
        });
        const updated = new CalendarEvent({
            ...original,
            resources: [
                {
                    email: 'room@example.com',
                    response_status: 'accepted',
                } as any,
            ],
        });
        spectator.service.replace(original);
        spectator.service.replace(updated);
        const added = (spectator.service as any)._added_events();
        const removed = (spectator.service as any)._removed_events();

        expect(added.map((event) => event.status)).toEqual(['approved']);
        expect(removed.map((event) => event.id)).toEqual([
            'booking',
            'booking',
        ]);
    });

    it('should open booking details and pass removal to the caller', () => {
        const dialog = spectator.inject(MatDialog);
        const ref = {
            componentInstance: {
                hide_edit: signal(false),
                action: new Subject<string>(),
            },
        };
        vi.mocked(dialog.open).mockReturnValue(ref as any);
        const remove = vi.fn();
        const event = new CalendarEvent({ id: 'booking' });

        spectator.service.viewEvent(event, remove);

        expect(dialog.open).toHaveBeenCalledWith(EventDetailsModalComponent, {
            data: expect.objectContaining({ event }),
        });
        const data = vi.mocked(dialog.open).mock.calls[0][1].data as {
            remove_fn: (event: CalendarEvent) => void;
        };
        data.remove_fn(event);
        expect(remove).toHaveBeenCalledWith(event);
    });

    it('should not open details for system events', () => {
        const dialog = spectator.inject(MatDialog);
        spectator.service.viewEvent(
            { is_system_event: true } as CalendarEvent,
            vi.fn(),
        );
        expect(dialog.open).not.toHaveBeenCalled();
    });

    it('should load building events when no levels are selected', async () => {
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(last_event_params()).toEqual(
            expect.objectContaining({
                zone_ids: 'bld-123',
                strict: 'limit',
                period_start: `${getUnixTime(startOfDay(Date.now()))}`,
                period_end: `${getUnixTime(endOfDay(Date.now()))}`,
            }),
        );
    });

    it('should allow polling of events for day', async () => {
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(last_event_params()).toEqual(
            expect.objectContaining({
                zone_ids: 'bld-123',
                strict: 'limit',
                period_start: `${getUnixTime(startOfDay(Date.now()))}`,
                period_end: `${getUnixTime(endOfDay(Date.now()))}`,
            }),
        );
    });

    it('should debounce rapid zone changes before loading events', async () => {
        spectator.service.setZones(['bld-a']);
        spectator.service.setZones(['bld-b']);
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();

        expect(event_get_calls()).toHaveLength(1);
        expect(last_event_params()).toEqual(
            expect.objectContaining({ zone_ids: 'bld-123' }),
        );
    });

    it('should allow polling of events for week', async () => {
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('week');
        await settle();
        spectator.service.stopPolling();
        expect(last_event_params()).toEqual(
            expect.objectContaining({
                zone_ids: 'bld-123',
                strict: 'limit',
                period_start: `${getUnixTime(startOfWeek(Date.now()))}`,
                period_end: `${getUnixTime(endOfWeek(Date.now()))}`,
            }),
        );
    });

    it('should respect the configured week start when polling for week', async () => {
        week_start = 1;
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('week');
        await settle();
        spectator.service.stopPolling();
        expect(last_event_params()).toEqual(
            expect.objectContaining({
                zone_ids: 'bld-123',
                strict: 'limit',
                period_start: `${getUnixTime(
                    startOfWeek(Date.now(), { weekStartsOn: 1 }),
                )}`,
                period_end: `${getUnixTime(
                    endOfWeek(Date.now(), { weekStartsOn: 1 }),
                )}`,
            }),
        );
    });

    it('should allow polling of events for month', async () => {
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('month');
        await settle();
        spectator.service.stopPolling();
        expect(last_event_params()).toEqual(
            expect.objectContaining({
                zone_ids: 'bld-123',
                strict: 'limit',
                period_start: `${getUnixTime(startOfMonth(Date.now()))}`,
                period_end: `${getUnixTime(endOfMonth(Date.now()))}`,
            }),
        );
    });

    describe('removeBooking', () => {
        const booking = () =>
            new CalendarEvent({
                id: 'evt-1',
                date: Date.now(),
                duration: 60,
                host: 'host@place.tech',
                // Matches a loaded space, so the API loader keeps it
                resources: [{ email: '1' } as any],
            });
        const listed_ids = () =>
            spectator.service.filtered().map((event) => event.id);
        /** Load the booking from the API, as the day view does */
        const loadBooking = async () => {
            vi.mocked(ts_client.get).mockResolvedValue([
                booking().toJSON(),
            ] as never);
            spectator.service.startPolling('day');
            await settle();
            spectator.service.stopPolling();
            return spectator.service.filtered()[0];
        };

        beforeEach(() => {
            // The confirm modal resolves at once as confirmed
            vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
                componentInstance: {
                    event: of({ reason: 'done' }),
                    loading: { set: vi.fn() },
                },
                afterClosed: () => NEVER,
                close: vi.fn(),
            } as any);
        });

        it('should decline the event and drop it from the list', async () => {
            vi.mocked(ts_client.post).mockResolvedValue({
                id: 'evt-1',
            } as never);
            const event = await loadBooking();
            expect(listed_ids()).toEqual(['evt-1']);

            expect(await spectator.service.removeBooking(event)).toBe(true);

            expect(ts_client.post).toHaveBeenCalledWith(
                expect.stringContaining('/events/evt-1/decline?calendar=host'),
                '',
            );
            expect(listed_ids()).toEqual([]);
            expect(spectator.inject(MatDialog).closeAll).toHaveBeenCalled();
        });

        it('should hide the event while the decline runs and show it again on failure', async () => {
            let rejectDecline: (error: Error) => void;
            vi.mocked(ts_client.post).mockReturnValue(
                new Promise((_, reject) => (rejectDecline = reject)) as never,
            );
            const event = await loadBooking();

            const removal = spectator.service.removeBooking(event);
            await vi.waitFor(() => expect(ts_client.post).toHaveBeenCalled());
            expect(listed_ids()).toEqual([]);

            const error = new Error('502');
            rejectDecline(error);
            await expect(removal).rejects.toBe(error);

            expect(listed_ids()).toEqual(['evt-1']);
        });
    });
});

describe('EventsStateService levels', () => {
    let spectator: SpectatorService<EventsStateService>;
    const levels = [
        new BuildingLevel({ id: 'lvl-rooms', parent_id: 'bld-levels' }),
        new BuildingLevel({ id: 'lvl-desks', parent_id: 'bld-levels' }),
        new BuildingLevel({ id: 'lvl-empty', parent_id: 'bld-levels' }),
    ];
    const createService = createServiceFactory({
        service: EventsStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building({ id: 'bld-levels' }),
                active_region: signal(undefined),
                active_building: signal({ id: 'bld-levels' }),
                active_levels: signal(levels),
            } as any),
            MockProvider(SettingsService, { get: (() => false) as any }),
            MockProvider(SpacesService, { find: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                {
                    id: 'room',
                    email: 'room@place.os',
                    bookable: true,
                    zones: ['bld-levels', 'lvl-rooms'],
                },
                {
                    id: 'desk-area',
                    email: 'desks@place.os',
                    bookable: false,
                    zones: ['bld-levels', 'lvl-desks'],
                },
            ],
        } as any);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        spectator = createService();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.clearAllMocks();
    });

    it('should list levels with bookable rooms from one building query', async () => {
        await settle();
        expect(spectator.service.levels().map(({ id }) => id)).toEqual([
            'lvl-rooms',
        ]);
        const zone_ids = vi
            .mocked(ts_client.querySystems)
            .mock.calls.map(([query]) => query?.zone_id);
        expect(zone_ids).toEqual(['bld-levels']);
    });
});
