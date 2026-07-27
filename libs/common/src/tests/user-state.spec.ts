import {
    cachedUserData,
    currentUser,
    currentUserIsLoaded,
    getPermissionMask,
    getPermissions,
    GroupPermission,
    hasPermission,
    isEmptyUser,
    setCurrentUser,
    storeUserData,
    user_groups,
    user_permissions,
    userSignal,
} from '../lib/user-state';
import { EMPTY_USER, StaffUser } from '../lib/types/user.class';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

function setGroups(subsystems: string[], permissions: number) {
    user_groups.set([
        { group: { subsystems }, permissions } as any,
    ]);
}

describe('user-state', () => {
    afterEach(() => {
        user_groups.set([]);
        userSignal().set(EMPTY_USER);
        setCurrentUser(EMPTY_USER);
        localStorage.clear();
        vi.restoreAllMocks();
    });

    it('should default to the empty user', () => {
        expect(isEmptyUser(currentUser())).toBe(true);
    });

    it('should treat the test runtime as having a loaded user', () => {
        expect(currentUserIsLoaded()).toBe(true);
    });

    describe('caching', () => {
        const user = new StaffUser({
            id: 'user-1',
            name: 'Alex',
            email: 'alex@dev.place.tech',
        });

        function storeFor(token: string) {
            vi.mocked(ts_client.token).mockReturnValue(token);
            setCurrentUser(user);
            setGroups(['bookings'], GroupPermission.Read);
            storeUserData();
        }

        it('should cache the loaded user', () => {
            storeFor('token-1');
            expect(cachedUserData().user.email).toBe('alex@dev.place.tech');
        });

        it('should never cache group permissions', () => {
            storeFor('token-1');
            const cache = JSON.parse(localStorage.getItem('PLACEOS.user'));
            expect(cache.groups).toBe(undefined);
        });

        it('should ignore cached data from a different token', () => {
            storeFor('token-1');
            vi.mocked(ts_client.token).mockReturnValue('token-2');
            expect(cachedUserData()).toBe(null);
            // The mismatched data is dropped rather than left to be re-checked
            expect(localStorage.getItem('PLACEOS.user')).toBe(null);
        });

        it('should discard cached data older than the maximum age', () => {
            storeFor('token-1');
            const cache = JSON.parse(localStorage.getItem('PLACEOS.user'));
            cache.cached_at -= 8 * 24 * 60 * 60 * 1000;
            localStorage.setItem('PLACEOS.user', JSON.stringify(cache));
            expect(cachedUserData()).toBe(null);
        });

        it('should not cache the empty user', () => {
            vi.mocked(ts_client.token).mockReturnValue('token-1');
            setCurrentUser(EMPTY_USER);
            storeUserData();
            expect(localStorage.getItem('PLACEOS.user')).toBe(null);
        });
    });

    describe('permissions', () => {
        it('should combine permission masks from groups', () => {
            setGroups(
                ['bookings'],
                GroupPermission.Read | GroupPermission.Create,
            );
            expect(getPermissionMask('bookings')).toBe(
                GroupPermission.Read | GroupPermission.Create,
            );
            expect(getPermissionMask('other')).toBe(0);
        });

        it('should merge masks across multiple groups', () => {
            user_groups.set([
                {
                    group: { subsystems: ['bookings'] },
                    permissions: GroupPermission.Read,
                },
                {
                    group: { subsystems: ['bookings'] },
                    permissions: GroupPermission.Approve,
                },
            ] as any);
            expect(getPermissionMask('bookings')).toBe(
                GroupPermission.Read | GroupPermission.Approve,
            );
        });

        it('should check individual and combined permissions', () => {
            setGroups(
                ['bookings'],
                GroupPermission.Read | GroupPermission.Create,
            );
            expect(hasPermission('bookings', GroupPermission.Read)).toBe(true);
            expect(
                hasPermission(
                    'bookings',
                    GroupPermission.Read | GroupPermission.Create,
                ),
            ).toBe(true);
            expect(hasPermission('bookings', GroupPermission.Delete)).toBe(
                false,
            );
            expect(
                hasPermission(
                    'bookings',
                    GroupPermission.Read | GroupPermission.Delete,
                ),
            ).toBe(false);
        });

        it('should list granted permissions', () => {
            setGroups(['bookings'], GroupPermission.Read);
            expect(getPermissions('bookings')).toEqual([
                GroupPermission.Read,
            ]);
            expect(getPermissions('other')).toEqual([]);
        });

        it('should grant everything to admins', () => {
            userSignal().set(
                new StaffUser({
                    email: 'admin@dev.place.tech',
                    sys_admin: true,
                } as any),
            );
            expect(hasPermission('anything', GroupPermission.Manage)).toBe(
                true,
            );
            expect(getPermissions('anything').length).toBe(8);
        });

        it('should map group permissions to subsystem lists', () => {
            setGroups(
                ['bookings', 'catering'],
                GroupPermission.Read | GroupPermission.Update,
            );
            const permissions = user_permissions();
            expect(permissions.read).toEqual(['bookings', 'catering']);
            expect(permissions.update).toEqual(['bookings', 'catering']);
            expect(permissions.delete).toEqual([]);
        });
    });
});
