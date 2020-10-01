import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Space } from 'src/app/spaces/space.class';
import { ViewRoomModalComponent } from '../../../../overlays/view-room-modal/view-room-modal.component';
import { roomConfigBuilder, RoomConfiguration } from 'src/app/common/room-configuration.interface';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { StaffService } from 'src/app/users/staff.service';
import { SpacesService } from 'src/app/spaces/spaces.service';
import { log } from 'src/app/common/general';
import { SettingsService } from 'src/app/common/settings.service';
import { rulesForSpace } from 'src/app/bookings/booking.utilities';

@Component({
    selector: 'a-booking-space-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class BookingSpaceItemComponent {
    /** Space to display */
    @Input() public space: Space;
    /** Form field for booking */
    @Input() public form: FormGroup;
    /** Whether multiple spaces are able to be selected */
    @Input() public multi: boolean;
    /** Emitter for select actions on the */
    @Output() public select = new EventEmitter<void>();

    /** Whether space image should be displayed */
    public get show_image() {
        return this._settings.get('app.space_display.show_images');
    }

    /** Whether this space is selected */
    public get selected(): boolean {
        const field = this.form.controls.resources;
        return field && !!(field.value || []).find((space) => space.id === this.space.id);
    }

    /** Display location of the space */
    public get location(): string {
        if (!this.space) {
            log('info', 'no space for location');
            return '';
        }
        return this.space.level?.display_name || this.space.level?.name;
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _space: SpacesService,
        private _staff: StaffService,
        private _settings: SettingsService
    ) {}

    /**
     * Open the modal to show the location of a space
     * @param space Space to show the location
     */
    public locate() {
        // Find space from system to get map_id
        const space = this._space.find(this.space.id) || this.space;
        this._dialog.open(ViewRoomModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { space },
        });
    }

    public get features(): string {
        return this.space && this.space.feature_list ? this.space.feature_list.join(', ') : '';
    }

    public get configs(): RoomConfiguration[] {
        return roomConfigBuilder(this._org.available_room_configs, [...this.space.configurations]);
    }

    public get room_type(): string {
        const booking_rules = this._org.buildingSettings(this.space.level.parent_id).details
            ?.booking_rules;
        const { date, all_day, duration, visitor_type } = this.form.value;
        const rules = rulesForSpace({
            time: date,
            duration: all_day ? 24 * 60 : duration,
            visitor_type,
            user: this._staff.current,
            rules: booking_rules,
            space: this.space
        });
        return rules.room_type;
    }
}
