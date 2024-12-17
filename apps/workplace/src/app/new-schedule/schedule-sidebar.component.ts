import { Component, OnInit } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    ScheduleOptions,
    ScheduleStateService,
} from './schedule-state.service';
import { OrganisationService } from '@placeos/organisation';
import { debounceTime, filter, map } from 'rxjs/operators';
import { startOfDay } from 'date-fns';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="flex flex-col w-[18rem] h-full overflow-hidden bg-base-100[#1F2021] border-r border-base-200"
        >
            <div class="flex items-center space-x-2 p-2">
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period !== 'day'"
                    (click)="setOptions({ period: 'day' })"
                >
                    {{ 'COMMON.DAY' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period !== 'week'"
                    (click)="setOptions({ period: 'week' })"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
            </div>
            <date-calendar
                class="border-b border-base-200"
                *ngIf="period === 'day'"
                [ngModel]="date | async"
                (ngModelChange)="setDate($event)"
                [offset_weekday]="offset_weekday"
            ></date-calendar>
            <div class="px-2 w-full" *ngIf="period === 'week'">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
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
                                [matTooltip]="'COMMON.WEEK_THIS' | translate"
                                >(C)</span
                            >
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <h3 class="mx-4 mt-4 font-medium">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h3>
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
                        <div class="">{{ 'RESOURCE.ROOMS' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_ROOMS'
                                    | translate
                            }}
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
                        <div class="">{{ 'RESOURCE.DESKS' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_DESKS'
                                    | translate
                            }}
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
                        <div class="">{{ 'RESOURCE.PARKING' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_PARKING'
                                    | translate
                            }}
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
                        <div class="">
                            {{ 'RESOURCE.VISITORS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_VISITORS'
                                    | translate
                            }}
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
                        <app-icon>lock</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.LOCKERS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS'
                                    | translate
                            }}
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
                        <app-icon>event_available</app-icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.EVENTS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_EVENTS'
                                    | translate
                            }}
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
export class ScheduleSidebarComponent extends AsyncHandler implements OnInit {
    public readonly filters = this._state.filters;
    public readonly date = this._state.date.pipe(map((_) => startOfDay(_)));
    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly setDate = (d) => this._state.setDate(d);

    public readonly week_date = this._state.week_date;
    public readonly week_options = this._state.week_options;

    public get period() {
        return this._state.getOptions()?.period;
    }

    public setOptions(options: ScheduleOptions) {
        this._state.setOptions(options);
    }

    public hasFeature(feature: string) {
        return (this._settings.get('app.features') || []).includes(feature);
    }

    public get offset_weekday() {
        return this._settings.get('app.week_start') || 0;
    }

    constructor(
        private _org: OrganisationService,
        private _state: ScheduleStateService,
        private _settings: SettingsService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'building',
            this._org.active_building
                .pipe(
                    filter((_) => !!_),
                    debounceTime(1000),
                )
                .subscribe((_) => {
                    this._state.setType('event', this.hasFeature('spaces'));
                    this._state.setType('desk', this.hasFeature('desks'));
                    this._state.setType('parking', this.hasFeature('parking'));
                    this._state.setType(
                        'visitor',
                        this.hasFeature('visitor-invite'),
                    );
                    this._state.setType('locker', this.hasFeature('lockers'));
                    this._state.setType(
                        'group-event',
                        this.hasFeature('group-events'),
                    );
                }),
        );
    }
}
