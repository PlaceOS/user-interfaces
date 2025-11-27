import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    Booking,
    BOOKING_TYPE_COLORS,
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateCalendarComponent } from '@placeos/form-fields';
import { isSameDay, startOfDay } from 'date-fns';
import { debounceTime, filter } from 'rxjs/operators';
import {
    ScheduleOptions,
    ScheduleStateService,
} from './schedule-state.service';

@Component({
    selector: 'schedule-sidebar',
    template: `
        <div
            class="flex h-full w-[18rem] flex-col overflow-hidden border-r border-base-300 bg-base-100"
        >
            @if (period === 'day') {
                <date-calendar
                    class="border-b border-base-200"
                    [ngModel]="date()"
                    (ngModelChange)="setDate($event)"
                    [offset_weekday]="offset_weekday"
                ></date-calendar>
            }
            @if (period === 'week') {
                <div class="w-full p-2">
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
                                            class="px-1 text-xs text-info"
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
            <h3 class="mx-4 mt-4 pb-2 font-medium uppercase">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h3>
            <div class="h-1/2 flex-1 space-y-1 overflow-auto px-4">
                @for (item of feature_list; track item.type) {
                    @if (hasFeature(item.feat)) {
                        <settings-toggle
                            [ngModel]="
                                filters()?.shown_types?.includes(item.type)
                            "
                            (click)="toggleType(item.type)"
                        >
                            <div
                                class="-my-2 -ml-2 flex items-center space-x-2"
                            >
                                <div
                                    class="rounded-full bg-base-300 p-1 text-2xl"
                                    [style.background-color]="
                                        colors[item.type][0]
                                    "
                                    [style.color]="colors[item.type][1]"
                                >
                                    <icon>{{ item.icon }}</icon>
                                </div>
                                <div class="flex-1 font-medium">
                                    {{ item.name | translate }}
                                </div>
                                <div class="font-mono text-xs">
                                    {{ counts()[item.type] || 0 }}
                                </div>
                            </div>
                        </settings-toggle>
                    }
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
        DateCalendarComponent,
        SettingsToggleComponent,
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
    public readonly bookings = input<(Booking | CalendarEvent)[]>([]);

    public readonly colors = BOOKING_TYPE_COLORS;

    public readonly week_date = this._state.week_date;
    public readonly week_options = this._state.week_options;

    public readonly feature_list = [
        { type: 'desk', feat: 'desks', icon: 'desk', name: 'RESOURCE.DESKS' },
        {
            type: 'event',
            feat: 'spaces',
            icon: 'meeting_room',
            name: 'RESOURCE.MEETINGS',
        },
        {
            type: 'parking',
            feat: 'parking',
            icon: 'drive_eta',
            name: 'RESOURCE.PARKING',
        },
        {
            type: 'visitor',
            feat: 'visitor-invite',
            icon: 'people',
            name: 'RESOURCE.VISITORS',
        },
        {
            type: 'locker',
            feat: 'lockers',
            icon: 'lock',
            name: 'RESOURCE.LOCKERS',
        },
        {
            type: 'group-event',
            feat: 'group-events',
            icon: 'event_available',
            name: 'RESOURCE.EVENTS',
        },
    ];

    public readonly counts = computed(() => {
        const mapping: Record<string, number> = {};
        const bkn_list = this.bookings() || [];
        for (const bkn of bkn_list) {
            if (bkn instanceof CalendarEvent) {
                const type = bkn.extension_data?.shared_event
                    ? 'group-event'
                    : 'event';
                mapping[type] = (mapping[type] || 0) + 1;
            } else {
                const type = bkn.booking_type;
                mapping[type] = (mapping[type] || 0) + 1;
            }
        }
        return mapping;
    });

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
