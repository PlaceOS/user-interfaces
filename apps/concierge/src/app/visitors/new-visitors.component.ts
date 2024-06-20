import { Component, OnDestroy, OnInit } from '@angular/core';
import { VisitorsStateService } from './visitors-state.service';
import { OrganisationService } from '@placeos/organisation';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InviteVisitorModalComponent } from './invite-visitor-modal.component';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsService } from '@placeos/common';

@Component({
    selector: '[app-new-visitors]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <div class="flex items-center px-8 py-4 space-x-2">
                    <h2 class="text-2xl font-medium">Visitors</h2>
                    <div class="flex-1 w-2"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                    <button btn matRipple (click)="inviteVisitor()">
                        Invite Visitor
                    </button>
                </div>
                <div class="flex items-center px-8 pb-4">
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
                    <div class="flex-1 w-2"></div>
                    <date-options (dateChange)="setDate($event)"></date-options>
                </div>
                <div class="mx-8 flex-1 h-1/2 overflow-auto">
                    <guest-listings></guest-listings>
                </div>
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
                background-color: var(--b1);
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
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this._settings.get('app.use_region')
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld)
        )
    );
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

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        private _state: VisitorsStateService,
        private _org: OrganisationService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _settings: SettingsService
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
