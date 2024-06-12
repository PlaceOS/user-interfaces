import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-asset-purchase-order-list',
    template: `
        <div
            class="relative -left-4 w-[calc(100%+2rem)] mt-4 h-[calc(100%-1rem)] flex flex-col"
        >
            <div class="w-full overflow-auto h-1/2 flex-1 p-4">
                <simple-table
                    class="min-w-[52rem] block text-sm"
                    purchase-orders
                    [data]="purchase_orders"
                    [columns]="[
                        {
                            key: 'purchase_order_number',
                            name: 'PO Number'
                        },
                        {
                            key: 'invoice_number',
                            name: 'Invoice Number'
                        },
                        {
                            key: 'purchase_date',
                            name: 'Purchase Date',
                            content: date_template
                        },
                        {
                            key: 'expected_service_start_date',
                            name: 'Service Start',
                            content: date_template
                        },
                        {
                            key: 'expected_service_end_date',
                            name: 'Service End',
                            content: date_template
                        }
                    ]"
                    [empty_message]="
                        (filters | async)?.search
                            ? 'No matching purchase orders found.'
                            : 'There are purchase orders for this building.'
                    "
                    [filter]="(filters | async)?.search"
                    [sortable]="true"
                    (row_clicked)="editOrder($event)"
                ></simple-table>
            </div>
        </div>
        <ng-template #date_template let-data="data">
            <div class="p-4">
                <span class="opacity-30" *ngIf="!data">No Date</span>
                {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class AssetPurchaseOrderListComponent {
    public readonly now = Date.now();
    public readonly purchase_orders = combineLatest([
        this._state.options,
        this._state.purchase_orders,
    ]).pipe(
        map(([{ search }, list]) =>
            list.filter(
                (_) =>
                    !search ||
                    (_ as any).purchase_order_number
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    _.invoice_number
                        ?.toLowerCase()
                        .includes(search.toLowerCase())
            )
        )
    );
    public readonly filters = this._state.options;

    constructor(
        private _state: AssetManagerStateService,
        private _router: Router
    ) {}

    public editOrder(order) {
        this._router.navigate(
            [this._state.base_route, 'manage', 'purchase-order'],
            {
                queryParams: { id: order.id },
            }
        );
    }
}
