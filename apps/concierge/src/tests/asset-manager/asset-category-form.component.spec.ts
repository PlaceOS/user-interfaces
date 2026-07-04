import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import * as assets_mod from '@placeos/assets';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetCategoryFormComponent } from '../../app/asset-manager/asset-category-form.component';

jest.mock('@placeos/assets');

describe('AssetCategoryFormComponent', () => {
    let spectator: Spectator<AssetCategoryFormComponent>;
    let dialog_ref: any;
    let model_data: Record<string, any>;

    const categories = signal([
        { id: 'c1', name: 'Furniture', parent_category_id: '' },
        { id: 'c2', name: 'Chairs', parent_category_id: 'c-self' },
    ]);

    const createComponent = createComponentFactory({
        component: AssetCategoryFormComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                categories,
            } as any),
        ],
    });

    beforeEach(() => {
        model_data = { id: 'c-self', name: 'Category' };
        dialog_ref = { close: jest.fn(), disableClose: false };
        (assets_mod as any).generateAssetCategoryForm = jest.fn(() => ({
            form: signal({ valid: () => true, reset: jest.fn() }),
            model: signal(model_data),
        }));
        (assets_mod as any).saveAssetCategory = jest.fn(async () => ({
            id: 'saved-1',
        }));
        spectator = createComponent({
            providers: [
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ],
        });
    });

    it('should exclude categories that would become their own parent', () => {
        const list = spectator.component.categories();
        expect(list.map((_) => _.id)).toEqual(['c1']);
    });

    it('should save and close with the created category', async () => {
        await spectator.component.save();

        expect(assets_mod.saveAssetCategory).toHaveBeenCalledWith(model_data);
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'saved-1' });
        expect(spectator.component.loading()).toBe(false);
    });

    it('should not save when the form is invalid', async () => {
        (spectator.component.form() as any).valid = () => false;

        await spectator.component.save();

        expect(assets_mod.saveAssetCategory).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
