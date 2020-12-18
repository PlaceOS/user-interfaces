import { Component, Input } from '@angular/core';
import { CalendarEvent } from '@user-interfaces/events';

@Component({
    selector: 'panel-events',
    template: `
        <div
            *ngFor="let event of events"
            class="event"
            [class.active]="event.state.match('in_progress|started')"
            [class.disable]="event.state == 'done'"
            [style.top.%]="event.event_start * 1000 | timelinePosition"
            [style.height.%]="
                (event.event_end * 1000 | timelinePosition) -
                (event.event_start * 1000 | timelinePosition)
            "
        >
            <div class="subject">
                {{ event.title }}
            </div>
            <div class="details">
                {{ event.event_start * 1000 | date: 'HH:mm' }} -
                {{ event.event_end * 1000 | date: 'HH:mm' }}
            </div>
            <div
                *ngIf="event.state.match('in_progress|started')"
                class="status active"
            >
                In session
            </div>
            <div *ngIf="event.state == 'done'" class="status disable">
                Finished
            </div>
        </div>
    `,
    styles: [
        `
            .event {
                position: absolute;
                left: 0;
                right: 0.5em;
                border-radius: 0 0.5em 0.5em 0;
                min-height: 3px;
                padding: 0.25em 0.5em;
                overflow: hidden;
                font-size: 1.2em;
                border-width: 1px 1px 1px 0;
                border-color: var(--opaque-light);
                background-color: var(--gray-400);
                box-shadow: var(--shadow);
            }

            .event.active {
                background-color: var(--orange);
            }

            .event.disable > div {
                opacity: 0.4;
            }

            .subject {
                font-size: 1.2em;
                margin-bottom: 0;
            }

            .details {
                display: flex;
                font-size: 1em;
                color: var(--opaque-medium);
            }

            .status {
                position: absolute;
                bottom: 0.5em;
                right: 0.75em;
                font-size: 1em;
                color: var(--opaque-medium);
            }

            .status.active {
                color: var(--green);
            }

            .status.disable {
                color: var(--red);
            }
        `,
    ],
})
export class PanelEventsComponent {
    @Input() events: CalendarEvent[];
}
