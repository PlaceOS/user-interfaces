import { Component, OnInit, inject, input } from '@angular/core';
import { map } from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-space',
    template: `
        @if (space()) {
            @for (event of events | async; track event) {
                <dayview-event [event]="event" />
            }
        }
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
    standalone: false,
})
export class DayviewSpaceComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventsStateService);

    /** Space to display events for */
    public readonly space = input<Space>(undefined);

    public shown_event: CalendarEvent;
    /** List of events for the selected space */
    public readonly events = this._state.filtered.pipe(
        map((bookings) => {
            return bookings.filter((bkn) =>
                bkn.resources.find(
                    (space) => this.space().email === space.email,
                ),
            );
        }),
    );

    public ngOnInit(): void {
        this.subscription('events', this._state.filtered.subscribe());
    }
}
