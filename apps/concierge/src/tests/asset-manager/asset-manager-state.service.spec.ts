import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import * as assets_mod from '@placeos/assets';
import * as booking_mod from '@placeos/bookings';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/bookings');
jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        showMetadata: jest.fn(async () => ({ details: {} })),
        updateMetadata: jest.fn(async () => ({ id: 'meta' })),
        removeAssetType: jest.fn(async () => ({})),
    };
});

describe('AssetManagerStateService', () => {
    let spectator: SpectatorService<AssetManagerStateService>;
    let model_data: Record<string, any>;
    let settings_map: Record<string, any>;

    const organisation_service: any = {
        active_building: signal({ id: 'bld-1' }),
        active_region: signal(null),
        initialised: signal(true),
        buildingsForRegion: jest.fn(() => []),
        levelWithID: jest.fn(),
        get building() {
            return { id: 'bld-1' };
        },
    };

    const createService = createServiceFactory({
        service: AssetManagerStateService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SpacesService, {
                initialised: signal(true),
                find: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((name: string) => settings_map[name]),
            } as any),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    beforeEach(() => {
        settings_map = { 'app.use_region': false };
        model_data = {
            id: '',
            name: 'Chair',
            quantity: 1,
            category: 'furniture',
            brand: 'Acme',
            images: [],
            serial_number: 'SER-1',
            warranty: '2 years',
        };
        (assets_mod as any).generateAssetForm = jest.fn(() => ({
            form: signal({ valid: () => true, reset: jest.fn() }),
            model: signal(model_data),
        }));
        (assets_mod as any).getGroupsWithAssets = jest.fn(async () => ({
            data: [],
        }));
        (assets_mod as any).queryAssetPurchaseOrders = jest.fn(async () => ({
            data: [],
        }));
        (assets_mod as any).queryAssetCategories = jest.fn(async () => ({
            data: [],
        }));
        (assets_mod as any).showGroupFull = jest.fn(async () => null);
        (assets_mod as any).saveAsset = jest.fn(async () => ({ id: 'asset-1' }));
        (assets_mod as any).showGroupFull = jest.fn(async () => null);
        (booking_mod as any).queryBookings = jest.fn(async () => []);
        (booking_mod as any).approveBooking = jest.fn(async () => ({
            id: 'b-1',
            status: 'approved',
        }));
        (booking_mod as any).rejectBooking = jest.fn(async () => ({
            id: 'b-1',
            status: 'declined',
        }));
        (booking_mod as any).updateBooking = jest.fn(async () => ({
            id: 'b-1',
        }));
        jest.clearAllMocks();
        spectator = createService();
    });

    it('should merge partial view options', () => {
        spectator.service.setOptions({ search: 'chair' });
        spectator.service.setOptions({ view: 'list' });

        expect(spectator.service.options()).toEqual(
            expect.objectContaining({ search: 'chair', view: 'list' }),
        );
    });

    it('should track extra assets separately', () => {
        const list = [{ id: 'a-1' }] as any;
        spectator.service.setExtraAssets(list);

        expect(spectator.service.extra_assets()).toBe(list);
    });

    it('should group loaded products by category', async () => {
        (assets_mod.getGroupsWithAssets as jest.Mock).mockResolvedValue({
            data: [
                { id: 'g1', name: 'Chair', category_id: 'cat-1', assets: [] },
                { id: 'g2', name: 'Desk', category_id: '', assets: [] },
            ],
        });
        (assets_mod.queryAssetCategories as jest.Mock).mockResolvedValue({
            data: [{ id: 'cat-1', name: 'Furniture' }],
        });
        spectator.service.postChange();
        TestBed.flushEffects();
        await new Promise((resolve) => setTimeout(resolve, 20));
        TestBed.flushEffects();

        const mapping = spectator.service.product_mapping();
        expect(mapping._count).toBe(2);
        expect(mapping['cat-1']).toHaveLength(1);
        expect(mapping['cat-1'][0]).toEqual(
            expect.objectContaining({ id: 'g1' }),
        );
        expect(mapping['']).toHaveLength(1);
    });

    it('should filter loaded products by the search option', async () => {
        (assets_mod.getGroupsWithAssets as jest.Mock).mockResolvedValue({
            data: [
                { id: 'g1', name: 'Office Chair', category_id: '', assets: [] },
                { id: 'g2', name: 'Standing Desk', category_id: '', assets: [] },
            ],
        });
        TestBed.flushEffects();
        await new Promise((resolve) => setTimeout(resolve, 20));
        TestBed.flushEffects();

        spectator.service.setOptions({ search: 'desk' });

        expect(spectator.service.filtered_products()).toEqual([
            expect.objectContaining({ id: 'g2' }),
        ]);
    });

    it('should approve bookings when setting an approved status', async () => {
        const item = { id: 'b-1' } as any;

        const result = await spectator.service.setStatus(item, 'approved');

        expect(booking_mod.approveBooking).toHaveBeenCalledWith('b-1');
        expect(booking_mod.rejectBooking).not.toHaveBeenCalled();
        expect(result).toEqual(expect.objectContaining({ status: 'approved' }));
    });

    it('should reject bookings when setting a declined status', async () => {
        const item = { id: 'b-1' } as any;

        await spectator.service.setStatus(item, 'declined');

        expect(booking_mod.rejectBooking).toHaveBeenCalledWith('b-1');
        expect(booking_mod.approveBooking).not.toHaveBeenCalled();
    });

    it('should persist tracking state onto the booking extension data', async () => {
        const item = {
            id: 'b-1',
            extension_data: { existing: true },
            toJSON: () => ({ id: 'b-1', name: 'Booking' }),
        } as any;

        await spectator.service.setTracking(item, 'in_transit');

        expect(booking_mod.updateBooking).toHaveBeenCalledWith(
            'b-1',
            expect.objectContaining({
                extension_data: expect.objectContaining({
                    existing: true,
                    tracking: 'in_transit',
                }),
            }),
        );
    });

    it('should save the asset form model with non-core fields moved to other_data', async () => {
        const id = await spectator.service.postForm();

        expect(assets_mod.saveAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'Chair',
                other_data: expect.objectContaining({ warranty: '2 years' }),
            }),
        );
        const saved = (assets_mod.saveAsset as jest.Mock).mock.calls[0][0];
        expect(saved.other_data).not.toHaveProperty('name');
        expect(saved.other_data).not.toHaveProperty('id');
        expect(id).toBe('asset-1');
    });

    it('should not save an invalid asset form', async () => {
        (assets_mod.generateAssetForm as jest.Mock).mockReturnValue({
            form: signal({ valid: () => false, reset: jest.fn() }),
            model: signal(model_data),
        });
        spectator.service.resetForm();

        await spectator.service.postForm();

        expect(assets_mod.saveAsset).not.toHaveBeenCalled();
    });

    it('should return a stop callback when polling starts', () => {
        const stop = spectator.service.startPolling();
        expect(typeof stop).toBe('function');
        expect(() => stop()).not.toThrow();
    });
});
