import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass, Identity, RoomConfiguration, SettingsService, unique } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { NewUserModalComponent } from '@user-interfaces/users';
import {
    SpaceSelectModalComponent,
    SpaceSelectModalData,
} from '@user-interfaces/spaces';

@Component({
    selector: 'a-booking-form',
    templateUrl: './booking-form.component.html',
    styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent extends BaseClass implements OnInit {
    /** Form fields for booking */
    @Input() public form: FormGroup;

    public available_configs: RoomConfiguration[] = [];

    public get catering_allowed() {
        return this.form.controls.visitor_type?.value === 'client';
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        if (!this.form) {
            this.timeout('init', this.ngOnInit);
            return;
        }
        this.setBuildingOptions();
    }

    private setBuildingOptions() {
        this.available_configs = this._org.available_room_configs;
        console.log('available_configs', this.available_configs);
    }

    /** Display string for the recurrence value of the booking */
    public get recurrence(): string {
        return 'No Recurrence';
    }

    /** Display string for the catering value of the booking */
    public get catering() {
        return 'No Catering';
    }

    public get configuration(): RoomConfiguration | null {
        if (
            this.form &&
            this.form.controls.configuration &&
            this.form.controls.configuration.value
        ) {
            return this.available_configs.find(
                (f) => f.id === this.form.controls.configuration.value
            );
        }
        return null;
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
            (this.form.controls.space_list.value || []).map((space) => space.name).join(', ') ||
            'No Spaces selected'
        );
    }

    /**
     * Open modal to change the space details for the booking
     */
    public openSpacesModal(): void {
        const ref = this._dialog.open<SpaceSelectModalComponent, SpaceSelectModalData>(
            SpaceSelectModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    spaces: this.form.controls.space_list.value,
                    date: this.form.controls.date.value,
                    duration: this.form.controls.duration.value,
                },
            }
        );
        this.subscription(
            'change_spaces',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.form.controls.space_list.setValue([...ref.componentInstance.spaces]);
                    this.unsub('change_spaces');
                }
            })
        );
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
            height: 'auto',
        });
        this.subscription(
            'new_user',
            ref.componentInstance.event.subscribe((event) => {
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
