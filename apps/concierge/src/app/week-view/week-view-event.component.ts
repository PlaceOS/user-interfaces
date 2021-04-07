import { Component, Input } from '@angular/core';

import { CalendarEvent } from '@placeos/events';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'week-view-event',
    template: `
            <div
                content
                matRipple
                (click)="view(event)"
                [class]="
                    'm-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal ' +
                    (event.state === 'done' ? 'done' : event?.type)
                "
            >
                <div class="text-base">{{ event?.title }}</div>
                <div class="text-sm">{{ event?.date | date: 'shortTime' }}</div>
                <div class="text-sm">
                    {{ event?.attendees.length }} Attendee{{
                        event?.attendees.length === 1 ? '' : 's'
                    }}
                </div>
            </div>
    `,
    styles: [
        `
            button {
                background: none !important;
                border: none !important;
            }

            [content] {
                width: calc(100% - 1rem);
            }

            .done {
                opacity: 0.5;
            }

            .done:hover {
                opacity: 1;
            }

            .cancelled {
                border-color: #626262;
            }

            .external {
                border-color: #d85be0;
            }

            .internal {
                border-color: #00a4c7;
            }
        `,
    ],
})
export class WeekViewEventComponent {
    @Input() public event: CalendarEvent;

    public readonly view = (e) => this._state.setEvent(e);

    constructor(private _state: EventsStateService) {}
}
