import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetPurchaseOrderFormComponent } from '../../app/asset-manager/asset-purchase-order-form.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('AssetPurchaseOrderFormComponent', () => {
    let spectator: Spectator<AssetPurchaseOrderFormComponent>;
    let model_data: Record<string, any>;

    const createComponent = createComponentFactory({
        component: AssetPurchaseOrderFormComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                postChange: vi.fn(),
                setOptions: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
                active_building: signal({ id: 'bld-1' }),
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(new Map()),
            } as any),
        ],
    });

    beforeEach(() => {
        model_data = {
            id: '',
            purchase_order_number: 'PO-1',
            invoice_number: '',
            purchase_date: new Date('2026-01-01T00:00:00Z').valueOf(),
            expected_service_start_date: new Date(
                '2026-02-01T00:00:00Z',
            ).valueOf(),
            expected_service_end_date: new Date('2027-02-01T00:00:00Z').valueOf(),
            unit_price: '150',
        };
        (ts_client.addAssetPurchaseOrder as any).mockReset();
        (ts_client.addAssetPurchaseOrder as any).mockResolvedValue({
            id: 'po-1',
        });
        spectator = createComponent();
        spectator.component.model.set(model_data as any);
    });

    it('should convert dates to unix time and coerce the unit price on save', async () => {
        await spectator.component.save();

        expect(ts_client.addAssetPurchaseOrder).toHaveBeenCalledWith(
            expect.objectContaining({
                purchase_date: getUnixTime(model_data.purchase_date),
                expected_service_start_date: getUnixTime(
                    model_data.expected_service_start_date,
                ),
                unit_price: 150,
            }),
        );
    });

    it('should return to the purchase order list when not scoped to a product', async () => {
        await spectator.component.save();

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'list',
            'purchase-orders',
        ]);
    });

    it('should return to the product view when scoped to a product', async () => {
        spectator.component.product_id.set('g1');

        await spectator.component.save();

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'view',
            'g1',
        ]);
    });
});
