import { Component, Input } from '@angular/core';

import { SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'week-view-event',
    template: `
        <div
            content
            matRipple
            *ngIf="event"
            (click)="view(event)"
            [class]="
                'm-2 rounded border-2 bg-base-100 p-2 text-left font-normal text-black shadow ' +
                (event?.state === 'done' ? 'done' : event?.type)
            "
        >
            <div class="text-base">{{ event?.title }}</div>
            <div class="text-sm">{{ event?.date | date: time_format }}</div>
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
    standalone: false,
})
export class WeekViewEventComponent {
    @Input() public event: CalendarEvent;

    public readonly view = (e) => this._state.setEvent(e);

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: EventsStateService,
        private _settings: SettingsService,
    ) {}
}
