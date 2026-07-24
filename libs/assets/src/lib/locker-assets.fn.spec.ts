import * as ts_client from '@placeos/ts-client';

// The real assets.fn save helpers run; only the ts-client add/update/query
// layer beneath them is stubbed. Assertions that used to target
// assets_fn.saveAssetCategory / saveAssetType / saveAsset now target the
// ts-client add/update calls those helpers make.
vi.mock('@placeos/ts-client', { spy: true });

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    }) as any;
}

async function load_modules() {
    const locker = (await import('./locker-assets.fn')) as any;
    return { locker };
}

describe('[Locker Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.removeAsset).mockResolvedValue(undefined as any);
    });

    describe('resolveLockerBankTypeId', () => {
        it('should reuse the existing hidden category and bank type', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
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
            expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
            expect(ts_client.addAssetType).not.toHaveBeenCalled();
        });

        it('should create the hidden category and bank type when missing', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(response([]));
            vi.mocked(ts_client.addAssetCategory).mockResolvedValue({
                id: 'cat-1',
                name: '_LOCKERS_',
            } as any);
            vi.mocked(ts_client.addAssetType).mockResolvedValue({
                id: 'type-1',
                name: '_LOCKER_BANKS_',
            } as any);

            const type_id = await locker.resolveLockerBankTypeId();
            expect(type_id).toBe('type-1');
            expect(ts_client.addAssetCategory).toHaveBeenCalledWith({
                name: '_LOCKERS_',
                hidden: true,
            });
            expect(ts_client.addAssetType).toHaveBeenCalledWith({
                name: '_LOCKER_BANKS_',
                brand: 'PlaceOS',
                category_id: 'cat-1',
            });
        });

        it('should memoise the resolved bank type id', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );

            const first = await locker.resolveLockerBankTypeId();
            vi.mocked(ts_client.queryAssetCategories).mockClear();
            vi.mocked(ts_client.queryAssetTypes).mockClear();
            const second = await locker.resolveLockerBankTypeId();

            expect(second).toBe(first);
            expect(ts_client.queryAssetCategories).not.toHaveBeenCalled();
            expect(ts_client.queryAssetTypes).not.toHaveBeenCalled();
        });
    });

    describe('resolveLockerTypeId', () => {
        it('should reuse the existing hidden category and locker type', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([
                    { id: 'type-2', name: '_LOCKERS_', category_id: 'cat-1' },
                ]),
            );

            const type_id = await locker.resolveLockerTypeId();
            expect(type_id).toBe('type-2');
            expect(ts_client.addAssetType).not.toHaveBeenCalled();
        });
    });

    describe('queryLockerBankAssets', () => {
        it('should query assets for the zone and bank type', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );
            vi.mocked(ts_client.queryAssets).mockReturnValue(
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
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );
            vi.mocked(ts_client.queryAssets).mockImplementation(
                ({ zone_id }: any) => response([{ id: `${zone_id}-a` }]),
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
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
            );
            vi.mocked(ts_client.addAsset).mockResolvedValue({ id: 'a1' } as any);

            const res = await locker.saveLockerBankAsset({ name: 'Bank 1' });
            expect(ts_client.addAsset).toHaveBeenCalledWith({
                name: 'Bank 1',
                asset_type_id: 'type-1',
            });
            expect(res.id).toBe('a1');
        });
    });

    describe('saveLockerAsset', () => {
        it('should save the asset stamped with the locker type id', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'cat-1', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 'type-2', name: '_LOCKERS_' }]),
            );
            vi.mocked(ts_client.addAsset).mockResolvedValue({ id: 'l1' } as any);

            const res = await locker.saveLockerAsset({ name: 'Locker 1' });
            expect(ts_client.addAsset).toHaveBeenCalledWith({
                name: 'Locker 1',
                asset_type_id: 'type-2',
            });
            expect(res.id).toBe('l1');
        });
    });

    describe('delete helpers', () => {
        it('should remove the given asset id for banks and lockers', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.removeAsset).mockResolvedValue(true as any);

            locker.deleteLockerBankAsset('bank-1');
            expect(ts_client.removeAsset).toHaveBeenCalledWith('bank-1');

            locker.deleteLockerAsset('locker-1');
            expect(ts_client.removeAsset).toHaveBeenCalledWith('locker-1');
        });
    });
});
