import { Component, OnInit, inject, input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    Desk,
    OrganisationService,
    SettingsService,
    csvToJson,
    downloadFile,
    jsonToCsv,
    loadTextFileFromInputEvent,
    nextValueFrom,
    notifyError,
    notifyInfo,
    randomInt,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { DesksStateService } from '../desks/desks-state.service';
import { LockerStateService } from '../lockers/locker-state.service';
import { ParkingStateService } from '../parking/parking-state.service';
import { RoomManagementService } from '../room-manager/room-management.service';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { SearchbarComponent } from '../ui/searchbar.component';

@Component({
    selector: 'resource-manager-topbar',
    template: `
        <div class="flex items-center space-x-2 bg-base-100 px-8 mb-4">
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [ngModel]="selected_zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    [multiple]="tab_index() !== 1"
                >
                    @if (tab_index() === 1) {
                        <mat-option value="All">
                            {{ 'COMMON.LEVEL_ALL' | translate }}
                        </mat-option>
                    }
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
            <div class="w-2 flex-1"></div>
            @if (tab_index() === 1) {
                <button
                    icon
                    matRipple
                    class="rounded h-12 w-12 bg-secondary text-secondary-content"
                    (click)="uploadCSV.click()"
                    [matTooltip]="'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate"
                >
                    <icon>cloud_upload</icon>
                </button>
                <input
                    #uploadCSV
                    type="file"
                    class="hidden"
                    (change)="loadCSVData($event)"
                />
                <button
                    icon
                    matRipple
                    class="rounded h-12 w-12 bg-secondary text-secondary-content"
                    (click)="downloadTemplate()"
                    [matTooltip]="
                        'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                    "
                >
                    <icon>download</icon>
                </button>
            }
            @if (tab_index() === 3) {
                <button
                    icon
                    matRipple
                    class="mr-2 h-12 w-12 rounded border border-error text-error"
                    (click)="releaseAllLockers()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_RELEASE_ALL' | translate
                    "
                >
                    <icon>open_in_new</icon>
                </button>
            }
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                (click)="manageRestrictions()"
                [matTooltip]="bookingRulesTooltip() | translate"
            >
                <icon>lock_open</icon>
            </button>
            <searchbar
                [model]="search_value"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
    imports: [
        AsyncPipe,
        MatFormFieldModule,
        MatSelectModule,
        BuildingPipe,
        SearchbarComponent,
        FormsModule,
        MatTooltipModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ResourceManagerTopbarComponent
    extends AsyncHandler
    implements OnInit
{
    private _room_service = inject(RoomManagementService);
    private _desk_service = inject(DesksStateService);
    private _parking_service = inject(ParkingStateService);
    private _locker_service = inject(LockerStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly tab_index = input.required<number>();

    public selected_zones: string[] | string = [];
    public search_value: string = '';

    /** List of levels for the active building */
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this.use_region
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld),
        ),
    );

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public readonly bookingRulesTooltip = () => {
        const labels = [
            'APP.CONCIERGE.ROOMS_BOOKING_RULES',
            'APP.CONCIERGE.DESKS_BOOKING_RULES',
            'APP.CONCIERGE.PARKING_BOOKING_RULES',
            'APP.CONCIERGE.LOCKERS_BOOKING_RULES',
        ];
        return labels[this.tab_index()];
    };

    /** Update active zones */
    public readonly updateZones = (zones: string[] | string) => {
        const zone_array = Array.isArray(zones) ? zones : [zones];
        const filtered_zones = zone_array.filter((z) => z !== 'All');

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: filtered_zones.join(',') },
            queryParamsHandling: 'merge',
        });

        // Update the appropriate service based on tab
        switch (this.tab_index()) {
            case 0:
                this._room_service.setFilters({ zones: filtered_zones });
                break;
            case 1:
                this._desk_service.setFilters({ zones: filtered_zones });
                break;
            case 2:
                this._parking_service.setOptions({ zones: filtered_zones });
                break;
            case 3:
                this._locker_service.setFilters({ zones: filtered_zones });
                break;
        }
    };

    /** Set search filter */
    public readonly setSearch = (str: string) => {
        // Update query params
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { search: str || null },
            queryParamsHandling: 'merge',
        });

        // Update the appropriate service
        switch (this.tab_index()) {
            case 0:
                this._room_service.setSearchString(str);
                break;
            case 1:
                this._desk_service.setFilters({ search: str });
                break;
            case 2:
                this._parking_service.setOptions({ search: str });
                break;
            case 3:
                this._locker_service.setSearch(str);
                break;
        }
    };

    public manageRestrictions() {
        const types = ['room', 'desk', 'parking', 'locker'];
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: types[this.tab_index()] },
        });
    }

    public async loadCSVData(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const list = csvToJson(data) || [];
            this._desk_service.addDesks(
                list.map(
                    (_) =>
                        new Desk({
                            ..._,
                            id: _.id || `desk-${randomInt(999_999)}`,
                        }),
                ),
            );
        } catch (e) {
            console.error(e);
        }
    }

    public downloadTemplate() {
        const desk: any = new Desk({
            id: 'desk-123',
            name: 'Test Desk',
            bookable: true,
            groups: ['test-desk-group', 'desk-bookers'],
            features: ['Standing Desk', 'Dual Monitor'],
        }).toJSON();
        delete desk.images;
        const data = jsonToCsv([desk]);
        downloadFile('desk-template.csv', data);
    }

    public releaseAllLockers() {
        this._locker_service.releaseAllLockers(true);
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('zone_ids')) {
                    const zone_list = (params.get('zone_ids') || '').split(',');
                    const zones = zone_list.filter((z) => z);
                    this.selected_zones =
                        this.tab_index() === 1 && zones.length
                            ? zones[0]
                            : zones;
                }

                // Restore search from query params
                if (params.has('search')) {
                    const search = params.get('search') || '';
                    this.search_value = search;
                    // Update the appropriate service without triggering another navigation
                    switch (this.tab_index()) {
                        case 0:
                            this._room_service.setSearchString(search);
                            break;
                        case 1:
                            this._desk_service.setFilters({ search });
                            break;
                        case 2:
                            this._parking_service.setOptions({ search });
                            break;
                        case 3:
                            this._locker_service.setSearch(search);
                            break;
                    }
                } else {
                    this.search_value = '';
                }
            }),
        );
    }
}
