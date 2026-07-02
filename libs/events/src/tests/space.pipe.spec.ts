import { Space } from '@placeos/common';
import { SpacePipe, updateSpaceList } from '../lib/space.pipe';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

describe('SpacePipe', () => {
    let pipe: SpacePipe;

    beforeEach(() => {
        jest.clearAllMocks();
        pipe = new SpacePipe();
        pipe.org = null;
    });

    it('should return an empty space for a falsy ID', async () => {
        const space = await pipe.transform('');
        expect(space.email).toBe('empty.space@place.os');
    });

    it('should load spaces by ID from the API and cache them', async () => {
        (ts_client.showSystem as jest.Mock).mockResolvedValue({
            id: 'sys-by-id',
            name: 'System 1',
            zones: [],
        });
        const space = await pipe.transform('sys-by-id');
        expect(space.id).toBe('sys-by-id');
        expect(ts_client.showSystem).toHaveBeenCalledWith('sys-by-id');
        const cached = await pipe.transform('sys-by-id');
        expect(cached).toBe(space);
        expect(ts_client.showSystem).toHaveBeenCalledTimes(1);
    });

    it('should load spaces by email using a system query', async () => {
        (ts_client.querySystemsWithEmails as jest.Mock).mockResolvedValue({
            data: [
                { id: 'sys-by-email', email: 'room@place.tech', zones: [] },
            ],
        });
        const space = await pipe.transform('room@place.tech');
        expect(space.id).toBe('sys-by-email');
        expect(ts_client.showSystem).not.toHaveBeenCalled();
        expect(ts_client.querySystemsWithEmails).toHaveBeenCalledWith({
            in: 'room@place.tech',
        });
    });

    it('should return an empty space when no unique match is found', async () => {
        (ts_client.querySystemsWithEmails as jest.Mock).mockResolvedValue({
            data: [{ id: '1' }, { id: '2' }],
        });
        const space = await pipe.transform('shared@place.tech');
        expect(space.email).toBe('empty.space@place.os');
    });

    it('should fallback to an email query when the ID lookup fails', async () => {
        (ts_client.showSystem as jest.Mock).mockRejectedValue('404');
        (ts_client.querySystemsWithEmails as jest.Mock).mockResolvedValue({
            data: [{ id: 'sys-fallback', zones: [] }],
        });
        const space = await pipe.transform('missing-id');
        expect(space.id).toBe('sys-fallback');
    });

    it('should allow adding spaces to the cached list', async () => {
        updateSpaceList([new Space({ id: 'sys-local' })]);
        const space = await pipe.transform('sys-local');
        expect(space.id).toBe('sys-local');
        expect(ts_client.showSystem).not.toHaveBeenCalled();
        expect(pipe.get('sys-local').id).toBe('sys-local');
    });

    it('should return an empty space from get for unknown IDs', () => {
        expect(pipe.get('nope').email).toBe('empty.space@place.os');
    });

    it('should wait for the org service to initialise when set', async () => {
        const org: any = {
            waitUntilInitialised: jest.fn().mockResolvedValue(undefined),
            levelWithID: jest.fn(),
        };
        pipe.org = org;
        await pipe.transform('');
        expect(org.waitUntilInitialised).toHaveBeenCalled();
        pipe.org = null;
    });
});
