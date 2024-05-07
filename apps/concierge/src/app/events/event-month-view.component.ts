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
import { Booking, GroupEventDetailsModalComponent } from '@placeos/bookings';
import { Router } from '@angular/router';

@Component({
    selector: 'event-month-view',
    template: `
        <div class="absolute inset-0 overflow-auto">
            <div
                class="grid grid-cols-7 w-full h-full m-2 border-b border-base-200"
            >
                <div
                    weekday
                    *ngFor="let weekday of weekdays"
                    class="relative flex items-center justify-center text-sm opacity-60 p-2 h-12"
                >
                    {{ weekday | date: 'EEEE' }}
                </div>
                <div
                    monthday
                    *ngFor="let day of month_days"
                    class="relative border border-base-200 flex flex-col space-y-1"
                >
                    <div
                        class="rounded-full w-8 h-8 flex items-center justify-center mt-1 ml-1"
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
                            ] || [] | slice: 0:3
                        "
                        (click)="viewDetails(event)"
                        class="relative w-[calc(100%-0.5rem)] h-7 bg-base-100 rounded border border-base-200 hover:border-info shadow pl-3 pr-2 py-1 overflow-hidden mx-1"
                    >
                        <div
                            class="absolute left-0 inset-y-0 bg-info w-1.5"
                        ></div>
                        <div
                            class="text-sm opacity-60 h-full text-left truncate"
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
                            <div class="p-2 pointer-events-none">
                                <group-event-card
                                    [event]="event"
                                ></group-event-card>
                            </div>
                        </ng-template>
                    </button>
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
        shareReplay(1)
    );

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
        private _router: Router
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
            })
        );
        this._setMonthDays();
        this._setWeekdays();
    }

    public viewDetails(event: Booking): void {
        const ref = this._dialog.open(GroupEventDetailsModalComponent, {
            data: { booking: event, concierge: true },
        });
        this.subscription(
            'edit',
            ref.componentInstance.edit.subscribe(() => {
                this._router.navigate([
                    '/entertainment',
                    'events',
                    'manage',
                    event.id,
                ]);
            })
        );
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
            addDays(start, i)
        );
    }
}
