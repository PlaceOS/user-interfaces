import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('AssetManagerStateService', () => {
    let spectator: SpectatorService<AssetManagerStateService>;
    let model_data: Record<string, any>;
    let settings_map: Record<string, any>;

    const organisation_service: any = {
        active_building: signal({ id: 'bld-1' }),
        active_region: signal(null),
        initialised: signal(true),
        buildingsForRegion: vi.fn(() => []),
        levelWithID: vi.fn(),
        get building() {
            return { id: 'bld-1' };
        },
    };

    const createService = createServiceFactory({
        service: AssetManagerStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SpacesService, {
                initialised: signal(true),
                find: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => settings_map[name]),
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
        vi.clearAllMocks();
        // The workspace asset/booking wrappers cannot be spied under this
        // builder, so stub the ts-client primitives they call with safe
        // defaults. Individual tests override these as needed.
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        } as any);
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        } as any);
        vi.mocked(ts_client.queryAssets).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        } as any);
        vi.mocked(ts_client.queryAssetPurchaseOrders).mockResolvedValue({
            data: [],
            total: 0,
            next: null,
        } as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        vi.mocked(ts_client.showAssetType).mockResolvedValue({} as any);
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.post).mockResolvedValue({} as any);
        vi.mocked(ts_client.patch).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAsset).mockResolvedValue({
            id: 'asset-1',
        } as any);
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
        // getGroupsWithAssets -> queryAssetTypes filters by visible category
        // ids, so both categories must be returned by queryAssetCategories.
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [
                { id: 'g1', name: 'Chair', category_id: 'cat-1', assets: [] },
                { id: 'g2', name: 'Desk', category_id: '', assets: [] },
            ],
            total: 2,
            next: null,
        } as any);
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [
                { id: 'cat-1', name: 'Furniture' },
                { id: '', name: 'Uncategorised' },
            ],
            total: 2,
            next: null,
        } as any);
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
        vi.mocked(ts_client.queryAssetTypes).mockResolvedValue({
            data: [
                { id: 'g1', name: 'Office Chair', category_id: '', assets: [] },
                { id: 'g2', name: 'Standing Desk', category_id: '', assets: [] },
            ],
            total: 2,
            next: null,
        } as any);
        vi.mocked(ts_client.queryAssetCategories).mockResolvedValue({
            data: [{ id: '', name: 'Uncategorised' }],
            total: 1,
            next: null,
        } as any);
        TestBed.flushEffects();
        await new Promise((resolve) => setTimeout(resolve, 20));
        TestBed.flushEffects();

        spectator.service.setOptions({ search: 'desk' });

        expect(spectator.service.filtered_products()).toEqual([
            expect.objectContaining({ id: 'g2' }),
        ]);
    });

    it('should approve bookings when setting an approved status', async () => {
        // approveBooking -> post(<endpoint>/<id>/approve, '')
        vi.mocked(ts_client.post).mockResolvedValue({
            id: 'b-1',
            status: 'approved',
        } as any);
        const item = { id: 'b-1' } as any;

        const result = await spectator.service.setStatus(item, 'approved');

        expect(ts_client.post).toHaveBeenCalledWith(
            '/api/staff/v1/bookings/b-1/approve',
            '',
        );
        expect(ts_client.post).not.toHaveBeenCalledWith(
            '/api/staff/v1/bookings/b-1/reject',
            '',
        );
        expect(result).toEqual(expect.objectContaining({ status: 'approved' }));
    });

    it('should reject bookings when setting a declined status', async () => {
        vi.mocked(ts_client.post).mockResolvedValue({
            id: 'b-1',
            status: 'declined',
        } as any);
        const item = { id: 'b-1' } as any;

        await spectator.service.setStatus(item, 'declined');

        expect(ts_client.post).toHaveBeenCalledWith(
            '/api/staff/v1/bookings/b-1/reject',
            '',
        );
        expect(ts_client.post).not.toHaveBeenCalledWith(
            '/api/staff/v1/bookings/b-1/approve',
            '',
        );
    });

    it('should persist tracking state onto the booking extension data', async () => {
        vi.mocked(ts_client.patch).mockResolvedValue({ id: 'b-1' } as any);
        const item = {
            id: 'b-1',
            extension_data: { existing: true },
            toJSON: () => ({ id: 'b-1', name: 'Booking' }),
        } as any;

        await spectator.service.setTracking(item, 'in_transit');

        // updateBooking -> patch(<endpoint>/<id>, withAppVersion(data))
        expect(ts_client.patch).toHaveBeenCalledWith(
            '/api/staff/v1/bookings/b-1',
            expect.objectContaining({
                extension_data: expect.objectContaining({
                    existing: true,
                    tracking: 'in_transit',
                }),
            }),
        );
    });

    it('should save the asset form model with non-core fields moved to other_data', async () => {
        vi.mocked(ts_client.addAsset).mockResolvedValue({
            id: 'asset-1',
        } as any);
        // Drive the real signal form: asset_type_id makes it valid, extra
        // fields (warranty, serial_number) must land in other_data.
        (spectator.service.model as any).set({
            id: '',
            asset_type_id: 'g1',
            name: 'Chair',
            serial_number: 'SER-1',
            barcode: '',
            identifier: '',
            other_data: {},
            purchase_order_id: '',
            quantity: 1,
            category: 'furniture',
            brand: 'Acme',
            images: [],
            warranty: '2 years',
        });
        TestBed.flushEffects();

        const id = await spectator.service.postForm();

        // saveAsset -> addAsset for new (id-less) assets
        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'Chair',
                other_data: expect.objectContaining({ warranty: '2 years' }),
            }),
        );
        const saved = vi.mocked(ts_client.addAsset).mock.calls[0][0] as any;
        expect(saved.other_data).not.toHaveProperty('name');
        expect(saved.other_data).not.toHaveProperty('id');
        expect(id).toBe('asset-1');
    });

    it('should not save an invalid asset form', async () => {
        // A freshly generated form has an empty required asset_type_id, so it
        // is invalid and postForm must not reach saveAsset/addAsset.
        spectator.service.resetForm();

        await spectator.service.postForm();

        expect(ts_client.addAsset).not.toHaveBeenCalled();
    });

    it('should return a stop callback when polling starts', () => {
        const stop = spectator.service.startPolling();
        expect(typeof stop).toBe('function');
        expect(() => stop()).not.toThrow();
    });
});
