import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass, Identity, SettingsService, unique } from '@user-interfaces/common';
import { NewUserModalComponent } from '@user-interfaces/users';

@Component({
    selector: 'a-booking-form',
    templateUrl: './booking-form.component.html',
    styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent extends BaseClass {
    /** Form fields for booking */
    @Input() public form: FormGroup;

    constructor(private _settings: SettingsService, private _dialog: MatDialog) {
        super();
    }

    /** Display string for the recurrence value of the booking */
    public get recurrence(): string {
        return 'No Recurrence';
    }

    /** Display string for the catering value of the booking */
    public get catering() {
        return 'No Catering';
    }

    /** Whether notes and description should use the HTML editor */
    public get use_html(): boolean {
        return this._settings.get('app.booking.html_body') || false;
    }

    /** List of available types for bookings */
    public get booking_types(): Identity[] {
        return this._settings.get('app.booking.booking_types') || [];
    }

    /** Display string for the list of active spaces */
    public get spaces(): string {
        return (
            (this.form.controls.space_list.value || []).map(space => space.name).join(', ') ||
            'No Spaces selected'
        );
    }

    /**
     * Open modal to change the space details for the booking
     */
    public openSpacesModal(): void {
        console.log('Open Spaces Modal');
    }

    /**
     * Open modal to change the recurrence details for the booking
     */
    public openRecurrenceModal() {
        console.log('Open Recurrence Modal');
    }

    /**
     * Open modal to change the recurrence details for the booking
     */
    public openCateringModal() {
        console.log('Open Catering Modal');
    }

    /**
     * Open modal to change the recurrence details for the booking
     */
    public openNewUserModal() {
        const ref = this._dialog.open<NewUserModalComponent>(NewUserModalComponent, {
            width: 'auto',
            height: 'auto'
        });
        this.subscription(
            'new_user',
            ref.componentInstance.event.subscribe(event => {
                if (event.reason === 'done') {
                    const attendees = this.form.controls.attendees.value || [];
                    attendees.push(event.metadata);
                    this.form.controls.attendees.setValue(unique(attendees, 'email'));
                    ref.close();
                    this.unsub('new_user');
                }
            })
        );
    }
}
