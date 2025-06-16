import { Component } from '@angular/core';
import { differenceInSeconds, isAfter, isSameDay } from 'date-fns';
import { combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { formatDuration } from '@placeos/common';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-booking-list',
    template: `
        @if (current | async) {
            <h2 class="mb-2 w-full px-4 py-2 font-medium">
                Current
                @if (!(started | async) && (starting_in | async)) {
                    <span
                        class="ml-8 rounded bg-base-200 px-2 py-1 text-xs shadow"
                    >
                        Starting in {{ starting_in | async }}
                    </span>
                }
                @if ((started | async) && !(pending | async)) {
                    <span
                        class="ml-8 rounded bg-error px-2 py-1 text-xs text-white shadow"
                    >
                        In Progress
                    </span>
                }
                @if (
                    ((current | async)?.state === 'upcoming' ||
                        (current | async)?.state === 'in_progress') &&
                    (pending | async)
                ) {
                    <span
                        class="ml-8 rounded bg-warning px-2 py-1 text-xs text-white shadow"
                    >
                        Waiting to start
                    </span>
                }
            </h2>
        }
        @if (current | async) {
            <div class="mb-4 w-full">
                <div
                    current
                    class="relative flex h-24 w-full max-w-full items-center rounded-lg border border-base-200 bg-base-100 px-4 text-lg shadow-md"
                    [class.text-white]="started | async"
                >
                    <div
                        color
                        class="absolute -left-2 -right-2 bottom-2 top-2 z-0 rounded bg-primary"
                        [class.opacity-100]="started | async"
                        [class.opacity-0]="!(started | async)"
                    ></div>
                    @if (!(started | async)) {
                        <div class="relative z-10 w-24 text-base opacity-80">
                            <span [class.opacity-60]="started | async">{{
                                (current | async)?.event_start * 1000
                                    | date: 'shortTime'
                            }}</span
                            ><br />
                            <span [class.opacity-60]="!(started | async)">{{
                                (current | async)?.event_end * 1000
                                    | date: 'shortTime'
                            }}</span>
                        </div>
                    }
                    @if (started | async) {
                        <div
                            class="relative z-10 flex w-24 flex-col text-base opacity-80"
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
                    }
                    <div class="relative z-10 truncate">
                        {{
                            (current | async)?.title || '&lt;Private Event&gt;'
                        }}
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="flex w-full items-center justify-center rounded border border-base-200 bg-base-100 px-4 py-8 shadow-md"
            >
                <p class="opacity-50">No upcoming events for today</p>
            </div>
        }
        @if ((upcoming | async)?.length) {
            <h2 class="mb-2 w-full px-4 py-2 font-medium">Upcoming</h2>
        }
        @if ((upcoming | async)?.length) {
            <ul
                class="list-style-none m-0 w-full max-w-full divide-y divide-base-200 rounded border border-base-200 bg-base-100 p-0 text-base shadow"
            >
                @for (event of upcoming | async | slice: 0 : 2; track event) {
                    <li upcoming class="flex w-full items-center p-4">
                        <div class="w-24 opacity-60">
                            {{ event?.date | date: 'shortTime' }}
                        </div>
                        <div class="truncate">
                            {{ event?.title || '&lt;Private Event&gt;' }}
                        </div>
                    </li>
                }
                @if ((upcoming | async)?.length > 2) {
                    <li upcoming class="flex w-full items-center p-4"></li>
                }
            </ul>
        }
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
    standalone: false,
})
export class PanelBookingListComponent {
    /** List of current and future events for the current day */
    public readonly bookings = this._state.bookings.pipe(
        map((l) =>
            l.filter(
                (e) => e.state !== 'done' && isSameDay(e.date, new Date()),
            ),
        ),
    );
    /** In progress or next event */
    public readonly current = this.bookings.pipe(
        map((list) => list.sort((a, b) => a.date - b.date)[0]),
    );
    /** Whether current event has started */
    public readonly started = combineLatest([this.current, interval(600)]).pipe(
        map(([c]) => isAfter(Date.now(), c?.date)),
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
        }),
    );
    /** Whether current event is waiting for the attendees to begin the evnt */
    public readonly pending = combineLatest([
        this.current,
        this._state.settings,
        interval(600),
    ]).pipe(
        map(
            ([i, settings]) => i && settings.pending_period && settings.pending,
        ),
    );
    /** List of events excluding the current/next event */
    public readonly upcoming = this.bookings.pipe(
        map((list) => list.sort((a, b) => a.date - b.date).slice(1)),
    );

    constructor(private _state: PanelStateService) {}
}
