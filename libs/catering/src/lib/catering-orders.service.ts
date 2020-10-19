import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, debounceTime } from 'rxjs/operators';
import { startOfDay, endOfDay } from 'date-fns';

import { BaseClass, flatten } from '@user-interfaces/common';
import { CalendarEvent } from '../../../events/src/lib/event.class';
import { EventsService } from '../../../events/src/lib/events.service';

import { CateringOrder } from './catering-order.class';
import { CateringOrderStatus } from './catering.interfaces';

export interface CateringOrderFilters {
    /** UTC epoch of the date to get catering orders for */
    date?: number;
    /** List of zones to filter catering order bookings */
    zones?: string[];
    /** Search string to filter orders on */
    search?: string;
    /** Counter to force update the order listing */
    count: number;
}

function checkOrder(order: CateringOrder, filters: CateringOrderFilters): boolean {
    const s = (filters.search || '').toLowerCase();
    return !!order.items.find(
        (item) =>
            item.name.toLowerCase().includes(s) ||
            !!item.options.find((option) => option.name.toLowerCase().includes(s))
    );
}

@Injectable({
    providedIn: 'root',
})
export class CateringOrdersService extends BaseClass {
    private _loading = new BehaviorSubject<boolean>(false);
    private _orders = new BehaviorSubject<CateringOrder[]>([]);
    private _filters = new BehaviorSubject<CateringOrderFilters>({ count: 0 });

    private _update: Observable<CateringOrder[]> = this._filters.pipe(
        debounceTime(500),
        switchMap((filters) => {
            this._loading.next(true);
            const start = Math.floor(
                startOfDay(new Date(filters.date || Date.now())).valueOf() / 1000
            );
            const end = Math.floor(endOfDay(new Date(filters.date || Date.now())).valueOf() / 1000);
            return this._events.query({
                zone_ids: (filters.zones || []).join(','),
                period_start: start,
                period_end: end,
            });
        }),
        map((events) => {
            return flatten(events.map((event) => event.catering));
        })
    );
    /** Observable for loading status of orders */
    public readonly loading = this._loading.asObservable();
    /** Observable for list of orders */
    public readonly orders = this._orders.asObservable();
    /** Order filters */
    public get filters() {
        return this._filters.getValue();
    }
    /** Order filters */
    public set filters(filters: CateringOrderFilters) {
        this._filters.next(filters);
    }
    /** Filtered list of catering orders */
    public readonly filtered = this._orders.pipe(
        map((list) => list.filter((order) => checkOrder(order, this._filters.getValue())))
    );

    constructor(private _events: EventsService) {
        super();
        this.subscription(
            'changes',
            this._update.subscribe((orders) => {
                this._loading.next(false);
                this._orders.next(orders);
            })
        );
    }

    /** Start polling for catering orders */
    public startPolling(delay: number = 15 * 1000) {
        this.interval(
            'polling',
            () => {
                const filters = this._filters.getValue();
                this._filters.next({ ...filters, count: filters.count + 1 });
            },
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
                ...order.event.catering.filter((o) => o.id !== order.id),
                updated_order
            ].map((i) => new CateringOrder({ ...i })),
        });
        return this._events.patch(event.id, event);
    }
}
