import {
  byDisplayName,
  byName,
  decodeEntityNames
} from "./chunk-EMBZFGIE.js";
import {
  errorStatus
} from "./chunk-RR6Z4IN7.js";
import {
  MatDialog
} from "./chunk-B6VCLN4P.js";
import {
  OrganisationService,
  SettingsService,
  userSignal,
  user_groups_loaded
} from "./chunk-4BHMYMLA.js";
import {
  $l,
  Cu,
  Eu,
  Gh,
  Ou,
  Qh,
  Vh,
  Zh,
  al,
  el,
  i18n,
  ml,
  notifyError,
  notifySuccess,
  notifyWarn,
  vl
} from "./chunk-UY3BZCXJ.js";
import {
  Injectable,
  computed,
  debounced,
  effect,
  inject,
  linkedSignal,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/signage-features.ts
var SIGNAGE_FEATURES = [
  { id: "templates", label: i18n("SIGNAGE_MANAGER.FEATURE_TEMPLATES") },
  {
    id: "template-editing",
    label: i18n("SIGNAGE_MANAGER.FEATURE_TEMPLATE_EDITING")
  },
  {
    id: "ai-generation",
    label: i18n("SIGNAGE_MANAGER.FEATURE_IMAGE_GENERATION")
  },
  { id: "ai-editing", label: i18n("SIGNAGE_MANAGER.FEATURE_IMAGE_EDITING") },
  {
    id: "branding-editing",
    label: i18n("SIGNAGE_MANAGER.FEATURE_BRANDING_EDITING")
  }
];
var SIGNAGE_FEATURE_IDS = SIGNAGE_FEATURES.map(({ id }) => id);
var ORGANISATION_FEATURES = [
  "branding-editing"
];
function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function stringList(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : void 0;
}
function signageGroupFeatures(raw) {
  if (!isRecord(raw))
    return {};
  const source = isRecord(raw.signage) ? raw.signage : raw;
  const result = {};
  const features = stringList(source.features);
  const plugins = stringList(source.available_plugins);
  if (features)
    result.features = features;
  if (plugins)
    result.available_plugins = plugins;
  return result;
}
function effectiveFeatures(global, group) {
  const allowed = group.features;
  return allowed ? global.filter((id) => allowed.includes(id)) : [...global];
}
function narrowGroupFeatures(own, parent) {
  const result = __spreadValues({}, own);
  for (const key of ["features", "available_plugins"]) {
    const allowed = parent[key];
    const list = own[key];
    if (allowed && list) {
      result[key] = list.filter((id) => allowed.includes(id));
    }
  }
  return result;
}
function noGroupFeaturesOn404(error) {
  if (errorStatus(error) === 404)
    return {};
  throw error;
}

// apps/signage-manager/src/app/signage-service.util.ts
var PAGE_SIZE = 200;
var SEARCH_FIELDS = [
  "id",
  "name",
  "display_name",
  "description",
  "tags"
].join(",");
function searchParam(search) {
  const term = search.trim();
  return term ? { q: term, fields: SEARCH_FIELDS } : {};
}
async function queryAll(query, max_pages = 50) {
  const items = [];
  let page = await query;
  for (let count = 1; ; count++) {
    const data = page.data || [];
    items.push(...data);
    const next = data.length && count < max_pages ? page.next?.() : null;
    if (!next)
      break;
    page = await next;
  }
  return items.map(decodeEntityNames);
}
function mergeItems(list, overrides) {
  return (list || []).map((item) => overrides[item.id] || item).sort(byDisplayName);
}
function dialogClosed(ref) {
  return new Promise((resolve) => {
    const subscription = ref.afterClosed().subscribe((value) => {
      subscription.unsubscribe();
      resolve(value);
    });
  });
}

// apps/signage-manager/src/app/signage-shared-groups.util.ts
var _shared_groups_change = signal(
  0,
  ...ngDevMode ? [{ debugName: "_shared_groups_change" }] : (
    /* istanbul ignore next */
    []
  )
);
var signage_shared_groups_change = _shared_groups_change.asReadonly();
function markSignageSharedGroupsChanged() {
  _shared_groups_change.update((change) => change + 1);
}
function showSignageItem(type, id, query_params) {
  switch (type) {
    case "media":
      return Gh(id, query_params);
    case "playlists":
      return Vh(id, query_params);
    case "templates":
      return ml(id);
  }
}
async function listSignageSharedGroups(type, id, group_id = "") {
  if (!id)
    return [];
  try {
    const item = await showSignageItem(type, id, group_id ? { group_id } : {});
    return item.shared_with ?? [];
  } catch {
    return [];
  }
}
function unshareSignageItem(type, id, group_id) {
  switch (type) {
    case "media":
      return Qh(id, { group_id });
    case "playlists":
      return el(id, { group_id });
    case "templates":
      return $l(id, { group_id });
  }
}

// apps/signage-manager/src/app/signage-context.service.ts
var SIGNAGE_SHARE_CONFIG = {
  media: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE",
    success: "SIGNAGE_MANAGER.SVC_MEDIA_SHARED",
    request: Zh
  },
  playlists: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE",
    success: "SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED",
    request: al
  },
  templates: {
    title: "SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE",
    success: "SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED",
    request: vl
  }
};
var SIGNAGE_GROUP_STORAGE_KEY = "PlaceOS.SIGNAGE:selected-group:v1";
var SIGNAGE_GROUP_FIELDS = [
  "id",
  "name",
  "description",
  "subsystems",
  "authority_id",
  "parent_id",
  "features",
  "children_count"
].join(",");
var MAX_GROUP_PAGES = 50;
var NO_GROUP_FEATURES = {
  features: [],
  available_plugins: []
};
var SignageGroupPermission;
(function(SignageGroupPermission2) {
  SignageGroupPermission2[SignageGroupPermission2["Read"] = 1] = "Read";
  SignageGroupPermission2[SignageGroupPermission2["Create"] = 2] = "Create";
  SignageGroupPermission2[SignageGroupPermission2["Update"] = 4] = "Update";
  SignageGroupPermission2[SignageGroupPermission2["Delete"] = 8] = "Delete";
  SignageGroupPermission2[SignageGroupPermission2["Operate"] = 16] = "Operate";
  SignageGroupPermission2[SignageGroupPermission2["Approve"] = 32] = "Approve";
  SignageGroupPermission2[SignageGroupPermission2["Manage"] = 64] = "Manage";
  SignageGroupPermission2[SignageGroupPermission2["Share"] = 128] = "Share";
})(SignageGroupPermission || (SignageGroupPermission = {}));
function loadSelectedGroupId() {
  if (typeof localStorage === "undefined")
    return "";
  try {
    return localStorage.getItem(SIGNAGE_GROUP_STORAGE_KEY) || "";
  } catch {
    return "";
  }
}
function persistSelectedGroupId(group_id) {
  if (typeof localStorage === "undefined")
    return;
  try {
    if (group_id) {
      localStorage.setItem(SIGNAGE_GROUP_STORAGE_KEY, group_id);
    } else {
      localStorage.removeItem(SIGNAGE_GROUP_STORAGE_KEY);
    }
  } catch {
  }
}
function sortGroups(groups) {
  return groups.map(decodeEntityNames).sort(byName);
}
function lastLoaded(list, key = () => "") {
  return linkedSignal({
    // Reading the value of a failed resource throws
    source: () => ({
      value: list.hasValue() ? list.value() : void 0,
      key: key()
    }),
    computation: (source, previous) => source.value ?? (previous?.source.key === source.key ? previous.value : void 0)
  });
}
function sharedRequest(load, user) {
  let last = null;
  return (key) => {
    const current_user = user();
    if (last?.key === key && last.user === current_user) {
      return last.promise;
    }
    const request = { key, user: current_user, promise: load() };
    request.promise = request.promise.catch((error) => {
      if (last === request)
        last = null;
      throw error;
    });
    last = request;
    return request.promise;
  };
}
function groupHierarchy(selected, all_groups) {
  if (!selected)
    return [];
  const groups = new Map(all_groups.map((item) => [item.id, item]));
  const hierarchy = [];
  const seen = /* @__PURE__ */ new Set();
  let group = selected;
  while (group?.id && !seen.has(group.id)) {
    hierarchy.unshift(group);
    seen.add(group.id);
    group = group.parent_id ? groups.get(group.parent_id) : void 0;
  }
  return hierarchy;
}
var SignageContextService = class _SignageContextService {
  /** Load the signage groups again, after a save or a failed request */
  reloadSignageGroups() {
    this._groups_change.set(Date.now());
  }
  /**
   * Signage groups from the groups index, every page of them. A single page
   * would hide groups past the first 200 from the selector and group admin.
   * Stops after `MAX_GROUP_PAGES` pages.
   */
  async queryManageableGroups(params = {}) {
    const query_params = __spreadValues({
      limit: 200,
      fields: SIGNAGE_GROUP_FIELDS,
      subsystem: "signage"
    }, params);
    const groups = await queryAll(Eu(query_params), MAX_GROUP_PAGES);
    return groups.filter((group) => group.subsystems?.includes("signage")).sort(byName);
  }
  hasFeature(feature) {
    return this.features().includes(feature);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._change = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._groups_change = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_groups_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_group_selector = this._settings.signal("show_group_selector", true);
    this.global_features = this._settings.signal("features", SIGNAGE_FEATURE_IDS);
    this.current_user = userSignal();
    this.active_user = computed(
      () => {
        const user = this.current_user();
        return !!user?.email && user.email !== "<empty>@dev.place.tech" ? user : null;
      },
      ...ngDevMode ? [{ debugName: "active_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_groups_loaded = computed(
      () => {
        if (!this.active_user()?.email)
          return false;
        const status = this._signage_groups.status();
        return status === "resolved" || status === "local" || status === "error";
      },
      ...ngDevMode ? [{ debugName: "signage_groups_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_group_id = signal(
      loadSelectedGroupId(),
      ...ngDevMode ? [{ debugName: "selected_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._group_switch = signal(
      0,
      ...ngDevMode ? [{ debugName: "_group_switch" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_switch = this._group_switch.asReadonly();
    this.groups_change = this._groups_change.asReadonly();
    this._user_loaded = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_loaded" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: user_groups_loaded,
      computation: (loaded, previous) => loaded || !!previous?.value
    }));
    this._signage_groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_signage_groups" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._user_loaded() ? {
        user_email: this.active_user()?.email || "",
        groups_change: this._groups_change(),
        sys_admin: this.is_sys_admin()
      } : void 0,
      loader: async ({ params }) => {
        if (!params.user_email)
          return [];
        try {
          const groups = params.sys_admin ? (await this.allSignageGroups(params.groups_change)).map((group) => ({
            group,
            permissions: SignageGroupPermission.Manage
          })) : await this.currentSignageGroups(params.groups_change);
          this.signage_groups_failed.set(false);
          return groups.map(decodeEntityNames).sort((a, b) => a.group.name.localeCompare(b.group.name));
        } catch (error) {
          this.signage_groups_failed.set(true);
          throw error;
        }
      }
    }));
    this.signage_groups_failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "signage_groups_failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loaded_signage_groups = lastLoaded(this._signage_groups, () => this.active_user()?.email);
    this.signage_groups = computed(
      () => this._loaded_signage_groups() || [],
      ...ngDevMode ? [{ debugName: "signage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_group = computed(
      () => {
        const group_id = this.selected_group_id();
        return this.signage_groups().find((item) => item.group.id === group_id);
      },
      ...ngDevMode ? [{ debugName: "selected_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_group_hierarchy = computed(
      () => groupHierarchy(this.selected_group()?.group, this.signage_groups().map((item) => item.group)),
      ...ngDevMode ? [{ debugName: "selected_group_hierarchy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_sys_admin = computed(
      () => {
        const user = this.current_user();
        return !!user.sys_admin || (user.groups || []).includes("placeos_admin");
      },
      ...ngDevMode ? [{ debugName: "is_sys_admin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._is_support = computed(
      () => {
        const user = this.current_user();
        return !!user.support || (user.groups || []).includes("placeos_support");
      },
      ...ngDevMode ? [{ debugName: "_is_support" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_all_groups = computed(
      () => this.is_sys_admin() || this._is_support(),
      ...ngDevMode ? [{ debugName: "can_manage_all_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_groups = computed(
      () => this.can_manage_all_groups() || this.signage_groups().some(({ permissions }) => !!(permissions & SignageGroupPermission.Manage)),
      ...ngDevMode ? [{ debugName: "can_manage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentSignageGroups = sharedRequest(() => Cu({ subsystem: "signage" }), () => untracked(this.active_user)?.email);
    this.allSignageGroups = sharedRequest(() => this.queryManageableGroups(), () => untracked(this.active_user)?.email);
    this.api_group_id = computed(
      () => this.selected_group()?.group.id || "",
      ...ngDevMode ? [{ debugName: "api_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.api_group_id_debounced = debounced(this.api_group_id, 300);
    this.can_create = computed(
      () => this._hasGroupPermission(SignageGroupPermission.Create),
      ...ngDevMode ? [{ debugName: "can_create" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = computed(
      () => this._hasGroupPermission(SignageGroupPermission.Update),
      ...ngDevMode ? [{ debugName: "can_update" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete = computed(
      () => this._hasGroupPermission(SignageGroupPermission.Delete),
      ...ngDevMode ? [{ debugName: "can_delete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update_media_tags = computed(
      () => this.api_group_id() ? this.can_update() : this.is_sys_admin(),
      ...ngDevMode ? [{ debugName: "can_update_media_tags" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete_tagged_media = computed(
      () => this.api_group_id() ? this.can_delete() : this.is_sys_admin(),
      ...ngDevMode ? [{ debugName: "can_delete_tagged_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete_displays = this.is_sys_admin;
    this.can_approve = computed(
      () => this._hasGroupPermission(SignageGroupPermission.Approve),
      ...ngDevMode ? [{ debugName: "can_approve" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_share = computed(
      () => this._hasGroupPermission(SignageGroupPermission.Share),
      ...ngDevMode ? [{ debugName: "can_share" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_zones = computed(
      () => this._hasGroupPermission(SignageGroupPermission.Manage),
      ...ngDevMode ? [{ debugName: "can_manage_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._group_features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_group_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        group_id: this.api_group_id_debounced.value(),
        groups_change: this._groups_change()
      }),
      loader: async ({ params }) => ({
        group_id: params.group_id,
        features: await this.loadGroupFeatures(params.group_id).catch((error) => errorStatus(error) === 404 ? {} : NO_GROUP_FEATURES)
      })
    }));
    this._loaded_group_features = lastLoaded(this._group_features);
    this._selected_group_features = computed(
      () => {
        const loaded = this._loaded_group_features();
        return loaded?.group_id === this.api_group_id() ? loaded.features : void 0;
      },
      ...ngDevMode ? [{ debugName: "_selected_group_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_features = computed(
      () => this._selected_group_features() ?? NO_GROUP_FEATURES,
      ...ngDevMode ? [{ debugName: "group_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features_ready = computed(
      () => {
        if (!this.signage_groups_loaded())
          return false;
        if (this.signage_groups_failed())
          return true;
        const selection_settled = !!this.selected_group() || !this.selected_group_id() && (this.can_manage_all_groups() || !this.signage_groups().length);
        return selection_settled && !!this._selected_group_features();
      },
      ...ngDevMode ? [{ debugName: "features_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => effectiveFeatures(this.global_features() || [], this.group_features()),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_enabled = computed(
      () => this.hasFeature("templates"),
      ...ngDevMode ? [{ debugName: "templates_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._can_edit_templates = computed(
      () => this.hasFeature("template-editing"),
      ...ngDevMode ? [{ debugName: "_can_edit_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_create_templates = computed(
      () => this.can_create() && this._can_edit_templates(),
      ...ngDevMode ? [{ debugName: "can_create_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update_templates = computed(
      () => this.can_update() && this._can_edit_templates(),
      ...ngDevMode ? [{ debugName: "can_update_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_delete_templates = computed(
      () => this.can_delete() && this._can_edit_templates(),
      ...ngDevMode ? [{ debugName: "can_delete_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_query_group_data = computed(
      () => this.can_manage_all_groups() || !!this.api_group_id_debounced.value(),
      ...ngDevMode ? [{ debugName: "can_query_group_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.data_change = this._change.asReadonly();
    effect(() => {
      if (!this.signage_groups_loaded() || this.signage_groups_failed()) {
        return;
      }
      const groups = this.signage_groups();
      const selected_group_id = this.selected_group_id();
      if (!groups.length) {
        this.selected_group_id.set("");
        return;
      }
      if (groups.some((item) => item.group.id === selected_group_id)) {
        return;
      }
      this.selected_group_id.set(this.can_manage_all_groups() ? "" : groups[0].group.id);
    });
    effect(() => persistSelectedGroupId(this.selected_group_id()));
  }
  /** Whether the organisation has loaded and the lists can be queried */
  canQueryLists() {
    return this._org.initialised() && this.can_query_group_data();
  }
  /** Mark signage data as saved, so the lists reload */
  changed() {
    this._change.set(Date.now());
  }
  canManageSignageGroup(group_id = "") {
    if (this.can_manage_all_groups())
      return true;
    const group = this.signage_groups().find((item) => item.group.id === group_id);
    return !!(group?.permissions & SignageGroupPermission.Manage);
  }
  /** Effective signage flags of a group, including inherited values */
  async loadGroupFeatures(group_id) {
    if (!group_id)
      return {};
    const raw = await Ou(group_id, { subsystem: "signage" });
    return signageGroupFeatures(raw);
  }
  /**
   * Switch the signage group the app works in. An empty ID selects "All
   * groups". Clears the selected items, and the lists reload when the
   * debounced group changes.
   */
  setSelectedGroup(group_id) {
    const allowed = group_id ? this.signage_groups().some((item) => item.group.id === group_id) : this.can_manage_all_groups();
    if (!allowed)
      return;
    this.selected_group_id.set(group_id);
    this._group_switch.update((count) => count + 1);
  }
  /** Let the user pick the signage group to work in */
  async selectGroup() {
    const group_id = await this._pickGroup({
      title: i18n("SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP"),
      groups: this.signage_groups(),
      selected_group_id: this.selected_group_id(),
      show_all_groups: this.can_manage_all_groups()
    });
    if (group_id === void 0)
      return;
    this.setSelectedGroup(group_id);
  }
  _hasGroupPermission(permission) {
    if (this.is_sys_admin())
      return true;
    const permissions = this.selected_group()?.permissions || 0;
    return !!(permissions & SignageGroupPermission.Manage || permissions & permission);
  }
  /**
   * Warn and return false when the user lacks a permission.
   * @param message_key Translation key of the warning
   */
  requirePermission(has_permission, message_key) {
    if (has_permission)
      return true;
    notifyWarn(i18n(message_key));
    return false;
  }
  /** Add the selected group to query params */
  groupQueryParams(query_params, group_id = this.api_group_id()) {
    return __spreadValues(__spreadValues({}, query_params), group_id ? { group_id } : {});
  }
  /** Add the selected group to query params, or the organisation zone for
   * "All groups" */
  orgZoneQueryParams(query_params, group_id = this.api_group_id()) {
    const org_zone_id = this._org.organisation?.id;
    let zone_params = {};
    if (group_id) {
      zone_params = { group_id };
    } else if (org_zone_id) {
      zone_params = { zone_id: org_zone_id };
    }
    return __spreadValues(__spreadValues({}, query_params), zone_params);
  }
  /**
   * Let the user pick another signage group and share items with it.
   * Shows an error when the share fails.
   * @returns Whether the items were shared
   */
  async shareItems(item_type, item_ids) {
    if (!this.requirePermission(this.can_share(), "SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS"))
      return false;
    const selected_group_id = this.selected_group()?.group.id || "";
    const target_groups = this.signage_groups().filter((item) => item.group.id !== selected_group_id);
    if (!target_groups.length) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE"));
      return false;
    }
    const share_config = SIGNAGE_SHARE_CONFIG[item_type];
    const group_id = await this._pickGroup({
      title: i18n(share_config.title),
      groups: target_groups
    });
    if (!group_id)
      return false;
    const options = { items: item_ids.join(","), to: group_id };
    try {
      await share_config.request(options);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_SHARE"));
      return false;
    }
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
  async groupsHolding(item_id, query) {
    const groups = this.signage_groups().filter(({ group }) => group.id);
    const selected_group = groups.find(({ group }) => group.id === this.api_group_id());
    if (selected_group)
      return [selected_group];
    const matches = await Promise.all(groups.map(({ group }) => query(group.id).then((result) => (result.data || []).some(({ id }) => id === item_id), () => false)));
    return groups.filter((_, index) => matches[index]);
  }
  /** Let the user pick a group from the group select modal */
  async _pickGroup(data) {
    const { GroupSelectModalComponent } = await import("./group-select-modal.component-IKSGGUDK.js");
    const ref = this._dialog.open(GroupSelectModalComponent, {
      data,
      panelClass: "mobile-fullscreen"
    });
    return dialogClosed(ref);
  }
  static {
    this.\u0275fac = function SignageContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageContextService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageContextService, factory: _SignageContextService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SIGNAGE_FEATURES,
  SIGNAGE_FEATURE_IDS,
  ORGANISATION_FEATURES,
  signageGroupFeatures,
  narrowGroupFeatures,
  noGroupFeaturesOn404,
  PAGE_SIZE,
  searchParam,
  queryAll,
  mergeItems,
  dialogClosed,
  signage_shared_groups_change,
  markSignageSharedGroupsChanged,
  listSignageSharedGroups,
  unshareSignageItem,
  SignageGroupPermission,
  sortGroups,
  lastLoaded,
  groupHierarchy,
  SignageContextService
};
//# debugId=24cce784-0f8e-57ba-bd28-32111b2c855a
//# sourceMappingURL=chunk-NVC2MTBW.js.map
