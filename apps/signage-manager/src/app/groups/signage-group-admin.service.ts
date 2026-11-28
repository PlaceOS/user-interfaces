import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { type ConfirmModalData, openConfirmModal } from '@placeos/components';
import {
    type Group,
    groups_users,
    groups as groups_v7,
    groups_zones,
    type GroupUser,
    type GroupZone,
    type User,
    users as users_v7,
    type Zone,
    zones as zones_v7,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { groups as staff_groups } from '@placeos/ts-client/staff';
import { confirmThenRun } from '../shared/confirm-then-run';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { type QueryResponse } from '../shared/paged-list';
import {
    groupHierarchy,
    lastLoaded,
    SignageContextService,
    SignageGroupPermission,
    sortGroups,
} from '../signage-context.service';
import {
    narrowGroupFeatures,
    noGroupFeaturesOn404,
    SignageGroupFeatures,
} from '../signage-features';
import {
    type DirectoryGroup,
    type SignageGroupAccess,
    signageGroupAccess,
} from '../signage-group-access';
import { PAGE_SIZE, queryAll, searchParam } from '../signage-service.util';

/** Users or zones of one group, with the group they were read for */
interface ManagedGroupList<T> {
    group_id: string;
    items: T[];
    failed: boolean;
}

function managedGroupList<T>(
    group_id: string,
    items: T[] = [],
    failed = false,
): ManagedGroupList<T> {
    return { group_id, items, failed };
}

/**
 * Signage groups the user manages, with their users, zones, access and
 * feature flags. Used by the group admin pages.
 */
@Injectable({
    providedIn: 'root',
})
export class SignageGroupAdminService {
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);

    public readonly managed_group_id = signal('');
    // Switching managed group refetches its users and zones; debounce so quick
    // re-selection doesn't fire a pair of queries per change.
    private readonly _managed_group_id_debounced = debounced(
        this.managed_group_id,
        300,
    );
    public readonly managed_group_tab = signal<'users' | 'zones'>('users');

    public readonly signage_group_tree_expanded = signal<
        Record<string, boolean>
    >({});

    // Every group the user manages, all pages of them, so the group tree
    // builds from this one list
    private readonly _manageable_signage_groups = resource({
        params: () => ({
            user_email: this._context.active_user()?.email || '',
            groups_change: this._context.groups_change(),
            can_manage_all: this._context.can_manage_all_groups(),
        }),
        // A failed load fails the resource, so the last loaded list stays
        loader: async ({ params }) => {
            if (!params.user_email) return [] as Group[];
            const groups = params.can_manage_all
                ? await this._context.allSignageGroups(params.groups_change)
                : await this._currentManageableGroups(params.groups_change);
            return sortGroups(groups);
        },
    });
    // Keeps the list while a save reloads it, or when the reload fails, so
    // the selection and the open tree branches stay
    private readonly _loaded_manageable_signage_groups = lastLoaded(
        this._manageable_signage_groups,
        () => this._context.active_user()?.email,
    );
    public readonly manageable_signage_groups = computed(
        () => this._loaded_manageable_signage_groups() || [],
    );
    /** Whether the last read of the group list failed */
    public readonly manageable_signage_groups_failed = computed(
        () => !!this._manageable_signage_groups.error(),
    );
    public readonly managed_group = computed(() => {
        const group_id = this.managed_group_id();
        return this.manageable_signage_groups().find(
            (group) => group.id === group_id,
        );
    });
    // Email of the user the first group opened for. After that an empty
    // selection is the user's choice, such as the back button on mobile. A
    // new user gets their first group opened again.
    private _first_group_opened_for?: string;

    constructor() {
        effect(() => {
            const groups = this.manageable_signage_groups();
            const group_id = this.managed_group_id();
            const email = this._context.active_user()?.email;
            if (group_id) {
                // The group was removed or the user lost access to it
                if (!groups.some((group) => group.id === group_id)) {
                    this.managed_group_id.set('');
                } else {
                    this._first_group_opened_for = email;
                }
            } else if (
                groups.length &&
                this._first_group_opened_for !== email
            ) {
                this._first_group_opened_for = email;
                this.managed_group_id.set(groups[0].id);
            }
        });
    }

    private async _currentManageableGroups(groups_change: number) {
        const groups = await this._context.currentSignageGroups(groups_change);
        return groups
            .filter(
                (item) => !!(item.permissions & SignageGroupPermission.Manage),
            )
            .map((item) => decodeEntityNames(item.group));
    }

    // Each list keeps the group it was read for. Rows of the previous group
    // then stay hidden while the debounced group switch catches up, so they
    // can't be changed by mistake.
    private _managedGroupResource<T>(load: (group_id: string) => Promise<T[]>) {
        const list = resource({
            params: () => ({
                group_id: this._managed_group_id_debounced.value(),
                groups_change: this._context.groups_change(),
            }),
            loader: async ({
                params: { group_id },
            }): Promise<ManagedGroupList<T>> => {
                if (!group_id) return managedGroupList<T>('');
                return load(group_id).then(
                    (items) => managedGroupList(group_id, items),
                    () => {
                        // Keep the rows already shown for the group, and
                        // mark the list as failed so the panel shows an error
                        const shown = untracked(rows);
                        return managedGroupList<T>(
                            group_id,
                            shown?.group_id === group_id ? shown.items : [],
                            true,
                        );
                    },
                );
            },
        });
        // A save reloads the list. Keep the rows until the new ones arrive.
        const rows = lastLoaded(list);
        return rows;
    }

    private readonly _managed_group_users = this._managedGroupResource(
        async (group_id) => {
            const users = await queryAll(
                groups_users
                    .query({ group_id, limit: PAGE_SIZE })
                    .then(orThrowPage),
            );
            return users.sort((a, b) =>
                (a.user?.name || a.user_id).localeCompare(
                    b.user?.name || b.user_id,
                ),
            );
        },
    );
    /** Users of the managed group. Empty until they load. */
    public readonly managed_group_users = computed(() =>
        this._managedGroupRows(this._managed_group_users()),
    );
    public readonly managed_group_users_loading = computed(() =>
        this._managedGroupLoading(this._managed_group_users()),
    );
    public readonly managed_group_users_failed = computed(() =>
        this._managedGroupFailed(this._managed_group_users()),
    );
    private readonly _managed_group_zones = this._managedGroupResource(
        async (group_id) => {
            const zones = await queryAll(
                groups_zones
                    .query({ group_id, limit: PAGE_SIZE })
                    .then(orThrowPage),
            );
            return zones.sort((a, b) =>
                (a.zone?.name || a.zone_id).localeCompare(
                    b.zone?.name || b.zone_id,
                ),
            );
        },
    );
    /** Zones of the managed group. Empty until they load. */
    public readonly managed_group_zones = computed(() =>
        this._managedGroupRows(this._managed_group_zones()),
    );
    public readonly managed_group_zones_loading = computed(() =>
        this._managedGroupLoading(this._managed_group_zones()),
    );
    public readonly managed_group_zones_failed = computed(() =>
        this._managedGroupFailed(this._managed_group_zones()),
    );

    private _managedGroupRows<T>(list: ManagedGroupList<T> | undefined) {
        return list?.group_id === this.managed_group_id() ? list.items : [];
    }

    private _managedGroupLoading<T>(list: ManagedGroupList<T> | undefined) {
        return list?.group_id !== this.managed_group_id();
    }

    private _managedGroupFailed<T>(list: ManagedGroupList<T> | undefined) {
        return list?.group_id === this.managed_group_id() && list.failed;
    }

    /** Zones a managed group can be given access to, not just signage ones */
    public queryGroupZones(search = ''): QueryResponse<Zone> | null {
        // The zone index of the server can filter by `authority_id`, but 7.x
        // of ts-client does not have the param. The server gives the zones
        // of the authority of the user.
        return zones_v7
            .query({ limit: PAGE_SIZE, ...searchParam(search) })
            .then(orThrowPage);
    }

    /**
     * Whether the user can change a group's feature flags. Only system admins
     * and managers of an ancestor group can, so members of a group cannot
     * lift the limits set on it.
     */
    public canEditGroupFeatures(group: Group | undefined) {
        if (!group?.id) return false;
        if (this._context.is_sys_admin()) return true;
        const groups = this._context.signage_groups().map((item) => item.group);
        const parent = groups.find((item) => item.id === group.parent_id);
        const ancestor_ids = new Set(
            groupHierarchy(parent, groups).map((item) => item.id),
        );
        return this._context
            .signage_groups()
            .some(
                (item) =>
                    ancestor_ids.has(item.group.id) &&
                    !!(item.permissions & SignageGroupPermission.Manage),
            );
    }

    /** Read a group with its current feature flags */
    public async loadGroup(group_id: string) {
        return decodeEntityNames(
            await groups_v7.show({ id: group_id }).then(orThrow),
        );
    }

    /** Replace the signage flags a group sets itself, limited to what its
     * parent allows. Other subsystems keep their flags. */
    public async saveGroupFeatures(
        group: Group,
        signage: SignageGroupFeatures,
    ) {
        if (!this.canEditGroupFeatures(group)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_EDIT_GROUP_FEATURES'));
            return null;
        }
        // A 404 means the backend has no group features route, so the
        // parent sets no limits
        return this._saveGroupChange(
            this._context
                .loadGroupFeatures(group.parent_id)
                .catch(noGroupFeaturesOn404)
                .then((parent) =>
                    groups_v7
                        .update({
                            id: group.id,
                            body: {
                                features: {
                                    ...(group.features || {}),
                                    signage: {
                                        ...narrowGroupFeatures(signage, parent),
                                    },
                                },
                            },
                        })
                        .then(orThrow),
                ),
            'SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_FEATURES_SAVED',
        );
    }

    /** Default permissions and AD group mappings of a group */
    public async loadGroupAccess(group_id: string) {
        return signageGroupAccess(
            await groups_v7.show({ id: group_id }).then(orThrow),
        );
    }

    /** Replace the default permissions and AD group mappings of a group.
     * System admins and managers of the group can change them. */
    public async saveGroupAccess(group: Group, access: SignageGroupAccess) {
        if (!this._context.canManageSignageGroup(group.id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return null;
        }
        const result = await this._saveGroupChange(
            groups_v7.update({ id: group.id, body: access }).then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_ACCESS_SAVED',
        );
        return result && signageGroupAccess(result);
    }

    /** Search the organisation directory for AD groups. Fails when the
     * domain has no staff API tenant or the directory cannot list groups. */
    public async searchDirectoryGroups(search = ''): Promise<DirectoryGroup[]> {
        const q = search.trim();
        const list = await staff_groups.query(q ? { q } : {}).then(orThrow);
        return list.filter((item) => !!item.id);
    }

    /**
     * Whether the user can move a group under a new parent. The group cannot
     * go under itself or one of its children. System admins can move any
     * group, also to the top level. Other users must manage the old and the
     * new parent, so a manager cannot move a group out of the limits that
     * its parent groups set.
     */
    public canChangeGroupParent(group: Partial<Group>, parent_id: string) {
        if (!group.id || parent_id === (group.parent_id || '')) return true;
        const groups = this._context.signage_groups().map((item) => item.group);
        const parent = groups.find((item) => item.id === parent_id);
        if (groupHierarchy(parent, groups).some(({ id }) => id === group.id)) {
            return false;
        }
        if (this._context.is_sys_admin()) return true;
        return (
            !!parent_id &&
            !!group.parent_id &&
            this._context.canManageSignageGroup(group.parent_id) &&
            this._context.canManageSignageGroup(parent_id)
        );
    }

    public async saveSignageGroup(group: Partial<Group>, data: Partial<Group>) {
        const managed_group_id = group.id || data.parent_id || '';
        if (!this._context.canManageSignageGroup(managed_group_id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return null;
        }
        if (
            data.parent_id !== undefined &&
            !this.canChangeGroupParent(group, data.parent_id)
        ) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MOVE_GROUP'));
            return null;
        }
        // Only the edited fields. A group from a list read has defaults for
        // the fields the read left out, which would replace stored values.
        const payload = {
            ...data,
            subsystems: Array.from(
                new Set([...(group.subsystems || []), 'signage']),
            ),
        };
        return this._saveGroupChange(
            group.id
                ? groups_v7
                      .update({ id: group.id, body: payload })
                      .then(orThrow)
                : groups_v7.create({ body: payload }).then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_SAVED',
        );
    }

    public async removeSignageGroup(group: Group) {
        if (!group?.id) return;
        if (!this._context.canManageSignageGroup(group.id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return;
        }
        const removed = await this._confirmGroupRemove(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_GROUP_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: group.name,
                }),
                icon: { content: 'delete' },
            },
            () => groups_v7.destroy({ id: group.id }).then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_REMOVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_REMOVED',
        );
        if (removed && this._context.selected_group_id() === group.id) {
            this._context.selected_group_id.set('');
        }
    }

    public async searchGroupUsers(search = '') {
        const group = this.managed_group();
        const { data } = await users_v7
            .query({
                q: search,
                limit: 20,
                ...(group?.authority_id
                    ? { authority_id: group.authority_id }
                    : {}),
            })
            .then(orThrowPage);
        return data;
    }

    public async addManagedGroupUser(user: User) {
        const group_id = this.managed_group_id();
        if (!user?.id || !this._context.canManageSignageGroup(group_id)) return;
        // No permissions, so the backend applies the group's defaults
        await this._saveGroupChange(
            groups_users
                .create({ body: { group_id, user_id: user.id } })
                .then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_ADD_USER',
            'SIGNAGE_MANAGER.SVC_USER_ADDED',
        );
    }

    /** Change the permissions of a group user. Asks first when the user
     * takes the Manage permission from themselves. */
    public async updateManagedGroupUser(item: GroupUser, permissions: number) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        const manage = SignageGroupPermission.Manage;
        if (
            this._isCurrentUser(item.user_id) &&
            item.permissions & manage &&
            !(permissions & manage)
        ) {
            const result = await openConfirmModal(
                {
                    title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_OWN_MANAGE_TITLE'),
                    content: i18n('SIGNAGE_MANAGER.SVC_REMOVE_OWN_MANAGE'),
                    icon: { content: 'warning' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.close();
        }
        await this._saveGroupChange(
            groups_users
                .update({
                    user_id: item.user_id,
                    group_id: item.group_id,
                    body: {
                        permissions,
                    },
                })
                .then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_UPDATE_USER',
            'SIGNAGE_MANAGER.SVC_USER_UPDATED',
        );
    }

    /** Remove a user from a group. The confirmation warns when users
     * remove themselves, as they can lose access to the group. */
    public async removeManagedGroupUser(item: GroupUser) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        await this._confirmGroupRemove(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_USER_TITLE'),
                content: this._isCurrentUser(item.user_id)
                    ? i18n('SIGNAGE_MANAGER.SVC_REMOVE_SELF_FROM_GROUP')
                    : i18n('SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP', {
                          name: item.user?.name || item.user_id,
                      }),
                icon: { content: 'delete' },
            },
            () =>
                groups_users
                    .destroy({ user_id: item.user_id, group_id: item.group_id })
                    .then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_REMOVE_USER',
            'SIGNAGE_MANAGER.SVC_USER_REMOVED',
        );
    }

    private _isCurrentUser(user_id: string) {
        return !!user_id && user_id === this._context.current_user()?.id;
    }

    public async addManagedGroupZone(zone: Zone) {
        const group_id = this.managed_group_id();
        if (!zone?.id || !this._context.canManageSignageGroup(group_id)) return;
        await this._saveGroupChange(
            groups_zones
                .create({
                    body: {
                        group_id,
                        zone_id: zone.id,
                        permissions: 0,
                    },
                })
                .then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_ADD_ZONE',
            'SIGNAGE_MANAGER.SVC_ZONE_ADDED',
        );
    }

    public async updateManagedGroupZone(
        item: GroupZone,
        permissions: number,
        deny: boolean,
    ) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        await this._saveGroupChange(
            groups_zones
                .update({
                    group_id: item.group_id,
                    zone_id: item.zone_id,
                    body: {
                        permissions,
                        deny,
                    },
                })
                .then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_UPDATE_ZONE',
            'SIGNAGE_MANAGER.SVC_ZONE_UPDATED',
        );
    }

    public async removeManagedGroupZone(item: GroupZone) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        await this._confirmGroupRemove(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_ZONE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP', {
                    name: item.zone?.name || item.zone_id,
                }),
                icon: { content: 'delete' },
            },
            () =>
                groups_zones
                    .destroy({ group_id: item.group_id, zone_id: item.zone_id })
                    .then(orThrow),
            'SIGNAGE_MANAGER.SVC_ERR_REMOVE_ZONE',
            'SIGNAGE_MANAGER.SVC_ZONE_REMOVED',
        );
    }

    /**
     * Ask to confirm a group remove, run it, then reload the group lists.
     * @returns Whether the remove was confirmed and succeeded
     */
    private async _confirmGroupRemove(
        confirm: ConfirmModalData,
        action: () => Promise<unknown>,
        error_key: string,
        success_key: string,
    ) {
        const removed = await confirmThenRun(this._dialog, confirm, {
            loading_key: 'SIGNAGE_MANAGER.SVC_REMOVING',
            error_key,
            action,
        });
        if (!removed) return false;
        this._context.reloadSignageGroups();
        notifySuccess(i18n(success_key));
        return true;
    }

    /**
     * Wait for a group save, then reload the group lists and confirm it.
     * Shows an error and returns null when the save fails, so callers bound
     * to clicks do not leave a rejected promise.
     */
    private async _saveGroupChange<T>(
        request: Promise<T>,
        error_key: string,
        success_key: string,
    ): Promise<T | null> {
        let result: T;
        try {
            result = await request;
        } catch {
            notifyError(i18n(error_key));
            return null;
        }
        this._context.reloadSignageGroups();
        notifySuccess(i18n(success_key));
        return result;
    }
}
