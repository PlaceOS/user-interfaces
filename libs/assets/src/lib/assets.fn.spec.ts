import * as ts_client from '@placeos/ts-client';

// Workspace modules (bookings.fn) run for real; only the ts-client API layer
// beneath them is stubbed. Booking assertions that used to target
// bookings.fn now target the ts-client calls those helpers make:
//   bookings.queryBookings     -> ts_client.get
//   bookings.bookedResourceList -> ts_client.query
//   bookings.removeBooking     -> ts_client.del
vi.mock('@placeos/ts-client', { spy: true });

type BulkPost = (
    url: string,
    body: string,
    options: Record<string, never>,
) => Promise<Partial<ts_client.PlaceAsset>[]>;

const bulk_post = vi.mocked(ts_client.post as unknown as BulkPost);

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    }) as any;
}

async function load_modules() {
    const assets_fn = (await import('./assets.fn')) as any;
    return { assets_fn };
}

describe('[Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        // Sensible defaults for the ts-client layer used by bookings.fn.
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [],
            next: undefined,
            total: 0,
        } as any);
        vi.mocked(ts_client.del).mockResolvedValue(undefined as any);
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
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'c1', hidden: true }]),
            );

            const res = await assets_fn.queryAssetCategories({ hidden: true });
            expect(res.data.map((c: any) => c.id)).toEqual(['c1']);
            expect(ts_client.queryAssetCategories).toHaveBeenCalledWith({
                hidden: true,
            });
        });

        it('should filter out hidden categories by default', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'c1' }, { id: 'c2', hidden: true }]),
            );

            const res = await assets_fn.queryAssetCategories({});
            expect(res.data.map((c: any) => c.id)).toEqual(['c1']);
        });
    });

    describe('queryAssetTypes', () => {
        it('should filter out hidden types and types in hidden categories', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([
                    { id: 't1', category_id: 'c1' },
                    { id: 't2', category_id: 'c2' },
                    { id: 't3', category_id: 'c1', hidden: true },
                ]),
            );
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
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
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssets).mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't2' },
                    { id: 'a3', asset_type_id: 't1', hidden: true },
                ]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 't1', category_id: 'c1' }]),
            );
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'c1' }]),
            );

            const res = await assets_fn.queryAssets({});
            expect(res.data.map((a: any) => a.id)).toEqual(['a1']);
        });
    });

    describe('queryAssetPurchaseOrders', () => {
        it('should delegate to the API with the given query', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetPurchaseOrders).mockReturnValue(
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
            const { assets_fn } = await load_modules();

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
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.updateAssets).mockResolvedValue(['ok'] as any);

            await assets_fn.saveAssetsInBulk([{ id: 'a' }, { id: 'b' }]);
            expect(ts_client.updateAssets).toHaveBeenCalled();
            expect(ts_client.addAssets).not.toHaveBeenCalled();
        });

        it('should add in bulk when any asset is new', async () => {
            const { assets_fn } = await load_modules();
            const assets = [{ id: 'a' }, { name: 'new' }];
            vi.mocked(ts_client.apiEndpoint).mockReturnValue(
                'https://example.com/api/engine/v2',
            );
            bulk_post.mockResolvedValue([]);

            await assets_fn.saveAssetsInBulk(assets);
            expect(bulk_post).toHaveBeenCalledWith(
                'https://example.com/api/engine/v2/assets/bulk',
                JSON.stringify(assets),
                {},
            );
            expect(ts_client.updateAssets).not.toHaveBeenCalled();
        });
    });

    describe('getGroupsWithAssets', () => {
        it('should delegate to the filtered asset type query', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 't1', category_id: 'c1' }]),
            );
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'c1' }]),
            );

            const res = await assets_fn.getGroupsWithAssets({});
            expect(res.data.map((t: any) => t.id)).toEqual(['t1']);
        });
    });

    describe('queryAssetGroupsExtended', () => {
        it('should group visible assets under their visible types', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([
                    { id: 't1', name: 'Chairs' },
                    { id: 't2', name: 'Hidden', hidden: true },
                ]),
            );
            vi.mocked(ts_client.queryAssets).mockReturnValue(
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

            const query = vi.mocked(ts_client.queryAssetTypes).mock
                .calls[0][0] as any;
            expect(query.zone_id).toBe('zone-1');
            expect(query.zones).toBeUndefined();
            expect(query.period_start).toBeUndefined();
            expect(query.type).toBeUndefined();
            expect(query.rejected).toBeUndefined();
        });

        it('should cache results by query', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 't1', name: 'Chairs' }]),
            );
            vi.mocked(ts_client.queryAssets).mockReturnValue(response([]));

            await assets_fn.queryAssetGroupsExtended({ zone_id: 'z' });
            await assets_fn.queryAssetGroupsExtended({ zone_id: 'z' });
            expect(ts_client.queryAssetTypes).toHaveBeenCalledTimes(1);
        });
    });

    describe('showGroupFull', () => {
        it('should assemble the group with its category, assets and purchase orders', async () => {
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.showAssetType).mockResolvedValue({
                id: 'g1',
                category_id: 'c1',
                name: 'Chairs',
            } as any);
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'c1', name: 'Furniture' }]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 'g1', category_id: 'c1' }]),
            );
            vi.mocked(ts_client.queryAssets).mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 'g1', purchase_order_id: 'po1' },
                ]),
            );
            vi.mocked(ts_client.queryAssetPurchaseOrders).mockReturnValue(
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
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssets).mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't1' },
                ]),
            );
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 't1', category_id: 'c1' }]),
            );
            vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
                response([{ id: 'c1' }]),
            );
            // bookedResourceList -> ts_client.query returns ['a1'] as booked
            vi.mocked(ts_client.query).mockResolvedValue({
                data: ['a1'],
                next: undefined,
                total: 1,
            } as any);

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
            const { assets_fn } = await load_modules();
            vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
                response([{ id: 't1', name: 'Chairs' }]),
            );
            vi.mocked(ts_client.queryAssets).mockReturnValue(
                response([
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't1' },
                ]),
            );
            // queryBookings -> ts_client.get returns the raw booking list
            vi.mocked(ts_client.get).mockResolvedValue([
                { id: 'b1', status: 'approved', asset_id: 'a1' },
                { id: 'b2', status: 'cancelled', asset_id: 'a2' },
            ] as any);

            const groups = await assets_fn.queryGroupAvailability({
                period_start: 1,
                period_end: 2,
            });
            expect(groups[0].assets.map((a: any) => a.id)).toEqual(['a2']);
        });
    });

    describe('removeAssetRequests', () => {
        it('should remove bookings referencing the asset by id or ids', async () => {
            const { assets_fn } = await load_modules();
            // queryBookings -> ts_client.get returns the raw booking list
            vi.mocked(ts_client.get).mockResolvedValue([
                { id: 'b1', asset_id: 'x' },
                { id: 'b2', asset_ids: ['x', 'y'] },
                { id: 'b3', asset_id: 'z' },
            ] as any);
            vi.mocked(ts_client.del).mockResolvedValue(true as any);

            await assets_fn.removeAssetRequests('x');
            // removeBooking -> ts_client.del(`/api/staff/v1/bookings/<id>`)
            expect(ts_client.del).toHaveBeenCalledWith(
                expect.stringContaining('/b1'),
                expect.anything(),
            );
            expect(ts_client.del).toHaveBeenCalledWith(
                expect.stringContaining('/b2'),
                expect.anything(),
            );
            expect(ts_client.del).not.toHaveBeenCalledWith(
                expect.stringContaining('/b3'),
                expect.anything(),
            );
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
