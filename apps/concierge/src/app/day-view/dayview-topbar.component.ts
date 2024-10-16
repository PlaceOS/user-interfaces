import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, first } from 'rxjs/operators';

import { AsyncHandler, Identity, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { BookingUIOptions, EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-topbar',
    template: `
        <div
            class="flex items-center px-4 h-20 bg-base-100 border-b border-base-200"
        >
            <button
                btn
                matRipple
                new
                class="w-12 xl:w-auto overflow-hidden"
                (click)="newBooking()"
            >
                <div class="flex items-center">
                    <app-icon
                        class="mr-2"
                        [icon]="{ class: 'material-icons', content: 'add' }"
                    ></app-icon>
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
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [(ngModel)]="type_list"
                    (ngModelChange)="updateTypes($event)"
                    placeholder="No Events"
                >
                    <mat-select-trigger>Legend</mat-select-trigger>
                    <mat-option *ngFor="let type of types" [value]="type.id">
                        {{ type.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="(ui_options | async)?.show_overflow"
                (ngModelChange)="updateUIOptions({ show_overflow: $event })"
                *ngIf="allow_setup_breakdown"
            >
                <div class="text-xs">Setup / Breakdown</div>
            </mat-slide-toggle>
            <div class="flex-1 w-0"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options (dateChange)="setDate($event)"></date-options>
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
                margin-left: 1em;
            }

            mat-slide-toggle div {
                width: 5.5em;
                white-space: initial;
                line-height: 1.2em;
            }
        `,
    ],
})
export class DayviewTopbarComponent extends AsyncHandler {
    /** List of selected levels */
    public zones: string[] = [];

    public readonly types: Identity[] = [
        { id: 'internal', name: 'Internal' },
        { id: 'external', name: 'External' },
        { id: 'cancelled', name: 'Cancelled' },
    ];
    /** List of selected types */
    public type_list: string[] = this.types.map((i) => `${i.id}`);
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** List of levels for the active building */
    public readonly ui_options = this._state.options;
    /** Set filtered date */
    public readonly setDate = (d) => this._state.setDate(d);
    /**  */
    public readonly newBooking = (d?) => this._state.newBooking(d);
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
        });
    };
    /** List of levels for the active building */
    public readonly updateTypes = (types) =>
        this._state.setFilters({
            hide_type: this.types.reduce((list, item) => {
                !types.includes(item.id) ? list.push(item) : '';
                return list;
            }, []),
        });

    public updateUIOptions(options: BookingUIOptions) {
        this._state.setUIOptions(options);
    }

    public get allow_setup_breakdown() {
        return this._settings.get('app.events.allow_setup_breakdown');
    }

    constructor(
        private _state: EventsStateService,
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
                        this.zones = zones;
                        const level = this._org.levelWithID(zones);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id,
                        );
                    }
                }
            }),
        );
        this.updateTypes(this.type_list);
    }
}
