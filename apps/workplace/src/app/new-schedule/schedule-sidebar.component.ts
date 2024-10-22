import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import {
    ScheduleOptions,
    ScheduleStateService,
} from './schedule-state.service';
import { OrganisationService } from '@placeos/organisation';
import { filter, map } from 'rxjs/operators';
import {
    addWeeks,
    endOfWeek,
    format,
    isAfter,
    isBefore,
    startOfDay,
    startOfWeek,
} from 'date-fns';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="flex flex-col w-[18rem] h-full overflow-hidden bg-base-100[#1F2021] border-r border-base-200"
        >
            <div class="flex items-center space-x-4 p-4">
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period !== 'day'"
                    (click)="setOptions({ period: 'day' })"
                >
                    Day
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period !== 'week'"
                    (click)="setOptions({ period: 'week' })"
                >
                    Week
                </button>
            </div>
            <date-calendar
                class="border-b border-base-200"
                *ngIf="period === 'day'"
                [ngModel]="date | async"
                (ngModelChange)="setDate($event)"
                [offset_weekday]="offset_weekday"
            ></date-calendar>
            <div class="px-4 w-full">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                    *ngIf="period === 'week'"
                >
                    <mat-select
                        [ngModel]="week_date | async"
                        (ngModelChange)="setDate($event)"
                        placeholder="Select Week..."
                    >
                        <mat-option
                            *ngFor="let option of week_options | async"
                            [value]="option.id"
                            class="leading-tight"
                        >
                            {{ option.name }}
                            <span
                                class="text-xs text-info px-1"
                                *ngIf="option.this_week"
                                matTooltip="This Week"
                                >(C)</span
                            >
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <h3 class="mx-4 mt-4 font-medium" i18n>Filters</h3>
            <div class="p-4 space-y-4 flex-1 h-1/2 overflow-auto">
                <button
                    matRipple
                    name="schedule-toggle-event-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('spaces')"
                    (click)="toggleType('event')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>place</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'WPA.ROOM' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{ 'WPA.SCHEDULE_ROOM_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('event')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-desk-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('desks')"
                    (click)="toggleType('desk')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <img src="assets/icons/desk-outline.svg" class="w-6" />
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'WPA.DESK' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{ 'WPA.SCHEDULE_DESK_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('desk')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-parking-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('parking')"
                    (click)="toggleType('parking')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>drive_eta</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'WPA.PARKING' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{ 'WPA.SCHEDULE_PARKING_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('parking')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-visitor-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('visitor-invite')"
                    (click)="toggleType('visitor')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>people</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="" i18n>
                            {{ 'WPA.VISITORS' | translate }}
                        </div>
                        <div class="text-sm opacity-60" i18n>
                            {{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('visitor')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('lockers')"
                    (click)="toggleType('locker')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>door_back</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="" i18n>
                            {{ 'WPA.LOCKERS' | translate }}
                        </div>
                        <div class="text-sm opacity-60" i18n>
                            {{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes('locker')
                        "
                    ></mat-checkbox>
                </button>
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex items-center space-x-2 w-full text-left"
                    *ngIf="hasFeature('group-events')"
                    (click)="toggleType('group-event')"
                >
                    <div
                        class="h-10 w-10 rounded-full flex items-center justify-center bg-base-200 text-2xl"
                    >
                        <app-icon>door_back</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="" i18n>
                            {{ 'WPA.GROUP_EVENT' | translate }}
                        </div>
                        <div class="text-sm opacity-60" i18n>
                            {{ 'WPA.SCHEDULE_GROUP_EVENT_FILTER' | translate }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            (filters | async)?.shown_types?.includes(
                                'group-event'
                            )
                        "
                    ></mat-checkbox>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            mat-checkbox {
                pointer-events: none;
            }
        `,
    ],
})
export class ScheduleSidebarComponent {
    public readonly filters = this._state.filters;
    public readonly date = this._state.date.pipe(map((_) => startOfDay(_)));
    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly setDate = (d) => this._state.setDate(d);

    public readonly week_date = combineLatest([
        this._org.active_building,
        this.date,
    ]).pipe(
        map(([_, date]) =>
            startOfWeek(date, {
                weekStartsOn: this.offset_weekday as any,
            }).valueOf(),
        ),
    );

    public readonly week_options = combineLatest([
        this._org.active_building,
        this.date,
    ]).pipe(
        filter(([bld]) => !!bld),
        map(([bld]) => {
            const options = [];
            let date = startOfDay(Date.now());
            for (let i = -4; i < 48; i++) {
                let day = addWeeks(date, i);
                const week_s_date = startOfWeek(day, {
                    weekStartsOn: this.offset_weekday as any,
                });
                const week_e_date = endOfWeek(day, {
                    weekStartsOn: this.offset_weekday as any,
                });
                const this_week =
                    isAfter(Date.now(), week_s_date) &&
                    isBefore(Date.now(), week_e_date);
                const week_start = format(week_s_date, 'dd MMM');
                const week_end = format(week_e_date, 'dd MMM');
                options.push({
                    id: day.valueOf(),
                    name: `${week_start} - ${week_end}`,
                    this_week,
                });
            }
            return options;
        }),
    );

    public get period() {
        return this._state.getOptions().period;
    }

    public setOptions(options: ScheduleOptions) {
        this._state.setOptions(options);
    }

    public hasFeature(feature: string) {
        return this._settings.get('app.features')?.includes(feature);
    }

    public get offset_weekday() {
        return this._settings.get('app.week_start') || 0;
    }

    constructor(
        private _org: OrganisationService,
        private _state: ScheduleStateService,
        private _settings: SettingsService,
    ) {}
}
