import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

async function load_modules() {
    const pipe_module = (await import('./parking-space.pipe')) as any;
    return { pipe_module };
}

describe('[ParkingSpacePipe]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
    });

    it('should return an empty space for an empty id', async () => {
        const { pipe_module } = await load_modules();
        const pipe = new pipe_module.ParkingSpacePipe();

        expect(await pipe.transform('')).toEqual({});
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });

    it('should return the unallocated placeholder for unallocated ids', async () => {
        const { pipe_module } = await load_modules();
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('unallocated-3');
        expect(space).toEqual({ identifier: 'Unallocated' });
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });

    it('should resolve a space from the API and cache it', async () => {
        const { pipe_module } = await load_modules();
        vi.mocked(ts_client.showAsset).mockResolvedValue({
            id: 'space-1',
            identifier: 'A-01',
        } as any);
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('space-1');
        expect(space).toEqual({ id: 'space-1', identifier: 'A-01' });
        expect(ts_client.showAsset).toHaveBeenCalledWith('space-1');

        const cached = await pipe.transform('space-1');
        expect(cached).toEqual({ id: 'space-1', identifier: 'A-01' });
        expect(ts_client.showAsset).toHaveBeenCalledTimes(1);
    });

    it('should return a preloaded space without querying the API', async () => {
        const { pipe_module } = await load_modules();
        pipe_module.updateParkingSpaceList([
            { id: 'space-2', identifier: 'B-02' },
        ]);
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('space-2');
        expect(space).toEqual({ id: 'space-2', identifier: 'B-02' });
        expect(ts_client.showAsset).not.toHaveBeenCalled();
    });

    it('should return an empty space when the API errors', async () => {
        const { pipe_module } = await load_modules();
        vi.mocked(ts_client.showAsset).mockRejectedValue(new Error('nope'));
        const pipe = new pipe_module.ParkingSpacePipe();

        expect(await pipe.transform('missing')).toEqual({});
    });

    it('should ignore duplicate ids when updating the space list', async () => {
        const { pipe_module } = await load_modules();
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
