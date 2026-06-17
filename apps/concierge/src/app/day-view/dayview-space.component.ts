import { Component, computed, inject, input } from '@angular/core';
import { Space } from '@placeos/common';

import { EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-space',
    template: `
        @if (space()) {
            @for (event of events(); track event) {
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
export class DayviewSpaceComponent {
    private _state = inject(EventsStateService);

    /** Space to display events for */
    public readonly space = input<Space>(undefined);

    /** List of events for the selected space */
    private readonly _filtered = this._state.filtered;

    public readonly events = computed(() => {
        const space = this.space();
        if (!space) return [];
        return this._filtered().filter((booking) =>
            booking.resources.find(
                (resource) => space.email === resource.email,
            ),
        );
    });
}
