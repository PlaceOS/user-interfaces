import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { formatDuration } from 'date-fns';

import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';
import { StaffService, User } from '@user-interfaces/users';
import { Space, SpacesService } from '@user-interfaces/spaces';
import { CateringItem } from '@user-interfaces/catering';

import { ViewCateringModalComponent } from '../../../overlays/view-catering-modal/view-catering-modal.component';
import { ViewAttendeesModalComponent } from '../../../overlays/view-attendees-modal/view-attendees-modal.component';
import { ViewRoomModalComponent } from '../../../overlays/view-room-modal/view-room-modal.component';

import * as dayjs from 'dayjs';

@Component({
    selector: 'schedule-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.scss'],
})
export class EventViewComponent extends BaseClass {
    @Input() public event: CalendarEvent;
    @Input() public form: FormGroup;

    constructor(
        private _users: StaffService,
        private _dialog: MatDialog,
        private _spaces: SpacesService
    ) {
        super();
    }

    /** Host of the event */
    public get organiser(): string {
        return this.event.creator || this._users.current.name;
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
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format('h:mm A')}`;
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

    /** Display string for the list of active spaces */
    public get spaces_dropdown(): string {
        return (
            (this.form.controls.space_list.value || []).map((space) => space.name).join(', ') ||
            'No Spaces selected'
        );
    }

    /** List of attendees associated with the event not including the host */
    public get attendees(): User[] {
        return this.event.attendees?.filter((i) => i.email !== this.event.creator) || [];
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
        const dialog_ref = this._dialog.open(ViewCateringModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { catering: this.catering_items, catering_note: this.catering_note },
        });
    }

    public showAttendees() {
        const dialog_ref = this._dialog.open(ViewAttendeesModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { attendees: this.attendees },
        });
    }

    public showSpace(item: Space) {
        const space = this._spaces.find(item.id);
        const dialog_ref = this._dialog.open(ViewRoomModalComponent, {
            width: 'auto',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { space },
        });
    }
}
