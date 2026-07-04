import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as assets_mod from '@placeos/assets';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetFormComponent } from '../../app/asset-manager/asset-form.component';

jest.mock('@placeos/assets');

describe('AssetFormComponent', () => {
    let spectator: Spectator<AssetFormComponent>;
    let model_data: Record<string, any>;

    const createComponent = createComponentFactory({
        component: AssetFormComponent,
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
        model_data = { id: '', serial_number: 'SER-1', identifier: 'Chair 1' };
        (assets_mod as any).generateAssetForm = jest.fn(() => ({
            form: signal({ valid: () => true, reset: jest.fn() }),
            model: signal(model_data),
        }));
        (assets_mod as any).saveAsset = jest.fn(async () => ({
            id: 'a-1',
            name: 'Chair 1',
        }));
        spectator = createComponent();
    });

    it('should save the asset scoped to the active building', async () => {
        spectator.component.product.set({ id: 'g1' } as any);

        await spectator.component.save();

        expect(assets_mod.saveAsset).toHaveBeenCalledWith(
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
        (spectator.component.form() as any).valid = () => false;

        await spectator.component.save();

        expect(assets_mod.saveAsset).not.toHaveBeenCalled();
    });
});
