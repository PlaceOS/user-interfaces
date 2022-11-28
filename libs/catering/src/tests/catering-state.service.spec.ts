import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Building, OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CateringOrder } from '../lib/catering-order.class';
import { CateringStateService } from '../lib/catering-state.service';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import { CateringItem } from '../lib/catering-item.class';
import { MockProvider } from 'ng-mocks';
import { SettingsService } from '@placeos/common';

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
                active_building: new BehaviorSubject(new Building()),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (ts_client as any).showMetadata = jest.fn(() => of({}));
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow user to manage catering orders', async () => {
        const dialog = spectator.inject(MatDialog);
        const input_order = new CateringOrder();
        (dialog.open as any).mockImplementation(dialog_fn(true));
        let order = await spectator.service.manageCateringOrder(input_order);
        expect(order).toBe(input_order);
        (dialog.open as any).mockImplementation(
            dialog_fn(false, { order: new CateringOrder() })
        );
        order = await spectator.service.manageCateringOrder(input_order);
        expect(order).not.toBe(input_order);
    });

    it('should allow user to add new catering items to menu', async () => {
        const dialog = spectator.inject(MatDialog);
        (ts_client as any).updateMetadata = jest.fn(() => of({}));
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.addItem();
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(
            dialog_fn(false, { item: new CateringItem() })
        );
        await spectator.service.addItem(new CateringItem());
        expect(ts_client.updateMetadata).toHaveBeenCalledWith('bld-1', {
            id: 'bld-1',
            name: 'catering',
            details: [new CateringItem()],
            description: 'Catering menu for bld-1',
        });
    });

    it('should allow user to add new catering options to menu items', async () => {
        const dialog = spectator.inject(MatDialog);
        (ts_client as any).updateMetadata = jest.fn(() => of({}));
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.addOption(new CateringItem());
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(
            dialog_fn(false, {
                item: new CateringItem({ options: [{} as any] }),
            })
        );
        await spectator.service.addOption(new CateringItem(), {} as any);
        expect(ts_client.updateMetadata).toHaveBeenCalledWith('bld-1', {
            id: 'bld-1',
            name: 'catering',
            details: [new CateringItem({ options: [{} as any] })],
            description: 'Catering menu for bld-1',
        });
    });

    it('should allow user to select catering options to orders', async () => {
        const dialog = spectator.inject(MatDialog);
        (ts_client as any).updateMetadata = jest.fn(() => of({}));
        (dialog.open as any).mockImplementation(dialog_fn(true));
        let options = await spectator.service.selectOptions([]);
        expect(options).toEqual([]);
        (dialog.open as any).mockImplementation(
            dialog_fn(false, { options: [{} as any] })
        );
        options = await spectator.service.selectOptions([]);
        expect(options).toEqual([{}]);
    });

    it('should allow user to remove catering items from menu', async () => {
        const dialog = spectator.inject(MatDialog);
        (ts_client as any).updateMetadata = jest.fn(() => of({}));
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.deleteItem(new CateringItem());
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.deleteItem(new CateringItem());
        expect(ts_client.updateMetadata).toHaveBeenCalledWith('bld-1', {
            id: 'bld-1',
            name: 'catering',
            details: [],
            description: 'Catering menu for bld-1',
        });
    });

    it('should allow user to remove catering options to menu items', async () => {
        const dialog = spectator.inject(MatDialog);
        (ts_client as any).updateMetadata = jest.fn(() => of({}));
        (dialog.open as any).mockImplementation(dialog_fn(true));
        await spectator.service.deleteOption(new CateringItem(), {} as any);
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
        (dialog.open as any).mockImplementation(dialog_fn(false, [{}]));
        await spectator.service.deleteOption(new CateringItem(), {} as any);
        expect(ts_client.updateMetadata).toHaveBeenCalledWith('bld-1', {
            id: 'bld-1',
            name: 'catering',
            details: [new CateringItem()],
            description: 'Catering menu for bld-1',
        });
    });

    it('should allow user to edit catering config', async () => {
        const dialog = spectator.inject(MatDialog);
        (ts_client as any).showMetadata = jest.fn(() => of({}));
        (ts_client as any).updateMetadata = jest.fn(() => of({}));
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
        (ts_client as any).showMetadata = jest.fn(() => of({}));
        let config = await spectator.service.getCateringConfig();
        expect(config).toEqual([]);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'catering_config'
        );
        (ts_client as any).showMetadata = jest.fn(() => of([]));
        config = await spectator.service.getCateringConfig('bld-2');
        expect(config).toEqual([]);
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-2',
            'catering_config'
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
