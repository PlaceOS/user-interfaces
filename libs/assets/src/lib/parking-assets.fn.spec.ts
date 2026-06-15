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
    const parking_assets = await import('./parking-assets.fn');
    return { ts_client, assets_fn, parking_assets };
}

describe('[Parking Assets]', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('should reuse existing parking category and type names', async () => {
        const { ts_client, assets_fn, parking_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(
            response([{ id: 'cat-1', name: ' _parking_ ' }]),
        );
        ts_client.queryAssetTypes.mockReturnValue(
            response([
                {
                    id: 'type-1',
                    name: '_parking_spaces_',
                    category_id: 'cat-1',
                },
            ]),
        );

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-1');
        expect(assets_fn.saveAssetCategory).not.toHaveBeenCalled();
        expect(assets_fn.saveAssetType).not.toHaveBeenCalled();
    });

    it('should re-query the category when create collides', async () => {
        const { ts_client, assets_fn, parking_assets } = await load_modules();
        ts_client.queryAssetCategories
            .mockReturnValueOnce(response([]))
            .mockReturnValueOnce(response([]))
            .mockReturnValueOnce(
                response([{ id: 'cat-1', name: '_PARKING_' }]),
            );
        ts_client.queryAssetTypes.mockReturnValue(
            response([
                {
                    id: 'type-1',
                    name: '_PARKING_SPACES_',
                    category_id: 'cat-1',
                },
            ]),
        );
        assets_fn.saveAssetCategory.mockRejectedValue({ status: 409 });

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-1');
        expect(assets_fn.saveAssetCategory).toHaveBeenCalledWith({
            name: '_PARKING_',
            hidden: true,
        });
    });

    it('should re-query the type when create collides', async () => {
        const { ts_client, assets_fn, parking_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(
            response([{ id: 'cat-1', name: '_PARKING_' }]),
        );
        ts_client.queryAssetTypes
            .mockReturnValueOnce(response([]))
            .mockReturnValueOnce(
                response([
                    {
                        id: 'type-1',
                        name: '_PARKING_SPACES_',
                        category_id: 'cat-1',
                    },
                ]),
            );
        assets_fn.saveAssetType.mockRejectedValue({ status: 409 });

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-1');
        expect(assets_fn.saveAssetType).toHaveBeenCalledWith({
            name: '_PARKING_SPACES_',
            brand: 'PlaceOS',
            category_id: 'cat-1',
        });
    });

    it('should ignore legacy parking categories when resolving parking types', async () => {
        const { ts_client, assets_fn, parking_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(
            response([
                { id: 'cat-new', name: '_PARKING_' },
                { id: 'cat-old', name: '_PARKING_SPACES_' },
            ]),
        );
        ts_client.queryAssetTypes.mockImplementation(({ category_id }) =>
            response(
                category_id === 'cat-old'
                    ? [
                          {
                              id: 'type-1',
                              name: '_PARKING_SPACES_',
                              category_id: 'cat-old',
                              brand: 'PlaceOS',
                          },
                      ]
                    : [],
            ),
        );
        assets_fn.saveAssetType.mockResolvedValue({
            id: 'type-new',
            name: '_PARKING_SPACES_',
            category_id: 'cat-new',
            brand: 'PlaceOS',
        } as any);

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-new');
        expect(ts_client.queryAssetTypes).toHaveBeenCalledTimes(1);
        expect(ts_client.queryAssetTypes).toHaveBeenCalledWith({
            category_id: 'cat-new',
            limit: 500,
        });
        expect(assets_fn.saveAssetType).toHaveBeenCalledWith({
            name: '_PARKING_SPACES_',
            brand: 'PlaceOS',
            category_id: 'cat-new',
        });
    });

    it('should ignore legacy user categories when resolving parking user types', async () => {
        const { ts_client, assets_fn, parking_assets } = await load_modules();
        ts_client.queryAssetCategories.mockReturnValue(
            response([
                { id: 'cat-new', name: '_PARKING_' },
                { id: 'cat-old', name: '_PARKING_USERS_' },
            ]),
        );
        ts_client.queryAssetTypes.mockImplementation(({ category_id }) =>
            response(
                category_id === 'cat-old'
                    ? [
                          {
                              id: 'type-2',
                              name: '_PARKING_USERS_',
                              category_id: 'cat-old',
                              brand: 'PlaceOS',
                          },
                      ]
                    : [],
            ),
        );
        assets_fn.saveAssetType.mockResolvedValue({
            id: 'type-new',
            name: '_PARKING_USERS_',
            category_id: 'cat-new',
            brand: 'PlaceOS',
        } as any);

        const type_id = await parking_assets.resolveParkingUserTypeId();

        expect(type_id).toBe('type-new');
        expect(ts_client.queryAssetTypes).toHaveBeenCalledTimes(1);
        expect(ts_client.queryAssetTypes).toHaveBeenCalledWith({
            category_id: 'cat-new',
            limit: 500,
        });
        expect(assets_fn.saveAssetType).toHaveBeenCalledWith({
            name: '_PARKING_USERS_',
            brand: 'PlaceOS',
            category_id: 'cat-new',
        });
    });
});
