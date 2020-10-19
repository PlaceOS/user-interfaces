import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { CalendarEvent } from '@user-interfaces/events';
import { Space } from '@user-interfaces/spaces';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-space',
    template: `
        <dayview-event *ngFor="let event of events | async" [event]="event"></dayview-event>
        `,
    styles: [
        `
            :host {
                position: relative;
                border-right: 1px solid rgba(0, 0, 0, 0.1);
            }
        `,
    ],
})
export class DayviewSpaceComponent {
    /** Space to display events for */
    @Input() public space: Space;

    public shown_event: CalendarEvent;
    /** List of events for the selected space */
    public readonly events = this._state.filtered.pipe(
        map((bookings) =>
            bookings.filter((bkn) =>
                bkn.resources.find((space) => this.space.email === space.email)
            )
        )
    );

    constructor(private _state: EventsStateService) {}

    ngOnInit() {
        this._state.filtered.subscribe((events) => {

        });
    }
}
