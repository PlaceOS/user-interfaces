jest.mock('@placeos/ts-client', () => ({
    queryAssetCategories: jest.fn(),
    queryAssetTypes: jest.fn(),
    queryAssets: jest.fn(),
    removeAsset: jest.fn(),
}));

jest.mock('./assets.fn', () => ({
    findOldestByName: jest.requireActual('./assets.fn').findOldestByName,
    saveAsset: jest.fn(),
    saveAssetCategory: jest.fn(),
    saveAssetType: jest.fn(),
}));

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    }) as any;
}

async function load_modules() {
    const ts_client = (await import('@placeos/ts-client')) as any;
    const assets_fn = (await import('./assets.fn')) as any;
    const locker = (await import('./locker-assets.fn')) as any;
    return { ts_client, assets_fn, locker };
}

describe('[Locker Assets]', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    describe('resolveLockerBankTypeId', () => {
        it('should reuse the existing hidden category and bank type', async () => {
            const { ts_client, assets_fn, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([
                    {
                        id: 'type-1',
                        name: '_LOCKER_BANKS_',
                        category_id: 'cat-1',
                    },
                ]),
            );

            const type_id = await locker.resolveLockerBankTypeId();
            expect(type_id).toBe('type-1');
            expect(assets_fn.saveAssetCategory).not.toHaveBeenCalled();
            expect(assets_fn.saveAssetType).not.toHaveBeenCalled();
        });

        it('should create the hidden category and bank type when missing', async () => {
            const { ts_client, assets_fn, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(response([]));
            ts_client.queryAssetTypes.mockReturnValue(response([]));
            assets_fn.saveAssetCategory.mockResolvedValue({
                id: 'cat-1',
                name: '_LOCKERS_',
            });
            assets_fn.saveAssetType.mockResolvedValue({
                id: 'type-1',
                name: '_LOCKER_BANKS_',
            });

            const type_id = await locker.resolveLockerBankTypeId();
            expect(type_id).toBe('type-1');
            expect(assets_fn.saveAssetCategory).toHaveBeenCalledWith({
                name: '_LOCKERS_',
                hidden: true,
            });
            expect(assets_fn.saveAssetType).toHaveBeenCalledWith({
                name: '_LOCKER_BANKS_',
                brand: 'PlaceOS',
                category_id: 'cat-1',
            });
        });

        it('should memoise the resolved bank type id', async () => {
            const { ts_client, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );

            const first = await locker.resolveLockerBankTypeId();
            ts_client.queryAssetCategories.mockClear();
            ts_client.queryAssetTypes.mockClear();
            const second = await locker.resolveLockerBankTypeId();

            expect(second).toBe(first);
            expect(ts_client.queryAssetCategories).not.toHaveBeenCalled();
            expect(ts_client.queryAssetTypes).not.toHaveBeenCalled();
        });
    });

    describe('resolveLockerTypeId', () => {
        it('should reuse the existing hidden category and locker type', async () => {
            const { ts_client, assets_fn, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([
                    { id: 'type-2', name: '_LOCKERS_', category_id: 'cat-1' },
                ]),
            );

            const type_id = await locker.resolveLockerTypeId();
            expect(type_id).toBe('type-2');
            expect(assets_fn.saveAssetType).not.toHaveBeenCalled();
        });
    });

    describe('queryLockerBankAssets', () => {
        it('should query assets for the zone and bank type', async () => {
            const { ts_client, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );
            ts_client.queryAssets.mockReturnValue(
                response([{ id: 'a1' }, { id: 'a2' }]),
            );

            const list = await locker.queryLockerBankAssets('zone-1');
            expect(ts_client.queryAssets).toHaveBeenCalledWith({
                zone_id: 'zone-1',
                type_id: 'type-1',
                limit: 500,
            });
            expect(list.map((a: any) => a.id)).toEqual(['a1', 'a2']);
        });
    });

    describe('queryLockerBankAssetsForZones', () => {
        it('should resolve empty for no zones', async () => {
            const { locker } = await load_modules();
            expect(await locker.queryLockerBankAssetsForZones([])).toEqual([]);
        });

        it('should flatten the per-zone results', async () => {
            const { ts_client, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );
            ts_client.queryAssets.mockImplementation(({ zone_id }: any) =>
                response([{ id: `${zone_id}-a` }]),
            );

            const list = await locker.queryLockerBankAssetsForZones([
                'z1',
                'z2',
            ]);
            expect(list.map((a: any) => a.id)).toEqual(['z1-a', 'z2-a']);
        });
    });

    describe('saveLockerBankAsset', () => {
        it('should save the asset stamped with the bank type id', async () => {
            const { ts_client, assets_fn, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );
            assets_fn.saveAsset.mockResolvedValue({ id: 'a1' });

            const res = await locker.saveLockerBankAsset({ name: 'Bank 1' });
            expect(assets_fn.saveAsset).toHaveBeenCalledWith({
                name: 'Bank 1',
                asset_type_id: 'type-1',
            });
            expect(res.id).toBe('a1');
        });
    });

    describe('saveLockerAsset', () => {
        it('should save the asset stamped with the locker type id', async () => {
            const { ts_client, assets_fn, locker } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 'type-2', name: '_LOCKERS_' }]),
            );
            assets_fn.saveAsset.mockResolvedValue({ id: 'l1' });

            const res = await locker.saveLockerAsset({ name: 'Locker 1' });
            expect(assets_fn.saveAsset).toHaveBeenCalledWith({
                name: 'Locker 1',
                asset_type_id: 'type-2',
            });
            expect(res.id).toBe('l1');
        });
    });

    describe('delete helpers', () => {
        it('should remove the given asset id for banks and lockers', async () => {
            const { ts_client, locker } = await load_modules();
            ts_client.removeAsset.mockResolvedValue(true);

            locker.deleteLockerBankAsset('bank-1');
            expect(ts_client.removeAsset).toHaveBeenCalledWith('bank-1');

            locker.deleteLockerAsset('locker-1');
            expect(ts_client.removeAsset).toHaveBeenCalledWith('locker-1');
        });
    });
});
