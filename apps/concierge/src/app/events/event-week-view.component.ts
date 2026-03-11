import { Component, OnInit, inject } from '@angular/core';
import { addDays, format, startOfMinute } from 'date-fns';
import { map, shareReplay, startWith } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { CustomTooltipComponent } from '@placeos/components';
import { GroupEventCardComponent } from '@placeos/events';
import { EventStateService } from './event-state.service';

@Component({
    selector: 'event-week-view',
    template: `
        <div class="absolute inset-0 flex overflow-auto">
            <div
                class="bg-base-100 sticky left-0 z-20 flex min-h-full w-24 flex-col items-end"
            >
                <div
                    header
                    class="sticky top-0 z-10 flex h-16 min-h-16 justify-end"
                >
                    <div class="bg-base-100 h-10 pt-6">
                        <div class="px-2 text-xs opacity-60">
                            {{ now | date: 'zzzz' }}
                        </div>
                    </div>
                </div>
                @for (hour of hours; track i; let i = $index) {
                    <div class="bg-base-100 relative min-h-10 w-full flex-1">
                        <div
                            hour
                            class="absolute top-0 right-1 -translate-y-1/2 text-xs whitespace-nowrap opacity-60"
                        >
                            {{ hour }} {{ i >= 12 ? 'PM' : 'AM' }}
                        </div>
                    </div>
                }
            </div>
            <div class="relative z-10 min-h-full min-w-336">
                <div
                    header
                    class="border-base-200 bg-base-100 sticky top-0 z-10 flex h-16 min-h-16 border-b"
                >
                    @for (date of days; track date + '' + $index) {
                        <div
                            date
                            class="border-base-200 flex min-w-48 flex-1 flex-col items-center justify-center border-r p-4"
                        >
                            <div class="text-sm opacity-60">
                                {{ date | date: 'EEEE' }}
                            </div>
                            <div>{{ date | date: 'd' }}</div>
                        </div>
                    }
                </div>
                @for (hour of hours; track i; let i = $index) {
                    <div
                        class="border-base-200 pointer-events-none relative flex min-h-10 min-w-336 flex-1 border-x border-b"
                    ></div>
                }
                @for (date of days; track date + '' + i; let i = $index) {
                    <div
                        date
                        class="border-base-200 pointer-events-none absolute top-16 left-0 h-240 w-[calc(100%/7)] flex-1 border-r"
                        [style.transform]="'translateX(' + i * 100 + '%)'"
                    >
                        @for (
                            event of (event_day_map | async)[
                                dateString(date)
                            ] || [];
                            track event.id
                        ) {
                            <button
                                matRipple
                                class="border-base-200 bg-base-100 hover:border-info pointer-events-auto absolute inset-x-1 overflow-hidden rounded-sm border py-1 pr-2 pl-3 shadow-sm"
                                [style.top]="event.offset * 100 + '%'"
                                [style.height]="event.length * 100 + '%'"
                                (click)="viewEvent(event)"
                            >
                                <div
                                    class="bg-info absolute inset-y-0 left-0 w-1.5"
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
                                class="border-base-content absolute inset-x-0 h-0 border-y-2"
                                [style.top]="now_offset * 100 + '%'"
                            >
                                <div
                                    class="bg-base-content absolute top-0 left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                ></div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        GroupEventCardComponent,
        CustomTooltipComponent,
    ],
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
