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
    const catering_assets = await import('./catering-assets.fn');
    return { catering_assets };
}

describe('[Catering Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAsset).mockResolvedValue({} as any);
        vi.mocked(ts_client.updateAsset).mockResolvedValue({} as any);
    });

    it('should encode standalone caterers in catering type names', async () => {
        const { catering_assets } = await load_modules();

        expect(catering_assets.toCateringTypeName('Acme Catering')).toBe(
            'CATERING:Acme Catering',
        );
        expect(catering_assets.toCateringTypeName('')).toBe(
            'CATERING:_STANDALONE_',
        );
        expect(catering_assets.toCateringTypeName('standalone')).toBe(
            'CATERING:_STANDALONE_',
        );
        expect(
            catering_assets.fromCateringTypeName('CATERING:_STANDALONE_'),
        ).toBe('standalone');
        expect(
            catering_assets.fromCateringTypeName('CATERING:Acme Catering'),
        ).toBe('Acme Catering');
    });

    it('should resolve duplicate categories and types to the oldest item', async () => {
        const { catering_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([
                { id: 'cat-new', name: '_CATERING_', created_at: 200 },
                { id: 'cat-old', name: '_CATERING_', created_at: 100 },
            ]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockImplementation(
            ({ category_id }: any) =>
                response(
                    category_id === 'cat-old'
                        ? [
                              {
                                  id: 'type-new',
                                  name: 'CATERING:Acme',
                                  created_at: 200,
                              },
                              {
                                  id: 'type-old',
                                  name: 'CATERING:Acme',
                                  created_at: 100,
                              },
                          ]
                        : [],
                ),
        );

        const type_id = await catering_assets.resolveCateringTypeId('Acme');

        expect(type_id).toBe('type-old');
        expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.updateAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.addAssetType).not.toHaveBeenCalled();
        expect(ts_client.updateAssetType).not.toHaveBeenCalled();
    });

    it('should create the hidden catering category and caterer type', async () => {
        const { catering_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(response([]));
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(response([]));
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({
            id: 'cat-1',
            name: '_CATERING_',
            hidden: true,
        } as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({
            id: 'type-1',
            name: 'CATERING:Acme Catering',
        } as any);

        const type_id =
            await catering_assets.resolveCateringTypeId('Acme Catering');

        expect(type_id).toBe('type-1');
        expect(ts_client.addAssetCategory).toHaveBeenCalledWith({
            name: '_CATERING_',
            hidden: true,
        });
        expect(ts_client.addAssetType).toHaveBeenCalledWith({
            name: 'CATERING:Acme Catering',
            brand: 'PlaceOS',
            category_id: 'cat-1',
        });
    });

    it('should query only prefixed catering asset types', async () => {
        const { catering_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_CATERING_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([
                { id: 'type-1', name: 'CATERING:Acme Catering' },
                { id: 'type-2', name: 'Projector' },
            ]),
        );
        vi.mocked(ts_client.queryAssets).mockReturnValue(
            response([
                {
                    id: 'asset-1',
                    name: 'Coffee',
                    images: ['coffee.jpg'],
                    other_data: {
                        category: 'Drinks',
                        unit_price: 400,
                        tags: ['Drink'],
                    },
                },
            ]),
        );

        const items = await catering_assets.queryCateringItems('bld-1');

        expect(ts_client.queryAssets).toHaveBeenCalledTimes(1);
        expect(ts_client.queryAssets).toHaveBeenCalledWith({
            zone_id: 'bld-1',
            type_id: 'type-1',
            limit: 500,
        });
        expect(items[0].name).toBe('Coffee');
        expect(items[0].caterer).toBe('Acme Catering');
        expect(items[0].category).toBe('Drinks');
        expect(items[0].unit_price).toBe(400);
        expect(ts_client.showMetadata).not.toHaveBeenCalled();
    });

    it('should fall back to the legacy metadata menu when no catering assets exist', async () => {
        const { catering_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_CATERING_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([{ id: 'type-1', name: 'CATERING:Acme Catering' }]),
        );
        vi.mocked(ts_client.queryAssets).mockReturnValue(response([]));
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [
                {
                    id: 'legacy-1',
                    name: 'Legacy Coffee',
                    category: 'Drinks',
                    unit_price: 350,
                },
            ],
        } as any);

        const items = await catering_assets.queryCateringItems('bld-1');

        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'catering',
        );
        expect(items).toEqual([
            expect.objectContaining({
                id: 'legacy-1',
                name: 'Legacy Coffee',
                category: 'Drinks',
                unit_price: 350,
            }),
        ]);
    });

    it('should create an asset when a supplied item id does not exist', async () => {
        const { catering_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_CATERING_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([{ id: 'type-1', name: 'CATERING:_STANDALONE_' }]),
        );
        // saveAsset with an id -> updateAsset (404), retry without id -> addAsset
        vi.mocked(ts_client.updateAsset).mockRejectedValueOnce({ status: 404 });
        vi.mocked(ts_client.addAsset).mockResolvedValueOnce({
            id: 'asset-1',
            name: 'Coffee',
            images: [],
            other_data: { category: 'Drinks' },
        } as any);

        const item = await catering_assets.saveCateringItem(
            { id: 'legacy-id', name: 'Coffee', caterer: 'standalone' },
            'bld-1',
        );

        expect(ts_client.updateAsset).toHaveBeenCalledTimes(1);
        expect(ts_client.addAsset).toHaveBeenCalledTimes(1);
        expect(
            vi.mocked(ts_client.addAsset).mock.calls[0][0].id,
        ).toBeUndefined();
        expect(item.id).toBe('asset-1');
        expect(item.caterer).toBe('standalone');
    });
});
