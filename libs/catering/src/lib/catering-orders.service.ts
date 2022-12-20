import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, debounceTime, tap, shareReplay } from 'rxjs/operators';
import { startOfDay, endOfDay, getUnixTime } from 'date-fns';

import { BaseClass, flatten } from '@placeos/common';
import { queryEvents, saveEvent } from 'libs/events/src/lib/events.fn';
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
export class CateringOrdersService extends BaseClass {
    private _poll = new BehaviorSubject<number>(0);
    private _loading = new BehaviorSubject<boolean>(false);
    private _filters = new BehaviorSubject<CateringOrderFilters>({});

    /** Observable for list of orders */
    public readonly orders: Observable<CateringOrder[]> = combineLatest([
        this._filters,
        this._poll,
    ]).pipe(
        debounceTime(500),
        switchMap(([{ date, zones }]) => {
            this._loading.next(true);
            const start = getUnixTime(startOfDay(date || Date.now()));
            const end = getUnixTime(endOfDay(date || Date.now()));
            return queryEvents({
                zone_ids: (zones || []).join(','),
                period_start: start,
                period_end: end,
            });
        }),
        map((events) => flatten(events.map((event) => event.ext('catering')))),
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
            list.filter((order) => checkOrder(order, this._filters.getValue()))
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
    public updateStatus(order: CateringOrder, status: CateringOrderStatus) {
        const updated_order = new CateringOrder({ ...order, status });
        const event = new CalendarEvent({
            ...order.event,
            catering: [
                ...order.event.ext('catering').filter((o) => o.id !== order.id),
                updated_order,
            ].map((i) => new CateringOrder({ ...i })),
        });
        return saveEvent(event);
    }
}
