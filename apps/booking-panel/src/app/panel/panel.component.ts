import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { status } from '@placeos/ts-client';
import { format } from 'date-fns';

import { BaseClass, HashMap, SettingsService } from '@user-interfaces/common';
import { Space } from '@user-interfaces/spaces';

import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'app-booking-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    providers: [PanelStateService],
})
export class BookingPanelComponent extends BaseClass implements OnInit {
    /** ID of the active system */
    @Input() public system_id: string;
    /** Whether the status is on the right side */
    @Input() public reverse: boolean;
    /** Whether to show the time at the bottom of the status */
    @Input() public show_time = true;
    /** Name of the connected system */
    public space_name: string;
    /** Space with which to display bookings for */
    public space: Space;
    /** Number of seconds before a meeting can be started, being truthy enables start/stop and auto-cancellations */
    public pending_timeout: number;
    /** Number of seconds after the start of a meeting when it is auto-cancelled, overrides `timeout` value */
    public cancel_timeout: number;
    /** Timestamp of the last started meeting as ms since UTC epoch */
    public last_started: number;
    /** Whether to hide booking related details */
    public hide_all: boolean;
    /** Whether user interaction is enabled for the panel */
    public interactive = true;
    /** Whether status display is on the right side of the UI */
    public flip_status: boolean;
    /** Whether bookings can be cancelled if they timeout */
    public can_cancel: boolean;
    /** Time of the last cancelled meeting in ms since UTC epoch */
    private last_cancel: number;
    /** Start time of the business day with format `HH:mm` */
    public business_start: string;
    /** End time of the business day with format `HH:mm` */
    public business_end: string;
    /** Whether to show full room name when it overflows */
    public show_title: boolean;
    /** Whether to show the status display string */
    public hide_status: boolean;
    /** Override mapping for status values */
    public status_overrides: HashMap<string>;
    /** Status of websocket */
    public websocket_connected: boolean;

    public readonly status = this._state.status;

    /** Whether booking details should be shown */
    public get show_details(): boolean {
        return this.websocket_connected || !!this._settings.get('show_status_when_disconnected');
    }

    /** Display string for the current time */
    public get display_time(): string {
        return format(new Date(), 'h:mm a');
    }

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _state: PanelStateService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this.system_id = params.get('system_id');
                    this._settings.post('system', this.system_id);
                    this._state.system = this.system_id;
                }
            })
        );
        this.timeout('websocket', () => {
            status().subscribe((status) => (this.websocket_connected = status));
        });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id && this.system_id) {
            this._state.system = this.system_id;
        }
    }

    /**
     * Show full room name if overflowing
     */
    public showTitle() {
        this.show_title = true;
        this.timeout('hide_title', () => (this.show_title = false), 3000);
    }
}
