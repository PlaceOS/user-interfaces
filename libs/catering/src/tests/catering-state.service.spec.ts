import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { NEVER, of, Subject } from 'rxjs';

import {
    Building,
    CateringItem,
    EMPTY_USER,
    OrganisationService,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AvailableRoomsStateModalComponent } from 'libs/components/src/lib/available-rooms-state-modal.component';

import { CateringStateService } from '../lib/catering-state.service';
import { CateringOption } from '../lib/catering.interfaces';

// The `@placeos/assets` catering fns run for real; only the ts-client API
// layer beneath them (asset/type/category queries + mutations) is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

const dialog_close = vi.fn();
const dialog_loading = signal<boolean | string>(false);
/** Modal that the user saves with the metadata */
const doneDialog = (metadata?: unknown) =>
    (() => ({
        componentInstance: {
            event: of({ reason: 'done', metadata }),
            loading: dialog_loading,
        },
        close: dialog_close,
        afterClosed: () => NEVER,
    })) as unknown as MatDialog['open'];
/** Modal that the user closes without saving */
const closedDialog = () =>
    (() => ({
        componentInstance: { event: NEVER, loading: dialog_loading },
        close: dialog_close,
        afterClosed: () => of(undefined),
    })) as unknown as MatDialog['open'];

// Drain the async chain inside the real saveCateringItem/deleteCateringItem
// helpers, which resolve the catering type then mutate the asset.
const flush = () => new Promise((resolve) => setTimeout(resolve, 20));

describe('CateringStateService', () => {
    let spectator: SpectatorService<CateringStateService>;
    const createService = createServiceFactory({
        service: CateringStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building({ id: 'bld-1' }),
                active_building: signal(new Building({ id: 'bld-1' })),
                initialised: signal(true),
            }),
            MockProvider(SettingsService, { get: vi.fn(), post: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        dialog_loading.set(false);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({} as any);
        vi.mocked(ts_client.updateMetadata).mockResolvedValue({} as any);
        // Hidden `_CATERING_` category + standalone catering asset type so the
        // real assets helpers resolve an existing type without creating one.
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [{ id: 'cat-1', name: '_CATERING_', hidden: true }],
        } as any);
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [
                {
                    id: 'type-1',
                    name: 'CATERING:_STANDALONE_',
                    category_id: 'cat-1',
                },
            ],
        } as any);
        vi.mocked(ts_client.queryAssets).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.addAsset).mockImplementation((asset: any) =>
            Promise.resolve({ ...asset, id: asset.id || 'saved-id' }),
        );
        vi.mocked(ts_client.updateAsset).mockImplementation(
            (_id: string, asset: any) => Promise.resolve({ ...asset }),
        );
        vi.mocked(ts_client.removeAsset).mockResolvedValue({});
        vi.mocked(ts_client.addAssetType).mockResolvedValue({
            id: 'type-1',
        } as any);
        vi.mocked(ts_client.updateAssetType).mockResolvedValue({
            id: 'type-1',
        } as any);
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({
            id: 'cat-1',
        } as any);
        vi.mocked(ts_client.updateAssetCategory).mockResolvedValue({
            id: 'cat-1',
        } as any);
        spectator = createService();
        // The settings mock is shared by all tests
        vi.mocked(spectator.inject(SettingsService).get).mockReset();
    });

    const openDialog = (open: MatDialog['open']) =>
        vi.mocked(spectator.inject(MatDialog).open).mockImplementation(open);

    /** Put items in the menu without a load from the server */
    const setMenu = (items: CateringItem[]) => {
        // Run the building load first, as it clears the menu
        TestBed.tick();
        (
            spectator.service as unknown as {
                _menu: WritableSignal<CateringItem[]>;
            }
        )._menu.set(items);
    };

    it('should not save an item when the item modal is closed', async () => {
        openDialog(closedDialog());
        await spectator.service.addItem();
        await flush();
        expect(ts_client.addAsset).not.toHaveBeenCalled();
    });

    it('should save a new item to the building and close the modal', async () => {
        setMenu([]);
        openDialog(doneDialog({ item: new CateringItem({ name: 'Tea' }) }));
        await spectator.service.addItem();
        await flush();
        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                zone_id: 'bld-1',
                asset_type_id: 'type-1',
            }),
        );
        expect(spectator.service.menu().map((i) => i.id)).toEqual(['saved-id']);
        expect(dialog_close).toHaveBeenCalled();
    });

    it('should keep the item modal open when the save fails', async () => {
        vi.mocked(ts_client.addAsset).mockRejectedValueOnce('offline');
        openDialog(doneDialog({ item: new CateringItem() }));
        dialog_loading.set(true);
        await spectator.service.addItem();
        await flush();
        expect(dialog_close).not.toHaveBeenCalled();
        expect(dialog_loading()).toBe(false);
    });

    it('should not save an option when the option modal is closed', async () => {
        openDialog(closedDialog());
        await spectator.service.addOption(new CateringItem());
        await flush();
        expect(ts_client.addAsset).not.toHaveBeenCalled();
    });

    it('should save the item with the new option and close the modal', async () => {
        const cake = new CateringItem({ id: 'a', name: 'Cake' });
        setMenu([cake]);
        const milk = { id: 'milk', name: 'Milk' } as CateringOption;
        openDialog(
            doneDialog({
                item: new CateringItem({ ...cake, options: [milk] }),
            }),
        );
        await spectator.service.addOption(cake);
        await flush();
        expect(
            spectator.service
                .menu()
                .map((i) => [i.id, i.options.map((o) => o.id)]),
        ).toEqual([['a', ['milk']]]);
        expect(dialog_close).toHaveBeenCalled();
    });

    it('should replace the edited item in the menu after it saves', async () => {
        const coffee = new CateringItem({ id: 'a', name: 'Coffee' });
        setMenu([coffee, new CateringItem({ id: 'b', name: 'Tea' })]);
        openDialog(
            doneDialog({
                item: new CateringItem({ id: 'a', name: 'Flat white' }),
            }),
        );

        await spectator.service.addItem(coffee);
        await flush();

        expect(spectator.service.menu().map((i) => i.name)).toEqual([
            'Flat white',
            'Tea',
        ]);
    });

    it('should allow user to remove catering items from menu', async () => {
        const coffee = new CateringItem({ id: 'a', name: 'Coffee' });
        setMenu([coffee, new CateringItem({ id: 'b', name: 'Tea' })]);
        openDialog(closedDialog());
        await spectator.service.deleteItem(coffee);
        await flush();
        expect(ts_client.removeAsset).not.toHaveBeenCalled();
        openDialog(doneDialog());
        await spectator.service.deleteItem(coffee);
        await flush();
        expect(ts_client.removeAsset).toHaveBeenCalledWith('a');
        expect(spectator.service.menu().map((i) => i.id)).toEqual(['b']);
    });

    it('should save the item without the removed option', async () => {
        const milk = { id: 'milk', name: 'Milk' } as CateringOption;
        const sugar = { id: 'sugar', name: 'Sugar' } as CateringOption;
        const cake = new CateringItem({
            id: 'a',
            name: 'Cake',
            options: [milk, sugar],
        });
        setMenu([cake]);
        openDialog(closedDialog());
        await spectator.service.deleteOption(cake, milk);
        await flush();
        expect(ts_client.updateAsset).not.toHaveBeenCalled();

        openDialog(doneDialog());
        await spectator.service.deleteOption(cake, milk);
        await flush();

        expect(spectator.service.menu()[0].options.map((o) => o.id)).toEqual([
            'sugar',
        ]);
    });

    it('should keep other menu items when the item is not in the menu', async () => {
        setMenu([
            new CateringItem({ id: 'a', name: 'Coffee' }),
            new CateringItem({ id: 'b', name: 'Tea' }),
        ]);
        openDialog(doneDialog());
        const option = { id: 'opt-1', name: 'Milk' } as CateringOption;

        await spectator.service.deleteOption(
            new CateringItem({ id: 'c', name: 'Cake', options: [option] }),
            option,
        );
        await flush();

        expect(spectator.service.menu().map((i) => i.id)).toEqual([
            'a',
            'b',
            'c',
        ]);
    });

    it('should show an error when the option removal fails', async () => {
        const notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));
        setNotifyOutlet({ open: notify_open } as unknown as MatSnackBar, true);
        openDialog(doneDialog());
        vi.mocked(ts_client.addAsset).mockRejectedValueOnce('save failed');

        await spectator.service.deleteOption(
            new CateringItem({ name: 'Cake' }),
            { id: 'opt-1' } as CateringOption,
        );
        await flush();
        setNotifyOutlet(null, true);

        expect(notify_open).toHaveBeenCalledWith(
            'CATERING.ITEM_OPTION_REMOVE_ERROR',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should save the catering config and close the modal', async () => {
        openDialog(doneDialog([{ name: '*', rules: [] }]));
        await spectator.service.editConfig();
        await flush();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith('bld-1', {
            id: 'bld-1',
            name: 'catering_config',
            details: [{ name: '*', rules: [] }],
            description: 'Catering menu config for bld-1',
        });
        expect(dialog_close).toHaveBeenCalled();
    });

    it('should keep the config modal open when the save fails', async () => {
        vi.mocked(ts_client.updateMetadata).mockRejectedValueOnce('offline');
        openDialog(doneDialog([]));
        dialog_loading.set(true);
        await spectator.service.editConfig();
        await flush();
        expect(dialog_close).not.toHaveBeenCalled();
        expect(dialog_loading()).toBe(false);
    });

    describe('setRoomAvailability', () => {
        const change = new Subject<string[]>();
        const loading = signal(true);
        // The change handler awaits the save before it clears the loading flag
        const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
        const disabled_rooms = signal<string[]>([]);
        const notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));

        beforeEach(() => {
            loading.set(true);
            setNotifyOutlet({ open: notify_open } as any, true);
            (spectator.inject(MatDialog).open as any).mockReturnValue({
                componentInstance: { change, loading, disabled_rooms },
            });
        });

        afterEach(() => setNotifyOutlet(null, true));

        it('should open the modal and save the selected rooms', async () => {
            spectator.service.setRoomAvailability();
            expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
                AvailableRoomsStateModalComponent,
                { data: { type: 'Catering', disabled_rooms: [] } },
            );

            change.next(['room-2']);
            await settle();

            expect(ts_client.updateMetadata).toHaveBeenCalledWith(
                'bld-1',
                expect.objectContaining({
                    name: 'catering-settings',
                    details: expect.objectContaining({
                        disabled_rooms: ['room-2'],
                    }),
                }),
            );
            expect(notify_open).toHaveBeenCalledWith(
                'Room availability settings saved',
                'OK',
                expect.objectContaining({ panelClass: ['success'] }),
            );
            expect(loading()).toBe(false);
        });

        it('should show the error and stop loading when the save fails', async () => {
            vi.mocked(ts_client.updateMetadata).mockRejectedValueOnce(
                new Error('save failed'),
            );
            spectator.service.setRoomAvailability();

            disabled_rooms.set(['room-2']);
            change.next(['room-2']);
            await settle();

            expect(disabled_rooms()).toEqual([]);
            expect(notify_open).toHaveBeenCalledWith(
                'Failed to save room availability. save failed',
                'OK',
                expect.objectContaining({ panelClass: ['error'] }),
            );
            expect(loading()).toBe(false);
        });
    });

    it('should get the catering rules of a zone, or none when not a list', async () => {
        const details = [{ name: '*', rules: [] }];
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details,
        } as never);
        await expect(
            spectator.service.getCateringConfig('bld-2'),
        ).resolves.toEqual(details);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-2',
            'catering_config',
        );

        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: { name: '*' },
        } as never);
        await expect(spectator.service.getCateringConfig()).resolves.toEqual(
            [],
        );
        expect(ts_client.showMetadata).toHaveBeenLastCalledWith(
            'bld-1',
            'catering_config',
        );
    });

    describe('importMenu', () => {
        const close = vi.fn();
        /** Make the import modal emit the items */
        const importItems = (items: CateringItem[]) =>
            vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
                componentInstance: {
                    event: of({ reason: 'done', metadata: items }),
                    loading: signal(''),
                },
                afterClosed: () => NEVER,
                close,
            } as unknown as ReturnType<MatDialog['open']>);

        beforeEach(() => close.mockClear());

        it('should save imported items over menu items with the same ID', async () => {
            setMenu([
                new CateringItem({ id: 'a', name: 'Coffee' }),
                new CateringItem({ id: 'b', name: 'Tea' }),
            ]);
            importItems([
                new CateringItem({ id: 'a', name: 'Flat white' }),
                new CateringItem({ id: 'c', name: 'Muffin' }),
            ]);

            await spectator.service.importMenu();

            expect(spectator.service.menu().map((i) => i.name)).toEqual([
                'Flat white',
                'Muffin',
                'Tea',
            ]);
            expect(close).toHaveBeenCalled();
        });

        it('should keep the menu and close the modal when a save fails', async () => {
            setMenu([new CateringItem({ id: 'a', name: 'Coffee' })]);
            vi.mocked(ts_client.addAsset).mockRejectedValue(
                new Error('offline'),
            );
            vi.mocked(ts_client.updateAsset).mockRejectedValue(
                new Error('offline'),
            );
            importItems([new CateringItem({ id: 'c', name: 'Muffin' })]);

            await expect(spectator.service.importMenu()).rejects.toThrow(
                'offline',
            );

            expect(spectator.service.menu().map((i) => i.name)).toEqual([
                'Coffee',
            ]);
            expect(close).toHaveBeenCalled();
        });
    });

    it('should open a copy of an item without its ID', async () => {
        const add = vi
            .spyOn(spectator.service, 'addItem')
            .mockResolvedValue(undefined);
        await spectator.service.duplicateItem(
            new CateringItem({ id: 'item-1', name: 'Coffee', unit_price: 400 }),
        );

        const copy = add.mock.calls[0][0];
        expect(copy.id).toBe('');
        expect(copy.unit_price).toBe(400);
        expect(copy.name).not.toBe('Coffee');
    });

    it('should only save items that need a change for the zone', async () => {
        openDialog(doneDialog());
        const items = [
            new CateringItem({ id: 'a', name: 'A', hide_for_zones: ['z1'] }),
            new CateringItem({ id: 'b', name: 'B' }),
        ];

        await spectator.service.setItemsEnabled(items, 'z1', true);
        await flush();

        expect(ts_client.updateAsset).toHaveBeenCalledTimes(1);
        expect(vi.mocked(ts_client.updateAsset).mock.calls[0][0]).toBe('a');
    });

    it('should save the other items and show an error when one save fails', async () => {
        const notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));
        setNotifyOutlet({ open: notify_open } as unknown as MatSnackBar, true);
        const items = [
            new CateringItem({ id: 'a', name: 'A' }),
            new CateringItem({ id: 'b', name: 'B' }),
        ];
        setMenu(items);
        vi.mocked(ts_client.updateAsset).mockRejectedValueOnce('offline');
        openDialog(doneDialog());

        await spectator.service.setItemsEnabled(items, 'z1', false);
        setNotifyOutlet(null, true);

        expect(
            spectator.service.menu().map((i) => [i.id, i.hide_for_zones]),
        ).toEqual([
            ['a', []],
            ['b', ['z1']],
        ]);
        expect(notify_open).toHaveBeenCalledWith(
            'CATERING.ITEM_SAVE_ERROR',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    describe('building load', () => {
        it('should load the catering settings of the building', async () => {
            vi.mocked(ts_client.showMetadata).mockResolvedValue({
                details: {
                    require_notes: true,
                    charge_codes: ['CC-1'],
                    disabled_rooms: ['room-1'],
                },
            } as any);
            TestBed.tick();
            await flush();

            expect(ts_client.showMetadata).toHaveBeenCalledWith(
                'bld-1',
                'catering-settings',
            );
            expect(spectator.service.charge_codes()).toEqual(['CC-1']);
            expect(spectator.service.availability()).toEqual(['room-1']);
            expect(spectator.inject(SettingsService).post).toHaveBeenCalledWith(
                'require_catering_notes',
                true,
            );
        });

        it('should use the currency from the app settings first', async () => {
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) => (key === 'app.currency' ? 'AUD' : undefined),
            );
            TestBed.tick();
            await flush();
            expect(spectator.service.currency()).toBe('AUD');
        });
    });

    describe('caterers', () => {
        afterEach(() => setCurrentUser(EMPTY_USER));

        it('should list the caterers of the menu when no groups are set', () => {
            setMenu([
                new CateringItem({ id: '1', caterer: 'Deli' }),
                new CateringItem({ id: '2', caterer: 'Cafe' }),
                new CateringItem({ id: '3', caterer: 'Deli' }),
            ]);
            expect(spectator.service.caterers()).toEqual(['Cafe', 'Deli']);
        });

        it('should only list the caterers of the groups the user is in', () => {
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) =>
                    key === 'app.catering_provider_groups'
                        ? {
                              Deli: ['deli-staff'],
                              Cafe: ['cafe-staff'],
                              Bar: ['bar-staff'],
                          }
                        : undefined,
            );
            setCurrentUser(
                new StaffUser({ groups: ['deli-staff', 'cafe-staff'] }),
            );
            expect(spectator.service.caterers()).toEqual(['Cafe', 'Deli']);
        });
    });
});
