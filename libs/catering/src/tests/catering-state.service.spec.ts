import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
    Building,
    CateringItem,
    CateringOrder,
    OrganisationService,
} from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { CateringStateService } from '../lib/catering-state.service';

// The `@placeos/assets` catering fns run for real; only the ts-client API
// layer beneath them (asset/type/category queries + mutations) is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

const dialog_fn = (has_delay, metadata?) => () => ({
    componentInstance: {
        event: has_delay
            ? of({ reason: 'done', metadata }).pipe(delay(1000))
            : of({ reason: 'done', metadata }),
    },
    close: () => null,
    afterClosed: () => of({}),
});

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
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
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
        vi.mocked(ts_client.removeAsset).mockResolvedValue({} as any);
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
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow user to add new catering items to menu', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.addItem();
        await flush();
        expect(ts_client.addAsset).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(
            dialog_fn(false, { item: new CateringItem() }),
        );
        await spectator.service.addItem(new CateringItem());
        await flush();
        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                zone_id: 'bld-1',
                asset_type_id: 'type-1',
            }),
        );
    });

    it('should allow user to add new catering options to menu items', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.addOption(new CateringItem());
        await flush();
        expect(ts_client.addAsset).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(
            dialog_fn(false, {
                item: new CateringItem({ options: [{} as any] }),
            }),
        );
        await spectator.service.addOption(new CateringItem(), {} as any);
        await flush();
        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                zone_id: 'bld-1',
                other_data: expect.objectContaining({
                    options: expect.arrayContaining([expect.anything()]),
                }),
            }),
        );
    });

    it('should allow user to select catering options to orders', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        let options = await spectator.service.selectOptions([]);
        expect(options).toEqual([]);
        (dialog.open as any).mockImplementation(
            dialog_fn(false, { options: [{} as any] }),
        );
        options = await spectator.service.selectOptions([]);
        expect(options).toEqual([{}]);
    });

    it('should allow user to remove catering items from menu', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.deleteItem(new CateringItem());
        await flush();
        expect(ts_client.removeAsset).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.deleteItem(new CateringItem());
        await flush();
        expect(ts_client.removeAsset).toHaveBeenCalledWith('');
    });

    it('should allow user to remove catering options to menu items', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.deleteOption(new CateringItem(), {} as any);
        await flush();
        expect(ts_client.addAsset).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.deleteOption(new CateringItem(), {} as any);
        await flush();
        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({ zone_id: 'bld-1' }),
        );
    });

    it('should allow user to edit catering config', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.editConfig();
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.editConfig();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith('bld-1', {
            id: 'bld-1',
            name: 'catering_config',
            details: [{}],
            description: 'Catering menu config for bld-1',
        });
    });

    it('should allow user to get catering config', async () => {
        vi.mocked(ts_client.showMetadata).mockResolvedValue({} as any);
        let config = await spectator.service.getCateringConfig();
        expect(config).toEqual([]);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'catering_config',
        );
        vi.mocked(ts_client.showMetadata).mockResolvedValue([] as any);
        config = await spectator.service.getCateringConfig('bld-2');
        expect(config).toEqual([]);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-2',
            'catering_config',
        );
    });

    it('should allow user to add items to order', () => {
        const order = new CateringOrder();
        const item = new CateringItem({ id: '1' });
        let updated_order = spectator.service.addItemToOrder(order, item);
        expect(updated_order.items).toHaveLength(1);
        expect(updated_order.items[0].quantity).toBe(1);
        updated_order = spectator.service.addItemToOrder(updated_order, item);
        expect(updated_order.items).toHaveLength(1);
        expect(updated_order.items[0].quantity).toBe(2);
    });
});
