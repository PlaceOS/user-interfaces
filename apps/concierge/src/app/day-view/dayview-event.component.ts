import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { startOfDay, differenceInMinutes, format, addMinutes } from 'date-fns';

import { CalendarEvent } from '@user-interfaces/events';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-event',
    template: `
        <div
            *ngIf="(ui_options | async)?.show_overflow"
            [class]="'overflow-block absolute rounded overflow-hidden w-full ' + type"
            [style.top]="overflow_top * 100 + '%'"
            [style.height]="overflow_height * 100 + '%'"
        ></div>
        <div
            name="event"
            [class]="'absolute rounded overflow-hidden text-sm ' + type"
            *ngIf="event"
            [style.top]="top * 100 + '%'"
            [style.height]="height * 100 + '%'"
            (click)="view(event)"
        >
            <div class="info">{{ event.organiser?.name }}</div>
            <div class="info flex items-center" *ngIf="event.duration > 30">
                <app-icon class="mx-2" [icon]="{ class: 'material-icons', content: 'title' }"></app-icon>
                {{ event.title }}
            </div>
            <div class="info flex items-center" *ngIf="event.duration > 60">
                <app-icon class="mx-2" [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                {{ time }}
            </div>
            <div class="info flex items-center" *ngIf="event.duration > 90">
                <app-icon class="mx-2" [icon]="{ class: 'material-icons', content: 'user' }"></app-icon>
                {{ event.attendees.length }} Attendee{{ event.attendees.length === 1 ? '' : 's' }}
            </div>
        </div>
        <div
            *ngIf="(ui_options | async)?.show_cleaning"
            class="catering-block absolute rounded overflow-hidden flex w-full shadow p-2"
            [style.top]="overflow_top * 100 + '%'"
            [style.height]="overflow_height * 100 + '%'"
        >
            <div [class]="'icon flex mr-2 text-3xl rounded ' + event.cleaning_status">
                <app-icon [icon]="{ class: 'material-icons', content: event.cleaning_status === 'done' ? 'done' : 'warning' }"></app-icon>
            </div>
            <div class="text">{{ event.cleaning_status === 'done' ? 'Finished' : 'Scheduled to' }} clean at {{ event.cleaning_time }}</div>
        </div>
    `,
    styles: [
        `
            :host {
                border-right: 1px solid rgba(0, 0, 0, 0.1);
            }

            [name='event'] {
                background-color: #ccc;
                width: 12rem;
                z-index: 100;
                transition: box-shadow 200ms;
            }

            [name='event']:hover {
                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 2px 1px -1px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                z-index: 999;
            }

            .overflow-block {
                opacity: .3;
                width: 12rem;
            }

            .catering-block {
                background-color: #fff;
                width: 12rem;
                z-index: 999;
            }

            .internal {
                background-color: #00a4c7;
                color: #fff;
            }

            .icon {
                height: 1.5em;
                width: 1.5em;
                color: #ffbf1f;
                background-color: #f0f0f0;
            }

            .icon.done {
                color: #21a453;
            }

            .external {
                background-color: #d85be0;
                color: #fff;
            }

            .cancelled {
                background-color: #eee;
            }

            .info:first-child {
                padding: 0.75em 0.5em;
            }

            .info {
                padding: 0.25em 0.5em;
            }
        `,
    ],
})
export class DayviewEventComponent implements OnChanges {
    /** Event to display */
    @Input() public event: CalendarEvent;
    /** Top position for the event */
    public top: number = -999;
    /** Height of the event on the calendar */
    public height: number = 0;
    /** Top position for the event */
    public overflow_top: number = -999;
    /** Height of the event on the calendar */
    public overflow_height: number = 0;

    public readonly view = (e) => this._state.setEvent(e);

    public readonly ui_options = this._state.ui_options;

    public get time() {
        const date = new Date(this.event.date);
        return (
            format(date, 'h:mm a') + ' - ' + format(addMinutes(date, this.event.duration), 'h:mm a')
        );
    }

    public get type() {
        return this.event.has_visitors
            ? 'external'
            : this.event.status === 'cancelled'
            ? 'cancelled'
            : 'internal';
    }

    constructor(private _state: EventsStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.event && this.event) {
            const start = startOfDay(new Date(this.event.date));
            const diff = differenceInMinutes(new Date(this.event.date), start);
            this.top = diff / (24 * 60);
            this.height = this.event.duration / (24 * 60);
            this.overflow_top = (diff - this.event.setup) / (24 * 60);
            this.overflow_height =
                (this.event.duration + this.event.setup + this.event.breakdown) / (24 * 60);
        }
    }
}
