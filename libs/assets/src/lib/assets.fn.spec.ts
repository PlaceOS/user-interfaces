jest.mock('@placeos/ts-client', () => ({
    addAsset: jest.fn(),
    addAssetCategory: jest.fn(),
    addAssetPurchaseOrder: jest.fn(),
    addAssets: jest.fn(),
    addAssetType: jest.fn(),
    queryAssetCategories: jest.fn(),
    queryAssetPurchaseOrders: jest.fn(),
    queryAssets: jest.fn(),
    queryAssetTypes: jest.fn(),
    showAssetType: jest.fn(),
    updateAsset: jest.fn(),
    updateAssetCategory: jest.fn(),
    updateAssetPurchaseOrder: jest.fn(),
    updateAssets: jest.fn(),
    updateAssetType: jest.fn(),
}));

jest.mock('libs/bookings/src/lib/bookings.fn', () => ({
    bookedResourceList: jest.fn(),
    createBooking: jest.fn(),
    queryBookings: jest.fn(),
    removeBooking: jest.fn(),
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
    const bookings = (await import(
        'libs/bookings/src/lib/bookings.fn'
    )) as any;
    const assets_fn = (await import('./assets.fn')) as any;
    return { ts_client, bookings, assets_fn };
}

describe('[Assets]', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
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

    describe('queryAssetCategories', () => {
        it('should pass through when explicitly querying hidden categories', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'c1', hidden: true }]),
            );

            const res = await assets_fn.queryAssetCategories({ hidden: true });
            expect(res.data.map((c: any) => c.id)).toEqual(['c1']);
            expect(ts_client.queryAssetCategories).toHaveBeenCalledWith({
                hidden: true,
            });
        });

        it('should filter out hidden categories by default', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'c1' }, { id: 'c2', hidden: true }]),
            );

            const res = await assets_fn.queryAssetCategories({});
            expect(res.data.map((c: any) => c.id)).toEqual(['c1']);
        });
    });

    describe('queryAssetTypes', () => {
        it('should filter out hidden types and types in hidden categories', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetTypes.mockReturnValue(
                response([
                    { id: 't1', category_id: 'c1' },
                    { id: 't2', category_id: 'c2' },
                    { id: 't3', category_id: 'c1', hidden: true },
                ]),
            );
            ts_client.queryAssetCategories.mockReturnValue(
                response([
                    { id: 'c1', name: 'A' },
                    { id: 'c2', name: 'B', hidden: true },
                ]),
            );

            const res = await assets_fn.queryAssetTypes({});
            expect(res.data.map((t: any) => t.id)).toEqual(['t1']);
        });
    });

    describe('queryAssets', () => {
        it('should filter out hidden assets and assets on hidden types', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssets.mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't2' },
                    { id: 'a3', asset_type_id: 't1', hidden: true },
                ]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 't1', category_id: 'c1' }]),
            );
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'c1' }]),
            );

            const res = await assets_fn.queryAssets({});
            expect(res.data.map((a: any) => a.id)).toEqual(['a1']);
        });
    });

    describe('queryAssetPurchaseOrders', () => {
        it('should delegate to the API with the given query', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetPurchaseOrders.mockReturnValue(
                response([{ id: 'po1' }]),
            );

            const res = await assets_fn.queryAssetPurchaseOrders({ q: 'x' });
            expect(ts_client.queryAssetPurchaseOrders).toHaveBeenCalledWith({
                q: 'x',
            });
            expect(res.data.map((o: any) => o.id)).toEqual(['po1']);
        });
    });

    describe('save helpers', () => {
        it('should update when an id is present and add otherwise', async () => {
            const { ts_client, assets_fn } = await load_modules();

            assets_fn.saveAssetCategory({ id: 'c1', name: 'A' });
            expect(ts_client.updateAssetCategory).toHaveBeenCalledWith('c1', {
                id: 'c1',
                name: 'A',
            });
            assets_fn.saveAssetCategory({ name: 'A' });
            expect(ts_client.addAssetCategory).toHaveBeenCalledWith({
                name: 'A',
            });

            assets_fn.saveAssetType({ id: 't1' });
            expect(ts_client.updateAssetType).toHaveBeenCalledWith('t1', {
                id: 't1',
            });
            assets_fn.saveAssetType({ name: 'T' });
            expect(ts_client.addAssetType).toHaveBeenCalledWith({ name: 'T' });

            assets_fn.saveAsset({ id: 'a1' });
            expect(ts_client.updateAsset).toHaveBeenCalledWith('a1', {
                id: 'a1',
            });
            assets_fn.saveAsset({ name: 'A' });
            expect(ts_client.addAsset).toHaveBeenCalledWith({ name: 'A' });

            assets_fn.saveAssetPurchaseOrder({ id: 'po1' });
            expect(ts_client.updateAssetPurchaseOrder).toHaveBeenCalledWith(
                'po1',
                { id: 'po1' },
            );
            assets_fn.saveAssetPurchaseOrder({ purchase_order_number: 'PO' });
            expect(ts_client.addAssetPurchaseOrder).toHaveBeenCalledWith({
                purchase_order_number: 'PO',
            });
        });
    });

    describe('saveAssetsInBulk', () => {
        it('should resolve empty for an empty list', async () => {
            const { assets_fn } = await load_modules();
            expect(await assets_fn.saveAssetsInBulk([])).toEqual([]);
        });

        it('should update in bulk when every asset has an id', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.updateAssets.mockResolvedValue(['ok']);

            await assets_fn.saveAssetsInBulk([{ id: 'a' }, { id: 'b' }]);
            expect(ts_client.updateAssets).toHaveBeenCalled();
            expect(ts_client.addAssets).not.toHaveBeenCalled();
        });

        it('should add in bulk when any asset is new', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.addAssets.mockResolvedValue(['ok']);

            await assets_fn.saveAssetsInBulk([{ id: 'a' }, { name: 'new' }]);
            expect(ts_client.addAssets).toHaveBeenCalled();
            expect(ts_client.updateAssets).not.toHaveBeenCalled();
        });
    });

    describe('getGroupsWithAssets', () => {
        it('should delegate to the filtered asset type query', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 't1', category_id: 'c1' }]),
            );
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'c1' }]),
            );

            const res = await assets_fn.getGroupsWithAssets({});
            expect(res.data.map((t: any) => t.id)).toEqual(['t1']);
        });
    });

    describe('queryAssetGroupsExtended', () => {
        it('should group visible assets under their visible types', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetTypes.mockReturnValue(
                response([
                    { id: 't1', name: 'Chairs' },
                    { id: 't2', name: 'Hidden', hidden: true },
                ]),
            );
            ts_client.queryAssets.mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't1' },
                    { id: 'a3', asset_type_id: 't2' },
                    { id: 'a4', asset_type_id: 't1', hidden: true },
                ]),
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

            const query = ts_client.queryAssetTypes.mock.calls[0][0];
            expect(query.zone_id).toBe('zone-1');
            expect(query.zones).toBeUndefined();
            expect(query.period_start).toBeUndefined();
            expect(query.type).toBeUndefined();
            expect(query.rejected).toBeUndefined();
        });

        it('should cache results by query', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 't1', name: 'Chairs' }]),
            );
            ts_client.queryAssets.mockReturnValue(response([]));

            await assets_fn.queryAssetGroupsExtended({ zone_id: 'z' });
            await assets_fn.queryAssetGroupsExtended({ zone_id: 'z' });
            expect(ts_client.queryAssetTypes).toHaveBeenCalledTimes(1);
        });
    });

    describe('showGroupFull', () => {
        it('should assemble the group with its category, assets and purchase orders', async () => {
            const { ts_client, assets_fn } = await load_modules();
            ts_client.showAssetType.mockResolvedValue({
                id: 'g1',
                category_id: 'c1',
                name: 'Chairs',
            });
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'c1', name: 'Furniture' }]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 'g1', category_id: 'c1' }]),
            );
            ts_client.queryAssets.mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 'g1', purchase_order_id: 'po1' },
                ]),
            );
            ts_client.queryAssetPurchaseOrders.mockReturnValue(
                response([{ id: 'po1', purchase_order_number: 'PO-1' }]),
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
            expect(ts_client.showAssetType).toHaveBeenCalledTimes(1);
        });
    });

    describe('queryAvailableAssets', () => {
        it('should exclude booked assets but keep ignored ones', async () => {
            const { ts_client, bookings, assets_fn } = await load_modules();
            ts_client.queryAssets.mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't1' },
                ]),
            );
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 't1', category_id: 'c1' }]),
            );
            ts_client.queryAssetCategories.mockReturnValue(
                response([{ id: 'c1' }]),
            );
            bookings.bookedResourceList.mockResolvedValue(['a1']);

            const available = await assets_fn.queryAvailableAssets({
                period_start: 1,
                period_end: 2,
            });
            expect(available.map((a: any) => a.id)).toEqual(['a2']);

            const with_ignore = await assets_fn.queryAvailableAssets(
                { period_start: 1, period_end: 2 },
                ['a1'],
            );
            expect(with_ignore.map((a: any) => a.id)).toEqual(['a1', 'a2']);
        });
    });

    describe('queryGroupAvailability', () => {
        it('should drop assets referenced by active bookings', async () => {
            const { ts_client, bookings, assets_fn } = await load_modules();
            ts_client.queryAssetTypes.mockReturnValue(
                response([{ id: 't1', name: 'Chairs' }]),
            );
            ts_client.queryAssets.mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't1' },
                ]),
            );
            bookings.queryBookings.mockResolvedValue([
                { id: 'b1', status: 'approved', asset_id: 'a1' },
                { id: 'b2', status: 'cancelled', asset_id: 'a2' },
            ]);

            const groups = await assets_fn.queryGroupAvailability({
                period_start: 1,
                period_end: 2,
            });
            expect(groups[0].assets.map((a: any) => a.id)).toEqual(['a2']);
        });
    });

    describe('removeAssetRequests', () => {
        it('should remove bookings referencing the asset by id or ids', async () => {
            const { bookings, assets_fn } = await load_modules();
            bookings.queryBookings.mockResolvedValue([
                { id: 'b1', asset_id: 'x' },
                { id: 'b2', asset_ids: ['x', 'y'] },
                { id: 'b3', asset_id: 'z' },
            ]);
            bookings.removeBooking.mockResolvedValue(true);

            await assets_fn.removeAssetRequests('x');
            expect(bookings.removeBooking).toHaveBeenCalledWith('b1');
            expect(bookings.removeBooking).toHaveBeenCalledWith('b2');
            expect(bookings.removeBooking).not.toHaveBeenCalledWith('b3');
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
