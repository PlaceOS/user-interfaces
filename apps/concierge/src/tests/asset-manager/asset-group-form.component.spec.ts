import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetGroupFormComponent } from '../../app/asset-manager/asset-group-form.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('AssetGroupFormComponent', () => {
    let spectator: Spectator<AssetGroupFormComponent>;
    let edit_category: any;

    const categories = signal<any[]>([{ id: 'c1', name: 'Furniture' }]);

    const createComponent = createComponentFactory({
        component: AssetGroupFormComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                categories,
                postChange: vi.fn(),
                editCategory: (...args: any[]) => edit_category(...args),
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(new Map()),
            } as any),
        ],
    });

    beforeEach(() => {
        edit_category = vi.fn(async () => null);
        (ts_client.addAssetType as any).mockReset();
        (ts_client.addAssetType as any).mockResolvedValue({ id: 'g-1' });
        spectator = createComponent();
        spectator.component.model.set({
            id: '',
            name: 'Desk',
            category_id: 'c1',
            images: [],
            brand: '',
            description: '',
        } as any);
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

        expect(ts_client.addAssetType).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'Desk', category_id: 'c1' }),
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'view',
            'g-1',
        ]);
    });
});
