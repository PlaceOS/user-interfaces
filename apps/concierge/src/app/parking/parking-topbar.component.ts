import { Component, inject, OnInit, signal } from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import {
    AsyncHandler,
    firstTruthyValueFrom,
    nextValueFrom,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { lastValueFrom, timer } from 'rxjs';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (section() !== 'events'
                        ? 'APP.CONCIERGE.PARKING_HEADER'
                        : 'APP.CONCIERGE.PARKING_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="(options | async)?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <div
                [matTooltip]="
                    (options | async)?.zones?.length
                        ? ''
                        : 'Select a level to add a space'
                "
            >
                @if (view() === 'spaces') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newParkingSpace()"
                        [disabled]="!(options | async)?.zones?.length"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                        </div>
                        <icon>add</icon>
                    </button>
                }
            </div>
            @if (view() === 'users') {
                <button
                    btn
                    matRipple
                    class="w-40 space-x-2"
                    (click)="newParkingUser()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_USER_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
            @if (section() === 'events' && !disable_reservations) {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newReservation()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
        </div>
        <div class="bg-base-100 mb-2 flex h-14 items-center px-8">
            @if (section() === 'events') {
                <div class="mr-2 flex items-center">
                    <a
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="view() !== 'list'"
                        [routerLink]="['events', 'list']"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </a>
                    <a
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="view() !== 'map'"
                        [routerLink]="['events', 'map']"
                        [matTooltip]="'COMMON.MAP' | translate"
                    >
                        <icon class="text-2xl">map</icon>
                    </a>
                </div>
            }
            <mat-form-field appearance="outline" class="no-subscript w-56">
                <mat-select
                    [(ngModel)]="zones"
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
            <div class="w-px min-w-2 flex-1"></div>
            @if (view() !== 'list' && view() !== 'map') {
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (section() === 'events') {
                <div
                    class="border-base-300 mr-2 flex items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                    matTooltip="Parking Spaces Occupied"
                >
                    {{ (bookings | async)?.length || 0 }} of
                    {{ (spaces | async)?.length || '' }}
                    <icon class="ml-1! text-lg">car_lock</icon>
                    @let percent =
                        ((bookings | async)?.length || 0) /
                        ((spaces | async)?.length || 0);
                    <span
                        class="rounded-sm px-2 py-1 font-mono text-xs"
                        [class.bg-error]="percent === 100"
                        [class.text-error-content]="percent === 100"
                        [class.bg-warning]="percent > 50 && percent < 100"
                        [class.text-warning-content]="
                            percent > 50 && percent < 100
                        "
                        [class.bg-success]="percent < 50"
                        [class.text-success-content]="percent < 50"
                        >{{ percent * 100 | number: '2.0-0' }}%</span
                    >
                </div>
            }
            @if (view() === 'list' || view() === 'map') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `,
    styles: [
        `
            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateOptionsComponent,
        MatTooltipModule,
        MatRippleModule,
        IconComponent,
        BuildingPipe,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SearchbarComponent,
        TranslatePipe,
        RouterModule,
    ],
})
export class ParkingTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(ParkingStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly section = signal<'events' | 'manage'>('events');
    public readonly view = signal<'spaces' | 'list' | 'map' | 'users'>('list');
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._state.levels;
    /** Options set for week view */
    public readonly options = this._state.options;
    public readonly spaces = this._state.spaces;
    public readonly bookings = this._state.bookings;
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setOptions({ date: d });
    /** Set filter string */
    public readonly setSearch = (str) =>
        this._state.setOptions({ search: str });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        if (!this._router.url.includes('parking')) return;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setOptions({ zones: z });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get disable_reservations() {
        return !!this._settings.get('app.parking.disable_bookings');
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'parking' },
        });
    }

    public async ngOnInit() {
        this._updatePath();
        await firstTruthyValueFrom(this._org.initialised);
        await lastValueFrom(timer(1000));
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (
                    params.has('zone_ids') &&
                    this._router.url.includes('parking')
                ) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        this.zones = zones;
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                        this._state.setOptions({ zones: zones });
                    }
                }
            }),
        );
        this.subscription(
            'levels',
            this._state.levels.pipe(debounceTime(100)).subscribe((levels) => {
                if (this.use_region) return;
                this.zones = this.zones.filter((zone) =>
                    levels.find((lvl) => lvl.id === zone),
                );
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            }),
        );
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) this._updatePath();
            }),
        );
        this._updatePath();
    }

    public newParkingSpace() {
        this._state.editSpace();
    }

    public newParkingUser() {
        this._state.editUser();
    }

    public async newReservation() {
        const { date } = await nextValueFrom(this.options);
        this._state.editReservation(undefined, {
            date: date || Date.now(),
            allow_time_changes: true,
        });
    }

    private _updatePath() {
        const parts = this._router.url?.split('/') || [''];
        const [section, view] = parts.slice(-2);
        this.section.set(section as any);
        this.view.set(view.split('?')[0] as any);
    }
}
