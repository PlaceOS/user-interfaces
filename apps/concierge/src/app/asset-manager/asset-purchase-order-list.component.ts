import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { SimpleTableComponent, TranslatePipe } from '@placeos/components';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'app-asset-purchase-order-list',
    template: `
        <div
            class="relative -left-4 mt-4 flex h-[calc(100%-1rem)] w-[calc(100%+2rem)] flex-col"
        >
            <div class="h-1/2 w-full flex-1 overflow-auto p-4">
                <simple-table
                    class="block min-w-208 text-sm"
                    purchase-orders
                    [data]="purchase_orders()"
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
                        (filters().search
                            ? 'APP.CONCIERGE.ASSETS_PURCHASE_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_PURCHASE_EMPTY'
                        ) | translate
                    "
                    [filter]="filters().search"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [CommonModule, SimpleTableComponent, TranslatePipe],
})
export class AssetPurchaseOrderListComponent {
    private _state = inject(AssetManagerStateService);
    private _router = inject(Router);

    public readonly now = Date.now();
    public readonly purchase_orders = computed(() => {
        const search = this._state.options().search;
        const list = this._state.purchase_orders();
        return (list || []).filter(
            (_) =>
                !search ||
                (_ as any).purchase_order_number
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                _.invoice_number?.toLowerCase().includes(search.toLowerCase()),
        );
    });
    public readonly filters = this._state.options;

    public editOrder(order) {
        this._router.navigate(
            [this._state.base_route, 'manage', 'purchase-order'],
            {
                queryParams: { id: order.id },
            },
        );
    }
}
