import { Injectable, inject } from '@angular/core';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    checkinBooking,
    queryBookings,
    rejectBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    OrganisationService,
    SettingsService,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';

export interface VipVisitorFilters {
    start_date?: number;
    end_date?: number;
    zones?: string[];
    all_bookings?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class VipVisitorsStateService extends AsyncHandler {
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _poll = new BehaviorSubject<number>(0);

    private _filters = new BehaviorSubject<VipVisitorFilters>({});

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
            const start = filters.start_date
                ? startOfDay(new Date(filters.start_date))
                : startOfDay(new Date());
            const end = filters.end_date
                ? endOfDay(new Date(filters.end_date))
                : endOfDay(start);
            return queryBookings({
                type: 'vip-visitor',
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                zones: (filters.zones || []).join(',') || bld.id,
                include_checked_out: true,
                limit: 1000,
            }).pipe(catchError((_) => of([] as Booking[])));
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );

    public readonly filtered_bookings = combineLatest([
        this._search,
        this.bookings,
    ]).pipe(
        map(([search, guest_list]) => {
            const search_filter = search.toLowerCase();
            const out = guest_list
                .filter(
                    (_) =>
                        _.asset_name?.toLowerCase().includes(search_filter) ||
                        _.user_name?.toLowerCase().includes(search_filter) ||
                        _.user_email?.toLowerCase().includes(search_filter) ||
                        _.asset_id?.toLowerCase().includes(search_filter),
                )
                .sort((a, b) => a.date - b.date);
            return out;
        }),
    );

    public get search() {
        return this._search.getValue();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public setFilters(filters: VipVisitorFilters) {
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

    public async setExt<T = any>(guest: Booking, field: string, value: T) {
        const extension_data = { ...guest.extension_data };
        extension_data[field] = value;
        await updateBooking(guest.id, {
            ...guest.toJSON(),
            extension_data,
        }).toPromise();
        this._poll.next(Date.now());
    }

    public async approveVisitor(item: Booking) {
        const details = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.VIP_APPROVE_TITLE'),
                content: i18n('APP.CONCIERGE.VIP_APPROVE_CONTENT', {
                    name: item.asset_name || item.asset_id,
                }),
                icon: { content: 'event_available' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading(i18n('APP.CONCIERGE.VIP_UPDATING'));
        await (approveBooking(item.id) as any).toPromise().catch((e) => {
            notifyError(
                `Error approving VIP visitor: ${e.message || e.error || e}`,
            );
            details.close();
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.VIP_APPROVED_SUCCESS'));
        this._poll.next(Date.now());
        details.close();
    }

    public async declineVisitor(item: Booking) {
        const details = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.VIP_DECLINE_TITLE'),
                content: i18n('APP.CONCIERGE.VIP_DECLINE_CONTENT', {
                    name: item.asset_name || item.asset_id,
                }),
                icon: { content: 'event_busy' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading(i18n('APP.CONCIERGE.VIP_UPDATING'));
        await rejectBooking(item.id)
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error declining VIP visitor: ${e.message || e.error || e}`,
                );
                details.close();
                throw e;
            });
        notifySuccess(i18n('APP.CONCIERGE.VIP_DECLINED_SUCCESS'));
        this._poll.next(Date.now());
        details.close();
    }

    public async setCheckinState(item: Booking, state = true) {
        if (item.rejected)
            throw i18n('APP.CONCIERGE.VIP_CHECKIN_REJECTED_ERROR');
        if (!item.approved && state === true) {
            await approveBooking(item.id).toPromise();
        }
        await checkinBooking(item.id, state)
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.VIP_CHECKIN_ERROR', {
                        action: state ? 'in' : 'out',
                        name: item.asset_name || item.asset_id,
                    }),
                );
                throw e;
            });
        notifySuccess(
            i18n('APP.CONCIERGE.VIP_CHECKIN_SUCCESS', {
                action: state ? 'in' : 'out',
                name: item.asset_name || item.asset_id,
            }),
        );
    }
}
