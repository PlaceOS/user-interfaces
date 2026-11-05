vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { PlaceUser } from '@placeos/ts-client';
import { StaffUser } from './types/user.class';
import {
    checkUserGroupChanges,
    currentUser,
    initialiseUser,
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

describe('initialiseUser', () => {
    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('sends a new request for each retry and handles the last failure', async () => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        const error = new Error('Timed out waiting for authentication.');
        vi.mocked(ts_client.showUser).mockRejectedValue(error);
        vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        const log_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);

        initialiseUser();
        // The retry delays add up to 210 seconds.
        await vi.advanceTimersByTimeAsync(5 * 60_000);

        expect(ts_client.showUser).toHaveBeenCalledTimes(11);
        expect(log_error).toHaveBeenCalledWith(
            'User loading failed after 10 retries.',
            error,
        );
    });
});
