import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    CateringDocketsService,
    CateringOrderAlertsService,
    CateringOrderFilters,
    CateringOrdersService,
    CateringStateService,
} from '@placeos/catering';
import {
    CateringOrder,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { MockComponent } from 'ng-mocks';
import type { MockInstance } from 'vitest';

import { DateOptionsComponent } from '@placeos/form-fields';
import { CateringTopbarComponent } from '../app/catering-topbar.component';

class OrdersServiceStub {
    private readonly _filters = signal<CateringOrderFilters>({});
    public readonly filtered = signal<CateringOrder[]>([]);
    public readonly order_filters = this._filters.asReadonly();
    public get filters() {
        return this._filters();
    }
    public set filters(value: CateringOrderFilters) {
        this._filters.set(value);
    }
}

class StateServiceStub {
    public readonly caterers = signal<string[]>([]);
    public zone = '';
    public addItem = vi.fn();
    public editConfig = vi.fn();
    public importMenu = vi.fn();
    public setRoomAvailability = vi.fn();
    public setChargeCodes = vi.fn();
}

interface Place {
    id: string;
    parent_id?: string;
}

class OrgServiceStub {
    public readonly initialised = signal(true);
    public readonly active_region = signal<Place>({ id: 'region-1' });
    public readonly active_building = signal<Place>({ id: 'bld-1' });
    public building: Place | undefined = { id: 'bld-1' };
    public buildings: Place[] = [{ id: 'bld-1' }, { id: 'bld-2' }];
    public levelsForRegion = vi.fn().mockReturnValue([{ id: 'lvl-region' }]);
    public levelsForBuilding = vi
        .fn()
        .mockReturnValue([{ id: 'lvl-building' }]);
    public levelWithID = vi.fn<(ids: string[]) => Place | undefined>();
}

class AlertsServiceStub {
    public readonly enabled = signal(false);
    public setEnabled = (state: boolean) => this.enabled.set(state);
}

type Stubs = ReturnType<typeof createStubs>;

/** New service stubs for one test. Pass them to the component with `stubProviders` */
function createStubs() {
    return {
        orders: new OrdersServiceStub(),
        state: new StateServiceStub(),
        org: new OrgServiceStub(),
        alerts: new AlertsServiceStub(),
        dockets: { print: vi.fn() },
    };
}

function stubProviders(stubs: Stubs) {
    return [
        { provide: CateringOrdersService, useValue: stubs.orders },
        { provide: CateringStateService, useValue: stubs.state },
        { provide: OrganisationService, useValue: stubs.org },
        { provide: CateringOrderAlertsService, useValue: stubs.alerts },
        { provide: CateringDocketsService, useValue: stubs.dockets },
    ];
}

/** Read a Blob as text. The jsdom Blob has no `text()` method */
function readText(blob: Blob) {
    return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.readAsText(blob);
    });
}

/** Find a topbar button by the name of its icon */
function buttonWithIcon(
    spectator: SpectatorRouting<CateringTopbarComponent>,
    icon: string,
) {
    return spectator
        .queryAll<HTMLButtonElement>('button')
        .find((el) => el.textContent?.trim() === icon);
}

describe('CateringTopbarComponent', () => {
    let spectator: SpectatorRouting<CateringTopbarComponent>;
    let stubs: Stubs;
    let orders: OrdersServiceStub;
    let state: StateServiceStub;
    let org: OrgServiceStub;
    let navigate: MockInstance<Router['navigate']>;

    const create_component = createRoutingFactory({
        component: CateringTopbarComponent,
        declarations: [MockComponent(DateOptionsComponent)],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => {
        settingSignal('use_region', false).set(false);
        stubs = createStubs();
        ({ orders, state, org } = stubs);
        spectator = create_component({ providers: stubProviders(stubs) });
        navigate = vi.spyOn(spectator.inject(Router), 'navigate');
    });

    afterEach(() => vi.restoreAllMocks());

    describe('URL sync', () => {
        it('should read selected zones from the zone_ids query param', () => {
            spectator.setRouteQueryParam('zone_ids', 'zone-1,zone-2');
            expect(spectator.component.zones()).toEqual(['zone-1', 'zone-2']);
        });

        it('should switch to the building of the selected level', () => {
            org.levelWithID.mockReturnValue({
                id: 'zone-9',
                parent_id: 'bld-2',
            });
            spectator.setRouteQueryParam('zone_ids', 'zone-9');
            expect(org.building).toEqual({ id: 'bld-2' });
        });

        it('should keep the building when the zone is not a known level', () => {
            spectator.setRouteQueryParam('zone_ids', 'unknown');
            expect(spectator.component.zones()).toEqual(['unknown']);
            expect(org.building).toEqual({ id: 'bld-1' });
        });

        it('should switch building from a valid building_id query param', () => {
            spectator.setRouteQueryParam('building_id', 'bld-2');
            expect(org.building).toEqual({ id: 'bld-2' });

            spectator.setRouteQueryParam('building_id', 'missing');
            expect(org.building).toEqual({ id: 'bld-2' });
        });
    });

    describe('catering zone', () => {
        it('should use the first filtered zone, or the building when there is none', () => {
            expect(state.zone).toBe('bld-1');

            orders.filters = { zones: ['lvl-1', 'lvl-2'] };
            spectator.detectChanges();
            expect(state.zone).toBe('lvl-1');

            orders.filters = { zones: [] };
            spectator.detectChanges();
            expect(state.zone).toBe('bld-1');
        });

        it('should set zone filters, catering zone and the URL on updateZones', () => {
            spectator.component.updateZones(['zone-1', 'zone-2']);

            expect(orders.filters).toEqual({ zones: ['zone-1', 'zone-2'] });
            expect(state.zone).toBe('zone-1');
            expect(navigate).toHaveBeenCalledWith(
                [],
                expect.objectContaining({
                    queryParams: { zone_ids: 'zone-1,zone-2' },
                    queryParamsHandling: 'merge',
                }),
            );
        });
    });

    describe('filters', () => {
        it('should set the date filter from a timestamp or a date string', () => {
            spectator.component.setDate(1234);
            expect(orders.filters).toEqual({ date: 1234 });

            spectator.component.setDate('2026-03-04T00:00:00Z');
            expect(orders.filters).toEqual({
                date: Date.UTC(2026, 2, 4),
            });
        });

        it('should ignore a date that is not valid', () => {
            orders.filters = { date: 1234 };
            spectator.component.setDate('not a date');
            spectator.component.setDate(Number.NaN);
            expect(orders.filters).toEqual({ date: 1234 });
        });

        it('should keep other filters when the search changes', () => {
            orders.filters = { caterer: 'acme', date: 1234 };
            spectator.component.setSearch('coffee');
            expect(orders.filters).toEqual({
                caterer: 'acme',
                date: 1234,
                search: 'coffee',
            });
        });

        it('should save search and caterer to the URL and remove empty values', () => {
            spectator.component.setSearch('tea');
            spectator.component.setSearch('');
            spectator.component.setCaterer('acme');
            expect(orders.filters).toEqual({ search: '', caterer: 'acme' });
            spectator.component.setCaterer('');

            const params = navigate.mock.calls.map(
                ([, extras]) => extras?.queryParams,
            );
            expect(params).toEqual([
                { search: 'tea' },
                { search: null },
                { caterer: 'acme' },
                { caterer: null },
            ]);
            expect(navigate).toHaveBeenCalledWith(
                [],
                expect.objectContaining({ replaceUrl: true }),
            );
            expect(orders.filters).toEqual({ search: '', caterer: '' });
        });
    });

    describe('levels', () => {
        it('should list levels for the building, or for the region when enabled', () => {
            expect(spectator.component.levels()).toEqual([
                { id: 'lvl-building' },
            ]);

            settingSignal('use_region', false).set(true);
            expect(spectator.component.levels()).toEqual([
                { id: 'lvl-region' },
            ]);
            expect(org.levelsForRegion).toHaveBeenCalledWith({
                id: 'region-1',
            });
        });
    });

    describe('menu page', () => {
        beforeEach(() => spectator.setRouteParam('view', 'menu'));

        it('should show the menu actions instead of the date options', () => {
            expect(spectator.query('date-options')).toBeFalsy();
            const icons = spectator
                .queryAll('button')
                .map((el) => el.textContent?.trim());
            expect(icons).toEqual([
                'add',
                'menu_book',
                'cloud_upload',
                'event_available',
                'payments',
            ]);
        });

        it('should only allow adding items at the building level', () => {
            spectator.setRouteQueryParam('zone_ids', 'lvl-1');
            expect(buttonWithIcon(spectator, 'add')).toBeUndefined();

            spectator.setRouteQueryParam('zone_ids', 'bld-1');
            spectator.click(buttonWithIcon(spectator, 'add'));
            expect(state.addItem).toHaveBeenCalledTimes(1);
        });
    });

    describe('orders page', () => {
        const order = new CateringOrder({
            id: 'order-1',
            caterer: 'Cafe Nine',
        });

        beforeEach(() => spectator.setRouteParam('view', 'orders'));

        it('should show the date options', () => {
            expect(spectator.query('date-options')).toBeTruthy();
        });

        it('should show the caterer selector only for multiple caterers', () => {
            expect(spectator.queryAll('mat-select')).toHaveLength(1);
            state.caterers.set(['a', 'b']);
            spectator.detectChanges();
            expect(spectator.queryAll('mat-select')).toHaveLength(2);
        });

        it('should toggle the summary query param', () => {
            spectator.click(buttonWithIcon(spectator, 'summarize'));
            expect(navigate).toHaveBeenLastCalledWith(
                [],
                expect.objectContaining({ queryParams: { summary: 'true' } }),
            );

            spectator.setRouteQueryParam('summary', 'true');
            const toggle = buttonWithIcon(spectator, 'summarize');
            expect(toggle?.getAttribute('aria-pressed')).toBe('true');
            spectator.click(toggle);
            expect(navigate).toHaveBeenLastCalledWith(
                [],
                expect.objectContaining({ queryParams: { summary: null } }),
            );
        });

        it('should disable print and export when there are no orders', () => {
            expect(buttonWithIcon(spectator, 'print')?.disabled).toBe(true);
            expect(buttonWithIcon(spectator, 'download')?.disabled).toBe(true);

            orders.filtered.set([order]);
            spectator.detectChanges();
            expect(buttonWithIcon(spectator, 'print')?.disabled).toBe(false);
            expect(buttonWithIcon(spectator, 'download')?.disabled).toBe(false);
        });

        it('should print a docket for each listed order', () => {
            orders.filtered.set([order]);
            spectator.detectChanges();
            spectator.click(buttonWithIcon(spectator, 'print'));
            expect(stubs.dockets.print).toHaveBeenCalledWith([order]);
        });

        it('should export listed orders to a CSV named after the filter date', async () => {
            let link: HTMLAnchorElement | undefined;
            vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(
                function (this: HTMLAnchorElement) {
                    link = this;
                },
            );
            const blobs: Blob[] = [];
            vi.spyOn(URL, 'createObjectURL').mockImplementation((blob) => {
                blobs.push(blob as Blob);
                return 'blob:orders';
            });
            orders.filters = { date: new Date(2026, 2, 4).valueOf() };
            orders.filtered.set([order]);
            spectator.detectChanges();

            spectator.click(buttonWithIcon(spectator, 'download'));

            expect(link?.getAttribute('download')).toBe(
                'catering-orders-2026-03-04.csv',
            );
            expect(blobs).toHaveLength(1);
            const [header, row, ...rest] = (await readText(blobs[0]))
                .replace(/^\uFEFF/, '')
                .split('\n');
            const columns = header.split(',');
            expect(columns.slice(0, 3)).toEqual([
                'FORM.DATE',
                'COMMON.TIME',
                'CATERING.CATERER',
            ]);
            const cells = row.split(',');
            expect(cells).toHaveLength(columns.length);
            expect(cells[2]).toBe('Cafe Nine');
            expect(rest).toEqual([]);
        });

        it('should toggle order alerts', () => {
            const { alerts } = stubs;
            spectator.click(buttonWithIcon(spectator, 'notifications_off'));
            expect(alerts.enabled()).toBe(true);
            spectator.click(buttonWithIcon(spectator, 'notifications_active'));
            expect(alerts.enabled()).toBe(false);
        });
    });
});

describe('CateringTopbarComponent before the organisation loads', () => {
    const create_component = createRoutingFactory({
        component: CateringTopbarComponent,
        declarations: [MockComponent(DateOptionsComponent)],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
        queryParams: { building_id: 'bld-2' },
    });

    it('should wait for the organisation before applying zone and building', () => {
        const { org, state, orders } = createStubs();
        org.initialised.set(false);
        orders.filters = { zones: ['lvl-1'] };
        const spectator = create_component({
            providers: stubProviders({ ...createStubs(), org, state, orders }),
        });
        expect(state.zone).toBe('');
        expect(org.building).toEqual({ id: 'bld-1' });

        org.initialised.set(true);
        spectator.detectChanges();
        expect(state.zone).toBe('lvl-1');
        expect(org.building).toEqual({ id: 'bld-2' });
    });
});

describe('CateringTopbarComponent with filters in the URL', () => {
    const create_component = createRoutingFactory({
        component: CateringTopbarComponent,
        declarations: [MockComponent(DateOptionsComponent)],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
        queryParams: { search: 'tea', caterer: 'Cafe' },
    });

    it('should restore search and caterer filters from the URL', () => {
        const stubs = createStubs();
        create_component({ providers: stubProviders(stubs) });

        expect(stubs.orders.filters).toEqual({
            search: 'tea',
            caterer: 'Cafe',
        });
    });
});
