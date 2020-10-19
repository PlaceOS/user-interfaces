import { Component, Input } from '@angular/core';
import { format, addMinutes } from 'date-fns';

import { CalendarEvent } from '@user-interfaces/events';
import { SpacesService } from '@user-interfaces/spaces';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'dayview-event-details',
    template: `
        <div class="fixed inset-0" (click)="close()"></div>
        <div name="panel" class="absolute rounded shadow flex flex-col" (click)="$event.stopPropagation()">
            <div class="p-4 overflow-auto flex-1">
                <h3 class="mb-0 pl-6 mb-1">{{ event.organiser.name || event.host }}</h3>
                <div class="text-bold mb-4 pl-6 text-dark-fade">{{ event.date | date:'fullDate' }}</div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'title' }"></app-icon>
                    <span class="text-dark-fade">{{ event.title }}</span>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                    <span class="text-dark-fade">{{ time }}</span>
                </div>
                <div class="flex items-center">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                    <span class="text-dark-fade">{{ event.attendees.length }} Attendee{{ event.attendees.length === 1 ? '' : 's' }}</span>
                </div>
                <div class="flex flex-col mb-2">
                    <div class="flex items-center pl-6 mb-1" *ngFor="let user of event.attendees">
                        <a-user-avatar class="text-sm pr-2" [user]="user"></a-user-avatar>
                        <span>{{ user.name || (user.first_name + ' ' + user.last_name) }}</span>
                    </div>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'place' }"></app-icon>
                    <span class="text-dark-fade">{{ location }}</span>
                </div>
                <div class="flex items-center">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'format_align_left' }"></app-icon>
                    <span class="text-dark-fade">Notes</span>
                </div>
                <div class="flex items-center pl-6 mb-2">
                    <span class="text-dark-fade" [innerHTML]="(event.body || '&lt; No notes &gt;') | sanitize"></span>
                </div>
            </div>
            <div name="actions" class="flex items-center justify-content p-4 space-x-4">
                <button class="flex-1 inverse" mat-button>Remove Booking</button>
                <button class="flex-1" mat-button>Edit Booking</button>
            </div>
            <button name="close" mat-icon-button (click)="close()">
                <app-icon [icon]="{ class: 'material-icons', content: 'close' }"></app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                z-index: 999;
            }

            [name="panel"] {
                padding-top: 0;
                width: 26em;
                left: 50%;
                top: 6.5em;
                transform: translateX(-50%);
                background-color: #fff;
                max-height: 80vh;
            }

            [name="actions"] {
                border-top: 1px solid #ccc;
            }

            [name="close"] {
                position: absolute;
                top: .25em;
                right: .25em;
            }
        `,
    ],
})
export class DayviewEventDetailsComponent {
    /** Event to display */
    @Input() public event: CalendarEvent;
    /** Close displayed event */
    public readonly close = () => this._state.setEvent(null);

    public get location() {
        const space = this._spaces.find(this.event.resources[0].id);
        return `${space.level.display_name || space.level.name}, ${space.display_name || space.name}`;
    }

    public get time() {
        const date = new Date(this.event.date);
        return (
            format(date, 'h:mm a') + ' - ' + format(addMinutes(date, this.event.duration), 'h:mm a')
        );
    }

    constructor(private _state: EventsStateService, private _spaces: SpacesService) { }
}
