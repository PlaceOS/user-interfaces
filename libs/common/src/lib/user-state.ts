import { computed, signal } from '@angular/core';
import { currentGroups, PlaceCurrentGroup, showUser } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of, timer } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { isPublicMode } from './public-mode';
import { setDefaultCreator } from './types/event.class';
import { EMPTY_USER, isEmptyUser, StaffUser } from './types/user.class';

export { EMPTY_USER, isEmptyUser } from './types/user.class';

declare let jest;

type PermissionName = (typeof PERMISSION_VALUES)[number][0];
type UserPermissions = Record<PermissionName, string[]>;

export enum GroupPermission {
    Read = 1 << 0,
    Create = 1 << 1,
    Update = 1 << 2,
    Delete = 1 << 3,
    Operate = 1 << 4,
    Approve = 1 << 5,
    Manage = 1 << 6,
    Share = 1 << 7,
}

const ALL_PERMISSIONS = [
    GroupPermission.Read,
    GroupPermission.Create,
    GroupPermission.Update,
    GroupPermission.Delete,
    GroupPermission.Operate,
    GroupPermission.Approve,
    GroupPermission.Manage,
    GroupPermission.Share,
];

const _current_user = new BehaviorSubject<StaffUser>(EMPTY_USER);
const _change = new BehaviorSubject(0);

export const current_user = _current_user.asObservable();
export const user_groups = signal<PlaceCurrentGroup[]>([]);
export const user_groups_loaded = signal(false);
const user_signal = signal(EMPTY_USER);

const PERMISSION_VALUES = [
    ['read', GroupPermission.Read],
    ['create', GroupPermission.Create],
    ['update', GroupPermission.Update],
    ['delete', GroupPermission.Delete],
    ['operate', GroupPermission.Operate],
    ['approve', GroupPermission.Approve],
    ['manage', GroupPermission.Manage],
    ['share', GroupPermission.Share],
] as const;

export const user_permissions = computed<UserPermissions>(() => {
    const permissions: UserPermissions = {
        read: [],
        create: [],
        update: [],
        delete: [],
        operate: [],
        approve: [],
        manage: [],
        share: [],
    };
    const permission_sets = PERMISSION_VALUES.reduce(
        (sets, [permission_name]) => {
            sets[permission_name] = new Set<string>();
            return sets;
        },
        {} as Record<PermissionName, Set<string>>,
    );

    for (const { group, permissions: group_permissions } of user_groups()) {
        for (const subsystem of group.subsystems || []) {
            for (const [
                permission_name,
                permission_value,
            ] of PERMISSION_VALUES) {
                if (group_permissions & permission_value) {
                    permission_sets[permission_name].add(subsystem);
                }
            }
        }
    }

    for (const [permission_name] of PERMISSION_VALUES) {
        permissions[permission_name] = [
            ...permission_sets[permission_name],
        ].sort();
    }

    return permissions;
});

function setPublicUser() {
    const generic_user = new StaffUser({
        id: 'public-user',
        name: 'Public User',
        email: 'public.user@placeos.example',
    });
    _current_user.next(generic_user);
    return generic_user;
}

async function loadUserGroups() {
    user_groups_loaded.set(false);
    if (isPublicMode()) {
        user_groups.set([]);
        user_groups_loaded.set(true);
        return;
    }
    try {
        const groups = await currentGroups({});
        user_groups.set(groups);
        console.log('Permissions:', user_permissions());
    } catch (error) {
        console.warn('Failed to load user groups.', error);
        user_groups.set([]);
    } finally {
        user_groups_loaded.set(true);
    }
}

function initialiseUser() {
    try {
        if (jest) return;
    } catch {
        // `jest` is only defined during tests.
    }
    _current_user.subscribe((u) => user_signal.set(u));
    const is_public_mode = isPublicMode();
    const user_request = combineLatest([showUser('current'), _change]).pipe(
        map(([i]) => new StaffUser(i)),
    );
    if (is_public_mode) {
        user_request
            .pipe(
                catchError((error) => {
                    console.warn(
                        'User loading failed in public mode, using local public user data.',
                        error,
                    );
                    return of(setPublicUser());
                }),
            )
            .subscribe((user) => _current_user.next(user));
        return;
    }
    user_request
        .pipe(
            retry({
                count: 10,
                delay: (error, count) => {
                    const delay_ms = Math.min(1000 * Math.pow(2, count), 30000);
                    console.warn(
                        `User loading failed, retrying in ${delay_ms}ms (attempt ${count}/10)`,
                        error,
                    );
                    return timer(delay_ms);
                },
            }),
        )
        .subscribe((user) => {
            _current_user.next(user);
            setDefaultCreator(user);
            loadUserGroups();
        });
}

export function reloadUserData() {
    setTimeout(async () => {
        try {
            const p_user = await showUser('current');
            const user = new StaffUser(p_user);
            _current_user.next(user);
            setDefaultCreator(user);
            loadUserGroups();
        } catch (error) {
            if (isPublicMode()) {
                console.warn(
                    'User reload failed in public mode, using local public user data.',
                    error,
                );
                setPublicUser();
                return;
            }
            throw error;
        }
    }, 300);
}

/** Get the current user details */
export function currentUser() {
    return _current_user.getValue() || EMPTY_USER;
}

/** Override the current user store. Intended for tests seeding a loaded user. */
export function setCurrentUser(user: StaffUser) {
    _current_user.next(user);
    user_signal.set(user);
}

export function currentUserIsLoaded() {
    if (!isEmptyUser(currentUser())) return true;
    try {
        return !!jest;
    } catch {
        return false;
    }
}

export function currentUserLoaded(): Promise<StaffUser> {
    const user = currentUser();
    if (currentUserIsLoaded()) return Promise.resolve(user);
    return new Promise((resolve) => {
        const sub = _current_user.subscribe((user) => {
            if (isEmptyUser(user)) return;
            sub.unsubscribe();
            resolve(user);
        });
    });
}

export function userSignal() {
    return user_signal;
}

export function hasPermission(
    subsystem: string,
    permissions: GroupPermission,
): boolean {
    if (user_signal().groups?.includes('placeos_admin')) return true;
    return (getPermissionMask(subsystem) & permissions) === permissions;
}

export function getPermissions(subsystem: string): GroupPermission[] {
    if (user_signal().groups?.includes('placeos_admin')) return ALL_PERMISSIONS;
    const permissions = getPermissionMask(subsystem);
    return PERMISSION_VALUES.filter(
        ([, permission]) => permissions & permission,
    ).map(([, permission]) => permission);
}

export function getPermissionMask(subsystem: string) {
    let permissions = 0;
    for (const { group, permissions: group_permissions } of user_groups()) {
        if (group.subsystems?.includes(subsystem)) {
            permissions |= group_permissions;
        }
    }
    return permissions;
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

setTimeout(() => initialiseUser(), 50);
