import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as assets_mod from '@placeos/assets';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetGroupFormComponent } from '../../app/asset-manager/asset-group-form.component';

jest.mock('@placeos/assets');

describe('AssetGroupFormComponent', () => {
    let spectator: Spectator<AssetGroupFormComponent>;
    let model_data: Record<string, any>;
    let edit_category: jest.Mock;

    const categories = signal<any[]>([
        { id: 'c1', name: 'Furniture' },
    ]);

    const createComponent = createComponentFactory({
        component: AssetGroupFormComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                categories,
                postChange: jest.fn(),
                editCategory: (...args: any[]) => edit_category(...args),
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(new Map()),
            } as any),
        ],
    });

    beforeEach(() => {
        model_data = { id: '', name: 'Desk', category_id: '' };
        edit_category = jest.fn(async () => null);
        (assets_mod as any).generateAssetGroupForm = jest.fn(() => ({
            form: signal({ valid: () => true, reset: jest.fn() }),
            model: signal(model_data),
        }));
        (assets_mod as any).saveAssetType = jest.fn(async () => ({
            id: 'g-1',
        }));
        spectator = createComponent();
    });

    it('should append a newly created category to the option list', () => {
        spectator.component.new_category.set({
            id: 'c2',
            name: 'Devices',
        } as any);

        expect(spectator.component.categories().map((_) => _.id)).toEqual([
            'c1',
            'c2',
        ]);
    });

    it('should store the created category returned from the modal', async () => {
        edit_category.mockResolvedValue({ id: 'c2', name: 'Devices' });

        await spectator.component.newCategory();

        expect(spectator.component.new_category()).toEqual({
            id: 'c2',
            name: 'Devices',
        });
    });

    it('should save the product then navigate to its detail view', async () => {
        await spectator.component.save();

        expect(assets_mod.saveAssetType).toHaveBeenCalledWith(model_data);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'view',
            'g-1',
        ]);
    });
});
