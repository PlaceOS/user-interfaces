import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
    currentUser,
    DialogEvent,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { first, map } from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Desk } from 'libs/organisation/src/lib/desk.class';
import { StaffUser, User } from 'libs/users/src/lib/user.class';

import { queryBookings, saveBooking } from './bookings.fn';
import { DeskConfirmModalComponent } from './desk-confirm-modal.component';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';

@Injectable({
    providedIn: 'root',
})
export class DesksService {
    public can_set_date = true;
    public error_on_host = true;

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public async bookDesk({
        desks,
        host,
        reason,
        attendees,
        date,
    }: {
        desks: Desk[];
        host?: StaffUser;
        attendees?: User[];
        reason?: string;
        date?: Date;
    }) {
        if (this.error_on_host && !host) {
            return notifyError('You need to select a host to book a desk.');
        } else {
            host = host || currentUser();
        }
        reason = reason || '';
        const level = this._org.levelWithID(
            desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]
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
                host,
                desks,
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
        host = ref.componentInstance.host || host;
        date = ref.componentInstance.date || date;
        reason = ref.componentInstance.reason || reason;
        if (!host) {
            ref.close();
            return notifyError('You need to select a host to book a desk. ');
        }
        ref.componentInstance.loading =
            'Checking for existing desk bookings...';
        const bookings = await queryBookings({
            type: 'desk',
            period_start: getUnixTime(startOfDay(date || new Date())),
            period_end: getUnixTime(endOfDay(date || new Date())),
        }).toPromise();
        const desk_list = bookings.filter(
            (d) => d.user_email.toLowerCase() === host.email.toLowerCase()
        );
        if (desk_list?.length) {
            ref.close();
            return notifyError(
                'You currently already have a desk booked for the selected date.'
            );
        }
        ref.componentInstance.loading = 'Booking desk...';
        const users = [host, ...(attendees || [])];
        await Promise.all([
            desks.map((desk, idx) =>
                this.makeDeskBooking(
                    desk,
                    host,
                    date.valueOf() || new Date().valueOf(),
                    reason,
                    users[idx]
                )
            ),
        ]);
        notifySuccess('Successfully booked desk');
        ref.close();
        return true;
    }

    private async makeDeskBooking(
        desk: Desk,
        host: StaffUser,
        date: number,
        reason: string,
        for_user: User = null
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
            user_id: for_user?.id || host.id,
            user_name: for_user?.name || host.name,
            user_email: for_user?.email || host.email,
            booking_end: Math.floor(endOfDay(date).valueOf() / 1000),
            asset_id: desk.id,
            asset_name: desk.name,
            title: reason,
            description: location,
            zones,
            booking_type: 'desk',
            extension_data: {
                map_id: desk?.map_id || desk?.id,
                groups: desk.groups,
                for_user: for_user?.email,
            },
        };
        return saveBooking(booking_data as any).toPromise();
    }
}
