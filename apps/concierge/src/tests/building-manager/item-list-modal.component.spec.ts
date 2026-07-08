import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ItemListModalComponent } from '../../app/building-manager/item-list-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('ItemListModalComponent', () => {
    let spectator: Spectator<ItemListModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: ItemListModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, 'bld-1' as any),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn(() => undefined) }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client.showMetadata as any).mockReset();
        (ts_client.updateMetadata as any).mockReset();
        (ts_client.showMetadata as any).mockResolvedValue({
            details: {
                support_issue_types: [{ name: 'IT', email: 'it@example.com' }],
            },
            description: '',
        });
        (ts_client.updateMetadata as any).mockResolvedValue({ id: 'meta' });
        spectator = createComponent();
        (spectator.inject(MatDialogRef).close as any).mockClear();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

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
        const [, first_body] = (ts_client.updateMetadata as any).mock.calls[0];
        expect(first_body.details.support_issue_types).toEqual([
            { name: 'IT', email: 'it@example.com' },
        ]);
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should notify and not close when saving fails', async () => {
        await spectator.component.ngOnInit();
        (ts_client.updateMetadata as any).mockRejectedValueOnce('boom');

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
