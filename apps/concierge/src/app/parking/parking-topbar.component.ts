import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-topbar',
    template: `
        <div class="flex items-center w-full py-4 px-8 space-x-2">
            <h2 class="text-2xl font-medium">
                {{
                    path !== 'events'
                        ? 'Parking Management'
                        : 'Parking Reservations'
                }}
            </h2>
            <div class="flex-1 w-px"></div>
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
                    class="space-x-2 w-40"
                    (click)="newParkingSpace()"
                    [disabled]="!(options | async)?.zones?.length"
                >
                    <div class="pl-2">New Space</div>
                    <app-icon>add</app-icon>
                </button>
            </div>
            <button
                btn
                matRipple
                *ngIf="path === 'users'"
                class="space-x-2 w-40"
                (click)="newParkingUser()"
            >
                <div class="pl-2">New User</div>
                <app-icon>add</app-icon>
            </button>
            <button
                btn
                matRipple
                *ngIf="path === 'events'"
                class="space-x-2 w-48"
                (click)="newReservation()"
            >
                <div class="pl-2">New Reservation</div>
                <app-icon>add</app-icon>
            </button>
        </div>
        <div class="flex items-center bg-base-100 px-8 mb-2 h-14">
            <mat-form-field appearance="outline" class="w-56 no-subscript">
                <mat-select
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    placeholder="All Levels"
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
            <div class="flex-1 w-0"></div>
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
        });
        this._state.setOptions({ zones: z });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        private _state: ParkingStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _settings: SettingsService,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
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

    public newReservation() {
        this._state.editReservation();
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
