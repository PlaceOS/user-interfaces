import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { startOfDay, differenceInMinutes, format, addMinutes } from 'date-fns';

import { CalendarEvent } from '@placeos/events';
import { EventsStateService } from './events-state.service';
import { SettingsService } from '@placeos/common';

const DAY_IN_MINUTES = 24 * 60;

@Component({
    selector: 'dayview-event',
    template: `
        <div
            *ngIf="(ui_options | async)?.show_overflow"
            [class]="
                'overflow-block absolute rounded overflow-hidden w-full ' + type
            "
            [style.top]="overflow_top * 100 + '%'"
            [style.height]="overflow_height * 100 + '%'"
        ></div>
        <div
            event
            matRipple
            [class]="
                'absolute rounded overflow-hidden text-sm border border-base-200 shadow-sm z-10 hover:z-30 ' +
                type
            "
            *ngIf="event"
            [style.top]="top * 100 + '%'"
            [style.height]="height * 100 + '%'"
            (click)="view(event)"
        >
            <div class="px-2 py-1 font-medium">{{ event.organiser?.name }}</div>
            <div class="py-1 flex items-center" *ngIf="event.duration > 30">
                <app-icon class="mx-2">title</app-icon>
                {{ event.title }}
            </div>
            <div class="py-1 flex items-center" *ngIf="event.duration > 60">
                <app-icon class="mx-2">schedule</app-icon>
                {{ time }}
            </div>
            <div class="py-1 flex items-center" *ngIf="event.duration > 90">
                <app-icon class="mx-2">people</app-icon>
                {{ event.attendees.length }} Attendee{{
                    event.attendees.length === 1 ? '' : 's'
                }}
            </div>
        </div>
        <div
            *ngIf="event && (ui_options | async)?.show_cleaning"
            cleaning
            class="absolute rounded overflow-hidden flex w-full shadow p-2 bg-base-100 z-20 hover:!h-48"
            [style.top]="top * 100 + '%'"
            [style.height]="height * 100 + '%'"
        >
            <div
                [class]="
                    'icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending ' +
                    event.ext('cleaning_status')
                "
            >
                <app-icon>{{
                    event.ext('cleaning_status') === 'done' ? 'done' : 'warning'
                }}</app-icon>
            </div>
            <div class="flex-1 w-1/2">
                {{
                    event.ext('cleaning_status') === 'done'
                        ? 'Finished'
                        : 'Scheduled to'
                }}
                clean at
                {{
                    event.ext('cleaning_time') || event.event_end * 1000
                        | date: time_format
                }}
            </div>
        </div>
    `,
    styles: [
        `
            [event] {
                background-color: #ccc;
                width: 12rem;
                z-index: 100;
                transition: box-shadow 200ms;
            }

            [event]:hover {
                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2),
                    0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;
                cursor: pointer;
            }

            .overflow-block {
                opacity: 0.3;
                width: 12rem;
            }

            .internal {
                background-color: #1565c0;
                color: #fff;
            }

            .icon {
                background-color: #f0f0f0;
            }

            .icon.done {
                color: #21a453;
            }

            .external {
                background-color: #ad1457;
                color: #fff;
            }

            .cancelled {
                background-color: #ccc;
            }
        `,
    ],
})
export class DayviewEventComponent implements OnChanges {
    /** Event to display */
    @Input() public event: CalendarEvent;
    /** Top position for the event */
    public top = -999;
    /** Height of the event on the calendar */
    public height = 0;
    /** Top position for the event */
    public overflow_top = -999;
    /** Height of the event on the calendar */
    public overflow_height = 0;

    public readonly ui_options = this._state.options;

    public readonly view = (e) => this._state.setEvent(e);

    public get time() {
        const date = new Date(this.event.date);
        return (
            format(date, this.time_format) +
            ' - ' +
            format(addMinutes(date, this.event.duration), this.time_format)
        );
    }

    public get type() {
        return this.event.guests.length
            ? 'external'
            : this.event.status === 'declined'
            ? 'cancelled'
            : 'internal';
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: EventsStateService,
        private _settings: SettingsService
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.event && this.event) {
            const start = startOfDay(new Date(this.event.date));
            const diff = differenceInMinutes(new Date(this.event.date), start);
            this.top = diff / DAY_IN_MINUTES;
            this.height = this.event.duration / DAY_IN_MINUTES;
            this.overflow_top =
                (diff - (this.event.setup_time || 0)) / DAY_IN_MINUTES;
            this.overflow_height =
                (this.event.duration +
                    (this.event.setup_time || 0) +
                    (this.event.breakdown_time || 0)) /
                DAY_IN_MINUTES;
        }
    }
}
