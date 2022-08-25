import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listChildMetadata, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, Observable } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { endOfDay, format, startOfDay } from 'date-fns';

import {
    approveBooking,
    Booking,
    checkinBooking,
    queryBookings,
    rejectBooking,
    saveBooking,
} from '@placeos/bookings';
import {
    BaseClass,
    notifyError,
    notifyInfo,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';

import { generateQRCode } from 'libs/common/src/lib/qr-code';

export interface DeskFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class DesksStateService extends BaseClass {
    private _filters = new BehaviorSubject<DeskFilters>({});
    private _new_desks = new BehaviorSubject<Desk[]>([]);
    private _desk_bookings: Booking[] = [];
    private _desks: Desk[] = [];
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly new_desks = this._new_desks.asObservable();

    public get new_desk_count() { return this._new_desks.getValue()?.length || 0; }

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly desks: Observable<Desk[]> = this._filters.pipe(
        debounceTime(500),
        switchMap((filters) => {
            const zones = filters.zones || [];
            return !zones.includes('All')
                ? showMetadata(zones[0], 'desks').pipe(map((m) => m.details))
                : listChildMetadata(this._org.building?.id, {
                      name: 'desks',
                  }).pipe(
                      map((m) =>
                          m
                              .map((i) => i.metadata.desks.details)
                              .reduce((c: any[], i: any[]) => [...c, ...i], [])
                      )
                  );
        }),
        catchError((_) => []),
        map((list) => {
            if (!(list instanceof Array)) list = [];
            list.sort((a, b) => a.name.localeCompare(b.name));
            this._desks = list.map(
                (i) =>
                    new Desk({
                        ...i,
                        qr_code: "",
                    })
            );
            return this._desks;
        }),
        shareReplay(1)
    );
    public readonly bookings = this._filters.pipe(
        debounceTime(500),
        switchMap((filters) => {
            this._loading.next(true);
            const date = filters.date ? new Date(filters.date) : new Date();
            let zones = (filters.zones || []).filter(
                (z: any) => z !== -1 && z !== '-1' && z !== 'All'
            );
            if (!zones?.length) {
                zones = this._org
                    .levelsForBuilding(this._org.building)
                    .map((i) => i.id);
            }
            return queryBookings({
                period_start: Math.floor(startOfDay(date).valueOf() / 1000),
                period_end: Math.floor(endOfDay(date).valueOf() / 1000),
                type: 'desk',
                zones: (zones || []).join(','),
            });
        }),
        map((list) => {
            list.sort((a, b) => a.date - b.date);
            this._desk_bookings = list.map(
                (_) =>
                    new Booking({
                        ..._,
                        extension_data: {
                            ..._.extension_data,
                            checkin_qr_code: generateQRCode(
                                `/workplace/#/book/code?checkin=${encodeURIComponent(
                                    _.asset_id
                                )}`
                            ),
                        },
                    })
            );
            this._loading.next(false);
            return list;
        }),
        shareReplay(1)
    );

    constructor(private _org: OrganisationService, private _dialog: MatDialog) {
        super();
    }

    public setFilters(filters: DeskFilters) {
        if (filters.zones?.includes('All')) {
            filters.zones = [
                'All',
                ...this._org
                    .levelsForBuilding(this._org.building)
                    .map((lvl) => lvl.id),
            ];
        } else if (
            filters.zones &&
            this._filters.getValue()?.zones?.includes('All')
        ) {
            filters.zones = [];
        }
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

    public addDesks(list: Desk[]) {
        this._new_desks.next(this._new_desks.getValue().concat(list));
    }

    public clearNewDesks() {
        this._new_desks.next([]);
    }

    public async checkinDesk(desk: Booking) {
        const success = await checkinBooking(desk.id, true)
            .toPromise()
            .catch((_) => 'failed');
        success === 'failed'
            ? notifyError('Error checking in desk booking')
            : notifySuccess(`Checked in ${desk.user_name}.`);
    }

    public async approveDesk(desk: Booking) {
        const success = await approveBooking(desk.id)
            .toPromise()
            .catch((_) => 'failed');
        success === 'failed'
            ? notifyError('Error approving in desk booking')
            : notifySuccess(
                  `Approved desk booking for ${desk.user_name} on ${format(
                      desk.date,
                      'MMM do'
                  )}.`
              );
    }

    public async rejectDesk(desk: Booking) {
        const success = await rejectBooking(desk.id)
            .toPromise()
            .catch((_) => 'failed');
        success === 'failed'
            ? notifyError('Error rejecting in desk booking')
            : notifySuccess(
                  `Rejected desk booking for ${desk.user_name} on ${format(
                      desk.date,
                      'MMM do'
                  )}.`
              );
    }

    public async giveAccess(desk: Booking) {
        const success = await saveBooking(
            new Booking({ ...desk, access: true })
        )
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed')
            return notifyError('Error giving building access booking host');
        notifySuccess(
            `Successfully gave building access to ${desk.user_name} for desk booking.`
        );
        this._desk_bookings = [...this._desk_bookings, success] as any;
    }

    public async rejectAllDesks() {
        const list = this._desk_bookings || [];
        if (list.length <= 0) return notifyInfo('No desks to reject for the selected date');
        const resp = await openConfirmModal({
            title: 'Cancel all desk bookings',
            content:
                'Are you sure you want to cancel all bookings for the selected date?',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'delete',
            },
        }, this._dialog);
        if (resp.reason === 'done') return;
        resp.loading('Rejecting all desks for selected date...');
        await Promise.all(
            list.map((desk) =>
                rejectBooking(desk.id).toPromise()
            )
        );
        notifySuccess(
            'Successfull rejected all desk bookings for selected date.'
        );
        resp.close();
    }
}
