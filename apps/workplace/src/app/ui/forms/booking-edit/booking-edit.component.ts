import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass, SettingsService } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';

import {
    SpaceSelectModalComponent,
    SpaceSelectModalData,
} from '../../../overlays/space-select-modal/space-select-modal.component';
import { ViewCateringModalComponent } from '../../../overlays/view-catering-modal/view-catering-modal.component';
import { ViewAttendeesModalComponent } from '../../../overlays/view-attendees-modal/view-attendees-modal.component';

@Component({
    selector: 'booking-edit',
    templateUrl: './booking-edit.component.html',
    styleUrls: ['./booking-edit.component.scss'],
})
export class BookingEditComponent extends BaseClass implements OnInit {
    @Input() public form: FormGroup;
    @Input() public event: CalendarEvent;

    constructor(private _dialog: MatDialog, private _settings: SettingsService) {
        super();
    }

    public ngOnInit() {
        if (!this.form) {
            this.timeout('init', this.ngOnInit);
            return;
        }
        if (this.form.controls.space_list) {
        }
    }

    private get space_list() {
        if (this.form && this.form.controls && this.form.controls.space_list) {
            return this.form.controls.space_list.value || [];
        }
        return [];
    }

    public get selectedSpace(): string {
        if (this.space_list.length) {
            return this.space_list[0].name;
        }
        return 'No space selected';
    }

    public get link() {
        return this.event.meeting_link;
    }

    public get catering_item_total() {
        const order = this.event.catering[0];
        return order ? order.item_count : 0;
    }

    /**
     * Open modal to change the space details for the booking
     */
    public openSpacesModal(): void {
        const ref = this._dialog.open<SpaceSelectModalComponent, SpaceSelectModalData>(
            SpaceSelectModalComponent,
            {
                width: '32em',
                maxWidth: '95vw',
                maxHeight: '95vh',
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
                ref.close();
            })
        );
    }

    /** Whether notes and description should use the HTML editor */
    public get use_html(): boolean {
        return this._settings.get('app.booking.html_body') || false;
    }

    public showCatering() {
        const dialog_ref = this._dialog.open(ViewCateringModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { catering: this.event.catering, catering_note: '' },
        });
    }

    public showAttendees() {
        const dialog_ref = this._dialog.open(ViewAttendeesModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { attendees: this.event.attendees },
        });
    }
}
