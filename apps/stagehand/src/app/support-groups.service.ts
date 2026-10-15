import {
    computed,
    effect,
    Injectable,
    linkedSignal,
    resource,
    signal,
} from '@angular/core';
import { user_groups_loaded, userSignal } from '@placeos/common';
import {
    currentGroups,
    PlaceCurrentGroup,
    PlaceUser,
    PlaceZone,
    PlaceZoneQueryOptions,
    queryGroups,
    queryZones,
    showZone,
} from '@placeos/ts-client';
import {
    groupHierarchy,
    GroupScope,
    groupScope,
    queryAll,
    SupportGroupPermission,
} from './support-groups';

export const SUPPORT_SUBSYSTEM = 'support';
const GROUP_STORAGE_KEY = 'PlaceOS.STAGEHAND:selected-group:v1';
// Zones above a granted zone are looked up one level at a time; the hierarchy
// is org, region, building, level and area.
const MAX_ANCESTOR_DEPTH = 6;

/** Scope that sees nothing, for while a group's zones load */
const EMPTY_SCOPE: GroupScope = {
    reachable: new Set(),
    denied: new Set(),
    anchors: [],
    zones: new Map(),
};

type GroupZoneQuery = PlaceZoneQueryOptions & {
    group_id: string;
    descendants?: boolean;
};

function loadSelectedGroupId() {
    try {
        return localStorage.getItem(GROUP_STORAGE_KEY) || '';
    } catch {
        // Local storage can be unavailable in private browsing or restricted embeds.
        return '';
    }
}

function persistSelectedGroupId(group_id: string) {
    try {
        if (group_id) localStorage.setItem(GROUP_STORAGE_KEY, group_id);
        else localStorage.removeItem(GROUP_STORAGE_KEY);
    } catch {
        // Ignore persistence failures; the selector can still default safely.
    }
}

/** Zones above `zones` that are not in it, fetched a level at a time */
async function loadAncestors(zones: PlaceZone[]) {
    const known = new Map(zones.map((zone) => [zone.id, zone]));
    const ancestors: PlaceZone[] = [];
    let pending = zones;
    for (let depth = 0; depth < MAX_ANCESTOR_DEPTH; depth++) {
        const missing = [
            ...new Set(
                pending
                    .map((zone) => zone.parent_id)
                    .filter((id) => id && !known.has(id)),
            ),
        ];
        if (!missing.length) break;
        pending = (
            await Promise.all(
                missing.map((id) => showZone(id).catch(() => null)),
            )
        ).filter((zone): zone is PlaceZone => !!zone);
        for (const zone of pending) known.set(zone.id, zone);
        ancestors.push(...pending);
    }
    return ancestors;
}

/** What a support group can see, and the zones above it */
export async function loadGroupScope(group_id: string): Promise<GroupScope> {
    const query = (params: Partial<GroupZoneQuery>) =>
        queryAll(
            queryZones({ group_id, limit: 500, ...params } as GroupZoneQuery),
        );
    const [reachable, assigned] = await Promise.all([
        query({ descendants: true }),
        query({}),
    ]);
    return groupScope(reachable, assigned, await loadAncestors(reachable));
}

/**
 * Support groups of the user, the group stagehand works in, and the zones it
 * can see. Admins and support users can also work across every group.
 */
@Injectable({
    providedIn: 'root',
})
export class SupportGroupsService {
    private readonly _groups_change = signal(0);

    public readonly current_user = userSignal();
    public readonly is_sys_admin = computed(() => {
        const user: Partial<Pick<PlaceUser, 'groups' | 'sys_admin'>> =
            this.current_user() || {};
        return (
            !!user.sys_admin || (user.groups || []).includes('placeos_admin')
        );
    });
    private readonly _is_support = computed(() => {
        const user: Partial<Pick<PlaceUser, 'groups' | 'support'>> =
            this.current_user() || {};
        return (
            !!user.support || (user.groups || []).includes('placeos_support')
        );
    });
    /** Whether the user can pick "All groups" and see every group */
    public readonly can_view_all = computed(
        () => this.is_sys_admin() || this._is_support(),
    );

    // Set once the live user has loaded. The cached user shown before it can
    // hold the wrong role, and loading groups for that role would reset the
    // saved group.
    private readonly _user_loaded = linkedSignal<boolean, boolean>({
        source: user_groups_loaded,
        computation: (loaded, previous) => loaded || !!previous?.value,
    });
    private readonly _groups = resource({
        params: () =>
            this._user_loaded()
                ? {
                      email: this.current_user()?.email || '',
                      view_all: this.can_view_all(),
                      change: this._groups_change(),
                  }
                : undefined,
        loader: async ({ params }) => {
            if (!params.email) return [] as PlaceCurrentGroup[];
            const groups = params.view_all
                ? (
                      await queryAll(
                          queryGroups({
                              limit: 200,
                              subsystem: SUPPORT_SUBSYSTEM,
                          } as Parameters<typeof queryGroups>[0]),
                      )
                  )
                      .filter((group) =>
                          group.subsystems?.includes(SUPPORT_SUBSYSTEM),
                      )
                      .map((group) => ({
                          group,
                          permissions: SupportGroupPermission.Manage,
                      }))
                : await currentGroups({ subsystem: SUPPORT_SUBSYSTEM });
            return groups.sort((a, b) =>
                a.group.name.localeCompare(b.group.name),
            );
        },
    });
    /** Whether the group list has loaded, or failed to */
    public readonly groups_loaded = computed(() => {
        const status = this._groups.status();
        return (
            status === 'resolved' || status === 'local' || status === 'error'
        );
    });
    /** Whether the group list failed to load, so an empty list can't be read
     * as "this user is in no group" */
    public readonly groups_failed = computed(
        () => this._groups.status() === 'error',
    );
    public readonly groups = computed(() =>
        this._groups.hasValue() ? this._groups.value() : [],
    );

    public readonly selected_group_id = signal(loadSelectedGroupId());
    public readonly selected_group = computed(() =>
        this.groups().find(
            ({ group }) => group.id === this.selected_group_id(),
        ),
    );
    /** Selected group and its ancestors, root first */
    public readonly selected_hierarchy = computed(() =>
        groupHierarchy(
            this.selected_group()?.group,
            this.groups().map(({ group }) => group),
        ),
    );
    /** ID of the selected group, empty for "All groups" */
    public readonly group_id = computed(
        () => this.selected_group()?.group.id || '',
    );

    private readonly _scope = resource({
        params: () => ({ group_id: this.group_id() }),
        loader: async ({ params }) =>
            params.group_id
                ? {
                      group_id: params.group_id,
                      ...(await loadGroupScope(params.group_id)),
                  }
                : null,
    });
    /**
     * What the selected group can see. Null for "All groups", which sees
     * everything. Sees nothing while a group loads, when its zones fail to
     * load, or when the user has no group, so another group's data never
     * shows.
     */
    public readonly scope = computed<GroupScope | null>(() => {
        const group_id = this.group_id();
        if (!group_id) {
            return this.groups_loaded() && this.can_view_all()
                ? null
                : EMPTY_SCOPE;
        }
        const loaded = this._scope.hasValue() ? this._scope.value() : null;
        return loaded?.group_id === group_id ? loaded : EMPTY_SCOPE;
    });
    /** Whether `scope` is settled: the groups and the group's zones loaded */
    public readonly scope_ready = computed(() => {
        if (!this.groups_loaded()) return false;
        if (!this.group_id()) return true;
        return this.scope() !== EMPTY_SCOPE || this._scope.status() === 'error';
    });

    constructor() {
        effect(() => {
            // A failed load is not an empty list. Keep the saved group so a
            // retry can restore it.
            if (!this.groups_loaded() || this.groups_failed()) return;
            const groups = this.groups();
            const selected = this.selected_group_id();
            if (groups.some(({ group }) => group.id === selected)) return;
            if (!selected && this.can_view_all()) return;
            this.selected_group_id.set(
                this.can_view_all() || !groups.length ? '' : groups[0].group.id,
            );
        });
        effect(() => persistSelectedGroupId(this.selected_group_id()));
    }

    /** Load the groups again */
    public reloadGroups() {
        this._groups_change.update((count) => count + 1);
    }

    /** Switch group. An empty ID picks "All groups", for those allowed it. */
    public setSelectedGroup(group_id: string) {
        const allowed = group_id
            ? this.groups().some(({ group }) => group.id === group_id)
            : this.can_view_all();
        if (allowed) this.selected_group_id.set(group_id);
    }
}
