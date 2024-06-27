import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { startOfDay, getUnixTime, addDays, format } from 'date-fns';

import {
    AsyncHandler,
    SettingsService,
    downloadFile,
    jsonToCsv,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import { GuestUser, updateGuest } from '@placeos/users';
import { MatDialog } from '@angular/material/dialog';
import {
    Booking,
    approveBooking,
    checkinBooking,
    queryBookings,
    rejectBooking,
    setBookingState,
    updateBooking,
} from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from '@placeos/spaces';
import { VisitorInductionModalComponent } from './visitor-induction-modal.component';

export interface VisitorFilters {
    date?: number;
    zones?: string[];
    all_bookings?: boolean;
    period?: number;
}

@Injectable({
    providedIn: 'root',
})
export class VisitorsStateService extends AsyncHandler {
    private _poll = new BehaviorSubject<number>(0);

    private _filters = new BehaviorSubject<VisitorFilters>({});

    private _search = new BehaviorSubject<string>('');

    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly bookings = combineLatest([
        this._org.active_building,
        this._filters,
        this._poll,
    ]).pipe(
        filter(([building]) => !!building),
        debounceTime(150),
        switchMap(([bld, filters]) => {
            this._loading.next(true);
            const date = filters.date ? new Date(filters.date) : new Date();
            const start = startOfDay(date);
            const end = addDays(start, filters.period || 1);
            return queryBookings({
                type: 'visitor',
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                zones: (filters.zones || []).join(',') || bld.id,
                include_checked_out: true,
                limit: 1000,
            }).pipe(catchError((_) => of([] as Booking[])));
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    );

    public readonly filtered_bookings = combineLatest([
        this._search,
        this.bookings,
    ]).pipe(
        map(([search, guest_list]) => {
            const filter = search.toLowerCase();
            const out = guest_list
                .filter(
                    (_) =>
                        _.asset_name?.toLowerCase().includes(filter) ||
                        _.user_name?.toLowerCase().includes(filter) ||
                        _.user_email?.toLowerCase().includes(filter) ||
                        _.asset_id?.toLowerCase().includes(filter)
                )
                .sort((a, b) => a.date - b.date);
            return out;
        })
    );

    public get search() {
        return this._search.getValue();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _dialog: MatDialog,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public setFilters(filters: VisitorFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setSearchString(search: string) {
        this._search.next(search);
    }

    public poll() {
        this._poll.next(Date.now());
    }

    public startPolling(delay: number = 30 * 1000) {
        this.interval('poll', () => this._poll.next(Date.now()), delay);
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async setExt<T = any>(guest: GuestUser, field: string, value: T) {
        const extension_data = { ...guest.extension_data };
        extension_data[field] = value;
        await updateGuest(guest.id, { ...guest, extension_data }).toPromise();
        this._poll.next(Date.now());
    }

    public async approveVisitor(item: Booking) {
        const details = await openConfirmModal(
            {
                title: 'Approve Visitor',
                content: `Approve attendance of ${
                    item.asset_name || item.asset_id
                } to their meeting?`,
                icon: { content: 'event_available' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating guest details');
        await (approveBooking(item.id) as any).toPromise().catch((e) => {
            notifyError(
                `Error approving visitor: ${e.message || e.error || e}`
            );
            details.close();
            throw e;
        });
        notifySuccess(`Successfully approved visitor`);
        this._poll.next(Date.now());
        details.close();
    }

    public async declineVisitor(item: Booking) {
        const details = await openConfirmModal(
            {
                title: 'Decline Visitor',
                content: `Decline attendance of ${
                    item.asset_name || item.asset_id
                } to their meeting?`,
                icon: { content: 'event_available' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating guest details');
        await rejectBooking(item.id)
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error declining visitor: ${e.message || e.error || e}`
                );
                details.close();
                throw e;
            });
        notifySuccess(`Successfully declining visitor`);
        this._poll.next(Date.now());
        details.close();
    }

    public async requestInduction(item: Booking) {
        const ref = this._dialog.open(VisitorInductionModalComponent, {
            data: { item },
        });
        const result = await ref.afterClosed().toPromise();
        if (!result) {
            if (result === false) {
                await setBookingState(
                    item.id,
                    'declined_induction'
                ).toPromise();
            }
            throw 'User declined';
        }
        await setBookingState(item.id, 'inducted').toPromise();
        await updateBooking(item.id, { ...item, induction: true });
    }

    public async setCheckinState(item: Booking, state = true) {
        if (item.rejected) throw 'You cannot check in a rejected meeting';
        if (state === true) {
            await this.requestInduction(item);
        }
        if (!item.approved && state === true) {
            await approveBooking(item.id).toPromise();
        }
        const new_user = await checkinBooking(item.id, state)
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error checking ${state ? 'in' : 'out'} ${
                        item.asset_name || item.asset_id
                    } for ${item.user_name}'s meeting`
                );
                throw e;
            });
        notifySuccess(
            `Successfully checked ${state ? 'in' : 'out'} ${
                item.asset_name || item.asset_id
            } from ${item.user_name}'s meeting`
        );
    }

    public async setCheckinStateForEvent(event_id: string, state = true) {
        if (!event_id) return;
        const bookings = await this.bookings.pipe(take(1)).toPromise();
        const event_bookings = bookings.filter(
            (_) =>
                _.parent_id === event_id ||
                _.extension_data.parent_id === event_id ||
                _.linked_event?.id === event_id ||
                _.linked_event?.event_id === event_id
        );
        if (!event_bookings.length) return;
        await Promise.all(
            event_bookings.map((_) =>
                checkinBooking(_.id, state)
                    .toPromise()
                    .catch((e) => {
                        notifyError(
                            `Error checking ${state ? 'in' : 'out'} ${
                                _.asset_name || _.asset_id
                            } for ${_.user_name}'s meeting`
                        );
                        throw e;
                    })
            )
        );
        notifySuccess(
            `Successfully checked ${state ? 'in' : 'out'} all visitors from ${
                event_bookings[0].user_name
            }'s meeting`
        );
        this._poll.next(Date.now());
    }

    public async downloadVisitorsList() {
        const bookings = await this.filtered_bookings.pipe(take(1)).toPromise();
        if (!bookings.length) return;
        const { date } = this._filters.getValue();
        const list = bookings.map((_) => ({
            Name: _.asset_name,
            Email: _.asset_id,
            'Checked In': _.checked_in,
            Host: _.user_email || '',
            Status: _.status,
            Date: format(_.date, 'dd MMM ' + this.time_format),
        }));
        const data = jsonToCsv(list);
        downloadFile(
            `visitor-list-${format(date || Date.now(), 'MMM-dd')}.csv`,
            data
        );
    }
}
