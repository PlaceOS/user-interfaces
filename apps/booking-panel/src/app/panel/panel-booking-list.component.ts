import { Component } from '@angular/core';
import {
    differenceInSeconds,
    formatDuration,
    isAfter,
    isSameDay,
} from 'date-fns';
import { combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-booking-list',
    template: `
        <h2 class="w-full px-4 py-2 mb-2 font-medium" *ngIf="current | async">
            Current
            <span
                class="text-xs shadow px-2 py-1 ml-8 rounded bg-base-200"
                *ngIf="!(started | async) && (starting_in | async)"
            >
                Starting in {{ starting_in | async }}
            </span>
            <span
                class="text-xs shadow px-2 py-1 ml-8 rounded bg-error text-white"
                *ngIf="(started | async) && !(pending | async)"
            >
                In Progress
            </span>
            <span
                class="text-xs shadow px-2 py-1 ml-8 rounded bg-warning text-white"
                *ngIf="
                    ((current | async)?.state === 'upcoming' ||
                        (current | async)?.state === 'in_progress') &&
                    (pending | async)
                "
            >
                Waiting to start
            </span>
        </h2>
        <div class="mb-4 w-full" *ngIf="current | async; else empty_state">
            <div
                current
                class="flex items-center bg-base-100 rounded-lg px-4 h-24 text-lg shadow-md w-full border border-base-200 relative max-w-full"
                [class.text-white]="started | async"
            >
                <div
                    color
                    class="absolute -left-2 -right-2 top-2 bottom-2 bg-primary rounded z-0"
                    [class.opacity-100]="started | async"
                    [class.opacity-0]="!(started | async)"
                ></div>
                <div
                    class="relative opacity-80 w-24 text-base z-10"
                    *ngIf="!(started | async)"
                >
                    <span [class.opacity-60]="started | async">{{
                        (current | async)?.event_start * 1000
                            | date: 'shortTime'
                    }}</span
                    ><br />
                    <span [class.opacity-60]="!(started | async)">{{
                        (current | async)?.event_end * 1000 | date: 'shortTime'
                    }}</span>
                </div>
                <div
                    class="relative opacity-80 w-24 text-base z-10 flex flex-col"
                    *ngIf="started | async"
                >
                    <div class="text-xs">Ends at:</div>
                    <div>
                        {{
                            (current | async)?.date +
                                (current | async)?.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                    </div>
                </div>
                <div class="relative truncate z-10">
                    {{ (current | async)?.title || '&lt;Private Event&gt;' }}
                </div>
            </div>
        </div>
        <h2
            class="w-full px-4 py-2 mb-2 font-medium"
            *ngIf="(upcoming | async)?.length"
        >
            Upcoming
        </h2>
        <ul
            class="list-style-none p-0 m-0 bg-base-100 rounded text-base shadow divide-y divide-base-200 w-full border border-base-200 max-w-full"
            *ngIf="(upcoming | async)?.length"
        >
            <li
                upcoming
                class="flex items-center w-full p-4"
                *ngFor="let event of upcoming | async | slice: 0:2"
            >
                <div class="opacity-60 w-24">
                    {{ event?.date | date: 'shortTime' }}
                </div>
                <div class="truncate">
                    {{ event?.title || '&lt;Private Event&gt;' }}
                </div>
            </li>
            <li
                upcoming
                class="flex items-center w-full p-4"
                *ngIf="(upcoming | async)?.length > 2"
            ></li>
        </ul>
        <ng-template #empty_state>
            <div
                class="flex items-center justify-center bg-base-100 rounded px-4 py-8 shadow-md w-full border border-base-200"
            >
                <p class="opacity-50">No upcoming events for today</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #000;
            }

            [current] {
                transition: color 200ms;
            }

            [current] [color] {
                transition: opacity 200ms;
            }
        `,
    ],
})
export class PanelBookingListComponent {
    /** List of current and future events for the current day */
    public readonly bookings = this._state.bookings.pipe(
        map((l) =>
            l.filter((e) => e.state !== 'done' && isSameDay(e.date, new Date()))
        )
    );
    /** In progress or next event */
    public readonly current = this.bookings.pipe(
        map((list) => list.sort((a, b) => a.date - b.date)[0])
    );
    /** Whether current event has started */
    public readonly started = combineLatest([this.current, interval(600)]).pipe(
        map(([c]) => isAfter(Date.now(), c?.date))
    );
    /** Display string for time until current event's start */
    public readonly starting_in = combineLatest([
        this.current,
        interval(600),
    ]).pipe(
        map(([_]) => {
            const diff = _ ? differenceInSeconds(_.date, new Date()) : 0;
            return diff && diff < 60 * 60
                ? `${formatDuration({
                      hours: Math.floor(diff / 60 / 60),
                      minutes: Math.floor(diff / 60) % 60,
                      seconds: diff < 60 ? diff : 0,
                  })}`
                : '';
        })
    );
    /** Whether current event is waiting for the attendees to begin the evnt */
    public readonly pending = combineLatest([
        this.current,
        this._state.settings,
        interval(600),
    ]).pipe(
        map(([i, settings]) => i && settings.pending_period && settings.pending)
    );
    /** List of events excluding the current/next event */
    public readonly upcoming = this.bookings.pipe(
        map((list) => list.sort((a, b) => a.date - b.date).slice(1))
    );

    constructor(private _state: PanelStateService) {}
}
