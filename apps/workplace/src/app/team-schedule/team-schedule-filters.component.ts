import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { LocationStatus, USER_LOCATIONS } from './common';
import {
    TeamScheduleFilters,
    TeamScheduleService,
    ViewFilter,
} from './team-schedule.service';

@Component({
    selector: 'team-schedule-filters',
    template: `
        <div class="flex flex-col gap-4">
            <div
                class="flex flex-col justify-between gap-2 sm:flex-row sm:flex-wrap"
            >
                <div
                    view
                    class="border-base-300 bg-base-200 flex w-full gap-1 rounded-xl border p-1 sm:w-auto"
                >
                    <a
                        btn
                        matRipple
                        class="hover:bg-base-300 min-h-10 flex-1 gap-2 whitespace-nowrap"
                        [class.clear]="filters().view !== 'all'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'all' }"
                        (click)="setFilters({ view: 'all' })"
                    >
                        <icon class="text-xl">groups</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.ALL_COLLEAGUES' | translate }}
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        class="hover:bg-base-300 min-h-10 flex-1 gap-2 whitespace-nowrap"
                        [class.clear]="filters().view !== 'favorites'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'favorites' }"
                        (click)="setFilters({ view: 'favorites' })"
                    >
                        <icon class="text-xl">star</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.FAVOURITES' | translate }}
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        class="hover:bg-base-300 min-h-10 flex-1 gap-2 whitespace-nowrap"
                        [class.clear]="filters().view !== 'team'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'team' }"
                        (click)="setFilters({ view: 'team' })"
                    >
                        <icon class="text-xl">person</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.MY_TEAM' | translate }}
                        </div>
                    </a>
                </div>
                <div class="flex gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-64 flex-1 sm:flex-0"
                    >
                        <icon matPrefix class="relative -left-1 text-2xl"
                            >search</icon
                        >
                        <input
                            matInput
                            placeholder="Search..."
                            [ngModel]="filters().search"
                            (ngModelChange)="setFilters({ search: $event })"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 w-28"
                        (click)="resetToToday()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
                        (click)="previousWeek()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
                        (click)="nextWeek()"
                    >
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </button>
                </div>
            </div>
            <div class="flex flex-wrap gap-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript min-w-48 flex-1 sm:flex-0"
                >
                    <mat-select
                        [placeholder]="'COMMON.ALL_DEPARTMENTS' | translate"
                        [ngModel]="filters().department"
                        (ngModelChange)="setFilters({ department: $event })"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_DEPARTMENTS' | translate
                        }}</mat-option>
                        @for (dept of departments(); track dept) {
                            <mat-option [value]="dept">{{ dept }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript min-w-48 flex-1 sm:flex-0"
                >
                    <mat-select
                        [placeholder]="'COMMON.ALL_OFFICES' | translate"
                        [ngModel]="filters().office"
                        (ngModelChange)="setFilters({ office: $event })"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_OFFICES' | translate
                        }}</mat-option>
                        @for (office of offices(); track office) {
                            <mat-option [value]="office">{{
                                office
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript min-w-48 flex-1 sm:flex-0"
                >
                    <mat-select
                        [placeholder]="'COMMON.ALL_STATUSES' | translate"
                        [ngModel]="filters().status"
                        (ngModelChange)="setFilters({ status: $event })"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_STATUSES' | translate
                        }}</mat-option>
                        @for (status of statuses(); track status) {
                            <mat-option [value]="status">{{
                                user_locations[status].name | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
    `,
    styles: [
        `
            a {
                border-width: 1px;
            }
        `,
    ],
    imports: [
        TranslatePipe,
        RouterModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
    ],
})
export class TeamScheduleFiltersComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _service = inject(TeamScheduleService);

    public readonly user_locations = USER_LOCATIONS;

    // Expose filter values
    public readonly filters = this._service.filters;
    public readonly departments = this._service.departments;
    public readonly offices = this._service.offices;
    public readonly statuses = this._service.statuses;

    // Actions
    public setFilters(filters: Partial<TeamScheduleFilters>) {
        this._service.setFilters(filters);
    }

    public previousWeek() {
        this._service.previousWeek();
    }

    public nextWeek() {
        this._service.nextWeek();
    }

    public resetToToday() {
        this._service.setFilters({ date: Date.now(), day_index: -1 });
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('view')) {
                    this._service.setFilters({
                        view: params.get('view') as ViewFilter,
                    });
                }
            }),
        );
    }
}
