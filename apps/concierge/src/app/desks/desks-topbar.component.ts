import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, take } from 'rxjs/operators';

import {
    AsyncHandler,
    csvToJson,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { DesksStateService } from './desks-state.service';
import { showBooking } from '@placeos/bookings';
import { randomInt } from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import { DeskBookModalComponent } from './desk-book-modal.component';

@Component({
    selector: 'desks-topbar',
    template: `
        <div
            class="flex items-center bg-white dark:bg-neutral-700 h-20 px-4 border-b border-gray-300 dark:border-neutral-500 space-x-2"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    [ngModel]="
                        (filters | async).zones
                            ? (filters | async).zones[0]
                            : 'All'
                    "
                    (ngModelChange)="updateZones([$event])"
                    placeholder="All Levels"
                >
                    <mat-option value="All" *ngIf="!is_map"
                        >All Levels</mat-option
                    >
                    <mat-option
                        *ngFor="let level of levels | async"
                        [value]="level.id"
                    >
                        {{ level.display_name || level.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <button
                btn
                matRipple
                *ngIf="!manage"
                class="mx-2 w-36"
                (click)="newDeskBooking()"
            >
                New Booking
            </button>
            <button
                btn
                matRipple
                *ngIf="manage"
                class="mx-2 w-32"
                (click)="newDesk()"
            >
                New Desk
            </button>
            <button btn matRipple *ngIf="manage" class="relative w-32">
                Upload CSV
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="loadCSVData($event)"
                />
            </button>
            <div class="flex-1 w-2"></div>
            <searchbar
                class="mr-2"
                [model]="(filters | async)?.search"
                (modelChange)="setFilters({ search: $event })"
            ></searchbar>
            <date-options (dateChange)="setDate($event)"></date-options>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
})
export class DesksTopbarComponent extends AsyncHandler implements OnInit {
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** List of levels for the active building */
    public readonly filters = this._desks.filters;

    public manage = false;
    public is_map = false;
    /** Set filtered date */
    public readonly setDate = (date) => this._desks.setFilters({ date });
    public readonly setFilters = (o) => this._desks.setFilters(o);
    /** Update active zones for desks */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._desks.setFilters({ zones });
    };

    constructor(
        private _desks: DesksStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog
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
                        this.updateZones(zones);
                        const level = this._org.levelWithID(zones);
                        if (!level) return;
                        this._org.building = this._org.buildings.find(
                            (bld) => bld.id === level.parent_id
                        );
                    }
                }
                if (params.has('date')) {
                    this.setDate(new Date(+params.get('date')));
                }
                if (params.has('approve')) {
                    this.approve(params.get('approve'));
                } else if (params.has('reject')) {
                    this.reject(params.get('reject'));
                }
                this.manage = this._router.url?.includes('manage');
                this.is_map = this._router.url?.includes('map');
            })
        );
        this.subscription(
            'levels',
            this._org.active_levels.subscribe(async (levels) => {
                const filters = await this.filters.pipe(take(1)).toPromise();
                const zones =
                    filters?.zones?.filter(
                        (zone) =>
                            levels.find((lvl) => lvl.id === zone) ||
                            zone === 'All'
                    ) || [];
                if (!zones.length && levels.length) {
                    zones.push(levels[0].id);
                }
                this.updateZones(zones);
            })
        );
        this.manage = this._router.url?.includes('manage');
        this.is_map = this._router.url?.includes('map');
    }

    public newDesk() {
        this._desks.addDesks([new Desk({ id: `desk-${randomInt(999_999)}` })]);
        notifySuccess(
            'New desk added to local data. Make sure to save the desk before using it.'
        );
    }

    public newDeskBooking() {
        this._dialog.open(DeskBookModalComponent, {});
    }

    public async loadCSVData(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const list = csvToJson(data) || [];
            this._desks.addDesks(
                list.map(
                    (_) =>
                        new Desk({
                            ..._,
                            id: _.id || `desk-${randomInt(999_999)}`,
                        })
                )
            );
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Aprrove a desk booking
     * @param id Booking ID to approve
     */
    private async approve(id: string) {
        const booking = await showBooking(id).toPromise();
        if (booking) {
            this._desks.approveDesk(booking);
        }
    }

    /**
     * Reject a desk booking
     * @param id Booking ID to reject
     */
    private async reject(id: string) {
        const booking = await showBooking(id).toPromise();
        if (booking) {
            this._desks.rejectDesk(booking);
        }
    }
}
