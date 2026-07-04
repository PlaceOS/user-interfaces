import { StaffUser } from '@placeos/common';
import * as users_mod from '@placeos/users';

import { GetUserPipe } from 'apps/concierge/src/app/reports/contact-tracing/get-user.pipe';

jest.mock('@placeos/users');

describe('GetUserPipe', () => {
    let pipe: GetUserPipe;

    beforeEach(() => {
        pipe = new GetUserPipe();
        (users_mod.searchStaff as jest.Mock).mockReset();
    });

    it('should resolve null for empty identifiers', async () => {
        await expect(pipe.transform('')).resolves.toBeNull();
        expect(users_mod.searchStaff).not.toHaveBeenCalled();
    });

    it('should look up staff and cache the result', async () => {
        const staff = new StaffUser({ id: 'user-1', name: 'User One' });
        (users_mod.searchStaff as jest.Mock).mockResolvedValue([staff]);

        const first = await pipe.transform('user-1');
        const second = await pipe.transform('user-1');

        expect(first).toBe(staff);
        expect(second).toBe(staff);
        // Second lookup should hit the cache, not the API
        expect(users_mod.searchStaff).toHaveBeenCalledTimes(1);
    });

    it('should fall back to a placeholder user when no staff match', async () => {
        (users_mod.searchStaff as jest.Mock).mockResolvedValue([]);

        const result = await pipe.transform('unknown-2');

        expect(result).toBeInstanceOf(StaffUser);
        expect(result.id).toBe('unknown-2');
        expect(result.name).toBe('unknown-2');
    });

    it('should fall back to a placeholder user when the lookup fails', async () => {
        (users_mod.searchStaff as jest.Mock).mockRejectedValue(
            new Error('nope'),
        );

        const result = await pipe.transform('error-3');

        expect(result).toBeInstanceOf(StaffUser);
        expect(result.id).toBe('error-3');
    });

    it('should seed the cache via addUser without calling the API', async () => {
        const staff = new StaffUser({ id: 'seed-4', name: 'Seeded' });
        GetUserPipe.addUser(staff);

        const result = await pipe.transform('seed-4');

        expect(result).toBe(staff);
        expect(users_mod.searchStaff).not.toHaveBeenCalled();
    });
});
