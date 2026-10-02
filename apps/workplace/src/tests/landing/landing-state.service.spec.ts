import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    CalendarEvent,
    Organisation,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import { CalendarService } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('LandingStateService', () => {
    let spectator: SpectatorService<LandingStateService>;
    const active_building = signal<any>(null);
    const filtered_bookings = signal<(Booking | CalendarEvent)[]>([]);
    const flush = async () => {
        for (let i = 0; i < 5; i++) {
            TestBed.flushEffects();
            // Macrotask so the effect's await chain (showMetadata → rxjs
            // from().toPromise()) fully drains between rounds.
            await new Promise((resolve) => setTimeout(resolve));
        }
    };
    const createService = createServiceFactory({
        service: LandingStateService,
        providers: [
            MockProvider(CalendarService, {
                freeBusy: vi.fn(() => of([])),
            } as any),
            MockProvider(ScheduleStateService, {
                filtered_bookings,
            }),
            MockProvider(OrganisationService, {
                levels: [],
                binding: vi.fn(() => null),
                active_building,
                active_levels: signal([]),
                organisation: new Organisation(),
                initialised: signal(true),
                levelWithID: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        active_building.set(null);
        filtered_bookings.set([]);
        vi.clearAllMocks();
        // `requestSpacesForZone` (a workspace fn that can't be spied) calls
        // ts-client `querySystems` under the hood, so control the space list
        // one layer down.
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({
                bindThenSubscribe: vi.fn(() => vi.fn()),
            })),
        } as any);
    });

    // Root effects from a previous test's service stay alive on the shared
    // `active_building` signal unless the testing module is torn down, which
    // makes the leaked instance re-bind space statuses in later tests.
    afterEach(() => {
        TestBed.resetTestingModule();
        vi.useRealTimers();
    });

    it('should create service', () => {
        spectator = createService();
        expect(spectator.service).toBeTruthy();
    });

    it('should exclude cancelled history before the five-card limit', async () => {
        const date = new Date().setHours(12, 0, 0, 0);
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(date);
        const cancelled = Array.from(
            { length: 5 },
            (_, index) =>
                new Booking({
                    id: `cancelled-${index}`,
                    booking_type: 'desk',
                    date: date + 60_000,
                    duration: 60,
                    deleted: true,
                }),
        );
        const active = new Booking({
            id: 'active-desk',
            booking_type: 'desk',
            date: date + 120_000,
            duration: 60,
        });
        filtered_bookings.set([...cancelled, active]);
        spectator = createService();
        await flush();

        expect(spectator.service.upcoming_events()).toEqual([active]);

        filtered_bookings.set(cancelled);
        await flush();
        expect(spectator.service.upcoming_events()).toEqual([]);
    });

    it('should keep current and upcoming bookings for a fresh account', async () => {
        const date = new Date().setHours(12, 0, 0, 0);
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(date);
        const current = new Booking({ date: date - 60_000, duration: 60 });
        const upcoming = new Booking({ date: date + 60_000, duration: 60 });
        const meeting = new CalendarEvent({
            date: date + 120_000,
            duration: 60,
        });
        filtered_bookings.set([
            new Booking({ date: date - 7_200_000, duration: 60 }),
            current,
            upcoming,
            meeting,
            new Booking({ date: date + 86_400_000, duration: 60 }),
        ]);
        spectator = createService();
        await flush();

        expect(spectator.service.upcoming_events()).toEqual([
            current,
            upcoming,
            meeting,
        ]);
    });

    it('should exclude explicit cancellations and cancelled calendar events', async () => {
        const date = new Date().setHours(12, 0, 0, 0);
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(date);
        filtered_bookings.set([
            new Booking({ date, duration: 60, status: 'cancelled' }),
            new CalendarEvent({ date, duration: 60, deleted: true }),
        ]);
        spectator = createService();
        await flush();

        expect(spectator.service.upcoming_events()).toEqual([]);
    });

    it('should not rebind space status when a status value is received', async () => {
        const bindThenSubscribe = vi.fn((callback) => {
            callback('free');
            return vi.fn();
        });
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                {
                    id: 'space-1',
                    bookable: true,
                    capacity: 2,
                    zones: ['bld-1'],
                },
            ],
        } as any);
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({ bindThenSubscribe })),
        } as any);

        active_building.set({ id: 'bld-1' });
        spectator = createService();
        await flush();

        // User-dependent booking rules may rebind when the current-user signal
        // settles. Assert stability after settling instead of an absolute
        // count: a status emission re-triggering the
        // binding effect would add calls on every flush round.
        const settled_count = bindThenSubscribe.mock.calls.length;
        expect(settled_count).toBeGreaterThanOrEqual(1);
        await flush();
        expect(bindThenSubscribe.mock.calls.length).toBe(settled_count);
    });
});
