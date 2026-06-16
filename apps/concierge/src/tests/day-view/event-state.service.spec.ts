import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SpacesService } from '@placeos/events';
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

jest.mock('@placeos/events');

import * as events_mod from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import {
    Building,
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
        TestBed.tick();
        await Promise.resolve();
    }
}

describe('EventsStateService', () => {
    let spectator: SpectatorService<EventsStateService>;
    let week_start = 0;
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
                buildingsForRegion: jest.fn(() => [
                    new Building({ id: 'bld-123', parent_id: 'reg-123' }),
                ]),
            } as any),
            MockProvider(SettingsService, {
                get: ((name: string) =>
                    name === 'app.week_start' ? week_start : false) as any,
            } as any),
            MockProvider(SpacesService, { find: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        week_start = 0;
        // Mock requestSpacesForZone to return spaces without room_booking_url.
        // The service bridges this observable to a promise via nextValueFrom.
        (events_mod as any).requestSpacesForZone = jest.fn(() =>
            of([
                { id: 'space-1', email: '1', bookable: true },
                { id: 'space-2', email: '2', bookable: true },
            ]),
        );
        spectator = createService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list events', async () => {
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(spectator.service.event_list()).toHaveLength(0);
        (events_mod as any).queryEvents = jest.fn(() =>
            Promise.resolve([
                { resources: [{ email: '1' }] },
                { resources: [{ email: '2' }] },
            ]),
        );
        spectator.service.setZones(['bld-234']);
        await settle();
        expect(spectator.service.event_list()).toHaveLength(2);
    });

    it('should allow filtering of listed events', async () => {
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(spectator.service.filtered()).toHaveLength(0);
        (events_mod as any).queryEvents = jest.fn(() =>
            Promise.resolve([
                {},
                {
                    date: Date.now(),
                    resources: [{ email: '1', zones: ['bld-234'] }],
                },
            ]),
        );
        spectator.service.setZones([]);
        await settle();
        // expect(spectator.service.filtered()).toHaveLength(1);
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

    it('should load building events when no levels are selected', async () => {
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(events_mod.queryEvents).toHaveBeenCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
        });
    });

    it('should allow polling of events for day', async () => {
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('day');
        await settle();
        spectator.service.stopPolling();
        expect(events_mod.queryEvents).toHaveBeenCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
        });
    });

    it('should allow polling of events for week', async () => {
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('week');
        await settle();
        spectator.service.stopPolling();
        expect(events_mod.queryEvents).toHaveBeenCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfWeek(Date.now())),
            period_end: getUnixTime(endOfWeek(Date.now())),
        });
    });

    it('should respect the configured week start when polling for week', async () => {
        week_start = 1;
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('week');
        await settle();
        spectator.service.stopPolling();
        expect(events_mod.queryEvents).toHaveBeenCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(
                startOfWeek(Date.now(), { weekStartsOn: 1 }),
            ),
            period_end: getUnixTime(endOfWeek(Date.now(), { weekStartsOn: 1 })),
        });
    });

    it('should allow polling of events for month', async () => {
        (events_mod as any).queryEvents = jest.fn(() => Promise.resolve([]));
        spectator.service.setZones(['bld-123']);
        spectator.service.startPolling('month');
        await settle();
        spectator.service.stopPolling();
        expect(events_mod.queryEvents).toHaveBeenCalledWith({
            zone_ids: 'bld-123',
            strict: 'limit',
            period_start: getUnixTime(startOfMonth(Date.now())),
            period_end: getUnixTime(endOfMonth(Date.now())),
        });
    });

    it.todo('should allow adding new events');
    it.todo('should allow updating existing events');
    it.todo('should allow removing existing events');
});
