import * as ts_client from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

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
        expect(ts_client.assets.show).not.toHaveBeenCalled();
    });

    it('should return the unallocated placeholder for unallocated ids', async () => {
        const { pipe_module } = await load_modules();
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('unallocated-3');
        expect(space).toEqual({ identifier: 'Unallocated' });
        expect(ts_client.assets.show).not.toHaveBeenCalled();
    });

    it('should resolve a space from the API and cache it', async () => {
        const { pipe_module } = await load_modules();
        vi.mocked(ts_client.assets.show).mockResolvedValue(
            mockReply({
                id: 'space-1',
                identifier: 'A-01',
            } as any),
        );
        const pipe = new pipe_module.ParkingSpacePipe();

        const space = await pipe.transform('space-1');
        expect(space).toEqual({ id: 'space-1', identifier: 'A-01' });
        expect(ts_client.assets.show).toHaveBeenCalledWith({ id: 'space-1' });

        const cached = await pipe.transform('space-1');
        expect(cached).toEqual({ id: 'space-1', identifier: 'A-01' });
        expect(ts_client.assets.show).toHaveBeenCalledTimes(1);
    });

    it('should return an empty space when the API errors', async () => {
        const { pipe_module } = await load_modules();
        vi.mocked(ts_client.assets.show).mockRejectedValue(new Error('nope'));
        const pipe = new pipe_module.ParkingSpacePipe();

        expect(await pipe.transform('missing')).toEqual({});
    });
});
