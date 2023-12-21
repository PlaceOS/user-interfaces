import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    map,
    switchMap,
    debounceTime,
    tap,
    shareReplay,
    catchError,
} from 'rxjs/operators';
import { startOfDay, endOfDay, getUnixTime, format } from 'date-fns';

import { AsyncHandler, currentUser, flatten } from '@placeos/common';
import {
    queryEvents,
    saveEvent,
    updateEventMetadata,
} from 'libs/events/src/lib/events.fn';
import { CalendarEvent } from 'libs/events/src/lib/event.class';

import { CateringOrder } from './catering-order.class';
import { CateringOrderStatus } from './catering.interfaces';

export interface CateringOrderFilters {
    /** UTC epoch of the date to get catering orders for */
    date?: number;
    /** List of zones to filter catering order bookings */
    zones?: string[];
    /** Search string to filter orders on */
    search?: string;
}

function checkOrder(
    order: CateringOrder,
    filters: CateringOrderFilters
): boolean {
    const s = (filters.search || '').toLowerCase();
    return !!order.items.find(
        (item) =>
            item.name.toLowerCase().includes(s) ||
            !!item.options.find((option) =>
                option.name.toLowerCase().includes(s)
            )
    );
}

@Injectable({
    providedIn: 'root',
})
export class CateringOrdersService extends AsyncHandler {
    private _poll = new BehaviorSubject<number>(0);
    private _loading = new BehaviorSubject<boolean>(false);
    private _filters = new BehaviorSubject<CateringOrderFilters>({});

    /** Observable for list of orders */
    public readonly orders: Observable<CateringOrder[]> = combineLatest([
        this._filters,
        this._poll,
    ]).pipe(
        debounceTime(1000),
        switchMap(([{ date, zones }]) => {
            this._loading.next(true);
            const start = getUnixTime(startOfDay(date || Date.now()));
            const end = getUnixTime(endOfDay(date || Date.now()));
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
                                (o) => new CateringOrder({ ...o, event })
                            )
                        )
                    )
                ),
                map((orders) =>
                    orders.filter(
                        (o) =>
                            format(o.deliver_at, 'yyyy-MM-dd') ===
                            format(start * 1000, 'yyyy-MM-dd')
                    )
                )
            );
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    );
    /** Observable for loading status of orders */
    public readonly loading = this._loading.asObservable();
    /** Order filters */
    public get filters() {
        return this._filters.getValue();
    }
    /** Order filters */
    public set filters(filters: CateringOrderFilters) {
        this._filters.next(filters);
    }
    /** Filtered list of catering orders */
    public readonly filtered = this.orders.pipe(
        map((list) =>
            list
                .filter((order) => checkOrder(order, this._filters.getValue()))
                .sort((a, b) => a.deliver_at - b.deliver_at)
        )
    );

    constructor() {
        super();
        this.subscription('changes', this.orders.subscribe());
    }

    /** Start polling for catering orders */
    public startPolling(delay: number = 15 * 1000) {
        this.interval(
            'polling',
            () => this._poll.next(new Date().valueOf()),
            delay
        );
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
        status: CateringOrderStatus
    ) {
        order.status = status;
        const updated_order = new CateringOrder({
            ...order,
            status,
            event: null,
        });
        const catering = [
            ...(order.event.extension_data.catering || []).filter(
                (o) => o.id !== order.id
            ),
            updated_order,
        ].map((i) => new CateringOrder({ ...i }));
        const event = new CalendarEvent({
            ...order.event,
            catering,
        });
        const system_id = event?.resources[0]?.id || event?.system?.id;
        const booking = await updateEventMetadata(
            event.id,
            system_id,
            event.extension_data
        ).toPromise();
        this.timeout('refresh-list', () => this._poll.next(Date.now()), 1000);
        (order as any).status = status;
        return booking;
    }
}
