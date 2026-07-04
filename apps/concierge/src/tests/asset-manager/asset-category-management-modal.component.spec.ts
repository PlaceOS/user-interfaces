import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { AssetCategoryManagementModalComponent } from '../../app/asset-manager/asset-category-management-modal.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return { ...actual, removeAssetCategory: jest.fn(async () => ({})) };
});

describe('AssetCategoryManagementModalComponent', () => {
    let spectator: Spectator<AssetCategoryManagementModalComponent>;
    let edit: jest.Mock;

    const createComponent = createComponentFactory({
        component: AssetCategoryManagementModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
    });

    beforeEach(() => {
        edit = jest.fn();
        (ts_client.removeAssetCategory as jest.Mock).mockClear();
        spectator = createComponent({
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        list: signal([
                            { id: 'c1', name: 'Furniture' },
                            { id: 'c2', name: 'Devices' },
                        ]),
                        edit,
                    },
                },
            ],
        });
    });

    it('should expose the injected category list and edit handler', () => {
        expect(spectator.component.list()).toHaveLength(2);
        expect(spectator.component.edit).toBe(edit);
    });

    it('should remove a category and emit a change event', async () => {
        const changed = jest.fn();
        spectator.component.changed.subscribe(changed);

        await spectator.component.remove({ id: 'c1' } as any);

        expect(ts_client.removeAssetCategory).toHaveBeenCalledWith('c1');
        expect(changed).toHaveBeenCalled();
    });
});
