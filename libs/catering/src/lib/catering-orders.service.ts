import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    map,
    switchMap,
    debounceTime,
    tap,
    shareReplay,
    catchError,
    first,
    filter,
} from 'rxjs/operators';
import { startOfDay, endOfDay, getUnixTime, format } from 'date-fns';

import {
    AsyncHandler,
    currentUser,
    flatten,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    queryEvents,
    showEventMetadata,
    updateEventMetadata,
} from 'libs/events/src/lib/events.fn';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Booking } from 'libs/bookings/src/lib/booking.class';
import {
    queryBookings,
    updateBooking,
} from 'libs/bookings/src/lib/bookings.fn';

import { CateringOrder } from './catering-order.class';
import { CateringOrderStatus } from './catering.interfaces';

export interface CateringOrderFilters {
    /** UTC epoch of the date to get catering orders for */
    date?: number;
    /** List of zones to filter catering order bookings */
    zones?: string[];
    /** Search string to filter orders on */
    search?: string;
    /** Caterer to filter orders on */
    caterer?: string;
}

function checkOrder(
    order: CateringOrder,
    filters: CateringOrderFilters,
): boolean {
    const s = (filters.search || '').toLowerCase();
    return !!order.items.find(
        (item) =>
            (!filters?.caterer ||
                (filters.caterer === '<empty>' && !item.caterer) ||
                item.caterer === filters.caterer) &&
            (item.name.toLowerCase().includes(s) ||
                !!item.options.find((option) =>
                    option.name.toLowerCase().includes(s),
                )),
    );
}

const BOOKINGS: Record<string, Booking> = {};

@Injectable({
    providedIn: 'root',
})
export class CateringOrdersService extends AsyncHandler {
    private _poll = new BehaviorSubject<number>(0);
    private _loading = new BehaviorSubject<boolean>(false);
    private _filters = new BehaviorSubject<CateringOrderFilters>({
        caterer: '',
    });

    private _embedded_orders = combineLatest([this._filters, this._poll]).pipe(
        debounceTime(300),
        switchMap(([{ date, zones }]) => {
            const start = getUnixTime(startOfDay(date || Date.now()));
            const end = getUnixTime(endOfDay(date || Date.now()));
            if (!zones?.length) {
                zones = this._settings.get('app.use_region')
                    ? [this._org.region.id]
                    : [this._org.building.id];
            }
            return queryEvents({
                zone_ids: (zones || []).join(','),
                period_start: start,
                period_end: end,
            }).pipe(
                catchError(() => of([])),
                map((events) =>
                    flatten(
                        events.map((event) =>
                            event.valid_catering.map(
                                (o) => new CateringOrder({ ...o, event }),
                            ),
                        ),
                    ),
                ),
            );
        }),
        shareReplay(1),
    );

    private _booking_orders = combineLatest([this._filters, this._poll]).pipe(
        debounceTime(300),
        switchMap(([{ date, zones }]) => {
            const start = getUnixTime(startOfDay(date || Date.now()));
            const end = getUnixTime(endOfDay(date || Date.now()));
            if (!zones?.length) {
                zones = this._settings.get('app.use_region')
                    ? [this._org.region.id]
                    : [this._org.building.id];
            }
            return queryBookings({
                type: 'catering-order',
                zones: (zones || []).join(','),
                period_start: start,
                period_end: end,
            }).pipe(
                catchError(() => of([] as Booking[])),
                map((bookings) =>
                    flatten(
                        bookings.map((bkn) => {
                            BOOKINGS[bkn.asset_id] = bkn;
                            return new CateringOrder({
                                ...bkn.extension_data.details,
                                event: new CalendarEvent(bkn.linked_event),
                            });
                        }),
                    ),
                ),
            );
        }),
        shareReplay(1),
    );

    /** Observable for list of orders */
    public readonly orders: Observable<CateringOrder[]> = combineLatest([
        this._org.active_building,
    ]).pipe(
        filter((_) => !!_),
        switchMap(() => {
            this._loading.next(true);
            return this.using_bookings
                ? this._booking_orders
                : this._embedded_orders;
        }),
        map((orders) => {
            const start = startOfDay(
                this._filters.getValue().date || Date.now(),
            );
            return orders.filter(
                (o) =>
                    format(o.deliver_at, 'yyyy-MM-dd') ===
                    format(start, 'yyyy-MM-dd'),
            );
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );
    /** Observable for loading status of orders */
    public readonly loading = this._loading.asObservable();

    public readonly order_filters = this._filters.asObservable();

    public readonly caterers = this.orders.pipe(
        map((_) => {
            const provider_groups =
                this._settings.get('app.catering_provider_groups') || {};
            let provider_list = Object.keys(provider_groups);
            const is_admin =
                currentUser().groups.includes('placeos_admin') ||
                currentUser().groups.includes('placeos_support');
            if (!provider_list.length || is_admin)
                return unique(_.map((i) => i.caterer));
            provider_list = provider_list.filter((caterer) =>
                provider_groups[caterer].find((group) =>
                    currentUser().groups.includes(group),
                ),
            );
            if (
                provider_list.length <= 1 &&
                this._filters.getValue()?.caterer !== provider_list[0]
            ) {
                this._filters.next({
                    ...this._filters.getValue(),
                    caterer: provider_list[0],
                });
            }
            return unique(provider_list);
        }),
        shareReplay(1),
    );
    /** Order filters */
    public get filters() {
        return this._filters.getValue();
    }
    /** Order filters */
    public set filters(filters: CateringOrderFilters) {
        this._filters.next(filters);
    }

    public get using_bookings() {
        return this._settings.get('app.catering.use_bookings') == true;
    }
    /** Filtered list of catering orders */
    public readonly filtered = this.orders.pipe(
        map((list) =>
            list
                .filter((order) => checkOrder(order, this._filters.getValue()))
                .sort((a, b) => a.deliver_at - b.deliver_at),
        ),
    );

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {
        super();
        this.subscription('changes', this.orders.subscribe());
    }

    /** Start polling for catering orders */
    public startPolling(delay: number = 15 * 1000) {
        this.interval(
            'polling',
            () => this._poll.next(new Date().valueOf()),
            delay,
        );
        return () => this.stopPolling();
    }

    /** Stop polling for new catering orders */
    public stopPolling() {
        this.clearInterval('polling');
    }

    /**
     * Update the status of the order
     * @param order Order to update
     * @param status New order status
     */
    public async updateStatus(
        order: CateringOrder,
        status: CateringOrderStatus,
    ) {
        order.status = status;
        const updated_order = new CateringOrder({
            ...order,
            status,
            event: null,
        });
        const catering = [
            ...(order.event.extension_data.catering || []).filter(
                (o) => o.id !== order.id,
            ),
            updated_order,
        ].map((i) => new CateringOrder({ ...i }));
        const system_id =
            order.event?.resources[0]?.id || order.event?.system?.id;
        const ext_data = await showEventMetadata(
            order.event.id,
            system_id,
        ).toPromise();
        const event = new CalendarEvent({
            ...({ ...order.event, extension_data: ext_data } as any),
            catering,
        });
        const booking = await updateEventMetadata(
            event.id,
            system_id,
            event.extension_data,
        ).toPromise();
        if (this.using_bookings) {
            const booking = BOOKINGS[order.id];
            await updateBooking(booking.id, {
                ...booking,
                extension_data: {
                    ...booking.extension_data,
                    details: updated_order,
                },
            });
        }
        this.timeout('refresh-list', () => this._poll.next(Date.now()), 1000);
        (order as any).status = status;
        return booking;
    }
}
