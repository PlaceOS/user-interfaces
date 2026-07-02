jest.mock('../lib/staff.fn');
jest.mock('../lib/guests.fn');

import { StaffUser, User } from '@placeos/common';
import * as guests_fn from '../lib/guests.fn';
import * as staff_fn from '../lib/staff.fn';
import { addUser, replaceUser, UserPipe } from '../lib/user.pipe';

describe('UserPipe', () => {
    let pipe: UserPipe;

    beforeEach(() => {
        pipe = new UserPipe();
        (staff_fn.showStaff as any) = jest.fn(() => Promise.resolve(null));
        (guests_fn.showGuest as any) = jest.fn(() => Promise.resolve(null));
    });

    it('should return an empty user when no id is passed', async () => {
        const user = await pipe.transform('');
        expect(user).toEqual({});
        expect(staff_fn.showStaff).not.toHaveBeenCalled();
    });

    it('should return a cached user matched by id', async () => {
        const staff = new StaffUser({ id: 'user-id-1', email: 'a@place.tech' });
        addUser(staff);
        const user = await pipe.transform('user-id-1');
        expect(user).toBe(staff);
        expect(staff_fn.showStaff).not.toHaveBeenCalled();
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
        const staff = new StaffUser({
            id: 'user-id-4',
            email: 'd@place.tech',
        });
        (staff_fn.showStaff as any).mockResolvedValue(staff);
        const user = await pipe.transform('user-id-4');
        expect(staff_fn.showStaff).toHaveBeenCalledWith('user-id-4');
        expect(user).toBe(staff);
        // Subsequent lookups should now hit the cache
        (staff_fn.showStaff as any).mockClear();
        const cached = await pipe.transform('user-id-4');
        expect(cached).toBe(staff);
        expect(staff_fn.showStaff).not.toHaveBeenCalled();
    });

    it('should fall back to guest details when staff lookup fails', async () => {
        (staff_fn.showStaff as any).mockRejectedValue(new Error('nope'));
        const guest = new User({
            id: 'user-id-5',
            email: 'e@place.tech',
        });
        (guests_fn.showGuest as any).mockResolvedValue(guest);
        const user = await pipe.transform('user-id-5');
        expect(staff_fn.showStaff).toHaveBeenCalledWith('user-id-5');
        expect(guests_fn.showGuest).toHaveBeenCalledWith('user-id-5');
        expect(user).toBe(guest);
    });

    it('should return an empty user when neither staff nor guest is found', async () => {
        (staff_fn.showStaff as any).mockResolvedValue(null);
        (guests_fn.showGuest as any).mockResolvedValue(null);
        const user = await pipe.transform('user-id-6');
        expect(user).toEqual({});
    });

    it('should de-duplicate concurrent lookups for the same id', async () => {
        let resolve_fn: (value: User) => void = () => undefined;
        (staff_fn.showStaff as any).mockReturnValue(
            new Promise<User>((resolve) => (resolve_fn = resolve)),
        );
        const first = pipe.transform('user-id-7');
        const second = pipe.transform('user-id-7');
        resolve_fn(new StaffUser({ id: 'user-id-7', email: 'f@place.tech' }));
        const [a, b] = await Promise.all([first, second]);
        expect(a).toBe(b);
        expect(staff_fn.showStaff).toHaveBeenCalledTimes(1);
    });
});
