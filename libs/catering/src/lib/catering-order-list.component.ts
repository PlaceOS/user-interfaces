import { Component, OnDestroy, OnInit } from '@angular/core';
import { CateringOrder } from './catering-order.class';

import { CateringOrdersService } from './catering-orders.service';

@Component({
    selector: 'catering-order-list',
    template: `
        <div
            class="sticky top-0 w-full text-sm font-medium flex items-center py-4 border-solid border-b border-base-200 bg-base-100"
        >
            <div class="w-20"></div>
            <div class="w-24">Time</div>
            <div class="flex-1">Location</div>
            <div class="w-56">Host</div>
            <div class="w-28">Charge Code</div>
            <div class="w-24">Notes</div>
            <div class="w-28">Invoice No.</div>
            <div class="w-36">Status</div>
            <div class="w-12"></div>
        </div>
        <ul class="list-none p-0 m-0 w-full flex-1 overflow-auto">
            <li
                class="border-solid border-b border-base-200"
                *ngFor="let order of order_list | async; trackBy: trackByFn"
            >
                <catering-order [order]="order"></catering-order>
            </li>
            <div
                empty
                class="info-block opacity-60"
                *ngIf="!(order_list | async)?.length"
            >
                <p class="p-4 text-center">No Catering Orders</p>
            </div>
        </ul>
        <mat-progress-bar
            *ngIf="loading | async"
            class="w-full"
            mode="indeterminate"
        ></mat-progress-bar>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class CateringOrderListComponent implements OnInit, OnDestroy {
    /** List of filtered orders */
    public readonly order_list = this._orders.filtered;
    /** Whether order list is loading */
    public readonly loading = this._orders.loading;

    constructor(private _orders: CateringOrdersService) {}

    public ngOnInit() {
        this._orders.startPolling();
    }

    public ngOnDestroy() {
        this._orders.stopPolling();
    }

    /* istanbul ignore next */
    public trackByFn(index: number, order: CateringOrder) {
        return order ? order.id : undefined;
    }
}
