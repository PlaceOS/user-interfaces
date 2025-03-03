import { Component } from '@angular/core';
import { EventStateService } from './event-state.service';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    format,
    addDays,
    isSameDay,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'event-month-view',
    template: `
        <div class="absolute inset-0 overflow-auto">
            <div
                class="m-2 grid h-[56rem] min-h-full w-[80rem] min-w-full grid-cols-7 border-b border-base-200"
            >
                <div
                    weekday
                    *ngFor="let weekday of weekdays"
                    class="relative flex h-12 items-center justify-center p-2 text-sm opacity-60"
                >
                    {{ weekday | date: 'EEEE' }}
                </div>
                <div
                    monthday
                    *ngFor="let day of month_days"
                    class="relative flex flex-col space-y-1 border border-base-200"
                >
                    <div
                        class="ml-1 mt-1 flex h-8 w-8 items-center justify-center rounded-full"
                        [class.opacity-30]="!day.is_month"
                        [class.bg-secondary]="day.is_today"
                        [class.text-secondary-content]="day.is_today"
                    >
                        {{ day.id | date: 'd' }}
                    </div>
                    <button
                        matRipple
                        *ngFor="
                            let event of (event_day_map | async)[
                                dateString(day.id)
                            ] || [] | slice: 0 : 3
                        "
                        (click)="viewEvent(event)"
                        class="relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded border border-base-200 bg-base-100 py-1 pl-3 pr-2 shadow hover:border-info"
                    >
                        <div
                            class="absolute inset-y-0 left-0 w-1.5 bg-info"
                        ></div>
                        <div
                            class="h-full truncate text-left text-sm opacity-60"
                        >
                            {{ event.date | date: 'shortTime' }} &mdash;
                            {{ event.title }}
                        </div>
                        <div
                            class="absolute inset-0"
                            customTooltip
                            [content]="event_card"
                            xPosition="center"
                            yPosition="bottom"
                            [hover]="true"
                        ></div>
                        <ng-template #event_card>
                            <div class="pointer-events-none p-2">
                                <group-event-card
                                    [event]="event"
                                ></group-event-card>
                            </div>
                        </ng-template>
                    </button>
                    <button
                        matRipple
                        *ngIf="
                            ((event_day_map | async)[dateString(day.id)] || [])
                                .length > 3
                        "
                        matTooltip="More events"
                        class="relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded py-1 pl-3 pr-2 text-sm underline"
                        [matMenuTriggerFor]="menu"
                    >
                        {{
                            'APP.CONCIERGE.EVENTS_MORE_COUNT'
                                | translate
                                    : {
                                          count:
                                              (
                                                  (event_day_map | async)[
                                                      dateString(day.id)
                                                  ] || []
                                              ).length - 3,
                                      }
                        }}
                    </button>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            *ngFor="
                                let event of (event_day_map | async)[
                                    dateString(day.id)
                                ] || [] | slice: 3
                            "
                            (click)="viewEvent(event)"
                        >
                            <div class="flex items-center space-x-4">
                                <div class="flex-1">{{ event.title }}</div>
                                <div
                                    class="rounded bg-base-200 px-2 py-1 text-xs text-base-content opacity-60"
                                >
                                    {{ event.date | date: 'shortTime' }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .grid {
                grid-template-rows: 3rem repeat(6, minmax(0, 1fr));
            }
        `,
    ],
    standalone: false,
})
export class EventMonthViewComponent extends AsyncHandler {
    public month = startOfDay(Date.now()).valueOf();
    public weekdays = [];

    public month_days = [];
    public readonly event_list = this._state.event_list;
    public readonly event_day_map = this.event_list.pipe(
        map((list) => {
            const map = {};
            for (const event of list) {
                const date = format(event.date, 'yyyy-MM-dd');
                if (!map[date]) map[date] = [];
                const start = new Date(event.date);
                map[date].push({
                    ...event,
                    offset:
                        (start.getHours() * 60 + start.getMinutes()) /
                        (24 * 60),
                    length: event.duration / (24 * 60),
                });
            }
            return map;
        }),
        startWith({}),
        shareReplay(1),
    );

    public readonly viewEvent = (event: any) => this._state.viewEvent(event);

    public dateString(date: number) {
        if (!date) return '';
        return format(date, 'yyyy-MM-dd');
    }

    public get offset_weekday() {
        return this._settings.get('app.week_start') || 0;
    }

    constructor(
        private _state: EventStateService,
        private _settings: SettingsService,
        private _dialog: MatDialog,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'date',
            this._state.options.subscribe(({ date }) => {
                this.month = date;
                this._setMonthDays();
                this._setWeekdays();
            }),
        );
        this._setMonthDays();
        this._setWeekdays();
    }

    private _setMonthDays() {
        const start = startOfWeek(startOfMonth(this.month), {
            weekStartsOn: this.offset_weekday as any,
        });
        this.month_days = Array.from(Array(7 * 6).keys()).map((i) => {
            const date = addDays(start, i).valueOf();
            return {
                id: date,
                is_today: isSameDay(date, Date.now()),
                is_month: isSameMonth(date, this.month),
            };
        });
    }

    private _setWeekdays() {
        const start = startOfWeek(Date.now(), {
            weekStartsOn: this.offset_weekday as any,
        });
        this.weekdays = Array.from(Array(7).keys()).map((i) =>
            addDays(start, i),
        );
    }
}
