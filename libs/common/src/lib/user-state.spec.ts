vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { PlaceUser } from '@placeos/ts-client';
import { StaffUser } from './types/user.class';
import {
    checkUserGroupChanges,
    currentUser,
    setCurrentUser,
    user_group_names,
} from './user-state';

describe('checkUserGroupChanges', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(
            new StaffUser({ id: 'user-1', email: 'a@b.c', groups: ['a'] }),
        );
        vi.mocked(ts_client.currentGroups).mockResolvedValue([]);
    });

    it('applies the latest user when the groups changed', async () => {
        vi.mocked(ts_client.showUser).mockResolvedValue(
            new PlaceUser({ id: 'user-1', groups: ['a', 'b'] }),
        );

        expect(await checkUserGroupChanges()).toBe(true);
        expect(currentUser().groups).toEqual(['a', 'b']);
        expect(user_group_names()).toEqual(['a', 'b']);
        expect(ts_client.currentGroups).toHaveBeenCalled();
    });

    it('keeps the current user when only the group order differs', async () => {
        setCurrentUser(
            new StaffUser({ id: 'user-1', email: 'a@b.c', groups: ['a', 'b'] }),
        );
        const user = currentUser();
        vi.mocked(ts_client.showUser).mockResolvedValue(
            new PlaceUser({ id: 'user-1', groups: ['b', 'a'] }),
        );

        expect(await checkUserGroupChanges()).toBe(false);
        expect(currentUser()).toBe(user);
        expect(ts_client.currentGroups).not.toHaveBeenCalled();
    });
});
