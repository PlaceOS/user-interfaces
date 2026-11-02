import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockPipe } from 'ng-mocks';

import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import * as ts_client from '@placeos/ts-client';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

describe('ReportsOptionsComponent', () => {
    let spectator: Spectator<ReportsOptionsComponent>;
    let navigate: any;
    let query_params: Record<string, unknown>;
    let settings_map: Record<string, unknown>;
    const createComponent = createComponentFactory({
        component: ReportsOptionsComponent,
        declarations: [
            MockComponent(DateRangeFieldComponent),
            MockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
            MockPipe(BuildingPipe),
        ],
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    active_building: signal({ id: 'bld-1' }),
                    active_region: signal({ id: 'region-1' }),
                    levelsForBuilding: vi.fn(() => [{ id: 'lvl-1' }]),
                    levelsForRegion: vi.fn(() => []),
                    waitUntilInitialised: vi.fn(() => Promise.resolve()),
                },
            },
            {
                provide: SettingsService,
                useValue: { get: (key: string) => settings_map[key] },
            },
            {
                provide: Router,
                useValue: { navigate },
            },
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: { queryParams: query_params },
                    queryParamMap: { subscribe: vi.fn() },
                },
            },
        ],
    });

    beforeEach(() => {
        navigate = vi.fn();
        query_params = {};
        settings_map = { 'app.use_region': false, 'app.week_start': 1 };
        spectator = createComponent({
            providers: [
                { provide: Router, useValue: { navigate } },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: { queryParams: query_params },
                        queryParamMap: { subscribe: vi.fn() },
                    },
                },
            ],
        });
    });

    it('should apply URL dates when the selected level is not loaded', async () => {
        const route = spectator.inject(ActivatedRoute) as any;
        route.queryParamMap = of(
            convertToParamMap({
                zone_ids: 'lvl-missing',
                start: '1000',
                end: '2000',
            }),
        );
        const org = spectator.inject(OrganisationService) as any;
        org.levelWithID = vi.fn(() => null);

        await spectator.component.ngOnInit();

        expect(spectator.component.start()).toBe(1000);
        expect(spectator.component.end()).toBe(2000);
    });

    it('should update the start date and merge it into the query params', () => {
        spectator.component.setStartDate(new Date('2026-04-06T00:00:00'));
        expect(spectator.component.start()).toBe(
            new Date('2026-04-06T00:00:00').valueOf(),
        );
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: {
                    start: new Date('2026-04-06T00:00:00').valueOf(),
                    end: spectator.component.end(),
                },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('should keep both dates when start and end change together', () => {
        const start = new Date('2026-09-25T00:00:00').valueOf();

        spectator.component.setStartDate(start);
        spectator.component.setEndDate(start);

        // Each URL update carries both dates, so the last one is complete.
        expect(navigate.mock.calls.at(-1)[1].queryParams).toEqual({
            start,
            end: new Date('2026-09-25T23:59:59.999').valueOf(),
        });
    });

    it('should snap the end date to the end of day', () => {
        spectator.component.setEndDate(new Date('2026-04-06T09:00:00'));
        const end_of_day = new Date('2026-04-06T23:59:59.999').valueOf();
        expect(spectator.component.end()).toBe(end_of_day);
    });

    it('should serialise selected zones into the zone_ids query param', () => {
        spectator.component.setZones(['lvl-1', 'lvl-2']);
        expect(spectator.component.zones()).toEqual(['lvl-1', 'lvl-2']);
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { zone_ids: 'lvl-1,lvl-2' },
            }),
        );
    });

    it('should drop the zone_ids param when no zones are selected', () => {
        spectator.component.setZones([]);
        const call = navigate.mock.calls.at(-1);
        expect(call[1].queryParams.zone_ids).toBeUndefined();
    });

    it('should find desk asset levels when reporting on a building', async () => {
        settings_map['app.desks.use_assets'] = true;
        const page = (data: any[]) =>
            Promise.resolve({ data, total: data.length, next: () => null });
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            page([{ id: 'cat-1', name: '_DESKS_' }]) as any,
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            page([{ id: 'type-1', name: '_DESKS_' }]) as any,
        );
        // desk assets list their building in `zones`, `zone_id` is the level
        vi.mocked(ts_client.queryAssets).mockImplementation(
            (query: any) =>
                page(
                    query.zones === 'bld-report-1'
                        ? [
                              {
                                  id: 'asset-1',
                                  zone_id: 'lvl-1',
                                  zones: ['org-1', 'bld-report-1', 'lvl-1'],
                                  bookable: true,
                              },
                          ]
                        : [],
                ) as any,
        );

        const zones = await (spectator.component as any)._requestResourceZones(
            [{ id: 'lvl-1' }, { id: 'lvl-2' }],
            'desks',
            'bld-report-1',
        );

        expect([...zones]).toContain('lvl-1');
        expect([...zones]).not.toContain('lvl-2');
        // one query for the building rather than one per level
        expect(ts_client.queryAssets).toHaveBeenCalledTimes(1);
    });

    it('should find parking and locker asset levels with one building query', async () => {
        vi.mocked(ts_client.queryAssets).mockClear();
        const page = (data: any[]) =>
            Promise.resolve({ data, total: data.length, next: () => null });
        const types = [
            {
                id: 'type-parking',
                name: '_PARKING_SPACES_',
                category_id: 'cat-parking',
            },
            {
                id: 'type-banks',
                name: '_LOCKER_BANKS_',
                category_id: 'cat-lockers',
            },
            {
                id: 'type-lockers',
                name: '_LOCKERS_',
                category_id: 'cat-lockers',
            },
        ];
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            page([
                { id: 'cat-parking', name: '_PARKING_' },
                { id: 'cat-lockers', name: '_LOCKERS_' },
            ]) as any,
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            page(types) as any,
        );
        const zones = ['org-1', 'bld-report-1', 'lvl-1'];
        vi.mocked(ts_client.queryAssets).mockImplementation((query: any) => {
            if (query.zones !== 'bld-report-1') return page([]) as any;
            switch (query.type_id) {
                case 'type-parking':
                    return page([
                        { id: 'bay-1', zone_id: 'lvl-1', zones },
                    ]) as any;
                case 'type-banks':
                    return page([
                        { id: 'bank-1', zone_id: 'lvl-1', zones },
                    ]) as any;
                default:
                    return page([
                        { id: 'locker-1', parent_id: 'bank-1', bookable: true },
                    ]) as any;
            }
        });
        const levels = [{ id: 'lvl-1' }, { id: 'lvl-2' }];

        const parking = await (
            spectator.component as any
        )._requestResourceZones(levels, 'parking', 'bld-report-1');
        const lockers = await (
            spectator.component as any
        )._requestResourceZones(levels, 'lockers', 'bld-report-1');

        expect([...parking]).toContain('lvl-1');
        expect([...lockers]).toContain('lvl-1');
        expect([...lockers]).not.toContain('lvl-2');
        // one building query per asset type rather than one per level
        const queries = vi
            .mocked(ts_client.queryAssets)
            .mock.calls.map(([query]: any[]) => query);
        expect(
            queries.filter((query) => query.zones === 'bld-report-1'),
        ).toHaveLength(3);
        expect(queries.some((query) => query.zone_id)).toBe(false);
    });

    it('should keep parking levels selectable when no spaces are returned', async () => {
        vi.spyOn(
            spectator.component as any,
            '_levelResourceZones',
        ).mockResolvedValue(new Set());
        const levels = await (spectator.component as any)._levelsWithResources(
            [
                { id: 'parking-1', tags: ['parking'] },
                { id: 'office-1', tags: ['office'] },
            ],
            'parking',
            'bld-1',
        );

        expect(levels).toEqual([{ id: 'parking-1', tags: ['parking'] }]);
    });

    it('should show parking levels while spaces are loading', () => {
        const org = spectator.inject(OrganisationService);
        (org.levelsForBuilding as any).mockReturnValue([
            { id: 'parking-1', tags: ['parking'] },
            { id: 'office-1', tags: ['office'] },
        ]);
        vi.spyOn(
            spectator.component as any,
            '_levelResourceZones',
        ).mockReturnValue(new Promise(() => undefined));

        spectator.setInput('resource_type', 'parking');

        expect(spectator.component.levels()).toEqual([
            { id: 'parking-1', tags: ['parking'] },
        ]);
    });

    it('should read region and week start configuration from settings', () => {
        expect(spectator.component.use_region).toBe(false);
        expect(spectator.component.week_start).toBe(1);
        settings_map['app.use_region'] = true;
        expect(spectator.component.use_region).toBe(true);
    });

    it('should toggle the printing state around window.print', () => {
        vi.useFakeTimers();
        const print_spy = vi
            .spyOn(window, 'print')
            .mockImplementation(() => undefined);
        const printing = vi.fn();
        spectator.component.printing.subscribe(printing);

        spectator.component.print();
        expect(printing).toHaveBeenNthCalledWith(1, true);
        expect(print_spy).not.toHaveBeenCalled();

        vi.advanceTimersByTime(300);
        expect(print_spy).toHaveBeenCalled();
        expect(printing).toHaveBeenNthCalledWith(2, false);
        vi.useRealTimers();
    });
});
