import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    }) as any;
}

async function load_module() {
    return (await import('./desk-assets.fn')) as any;
}

describe('[Desk Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.removeAsset).mockResolvedValue(undefined as any);
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
        vi.mocked(ts_client.queryAssets).mockImplementation(
            ({ zone_id }: any) => response([{ id: `${zone_id}-desk` }]),
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
