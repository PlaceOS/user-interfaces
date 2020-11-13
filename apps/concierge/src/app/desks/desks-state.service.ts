import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    first,
    map,
    share,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { endOfDay, startOfDay } from 'date-fns';

import { Booking, BookingsService } from '@user-interfaces/bookings';
import { BaseClass, notifyError, notifyInfo, notifySuccess } from '@user-interfaces/common';
import { showMetadata } from '@placeos/ts-client';
import { Desk, OrganisationService } from '@user-interfaces/organisation';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '@user-interfaces/components';
import { DeskListModalComponent } from './desk-list-modal.component';

export interface DeskFilters {
    date?: number;
    zones?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class DesksStateService extends BaseClass {
    private _filters = new BehaviorSubject<DeskFilters>({});
    private _desk_bookings: Booking[] = [];
    private _desks: Desk[] = []
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly desks: Observable<Desk[]> = combineLatest([this._filters]).pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((details) => {
            const [filters] = details;
            if (!filters.zones?.length) return [];
            return showMetadata(filters.zones[0] || this._org.building.id, {
                name: 'desks',
            }).pipe(map((m) => m.details));
        }),
        map(list => {
            if (!(list instanceof Array)) list = [];
            list.sort((a, b) => a.name.localeCompare(b.name));
            this._desks = list.map(i => new Desk(i));
            return list;
        }),
        share()
    );

    public readonly bookings = combineLatest([this._filters]).pipe(
        debounceTime(500),
        switchMap((details) => {
            this._loading.next(true);
            const [filters] = details;
            const date = filters.date ? new Date(filters.date) : new Date();
            return this._bookings.query({
                period_start: Math.floor(startOfDay(date).valueOf() / 1000),
                period_end: Math.floor(endOfDay(date).valueOf() / 1000),
                type: 'desk',
                zones: (filters.zones || []).join(','),
            });
        }),
        map(list => {
            list.sort((a, b) => a.date - b.date);
            this._desk_bookings = list;
            this._loading.next(false);
            return list;
        }),
        shareReplay()
    );

    constructor(
        private _bookings: BookingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public setFilters(filters: DeskFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public startPolling(delay: number = 30 * 1000) {
        this.interval(
            'poll',
            () => this.setFilters(this._filters.getValue()),
            delay
        );
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async checkinDesk(desk: Booking) {
        console.log('Checkin:', desk);
        const success = await this._bookings.checkIn(desk, true).catch(_ => 'failed');
        success === 'failed'
            ? notifyError('Error checking in desk booking')
            : notifySuccess(`Checked in ${desk.user_name}.`)
    }

    public async approveDesk(desk: Booking) {
        console.log('Approve:', desk);
        const success = await this._bookings.approve(desk.id).catch(_ => 'failed');
        success === 'failed'
            ? notifyError('Error approving in desk booking')
            : notifySuccess(`Approved desk booking for ${desk.user_name}.`)
    }

    public async rejectDesk(desk: Booking) {
        console.log('Reject:', desk);
        const success = await this._bookings.reject(desk.id).catch(_ => 'failed');
        success === 'failed'
            ? notifyError('Error rejecting in desk booking')
            : notifySuccess(`Rejected desk booking for ${desk.user_name}.`)
    }

    public async rejectAllDesks() {
        console.log('Reject All Desks')
        const list = this._desk_bookings || [];
        console.log('Reject All:', list);
        if (list.length > 0) {
            const ref = this._dialog.open(ConfirmModalComponent, {
                data: {
                    title: 'Cancel all desk bookings',
                    content: 'Are you sure you want to cancel all bookings for the selected date?',
                    icon: {
                        type: 'icon',
                        class: 'material-icons',
                        content: 'delete',
                    },
                },
            });
            return new Promise(async (resolve, reject) => {
                let success = false;
                ref.componentInstance.event.pipe(first(_ => _.reason === 'done')).subscribe(async() => {
                    ref.componentInstance.loading = 'Rejecting all desks for selected date...';
                    success = true;
                    await Promise.all(list.map(desk => this._bookings.reject(desk.id)));
                    resolve();
                    notifySuccess('Successfull rejected all desk bookings for selected date.');
                    ref.close();
                });
                await ref.afterClosed().toPromise();
                if (!success) {
                    reject();
                }
            });
        } else {
            notifyInfo('No desks to reject for the selected date');
        }
    }

    public async updateDesks() {
        const ref = this._dialog.open(DeskListModalComponent, {
            data: {
                level: this._org.levelWithID(this._filters.getValue().zones) || this._org.level_list[0],
                building: this._org.building,
                desks: this._desks
            },
        });
        await ref.afterClosed().toPromise();
        this._desks = ref.componentInstance.desks$.getValue();
    }
}
