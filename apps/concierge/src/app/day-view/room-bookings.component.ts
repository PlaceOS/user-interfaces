import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { EventsStateService } from './events-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { take } from 'rxjs/operators';

@Component({
    selector: 'room-bookings',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden pl-8">
            <div class="flex items-center justify-between w-full py-4 pr-8">
                <h2 class="text-2xl font-medium">Room Bookings</h2>
                <button btn matRipple class="space-x-2">
                    <div>New Booking</div>
                    <app-icon>add</app-icon>
                </button>
            </div>
            <div class="w-full flex items-center">
                <mat-form-field appearance="outline" class="h-[3.5rem]">
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
                <div class="border-l h-full ml-8 mr-4"></div>
                <mat-slide-toggle
                    class="m-2"
                    [ngModel]="(ui_options | async)?.show_overflow"
                    (ngModelChange)="updateUIOptions({ show_overflow: $event })"
                >
                    <div class="text-xs">Setup / Breakdown</div>
                </mat-slide-toggle>
            </div>
            <div class="flex w-full flex-1 h-px border-t mt-4 border-gray-200">
                <room-bookings-timeline class="flex-1"/>
                <room-bookings-approvals/>
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

    constructor(
        private _org: OrganisationService,
        private _state: EventsStateService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
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
                const zones = (
                    await this.zones.pipe(take(1)).toPromise()
                ).filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (!zones.length && levels.length) {
                    zones.push(levels[0].id);
                }
                this.updateZones(zones);
            })
        );
    }
}
