import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { formatDuration } from 'date-fns';

import { CateringItem } from '@user-interfaces/catering';
import { BaseClass, currentUser } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';
import { Space, SpacesService } from '@user-interfaces/spaces';
import { User } from '@user-interfaces/users';

import { ViewAttendeesModalComponent } from '../../overlays/view-attendees-modal/view-attendees-modal.component';
import { ViewCateringModalComponent } from '../../overlays/view-catering-modal/view-catering-modal.component';
import { ViewRoomModalComponent } from '../../overlays/view-room-modal.component';
import { ScheduleStateService } from '../schedule-state.service';

import * as dayjs from 'dayjs';

@Component({
    selector: 'schedule-event-details',
    template: `
        <div *ngIf="!editing; else edit_state">
            <div class="flex flex-col items-center mb-4">
                <div class="text-xl capitalize mb-2 font-medium">
                    {{ event?.title || 'No Title' }}
                </div>
            </div>
            <div
                class="rounded py-4 bg-white border-gray-300 shadow space-y-4 w-full text-lg"
            >
                <div class="flex items-center space-x-2 px-3">
                    <app-icon class="text-2xl">perm_identity</app-icon>
                    <div class="flex-1">{{ event?.organiser?.name }}</div>
                </div>
                <hr class="ml-12" />
                <div class="flex items-center space-x-2 px-3">
                    <app-icon class="text-2xl">schedule</app-icon>
                    <div class="flex-1">{{ when }}</div>
                </div>
                <hr class="ml-12" />
                <div
                    class="flex items-center space-x-2 px-3"
                    *ngIf="spaces && spaces.length"
                >
                    <app-icon class="text-2xl">place</app-icon>
                    <div class="flex flex-col" *ngIf="event.type === 'event'">
                        <div class="flex" *ngFor="let item of spaces">
                            <label class="flex-1 w-1/2">{{
                                item?.name || 'No location'
                            }}</label>
                            <button
                                mat-button
                                class="clear underline"
                                *ngIf="item?.map_id"
                                (click)="showSpace(item)"
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="ml-12" *ngIf="spaces && spaces.length" />
                <div
                    class="flex items-center space-x-2 px-3"
                    *ngIf="attendees?.length"
                >
                    <app-icon class="text-2xl">people_outline</app-icon>
                    <div class="flex-1 flex items-center">
                        <p class="flex-1 w-1/2">
                            {{ attendees.length }} Attendees
                        </p>
                        <button
                            mat-button
                            class="clear underline"
                            *ngIf="attendees.length > 0"
                            (click)="showAttendees()"
                        >
                            View
                        </button>
                    </div>
                </div>
                <hr class="ml-12" *ngIf="attendees?.length" />
                <div class="flex items-center space-x-2 px-3" *ngIf="link">
                    <app-icon class="text-2xl">screen_share</app-icon>
                    <div class="flex-1">
                        <a class="underline" href="{{ link }}" target="blank">{{
                            link
                        }}</a>
                    </div>
                </div>
                <hr class="ml-12" *ngIf="link" />
                <div class="flex space-x-2 px-3" *ngIf="catering_items?.length">
                    <app-icon class="text-2xl">people_outline</app-icon>
                    <div class="flex-1 flex items-center">
                        <p class="flex-1 w-1/2">Catered</p>
                        <button
                            mat-button
                            class="clear underline"
                            (click)="showCatering()"
                        >
                            View
                        </button>
                    </div>
                </div>
                <hr class="ml-12" *ngIf="catering_items?.length" />
                <div class="flex space-x-2 px-3" *ngIf="body">
                    <app-icon class="text-2xl">subject</app-icon>
                    <div class="flex flex-col" [innerHTML]="body"></div>
                </div>
                <hr class="ml-12" *ngIf="body" />
                <div class="flex items-center space-x-2 px-4">
                    <!-- <button (click)="editEvent()" class="flex-1" mat-button>
                        Edit
                    </button> -->
                    <button
                        (click)="duplicateEvent()"
                        class="flex-1 inverse"
                        mat-button
                    >
                        Duplicate
                    </button>
                    <button
                        (click)="deleteEvent()"
                        class="flex-1 error"
                        mat-button
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <ng-template #edit_state>
            <schedule-event-edit [event]="event"></schedule-event-edit>
        </ng-template>
    `,
    styles: [
        `
            :host > div {
                margin: auto;
                width: 640px;
                max-width: 100vw;
                padding: 1rem;
            }
        `,
    ],
})
export class EventDetailsComponent extends BaseClass {
    @Input() public event: CalendarEvent;

    public editing = false;

    public readonly deleteEvent = () => this._state.deleteEvent();
    public readonly duplicateEvent = () => this._state.duplicateEvent();
    public readonly editEvent = () => this.editing = true;

    constructor(
        private _dialog: MatDialog,
        private _spaces: SpacesService,
        private _state: ScheduleStateService
    ) {
        super();
    }

    /** Host of the event */
    public get organiser(): string {
        return this.event.creator || currentUser().name;
    }

    /** Display string of when the event will occur */
    public get when(): string {
        if (!this.event) {
            return 'Unable to determine.';
        }
        const date = dayjs(this.event.date);
        const end = date.add(this.event.duration || 60, 'm');
        if (this.event.all_day || this.event.duration > 23 * 60) {
            return `${date.format('DD MMM YYYY')} - All Day`;
        } else {
            if (date.isSame(end, 'd')) {
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format(
                    'h:mm A'
                )}`;
            } else {
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format(
                    'DD MMM YYYY, h:mm A'
                )}`;
            }
        }
    }

    /** Display string for the event's duration */
    public get duration(): string {
        return formatDuration({ minutes: this.event.duration || 60 });
    }

    /** Display catering items */
    public get catering_items(): CateringItem[] {
        if (!this.event.catering?.length) {
            return;
        }
        const order = this.event.catering[0];
        return order ? [...order.items] : [];
    }

    public get catering_note(): string {
        // return this.event.catering_notes;
        // TODO
        return '';
    }

    /** List of spaces associated with the event */
    public get spaces(): Space[] {
        if (!this.event.resources?.length) {
            return [];
        }
        return this.event.resources.map((i) => this._spaces.find(i.email));
    }

    /** List of attendees associated with the event not including the host */
    public get attendees(): User[] {
        return (
            this.event.attendees?.filter(
                (i) => i.email !== this.event.creator
            ) || []
        );
    }

    /** Display string for meeting link */
    public get link(): string {
        return this.event.meeting_link;
    }

    /** Display string for notes */
    public get body(): string {
        return this.event.body;
    }

    public showCatering() {
        this._dialog.open(ViewCateringModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: {
                catering: this.catering_items,
                catering_note: this.catering_note,
            },
        });
    }

    public showAttendees() {
        this._dialog.open(ViewAttendeesModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { attendees: this.attendees },
        });
    }

    public showSpace(item: Space) {
        const space = this._spaces.find(item.id);
        this._dialog.open(ViewRoomModalComponent, {
            width: 'auto',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { space },
        });
    }
}
