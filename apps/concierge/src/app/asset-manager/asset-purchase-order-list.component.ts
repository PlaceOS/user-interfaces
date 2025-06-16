import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'app-asset-purchase-order-list',
    template: `
        <div
            class="relative -left-4 mt-4 flex h-[calc(100%-1rem)] w-[calc(100%+2rem)] flex-col"
        >
            <div class="h-1/2 w-full flex-1 overflow-auto p-4">
                <simple-table
                    class="block min-w-[52rem] text-sm"
                    purchase-orders
                    [data]="purchase_orders"
                    [columns]="[
                        {
                            key: 'purchase_order_number',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                | translate,
                        },
                        {
                            key: 'invoice_number',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                | translate,
                        },
                        {
                            key: 'purchase_date',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_DATE'
                                | translate,
                            content: date_template,
                        },
                        {
                            key: 'expected_service_start_date',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_START'
                                | translate,
                            content: date_template,
                        },
                        {
                            key: 'expected_service_end_date',
                            name:
                                'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate,
                            content: date_template,
                        },
                    ]"
                    [empty_message]="
                        ((filters | async)?.search
                            ? 'APP.CONCIERGE.ASSETS_PURCHASE_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_PURCHASE_EMPTY'
                        ) | translate
                    "
                    [filter]="(filters | async)?.search"
                    [sortable]="true"
                    (row_clicked)="editOrder($event)"
                ></simple-table>
            </div>
        </div>
        <ng-template #date_template let-data="data">
            <div class="p-4">
                @if (!data) {
                    <span class="opacity-30">{{
                        'COMMON.DATE_EMPTY' | translate
                    }}</span>
                }
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
    standalone: false,
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
                        .includes(search.toLowerCase()),
            ),
        ),
    );
    public readonly filters = this._state.options;

    constructor(
        private _state: AssetManagerStateService,
        private _router: Router,
    ) {}

    public editOrder(order) {
        this._router.navigate(
            [this._state.base_route, 'manage', 'purchase-order'],
            {
                queryParams: { id: order.id },
            },
        );
    }
}
