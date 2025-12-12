import {
  UserSearchFieldComponent
} from "./chunk-2TMQ6H3Q.js";
import {
  AsyncPipe,
  BehaviorSubject,
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
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  TranslatePipe,
  Xu,
  __spreadProps,
  __spreadValues,
  as,
  catchError,
  combineLatest,
  deleteAsset,
  ec,
  filter,
  first,
  firstValueFrom,
  i18n,
  inject,
  lo,
  map,
  notifyError,
  notifySuccess,
  of,
  queryAssetCategories,
  queryAssetGroups,
  queryAssets,
  randomString,
  saveAsset,
  saveAssetCategory,
  saveAssetGroup,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  unique,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-B2WI2KLR.js";

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
      return queryAssets({ zone_id: bld.id, type_id: assetType.id, limit: 200 }).pipe(catchError(() => of([])), map((assets) => assets.filter((a) => a.asset_type_id === assetType.id).map((a) => this.assetToContact(a))));
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
    this.legacyMetadata$ = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => Xu(bld.id, "emergency_contacts").pipe(catchError(() => of({ details: { contacts: [], roles: [] } })))), map(({ details }) => details || {
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
      const new_category = await firstValueFrom(saveAssetCategory(as(new lo({
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
        await firstValueFrom(saveAssetCategory(as(new lo(__spreadProps(__spreadValues({}, category), {
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
      await ec(bld.id, {
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
      await firstValueFrom(saveAssetCategory(new lo(__spreadProps(__spreadValues({}, category), {
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
function EmergencyContactModalComponent_Conditional_5_For_35_Template(rf, ctx) {
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
function EmergencyContactModalComponent_Conditional_5_For_46_Conditional_0_Template(rf, ctx) {
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
function EmergencyContactModalComponent_Conditional_5_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmergencyContactModalComponent_Conditional_5_For_46_Conditional_0_Template, 2, 2, "mat-option", 21);
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
    \u0275\u0275elementStart(7, "mat-form-field", 11);
    \u0275\u0275element(8, "input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "label", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 11);
    \u0275\u0275element(15, "input", 16);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "label", 15);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 11);
    \u0275\u0275element(22, "input", 17);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 9)(25, "label", 18);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 11)(29, "mat-select", 19);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "mat-option", 20);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(34, EmergencyContactModalComponent_Conditional_5_For_35_Template, 2, 2, "mat-option", 21, _forTrack0);
    \u0275\u0275pipe(36, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 9)(38, "label", 22);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 13)(42, "mat-form-field", 23)(43, "mat-select", 24);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275repeaterCreate(45, EmergencyContactModalComponent_Conditional_5_For_46_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(47, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "button", 25)(49, "icon");
    \u0275\u0275text(50, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 26);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 14, "FORM.NAME"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 18, "FORM.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 20, "FORM.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 22, "APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 24, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 26, "COMMON.LEVEL_SELECT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 28, "COMMON.LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(36, 30, ctx_r1.levels));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 32, "APP.CONCIERGE.CONTACTS_ROLES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(44, 34, "APP.CONCIERGE.CONTACTS_ROLES_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(47, 36, ctx_r1.roles));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", role_form_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 38, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
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
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-form-field", 11)(2, "input", 30);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactModalComponent_ng_template_8_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 31);
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
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
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
}, decls: 10, vars: 6, consts: [["role_form", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-xl", "p-4"], ["loading", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "flex", "items-center", "justify-end", "border-t", "border-base-200", "px-4", "py-2"], [3, "formGroup"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Full name"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "email"], ["matInput", "", "formControlName", "email", "type", "email", 3, "placeholder"], ["matInput", "", "formControlName", "phone", "type", "tel", 3, "placeholder"], ["for", "zone"], ["formControlName", "zone", 3, "placeholder"], ["value", ""], [3, "value"], ["for", "roles"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", "formControlName", "roles", 3, "placeholder"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "space-x-2", 3, "content"], [1, "pr-2"], [1, "mb-4", 3, "diameter"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "rounded-sm", "bg-base-100", "p-4"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function EmergencyContactModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EmergencyContactModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, EmergencyContactModalComponent_Conditional_5_Template, 54, 41, "main", 4)(6, EmergencyContactModalComponent_Conditional_6_Template, 5, 4, "main", 5);
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
  CommonModule,
  AsyncPipe,
  TranslatePipe,
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
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none bg-base-200 p-2"
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
                class="flex items-center justify-end border-t border-base-200 px-4 py-2"
            >
                <button btn matRipple class="w-48" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <ng-template #role_form>
            <div class="rounded-sm bg-base-100 p-4">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactModalComponent, { className: "EmergencyContactModalComponent", filePath: "apps/concierge/src/app/staff/emergency-contact-modal.component.ts", lineNumber: 220 });
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
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-form-field", 14)(2, "input", 15);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementModalComponent_ng_template_16_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.role_name, $event) || (ctx_r3.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_template_16_Template_button_click_4_listener() {
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
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "APP.CONCIERGE.CONTACTS_ROLES_SAVE"), " ");
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
}, decls: 18, vars: 10, consts: [["role_form", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-128", "max-h-[65vh]", "min-w-md", "overflow-y-auto"], [1, "hover:bg-base-200:bg-base-300", "m-2", "flex", "items-center", "space-x-2", "rounded-sm", "border", "border-base-200", "p-2"], [1, "border-t", "border-base-200"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click", "content"], [1, "truncate", "pl-2"], [1, "text-2xl"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "h-12", "w-12", "rounded-sm", "border", "border-secondary", "text-secondary", 3, "click", "content"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "border", "border-error", "text-error", 3, "click"], [1, "rounded-sm", "bg-base-100", "p-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function RoleManagementModalComponent_Template(rf, ctx) {
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
    \u0275\u0275template(16, RoleManagementModalComponent_ng_template_16_Template, 7, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.CONTACTS_ROLES_MANAGE' | translate }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        <main class="h-128 max-h-[65vh] min-w-md overflow-y-auto">
            @for (role of roles | async; track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 m-2 flex items-center space-x-2 rounded-sm border border-base-200 p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-sm border border-secondary text-secondary"
                        (click)="active = role; role_name = role"
                        customTooltip
                        [content]="role_form"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded-sm border border-error text-error"
                        (click)="removeRole(role)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer class="border-t border-base-200">
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
            <div class="rounded-sm bg-base-100 p-4">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleManagementModalComponent, { className: "RoleManagementModalComponent", filePath: "apps/concierge/src/app/staff/role-management-modal.component.ts", lineNumber: 102 });
})();

export {
  EmergencyContactsService,
  EmergencyContactModalComponent,
  RoleManagementModalComponent
};
//# sourceMappingURL=chunk-GD3JBSRR.js.map
