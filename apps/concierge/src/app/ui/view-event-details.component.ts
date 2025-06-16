import { Component, Input } from '@angular/core';
import { addMinutes, format } from 'date-fns';

import { SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'view-event-details',
    template: `
        <div
            class="fixed inset-0 bg-neutral bg-opacity-30"
            (click)="close()"
        ></div>
        <div
            name="panel"
            class="absolute flex flex-col rounded bg-base-100 shadow"
            (click)="$event.stopPropagation()"
        >
            <div class="flex-1 overflow-auto p-4">
                <h3 class="mb-1 pl-6">
                    {{ event.organiser?.name || event.host }}
                </h3>
                <div class="text-bold mb-4 pl-6 opacity-60">
                    {{ event.date | date: 'fullDate' }}
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">title</icon>
                    <span class="opacity-60">{{ event.title }}</span>
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">schedule</icon>
                    <span class="opacity-60">{{ time }}</span>
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">people</icon>
                    <span class="opacity-60"
                        >{{ event.attendees.length }} Attendee{{
                            event.attendees.length === 1 ? '' : 's'
                        }}</span
                    >
                </div>
                <div class="mb-2 flex flex-col">
                    @for (user of event.attendees; track user) {
                        <div
                            class="mb-1 flex items-center rounded pl-6 hover:bg-base-200"
                        >
                            <a-user-avatar
                                class="pr-2 text-sm"
                                [user]="user"
                            ></a-user-avatar>
                            <div class="flex flex-col">
                                <div class="text-sm opacity-80">
                                    {{
                                        user.name ||
                                            user.first_name +
                                                ' ' +
                                                user.last_name
                                    }}
                                </div>
                                <div class="text-xs opacity-50">
                                    {{ user.email }}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div class="mb-2 flex items-center">
                    <icon class="mr-1">place</icon>
                    <span class="opacity-60"
                        >{{ building.display_name || building.name }},
                        {{
                            (space_id | space | async)?.display_name ||
                                (space_id | space | async)?.name
                        }}</span
                    >
                </div>
                <div class="flex items-center">
                    <icon class="mr-1">format_align_left</icon>
                    <span class="opacity-60">Notes</span>
                </div>
                <div class="mb-2 flex items-center pl-6">
                    <span
                        class="opacity-60"
                        [innerHTML]="
                            event.body || '&lt; No notes &gt;' | sanitize
                        "
                    ></span>
                </div>
            </div>
            @if (!is_delegated) {
                <div
                    name="actions"
                    class="justify-content flex items-center space-x-4 p-4"
                >
                    <button
                        class="inverse flex-1"
                        btn
                        matRipple
                        (click)="remove()"
                    >
                        Remove Booking
                    </button>
                    <button class="flex-1" btn matRipple (click)="edit()">
                        Edit Booking
                    </button>
                </div>
            }
            <button name="close" icon matRipple (click)="close()">
                <icon>close</icon>
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
    standalone: false,
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
        private _org: OrganisationService,
    ) {}
}
