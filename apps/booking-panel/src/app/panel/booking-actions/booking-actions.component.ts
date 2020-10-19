import { Component, Input } from '@angular/core';

import { BaseClass } from '@user-interfaces/common';
import { PanelStateService } from '../panel-state.service';

export type SpaceStatus = 'pending' | 'available' | 'unavailable' | 'endable';

@Component({
    selector: 'panel-booking-actions',
    templateUrl: './booking-actions.component.html',
    styleUrls: ['./booking-actions.component.scss'],
})
export class PanelBookingActionsComponent extends BaseClass {
    /** Whether booking is allowed */
    public no_booking: boolean = false;
    /** Whether the current booking is able to be ended */
    public is_endable: number;
    /** Number of seconds before a meeting can be started, being truthy enables start/stop and auto-cancellations */
    public pending_timeout: number;
    /** Number of seconds after the start of a meeting when it is auto-cancelled, overrides `timeout` value */
    public cancel_timeout: number;
    /** Timestamp of the last started meeting as ms since UTC epoch */
    public last_started: number;
    /** Whether to ask user to start the meeting */
    public ask_start: boolean;
    /** Whether to ask user to end the meeting */
    public ask_end: boolean;
    /** Time of the last automatic confirmation of start or end */
    public last_confirm: number = 0;
    /** Default title for bookings */
    public default_title: string;
    /** Maximum allowed booking duation */
    public max_duration: number;
    /** Minimum allowed booking duation */
    public min_duration: number;
    /** Start time of the business day with format `HH:mm` */
    public business_start: string;
    /** End time of the business day with format `HH:mm` */
    public business_end: string;
    /** Open booking modal */
    public readonly book = () => this._state.newBooking();
    /** Open confirmation modal for ending meeting */
    public readonly confirmEnd = () => this._state.confirmEnd();
    /** End the current meeting */
    public readonly endMeeting = (r?) => this._state.endCurrent(r);
    /** Open confirmation modal for starting meeting */
    public readonly confirmStart = () => this._state.confirmStart();
    /** Start the current/upcoming meeting */
    public readonly startMeeting = () => this._state.startMeeting();

    public get system_id() {
        return this._state.system;
    }

    constructor(private _state: PanelStateService) {
        super();
    }
}
