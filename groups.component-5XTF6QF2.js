import {
  GroupBreadcrumbsComponent
} from "./chunk-ESTPCPL6.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-JMPEKOI2.js";
import {
  CdkTree,
  CdkTreeModule,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodePadding,
  ZoneSelectTreeComponent
} from "./chunk-3ZUVV4MY.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-YA5DADHX.js";
import "./chunk-HXSW35PI.js";
import "./chunk-PVSZGYWQ.js";
import {
  SettingsToggleComponent
} from "./chunk-2QR6WMMY.js";
import {
  FullscreenModalShellComponent
} from "./chunk-QX7UMRWQ.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-Y6Y42IYE.js";
import "./chunk-WZLYCRCE.js";
import {
  SignagePluginService
} from "./chunk-MOQN4WV5.js";
import "./chunk-SLLMOXD7.js";
import "./chunk-IAA4H3MD.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MSPDKJIW.js";
import "./chunk-JKGJXOUJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVBXI2KA.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-TP37P6LZ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GF5I6UHA.js";
import "./chunk-W7BPHDUZ.js";
import "./chunk-OAWDSWZC.js";
import "./chunk-BAFAQKY6.js";
import "./chunk-AOUA7LSD.js";
import "./chunk-STYUKBG2.js";
import {
  openConfirmModal
} from "./chunk-EW627VC3.js";
import {
  ORGANISATION_FEATURES,
  PAGE_SIZE,
  SIGNAGE_FEATURES,
  SIGNAGE_FEATURE_IDS,
  SignageContextService,
  SignageGroupPermission,
  dialogClosed,
  groupHierarchy,
  lastLoaded,
  narrowGroupFeatures,
  noGroupFeaturesOn404,
  queryAll,
  searchParam,
  signageGroupFeatures,
  sortGroups
} from "./chunk-NVC2MTBW.js";
import {
  PagedSearch,
  byDisplayName,
  decodeEntities,
  decodeEntityNames
} from "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-ARJ6GFJX.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-2PPCVPFM.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-KABK725Z.js";
import "./chunk-4BHMYMLA.js";
import {
  MatOption
} from "./chunk-HGUL5NVP.js";
import "./chunk-E72MB55H.js";
import {
  HotkeysService
} from "./chunk-DMUGOB3K.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import {
  Du,
  Ju,
  Ku,
  Mu,
  Nu,
  Vu,
  Wu,
  Xu,
  Zu,
  _,
  dh,
  ec,
  eh,
  i18n,
  notifyError,
  notifySuccess,
  notifyWarn,
  tc,
  wu
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  DestroyRef,
  ElementRef,
  Injectable,
  Input,
  NgTemplateOutlet,
  computed,
  debounced,
  effect,
  inject,
  input,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6HUGPUMR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/signage-group-access.ts
function signageGroupAccess(group) {
  const ad_group_mappings = {};
  for (const [id, [name, permissions]] of Object.entries(group.ad_group_mappings)) {
    ad_group_mappings[id] = [decodeEntities(name), permissions];
  }
  return {
    default_permissions: group.default_permissions,
    ad_group_mappings
  };
}
function adGroupKey(id) {
  return id.trim().toLowerCase();
}

// apps/signage-manager/src/app/groups/signage-group-admin.service.ts
function managedGroupList(group_id, items = [], failed = false) {
  return { group_id, items, failed };
}
var SignageGroupAdminService = class _SignageGroupAdminService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this.managed_group_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "managed_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._managed_group_id_debounced = debounced(this.managed_group_id, 300);
    this.managed_group_tab = signal(
      "users",
      ...ngDevMode ? [{ debugName: "managed_group_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_group_tree_expanded = signal(
      {},
      ...ngDevMode ? [{ debugName: "signage_group_tree_expanded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._manageable_signage_groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_manageable_signage_groups" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        user_email: this._context.active_user()?.email || "",
        groups_change: this._context.groups_change(),
        can_manage_all: this._context.can_manage_all_groups()
      }),
      // A failed load fails the resource, so the last loaded list stays
      loader: async ({ params }) => {
        if (!params.user_email)
          return [];
        const groups = params.can_manage_all ? await this._context.allSignageGroups(params.groups_change) : await this._currentManageableGroups(params.groups_change);
        return sortGroups(groups);
      }
    }));
    this._loaded_manageable_signage_groups = lastLoaded(this._manageable_signage_groups, () => this._context.active_user()?.email);
    this.manageable_signage_groups = computed(
      () => this._loaded_manageable_signage_groups() || [],
      ...ngDevMode ? [{ debugName: "manageable_signage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manageable_signage_groups_failed = computed(
      () => !!this._manageable_signage_groups.error(),
      ...ngDevMode ? [{ debugName: "manageable_signage_groups_failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group = computed(
      () => {
        const group_id = this.managed_group_id();
        return this.manageable_signage_groups().find((group) => group.id === group_id);
      },
      ...ngDevMode ? [{ debugName: "managed_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._managed_group_users = this._managedGroupResource(async (group_id) => {
      const users = await queryAll(Wu({ group_id, limit: PAGE_SIZE }));
      return users.sort((a, b) => (a.user?.name || a.user_id).localeCompare(b.user?.name || b.user_id));
    });
    this.managed_group_users = computed(
      () => this._managedGroupRows(this._managed_group_users()),
      ...ngDevMode ? [{ debugName: "managed_group_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group_users_loading = computed(
      () => this._managedGroupLoading(this._managed_group_users()),
      ...ngDevMode ? [{ debugName: "managed_group_users_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group_users_failed = computed(
      () => this._managedGroupFailed(this._managed_group_users()),
      ...ngDevMode ? [{ debugName: "managed_group_users_failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._managed_group_zones = this._managedGroupResource(async (group_id) => {
      const zones = await queryAll(Vu({ group_id, limit: PAGE_SIZE }));
      return zones.sort((a, b) => (a.zone?.name || a.zone_id).localeCompare(b.zone?.name || b.zone_id));
    });
    this.managed_group_zones = computed(
      () => this._managedGroupRows(this._managed_group_zones()),
      ...ngDevMode ? [{ debugName: "managed_group_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group_zones_loading = computed(
      () => this._managedGroupLoading(this._managed_group_zones()),
      ...ngDevMode ? [{ debugName: "managed_group_zones_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.managed_group_zones_failed = computed(
      () => this._managedGroupFailed(this._managed_group_zones()),
      ...ngDevMode ? [{ debugName: "managed_group_zones_failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const groups = this.manageable_signage_groups();
      const group_id = this.managed_group_id();
      const email = this._context.active_user()?.email;
      if (group_id) {
        if (!groups.some((group) => group.id === group_id)) {
          this.managed_group_id.set("");
        } else {
          this._first_group_opened_for = email;
        }
      } else if (groups.length && this._first_group_opened_for !== email) {
        this._first_group_opened_for = email;
        this.managed_group_id.set(groups[0].id);
      }
    });
  }
  async _currentManageableGroups(groups_change) {
    const groups = await this._context.currentSignageGroups(groups_change);
    return groups.filter((item) => !!(item.permissions & SignageGroupPermission.Manage)).map((item) => decodeEntityNames(item.group));
  }
  // Each list keeps the group it was read for. Rows of the previous group
  // then stay hidden while the debounced group switch catches up, so they
  // can't be changed by mistake.
  _managedGroupResource(load) {
    const list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        group_id: this._managed_group_id_debounced.value(),
        groups_change: this._context.groups_change()
      }),
      loader: async ({ params: { group_id } }) => {
        if (!group_id)
          return managedGroupList("");
        return load(group_id).then((items) => managedGroupList(group_id, items), () => {
          const shown = untracked(rows);
          return managedGroupList(group_id, shown?.group_id === group_id ? shown.items : [], true);
        });
      }
    }));
    const rows = lastLoaded(list);
    return rows;
  }
  _managedGroupRows(list) {
    return list?.group_id === this.managed_group_id() ? list.items : [];
  }
  _managedGroupLoading(list) {
    return list?.group_id !== this.managed_group_id();
  }
  _managedGroupFailed(list) {
    return list?.group_id === this.managed_group_id() && list.failed;
  }
  /** Zones a managed group can be given access to, not just signage ones */
  queryGroupZones(search = "") {
    const group = this.managed_group();
    const query_params = __spreadValues(__spreadValues({
      limit: PAGE_SIZE
    }, group?.authority_id ? { authority_id: group.authority_id } : {}), searchParam(search));
    return dh(query_params);
  }
  /**
   * Whether the user can change a group's feature flags. Only system admins
   * and managers of an ancestor group can, so members of a group cannot
   * lift the limits set on it.
   */
  canEditGroupFeatures(group) {
    if (!group?.id)
      return false;
    if (this._context.is_sys_admin())
      return true;
    const groups = this._context.signage_groups().map((item) => item.group);
    const parent = groups.find((item) => item.id === group.parent_id);
    const ancestor_ids = new Set(groupHierarchy(parent, groups).map((item) => item.id));
    return this._context.signage_groups().some((item) => ancestor_ids.has(item.group.id) && !!(item.permissions & SignageGroupPermission.Manage));
  }
  /** Read a group with its current feature flags */
  async loadGroup(group_id) {
    return decodeEntityNames(await Mu(group_id));
  }
  /** Replace the signage flags a group sets itself, limited to what its
   * parent allows. Other subsystems keep their flags. */
  async saveGroupFeatures(group, signage) {
    if (!this.canEditGroupFeatures(group)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_EDIT_GROUP_FEATURES"));
      return null;
    }
    return this._saveGroupChange(this._context.loadGroupFeatures(group.parent_id).catch(noGroupFeaturesOn404).then((parent) => Nu(group.id, {
      features: __spreadProps(__spreadValues({}, group.features || {}), {
        signage: __spreadValues({}, narrowGroupFeatures(signage, parent))
      })
    })), "SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP", "SIGNAGE_MANAGER.SVC_GROUP_FEATURES_SAVED");
  }
  /** Default permissions and AD group mappings of a group */
  async loadGroupAccess(group_id) {
    return signageGroupAccess(await Mu(group_id));
  }
  /** Replace the default permissions and AD group mappings of a group.
   * System admins and managers of the group can change them. */
  async saveGroupAccess(group, access) {
    if (!this._context.canManageSignageGroup(group.id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP"));
      return null;
    }
    const result = await this._saveGroupChange(Nu(group.id, access), "SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP", "SIGNAGE_MANAGER.SVC_GROUP_ACCESS_SAVED");
    return result && signageGroupAccess(result);
  }
  /** Search the organisation directory for AD groups. Fails when the
   * domain has no staff API tenant or the directory cannot list groups. */
  async searchDirectoryGroups(search = "") {
    const q = search.trim();
    const url = `/api/staff/v1/groups${q ? `?q=${encodeURIComponent(q)}` : ""}`;
    const list = await _(url);
    if (!Array.isArray(list))
      return [];
    return list.filter((item) => typeof item?.id === "string");
  }
  /**
   * Whether the user can move a group under a new parent. The group cannot
   * go under itself or one of its children. System admins can move any
   * group, also to the top level. Other users must manage the old and the
   * new parent, so a manager cannot move a group out of the limits that
   * its parent groups set.
   */
  canChangeGroupParent(group, parent_id) {
    if (!group.id || parent_id === (group.parent_id || ""))
      return true;
    const groups = this._context.signage_groups().map((item) => item.group);
    const parent = groups.find((item) => item.id === parent_id);
    if (groupHierarchy(parent, groups).some(({ id }) => id === group.id)) {
      return false;
    }
    if (this._context.is_sys_admin())
      return true;
    return !!parent_id && !!group.parent_id && this._context.canManageSignageGroup(group.parent_id) && this._context.canManageSignageGroup(parent_id);
  }
  async saveSignageGroup(group, data) {
    const managed_group_id = group.id || data.parent_id || "";
    if (!this._context.canManageSignageGroup(managed_group_id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP"));
      return null;
    }
    if (data.parent_id !== void 0 && !this.canChangeGroupParent(group, data.parent_id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MOVE_GROUP"));
      return null;
    }
    const payload = __spreadProps(__spreadValues({}, data), {
      subsystems: Array.from(/* @__PURE__ */ new Set([...group.subsystems || [], "signage"]))
    });
    return this._saveGroupChange(group.id ? Nu(group.id, payload) : wu(payload), "SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP", "SIGNAGE_MANAGER.SVC_GROUP_SAVED");
  }
  async removeSignageGroup(group) {
    if (!group?.id)
      return;
    if (!this._context.canManageSignageGroup(group.id)) {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP"));
      return;
    }
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_GROUP_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED", {
        name: group.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    const removed = await this._saveGroupChange(Du(group.id).then(() => true).finally(() => result.close()), "SIGNAGE_MANAGER.SVC_ERR_REMOVE_GROUP", "SIGNAGE_MANAGER.SVC_GROUP_REMOVED");
    if (removed && this._context.selected_group_id() === group.id) {
      this._context.selected_group_id.set("");
    }
  }
  async searchGroupUsers(search = "") {
    const group = this.managed_group();
    const { data } = await eh(__spreadValues({
      q: search,
      limit: 20
    }, group?.authority_id ? { authority_id: group.authority_id } : {}));
    return data;
  }
  async addManagedGroupUser(user) {
    const group_id = this.managed_group_id();
    if (!user?.id || !this._context.canManageSignageGroup(group_id))
      return;
    await this._saveGroupChange(Ku({ group_id, user_id: user.id }), "SIGNAGE_MANAGER.SVC_ERR_ADD_USER", "SIGNAGE_MANAGER.SVC_USER_ADDED");
  }
  /** Change the permissions of a group user. Asks first when the user
   * takes the Manage permission from themselves. */
  async updateManagedGroupUser(item, permissions) {
    if (!this._context.canManageSignageGroup(item.group_id))
      return;
    const manage = SignageGroupPermission.Manage;
    if (this._isCurrentUser(item.user_id) && item.permissions & manage && !(permissions & manage)) {
      const result = await openConfirmModal({
        title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_OWN_MANAGE_TITLE"),
        content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_OWN_MANAGE"),
        icon: { content: "warning" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.close();
    }
    await this._saveGroupChange(Zu(item.user_id, item.group_id, {
      permissions
    }), "SIGNAGE_MANAGER.SVC_ERR_UPDATE_USER", "SIGNAGE_MANAGER.SVC_USER_UPDATED");
  }
  /** Remove a user from a group. The confirmation warns when users
   * remove themselves, as they can lose access to the group. */
  async removeManagedGroupUser(item) {
    if (!this._context.canManageSignageGroup(item.group_id))
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_USER_TITLE"),
      content: this._isCurrentUser(item.user_id) ? i18n("SIGNAGE_MANAGER.SVC_REMOVE_SELF_FROM_GROUP") : i18n("SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP", {
        name: item.user?.name || item.user_id
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await this._saveGroupChange(Ju(item.user_id, item.group_id).finally(() => result.close()), "SIGNAGE_MANAGER.SVC_ERR_REMOVE_USER", "SIGNAGE_MANAGER.SVC_USER_REMOVED");
  }
  _isCurrentUser(user_id) {
    return !!user_id && user_id === this._context.current_user()?.id;
  }
  async addManagedGroupZone(zone) {
    const group_id = this.managed_group_id();
    if (!zone?.id || !this._context.canManageSignageGroup(group_id))
      return;
    await this._saveGroupChange(Xu({
      group_id,
      zone_id: zone.id,
      permissions: 0
    }), "SIGNAGE_MANAGER.SVC_ERR_ADD_ZONE", "SIGNAGE_MANAGER.SVC_ZONE_ADDED");
  }
  async updateManagedGroupZone(item, permissions, deny) {
    if (!this._context.canManageSignageGroup(item.group_id))
      return;
    await this._saveGroupChange(ec(item.group_id, item.zone_id, {
      permissions,
      deny
    }), "SIGNAGE_MANAGER.SVC_ERR_UPDATE_ZONE", "SIGNAGE_MANAGER.SVC_ZONE_UPDATED");
  }
  async removeManagedGroupZone(item) {
    if (!this._context.canManageSignageGroup(item.group_id))
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_ZONE_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP", {
        name: item.zone?.name || item.zone_id
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await this._saveGroupChange(tc(item.group_id, item.zone_id).finally(() => result.close()), "SIGNAGE_MANAGER.SVC_ERR_REMOVE_ZONE", "SIGNAGE_MANAGER.SVC_ZONE_REMOVED");
  }
  /**
   * Wait for a group save, then reload the group lists and confirm it.
   * Shows an error and returns null when the save fails, so callers bound
   * to clicks do not leave a rejected promise.
   */
  async _saveGroupChange(request, error_key, success_key) {
    let result;
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
  static {
    this.\u0275fac = function SignageGroupAdminService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupAdminService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageGroupAdminService, factory: _SignageGroupAdminService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupAdminService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/signage-manager/src/app/groups/signage-group-permissions-modal.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function SignageGroupPermissionsModalComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function SignageGroupPermissionsModalComponent_For_4_Template_settings_toggle_ngModelChange_0_listener($event) {
      const permission_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPermission(permission_r2.value, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const permission_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, permission_r2.label))("ngModel", ctx_r2.hasPermission(permission_r2.value));
    \u0275\u0275control();
  }
}
function SignageGroupPermissionsModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "settings-toggle", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SignageGroupPermissionsModalComponent_Conditional_5_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.deny, $event) || (ctx_r2.deny = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.PERM_DENY_SELECTED"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.deny);
    \u0275\u0275control();
  }
}
var GROUP_PERMISSION_FLAGS = [
  {
    key: "read",
    label: "SIGNAGE_MANAGER.PERM_READ",
    value: SignageGroupPermission.Read
  },
  {
    key: "create",
    label: "SIGNAGE_MANAGER.PERM_CREATE",
    value: SignageGroupPermission.Create
  },
  {
    key: "update",
    label: "SIGNAGE_MANAGER.PERM_UPDATE",
    value: SignageGroupPermission.Update
  },
  {
    key: "delete",
    label: "COMMON.DELETE",
    value: SignageGroupPermission.Delete
  },
  {
    key: "operate",
    label: "SIGNAGE_MANAGER.PERM_OPERATE",
    value: SignageGroupPermission.Operate
  },
  {
    key: "approve",
    label: "COMMON.APPROVE",
    value: SignageGroupPermission.Approve
  },
  {
    key: "manage",
    label: "SIGNAGE_MANAGER.PERM_MANAGE",
    value: SignageGroupPermission.Manage
  },
  {
    key: "share",
    label: "SIGNAGE_MANAGER.PERM_SHARE",
    value: SignageGroupPermission.Share
  }
];
var SignageGroupPermissionsModalComponent = class _SignageGroupPermissionsModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.permissions = GROUP_PERMISSION_FLAGS;
    this.value = signal(
      +this.data.permissions || 0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deny = signal(
      !!this.data.deny,
      ...ngDevMode ? [{ debugName: "deny" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  hasPermission(permission) {
    return (this.value() & permission) === permission;
  }
  setPermission(permission, enabled) {
    const value = this.value();
    this.value.set(enabled ? value | permission : value & ~permission);
  }
  save() {
    this._dialog_ref.close({
      permissions: this.value(),
      deny: this.deny()
    });
  }
  static {
    this.\u0275fac = function SignageGroupPermissionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupPermissionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupPermissionsModalComponent, selectors: [["signage-group-permissions-modal"]], decls: 6, vars: 4, consts: [[3, "confirm", "heading"], [1, "flex", "flex-col", "gap-3"], [3, "label", "ngModel"], [1, "border-base-300", "mt-2", "border-t", "pt-3"], [3, "ngModelChange", "label", "ngModel"]], template: function SignageGroupPermissionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275listener("confirm", function SignageGroupPermissionsModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275repeaterCreate(3, SignageGroupPermissionsModalComponent_For_4_Template, 2, 4, "settings-toggle", 2, _forTrack0);
        \u0275\u0275conditionalCreate(5, SignageGroupPermissionsModalComponent_Conditional_5_Template, 3, 4, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", ctx.data.title || \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.PERMISSIONS"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.permissions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.show_deny ? 5 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      SettingsToggleComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupPermissionsModalComponent, [{
    type: Component,
    args: [{ selector: "signage-group-permissions-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                data.title || ('SIGNAGE_MANAGER.PERMISSIONS' | translate)
            "
            (confirm)="save()"
        >
            <div class="flex flex-col gap-3">
                @for (permission of permissions; track permission.key) {
                    <settings-toggle
                        [label]="permission.label | translate"
                        [ngModel]="hasPermission(permission.value)"
                        (ngModelChange)="
                            setPermission(permission.value, $event)
                        "
                    />
                }
                @if (data.show_deny) {
                    <div class="border-base-300 mt-2 border-t pt-3">
                        <settings-toggle
                            [label]="
                                'SIGNAGE_MANAGER.PERM_DENY_SELECTED' | translate
                            "
                            [(ngModel)]="deny"
                        />
                    </div>
                }
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      FormsModule,
      SettingsToggleComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupPermissionsModalComponent, { className: "SignageGroupPermissionsModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-permissions-modal.component.ts", lineNumber: 95 });
})();
function groupPermissionLabels(permissions) {
  return GROUP_PERMISSION_FLAGS.filter((permission) => ((+permissions || 0) & permission.value) === permission.value).map((permission) => permission.label);
}

// apps/signage-manager/src/app/groups/signage-group-permission-labels.component.ts
function SignageGroupPermissionLabelsComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function SignageGroupPermissionLabelsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275conditionalCreate(2, SignageGroupPermissionLabelsComponent_For_1_Conditional_2_Template, 1, 0);
  }
  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const \u0275$index_1_r2 = ctx.$index;
    const \u0275$count_1_r3 = ctx.$count;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, label_r1), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_1_r2 === \u0275$count_1_r3 - 1) ? 2 : -1);
  }
}
function SignageGroupPermissionLabelsComponent_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.DEFAULT_PERMISSIONS"));
  }
}
var SignageGroupPermissionLabelsComponent = class _SignageGroupPermissionLabelsComponent {
  constructor() {
    this.permissions = input(
      0,
      ...ngDevMode ? [{ debugName: "permissions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.labels = computed(
      () => groupPermissionLabels(this.permissions()),
      ...ngDevMode ? [{ debugName: "labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function SignageGroupPermissionLabelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupPermissionLabelsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupPermissionLabelsComponent, selectors: [["signage-group-permission-labels"]], inputs: { permissions: [1, "permissions"] }, decls: 3, vars: 1, consts: [[1, "italic"]], template: function SignageGroupPermissionLabelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SignageGroupPermissionLabelsComponent_For_1_Template, 3, 4, null, null, \u0275\u0275repeaterTrackByIdentity, false, SignageGroupPermissionLabelsComponent_ForEmpty_2_Template, 3, 3, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.labels());
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupPermissionLabelsComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-permission-labels",
      template: `
        @for (label of labels(); track label) {
            {{ label | translate }}
            @if (!$last) {
                ,
            }
        } @empty {
            <span class="italic">{{
                'SIGNAGE_MANAGER.DEFAULT_PERMISSIONS' | translate
            }}</span>
        }
    `,
      imports: [TranslatePipe]
    }]
  }], null, { permissions: [{ type: Input, args: [{ isSignal: true, alias: "permissions", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupPermissionLabelsComponent, { className: "SignageGroupPermissionLabelsComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-permission-labels.component.ts", lineNumber: 23 });
})();

// apps/signage-manager/src/app/groups/signage-group-user-select-modal.component.ts
var _forTrack02 = ($index, $item) => $item.id || $item.email;
function SignageGroupUserSelectModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function SignageGroupUserSelectModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.USER_SEARCH_ERROR"), " ");
  }
}
function SignageGroupUserSelectModalComponent_Conditional_15_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function SignageGroupUserSelectModalComponent_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12)(1, "icon", 13);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignageGroupUserSelectModalComponent_Conditional_15_For_1_Conditional_6_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("mat-dialog-close", user_r1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", user_r1.name || user_r1.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r1.email ? 6 : -1);
  }
}
function SignageGroupUserSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupUserSelectModalComponent_Conditional_15_For_1_Template, 7, 3, "button", 12, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.users());
  }
}
function SignageGroupUserSelectModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 17);
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "FORM.USER_EMPTY"), " ");
  }
}
var SignageGroupUserSelectModalComponent = class _SignageGroupUserSelectModalComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this._data = inject(MAT_DIALOG_DATA);
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_debounced = debounced(this.search, 300);
    this._users = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_users" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._search_debounced.value() ?? "",
      loader: ({ params }) => this._group_admin.searchGroupUsers(params)
    }));
    this.loading = computed(
      () => this._users.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.failed = computed(
      () => !!this._users.error(),
      ...ngDevMode ? [{ debugName: "failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.users = computed(
      () => {
        if (!this._users.hasValue())
          return [];
        const exclude_ids = new Set(this._data.exclude_ids || []);
        return this._users.value().filter((user) => !exclude_ids.has(user.id) && !exclude_ids.has(user.email));
      },
      ...ngDevMode ? [{ debugName: "users" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function SignageGroupUserSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupUserSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupUserSelectModalComponent, selectors: [["signage-group-user-select-modal"]], decls: 17, vars: 14, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "justify-center", "p-8"], ["role", "alert", 1, "text-error", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], ["diameter", "32"], [1, "text-4xl"], [1, "text-sm"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "text-base-content/60", "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-base-content/70", "text-8xl"], [1, "text-base-content/70"]], template: function SignageGroupUserSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3)(9, "mat-form-field", 4)(10, "input", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SignageGroupUserSelectModalComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, SignageGroupUserSelectModalComponent_Conditional_13_Template, 2, 0, "div", 6)(14, SignageGroupUserSelectModalComponent_Conditional_14_Template, 6, 3, "div", 7)(15, SignageGroupUserSelectModalComponent_Conditional_15_Template, 2, 0)(16, SignageGroupUserSelectModalComponent_Conditional_16_Template, 6, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SIGNAGE_MANAGER.GROUP_ADD_USER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 8, "SIGNAGE_MANAGER.CLOSE_ADD_USER"));
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 10, "SIGNAGE_MANAGER.SEARCH_USERS"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 12, "SIGNAGE_MANAGER.SEARCH_USERS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 13 : ctx.failed() ? 14 : ctx.users().length > 0 ? 15 : 16);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupUserSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-user-select-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.GROUP_ADD_USER' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="'SIGNAGE_MANAGER.CLOSE_ADD_USER' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [(ngModel)]="search"
                    [placeholder]="'SIGNAGE_MANAGER.SEARCH_USERS' | translate"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_USERS' | translate
                    "
                />
            </mat-form-field>
            @if (loading()) {
                <div class="flex justify-center p-8">
                    <mat-spinner diameter="32" />
                </div>
            } @else if (failed()) {
                <div
                    class="text-error flex flex-col items-center justify-center space-y-2 p-8"
                    role="alert"
                >
                    <icon class="text-4xl">error</icon>
                    <p class="text-sm">
                        {{ 'SIGNAGE_MANAGER.USER_SEARCH_ERROR' | translate }}
                    </p>
                </div>
            } @else if (users().length > 0) {
                @for (user of users(); track user.id || user.email) {
                    <button
                        type="button"
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="user"
                    >
                        <icon class="text-base-content/60 shrink-0 text-2xl"
                            >person</icon
                        >
                        <div class="min-w-0 flex-1">
                            <div class="truncate">
                                {{ user.name || user.email }}
                            </div>
                            @if (user.email) {
                                <div
                                    class="text-base-content/70 truncate text-xs"
                                >
                                    {{ user.email }}
                                </div>
                            }
                        </div>
                    </button>
                }
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">group_off</icon>
                    <div class="text-base-content/70">
                        {{ 'FORM.USER_EMPTY' | translate }}
                    </div>
                </div>
            }
        </main>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupUserSelectModalComponent, { className: "SignageGroupUserSelectModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-user-select-modal.component.ts", lineNumber: 115 });
})();

// apps/signage-manager/src/app/groups/signage-group-users.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack03 = ($index, $item) => $item.user_id;
function SignageGroupUsersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6)(1, "icon", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.USERS_LOAD_ERROR"), " ");
  }
}
function SignageGroupUsersComponent_Conditional_14_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.user?.email, " ");
  }
}
function SignageGroupUsersComponent_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 11);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignageGroupUsersComponent_Conditional_14_For_1_Conditional_6_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275element(8, "signage-group-permission-labels", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function SignageGroupUsersComponent_Conditional_14_For_1_Template_button_click_9_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUserPermissions(row_r2));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function SignageGroupUsersComponent_Conditional_14_For_1_Template_button_click_14_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeUser(row_r2));
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r2.user?.name || row_r2.user_id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.user?.email ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("permissions", row_r2.permissions);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "SIGNAGE_MANAGER.EDIT_USER_PERMS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 9, "SIGNAGE_MANAGER.EDIT_USER_PERMS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 11, "SIGNAGE_MANAGER.REMOVE_USER"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 13, "SIGNAGE_MANAGER.REMOVE_USER"));
  }
}
function SignageGroupUsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupUsersComponent_Conditional_14_For_1_Template, 19, 15, "div", 10, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.users());
  }
}
function SignageGroupUsersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function SignageGroupUsersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 20);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.USERS_LOAD_ERROR"), " ");
  }
}
function SignageGroupUsersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 20);
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_USERS_ASSIGNED"), " ");
  }
}
var SignageGroupUsersComponent = class _SignageGroupUsersComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this._dialog = inject(MatDialog);
    this.users = this._group_admin.managed_group_users;
    this.loading = this._group_admin.managed_group_users_loading;
    this.failed = this._group_admin.managed_group_users_failed;
  }
  async addUser() {
    const user = await dialogClosed(this._dialog.open(SignageGroupUserSelectModalComponent, {
      data: {
        exclude_ids: this.users().map((item) => item.user_id)
      },
      panelClass: "mobile-fullscreen"
    }));
    if (user)
      await this._group_admin.addManagedGroupUser(user);
  }
  async editUserPermissions(row) {
    const result = await dialogClosed(this._dialog.open(SignageGroupPermissionsModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.USER_PERMISSIONS"),
        permissions: row.permissions
      }
    }));
    if (result) {
      await this._group_admin.updateManagedGroupUser(row, result.permissions);
    }
  }
  removeUser(row) {
    this._group_admin.removeManagedGroupUser(row);
  }
  static {
    this.\u0275fac = function SignageGroupUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupUsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupUsersComponent, selectors: [["signage-group-users"]], decls: 18, vars: 16, consts: [[1, "bg-base-100", "border-base-300", "flex", "h-full", "min-h-0", "flex-col", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], [1, "gap-2", "p-2"], ["role", "alert", 1, "text-error", "mb-2", "flex", "items-center", "gap-2", "px-2", "text-sm"], [1, "flex", "justify-center", "p-6"], [1, "text-error", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-base-content/70", "mt-1", "truncate", "text-xs"], [3, "permissions"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["diameter", "32"], [1, "text-4xl"], [1, "text-sm"]], template: function SignageGroupUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2)(3, "icon", 3);
        \u0275\u0275text(4, "group");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function SignageGroupUsersComponent_Template_button_click_7_listener() {
          return ctx.addUser();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275conditionalCreate(13, SignageGroupUsersComponent_Conditional_13_Template, 5, 3, "p", 6);
        \u0275\u0275conditionalCreate(14, SignageGroupUsersComponent_Conditional_14_Template, 2, 0)(15, SignageGroupUsersComponent_Conditional_15_Template, 2, 0, "div", 7)(16, SignageGroupUsersComponent_Conditional_16_Template, 6, 3, "div", 8)(17, SignageGroupUsersComponent_Conditional_17_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 6, "SIGNAGE_MANAGER.USERS_COUNT", \u0275\u0275pureFunction1(14, _c0, ctx.users().length), ctx.users().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 10, "SIGNAGE_MANAGER.ADD_USER_TOOLTIP"))("disabled", ctx.loading() || ctx.failed());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 12, "SIGNAGE_MANAGER.ADD_USER_ARIA"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.failed() && ctx.users().length ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.users().length ? 14 : ctx.loading() ? 15 : ctx.failed() ? 16 : 17);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      SignageGroupPermissionLabelsComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupUsersComponent, [{
    type: Component,
    args: [{ selector: "signage-group-users", template: `
        <div
            class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-auto rounded-lg border"
        >
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h5
                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                >
                    <icon class="text-lg">group</icon>
                    {{
                        'SIGNAGE_MANAGER.USERS_COUNT'
                            | translate
                                : { count: users().length }
                                : users().length
                    }}
                </h5>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.ADD_USER_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_USER_ARIA' | translate
                    "
                    [disabled]="loading() || failed()"
                    (click)="addUser()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
                @if (failed() && users().length) {
                    <p
                        class="text-error mb-2 flex items-center gap-2 px-2 text-sm"
                        role="alert"
                    >
                        <icon class="text-lg">error</icon>
                        {{ 'SIGNAGE_MANAGER.USERS_LOAD_ERROR' | translate }}
                    </p>
                }
                @if (users().length) {
                    @for (row of users(); track row.user_id) {
                        <div
                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3"
                        >
                            <icon class="shrink-0 text-xl opacity-60"
                                >person</icon
                            >
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ row.user?.name || row.user_id }}
                                </div>
                                @if (row.user?.email) {
                                    <div
                                        class="text-base-content/70 truncate text-xs"
                                    >
                                        {{ row.user?.email }}
                                    </div>
                                }
                                <div
                                    class="text-base-content/70 mt-1 truncate text-xs"
                                >
                                    <signage-group-permission-labels
                                        [permissions]="row.permissions"
                                    />
                                </div>
                            </div>
                            <button
                                icon
                                default
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.EDIT_USER_PERMS'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.EDIT_USER_PERMS'
                                        | translate
                                "
                                (click)="editUserPermissions(row)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                default
                                error
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_USER' | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.REMOVE_USER' | translate
                                "
                                (click)="removeUser(row)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
                } @else if (loading()) {
                    <div class="flex justify-center p-6">
                        <mat-spinner diameter="32" />
                    </div>
                } @else if (failed()) {
                    <div
                        class="text-error flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">error</icon>
                        <p class="text-sm">
                            {{ 'SIGNAGE_MANAGER.USERS_LOAD_ERROR' | translate }}
                        </p>
                    </div>
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">group_off</icon>
                        <p class="text-sm">
                            {{
                                'SIGNAGE_MANAGER.NO_USERS_ASSIGNED' | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      SignageGroupPermissionLabelsComponent
    ], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/signage-group-users.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-users.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupUsersComponent, { className: "SignageGroupUsersComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-users.component.ts", lineNumber: 169 });
})();

// apps/signage-manager/src/app/groups/signage-group-zone-select-modal.component.ts
var SignageGroupZoneSelectModalComponent = class _SignageGroupZoneSelectModalComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.list = new PagedSearch((search) => this._group_admin.queryGroupZones(search), byDisplayName, 300);
    this.exclude_ids = this._data.exclude_ids || [];
  }
  selectZone(zone) {
    this._dialog_ref.close(zone);
  }
  static {
    this.\u0275fac = function SignageGroupZoneSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupZoneSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupZoneSelectModalComponent, selectors: [["signage-group-zone-select-modal"]], decls: 10, vars: 8, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "overflow-auto", "px-4", "pt-2", "pb-4", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], [3, "zoneSelected", "list", "exclude_ids"]], template: function SignageGroupZoneSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3)(9, "zone-select-tree", 4);
        \u0275\u0275listener("zoneSelected", function SignageGroupZoneSelectModalComponent_Template_zone_select_tree_zoneSelected_9_listener($event) {
          return ctx.selectZone($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.ADD_ZONE_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.CLOSE_ADD_ZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("list", ctx.list)("exclude_ids", ctx.exclude_ids);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      ZoneSelectTreeComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupZoneSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-zone-select-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.ADD_ZONE_TITLE' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="'SIGNAGE_MANAGER.CLOSE_ADD_ZONE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg overflow-auto px-4 pt-2 pb-4 max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <zone-select-tree
                [list]="list"
                [exclude_ids]="exclude_ids"
                (zoneSelected)="selectZone($event)"
            />
        </main>
    `,
      imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        TranslatePipe,
        ZoneSelectTreeComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupZoneSelectModalComponent, { className: "SignageGroupZoneSelectModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-zone-select-modal.component.ts", lineNumber: 51 });
})();

// apps/signage-manager/src/app/groups/signage-group-zones.component.ts
var _c02 = (a0) => ({ count: a0 });
var _forTrack04 = ($index, $item) => $item.zone_id;
function SignageGroupZonesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6)(1, "icon", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.ZONES_LOAD_ERROR"), " ");
  }
}
function SignageGroupZonesComponent_Conditional_14_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.DENIED"));
  }
}
function SignageGroupZonesComponent_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 11);
    \u0275\u0275text(2, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275element(7, "signage-group-permission-labels", 15);
    \u0275\u0275conditionalCreate(8, SignageGroupZonesComponent_Conditional_14_For_1_Conditional_8_Template, 3, 3, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function SignageGroupZonesComponent_Conditional_14_For_1_Template_button_click_9_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editZonePermissions(row_r2));
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function SignageGroupZonesComponent_Conditional_14_For_1_Template_button_click_14_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeZone(row_r2));
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r2.zone?.display_name || row_r2.zone?.name || row_r2.zone_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("permissions", row_r2.permissions);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.deny ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "SIGNAGE_MANAGER.EDIT_ZONE_PERMS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 9, "SIGNAGE_MANAGER.EDIT_ZONE_PERMS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 11, "SIGNAGE_MANAGER.REMOVE_ZONE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 13, "SIGNAGE_MANAGER.REMOVE_ZONE"));
  }
}
function SignageGroupZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupZonesComponent_Conditional_14_For_1_Template, 19, 15, "div", 10, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.zones());
  }
}
function SignageGroupZonesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 19);
    \u0275\u0275elementEnd();
  }
}
function SignageGroupZonesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 20);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.ZONES_LOAD_ERROR"), " ");
  }
}
function SignageGroupZonesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 20);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_ZONES_ASSIGNED"), " ");
  }
}
var SignageGroupZonesComponent = class _SignageGroupZonesComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this._dialog = inject(MatDialog);
    this.zones = this._group_admin.managed_group_zones;
    this.loading = this._group_admin.managed_group_zones_loading;
    this.failed = this._group_admin.managed_group_zones_failed;
  }
  async addZone() {
    const zone = await dialogClosed(this._dialog.open(SignageGroupZoneSelectModalComponent, {
      data: {
        exclude_ids: this.zones().map((item) => item.zone_id)
      },
      panelClass: "mobile-fullscreen"
    }));
    if (zone)
      await this._group_admin.addManagedGroupZone(zone);
  }
  async editZonePermissions(row) {
    const result = await dialogClosed(this._dialog.open(SignageGroupPermissionsModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.ZONE_PERMISSIONS"),
        permissions: row.permissions,
        deny: row.deny,
        show_deny: true
      }
    }));
    if (result) {
      await this._group_admin.updateManagedGroupZone(row, result.permissions, result.deny);
    }
  }
  removeZone(row) {
    this._group_admin.removeManagedGroupZone(row);
  }
  static {
    this.\u0275fac = function SignageGroupZonesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupZonesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupZonesComponent, selectors: [["signage-group-zones"]], decls: 18, vars: 16, consts: [[1, "bg-base-100", "border-base-300", "flex", "h-full", "min-h-0", "flex-col", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], [1, "gap-2", "p-2"], ["role", "alert", 1, "text-error", "mb-2", "flex", "items-center", "gap-2", "px-2", "text-sm"], [1, "flex", "justify-center", "p-6"], [1, "text-error", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/70", "mt-1", "truncate", "text-xs"], [3, "permissions"], [1, "text-error"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["diameter", "32"], [1, "text-4xl"], [1, "text-sm"]], template: function SignageGroupZonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2)(3, "icon", 3);
        \u0275\u0275text(4, "layers");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function SignageGroupZonesComponent_Template_button_click_7_listener() {
          return ctx.addZone();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275conditionalCreate(13, SignageGroupZonesComponent_Conditional_13_Template, 5, 3, "p", 6);
        \u0275\u0275conditionalCreate(14, SignageGroupZonesComponent_Conditional_14_Template, 2, 0)(15, SignageGroupZonesComponent_Conditional_15_Template, 2, 0, "div", 7)(16, SignageGroupZonesComponent_Conditional_16_Template, 6, 3, "div", 8)(17, SignageGroupZonesComponent_Conditional_17_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 6, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(14, _c02, ctx.zones().length), ctx.zones().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 10, "SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP"))("disabled", ctx.loading() || ctx.failed());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 12, "SIGNAGE_MANAGER.ADD_ZONE_ARIA"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.failed() && ctx.zones().length ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.zones().length ? 14 : ctx.loading() ? 15 : ctx.failed() ? 16 : 17);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      SignageGroupPermissionLabelsComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-zones.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupZonesComponent, [{
    type: Component,
    args: [{ selector: "signage-group-zones", template: `
        <div
            class="bg-base-100 border-base-300 flex h-full min-h-0 flex-col overflow-auto rounded-lg border"
        >
            <div
                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
            >
                <h5
                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                >
                    <icon class="text-lg">layers</icon>
                    {{
                        'SIGNAGE_MANAGER.ZONES_COUNT'
                            | translate
                                : { count: zones().length }
                                : zones().length
                    }}
                </h5>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_ZONE_ARIA' | translate
                    "
                    [disabled]="loading() || failed()"
                    (click)="addZone()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
                @if (failed() && zones().length) {
                    <p
                        class="text-error mb-2 flex items-center gap-2 px-2 text-sm"
                        role="alert"
                    >
                        <icon class="text-lg">error</icon>
                        {{ 'SIGNAGE_MANAGER.ZONES_LOAD_ERROR' | translate }}
                    </p>
                }
                @if (zones().length) {
                    @for (row of zones(); track row.zone_id) {
                        <div
                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3"
                        >
                            <icon class="shrink-0 text-xl opacity-60"
                                >layers</icon
                            >
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{
                                        row.zone?.display_name ||
                                            row.zone?.name ||
                                            row.zone_id
                                    }}
                                </div>
                                <div
                                    class="text-base-content/70 mt-1 truncate text-xs"
                                >
                                    <signage-group-permission-labels
                                        [permissions]="row.permissions"
                                    />
                                    @if (row.deny) {
                                        <span class="text-error">
                                            {{
                                                'SIGNAGE_MANAGER.DENIED'
                                                    | translate
                                            }}</span
                                        >
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                default
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.EDIT_ZONE_PERMS'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.EDIT_ZONE_PERMS'
                                        | translate
                                "
                                (click)="editZonePermissions(row)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                default
                                error
                                type="button"
                                matRipple
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.REMOVE_ZONE' | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.REMOVE_ZONE' | translate
                                "
                                (click)="removeZone(row)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
                } @else if (loading()) {
                    <div class="flex justify-center p-6">
                        <mat-spinner diameter="32" />
                    </div>
                } @else if (failed()) {
                    <div
                        class="text-error flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">error</icon>
                        <p class="text-sm">
                            {{ 'SIGNAGE_MANAGER.ZONES_LOAD_ERROR' | translate }}
                        </p>
                    </div>
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                    >
                        <icon class="text-4xl">layers_clear</icon>
                        <p class="text-sm">
                            {{
                                'SIGNAGE_MANAGER.NO_ZONES_ASSIGNED' | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      SignageGroupPermissionLabelsComponent
    ], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/signage-group-zones.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-zones.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupZonesComponent, { className: "SignageGroupZonesComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-zones.component.ts", lineNumber: 174 });
})();

// apps/signage-manager/src/app/groups/signage-group-content.component.ts
function SignageGroupContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "signage-group-users", 3)(3, "signage-group-zones", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tablet-hidden", ctx_r0.active_tab() === "zones")("tablet-full", ctx_r0.active_tab() === "users");
    \u0275\u0275advance();
    \u0275\u0275classProp("tablet-hidden", ctx_r0.active_tab() === "users")("tablet-full", ctx_r0.active_tab() === "zones");
  }
}
function SignageGroupContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 5);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.GROUP_SELECT_DETAILS"));
  }
}
var SignageGroupContentComponent = class _SignageGroupContentComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this.selected_group = this._group_admin.managed_group;
    this.active_tab = this._group_admin.managed_group_tab;
  }
  static {
    this.\u0275fac = function SignageGroupContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupContentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupContentComponent, selectors: [["signage-group-content"]], decls: 2, vars: 1, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-3", "p-3", "lg:flex-row"], ["id", "group-users-panel", "role", "tabpanel", "aria-labelledby", "group-users-tab", 1, "min-h-0", "flex-1", "lg:min-w-0"], ["id", "group-zones-panel", "role", "tabpanel", "aria-labelledby", "group-zones-tab", 1, "min-h-0", "flex-1", "lg:min-w-0"], [1, "text-6xl"]], template: function SignageGroupContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SignageGroupContentComponent_Conditional_0_Template, 4, 8, "div", 0)(1, SignageGroupContentComponent_Conditional_1_Template, 6, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selected_group() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      SignageGroupUsersComponent,
      SignageGroupZonesComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media (max-width: 1023px) {\n  .tablet-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=signage-group-content.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupContentComponent, [{
    type: Component,
    args: [{ selector: "signage-group-content", template: `
        @if (selected_group()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3 lg:flex-row">
                    <signage-group-users
                        id="group-users-panel"
                        role="tabpanel"
                        aria-labelledby="group-users-tab"
                        class="min-h-0 flex-1 lg:min-w-0"
                        [class.tablet-hidden]="active_tab() === 'zones'"
                        [class.tablet-full]="active_tab() === 'users'"
                    />
                    <signage-group-zones
                        id="group-zones-panel"
                        role="tabpanel"
                        aria-labelledby="group-zones-tab"
                        class="min-h-0 flex-1 lg:min-w-0"
                        [class.tablet-hidden]="active_tab() === 'users'"
                        [class.tablet-full]="active_tab() === 'zones'"
                    />
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">group</icon>
                <p>{{ 'SIGNAGE_MANAGER.GROUP_SELECT_DETAILS' | translate }}</p>
            </div>
        }
    `, imports: [
      IconComponent,
      SignageGroupUsersComponent,
      SignageGroupZonesComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;9855fddcf81591377c77cb722254fbf3f8630850c7cb1584a5532885aa230ece;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/signage-group-content.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media (max-width: 1023px) {\n  .tablet-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full {\n    flex: 1;\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=signage-group-content.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupContentComponent, { className: "SignageGroupContentComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-content.component.ts", lineNumber: 69 });
})();

// apps/signage-manager/src/app/groups/signage-group-access-modal.component.ts
var _c03 = (a0) => ({ name: a0 });
var _forTrack05 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function SignageGroupAccessModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 3);
    \u0275\u0275elementEnd();
  }
}
function SignageGroupAccessModalComponent_Conditional_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function SignageGroupAccessModalComponent_Conditional_5_For_10_Template_settings_toggle_ngModelChange_0_listener($event) {
      const permission_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setDefault(permission_r2.value, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const permission_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, permission_r2.label))("ngModel", ctx_r2.hasDefault(permission_r2.value));
    \u0275\u0275control();
  }
}
function SignageGroupAccessModalComponent_Conditional_5_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "icon", 15);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275element(9, "signage-group-permission-labels", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function SignageGroupAccessModalComponent_Conditional_5_For_21_Template_button_click_10_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editMapping(row_r5));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 22);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function SignageGroupAccessModalComponent_Conditional_5_For_21_Template_button_click_15_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeMapping(row_r5.id));
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r5.name || row_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("permissions", row_r5.permissions);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 7, "SIGNAGE_MANAGER.AD_GROUP_EDIT_PERMS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 9, "SIGNAGE_MANAGER.AD_GROUP_EDIT_PERMS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 11, "SIGNAGE_MANAGER.AD_GROUP_REMOVE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 13, "SIGNAGE_MANAGER.AD_GROUP_REMOVE"));
  }
}
function SignageGroupAccessModalComponent_Conditional_5_ForEmpty_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.AD_GROUP_NO_MAPPINGS"), " ");
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "mat-form-field", 24)(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SignageGroupAccessModalComponent_Conditional_5_Conditional_24_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.manual_id, $event) || (ctx_r2.manual_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 24)(9, "input", 26);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SignageGroupAccessModalComponent_Conditional_5_Conditional_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.manual_name, $event) || (ctx_r2.manual_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 27);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function SignageGroupAccessModalComponent_Conditional_5_Conditional_24_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addManual());
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 10, "SIGNAGE_MANAGER.AD_GROUP_SEARCH_UNAVAILABLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manual_id);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 12, "SIGNAGE_MANAGER.AD_GROUP_ID"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 14, "SIGNAGE_MANAGER.AD_GROUP_ID"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manual_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 16, "SIGNAGE_MANAGER.AD_GROUP_NAME"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 18, "SIGNAGE_MANAGER.AD_GROUP_NAME"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.manual_id().trim())("matTooltip", \u0275\u0275pipeBind1(13, 20, "SIGNAGE_MANAGER.AD_GROUP_ADD"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 22, "SIGNAGE_MANAGER.AD_GROUP_ADD"));
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.email, " ");
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_For_6_Template_button_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addMapping(item_r9.id, item_r9.name));
    });
    \u0275\u0275elementStart(1, "icon", 34);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignageGroupAccessModalComponent_Conditional_5_Conditional_25_For_6_Conditional_6_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r9.name || item_r9.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.email ? 6 : -1);
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_ForEmpty_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.AD_GROUP_NO_RESULTS"), " ");
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignageGroupAccessModalComponent_Conditional_5_Conditional_25_ForEmpty_7_Conditional_0_Template, 3, 3, "p", 37);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r2.directory_loading() ? 0 : -1);
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 38);
    \u0275\u0275elementEnd();
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 28)(1, "input", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SignageGroupAccessModalComponent_Conditional_5_Conditional_25_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.search, $event) || (ctx_r2.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275repeaterCreate(5, SignageGroupAccessModalComponent_Conditional_5_Conditional_25_For_6_Template, 7, 2, "button", 31, _forTrack1, false, SignageGroupAccessModalComponent_Conditional_5_Conditional_25_ForEmpty_7_Template, 1, 1);
    \u0275\u0275conditionalCreate(8, SignageGroupAccessModalComponent_Conditional_5_Conditional_25_Conditional_8_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.AD_GROUP_SEARCH"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "SIGNAGE_MANAGER.AD_GROUP_SEARCH"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.directory_groups());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.directory_loading() ? 8 : -1);
  }
}
function SignageGroupAccessModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 5)(2, "h3", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275repeaterCreate(9, SignageGroupAccessModalComponent_Conditional_5_For_10_Template, 2, 4, "settings-toggle", 9, _forTrack05);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "section", 4)(12, "div", 5)(13, "h3", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 7);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ul", 10);
    \u0275\u0275repeaterCreate(20, SignageGroupAccessModalComponent_Conditional_5_For_21_Template, 20, 15, "li", 11, _forTrack1, false, SignageGroupAccessModalComponent_Conditional_5_ForEmpty_22_Template, 3, 3, "li", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275conditionalCreate(24, SignageGroupAccessModalComponent_Conditional_5_Conditional_24_Template, 17, 24)(25, SignageGroupAccessModalComponent_Conditional_5_Conditional_25_Template, 9, 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.GROUP_DEFAULT_PERMISSIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "SIGNAGE_MANAGER.GROUP_DEFAULT_PERMISSIONS_HINT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.permissions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "SIGNAGE_MANAGER.AD_GROUP_SYNC"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "SIGNAGE_MANAGER.AD_GROUP_SYNC_HINT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.mapping_list());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.directory_unavailable() ? 24 : 25);
  }
}
var SignageGroupAccessModalComponent = class _SignageGroupAccessModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._dialog = inject(MatDialog);
    this._group_admin = inject(SignageGroupAdminService);
    this.group = this._data.group;
    this.permissions = GROUP_PERMISSION_FLAGS;
    this.loaded = signal(
      false,
      ...ngDevMode ? [{ debugName: "loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.default_permissions = signal(
      0,
      ...ngDevMode ? [{ debugName: "default_permissions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mappings = signal(
      {},
      ...ngDevMode ? [{ debugName: "mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mapping_list = computed(
      () => Object.entries(this.mappings()).map(([id, [name, permissions]]) => ({
        id,
        name,
        permissions
      })),
      ...ngDevMode ? [{ debugName: "mapping_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_debounced = debounced(this.search, 300);
    this._directory = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_directory" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._search_debounced.value() ?? "",
      loader: ({ params }) => this._group_admin.searchDirectoryGroups(params)
    }));
    this.directory_unavailable = computed(
      () => !!this._directory.error(),
      ...ngDevMode ? [{ debugName: "directory_unavailable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.directory_loading = computed(
      () => this._directory.isLoading(),
      ...ngDevMode ? [{ debugName: "directory_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.directory_groups = computed(
      () => {
        if (!this._directory.hasValue())
          return [];
        const mappings = this.mappings();
        return this._directory.value().filter((item) => !mappings[adGroupKey(item.id)]);
      },
      ...ngDevMode ? [{ debugName: "directory_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manual_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "manual_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manual_name = signal(
      "",
      ...ngDevMode ? [{ debugName: "manual_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load();
  }
  // Without current values a save would clear the stored mappings, so a
  // failed read closes the editor.
  async _load() {
    try {
      const access = await this._group_admin.loadGroupAccess(this.group.id);
      this.default_permissions.set(access.default_permissions);
      this.mappings.set(access.ad_group_mappings);
      this.loaded.set(true);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.GROUP_ACCESS_LOAD_ERROR"));
      this._dialog_ref.close();
    }
  }
  hasDefault(permission) {
    return (this.default_permissions() & permission) === permission;
  }
  setDefault(permission, enabled) {
    this.default_permissions.update((value) => enabled ? value | permission : value & ~permission);
  }
  /** Map an AD group. It starts with the group's default permissions. */
  addMapping(id, name) {
    const key = adGroupKey(id);
    if (!key || this.mappings()[key])
      return;
    const permissions = this.default_permissions();
    this.mappings.update((mappings) => __spreadProps(__spreadValues({}, mappings), {
      [key]: [name.trim() || id.trim(), permissions]
    }));
  }
  addManual() {
    this.addMapping(this.manual_id(), this.manual_name());
    this.manual_id.set("");
    this.manual_name.set("");
  }
  async editMapping(row) {
    const result = await dialogClosed(this._dialog.open(SignageGroupPermissionsModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.AD_GROUP_PERMISSIONS", {
          name: row.name || row.id
        }),
        permissions: row.permissions
      }
    }));
    if (!result)
      return;
    this.mappings.update((mappings) => __spreadProps(__spreadValues({}, mappings), {
      [row.id]: [row.name, result.permissions]
    }));
  }
  removeMapping(id) {
    this.mappings.update((mappings) => {
      const next = __spreadValues({}, mappings);
      delete next[id];
      return next;
    });
  }
  async save() {
    if (this.saving() || !this.loaded())
      return;
    this.saving.set(true);
    this._dialog_ref.disableClose = true;
    const result = await this._group_admin.saveGroupAccess(this.group, {
      default_permissions: this.default_permissions(),
      ad_group_mappings: this.mappings()
    });
    this._dialog_ref.disableClose = false;
    if (result)
      this._dialog_ref.close(result);
    else
      this.saving.set(false);
  }
  static {
    this.\u0275fac = function SignageGroupAccessModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupAccessModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupAccessModalComponent, selectors: [["signage-group-access-modal"]], decls: 6, vars: 11, consts: [[3, "confirm", "heading", "loading", "confirm_disabled"], [1, "flex", "w-[36rem]", "max-w-full", "flex-col", "gap-4"], [1, "flex", "justify-center", "p-8"], ["diameter", "32"], [1, "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "border-base-300", "border-b", "px-4", "py-3"], [1, "text-sm", "font-medium"], [1, "text-base-content/60", "text-xs"], [1, "flex", "flex-col", "gap-3", "p-4"], [3, "label", "ngModel"], [1, "divide-base-300", "divide-y"], [1, "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "text-base-content/60", "p-4", "text-sm"], [1, "border-base-300", "flex", "flex-col", "gap-2", "border-t", "p-4"], [3, "ngModelChange", "label", "ngModel"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/60", "truncate", "font-mono", "text-xs"], [1, "text-base-content/70", "mt-1", "truncate", "text-xs"], [3, "permissions"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "flex", "items-center", "gap-2"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", "name", "ad-group-id", 3, "ngModelChange", "ngModel", "placeholder"], ["matInput", "", "name", "ad-group-name", 3, "ngModelChange", "ngModel", "placeholder"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "name", "ad-group-search", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "max-h-60", "flex-col", "gap-1", "overflow-auto"], ["type", "button", "matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "gap-2", "rounded-sm", "p-2", "text-left"], [1, "flex", "justify-center", "p-2"], ["type", "button", "matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "gap-2", "rounded-sm", "p-2", "text-left", 3, "click"], [1, "shrink-0", "opacity-60"], [1, "truncate", "text-sm"], [1, "text-base-content/60", "truncate", "text-xs"], [1, "text-base-content/60", "p-2", "text-sm"], ["diameter", "24"]], template: function SignageGroupAccessModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageGroupAccessModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275conditionalCreate(4, SignageGroupAccessModalComponent_Conditional_4_Template, 2, 0, "div", 2)(5, SignageGroupAccessModalComponent_Conditional_5_Template, 26, 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind2(1, 4, "SIGNAGE_MANAGER.GROUP_ACCESS_HEADING", \u0275\u0275pureFunction1(9, _c03, ctx.group.name)))("loading", ctx.saving() ? \u0275\u0275pipeBind1(2, 7, "SIGNAGE_MANAGER.GROUP_SAVING") : "")("confirm_disabled", !ctx.loaded());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.loaded() ? 4 : 5);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      SettingsToggleComponent,
      SignageGroupPermissionLabelsComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupAccessModalComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-access-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                'SIGNAGE_MANAGER.GROUP_ACCESS_HEADING'
                    | translate: { name: group.name }
            "
            [loading]="
                saving() ? ('SIGNAGE_MANAGER.GROUP_SAVING' | translate) : ''
            "
            [confirm_disabled]="!loaded()"
            (confirm)="save()"
        >
            <div class="flex w-[36rem] max-w-full flex-col gap-4">
                @if (!loaded()) {
                    <div class="flex justify-center p-8">
                        <mat-spinner diameter="32" />
                    </div>
                } @else {
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <div class="border-base-300 border-b px-4 py-3">
                            <h3 class="text-sm font-medium">
                                {{
                                    'SIGNAGE_MANAGER.GROUP_DEFAULT_PERMISSIONS'
                                        | translate
                                }}
                            </h3>
                            <p class="text-base-content/60 text-xs">
                                {{
                                    'SIGNAGE_MANAGER.GROUP_DEFAULT_PERMISSIONS_HINT'
                                        | translate
                                }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-3 p-4">
                            @for (
                                permission of permissions;
                                track permission.key
                            ) {
                                <settings-toggle
                                    [label]="permission.label | translate"
                                    [ngModel]="hasDefault(permission.value)"
                                    (ngModelChange)="
                                        setDefault(permission.value, $event)
                                    "
                                />
                            }
                        </div>
                    </section>
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <div class="border-base-300 border-b px-4 py-3">
                            <h3 class="text-sm font-medium">
                                {{
                                    'SIGNAGE_MANAGER.AD_GROUP_SYNC' | translate
                                }}
                            </h3>
                            <p class="text-base-content/60 text-xs">
                                {{
                                    'SIGNAGE_MANAGER.AD_GROUP_SYNC_HINT'
                                        | translate
                                }}
                            </p>
                        </div>
                        <ul class="divide-base-300 divide-y">
                            @for (row of mapping_list(); track row.id) {
                                <li class="flex items-center gap-3 px-4 py-3">
                                    <icon class="shrink-0 text-xl opacity-60"
                                        >groups</icon
                                    >
                                    <div class="min-w-0 flex-1">
                                        <div
                                            class="truncate text-sm font-medium"
                                        >
                                            {{ row.name || row.id }}
                                        </div>
                                        <div
                                            class="text-base-content/60 truncate font-mono text-xs"
                                        >
                                            {{ row.id }}
                                        </div>
                                        <div
                                            class="text-base-content/70 mt-1 truncate text-xs"
                                        >
                                            <signage-group-permission-labels
                                                [permissions]="row.permissions"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.AD_GROUP_EDIT_PERMS'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_EDIT_PERMS'
                                                | translate
                                        "
                                        (click)="editMapping(row)"
                                    >
                                        <icon>edit</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.AD_GROUP_REMOVE'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_REMOVE'
                                                | translate
                                        "
                                        (click)="removeMapping(row.id)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </li>
                            } @empty {
                                <li class="text-base-content/60 p-4 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.AD_GROUP_NO_MAPPINGS'
                                            | translate
                                    }}
                                </li>
                            }
                        </ul>
                        <div
                            class="border-base-300 flex flex-col gap-2 border-t p-4"
                        >
                            @if (directory_unavailable()) {
                                <p class="text-base-content/60 text-xs">
                                    {{
                                        'SIGNAGE_MANAGER.AD_GROUP_SEARCH_UNAVAILABLE'
                                            | translate
                                    }}
                                </p>
                                <div class="flex items-center gap-2">
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript flex-1"
                                    >
                                        <input
                                            matInput
                                            name="ad-group-id"
                                            [(ngModel)]="manual_id"
                                            [placeholder]="
                                                'SIGNAGE_MANAGER.AD_GROUP_ID'
                                                    | translate
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.AD_GROUP_ID'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript flex-1"
                                    >
                                        <input
                                            matInput
                                            name="ad-group-name"
                                            [(ngModel)]="manual_name"
                                            [placeholder]="
                                                'SIGNAGE_MANAGER.AD_GROUP_NAME'
                                                    | translate
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.AD_GROUP_NAME'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [disabled]="!manual_id().trim()"
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.AD_GROUP_ADD'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_ADD'
                                                | translate
                                        "
                                        (click)="addManual()"
                                    >
                                        <icon>add</icon>
                                    </button>
                                </div>
                            } @else {
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        name="ad-group-search"
                                        [(ngModel)]="search"
                                        [placeholder]="
                                            'SIGNAGE_MANAGER.AD_GROUP_SEARCH'
                                                | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.AD_GROUP_SEARCH'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                                <div
                                    class="flex max-h-60 flex-col gap-1 overflow-auto"
                                >
                                    @for (
                                        item of directory_groups();
                                        track item.id
                                    ) {
                                        <button
                                            type="button"
                                            matRipple
                                            class="hover:bg-base-200 flex w-full items-center gap-2 rounded-sm p-2 text-left"
                                            (click)="
                                                addMapping(item.id, item.name)
                                            "
                                        >
                                            <icon class="shrink-0 opacity-60"
                                                >add</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div class="truncate text-sm">
                                                    {{ item.name || item.id }}
                                                </div>
                                                @if (item.email) {
                                                    <div
                                                        class="text-base-content/60 truncate text-xs"
                                                    >
                                                        {{ item.email }}
                                                    </div>
                                                }
                                            </div>
                                        </button>
                                    } @empty {
                                        @if (!directory_loading()) {
                                            <p
                                                class="text-base-content/60 p-2 text-sm"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.AD_GROUP_NO_RESULTS'
                                                        | translate
                                                }}
                                            </p>
                                        }
                                    }
                                    @if (directory_loading()) {
                                        <div class="flex justify-center p-2">
                                            <mat-spinner diameter="24" />
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </section>
                }
            </div>
        </fullscreen-modal-shell>
    `,
      imports: [
        FullscreenModalShellComponent,
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        SettingsToggleComponent,
        TranslatePipe,
        SignageGroupPermissionLabelsComponent
      ]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupAccessModalComponent, { className: "SignageGroupAccessModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-access-modal.component.ts", lineNumber: 341 });
})();

// apps/signage-manager/src/app/groups/signage-group-edit-modal.component.ts
var _forTrack06 = ($index, $item) => $item.id;
function SignageGroupEditModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SignageGroupEditModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_PARENT"));
  }
}
function SignageGroupEditModalComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r1 = ctx.$implicit;
    \u0275\u0275property("value", parent_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parent_r1.name || parent_r1.id, " ");
  }
}
var SignageGroupEditModalComponent = class _SignageGroupEditModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._group_admin = inject(SignageGroupAdminService);
    this._context = inject(SignageContextService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group = this._data.group || {};
    this._loaded_parent = signal(
      null,
      ...ngDevMode ? [{ debugName: "_loaded_parent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.parent_groups = () => {
      const parent_id = this.group.parent_id || "";
      const options = this._group_admin.manageable_signage_groups().filter(({ id }) => id !== this.group.id && id !== parent_id && this._group_admin.canChangeGroupParent(this.group, id));
      if (!parent_id)
        return options;
      const parent = this._knownGroup(parent_id) || this._loaded_parent() || {
        id: parent_id,
        name: i18n("SIGNAGE_MANAGER.CURRENT_PARENT_GROUP")
      };
      return [parent, ...options];
    };
    this.can_remove_parent = () => this._group_admin.canChangeGroupParent(this.group, "");
    this.model = signal(
      {
        name: this.group.name || "",
        description: this.group.description || "",
        parent_id: this.group.parent_id || ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
      if (!this.group.id)
        required(path.parent_id);
    });
    const save_hotkey = inject(HotkeysService).listen(["KeyS"], () => this.save());
    inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
    this._loadParent();
  }
  _knownGroup(group_id) {
    return this._context.signage_groups().find(({ group }) => group.id === group_id)?.group || this._group_admin.manageable_signage_groups().find(({ id }) => id === group_id);
  }
  // A failed read, such as for a parent the user cannot see, labels the
  // option as the current parent.
  async _loadParent() {
    const parent_id = this.group.parent_id;
    if (!parent_id || this._knownGroup(parent_id))
      return;
    const parent = await this._group_admin.loadGroup(parent_id).catch(() => null);
    if (parent)
      this._loaded_parent.set(parent);
  }
  async save() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const result = await this._group_admin.saveSignageGroup(this.group, this.model());
      this._dialog_ref.disableClose = false;
      if (result)
        this._dialog_ref.close(result);
      else
        this.loading.set(false);
    });
  }
  static {
    this.\u0275fac = function SignageGroupEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupEditModalComponent, selectors: [["signage-group-edit-modal"]], decls: 34, vars: 35, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "signage-group-name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "signage-group-name", 3, "placeholder", "formField"], ["for", "signage-group-description"], ["matInput", "", "id", "signage-group-description", 1, "min-h-32", 3, "placeholder", "formField"], ["for", "signage-group-parent"], ["id", "signage-group-parent", 3, "placeholder", "formField"], ["value", ""], [3, "value"]], template: function SignageGroupEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageGroupEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form", 1)(4, "label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 4);
        \u0275\u0275element(10, "input", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "mat-error");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "label", 6);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-form-field", 4);
        \u0275\u0275element(19, "textarea", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "label", 8);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275conditionalCreate(24, SignageGroupEditModalComponent_Conditional_24_Template, 2, 0, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 4)(26, "mat-select", 9);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275conditionalCreate(28, SignageGroupEditModalComponent_Conditional_28_Template, 3, 3, "mat-option", 10);
        \u0275\u0275repeaterCreate(29, SignageGroupEditModalComponent_For_30_Template, 2, 2, "mat-option", 11, _forTrack06);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(31, "mat-error");
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 15, ctx.group.id ? "SIGNAGE_MANAGER.GROUP_EDIT_HEADING" : "SIGNAGE_MANAGER.GROUP_NEW_HEADING"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 17, "SIGNAGE_MANAGER.GROUP_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 21, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 23, "SIGNAGE_MANAGER.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 25, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 27, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 29, "SIGNAGE_MANAGER.PARENT_GROUP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.group.id ? 24 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 31, "SIGNAGE_MANAGER.SELECT_PARENT"))("formField", ctx.form.parent_id);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.group.id && ctx.can_remove_parent() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.parent_groups());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 33, "SIGNAGE_MANAGER.PARENT_REQUIRED"));
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupEditModalComponent, [{
    type: Component,
    args: [{ selector: "signage-group-edit-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (group.id
                    ? 'SIGNAGE_MANAGER.GROUP_EDIT_HEADING'
                    : 'SIGNAGE_MANAGER.GROUP_NEW_HEADING'
                ) | translate
            "
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.GROUP_SAVING' | translate) : ''
            "
            confirm_hotkey="S"
            (confirm)="save()"
        >
            <form class="flex flex-col">
                <label for="signage-group-name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="signage-group-name"
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
                    />
                    <mat-error>{{
                        'SIGNAGE_MANAGER.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <label for="signage-group-description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        id="signage-group-description"
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <label for="signage-group-parent"
                    >{{ 'SIGNAGE_MANAGER.PARENT_GROUP' | translate }}
                    @if (!group.id) {
                        <span required>*</span>
                    }
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        id="signage-group-parent"
                        [placeholder]="
                            'SIGNAGE_MANAGER.SELECT_PARENT' | translate
                        "
                        [formField]="form.parent_id"
                    >
                        @if (group.id && can_remove_parent()) {
                            <mat-option value="">{{
                                'SIGNAGE_MANAGER.NO_PARENT' | translate
                            }}</mat-option>
                        }
                        @for (parent of parent_groups(); track parent.id) {
                            <mat-option [value]="parent.id">
                                {{ parent.name || parent.id }}
                            </mat-option>
                        }
                    </mat-select>
                    <mat-error>{{
                        'SIGNAGE_MANAGER.PARENT_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      TranslatePipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupEditModalComponent, { className: "SignageGroupEditModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-edit-modal.component.ts", lineNumber: 101 });
})();

// apps/signage-manager/src/app/groups/signage-group-features-modal.component.ts
var _c04 = (a0) => ({ name: a0 });
var _c1 = () => ({ key: "features", label: "SIGNAGE_MANAGER.FEATURE_FEATURES" });
var _c2 = () => ({ key: "available_plugins", label: "SIGNAGE_MANAGER.FEATURE_PLUGINS" });
var _forTrack07 = ($index, $item) => $item.id;
function SignageGroupFeaturesModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-slide-toggle", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function SignageGroupFeaturesModalComponent_Conditional_8_For_4_Template_mat_slide_toggle_ngModelChange_4_listener($event) {
      const feature_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setAllowed("features", feature_r2.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, feature_r2.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.isAllowed("features", feature_r2.id));
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(5, 5, feature_r2.label));
    \u0275\u0275control();
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.FEATURE_NONE_AVAILABLE"), " ");
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 14);
    \u0275\u0275listener("ngModelChange", function SignageGroupFeaturesModalComponent_Conditional_8_For_9_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const plugin_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setAllowed("available_plugins", plugin_r5.id, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const plugin_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.isAllowed("available_plugins", plugin_r5.id));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plugin_r5.name, " ");
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.FEATURE_NO_PLUGINS"), " ");
  }
}
function SignageGroupFeaturesModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275template(1, SignageGroupFeaturesModalComponent_Conditional_8_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementStart(2, "ul", 8);
    \u0275\u0275repeaterCreate(3, SignageGroupFeaturesModalComponent_Conditional_8_For_4_Template, 6, 7, "li", 9, _forTrack07, false, SignageGroupFeaturesModalComponent_Conditional_8_ForEmpty_5_Template, 3, 3, "li", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "section", 6);
    \u0275\u0275template(7, SignageGroupFeaturesModalComponent_Conditional_8_ng_container_7_Template, 1, 0, "ng-container", 7);
    \u0275\u0275repeaterCreate(8, SignageGroupFeaturesModalComponent_Conditional_8_For_9_Template, 2, 2, "mat-checkbox", 11, _forTrack07, false, SignageGroupFeaturesModalComponent_Conditional_8_ForEmpty_10_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const list_header_r6 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", list_header_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.available_features());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", list_header_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.plugins());
  }
}
function SignageGroupFeaturesModalComponent_ng_template_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function SignageGroupFeaturesModalComponent_ng_template_9_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const key_r8 = \u0275\u0275nextContext().key;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reset(key_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.FEATURE_RESET"), " ");
  }
}
function SignageGroupFeaturesModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, SignageGroupFeaturesModalComponent_ng_template_9_Conditional_8_Template, 3, 3, "button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r8 = ctx.key;
    const label_r9 = ctx.label;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, label_r9), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, ctx_r2.isSet(key_r8) ? "SIGNAGE_MANAGER.FEATURE_SET_HERE" : "SIGNAGE_MANAGER.FEATURE_INHERITED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isSet(key_r8) ? 8 : -1);
  }
}
var SignageGroupFeaturesModalComponent = class _SignageGroupFeaturesModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._context = inject(SignageContextService);
    this._group_admin = inject(SignageGroupAdminService);
    this._plugin_service = inject(SignagePluginService);
    this.group = this._data.group;
    this.plugins = computed(
      () => {
        const allowed = this._inherited()?.available_plugins;
        const plugins = this._plugin_service.all_plugins();
        return allowed ? plugins.filter(({ id }) => allowed.includes(id)) : plugins;
      },
      ...ngDevMode ? [{ debugName: "plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_features = computed(
      () => {
        const global = this._context.global_features() || [];
        const parent = this._inherited()?.features;
        return SIGNAGE_FEATURES.filter(({ id }) => global.includes(id) && !ORGANISATION_FEATURES.includes(id) && (!parent || parent.includes(id)));
      },
      ...ngDevMode ? [{ debugName: "available_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = signal(
      false,
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.own = signal(
      {},
      ...ngDevMode ? [{ debugName: "own" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._inherited = signal(
      null,
      ...ngDevMode ? [{ debugName: "_inherited" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inherited_loaded = computed(
      () => !!this._inherited(),
      ...ngDevMode ? [{ debugName: "inherited_loaded" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.effective = computed(
      () => __spreadValues(__spreadValues({}, this._inherited()), this.own()),
      ...ngDevMode ? [{ debugName: "effective" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = {
      features: () => this.available_features().map(({ id }) => id),
      available_plugins: () => this.plugins().map(({ id }) => id)
    };
    this._load();
  }
  // Without current values the rows would show wrong defaults, so a failed
  // read closes the editor. A 404 from the features route means the backend
  // has no group limits, so the parent allows everything.
  async _load() {
    try {
      const group = await this._group_admin.loadGroup(this.group.id);
      const inherited = await this._context.loadGroupFeatures(group.parent_id).catch(noGroupFeaturesOn404);
      this.group = group;
      this.own.set(signageGroupFeatures(group.features));
      this._inherited.set(inherited);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.GROUP_FEATURES_LOAD_ERROR"));
      this._dialog_ref.close();
    }
  }
  isSet(key) {
    return this.own()[key] !== void 0;
  }
  /** A missing list allows every option */
  isAllowed(key, id) {
    const allowed = this.effective()[key];
    return !allowed || allowed.includes(id);
  }
  /**
   * Start the group's own list from what it allows now, then change one.
   * Features the global settings hide stay as they were, so turning them
   * on globally later still reaches this group.
   */
  setAllowed(key, id, allowed) {
    const options = this._options[key]();
    const hidden = (this.effective()[key] ?? (key === "features" ? SIGNAGE_FEATURE_IDS : [])).filter((option) => !options.includes(option));
    const shown = options.filter((option) => option !== id && this.isAllowed(key, option));
    const list = [...hidden, ...shown, ...allowed ? [id] : []];
    this.own.update((own) => __spreadProps(__spreadValues({}, own), { [key]: list }));
  }
  /** Remove a list the group sets, so it uses the parent value again */
  reset(key) {
    this.own.update((own) => {
      const next = __spreadValues({}, own);
      delete next[key];
      return next;
    });
  }
  async save() {
    if (this.saving() || !this.inherited_loaded())
      return;
    this.saving.set(true);
    this._dialog_ref.disableClose = true;
    const result = await this._group_admin.saveGroupFeatures(this.group, this._withKnownPlugins(this.own()));
    this._dialog_ref.disableClose = false;
    if (result)
      this._dialog_ref.close(result);
    else
      this.saving.set(false);
  }
  /** Drop plugin IDs that no longer exist. Keeps the list as is when the
   * plugin list is empty, as a failed read also gives an empty list. */
  _withKnownPlugins(features) {
    const ids = new Set(this._plugin_service.all_plugins().map((plugin) => plugin.id));
    if (!features.available_plugins || !ids.size)
      return features;
    return __spreadProps(__spreadValues({}, features), {
      available_plugins: features.available_plugins.filter((id) => ids.has(id))
    });
  }
  static {
    this.\u0275fac = function SignageGroupFeaturesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupFeaturesModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupFeaturesModalComponent, selectors: [["signage-group-features-modal"]], decls: 11, vars: 14, consts: [["list_header", ""], [3, "confirm", "heading", "loading", "confirm_disabled"], [1, "flex", "w-[36rem]", "max-w-full", "flex-col", "gap-4"], [1, "text-base-content/70", "text-sm"], [1, "flex", "justify-center", "p-8"], ["diameter", "32"], [1, "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "divide-base-300", "divide-y"], [1, "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "text-base-content/60", "p-4", "text-sm"], [1, "px-2", 3, "ngModel"], [1, "min-w-0", "flex-1", "text-sm"], [3, "ngModelChange", "ngModel", "aria-label"], [1, "px-2", 3, "ngModelChange", "ngModel"], [1, "border-base-300", "flex", "items-center", "gap-3", "border-b", "px-4", "py-3"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-medium"], [1, "text-base-content/60", "text-xs"], ["btn", "", "matRipple", "", "type", "button", 1, "clear", "text-xs"], ["btn", "", "matRipple", "", "type", "button", 1, "clear", "text-xs", 3, "click"]], template: function SignageGroupFeaturesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageGroupFeaturesModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "div", 2)(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, SignageGroupFeaturesModalComponent_Conditional_7_Template, 2, 0, "div", 4)(8, SignageGroupFeaturesModalComponent_Conditional_8_Template, 11, 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, SignageGroupFeaturesModalComponent_ng_template_9_Template, 9, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind2(1, 5, "SIGNAGE_MANAGER.GROUP_FEATURES_HEADING", \u0275\u0275pureFunction1(12, _c04, ctx.group.name)))("loading", ctx.saving() ? \u0275\u0275pipeBind1(2, 8, "SIGNAGE_MANAGER.GROUP_SAVING") : "")("confirm_disabled", !ctx.inherited_loaded());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "SIGNAGE_MANAGER.GROUP_FEATURES_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.inherited_loaded() ? 7 : 8);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatCheckboxModule,
      MatCheckbox,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatSlideToggleModule,
      MatSlideToggle,
      NgTemplateOutlet,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupFeaturesModalComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-features-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                'SIGNAGE_MANAGER.GROUP_FEATURES_HEADING'
                    | translate: { name: group.name }
            "
            [loading]="
                saving() ? ('SIGNAGE_MANAGER.GROUP_SAVING' | translate) : ''
            "
            [confirm_disabled]="!inherited_loaded()"
            (confirm)="save()"
        >
            <div class="flex w-[36rem] max-w-full flex-col gap-4">
                <p class="text-base-content/70 text-sm">
                    {{ 'SIGNAGE_MANAGER.GROUP_FEATURES_HINT' | translate }}
                </p>
                @if (!inherited_loaded()) {
                    <div class="flex justify-center p-8">
                        <mat-spinner diameter="32" />
                    </div>
                } @else {
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                list_header;
                                context: {
                                    key: 'features',
                                    label: 'SIGNAGE_MANAGER.FEATURE_FEATURES',
                                }
                            "
                        />
                        <ul class="divide-base-300 divide-y">
                            @for (
                                feature of available_features();
                                track feature.id
                            ) {
                                <li class="flex items-center gap-3 px-4 py-3">
                                    <div class="min-w-0 flex-1 text-sm">
                                        {{ feature.label | translate }}
                                    </div>
                                    <mat-slide-toggle
                                        [ngModel]="
                                            isAllowed('features', feature.id)
                                        "
                                        (ngModelChange)="
                                            setAllowed(
                                                'features',
                                                feature.id,
                                                $event
                                            )
                                        "
                                        [aria-label]="feature.label | translate"
                                    ></mat-slide-toggle>
                                </li>
                            } @empty {
                                <li class="text-base-content/60 p-4 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.FEATURE_NONE_AVAILABLE'
                                            | translate
                                    }}
                                </li>
                            }
                        </ul>
                    </section>
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                list_header;
                                context: {
                                    key: 'available_plugins',
                                    label: 'SIGNAGE_MANAGER.FEATURE_PLUGINS',
                                }
                            "
                        />
                        @for (plugin of plugins(); track plugin.id) {
                            <mat-checkbox
                                class="px-2"
                                [ngModel]="
                                    isAllowed('available_plugins', plugin.id)
                                "
                                (ngModelChange)="
                                    setAllowed(
                                        'available_plugins',
                                        plugin.id,
                                        $event
                                    )
                                "
                            >
                                {{ plugin.name }}
                            </mat-checkbox>
                        } @empty {
                            <p class="text-base-content/60 p-4 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.FEATURE_NO_PLUGINS'
                                        | translate
                                }}
                            </p>
                        }
                    </section>
                }
            </div>
        </fullscreen-modal-shell>

        <ng-template #list_header let-key="key" let-label="label">
            <div
                class="border-base-300 flex items-center gap-3 border-b px-4 py-3"
            >
                <div class="min-w-0 flex-1">
                    <div class="text-sm font-medium">
                        {{ label | translate }}
                    </div>
                    <div class="text-base-content/60 text-xs">
                        {{
                            (isSet(key)
                                ? 'SIGNAGE_MANAGER.FEATURE_SET_HERE'
                                : 'SIGNAGE_MANAGER.FEATURE_INHERITED'
                            ) | translate
                        }}
                    </div>
                </div>
                @if (isSet(key)) {
                    <button
                        btn
                        matRipple
                        type="button"
                        class="clear text-xs"
                        (click)="reset(key)"
                    >
                        {{ 'SIGNAGE_MANAGER.FEATURE_RESET' | translate }}
                    </button>
                }
            </div>
        </ng-template>
    `,
      imports: [
        FullscreenModalShellComponent,
        FormsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSlideToggleModule,
        NgTemplateOutlet,
        TranslatePipe
      ]
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupFeaturesModalComponent, { className: "SignageGroupFeaturesModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-features-modal.component.ts", lineNumber: 187 });
})();

// apps/signage-manager/src/app/groups/signage-group-detail-header.component.ts
function SignageGroupDetailHeaderComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const group_r4 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editFeatures(group_r4));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "tune");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.GROUP_FEATURES_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.GROUP_FEATURES_TOOLTIP"));
  }
}
function SignageGroupDetailHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "h4", 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, SignageGroupDetailHeaderComponent_Conditional_0_Conditional_9_Template, 5, 6, "button", 4);
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Template_button_click_10_listener() {
      const group_r4 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAccess(group_r4));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "admin_panel_settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 5);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Template_button_click_15_listener() {
      const group_r4 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editGroup(group_r4));
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 6);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Template_button_click_20_listener() {
      const group_r4 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeGroup(group_r4));
    });
    \u0275\u0275elementStart(23, "icon");
    \u0275\u0275text(24, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 9, "SIGNAGE_MANAGER.BACK_TO_GROUPS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.name || \u0275\u0275pipeBind1(8, 11, "SIGNAGE_MANAGER.UNNAMED_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_edit_features() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 13, "SIGNAGE_MANAGER.GROUP_ACCESS_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 15, "SIGNAGE_MANAGER.GROUP_ACCESS_TOOLTIP"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 17, "SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 19, "SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 21, "SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 23, "SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP"));
  }
}
var SignageGroupDetailHeaderComponent = class _SignageGroupDetailHeaderComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this._dialog = inject(MatDialog);
    this.selected_group = this._group_admin.managed_group;
    this.can_edit_features = computed(
      () => this._group_admin.canEditGroupFeatures(this.selected_group()),
      ...ngDevMode ? [{ debugName: "can_edit_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  clearSelection() {
    this._group_admin.managed_group_id.set("");
  }
  editGroup(group = {}) {
    this._dialog.open(SignageGroupEditModalComponent, {
      data: { group },
      panelClass: "mobile-fullscreen"
    });
  }
  editFeatures(group) {
    this._dialog.open(SignageGroupFeaturesModalComponent, {
      data: { group },
      panelClass: "mobile-fullscreen"
    });
  }
  editAccess(group) {
    this._dialog.open(SignageGroupAccessModalComponent, {
      data: { group },
      panelClass: "mobile-fullscreen"
    });
  }
  removeGroup(group) {
    this._group_admin.removeSignageGroup(group);
  }
  static {
    this.\u0275fac = function SignageGroupDetailHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupDetailHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupDetailHeaderComponent, selectors: [["signage-group-detail-header"]], decls: 1, vars: 1, consts: [[1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "px-4", "py-3"], ["icon", "", "matRipple", "", "type", "button", 1, "desktop-hidden", 3, "click"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-medium"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"]], template: function SignageGroupDetailHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SignageGroupDetailHeaderComponent_Conditional_0_Template, 25, 25, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.selected_group()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupDetailHeaderComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-detail-header",
      template: `
        @if (selected_group(); as group) {
            <div
                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-4 py-3"
            >
                <button
                    icon
                    matRipple
                    type="button"
                    class="desktop-hidden"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.BACK_TO_GROUPS' | translate
                    "
                    (click)="clearSelection()"
                >
                    <icon>arrow_back</icon>
                </button>
                <div class="min-w-0 flex-1">
                    <h4 class="truncate text-lg font-medium">
                        {{
                            group.name ||
                                ('SIGNAGE_MANAGER.UNNAMED_GROUP' | translate)
                        }}
                    </h4>
                </div>
                @if (can_edit_features()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.GROUP_FEATURES_TOOLTIP' | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.GROUP_FEATURES_TOOLTIP' | translate
                        "
                        (click)="editFeatures(group)"
                    >
                        <icon>tune</icon>
                    </button>
                }
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.GROUP_ACCESS_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.GROUP_ACCESS_TOOLTIP' | translate
                    "
                    (click)="editAccess(group)"
                >
                    <icon>admin_panel_settings</icon>
                </button>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP' | translate
                    "
                    (click)="editGroup(group)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP' | translate
                    "
                    (click)="removeGroup(group)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        }
    `,
      imports: [IconComponent, MatRippleModule, MatTooltipModule, TranslatePipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupDetailHeaderComponent, { className: "SignageGroupDetailHeaderComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-detail-header.component.ts", lineNumber: 107 });
})();

// apps/signage-manager/src/app/groups/signage-group-header.component.ts
var _c05 = (a0) => ({ count: a0 });
function SignageGroupHeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SignageGroupHeaderComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editGroup());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.GROUPS_NEW_TOOLTIP"));
  }
}
var SignageGroupHeaderComponent = class _SignageGroupHeaderComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._group_admin = inject(SignageGroupAdminService);
    this._dialog = inject(MatDialog);
    this.groups = this._group_admin.manageable_signage_groups;
    this.group_count = computed(
      () => this.groups().length,
      ...ngDevMode ? [{ debugName: "group_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_add_groups = computed(
      () => this._context.can_manage_all_groups() || this.group_count() > 0,
      ...ngDevMode ? [{ debugName: "can_add_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  editGroup() {
    this._dialog.open(SignageGroupEditModalComponent, {
      data: { group: {} },
      panelClass: "mobile-fullscreen"
    });
  }
  static {
    this.\u0275fac = function SignageGroupHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupHeaderComponent, selectors: [["signage-group-header"]], decls: 12, vars: 11, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "z-10", "flex", "flex-nowrap", "items-center", "gap-4", "border-b", "px-4", "py-3", "shadow"], [1, "flex-1", "shrink-0"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-4"], [1, "text-sm", "opacity-60"], [1, "min-w-0", "flex-1", "overflow-hidden"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 1, "text-xl", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 1, "text-xl", 3, "click", "matTooltip"]], template: function SignageGroupHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "group-breadcrumbs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(11, SignageGroupHeaderComponent_Conditional_11_Template, 4, 3, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.GROUPS_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 5, "SIGNAGE_MANAGER.GROUP_COUNT", \u0275\u0275pureFunction1(9, _c05, ctx.group_count()), ctx.group_count()), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_add_groups() ? 11 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      GroupBreadcrumbsComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupHeaderComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-header",
      template: `
        <header
            class="bg-base-100 border-base-300 sticky top-0 z-10 flex flex-nowrap items-center gap-4 border-b px-4 py-3 shadow"
        >
            <div class="flex-1 shrink-0">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.GROUPS_TITLE' | translate }}
                </h3>
                <div class="flex items-center gap-4">
                    <div class="text-sm opacity-60">
                        {{
                            'SIGNAGE_MANAGER.GROUP_COUNT'
                                | translate
                                    : { count: group_count() }
                                    : group_count()
                        }}
                    </div>
                    <div class="min-w-0 flex-1 overflow-hidden">
                        <group-breadcrumbs />
                    </div>
                </div>
            </div>
            @if (can_add_groups()) {
                <button
                    icon
                    default
                    type="button"
                    class="text-xl"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.GROUPS_NEW_TOOLTIP' | translate
                    "
                    matTooltipPosition="left"
                    (click)="editGroup()"
                >
                    <icon>add</icon>
                </button>
            }
        </header>
    `,
      imports: [
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        GroupBreadcrumbsComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupHeaderComponent, { className: "SignageGroupHeaderComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-header.component.ts", lineNumber: 61 });
})();

// apps/signage-manager/src/app/groups/signage-group-list.component.ts
var _c06 = (a0) => ({ name: a0 });
var _forTrack08 = ($index, $item) => $item.id;
function SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.childCount(group_r2), " ");
  }
}
function SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-70", group_r2.id !== ctx_r2.selected_group()?.id)("opacity-90", group_r2.id === ctx_r2.selected_group()?.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r2.description, " ");
  }
}
function SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Template_button_click_0_listener() {
      const group_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectGroup(group_r2));
    });
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_7_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_8_Template, 2, 5, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-primary", group_r2.id === ctx_r2.selected_group()?.id)("text-primary-content", group_r2.id === ctx_r2.selected_group()?.id)("hover:bg-base-200", group_r2.id !== ctx_r2.selected_group()?.id);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 10, "SIGNAGE_MANAGER.OPEN_GROUP", \u0275\u0275pureFunction1(15, _c06, group_r2.name || group_r2.id)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", group_r2.name || \u0275\u0275pipeBind1(6, 13, "SIGNAGE_MANAGER.UNNAMED_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.childCount(group_r2) > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r2.description ? 8 : -1);
  }
}
function SignageGroupListComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Template, 9, 17, "button", 9, _forTrack08);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filtered_groups());
  }
}
function SignageGroupListComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 17);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_GROUPS"));
  }
}
function SignageGroupListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignageGroupListComponent_Conditional_7_Conditional_0_Template, 2, 0)(1, SignageGroupListComponent_Conditional_7_Conditional_1_Template, 6, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.filtered_groups().length ? 0 : 1);
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setExpanded(row_r6.group, !ctx_r2.isExpanded(row_r6.group));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "icon", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", ctx_r2.isExpanded(row_r6.group))("aria-label", \u0275\u0275pipeBind2(1, 3, ctx_r2.isExpanded(row_r6.group) ? "SIGNAGE_MANAGER.COLLAPSE_GROUP" : "SIGNAGE_MANAGER.EXPAND_GROUP", \u0275\u0275pureFunction1(6, _c06, row_r6.group.name || row_r6.group.id)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(row_r6.group) ? "expand_more" : "chevron_right", " ");
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.childCount(row_r6.group), " ");
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", row_r6.group.id !== ctx_r2.selected_group()?.id)("opacity-90", row_r6.group.id === ctx_r2.selected_group()?.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.group.description, " ");
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-tree-node", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275conditionalCreate(2, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_2_Template, 4, 8, "button", 21)(3, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_3_Template, 1, 0, "div", 22);
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275listener("click", function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Template_button_click_4_listener() {
      const row_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectGroup(row_r6.group));
    });
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_10_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_11_Template, 2, 5, "div", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", row_r6.group.id === ctx_r2.selected_group()?.id)("text-primary-content", row_r6.group.id === ctx_r2.selected_group()?.id)("hover:bg-base-200", row_r6.group.id !== ctx_r2.selected_group()?.id);
    \u0275\u0275property("cdkTreeNodePadding", row_r6.level)("cdkTreeNodePaddingIndent", 8);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * row_r6.level + "rem")("opacity", 0.1 * row_r6.level);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.childCount(row_r6.group) > 0 ? 2 : 3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", row_r6.group.name || \u0275\u0275pipeBind1(9, 16, "SIGNAGE_MANAGER.UNNAMED_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.childCount(row_r6.group) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.group.description ? 11 : -1);
  }
}
function SignageGroupListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-tree", 5);
    \u0275\u0275template(1, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Template, 12, 18, "cdk-tree-node", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r2.visible_group_rows())("levelAccessor", ctx_r2.levelAccessor)("trackBy", ctx_r2.trackByRow)("expansionKey", ctx_r2.expansionKey);
  }
}
function SignageGroupListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.GROUPS_LOAD_ERROR"), " ");
  }
}
function SignageGroupListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_MANAGEABLE_GROUPS"), " ");
  }
}
var SignageGroupListComponent = class _SignageGroupListComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this.groups = this._group_admin.manageable_signage_groups;
    this.groups_failed = this._group_admin.manageable_signage_groups_failed;
    this.selected_group = this._group_admin.managed_group;
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded_groups = this._group_admin.signage_group_tree_expanded;
    this.show_search_results = computed(
      () => !!this.search().trim(),
      ...ngDevMode ? [{ debugName: "show_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levelAccessor = (row) => row.level;
    this.trackByRow = (_2, row) => row.group.id;
    this.expansionKey = (row) => row.group.id;
    this.child_lookup = computed(
      () => {
        const lookup = {};
        for (const group of this.groups()) {
          if (!group.parent_id)
            continue;
          lookup[group.parent_id] ||= [];
          lookup[group.parent_id].push(group);
        }
        for (const group_id in lookup) {
          lookup[group_id].sort((a, b) => a.name.localeCompare(b.name));
        }
        return lookup;
      },
      ...ngDevMode ? [{ debugName: "child_lookup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_groups = computed(
      () => {
        const search = this.search().toLowerCase();
        const groups = this.groups();
        if (!search)
          return [];
        return groups.filter((group) => group.name.toLowerCase().includes(search) || (group.description || "").toLowerCase().includes(search) || group.id.toLowerCase().includes(search));
      },
      ...ngDevMode ? [{ debugName: "filtered_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_group_rows = computed(
      () => {
        const groups = this.groups();
        const lookup = this.child_lookup();
        const expanded = this.expanded_groups();
        const ids = new Set(groups.map(({ id }) => id));
        const rows = [];
        const seen = /* @__PURE__ */ new Set();
        const visit = (group, level) => {
          if (seen.has(group.id))
            return;
          seen.add(group.id);
          rows.push({ group, level });
          if (!expanded[group.id])
            return;
          for (const child of lookup[group.id] || [])
            visit(child, level + 1);
        };
        for (const group of groups) {
          if (!group.parent_id || !ids.has(group.parent_id))
            visit(group, 0);
        }
        return rows;
      },
      ...ngDevMode ? [{ debugName: "visible_group_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const groups = this.groups();
      const selected_group = this.selected_group();
      if (this.show_search_results() || !selected_group?.id)
        return;
      untracked(() => this._expandPath(selected_group, groups));
    });
  }
  setExpanded(group, expanded) {
    this.expanded_groups.update((state) => __spreadProps(__spreadValues({}, state), {
      [group.id]: expanded
    }));
  }
  isExpanded(group) {
    return !!this.expanded_groups()[group.id];
  }
  childCount(group) {
    return this.child_lookup()[group.id]?.length || 0;
  }
  selectGroup(group) {
    this._group_admin.managed_group_id.set(group.id);
  }
  // Expands the ancestors of the group, and the group itself when it has
  // children
  _expandPath(group, groups) {
    const path = groupHierarchy(group, groups);
    if (!this.childCount(group))
      path.pop();
    const state = this.expanded_groups();
    if (path.every(({ id }) => state[id]))
      return;
    const next_state = __spreadValues({}, state);
    for (const { id } of path)
      next_state[id] = true;
    this.expanded_groups.set(next_state);
  }
  static {
    this.\u0275fac = function SignageGroupListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupListComponent, selectors: [["signage-group-list"]], decls: 11, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "flex", "h-full", "min-w-64", "flex-col", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "id", "group-search", "name", "group-search", 3, "ngModelChange", "placeholder", "ngModel"], [1, "min-h-0", "flex-1", "overflow-auto"], [1, "group-tree", 3, "dataSource", "levelAccessor", "trackBy", "expansionKey"], ["role", "alert", 1, "text-error", "p-6", "text-center"], [1, "p-6", "text-center", "opacity-60"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["type", "button", "matRipple", "", 1, "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200"], ["type", "button", "matRipple", "", 1, "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "transition-colors", 3, "click"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mt-0.5", "truncate", "text-xs"], [1, "text-6xl"], ["cdkTreeNodePadding", "", "class", "border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "bg-primary", "text-primary-content", "hover:bg-base-200", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", 1, "border-base-300", "bg-base-200/30", "relative", "flex", "min-h-0", "items-center", "gap-2", "border-b", "pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent"], [1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors"], [1, "min-w-8"], ["type", "button", "matRipple", "", 1, "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-md", "py-3", "text-left", "transition-colors", 3, "click"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xl"]], template: function SignageGroupListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "header", 1)(2, "mat-form-field", 2)(3, "input", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SignageGroupListComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "section", 4);
        \u0275\u0275conditionalCreate(7, SignageGroupListComponent_Conditional_7_Template, 2, 1)(8, SignageGroupListComponent_Conditional_8_Template, 2, 4, "cdk-tree", 5)(9, SignageGroupListComponent_Conditional_9_Template, 3, 3, "div", 6)(10, SignageGroupListComponent_Conditional_10_Template, 3, 3, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_group());
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.SEARCH_GROUPS"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 8, "SIGNAGE_MANAGER.GROUPS_SEARCH_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.show_search_results() ? 7 : ctx.visible_group_rows().length ? 8 : ctx.groups_failed() ? 9 : 10);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      CdkTreeModule,
      CdkTreeNodeDef,
      CdkTreeNodePadding,
      CdkTree,
      CdkTreeNode,
      IconComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.group-tree[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=signage-group-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupListComponent, [{
    type: Component,
    args: [{ selector: "signage-group-list", template: `
        <aside
            class="bg-base-100 border-base-300 flex h-full min-w-64 flex-col overflow-auto border-r sm:max-w-80"
            [class.mobile-hidden]="!!selected_group()"
        >
            <header class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        id="group-search"
                        name="group-search"
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_GROUPS' | translate
                        "
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.GROUPS_SEARCH_ARIA' | translate
                        "
                    />
                </mat-form-field>
            </header>
            <section class="min-h-0 flex-1 overflow-auto">
                @if (show_search_results()) {
                    @if (filtered_groups().length) {
                        @for (group of filtered_groups(); track group.id) {
                            <button
                                type="button"
                                matRipple
                                class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left transition-colors"
                                [class.bg-primary]="
                                    group.id === selected_group()?.id
                                "
                                [class.text-primary-content]="
                                    group.id === selected_group()?.id
                                "
                                [class.hover:bg-base-200]="
                                    group.id !== selected_group()?.id
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.OPEN_GROUP'
                                        | translate
                                            : { name: group.name || group.id }
                                "
                                (click)="selectGroup(group)"
                            >
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 flex-1 truncate font-medium"
                                        >
                                            {{
                                                group.name ||
                                                    ('SIGNAGE_MANAGER.UNNAMED_GROUP'
                                                        | translate)
                                            }}
                                        </div>
                                        @if (childCount(group) > 0) {
                                            <span
                                                class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {{ childCount(group) }}
                                            </span>
                                        }
                                    </div>
                                    @if (group.description) {
                                        <div
                                            class="mt-0.5 truncate text-xs"
                                            [class.opacity-70]="
                                                group.id !==
                                                selected_group()?.id
                                            "
                                            [class.opacity-90]="
                                                group.id ===
                                                selected_group()?.id
                                            "
                                        >
                                            {{ group.description }}
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                        >
                            <icon class="text-6xl">group</icon>
                            <p>{{ 'SIGNAGE_MANAGER.NO_GROUPS' | translate }}</p>
                        </div>
                    }
                } @else if (visible_group_rows().length) {
                    <cdk-tree
                        class="group-tree"
                        [dataSource]="visible_group_rows()"
                        [levelAccessor]="levelAccessor"
                        [trackBy]="trackByRow"
                        [expansionKey]="expansionKey"
                    >
                        <cdk-tree-node
                            *cdkTreeNodeDef="let row"
                            cdkTreeNodePadding
                            [cdkTreeNodePadding]="row.level"
                            [cdkTreeNodePaddingIndent]="8"
                            class="border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2"
                            [class.bg-primary]="
                                row.group.id === selected_group()?.id
                            "
                            [class.text-primary-content]="
                                row.group.id === selected_group()?.id
                            "
                            [class.hover:bg-base-200]="
                                row.group.id !== selected_group()?.id
                            "
                        >
                            <div
                                class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                                [style.width]="0.25 * row.level + 'rem'"
                                [style.opacity]="0.1 * row.level"
                            ></div>
                            @if (childCount(row.group) > 0) {
                                <button
                                    type="button"
                                    class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                    [attr.aria-expanded]="isExpanded(row.group)"
                                    [attr.aria-label]="
                                        (isExpanded(row.group)
                                            ? 'SIGNAGE_MANAGER.COLLAPSE_GROUP'
                                            : 'SIGNAGE_MANAGER.EXPAND_GROUP'
                                        )
                                            | translate
                                                : {
                                                      name:
                                                          row.group.name ||
                                                          row.group.id,
                                                  }
                                    "
                                    (click)="
                                        setExpanded(
                                            row.group,
                                            !isExpanded(row.group)
                                        );
                                        $event.stopPropagation()
                                    "
                                >
                                    <icon class="text-xl">
                                        {{
                                            isExpanded(row.group)
                                                ? 'expand_more'
                                                : 'chevron_right'
                                        }}
                                    </icon>
                                </button>
                            } @else {
                                <div class="min-w-8"></div>
                            }
                            <button
                                type="button"
                                matRipple
                                class="flex min-w-0 flex-1 items-center gap-3 rounded-md py-3 text-left transition-colors"
                                (click)="selectGroup(row.group)"
                            >
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="min-w-0 flex-1 truncate font-medium"
                                        >
                                            {{
                                                row.group.name ||
                                                    ('SIGNAGE_MANAGER.UNNAMED_GROUP'
                                                        | translate)
                                            }}
                                        </div>
                                        @if (childCount(row.group)) {
                                            <span
                                                class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {{ childCount(row.group) }}
                                            </span>
                                        }
                                    </div>
                                    @if (row.group.description) {
                                        <div
                                            class="mt-0.5 truncate text-xs"
                                            [class.opacity-70]="
                                                row.group.id !==
                                                selected_group()?.id
                                            "
                                            [class.opacity-90]="
                                                row.group.id ===
                                                selected_group()?.id
                                            "
                                        >
                                            {{ row.group.description }}
                                        </div>
                                    }
                                </div>
                            </button>
                        </cdk-tree-node>
                    </cdk-tree>
                } @else if (groups_failed()) {
                    <div class="text-error p-6 text-center" role="alert">
                        {{ 'SIGNAGE_MANAGER.GROUPS_LOAD_ERROR' | translate }}
                    </div>
                } @else {
                    <div class="p-6 text-center opacity-60">
                        {{ 'SIGNAGE_MANAGER.NO_MANAGEABLE_GROUPS' | translate }}
                    </div>
                }
            </section>
        </aside>
    `, imports: [
      FormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      CdkTreeModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;745ad85bcadd79f327d702e322698d8807a2eba30d7e80d85d554a7d2db28a20;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/signage-group-list.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n.group-tree {\n  background: transparent;\n}\n/*# sourceMappingURL=signage-group-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupListComponent, { className: "SignageGroupListComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-list.component.ts", lineNumber: 264 });
})();

// apps/signage-manager/src/app/groups/signage-group-tabs.component.ts
var _forTrack09 = ($index, $item) => $item.id;
function SignageGroupTabsComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 2);
    \u0275\u0275domListener("click", function SignageGroupTabsComponent_For_3_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active_tab.set(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-b-2", ctx_r2.active_tab() === tab_r2.id)("text-primary", ctx_r2.active_tab() === tab_r2.id)("opacity-60", ctx_r2.active_tab() !== tab_r2.id);
    \u0275\u0275domProperty("id", "group-" + tab_r2.id + "-tab");
    \u0275\u0275attribute("aria-selected", ctx_r2.active_tab() === tab_r2.id)("aria-controls", "group-" + tab_r2.id + "-panel")("tabindex", ctx_r2.active_tab() === tab_r2.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 11, tab_r2.label), " ");
  }
}
var SignageGroupTabsComponent = class _SignageGroupTabsComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this._element = inject(ElementRef);
    this.active_tab = this._group_admin.managed_group_tab;
    this.tabs = [
      { id: "users", label: "SIGNAGE_MANAGER.TAB_USERS" },
      { id: "zones", label: "SIGNAGE_MANAGER.TAB_ZONES" }
    ];
  }
  /** Arrow keys, Home and End move between the tabs, as in a tab list */
  onKeydown(event) {
    const index = this.tabs.findIndex(({ id }) => id === this.active_tab());
    const last = this.tabs.length - 1;
    const targets = {
      ArrowLeft: index > 0 ? index - 1 : last,
      ArrowRight: index < last ? index + 1 : 0,
      Home: 0,
      End: last
    };
    const next = targets[event.key];
    if (next === void 0)
      return;
    event.preventDefault();
    const tab = this.tabs[next].id;
    this.active_tab.set(tab);
    this._element.nativeElement.querySelector(`#group-${tab}-tab`)?.focus();
  }
  static {
    this.\u0275fac = function SignageGroupTabsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupTabsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupTabsComponent, selectors: [["signage-group-tabs"]], decls: 4, vars: 3, consts: [["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "mt-2", "flex", "overflow-hidden", "rounded-lg", "border", 3, "keydown"], ["type", "button", "role", "tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "border-b-2", "text-primary", "opacity-60", "id"], ["type", "button", "role", "tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click", "id"]], template: function SignageGroupTabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275domListener("keydown", function SignageGroupTabsComponent_Template_div_keydown_0_listener($event) {
          return ctx.onKeydown($event);
        });
        \u0275\u0275repeaterCreate(2, SignageGroupTabsComponent_For_3_Template, 3, 13, "button", 1, _forTrack09);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.GROUP_DETAILS_TABS"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs);
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupTabsComponent, [{
    type: Component,
    args: [{
      selector: "signage-group-tabs",
      imports: [TranslatePipe],
      template: `
        <div
            role="tablist"
            class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
            [attr.aria-label]="'SIGNAGE_MANAGER.GROUP_DETAILS_TABS' | translate"
            (keydown)="onKeydown($event)"
        >
            @for (tab of tabs; track tab.id) {
                <button
                    type="button"
                    role="tab"
                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                    [class.border-b-2]="active_tab() === tab.id"
                    [class.text-primary]="active_tab() === tab.id"
                    [class.opacity-60]="active_tab() !== tab.id"
                    (click)="active_tab.set(tab.id)"
                    [attr.aria-selected]="active_tab() === tab.id"
                    [attr.aria-controls]="'group-' + tab.id + '-panel'"
                    [attr.tabindex]="active_tab() === tab.id ? 0 : -1"
                    [id]="'group-' + tab.id + '-tab'"
                >
                    {{ tab.label | translate }}
                </button>
            }
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupTabsComponent, { className: "SignageGroupTabsComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-tabs.component.ts", lineNumber: 37 });
})();

// apps/signage-manager/src/app/groups/groups.component.ts
function GroupsSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-group-detail-header")(1, "signage-group-tabs", 6)(2, "signage-group-content", 7);
  }
}
function GroupsSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.GROUPS_SELECT_PROMPT"), " ");
  }
}
var GroupsSectionComponent = class _GroupsSectionComponent {
  constructor() {
    this._group_admin = inject(SignageGroupAdminService);
    this.selected_group = this._group_admin.managed_group;
  }
  static {
    this.\u0275fac = function GroupsSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupsSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupsSectionComponent, selectors: [["groups-section"]], decls: 10, vars: 3, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "min-h-0", "flex-1", "flex-row", "overflow-hidden"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], [1, "flex", "h-full", "items-center", "justify-center", "p-8", "text-center", "opacity-60"], [1, "lg:hidden"], [1, "h-1/2", "flex-1"]], template: function GroupsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "signage-group-header");
        \u0275\u0275elementStart(4, "main", 3);
        \u0275\u0275element(5, "signage-group-list");
        \u0275\u0275elementStart(6, "section", 4);
        \u0275\u0275conditionalCreate(7, GroupsSectionComponent_Conditional_7_Template, 3, 0)(8, GroupsSectionComponent_Conditional_8_Template, 3, 3, "div", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(9, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_group());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_group() ? 7 : 8);
      }
    }, dependencies: [
      NavSidebarComponent,
      NavFooterComponent,
      SignageGroupHeaderComponent,
      SignageGroupListComponent,
      SignageGroupDetailHeaderComponent,
      SignageGroupTabsComponent,
      SignageGroupContentComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=groups.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupsSectionComponent, [{
    type: Component,
    args: [{ selector: "groups-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <signage-group-header />
                <main class="flex min-h-0 flex-1 flex-row overflow-hidden">
                    <signage-group-list />
                    <section
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_group()"
                    >
                        @if (selected_group()) {
                            <signage-group-detail-header />
                            <signage-group-tabs class="lg:hidden" />
                            <signage-group-content class="h-1/2 flex-1" />
                        } @else {
                            <div
                                class="flex h-full items-center justify-center p-8 text-center opacity-60"
                            >
                                {{
                                    'SIGNAGE_MANAGER.GROUPS_SELECT_PROMPT'
                                        | translate
                                }}
                            </div>
                        }
                    </section>
                </main>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      SignageGroupHeaderComponent,
      SignageGroupListComponent,
      SignageGroupDetailHeaderComponent,
      SignageGroupTabsComponent,
      SignageGroupContentComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;c28551d2d384d0d1d1e717f77dc6df279e33f2786ca961b7b245eb08af27e58f;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/groups.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=groups.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupsSectionComponent, { className: "GroupsSectionComponent", filePath: "apps/signage-manager/src/app/groups/groups.component.ts", lineNumber: 65 });
})();
export {
  GroupsSectionComponent
};
//# debugId=083129df-f16f-5160-bf14-69cf8a46d6f5
//# sourceMappingURL=groups.component-5XTF6QF2.js.map
