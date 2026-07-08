import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetCategoryFormComponent } from '../../app/asset-manager/asset-category-form.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('AssetCategoryFormComponent', () => {
    let spectator: Spectator<AssetCategoryFormComponent>;
    let dialog_ref: any;

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
        dialog_ref = { close: vi.fn(), disableClose: false };
        (ts_client.updateAssetCategory as any).mockReset();
        (ts_client.addAssetCategory as any).mockReset();
        (ts_client.updateAssetCategory as any).mockResolvedValue({
            id: 'saved-1',
        });
        (ts_client.addAssetCategory as any).mockResolvedValue({ id: 'saved-1' });
        spectator = createComponent({
            providers: [
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: MAT_DIALOG_DATA, useValue: {} },
            ],
        });
        spectator.component.model.set({
            id: 'c-self',
            name: 'Category',
            parent_category_id: '',
        });
    });

    it('should exclude categories that would become their own parent', () => {
        const list = spectator.component.categories();
        expect(list.map((_) => _.id)).toEqual(['c1']);
    });

    it('should save and close with the created category', async () => {
        await spectator.component.save();

        expect(ts_client.updateAssetCategory).toHaveBeenCalledWith(
            'c-self',
            expect.objectContaining({ name: 'Category' }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'saved-1' });
        expect(spectator.component.loading()).toBe(false);
    });

    it('should not save when the form is invalid', async () => {
        spectator.component.model.update((m) => ({ ...m, name: '' }));

        await spectator.component.save();

        expect(ts_client.updateAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
