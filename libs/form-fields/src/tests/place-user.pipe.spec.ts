import { showUser } from '@placeos/ts-client';

import { PlaceUserPipe } from '../lib/place-user.pipe';

vi.mock('@placeos/ts-client', { spy: true });

describe('PlaceUserPipe', () => {
    let pipe: PlaceUserPipe;

    beforeEach(() => {
        pipe = new PlaceUserPipe();
        vi.mocked(showUser).mockReset();
    });

    it('should return an empty user for empty identifiers', async () => {
        const user = await pipe.transform('');
        expect(user).toEqual({});
        expect(showUser).not.toHaveBeenCalled();
    });

    it('should look up and return a user by id', async () => {
        vi.mocked(showUser).mockResolvedValue({
            id: 'user-lookup-1',
            email: 'lookup1@place.tech',
            name: 'Lookup One',
        } as any);

        const user = await pipe.transform('user-lookup-1');

        expect(showUser).toHaveBeenCalledWith('user-lookup-1');
        expect(user.id).toBe('user-lookup-1');
        expect(user.email).toBe('lookup1@place.tech');
    });

    it('should cache looked up users to avoid repeat requests', async () => {
        vi.mocked(showUser).mockResolvedValue({
            id: 'user-lookup-2',
            email: 'lookup2@place.tech',
            name: 'Lookup Two',
        } as any);

        await pipe.transform('user-lookup-2');
        expect(showUser).toHaveBeenCalledTimes(1);

        const cached = await pipe.transform('user-lookup-2');
        expect(showUser).toHaveBeenCalledTimes(1);
        expect(cached.id).toBe('user-lookup-2');
    });

    it('should return an empty user when the lookup fails', async () => {
        vi.mocked(showUser).mockRejectedValue(new Error('not found'));

        const user = await pipe.transform('user-missing-1');

        expect(user).toEqual({});
    });
});
