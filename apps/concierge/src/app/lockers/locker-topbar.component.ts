import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { MatDialog } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { LockerStateService } from './locker-state.service';

@Component({
    selector: 'lockers-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (path !== 'events'
                        ? 'APP.CONCIERGE.LOCKERS_HEADER'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_HEADER'
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
                    ((options | async)?.zones?.length
                        ? ''
                        : 'APP.CONCIERGE.LOCKERS_LEVEL_SELECT'
                    ) | translate
                "
            >
                @if (path === 'manage') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newLockerBank()"
                        [disabled]="!(options | async)?.zones?.length"
                    >
                        <div class="pl-4">
                            {{ 'APP.CONCIERGE.LOCKERS_BANK_ADD' | translate }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </button>
                }
            </div>
            @if (path === 'events') {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newBooking()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </button>
            }
        </div>
        <div class="mb-2 flex h-14 items-center bg-base-100 px-8">
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
            <div class="w-0 flex-1"></div>
            @if (path !== 'events' && path !== 'map') {
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
            @if (path !== 'events' && path !== 'map') {
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.LOCKERS_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (path === 'events' || path === 'map') {
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
    standalone: false,
})
export class LockersTopbarComponent extends AsyncHandler implements OnInit {
    private _state = inject(LockerStateService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public path = '';
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._state.levels;
    /** Options set for week view */
    public readonly options = this._state.filters;
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setFilters({ date: d });
    /** Set filter string */
    public readonly setSearch = (str) => this._state.setSearch(str);
    public readonly newLockerBank = () => this._state.editLockerBank();
    public readonly releaseAllLockers = () =>
        this._state.releaseAllLockers(true);
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        if (!this._router.url.includes('lockers')) return;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones: z });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        await timer(1000).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (
                    params.has('zone_ids') &&
                    this._router.url.includes('locker')
                ) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        this.zones = zones;
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                        this._state.setFilters({ zones: zones });
                    }
                }
            }),
        );
        this.subscription(
            'levels',
            this._state.levels.subscribe((levels) => {
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

    public async newBooking() {
        const { date } = await nextValueFrom(this.options);
        this._state.editBooking(undefined, {
            date: date || Date.now(),
            allow_time_changes: true,
        });
    }

    private _updatePath() {
        this.timeout(
            'update_path',
            () => {
                const parts = this._router.url?.split('/') || [''];
                this.path = parts[parts.length - 1].split('?')[0];
            },
            50,
        );
    }
}
