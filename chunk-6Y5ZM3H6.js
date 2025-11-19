import {
  UserSearchFieldComponent
} from "./chunk-67VYHWAM.js";
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
  Pu,
  ReactiveFormsModule,
  TranslatePipe,
  Tu,
  __spreadProps,
  __spreadValues,
  combineLatest,
  filter,
  i18n,
  inject,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  randomString,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
} from "./chunk-I4HSLPYT.js";

// apps/concierge/src/app/staff/emergency-contact-modal.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [];
function EmergencyContactModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EmergencyContactModalComponent_Conditional_5_For_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", role_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r3, " ");
  }
}
function EmergencyContactModalComponent_Conditional_5_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmergencyContactModalComponent_Conditional_5_For_33_Conditional_0_Template, 2, 2, "mat-option", 22);
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275conditional(role_r3 ? 0 : -1);
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
    \u0275\u0275elementStart(24, "div", 9)(25, "label", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 13)(29, "mat-form-field", 18)(30, "mat-select", 19);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275repeaterCreate(32, EmergencyContactModalComponent_Conditional_5_For_33_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 20)(36, "icon");
    \u0275\u0275text(37, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 21);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const role_form_r4 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(29, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "FORM.NAME"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 15, "FORM.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "FORM.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 19, "APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 21, "APP.CONCIERGE.CONTACTS_ROLES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 23, "APP.CONCIERGE.CONTACTS_ROLES_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(((tmp_11_0 = \u0275\u0275pipeBind1(34, 25, ctx_r1.data)) == null ? null : tmp_11_0.roles) || \u0275\u0275pureFunction0(30, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("content", role_form_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 27, "APP.CONCIERGE.CONTACTS_ROLES_ADD"), " ");
  }
}
function EmergencyContactModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 23);
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
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 24);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
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
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-form-field", 11)(2, "input", 26);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactModalComponent_ng_template_8_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_ng_template_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
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
    this._changes = new BehaviorSubject(0);
    this.loading = signal(false);
    this.contact = this._data;
    this.data = combineLatest([
      this._org.active_building,
      this._changes
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => Pu(bld.id, "emergency_contacts")), map(({ details }) => details || { roles: [], contacts: [] }), shareReplay(1));
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || `contact-${randomString(8)}`),
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
    const data = await nextValueFrom(this.data);
    await Tu(this._org.building.id, {
      name: "emergency_contacts",
      description: "Emergency Contacts",
      details: {
        roles: [...data.roles || [], this.role_name].filter((_) => !!_),
        contacts: data.contacts
      }
    }).toPromise();
    this._changes.next(0);
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
    const data = await nextValueFrom(this.data);
    const contacts = data?.contacts || [];
    const new_contacts = [
      ...contacts.filter((_) => _.id !== this.contact?.id),
      this.form.value
    ].sort((a, b) => a.name.localeCompare(b.name));
    await Tu(this._org.building.id, {
      name: "emergency_contacts",
      description: "Emergency Contacts",
      details: { roles: data.roles || [], contacts: new_contacts }
    }).toPromise().catch((e) => {
      this._dialog_ref.disableClose = false;
      this.loading.set(false);
      notifyError(i18n("APP.CONCIERGE.CONTACTS_SAVE_ERROR", { error: e }));
      throw e;
    });
    this._dialog_ref.disableClose = false;
    notifySuccess(i18n("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS"));
    this.loading.set(false);
    this._dialog_ref.close();
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
}, decls: 10, vars: 6, consts: [["role_form", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[36rem]", "p-4"], ["loading", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "flex", "items-center", "justify-end", "border-t", "border-base-200", "px-4", "py-2"], [3, "formGroup"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Full name"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col"], ["for", "email"], ["matInput", "", "formControlName", "email", "type", "email", 3, "placeholder"], ["matInput", "", "formControlName", "phone", "type", "tel", 3, "placeholder"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", "formControlName", "roles", 3, "placeholder"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "space-x-2", 3, "content"], [1, "pr-2"], [3, "value"], [1, "mb-4", 3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "rounded", "bg-base-100", "p-4"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function EmergencyContactModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EmergencyContactModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, EmergencyContactModalComponent_Conditional_5_Template, 41, 31, "main", 4)(6, EmergencyContactModalComponent_Conditional_6_Template, 5, 4, "main", 5);
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
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
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
            <main class="w-[36rem] p-4">
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
                        <label for="email">{{
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
                                    @for (
                                        role of (data | async)?.roles || [];
                                        track $index
                                    ) {
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
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <ng-template #role_form>
            <div class="rounded bg-base-100 p-4">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactModalComponent, { className: "EmergencyContactModalComponent", filePath: "apps/concierge/src/app/staff/emergency-contact-modal.component.ts", lineNumber: 208 });
})();

// apps/concierge/src/app/staff/role-management-modal.component.ts
var _forTrack0 = ($index, $item) => $item + $index;
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
    this._org = inject(OrganisationService);
    this._dialog_ref = inject(MatDialogRef);
    this._changes = new BehaviorSubject(0);
    this.loading = false;
    this.data = combineLatest([
      this._org.active_building,
      this._changes
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => Pu(bld.id, "emergency_contacts")), map(({ details }) => {
      const value = details || { roles: [], contacts: [] };
      if (!value.roles)
        value.roles = [];
      if (!value.contacts)
        value.contacts = [];
      return value;
    }), shareReplay(1));
    this.roles = this.data.pipe(map((_) => _.roles));
    this._tooltip = viewChild(CustomTooltipComponent);
  }
  async removeRole(role) {
    if (!role)
      return;
    this.loading = true;
    this._dialog_ref.disableClose = true;
    const data = await nextValueFrom(this.data);
    await Tu(this._org.building.id, {
      name: "emergency_contacts",
      description: "Emergency Contacts",
      details: {
        roles: [...data.roles.filter((_) => _ !== role)].filter((_) => !!_).sort((a, b) => a.localeCompare(b)),
        contacts: data.contacts.map((_) => __spreadProps(__spreadValues({}, _), {
          roles: _.roles.filter((r) => r !== role)
        }))
      }
    }).toPromise();
    this._changes.next(0);
    this.loading = false;
    this._dialog_ref.disableClose = false;
  }
  async updateRoles() {
    if (!this.role_name)
      return;
    this.loading = true;
    this._tooltip().close();
    this._dialog_ref.disableClose = true;
    const data = await nextValueFrom(this.data);
    await Tu(this._org.building.id, {
      name: "emergency_contacts",
      description: "Emergency Contacts",
      details: {
        roles: [
          ...data.roles.filter((_) => _ !== this.active),
          this.role_name
        ].filter((_) => !!_).sort((a, b) => a.localeCompare(b)),
        contacts: data.contacts
      }
    }).toPromise();
    this._changes.next(0);
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
}, decls: 18, vars: 10, consts: [["role_form", ""], [1, "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded", "border-none", "bg-base-200", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[32rem]", "max-h-[65vh]", "min-w-[28rem]", "overflow-y-auto"], [1, "hover:bg-base-200:bg-base-300", "m-2", "flex", "items-center", "space-x-2", "rounded", "border", "border-base-200", "p-2"], [1, "border-t", "border-base-200"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-center", "space-x-2", 3, "click", "content"], [1, "truncate", "pl-2"], [1, "text-2xl"], [1, "flex-1", "truncate", "px-2"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "h-12", "w-12", "rounded", "border", "border-secondary", "text-secondary", 3, "click", "content"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "border", "border-error", "text-error", 3, "click"], [1, "rounded", "bg-base-100", "p-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function RoleManagementModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, RoleManagementModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "main", 4);
    \u0275\u0275repeaterCreate(6, RoleManagementModalComponent_For_7_Template, 9, 2, "div", 5, _forTrack0);
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
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
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
        <main class="h-[32rem] max-h-[65vh] min-w-[28rem] overflow-y-auto">
            @for (role of roles | async; track role + $index) {
                <div
                    class="hover:bg-base-200:bg-base-300 m-2 flex items-center space-x-2 rounded border border-base-200 p-2"
                >
                    <div class="flex-1 truncate px-2">{{ role }}</div>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded border border-secondary text-secondary"
                        (click)="active = role; role_name = role"
                        customTooltip
                        [content]="role_form"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded border border-error text-error"
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
            <div class="rounded bg-base-100 p-4">
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

export {
  EmergencyContactModalComponent,
  RoleManagementModalComponent
};
//# sourceMappingURL=chunk-6Y5ZM3H6.js.map
