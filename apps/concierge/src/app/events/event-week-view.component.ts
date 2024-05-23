import { Component } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { EventStateService } from './event-state.service';
import { addDays, format, startOfMinute } from 'date-fns';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { Booking, GroupEventDetailsModalComponent } from '@placeos/bookings';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'event-week-view',
    template: `
        <div class="absolute inset-0 overflow-auto flex">
            <div
                class="sticky left-0 w-24 min-h-full flex flex-col items-end z-20 bg-base-100"
            >
                <div
                    header
                    class="sticky top-0 h-16 min-h-16 flex justify-end z-10"
                >
                    <div class="bg-base-100 pt-6 h-10">
                        <div class="opacity-30 text-xs px-2">
                            {{ now | date: 'zzzz' }}
                        </div>
                    </div>
                </div>
                <div
                    *ngFor="let hour of hours; let i = index"
                    class="relative min-h-10 w-full flex-1 bg-base-100"
                >
                    <div
                        hour
                        class="absolute top-0 right-1 -translate-y-1/2 whitespace-nowrap text-xs opacity-60"
                    >
                        {{ hour }} {{ i >= 12 ? 'PM' : 'AM' }}
                    </div>
                </div>
            </div>
            <div class="relative min-w-[84rem] min-h-full z-10">
                <div
                    header
                    class="sticky flex top-0 h-16 min-h-16 border-b border-base-200 bg-base-100 z-10"
                >
                    <div
                        *ngFor="let date of days"
                        date
                        class="flex flex-col items-center justify-center p-4 min-w-48 flex-1 border-r border-base-200"
                    >
                        <div class="text-sm opacity-60">
                            {{ date | date: 'EEEE' }}
                        </div>
                        <div>{{ date | date: 'd' }}</div>
                    </div>
                </div>
                <div
                    *ngFor="let hour of hours; let i = index"
                    class="relative flex min-h-10 min-w-[84rem] flex-1 border-x border-b border-base-200 pointer-events-none"
                ></div>
                <div
                    *ngFor="let date of days; let i = index"
                    date
                    class="absolute top-16 left-0 w-[calc(100%/7)] h-[60rem] flex-1 border-r border-base-200 pointer-events-none"
                    [style.transform]="'translateX(' + i * 100 + '%)'"
                >
                    <button
                        *ngFor="
                            let event of (event_day_map | async)[
                                dateString(date)
                            ] || []
                        "
                        matRipple
                        class="absolute inset-x-1 bg-base-100 rounded border border-base-200 hover:border-info shadow pl-3 pr-2 py-1 overflow-hidden pointer-events-auto"
                        [style.top]="event.offset * 100 + '%'"
                        [style.height]="event.length * 100 + '%'"
                        (click)="viewEvent(event)"
                    >
                        <div
                            class="absolute left-0 inset-y-0 bg-info w-1.5"
                        ></div>
                        <div class="text-sm opacity-60 h-full text-left">
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
                    <div
                        now
                        *ngIf="isCurrentDay(date)"
                        class="absolute inset-x-0 h-0 border-y-2 border-base-content"
                        [style.top]="now_offset * 100 + '%'"
                    >
                        <div
                            class="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-base-content"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class EventWeekViewComponent extends AsyncHandler {
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
        shareReplay(1)
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

    constructor(
        private _state: EventStateService,
        private _dialog: MatDialog,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'date',
            this._state.options.subscribe(({ date }) => {
                if (!date) return;
                this.days = this.days.map((_, idx) =>
                    addDays(date, idx).valueOf()
                );
            })
        );
    }
}
