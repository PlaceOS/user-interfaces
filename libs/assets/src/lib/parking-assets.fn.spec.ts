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
    });
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

    it('should store parking user flags as strings and read them back', async () => {
        const { parking_assets } = await load_modules();
        const user = {
            id: 'user-1',
            name: 'Ada',
            email: 'ada@example.com',
            car_model: 'Model 3',
            car_colour: 'Red',
            plate_number: 'ABC123',
            phone: '555',
            notes: 'Near lift',
            deny: true,
            special_needs: false,
        };

        const asset = parking_assets.fromParkingUser(user, 'bld-1');
        expect(asset).toMatchObject({
            id: 'user-1',
            identifier: 'Ada',
            zone_id: 'bld-1',
            other_data: { deny: 'true', special_needs: 'false' },
        });
        expect(parking_assets.toParkingUser(asset as any)).toEqual(user);
        // A new user has no id, so the asset is created
        expect(
            'id' in parking_assets.fromParkingUser({ name: 'New' }, 'bld-1'),
        ).toBe(false);
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

    it('should load every page of parking spaces on a level', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
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
        vi.mocked(ts_client.queryAssets).mockReturnValue(
            Promise.resolve({
                data: [{ id: 'bay-1' }],
                total: 2,
                next: () =>
                    Promise.resolve({
                        data: [{ id: 'bay-2' }],
                        total: 2,
                        next: () => null,
                    }),
            }) as any,
        );

        const spaces = await parking_assets.queryParkingSpaces('level-1');
        expect(spaces.map((space) => space.id)).toEqual(['bay-1', 'bay-2']);
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
            ({ category_id }) =>
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

    it('should ignore legacy user categories when resolving parking user types', async () => {
        const { parking_assets } = await load_modules();
        vi.mocked(ts_client.queryAssetCategories).mockReturnValue(
            response([
                { id: 'cat-new', name: '_PARKING_' },
                { id: 'cat-old', name: '_PARKING_USERS_' },
            ]),
        );
        vi.mocked(ts_client.queryAssetTypes).mockImplementation(
            ({ category_id }) =>
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

    it('should map fleet vehicles to assets and back', async () => {
        const { parking_assets } = await load_modules();
        const vehicle = {
            id: 'car-1',
            name: 'Pool car',
            car_model: 'Leaf',
            car_colour: 'White',
            plate_number: 'XYZ789',
            notes: 'Charge after use',
        };

        const asset = parking_assets.fromParkingFleetVehicle(vehicle, 'bld-1');
        expect(asset).toMatchObject({
            id: 'car-1',
            identifier: 'Pool car',
            notes: 'Charge after use',
            zone_id: 'bld-1',
        });
        expect(
            parking_assets.toParkingFleetVehicle(
                new ts_client.PlaceAsset(asset),
            ),
        ).toEqual(vehicle);
        expect(
            'id' in parking_assets.fromParkingFleetVehicle({}, 'bld-1'),
        ).toBe(false);
    });
});
