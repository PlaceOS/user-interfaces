import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-UBOF3DDD.js";
import {
  SearchbarComponent
} from "./chunk-W5AX6WJJ.js";
import "./chunk-2Q6JOPCG.js";
import "./chunk-QXPEIGN3.js";
import "./chunk-IBB6AGBK.js";
import "./chunk-TZIRVYDW.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-53SDIA57.js";
import "./chunk-KCKWJL6Z.js";
import {
  UserSearchFieldComponent,
  checkinBooking,
  deleteAsset,
  queryAssetCategories,
  queryAssetGroups,
  queryAssets,
  queryBookings,
  saveAsset,
  saveAssetCategory,
  saveAssetGroup,
  saveBooking,
  searchStaff
} from "./chunk-QH62YOE5.js";
import {
  ActionIconComponent,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MatPrefix,
  MatProgressBar,
  MatProgressBarModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  ReactiveFormsModule,
  Router,
  RouterModule,
  SimpleTableComponent,
  TranslatePipe,
  UserAvatarComponent,
  catchError,
  combineLatest,
  endOfDay,
  filter,
  first,
  firstValueFrom,
  fo,
  getUnixTime,
  hs,
  i18n,
  inject,
  input,
  map,
  nc,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  randomString,
  rc,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  switchMap,
  timePeriodsIntersect,
  unique,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
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
  ɵɵviewQuerySignal
} from "./chunk-Q7N7E4GW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/staff/emergency-contacts.service.ts
var EMERGENCY_CONTACTS_CATEGORY_NAME = "_EMERGENCY_CONTACTS_";
var _EmergencyContactsService = class _EmergencyContactsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._change = new BehaviorSubject(Date.now());
    this.category$ = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => queryAssetCategories({ zone_id: bld.id }).pipe(catchError(() => of([])))), map((categories) => categories.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME) || null), shareReplay(1));
    this.assetType$ = combineLatest([
      this._org.active_building,
      this.category$,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld, category]) => {
      if (!category)
        return of(null);
      return queryAssetGroups({ zone_id: bld.id, q: category.name }).pipe(catchError(() => of([])), map((groups) => groups.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id) || null));
    }), shareReplay(1));
    this.contacts$ = combineLatest([
      this._org.active_building,
      this.assetType$,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld, assetType]) => {
      if (!assetType)
        return of([]);
      return queryAssets({
        zone_id: bld.id,
        type_id: assetType.id,
        limit: 200
      }).pipe(catchError(() => of([])), map((assets) => assets.filter((a) => a.asset_type_id === assetType.id).map((a) => this.assetToContact(a))));
    }), shareReplay(1));
    this.roles$ = this.category$.pipe(map((category) => {
      if (!category?.description)
        return [];
      try {
        const data = JSON.parse(category.description);
        return data.roles || [];
      } catch {
        return [];
      }
    }), shareReplay(1));
    this.data$ = combineLatest([this.contacts$, this.roles$]).pipe(map(([contacts, roles]) => ({ contacts, roles })), shareReplay(1));
    this.legacyMetadata$ = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => nc(bld.id, "emergency_contacts").pipe(catchError(() => of({ details: { contacts: [], roles: [] } })))), map(({ details }) => details || {
      contacts: [],
      roles: []
    }), shareReplay(1));
    this.ensureCategoryAndTypeExist();
  }
  /** Ensure the hidden category exists, create if not */
  async ensureCategoryExists() {
    await firstValueFrom(this._org.initialised.pipe(first((init) => init)));
    const bld = this._org.building;
    if (!bld)
      return null;
    const categories = await firstValueFrom(queryAssetCategories({ zone_id: bld.id }).pipe(catchError(() => of([]))));
    const existing = categories.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME);
    if (existing)
      return existing;
    try {
      const new_category = await firstValueFrom(saveAssetCategory(hs(new fo({
        name: EMERGENCY_CONTACTS_CATEGORY_NAME,
        description: JSON.stringify({ roles: [] }),
        hidden: true
      }), [0, void 0, "", null])));
      this._change.next(Date.now());
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
    const groups = await firstValueFrom(queryAssetGroups({ zone_id: bld.id, q: category.name }).pipe(catchError(() => of([]))));
    const existing = groups.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id);
    if (existing)
      return existing;
    try {
      const new_group = await firstValueFrom(saveAssetGroup({
        name: EMERGENCY_CONTACTS_CATEGORY_NAME,
        category_id: category.id,
        zone_id: bld.id,
        brand: "PlaceOS",
        description: "Emergency contacts for the building"
      }));
      this._change.next(Date.now());
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
      const legacy_data = await firstValueFrom(this.legacyMetadata$);
      if (!legacy_data?.contacts?.length && !legacy_data?.roles?.length) {
        return true;
      }
      const asset_type = await this.ensureCategoryAndTypeExist();
      if (!asset_type) {
        throw new Error("Failed to create or find asset type");
      }
      const category = await firstValueFrom(this.category$);
      if (!category) {
        throw new Error("Failed to find category");
      }
      if (legacy_data.roles?.length) {
        await firstValueFrom(saveAssetCategory(hs(new fo(__spreadProps(__spreadValues({}, category), {
          hidden: true,
          description: JSON.stringify({
            roles: legacy_data.roles
          })
        })), [0, null, void 0, ""])));
      }
      for (const contact of legacy_data.contacts || []) {
        const asset = this.contactToAsset(contact, asset_type.id);
        await firstValueFrom(saveAsset(asset));
      }
      await rc(bld.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts (migrated to Assets)",
        details: { contacts: [], roles: [], migrated: true }
      }).toPromise();
      this._change.next(Date.now());
      notifySuccess(i18n("APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS") || "Successfully migrated emergency contacts.");
      return true;
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.CONTACTS_MIGRATION_ERROR", { error: e }) || `Failed to migrate emergency contacts: ${e}`);
      return false;
    }
  }
  /** Check if migration is needed */
  async needsMigration() {
    const legacy_data = await firstValueFrom(this.legacyMetadata$);
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
      let asset_type = await firstValueFrom(this.assetType$);
      if (!asset_type) {
        asset_type = await this.ensureCategoryAndTypeExist();
      }
      if (!asset_type) {
        throw new Error("Failed to create or find asset type");
      }
      const asset = this.contactToAsset(contact, asset_type.id);
      await firstValueFrom(saveAsset(asset));
      this._change.next(Date.now());
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
      await firstValueFrom(deleteAsset(contact_id));
      this._change.next(Date.now());
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
      let category = await firstValueFrom(this.category$);
      if (!category) {
        category = await this.ensureCategoryExists();
      }
      if (!category) {
        throw new Error("Failed to create or find category");
      }
      await firstValueFrom(saveAssetCategory(new fo(__spreadProps(__spreadValues({}, category), {
        description: JSON.stringify({ roles })
      }))));
      this._change.next(Date.now());
      return true;
    } catch (e) {
      notifyError(`Failed to update roles: ${e}`);
      return false;
    }
  }
  /** Add a new role */
  async addRole(role_name) {
    const roles = await firstValueFrom(this.roles$);
    if (roles.includes(role_name))
      return true;
    return this.updateRoles([...roles, role_name].filter(Boolean).sort((a, b) => a.localeCompare(b)));
  }
  /** Remove a role and update contacts that use it */
  async removeRole(role_name) {
    try {
      const [roles, contacts] = await Promise.all([
        firstValueFrom(this.roles$),
        firstValueFrom(this.contacts$)
      ]);
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
      const [roles, contacts] = await Promise.all([
        firstValueFrom(this.roles$),
        firstValueFrom(this.contacts$)
      ]);
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
    this._change.next(Date.now());
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
};
_EmergencyContactsService.\u0275fac = function EmergencyContactsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmergencyContactsService)();
};
_EmergencyContactsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmergencyContactsService, factory: _EmergencyContactsService.\u0275fac, providedIn: "root" });
var EmergencyContactsService = _EmergencyContactsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyContactsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/staff/emergency-contact-modal.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
function EmergencyContactModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EmergencyContactModalComponent_Conditional_5_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
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
function EmergencyContactModalComponent_Conditional_5_For_61_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
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
function EmergencyContactModalComponent_Conditional_5_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmergencyContactModalComponent_Conditional_5_For_61_Conditional_0_Template, 2, 2, "mat-option", 21);
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275conditional(role_r4 ? 0 : -1);
  }
}
function EmergencyContactModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "form", 7)(2, "a-user-search-field", 8);
    \u0275\u0275listener("ngModelChange", function EmergencyContactModalComponent_Conditional_5_Template_a_user_search_field_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setUser($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "label", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "mat-label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "label", 15);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 11)(18, "mat-label");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "label", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 11)(28, "mat-label");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 17);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 9)(34, "label", 18);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 11)(38, "mat-label");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-select", 19);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "mat-option", 20);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(46, EmergencyContactModalComponent_Conditional_5_For_47_Template, 2, 2, "mat-option", 21, _forTrack0);
    \u0275\u0275pipe(48, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 9)(50, "label", 22);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 13)(54, "mat-form-field", 23)(55, "mat-label");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-select", 24);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275repeaterCreate(60, EmergencyContactModalComponent_Conditional_5_For_61_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(62, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "button", 25)(64, "icon");
    \u0275\u0275text(65, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 26);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(55, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "FORM.NAME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 21, "FORM.NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "FORM.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 25, "FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 27, "FORM.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 29, "FORM.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 31, "FORM.PHONE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 33, "APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 35, "RESOURCE.LEVEL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 37, "RESOURCE.LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(42, 39, "COMMON.LEVEL_SELECT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 41, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(48, 43, ctx_r1.levels));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 45, "APP.CONCIERGE.CONTACTS_ROLES"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 47, "COMMON.ROLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(59, 49, "APP.CONCIERGE.CONTACTS_ROLES_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(62, 51, ctx_r1.roles));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", role_form_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 53, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
  }
}
function EmergencyContactModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 27);
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
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 28);
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
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-form-field", 11)(2, "mat-label");
    \u0275\u0275text(3, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 30);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactModalComponent_ng_template_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_ng_template_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRole());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.role_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 3, "APP.CONCIERGE.CONTACTS_ROLES_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
  }
}
var _EmergencyContactModalComponent = class _EmergencyContactModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._contacts_service = inject(EmergencyContactsService);
    this.loading = signal(false);
    this.contact = this._data;
    this.roles = this._contacts_service.roles$;
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || this._contacts_service.generateContactId()),
      name: new FormControl(this._data?.name || ""),
      email: new FormControl(this._data?.email || ""),
      phone: new FormControl(this._data?.phone || ""),
      zone: new FormControl(this._data?.zone || ""),
      roles: new FormControl(this._data?.roles || [])
    });
    this.levels = this._org.active_levels;
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  async addRole() {
    if (!this.role_name)
      return;
    this._tooltip().close();
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    await this._contacts_service.addRole(this.role_name);
    this.form.patchValue({
      roles: [...this.form.value.roles || [], this.role_name]
    });
    this.role_name = "";
    this.loading.set(false);
    this._dialog_ref.disableClose = false;
  }
  setUser(user) {
    this.form.patchValue({
      name: user?.name,
      email: user?.email,
      phone: user?.phone
    });
  }
  async save() {
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const contact = {
      id: this.form.value.id,
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
      zone: this.form.value.zone,
      roles: this.form.value.roles || []
    };
    const success = await this._contacts_service.saveContact(contact);
    this._dialog_ref.disableClose = false;
    this.loading.set(false);
    if (success) {
      this._dialog_ref.close();
    }
  }
};
_EmergencyContactModalComponent.\u0275fac = function EmergencyContactModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmergencyContactModalComponent)();
};
_EmergencyContactModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactModalComponent, selectors: [["emergency-contact-modal"]], viewQuery: function EmergencyContactModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 10, vars: 6, consts: [["role_form", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", "aria-label", "Close dialog"], [1, "w-xl", "p-4"], ["loading", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "px-4", "py-2"], [3, "formGroup"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Full name"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "email"], ["matInput", "", "formControlName", "email", "type", "email", 3, "placeholder"], ["matInput", "", "formControlName", "phone", "type", "tel", 3, "placeholder"], ["for", "zone"], ["formControlName", "zone", 3, "placeholder"], ["value", ""], [3, "value"], ["for", "roles"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", "formControlName", "roles", 3, "placeholder"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "space-x-2", 3, "content"], [1, "pr-2"], [1, "mb-4", 3, "diameter"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "bg-base-100", "rounded-sm", "p-4"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function EmergencyContactModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EmergencyContactModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, EmergencyContactModalComponent_Conditional_5_Template, 69, 56, "main", 4)(6, EmergencyContactModalComponent_Conditional_6_Template, 5, 4, "main", 5);
    \u0275\u0275conditionalCreate(7, EmergencyContactModalComponent_Conditional_7_Template, 4, 3, "footer", 6);
    \u0275\u0275template(8, EmergencyContactModalComponent_ng_template_8_Template, 9, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
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
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  CustomTooltipComponent,
  UserSearchFieldComponent
], encapsulation: 2 });
var EmergencyContactModalComponent = _EmergencyContactModalComponent;
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
                <button icon matRipple mat-dialog-close aria-label="Close dialog">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="w-xl p-4">
                <form [formGroup]="form">
                    <a-user-search-field
                        ngModel
                        (ngModelChange)="setUser($event)"
                        [ngModelOptions]="{ standalone: true }"
                        class="mb-4"
                    ></a-user-search-field>
                    <div class="flex flex-col">
                        <label for="name">{{ 'FORM.NAME' | translate }}</label>
                        <mat-form-field appearance="outline">
                            <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                            <input
                                matInput
                                formControlName="name"
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
                                <mat-label>{{ 'FORM.EMAIL' | translate }}</mat-label>
                                <input
                                    matInput
                                    formControlName="email"
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
                                <mat-label>{{ 'FORM.PHONE' | translate }}</mat-label>
                                <input
                                    matInput
                                    formControlName="phone"
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
                            <mat-label>{{ 'RESOURCE.LEVEL' | translate }}</mat-label>
                            <mat-select
                                formControlName="zone"
                                [placeholder]="
                                    'COMMON.LEVEL_SELECT' | translate
                                "
                            >
                                <mat-option value="">{{
                                    'COMMON.LEVEL_ANY' | translate
                                }}</mat-option>
                                @for (level of levels | async; track level.id) {
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
                                <mat-label>{{ 'COMMON.ROLE' | translate }}</mat-label>
                                <mat-select
                                    multiple
                                    formControlName="roles"
                                    [placeholder]="
                                        'APP.CONCIERGE.CONTACTS_ROLES_SELECT'
                                            | translate
                                    "
                                >
                                    @for (role of roles | async; track $index) {
                                        @if (role) {
                                            <mat-option [value]="role">
                                                {{ role }}
                                            </mat-option>
                                        }
                                    }
                                </mat-select>
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                class="space-x-2"
                                customTooltip
                                [content]="role_form"
                            >
                                <icon>add</icon>
                                <div class="pr-2">
                                    {{
                                        'APP.CONCIERGE.CONTACTS_ROLES_ADD'
                                            | translate
                                    }}
                                </div>
                            </button>
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
                    <mat-label>Search</mat-label>
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
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRippleModule,
      FormsModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule,
      CustomTooltipComponent,
      UserSearchFieldComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactModalComponent, { className: "EmergencyContactModalComponent", filePath: "apps/concierge/src/app/staff/emergency-contact-modal.component.ts", lineNumber: 226 });
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
      ctx_r3.active = role_r3;
      return \u0275\u0275resetView(ctx_r3.role_name = role_r3);
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
    const role_form_r5 = \u0275\u0275reference(17);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r3);
    \u0275\u0275advance();
    \u0275\u0275property("content", role_form_r5);
  }
}
function RoleManagementModalComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-form-field", 14)(2, "mat-label");
    \u0275\u0275text(3, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementModalComponent_ng_template_16_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.role_name, $event) || (ctx_r3.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_template_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateRoles());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.role_name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 3, "APP.CONCIERGE.CONTACTS_ROLES_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
  }
}
var _RoleManagementModalComponent = class _RoleManagementModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._contacts_service = inject(EmergencyContactsService);
    this.loading = false;
    this.roles = this._contacts_service.roles$;
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  async removeRole(role) {
    if (!role)
      return;
    this.loading = true;
    this._dialog_ref.disableClose = true;
    await this._contacts_service.removeRole(role);
    this.loading = false;
    this._dialog_ref.disableClose = false;
  }
  async updateRoles() {
    if (!this.role_name)
      return;
    this.loading = true;
    this._tooltip().close();
    this._dialog_ref.disableClose = true;
    if (this.active) {
      await this._contacts_service.renameRole(this.active, this.role_name);
    } else {
      await this._contacts_service.addRole(this.role_name);
    }
    this.role_name = "";
    this.active = "";
    this.loading = false;
    this._dialog_ref.disableClose = false;
  }
};
_RoleManagementModalComponent.\u0275fac = function RoleManagementModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoleManagementModalComponent)();
};
_RoleManagementModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleManagementModalComponent, selectors: [["role-management-modal"]], viewQuery: function RoleManagementModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 18, vars: 10, consts: [["role_form", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", "aria-label", "Close dialog"], [1, "h-128", "max-h-[65vh]", "min-w-md", "overflow-y-auto"], [1, "hover:bg-base-200:bg-base-300", "border-base-200", "m-2", "flex", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "border-base-200", "border-t"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click", "content"], [1, "truncate", "pl-2"], [1, "text-2xl"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click", "content"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"], [1, "bg-base-100", "rounded-sm", "p-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function RoleManagementModalComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "footer", 6)(10, "button", 7);
    \u0275\u0275listener("click", function RoleManagementModalComponent_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      ctx.active = "";
      return \u0275\u0275resetView(ctx.role_name = "");
    });
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "icon", 9);
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, RoleManagementModalComponent_ng_template_16_Template, 9, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const role_form_r5 = \u0275\u0275reference(17);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 6, ctx.roles));
    \u0275\u0275advance(4);
    \u0275\u0275property("content", role_form_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
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
  MatLabel,
  MatInputModule,
  MatInput,
  TranslatePipe,
  IconComponent,
  CustomTooltipComponent
], encapsulation: 2 });
var RoleManagementModalComponent = _RoleManagementModalComponent;
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
            @if (!loading) {
                <button icon matRipple mat-dialog-close aria-label="Close dialog">
                    <icon>close</icon>
                </button>
            }
        </header>
        <main class="h-128 max-h-[65vh] min-w-md overflow-y-auto">
            @for (role of roles | async; track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 border-base-200 m-2 flex items-center space-x-2 rounded-sm border p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                        (click)="active = role; role_name = role"
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
                (click)="active = ''; role_name = ''"
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
                    <mat-label>Search</mat-label>
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
      CommonModule,
      FormsModule,
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      TranslatePipe,
      IconComponent,
      CustomTooltipComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleManagementModalComponent, { className: "RoleManagementModalComponent", filePath: "apps/concierge/src/app/staff/role-management-modal.component.ts", lineNumber: 103 });
})();

// apps/concierge/src/app/staff/emergency-contacts.component.ts
var _c02 = ["app-emergency-contacts", ""];
var _c1 = () => [];
var _c2 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "roles", name: a0, content: a1, sortable: false });
var _c4 = (a0, a1) => ({ key: "zone", name: a0, content: a1, sortable: false });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack03 = ($index, $item) => $item + $index;
function EmergencyContactsComponent_For_34_Template(rf, ctx) {
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
function EmergencyContactsComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_48_Template_button_click_0_listener() {
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
function EmergencyContactsComponent_ng_template_50_For_2_Template(rf, ctx) {
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
function EmergencyContactsComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, EmergencyContactsComponent_ng_template_50_For_2_Template, 2, 1, "span", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r7);
  }
}
function EmergencyContactsComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r8 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r8 ? (tmp_6_0 = \u0275\u0275pipeBind1(2, 1, data_r8)) == null ? null : tmp_6_0.display_name : "All", " ");
  }
}
function EmergencyContactsComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_54_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editContact(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_54_Template_button_click_5_listener() {
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
var _EmergencyContactsComponent = class _EmergencyContactsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
    this._contacts_service = inject(EmergencyContactsService);
    this.search = "";
    this.role_filter = new BehaviorSubject("");
    this.data$ = this._contacts_service.data$;
    this.roles = this._contacts_service.roles$;
    this.contacts = this._contacts_service.contacts$;
    this.filtered_contacts = combineLatest([
      this.contacts,
      this.role_filter
    ]).pipe(map(([list, role]) => list.filter((_) => !role || _.roles.includes(role))));
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
};
_EmergencyContactsComponent.\u0275fac = function EmergencyContactsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmergencyContactsComponent)();
};
_EmergencyContactsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactsComponent, selectors: [["", "app-emergency-contacts", ""]], attrs: _c02, decls: 56, vars: 55, consts: [["person_template", ""], ["roles_template", ""], ["zone_template", ""], ["actions_template", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["topbar", "", 1, "flex", "flex-col", "px-8", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "mt-2", "flex", "items-center", "justify-between", "py-2"], [3, "ngModelChange", "ngModel", "placeholder"], ["value", ""], [3, "value"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "block", "min-w-208", "text-sm", 3, "data", "filter", "empty_message", "columns", "sortable"], [1, "h-12", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-60"], [1, "flex", "flex-wrap", "p-2"], [1, "bg-info", "text-info-content", "m-1", "rounded-2xl", "px-2", "py-1", "font-mono", "text-xs"], [1, "p-4"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function EmergencyContactsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 5)(4, "section", 6)(5, "div", 7)(6, "h2", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "mat-form-field", 10)(11, "mat-label");
    \u0275\u0275text(12, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "icon", 11);
    \u0275\u0275text(14, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 12);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactsComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editContact());
    });
    \u0275\u0275elementStart(18, "icon", 14);
    \u0275\u0275text(19, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "mat-form-field", 10)(25, "mat-label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 17);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("ngModelChange", function EmergencyContactsComponent_Template_mat_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.role_filter.next($event));
    });
    \u0275\u0275elementStart(30, "mat-option", 18);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(33, EmergencyContactsComponent_For_34_Template, 2, 2, "mat-option", 19, _forTrack03);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 9)(37, "button", 20);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.manageRoles());
    });
    \u0275\u0275elementStart(39, "icon");
    \u0275\u0275text(40, "list_alt");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "section", 21);
    \u0275\u0275element(42, "simple-table", 22);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275element(47, "div", 23);
    \u0275\u0275template(48, EmergencyContactsComponent_ng_template_48_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(50, EmergencyContactsComponent_ng_template_50_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(52, EmergencyContactsComponent_ng_template_52_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(54, EmergencyContactsComponent_ng_template_54_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const person_template_r11 = \u0275\u0275reference(49);
    const roles_template_r12 = \u0275\u0275reference(51);
    const zone_template_r13 = \u0275\u0275reference(53);
    const actions_template_r14 = \u0275\u0275reference(55);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 14, "APP.CONCIERGE.CONTACTS_HEADER"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 16, "APP.CONCIERGE.CONTACTS_FILTER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 18, "APP.CONCIERGE.CONTACTS_ADD"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 20, "RESOURCE.LEVEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.role_filter.getValue())("placeholder", \u0275\u0275pipeBind1(29, 22, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 24, "APP.CONCIERGE.CONTACTS_ROLES_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(35, 26, ctx.roles) || \u0275\u0275pureFunction0(38, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(38, 28, "APP.CONCIERGE.CONTACTS_ROLES_MANAGE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx.filtered_contacts)("filter", ctx.search)("empty_message", \u0275\u0275pipeBind1(43, 30, ctx.search ? "APP.CONCIERGE.CONTACTS_SEARCH_EMPTY" : "APP.CONCIERGE.CONTACTS_EMPTY"))("columns", \u0275\u0275pureFunction4(50, _c6, \u0275\u0275pureFunction2(39, _c2, \u0275\u0275pipeBind1(44, 32, "COMMON.PERSON"), person_template_r11), \u0275\u0275pureFunction2(42, _c3, \u0275\u0275pipeBind1(45, 34, "APP.CONCIERGE.CONTACTS_ROLES"), roles_template_r12), \u0275\u0275pureFunction2(45, _c4, \u0275\u0275pipeBind1(46, 36, "RESOURCE.LEVEL"), zone_template_r13), \u0275\u0275pureFunction1(48, _c5, actions_template_r14)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  SimpleTableComponent,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
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
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=emergency-contacts.component.css.map */"] });
var EmergencyContactsComponent = _EmergencyContactsComponent;
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
                                <mat-label>Search</mat-label>
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
                            <mat-label>{{ 'RESOURCE.LEVEL' | translate }}</mat-label>
                            <mat-select
                                [ngModel]="role_filter.getValue()"
                                (ngModelChange)="role_filter.next($event)"
                                [placeholder]="
                                    'APP.CONCIERGE.CONTACTS_ROLES_ALL'
                                        | translate
                                "
                            >
                                <mat-option value="">{{
                                    'APP.CONCIERGE.CONTACTS_ROLES_ALL'
                                        | translate
                                }}</mat-option>
                                @for (
                                    role of (roles | async) || [];
                                    track role + $index
                                ) {
                                    <mat-option [value]="role">
                                        {{ role }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        <div class="flex items-center space-x-2">
                            <button
                                icon
                                matRipple
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
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
                        [data]="filtered_contacts"
                        [filter]="search"
                        [empty_message]="
                            (search
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
                            <div class="font-mono text-[0.625rem] opacity-60">
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
                                matRipple
                                class="text-error"
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
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactsComponent, { className: "EmergencyContactsComponent", filePath: "apps/concierge/src/app/staff/emergency-contacts.component.ts", lineNumber: 245 });
})();

// apps/concierge/src/app/staff/staff-state.service.ts
var _StaffStateService = class _StaffStateService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._onsite = {};
    this._events = {};
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this._users = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.users = this._filters.asObservable();
    this.filtered_users = combineLatest([
      this._search,
      this._users,
      this._filters
    ]).pipe(map((details) => {
      const [filter2, users, options] = details;
      return users.filter((i) => (!filter2 || i.name.toLowerCase().includes(filter2) || i.email.toLowerCase().includes(filter2)) && (!options.only_onsite || this._onsite[i.email]));
    }));
    this.user_events = combineLatest([this._filters]).pipe(switchMap(async (_) => {
      this._loading.next(true);
      const bookings = await queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "staff"
      }).toPromise();
      const checkin_map = {};
      const now = (/* @__PURE__ */ new Date()).valueOf();
      for (const bkn of bookings) {
        if (timePeriodsIntersect(now, now, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) {
          checkin_map[bkn.asset_id] = bkn.checked_in;
          this._events[bkn.asset_id] = bkn;
        }
      }
      this._onsite = checkin_map;
      this._loading.next(false);
      return checkin_map;
    }), shareReplay(1));
    this.loadUsers();
    this.user_events.subscribe();
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  startPolling(delay = 30 * 1e3) {
    this.setFilters(this._filters.getValue());
    this.interval("poll", () => this.setFilters(this._filters.getValue()), delay);
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
    }).toPromise();
    await checkinBooking(result.id, true).toPromise();
    this._events[user.email] = result;
    this._onsite[user.email] = true;
  }
  async checkout(user) {
    const event = this._events[user.email];
    if (event) {
      const result = await saveBooking(__spreadProps(__spreadValues({}, event.toJSON()), {
        booking_end: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3)
      })).toPromise();
      await checkinBooking(result.id, false).toPromise();
      this._events[user.email] = result;
      this._onsite[user.email] = false;
    }
  }
  async loadUsers() {
    const user_list = await searchStaff("").toPromise();
    user_list.sort((a, b) => a.name.localeCompare(b.name));
    this._users.next(user_list);
  }
};
_StaffStateService.\u0275fac = function StaffStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffStateService)();
};
_StaffStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffStateService, factory: _StaffStateService.\u0275fac, providedIn: "root" });
var StaffStateService = _StaffStateService;
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
    let tmp_2_0;
    let tmp_3_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r1.user());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.user()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r1.user()) == null ? null : tmp_3_0.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.onsite() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 13, ctx_r1.onsite() ? "COMMON.CHECK_IN" : "COMMON.CHECK_OUT"))("loading", ctx_r1.loading)("content", ctx_r1.onsite() ? "event_busy" : "event_available");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 15, "APP.CONCIERGE.DIRECTORY_EMAIL"))("href", "mailto:" + ((tmp_9_0 = ctx_r1.user()) == null ? null : tmp_9_0.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !((tmp_10_0 = ctx_r1.user()) == null ? null : tmp_10_0.email));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 17, "APP.CONCIERGE.DIRECTORY_PHONE"))("href", "tel:" + ((tmp_12_0 = ctx_r1.user()) == null ? null : tmp_12_0.phone), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !((tmp_13_0 = ctx_r1.user()) == null ? null : tmp_13_0.phone));
  }
}
var _StaffDetailsComponent = class _StaffDetailsComponent {
  constructor() {
    this._state = inject(StaffStateService);
    this.user = input(void 0);
    this.onsite = input(void 0);
    this.checkin = async () => {
      this.loading = true;
      await this._state.checkin(this.user()).catch((e) => notifyError(i18n("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR", { error: e })));
      this.loading = false;
    };
    this.checkout = async () => {
      this.loading = true;
      await this._state.checkout(this.user()).catch((e) => i18n("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR", { error: e }));
      this.loading = false;
    };
  }
};
_StaffDetailsComponent.\u0275fac = function StaffDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffDetailsComponent)();
};
_StaffDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDetailsComponent, selectors: [["staff-details"]], inputs: { user: [1, "user"], onsite: [1, "onsite"] }, decls: 1, vars: 1, consts: [["details", "", 1, "border-base-200", "bg-base-100", "flex", "w-full", "items-center", "border-b", "px-4", "py-2", "hover:opacity-80"], [3, "user"], [1, "flex", "flex-1", "flex-col"], [1, "px-2"], [1, "text-opacity-60", "px-2", "text-xs"], [1, "px-4", "text-xs", "opacity-60"], [1, "flex", "items-center"], [3, "click", "matTooltip", "loading", "content"], ["icon", "", "matRipple", "", 3, "matTooltip", "href"]], template: function StaffDetailsComponent_Template(rf, ctx) {
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
var StaffDetailsComponent = _StaffDetailsComponent;
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
                    <div class="text-opacity-60 px-2 text-xs">
                        {{ user()?.email }}
                    </div>
                </div>
                @if (onsite()) {
                    <div class="px-4 text-xs opacity-60">
                        {{ 'APP.CONCIERGE.DIRECTORY_ONSITE' | translate }}
                    </div>
                }
                <div class="flex items-center">
                    <action-icon
                        [matTooltip]="
                            (onsite() ? 'COMMON.CHECK_IN' : 'COMMON.CHECK_OUT')
                                | translate
                        "
                        [loading]="loading"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDetailsComponent, { className: "StaffDetailsComponent", filePath: "apps/concierge/src/app/staff/staff-details.component.ts", lineNumber: 79 });
})();

// apps/concierge/src/app/staff/staff-listing.component.ts
var _c03 = ["container"];
function StaffListingComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function StaffListingComponent_For_2_Template_div_click_0_listener() {
      const group_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scrollTo(group_r3));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(1, 5, ctx_r3.user_list)[group_r3].length <= 0)("active", group_r3 === ctx_r3.active_group);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r3, " ");
  }
}
function StaffListingComponent_Conditional_5_For_1_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "staff-details", 8);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const \u0275$index_18_r6 = ctx.$index;
    const group_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "letter-" + group_r7 + "-" + \u0275$index_18_r6)("user", user_r5)("onsite", \u0275\u0275pipeBind1(1, 3, ctx_r3.events) ? \u0275\u0275pipeBind1(2, 5, ctx_r3.events)[user_r5.email] : false);
  }
}
function StaffListingComponent_Conditional_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, StaffListingComponent_Conditional_5_For_1_Conditional_0_For_3_Template, 3, 7, "staff-details", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "letter-" + (group_r7 === "#" ? "0" : group_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 2, ctx_r3.user_list)[group_r7]);
  }
}
function StaffListingComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StaffListingComponent_Conditional_5_For_1_Conditional_0_Template, 5, 4);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r3.user_list)[group_r7].length ? 0 : -1);
  }
}
function StaffListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StaffListingComponent_Conditional_5_For_1_Template, 2, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.groups);
  }
}
function StaffListingComponent_Conditional_7_Template(rf, ctx) {
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
function StaffListingComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
var CHARS = "#abcdefghijklmnopqrstuvwxyz".split("");
var _StaffListingComponent = class _StaffListingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(StaffStateService);
    this.active_group = "#";
    this.groups = CHARS;
    this.events = this._state.user_events;
    this.loading = this._state.loading;
    this.user_count = this._state.filtered_users.pipe(map((list) => list.length));
    this.user_list = this._state.filtered_users.pipe(map((list) => {
      const user_map = {};
      for (const char of CHARS) {
        user_map[char] = (list || []).filter((user) => user.name.toLowerCase()[0].startsWith(char) || char === "#" && !CHARS.includes(user.name.toLowerCase()[0]));
      }
      this.timeout("scroll", () => this.onScroll({}), 30);
      return user_map;
    }));
    this._el = viewChild("container");
  }
  onScroll(_) {
    const scroll_top = this._el().nativeElement.scrollTop;
    for (const group of CHARS) {
      const el = document.querySelector(`#letter-${group === "#" ? "0" : group}`);
      if (el) {
        if (el.offsetTop - scroll_top > 0) {
          break;
        }
        this.active_group = group;
      }
    }
  }
  scrollTo(group) {
    const el = document.querySelector(`#letter-${group}-0`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      this.active_group = group;
    }
  }
};
_StaffListingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275StaffListingComponent_BaseFactory;
  return function StaffListingComponent_Factory(__ngFactoryType__) {
    return (\u0275StaffListingComponent_BaseFactory || (\u0275StaffListingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_StaffListingComponent)))(__ngFactoryType__ || _StaffListingComponent);
  };
})();
_StaffListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListingComponent, selectors: [["staff-listings"]], viewQuery: function StaffListingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._el, _c03, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 6, consts: [["container", ""], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], ["letter", "", 1, "flex", "h-6", "w-6", "cursor-pointer", "items-center", "justify-center", "text-xs", "capitalize", 3, "disabled", "active"], [1, "relative", "w-full", "flex-1", "overflow-auto", 2, "height", "50%", 3, "scroll"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], ["mode", "indeterminate"], ["letter", "", 1, "flex", "h-6", "w-6", "cursor-pointer", "items-center", "justify-center", "text-xs", "capitalize", 3, "click"], ["group", "", 1, "border-base-300", "bg-base-200", "sticky", "top-0", "z-10", "m-2", "rounded-lg", "border", "text-sm", "font-medium", "capitalize", 3, "id"], [3, "id", "user", "onsite"]], template: function StaffListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, StaffListingComponent_For_2_Template, 3, 7, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3, 0);
    \u0275\u0275listener("scroll", function StaffListingComponent_Template_div_scroll_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll($event));
    });
    \u0275\u0275conditionalCreate(5, StaffListingComponent_Conditional_5_Template, 2, 0);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275conditionalBranchCreate(7, StaffListingComponent_Conditional_7_Template, 4, 3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, StaffListingComponent_Conditional_8_Template, 1, 0, "mat-progress-bar", 5);
    \u0275\u0275pipe(9, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.groups);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(6, 2, ctx.user_count) ? 5 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 4, ctx.loading) ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  StaffDetailsComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\n[letter][_ngcontent-%COMP%] {\n  transition: font-size 200ms, color 200ms;\n}\n[group][_ngcontent-%COMP%] {\n  border-color: #ccc;\n  padding: 0.5rem 1.65rem;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  pointer-events: none;\n}\n.active[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 1;\n  color: #d81b60;\n}\n/*# sourceMappingURL=staff-listing.component.css.map */"] });
var StaffListingComponent = _StaffListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffListingComponent, [{
    type: Component,
    args: [{ selector: "staff-listings", template: `
        <div class="flex w-full items-center justify-center p-2">
            @for (group of groups; track group) {
                <div
                    letter
                    class="flex h-6 w-6 cursor-pointer items-center justify-center text-xs capitalize"
                    [class.disabled]="(user_list | async)[group].length <= 0"
                    [class.active]="group === active_group"
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
            @if (user_count | async) {
                @for (group of groups; track group) {
                    @if ((user_list | async)[group].length) {
                        <div
                            group
                            [id]="'letter-' + (group === '#' ? '0' : group)"
                            class="border-base-300 bg-base-200 sticky top-0 z-10 m-2 rounded-lg border text-sm font-medium capitalize"
                        >
                            {{ group }}
                        </div>
                        @for (
                            user of (user_list | async)[group];
                            track user;
                            let i = $index
                        ) {
                            <staff-details
                                [id]="'letter-' + group + '-' + i"
                                [user]="user"
                                [onsite]="
                                    (events | async)
                                        ? (events | async)[user.email]
                                        : false
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
        @if (loading | async) {
            <mat-progress-bar mode="indeterminate" />
        }
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      StaffDetailsComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;94a94c12bcee17d4e5d214b11fe8feaa74e59a28a2b0847c7f81fc8b2e6494ed;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/staff-listing.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\n[letter] {\n  transition: font-size 200ms, color 200ms;\n}\n[group] {\n  border-color: #ccc;\n  padding: 0.5rem 1.65rem;\n}\n.disabled {\n  opacity: 0.2;\n  pointer-events: none;\n}\n.active {\n  font-size: 1.25rem;\n  opacity: 1;\n  color: #d81b60;\n}\n/*# sourceMappingURL=staff-listing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListingComponent, { className: "StaffListingComponent", filePath: "apps/concierge/src/app/staff/staff-listing.component.ts", lineNumber: 115 });
})();

// apps/concierge/src/app/staff/staff-topbar.component.ts
function StaffTopbarComponent_For_8_Template(rf, ctx) {
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
var _StaffTopbarComponent = class _StaffTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(StaffStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.zones = [];
    this.levels = this._org.active_levels;
    this.filters = this._state.filters;
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
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level) {
            return;
          }
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this.zones = zones;
        }
      }
    }));
    this.subscription("levels", this._org.active_levels.subscribe((levels) => {
      this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!this.zones.length && levels.length) {
        this.zones.push(levels[0].id);
      }
      this.updateZones(this.zones);
    }));
    this.setSearch("");
  }
};
_StaffTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275StaffTopbarComponent_BaseFactory;
  return function StaffTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275StaffTopbarComponent_BaseFactory || (\u0275StaffTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_StaffTopbarComponent)))(__ngFactoryType__ || _StaffTopbarComponent);
  };
})();
_StaffTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTopbarComponent, selectors: [["staff-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 15, consts: [[1, "border-base-200", "bg-base-100", "flex", "items-center", "space-x-4", "border-b", "p-4"], ["appearance", "outline", 1, "no-subscript", "w-48"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"]], template: function StaffTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 2);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_5_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(7, StaffTopbarComponent_For_8_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-slide-toggle", 4);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
      return ctx.setFilters({ only_onsite: $event });
    });
    \u0275\u0275elementStart(12, "div", 5);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 6);
    \u0275\u0275elementStart(16, "searchbar", 7);
    \u0275\u0275listener("modelChange", function StaffTopbarComponent_Template_searchbar_modelChange_16_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 9, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", (tmp_4_0 = \u0275\u0275pipeBind1(11, 11, ctx.filters)) == null ? null : tmp_4_0.only_onsite);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 13, "APP.CONCIERGE.DIRECTORY_ONSITE_ONLY"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatSlideToggleModule,
  MatSlideToggle,
  SearchbarComponent,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=staff-topbar.component.css.map */"] });
var StaffTopbarComponent = _StaffTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffTopbarComponent, [{
    type: Component,
    args: [{ selector: "staff-topbar", template: `
        <div
            class="border-base-200 bg-base-100 flex items-center space-x-4 border-b p-4"
        >
            <mat-form-field appearance="outline" class="no-subscript w-48">
                <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-slide-toggle
                class="m-2"
                [ngModel]="(filters | async)?.only_onsite"
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
      CommonModule,
      MatSlideToggleModule,
      SearchbarComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;598beeb1039b1ab45f9544c34b6ccfd79f95c38cdc3862574ac547cac62c7acc;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/staff-topbar.component.ts */\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=staff-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTopbarComponent, { className: "StaffTopbarComponent", filePath: "apps/concierge/src/app/staff/staff-topbar.component.ts", lineNumber: 69 });
})();

// apps/concierge/src/app/staff/staff.component.ts
var _c04 = ["app-new-staff", ""];
function StaffComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var _StaffComponent = class _StaffComponent {
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
};
_StaffComponent.\u0275fac = function StaffComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffComponent)();
};
_StaffComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffComponent, selectors: [["", "app-new-staff", ""]], attrs: _c04, decls: 8, vars: 3, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "w-full"], [1, "h-0", "w-full", "flex-1"], ["mode", "indeterminate", 1, "w-full"]], template: function StaffComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "staff-topbar", 2)(5, "staff-listings", 3);
    \u0275\u0275conditionalCreate(6, StaffComponent_Conditional_6_Template, 1, 0, "mat-progress-bar", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(7, 1, ctx.loading) ? 6 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  StaffTopbarComponent,
  StaffListingComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=staff.component.css.map */"] });
var StaffComponent = _StaffComponent;
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
                @if (loading | async) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      StaffTopbarComponent,
      StaffListingComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/staff/staff.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=staff.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffComponent, { className: "StaffComponent", filePath: "apps/concierge/src/app/staff/staff.component.ts", lineNumber: 49 });
})();

// apps/concierge/src/app/staff/staff.module.ts
var ROUTES = [
  { path: "", component: StaffComponent },
  { path: "emergency-contacts", component: EmergencyContactsComponent }
];
var _StaffModule = class _StaffModule {
};
_StaffModule.\u0275fac = function StaffModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffModule)();
};
_StaffModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _StaffModule });
_StaffModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  StaffComponent,
  EmergencyContactsComponent,
  RouterModule.forChild(ROUTES)
] });
var StaffModule = _StaffModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        StaffComponent,
        EmergencyContactsComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  StaffModule
};
//# sourceMappingURL=staff.module-GD2442FY.js.map
