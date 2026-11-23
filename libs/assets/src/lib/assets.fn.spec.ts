import { AssetGroup } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { type Asset } from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';
import { bookings, type Booking } from '@placeos/ts-client/staff';

// The asset API calls are stubbed on ts-client. The booking helpers of
// bookings.fn run for real on top of the stubbed staff booking operations.
vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

/** Booking as the staff API sends it. Test data has only some fields */
const staffBooking = (data: object) => data as unknown as Booking;

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    });
}

/** Stub the categories: `c1` is visible and `c2` is hidden */
function stubCategories() {
    vi.mocked(ts_client.asset_categories.query).mockImplementation(
        fromV1Mock(
            () =>
                response([
                    { id: 'c1', name: 'A' },
                    { id: 'c2', name: 'B', hidden: true },
                ]),
            ['...'],
            'page',
        ),
    );
}

async function load_modules() {
    const assets_fn = (await import('./assets.fn')) as any;
    vi.mocked(bookings.query).mockResolvedValue(mockReply([]));
    vi.mocked(bookings.destroy).mockResolvedValue(mockReply(''));
    return { assets_fn };
}

describe('[Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
    });

    describe('findOldestByName', () => {
        it('should match on trimmed, case-insensitive names and pick the oldest', async () => {
            const { assets_fn } = await load_modules();
            const list = [
                { id: 'a', name: 'Chairs', created_at: 300 },
                { id: 'b', name: ' chairs ', created_at: 100 },
                { id: 'c', name: 'CHAIRS', created_at: 200 },
                { id: 'd', name: 'Tables', created_at: 50 },
            ];
            expect(assets_fn.findOldestByName(list, 'chairs').id).toBe('b');
        });

        it('should return undefined when nothing matches', async () => {
            const { assets_fn } = await load_modules();
            expect(
                assets_fn.findOldestByName([{ name: 'Chairs' }], 'Desks'),
            ).toBeUndefined();
        });
    });

    describe('resolveHiddenAssetTypeId', () => {
        it('should share the hidden category list across types', async () => {
            const { assets_fn } = await load_modules();
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
                            { id: 'type-1', name: '_LOCKERS_' },
                            { id: 'type-2', name: '_LOCKER_BANKS_' },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const ids = await Promise.all([
                assets_fn.resolveHiddenAssetTypeId('_LOCKERS_', '_LOCKERS_'),
                assets_fn.resolveHiddenAssetTypeId(
                    '_LOCKERS_',
                    '_LOCKER_BANKS_',
                ),
            ]);

            expect(ids).toEqual(['type-1', 'type-2']);
            expect(ts_client.asset_categories.query).toHaveBeenCalledTimes(1);
            expect(ts_client.asset_types.query).toHaveBeenCalledTimes(1);
        });

        it('should prefer a category with an authority over a legacy one', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'legacy', name: '_DESKS_', created_at: 1 },
                            {
                                id: 'own',
                                name: '_DESKS_',
                                authority_id: 'auth-1',
                                created_at: 2,
                            },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'type-1', name: '_DESKS_' }]),
                    ['...'],
                    'page',
                ),
            );

            await assets_fn.resolveHiddenAssetTypeId('_DESKS_', '_DESKS_');

            expect(ts_client.asset_types.query).toHaveBeenCalledWith(
                expect.objectContaining({ category_id: 'own' }),
            );
        });

        it('should not create a type when the type list fails to load', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_DESKS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query)
                .mockRejectedValueOnce(new Error('offline'))
                .mockImplementation(
                    fromV1Mock(
                        () => response([{ id: 'type-1', name: '_DESKS_' }]),
                        ['...'],
                        'page',
                    ),
                );

            await expect(
                assets_fn.resolveHiddenAssetTypeId('_DESKS_', '_DESKS_'),
            ).rejects.toThrow('offline');
            expect(ts_client.asset_types.create).not.toHaveBeenCalled();
            expect(
                await assets_fn.resolveHiddenAssetTypeId('_DESKS_', '_DESKS_'),
            ).toBe('type-1');
        });

        it('should reject with the create error when the category is still missing', async () => {
            const { assets_fn } = await load_modules();
            const error = { status: 500 };
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(() => response([]), ['...'], 'page'),
            );
            vi.mocked(ts_client.asset_categories.create).mockRejectedValue(
                error,
            );

            await expect(
                assets_fn.resolveHiddenAssetTypeId('_DESKS_', '_DESKS_'),
            ).rejects.toBe(error);
            // Two reads before the create and one after it fails
            expect(ts_client.asset_categories.query).toHaveBeenCalledTimes(3);
            expect(ts_client.asset_types.create).not.toHaveBeenCalled();
        });

        it('should reject with the create error when the type is still missing', async () => {
            const { assets_fn } = await load_modules();
            const error = { status: 500 };
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'cat-1', name: '_DESKS_' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(() => response([]), ['...'], 'page'),
            );
            vi.mocked(ts_client.asset_types.create).mockRejectedValue(error);

            await expect(
                assets_fn.resolveHiddenAssetTypeId('_DESKS_', '_DESKS_'),
            ).rejects.toBe(error);
            expect(ts_client.asset_types.query).toHaveBeenCalledTimes(2);
        });
    });

    describe('queryAssetCategories', () => {
        it('should pass through when explicitly querying hidden categories', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'c1', hidden: true }]),
                    ['...'],
                    'page',
                ),
            );

            const res = await assets_fn.queryAssetCategories({ hidden: true });
            expect(res.data.map((c: any) => c.id)).toEqual(['c1']);
            expect(ts_client.asset_categories.query).toHaveBeenCalledWith({
                hidden: true,
            });
        });

        it('should filter out hidden categories by default', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'c1' }, { id: 'c2', hidden: true }]),
                    ['...'],
                    'page',
                ),
            );

            const res = await assets_fn.queryAssetCategories({});
            expect(res.data.map((c: any) => c.id)).toEqual(['c1']);
        });
    });

    describe('queryAssetTypes', () => {
        // The v7 `AssetType` has no `hidden` field: a type is hidden by its category
        it('should filter out types in hidden categories', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 't1', category_id: 'c1' },
                            { id: 't2', category_id: 'c2' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'c1', name: 'A' },
                            { id: 'c2', name: 'B', hidden: true },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const res = await assets_fn.queryAssetTypes({});
            expect(res.data.map((t: any) => t.id)).toEqual(['t1']);
        });
    });

    describe('queryAssets', () => {
        // The v7 `Asset` has no `hidden` field: an asset is hidden by its type
        it('should filter out assets on hidden types', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'a1', asset_type_id: 't1' },
                            { id: 'a2', asset_type_id: 't2' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 't1', category_id: 'c1' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(() => response([{ id: 'c1' }]), ['...'], 'page'),
            );

            const res = await assets_fn.queryAssets({});
            expect(res.data.map((a: any) => a.id)).toEqual(['a1']);
        });
    });

    describe('save helpers', () => {
        it('should update when an id is present and add otherwise', async () => {
            const { assets_fn } = await load_modules();
            // Answer the save calls, so none rejects after the test
            for (const op of [
                ts_client.asset_categories,
                ts_client.asset_types,
                ts_client.assets,
                ts_client.asset_purchase_orders,
            ]) {
                vi.mocked(op.update).mockResolvedValue(mockReply({} as never));
                vi.mocked(op.create).mockResolvedValue(mockReply({} as never));
            }

            assets_fn.saveAssetCategory({ id: 'c1', name: 'A' });
            expect(ts_client.asset_categories.update).toHaveBeenCalledWith({
                id: 'c1',
                body: {
                    id: 'c1',
                    name: 'A',
                },
            });
            assets_fn.saveAssetCategory({ name: 'A' });
            expect(ts_client.asset_categories.create).toHaveBeenCalledWith({
                body: {
                    name: 'A',
                },
            });

            assets_fn.saveAssetType({ id: 't1' });
            expect(ts_client.asset_types.update).toHaveBeenCalledWith({
                id: 't1',
                body: {
                    id: 't1',
                },
            });
            assets_fn.saveAssetType({ name: 'T' });
            expect(ts_client.asset_types.create).toHaveBeenCalledWith({
                body: { name: 'T' },
            });

            assets_fn.saveAsset({ id: 'a1' });
            expect(ts_client.assets.update).toHaveBeenCalledWith({
                id: 'a1',
                body: {
                    id: 'a1',
                },
            });
            assets_fn.saveAsset({ name: 'A' });
            expect(ts_client.assets.create).toHaveBeenCalledWith({
                body: { name: 'A' },
            });

            assets_fn.saveAssetPurchaseOrder({ id: 'po1' });
            expect(ts_client.asset_purchase_orders.update).toHaveBeenCalledWith(
                { id: 'po1', body: { id: 'po1' } },
            );
            assets_fn.saveAssetPurchaseOrder({ purchase_order_number: 'PO' });
            expect(ts_client.asset_purchase_orders.create).toHaveBeenCalledWith(
                {
                    body: {
                        purchase_order_number: 'PO',
                    },
                },
            );
        });
    });

    describe('saveAssetsInBulk', () => {
        it('should resolve empty for an empty list', async () => {
            const { assets_fn } = await load_modules();
            expect(await assets_fn.saveAssetsInBulk([])).toEqual([]);
        });

        it('should update in bulk when every asset has an id', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.assets.bulkUpdate).mockResolvedValue(
                mockReply([]),
            );

            await assets_fn.saveAssetsInBulk([{ id: 'a' }, { id: 'b' }]);
            expect(ts_client.assets.bulkUpdate).toHaveBeenCalled();
            expect(ts_client.assets.bulkCreate).not.toHaveBeenCalled();
        });

        it('should add in bulk when any asset is new', async () => {
            const { assets_fn } = await load_modules();
            const assets = [{ id: 'a' }, { name: 'new' }];
            vi.mocked(ts_client.assets.bulkCreate).mockResolvedValue(
                mockReply([]),
            );

            await assets_fn.saveAssetsInBulk(assets);
            expect(ts_client.assets.bulkCreate).toHaveBeenCalledWith({
                body: assets,
            });
            expect(ts_client.assets.bulkUpdate).not.toHaveBeenCalled();
        });
    });

    describe('queryAssetGroupsExtended', () => {
        beforeEach(stubCategories);

        it('should group the assets under the types of visible categories', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 't1', name: 'Chairs', category_id: 'c1' },
                            { id: 't2', name: 'Desks', category_id: 'c2' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'a1', asset_type_id: 't1' },
                            { id: 'a2', asset_type_id: 't1' },
                            { id: 'a3', asset_type_id: 't2' },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const groups = await assets_fn.queryAssetGroupsExtended({
                zones: 'zone-1',
                period_start: 1,
                type: 'x',
                rejected: true,
            });

            expect(groups.map((g: any) => g.id)).toEqual(['t1']);
            expect(groups[0].assets.map((a: any) => a.id)).toEqual([
                'a1',
                'a2',
            ]);

            const query = vi.mocked(ts_client.asset_types.query).mock
                .calls[0][0] as any;
            expect(query.zone_id).toBe('zone-1');
            expect(query.zones).toBeUndefined();
            expect(query.period_start).toBeUndefined();
            expect(query.type).toBeUndefined();
            expect(query.rejected).toBeUndefined();
        });

        it('should cache results by query', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 't1', name: 'Chairs', category_id: 'c1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(() => response([]), ['...'], 'page'),
            );

            await assets_fn.queryAssetGroupsExtended({ zone_id: 'z' });
            await assets_fn.queryAssetGroupsExtended({ zone_id: 'z' });
            expect(ts_client.asset_types.query).toHaveBeenCalledTimes(1);
        });

        it('should keep only the requested type and its assets', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 't1', name: 'Chairs', category_id: 'c1' },
                            { id: 't2', name: 'Tables', category_id: 'c1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'a1', asset_type_id: 't1' },
                            { id: 'a2', asset_type_id: 't2' },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const groups = await assets_fn.queryAssetGroupsExtended({
                type_id: 't2',
            });

            expect(groups.map((g: AssetGroup) => g.id)).toEqual(['t2']);
            expect(groups[0].assets.map((a: Asset) => a.id)).toEqual(['a2']);
        });
    });

    describe('showGroupFull', () => {
        it('should assemble the group with its category, assets and purchase orders', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.show).mockResolvedValue(
                mockReply({
                    id: 'g1',
                    category_id: 'c1',
                    name: 'Chairs',
                } as any),
            );
            vi.mocked(ts_client.asset_categories.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'c1', name: 'Furniture' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () => response([{ id: 'g1', category_id: 'c1' }]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            {
                                id: 'a1',
                                asset_type_id: 'g1',
                                purchase_order_id: 'po1',
                            },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.asset_purchase_orders.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'po1', purchase_order_number: 'PO-1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );

            const product = await assets_fn.showGroupFull('g1');
            expect(product.category.id).toBe('c1');
            expect(product.assets.map((a: any) => a.id)).toEqual(['a1']);
            expect(product.assets[0].purchase_order_number).toBe('PO-1');
            expect(product.purchase_orders.map((o: any) => o.id)).toEqual([
                'po1',
            ]);

            const again = await assets_fn.showGroupFull('g1');
            expect(again).toBe(product);
            expect(ts_client.asset_types.show).toHaveBeenCalledTimes(1);
        });
    });

    describe('queryGroupAvailability', () => {
        beforeEach(stubCategories);

        it('should drop assets referenced by active bookings', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 't1', name: 'Chairs', category_id: 'c1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'a1', asset_type_id: 't1' },
                            { id: 'a2', asset_type_id: 't1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(bookings.query).mockResolvedValue(
                mockReply([
                    staffBooking({ id: 1, status: 'approved', asset_id: 'a1' }),
                    staffBooking({
                        id: 2,
                        status: 'cancelled',
                        asset_id: 'a2',
                    }),
                ]),
            );

            const groups = await assets_fn.queryGroupAvailability({
                period_start: 1,
                period_end: 2,
            });
            expect(groups[0].assets.map((a: any) => a.id)).toEqual(['a2']);
        });

        it('should keep assets held by the ignored bookings or ignored asset ids', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.asset_types.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 't1', name: 'Chairs', category_id: 'c1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(
                    () =>
                        response([
                            { id: 'a1', asset_type_id: 't1' },
                            { id: 'a2', asset_type_id: 't1' },
                            { id: 'a3', asset_type_id: 't1' },
                        ]),
                    ['...'],
                    'page',
                ),
            );
            vi.mocked(bookings.query).mockResolvedValue(
                mockReply([
                    staffBooking({
                        id: 1,
                        status: 'approved',
                        asset_ids: ['a1'],
                    }),
                    staffBooking({
                        id: 2,
                        status: 'approved',
                        asset_ids: ['a2', 'a3'],
                    }),
                ]),
            );

            // The ignored booking ids are the integer ids of loaded bookings
            const groups = await assets_fn.queryGroupAvailability(
                { period_start: 1, period_end: 2 },
                [1, 'a3'],
            );
            expect(groups[0].assets.map((a: any) => a.id)).toEqual([
                'a1',
                'a3',
            ]);
        });
    });

    describe('queryTypeAssetsInZone', () => {
        it('should stop following pages at the page limit', async () => {
            const { assets_fn } = await load_modules();
            // Serve one page more than the limit, so a regression fails
            // instead of looping forever
            let served = 0;
            const page = (): any =>
                Promise.resolve({
                    data: [{ id: 'a' }],
                    total: 1e6,
                    next: ++served < 101 ? page : () => null,
                });
            vi.mocked(ts_client.assets.query).mockImplementation(
                fromV1Mock(page, ['...'], 'page'),
            );

            const assets = await assets_fn.queryTypeAssetsInZone('t1', 'bld-1');

            expect(assets).toHaveLength(100);
            expect(ts_client.assets.query).toHaveBeenCalledWith({
                zones: ['bld-1'],
                type_id: 't1',
                limit: 500,
            });
        });
    });

    describe('removeAssetRequests', () => {
        it('should remove bookings referencing the asset by id or ids', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(bookings.query).mockResolvedValue(
                mockReply([
                    staffBooking({ id: 1, asset_id: 'x' }),
                    staffBooking({ id: 2, asset_ids: ['x', 'y'] }),
                    staffBooking({ id: 3, asset_id: 'z' }),
                ]),
            );

            await assets_fn.removeAssetRequests('x');
            const removed = vi
                .mocked(bookings.destroy)
                .mock.calls.map(([input]) => input.id);
            expect(removed).toEqual([1, 2]);
        });
    });

    describe('differenceBetweenAssetRequests', () => {
        it('should return empty when new is empty but old exists', async () => {
            const { assets_fn } = await load_modules();
            expect(
                assets_fn.differenceBetweenAssetRequests([], [{ id: 'a' }]),
            ).toEqual([]);
        });

        it('should return empty when there are no old requests', async () => {
            const { assets_fn } = await load_modules();
            expect(
                assets_fn.differenceBetweenAssetRequests(
                    [{ id: 'a' }],
                    null as any,
                ),
            ).toEqual([]);
        });

        it('should flag added requests and changed ref_ids', async () => {
            const { assets_fn } = await load_modules();
            const changed = assets_fn.differenceBetweenAssetRequests(
                [
                    { id: 'a', ref_id: 'r1' },
                    { id: 'b', ref_id: 'r2' },
                ],
                [{ id: 'a', ref_id: 'r1' }],
            );
            expect(changed).toEqual(['b']);

            const ref_changed = assets_fn.differenceBetweenAssetRequests(
                [{ id: 'a', ref_id: 'r2' }],
                [{ id: 'a', ref_id: 'r1' }],
            );
            expect(ref_changed).toEqual(['a']);
        });
    });
});
