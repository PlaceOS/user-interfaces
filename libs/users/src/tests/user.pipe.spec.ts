vi.mock('@placeos/ts-client');

import { GuestUser, StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { addUser, replaceUser, UserPipe } from '../lib/user.pipe';

describe('UserPipe', () => {
    let pipe: UserPipe;

    beforeEach(() => {
        pipe = new UserPipe();
        // `showStaff`/`showGuest` wrap ts-client `get`; stub it one layer down
        // instead of module-mocking the sibling `.fn` files.
        vi.mocked(ts_client.get).mockReset();
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

    it('should replace an existing user in the cache', async () => {
        const original = new StaffUser({
            id: 'user-id-3',
            email: 'c@place.tech',
            name: 'Original',
        });
        addUser(original);
        const updated = new StaffUser({
            id: 'user-id-3',
            email: 'c@place.tech',
            name: 'Updated',
        });
        replaceUser(updated);
        const user = await pipe.transform('user-id-3');
        expect(user).toBe(updated);
        expect(user.name).toBe('Updated');
    });

    it('should fetch staff details for an unknown id', async () => {
        vi.mocked(ts_client.get).mockResolvedValue({
            id: 'user-id-4',
            email: 'd@place.tech',
        } as any);
        const user = await pipe.transform('user-id-4');
        expect(ts_client.get).toHaveBeenCalledWith(
            '/api/staff/v1/people/user-id-4',
        );
        expect(user).toBeInstanceOf(StaffUser);
        expect(user.id).toBe('user-id-4');
        // Subsequent lookups should now hit the cache
        vi.mocked(ts_client.get).mockClear();
        const cached = await pipe.transform('user-id-4');
        expect(cached).toBe(user);
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('should fall back to guest details when staff lookup fails', async () => {
        vi.mocked(ts_client.get).mockImplementation(async (url: string) => {
            if (url.includes('/people')) throw new Error('nope');
            return { id: 'user-id-5', email: 'e@place.tech' } as any;
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
        vi.mocked(ts_client.get).mockRejectedValue(new Error('nope'));
        const user = await pipe.transform('user-id-6');
        expect(user).toEqual({});
    });

    it('should de-duplicate concurrent lookups for the same id', async () => {
        let resolve_fn: (value: any) => void = () => undefined;
        vi.mocked(ts_client.get).mockReturnValue(
            new Promise((resolve) => (resolve_fn = resolve)) as any,
        );
        const first = pipe.transform('user-id-7');
        const second = pipe.transform('user-id-7');
        resolve_fn({ id: 'user-id-7', email: 'f@place.tech' });
        const [a, b] = await Promise.all([first, second]);
        expect(a).toBe(b);
        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });
});
