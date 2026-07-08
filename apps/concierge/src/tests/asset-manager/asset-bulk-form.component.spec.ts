import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetBulkFormComponent } from '../../app/asset-manager/asset-bulk-form.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('AssetBulkFormComponent', () => {
    let spectator: Spectator<AssetBulkFormComponent>;

    const createComponent = createComponentFactory({
        component: AssetBulkFormComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                purchase_orders: signal([]),
                postChange: vi.fn(),
                setExtraAssets: vi.fn(),
                setOptions: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(new Map()),
            } as any),
        ],
    });

    beforeEach(() => {
        (ts_client.addAssets as any).mockReset();
        (ts_client.addAssets as any).mockResolvedValue([
            { id: 'a1' },
            { id: 'a2' },
        ]);
        spectator = createComponent();
        spectator.component.model.set({
            id: '',
            asset_type_id: 'g1',
            name: 'Chair',
            serial_number: '',
            barcode: '',
            identifier: 'Chair',
            other_data: {},
            purchase_order_id: '',
        } as any);
    });

    it('should reject an invalid count without creating assets', async () => {
        spectator.component.count.set(0);

        await spectator.component.save();

        expect(ts_client.addAssets).not.toHaveBeenCalled();
    });

    it('should create one asset per requested count', async () => {
        spectator.component.product.set({ id: 'g1' } as any);
        spectator.component.count.set(2);

        await spectator.component.save();

        const list = (ts_client.addAssets as any).mock.calls[0][0];
        expect(list).toHaveLength(2);
        expect(list[0]).toEqual(
            expect.objectContaining({ identifier: 'Chair', zone_id: 'bld-1' }),
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'view',
            'g1',
        ]);
    });
});
