import { EventEmitter, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    SettingsService,
    setTimeInTimezone,
} from '@placeos/common';
import { addHours, addMinutes, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { LockerStateService } from '../../app/lockers/locker-state.service';

vi.mock('@placeos/ts-client', { spy: true });

const CATEGORY_STUB = {
    data: [{ id: 'cat-lockers', name: '_LOCKERS_', hidden: true }],
    total: 1,
    next: null,
};
const TYPE_STUB = {
    data: [
        {
            id: 'type-locker-banks',
            name: '_LOCKER_BANKS_',
            category_id: 'cat-lockers',
        },
        { id: 'type-lockers', name: '_LOCKERS_', category_id: 'cat-lockers' },
    ],
    total: 2,
    next: null,
};

describe('LockerStateService', () => {
    let spectator: SpectatorService<LockerStateService>;
    let current_building: any;
    let settings_map: Record<string, any>;

    const organisation_service: any = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
        region: { id: 'region-1' },
        level_list: signal([]),
        buildingsForRegion: vi.fn(() => []),
        levelsForBuilding: vi.fn(() => []),
        get building() {
            return current_building;
        },
    };

    const createService = createServiceFactory({
        service: LockerStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    /** Reset ts-client boundary spies with safe defaults for service bootstrap */
    const stubTsClient = () => {
        (ts_client.queryAssetCategories as any).mockReset();
        (ts_client.queryAssetCategories as any).mockResolvedValue(CATEGORY_STUB);
        (ts_client.queryAssetTypes as any).mockReset();
        (ts_client.queryAssetTypes as any).mockResolvedValue(TYPE_STUB);
        (ts_client.queryAssets as any).mockReset();
        (ts_client.queryAssets as any).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        });
        (ts_client.query as any).mockReset();
        (ts_client.query as any).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        });
        (ts_client.get as any).mockReset();
        (ts_client.get as any).mockResolvedValue([]);
        (ts_client.post as any).mockReset();
        (ts_client.post as any).mockResolvedValue({});
        (ts_client.patch as any).mockReset();
        (ts_client.patch as any).mockResolvedValue({});
        (ts_client.del as any).mockReset();
        (ts_client.del as any).mockResolvedValue(undefined);
        (ts_client.addAsset as any).mockReset();
        (ts_client.addAsset as any).mockResolvedValue({ id: 'locker-1' });
        (ts_client.updateAsset as any).mockReset();
        (ts_client.updateAsset as any).mockResolvedValue({ id: 'locker-1' });
    };

    /** Paged booking listing requests (queryPagedBookings -> query path '') */
    const pagedBookingCalls = () =>
        (ts_client.query as any).mock.calls.filter(
            (c: any[]) => c[0]?.path === '' && c[0]?.endpoint?.includes('booking'),
        );
    /** Locker asset queries by resolved asset type */
    const assetQueryCalls = (type_id: string) =>
        (ts_client.queryAssets as any).mock.calls.filter(
            (c: any[]) => c[0]?.type_id === type_id,
        );

    beforeEach(() => {
        vi.useFakeTimers();
        organisation_service.level_list.set([]);
        organisation_service.buildingsForRegion.mockImplementation(() => []);
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        settings_map = {
            'app.use_region': false,
            'app.bookings.use_building_timezone': true,
        };
        organisation_service.active_building = signal(current_building);
        organisation_service.active_region = signal({ id: 'region-1' });
        stubTsClient();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    async function settle(rounds = 4) {
        for (let i = 0; i < rounds; i++) {
            await vi.advanceTimersByTimeAsync(500);
            TestBed.flushEffects();
        }
    }

    it('should list parking-only levels last', () => {
        spectator = createService();
        organisation_service.buildingsForRegion.mockReturnValue([
            { id: 'bld-1' },
        ]);
        organisation_service.level_list.set([
            { id: 'lvl-parking', parent_id: 'bld-1', tags: ['level', 'parking'] },
            { id: 'lvl-ground', parent_id: 'bld-1', tags: ['level'] },
        ]);

        expect(spectator.service.levels().map((lvl: any) => lvl.id)).toEqual([
            'lvl-ground',
            'lvl-parking',
        ]);
    });

    it('should apply building timezone to locker booking listing requests', () => {
        const date = new Date('2026-06-15T12:00:00').valueOf();
        spectator = createService();
        const first_page = (spectator.service as any)._buildFirstPage({ date });
        first_page();

        const offset = spectator.service.tz_offset;
        const paged = pagedBookingCalls();
        expect(paged.length).toBeGreaterThan(0);
        expect(paged[paged.length - 1][0].query_params).toEqual(
            expect.objectContaining({
                period_start: getUnixTime(
                    addMinutes(startOfDay(date), offset * 60),
                ),
                period_end: getUnixTime(
                    addMinutes(endOfDay(date), offset * 60),
                ),
            }),
        );
    });

    it('should not reload locker bookings when loading state changes', async () => {
        spectator = createService();
        await settle();

        expect(pagedBookingCalls()).toHaveLength(1);
    });

    it('should stop locker booking pagination when a page is empty', async () => {
        spectator = createService();
        const next_page = vi.fn();
        const empty_page = vi.fn().mockResolvedValue({
            data: [],
            total: 2,
            next: next_page,
        });
        const booking = { id: 'booking-1' };
        (spectator.service as any)._bookings_state.set({
            list: [booking],
            total: 2,
            has_next: true,
        });
        (spectator.service as any)._next_page_fn = empty_page;

        await (spectator.service as any)._loadPage(false);

        expect(spectator.service.bookings()).toEqual([booking]);
        expect(spectator.service.has_more_pages()).toBe(false);
        expect((spectator.service as any)._next_page_fn).toBeNull();
        expect(next_page).not.toHaveBeenCalled();
    });

    it('should wait for locker banks before loading lockers', async () => {
        let resolve_banks: (value: any) => void;
        (ts_client.queryAssets as any).mockImplementation((q: any) => {
            if (q?.type_id === 'type-locker-banks') {
                return new Promise((resolve) => (resolve_banks = resolve));
            }
            return Promise.resolve({ data: [], total: 0, next: null });
        });
        spectator = createService();
        await settle();
        expect(assetQueryCalls('type-lockers')).toHaveLength(0);

        resolve_banks({ data: [], total: 0, next: null });
        await Promise.resolve();
        await settle();

        expect(assetQueryCalls('type-lockers')).toHaveLength(1);
    });

    it('should tolerate malformed locker metadata', async () => {
        (ts_client.queryAssets as any).mockImplementation((q: any) => {
            if (q?.type_id === 'type-locker-banks') {
                return Promise.resolve({
                    data: [{ id: 'bank-1', zone_id: 'bld-1' }],
                    total: 1,
                    next: null,
                });
            }
            return Promise.resolve({
                data: [
                    {
                        id: 'locker-1',
                        parent_id: 'bank-1',
                        other_data: {
                            position: '1,2',
                            size: '1x1',
                            features: 'power',
                        },
                    },
                ],
                total: 1,
                next: null,
            });
        });

        spectator = createService();
        await settle();

        expect(spectator.service.lockers()).toEqual([
            expect.objectContaining({
                id: 'locker-1',
                position: [0, 0],
                size: [1, 1],
                features: [],
            }),
        ]);
    });

    it('should use the building timezone for assigned locker bookings', async () => {
        const mock_now = new Date('2026-06-15T12:00:00Z').valueOf();
        const assigned_start = setTimeInTimezone(
            mock_now,
            2,
            0,
            'Australia/Sydney',
        );
        spectator = createService();
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'locker-1',
                        name: 'Locker 1',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        (ts_client.addAsset as any).mockResolvedValue({ id: 'locker-1' });
        vi.spyOn(Date, 'now').mockReturnValue(mock_now);

        await spectator.service.editLocker({ id: 'bank-1', tags: [] } as any);

        // saveBooking(no id) -> createBooking -> post(url, data)
        const booking_post = (ts_client.post as any).mock.calls.find(
            (c: any[]) =>
                typeof c[0] === 'string' && c[0].includes('/bookings'),
        );
        expect(booking_post).toBeTruthy();
        expect(booking_post[1]).toEqual(
            expect.objectContaining({
                booking_start: getUnixTime(assigned_start),
                booking_end: getUnixTime(assigned_start + 20 * 60 * 60 * 1000),
            }),
        );
    });
});
