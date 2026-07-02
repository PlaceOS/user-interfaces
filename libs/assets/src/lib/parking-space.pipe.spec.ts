jest.mock('@placeos/ts-client', () => ({
    showAsset: jest.fn(),
}));

async function load_modules() {
    const ts_client = (await import('@placeos/ts-client')) as any;
    const pipe_module = (await import('./parking-space.pipe')) as any;
    return { ts_client, pipe_module };
}

describe('[ParkingSpacePipe]', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('should return an empty space for an empty id', async () => {
        const { ts_client, pipe_module } = await load_modules();
        const pipe = new pipe_module.ParkingSpacePipe();

        expect(await pipe.transform('')).toEqual({});
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });

    it('should return the unallocated placeholder for unallocated ids', async () => {
        const { ts_client, pipe_module } = await load_modules();
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('unallocated-3');
        expect(space).toEqual({ identifier: 'Unallocated' });
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });

    it('should resolve a space from the API and cache it', async () => {
        const { ts_client, pipe_module } = await load_modules();
        ts_client.showAsset.mockResolvedValue({
            id: 'space-1',
            identifier: 'A-01',
        });
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('space-1');
        expect(space).toEqual({ id: 'space-1', identifier: 'A-01' });
        expect(ts_client.showAsset).toHaveBeenCalledWith('space-1');

        const cached = await pipe.transform('space-1');
        expect(cached).toEqual({ id: 'space-1', identifier: 'A-01' });
        expect(ts_client.showAsset).toHaveBeenCalledTimes(1);
    });

    it('should return a preloaded space without querying the API', async () => {
        const { ts_client, pipe_module } = await load_modules();
        pipe_module.updateParkingSpaceList([
            { id: 'space-2', identifier: 'B-02' },
        ]);
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('space-2');
        expect(space).toEqual({ id: 'space-2', identifier: 'B-02' });
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });

    it('should return an empty space when the API errors', async () => {
        const { ts_client, pipe_module } = await load_modules();
        ts_client.showAsset.mockRejectedValue(new Error('nope'));
        const pipe = new pipe_module.ParkingSpacePipe();

        expect(await pipe.transform('missing')).toEqual({});
    });

    it('should ignore duplicate ids when updating the space list', async () => {
        const { ts_client, pipe_module } = await load_modules();
        pipe_module.updateParkingSpaceList([
            { id: 'space-3', identifier: 'First' },
        ]);
        pipe_module.updateParkingSpaceList([
            { id: 'space-3', identifier: 'Second' },
        ]);
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('space-3');
        expect(space.identifier).toBe('First');
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });
});
