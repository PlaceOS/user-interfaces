import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
    Building,
    CateringItem,
    CateringOrder,
    OrganisationService,
} from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { CateringStateService } from '../lib/catering-state.service';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
    updateMetadata: jest.fn(),
}));
jest.mock('@placeos/assets', () => ({
    deleteCateringItem: jest.fn(),
    queryCateringItems: jest.fn(),
    saveCateringItem: jest.fn(),
}));

import * as assets_mod from '@placeos/assets';
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

describe('CateringStateService', () => {
    let spectator: SpectatorService<CateringStateService>;
    const createService = createServiceFactory({
        service: CateringStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building({ id: 'bld-1' }),
                building_signal: signal(new Building({ id: 'bld-1' })),
                active_building: new BehaviorSubject(new Building()),
                initialised: of(true),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(ts_client.showMetadata).mockResolvedValue({} as any);
        jest.mocked(ts_client.updateMetadata).mockResolvedValue({} as any);
        (assets_mod.queryCateringItems as jest.Mock).mockResolvedValue([]);
        (assets_mod.saveCateringItem as jest.Mock).mockImplementation((item) =>
            Promise.resolve(item),
        );
        (assets_mod.deleteCateringItem as jest.Mock).mockResolvedValue({});
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow user to add new catering items to menu', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.addItem();
        expect(assets_mod.saveCateringItem).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(
            dialog_fn(false, { item: new CateringItem() }),
        );
        await spectator.service.addItem(new CateringItem());
        expect(assets_mod.saveCateringItem).toHaveBeenCalledWith(
            new CateringItem(),
            'bld-1',
        );
    });

    it('should allow user to add new catering options to menu items', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.addOption(new CateringItem());
        expect(assets_mod.saveCateringItem).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(
            dialog_fn(false, {
                item: new CateringItem({ options: [{} as any] }),
            }),
        );
        await spectator.service.addOption(new CateringItem(), {} as any);
        expect(assets_mod.saveCateringItem).toHaveBeenCalledWith(
            new CateringItem({ options: [{} as any] }),
            'bld-1',
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
        expect(assets_mod.deleteCateringItem).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.deleteItem(new CateringItem());
        expect(assets_mod.deleteCateringItem).toHaveBeenCalledWith('');
    });

    it('should allow user to remove catering options to menu items', async () => {
        const dialog = spectator.inject(MatDialog);
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.deleteOption(new CateringItem(), {} as any);
        expect(assets_mod.saveCateringItem).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.deleteOption(new CateringItem(), {} as any);
        expect(assets_mod.saveCateringItem).toHaveBeenCalledWith(
            new CateringItem(),
            'bld-1',
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
        jest.mocked(ts_client.showMetadata).mockResolvedValue({} as any);
        let config = await spectator.service.getCateringConfig();
        expect(config).toEqual([]);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'catering_config',
        );
        jest.mocked(ts_client.showMetadata).mockResolvedValue([] as any);
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
