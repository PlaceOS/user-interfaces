import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import {
    CateringOrdersService,
    CateringStateService,
    ChargeCodeListModalComponent,
} from '@placeos/catering';
import { AsyncHandler, settingSignal } from '@placeos/common';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrganisationService } from '@placeos/common';
import {
    AvailableRoomsStateModalComponent,
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateOptionsComponent } from 'apps/concierge/src/app/ui/date-options.component';

@Component({
    selector: 'catering-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 pt-4 pb-2">
            <a
                icon
                matRipple
                class="h-12 w-12"
                matTooltip="Back to Home"
                [routerLink]="['/']"
            >
                <icon class="text-2xl">arrow_back</icon>
            </a>
            <h2 class="text-2xl font-medium">
                {{
                    (page() === 'menu' ? 'CATERING.MENU' : 'CATERING.ORDERS')
                        | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <mat-form-field appearance="outline" class="no-subscript w-64">
                <input
                    matInput
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [ngModel]="filters()?.search"
                    (ngModelChange)="setSearch($event)"
                />
                <icon class="text-xl" matSuffix>search</icon>
            </mat-form-field>
        </div>
        <div class="bg-base-100 flex items-center space-x-2 px-8 pt-2 pb-4">
            <div class="w-12"></div>
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="filters()?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region()) {
                                    <div class="text-xs opacity-30">
                                        {{
                                            (level.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                }
                                <div>
                                    {{ level.display_name || level.name }}
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            @if (caterers().length > 1) {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="filters()?.caterer"
                        (ngModelChange)="setCaterer($event)"
                        [placeholder]="'CATERING.CATERERS_ALL' | translate"
                    >
                        <mat-option value="">{{
                            'CATERING.CATERERS_ALL' | translate
                        }}</mat-option>
                        @for (caterer of caterers(); track caterer) {
                            <mat-option [value]="caterer || '<empty>'">
                                {{ caterer || '[No Caterer]' }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (page() === 'menu') {
                <div class="w-2 flex-1"></div>
            }
            @if (
                page() === 'menu' &&
                (!zones()[0] || zones()[0] === building()?.id)
            ) {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.MENU_ADD' | translate"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="addItem()"
                >
                    <icon class="text-2xl">add</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.BOOKING_RULES' | translate"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="editConfig()"
                >
                    <icon class="text-2xl">menu_book</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.MENU_IMPORT' | translate"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="importMenu()"
                >
                    <icon class="text-2xl">cloud_upload</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.ROOM_AVAILABILITY' | translate"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="setRoomAvailability()"
                >
                    <icon class="text-2xl">event_available</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.CHARGE_CODES' | translate"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="setChargeCodes()"
                >
                    <icon class="text-2xl">payments</icon>
                </button>
            }
            @if (page() !== 'menu') {
                <div class="w-2 flex-1"></div>
            }
            <!-- <searchbar class="mr-2"></searchbar> -->
            @if (page() !== 'menu') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
    imports: [
        DateOptionsComponent,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatInputModule,
        RouterModule,
        BuildingPipe,
        MatTooltipModule,
    ],
})
export class CateringTopbarComponent extends AsyncHandler {
    private _orders = inject(CateringOrdersService);
    private _catering = inject(CateringStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);

    private readonly _org_initialised = this._org.initialised;
    private readonly _param_map = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });
    private readonly _query_param_map = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });
    private readonly _region = this._org.active_region;

    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    /** Currently active page */
    public readonly page = computed(
        () =>
            (this._param_map().has('view')
                ? this._param_map().get('view')
                : '') || '',
    );
    public readonly filters = this._orders.order_filters;
    public readonly caterers = this._catering.caterers;
    public readonly building = this._org.active_building;
    public readonly use_region = settingSignal('use_region', false);
    /** List of levels for the active building */
    public readonly levels = computed(() =>
        this.use_region()
            ? this._org.levelsForRegion(this._region())
            : this._org.levelsForBuilding(this.building()),
    );
    /** Set filtered date */
    public readonly setDate = (date) =>
        (this._orders.filters = { ...this._orders.filters, date });
    public readonly setSearch = (str) =>
        (this._orders.filters = { ...this._orders.filters, search: str });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._orders.filters = { ...this._orders.filters, zones: z };
        this._catering.zone = z[0];
    };

    public readonly addItem = () => this._catering.addItem();
    public readonly editConfig = () => this._catering.editConfig();
    public readonly importMenu = () => this._catering.importMenu();
    public readonly setCaterer = (caterer: string) =>
        (this._orders.filters = { ...this._orders.filters, caterer });

    constructor() {
        super();

        effect(() => {
            if (!this._org_initialised()) return;
            this._catering.zone =
                (this._orders.filters?.zones || [])[0] ||
                this._org.building?.id;
        });

        effect(() => {
            if (!this._org_initialised()) return;
            const params = this._query_param_map();
            if (params.has('zone_ids')) {
                const zones = params.get('zone_ids').split(',');
                if (!zones.length) return;
                const level = this._org.levelWithID(zones);
                this.zones.set(zones);
                if (!level) return;
                this._org.building = this._org.buildings.find(
                    (bld) => bld.id === level.parent_id,
                );
            }
            if (params.has('building_id')) {
                this._org.building = this._org.buildings.find(
                    (bld) => bld.id === params.get('building_id'),
                );
            }
        });
    }

    public async setRoomAvailability() {
        const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
            data: {
                type: 'Catering',
                disabled_rooms: this._catering.availability(),
            },
        });
        this.subscription(
            'room-availability',
            ref.componentInstance.change.subscribe(async (list) => {
                await this._catering
                    .saveSettings({ disabled_rooms: list })
                    .catch();
                ref.componentInstance.loading.set(false);
            }),
        );
    }

    public setChargeCodes() {
        this._dialog.open(ChargeCodeListModalComponent);
    }
}
