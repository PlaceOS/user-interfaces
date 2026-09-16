import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ParkingStateService } from '../../app/parking/parking-state.service';
import { ParkingTopbarComponent } from '../../app/parking/parking-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('ParkingTopbarComponent', () => {
    let spectator: SpectatorRouting<ParkingTopbarComponent>;
    let hide_level_selector_on_booking_list = signal(false);
    let request_filter = 'all';

    const createComponent = createRoutingFactory({
        component: ParkingTopbarComponent,
        declarations: [
            MockComponent(SearchbarComponent),
            MockComponent(DateOptionsComponent),
        ],
        providers: [
            MockProvider(ParkingStateService, {
                levels: signal([]),
                bookable_levels: signal([]),
                options: signal({
                    date: Date.now(),
                    search: '',
                    zones: [],
                    period: 'day',
                    request_filter,
                }),
                spaces: signal([]),
                bookings: signal([]),
                period: signal('day'),
                setOptions: vi.fn(),
                setPeriod: vi.fn(),
                activeBookings: vi.fn((list) => list || []),
                editSpace: vi.fn(),
                downloadSpacesCSV: vi.fn(),
                uploadSpacesCSV: vi.fn(),
                editUser: vi.fn(),
                editFleetVehicle: vi.fn(),
                editReservation: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_region: signal(null),
                active_building: signal({ id: 'bld-1', timezone: 'UTC' }),
                initialised: signal(true),
                levelWithID: vi.fn(),
                buildings: [],
                building: { id: 'bld-1', timezone: 'UTC' },
                region: null,
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((name: string) =>
                    name === 'app.parking.hide_level_selector_on_booking_list'
                        ? hide_level_selector_on_booking_list()
                        : name === 'app.parking.show_requests'
                          ? false
                          : false,
                ),
                signal: vi.fn((name: string, default_value: any) =>
                    name === 'parking.hide_level_selector_on_booking_list'
                        ? hide_level_selector_on_booking_list
                        : signal(default_value),
                ),
            } as any),
            MockProvider(MatDialog, {
                open: vi.fn(),
            }),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => {
        hide_level_selector_on_booking_list = signal(false);
        request_filter = 'all';
        localStorage.clear();
    });

    function setRequestFilter(filter: string) {
        Object.defineProperty(spectator.component, 'options', {
            value: () => ({
                date: Date.now(),
                search: '',
                zones: [],
                period: 'day',
                request_filter: filter,
            }),
            configurable: true,
        });
    }

    function setOptions(options: { request_filter: string; zones: string[] }) {
        Object.defineProperty(spectator.component, 'options', {
            value: () => ({
                date: Date.now(),
                search: '',
                period: 'day',
                ...options,
            }),
            configurable: true,
        });
    }

    it('should show the level selector on the booking list by default', () => {
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(spectator.component.hide_level_selector_on_booking_list()).toBe(
            false,
        );
    });

    it('should hide the level selector on the booking list when enabled', () => {
        hide_level_selector_on_booking_list.set(true);
        spectator = createComponent();
        setOptions({ request_filter: 'all', zones: ['lvl-1'] });
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(spectator.component.hide_level_selector_on_booking_list()).toBe(
            true,
        );
    });

    it('should keep the level selector on other parking views', () => {
        hide_level_selector_on_booking_list.set(true);
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('map');

        expect(spectator.component.hide_level_selector_on_booking_list()).toBe(
            false,
        );
    });

    it('should disable the booking list level selector for request filters', () => {
        request_filter = 'requests';
        spectator = createComponent();
        setOptions({ request_filter: 'requests', zones: ['lvl-1'] });
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(
            spectator.component.disable_level_selector_on_booking_list(),
        ).toBe(true);
    });

    it('should keep the booking list level selector enabled for all bookings', () => {
        request_filter = 'all';
        spectator = createComponent();
        setRequestFilter('all');
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(
            spectator.component.disable_level_selector_on_booking_list(),
        ).toBe(false);
    });

    it('should keep the booking list level selector enabled for allocated bookings', () => {
        request_filter = 'bookings';
        spectator = createComponent();
        setRequestFilter('bookings');
        spectator.component.section.set('events');
        spectator.component.view.set('list');

        expect(
            spectator.component.disable_level_selector_on_booking_list(),
        ).toBe(false);
    });

    it('should only allow one selected level on the parking map', () => {
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('map');
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/parking/events/map',
            configurable: true,
        });
        vi.spyOn(router, 'navigate').mockResolvedValue(true);

        spectator.component.updateZones(['lvl-1', 'lvl-2']);

        expect(spectator.component.zones()).toEqual(['lvl-1']);
        expect(spectator.component.selected_zone()).toBe('lvl-1');
        expect(
            spectator.inject(ParkingStateService).setOptions,
        ).toHaveBeenCalledWith({ zones: ['lvl-1'] });
        expect(router.navigate).toHaveBeenCalledWith([], {
            relativeTo: expect.anything(),
            queryParams: { zone_ids: 'lvl-1' },
            queryParamsHandling: 'merge',
        });
    });

    it('should not resync the same query level selection repeatedly', () => {
        spectator = createComponent();
        setOptions({ request_filter: 'all', zones: [] });
        spectator.component.section.set('events');
        spectator.component.view.set('list');
        (spectator.inject(OrganisationService) as any).levelWithID = vi.fn(
            () => ({
                id: 'lvl-1',
                parent_id: 'bld-1',
            }),
        );
        (spectator.inject(OrganisationService) as any).buildings = [
            { id: 'bld-1' },
        ];
        (spectator.inject(ParkingStateService).setOptions as any).mockClear();

        (spectator.component as any)._applyQueryZones(['lvl-1']);
        setOptions({ request_filter: 'all', zones: ['lvl-1'] });
        (spectator.component as any)._applyQueryZones(['lvl-1']);

        expect(
            spectator.inject(ParkingStateService).setOptions,
        ).toHaveBeenCalledTimes(1);
    });

    it('should not navigate when level selection is already synced', () => {
        spectator = createComponent();
        setOptions({ request_filter: 'all', zones: ['lvl-1'] });
        spectator.component.section.set('events');
        spectator.component.view.set('list');
        spectator.component.zones.set(['lvl-1']);
        (spectator.component as any)._query_params = () =>
            new Map([['zone_ids', 'lvl-1']]);
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/parking/events/list?zone_ids=lvl-1',
            configurable: true,
        });
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        (spectator.inject(ParkingStateService).setOptions as any).mockClear();

        spectator.component.updateZones(['lvl-1']);

        expect(router.navigate).not.toHaveBeenCalled();
        expect(
            spectator.inject(ParkingStateService).setOptions,
        ).not.toHaveBeenCalled();
    });

    it('should clear selected levels when the booking list selector is hidden', () => {
        hide_level_selector_on_booking_list.set(true);
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('list');
        (spectator.component as any)._query_params = () =>
            new Map([['zone_ids', 'lvl-1']]);
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/parking/events/list',
            configurable: true,
        });
        vi.spyOn(router, 'navigate').mockResolvedValue(true);

        spectator.component.updateZones(['lvl-1']);

        expect(spectator.component.zones()).toEqual([]);
        expect(router.navigate).toHaveBeenCalledWith([], {
            relativeTo: expect.anything(),
            queryParams: { zone_ids: null },
            queryParamsHandling: 'merge',
        });
    });

    it('should clear selected levels when the booking list selector is disabled', () => {
        request_filter = 'requests';
        spectator = createComponent();
        setRequestFilter('requests');
        spectator.component.section.set('events');
        spectator.component.view.set('list');
        (spectator.component as any)._query_params = () =>
            new Map([['zone_ids', 'lvl-1']]);
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/parking/events/list',
            configurable: true,
        });
        vi.spyOn(router, 'navigate').mockResolvedValue(true);

        spectator.component.updateZones(['lvl-1']);

        expect(spectator.component.zones()).toEqual([]);
        expect(router.navigate).toHaveBeenCalledWith([], {
            relativeTo: expect.anything(),
            queryParams: { zone_ids: null },
            queryParamsHandling: 'merge',
        });
    });

    it('should clear stuck levels when the hide setting loads after selection', () => {
        spectator = createComponent();
        spectator.component.section.set('events');
        spectator.component.view.set('list');
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/parking/events/list',
            configurable: true,
        });
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        spectator.component.updateZones(['lvl-1']);
        expect(spectator.component.zones()).toEqual(['lvl-1']);

        // Setting overrides can arrive after zones were already applied
        hide_level_selector_on_booking_list.set(true);
        spectator.detectChanges();

        expect(spectator.component.zones()).toEqual([]);
    });

    it('should clear search when switching parking views', () => {
        spectator = createComponent();
        spectator.component.zones.set(['lvl-1']);
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/book/parking/manage/users',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(
            spectator.inject(ParkingStateService).setOptions,
        ).toHaveBeenCalledWith({ search: '' });
        expect(spectator.component.zones()).toEqual([]);
    });

    it('should clear search when switching parking list routes', () => {
        spectator = createComponent();
        const router = spectator.inject(Router);
        (spectator.component as any)._previous_route_key = 'events/list';
        Object.defineProperty(router, 'url', {
            value: '/book/parking/events/requests',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(
            spectator.inject(ParkingStateService).setOptions,
        ).toHaveBeenCalledWith({ search: '' });
    });

    it('should keep all levels selected when parking management is cleared', () => {
        spectator = createComponent();
        Object.defineProperty(spectator.component, 'all_levels', {
            value: signal([{ id: 'lvl-1' }, { id: 'lvl-2' }]),
            configurable: true,
        });
        const router = spectator.inject(Router);
        Object.defineProperty(router, 'url', {
            value: '/book/parking/manage/spaces',
            configurable: true,
        });
        vi.spyOn(router, 'navigate').mockResolvedValue(true);
        vi.mocked(spectator.inject(ParkingStateService).setOptions).mockClear();

        spectator.component.updateZones([]);
        (spectator.component as any)._updatePath();

        expect(spectator.component.zones()).toEqual([]);
        expect(
            spectator.inject(ParkingStateService).setOptions,
        ).not.toHaveBeenCalledWith({ zones: ['lvl-1'] });
    });
});
