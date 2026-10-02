import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    resource,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    addGroup,
    addGroupUser,
    addGroupZone,
    get,
    PlaceGroup,
    PlaceGroupUser,
    PlaceGroupZone,
    PlaceUser,
    PlaceZone,
    queryGroupUsers,
    queryGroupZones,
    type QueryResponse,
    queryUsers,
    queryZones,
    removeGroup,
    removeGroupUser,
    removeGroupZone,
    showGroup,
    updateGroup,
    updateGroupUser,
    updateGroupZone,
} from '@placeos/ts-client';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import {
    groupHierarchy,
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
    DirectoryGroup,
    SignageGroupAccess,
    signageGroupAccess,
} from '../signage-group-access';
import { PAGE_SIZE, searchParam } from '../signage-service.util';

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

    private readonly _manageable_signage_groups = resource({
        params: () => ({
            user_email: this._context.active_user()?.email || '',
            groups_change: this._context.groups_change(),
            can_manage_all: this._context.can_manage_all_groups(),
        }),
        loader: async ({ params }) => {
            if (!params.user_email) return [] as PlaceGroup[];
            try {
                const groups = params.can_manage_all
                    ? await this._context.queryManageableGroups()
                    : await this._currentManageableGroups(params.groups_change);
                return sortGroups(groups);
            } catch {
                return [] as PlaceGroup[];
            }
        },
    });
    public readonly manageable_signage_groups = computed(
        () => this._manageable_signage_groups.value() || [],
    );
    private readonly _root_manageable_signage_groups = resource({
        params: () => ({
            user_email: this._context.active_user()?.email || '',
            groups_change: this._context.groups_change(),
            can_manage_all: this._context.can_manage_all_groups(),
        }),
        loader: async ({ params }) => {
            if (!params.user_email) return [] as PlaceGroup[];
            try {
                if (params.can_manage_all) {
                    return this._context.queryManageableGroups({
                        parent_id: 'root',
                        include_children_count: true,
                    });
                }
                const groups = await this._currentManageableGroups(
                    params.groups_change,
                );
                const group_ids = new Set(groups.map((group) => group.id));
                return sortGroups(
                    groups.filter(
                        (group) =>
                            !group.parent_id || !group_ids.has(group.parent_id),
                    ),
                );
            } catch {
                return [] as PlaceGroup[];
            }
        },
    });
    public readonly root_manageable_signage_groups = computed(
        () => this._root_manageable_signage_groups.value() || [],
    );
    public readonly managed_group = computed(() => {
        const group_id = this.managed_group_id();
        return this.manageable_signage_groups().find(
            (group) => group.id === group_id,
        );
    });

    constructor() {
        effect(() => {
            const groups = this.manageable_signage_groups();
            const group_id = this.managed_group_id();
            if (!groups.length) {
                this.managed_group_id.set('');
            } else if (
                !group_id ||
                !groups.some((group) => group.id === group_id)
            ) {
                this.managed_group_id.set(groups[0].id);
            }
        });
    }

    public async groupChildren(parent_id: string) {
        if (!this._context.can_manage_all_groups()) {
            return sortGroups(
                this.manageable_signage_groups().filter(
                    (group) => group.parent_id === parent_id,
                ),
            );
        }
        return this._context.queryManageableGroups({
            parent_id,
            include_children_count: true,
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
        return resource({
            params: () => ({
                group_id: this._managed_group_id_debounced.value(),
                groups_change: this._context.groups_change(),
            }),
            loader: async ({ params: { group_id } }) => {
                if (!group_id) return managedGroupList<T>('');
                return load(group_id).then(
                    (items) => managedGroupList(group_id, items),
                    () => managedGroupList<T>(group_id, [], true),
                );
            },
        });
    }

    private readonly _managed_group_users = this._managedGroupResource(
        async (group_id) => {
            const { data } = await queryGroupUsers({ group_id, limit: 1000 });
            return data
                .map(decodeEntityNames)
                .sort((a, b) =>
                    (a.user?.name || a.user_id).localeCompare(
                        b.user?.name || b.user_id,
                    ),
                );
        },
    );
    /** Users of the managed group. Empty until they load. */
    public readonly managed_group_users = computed(() =>
        this._managedGroupRows(this._managed_group_users.value()),
    );
    public readonly managed_group_users_loading = computed(() =>
        this._managedGroupLoading(this._managed_group_users.value()),
    );
    public readonly managed_group_users_failed = computed(() =>
        this._managedGroupFailed(this._managed_group_users.value()),
    );
    private readonly _managed_group_zones = this._managedGroupResource(
        async (group_id) => {
            const { data } = await queryGroupZones({ group_id, limit: 200 });
            return data
                .map(decodeEntityNames)
                .sort((a, b) =>
                    (a.zone?.name || a.zone_id).localeCompare(
                        b.zone?.name || b.zone_id,
                    ),
                );
        },
    );
    /** Zones of the managed group. Empty until they load. */
    public readonly managed_group_zones = computed(() =>
        this._managedGroupRows(this._managed_group_zones.value()),
    );
    public readonly managed_group_zones_loading = computed(() =>
        this._managedGroupLoading(this._managed_group_zones.value()),
    );
    public readonly managed_group_zones_failed = computed(() =>
        this._managedGroupFailed(this._managed_group_zones.value()),
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
    public queryGroupZones(search = ''): QueryResponse<PlaceZone> | null {
        const group = this.managed_group();
        return queryZones({
            limit: PAGE_SIZE,
            ...(group?.authority_id
                ? { authority_id: group.authority_id }
                : {}),
            ...searchParam(search),
        } as any);
    }

    /**
     * Whether the user can change a group's feature flags. Only system admins
     * and managers of an ancestor group can, so members of a group cannot
     * lift the limits set on it.
     */
    public canEditGroupFeatures(group: PlaceGroup | undefined) {
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
        return decodeEntityNames(await showGroup(group_id));
    }

    /** Replace the signage flags a group sets itself, limited to what its
     * parent allows. Other subsystems keep their flags. */
    public async saveGroupFeatures(
        group: PlaceGroup,
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
                    updateGroup(group.id, {
                        features: {
                            ...(group.features || {}),
                            signage: {
                                ...narrowGroupFeatures(signage, parent),
                            },
                        },
                    }),
                ),
            'SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_FEATURES_SAVED',
        );
    }

    /** Default permissions and AD group mappings of a group */
    public async loadGroupAccess(group_id: string) {
        return signageGroupAccess(await showGroup(group_id));
    }

    /** Replace the default permissions and AD group mappings of a group.
     * System admins and managers of the group can change them. */
    public async saveGroupAccess(
        group: PlaceGroup,
        access: SignageGroupAccess,
    ) {
        if (!this._context.canManageSignageGroup(group.id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return null;
        }
        const result = await this._saveGroupChange(
            updateGroup(group.id, access),
            'SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_ACCESS_SAVED',
        );
        return signageGroupAccess(result);
    }

    /** Search the organisation directory for AD groups. Fails when the
     * domain has no staff API tenant or the directory cannot list groups. */
    public async searchDirectoryGroups(search = '') {
        const q = search.trim();
        const url = `/api/staff/v1/groups${q ? `?q=${encodeURIComponent(q)}` : ''}`;
        const list: unknown = await get(url);
        if (!Array.isArray(list)) return [];
        return list.filter(
            (item): item is DirectoryGroup => typeof item?.id === 'string',
        );
    }

    /**
     * Whether the user can move a group under a new parent. The group cannot
     * go under itself or one of its children. System admins can move any
     * group, also to the top level. Other users must manage the old and the
     * new parent, so a manager cannot move a group out of the limits that
     * its parent groups set.
     */
    public canChangeGroupParent(group: Partial<PlaceGroup>, parent_id: string) {
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

    public async saveSignageGroup(
        group: Partial<PlaceGroup>,
        data: Partial<PlaceGroup>,
    ) {
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
            group.id ? updateGroup(group.id, payload) : addGroup(payload),
            'SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_SAVED',
        );
    }

    public async removeSignageGroup(group: PlaceGroup) {
        if (!group?.id) return;
        if (!this._context.canManageSignageGroup(group.id)) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP'));
            return;
        }
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_GROUP_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: group.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await this._saveGroupChange(
            removeGroup(group.id).finally(() => result.close()),
            'SIGNAGE_MANAGER.SVC_ERR_REMOVE_GROUP',
            'SIGNAGE_MANAGER.SVC_GROUP_REMOVED',
        );
        if (this._context.selected_group_id() === group.id) {
            this._context.selected_group_id.set('');
        }
    }

    public async searchGroupUsers(search = '') {
        const group = this.managed_group();
        const { data } = await queryUsers({
            q: search,
            limit: 20,
            ...(group?.authority_id
                ? { authority_id: group.authority_id }
                : {}),
        });
        return data;
    }

    public async addManagedGroupUser(user: PlaceUser) {
        const group_id = this.managed_group_id();
        if (!user?.id || !this._context.canManageSignageGroup(group_id)) return;
        // No permissions, so the backend applies the group's defaults
        await this._saveGroupChange(
            addGroupUser({ group_id, user_id: user.id }),
            'SIGNAGE_MANAGER.SVC_ERR_ADD_USER',
            'SIGNAGE_MANAGER.SVC_USER_ADDED',
        );
    }

    /** Change the permissions of a group user. Asks first when the user
     * takes the Manage permission from themselves. */
    public async updateManagedGroupUser(
        item: PlaceGroupUser,
        permissions: number,
    ) {
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
            updateGroupUser(item.user_id, item.group_id, {
                permissions,
            }),
            'SIGNAGE_MANAGER.SVC_ERR_UPDATE_USER',
            'SIGNAGE_MANAGER.SVC_USER_UPDATED',
        );
    }

    /** Remove a user from a group. The confirmation warns when users
     * remove themselves, as they can lose access to the group. */
    public async removeManagedGroupUser(item: PlaceGroupUser) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_USER_TITLE'),
                content: this._isCurrentUser(item.user_id)
                    ? i18n('SIGNAGE_MANAGER.SVC_REMOVE_SELF_FROM_GROUP')
                    : i18n('SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP', {
                          name: item.user?.name || item.user_id,
                      }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await this._saveGroupChange(
            removeGroupUser(item.user_id, item.group_id).finally(() =>
                result.close(),
            ),
            'SIGNAGE_MANAGER.SVC_ERR_REMOVE_USER',
            'SIGNAGE_MANAGER.SVC_USER_REMOVED',
        );
    }

    private _isCurrentUser(user_id: string) {
        return !!user_id && user_id === this._context.current_user()?.id;
    }

    public async addManagedGroupZone(zone: PlaceZone) {
        const group_id = this.managed_group_id();
        if (!zone?.id || !this._context.canManageSignageGroup(group_id)) return;
        await this._saveGroupChange(
            addGroupZone({
                group_id,
                zone_id: zone.id,
                permissions: 0,
            }),
            'SIGNAGE_MANAGER.SVC_ERR_ADD_ZONE',
            'SIGNAGE_MANAGER.SVC_ZONE_ADDED',
        );
    }

    public async updateManagedGroupZone(
        item: PlaceGroupZone,
        permissions: number,
        deny: boolean,
    ) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        await this._saveGroupChange(
            updateGroupZone(item.group_id, item.zone_id, {
                permissions,
                deny,
            }),
            'SIGNAGE_MANAGER.SVC_ERR_UPDATE_ZONE',
            'SIGNAGE_MANAGER.SVC_ZONE_UPDATED',
        );
    }

    public async removeManagedGroupZone(item: PlaceGroupZone) {
        if (!this._context.canManageSignageGroup(item.group_id)) return;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_ZONE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP', {
                    name: item.zone?.name || item.zone_id,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        await this._saveGroupChange(
            removeGroupZone(item.group_id, item.zone_id).finally(() =>
                result.close(),
            ),
            'SIGNAGE_MANAGER.SVC_ERR_REMOVE_ZONE',
            'SIGNAGE_MANAGER.SVC_ZONE_REMOVED',
        );
    }

    /**
     * Wait for a group save, then reload the group lists and confirm it.
     * Shows an error and rethrows when the save fails.
     */
    private async _saveGroupChange<T>(
        request: Promise<T>,
        error_key: string,
        success_key: string,
    ) {
        const result = await request.catch((error) => {
            notifyError(i18n(error_key));
            throw error;
        });
        this._context.reloadSignageGroups();
        notifySuccess(i18n(success_key));
        return result;
    }
}
