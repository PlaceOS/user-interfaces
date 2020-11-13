import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitor-event',
    template: `
        <div class="flex items-center px-2 bg-gray-100 ">
            <div class="w-12 text-lg flex justify-center">
                <i class="p-2 rounded-full material-icons bg-gray-400">event</i>
            </div>
            <div class="w-24 p-2">{{ event?.date | date: 'shortTime' }}</div>
            <div class="w-48 p-2">
                {{ event?.organiser?.name || event?.organiser?.email }}
            </div>
            <div flex class="p-2 flex-1">{{ event?.title }}</div>
            <div class="w-64 p-2 truncate">{{ event?.location }}</div>
            <div class="w-32 p-2 flex items-center justify-end">
                <action-icon
                    matTooltip="Checkin All Guests"
                    [loading]="loading === 'checkin'"
                    className="material-icons"
                    content="event_available"
                    (click)="checkinGuests()"
                >
                </action-icon>
                <action-icon
                    matTooltip="Checkout All Guests"
                    [loading]="loading === 'checkout'"
                    className="material-icons"
                    content="event_busy"
                    (click)="checkoutGuests()"
                >
                </action-icon>
                <a
                    mat-icon-button
                    [href]="'mailto:' + event?.organiser?.email"
                    matTooltip="Email Host"
                >
                    <app-icon className="material-icons">email</app-icon>
                </a>
            </div>
            <div class="w-16 p-2">
                <button
                    mat-icon-button
                    (click)="show_attendees = !show_attendees"
                    [disabled]="!event?.attendees?.length"
                    [matTooltip]="
                        show_attendees || has_search
                            ? 'Hide Attendees'
                            : 'Show Attendees'
                    "
                >
                    <app-icon className="material-icons">{{
                        show_attendees
                            ? 'keyboard_arrow_down'
                            : 'keyboard_arrow_right'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <div
            attendees
            class="w-full overflow-hidden relative border-b border-gray-300"
            [style.height]="
                !show_attendees && !has_search
                    ? '0rem'
                    : event.attendees.length * 3.5 + 'rem'
            "
        >
            <div
                bar
                class="absolute top-0 bg-gray-400 z-10"
                [style.height]="
                    'calc(' +
                    ((event.attendees.length - 1) * 3.5 + 1.75) +
                    'rem + 1px)'
                "
            ></div>
            <div
                visitor
                class="relative w-full pl-12 bg-gray-200"
                *ngFor="let user of event.attendees"
            >
                <div l-bar class="absolute bg-gray-400"></div>
                <visitor-details
                    [attr.disabled]="!matches[user.email]"
                    [visitor]="user"
                    [(event)]="event"
                ></visitor-details>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            visitor-details {
                transition: opacity 200ms;
            }

            [attendees] {
                transition: height 200ms;
            }

            [visitor] {
                height: 3.5rem;
            }

            [bar] {
                width: 2px;
                left: calc(2rem - 1px);
            }

            [l-bar] {
                height: 2px;
                left: 2rem;
                top: calc(50% - 1px);
                width: 1rem;
            }

            [disabled="true"] {
                opacity: 0.35;
            }
        `,
    ],
})
export class VisitorEventComponent extends BaseClass implements OnInit {
    @Input() public event: CalendarEvent;

    public show_attendees: boolean;
    public loading: string;
    public matches: HashMap<boolean> = {};

    public readonly checkinGuests = async () => {
        this.loading = 'checkin';
        this.event = await this._state
            .checkAllGuestsIn(this.event)
            .catch((e) => this.event);
        this.loading = '';
    };
    public readonly checkoutGuests = async () => {
        this.loading = 'checkout';
        this.event = await this._state
            .checkAllGuestsOut(this.event)
            .catch((e) => this.event);
        this.loading = '';
    };

    public get has_search() {
        return this._state.search;
    }

    constructor(private _state: VisitorsStateService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('events', this._state.filtered_events.subscribe(() => this.updateMatches()));
    }

    public updateMatches() {
        this.matches = {};
        const filter = (this._state.search || '').toLowerCase();
        for (const user of this.event.attendees) {
            this.matches[user.email] =
                !filter ||
                user.email.toLowerCase().includes(filter) ||
                user.name.toLowerCase().includes(filter);
        }
    }
}
