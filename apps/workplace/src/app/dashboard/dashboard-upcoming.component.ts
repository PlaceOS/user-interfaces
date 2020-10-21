import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Space } from '@user-interfaces/spaces';

import { ViewRoomModalComponent } from '../overlays/view-room-modal/view-room-modal.component';
import { DashboardStateService } from './dashboard-state.service';

@Component({
    selector: 'dashboard-upcoming',
    template: `
        <h3 class="m-0 mb-4 font-medium text-xl">Today's Events</h3>
        <div
            name="event"
            *ngFor="let event of upcoming_events | async | slice: 0:3"
            class="flex bg-white rounded-lg relative overflow-hidden mb-4"
        >
            <div name="status" class="absolute rounded-lg"></div>
            <div name="details" class="flex-1 mr-2">
                <div name="time" class="text-sm text-bold mb-2">{{ event.time_period }}</div>
                <div name="title" class="text-sm text-bold mb-2">{{ event.title }}</div>
                <div name="space" class="text-xs flex items-center mb-2">
                    <app-icon
                        class="mr-2"
                        [icon]="{ class: 'material-icons', content: 'room' }"
                    ></app-icon>
                    <a
                        class="text-black"
                        [class.underline]="!!event.space"
                        [matTooltip]="event.space ? 'Locate Space' : ''"
                        (click)="event.space ? locateSpace(event.space) : ''"
                    >
                        {{
                            event.space?.display_name || event.space?.name || '&lt;No Location&gt;'
                        }}
                        {{
                            event.space?.level?.display_name || event.space?.level?.name
                                ? ', ' + event.space.level.display_name || event.space.level.name
                                : ''
                        }}
                    </a>
                </div>
                <div name="attendees" class="text-xs flex items-center mb-2">
                    <app-icon
                        class="mr-2"
                        [icon]="{ class: 'material-icons', content: 'group' }"
                    ></app-icon>
                    {{ event.guests.length }} Guest{{ event.guests.length === 1 ? '' : 's' }}
                </div>
                <div name="guests" class="flex space-x-2 text-sm">
                    <a-user-avatar
                        *ngFor="let guest of event.guests"
                        [user]="guest"
                    ></a-user-avatar>
                </div>
            </div>
            <a button mat-button *ngIf="event.meeting_link" class="uppercase h-12" [href]="event.meeting_link">Join Call</a>
        </div>
        <p *ngIf="!(upcoming_events | async).length" class="text-dark-fade text-center w-full">
            No upcoming events for today
        </p>
    `,
    styles: [
        `
            :host {
                padding: 1em;
                min-width: 16rem;
            }

            [name='time'] {
                color: #00529b;
            }

            [name='event'] {
                padding: 1rem 1rem 1rem 2rem;
            }

            [name='status'] {
                top: 1rem;
                left: -0.8rem;
                height: 2.5rem;
                width: 1.6rem;
                background-color: #00529b;
            }

            button {
                height: 3em;
            }

            app-icon {
                margin-left: -0.25rem;
            }
        `,
    ],
})
export class DashboardUpcomingComponent {
    public readonly upcoming_events = this._state.upcoming_events;

    constructor(private _state: DashboardStateService, private _dialog: MatDialog) {}

    public ngOnInit() {
        this._state.pollUpcomingEvents();
    }

    public ngOnDestroy() {
        this._state.stopPollingUpcomingEvents();
    }

    public locateSpace(space: Space) {
        this._dialog.open(ViewRoomModalComponent, { data: { space } });
    }
}
