import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { first, take } from 'rxjs/operators';

import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { MatDialog } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-topbar',
    template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (path !== 'events'
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
                <button
                    btn
                    matRipple
                    *ngIf="path === 'manage'"
                    class="w-40 space-x-2"
                    (click)="newParkingSpace()"
                    [disabled]="!(options | async)?.zones?.length"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                    </div>
                    <app-icon>add</app-icon>
                </button>
            </div>
            <button
                btn
                matRipple
                *ngIf="path === 'users'"
                class="w-40 space-x-2"
                (click)="newParkingUser()"
            >
                <div class="pl-2">
                    {{ 'APP.CONCIERGE.PARKING_USER_ADD' | translate }}
                </div>
                <app-icon>add</app-icon>
            </button>
            <button
                btn
                matRipple
                *ngIf="path === 'events'"
                class="w-48 space-x-2"
                (click)="newReservation()"
            >
                <div class="pl-2">
                    {{ 'APP.CONCIERGE.PARKING_ADD' | translate }}
                </div>
                <app-icon>add</app-icon>
            </button>
        </div>
        <div class="mb-2 flex h-14 items-center bg-base-100 px-8">
            <mat-form-field appearance="outline" class="no-subscript w-56">
                <mat-select
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        <div class="flex flex-col-reverse">
                            <div class="text-xs opacity-30" *ngIf="use_region">
                                {{ (level.parent_id | building)?.display_name }}
                                <span class="opacity-0"> - </span>
                            </div>
                            <div>{{ level.display_name || level.name }}</div>
                        </div>
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <div class="w-0 flex-1"></div>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                (click)="manageRestrictions()"
                [matTooltip]="'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate"
                *ngIf="path !== 'events' && path !== 'map'"
            >
                <app-icon>lock_open</app-icon>
            </button>
            <date-options
                *ngIf="path === 'events' || path === 'map'"
                (dateChange)="setDate($event)"
            ></date-options>
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
export class ParkingTopbarComponent extends AsyncHandler implements OnInit {
    public path = '';
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._state.levels;
    /** Options set for week view */
    public readonly options = this._state.options;
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setOptions({ date: d });
    /** Set filter string */
    public readonly setSearch = (str) =>
        this._state.setOptions({ search: str });
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
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

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'parking' },
        });
    }

    constructor(
        private _state: ParkingStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _settings: SettingsService,
        private _dialog: MatDialog,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        await timer(1000).toPromise();
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

    public newParkingSpace() {
        this._state.editSpace();
    }

    public newParkingUser() {
        this._state.editUser();
    }

    public async newReservation() {
        const { date } = await this.options.pipe(take(1)).toPromise();
        this._state.editReservation(undefined, {
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
