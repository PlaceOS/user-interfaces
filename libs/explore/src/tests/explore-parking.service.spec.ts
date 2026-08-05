import { ApplicationRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import { addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { ParkingService } from 'libs/bookings/src/lib/parking.service';

import { ExploreParkingService } from '../lib/explore-parking.service';
import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

// Workspace modules (@placeos/assets, bookings.fn, notifications) run for
// real; only the ts-client API layer beneath them is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('ExploreParkingService', () => {
    let spectator: SpectatorService<ExploreParkingService>;
    const active_level = signal({ id: 'lvl-1' }) as any;
    const createService = createServiceFactory({
        service: ExploreParkingService,
        providers: [
            MockProvider(ExploreStateService, {
                level: active_level,
                options: signal({ is_public: false }) as any,
                setActions: vi.fn(),
                setStyles: vi.fn(),
                setFeatures: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }) as any,
                active_levels: signal([]) as any,
                organisation: { id: 'org-1' } as any,
                region: { id: 'region-1' } as any,
                levelWithID: vi.fn(() => ({
                    id: 'lvl-1',
                    parent_id: 'bld-1',
                })) as any,
            }),
            MockProvider(SettingsService, {
                get: vi.fn(),
                app_name: 'workplace',
            }),
            MockProvider(BookingFormService, {
                newForm: vi.fn(),
                setOptions: vi.fn(),
                model: signal({}) as any,
                confirmPost: vi.fn().mockResolvedValue({}),
            }),
            MockProvider(ParkingService, {
                users: signal([]) as any,
                assigned_space: signal(null) as any,
                deny_parking_access: signal(false) as any,
                booked_space: signal(null) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        active_level.set({ id: 'lvl-1' });
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        } as any);
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [{ id: 'cat-parking', name: '_PARKING_', hidden: true }],
        } as any);
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [
                {
                    id: 'type-parking',
                    name: '_PARKING_SPACES_',
                    category_id: 'cat-parking',
                },
            ],
        } as any);
        vi.mocked(ts_client.queryAssets).mockResolvedValue({
            data: [],
        } as any);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should default booking to enabled', () => {
        expect(spectator.service.options().enable_booking).toBe(true);
    });

    it('should update options via setOptions', () => {
        spectator.service.setOptions({ date: 123, custom: true });
        expect(spectator.service.options().date).toBe(123);
        expect(spectator.service.options().custom).toBe(true);
    });

    it('should query parking bookings around the set time', async () => {
        const date = new Date('2026-07-09T13:45:00+10:00').valueOf();
        vi.mocked(ts_client.query).mockClear();

        spectator.service.setOptions({ date });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();

        const call = vi
            .mocked(ts_client.query)
            .mock.calls.find(
                ([options]) =>
                    (options as any).query_params?.type === 'parking',
            );
        expect(call).toBeTruthy();
        const params = (call[0] as any).query_params;
        expect(params.period_start).toBe(getUnixTime(addMinutes(date, -15)));
        expect(params.period_end).toBe(getUnixTime(addMinutes(date, 30)));
        expect(params.zones).toBe('lvl-1');
    });

    it('should query all parking bookings for the selected day', async () => {
        const date = new Date('2026-07-09T13:45:00+10:00').valueOf();
        vi.mocked(ts_client.query).mockClear();

        spectator.service.setOptions({ date, all_day: true });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();

        const call = vi
            .mocked(ts_client.query)
            .mock.calls.find(
                ([options]) =>
                    (options as any).query_params?.type === 'parking',
            );
        expect(call).toBeTruthy();
        const params = (call[0] as any).query_params;
        expect(params.period_start).toBe(getUnixTime(startOfDay(date)));
        expect(params.period_end).toBe(getUnixTime(endOfDay(date)));
    });

    it('should clamp all-day parking queries to bookable hours', async () => {
        // The clamp applies `bookable_hours` with `Date#setHours`, which is the
        // machine's timezone, so the input and the expectations below are all
        // built from local components. Writing them as a fixed UTC offset pins
        // the test to a runner in that zone — on a UTC runner the expected
        // start came out ten hours adrift.
        const date = new Date(2026, 6, 9, 13, 45).valueOf();
        const settings = spectator.inject(SettingsService);
        vi.mocked(settings.get).mockImplementation((key) =>
            key === 'app.parking.bookable_hours'
                ? { start: 8, end: 18 }
                : undefined,
        );
        vi.mocked(ts_client.query).mockClear();

        spectator.service.setOptions({ date, all_day: true });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();

        const call = vi
            .mocked(ts_client.query)
            .mock.calls.find(
                ([options]) =>
                    (options as any).query_params?.type === 'parking',
            );
        const params = (call[0] as any).query_params;
        expect(params.period_start).toBe(
            getUnixTime(new Date(2026, 6, 9, 8, 0, 0, 0)),
        );
        expect(params.period_end).toBe(
            getUnixTime(new Date(2026, 6, 9, 18, 0, 0, 0)),
        );
    });

    it('should query parking availability for the selected duration', async () => {
        const date = new Date('2026-07-09T14:00:00+10:00').valueOf();
        vi.mocked(ts_client.query).mockClear();

        spectator.service.setOptions({
            date,
            all_day: false,
            duration: 60,
        });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();

        const call = vi
            .mocked(ts_client.query)
            .mock.calls.find(
                ([options]) =>
                    (options as any).query_params?.type === 'parking',
            );
        const params = (call[0] as any).query_params;
        expect(params.period_start).toBe(getUnixTime(date));
        expect(params.period_end).toBe(getUnixTime(addMinutes(date, 60)));
    });

    it('should query parking status bookings for the active map level', async () => {
        active_level.set({ id: 'lvl-2' });
        vi.mocked(ts_client.query).mockClear();

        spectator.service.setOptions({ date: 123 });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();

        const call = vi
            .mocked(ts_client.query)
            .mock.calls.find(
                ([options]) =>
                    (options as any).query_params?.type === 'parking',
            );
        expect(call).toBeTruthy();
        expect((call[0] as any).query_params.zones).toBe('lvl-2');
    });

    it('should load every page of parking status bookings', async () => {
        const next = vi.fn().mockResolvedValue({
            data: [new Booking({ id: 'b2', asset_id: 'p2' })],
            total: 2,
            next: null,
        });
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [new Booking({ id: 'b1', asset_id: 'p1' })],
            total: 2,
            next,
        } as any);

        spectator.service.setOptions({ date: 123 });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();

        expect(next).toHaveBeenCalled();
        expect(spectator.service.events().map((_) => _.asset_id)).toEqual([
            'p1',
            'p2',
        ]);
    });

    it('should default the parking status query to the current time', async () => {
        const now = new Date('2026-07-09T13:45:00+10:00');
        const date_now = vi.spyOn(Date, 'now').mockReturnValue(now.valueOf());
        vi.mocked(ts_client.query).mockClear();

        spectator.service.setOptions({ date: undefined });
        TestBed.flushEffects();
        await TestBed.inject(ApplicationRef).whenStable();
        date_now.mockRestore();

        const call = vi
            .mocked(ts_client.query)
            .mock.calls.find(
                ([options]) =>
                    (options as any).query_params?.type === 'parking',
            );
        expect(call).toBeTruthy();
        const params = (call[0] as any).query_params;
        expect(params.period_start).toBe(
            getUnixTime(addMinutes(now.valueOf(), -15)),
        );
        expect(params.period_end).toBe(
            getUnixTime(addMinutes(now.valueOf(), 30)),
        );
    });

    it('should only expose levels tagged as parking', () => {
        const org = spectator.inject(OrganisationService);
        (org.active_levels as any).set([
            { id: 'l1', tags: ['parking'] },
            { id: 'l2', tags: ['desks'] },
        ]);
        const levels = spectator.service.levels();
        expect(levels.length).toBe(1);
        expect(levels[0].id).toBe('l1');
    });

    it('should limit active spaces to the current level', () => {
        (spectator.service as any)._spaces = {
            value: () => [
                { id: 'p1', zone_id: 'lvl-1' },
                { id: 'p2', zone_id: 'lvl-2' },
            ],
        };
        const active = spectator.service.active_spaces();
        expect(active.length).toBe(1);
        expect(active[0].id).toBe('p1');
    });

    it('should register styles, features and actions for parking spaces', () => {
        const state = spectator.inject(ExploreStateService);
        const space = {
            id: 'p1',
            map_id: 'p1',
            name: 'Space 1',
            bookable: true,
            zone_id: 'lvl-1',
        };
        (spectator.service as any)._updateParkingSpaces([space], [space]);
        expect(state.setStyles).toHaveBeenCalledWith('parking', {
            '#p1': { fill: DEFAULT_COLOURS['free'], opacity: 0.6 },
        });
        const [, features] = vi.mocked(state.setFeatures).mock.calls[0];
        expect(features.length).toBe(1);
        expect(features[0].location).toBe('p1');
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        expect(actions.length).toBe(1);
        expect(actions[0].id).toBe('p1');
    });

    it('should mark non-bookable spaces and register no action for them', () => {
        const state = spectator.inject(ExploreStateService);
        const space = {
            id: 'p1',
            map_id: 'p1',
            name: 'Space 1',
            bookable: false,
            zone_id: 'lvl-1',
        };
        (spectator.service as any)._updateParkingSpaces([space], []);
        expect(state.setStyles).toHaveBeenCalledWith('parking', {
            '#p1': { fill: DEFAULT_COLOURS['not-bookable'], opacity: 0.6 },
        });
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        expect(actions.length).toBe(0);
    });

    it('should delegate to on_book when a booking action fires', async () => {
        const state = spectator.inject(ExploreStateService);
        const space = {
            id: 'p1',
            map_id: 'p1',
            name: 'Space 1',
            bookable: true,
            zone_id: 'lvl-1',
        };
        const on_book = vi.fn().mockResolvedValue(undefined);
        spectator.service.on_book = on_book;
        (spectator.service as any)._updateParkingSpaces([space], [space]);
        const [, actions] = vi.mocked(state.setActions).mock.calls[0];
        await actions[0].callback(new Event('mouseup'));
        expect(on_book).toHaveBeenCalledWith(space);
    });

    it('should provide a stop function from startPolling', () => {
        const stop = spectator.service.startPolling();
        expect(typeof stop).toBe('function');
        stop();
    });
});
