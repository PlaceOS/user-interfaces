import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { Subscription } from 'rxjs';

import { EventsListComponent } from '../../app/events/events-list.component';
import { EventStateService } from '../../app/events/event-state.service';

describe('EventsListComponent', () => {
    let spectator: SpectatorRouting<EventsListComponent>;
    const options = signal<any>({ period: 'week' });
    const active_building = signal<any>({ id: 'bld-1' });
    const active_region = signal<any>({ id: 'reg-1' });
    const settings_values: Record<string, any> = {};
    const set_options = jest.fn();
    const building_levels = [{ id: 'lvl-b', parent_id: 'bld-1' }];
    const region_levels = [{ id: 'lvl-r', parent_id: 'bld-2' }];

    const createComponent = createRoutingFactory({
        component: EventsListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings_values[key]),
            } as any),
            {
                provide: EventStateService,
                useValue: {
                    options,
                    period: 'week',
                    setOptions: set_options,
                    startPolling: jest.fn(() => new Subscription()),
                },
            },
            MockProvider(OrganisationService, {
                active_building,
                active_region,
                building: { id: 'bld-1' },
                region: { id: 'reg-1' },
                levelsForBuilding: jest.fn(() => building_levels),
                levelsForRegion: jest.fn(() => region_levels),
            } as any),
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        options.set({ period: 'week' });
        active_building.set({ id: 'bld-1' });
        set_options.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should reflect the state period', () => {
        expect(spectator.component.period()).toBe('week');
        options.set({ period: 'month' });
        expect(spectator.component.period()).toBe('month');
    });

    it('should resolve levels for the active building by default', () => {
        expect(spectator.component.levels()).toEqual(building_levels);
    });

    it('should resolve levels for the region when use_region is set', () => {
        settings_values['app.use_region'] = true;
        expect(spectator.component.levels()).toEqual(region_levels);
    });

    it('should switch the view and update the route', () => {
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.setView('calendar');
        expect(spectator.component.view()).toBe('calendar');
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { view: 'calendar' },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('should change the period type via the state service', () => {
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.setPeriodType('month');
        expect(set_options).toHaveBeenCalledWith({ period: 'month' });
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({ queryParams: { period: 'month' } }),
        );
    });

    it('should apply selected zones and persist them to the route', () => {
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.updateZones(['lvl-b']);
        expect(spectator.component.zones()).toEqual(['lvl-b']);
        expect(set_options).toHaveBeenCalledWith({ zone_ids: ['lvl-b'] });
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { zone_ids: 'lvl-b' },
                queryParamsHandling: 'merge',
            }),
        );
    });

    it('should clear the zone query param when no zones remain', () => {
        const router = spectator.inject(Router);
        const navigate = jest.spyOn(router, 'navigate');
        spectator.component.updateZones([]);
        expect(spectator.component.zones()).toEqual([]);
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { zone_ids: null },
            }),
        );
    });

    it('should expose calendar and region configuration flags', () => {
        expect(spectator.component.has_calendar).toBeFalsy();
        expect(spectator.component.use_region).toBe(false);
        settings_values['app.group_events_calendar'] = 'cal@b.com';
        settings_values['app.use_region'] = true;
        expect(spectator.component.has_calendar).toBe('cal@b.com');
        expect(spectator.component.use_region).toBe(true);
    });

    it('should default to the list view', () => {
        expect(spectator.component.view()).toBe('list');
    });
});
