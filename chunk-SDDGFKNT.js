import {
  outputToObservable
} from "./chunk-TNDPKIGK.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger
} from "./chunk-ND37TEVP.js";
import {
  searchGuests
} from "./chunk-4YBHDB4T.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-MZVEFEGQ.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-SUJSAOO4.js";
import {
  USER_DOMAIN,
  generateUserForm
} from "./chunk-JIBVHYNC.js";
import {
  searchStaff
} from "./chunk-A646ZXHH.js";
import {
  AsyncHandler,
  FormField,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix,
  SettingsService,
  User,
  currentUser
} from "./chunk-4TCF4KBF.js";
import {
  COMMA,
  CommonModule,
  Component,
  DefaultValueAccessor,
  ENTER,
  FormsModule,
  Input,
  Ma,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  Rt,
  TranslatePipe,
  ViewChild,
  computed,
  csvToJson,
  debounced,
  downloadFile,
  first,
  forwardRef,
  inject,
  input,
  model,
  notifyError,
  output,
  resource,
  setClassMetadata,
  signal,
  unique,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-CKWNTDV3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/users/src/lib/user-form.component.ts
function UserFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2, " Name");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3);
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("name"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form().name);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 5);
    \u0275\u0275text(2, " Email");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3);
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "A valid email is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("email"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form().email);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 3);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("organisation"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.ORGANISATION"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form().organisation);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "COMMON.ORGANISATION"), " is required ");
  }
}
function UserFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 9);
    \u0275\u0275text(2, " Phone: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 3);
    \u0275\u0275element(4, "input", 10);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6, "Phone format is invalid");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.hasError("phone"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form().phone);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-checkbox", 11);
    \u0275\u0275text(2, " Assistance required ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form().assistance_required);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-checkbox", 11);
    \u0275\u0275text(2, " Visit expected ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form().visit_expected);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, UserFormComponent_Conditional_0_Conditional_1_Template, 10, 3, "div", 1);
    \u0275\u0275conditionalCreate(2, UserFormComponent_Conditional_0_Conditional_2_Template, 10, 3, "div", 1);
    \u0275\u0275conditionalCreate(3, UserFormComponent_Conditional_0_Conditional_3_Template, 12, 9, "div", 1);
    \u0275\u0275conditionalCreate(4, UserFormComponent_Conditional_0_Conditional_4_Template, 7, 3, "div", 1);
    \u0275\u0275conditionalCreate(5, UserFormComponent_Conditional_0_Conditional_5_Template, 3, 1, "div", 1);
    \u0275\u0275conditionalCreate(6, UserFormComponent_Conditional_0_Conditional_6_Template, 3, 1, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().email ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().organisation ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().phone ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().assistance_required ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().visit_expected ? 6 : -1);
  }
}
var UserFormComponent = class _UserFormComponent {
  constructor() {
    this.form = input(
      void 0,
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  hasError(name) {
    const field = this.form()?.[name];
    return !!field && field().invalid() && field().touched();
  }
  static {
    this.\u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["user-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["user-form", "", 1, "w-full"], [1, "flex", "w-full", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "placeholder", "Name", 3, "formField"], ["for", "email"], ["matInput", "", "placeholder", "Email Address", 3, "formField"], ["for", "org"], ["matInput", "", "placeholder", "e.g. Conteso", 3, "formField"], ["for", "phone"], ["matInput", "", "type", "tel", "placeholder", "Phone", 3, "formField"], ["color", "primary", 3, "formField"]], template: function UserFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, UserFormComponent_Conditional_0_Template, 7, 6, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.form() ? 0 : -1);
      }
    }, dependencies: [
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%], \nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=user-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "user-form", template: `
        @if (form()) {
            <form user-form class="w-full">
                @if (form().name) {
                    <div class="flex w-full flex-col">
                        <label for="name" [class.error]="hasError('name')">
                            Name<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="Name"
                                [formField]="form().name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().email) {
                    <div class="flex w-full flex-col">
                        <label for="email" [class.error]="hasError('email')">
                            Email<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="Email Address"
                                [formField]="form().email"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().organisation) {
                    <div class="flex w-full flex-col">
                        <label
                            for="org"
                            [class.error]="hasError('organisation')"
                        >
                            {{ 'COMMON.ORGANISATION' | translate
                            }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                placeholder="e.g. Conteso"
                                [formField]="form().organisation"
                            />
                            <mat-error>
                                {{ 'COMMON.ORGANISATION' | translate }} is
                                required
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().phone) {
                    <div class="flex w-full flex-col">
                        <label for="phone" [class.error]="hasError('phone')">
                            Phone:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                type="tel"
                                placeholder="Phone"
                                [formField]="form().phone"
                            />
                            <mat-error>Phone format is invalid</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form().assistance_required) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            color="primary"
                            [formField]="form().assistance_required"
                        >
                            Assistance required
                        </mat-checkbox>
                    </div>
                }
                @if (form().visit_expected) {
                    <div class="flex w-full flex-col">
                        <mat-checkbox
                            color="primary"
                            [formField]="form().visit_expected"
                        >
                            Visit expected
                        </mat-checkbox>
                    </div>
                }
            </form>
        }
    `, imports: [
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;fd077178d2e8a022e17f68cb6befbd424b2439b93e8476c2dd172ca203446823;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-form.component.ts */\n:host,\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=user-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "libs/users/src/lib/user-form.component.ts", lineNumber: 122 });
})();

// libs/users/src/lib/new-user-modal.component.ts
function NewUserModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function NewUserModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "user-form", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r0.form());
  }
}
function NewUserModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.USER_SAVING"));
  }
}
function NewUserModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function NewUserModalComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "COMMON.SAVE"), " ");
  }
}
var NewUserModalComponent = class _NewUserModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.event = output();
    this.user = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = signal(
      generateUserForm(new User()),
      ...ngDevMode ? [{ debugName: "form" }] : (
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
    const user = this._data.user || {};
    this.user.set(user);
    this.form.set(generateUserForm(user));
  }
  saveChanges() {
    const form = this.form();
    if (!form)
      return;
    form().markAsTouched();
    if (form().valid()) {
      const new_user = new User(__spreadProps(__spreadValues({}, form().value()), {
        is_external: true
      }));
      this.event.emit({ reason: "done", metadata: new_user });
    }
  }
  static {
    this.\u0275fac = function NewUserModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewUserModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewUserModalComponent, selectors: [["new-user-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "w-full", "min-w-[24rem]", "flex-col", "items-center", "px-4"], [1, "flex", "w-full", "flex-col", "items-center", "space-y-2", "p-2"], [1, "border-base-200", "flex", "w-full", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], [3, "form"], ["diameter", "32"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["btn", "", "matRipple", "", 3, "click"]], template: function NewUserModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, NewUserModalComponent_Conditional_4_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, NewUserModalComponent_Conditional_5_Template, 2, 1, "main", 3)(6, NewUserModalComponent_Conditional_6_Template, 5, 3, "main", 4);
        \u0275\u0275conditionalCreate(7, NewUserModalComponent_Conditional_7_Template, 7, 6, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx.user()?.id ? "COMMON.USER_EDIT" : "COMMON.USER_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      UserFormComponent,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslatePipe
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewUserModalComponent, [{
    type: Component,
    args: [{ selector: "new-user-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (user()?.id ? 'COMMON.USER_EDIT' : 'COMMON.USER_NEW')
                        | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="flex w-full min-w-[24rem] flex-col items-center px-4">
                <user-form [form]="form()"></user-form>
            </main>
        } @else {
            <main class="flex w-full flex-col items-center space-y-2 p-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.USER_SAVING' | translate }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex w-full items-center justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="inverse" mat-dialog-close>
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      UserFormComponent,
      MatDialogModule,
      IconComponent,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;d1500f659b91dd2b74c0cb226624db0e8f324134dbaaf267a69f046570069bff;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/new-user-modal.component.ts */\nmain {\n  min-height: 20em !important;\n  width: 100%;\n}\nfooter button {\n  min-width: 8em;\n}\n/*# sourceMappingURL=new-user-modal.component.css.map */\n"] }]
  }], () => [], { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewUserModalComponent, { className: "NewUserModalComponent", filePath: "libs/users/src/lib/new-user-modal.component.ts", lineNumber: 74 });
})();

// libs/form-fields/src/lib/user-list-field.component.ts
var _c0 = ["search_field"];
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0) => ({ email: a0 });
function UserListFieldComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 13);
    \u0275\u0275listener("removed", function UserListFieldComponent_For_7_Template_mat_chip_row_removed_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser($index_r2));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275classProp("bg-base-200", !item_r4.is_external)("bg-warning", item_r4.is_external);
    \u0275\u0275property("matTooltip", item_r4.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-base-content!", !item_r4.is_external)("text-warning-content!", item_r4.is_external);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name || item_r4.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-base-content!", !item_r4.is_external)("text-warning-content!", item_r4.is_external);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 15, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(18, _c1, item_r4.name || item_r4.email)));
  }
}
function UserListFieldComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function UserListFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_14_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUserFromEmail());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "FORM.USER_LIST_ADD_EXTERNAL", \u0275\u0275pureFunction1(4, _c2, ctx_r2.search())), " ");
  }
}
function UserListFieldComponent_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.username);
  }
}
function UserListFieldComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275listener("click", function UserListFieldComponent_For_16_Template_mat_option_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275element(2, "a-user-avatar", 18);
    \u0275\u0275elementStart(3, "div", 11)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, UserListFieldComponent_For_16_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r7.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r7.username && user_r7.username !== user_r7.email ? 8 : -1);
  }
}
function UserListFieldComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 21);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewUserModal());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 25)(10, "div", 22)(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 26);
    \u0275\u0275listener("change", function UserListFieldComponent_Conditional_17_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUsersFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 27);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_17_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.downloadCSVTemplate();
      return \u0275\u0275resetView(ctx_r2.download.emit());
    });
    \u0275\u0275elementStart(19, "div", 22)(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 24);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "FORM.USER_BTN_ADD_EXTERNAL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "FORM.USER_BTN_ADD_EXTERNAL_SIMPLE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "FORM.USER_BTN_UPLOAD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "FORM.USER_BTN_UPLOAD_SIMPLE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 14, "FORM.USER_BTN_TEMPLATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "FORM.USER_BTN_TEMPLATE_SIMPLE"), " ");
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var ACCEPTED_FILE_TYPES = ["text/csv", "text/plain"];
var DENIED_FILE_TYPES = [
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];
var UserListFieldComponent = class _UserListFieldComponent extends AsyncHandler {
  async searchStaff(q) {
    return this._use_basic_user_search() ? Ma({ q, authority_id: Rt()?.id }).then((_) => _.data.map((u) => new User(u))) : searchStaff(q);
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.time = input(
      Date.now(),
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.limit = input(
      3,
      ...ngDevMode ? [{ debugName: "limit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests = input(
      false,
      ...ngDevMode ? [{ debugName: "guests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests_only = input(
      false,
      ...ngDevMode ? [{ debugName: "guests_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_actions = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_template = input(
      false,
      ...ngDevMode ? [{ debugName: "custom_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = input(
      void 0,
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.new_user = output();
    this.download = output();
    this.separatorKeysCodes = [ENTER, COMMA];
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_el = viewChild(
      "search_field",
      ...ngDevMode ? [{ debugName: "_search_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_basic_user_search = this._settings.signal("basic_user_search", false);
    this._debounced_search = debounced(this.search, 300);
    this._user_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_search.value() }),
      loader: async ({ params: { q } }) => {
        if (!q)
          return [];
        try {
          if (!this.guests())
            return await this.searchStaff(q);
          const [staff_results, guests] = await Promise.all([
            this.searchStaff(q),
            searchGuests(q)
          ]);
          const staff = this.guests_only() ? [] : staff_results;
          const visitors_list = [];
          const visitors = this._settings.get("visitor-invitees") || [];
          for (const item of visitors) {
            if (typeof item !== "string")
              continue;
            const [email, name, company, international] = item.split("|");
            visitors_list.push({
              email,
              name,
              company,
              international: international === "1"
            });
          }
          return unique(staff.concat(guests).concat(visitors_list), "email");
        } catch {
          return [];
        }
      }
    }));
    this.user_list = computed(
      () => [...this._user_search.value() ?? []].sort((a, b) => a.name.localeCompare(b.name)),
      ...ngDevMode ? [{ debugName: "user_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._user_search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "active_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.validFn = (s) => validateEmail(s);
    this.emptyClick = () => this.openNewUserModal(new User());
    this.search_valid_email = computed(
      () => validateEmail(this.search()),
      ...ngDevMode ? [{ debugName: "search_valid_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  updateSearch(new_value = "") {
    this.timeout("search", () => this.search.set(new_value));
  }
  addUserFromEmail(email = "") {
    if (!email)
      email = this.search();
    if (!validateEmail(email))
      return;
    const user = new User({ id: email, email, name: email.split("@")[0] });
    this.addUser(user);
    const { name, organisation } = user;
    const visitor_details = `${email}|${name}|${organisation}|0`;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", [
      ...old_visitors.filter((_) => !_.includes(email)),
      visitor_details
    ]);
    this.timeout("clear_search", () => {
      this.search.set("");
      this._search_el().nativeElement.value = "";
    }, 100);
  }
  /**
   * Add user to the user list
   * @param user
   */
  addUser(user) {
    const user_id = user.id || user.email;
    const list = this.active_list().filter((_) => (_.id || _.email) !== user_id);
    this.setValue([
      ...list,
      new User(__spreadProps(__spreadValues({}, user), {
        id: user.id || user.email,
        visit_expected: (!user.id && user.is_external !== true ? user.visit_expected : null) ?? true
      }))
    ]);
    this.timeout("clear_search", () => {
      this.search.set("");
      this._search_el().nativeElement.value = "";
    }, 100);
  }
  /**
   * Remove the user at the given position in the list.
   *
   * Removal is positional rather than identity based. Visitor lists are built
   * from booking data where `id`/`email` can be blank or shared between
   * entries, and an identity filter then drops every matching row instead of
   * the one the user clicked. (PPT-2634)
   * @param index Index of the user in `active_list`
   */
  removeUser(index) {
    const list = [...this.active_list()];
    if (index < 0 || index >= list.length)
      return;
    list.splice(index, 1);
    this.setValue(list);
  }
  /**
   * Load CSV file and populate the user list with the contents
   * @param event File input field event
   */
  addUsersFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        if (!ACCEPTED_FILE_TYPES.includes(file.type) || DENIED_FILE_TYPES.includes(file.type)) {
          notifyError("Only CSV files are supported");
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          this.processCsvData(evt.srcElement.result);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError("Error reading file."));
      }
    }
  }
  /**
   * Process raw CSV data and save user data to attendee list
   * @param data CSV data
   */
  processCsvData(data) {
    const list = csvToJson(data) || [];
    const id = currentUser()?.staff_id || "unknown";
    for (const el of list) {
      el.name = el.name || `${el.first_name} ${el.last_name}`;
      const display = (el.name || `${Math.floor(Math.random() * 99999999)}`).split(" ").join("_").toLowerCase();
      if (!el.email) {
        el.email = `${display}+${id}@guest.${USER_DOMAIN}`;
      }
      const internal_emails = this._settings.get("app.bookings.internal_emails") || ["place.tech"];
      el.visit_expected = el.visit_expected ?? !internal_emails.find((_) => el.email.endsWith(_));
      el.phone = "" + el.phone;
      this.addUser(new User(el));
    }
  }
  /* istanbul ignore next */
  /** Download template CSV file */
  downloadCSVTemplate() {
    if (this.custom_template())
      return;
    const template = `Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected
Fake Org,John,Smith,john.smith@example.com,01234567898,false,true`;
    downloadFile("template.csv", template);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_list.set(new_value || []);
    if (this._onChange) {
      this._onChange(new_value || []);
    }
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_list.set(value || []);
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  displayFn(item) {
    return item?.name || "";
  }
  /**
   * Open modal to add or update user details
   */
  openNewUserModal(user = new User()) {
    const ref = this._dialog.open(NewUserModalComponent, {
      width: "auto",
      height: "auto",
      data: { user }
    });
    const event = ref.componentInstance?.event;
    if (!event)
      return;
    outputToObservable(event).pipe(first((_) => _.reason === "done")).subscribe((event2) => {
      this.addUser(event2.metadata);
      ref.close();
    });
  }
  static {
    this.\u0275fac = function UserListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListFieldComponent, selectors: [["a-user-list-field"]], viewQuery: function UserListFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._search_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { time: [1, "time"], disabled: [1, "disabled"], limit: [1, "limit"], guests: [1, "guests"], guests_only: [1, "guests_only"], hide_actions: [1, "hide_actions"], custom_template: [1, "custom_template"], filter: [1, "filter"] }, outputs: { disabled: "disabledChange", new_user: "new_user", download: "download" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _UserListFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature], decls: 18, vars: 11, consts: [["origin", "matAutocompleteOrigin"], ["chipList", ""], ["search_field", ""], ["auto", "matAutocomplete"], ["form-field", "", 1, "mb-4"], ["search", ""], ["appearance", "outline", "matAutocompleteOrigin", "", 1, "w-full"], ["aria-label", "User Seleciom"], ["user", "", 3, "bg-base-200", "bg-warning", "matTooltip"], ["name", "user_email", 3, "ngModelChange", "matChipInputTokenEnd", "placeholder", "ngModel", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["diameter", "24", "matSuffix", ""], [1, "leading-tight"], ["actions", "", 1, "-mt-4", "flex", "items-center", "space-x-2"], ["user", "", 3, "removed", "matTooltip"], [1, "flex", "items-center", "space-x-2"], ["matChipRemove", "", "remove", ""], [3, "click"], [1, "leading-tight", 3, "click"], [1, "-ml-2", 3, "user"], [1, "text-xs", "opacity-30"], [1, "truncate"], ["btn", "", "matRipple", "", "type", "button", "name", "new-contact", 1, "inverse", "flex-1", "sm:flex-none", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "hidden", "sm:inline"], [1, "inline", "sm:hidden"], ["btn", "", "matRipple", "", "type", "button", "name", "upload-csv", 1, "inverse", "relative", "flex-1", "sm:flex-none"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["btn", "", "matRipple", "", "type", "button", "name", "download-template", 1, "inverse", "flex-1", "sm:flex-none", 3, "click"]], template: function UserListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "mat-form-field", 6, 0)(4, "mat-chip-grid", 7, 1);
        \u0275\u0275repeaterCreate(6, UserListFieldComponent_For_7_Template, 8, 20, "mat-chip-row", 8, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 9, 2);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("ngModelChange", function UserListFieldComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.updateSearch($event);
        })("matChipInputTokenEnd", function UserListFieldComponent_Template_input_matChipInputTokenEnd_8_listener($event) {
          return ctx.addUserFromEmail($event.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(11, UserListFieldComponent_Conditional_11_Template, 1, 0, "mat-spinner", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-autocomplete", null, 3);
        \u0275\u0275conditionalCreate(14, UserListFieldComponent_Conditional_14_Template, 3, 6, "mat-option");
        \u0275\u0275repeaterCreate(15, UserListFieldComponent_For_16_Template, 9, 4, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, UserListFieldComponent_Conditional_17_Template, 26, 18, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const chipList_r9 = \u0275\u0275reference(5);
        const auto_r10 = \u0275\u0275reference(13);
        \u0275\u0275attribute("disabled", ctx.disabled());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.active_list());
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "FORM.USER_LIST_PLACEHOLDER"))("ngModel", ctx.search())("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 11 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.search_valid_email() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.user_list());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_actions() ? 17 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatFormFieldModule,
      MatFormField,
      MatSuffix,
      MatChipsModule,
      MatChipGrid,
      MatChipInput,
      MatChipRemove,
      MatChipRow,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatAutocompleteOrigin,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      UserAvatarComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-list-field", template: `
        <div class="mb-4" form-field [attr.disabled]="disabled()">
            <div search>
                <mat-form-field
                    class="w-full"
                    appearance="outline"
                    matAutocompleteOrigin
                    #origin="matAutocompleteOrigin"
                >
                    <mat-chip-grid #chipList aria-label="User Seleciom">
                        @for (item of active_list(); track $index) {
                            <mat-chip-row
                                user
                                [class.bg-base-200]="!item.is_external"
                                [class.bg-warning]="item.is_external"
                                (removed)="removeUser($index)"
                                [matTooltip]="item.email"
                            >
                                <div
                                    class="flex items-center space-x-2"
                                    [class.text-base-content!]="
                                        !item.is_external
                                    "
                                    [class.text-warning-content!]="
                                        item.is_external
                                    "
                                >
                                    <div>{{ item.name || item.email }}</div>
                                </div>
                                <button
                                    matChipRemove
                                    remove
                                    [class.text-base-content!]="
                                        !item.is_external
                                    "
                                    [class.text-warning-content!]="
                                        item.is_external
                                    "
                                    [attr.aria-label]="
                                        'COMMON.REMOVE_ITEM'
                                            | translate
                                                : {
                                                      name:
                                                          item.name ||
                                                          item.email,
                                                  }
                                    "
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
                    </mat-chip-grid>
                    <input
                        #search_field
                        [placeholder]="'FORM.USER_LIST_PLACEHOLDER' | translate"
                        name="user_email"
                        [ngModel]="search()"
                        (ngModelChange)="updateSearch($event)"
                        [matAutocomplete]="auto"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        (matChipInputTokenEnd)="addUserFromEmail($event.value)"
                    />
                    @if (loading()) {
                        <mat-spinner diameter="24" matSuffix></mat-spinner>
                    }
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    @if (search_valid_email()) {
                        <mat-option (click)="addUserFromEmail()">
                            {{
                                'FORM.USER_LIST_ADD_EXTERNAL'
                                    | translate: { email: search() }
                            }}
                        </mat-option>
                    }
                    @for (user of user_list(); track user) {
                        <mat-option
                            (click)="addUser(user)"
                            class="leading-tight"
                        >
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                        @if (
                                            user.username &&
                                            user.username !== user.email
                                        ) {
                                            (<span class="truncate">{{
                                                user.username
                                            }}</span
                                            >)
                                        }
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-autocomplete>
            </div>
            @if (!hide_actions()) {
                <div class="-mt-4 flex items-center space-x-2" actions>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="new-contact"
                        class="inverse flex-1 sm:flex-none"
                        (click)="openNewUserModal()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_ADD_EXTERNAL' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_ADD_EXTERNAL_SIMPLE'
                                        | translate
                                }}
                            </span>
                        </div>
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="upload-csv"
                        class="inverse relative flex-1 sm:flex-none"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_UPLOAD' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{ 'FORM.USER_BTN_UPLOAD_SIMPLE' | translate }}
                            </span>
                        </div>
                        <input
                            class="absolute inset-0 opacity-0"
                            type="file"
                            (change)="addUsersFromFile($event)"
                        />
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="download-template"
                        class="inverse flex-1 sm:flex-none"
                        (click)="downloadCSVTemplate(); download.emit()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_TEMPLATE' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_TEMPLATE_SIMPLE' | translate
                                }}
                            </span>
                        </div>
                    </button>
                </div>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UserListFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      FormsModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      UserAvatarComponent,
      MatTooltipModule
    ] }]
  }], () => [], { time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], limit: [{ type: Input, args: [{ isSignal: true, alias: "limit", required: false }] }], guests: [{ type: Input, args: [{ isSignal: true, alias: "guests", required: false }] }], guests_only: [{ type: Input, args: [{ isSignal: true, alias: "guests_only", required: false }] }], hide_actions: [{ type: Input, args: [{ isSignal: true, alias: "hide_actions", required: false }] }], custom_template: [{ type: Input, args: [{ isSignal: true, alias: "custom_template", required: false }] }], filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }], new_user: [{ type: Output, args: ["new_user"] }], download: [{ type: Output, args: ["download"] }], _search_el: [{ type: ViewChild, args: ["search_field", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListFieldComponent, { className: "UserListFieldComponent", filePath: "libs/form-fields/src/lib/user-list-field.component.ts", lineNumber: 257 });
})();

export {
  UserListFieldComponent
};
//# sourceMappingURL=chunk-SDDGFKNT.js.map
