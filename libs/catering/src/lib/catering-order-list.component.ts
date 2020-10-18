import { Component, OnDestroy, OnInit } from '@angular/core';

import { CateringOrdersService } from './catering-orders.service';

@Component({
    selector: 'catering-order-list',
    template: `
        <div
            class="w-full text-sm font-medium flex items-center py-4 border-none border-solid border-b border-gray-300 bg-white"
        >
            <div class="w-20"></div>
            <div class="w-24">Time</div>
            <div class="flex-1">Location</div>
            <div class="w-56">Host</div>
            <div class="w-24">Charge Code</div>
            <div class="w-28">Invoice No.</div>
            <div class="w-36">Status</div>
            <div class="w-12"></div>
        </div>
        <ul class="list-none p-0 m-0 w-full flex-1 overflow-auto">
            <li
                class="border-none border-solid border-b border-gray-300"
                *ngFor="let order of order_list | async"
            >
                <catering-order-list-item [order]="order"></catering-order-list-item>
            </li>
            <div class="info-block text-dark-fade" *ngIf="!(order_list | async).length">
                <div class="text">No Catering Orders</div>
            </div>
        </ul>
        <mat-progress-bar *ngIf="loading | async" class="w-full" mode="indeterminate"></mat-progress-bar>
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
}
