import { Component, Input } from '@angular/core';
import { format, addMinutes } from 'date-fns';

import { CalendarEvent } from '@placeos/events';
import { SpacesService } from '@placeos/spaces';
import { EventsStateService } from '../day-view/events-state.service';
import { OrganisationService } from '@placeos/organisation';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'view-event-details',
    template: `
        <div
            class="fixed inset-0 bg-neutral bg-opacity-30"
            (click)="close()"
        ></div>
        <div
            name="panel"
            class="absolute rounded shadow flex flex-col bg-base-100"
            (click)="$event.stopPropagation()"
        >
            <div class="p-4 overflow-auto flex-1">
                <h3 class="pl-6 mb-1">
                    {{ event.organiser?.name || event.host }}
                </h3>
                <div class="text-bold mb-4 pl-6 opacity-60">
                    {{ event.date | date: 'fullDate' }}
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1">title</app-icon>
                    <span class="opacity-60">{{ event.title }}</span>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1">schedule</app-icon>
                    <span class="opacity-60">{{ time }}</span>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1">people</app-icon>
                    <span class="opacity-60"
                        >{{ event.attendees.length }} Attendee{{
                            event.attendees.length === 1 ? '' : 's'
                        }}</span
                    >
                </div>
                <div class="flex flex-col mb-2">
                    <div
                        class="flex items-center pl-6 mb-1 hover:bg-base-200 rounded"
                        *ngFor="let user of event.attendees"
                    >
                        <a-user-avatar
                            class="text-sm pr-2"
                            [user]="user"
                        ></a-user-avatar>
                        <div class="flex flex-col">
                            <div class="text-sm opacity-80">
                                {{
                                    user.name ||
                                        user.first_name + ' ' + user.last_name
                                }}
                            </div>
                            <div class="text-xs opacity-50">
                                {{ user.email }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1">place</app-icon>
                    <span class="opacity-60"
                        >{{ building.display_name || building.name }},
                        {{
                            (space_id | space | async)?.display_name ||
                                (space_id | space | async)?.name
                        }}</span
                    >
                </div>
                <div class="flex items-center">
                    <app-icon class="mr-1">format_align_left</app-icon>
                    <span class="opacity-60">Notes</span>
                </div>
                <div class="flex items-center pl-6 mb-2">
                    <span
                        class="opacity-60"
                        [innerHTML]="
                            event.body || '&lt; No notes &gt;' | sanitize
                        "
                    ></span>
                </div>
            </div>
            <div
                name="actions"
                *ngIf="!is_delegated"
                class="flex items-center justify-content p-4 space-x-4"
            >
                <button class="flex-1 inverse" btn matRipple (click)="remove()">
                    Remove Booking
                </button>
                <button class="flex-1" btn matRipple (click)="edit()">
                    Edit Booking
                </button>
            </div>
            <button name="close" icon matRipple (click)="close()">
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                z-index: 999;
            }

            [name='panel'] {
                padding-top: 0;
                width: 26em;
                left: 50%;
                top: 6.5em;
                transform: translateX(-50%);
                max-height: 80vh;
            }

            [name='actions'] {
                border-top: 1px solid #ccc;
            }

            [name='close'] {
                position: absolute;
                top: 0.25em;
                right: 0.25em;
            }
        `,
    ],
})
export class ViewEventDetailsComponent {
    /** Event to display */
    @Input() public event: CalendarEvent;
    /** Close displayed event */
    public readonly close = () => this._state.setEvent(null);

    public readonly edit = () => this._state.newBooking(this.event);

    public readonly remove = async () => {
        const close = await this._state.removeBooking(this.event);
        if (close) this.close();
    };

    public get building() {
        return this._org.building;
    }

    public get space_id() {
        return (
            this.event?.resources[0]?.id ||
            this.event?.space?.id ||
            this.event?.system?.id
        );
    }

    public get time() {
        const date = new Date(this.event.date);
        return (
            format(date, this.time_format) +
            ' - ' +
            format(addMinutes(date, this.event.duration), this.time_format)
        );
    }

    public get is_delegated() {
        return this._settings.get('app.delegated');
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: EventsStateService,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}
}
