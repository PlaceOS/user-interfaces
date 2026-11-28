import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ItemListModalComponent } from '../../app/building-manager/item-list-modal.component';

import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';

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
        (ts_client.metadata.show as any).mockReset();
        (ts_client.metadata.update as any).mockReset();
        (ts_client.metadata.show as any).mockImplementation(
            fromV1Mock(
                () => ({
                    details: {
                        support_issue_types: [
                            { name: 'IT', email: 'it@example.com' },
                        ],
                    },
                    description: '',
                }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        (ts_client.metadata.update as any).mockResolvedValue(
            mockReply({ id: 'meta' }),
        );
        spectator = createComponent();
        spectator.inject(MatDialogRef).close.mockClear();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        vi.restoreAllMocks();
    });

    it('should load existing support issue types on init', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.item_list()).toEqual([
            { name: 'IT', email: 'it@example.com' },
        ]);
    });

    it('should load the concierge list when workplace has none', async () => {
        (ts_client.metadata.show as any).mockImplementation(
            fromV1Mock(
                (_id, key) =>
                    Promise.resolve({
                        details:
                            key === 'concierge_app'
                                ? {
                                      support_issue_types: [
                                          { name: 'HR', email: 'hr@x' },
                                      ],
                                  }
                                : {},
                    }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );

        await spectator.component.ngOnInit();

        expect(spectator.component.item_list()).toEqual([
            { name: 'HR', email: 'hr@x' },
        ]);
    });

    it('should ignore an empty workplace list when concierge has one', async () => {
        (ts_client.metadata.show as any).mockImplementation(
            fromV1Mock(
                (_id, key) =>
                    Promise.resolve({
                        details: {
                            support_issue_types:
                                key === 'concierge_app'
                                    ? [{ name: 'HR', email: 'hr@x' }]
                                    : [],
                        },
                    }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );

        await spectator.component.ngOnInit();

        expect(spectator.component.item_list()).toEqual([
            { name: 'HR', email: 'hr@x' },
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

        expect(ts_client.metadata.update).toHaveBeenCalledTimes(2);
        const [{ body: first_body }] = (ts_client.metadata.update as any).mock
            .calls[0];
        expect(first_body.details.support_issue_types).toEqual([
            { name: 'IT', email: 'it@example.com' },
        ]);
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should keep the settings of each app key when saving', async () => {
        (ts_client.metadata.show as any).mockImplementation(
            fromV1Mock(
                (_id, key) =>
                    Promise.resolve({ details: { key }, description: '' }),
                ['id', 'name'],
                'data',
                'name',
            ),
        );

        await spectator.component.save();

        const bodies = (ts_client.metadata.update as any).mock.calls.map(
            ([input]) => input.body,
        );
        expect(bodies.map((body) => [body.name, body.details.key])).toEqual([
            ['workplace_app', 'workplace_app'],
            ['concierge_app', 'concierge_app'],
        ]);
    });

    it('should notify and not close when saving fails', async () => {
        await spectator.component.ngOnInit();
        (ts_client.metadata.update as any).mockRejectedValueOnce('boom');

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
