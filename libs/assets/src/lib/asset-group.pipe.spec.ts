import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

async function load_modules() {
    const pipe_module = (await import('./asset-group.pipe')) as any;
    return { pipe_module };
}

describe('[AssetGroupPipe]', () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
    });

    it('should return an empty group for an empty id', async () => {
        const { pipe_module } = await load_modules();
        const pipe = new pipe_module.AssetGroupPipe();

        expect(await pipe.transform('')).toEqual({});
        expect(ts_client.showAssetType).not.toHaveBeenCalled();
    });

    it('should resolve a group from the API and cache it', async () => {
        const { pipe_module } = await load_modules();
        vi.mocked(ts_client.showAssetType).mockResolvedValue({
            id: 'grp-1',
            name: 'Chairs',
        } as any);
        const pipe = new pipe_module.AssetGroupPipe();

        const group = await pipe.transform('grp-1');
        expect(group).toEqual({ id: 'grp-1', name: 'Chairs' });
        expect(ts_client.showAssetType).toHaveBeenCalledWith('grp-1');

        const cached = await pipe.transform('grp-1');
        expect(cached).toEqual({ id: 'grp-1', name: 'Chairs' });
        expect(ts_client.showAssetType).toHaveBeenCalledTimes(1);
    });

    it('should return a preloaded group without querying the API', async () => {
        const { pipe_module } = await load_modules();
        const pipe = new pipe_module.AssetGroupPipe();
        pipe.updateAssetGroupList([{ id: 'grp-2', name: 'Desks' }]);

        const group = await pipe.transform('grp-2');
        expect(group).toEqual({ id: 'grp-2', name: 'Desks' });
        expect(ts_client.showAssetType).not.toHaveBeenCalled();
    });

    it('should return an empty group when the API errors', async () => {
        const { pipe_module } = await load_modules();
        vi.mocked(ts_client.showAssetType).mockRejectedValue(
            new Error('nope'),
        );
        const pipe = new pipe_module.AssetGroupPipe();

        expect(await pipe.transform('missing')).toEqual({});
    });

    it('should ignore duplicate ids when updating the group list', async () => {
        const { pipe_module } = await load_modules();
        pipe_module.updateAssetGroupList([{ id: 'grp-3', name: 'First' }]);
        pipe_module.updateAssetGroupList([{ id: 'grp-3', name: 'Second' }]);
        const pipe = new pipe_module.AssetGroupPipe();

        const group = await pipe.transform('grp-3');
        expect(group.name).toBe('First');
        expect(ts_client.showAssetType).not.toHaveBeenCalled();
    });
});
