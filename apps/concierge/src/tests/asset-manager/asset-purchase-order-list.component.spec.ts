import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SimpleTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetPurchaseOrderListComponent } from '../../app/asset-manager/asset-purchase-order-list.component';

const options_signal = signal<any>({ view: 'list', search: '' });
const purchase_orders = [
    { id: 'po-1', purchase_order_number: 'PO-100', invoice_number: 'INV-1' },
    { id: 'po-2', purchase_order_number: 'PO-200', invoice_number: 'INV-2' },
];

describe('AssetPurchaseOrderListComponent', () => {
    let spectator: Spectator<AssetPurchaseOrderListComponent>;

    const createComponent = createComponentFactory({
        component: AssetPurchaseOrderListComponent,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                options: options_signal,
                purchase_orders: signal(purchase_orders),
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
        declarations: [MockComponent(SimpleTableComponent)],
    });

    beforeEach(() => {
        options_signal.set({ view: 'list', search: '' });
        spectator = createComponent();
    });

    it('should return all orders when no search is applied', () => {
        expect(spectator.component.purchase_orders()).toHaveLength(2);
    });

    it('should filter orders by purchase order number or invoice number', () => {
        options_signal.set({ view: 'list', search: 'po-200' });

        expect(spectator.component.purchase_orders()).toEqual([
            expect.objectContaining({ id: 'po-2' }),
        ]);
    });

    it('should navigate to the purchase order form on edit', () => {
        spectator.component.editOrder({ id: 'po-1' });

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['/book/assets', 'manage', 'purchase-order'],
            { queryParams: { id: 'po-1' } },
        );
    });
});
