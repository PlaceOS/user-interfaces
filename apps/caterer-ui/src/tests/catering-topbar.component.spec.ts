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
import {
    CateringOrdersService,
    CateringStateService,
    ChargeCodeListModalComponent,
} from '@placeos/catering';
import { OrganisationService, settingSignal } from '@placeos/common';
import { AvailableRoomsStateModalComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { Subject } from 'rxjs';

import { DateOptionsComponent } from 'apps/concierge/src/app/ui/date-options.component';
import { CateringTopbarComponent } from '../app/catering-topbar.component';

class OrdersServiceStub {
    private readonly _filters = signal<any>({});
    public readonly order_filters = this._filters.asReadonly();
    public get filters() {
        return this._filters();
    }
    public set filters(value: any) {
        this._filters.set(value);
    }
}

class StateServiceStub {
    public readonly caterers = signal<string[]>([]);
    public readonly availability = signal<string[]>(['room-1']);
    public zone = '';
    public addItem = vi.fn();
    public editConfig = vi.fn();
    public importMenu = vi.fn();
    public saveSettings = vi.fn().mockResolvedValue(undefined);
}

class OrgServiceStub {
    public readonly initialised = signal(true);
    public readonly active_region = signal<any>({ id: 'region-1' });
    public readonly active_building = signal<any>({ id: 'bld-1' });
    public building: any = { id: 'bld-1' };
    public buildings: any[] = [{ id: 'bld-1' }, { id: 'bld-2' }];
    public levelsForRegion = vi.fn().mockReturnValue([]);
    public levelsForBuilding = vi.fn().mockReturnValue([]);
    public levelWithID = vi.fn();
}

describe('CateringTopbarComponent', () => {
    let spectator: SpectatorRouting<CateringTopbarComponent>;
    let orders: OrdersServiceStub;
    let state: StateServiceStub;
    let org: OrgServiceStub;
    let dialog: { open: ReturnType<typeof vi.fn> };
    let dialog_ref: any;

    const create_component = createRoutingFactory({
        component: CateringTopbarComponent,
        declarations: [MockComponent(DateOptionsComponent)],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
        providers: [
            { provide: CateringOrdersService, useClass: OrdersServiceStub },
            { provide: CateringStateService, useClass: StateServiceStub },
            { provide: OrganisationService, useClass: OrgServiceStub },
            { provide: MatDialog, useFactory: () => dialog },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        settingSignal('use_region', false).set(false);
        dialog_ref = {
            componentInstance: {
                change: new Subject<any>(),
                loading: signal(true),
            },
        };
        dialog = { open: vi.fn().mockReturnValue(dialog_ref) };
        spectator = create_component();
        orders = spectator.inject(CateringOrdersService) as any;
        state = spectator.inject(CateringStateService) as any;
        org = spectator.inject(OrganisationService) as any;
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should derive the active page from the view route param', () => {
        expect(spectator.component.page()).toBe('');
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();
        expect(spectator.component.page()).toBe('orders');
    });

    it('should read selected zones from the zone_ids query param', () => {
        expect(spectator.component.zones()).toEqual([]);
        spectator.setRouteQueryParam('zone_ids', 'zone-1,zone-2');
        spectator.detectChanges();
        expect(spectator.component.zones()).toEqual(['zone-1', 'zone-2']);
    });

    it('should switch the active building based on the level of the zones', () => {
        org.levelWithID.mockReturnValue({ parent_id: 'bld-2' });
        spectator.setRouteQueryParam('zone_ids', 'zone-9');
        spectator.detectChanges();
        expect(org.building).toEqual({ id: 'bld-2' });
    });

    it('should switch building from the building_id query param', () => {
        spectator.setRouteQueryParam('building_id', 'bld-2');
        spectator.detectChanges();
        expect(org.building).toEqual({ id: 'bld-2' });
    });

    it('should update search filters via setSearch', () => {
        spectator.component.setSearch('coffee');
        expect(orders.filters).toEqual({ search: 'coffee' });
    });

    it('should update date filters via setDate', () => {
        spectator.component.setDate(1234);
        expect(orders.filters).toEqual({ date: 1234 });
    });

    it('should update caterer filters via setCaterer', () => {
        spectator.component.setCaterer('acme');
        expect(orders.filters).toEqual({ caterer: 'acme' });
    });

    it('should update zones filter, catering zone and navigate on updateZones', () => {
        const router = spectator.inject(Router);
        const navigate = vi.spyOn(router, 'navigate');
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

    it('should delegate menu actions to the catering state service', () => {
        spectator.component.addItem();
        spectator.component.editConfig();
        spectator.component.importMenu();

        expect(state.addItem).toHaveBeenCalledTimes(1);
        expect(state.editConfig).toHaveBeenCalledTimes(1);
        expect(state.importMenu).toHaveBeenCalledTimes(1);
    });

    it('should choose levels for the building when not using regions', () => {
        settingSignal('use_region', false).set(false);
        spectator.detectChanges();
        spectator.component.levels();
        expect(org.levelsForBuilding).toHaveBeenCalled();
        expect(org.levelsForRegion).not.toHaveBeenCalled();
    });

    it('should choose levels for the region when using regions', () => {
        settingSignal('use_region', false).set(true);
        spectator.detectChanges();
        spectator.component.levels();
        expect(org.levelsForRegion).toHaveBeenCalledWith(org.active_region());
    });

    it('should open the charge codes modal', () => {
        spectator.component.setChargeCodes();
        expect(dialog.open).toHaveBeenCalledWith(ChargeCodeListModalComponent);
    });

    it('should open the room availability modal and save selected rooms', async () => {
        await spectator.component.setRoomAvailability();

        expect(dialog.open).toHaveBeenCalledWith(
            AvailableRoomsStateModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({
                    type: 'Catering',
                    disabled_rooms: ['room-1'],
                }),
            }),
        );

        dialog_ref.componentInstance.change.next(['room-2']);
        // The change handler awaits saveSettings().catch() before clearing the
        // loading flag, so flush all pending microtasks before asserting.
        await new Promise((r) => setTimeout(r, 0));

        expect(state.saveSettings).toHaveBeenCalledWith({
            disabled_rooms: ['room-2'],
        });
        expect(dialog_ref.componentInstance.loading()).toBe(false);
    });

    it('should render a back-to-home link and the page title', () => {
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();

        expect(spectator.query('a[icon]')).toBeTruthy();
        expect(spectator.query('h2')).toBeTruthy();
    });

    it('should show the caterer selector only when there are multiple caterers', () => {
        spectator.detectChanges();
        const single = spectator.queryAll('mat-form-field');

        state.caterers.set(['a', 'b']);
        spectator.detectChanges();
        const multiple = spectator.queryAll('mat-form-field');

        expect(multiple.length).toBeGreaterThan(single.length);
    });

    it('should show menu management buttons only on the menu page', () => {
        spectator.detectChanges();
        expect(spectator.queryAll('button[icon]').length).toBe(0);

        spectator.setRouteParam('view', 'menu');
        spectator.detectChanges();
        // Add / config / import / availability / charge-code buttons
        const buttons = spectator.queryAll('button[icon]');
        expect(buttons.length).toBeGreaterThanOrEqual(4);
    });

    it('should hide the date options on the menu page and show it elsewhere', () => {
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();
        expect(spectator.query('date-options')).toBeTruthy();

        spectator.setRouteParam('view', 'menu');
        spectator.detectChanges();
        expect(spectator.query('date-options')).toBeFalsy();
    });
});
