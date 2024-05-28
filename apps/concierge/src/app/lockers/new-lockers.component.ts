import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { LockersStateService } from './locker-state.service';
import { MatDialog } from '@angular/material/dialog';

import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';

@Component({
    selector: '[app-new-lockers]',
    template: `
        <app-topbar class=" print:hidden"></app-topbar>
        <div class="flex flex-1 h-px print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <div class="flex items-center w-full py-4 px-8 space-x-2">
                    <h2 class="text-2xl font-medium">Locker Bookings</h2>
                    <div class="flex-1 w-px"></div>
                    <searchbar
                        class="mr-2"
                        [model]="(filters | async)?.search"
                        (modelChange)="setFilters({ search: $event })"
                    ></searchbar>
                    <!-- <button
                        btn
                        matRipple
                        class="space-x-2"
                        (click)="newLockerBooking()"
                    >
                        <div>New Booking</div>
                        <app-icon>add</app-icon>
                    </button> -->
                </div>
                <div class="w-full flex items-center px-8 space-x-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="(filters | async)?.zones"
                            (ngModelChange)="updateZones($event)"
                            placeholder="All Levels"
                            multiple
                        >
                            <mat-option
                                *ngFor="let level of levels | async"
                                [value]="level.id"
                            >
                                <div class="flex flex-col-reverse">
                                    <div
                                        class="text-xs opacity-30"
                                        *ngIf="use_region"
                                    >
                                        {{
                                            (level.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                    <div>
                                        {{ level.display_name || level.name }}
                                    </div>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <!-- <div class="border-l h-full !ml-8 !mr-4"></div> -->
                    <div class="flex-1 w-px"></div>
                    <ng-container *ngIf="path === 'events'">
                        <date-options
                            (dateChange)="setDate($event)"
                        ></date-options>
                        <button
                            btn
                            icon
                            matRipple
                            matTooltip="Refresh List"
                            class="ml-2 rounded border border-base-200"
                            (click)="refresh()"
                            [disabled]="loading | async"
                        >
                            <app-icon>refresh</app-icon>
                        </button>
                    </ng-container>
                    <ng-container *ngIf="path === 'manage'">
                        <!-- <button
                            btn
                            icon
                            matRipple
                            class="bg-primary text-white rounded"
                            (click)="newLocker()"
                            matTooltip="New Locker"
                        >
                            <app-icon>add</app-icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
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
                            class="bg-primary text-white rounded"
                            (click)="downloadTemplate()"
                            matTooltip="Download Template Locker CSV"
                        >
                            <app-icon>download</app-icon>
                        </button> -->
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-primary text-white rounded"
                            (click)="manageRestrictions()"
                            matTooltip="Locker Restrictions"
                        >
                            <app-icon>lock_open</app-icon>
                        </button>
                    </ng-container>
                </div>
                <div class="flex-1 h-1/2 w-full relative overflow-auto px-4">
                    <router-outlet></router-outlet>
                </div>
                <mat-progress-bar
                    class="w-full"
                    *ngIf="(loading | async) && path === 'events'"
                    mode="indeterminate"
                ></mat-progress-bar>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }
        `,
    ],
})
export class NewLockersComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public readonly loading = this._state.loading;
    public path: string;
    /** List of levels for the active building */
    public readonly filters = this._state.filters;
    /** List of levels for the active building */
    public readonly levels = this._state.levels;
    public readonly setDate = (date) => this._state.setFilters({ date });
    public readonly setFilters = (o) => this._state.setFilters(o);
    public readonly refresh = () => this._state.refresh();
    /** Update active zones for lockers */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        private _state: LockersStateService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this._state.refresh();
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url_parts = this._router.url?.split('/') || [''];
                    this.path = url_parts[parts.length - 1].split('?')[0];
                }
            })
        );
        const parts = this._router.url?.split('/') || [''];
        this.path = parts[parts.length - 1].split('?')[0];
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    // public newLockerBooking() {
    //     const ref = this._dialog.open(LockerBookModalComponent, {});
    //     ref.afterClosed().subscribe((_) => {
    //         this._state.refresh();
    //     });
    // }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }

    // public newLocker() {
    //     this._state.addLockers([
    //         new Locker({ id: `locker-${randomInt(999_999)}` }),
    //     ]);
    //     notifySuccess(
    //         'New locker added to local data. Make sure to save the locker before using it.'
    //     );
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

    // public async loadCSVData(event: InputEvent) {
    //     const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
    //         notifyError(m);
    //         throw e;
    //     });
    //     try {
    //         const list = csvToJson(data) || [];
    //         this._state.addLockers(
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
}
