import { Component, ElementRef, ViewChild } from '@angular/core';
import {
    add,
    addDays,
    differenceInMinutes,
    isSameDay,
    startOfDay,
} from 'date-fns';
import { EventsStateService } from './events-state.service';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncHandler } from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsModalComponent } from '@placeos/events';

@Component({
    selector: 'room-bookings-timeline',
    template: `
        <div
            class="relative flex items-center justify-center p-2 space-x-2 border-b border-gray-200"
        >
            <app-icon class="text-2xl">event</app-icon>
            <h3 (dblclick)="resetDate()">
                {{ date | date: 'mediumDate' }}
            </h3>
            <button btn icon matRipple (click)="previousDate()">
                <app-icon>chevron_left</app-icon>
            </button>
            <button btn icon matRipple (click)="nextDate()">
                <app-icon>chevron_right</app-icon>
            </button>
            <div
                class="absolute top-1/2 -translate-y-1/2 left-4 text-blue-500 text-sm"
                *ngIf="is_today"
            >
                Today
            </div>
        </div>
        <div
            class="flex flex-col w-full flex-1 overflow-hidden"
            (window:resize)="onResize()"
        >
            <div header class="flex items-center w-full h-16">
                <div
                    times
                    class="w-16 h-full flex flex-col items-center justify-end text-xs pb-2 opacity-60"
                >
                    {{ date | date: 'z' }}
                </div>
                <div
                    spaces
                    class="relative flex-1 h-full overflow-hidden border-r border-gray-200"
                >
                    <div
                        class="flex absolute inset-y-0"
                        [style.left]="-offset_x + 'px'"
                    >
                        <div
                            class="flex flex-col items-center justify-center h-full w-56"
                            *ngFor="let space of spaces | async"
                        >
                            {{ space.display_name || space.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div content class="flex w-full flex-1 h-px">
                <div
                    times
                    class="relative w-16 h-full overflow-hidden border-r border-gray-200"
                >
                    <div
                        class="absolute inset-x-0"
                        [style.top]="-offset_y + 'px'"
                    >
                        <div
                            class="relative block h-12"
                            *ngFor="let value of hours"
                        >
                            <div
                                class="absolute top-0 right-0 w-2 h-px bg-gray-200"
                            ></div>
                            <div
                                class="absolute top-0 right-3 -translate-y-1/2 text-xs opacity-60"
                            >
                                {{ value % 12 ? value % 12 : '12'
                                }}{{ value >= 12 ? 'PM' : 'AM' }}
                            </div>
                        </div>
                    </div>
                </div>
                <div spaces class="relative flex-1 h-full overflow-hidden w-px">
                    <div
                        class="absolute top-0 flex h-full pointer-events-none"
                        [style.left]="-(offset_x % 224) + 'px'"
                    >
                        <div
                            *ngFor="let _ of w_slots"
                            class="w-56 h-full border-r border-gray-200"
                        ></div>
                    </div>
                    <div
                        class="absolute left-0 w-full pointer-events-none"
                        [style.top]="-(offset_y % 48) + 'px'"
                    >
                        <div
                            *ngFor="let _ of h_slots"
                            class="h-12 w-full border-t border-gray-200"
                        ></div>
                    </div>
                    <div
                        #scroll_container
                        class="relative w-full h-full overflow-auto"
                        (scroll)="onScroll()"
                    >
                        <div
                            class="overflow-hidden relative"
                            [style.height]="24 * 3 + 'rem'"
                            [style.width]="
                                (spaces | async)?.length * 14 + 'rem'
                            "
                        >
                            <ng-container
                                *ngFor="
                                    let space of spaces | async;
                                    let i = index
                                "
                            >
                                <div
                                    event
                                    *ngFor="
                                        let event of (events | async)[
                                            space.id
                                        ] || []
                                    "
                                    class="absolute w-[13.625rem] bg-gray-100 shadow hover:border-gray-300 rounded-lg border border-gray-100 overflow-hidden px-3 py-2 text-xs"
                                    [style.left]="i * 14 + 0.125 + 'rem'"
                                    [style.top]="
                                        timeToOffset(event.date) + 'px'
                                    "
                                    [style.height]="
                                        endToOffset(
                                            event.date,
                                            event.duration
                                        ) + 'px'
                                    "
                                    (click)="viewEvent(event)"
                                >
                                    <div
                                        class="absolute left-0 inset-y-0 w-1 bg-pink-600"
                                    ></div>
                                    <p class="truncate">
                                        {{ event.date | date: 'shortTime' }}
                                        &ndash;
                                        {{
                                            event.organiser?.name || event.hjost
                                        }}
                                    </p>
                                    <p class="truncate">{{ event.title }}</p>
                                </div>
                            </ng-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
})
export class RoomBookingsTimelineComponent extends AsyncHandler {
    public date = Date.now();
    public offset_x = 0;
    public offset_y = 0;
    public w_slots = [];
    public h_slots = [];
    public hours = Array.from({ length: 24 }, (_, i) => i);
    public readonly spaces = this._state.spaces;
    public readonly events = combineLatest([
        this._state.spaces,
        this._state.filtered,
    ]).pipe(
        map(([spaces, events]) => {
            const map = {};
            for (const space of spaces) {
                map[space.id] = events.filter((event) =>
                    event.resources.find(
                        (item) =>
                            item.id === space.id || item.email === space.email
                    )
                );
            }
            return map;
        }),
        shareReplay(1)
    );

    public readonly resetDate = () => {
        this.date = Date.now();
        this._state.setDate(this.date);
    };
    public readonly previousDate = () => {
        this.date = addDays(this.date, -1).valueOf();
        this._state.setDate(this.date);
    };
    public readonly nextDate = () => {
        this.date = addDays(this.date, 1).valueOf();
        this._state.setDate(this.date);
    };

    public get is_today() {
        return isSameDay(this.date, Date.now());
    }

    @ViewChild('scroll_container', { static: true })
    private _scroll_container: ElementRef<HTMLDivElement>;

    constructor(
        private _state: EventsStateService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription('poll', this._state.startPolling());
        this.onResize();
    }

    public timeToOffset(date: number) {
        const diff = differenceInMinutes(date, startOfDay(date));
        return (diff / 60) * 48;
    }

    public endToOffset(date: number, duration: number) {
        const diff = differenceInMinutes(date, startOfDay(date));
        return (diff / 60 + duration / 60) * 48;
    }

    public onResize() {
        const w_slots = Math.floor(window.innerWidth / 224) + 1;
        const h_slots = Math.floor(window.innerHeight / 48);
        this.w_slots = Array.from({ length: w_slots }, (_, i) => i);
        this.h_slots = Array.from({ length: h_slots }, (_, i) => i);
    }

    public onScroll() {
        this.offset_x = this._scroll_container.nativeElement.scrollLeft;
        this.offset_y = this._scroll_container.nativeElement.scrollTop;
    }

    public viewEvent(event: Event) {
        this._dialog.open(EventDetailsModalComponent, {
            data: event,
        });
    }
}
