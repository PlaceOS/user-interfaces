import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CalendarEvent } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { EventsStateService } from './events-state.service';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'dayview-space',
    template: `
        <ng-container *ngIf="space">
            <dayview-event
                *ngFor="let event of events | async"
                [event]="event"
            ></dayview-event>
        </ng-container>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
        `,
    ],
})
export class DayviewSpaceComponent extends AsyncHandler implements OnInit {
    /** Space to display events for */
    @Input() public space: Space;

    public shown_event: CalendarEvent;
    /** List of events for the selected space */
    public readonly events = this._state.filtered.pipe(
        map((bookings) => {
            return bookings.filter((bkn) =>
                bkn.resources.find((space) => this.space.email === space.email)
            );
        })
    );

    constructor(private _state: EventsStateService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('events', this._state.filtered.subscribe());
    }
}
