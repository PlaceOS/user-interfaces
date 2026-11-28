import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';

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
    });
}

async function load_modules() {
    const locker = await import('./locker-assets.fn');
    return { locker };
}

describe('[Locker Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        vi.mocked(ts_client.asset_categories.create).mockResolvedValue(
            mockReply({} as any),
        );
        vi.mocked(ts_client.asset_types.create).mockResolvedValue(
            mockReply({} as any),
        );
        vi.mocked(ts_client.assets.create).mockResolvedValue(
            mockReply({} as any),
        );
        vi.mocked(ts_client.assets.destroy).mockResolvedValue(
            mockReply(undefined),
        );
    });

    describe('resolveLockerBankTypeId', () => {
        it('should reuse the existing hidden category and bank type', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            {
                                id: 'type-1',
                                name: '_LOCKER_BANKS_',
                                category_id: 'cat-1',
                            },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const type_id = await locker.resolveLockerBankTypeId();
            expect(type_id).toBe('type-1');
            expect(ts_client.asset_categories.create).not.toHaveBeenCalled();
            expect(ts_client.asset_types.create).not.toHaveBeenCalled();
        });

        it('should memoise the resolved bank type id', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
                    ['...'],
                    'page',
                ),
            );

            const first = await locker.resolveLockerBankTypeId();
            vi.mocked(ts_client.asset_categories.query).mockClear();
            vi.mocked(ts_client.asset_types.query).mockClear();
            const second = await locker.resolveLockerBankTypeId();

            expect(second).toBe(first);
            expect(ts_client.asset_categories.query).not.toHaveBeenCalled();
            expect(ts_client.asset_types.query).not.toHaveBeenCalled();
        });
    });

    describe('resolveLockerTypeId', () => {
        it('should reuse the existing hidden category and locker type', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            {
                                id: 'type-2',
                                name: '_LOCKERS_',
                                category_id: 'cat-1',
                            },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const type_id = await locker.resolveLockerTypeId();
            expect(type_id).toBe('type-2');
            expect(ts_client.asset_types.create).not.toHaveBeenCalled();
        });
    });

    describe('queryLockerBankAssetsForZones', () => {
        it('should resolve empty for no zones', async () => {
            const { locker } = await load_modules();
            expect(await locker.queryLockerBankAssetsForZones([])).toEqual([]);
        });

        it('should flatten the per-zone results', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    ({ zone_id }) => response([{ id: `${zone_id}-a` }]),
                    ['...'],
                    'page',
                ),
            );

            const list = await locker.queryLockerBankAssetsForZones([
                'z1',
                'z2',
            ]);
            expect(list.map((a: any) => a.id)).toEqual(['z1-a', 'z2-a']);
        });
    });

    describe('queryLocker*InZone', () => {
        it('should not query lockers or banks without a zone id', async () => {
            const { locker } = await load_modules();

            expect(await locker.queryLockerBankAssetsInZone('')).toEqual([]);
            expect(await locker.queryLockerAssetsInZone('')).toEqual([]);
            expect(ts_client.asset_categories.query).not.toHaveBeenCalled();
            expect(ts_client.assets.query).not.toHaveBeenCalled();
        });

        it('should query lockers by every zone they are in', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'type-2', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(() => response([{ id: 'l1' }]), ['...'], 'page'),
            );

            const list = await locker.queryLockerAssetsInZone('bld-1');

            expect(list.map((a) => a.id)).toEqual(['l1']);
            expect(ts_client.assets.query).toHaveBeenCalledWith(
                expect.objectContaining({
                    zones: ['bld-1'],
                    type_id: 'type-2',
                }),
            );
        });
    });

    describe('saveLockerBankAsset', () => {
        it('should save the asset stamped with the bank type id', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'type-1', name: '_LOCKER_BANKS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.create).mockResolvedValue(
                mockReply({
                    id: 'a1',
                } as any),
            );

            const res = await locker.saveLockerBankAsset({ name: 'Bank 1' });
            expect(ts_client.assets.create).toHaveBeenCalledWith({
                body: {
                    name: 'Bank 1',
                    asset_type_id: 'type-1',
                },
            });
            expect(res.id).toBe('a1');
        });
    });

    describe('saveLockerAsset', () => {
        it('should save the asset stamped with the locker type id', async () => {
            const { locker } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'type-2', name: '_LOCKERS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.create).mockResolvedValue(
                mockReply({
                    id: 'l1',
                } as any),
            );

            const res = await locker.saveLockerAsset({ name: 'Locker 1' });
            expect(ts_client.assets.create).toHaveBeenCalledWith({
                body: {
                    name: 'Locker 1',
                    asset_type_id: 'type-2',
                },
            });
            expect(res.id).toBe('l1');
        });
    });
});
