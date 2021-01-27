import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
    currentUser,
    DialogEvent,
    notifyError,
    notifySuccess,
} from '@user-interfaces/common';
import { Desk, OrganisationService } from '@user-interfaces/organisation';
import { StaffUser } from '@user-interfaces/users';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { first, map } from 'rxjs/operators';

import { queryBookings, saveBooking } from './bookings.fn';
import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DesksService {

    public can_set_date: boolean = true;
    public error_on_host: boolean = true;

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public async bookDesk({
        desk,
        host,
        reason,
        date,
    }: {
        desk: Desk;
        host?: StaffUser;
        reason?: string;
        date?: Date;
    }) {
        if (this.error_on_host && !host) {
            return notifyError('You need to select a host to book a desk.')
        }
        host = host || currentUser();
        reason = reason || '';
        const level = this._org.levelWithID(
            desk.zone instanceof Array ? desk.zone : [desk.zone?.id]
        );
        let ref: MatDialogRef<any> = this._dialog.open(
            DeskQuestionsModalComponent
        );
        let success = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_: DialogEvent) => _.reason === 'done'))
                .toPromise(),
            ref
                .afterClosed()
                .pipe(map((_) => null))
                .toPromise(),
        ]);
        if (!success) return;
        ref.close();
        ref = this._dialog.open(DeskConfirmModalComponent, {
            data: {
                desk,
                date: date ? new Date(date) : new Date(),
                reason,
                level,
                can_set_date: this.can_set_date,
            },
        });
        success = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_: DialogEvent) => _.reason === 'done'))
                .toPromise(),
            ref
                .afterClosed()
                .pipe(map((_) => null))
                .toPromise(),
        ]);
        if (!success) return;
        date = ref.componentInstance.date;
        ref.componentInstance.loading =
            'Checking for existing desk bookings...';
        const bookings = await queryBookings({
            type: 'desk',
            period_start: getUnixTime(startOfDay(date || new Date())),
            period_end: getUnixTime(endOfDay(date || new Date())),
        }).toPromise();
        const desks = bookings.filter(
            (d) => d.user_email.toLowerCase() === host.email.toLowerCase()
        );
        if (desks?.length) {
            ref.close();
            return notifyError(
                'You currently already have a desk booked for the selected date.'
            );
        }
        ref.componentInstance.loading = 'Booking desk...';
        await this.makeDeskBooking(
            desk,
            host,
            date.valueOf() || new Date().valueOf(),
            reason
        );
        notifySuccess('Successfully booked desk');
        ref.close();
        return true;
    }

    private async makeDeskBooking(
        desk: Desk,
        host: StaffUser,
        date: number,
        reason: string
    ) {
        const location = `${desk.zone?.name}-${desk.id}`;
        const level = this._org.levelWithID(
            desk.zone instanceof Array ? desk.zone : [desk.zone?.id]
        );
        const zones = desk.zone?.id
            ? [desk.zone?.id, level?.parent_id]
            : [level?.parent_id];
        const booking_data = {
            booking_start: getUnixTime(startOfDay(date)),
            user_id: host.id,
            user_name: host.name,
            user_email: host.email,
            booking_end: Math.floor(endOfDay(date).valueOf() / 1000),
            asset_id: desk.id,
            title: reason,
            description: location,
            zones,
            booking_type: 'desk',
            extension_data: {
                group: desk.group,
            },
        };
        return saveBooking(booking_data as any).toPromise();
    }
}
