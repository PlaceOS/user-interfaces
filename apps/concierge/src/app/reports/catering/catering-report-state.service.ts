import { computed, inject, Injectable } from '@angular/core';
import {
    Booking,
    CalendarEvent,
    CateringItem,
    CateringOrder,
    downloadFile,
    flatten,
    jsonToCsv,
} from '@placeos/common';
import { endOfDay, format, startOfDay } from 'date-fns';
import { ReportsStateService } from '../reports-state.service';

@Injectable({
    providedIn: 'root',
})
export class CateringReportStateService {
    private _reports = inject(ReportsStateService);

    /** List of catering orders for the selected period and levels */
    public readonly catering_orders = computed(() => {
        const { start, end } = this._reports.options();
        const list = this._reports.bookings();
        const start_date = startOfDay(start).valueOf();
        const end_date = endOfDay(end).valueOf();
        const orders: CateringOrder[] = flatten(
            list.map((_) =>
                _ instanceof CalendarEvent
                    ? _.valid_catering || []
                    : [
                          new CateringOrder({
                              ...(_ as Booking).extension_data.details,
                              event: (_ as Booking).linked_event,
                          }),
                      ],
            ),
        );
        return orders
            .filter(
                (_) =>
                    _.deliver_at_time >= start_date &&
                    _.deliver_at_time < end_date &&
                    _.status !== 'cancelled',
            )
            .sort((a, b) => a.event?.date - b.event?.date);
    });

    /** List of catering items for the selected period and levels */
    public readonly catering_items = computed(() => {
        const orders = this.catering_orders();
        const items: CateringItem[] = [];
        for (const order of orders) {
            for (const item of order?.items || []) {
                const existing = items.find(
                    (_) => item.custom_id === _.custom_id,
                );
                if (existing) {
                    (existing as any).quantity += item.quantity;
                } else {
                    items.push(item);
                }
            }
        }
        return items.sort((a, b) => b.quantity - a.quantity);
    });

    public readonly stats = computed(() => {
        const orders = this.catering_orders();
        const items = this.catering_items();
        const total_cost = orders.reduce((c, i) => c + i.total_cost, 0);
        return {
            order_count: orders.length,
            unique_items: items.length,
            item_count: orders.reduce((c, i) => c + i.item_count, 0),
            total_cost,
            avg_cost: total_cost / orders.length,
        };
    });

    public async downloadOrders() {
        const orders = this.catering_orders();
        const data = orders.map((_) => ({ ..._ }));
        for (const bkn of data) {
            (bkn as any).date = format((bkn as any)._time, 'yyyy-MM-dd HH:mm');
            delete (bkn as any)._time;
        }
        const csv_data = jsonToCsv(data, '\t');
        return downloadFile('catering-orders.tsv', csv_data);
    }
}
