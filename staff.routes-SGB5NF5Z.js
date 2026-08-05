import {
  SearchbarComponent
} from "./chunk-LCNAFHBJ.js";
import {
  LevelPipe
} from "./chunk-M3PSXVDZ.js";
import {
  openConfirmModal
} from "./chunk-FNGWA7HX.js";
import {
  UserSearchFieldComponent
} from "./chunk-2OGMQKBS.js";
import {
  searchStaff
} from "./chunk-CLY5NWME.js";
import "./chunk-LFAUXW4K.js";
import {
  SimpleTableComponent
} from "./chunk-PNCHVNON.js";
import {
  queryAssets,
  saveAsset,
  saveAssetCategory,
  saveAssetType
} from "./chunk-E4TI577H.js";
import {
  checkinBooking,
  queryBookings,
  saveBooking
} from "./chunk-36SJ3IUX.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  UserAvatarComponent
} from "./chunk-YDQQEQ6L.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-MCE4LRJY.js";
import {
  ActivatedRoute,
  AsyncHandler,
  BidiModule,
  ChangeDetectorRef,
  Clipboard,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FormField,
  FormsModule,
  HostAttributeToken,
  IconComponent,
  Injectable,
  InjectionToken,
  Input,
  MAT_DIALOG_DATA,
  MINUTES,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  Qu,
  Router,
  TranslatePipe,
  ViewChild,
  ViewEncapsulation,
  Vs,
  Wu,
  Xh,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  ar,
  booleanAttribute,
  cl,
  computed,
  effect,
  endOfDay,
  form,
  forwardRef,
  getUnixTime,
  i18n,
  inject,
  input,
  notifyError,
  notifySuccess,
  numberAttribute,
  randomString,
  setClassMetadata,
  signal,
  sl,
  startOfDay,
  timePeriodsIntersect,
  unique,
  untracked,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-DN5DJS3N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/action-icon.component.ts
var _c0 = ["*"];
function ActionIconComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("state center " + ctx_r0.state());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.state() === "success" ? "done" : "close", " ");
  }
}
function ActionIconComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 16);
  }
}
var ActionIconComponent = class _ActionIconComponent {
  constructor() {
    this.icon = input(
      void 0,
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.className = input(
      "material-symbols-rounded",
      ...ngDevMode ? [{ debugName: "className" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.content = input(
      void 0,
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = input(
      void 0,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = input(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = input(
      "",
      ...ngDevMode ? [{ debugName: "state" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ActionIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionIconComponent, selectors: [["action-icon"]], inputs: { icon: [1, "icon"], className: [1, "className"], content: [1, "content"], loading: [1, "loading"], disabled: [1, "disabled"], state: [1, "state"] }, ngContentSelectors: _c0, decls: 6, vars: 8, consts: [["icon", "", "matRipple", "", "title", "", 1, "relative", 3, "disabled"], ["root", "", 3, "className", "icon"], [3, "class"], [1, "loader", "center"], [3, "diameter"]], template: function ActionIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0)(1, "icon", 1);
        \u0275\u0275text(2);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, ActionIconComponent_Conditional_4_Template, 3, 3, "div", 2);
        \u0275\u0275conditionalCreate(5, ActionIconComponent_Conditional_5_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("success", ctx.state() === "success");
        \u0275\u0275property("disabled", ctx.loading() || ctx.disabled());
        \u0275\u0275advance();
        \u0275\u0275property("className", ctx.className())("icon", ctx.icon());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.content(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() && ctx.state() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 5 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner, IconComponent], styles: ["\n.action-icon.fade[_ngcontent-%COMP%]    > icon[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.success[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.state.success[_ngcontent-%COMP%] {\n  color: #388e3c;\n}\n.state.error[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n/*# sourceMappingURL=action-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionIconComponent, [{
    type: Component,
    args: [{ selector: "action-icon", template: `
        <button
            icon
            matRipple
            class="relative"
            [class.success]="state() === 'success'"
            [disabled]="loading() || disabled()"
            title=""
        >
            <icon root [className]="className()" [icon]="icon()">
                {{ content() }}
                <ng-content></ng-content>
            </icon>
            @if (!loading() && state()) {
                <div [class]="'state center ' + state()">
                    <icon>
                        {{ state() === 'success' ? 'done' : 'close' }}
                    </icon>
                </div>
            }
            @if (loading()) {
                <div class="loader center">
                    <mat-spinner [diameter]="16"></mat-spinner>
                </div>
            }
        </button>
    `, imports: [MatRippleModule, MatProgressSpinnerModule, IconComponent], styles: ["/* angular:styles/component:css;b8b598f3214339d05c91670c4bd62467b437021489d75867c3253d6846a37dde;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/action-icon.component.ts */\n.action-icon.fade > icon {\n  opacity: 0.35;\n}\n.success {\n  pointer-events: none;\n}\n.success icon[root] {\n  opacity: 0.2;\n}\n.state.success {\n  color: #388e3c;\n}\n.state.error {\n  color: #e53935;\n}\n/*# sourceMappingURL=action-icon.component.css.map */\n"] }]
  }], null, { icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], className: [{ type: Input, args: [{ isSignal: true, alias: "className", required: false }] }], content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionIconComponent, { className: "ActionIconComponent", filePath: "libs/components/src/lib/action-icon.component.ts", lineNumber: 61 });
})();

// apps/concierge/src/app/staff/emergency-contacts.service.ts
var EMERGENCY_CONTACTS_CATEGORY_NAME = "_EMERGENCY_CONTACTS_";
var EmergencyContactsService = class _EmergencyContactsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._change = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.category = signal(
      null,
      ...ngDevMode ? [{ debugName: "category" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.asset_type = signal(
      null,
      ...ngDevMode ? [{ debugName: "asset_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.contacts = signal(
      [],
      ...ngDevMode ? [{ debugName: "contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.roles = signal(
      [],
      ...ngDevMode ? [{ debugName: "roles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const bld = this._org.active_building();
      this._change();
      if (!bld)
        return;
      this._load(bld);
    });
    this.ensureCategoryAndTypeExist();
  }
  /** Load category, asset type, roles and contacts for the active building */
  async _load(bld) {
    const category = await this._queryCategory(bld);
    this.category.set(category);
    this.roles.set(this._rolesFromCategory(category));
    const asset_type = await this._queryAssetType(bld, category);
    this.asset_type.set(asset_type);
    const contacts = await this._queryContacts(bld, asset_type);
    this.contacts.set(contacts);
  }
  /** Query the hidden emergency contacts category for a building */
  async _queryCategory(bld) {
    try {
      const { data } = await cl({
        zone_id: bld.id
      });
      return data.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME) || null;
    } catch {
      return null;
    }
  }
  /** Query the emergency contacts asset type for a building/category */
  async _queryAssetType(bld, category) {
    if (!category)
      return null;
    try {
      const { data } = await sl({
        zone_id: bld.id,
        q: category.name
      });
      return data.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id) || null;
    } catch {
      return null;
    }
  }
  /** Query the emergency contacts for a building/asset type */
  async _queryContacts(bld, asset_type) {
    if (!asset_type)
      return [];
    try {
      const { data } = await queryAssets({
        zone_id: bld.id,
        type_id: asset_type.id,
        limit: 200
      });
      return data.filter((a) => a.asset_type_id === asset_type.id).map((a) => this.assetToContact(a));
    } catch {
      return [];
    }
  }
  /** Extract roles list from a category description */
  _rolesFromCategory(category) {
    if (!category?.description)
      return [];
    try {
      const data = JSON.parse(category.description);
      return data.roles || [];
    } catch {
      return [];
    }
  }
  /** Legacy metadata fallback - used for migration */
  async _queryLegacyMetadata(bld) {
    try {
      const { details } = await Wu(bld.id, "emergency_contacts");
      return details || {
        contacts: [],
        roles: []
      };
    } catch {
      return { contacts: [], roles: [] };
    }
  }
  /** Ensure the hidden category exists, create if not */
  async ensureCategoryExists() {
    await this._org.waitUntilInitialised();
    const bld = this._org.building;
    if (!bld)
      return null;
    const existing = await this._queryCategory(bld);
    if (existing)
      return existing;
    try {
      const new_category = await saveAssetCategory(Vs(new ar({
        name: EMERGENCY_CONTACTS_CATEGORY_NAME,
        description: JSON.stringify({ roles: [] }),
        hidden: true
      }), [0, void 0, "", null]));
      this._change.set(Date.now());
      return new_category;
    } catch (e) {
      console.error("Failed to create emergency contacts category:", e);
      return null;
    }
  }
  /** Ensure the asset type exists, create if not */
  async ensureAssetTypeExists(category) {
    const bld = this._org.building;
    if (!bld || !category)
      return null;
    const existing = await this._queryAssetType(bld, category);
    if (existing)
      return existing;
    try {
      const new_group = await saveAssetType({
        name: EMERGENCY_CONTACTS_CATEGORY_NAME,
        category_id: category.id,
        zone_id: bld.id,
        brand: "PlaceOS",
        description: "Emergency contacts for the building"
      });
      this._change.set(Date.now());
      return new_group;
    } catch (e) {
      console.error("Failed to create emergency contacts asset type:", e);
      return null;
    }
  }
  /** Ensure both category and asset type exist */
  async ensureCategoryAndTypeExist() {
    const category = await this.ensureCategoryExists();
    if (!category)
      return null;
    return this.ensureAssetTypeExists(category);
  }
  /** Migrate existing metadata contacts to Assets API */
  async migrateFromMetadata() {
    const bld = this._org.building;
    if (!bld)
      return false;
    try {
      const legacy_data = await this._queryLegacyMetadata(bld);
      if (!legacy_data?.contacts?.length && !legacy_data?.roles?.length) {
        return true;
      }
      const asset_type = await this.ensureCategoryAndTypeExist();
      if (!asset_type) {
        throw new Error("Failed to create or find asset type");
      }
      const category = await this._queryCategory(bld);
      if (!category) {
        throw new Error("Failed to find category");
      }
      if (legacy_data.roles?.length) {
        await saveAssetCategory(Vs(new ar(__spreadProps(__spreadValues({}, category), {
          hidden: true,
          description: JSON.stringify({
            roles: legacy_data.roles
          })
        })), [0, null, void 0, ""]));
      }
      for (const contact of legacy_data.contacts || []) {
        const asset = this.contactToAsset(contact, asset_type.id);
        await saveAsset(asset);
      }
      await Qu(bld.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts (migrated to Assets)",
        details: { contacts: [], roles: [], migrated: true }
      });
      this._change.set(Date.now());
      notifySuccess(i18n("APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS") || "Successfully migrated emergency contacts.");
      return true;
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.CONTACTS_MIGRATION_ERROR", { error: e }) || `Failed to migrate emergency contacts: ${e}`);
      return false;
    }
  }
  /** Check if migration is needed */
  async needsMigration() {
    const bld = this._org.building;
    if (!bld)
      return false;
    const legacy_data = await this._queryLegacyMetadata(bld);
    if (legacy_data && (legacy_data.contacts?.length > 0 || legacy_data.roles?.length > 0)) {
      if (legacy_data.migrated)
        return false;
      return true;
    }
    return false;
  }
  /** Save or update an emergency contact */
  async saveContact(contact) {
    try {
      let asset_type = this.asset_type();
      if (!asset_type) {
        asset_type = await this.ensureCategoryAndTypeExist();
      }
      if (!asset_type) {
        throw new Error("Failed to create or find asset type");
      }
      const asset = this.contactToAsset(contact, asset_type.id);
      await saveAsset(asset);
      this._change.set(Date.now());
      notifySuccess(i18n("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS"));
      return true;
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.CONTACTS_SAVE_ERROR", { error: e }));
      return false;
    }
  }
  /** Delete an emergency contact */
  async deleteContact(contact_id) {
    try {
      await Xh(contact_id);
      this._change.set(Date.now());
      notifySuccess(i18n("APP.CONCIERGE.CONTACTS_DELETE_SUCCESS") || "Successfully removed emergency contact.");
      return true;
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.CONTACTS_DELETE_ERROR", { error: e }) || `Failed to remove emergency contact: ${e}`);
      return false;
    }
  }
  /** Update roles list */
  async updateRoles(roles) {
    try {
      let category = this.category();
      if (!category) {
        category = await this.ensureCategoryExists();
      }
      if (!category) {
        throw new Error("Failed to create or find category");
      }
      await saveAssetCategory(new ar(__spreadProps(__spreadValues({}, category), {
        description: JSON.stringify({ roles })
      })));
      this._change.set(Date.now());
      return true;
    } catch (e) {
      notifyError(`Failed to update roles: ${e}`);
      return false;
    }
  }
  /** Add a new role */
  async addRole(role_name) {
    const roles = this.roles();
    if (roles.includes(role_name))
      return true;
    return this.updateRoles([...roles, role_name].filter(Boolean).sort((a, b) => a.localeCompare(b)));
  }
  /** Remove a role and update contacts that use it */
  async removeRole(role_name) {
    try {
      const roles = this.roles();
      const contacts = this.contacts();
      const new_roles = roles.filter((r) => r !== role_name);
      await this.updateRoles(new_roles);
      for (const contact of contacts) {
        if (contact.roles.includes(role_name)) {
          const updated_contact = __spreadProps(__spreadValues({}, contact), {
            roles: contact.roles.filter((r) => r !== role_name)
          });
          await this.saveContact(updated_contact);
        }
      }
      return true;
    } catch (e) {
      notifyError(`Failed to remove role: ${e}`);
      return false;
    }
  }
  /** Rename a role */
  async renameRole(old_name, new_name) {
    try {
      const roles = this.roles();
      const contacts = this.contacts();
      const new_roles = roles.map((r) => r === old_name ? new_name : r).filter(Boolean).sort((a, b) => a.localeCompare(b));
      await this.updateRoles(new_roles);
      for (const contact of contacts) {
        if (contact.roles.includes(old_name)) {
          const updated_contact = __spreadProps(__spreadValues({}, contact), {
            roles: contact.roles.map((r) => r === old_name ? new_name : r)
          });
          await this.saveContact(updated_contact);
        }
      }
      return true;
    } catch (e) {
      notifyError(`Failed to rename role: ${e}`);
      return false;
    }
  }
  /** Refresh data */
  refresh() {
    this._change.set(Date.now());
  }
  /** Convert Asset to EmergencyContact */
  assetToContact(asset) {
    const other_data = asset.other_data;
    const level = this._org.levelWithID(asset.zones);
    return {
      id: asset.id,
      name: asset.identifier || "",
      email: other_data?.email || "",
      phone: other_data?.phone || "",
      roles: other_data?.roles || [],
      zone: level?.id || ""
    };
  }
  /** Convert EmergencyContact to Asset */
  contactToAsset(contact, asset_type_id) {
    const level = contact.zone ? this._org.levelWithID([contact.zone]) : null;
    return {
      id: contact.id?.startsWith("contact-") ? void 0 : contact.id,
      asset_type_id,
      identifier: contact.name,
      other_data: {
        email: contact.email,
        phone: contact.phone,
        roles: contact.roles
      },
      zone_id: this._org.building.id,
      zones: unique([
        this._org.organisation.id,
        this._org.region?.id,
        this._org.building.id,
        level?.id
      ].filter((_) => _))
    };
  }
  /** Generate a new contact ID */
  generateContactId() {
    return `contact-${randomString(8)}`;
  }
  static {
    this.\u0275fac = function EmergencyContactsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmergencyContactsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmergencyContactsService, factory: _EmergencyContactsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyContactsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/staff/emergency-contact-modal.component.ts
var _c02 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function EmergencyContactModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EmergencyContactModalComponent_Conditional_5_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    \u0275\u0275property("value", level_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r3.display_name || level_r3.name, " ");
  }
}
function EmergencyContactModalComponent_Conditional_5_For_45_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", role_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r4, " ");
  }
}
function EmergencyContactModalComponent_Conditional_5_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmergencyContactModalComponent_Conditional_5_For_45_Conditional_0_Template, 2, 2, "mat-option", 20);
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275conditional(role_r4 ? 0 : -1);
  }
}
function EmergencyContactModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "form")(2, "a-user-search-field", 7);
    \u0275\u0275listener("ngModelChange", function EmergencyContactModalComponent_Conditional_5_Template_a_user_search_field_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setUser($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "div", 8)(4, "label", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 10);
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "label", 14);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 10);
    \u0275\u0275element(15, "input", 15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 10);
    \u0275\u0275element(22, "input", 16);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "label", 17);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-select", 18);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "mat-option", 19);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(34, EmergencyContactModalComponent_Conditional_5_For_35_Template, 2, 2, "mat-option", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 8)(37, "label", 21);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 12)(41, "mat-form-field", 22)(42, "mat-select", 23);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275repeaterCreate(44, EmergencyContactModalComponent_Conditional_5_For_45_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 24);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementStart(48, "button", 25)(49, "icon");
    \u0275\u0275text(50, "add");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c02));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 18, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.email)("placeholder", \u0275\u0275pipeBind1(16, 22, "FORM.EMAIL"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 24, "FORM.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.phone)("placeholder", \u0275\u0275pipeBind1(23, 26, "APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 28, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.zone)("placeholder", \u0275\u0275pipeBind1(30, 30, "COMMON.LEVEL_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 32, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 34, "APP.CONCIERGE.CONTACTS_ROLES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.roles)("placeholder", \u0275\u0275pipeBind1(43, 36, "APP.CONCIERGE.CONTACTS_ROLES_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.roles());
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(47, 38, "APP.CONCIERGE.CONTACTS_ROLES_ADD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", role_form_r5);
  }
}
function EmergencyContactModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.CONTACTS_SAVING"));
  }
}
function EmergencyContactModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 27);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
function EmergencyContactModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-form-field", 10)(2, "input", 29);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactModalComponent_ng_template_8_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_ng_template_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRole());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.role_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.CONTACTS_ROLES_NAME"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
  }
}
var EmergencyContactModalComponent = class _EmergencyContactModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._contacts_service = inject(EmergencyContactsService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.role_name = signal(
      "",
      ...ngDevMode ? [{ debugName: "role_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.contact = this._data;
    this.roles = this._contacts_service.roles;
    this.model = signal(
      {
        id: this._data?.id || this._contacts_service.generateContactId(),
        name: this._data?.name || "",
        email: this._data?.email || "",
        phone: this._data?.phone || "",
        zone: this._data?.zone || "",
        roles: this._data?.roles || []
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
    this.levels = this._org.active_levels;
    this._tooltip = viewChild(
      CustomTooltipComponent,
      ...ngDevMode ? [{ debugName: "_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async addRole() {
    const role_name = this.role_name().trim();
    if (!role_name)
      return;
    this._tooltip().close();
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    await this._contacts_service.addRole(role_name);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      roles: [...m.roles || [], role_name]
    }));
    this.role_name.set("");
    this.loading.set(false);
    this._dialog_ref.disableClose = false;
  }
  setUser(user) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || ""
    }));
  }
  async save() {
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const value = this.model();
    const contact = {
      id: value.id,
      name: value.name,
      email: value.email,
      phone: value.phone,
      zone: value.zone,
      roles: value.roles || []
    };
    const success = await this._contacts_service.saveContact(contact);
    this._dialog_ref.disableClose = false;
    this.loading.set(false);
    if (success) {
      this._dialog_ref.close();
    }
  }
  static {
    this.\u0275fac = function EmergencyContactModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmergencyContactModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactModalComponent, selectors: [["emergency-contact-modal"]], viewQuery: function EmergencyContactModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 10, vars: 6, consts: [["role_form", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-xl", "p-4"], ["loading", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "px-4", "py-2"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "placeholder", "Full name", 3, "formField"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "email"], ["matInput", "", "type", "email", 3, "formField", "placeholder"], ["matInput", "", "type", "tel", 3, "formField", "placeholder"], ["for", "zone"], [3, "formField", "placeholder"], ["value", ""], [3, "value"], ["for", "roles"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", 3, "formField", "placeholder"], [3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", 3, "content"], [1, "mb-4", 3, "diameter"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "bg-base-100", "rounded-sm", "p-4"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function EmergencyContactModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, EmergencyContactModalComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, EmergencyContactModalComponent_Conditional_5_Template, 51, 41, "main", 4)(6, EmergencyContactModalComponent_Conditional_6_Template, 5, 4, "main", 5);
        \u0275\u0275conditionalCreate(7, EmergencyContactModalComponent_Conditional_7_Template, 4, 3, "footer", 6);
        \u0275\u0275template(8, EmergencyContactModalComponent_ng_template_8_Template, 7, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.contact ? "APP.CONCIERGE.CONTACTS_EDIT" : "APP.CONCIERGE.CONTACTS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatRippleModule,
      MatRipple,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      FormField,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      CustomTooltipComponent,
      UserSearchFieldComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyContactModalComponent, [{
    type: Component,
    args: [{ selector: "emergency-contact-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (contact
                        ? 'APP.CONCIERGE.CONTACTS_EDIT'
                        : 'APP.CONCIERGE.CONTACTS_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="w-xl p-4">
                <form>
                    <a-user-search-field
                        ngModel
                        (ngModelChange)="setUser($event)"
                        [ngModelOptions]="{ standalone: true }"
                        class="mb-4"
                    ></a-user-search-field>
                    <div class="flex flex-col">
                        <label for="name">{{ 'FORM.NAME' | translate }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.name"
                                placeholder="Full name"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-1 flex-col">
                            <label for="email">{{
                                'FORM.EMAIL' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [formField]="form.email"
                                    type="email"
                                    [placeholder]="'FORM.EMAIL' | translate"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="email">{{
                                'FORM.PHONE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [formField]="form.phone"
                                    type="tel"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="zone">{{
                            'RESOURCE.LEVEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form.zone"
                                [placeholder]="
                                    'COMMON.LEVEL_SELECT' | translate
                                "
                            >
                                <mat-option value="">{{
                                    'COMMON.LEVEL_ANY' | translate
                                }}</mat-option>
                                @for (level of levels(); track level.id) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="roles">{{
                            'APP.CONCIERGE.CONTACTS_ROLES' | translate
                        }}</label>
                        <div class="flex items-center space-x-4">
                            <mat-form-field
                                class="no-subscript flex-1"
                                appearance="outline"
                            >
                                <mat-select
                                    multiple
                                    [formField]="form.roles"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_ROLES_SELECT'
                                            | translate
                                    "
                                >
                                    @for (role of roles(); track $index) {
                                        @if (role) {
                                            <mat-option [value]="role">
                                                {{ role }}
                                            </mat-option>
                                        }
                                    }
                                </mat-select>
                            </mat-form-field>
                            <div
                                [matTooltip]="
                                    'APP.CONCIERGE.CONTACTS_ROLES_ADD'
                                        | translate
                                "
                            >
                                <button
                                    icon
                                    default
                                    matRipple
                                    customTooltip
                                    [content]="role_form"
                                >
                                    <icon>add</icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        } @else {
            <main
                loading
                class="flex h-64 flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.CONTACTS_SAVING' | translate }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t px-4 py-2"
            >
                <button btn matRipple class="w-48" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <ng-template #role_form>
            <div class="bg-base-100 rounded-sm p-4">
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [(ngModel)]="role_name"
                        [placeholder]="
                            'APP.CONCIERGE.CONTACTS_ROLES_NAME' | translate
                        "
                    />
                </mat-form-field>
                <button btn matRipple class="w-full" (click)="addRole()">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_SAVE' | translate }}
                </button>
            </div>
        </ng-template>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRippleModule,
      FormsModule,
      FormField,
      MatProgressSpinnerModule,
      CustomTooltipComponent,
      UserSearchFieldComponent,
      MatTooltipModule
    ] }]
  }], null, { _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactModalComponent, { className: "EmergencyContactModalComponent", filePath: "apps/concierge/src/app/staff/emergency-contact-modal.component.ts", lineNumber: 217 });
})();

// apps/concierge/src/app/staff/role-management-modal.component.ts
var _forTrack02 = ($index, $item) => $item + $index;
function RoleManagementModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function RoleManagementModalComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function RoleManagementModalComponent_For_7_Template_button_click_3_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.active.set(role_r3);
      return \u0275\u0275resetView(ctx_r3.role_name.set(role_r3));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275listener("click", function RoleManagementModalComponent_For_7_Template_button_click_6_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeRole(role_r3));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r3);
    \u0275\u0275advance();
    \u0275\u0275property("content", role_form_r5);
  }
}
function RoleManagementModalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-form-field", 14)(2, "input", 15);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementModalComponent_ng_template_15_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.role_name, $event) || (ctx_r3.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_template_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateRoles());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.role_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.CONTACTS_ROLES_NAME"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
  }
}
var RoleManagementModalComponent = class _RoleManagementModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._contacts_service = inject(EmergencyContactsService);
    this.active = signal(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.role_name = signal(
      "",
      ...ngDevMode ? [{ debugName: "role_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.roles = this._contacts_service.roles;
    this._tooltip = viewChild(
      CustomTooltipComponent,
      ...ngDevMode ? [{ debugName: "_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async removeRole(role) {
    if (!role)
      return;
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    await this._contacts_service.removeRole(role);
    this.loading.set(false);
    this._dialog_ref.disableClose = false;
  }
  async updateRoles() {
    const role_name = this.role_name().trim();
    if (!role_name)
      return;
    this.loading.set(true);
    this._tooltip().close();
    this._dialog_ref.disableClose = true;
    if (this.active()) {
      await this._contacts_service.renameRole(this.active(), role_name);
    } else {
      await this._contacts_service.addRole(role_name);
    }
    this.role_name.set("");
    this.active.set("");
    this.loading.set(false);
    this._dialog_ref.disableClose = false;
  }
  static {
    this.\u0275fac = function RoleManagementModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoleManagementModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleManagementModalComponent, selectors: [["role-management-modal"]], viewQuery: function RoleManagementModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 17, vars: 8, consts: [["role_form", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-128", "max-h-[65vh]", "min-w-md", "overflow-y-auto"], [1, "hover:bg-base-200:bg-base-300", "border-base-200", "m-2", "flex", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "border-base-200", "border-t"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click", "content"], [1, "truncate", "pl-2"], [1, "text-2xl"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "content"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], [1, "bg-base-100", "rounded-sm", "p-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function RoleManagementModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, RoleManagementModalComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "main", 4);
        \u0275\u0275repeaterCreate(6, RoleManagementModalComponent_For_7_Template, 9, 2, "div", 5, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "footer", 6)(9, "button", 7);
        \u0275\u0275listener("click", function RoleManagementModalComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          ctx.active.set("");
          return \u0275\u0275resetView(ctx.role_name.set(""));
        });
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "icon", 9);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, RoleManagementModalComponent_ng_template_15_Template, 7, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const role_form_r5 = \u0275\u0275reference(16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.roles());
        \u0275\u0275advance(3);
        \u0275\u0275property("content", role_form_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleManagementModalComponent, [{
    type: Component,
    args: [{ selector: "role-management-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.CONTACTS_ROLES_MANAGE' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        <main class="h-128 max-h-[65vh] min-w-md overflow-y-auto">
            @for (role of roles(); track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 border-base-200 m-2 flex items-center space-x-2 rounded-sm border p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                        (click)="active.set(role); role_name.set(role)"
                        customTooltip
                        [content]="role_form"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="border-error text-error h-12 w-12 rounded-sm border"
                        (click)="removeRole(role)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer class="border-base-200 border-t">
            <button
                btn
                matRipple
                class="m-2 flex w-[calc(100%-1rem)] items-center justify-center space-x-2"
                customTooltip
                (click)="active.set(''); role_name.set('')"
                [content]="role_form"
            >
                <div class="truncate pl-2">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_ADD' | translate }}
                </div>
                <icon class="text-2xl">add</icon>
            </button>
        </footer>
        <ng-template #role_form>
            <div class="bg-base-100 rounded-sm p-4">
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [(ngModel)]="role_name"
                        [placeholder]="
                            'APP.CONCIERGE.CONTACTS_ROLES_NAME' | translate
                        "
                    />
                </mat-form-field>
                <button btn matRipple class="w-full" (click)="updateRoles()">
                    {{ 'APP.CONCIERGE.CONTACTS_ROLES_SAVE' | translate }}
                </button>
            </div>
        </ng-template>
    `, imports: [
      FormsModule,
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      IconComponent,
      CustomTooltipComponent
    ] }]
  }], null, { _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleManagementModalComponent, { className: "RoleManagementModalComponent", filePath: "apps/concierge/src/app/staff/role-management-modal.component.ts", lineNumber: 100 });
})();

// apps/concierge/src/app/staff/emergency-contacts.component.ts
var _c03 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "roles", name: a0, content: a1, sortable: false });
var _c2 = (a0, a1) => ({ key: "zone", name: a0, content: a1, sortable: false });
var _c3 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack03 = ($index, $item) => $item + $index;
function EmergencyContactsComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r2, " ");
  }
}
function EmergencyContactsComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_42_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyToClipboard(row_r4.email));
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
  }
}
function EmergencyContactsComponent_ng_template_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r6, " ");
  }
}
function EmergencyContactsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, EmergencyContactsComponent_ng_template_44_For_2_Template, 2, 1, "span", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r7);
  }
}
function EmergencyContactsComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r8 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r8 ? \u0275\u0275pipeBind1(2, 1, data_r8)?.display_name : "All", " ");
  }
}
function EmergencyContactsComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_48_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editContact(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_48_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeContact(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.CONTACTS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.CONTACTS_REMOVE"));
  }
}
var EmergencyContactsComponent = class _EmergencyContactsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
    this._contacts_service = inject(EmergencyContactsService);
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.role_filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "role_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.roles = this._contacts_service.roles;
    this.contacts = this._contacts_service.contacts;
    this.filtered_contacts = computed(
      () => {
        const role = this.role_filter();
        return this.contacts().filter((_) => !role || _.roles.includes(role));
      },
      ...ngDevMode ? [{ debugName: "filtered_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("User's email copied to clipboard.");
    };
  }
  ngOnInit() {
    this.checkMigration();
  }
  async checkMigration() {
    const needs_migration = await this._contacts_service.needsMigration();
    if (needs_migration) {
      const result = await openConfirmModal({
        title: "Migrate Emergency Contacts",
        content: "Emergency contacts data from the old system was found. Would you like to migrate it to the new system?",
        icon: { content: "sync" }
      }, this._dialog);
      if (result.reason === "done") {
        result.loading("Migrating contacts...");
        await this._contacts_service.migrateFromMetadata();
        result.close();
      } else {
        result.close();
      }
    }
  }
  manageRoles() {
    const ref = this._dialog.open(RoleManagementModalComponent, {});
    ref.afterClosed().subscribe(() => this._contacts_service.refresh());
  }
  editContact(contact) {
    const ref = this._dialog.open(EmergencyContactModalComponent, {
      data: contact
    });
    ref.afterClosed().subscribe(() => this._contacts_service.refresh());
  }
  async removeContact(contact) {
    const result = await openConfirmModal({
      title: "Remove Emergency Contact",
      content: `Are you sure you want to remove ${contact.name} from the emergency contacts?`,
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading("Removing contact...");
    await this._contacts_service.deleteContact(contact.id);
    result.close();
  }
  static {
    this.\u0275fac = function EmergencyContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmergencyContactsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactsComponent, selectors: [["", "app-emergency-contacts", ""]], decls: 50, vars: 49, consts: [["person_template", ""], ["roles_template", ""], ["zone_template", ""], ["actions_template", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["topbar", "", 1, "flex", "flex-col", "px-8", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "mt-2", "flex", "items-center", "justify-between", "py-2"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], [3, "value"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "block", "min-w-208", "text-sm", 3, "data", "filter", "empty_message", "columns", "sortable"], [1, "h-12", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "flex-wrap", "p-2"], [1, "bg-info", "text-info-content", "m-1", "rounded-2xl", "px-2", "py-1", "font-mono", "text-xs"], [1, "p-4"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "click", "matTooltip"]], template: function EmergencyContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 4);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 5)(4, "section", 6)(5, "div", 7)(6, "h2", 8);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9)(10, "mat-form-field", 10)(11, "icon", 11);
        \u0275\u0275text(12, " search ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 12);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactsComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 13);
        \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_15_listener() {
          return ctx.editContact();
        });
        \u0275\u0275elementStart(16, "icon", 14);
        \u0275\u0275text(17, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 16)(22, "mat-form-field", 10)(23, "mat-select", 17);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactsComponent_Template_mat_select_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.role_filter, $event) || (ctx.role_filter = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(25, "mat-option", 18);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, EmergencyContactsComponent_For_29_Template, 2, 2, "mat-option", 19, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 9)(31, "button", 20);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_31_listener() {
          return ctx.manageRoles();
        });
        \u0275\u0275elementStart(33, "icon");
        \u0275\u0275text(34, "list_alt");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "section", 21);
        \u0275\u0275element(36, "simple-table", 22);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275element(41, "div", 23);
        \u0275\u0275template(42, EmergencyContactsComponent_ng_template_42_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(44, EmergencyContactsComponent_ng_template_44_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(46, EmergencyContactsComponent_ng_template_46_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(48, EmergencyContactsComponent_ng_template_48_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const person_template_r11 = \u0275\u0275reference(43);
        const roles_template_r12 = \u0275\u0275reference(45);
        const zone_template_r13 = \u0275\u0275reference(47);
        const actions_template_r14 = \u0275\u0275reference(49);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 13, "APP.CONCIERGE.CONTACTS_HEADER"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 15, "APP.CONCIERGE.CONTACTS_FILTER"));
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 17, "APP.CONCIERGE.CONTACTS_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.role_filter);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 19, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 21, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.roles());
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(32, 23, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("data", ctx.filtered_contacts())("filter", ctx.search())("empty_message", \u0275\u0275pipeBind1(37, 25, ctx.search() ? "APP.CONCIERGE.CONTACTS_SEARCH_EMPTY" : "APP.CONCIERGE.CONTACTS_EMPTY"))("columns", \u0275\u0275pureFunction4(44, _c4, \u0275\u0275pureFunction2(33, _c03, \u0275\u0275pipeBind1(38, 27, "COMMON.PERSON"), person_template_r11), \u0275\u0275pureFunction2(36, _c1, \u0275\u0275pipeBind1(39, 29, "APP.CONCIERGE.CONTACTS_ROLES"), roles_template_r12), \u0275\u0275pureFunction2(39, _c2, \u0275\u0275pipeBind1(40, 31, "RESOURCE.LEVEL"), zone_template_r13), \u0275\u0275pureFunction1(42, _c3, actions_template_r14)))("sortable", true);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      SimpleTableComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe,
      LevelPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=emergency-contacts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyContactsComponent, [{
    type: Component,
    args: [{ selector: "[app-emergency-contacts]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <section topbar class="flex flex-col px-8 py-4">
                    <div class="flex items-center justify-between">
                        <h2 class="text-2xl font-medium">
                            {{ 'APP.CONCIERGE.CONTACTS_HEADER' | translate }}
                        </h2>
                        <div class="flex items-center space-x-2">
                            <mat-form-field
                                class="no-subscript"
                                appearance="outline"
                            >
                                <icon class="text-2xl" matPrefix> search </icon>
                                <input
                                    matInput
                                    [(ngModel)]="search"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_FILTER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                class="space-x-2"
                                (click)="editContact()"
                            >
                                <icon class="text-2xl">add</icon>
                                <div class="pr-2">
                                    {{
                                        'APP.CONCIERGE.CONTACTS_ADD' | translate
                                    }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center justify-between py-2">
                        <mat-form-field
                            class="no-subscript"
                            appearance="outline"
                        >
                            <mat-select
                                [(ngModel)]="role_filter"
                                [placeholder]="
                                    'APP.CONCIERGE.CONTACTS_ROLES_ALL'
                                        | translate
                                "
                            >
                                <mat-option value="">{{
                                    'APP.CONCIERGE.CONTACTS_ROLES_ALL'
                                        | translate
                                }}</mat-option>
                                @for (role of roles(); track role + $index) {
                                    <mat-option [value]="role">
                                        {{ role }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <div class="flex items-center space-x-2">
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.CONTACTS_ROLES_MANAGE'
                                        | translate
                                "
                                (click)="manageRoles()"
                            >
                                <icon>list_alt</icon>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="h-1/2 w-full flex-1 overflow-auto px-8">
                    <simple-table
                        class="block min-w-208 text-sm"
                        [data]="filtered_contacts()"
                        [filter]="search()"
                        [empty_message]="
                            (search()
                                ? 'APP.CONCIERGE.CONTACTS_SEARCH_EMPTY'
                                : 'APP.CONCIERGE.CONTACTS_EMPTY'
                            ) | translate
                        "
                        [columns]="[
                            {
                                key: 'name',
                                name: 'COMMON.PERSON' | translate,
                                content: person_template,
                            },
                            {
                                key: 'roles',
                                name:
                                    'APP.CONCIERGE.CONTACTS_ROLES' | translate,
                                content: roles_template,
                                sortable: false,
                            },
                            {
                                key: 'zone',
                                name: 'RESOURCE.LEVEL' | translate,
                                content: zone_template,
                                sortable: false,
                            },
                            {
                                key: 'actions',
                                name: ' ',
                                content: actions_template,
                                size: '6rem',
                                sortable: false,
                            },
                        ]"
                        [sortable]="true"
                    ></simple-table>
                    <div class="h-12 w-full"></div>
                    <ng-template #person_template let-row="row">
                        <button
                            class="px-4 py-2 text-left leading-tight"
                            (click)="copyToClipboard(row.email)"
                        >
                            <div class="">{{ row.name }}</div>
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ row.email }}
                            </div>
                        </button>
                    </ng-template>
                    <ng-template #roles_template let-data="data">
                        <div class="flex flex-wrap p-2">
                            @for (role of data; track role) {
                                <span
                                    class="bg-info text-info-content m-1 rounded-2xl px-2 py-1 font-mono text-xs"
                                >
                                    {{ role }}
                                </span>
                            }
                        </div>
                    </ng-template>
                    <ng-template #zone_template let-data="data">
                        <div class="p-4">
                            {{ data ? (data | level)?.display_name : 'All' }}
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-row="row">
                        <div
                            class="flex w-full items-center justify-end space-x-2 p-2"
                        >
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="
                                    'APP.CONCIERGE.CONTACTS_EDIT' | translate
                                "
                                (click)="editContact(row)"
                            >
                                <icon>edit</icon>
                            </button>
                            <button
                                icon
                                default
                                matRipple
                                error
                                (click)="removeContact(row)"
                                [matTooltip]="
                                    'APP.CONCIERGE.CONTACTS_REMOVE' | translate
                                "
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                    </ng-template>
                </section>
            </main>
        </div>
    `, imports: [
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      SimpleTableComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      FormsModule,
      TranslatePipe,
      LevelPipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/emergency-contacts.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=emergency-contacts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactsComponent, { className: "EmergencyContactsComponent", filePath: "apps/concierge/src/app/staff/emergency-contacts.component.ts", lineNumber: 238 });
})();

// apps/concierge/src/app/staff/staff-state.service.ts
var StaffStateService = class _StaffStateService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._onsite = {};
    this._events = {};
    this._users = signal(
      [],
      ...ngDevMode ? [{ debugName: "_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = signal(
      {},
      ...ngDevMode ? [{ debugName: "filters" }] : (
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
    this.user_events = signal(
      {},
      ...ngDevMode ? [{ debugName: "user_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_users = computed(
      () => {
        const filter = this.search();
        const users = this._users();
        const options = this.filters();
        return users.filter((i) => (!filter || i.name.toLowerCase().includes(filter) || i.email.toLowerCase().includes(filter)) && (!options.only_onsite || this._onsite[i.email]));
      },
      ...ngDevMode ? [{ debugName: "filtered_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadUsers();
    effect(() => {
      this._org.active_building();
      this._poll();
      this.timeout("load-events", () => this._loadEvents(), 300);
    });
  }
  setFilters(filters) {
    this.filters.set(__spreadValues(__spreadValues({}, this.filters()), filters));
  }
  setSearchString(search) {
    this.search.set(search);
  }
  startPolling(delay = 3 * MINUTES) {
    const poll_delay = Math.max(delay, 3 * MINUTES);
    this._poll.update((value) => value + 1);
    this.interval("poll", () => this._poll.update((value) => value + 1), poll_delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  async checkin(user) {
    const result = await saveBooking({
      booking_start: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
      booking_end: Math.floor(endOfDay(/* @__PURE__ */ new Date()).valueOf() / 1e3),
      asset_id: user.email,
      title: "Checked-in Onsite",
      description: this._org.building.display_name || this._org.building.name,
      zones: [this._org.building.id],
      booking_type: "staff"
    });
    await checkinBooking(result.id, true);
    this._events[user.email] = result;
    this._onsite[user.email] = true;
  }
  async checkout(user) {
    const event = this._events[user.email];
    if (event) {
      const result = await saveBooking(__spreadProps(__spreadValues({}, event.toJSON()), {
        booking_end: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3)
      }));
      await checkinBooking(result.id, false);
      this._events[user.email] = result;
      this._onsite[user.email] = false;
    }
  }
  async _loadEvents() {
    this.loading.set(true);
    const bookings = await queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "staff"
    });
    const checkin_map = {};
    const now = (/* @__PURE__ */ new Date()).valueOf();
    for (const bkn of bookings) {
      if (timePeriodsIntersect(now, now, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) {
        checkin_map[bkn.asset_id] = bkn.checked_in;
        this._events[bkn.asset_id] = bkn;
      }
    }
    this._onsite = checkin_map;
    this.user_events.set(checkin_map);
    this.loading.set(false);
  }
  async loadUsers() {
    const user_list = await searchStaff("");
    user_list.sort((a, b) => a.name.localeCompare(b.name));
    this._users.set(user_list);
  }
  static {
    this.\u0275fac = function StaffStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffStateService, factory: _StaffStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/staff/staff-details.component.ts
function StaffDetailsComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.DIRECTORY_ONSITE"), " ");
  }
}
function StaffDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "a-user-avatar", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, StaffDetailsComponent_Conditional_0_Conditional_7_Template, 3, 3, "div", 5);
    \u0275\u0275elementStart(8, "div", 6)(9, "action-icon", 7);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function StaffDetailsComponent_Conditional_0_Template_action_icon_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onsite() ? ctx_r1.checkout() : ctx_r1.checkin());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "call");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r1.user());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user()?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user()?.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.onsite() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 13, ctx_r1.onsite() ? "COMMON.CHECK_IN" : "COMMON.CHECK_OUT"))("loading", ctx_r1.loading())("content", ctx_r1.onsite() ? "event_busy" : "event_available");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 15, "APP.CONCIERGE.DIRECTORY_EMAIL"))("href", "mailto:" + ctx_r1.user()?.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !ctx_r1.user()?.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 17, "APP.CONCIERGE.DIRECTORY_PHONE"))("href", "tel:" + ctx_r1.user()?.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !ctx_r1.user()?.phone);
  }
}
var StaffDetailsComponent = class _StaffDetailsComponent {
  constructor() {
    this._state = inject(StaffStateService);
    this.user = input(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.onsite = input(
      void 0,
      ...ngDevMode ? [{ debugName: "onsite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkin = async () => {
      this.loading.set(true);
      await this._state.checkin(this.user()).catch((e) => notifyError(i18n("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR", { error: e })));
      this.loading.set(false);
    };
    this.checkout = async () => {
      this.loading.set(true);
      await this._state.checkout(this.user()).catch((e) => i18n("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR", { error: e }));
      this.loading.set(false);
    };
  }
  static {
    this.\u0275fac = function StaffDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDetailsComponent, selectors: [["staff-details"]], inputs: { user: [1, "user"], onsite: [1, "onsite"] }, decls: 1, vars: 1, consts: [["details", "", 1, "border-base-200", "bg-base-100", "flex", "w-full", "items-center", "border-b", "px-4", "py-2", "hover:opacity-80"], [3, "user"], [1, "flex", "flex-1", "flex-col"], [1, "px-2"], [1, "text-opacity-50", "px-2", "text-xs"], [1, "px-4", "text-xs", "opacity-50"], [1, "flex", "items-center"], [3, "click", "matTooltip", "loading", "content"], ["icon", "", "matRipple", "", 3, "matTooltip", "href"]], template: function StaffDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, StaffDetailsComponent_Conditional_0_Template, 19, 19, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.user() ? 0 : -1);
      }
    }, dependencies: [
      UserAvatarComponent,
      ActionIconComponent,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffDetailsComponent, [{
    type: Component,
    args: [{ selector: "staff-details", template: `
        @if (user()) {
            <div
                class="border-base-200 bg-base-100 flex w-full items-center border-b px-4 py-2 hover:opacity-80"
                details
            >
                <a-user-avatar [user]="user()"></a-user-avatar>
                <div class="flex flex-1 flex-col">
                    <div class="px-2">{{ user()?.name }}</div>
                    <div class="text-opacity-50 px-2 text-xs">
                        {{ user()?.email }}
                    </div>
                </div>
                @if (onsite()) {
                    <div class="px-4 text-xs opacity-50">
                        {{ 'APP.CONCIERGE.DIRECTORY_ONSITE' | translate }}
                    </div>
                }
                <div class="flex items-center">
                    <action-icon
                        [matTooltip]="
                            (onsite() ? 'COMMON.CHECK_IN' : 'COMMON.CHECK_OUT')
                                | translate
                        "
                        [loading]="loading()"
                        [content]="onsite() ? 'event_busy' : 'event_available'"
                        (click)="onsite() ? checkout() : checkin()"
                    >
                    </action-icon>
                    <a
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DIRECTORY_EMAIL' | translate
                        "
                        [attr.disabled]="!user()?.email"
                        [href]="'mailto:' + user()?.email"
                    >
                        <icon>email</icon>
                    </a>
                    <a
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DIRECTORY_PHONE' | translate
                        "
                        [attr.disabled]="!user()?.phone"
                        [href]="'tel:' + user()?.phone"
                    >
                        <icon>call</icon>
                    </a>
                </div>
            </div>
        }
    `, imports: [
      UserAvatarComponent,
      ActionIconComponent,
      IconComponent,
      MatTooltipModule,
      TranslatePipe
    ] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], onsite: [{ type: Input, args: [{ isSignal: true, alias: "onsite", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDetailsComponent, { className: "StaffDetailsComponent", filePath: "apps/concierge/src/app/staff/staff-details.component.ts", lineNumber: 79 });
})();

// apps/concierge/src/app/staff/staff-listing.component.ts
var _c04 = ["container"];
function StaffListingComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function StaffListingComponent_For_2_Template_div_click_0_listener() {
      const group_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTo(group_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", ctx_r2.user_list()[group_r2].length <= 0)("active", group_r2 === ctx_r2.active_group());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r2, " ");
  }
}
function StaffListingComponent_Conditional_5_For_1_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "staff-details", 8);
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const \u0275$index_15_r5 = ctx.$index;
    const group_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "letter-" + group_r6 + "-" + \u0275$index_15_r5)("user", user_r4)("onsite", ctx_r2.events() ? ctx_r2.events()[user_r4.email] : false);
  }
}
function StaffListingComponent_Conditional_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, StaffListingComponent_Conditional_5_For_1_Conditional_0_For_3_Template, 1, 3, "staff-details", 8, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const group_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "letter-" + (group_r6 === "#" ? "0" : group_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.user_list()[group_r6]);
  }
}
function StaffListingComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StaffListingComponent_Conditional_5_For_1_Conditional_0_Template, 4, 2);
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.user_list()[group_r6].length ? 0 : -1);
  }
}
function StaffListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StaffListingComponent_Conditional_5_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.groups);
  }
}
function StaffListingComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY"), " ");
  }
}
function StaffListingComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
var CHARS = "#abcdefghijklmnopqrstuvwxyz".split("");
var StaffListingComponent = class _StaffListingComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(StaffStateService);
    this.active_group = signal(
      "#",
      ...ngDevMode ? [{ debugName: "active_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.groups = CHARS;
    this.events = this._state.user_events;
    this.loading = this._state.loading;
    this.filtered_users = this._state.filtered_users;
    this.user_count = computed(
      () => this.filtered_users().length,
      ...ngDevMode ? [{ debugName: "user_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user_list = computed(
      () => {
        const list = this.filtered_users() || [];
        const user_map = {};
        for (const char of CHARS) {
          user_map[char] = list.filter((user) => user.name.toLowerCase()[0].startsWith(char) || char === "#" && !CHARS.includes(user.name.toLowerCase()[0]));
        }
        return user_map;
      },
      ...ngDevMode ? [{ debugName: "user_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._el = viewChild(
      "container",
      ...ngDevMode ? [{ debugName: "_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.user_list();
      this.timeout("scroll", () => this.onScroll({}), 30);
    });
  }
  onScroll(_) {
    const container = this._el();
    if (!container)
      return;
    const scroll_top = container.nativeElement.scrollTop;
    for (const group of CHARS) {
      const el = document.querySelector(`#letter-${group === "#" ? "0" : group}`);
      if (el) {
        if (el.offsetTop - scroll_top > 0) {
          break;
        }
        this.active_group.set(group);
      }
    }
  }
  scrollTo(group) {
    const el = document.querySelector(`#letter-${group}-0`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      this.active_group.set(group);
    }
  }
  static {
    this.\u0275fac = function StaffListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffListingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListingComponent, selectors: [["staff-listings"]], viewQuery: function StaffListingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._el, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 2, consts: [["container", ""], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], ["letter", "", 1, "flex", "h-6", "w-6", "cursor-pointer", "items-center", "justify-center", "text-xs", "capitalize", 3, "disabled", "active"], [1, "relative", "w-full", "flex-1", "overflow-auto", 2, "height", "50%", 3, "scroll"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], ["mode", "indeterminate"], ["letter", "", 1, "flex", "h-6", "w-6", "cursor-pointer", "items-center", "justify-center", "text-xs", "capitalize", 3, "click"], ["group", "", 1, "border-base-300", "bg-base-200", "sticky", "top-0", "z-10", "m-2", "rounded-lg", "border", "text-sm", "font-medium", "capitalize", 3, "id"], [3, "id", "user", "onsite"]], template: function StaffListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275repeaterCreate(1, StaffListingComponent_For_2_Template, 2, 5, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3, 0);
        \u0275\u0275listener("scroll", function StaffListingComponent_Template_div_scroll_3_listener($event) {
          return ctx.onScroll($event);
        });
        \u0275\u0275conditionalCreate(5, StaffListingComponent_Conditional_5_Template, 2, 0)(6, StaffListingComponent_Conditional_6_Template, 4, 3, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, StaffListingComponent_Conditional_7_Template, 1, 0, "mat-progress-bar", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.groups);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.user_count() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 7 : -1);
      }
    }, dependencies: [MatProgressBarModule, MatProgressBar, StaffDetailsComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\n[letter][_ngcontent-%COMP%] {\n  transition: font-size 200ms, color 200ms;\n}\n[group][_ngcontent-%COMP%] {\n  border-color: #ccc;\n  padding: 0.5rem 1.65rem;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  pointer-events: none;\n}\n.active[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 1;\n  color: #d81b60;\n}\n/*# sourceMappingURL=staff-listing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffListingComponent, [{
    type: Component,
    args: [{ selector: "staff-listings", template: `
        <div class="flex w-full items-center justify-center p-2">
            @for (group of groups; track group) {
                <div
                    letter
                    class="flex h-6 w-6 cursor-pointer items-center justify-center text-xs capitalize"
                    [class.disabled]="user_list()[group].length <= 0"
                    [class.active]="group === active_group()"
                    (click)="scrollTo(group)"
                >
                    {{ group }}
                </div>
            }
        </div>
        <div
            class="relative w-full flex-1 overflow-auto"
            style="height: 50%"
            #container
            (scroll)="onScroll($event)"
        >
            @if (user_count()) {
                @for (group of groups; track group) {
                    @if (user_list()[group].length) {
                        <div
                            group
                            [id]="'letter-' + (group === '#' ? '0' : group)"
                            class="border-base-300 bg-base-200 sticky top-0 z-10 m-2 rounded-lg border text-sm font-medium capitalize"
                        >
                            {{ group }}
                        </div>
                        @for (
                            user of user_list()[group];
                            track user;
                            let i = $index
                        ) {
                            <staff-details
                                [id]="'letter-' + group + '-' + i"
                                [user]="user"
                                [onsite]="
                                    events() ? events()[user.email] : false
                                "
                            ></staff-details>
                        }
                    }
                }
            } @else {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <p>
                        {{ 'APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
        @if (loading()) {
            <mat-progress-bar mode="indeterminate" />
        }
    `, imports: [MatProgressBarModule, StaffDetailsComponent, TranslatePipe], styles: ["/* angular:styles/component:css;94a94c12bcee17d4e5d214b11fe8feaa74e59a28a2b0847c7f81fc8b2e6494ed;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/staff-listing.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\n[letter] {\n  transition: font-size 200ms, color 200ms;\n}\n[group] {\n  border-color: #ccc;\n  padding: 0.5rem 1.65rem;\n}\n.disabled {\n  opacity: 0.2;\n  pointer-events: none;\n}\n.active {\n  font-size: 1.25rem;\n  opacity: 1;\n  color: #d81b60;\n}\n/*# sourceMappingURL=staff-listing.component.css.map */\n"] }]
  }], () => [], { _el: [{ type: ViewChild, args: ["container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListingComponent, { className: "StaffListingComponent", filePath: "apps/concierge/src/app/staff/staff-listing.component.ts", lineNumber: 114 });
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c05 = ["switch"];
var _c12 = ["*"];
function MatSlideToggle_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  _labelId;
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  _switchElement;
  focus() {
    this._switchElement.nativeElement.focus();
  }
  _noopAnimations = _animationsDisabled();
  _focused = false;
  name = null;
  id;
  labelPosition = "after";
  ariaLabel = null;
  ariaLabelledby = null;
  ariaDescribedby;
  required = false;
  color;
  disabled = false;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  hideIcon;
  disabledInteractive;
  change = new EventEmitter();
  toggleChange = new EventEmitter();
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 14,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mat-mdc-slide-toggle-touch-target"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          return ctx._handleClick();
        });
        \u0275\u0275element(3, "div", 3)(4, "span", 4);
        \u0275\u0275elementStart(5, "span", 5)(6, "span", 6)(7, "span", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, MatSlideToggle_Conditional_11_Template, 5, 0, "span", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "label", 12);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_12_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275projection(13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(9);
        \u0275\u0275property("matRippleTrigger", switch_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <div class="mat-mdc-slide-toggle-touch-target"></div>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle],
    exports: [MatSlideToggle, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle],
      exports: [MatSlideToggle, BidiModule]
    }]
  }], null, null);
})();

// apps/concierge/src/app/staff/staff-topbar.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function StaffTopbarComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
var StaffTopbarComponent = class _StaffTopbarComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(StaffStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.zones = signal(
      [],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = signal(
      [],
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = signal(
      {},
      ...ngDevMode ? [{ debugName: "filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
    effect(() => {
      this.filters.set(this._state.filters() || {});
    });
    effect(() => {
      const current_levels = this._org.active_levels() || [];
      untracked(() => {
        this.levels.set(current_levels);
        const zones = this.zones().filter((zone) => current_levels.find((lvl) => lvl.id === zone));
        if (!zones.length && current_levels.length) {
          zones.push(current_levels[0].id);
        }
        this.zones.set(zones);
        this.updateZones(zones);
      });
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level) {
            return;
          }
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this.zones.set(zones);
        }
      }
    }));
    this.setSearch("");
  }
  static {
    this.\u0275fac = function StaffTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTopbarComponent, selectors: [["staff-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 8, consts: [[1, "border-base-200", "bg-base-100", "flex", "items-center", "space-x-4", "border-b", "p-4"], ["appearance", "outline", 1, "no-subscript", "w-48"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"]], template: function StaffTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(4, StaffTopbarComponent_For_5_Template, 2, 2, "mat-option", 3, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-slide-toggle", 4);
        \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
          return ctx.setFilters({ only_onsite: $event });
        });
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementStart(11, "searchbar", 7);
        \u0275\u0275listener("modelChange", function StaffTopbarComponent_Template_searchbar_modelChange_11_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.zones);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 4, "COMMON.LEVEL_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.filters()?.only_onsite);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "APP.CONCIERGE.DIRECTORY_ONSITE_ONLY"), " ");
      }
    }, dependencies: [
      MatSlideToggleModule,
      MatSlideToggle,
      SearchbarComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=staff-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffTopbarComponent, [{
    type: Component,
    args: [{ selector: "staff-topbar", template: `
        <div
            class="border-base-200 bg-base-100 flex items-center space-x-4 border-b p-4"
        >
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels(); track level.id) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="filters()?.only_onsite"
                (ngModelChange)="setFilters({ only_onsite: $event })"
                ><div class="text-xs">
                    {{ 'APP.CONCIERGE.DIRECTORY_ONSITE_ONLY' | translate }}
                </div></mat-slide-toggle
            >
            <div class="w-2 flex-1"></div>
            <searchbar
                class="mr-2"
                (modelChange)="setSearch($event)"
            ></searchbar>
        </div>
    `, imports: [
      MatSlideToggleModule,
      SearchbarComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/staff-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=staff-topbar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTopbarComponent, { className: "StaffTopbarComponent", filePath: "apps/concierge/src/app/staff/staff-topbar.component.ts", lineNumber: 72 });
})();

// apps/concierge/src/app/staff/staff.component.ts
function StaffComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var StaffComponent = class _StaffComponent {
  constructor() {
    this._state = inject(StaffStateService);
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static {
    this.\u0275fac = function StaffComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffComponent, selectors: [["", "app-new-staff", ""]], decls: 7, vars: 1, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "w-full"], [1, "h-0", "w-full", "flex-1"], ["mode", "indeterminate", 1, "w-full"]], template: function StaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "staff-topbar", 2)(5, "staff-listings", 3);
        \u0275\u0275conditionalCreate(6, StaffComponent_Conditional_6_Template, 1, 0, "mat-progress-bar", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() ? 6 : -1);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      StaffTopbarComponent,
      StaffListingComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=staff.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffComponent, [{
    type: Component,
    args: [{ selector: "[app-new-staff]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <staff-topbar class="w-full"></staff-topbar>
                <staff-listings class="h-0 w-full flex-1"></staff-listings>
                @if (loading()) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      MatProgressBarModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      StaffTopbarComponent,
      StaffListingComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/staff.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=staff.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffComponent, { className: "StaffComponent", filePath: "apps/concierge/src/app/staff/staff.component.ts", lineNumber: 47 });
})();

// apps/concierge/src/app/staff/staff.routes.ts
var ROUTES = [
  { path: "", component: StaffComponent, title: "Staff" },
  {
    path: "emergency-contacts",
    component: EmergencyContactsComponent,
    title: "Emergency Contacts"
  }
];
export {
  ROUTES
};
//# sourceMappingURL=staff.routes-SGB5NF5Z.js.map
