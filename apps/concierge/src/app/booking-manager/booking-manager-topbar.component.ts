import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AssetManagerStateService } from '../asset-manager/asset-manager-state.service';
import { DeskBookModalComponent } from '../desks/desk-book-modal.component';
import { DesksStateService } from '../desks/desks-state.service';
import { LockerStateService } from '../lockers/locker-state.service';
import { ParkingBookingModalComponent } from '../parking/parking-booking-modal.component';
import { ParkingStateService } from '../parking/parking-state.service';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { InviteVisitorModalComponent } from '../visitors/invite-visitor-modal.component';
import { VisitorsStateService } from '../visitors/visitors-state.service';

@Component({
    selector: 'booking-manager-topbar',
    template: `
        @if (show_header()) {
            <div class="flex items-center space-x-2 px-8 py-4">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.BOOKINGS_HEADER' | translate }}
                </h2>
                <div class="w-2 flex-1"></div>
                <searchbar
                    class="mr-2"
                    [model]="search_value"
                    (modelChange)="setSearch($event)"
                ></searchbar>
                @if (tab_name() === 'desks') {
                    <button
                        btn
                        matRipple
                        class="w-44 space-x-2"
                        (click)="newDeskBooking()"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                } @else if (tab_name() === 'parking') {
                    <button
                        btn
                        matRipple
                        class="w-44 space-x-2"
                        (click)="newParkingBooking()"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                } @else if (tab_name() === 'visitors') {
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="inviteVisitor()"
                    >
                        {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                    </button>
                }
            </div>
        } @else {
            <div
                class="mb-4 flex flex-nowrap items-center space-x-2 bg-base-100 px-8"
            >
                @if (tab_name() === 'assets') {
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="selected_zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        >
                            <mat-option value="All">
                                {{ 'COMMON.LEVEL_ALL' | translate }}
                            </mat-option>
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                } @else {
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="selected_zones"
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
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <div class="w-2 flex-1"></div>
                <date-options (dateChange)="setDate($event)"></date-options>
                <button
                    btn
                    icon
                    matRipple
                    [matTooltip]="'COMMON.REFRESH' | translate"
                    class="ml-2 rounded border border-base-200"
                    (click)="refresh()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
        }
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
        DateOptionsComponent,
    ],
})
export class BookingManagerTopbarComponent
    extends AsyncHandler
    implements OnInit
{
    private _desk_service = inject(DesksStateService);
    private _parking_service = inject(ParkingStateService);
    private _locker_service = inject(LockerStateService);
    private _asset_service = inject(AssetManagerStateService);
    private _visitors_service = inject(VisitorsStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly tab_index = input.required<number>();
    public readonly tab_name = input<string>('');
    public readonly show_header = input.required<boolean>();

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

    /** Set filtered date */
    public readonly setDate = (date) => {
        const tab = this.tab_name();
        if (tab === 'desks') this._desk_service.setFilters({ date });
        else if (tab === 'parking') this._parking_service.setOptions({ date });
        else if (tab === 'lockers') this._locker_service.setFilters({ date });
        else if (tab === 'assets') this._asset_service.setOptions({ date });
        else if (tab === 'visitors')
            this._visitors_service.setFilters({ date });
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
        const tab = this.tab_name();
        if (tab === 'desks') {
            this._desk_service.setFilters({ zones: filtered_zones });
        } else if (tab === 'parking') {
            this._parking_service.setOptions({ zones: filtered_zones });
        } else if (tab === 'lockers') {
            this._locker_service.setFilters({ zones: filtered_zones });
        } else if (tab === 'visitors') {
            this._visitors_service.setFilters({ zones: filtered_zones });
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
        const tab = this.tab_name();
        if (tab === 'desks') {
            this._desk_service.setFilters({ search: str });
        } else if (tab === 'parking') {
            this._parking_service.setOptions({ search: str });
        } else if (tab === 'lockers') {
            this._locker_service.setSearch(str);
        } else if (tab === 'assets') {
            this._asset_service.setOptions({ search: str });
        } else if (tab === 'visitors') {
            this._visitors_service.setSearchString(str);
        }
    };

    public refresh() {
        const tab = this.tab_name();
        if (tab === 'desks') this._desk_service.refresh();
        else if (tab === 'parking') this._parking_service.startPolling();
        else if (tab === 'lockers') this._locker_service.refresh();
        else if (tab === 'assets') this._asset_service.startPolling();
        else if (tab === 'visitors') this._visitors_service.startPolling();
    }

    public newDeskBooking() {
        const ref = this._dialog.open(DeskBookModalComponent, {});
        ref.afterClosed().subscribe((_) => {
            this._desk_service.refresh();
        });
    }

    public newParkingBooking() {
        this._dialog.open(ParkingBookingModalComponent, {});
    }

    public inviteVisitor() {
        this._dialog.open(InviteVisitorModalComponent, {});
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
                        this.tab_name() === 'assets' && zones.length
                            ? zones[0]
                            : zones;
                }

                // Restore search from query params
                if (params.has('search')) {
                    const search = params.get('search') || '';
                    this.search_value = search;
                } else {
                    this.search_value = '';
                }
            }),
        );
    }
}
