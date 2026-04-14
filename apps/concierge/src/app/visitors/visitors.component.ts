import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService, SettingsService } from '@placeos/common';
import { BuildingPipe, TranslatePipe } from '@placeos/components';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { DateOptionsComponent } from '../ui/date-options.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { GuestListingComponent } from './guest-listing.component';
import { InviteVisitorModalComponent } from './invite-visitor-modal.component';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: '[app-new-visitors]',
    template: `
        <app-topbar class="print:hidden">></app-topbar>
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'RESOURCE.VISITORS' | translate }}
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="inviteVisitor()"
                    >
                        {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                    </button>
                </div>
                <div class="flex items-center px-8 pb-4">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
                        <mat-select
                            [ngModel]="filters()?.zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            multiple
                        >
                            @for (level of levels(); track level.id) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-60">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-2 flex-1"></div>
                    <date-options (dateChange)="setDate($event)"></date-options>
                </div>
                <div class="mx-8 h-1/2 flex-1 overflow-auto">
                    <guest-listings></guest-listings>
                </div>
                @if (loading()) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
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
                background-color: var(--base-100);
            }
        `,
    ],
    imports: [
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        DateOptionsComponent,
        GuestListingComponent,
        FormsModule,
        MatRippleModule,
        SearchbarComponent,
        ApplicationSidebarComponent,
        ApplicationTopbarComponent,
        TranslatePipe,
        BuildingPipe,
    ],
})
export class VisitorsComponent implements OnInit, OnDestroy {
    private _state = inject(VisitorsStateService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly loading = toSignal(this._state.loading || of(false), {
        initialValue: false,
    });
    public readonly filters = toSignal<any>(this._state.filters || of({}), {
        initialValue: {} as any,
    });
    /** List of levels for the active building */
    public readonly levels = toSignal(
        combineLatest([
            this._org.active_building || of(null),
            this._org.active_region || of(null),
        ]).pipe(
            map(([bld, region]) =>
                this._settings.get('app.use_region')
                    ? this._org.levelsForRegion(region)
                    : this._org.levelsForBuilding(bld),
            ),
        ),
        { initialValue: [] },
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
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public async inviteVisitor() {
        this._dialog.open(InviteVisitorModalComponent, {
            data: {
                date: this.filters()?.date || Date.now(),
            },
        });
    }

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
