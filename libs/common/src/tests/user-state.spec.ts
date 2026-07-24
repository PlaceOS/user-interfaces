import {
    currentUser,
    getPermissionMask,
    getPermissions,
    GroupPermission,
    hasPermission,
    isEmptyUser,
    user_groups,
    user_permissions,
    userSignal,
} from '../lib/user-state';
import { EMPTY_USER, StaffUser } from '../lib/types/user.class';

function setGroups(subsystems: string[], permissions: number) {
    user_groups.set([
        { group: { subsystems }, permissions } as any,
    ]);
}

describe('user-state', () => {
    afterEach(() => {
        user_groups.set([]);
        userSignal().set(EMPTY_USER);
    });

    it('should default to the empty user', () => {
        expect(isEmptyUser(currentUser())).toBe(true);
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
