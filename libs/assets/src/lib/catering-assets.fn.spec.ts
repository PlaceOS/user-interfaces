import { of, throwError } from 'rxjs';

jest.mock('@placeos/ts-client', () => ({
    queryAssetCategories: jest.fn(),
    queryAssetTypes: jest.fn(),
    queryAssets: jest.fn(),
    removeAsset: jest.fn(),
}));

jest.mock('./assets.fn', () => ({
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
    const catering_assets = await import('./catering-assets.fn');
    return { ts_client, assets_fn, catering_assets };
}

describe('[Catering Assets]', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
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

    it('should create the hidden catering category and caterer type', async () => {
        const { ts_client, assets_fn, catering_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(response([]));
        ts_client.queryAssetTypes.mockReturnValue(response([]));
        assets_fn.saveAssetCategory.mockReturnValue(
            of({ id: 'cat-1', name: '_CATERING_', hidden: true }) as any,
        );
        assets_fn.saveAssetType.mockReturnValue(
            of({ id: 'type-1', name: 'CATERING:Acme Catering' }) as any,
        );

        const type_id = await catering_assets
            .resolveCateringTypeId('Acme Catering')
            .toPromise();

        expect(type_id).toBe('type-1');
        expect(assets_fn.saveAssetCategory).toHaveBeenCalledWith({
            name: '_CATERING_',
            hidden: true,
        });
        expect(assets_fn.saveAssetType).toHaveBeenCalledWith({
            name: 'CATERING:Acme Catering',
            brand: 'PlaceOS',
            category_id: 'cat-1',
        });
    });

    it('should query only prefixed catering asset types', async () => {
        const { ts_client, catering_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(
            response([{ id: 'cat-1', name: '_CATERING_' }]),
        );
        ts_client.queryAssetTypes.mockReturnValue(
            response([
                { id: 'type-1', name: 'CATERING:Acme Catering' },
                { id: 'type-2', name: 'Projector' },
            ]),
        );
        ts_client.queryAssets.mockReturnValue(
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

        const items = await catering_assets
            .queryCateringItems('bld-1')
            .toPromise();

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
    });

    it('should create an asset when a supplied item id does not exist', async () => {
        const { ts_client, assets_fn, catering_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(
            response([{ id: 'cat-1', name: '_CATERING_' }]),
        );
        ts_client.queryAssetTypes.mockReturnValue(
            response([{ id: 'type-1', name: 'CATERING:_STANDALONE_' }]),
        );
        assets_fn.saveAsset
            .mockReturnValueOnce(throwError(() => ({ status: 404 })))
            .mockReturnValueOnce(
                of({
                    id: 'asset-1',
                    name: 'Coffee',
                    images: [],
                    other_data: { category: 'Drinks' },
                }) as any,
            );

        const item = await catering_assets
            .saveCateringItem(
                { id: 'legacy-id', name: 'Coffee', caterer: 'standalone' },
                'bld-1',
            )
            .toPromise();

        expect(assets_fn.saveAsset).toHaveBeenCalledTimes(2);
        expect(assets_fn.saveAsset.mock.calls[1][0].id).toBeUndefined();
        expect(item.id).toBe('asset-1');
        expect(item.caterer).toBe('standalone');
    });
});
