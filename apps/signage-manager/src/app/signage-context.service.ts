import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    linkedSignal,
    resource,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    i18n,
    notifySuccess,
    notifyWarn,
    OrganisationService,
    SettingsService,
    user_groups_loaded,
    userSignal,
} from '@placeos/common';
import {
    currentGroups,
    PlaceCurrentGroup,
    PlaceGroup,
    type PlaceGroupQueryOptions,
    PlaceUser,
    queryGroups,
    shareSignageMedia,
    shareSignagePlaylists,
    shareSignageTemplates,
    showGroupFeatures,
} from '@placeos/ts-client';
import { errorStatus } from './ai/ai-image.util';
import { decodeEntityNames } from './shared/decode-entity-names.util';
import { byName } from './shared/paged-search';
import {
    effectiveFeatures,
    SIGNAGE_FEATURE_IDS,
    SignageFeature,
    SignageGroupFeatures,
    signageGroupFeatures,
} from './signage-features';
import { dialogClosed, queryAll } from './signage-service.util';
import { markSignageSharedGroupsChanged } from './signage-shared-groups.util';

const SIGNAGE_SHARE_CONFIG = {
    media: {
        title: 'SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE',
        success: 'SIGNAGE_MANAGER.SVC_MEDIA_SHARED',
        request: shareSignageMedia,
    },
    playlists: {
        title: 'SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE',
        success: 'SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED',
        request: shareSignagePlaylists,
    },
    templates: {
        title: 'SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE',
        success: 'SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED',
        request: shareSignageTemplates,
    },
} as const;

const SIGNAGE_GROUP_STORAGE_KEY = 'PlaceOS.SIGNAGE:selected-group:v1';
/** Signage flags of a group, with the ID of the group they were read for */
interface LoadedGroupFeatures {
    group_id: string;
    features: SignageGroupFeatures;
}

const SIGNAGE_GROUP_FIELDS = [
    'id',
    'name',
    'description',
    'subsystems',
    'authority_id',
    'parent_id',
    'features',
    'children_count',
].join(',');

// Upper bound on group index pages, 10,000 groups at 200 per page.
const MAX_GROUP_PAGES = 50;

// Flags that allow no feature and no plugin
const NO_GROUP_FEATURES: SignageGroupFeatures = {
    features: [],
    available_plugins: [],
};

/** Permission bits of a user or zone in a signage group */
export enum SignageGroupPermission {
    Read = 1 << 0,
    Create = 1 << 1,
    Update = 1 << 2,
    Delete = 1 << 3,
    Operate = 1 << 4,
    Approve = 1 << 5,
    Manage = 1 << 6,
    Share = 1 << 7,
}

function loadSelectedGroupId() {
    if (typeof localStorage === 'undefined') return '';
    try {
        return localStorage.getItem(SIGNAGE_GROUP_STORAGE_KEY) || '';
    } catch {
        // Local storage can be unavailable in private browsing or restricted embeds.
        return '';
    }
}

function persistSelectedGroupId(group_id: string) {
    if (typeof localStorage === 'undefined') return;
    try {
        if (group_id) {
            localStorage.setItem(SIGNAGE_GROUP_STORAGE_KEY, group_id);
        } else {
            localStorage.removeItem(SIGNAGE_GROUP_STORAGE_KEY);
        }
    } catch {
        // Ignore persistence failures; the selector can still default safely.
    }
}

/** Groups with their names decoded, sorted by name */
export function sortGroups<T extends PlaceGroup>(groups: T[]) {
    return groups.map(decodeEntityNames).sort(byName);
}

/** Group and its ancestors, root first. Stops on a repeated group so a broken
 * parent chain can't loop forever. */
export function groupHierarchy(
    selected: PlaceGroup | undefined,
    all_groups: PlaceGroup[],
) {
    if (!selected) return [];
    const groups = new Map(all_groups.map((item) => [item.id, item]));
    const hierarchy: PlaceGroup[] = [];
    const seen = new Set<string>();
    let group = selected;
    while (group?.id && !seen.has(group.id)) {
        hierarchy.unshift(group);
        seen.add(group.id);
        group = group.parent_id ? groups.get(group.parent_id) : undefined;
    }
    return hierarchy;
}

/**
 * Signage groups of the user, the group the app works in, and what the user
 * can do there. The data services scope their queries with it and reload
 * when its group or `data_change` changes.
 */
@Injectable({
    providedIn: 'root',
})
export class SignageContextService {
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _dialog = inject(MatDialog);
    private readonly _change = signal(Date.now());
    private readonly _groups_change = signal(Date.now());

    /** Whether the navigation offers a group selector. Hiding it leaves the
     * section header breadcrumbs as the way to change group. */
    public readonly show_group_selector = this._settings.signal(
        'show_group_selector',
        true,
    );
    /** Features available to every group, from `app.features` */
    public readonly global_features = this._settings.signal<string[]>(
        'features',
        SIGNAGE_FEATURE_IDS,
    );

    /** Signed in user */
    public readonly current_user = userSignal();
    /** Signed in user, or null for the placeholder user shown before sign in */
    public readonly active_user = computed(() => {
        const user = this.current_user();
        return !!user?.email && user.email !== '<empty>@dev.place.tech'
            ? user
            : null;
    });
    // Derived from the resource status (not a manually-set flag) so it stays in
    // sync with signage_groups() — a separate flag flipped in the loader's
    // finally block races ahead of the resource committing its value, which let
    // the access guard read an empty group list and redirect permitted users.
    public readonly signage_groups_loaded = computed(() => {
        if (!this.active_user()?.email) return false;
        const status = this._signage_groups.status();
        return (
            status === 'resolved' || status === 'local' || status === 'error'
        );
    });
    public readonly selected_group_id = signal(loadSelectedGroupId());
    /**
     * Changes each time the user switches group. Services keep their
     * selected item in a `linkedSignal` of it, so a switch clears them.
     */
    private readonly _group_switch = signal(0);
    public readonly group_switch = this._group_switch.asReadonly();
    /** Changes when a group, its users or its zones are saved */
    public readonly groups_change = this._groups_change.asReadonly();
    // Set once the live user has loaded. The cached user shown before it can
    // hold the wrong role, and loading groups for that role would reset the
    // saved group. Stays set through later reloads of the user.
    private readonly _user_loaded = linkedSignal<boolean, boolean>({
        source: user_groups_loaded,
        computation: (loaded, previous) => loaded || !!previous?.value,
    });
    // Idle until the live user has loaded, so the group list always matches
    // the role of the user.
    private readonly _signage_groups = resource({
        params: () =>
            this._user_loaded()
                ? {
                      user_email: this.active_user()?.email || '',
                      groups_change: this._groups_change(),
                      sys_admin: this.is_sys_admin(),
                  }
                : undefined,
        loader: async ({ params }) => {
            if (!params.user_email) return [] as PlaceCurrentGroup[];
            try {
                const groups = params.sys_admin
                    ? (await this.queryManageableGroups()).map(
                          (group) =>
                              ({
                                  group,
                                  permissions: SignageGroupPermission.Manage,
                              }) as PlaceCurrentGroup,
                      )
                    : await this.currentSignageGroups(params.groups_change);
                this.signage_groups_failed.set(false);
                return groups
                    .map(decodeEntityNames)
                    .sort((a, b) => a.group.name.localeCompare(b.group.name));
            } catch {
                this.signage_groups_failed.set(true);
                return [] as PlaceCurrentGroup[];
            }
        },
    });
    /** Whether the last signage group request failed, so an empty group list
     * can't be read as "this user has no access". */
    public readonly signage_groups_failed = signal(false);
    /** Load the signage groups again, after a save or a failed request */
    public reloadSignageGroups() {
        this._groups_change.set(Date.now());
    }
    public readonly signage_groups = computed(
        () => this._signage_groups.value() || [],
    );
    public readonly selected_group = computed(() => {
        const group_id = this.selected_group_id();
        return this.signage_groups().find((item) => item.group.id === group_id);
    });
    /** Selected group and its ancestors, root first. Empty when no group is
     * selected. */
    public readonly selected_group_hierarchy = computed(() =>
        groupHierarchy(
            this.selected_group()?.group,
            this.signage_groups().map((item) => item.group),
        ),
    );
    public readonly is_sys_admin = computed(() => {
        const user: Partial<Pick<PlaceUser, 'groups' | 'sys_admin'>> =
            this.current_user();
        return (
            !!user.sys_admin || (user.groups || []).includes('placeos_admin')
        );
    });
    private readonly _is_support = computed(() => {
        const user: Partial<Pick<PlaceUser, 'groups' | 'support'>> =
            this.current_user();
        return (
            !!user.support || (user.groups || []).includes('placeos_support')
        );
    });
    /**
     * Whether the user can manage every group and use the "All groups" view.
     * Only system admins can change content in that view.
     */
    public readonly can_manage_all_groups = computed(
        () => this.is_sys_admin() || this._is_support(),
    );
    /** Whether the user can manage any signage group */
    public readonly can_manage_groups = computed(
        () =>
            this.can_manage_all_groups() ||
            this.signage_groups().some(
                ({ permissions }) =>
                    !!(permissions & SignageGroupPermission.Manage),
            ),
    );

    /**
     * Signage groups from the groups index, every page of them. A single page
     * would hide groups past the first 200 from the selector and group admin.
     * Stops after `MAX_GROUP_PAGES` pages.
     */
    public async queryManageableGroups(params: PlaceGroupQueryOptions = {}) {
        const groups = await queryAll(
            queryGroups({
                limit: 200,
                fields: SIGNAGE_GROUP_FIELDS,
                subsystem: 'signage',
                ...params,
            } as PlaceGroupQueryOptions),
            MAX_GROUP_PAGES,
        );
        return groups
            .filter((group) => group.subsystems?.includes('signage'))
            .sort(byName);
    }

    // Several resources need the current user's signage groups on page load.
    // Share a single in-flight request per `groups_change` so we hit the
    // endpoint once instead of three times.
    private _current_groups_request: {
        key: number;
        promise: Promise<PlaceCurrentGroup[]>;
    } | null = null;

    /** Signage groups of the current user, one request per `groups_change` */
    public currentSignageGroups(groups_change: number) {
        if (this._current_groups_request?.key === groups_change) {
            return this._current_groups_request.promise;
        }
        const promise = currentGroups({ subsystem: 'signage' }).catch((err) => {
            // Drop the cache on failure so a later trigger can retry.
            if (this._current_groups_request?.key === groups_change) {
                this._current_groups_request = null;
            }
            throw err;
        });
        this._current_groups_request = { key: groups_change, promise };
        return promise;
    }

    /** ID of the selected group, empty for "All groups" */
    public readonly api_group_id = computed(
        () => this.selected_group()?.group.id || '',
    );
    // Group selection fans out to six heavy list queries (media, playlists,
    // displays, zones...). Debounce so clicking through the group tree doesn't
    // fire a full set of refetches per click.
    public readonly api_group_id_debounced = debounced(this.api_group_id, 300);
    public readonly can_create = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Create),
    );
    public readonly can_update = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Update),
    );
    public readonly can_delete = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Delete),
    );
    public readonly can_update_media_tags = computed(() =>
        this.api_group_id() ? this.can_update() : this.is_sys_admin(),
    );
    public readonly can_delete_tagged_media = computed(() =>
        this.api_group_id() ? this.can_delete() : this.is_sys_admin(),
    );
    public readonly can_delete_displays = this.is_sys_admin;
    public readonly can_approve = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Approve),
    );
    public readonly can_share = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Share),
    );
    public readonly can_manage_zones = computed(() =>
        this._hasGroupPermission(SignageGroupPermission.Manage),
    );

    // Effective signage flags of the selected group, ancestors included,
    // tagged with the group they belong to. "All groups" has no flags. A 404
    // means the backend has no group features route, so the group sets no
    // limits. Any other failed read allows nothing.
    private readonly _group_features = resource({
        params: () => ({
            group_id: this.api_group_id_debounced.value(),
            groups_change: this._groups_change(),
        }),
        loader: async ({ params }) => ({
            group_id: params.group_id,
            features: await this.loadGroupFeatures(params.group_id).catch(
                (error: unknown) =>
                    errorStatus(error) === 404 ? {} : NO_GROUP_FEATURES,
            ),
        }),
    });
    // A resource clears its value while it loads. Keep the last result so a
    // reload of the same group does not hide its features.
    private readonly _loaded_group_features = linkedSignal<
        LoadedGroupFeatures | undefined,
        LoadedGroupFeatures | undefined
    >({
        source: () => this._group_features.value(),
        computation: (value, previous) => value ?? previous?.value,
    });
    /** Flags of the selected group, or undefined while they load */
    private readonly _selected_group_features = computed(() => {
        const loaded = this._loaded_group_features();
        return loaded?.group_id === this.api_group_id()
            ? loaded.features
            : undefined;
    });
    /**
     * Signage settings of the selected group, ancestors included. Allows
     * nothing until they load, so the previous group's flags never apply.
     */
    public readonly group_features = computed(
        () => this._selected_group_features() ?? NO_GROUP_FEATURES,
    );
    /**
     * Whether `features` belongs to a settled group selection: the group list
     * has loaded, the selected group is picked and its flags have loaded. Also
     * true when the group list failed, as nothing more will load.
     */
    public readonly features_ready = computed(() => {
        if (!this.signage_groups_loaded()) return false;
        if (this.signage_groups_failed()) return true;
        const selection_settled =
            !!this.selected_group() ||
            (!this.selected_group_id() &&
                (this.can_manage_all_groups() ||
                    !this.signage_groups().length));
        return selection_settled && !!this._selected_group_features();
    });
    /** Features the user can use in the selected group */
    public readonly features = computed(() =>
        effectiveFeatures(this.global_features() || [], this.group_features()),
    );
    public hasFeature(feature: SignageFeature) {
        return this.features().includes(feature);
    }
    public readonly templates_enabled = computed(() =>
        this.hasFeature('templates'),
    );
    private readonly _can_edit_templates = computed(() =>
        this.hasFeature('template-editing'),
    );
    public readonly can_create_templates = computed(
        () => this.can_create() && this._can_edit_templates(),
    );
    public readonly can_update_templates = computed(
        () => this.can_update() && this._can_edit_templates(),
    );
    public readonly can_delete_templates = computed(
        () => this.can_delete() && this._can_edit_templates(),
    );

    /**
     * Whether the lists can be queried. Follows the debounced group, like the
     * list queries it gates. Reading the live group would let lists run
     * org-wide before a group is picked.
     */
    public readonly can_query_group_data = computed(
        () =>
            this.can_manage_all_groups() ||
            !!this.api_group_id_debounced.value(),
    );

    /** Changes when signage data is saved, for views that load their own data */
    public readonly data_change = this._change.asReadonly();

    constructor() {
        effect(() => {
            // A failed load is not an empty list. Keep the saved group so a
            // retry can restore it.
            if (!this.signage_groups_loaded() || this.signage_groups_failed()) {
                return;
            }
            const groups = this.signage_groups();
            const selected_group_id = this.selected_group_id();
            if (!groups.length) {
                this.selected_group_id.set('');
                return;
            }
            if (groups.some((item) => item.group.id === selected_group_id)) {
                return;
            }
            this.selected_group_id.set(
                this.can_manage_all_groups() ? '' : groups[0].group.id,
            );
        });

        effect(() => persistSelectedGroupId(this.selected_group_id()));
    }

    /** Whether the organisation has loaded and the lists can be queried */
    public canQueryLists() {
        return this._org.initialised() && this.can_query_group_data();
    }

    /** Mark signage data as saved, so the lists reload */
    public changed() {
        this._change.set(Date.now());
    }

    public canManageSignageGroup(group_id = '') {
        if (this.can_manage_all_groups()) return true;
        const group = this.signage_groups().find(
            (item) => item.group.id === group_id,
        );
        return !!(group?.permissions & SignageGroupPermission.Manage);
    }

    /** Effective signage flags of a group, including inherited values */
    public async loadGroupFeatures(group_id: string) {
        if (!group_id) return {} as SignageGroupFeatures;
        const raw = await showGroupFeatures(group_id, { subsystem: 'signage' });
        return signageGroupFeatures(raw);
    }

    /**
     * Switch the signage group the app works in. An empty ID selects "All
     * groups". Clears the selected items, and the lists reload when the
     * debounced group changes.
     */
    public setSelectedGroup(group_id: string) {
        const allowed = group_id
            ? this.signage_groups().some((item) => item.group.id === group_id)
            : this.can_manage_all_groups();
        if (!allowed) return;
        this.selected_group_id.set(group_id);
        this._group_switch.update((count) => count + 1);
    }

    /** Let the user pick the signage group to work in */
    public async selectGroup() {
        const group_id = await this._pickGroup({
            title: i18n('SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'),
            groups: this.signage_groups(),
            selected_group_id: this.selected_group_id(),
            show_all_groups: this.can_manage_all_groups(),
        });
        if (group_id === undefined) return;
        this.setSelectedGroup(group_id);
    }

    private _hasGroupPermission(permission: SignageGroupPermission) {
        if (this.is_sys_admin()) return true;
        const permissions = this.selected_group()?.permissions || 0;
        return !!(
            permissions & SignageGroupPermission.Manage ||
            permissions & permission
        );
    }

    /**
     * Warn and return false when the user lacks a permission.
     * @param message_key Translation key of the warning
     */
    public requirePermission(has_permission: boolean, message_key: string) {
        if (has_permission) return true;
        notifyWarn(i18n(message_key));
        return false;
    }

    /** Add the selected group to query params */
    public groupQueryParams<T extends Record<string, any>>(
        query_params: T,
        group_id = this.api_group_id(),
    ) {
        return {
            ...query_params,
            ...(group_id ? { group_id } : {}),
        } as T & { group_id?: string };
    }

    /** Add the selected group to query params, or the organisation zone for
     * "All groups" */
    public orgZoneQueryParams<T extends Record<string, any>>(
        query_params: T,
        group_id = this.api_group_id(),
    ) {
        const org_zone_id = this._org.organisation?.id;
        let zone_params: { group_id?: string; zone_id?: string } = {};
        if (group_id) {
            zone_params = { group_id };
        } else if (org_zone_id) {
            zone_params = { zone_id: org_zone_id };
        }
        return { ...query_params, ...zone_params } as T & {
            group_id?: string;
            zone_id?: string;
        };
    }

    /**
     * Let the user pick another signage group and share items with it.
     * @returns Whether the items were shared
     */
    public async shareItems(
        item_type: keyof typeof SIGNAGE_SHARE_CONFIG,
        item_ids: string[],
    ) {
        if (
            !this.requirePermission(
                this.can_share(),
                'SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS',
            )
        )
            return false;
        const selected_group_id = this.selected_group()?.group.id || '';
        const target_groups = this.signage_groups().filter(
            (item) => item.group.id !== selected_group_id,
        );
        if (!target_groups.length) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE'));
            return false;
        }
        const share_config = SIGNAGE_SHARE_CONFIG[item_type];
        const group_id = await this._pickGroup({
            title: i18n(share_config.title),
            groups: target_groups,
        });
        if (!group_id) return false;
        const options = { items: item_ids.join(','), to: group_id };
        await share_config.request(options);
        markSignageSharedGroupsChanged();
        notifySuccess(i18n(share_config.success));
        return true;
    }

    /**
     * Signage groups that hold an item, for approval requests. Only the
     * selected group when one is selected, otherwise every group whose list
     * holds the item. Groups the user cannot query are left out.
     * @param query Query of the item type in one group
     */
    public async groupsHolding(
        item_id: string,
        query: (group_id: string) => Promise<{ data?: { id: string }[] }>,
    ) {
        const groups = this.signage_groups().filter(({ group }) => group.id);
        const selected_group = groups.find(
            ({ group }) => group.id === this.api_group_id(),
        );
        if (selected_group) return [selected_group];
        const matches = await Promise.all(
            groups.map(({ group }) =>
                query(group.id).then(
                    (result) =>
                        (result.data || []).some(({ id }) => id === item_id),
                    () => false,
                ),
            ),
        );
        return groups.filter((_, index) => matches[index]);
    }

    /** Let the user pick a group from the group select modal */
    private async _pickGroup(data: {
        title: string;
        groups: PlaceCurrentGroup[];
        selected_group_id?: string;
        show_all_groups?: boolean;
    }) {
        const { GroupSelectModalComponent } =
            await import('./shared/group-select-modal.component');
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data,
            panelClass: 'mobile-fullscreen',
        });
        return dialogClosed<string>(ref);
    }
}
