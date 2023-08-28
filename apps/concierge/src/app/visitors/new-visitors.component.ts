import { Component, OnDestroy, OnInit } from '@angular/core';
import { VisitorsStateService } from './visitors-state.service';
import { OrganisationService } from '@placeos/organisation';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InviteVisitorModalComponent } from './invite-visitor-modal.component';

@Component({
    selector: '[app-new-visitors]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <div class="flex items-center p-4 space-x-2">
                    <h2 class="text-2xl font-medium">Visitors</h2>
                    <div class="flex-1 w-2"></div>
                    <date-options (dateChange)="setDate($event)"></date-options>
                    <button btn matRipple (click)="inviteVisitor()">
                        Invite Visitor
                    </button>
                </div>
                <div class="flex items-center px-4 pb-4">
                    <mat-form-field appearance="outline" class="no-subscript">
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
                    <div class="flex-1 w-2"></div>
                    <mat-slide-toggle
                        class="m-2"
                        *ngIf="!(filters | async)?.show_guests"
                        [ngModel]="(filters | async)?.all_bookings"
                        (ngModelChange)="setFilters({ all_bookings: $event })"
                    >
                        <div class="text-xs">All Bookings</div>
                    </mat-slide-toggle>
                    <mat-slide-toggle
                        class="m-2"
                        [ngModel]="(filters | async)?.show_guests"
                        (ngModelChange)="setFilters({ show_guests: $event })"
                    >
                        <div class="text-xs">Only Guests</div>
                    </mat-slide-toggle>
                    <searchbar (modelChange)="setSearch($event)"></searchbar>
                </div>
                <visitor-listings
                    *ngIf="!(filters | async)?.show_guests"
                    class="w-full flex-1 h-0"
                ></visitor-listings>
                <guest-listings
                    *ngIf="(filters | async)?.show_guests"
                    class="w-full flex-1 h-0"
                ></guest-listings>
                <mat-progress-bar
                    class="w-full"
                    *ngIf="loading | async"
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
export class NewVisitorsComponent implements OnInit, OnDestroy {
    public readonly loading = this._state.loading;
    public readonly filters = this._state.filters;
    /** List of selected levels */
    public zones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Set filtered date */
    public readonly setDate = (date) => this._state.setFilters({ date });
    /** Set filtered date */
    public readonly setFilters = (filters) => this._state.setFilters(filters);
    /** Set filter string */
    public readonly setSearch = (str) => this._state.setSearchString(str);
    /** Update active zones for desks */
    public readonly updateZones = (zones) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
        });
        this._state.setFilters({ zones });
    };

    constructor(
        private _state: VisitorsStateService,
        private _org: OrganisationService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog
    ) {}

    public inviteVisitor() {
        this._dialog.open(InviteVisitorModalComponent);
    }

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
