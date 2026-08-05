import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockPipe } from 'ng-mocks';

import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';

describe('ReportsOptionsComponent', () => {
    let spectator: Spectator<ReportsOptionsComponent>;
    let navigate: any;
    let query_params: Record<string, any>;
    let settings_map: Record<string, any>;
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
                },
                queryParamsHandling: 'merge',
            }),
        );
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
