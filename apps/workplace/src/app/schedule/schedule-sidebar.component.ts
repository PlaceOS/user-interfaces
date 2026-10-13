import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateCalendarComponent } from '@placeos/form-fields';
import { isSameDay, startOfDay } from 'date-fns';
import {
    ScheduleOptions,
    ScheduleStateService,
} from './schedule-state.service';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="bg-base-100[#1F2021] border-base-200 flex h-full w-[18rem] flex-col overflow-hidden border-r"
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
            @if (!is_today) {
                <div class="w-full px-2">
                    <button
                        btn
                        matRipple
                        class="inverse w-full"
                        (click)="setDateToToday()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                </div>
            }
            @if (period === 'day') {
                <date-calendar
                    class="border-base-200 border-b"
                    [ngModel]="date()"
                    (ngModelChange)="setDate($event)"
                    [offset_weekday]="offset_weekday"
                ></date-calendar>
            }
            @if (period === 'week') {
                <div class="w-full px-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [ngModel]="week_date()"
                            (ngModelChange)="setDate($event)"
                            placeholder="Select Week..."
                        >
                            @for (option of week_options(); track option) {
                                <mat-option
                                    [value]="option.id"
                                    class="leading-tight"
                                >
                                    {{ option.name }}
                                    @if (option.this_week) {
                                        <span
                                            class="text-info px-1 text-xs"
                                            [matTooltip]="
                                                'COMMON.WEEK_THIS' | translate
                                            "
                                            >(C)</span
                                        >
                                    }
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            <h3 class="mx-4 mt-4 font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="h-1/2 flex-1 space-y-4 overflow-auto p-4">
                @if (hasFeature('spaces')) {
                    <button
                        matRipple
                        name="schedule-toggle-event-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('event')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.ROOMS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_ROOMS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="filters().shown_types?.includes('event')"
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('desks')) {
                    <button
                        matRipple
                        name="schedule-toggle-desk-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('desk')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <img
                                src="assets/icons/desk-outline.svg"
                                class="w-6"
                            />
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.DESKS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_DESKS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="filters().shown_types?.includes('desk')"
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('parking') || hasFeature('parking-requests')) {
                    <button
                        matRipple
                        name="schedule-toggle-parking-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('parking')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>drive_eta</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.PARKING' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_PARKING'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="
                                filters().shown_types?.includes('parking')
                            "
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('visitor-invite')) {
                    <button
                        matRipple
                        name="schedule-toggle-visitor-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('visitor')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>people</icon>
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
                                filters().shown_types?.includes('visitor')
                            "
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('lockers')) {
                    <button
                        matRipple
                        name="schedule-toggle-locker-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('locker')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>lock</icon>
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
                                filters().shown_types?.includes('locker')
                            "
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('group-events')) {
                    <button
                        matRipple
                        name="schedule-toggle-locker-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('group-event')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>event_available</icon>
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
                                filters().shown_types?.includes('group-event')
                            "
                        ></mat-checkbox>
                    </button>
                }
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
    imports: [
        CommonModule,
        MatCheckboxModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule,
        DateCalendarComponent,
    ],
})
export class ScheduleSidebarComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _state = inject(ScheduleStateService);
    private _settings = inject(SettingsService);

    public readonly filters = this._state.filters;
    public readonly date = computed(() => startOfDay(this._state.date()));
    public readonly toggleType = (t) => this._state.toggleType(t);
    public readonly setDate = (d) => this._state.setDate(d);

    public readonly week_date = this._state.week_date;
    public readonly week_options = this._state.week_options;

    public get period() {
        return this._state.getOptions()?.period;
    }

    public get is_today() {
        return isSameDay(this._state.dateValue, Date.now());
    }

    public setDateToToday() {
        this._state.setDate(Date.now());
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

    constructor() {
        super();
        effect((onCleanup) => {
            const bld = this._org.active_building();
            if (!bld) return;
            const timeout = setTimeout(() => {
                this._state.setType('event', this.hasFeature('spaces'));
                this._state.setType('desk', this.hasFeature('desks'));
                this._state.setType(
                    'parking',
                    this.hasFeature('parking') ||
                        this.hasFeature('parking-requests'),
                );
                this._state.setType(
                    'visitor',
                    this.hasFeature('visitor-invite'),
                );
                this._state.setType('locker', this.hasFeature('lockers'));
                this._state.setType(
                    'group-event',
                    this.hasFeature('group-events'),
                );
            }, 1000);
            onCleanup(() => clearTimeout(timeout));
        });
    }

    public ngOnInit() {}
}
