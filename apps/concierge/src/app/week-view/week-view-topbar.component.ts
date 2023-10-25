import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'week-view-topbar',
    template: `
        <button btn matRipple new class="w-12 xl:w-auto" (click)="newBooking()">
            <div class="flex items-center">
                <app-icon class="mr-2">add</app-icon>
                <div class="hidden xl:block">New Booking</div>
            </div>
        </button>
        <mat-form-field appearance="outline">
            <mat-select
                multiple
                [(ngModel)]="zones"
                (ngModelChange)="updateZones($event)"
                placeholder="All Levels"
            >
                <mat-option
                    *ngFor="let level of levels | async"
                    [value]="level.id"
                >
                    {{ level.display_name || level.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-slide-toggle
            class="m-2"
            [ngModel]="(options | async)?.show_weekends"
            (ngModelChange)="setWeekends($event)"
            ><div class="text-xs">Show weekends</div></mat-slide-toggle
        >
        <div class="flex-1 w-0"></div>
        <!-- <searchbar class="mr-2"></searchbar> -->
        <date-options (dateChange)="setDate($event)"></date-options>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                background-color: var(--b1);
                height: 5em;
                padding: 0 1em;
            }

            button {
                min-width: 0;
                padding: 0 0.85rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
                margin-left: 1em;
            }
        `,
    ],
})
export class WeekViewTopbarComponent extends AsyncHandler implements OnInit {
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Options set for week view */
    public readonly options = this._state.options;
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setDate(d);
    /** Set filtered date */
    public readonly setWeekends = (d) =>
        this._state.setUIOptions({ show_weekends: d });
    /**  */
    public readonly newBooking = (d?) => this._state.newBooking(d);
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
        });
        this._state.setZones(z);
    };

    constructor(
        private _state: EventsStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router
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
                            (bld) => bld.id === level.parent_id
                        );
                    }
                }
            })
        );
        this.subscription(
            'levels',
            this._org.active_levels.subscribe((levels) => {
                this.zones = this.zones.filter((zone) =>
                    levels.find((lvl) => lvl.id === zone)
                );
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            })
        );
    }
}
