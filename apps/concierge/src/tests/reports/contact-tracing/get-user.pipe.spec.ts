import { StaffUser } from '@placeos/common';
import { startMockPlaceClient } from '@placeos/common/tests';
import { clearMockEndpoints } from '@placeos/ts-client/compat';

import { GetUserPipe } from 'apps/concierge/src/app/reports/contact-tracing/get-user.pipe';
import { httpStatus, mockHttp } from '../../mock-http';

const PEOPLE = '/api/staff/v1/people';

describe('GetUserPipe', () => {
    let pipe: GetUserPipe;

    let people: ReturnType<typeof mockHttp>;

    beforeEach(() => {
        vi.clearAllMocks();
        // searchStaff() reads the directory with placeFetch()
        startMockPlaceClient();
        people = mockHttp('GET', PEOPLE, []);
        pipe = new GetUserPipe();
    });

    afterEach(() => clearMockEndpoints());

    it('should resolve null for empty identifiers', async () => {
        await expect(pipe.transform('')).resolves.toBeNull();
        expect(people).not.toHaveBeenCalled();
    });

    it('should look up staff and cache the result', async () => {
        people = mockHttp('GET', PEOPLE, [{ id: 'user-1', name: 'User One' }]);

        const first = await pipe.transform('user-1');
        const second = await pipe.transform('user-1');

        expect(first).toBeInstanceOf(StaffUser);
        expect(first.id).toBe('user-1');
        expect(first.name).toBe('User One');
        // Second lookup should hit the cache, returning the same instance
        expect(second).toBe(first);
        expect(people).toHaveBeenCalledTimes(1);
    });

    it('should fall back to a placeholder user when no staff match', async () => {
        mockHttp('GET', PEOPLE, []);

        const result = await pipe.transform('unknown-2');

        expect(result).toBeInstanceOf(StaffUser);
        expect(result.id).toBe('unknown-2');
        expect(result.name).toBe('unknown-2');
    });

    it('should fall back to a placeholder user when the lookup fails', async () => {
        mockHttp('GET', PEOPLE, () => {
            throw httpStatus(500);
        });

        const result = await pipe.transform('error-3');

        expect(result).toBeInstanceOf(StaffUser);
        expect(result.id).toBe('error-3');
    });

    it('should seed the cache via addUser without calling the API', async () => {
        const staff = new StaffUser({ id: 'seed-4', name: 'Seeded' });
        GetUserPipe.addUser(staff);

        const result = await pipe.transform('seed-4');

        expect(result).toBe(staff);
        expect(people).not.toHaveBeenCalled();
    });
});
