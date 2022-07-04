import { Component, Input, OnInit } from '@angular/core';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { BaseClass } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitor-event',
    template: `
        <div event class="flex items-center px-2 bg-gray-100" *ngIf="event">
            <div class="w-12 text-lg flex justify-center">
                <i
                    class="p-2 rounded-full material-icons bg-gray-400"
                    *ngIf="
                        event?.status !== 'declined' && event?.state !== 'done'
                    "
                    >event</i
                >
                <i
                    class="p-2 rounded-full material-icons bg-gray-400"
                    *ngIf="event?.status === 'declined'"
                    >close</i
                >
                <i
                    class="p-2 rounded-full material-icons bg-gray-400 opacity-40"
                    *ngIf="
                        event?.state === 'done' && event?.status !== 'declined'
                    "
                    >done</i
                >
            </div>
            <div class="w-24 p-2">
                {{
                    event?.date
                        | date: ((filters | async)?.period > 1
                                  ? 'MMM d, h:mm a'
                                  : 'shortTime')
                }}
            </div>
            <div class="w-48 p-2">
                {{ event?.organiser?.name || event?.organiser?.email }}
            </div>
            <div flex class="p-2 flex-1">{{ event?.title }}</div>
            <div class="w-64 p-2 truncate">{{ event?.location }}</div>
            <div class="w-32 py-2 flex items-center">
                <action-icon
                    checkin
                    matTooltip="Checkin All Guests"
                    [loading]="loading === 'checkin'"
                    [disabled]="guestCount <= 0"
                    content="event_available"
                    (click)="checkinGuests()"
                >
                </action-icon>
                <action-icon
                    checkout
                    matTooltip="Checkout All Guests"
                    [loading]="loading === 'checkout'"
                    [disabled]="guestCount <= 0"
                    content="event_busy"
                    (click)="checkoutGuests()"
                >
                </action-icon>
                <a
                    mat-icon-button
                    [href]="'mailto:' + event?.organiser?.email"
                    matTooltip="Email Host"
                >
                    <app-icon>email</app-icon>
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
                    <app-icon>{{
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
                    : event?.attendees.length * 3.5 + 'rem'
            "
        >
            <div
                bar
                class="absolute top-0 bg-gray-400 z-10"
                [style.height]="
                    'calc(' +
                    ((event?.attendees.length - 1) * 3.5 + 1.75) +
                    'rem + 1px)'
                "
            ></div>
            <ng-container *ngIf="show_attendees || has_search">
                <div
                    visitor
                    class="relative w-full pl-12 bg-gray-200"
                    *ngFor="let user of event?.attendees || []"
                >
                    <div l-bar class="absolute bg-gray-400"></div>
                    <visitor-details
                        [attr.disabled]="!matches[user.email]"
                        [visitor]="user"
                        [(event)]="event"
                    ></visitor-details>
                </div>
            </ng-container>
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

            [disabled='true'] {
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
    public readonly filters = this._state.filters;

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

    public get guestCount() {
        return (
            this.event?.attendees.reduce(
                (c, u) => c + (u.is_external && !u.organizer ? 1 : 0),
                0
            ) || 0
        );
    }

    public get has_search() {
        return this._state.search;
    }

    constructor(private _state: VisitorsStateService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'events',
            this._state.filtered_events.subscribe(() => this.updateMatches())
        );
    }

    public updateMatches() {
        if (!this.event) return;
        this.matches = {};
        const filter = (this._state.search || '').toLowerCase();
        for (const user of this.event?.attendees || []) {
            this.matches[user.email] =
                !filter ||
                user.email.toLowerCase().includes(filter) ||
                user.name.toLowerCase().includes(filter);
        }
    }
}
