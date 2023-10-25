import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, take } from 'rxjs/operators';

import {
    AsyncHandler,
    csvToJson,
    downloadFile,
    jsonToCsv,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { LockersStateService } from './locker-state.service';
import { showBooking } from '@placeos/bookings';
import { randomInt } from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';

@Component({
    selector: 'lockers-topbar',
    template: `
        <div
            class="flex items-center bg-base-100 h-20 px-4 border-b border-base-200 space-x-2"
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
            <!-- <button
                btn
                matRipple
                *ngIf="!manage"
                class="mx-2 w-36"
                matTooltip="New Locker Booking"
                (click)="newLockerBooking()"
            >
                New Booking
            </button>
            <button
                btn
                icon
                matRipple
                *ngIf="manage"
                class="bg-primary mx-2 text-white rounded"
                (click)="newLocker()"
                matTooltip="New Locker"
            >
                <app-icon>add</app-icon>
            </button>
            <button
                btn
                icon
                matRipple
                *ngIf="manage"
                class="bg-primary relative text-white rounded"
                matTooltip="Upload Lockers CSV"
            >
                <app-icon>cloud_upload</app-icon>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="loadCSVData($event)"
                />
            </button>
            <button
                btn
                icon
                matRipple
                *ngIf="manage"
                class="bg-primary mx-2 text-white rounded"
                (click)="downloadTemplate()"
                matTooltip="Download Template Locker CSV"
            >
                <app-icon>download</app-icon>
            </button> -->
            <button
                btn
                icon
                matRipple
                *ngIf="manage"
                class="bg-primary mx-2 text-white rounded"
                (click)="manageRestrictions()"
                matTooltip="Locker Restrictions"
            >
                <app-icon>lock_open</app-icon>
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
export class LockersTopbarComponent extends AsyncHandler implements OnInit {
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** List of levels for the active building */
    public readonly filters = this._lockers.filters;

    public manage = false;
    public is_map = false;
    /** Set filtered date */
    public readonly setDate = (date) => this._lockers.setFilters({ date });
    public readonly setFilters = (o) => this._lockers.setFilters(o);
    /** Update active zones for lockers */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._lockers.setFilters({ zones });
    };

    constructor(
        private _lockers: LockersStateService,
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
            'router.events',
            this._router.events.subscribe(() => {
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

    // public newLocker() {
    //     this._lockers.addLockers([
    //         new Locker({ id: `locker-${randomInt(999_999)}` }),
    //     ]);
    //     notifySuccess(
    //         'New locker added to local data. Make sure to save the locker before using it.'
    //     );
    // }

    // public newLockerBooking() {
    //     this._dialog.open(LockerBookModalComponent, {});
    // }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }

    // public async loadCSVData(event: InputEvent) {
    //     const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
    //         notifyError(m);
    //         throw e;
    //     });
    //     try {
    //         const list = csvToJson(data) || [];
    //         this._lockers.addLockers(
    //             list.map(
    //                 (_) =>
    //                     new Locker({
    //                         ..._,
    //                         id: _.id || `locker-${randomInt(999_999)}`,
    //                     })
    //             )
    //         );
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // public downloadTemplate() {
    //     const locker: any = new Locker({
    //         id: 'locker-123',
    //         name: 'Test Locker',
    //         bookable: true,
    //         groups: ['test-locker-group', 'locker-bookers'],
    //         features: ['Standing Locker', 'Dual Monitor'],
    //     }).toJSON();
    //     const data = jsonToCsv([locker]);
    //     downloadFile('locker-template.csv', data);
    // }

    /**
     * Aprrove a locker booking
     * @param id Booking ID to approve
     */
    private async approve(id: string) {
        const booking = await showBooking(id).toPromise();
        if (booking) {
            this._lockers.approveLocker(booking);
        }
    }

    /**
     * Reject a locker booking
     * @param id Booking ID to reject
     */
    private async reject(id: string) {
        const booking = await showBooking(id).toPromise();
        if (booking) {
            this._lockers.rejectLocker(booking);
        }
    }
}
