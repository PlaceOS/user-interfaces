import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
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
    nextValueFrom,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    AvailableRoomsStateModalComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { combineLatest } from 'rxjs';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';

@Component({
    selector: 'catering-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 pb-2 pt-4">
            <h2 class="text-2xl font-medium">
                {{
                    (page === 'menu' ? 'CATERING.MENU' : 'CATERING.ORDER_LIST')
                        | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="filters?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
        <div class="flex h-20 items-center space-x-2 bg-base-100 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="filters?.zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels | async; track level) {
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
            @if ((caterers | async)?.length > 1) {
                <mat-form-field appearance="outline" class="no-subscript w-60">
                    <mat-select
                        [ngModel]="filters?.caterer"
                        (ngModelChange)="setCaterer($event)"
                        [placeholder]="'CATERING.CATERERS_ALL' | translate"
                    >
                        <mat-option value="">{{
                            'CATERING.CATERERS_ALL' | translate
                        }}</mat-option>
                        @for (caterer of caterers | async; track caterer) {
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
            @if (page === 'menu') {
                <div class="w-2 flex-1"></div>
            }
            @if (page === 'menu' && (!zones[0] || zones[0] === building?.id)) {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.MENU_ADD' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="addItem()"
                >
                    <icon class="text-2xl">add</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.BOOKING_RULES' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="editConfig()"
                >
                    <icon class="text-2xl">menu_book</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.MENU_IMPORT' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="importMenu()"
                >
                    <icon class="text-2xl">cloud_upload</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.ROOM_AVAILABILITY' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="setRoomAvailability()"
                >
                    <icon class="text-2xl">event_available</icon>
                </button>
            }
            @if (page === 'menu') {
                <button
                    icon
                    matRipple
                    [matTooltip]="'CATERING.CHARGE_CODES' | translate"
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="setChargeCodes()"
                >
                    <icon class="text-2xl">payments</icon>
                </button>
            }
            @if (page !== 'menu') {
                <div class="w-2 flex-1"></div>
            }
            <!-- <searchbar class="mr-2"></searchbar> -->
            @if (page !== 'menu') {
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
        CommonModule,
        DateOptionsComponent,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SearchbarComponent,
        TranslatePipe,
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
    public zones: string[] = [];
    /** Currently active page */
    public page: string;
    public readonly filters = this._orders.filters;
    public readonly caterers = this._catering.caterers;
    /** List of levels for the active building */
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this._settings.get('app.use_region')
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld),
        ),
    );
    /** Set filtered date */
    public readonly setDate = (date) =>
        (this._orders.filters = { ...this._orders.filters, date });
    public readonly setCaterer = (caterer) =>
        (this._orders.filters = { ...this._orders.filters, caterer });
    public readonly setSearch = (str) =>
        (this._orders.filters = { ...this._orders.filters, search: str });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._orders.filters = { ...this._orders.filters, zones: [z] };
        this._catering.zone = z[0];
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

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._catering.zone =
            (this._orders.filters?.zones || [])[0] || this._org.building?.id;
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (!zones.length) return;
                    const level = this._org.levelWithID(zones);
                    this.zones = zones;
                    if (!level) return;
                    this._org.building = this._org.buildings.find(
                        (bld) => bld.id === level.parent_id,
                    );
                }
            }),
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(
                (params) =>
                    (this.page = params.has('view') ? params.get('view') : ''),
            ),
        );
    }

    public async setRoomAvailability() {
        const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
            data: {
                type: 'Catering',
                disabled_rooms: await nextValueFrom(
                    this._catering.availability,
                ),
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
