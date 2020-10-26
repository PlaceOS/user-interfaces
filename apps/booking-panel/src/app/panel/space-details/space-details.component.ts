import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { isSameDay, isAfter, format } from 'date-fns';

import { PanelStateService } from '../panel-state.service';
import { getNextFreeBookingSlot } from '@user-interfaces/events';

@Component({
    selector: 'panel-space-details',
    templateUrl: './space-details.component.html',
    styleUrls: ['./space-details.component.scss'],
})
export class PanelSpaceDetailsComponent {
    /** Secondary title for the space */
    public title: string;
    /** Description for the space */
    public description: string;
    /** Image that suppliments the description for the space */
    public icon: { class?: string; value?: string; src?: string };

    /** Whether to hide the booking timing details */
    public hide_availability: boolean;
    /** Whether to hide the current booking title */
    public hide_title: boolean;
    /** Whether to hide booking details(title and host) */
    public hide_details: boolean;
    /** Whether to hide booking host */
    public hide_user: boolean;
    /** Observable for the upcoming booking */
    public readonly next = this._state.next;
    /** Observable for the current booking */
    public readonly current = this._state.current;

    public get system_id() {
        return this._state.system;
    }

    public readonly next_free = this._state.bookings.pipe(
        map((list) => {
            const block = getNextFreeBookingSlot(list, undefined, 15);
            const now = new Date();
            const start = new Date(block.start);
            const end = new Date(block.end);
            return {
                start: isSameDay(now, start) && isAfter(start, now) ? format(start, 'h:mm a') : '',
                end: isSameDay(now, end) && isAfter(end, now) ? format(end, 'h:mm a') : '',
            };
        })
    );

    constructor(private _state: PanelStateService) {}
}
