import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as assets_mod from '@placeos/assets';
import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetBulkFormComponent } from '../../app/asset-manager/asset-bulk-form.component';

jest.mock('@placeos/assets');
jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        addAssets: jest.fn(async () => [{ id: 'a-1' }, { id: 'a-2' }]),
    };
});

describe('AssetBulkFormComponent', () => {
    let spectator: Spectator<AssetBulkFormComponent>;
    let model_data: Record<string, any>;

    const createComponent = createComponentFactory({
        component: AssetBulkFormComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                purchase_orders: signal([]),
                postChange: jest.fn(),
                setExtraAssets: jest.fn(),
                setOptions: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(new Map()),
            } as any),
        ],
    });

    beforeEach(() => {
        model_data = { id: '', identifier: 'Chair' };
        (assets_mod as any).generateAssetForm = jest.fn(() => ({
            form: signal({ valid: () => true, reset: jest.fn() }),
            model: signal(model_data),
        }));
        (ts_client.addAssets as jest.Mock).mockClear();
        spectator = createComponent();
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

        const list = (ts_client.addAssets as jest.Mock).mock.calls[0][0];
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
