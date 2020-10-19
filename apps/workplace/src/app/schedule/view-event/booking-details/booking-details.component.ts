import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass } from '@user-interfaces/common';
import { Booking } from '@user-interfaces/bookings';
import { EventsService } from '@user-interfaces/events';
import { ConfirmModalComponent } from '@user-interfaces/components';
import { Space } from '@user-interfaces/spaces';

import { ViewRoomModalComponent } from '../../../overlays/view-room-modal/view-room-modal.component';

import * as dayjs from 'dayjs';

@Component({
    selector: 'schedule-booking-details',
    templateUrl: './booking-details.component.html',
    styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent extends BaseClass {
    /** Booking desk to display */
    @Input() public item: Booking;
    /** Emitter for changes to the loading state */
    @Output() public loading = new EventEmitter();

    constructor(
        private _dialog: MatDialog,
        private _router: Router,
        private _events: EventsService
    ) {
        super();
    }

    /** Display string of when the event will occur */
    public get when(): string {
        if (!this.item) {
            return 'Unable to determine.';
        }
        const date = dayjs(this.item.date);
        const end = date.add(this.item.duration || 60, 'm');
        if (this.item.all_day || this.item.duration > 23 * 60) {
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

    public cancel() {
        this.confirmDelete();
    }

    public showSpace(): void {
        const space = new Space({
            name: 'Desk Booking',
            map_id: this.item.asset_id,
            zones: this.item.zones,
        });
        if (!space.level) {
            // this._service.notifyInfo('The space cannot be located.');
        }
        const dialog_ref = this._dialog.open(ViewRoomModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { space },
        });
    }

    private confirmDelete() {
        const dialog_ref = this._dialog.open(ConfirmModalComponent, {
            data: {
                title: 'Cancel Meeting',
                content: `Are you sure you want to cancel this desk booking ?`,
                okText: `I'm sure`,
                cancelText: 'No',
            },
        });
        dialog_ref.afterClosed().subscribe((evt) => {
            if (evt) {
                this.deleteBooking();
            }
        });
    }

    public async deleteBooking() {
        this.loading.emit('Cancelling booking...');
        await this._events.delete(this.item.id)
            .then(() => {
                // this._service.notifySuccess('Booking was successfuly deleted.');
            })
            .catch(() => {
                // this._service.notifyError('Booking could not be deleted.');
            });
        this._router.navigate(['schedule']);
        this.loading.emit('');
    }
}
