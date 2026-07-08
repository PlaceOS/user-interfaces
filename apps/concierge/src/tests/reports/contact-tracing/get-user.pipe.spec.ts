import { StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

import { GetUserPipe } from 'apps/concierge/src/app/reports/contact-tracing/get-user.pipe';

vi.mock('@placeos/ts-client', { spy: true });

describe('GetUserPipe', () => {
    let pipe: GetUserPipe;

    beforeEach(() => {
        vi.clearAllMocks();
        pipe = new GetUserPipe();
    });

    it('should resolve null for empty identifiers', async () => {
        await expect(pipe.transform('')).resolves.toBeNull();
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should look up staff and cache the result', async () => {
        (ts_client.get as any).mockResolvedValue([
            { id: 'user-1', name: 'User One' },
        ]);

        const first = await pipe.transform('user-1');
        const second = await pipe.transform('user-1');

        expect(first).toBeInstanceOf(StaffUser);
        expect(first.id).toBe('user-1');
        expect(first.name).toBe('User One');
        // Second lookup should hit the cache, returning the same instance
        expect(second).toBe(first);
        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });

    it('should fall back to a placeholder user when no staff match', async () => {
        (ts_client.get as any).mockResolvedValue([]);

        const result = await pipe.transform('unknown-2');

        expect(result).toBeInstanceOf(StaffUser);
        expect(result.id).toBe('unknown-2');
        expect(result.name).toBe('unknown-2');
    });

    it('should fall back to a placeholder user when the lookup fails', async () => {
        (ts_client.get as any).mockRejectedValue(new Error('nope'));

        const result = await pipe.transform('error-3');

        expect(result).toBeInstanceOf(StaffUser);
        expect(result.id).toBe('error-3');
    });

    it('should seed the cache via addUser without calling the API', async () => {
        const staff = new StaffUser({ id: 'seed-4', name: 'Seeded' });
        GetUserPipe.addUser(staff);

        const result = await pipe.transform('seed-4');

        expect(result).toBe(staff);
        expect(ts_client.get).not.toHaveBeenCalled();
    });
});
