import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { USER_LOCATIONS } from './common';
import { TeamScheduleService, ViewFilter } from './team-schedule.service';

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
                        [class.clear]="service.view_filter() !== 'all'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'all' }"
                        (click)="service.setViewFilter('all')"
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
                        [class.clear]="service.view_filter() !== 'favorites'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'favorites' }"
                        (click)="service.setViewFilter('favorites')"
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
                        [class.clear]="service.view_filter() !== 'team'"
                        [routerLink]="[]"
                        [queryParams]="{ view: 'team' }"
                        (click)="service.setViewFilter('team')"
                    >
                        <icon class="text-xl">person</icon>
                        <div class="hidden sm:block">
                            {{ 'COMMON.MY_TEAM' | translate }}
                        </div>
                    </a>
                </div>
                <div class="flex gap-2">
                    <mat-form-field appearance="outline" class="no-subscript">
                        <icon matPrefix class="relative -left-1 text-2xl"
                            >search</icon
                        >
                        <input
                            matInput
                            placeholder="Search..."
                            [ngModel]="service.search_query()"
                            (ngModelChange)="service.setSearchQuery($event)"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 w-28"
                        (click)="service.resetDate()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
                        (click)="service.previousWeek()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-12 min-w-12 p-0"
                        (click)="service.nextWeek()"
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
                        [ngModel]="service.department_filter()"
                        (ngModelChange)="service.setDepartmentFilter($event)"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_DEPARTMENTS' | translate
                        }}</mat-option>
                        @for (dept of service.departments(); track dept) {
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
                        [ngModel]="service.office_filter()"
                        (ngModelChange)="service.setOfficeFilter($event)"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_OFFICES' | translate
                        }}</mat-option>
                        @for (office of service.offices(); track office) {
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
                        [ngModel]="service.status_filter()"
                        (ngModelChange)="service.setStatusFilter($event)"
                    >
                        <mat-option [value]="null">{{
                            'COMMON.ALL_STATUSES' | translate
                        }}</mat-option>
                        @for (status of service.statuses(); track status) {
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
    public readonly service = inject(TeamScheduleService);
    public readonly user_locations = USER_LOCATIONS;

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('view')) {
                    this.service.setViewFilter(
                        params.get('view') as ViewFilter,
                    );
                }
            }),
        );
    }
}
