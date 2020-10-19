import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseClass, SettingsService } from '@user-interfaces/common';

import { EventPair } from './event-list/event-list.component';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.template.html',
    styleUrls: ['./schedule.styles.scss'],
})
export class ScheduleComponent extends BaseClass implements OnInit {
    /** Name of the page to render */
    public page: string;
    /** Current list of loaded events */
    public events: EventPair[];
    /** Whether to show menu */
    public show_menu = false;

    constructor(private _route: ActivatedRoute, private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._settings.post('navTitle', 'My Day');
        this.subscription(
            'route.route',
            this._route.paramMap.subscribe((params) => {
                if (params.has('page')) {
                    this.page = params.get('page');
                }
            })
        );
        this.loadEvents();
    }

    /**
     * Update local event listing
     * @param event_list New list of events
     */
    public updateEvents(event_list: EventPair[]) {
        this.events = event_list;
        this.saveEvents();
    }

    /**
     * Save the current event listing
     */
    public saveEvents() {
        if (localStorage) {
            localStorage.setItem('STAFF.events', JSON.stringify(this.events || []));
        }
    }

    /**
     * Load the last saved event listing
     */
    public loadEvents() {
        if (localStorage) {
            const data = localStorage.getItem('STAFF.events');
            this.events = JSON.parse(data || '[]');
        }
    }
}
