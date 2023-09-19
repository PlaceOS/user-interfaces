import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
    AsyncHandler,
    csvToJson,
    downloadFile,
    jsonToCsv,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
    randomInt,
} from '@placeos/common';
import { DesksStateService } from './desks-state.service';
import { DeskBookModalComponent } from './desk-book-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Desk, OrganisationService } from '@placeos/organisation';
import { take } from 'rxjs/operators';
import { DeskRestrictionModalComponent } from './desk-restriction-modal.component';

@Component({
    selector: '[app-new-desks]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <div class="flex items-center w-full py-4 px-8 space-x-2">
                    <h2 class="text-2xl font-medium">Desk Bookings</h2>
                    <div class="flex-1 w-px"></div>
                    <searchbar
                        class="mr-2"
                        [model]="(filters | async)?.search"
                        (modelChange)="setFilters({ search: $event })"
                    ></searchbar>
                    <button
                        btn
                        matRipple
                        class="space-x-2"
                        (click)="newDeskBooking()"
                    >
                        <div>New Booking</div>
                        <app-icon>add</app-icon>
                    </button>
                </div>
                <div class="w-full flex items-center px-8 space-x-2">
                    <mat-form-field appearance="outline" class="h-[3.5rem]">
                        <mat-select
                            multiple
                            [ngModel]="(filters | async)?.zones"
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
                    <div class="border-l h-full !ml-8 !mr-4"></div>
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
                            class="ml-2 rounded border border-gray-200"
                            (click)="refresh()"
                            [disabled]="loading | async"
                        >
                            <app-icon>refresh</app-icon>
                        </button>
                    </ng-container>
                    <ng-container *ngIf="path === 'manage'">
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-primary text-white rounded"
                            (click)="newDesk()"
                            matTooltip="New Desk"
                        >
                            <app-icon>add</app-icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-primary relative text-white rounded"
                            matTooltip="Upload Desks CSV"
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
                            matTooltip="Download Template Desk CSV"
                        >
                            <app-icon>download</app-icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="bg-primary text-white rounded"
                            (click)="manageRestrictions()"
                            matTooltip="Desk Restrictions"
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
                background-color: #fff;
            }
        `,
    ],
})
export class NewDesksComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public readonly loading = this._state.loading;
    public path: string;
    /** List of levels for the active building */
    public readonly filters = this._state.filters;
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    public readonly setDate = (date) => this._state.setFilters({ date });
    public readonly setFilters = (o) => this._state.setFilters(o);
    public readonly refresh = () => this._state.refresh();
    /** Update active zones for desks */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    constructor(
        private _state: DesksStateService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _org: OrganisationService
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
                    console.log('Path:', this.path);
                }
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
        const parts = this._router.url?.split('/') || [''];
        this.path = parts[parts.length - 1].split('?')[0];
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    public newDeskBooking() {
        const ref = this._dialog.open(DeskBookModalComponent, {});
        ref.afterClosed().subscribe((_) => {
            this._state.refresh();
        });
    }

    public manageRestrictions() {
        this._dialog.open(DeskRestrictionModalComponent, {});
    }

    public newDesk() {
        this._state.addDesks([new Desk({ id: `desk-${randomInt(999_999)}` })]);
        notifySuccess(
            'New desk added to local data. Make sure to save the desk before using it.'
        );
    }

    public downloadTemplate() {
        const desk: any = new Desk({
            id: 'desk-123',
            name: 'Test Desk',
            bookable: true,
            groups: ['test-desk-group', 'desk-bookers'],
            features: ['Standing Desk', 'Dual Monitor'],
        }).toJSON();
        const data = jsonToCsv([desk]);
        downloadFile('desk-template.csv', data);
    }

    public async loadCSVData(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const list = csvToJson(data) || [];
            this._state.addDesks(
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
}
