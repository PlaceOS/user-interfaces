import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    CateringOrdersService,
    CateringStateService,
    ChargeCodeListModalComponent,
} from '@placeos/catering';
import {
    AsyncHandler,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    AvailableRoomsStateModalComponent,
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { loadPersistedZones, persistZones } from '../ui/zone-persistence';

@Component({
    selector: 'catering-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 pt-4 pb-2">
            <h2 class="text-2xl font-medium">
                {{
                    (page() === 'menu'
                        ? 'CATERING.MENU'
                        : 'CATERING.ORDER_LIST'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="filters()?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="zones()"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region) {
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
                                {{
                                    caterer ||
                                        '[' +
                                            ('CATERING.CATERER_EMPTY'
                                                | translate) +
                                            ']'
                                }}
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
                (!zones()[0] || zones()[0] === building?.id)
            ) {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.MENU_ADD' | translate"
                    (click)="addItem()"
                >
                    <icon class="text-2xl">add</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.BOOKING_RULES' | translate"
                    (click)="editConfig()"
                >
                    <icon class="text-2xl">menu_book</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.MENU_IMPORT' | translate"
                    (click)="importMenu()"
                >
                    <icon class="text-2xl">cloud_upload</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.ROOM_AVAILABILITY' | translate"
                    (click)="setRoomAvailability()"
                >
                    <icon class="text-2xl">event_available</icon>
                </button>
            }
            @if (page() === 'menu') {
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'CATERING.CHARGE_CODES' | translate"
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
        MatTooltipModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SearchbarComponent,
        TranslatePipe,
        BuildingPipe,
    ],
})
export class CateringTopbarComponent extends AsyncHandler implements OnInit {
    private _orders = inject(CateringOrdersService);
    private _catering = inject(CateringStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    /** List of selected levels */
    public readonly zones = signal<string[]>([]);
    /** Currently active page */
    public readonly page = signal('');
    public readonly filters = signal(this._orders.filters || {});
    public readonly caterers = signal<string[]>([]);
    /** List of levels for the active building */
    public readonly levels = signal<any[]>([]);
    /** Set filtered date */
    public readonly setDate = (date) => {
        this._orders.filters = { ...this._orders.filters, date };
        this.filters.set(this._orders.filters);
    };
    public readonly setCaterer = (caterer) => {
        this._orders.filters = { ...this._orders.filters, caterer };
        this.filters.set(this._orders.filters);
    };
    public readonly setSearch = (str) => {
        this._orders.filters = { ...this._orders.filters, search: str };
        this.filters.set(this._orders.filters);
    };
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        const zones = z || [];
        this.zones.set(zones);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.length ? zones.join(',') : null },
            queryParamsHandling: 'merge',
        });
        this._orders.filters = { ...this._orders.filters, zones };
        this.filters.set(this._orders.filters);
        this._catering.zone = zones[0];
        persistZones(
            this.page() === 'menu' ? 'catering-menu' : 'catering-orders',
            this._persistScopeId(),
            zones,
        );
    };

    public readonly addItem = () => this._catering.addItem();
    public readonly editConfig = () => this._catering.editConfig();
    public readonly importMenu = () => this._catering.importMenu();

    public get building() {
        return this._org.building;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor() {
        super();
        effect(() => {
            const bld = this._org.active_building();
            const region = this._org.active_region();
            const levels = this._settings.get('app.use_region')
                ? this._org.levelsForRegion?.(region)
                : this._org.levelsForBuilding?.(bld);
            this.levels.set(levels || []);
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (!params?.has('zone_ids')) return;
                const zones = (params.get('zone_ids') || '')
                    .split(',')
                    .filter(Boolean);
                if (!zones.length) return;
                const level = this._org.levelWithID(zones);
                this.zones.set(zones);
                if (!level) return;
                this._org.building = this._org.buildings.find(
                    (bld) => bld.id === level.parent_id,
                );
            }),
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                const page = params?.get('view') || '';
                const page_changed = !!this.page() && this.page() !== page;
                this.page.set(page);
                if (page_changed) {
                    const zones = loadPersistedZones(
                        page === 'menu' ? 'catering-menu' : 'catering-orders',
                        this._persistScopeId(),
                    ).filter((zone) =>
                        this.levels().find((level) => level.id === zone),
                    );
                    this.updateZones(zones);
                }
            }),
        );
        this.filters.set(this._orders.order_filters() || {});
        this.caterers.set(this._catering.caterers() || []);
        this._catering.zone =
            (this.filters()?.zones || [])[0] || this._org.building?.id;
    }

    private _persistScopeId() {
        return this.use_region
            ? this._org.region?.id || ''
            : this._org.building?.id || '';
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
                console.log('List:', list);
                await this._catering
                    .saveSettings({ disabled_rooms: list })
                    .catch();
                ref.componentInstance.loading.set(false);
                notifySuccess('Room availability settings saved');
            }),
        );
    }

    public setChargeCodes() {
        this._dialog.open(ChargeCodeListModalComponent);
    }
}
