import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    });
}

async function load_module() {
    return await import('./desk-assets.fn');
}

describe('[Desk Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.removeAsset).mockResolvedValue(undefined);
    });

    it('should reuse the existing hidden desk category and type', async () => {
        const desks = await load_module();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_DESKS_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([{ id: 'type-1', name: '_DESKS_' }]),
        );

        expect(await desks.resolveDeskTypeId()).toBe('type-1');
        expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.addAssetType).not.toHaveBeenCalled();
    });

    it('should create the hidden desk category and type when missing', async () => {
        const desks = await load_module();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(response([]));
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(response([]));
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({
            id: 'cat-1',
            name: '_DESKS_',
        } as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({
            id: 'type-1',
            name: '_DESKS_',
        } as any);

        expect(await desks.resolveDeskTypeId()).toBe('type-1');
        expect(ts_client.addAssetCategory).toHaveBeenCalledWith({
            name: '_DESKS_',
            hidden: true,
        });
        expect(ts_client.addAssetType).toHaveBeenCalledWith({
            name: '_DESKS_',
            brand: 'PlaceOS',
            category_id: 'cat-1',
        });
    });

    it('should query and flatten desk assets for the requested zones', async () => {
        const desks = await load_module();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_DESKS_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([{ id: 'type-1', name: '_DESKS_' }]),
        );
        vi.mocked(ts_client.queryAssets).mockImplementation(({ zone_id }) =>
            response([{ id: `${zone_id}-desk` }]),
        );

        const list = await desks.queryDeskAssetsForZones([
            'level-1',
            'level-2',
        ]);

        expect(list.map((item: any) => item.id)).toEqual([
            'level-1-desk',
            'level-2-desk',
        ]);
    });

    it('should map asset fields to and from a desk', async () => {
        const desks = await load_module();
        const asset = new ts_client.PlaceAsset({
            id: 'asset-1',
            asset_type_id: 'type-1',
            zone_id: 'level-1',
            identifier: 'Desk 1',
            map_id: 'desk-map-1',
            bookable: true,
            place_groups: ['engineering'],
            security_system_groups: ['secure-desks'],
        });

        const desk = desks.deskFromAsset(asset);
        expect(desk.name).toBe('Desk 1');
        expect(desk.groups).toEqual(['engineering']);
        expect(desk.security).toBe('secure-desks');
        expect(
            desks.deskToAsset(desk, 'level-1', [
                'org-1',
                'building-1',
                'level-1',
            ]),
        ).toMatchObject({
            id: 'asset-1',
            identifier: 'Desk 1',
            map_id: 'desk-map-1',
            zones: ['org-1', 'building-1', 'level-1'],
            place_groups: ['engineering'],
            security_system_groups: ['secure-desks'],
        });
    });

    it('should expose custom desk fields from other_data and save them back', async () => {
        const desks = await load_module();
        const asset = new ts_client.PlaceAsset({
            id: 'asset-1',
            asset_type_id: 'type-1',
            zone_id: 'level-1',
            identifier: 'Desk 1',
            map_id: 'desk-1',
            security_system_groups: ['secure-desks', 'level-6'],
            other_data: {
                tags: ['quiet'],
                homebase: 'engineering',
                floorsense_id: 'fs-1234',
            } as any,
        });

        const desk = desks.deskFromAsset(asset);
        expect(desk.tags).toEqual(['quiet']);
        expect(desk.homebase).toBe('engineering');
        expect(desk['floorsense_id']).toBe('fs-1234');

        // edits are merged into the existing other_data, unrelated keys survive
        const edited = new (desk.constructor as any)({
            ...desk,
            tags: ['quiet', 'window'],
            homebase: '',
        });
        const saved = desks.deskToAsset(edited, 'level-1');
        expect(saved.other_data).toEqual({
            tags: ['quiet', 'window'],
            floorsense_id: 'fs-1234',
        });
        // additional security groups are kept while the primary is unchanged
        expect(saved.security_system_groups).toEqual([
            'secure-desks',
            'level-6',
        ]);

        const moved = new (desk.constructor as any)({
            ...desk,
            security: 'other',
        });
        expect(
            desks.deskToAsset(moved, 'level-1').security_system_groups,
        ).toEqual(['other']);
    });

    it('should store custom fields of new desks in other_data', async () => {
        const desks = await load_module();
        const { Desk } = await import('@placeos/common');
        const desk = new Desk({
            id: 'desk-1',
            name: 'Desk 1',
            tags: ['quiet'],
            floorsense_id: 'fs-1',
        } as any);

        const saved = desks.deskToAsset(desk, 'level-1');
        expect(saved.id).toBeUndefined();
        expect(saved.other_data).toEqual({
            tags: ['quiet'],
            floorsense_id: 'fs-1',
        });
    });

    it('should fall back to other_data map_id for the map id', async () => {
        const desks = await load_module();
        const asset = new ts_client.PlaceAsset({
            id: 'asset-1',
            other_data: { map_id: 'desk-legacy' },
        });
        expect(desks.deskFromAsset(asset).map_id).toBe('desk-legacy');
    });

    it('should save and delete desk assets', async () => {
        const desks = await load_module();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_DESKS_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([{ id: 'type-1', name: '_DESKS_' }]),
        );
        vi.mocked(ts_client.addAsset).mockResolvedValue({
            id: 'asset-1',
        } as any);

        await desks.saveDeskAsset(
            { id: 'desk-map-1', map_id: 'desk-map-1', name: 'Desk 1' } as any,
            'level-1',
        );
        expect(ts_client.addAsset).toHaveBeenCalledWith(
            expect.objectContaining({
                asset_type_id: 'type-1',
                zone_id: 'level-1',
                identifier: 'Desk 1',
                map_id: 'desk-map-1',
            }),
        );

        desks.deleteDeskAsset('asset-1');
        expect(ts_client.removeAsset).toHaveBeenCalledWith('asset-1');
    });
});
