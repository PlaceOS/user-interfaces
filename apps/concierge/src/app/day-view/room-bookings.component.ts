import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { EventsStateService } from './events-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { take } from 'rxjs/operators';

const EMPTY = [];
@Component({
    selector: 'room-bookings',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden pl-8">
            <div class="flex items-center justify-between w-full py-4 pr-8">
                <h2 class="text-2xl font-medium">Room Bookings</h2>
                <button btn matRipple class="space-x-2" (click)="newBooking()">
                    <div>New Booking</div>
                    <app-icon>add</app-icon>
                </button>
            </div>
            <div class="w-full flex items-center">
                <mat-form-field appearance="outline" class="h-[3.5rem]" *ngIf="!use_region">
                    <mat-select
                        multiple
                        [ngModel]="zones | async"
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
                <ng-container *ngIf="allow_setup_breakdown">
                    <div class="border-l h-full ml-8 mr-4" *ngIf="!use_region"></div>
                    <mat-slide-toggle
                        class="m-2"
                        [ngModel]="(ui_options | async)?.show_overflow"
                        (ngModelChange)="updateUIOptions({ show_overflow: $event })"
                    >
                        <div class="text-xs">Setup / Breakdown</div>
                    </mat-slide-toggle>
                </ng-container>
                <div class="border-l h-full ml-8 mr-4"></div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple class="inverse" [matMenuTriggerFor]="menu">
                        <app-icon>filter_list</app-icon>
                        <div class="mx-2">Filters</div>
                    </button>
                    <mat-menu #menu="matMenu" class="">
                        <div class="flex flex-col space-y-2 overflow-hidden w-48">
                            <mat-checkbox 
                                *ngFor="let type of types" 
                                [ngModel]="!type_list.includes(type.id)" 
                                (ngModelChange)="setFilter(type.id, !$event)"
                            >
                                {{ type.name }}
                            </mat-checkbox>
                        </div>
                    </mat-menu>
                    <ng-container *ngFor="let type of types">
                        <div class="flex items-center border border-base-200 rounded-3xl" *ngIf="!type_list.includes(type.id)">
                            <div class="h-4 w-4 m-2 rounded-full" [style.background-color]="type.color"></div>
                            <div>{{ type.name }}</div>
                            <button icon matRipple (click)="setFilter(type.id, true)">
                                <app-icon>close</app-icon>
                            </button>
                        </div>
                    </ng-container>
                </div>
            </div>
            <div class="flex w-full flex-1 h-px border-t mt-4 border-base-200">
                <room-bookings-timeline class="flex-1"/>
                <room-bookings-approvals *ngIf="has_approvals"/>
            </div>
        </div>
    `,
    styles: [``],
})
export class RoomBookingsComponent extends AsyncHandler {
    public readonly zones = this._state.zones;
    public readonly ui_options = this._state.options;
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** List of levels for the active building */
    public readonly updateZones = (z) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: z.join(',') },
        });
        this._state.setZones(z);
    };
    public readonly updateUIOptions = (o) => this._state.setUIOptions(o);
    /**  */
    public readonly newBooking = (d?) => this._state.newBooking(d);

    public readonly types: any[] = [
        { id: 'internal', name: 'Internal', color: '#D81B60' },
        { id: 'external', name: 'External', color: '#1E88E5' },
        { id: 'cancelled', name: 'Cancelled', color: '#eeeeee' },
    ];

    public get type_list() {
        return this._state.filters.hide_type || EMPTY;
    }

    public get has_approvals() {
        return this._org.binding('approvals');
    }

    public get allow_setup_breakdown() {
        return this._settings.get('app.events.allow_setup_breakdown');
    }

    public get use_region() {
        return this._settings.get('app.use_region');
    }

    constructor(
        private _org: OrganisationService,
        private _state: EventsStateService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (this.use_region) return;
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
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
            this._org.active_levels.subscribe(async (levels) => {
                if (this.use_region) return;
                const zones = (
                    await this.zones.pipe(take(1)).toPromise()
                ).filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (!zones.length && levels.length) {
                    zones.push(levels[0].id);
                }
                this.updateZones(zones);
            })
        );
        this.subscription(
            'region',
            this._org.active_region.subscribe((_) => this.updateZones([_.id]))
        );
    }

    public setFilter(id: string, value: boolean) {
        const filters = this._state.filters;
        let hide_type = filters.hide_type || [];
        hide_type = hide_type.filter((i) => i !== id);
        if (value) hide_type.push(id as any);
        this._state.setFilters({ hide_type });
    }
}
