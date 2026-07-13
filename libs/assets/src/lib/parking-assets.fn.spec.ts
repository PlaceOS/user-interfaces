import * as ts_client from '@placeos/ts-client';

// The real assets.fn save helpers run; only the ts-client add/update/query
// layer beneath them is stubbed. Assertions that used to target
// assets_fn.saveAssetCategory / saveAssetType now target the ts-client
// add/update calls those helpers make.
vi.mock('@placeos/ts-client', { spy: true });

function response(data: any[]) {
    return Promise.resolve({
        data,
        total: data.length,
        next: () => null,
    }) as any;
}

async function load_modules() {
    const parking_assets = await import('./parking-assets.fn');
    return { parking_assets };
}

describe('[Parking Assets]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
        vi.mocked(ts_client.addAssetCategory).mockResolvedValue({} as any);
        vi.mocked(ts_client.addAssetType).mockResolvedValue({} as any);
        vi.mocked(ts_client.updateAssetType).mockResolvedValue({} as any);
    });

    it('should reuse existing parking category and type names', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: ' _parking_ ' }]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
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
        expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.updateAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.addAssetType).not.toHaveBeenCalled();
        expect(ts_client.updateAssetType).not.toHaveBeenCalled();
    });

    it('should re-query the category when create collides', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories)
            .mockReturnValueOnce(response([]))
            .mockReturnValueOnce(response([]))
            .mockReturnValueOnce(
                response([{ id: 'cat-1', name: '_PARKING_' }]),
            );
        vi.mocked(ts_client.queryAssetTypes).mockReturnValue(
            response([
                {
                    id: 'type-1',
                    name: '_PARKING_SPACES_',
                    category_id: 'cat-1',
                },
            ]),
        );
        vi.mocked(ts_client.addAssetCategory).mockRejectedValue({
            status: 409,
        });

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-1');
        expect(ts_client.addAssetCategory).toHaveBeenCalledWith({
            name: '_PARKING_',
            hidden: true,
        });
    });

    it('should re-query the type when create collides', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([{ id: 'cat-1', name: '_PARKING_' }]),
        );
        vi.mocked(ts_client.queryAssetTypes)
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
        vi.mocked(ts_client.addAssetType).mockRejectedValue({ status: 409 });

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-1');
        expect(ts_client.addAssetType).toHaveBeenCalledWith({
            name: '_PARKING_SPACES_',
            brand: 'PlaceOS',
            category_id: 'cat-1',
        });
    });

    it('should ignore legacy parking categories when resolving parking types', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([
                { id: 'cat-new', name: '_PARKING_' },
                { id: 'cat-old', name: '_PARKING_SPACES_' },
            ]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockImplementation(
            ({ category_id }: any) =>
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
        vi.mocked(ts_client.addAssetType).mockResolvedValue({
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
        expect(ts_client.addAssetType).toHaveBeenCalledWith({
            name: '_PARKING_SPACES_',
            brand: 'PlaceOS',
            category_id: 'cat-new',
        });
    });

    it('should resolve duplicate categories and types to the oldest item', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([
                { id: 'cat-new', name: '_PARKING_', created_at: 200 },
                { id: 'cat-old', name: '_PARKING_', created_at: 100 },
            ]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockImplementation(
            ({ category_id }: any) =>
                response(
                    category_id === 'cat-old'
                        ? [
                              {
                                  id: 'type-new',
                                  name: '_PARKING_SPACES_',
                                  category_id: 'cat-old',
                                  created_at: 200,
                              },
                              {
                                  id: 'type-old',
                                  name: '_PARKING_SPACES_',
                                  category_id: 'cat-old',
                                  created_at: 100,
                              },
                          ]
                        : [],
                ),
        );

        const type_id = await parking_assets.resolveParkingTypeId();

        expect(type_id).toBe('type-old');
        expect(ts_client.addAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.updateAssetCategory).not.toHaveBeenCalled();
        expect(ts_client.addAssetType).not.toHaveBeenCalled();
        expect(ts_client.updateAssetType).not.toHaveBeenCalled();
    });

    it('should ignore legacy user categories when resolving parking user types', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([
                { id: 'cat-new', name: '_PARKING_' },
                { id: 'cat-old', name: '_PARKING_USERS_' },
            ]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockImplementation(
            ({ category_id }: any) =>
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
        vi.mocked(ts_client.addAssetType).mockResolvedValue({
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
        expect(ts_client.addAssetType).toHaveBeenCalledWith({
            name: '_PARKING_USERS_',
            brand: 'PlaceOS',
            category_id: 'cat-new',
        });
    });
});
