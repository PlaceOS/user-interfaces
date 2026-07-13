import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetFormComponent } from '../../app/asset-manager/asset-form.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('AssetFormComponent', () => {
    let spectator: Spectator<AssetFormComponent>;

    const createComponent = createComponentFactory({
        component: AssetFormComponent,
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
        (ts_client.addAsset as any).mockReset();
        (ts_client.addAsset as any).mockResolvedValue({
            id: 'a-1',
            name: 'Chair 1',
        });
        spectator = createComponent();
        spectator.component.model.set({
            id: '',
            asset_type_id: 'g1',
            name: 'Chair 1',
            serial_number: 'SER-1',
            barcode: '',
            identifier: 'Chair 1',
            other_data: {},
            purchase_order_id: '',
        } as any);
    });

    it('should save the asset scoped to the active building', async () => {
        spectator.component.product.set({ id: 'g1' } as any);

        await spectator.component.save();

        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({ serial_number: 'SER-1', zone_id: 'bld-1' }),
        );
        expect(
            spectator.inject(AssetManagerStateService).setExtraAssets,
        ).toHaveBeenCalledWith([
            expect.objectContaining({ id: 'a-1', asset_type_id: 'g1' }),
        ]);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'view',
            'g1',
        ]);
    });

    it('should not save when the form is invalid', async () => {
        spectator.component.model.update((m) => ({ ...m, asset_type_id: '' }));

        await spectator.component.save();

        expect(ts_client.addAsset).not.toHaveBeenCalled();
    });
});
