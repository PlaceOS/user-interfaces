vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { User } from '@placeos/ts-client';
import { CallFailed, mockReply } from '@placeos/ts-client/compat';

import { mockData } from '../tests/mock-data';
import { startMockPlaceClient } from '../tests/test-helpers';
import { StaffUser } from './types/user.class';
import {
    checkUserGroupChanges,
    currentUser,
    initialiseUser,
    reloadUserData,
    setCurrentUser,
    user_group_names,
} from './user-state';

describe('checkUserGroupChanges', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(
            new StaffUser({ id: 'user-1', email: 'a@b.c', groups: ['a'] }),
        );
        vi.mocked(ts_client.groups.current).mockResolvedValue(mockReply([]));
    });

    it('applies the latest user when the groups changed', async () => {
        vi.mocked(ts_client.users.current).mockResolvedValue(
            mockReply(mockData(User, { id: 'user-1', groups: ['a', 'b'] })),
        );

        expect(await checkUserGroupChanges()).toBe(true);
        expect(currentUser().groups).toEqual(['a', 'b']);
        expect(user_group_names()).toEqual(['a', 'b']);
        expect(ts_client.groups.current).toHaveBeenCalled();
    });

    it('keeps the current user when only the group order differs', async () => {
        setCurrentUser(
            new StaffUser({ id: 'user-1', email: 'a@b.c', groups: ['a', 'b'] }),
        );
        const user = currentUser();
        vi.mocked(ts_client.users.current).mockResolvedValue(
            mockReply(mockData(User, { id: 'user-1', groups: ['b', 'a'] })),
        );

        expect(await checkUserGroupChanges()).toBe(false);
        expect(currentUser()).toBe(user);
        expect(ts_client.groups.current).not.toHaveBeenCalled();
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
        vi.mocked(ts_client.users.current).mockRejectedValue(error);
        vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        const log_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);

        // The first request waits until setup started the client
        startMockPlaceClient();
        initialiseUser();
        // The retry delays add up to 210 seconds.
        await vi.advanceTimersByTimeAsync(5 * 60_000);

        expect(ts_client.users.current).toHaveBeenCalledTimes(11);
        expect(log_error).toHaveBeenCalledWith(
            'User loading failed after 10 retries.',
            error,
        );
    });
});

describe('reloadUserData', () => {
    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('reports a failed call with only its kind and status', async () => {
        vi.useFakeTimers();
        setCurrentUser(new StaffUser({ id: 'user-1', email: 'a@b.c' }));
        vi.mocked(ts_client.users.current).mockResolvedValue({
            ok: false,
            error: {
                kind: 'http',
                status: 500,
                message: 'user a@b.c',
                body: { email: 'a@b.c' },
                text: null,
            },
        });
        const set_timeout = vi.spyOn(globalThis, 'setTimeout');

        reloadUserData();
        // The reload runs in a timer; its rejection is the reported error
        const [reload, delay_ms] = set_timeout.mock.calls[0];
        expect(delay_ms).toBe(300);
        const error: unknown = await (reload as () => Promise<void>)().then(
            () => null,
            (reason: unknown) => reason,
        );

        expect(error).toBeInstanceOf(Error);
        expect(error).not.toBeInstanceOf(CallFailed);
        expect(error).not.toHaveProperty('error');
        expect((error as Error).message).toBe('User reload failed: http 500');
    });
});
