import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ItemListModalComponent } from '../../app/building-manager/item-list-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));
jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
    updateMetadata: jest.fn(),
}));

describe('ItemListModalComponent', () => {
    let spectator: Spectator<ItemListModalComponent>;

    const createComponent = createComponentFactory({
        component: ItemListModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, 'bld-1'),
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn(() => undefined) }),
        ],
    });

    beforeEach(() => {
        (common_mod.notifyError as jest.Mock).mockClear();
        (ts_client.showMetadata as jest.Mock).mockReset();
        (ts_client.updateMetadata as jest.Mock).mockReset();
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            details: {
                support_issue_types: [{ name: 'IT', email: 'it@example.com' }],
            },
            description: '',
        });
        (ts_client.updateMetadata as jest.Mock).mockResolvedValue({ id: 'meta' });
        spectator = createComponent();
        (spectator.inject(MatDialogRef).close as jest.Mock).mockClear();
    });

    afterEach(() => jest.restoreAllMocks());

    it('should load existing support issue types on init', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.item_list()).toEqual([
            { name: 'IT', email: 'it@example.com' },
        ]);
    });

    it('should add, update and remove items', () => {
        spectator.component.addItem();
        expect(spectator.component.item_list()).toEqual([
            { name: '', email: '' },
        ]);

        spectator.component.updateItem(0, 'name', 'Facilities');
        spectator.component.updateItem(0, 'email', 'fac@example.com');
        expect(spectator.component.item_list()[0]).toEqual({
            name: 'Facilities',
            email: 'fac@example.com',
        });

        spectator.component.addItem();
        spectator.component.removeItem(0);
        expect(spectator.component.item_list()).toEqual([
            { name: '', email: '' },
        ]);
    });

    it('should persist items to both metadata keys and close on success', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledTimes(2);
        const [, first_body] = (ts_client.updateMetadata as jest.Mock).mock.calls[0];
        expect(first_body.details.support_issue_types).toEqual([
            { name: 'IT', email: 'it@example.com' },
        ]);
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should notify and not close when saving fails', async () => {
        await spectator.component.ngOnInit();
        (ts_client.updateMetadata as jest.Mock).mockRejectedValueOnce('boom');

        await spectator.component.save();

        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
