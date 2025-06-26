import { Component, OnInit, inject } from '@angular/core';
import { addDays, format, startOfMinute } from 'date-fns';
import { map, shareReplay, startWith } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';

import { EventStateService } from './event-state.service';

@Component({
    selector: 'event-week-view',
    template: `
        <div class="absolute inset-0 flex overflow-auto">
            <div
                class="sticky left-0 z-20 flex min-h-full w-24 flex-col items-end bg-base-100"
            >
                <div
                    header
                    class="sticky top-0 z-10 flex h-16 min-h-16 justify-end"
                >
                    <div class="h-10 bg-base-100 pt-6">
                        <div class="px-2 text-xs opacity-30">
                            {{ now | date: 'zzzz' }}
                        </div>
                    </div>
                </div>
                @for (hour of hours; track hour; let i = $index) {
                    <div class="relative min-h-10 w-full flex-1 bg-base-100">
                        <div
                            hour
                            class="absolute right-1 top-0 -translate-y-1/2 whitespace-nowrap text-xs opacity-60"
                        >
                            {{ hour }} {{ i >= 12 ? 'PM' : 'AM' }}
                        </div>
                    </div>
                }
            </div>
            <div class="relative z-10 min-h-full min-w-[84rem]">
                <div
                    header
                    class="sticky top-0 z-10 flex h-16 min-h-16 border-b border-base-200 bg-base-100"
                >
                    @for (date of days; track date) {
                        <div
                            date
                            class="flex min-w-48 flex-1 flex-col items-center justify-center border-r border-base-200 p-4"
                        >
                            <div class="text-sm opacity-60">
                                {{ date | date: 'EEEE' }}
                            </div>
                            <div>{{ date | date: 'd' }}</div>
                        </div>
                    }
                </div>
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="pointer-events-none relative flex min-h-10 min-w-[84rem] flex-1 border-x border-b border-base-200"
                    ></div>
                }
                @for (date of days; track date; let i = $index) {
                    <div
                        date
                        class="pointer-events-none absolute left-0 top-16 h-[60rem] w-[calc(100%/7)] flex-1 border-r border-base-200"
                        [style.transform]="'translateX(' + i * 100 + '%)'"
                    >
                        @for (
                            event of (event_day_map | async)[
                                dateString(date)
                            ] || [];
                            track event
                        ) {
                            <button
                                matRipple
                                class="pointer-events-auto absolute inset-x-1 overflow-hidden rounded border border-base-200 bg-base-100 py-1 pl-3 pr-2 shadow hover:border-info"
                                [style.top]="event.offset * 100 + '%'"
                                [style.height]="event.length * 100 + '%'"
                                (click)="viewEvent(event)"
                            >
                                <div
                                    class="absolute inset-y-0 left-0 w-1.5 bg-info"
                                ></div>
                                <div
                                    class="h-full text-left text-sm opacity-60"
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
                        }
                        @if (isCurrentDay(date)) {
                            <div
                                now
                                class="absolute inset-x-0 h-0 border-y-2 border-base-content"
                                [style.top]="now_offset * 100 + '%'"
                            >
                                <div
                                    class="absolute left-0 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-base-content"
                                ></div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class EventWeekViewComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventStateService);

    public days = new Array(7).fill(0).map((_, idx) => idx + 1);
    public readonly hours = new Array(24)
        .fill(0)
        .map((_, idx) => (idx % 12 ? idx % 12 : 12));
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

    public isCurrentDay(date: number) {
        if (!date) return false;
        return format(Date.now(), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
    }

    public get now() {
        return startOfMinute(Date.now()).valueOf();
    }

    public get now_offset() {
        const now = new Date(this.now);
        return (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
    }

    public ngOnInit() {
        this.subscription(
            'date',
            this._state.options.subscribe(({ date }) => {
                if (!date) return;
                this.days = this.days.map((_, idx) =>
                    addDays(date, idx).valueOf(),
                );
            }),
        );
    }
}
