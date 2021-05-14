import { Component } from '@angular/core';
import {
    differenceInMinutes,
    formatDuration,
    isAfter,
    isSameDay,
} from 'date-fns';
import { combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'panel-booking-list',
    template: `
        <h2 class="w-full px-4 py-2 mb-4 font-medium">
            Current
            <span
                class="text-xs shadow px-2 py-1 ml-8 rounded bg-gray-300"
                *ngIf="!(started | async)"
            >
                Starting in {{ starting_in | async }}
            </span>
            <span
                class="text-xs shadow px-2 py-1 ml-8 rounded bg-success text-white"
                *ngIf="(started | async) && !(pending | async)"
            >
                In Progress
            </span>
            <span
                class="text-xs shadow px-2 py-1 ml-8 rounded bg-pending text-white"
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
                class="flex items-center bg-white rounded-lg px-4 py-8 text-lg shadow-md w-full border border-gray-100 relative"
                [class.text-white]="started | async"
            >
                <div
                    color
                    class="absolute -left-2 -right-2 top-2 bottom-2 bg-primary rounded z-0"
                    [class.opacity-100]="started | async"
                    [class.opacity-0]="!(started | async)"
                ></div>
                <div class="relative opacity-60 w-24 text-base z-10">
                    {{ (current | async)?.date | date: 'shortTime' }}
                </div>
                <div class="relative truncate z-10">
                    {{ (current | async)?.title || '&lt;Private Event&gt;' }}
                </div>
            </div>
        </div>
        <h2 class="w-full px-4 py-2 mb-4 font-medium">Upcoming</h2>
        <ul
            class="list-style-none p-0 m-0 bg-white rounded text-base shadow divide-y divide-gray-100 w-full border border-gray-100"
            *ngIf="(upcoming | async)?.length"
        >
            <li
                class="flex items-center w-full p-4"
                *ngFor="let event of upcoming | async | slice: 0:4"
            >
                <div class="opacity-60 w-24">
                    {{ event?.date | date: 'shortTime' }}
                </div>
                <div class="truncate">
                    {{ event?.title || '&lt;Private Event&gt;' }}
                </div>
            </li>
        </ul>
        <ng-template #empty_state>
            <div
                class="flex items-center justify-center bg-white rounded px-4 py-8 shadow-md w-full border border-gray-100"
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
    public readonly bookings = this._state.bookings.pipe(
        map((_) => {
            console.log(
                'Bookings:',
                _,
                _.filter((e) => isSameDay(e.date, new Date()))
            );
            return _.filter(
                (e) => e.state !== 'done' && isSameDay(e.date, new Date())
            );
        })
    );

    public readonly current = this.bookings.pipe(
        map((list) => list.sort((a, b) => a.date - b.date)[0])
    );

    public readonly started = combineLatest([this.current, interval(600)]).pipe(
        map(([c]) => isAfter(Date.now(), c.date))
    );

    public readonly starting_in = combineLatest([
        this.current,
        interval(600),
    ]).pipe(
        map(([_]) =>
            _
                ? `${formatDuration({
                      minutes: differenceInMinutes(_.date, new Date()),
                  })}`
                : ''
        )
    );

    public readonly pending = combineLatest([
        this.current,
        this._state.settings,
        interval(600),
    ]).pipe(
        map(([_, settings]) => (_ ? settings.last_active >= _.date : false))
    );

    public readonly upcoming = this.bookings.pipe(
        map((list) => list.sort((a, b) => a.date - b.date).slice(1))
    );

    constructor(private _state: PanelStateService) {}
}
