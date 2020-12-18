import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, filter } from 'rxjs/operators';

import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';

import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'app-panel',
    providers: [PanelStateService, Title],
    template: `
        <panel-header [title]="title"></panel-header>
        <div class="panel">
            <panel-timeline></panel-timeline>
            <panel-progress [date_time]="minute"></panel-progress>
            <panel-events [events]="events"></panel-events>
        </div>
        <panel-clock [date_time]="seconds"></panel-clock>
    `,
    styles: [
        `
            :host {
                --white: #ffffff;
                --green: #4cb050;
                --orange: #e64726;
                --red: #f44336;
                --gray-100: #a7a7a7;
                --gray-200: #606060;
                --gray-300: #37474f;
                --gray-400: #404040;
                --opaque-light: rgba(255, 255, 255, 0.2);
                --opaque-medium: rgba(255, 255, 255, 0.5);
                --opaque-dark: rgba(0, 0, 0, 0.2);
                --shadow: 0 0.1em 0.2em 0.1em var(--opaque-dark);

                font-size: 3vmin;
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: var(--gray-200);
                color: var(--white);
            }

            .panel,
            panel-header,
            panel-timeline,
            panel-progress,
            panel-events,
            panel-clock {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
            }

            .panel {
                top: 3em;
            }

            panel-timeline {
                width: 2em;
                z-index: 1;
            }

            panel-progress {
                z-index: 2;
            }

            panel-events {
                left: 2em;
            }

            panel-clock {
                top: unset;
                left: unset;
                bottom: 0.5em;
                right: 0.5em;
                z-index: 3;
            }
        `,
    ],
})
export class PanelComponent extends BaseClass implements OnInit {
    /** Panel title / space name */
    public title: string;

    /** Date for clock display */
    public seconds: number = new Date().valueOf();

    /** Date for progress display */
    public minute: number = new Date().setSeconds(0).valueOf();

    /** List of calendar events */
    public events: CalendarEvent[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _state: PanelStateService,
        private _title: Title
    ) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap
                .pipe(filter((params) => params.has('system_id')))
                .subscribe((params) => {
                    this._state.system = params.get('system_id');
                })
        );

        this.subscription(
            'timetable.bookings',
            this._state.bookings.subscribe((bookings) => {
                this.events = bookings;
            })
        );

        this.subscription(
            'timetable.seconds',
            this._state.seconds_interval.subscribe((timestamp) => {
                this.seconds = timestamp;
            })
        );

        this.subscription(
            'timetable.minute',
            this._state.minute_interval.subscribe((timestamp) => {
                this.minute = timestamp;
            })
        );

        await this._state.initialised.pipe(first((_) => _)).toPromise();

        this.subscription(
            'timetable.space',
            this._state.space.subscribe((space) => {
                this.title = space.name;
                this._title.setTitle(`${this.title} | Bookings`);
            })
        );
    }
}
