import { Injectable } from '@angular/core';
import { CateringItem, CateringOrder } from '@placeos/catering';
import { downloadFile, flatten, jsonToCsv } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { combineLatest } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';

@Injectable({
    providedIn: 'root',
})
export class CateringReportStateService {
    /** List of catering orders for the selected period and levels */
    public readonly catering_orders = this._reports.bookings.pipe(
        map((list) => {
            const orders: CateringOrder[] = flatten(
                list
                    .filter(
                        (_: CalendarEvent) => _.extension_data?.catering?.length
                    )
                    .map((_) =>
                        _.extension_data?.catering.map(
                            (o) =>
                                new CateringOrder({
                                    ...o,
                                    deliver_at: _.date,
                                    event: _,
                                })
                        )
                    )
            );
            console.log('Orders:', orders);
            return orders
                .filter((_) => _)
                .sort((a, b) => a.event?.date - b.event?.date);
        }),
        shareReplay(1)
    );

    /** List of catering items for the selected period and levels */
    public readonly catering_items = this.catering_orders.pipe(
        map((orders) => {
            const items: CateringItem[] = [];
            for (const order of orders) {
                for (const item of order?.items || []) {
                    const index = items.findIndex(
                        (_) => item.options_string === _.options_string
                    );
                    if (index >= 0) {
                        item[index] = new CateringItem({
                            ...item,
                            quantity: item?.quantity + item[index]?.quantity,
                        });
                    } else {
                        items.push(item);
                    }
                }
            }
            return items.sort((a, b) => b.quantity - a.quantity);
        })
    );

    public readonly stats = combineLatest([
        this.catering_orders,
        this.catering_items,
    ]).pipe(
        map(([orders, items]) => {
            const total_cost = orders.reduce((c, i) => c + i.total_cost, 0);
            return {
                order_count: orders.length,
                unique_items: items.length,
                item_count: orders.reduce((c, i) => c + i.item_count, 0),
                total_cost,
                avg_cost: total_cost / orders.length,
            };
        })
    );

    constructor(private _reports: ReportsStateService) {}

    public async downloadOrders() {
        const orders = await this.catering_orders.pipe(take(1)).toPromise();
        const csv_data = jsonToCsv(orders);
        return downloadFile('catering-orders.csv', csv_data);
    }
}
