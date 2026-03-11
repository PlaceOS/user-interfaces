import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CustomTooltipComponent, TranslatePipe } from '@placeos/components';
import { GroupEventCardComponent } from '@placeos/events';
import {
    addDays,
    format,
    isSameDay,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { EventStateService } from './event-state.service';

@Component({
    selector: 'event-month-view',
    template: `
        <div class="absolute inset-0 overflow-auto">
            <div
                class="border-base-200 m-2 grid h-224 min-h-full w-7xl min-w-full grid-cols-7 border-b"
            >
                @for (weekday of weekdays; track $index) {
                    <div
                        weekday
                        class="relative flex h-12 items-center justify-center p-2 text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEEE' }}
                    </div>
                }
                @for (day of month_days; track day.id) {
                    <div
                        monthday
                        class="border-base-200 relative flex flex-col space-y-1 border"
                    >
                        <div
                            class="mt-1 ml-1 flex h-8 w-8 items-center justify-center rounded-full"
                            [class.opacity-60]="!day.is_month"
                            [class.bg-secondary]="day.is_today"
                            [class.text-secondary-content]="day.is_today"
                        >
                            {{ day.id | date: 'd' }}
                        </div>
                        @for (
                            event of (event_day_map | async)[
                                dateString(day.id)
                            ] || [] | slice: 0 : 3;
                            track $any(event).id
                        ) {
                            <button
                                matRipple
                                (click)="viewEvent(event)"
                                class="border-base-200 bg-base-100 hover:border-info relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded-sm border py-1 pr-2 pl-3 shadow-sm"
                            >
                                <div
                                    class="bg-info absolute inset-y-0 left-0 w-1.5"
                                ></div>
                                <div
                                    class="h-full truncate text-left text-sm opacity-60"
                                >
                                    {{ $any(event).date | date: 'shortTime' }}
                                    &mdash;
                                    {{ $any(event).title }}
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
                                            [event]="$any(event)"
                                        ></group-event-card>
                                    </div>
                                </ng-template>
                            </button>
                        }
                        @if (
                            ((event_day_map | async)[dateString(day.id)] || [])
                                .length > 3
                        ) {
                            <button
                                matRipple
                                matTooltip="More events"
                                class="relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded-sm py-1 pr-2 pl-3 text-sm underline"
                                [matMenuTriggerFor]="menu"
                            >
                                {{
                                    'APP.CONCIERGE.EVENTS_MORE_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      (
                                                          (event_day_map
                                                              | async)[
                                                              dateString(day.id)
                                                          ] || []
                                                      ).length - 3,
                                              }
                                }}
                            </button>
                        }
                        <mat-menu #menu="matMenu">
                            @for (
                                event of (event_day_map | async)[
                                    dateString(day.id)
                                ] || [] | slice: 3;
                                track $any(event).id
                            ) {
                                <button
                                    mat-menu-item
                                    (click)="viewEvent(event)"
                                >
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1">
                                            {{ $any(event).title }}
                                        </div>
                                        <div
                                            class="bg-base-200 text-base-content rounded-sm px-2 py-1 text-xs opacity-60"
                                        >
                                            {{
                                                $any(event).date
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                        </mat-menu>
                    </div>
                }
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
    imports: [
        CommonModule,
        MatMenuModule,
        GroupEventCardComponent,
        CustomTooltipComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class EventMonthViewComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventStateService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

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
