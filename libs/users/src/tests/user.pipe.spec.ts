vi.mock('@placeos/ts-client');

import { GuestUser, StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { addUser, UserPipe } from '../lib/user.pipe';

const mockGet = vi.mocked(
    ts_client.get as unknown as (url: string) => Promise<unknown>,
);

describe('UserPipe', () => {
    let pipe: UserPipe;

    beforeEach(() => {
        pipe = new UserPipe();
        // `showStaff`/`showGuest` wrap ts-client `get`; stub it one layer down
        // instead of module-mocking the sibling `.fn` files.
        mockGet.mockReset();
    });

    it('should return an empty user when no id is passed', async () => {
        const user = await pipe.transform('');
        expect(user).toEqual({});
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should return a cached user matched by id', async () => {
        const staff = new StaffUser({ id: 'user-id-1', email: 'a@place.tech' });
        addUser(staff);
        const user = await pipe.transform('user-id-1');
        expect(user).toBe(staff);
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should return a cached user matched by email', async () => {
        const staff = new StaffUser({
            id: 'user-id-2',
            email: 'b@place.tech',
        });
        addUser(staff);
        const user = await pipe.transform('b@place.tech');
        expect(user).toBe(staff);
    });

    it('should fetch staff details for an unknown id', async () => {
        mockGet.mockResolvedValue({
            id: 'user-id-4',
            email: 'd@place.tech',
        });
        const user = await pipe.transform('user-id-4');
        expect(ts_client.get).toHaveBeenCalledWith(
            '/api/staff/v1/people/user-id-4',
        );
        expect(user).toBeInstanceOf(StaffUser);
        expect(user.id).toBe('user-id-4');
        // Subsequent lookups should now hit the cache
        mockGet.mockClear();
        const cached = await pipe.transform('user-id-4');
        expect(cached).toBe(user);
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should fall back to guest details when staff lookup fails', async () => {
        mockGet.mockImplementation(async (url: string) => {
            if (url.includes('/people')) throw new Error('nope');
            return { id: 'user-id-5', email: 'e@place.tech' };
        });
        const user = await pipe.transform('user-id-5');
        expect(ts_client.get).toHaveBeenCalledWith(
            '/api/staff/v1/people/user-id-5',
        );
        expect(ts_client.get).toHaveBeenCalledWith(
            '/api/staff/v1/guests/user-id-5',
        );
        expect(user).toBeInstanceOf(GuestUser);
        expect(user.email).toBe('e@place.tech');
    });

    it('should return an empty user when neither staff nor guest is found', async () => {
        mockGet.mockRejectedValue(new Error('nope'));
        const user = await pipe.transform('user-id-6');
        expect(user).toEqual({});
    });

    it('should de-duplicate concurrent lookups for the same id', async () => {
        let resolve_fn: (value: unknown) => void = () => undefined;
        mockGet.mockReturnValue(
            new Promise((resolve) => (resolve_fn = resolve)),
        );
        const first = pipe.transform('user-id-7');
        const second = pipe.transform('user-id-7');
        resolve_fn({ id: 'user-id-7', email: 'f@place.tech' });
        const [a, b] = await Promise.all([first, second]);
        expect(a).toBe(b);
        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });

    describe('email-prefix lookup', () => {
        it('should return the matched name with the requested email', async () => {
            // A cached exact match must not short-circuit a prefix lookup
            addUser(new StaffUser({ id: 'p1', email: 'pat@other.tech' }));
            mockGet.mockResolvedValue([
                { id: 'staff-pat', name: 'Pat Smith', email: 'pat@place.tech' },
            ]);
            const user = await pipe.transform('pat@other.tech', 'email-prefix');
            const url = new URL(mockGet.mock.calls[0][0], location.origin);
            expect(url.searchParams.get('filter')).toBe(
                "startsWith(mail,'pat')",
            );
            expect(user.name).toBe('Pat Smith');
            expect(user.email).toBe('pat@other.tech');
        });

        it('should return an empty user when no staff match or the search fails', async () => {
            mockGet.mockResolvedValueOnce([]);
            expect(
                await pipe.transform('x@place.tech', 'email-prefix'),
            ).toEqual({});
            mockGet.mockRejectedValueOnce(new Error('nope'));
            expect(
                await pipe.transform('y@place.tech', 'email-prefix'),
            ).toEqual({});
        });
    });
});
