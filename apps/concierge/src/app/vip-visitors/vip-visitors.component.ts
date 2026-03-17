import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateRangeFieldComponent } from '@placeos/form-fields';
import { endOfDay, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { VipVisitorListingComponent } from './vip-visitor-listing.component';
import { VipVisitorsStateService } from './vip-visitors-state.service';

@Component({
    selector: '[app-vip-visitors]',
    template: `
        <app-topbar class="print:hidden"></app-topbar>
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 py-4">
                    <h2
                        class="flex items-center space-x-2 text-2xl font-medium"
                    >
                        <span class="text-warning">
                            <icon>star</icon>
                        </span>
                        <span>{{ 'BOOKINGS.VIP_VISITORS' | translate }}</span>
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                </div>
                <div class="flex items-center px-8 pb-4">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="(filters | async)?.zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            multiple
                        >
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
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
                    <date-range-field [week_start]="week_start" [from]="0">
                        <input
                            #startDate
                            [ngModel]="start"
                            (ngModelChange)="$event ? setStartDate($event) : ''"
                        />
                        <input
                            #endDate
                            [ngModel]="end"
                            (ngModelChange)="$event ? setEndDate($event) : ''"
                        />
                    </date-range-field>
                </div>
                <div class="mx-8 h-1/2 flex-1 overflow-auto">
                    <vip-visitor-listings></vip-visitor-listings>
                </div>
                @if (loading | async) {
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
        CommonModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        DateRangeFieldComponent,
        VipVisitorListingComponent,
        FormsModule,
        MatRippleModule,
        SearchbarComponent,
        ApplicationSidebarComponent,
        ApplicationTopbarComponent,
        TranslatePipe,
        BuildingPipe,
        IconComponent,
    ],
})
export class VipVisitorsComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _state = inject(VipVisitorsStateService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _settings = inject(SettingsService);

    public readonly loading = this._state.loading;
    public readonly filters = this._state.filters;
    public zones: string[] = [];
    public start: number = startOfDay(Date.now()).getTime();
    public end: number = endOfDay(Date.now()).getTime();
    public readonly levels = combineLatest([
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        map(([bld, region]) =>
            this._settings.get('app.use_region')
                ? this._org.levelsForRegion(region)
                : this._org.levelsForBuilding(bld),
        ),
    );
    public readonly setFilters = (filters: any) =>
        this._state.setFilters(filters);
    public readonly setSearch = (str: string) =>
        this._state.setSearchString(str);
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    public readonly setStartDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this.start = date;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { start: date },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ start_date: date });
    };

    public readonly setEndDate = (date) => {
        if (date instanceof Date) date = date.valueOf();
        this.end = endOfDay(date).valueOf();
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { end: endOfDay(date).valueOf() },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ end_date: endOfDay(date).valueOf() });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public get week_start() {
        return this._settings.get('app.week_start');
    }

    public ngOnInit() {
        this._state.startPolling();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('start')) {
                    this.start = +params.get('start');
                    this._state.setFilters({ start_date: this.start });
                }
                if (params.has('end')) {
                    this.end = +params.get('end');
                    this._state.setFilters({ end_date: this.end });
                }
            }),
        );
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this._state.stopPolling();
    }
}
