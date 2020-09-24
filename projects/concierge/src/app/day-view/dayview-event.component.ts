import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { startOfDay, differenceInMinutes, format, addMinutes } from 'date-fns';

import { CalendarEvent } from 'src/app/events/event.class';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-event',
    template: `
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
                <app-icon [icon]="{ class: 'material-icons', content: 'title' }"></app-icon>
                {{ event.title }}
            </div>
            <div class="info flex items-center" *ngIf="event.duration > 60">
                <app-icon [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                {{ time }}
            </div>
            <div class="info flex items-center" *ngIf="event.duration > 90">
                <app-icon [icon]="{ class: 'material-icons', content: 'user' }"></app-icon>
                {{ event.attendees.length }} Attendee{{ event.attendees.length === 1 ? '' : 's' }}
            </div>
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

            .internal {
                background-color: #00a4c7;
                color: #fff;
            }

            .external {
                background-color: #d85be0;
                color: #fff;
            }

            .cancelled {
                background-color: #eee;
            }

            app-icon {
                margin: 0 0.5em;
            }

            .info:first-child {
                padding: .75em 0.5em;
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

    public readonly view = (e) => this._state.setEvent(e);

    public get time() {
        const date = new Date(this.event.date);
        return (
            format(date, 'h:mm a') + ' - ' + format(addMinutes(date, this.event.duration), 'h:mm a')
        );
    }

    public get type() {
        return this.event.has_visitors
            ? 'external'
            : this.event.cancelled
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
        }
    }
}
