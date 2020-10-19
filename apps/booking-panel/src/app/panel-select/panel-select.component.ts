import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseClass, HashMap } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';
import { currentBooking } from '../panel/panel-state.service';

@Component({
    selector: 'app-booking-panel-select',
    templateUrl: './panel-select.component.html',
    styleUrls: ['./panel-select.component.scss']
})
export class BookingPanelSelectComponent extends BaseClass implements OnInit {
    /** List of systems to show panels for */
    public systems: string[];
    /** Names for the list of systems */
    public system_name: HashMap<string> = {};
    /** Icons for the list of systems */
    public system_icon: HashMap<string> = {};
    /** Status for the list of systems */
    public system_status: HashMap<string> = {};
    /** Active Panel system */
    public active_system: string;
    /** Countdown counter */
    public countdown: number;

    constructor(private route: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('route.query', this.route.queryParamMap.subscribe((params) => {
            if (params.has('system_ids')) {
                this.systems = (params.get('system_ids') || '').split(',');
            }
        }));
    }

    /**
     * Show booking panel for the given system ID
     * @param id ID of the system to show
     */
    public showPanel(id: string) {
        this.active_system = id;
        this.reset();
    }

    /**
     * Update the status value for the given system ID
     * @param id ID of the system to update
     * @param bookings List of current bookings for the system
     */
    public updateStatus(id: string, bookings: HashMap[]) {
        const current = currentBooking(bookings.map(i => new CalendarEvent(i)));
        this.system_status[id] = current ? 'available' : 'unavailable';
    }

    /**
     * Close the modal
     */
    public close() {
        this.active_system = null;
        this.clearInterval('countdown');
    }

    /**
     * User confirmation of the content of the modal
     */
    public reset() {
        if (this.active_system) {
            this.countdown = 30;
            this.interval('countdown', () => this.tick(), 1000);
        }
    }

    /**
     * Decrement countdown and close if 0
     */
    public tick() {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    }
}
