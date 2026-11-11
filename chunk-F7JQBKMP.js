import {
  outputToObservable
} from "./chunk-QLEMKVFT.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger
} from "./chunk-NFJCKDCG.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  escapeHtml
} from "./chunk-UJAEEDTL.js";
import {
  UserAvatarComponent
} from "./chunk-QRMLNMSI.js";
import {
  searchGuests,
  searchStaff
} from "./chunk-LSH5QYG4.js";
import {
  USER_DOMAIN,
  generateUserForm
} from "./chunk-MAHNQXNI.js";
import {
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  openConfirmModal
} from "./chunk-ZF47YLLW.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSuffix
} from "./chunk-OBFIS6LK.js";
import {
  FormField
} from "./chunk-VQFDNFNI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-ZZEIQAMR.js";
import {
  MatOption
} from "./chunk-SLHPNGWP.js";
import {
  TranslatePipe
} from "./chunk-4C74AXN2.js";
import {
  IconComponent
} from "./chunk-5YOUSSU7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  provideValueAccessor
} from "./chunk-4X4ZISSE.js";
import {
  AsyncHandler,
  SettingsService,
  User,
  currentUser,
  toVisitorInternalOrExternal
} from "./chunk-WNLQ5E42.js";
import {
  Mt,
  csvToJson,
  downloadFile,
  i18n,
  notifyError,
  oh,
  unique
} from "./chunk-GAMVBC5P.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JVDB3H4W.js";
import {
  COMMA,
  ENTER
} from "./chunk-CPSLMZ5T.js";
import {
  CommonModule,
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  debounced,
  first,
  inject,
  input,
  model,
  output,
  resource,
  setClassMetadata,
  signal,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
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
} from "./chunk-UL33YUHR.js";
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
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
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
        \u0275\u0275conditionalCreate(4, NewUserModalComponent_Conditional_4_Template, 4, 3, "button", 2);
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
                <button
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                    icon
                    matRipple
                    mat-dialog-close
                >
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewUserModalComponent, { className: "NewUserModalComponent", filePath: "libs/users/src/lib/new-user-modal.component.ts", lineNumber: 79 });
})();

// libs/form-fields/src/lib/user-list-field.component.ts
var _c0 = ["search_field"];
var _c1 = ["*"];
var _c2 = (a0) => ({ item: a0 });
var _c3 = (a0) => ({ email: a0 });
var _c4 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id || $item.email;
function UserListFieldComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 17);
    \u0275\u0275listener("removed", function UserListFieldComponent_For_8_Template_mat_chip_row_removed_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser($index_r2));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 19);
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
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 15, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(18, _c2, item_r4.name || item_r4.email)));
  }
}
function UserListFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 11);
  }
}
function UserListFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.search());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "FORM.USER_LIST_ADD_EXTERNAL", \u0275\u0275pureFunction1(5, _c3, ctx_r2.search())), " ");
  }
}
function UserListFieldComponent_For_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.username);
  }
}
function UserListFieldComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275listener("click", function UserListFieldComponent_For_17_Template_mat_option_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUser(user_r6));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275element(2, "a-user-avatar", 21);
    \u0275\u0275elementStart(3, "div", 14)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, UserListFieldComponent_For_17_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r6.username && user_r6.username !== user_r6.email ? 8 : -1);
  }
}
function UserListFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 24);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewUserModal());
    });
    \u0275\u0275elementStart(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 28);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_18_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const file_input_r8 = \u0275\u0275reference(18);
      return \u0275\u0275resetView($event.target !== file_input_r8 ? file_input_r8.click() : void 0);
    });
    \u0275\u0275elementStart(10, "div", 25)(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 29, 4);
    \u0275\u0275listener("change", function UserListFieldComponent_Conditional_18_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUsersFromFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 30);
    \u0275\u0275listener("click", function UserListFieldComponent_Conditional_18_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.downloadCSVTemplate();
      return \u0275\u0275resetView(ctx_r2.download.emit());
    });
    \u0275\u0275elementStart(20, "div", 25)(21, "span", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 27);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275projection(27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.disabled());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "FORM.USER_BTN_ADD_EXTERNAL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 12, "FORM.USER_BTN_ADD_EXTERNAL_SIMPLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disabled());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "FORM.USER_BTN_UPLOAD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 16, "FORM.USER_BTN_UPLOAD_SIMPLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disabled());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disabled());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 18, "FORM.USER_BTN_TEMPLATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "FORM.USER_BTN_TEMPLATE_SIMPLE"), " ");
  }
}
function UserListFieldComponent_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 33);
    \u0275\u0275listener("ngModelChange", function UserListFieldComponent_Conditional_19_For_6_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setAttendeeInternational(item_r10, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.getAttendeeInternational(item_r10))("ngModelOptions", \u0275\u0275pureFunction0(4, _c4))("disabled", ctx_r2.disabled());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.name || item_r10.email, " ");
  }
}
function UserListFieldComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275repeaterCreate(5, UserListFieldComponent_Conditional_19_For_6_Template, 2, 5, "mat-checkbox", 32, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "BOOKINGS.INTERNATIONAL_VISITORS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.active_list());
  }
}
function UserListFieldComponent_Conditional_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-radio-group", 33);
    \u0275\u0275listener("ngModelChange", function UserListFieldComponent_Conditional_20_For_6_Template_mat_radio_group_ngModelChange_3_listener($event) {
      const item_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setAttendeeType(item_r12, $event));
    });
    \u0275\u0275elementStart(4, "mat-radio-button", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-radio-button", 37);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.name || item_r12.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.getAttendeeType(item_r12))("ngModelOptions", \u0275\u0275pureFunction0(10, _c4))("disabled", ctx_r2.disabled());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "COMMON.TYPE_INTERNAL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "COMMON.TYPE_EXTERNAL"), " ");
  }
}
function UserListFieldComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275repeaterCreate(5, UserListFieldComponent_Conditional_20_For_6_Template, 10, 11, "div", 35, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.active_list());
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var ACCEPTED_FILE_TYPES = ["text/csv", "text/plain"];
var MAX_SAVED_VISITORS = 50;
var MAX_CSV_ROWS = 500;
var CSV_PREVIEW_COUNT = 5;
function isCsvFile(file) {
  return /\.csv$/i.test(file.name || "") || ACCEPTED_FILE_TYPES.includes(file.type);
}
var COUNTRY_SECOND_LEVEL = ["ac", "co", "com", "edu", "gov", "net", "org"];
function defaultInternalDomains(email = "") {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain)
    return [];
  const labels = domain.split(".");
  const country_domain = labels.length > 2 && labels[labels.length - 1].length === 2 && COUNTRY_SECOND_LEVEL.includes(labels[labels.length - 2]);
  const root = labels.slice(country_domain ? -3 : -2).join(".");
  return unique([domain, root]);
}
function isInternalEmail(email = "", domains) {
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return domains.some((item) => {
    const internal = `${item}`.toLowerCase().replace(/^[@.]/, "");
    return !!internal && (domain === internal || domain.endsWith(`.${internal}`));
  });
}
var UserListFieldComponent = class _UserListFieldComponent extends AsyncHandler {
  async searchStaff(q, signal2) {
    return this._use_basic_user_search() ? oh({ q, authority_id: Mt()?.id }).then((_) => _.data.map((u) => new User(u))) : searchStaff(q, { signal: signal2, exclude_guests: false });
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
    this.flags = input(
      false,
      ...ngDevMode ? [{ debugName: "flags" }] : (
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
    this._allow_international = this._settings.signal("events.allow_international", false);
    this._allow_internal_or_external = this._settings.signal("events.allow_attendee_internal_or_external", false);
    this.show_international = computed(
      () => this.flags() && !!this._allow_international(),
      ...ngDevMode ? [{ debugName: "show_international" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_internal_or_external = computed(
      () => this.flags() && !!this._allow_internal_or_external(),
      ...ngDevMode ? [{ debugName: "show_internal_or_external" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_search = debounced(this.search, 300);
    this._user_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_search.value() }),
      loader: async ({ params: { q }, abortSignal }) => {
        if (!q || q.length < this.limit())
          return [];
        try {
          if (!this.guests())
            return await this.searchStaff(q, abortSignal);
          const [staff_results, guests] = await Promise.all([
            this.searchStaff(q, abortSignal),
            searchGuests(q)
          ]);
          const staff = this.guests_only() ? [] : staff_results;
          const visitors_list = [];
          const visitors = this._settings.get("visitor-invitees") || [];
          const search = q.toLowerCase();
          for (const item of visitors) {
            if (typeof item !== "string")
              continue;
            const [email, name, company, international] = item.split("|");
            const text = `${email} ${name}`.toLowerCase();
            if (!text.includes(search))
              continue;
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
      () => [...this._user_search.value() ?? []].sort((a, b) => (a.name || "").localeCompare(b.name || "")),
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
    this.search_valid_email = computed(
      () => validateEmail(this.search()),
      ...ngDevMode ? [{ debugName: "search_valid_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Update the search text. The search request is debounced */
  updateSearch(new_value = "") {
    this.search.set(new_value);
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
      ...old_visitors.filter((_) => typeof _ === "string" && _.split("|")[0].toLowerCase() !== email.toLowerCase()),
      visitor_details
    ].slice(-MAX_SAVED_VISITORS));
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
    this.addUsers([user]);
  }
  /**
   * Add users to the user list. A user that is already in the list is
   * replaced. The form value changes once for the whole list.
   */
  addUsers(users) {
    let list = this.active_list();
    for (const user of users) {
      const user_id = user.id || user.email;
      list = [
        ...list.filter((_) => (_.id || _.email) !== user_id),
        new User(__spreadProps(__spreadValues({}, user), {
          id: user.id || user.email,
          visit_expected: (!user.id && user.is_external !== true ? user.visit_expected : null) ?? true
        }))
      ];
    }
    this.setValue(list);
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
  /** Whether the given user is flagged as an international visitor */
  getAttendeeInternational(item) {
    return !!item?.extension_data?.international;
  }
  /** Internal/external type of the given user. Defaults to `internal` */
  getAttendeeType(item) {
    return toVisitorInternalOrExternal(item?.extension_data?.visitor_internal_or_external);
  }
  /** Flag the given user as international, or not */
  setAttendeeInternational(item, international) {
    this._setAttendeeFlags(item, { international: !!international });
  }
  /** Set the internal/external type of the given user */
  setAttendeeType(item, type) {
    this._setAttendeeFlags(item, {
      visitor_internal_or_external: toVisitorInternalOrExternal(type)
    });
  }
  /**
   * Replace the user with a copy that holds the new flags, and emit the
   * updated list. The user is copied, not changed, because it can be shared
   * with a cached event, and a cancelled edit must not change that event.
   */
  _setAttendeeFlags(item, flags) {
    if (!item)
      return;
    this.setValue(this.active_list().map((user) => user === item ? new User(__spreadProps(__spreadValues({}, user), {
      extension_data: __spreadValues(__spreadValues({}, user.extension_data), flags)
    })) : user));
  }
  /**
   * Load CSV file and populate the user list with the contents
   * @param event File input field event
   */
  addUsersFromFile(event) {
    if (event.target) {
      const file = event.target.files[0];
      if (file) {
        if (!isCsvFile(file)) {
          notifyError(i18n("FORM.USER_CSV_ONLY"));
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          this.processCsvData(evt.srcElement.result, file.name);
          event.target.value = "";
        });
        reader.addEventListener("error", (_) => notifyError(i18n("FORM.FILE_READ_ERROR")));
      }
    }
  }
  /**
   * Read users from CSV data, then add them after the user confirms a
   * preview. Only the first `MAX_CSV_ROWS` rows are read.
   * @param data CSV data
   * @param file_name Name of the file, for the preview
   */
  async processCsvData(data, file_name = "") {
    const rows = (csvToJson(data || "") || []).filter((row) => Object.values(row).some((value) => value !== "" && value != null));
    if (!rows.length) {
      notifyError(i18n("FORM.USER_CSV_EMPTY", { name: file_name }));
      return;
    }
    const list = rows.slice(0, MAX_CSV_ROWS);
    const id = currentUser()?.staff_id || "unknown";
    const users = [];
    for (const el of list) {
      el.name = el.name || [el.first_name, el.last_name].filter((_) => !!_).join(" ");
      const display = (el.name || `${Math.floor(Math.random() * 99999999)}`).split(" ").join("_").toLowerCase();
      if (!el.email) {
        el.email = `${display}+${id}@guest.${USER_DOMAIN}`;
      }
      const internal_domains = this._settings.get("app.bookings.internal_emails") || defaultInternalDomains(currentUser()?.email);
      el.visit_expected = el.visit_expected ?? !isInternalEmail(el.email, internal_domains);
      el.phone = el.phone == null ? "" : `${el.phone}`;
      users.push(new User(el));
    }
    const confirmed = await this.confirmCsvImport(users, file_name, rows.length > list.length);
    if (confirmed)
      this.addUsers(users);
  }
  /**
   * Show the users read from a CSV file, and return whether the user wants
   * to add them
   * @param users Users read from the file
   * @param file_name Name of the file
   * @param limited Whether rows after `MAX_CSV_ROWS` were left out
   */
  async confirmCsvImport(users, file_name, limited) {
    const shown = users.slice(0, CSV_PREVIEW_COUNT).map((user) => `<li>${escapeHtml(user.name)} (${escapeHtml(user.email)})</li>`).join("");
    const more = users.length - CSV_PREVIEW_COUNT;
    const content = [
      `<p>${escapeHtml(i18n("FORM.USER_CSV_PREVIEW", {
        count: users.length,
        name: file_name
      }))}</p>`,
      `<ul class="my-2 text-left">${shown}</ul>`,
      more > 0 ? `<p>${escapeHtml(i18n("FORM.USER_CSV_PREVIEW_MORE", { count: more }))}</p>` : "",
      limited ? `<p>${escapeHtml(i18n("FORM.USER_CSV_ROW_LIMIT", { count: MAX_CSV_ROWS }))}</p>` : ""
    ].join("");
    const result = await openConfirmModal({
      title: i18n("FORM.USER_CSV_PREVIEW_TITLE"),
      content,
      icon: { content: "upload_file" }
    }, this._dialog);
    result.close?.();
    return result.reason === "done";
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
  /** Add the typed email when its option is picked. User options have no value */
  onOptionSelected(value) {
    if (typeof value === "string" && value)
      this.addUserFromEmail(value);
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
    }, inputs: { time: [1, "time"], disabled: [1, "disabled"], limit: [1, "limit"], guests: [1, "guests"], guests_only: [1, "guests_only"], hide_actions: [1, "hide_actions"], flags: [1, "flags"], custom_template: [1, "custom_template"] }, outputs: { disabled: "disabledChange", new_user: "new_user", download: "download" }, features: [\u0275\u0275ProvidersFeature([provideValueAccessor(() => _UserListFieldComponent)]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c1, decls: 21, vars: 18, consts: [["origin", "matAutocompleteOrigin"], ["chipList", ""], ["search_field", ""], ["auto", "matAutocomplete"], ["file_input", ""], ["form-field", "", 1, "mb-4"], ["search", ""], ["appearance", "outline", "matAutocompleteOrigin", "", 1, "w-full"], [3, "disabled"], ["user", "", 3, "bg-base-200", "bg-warning", "matTooltip"], ["name", "user_email", 3, "ngModelChange", "matChipInputTokenEnd", "placeholder", "ngModel", "disabled", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["diameter", "24", "matSuffix", ""], [3, "optionSelected"], [3, "value"], [1, "leading-tight"], ["actions", "", 1, "-mt-4", "flex", "items-center", "space-x-2"], [1, "mt-2", "flex", "flex-col"], ["user", "", 3, "removed", "matTooltip"], [1, "flex", "items-center", "space-x-2"], ["matChipRemove", "", "remove", ""], [1, "leading-tight", 3, "click"], [1, "-ml-2", 3, "user"], [1, "text-xs", "opacity-30"], [1, "truncate"], ["btn", "", "matRipple", "", "type", "button", "name", "new-contact", 1, "inverse", "flex-1", "sm:flex-none", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center"], [1, "hidden", "sm:inline"], [1, "inline", "sm:hidden"], ["btn", "", "matRipple", "", "type", "button", "name", "upload-csv", 1, "inverse", "relative", "flex-1", "sm:flex-none", 3, "click", "disabled"], ["tabindex", "-1", "aria-hidden", "true", "type", "file", "accept", ".csv,text/csv", 1, "absolute", "inset-0", "opacity-0", 3, "change", "disabled"], ["btn", "", "matRipple", "", "type", "button", "name", "download-template", 1, "inverse", "flex-1", "sm:flex-none", 3, "click", "disabled"], [1, "flex", "flex-wrap", "gap-x-4", "gap-y-2"], [3, "ngModel", "ngModelOptions", "disabled"], [3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "flex", "flex-col", "gap-y-2"], [1, "flex", "flex-wrap", "items-center", "gap-x-4"], ["value", "internal"], ["value", "external"]], template: function UserListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "mat-form-field", 7, 0)(4, "mat-chip-grid", 8, 1);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275repeaterCreate(7, UserListFieldComponent_For_8_Template, 8, 20, "mat-chip-row", 9, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 10, 2);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("ngModelChange", function UserListFieldComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.updateSearch($event);
        })("matChipInputTokenEnd", function UserListFieldComponent_Template_input_matChipInputTokenEnd_9_listener($event) {
          return ctx.addUserFromEmail($event.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(12, UserListFieldComponent_Conditional_12_Template, 1, 0, "mat-spinner", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-autocomplete", 12, 3);
        \u0275\u0275listener("optionSelected", function UserListFieldComponent_Template_mat_autocomplete_optionSelected_13_listener($event) {
          return ctx.onOptionSelected($event.option.value);
        });
        \u0275\u0275conditionalCreate(15, UserListFieldComponent_Conditional_15_Template, 3, 7, "mat-option", 13);
        \u0275\u0275repeaterCreate(16, UserListFieldComponent_For_17_Template, 9, 4, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(18, UserListFieldComponent_Conditional_18_Template, 28, 22, "div", 15);
        \u0275\u0275conditionalCreate(19, UserListFieldComponent_Conditional_19_Template, 7, 3, "div", 16);
        \u0275\u0275conditionalCreate(20, UserListFieldComponent_Conditional_20_Template, 7, 3, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const chipList_r13 = \u0275\u0275reference(5);
        const auto_r14 = \u0275\u0275reference(14);
        \u0275\u0275attribute("disabled", ctx.disabled());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.disabled());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 14, "FORM.USER_SELECTION"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.active_list());
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 16, "FORM.USER_LIST_PLACEHOLDER"))("ngModel", ctx.search())("disabled", ctx.disabled())("matAutocomplete", auto_r14)("matChipInputFor", chipList_r13)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.search_valid_email() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.user_list());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_actions() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_international() && ctx.active_list().length ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_internal_or_external() && ctx.active_list().length ? 20 : -1);
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
      MatCheckboxModule,
      MatCheckbox,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
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
                    <mat-chip-grid
                        #chipList
                        [attr.aria-label]="'FORM.USER_SELECTION' | translate"
                        [disabled]="disabled()"
                    >
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
                                                      item:
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
                        [disabled]="disabled()"
                        [matAutocomplete]="auto"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        (matChipInputTokenEnd)="addUserFromEmail($event.value)"
                    />
                    @if (loading()) {
                        <mat-spinner diameter="24" matSuffix></mat-spinner>
                    }
                </mat-form-field>
                <mat-autocomplete
                    #auto="matAutocomplete"
                    (optionSelected)="onOptionSelected($event.option.value)"
                >
                    @if (search_valid_email()) {
                        <!--
                            The email is the option value. Picking an option writes its
                            value to the input, so the search text is gone by the time
                            a click handler would run
                        -->
                        <mat-option [value]="search()">
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
                        [disabled]="disabled()"
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
                    <!--
                        The button is the control. The file input on top takes mouse clicks
                        and dropped files, and the button opens it for keyboard users
                    -->
                    <button
                        btn
                        matRipple
                        type="button"
                        name="upload-csv"
                        class="inverse relative flex-1 sm:flex-none"
                        [disabled]="disabled()"
                        (click)="
                            $event.target !== file_input
                                ? file_input.click()
                                : undefined
                        "
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
                            #file_input
                            tabindex="-1"
                            aria-hidden="true"
                            class="absolute inset-0 opacity-0"
                            type="file"
                            accept=".csv,text/csv"
                            [disabled]="disabled()"
                            (change)="addUsersFromFile($event)"
                        />
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="download-template"
                        class="inverse flex-1 sm:flex-none"
                        [disabled]="disabled()"
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
                    <ng-content />
                </div>
            }
            @if (show_international() && active_list().length) {
                <div class="mt-2 flex flex-col">
                    <label>{{
                        'BOOKINGS.INTERNATIONAL_VISITORS' | translate
                    }}</label>
                    <div class="flex flex-wrap gap-x-4 gap-y-2">
                        @for (
                            item of active_list();
                            track item.id || item.email
                        ) {
                            <mat-checkbox
                                [ngModel]="getAttendeeInternational(item)"
                                (ngModelChange)="
                                    setAttendeeInternational(item, $event)
                                "
                                [ngModelOptions]="{
                                    standalone: true,
                                }"
                                [disabled]="disabled()"
                            >
                                {{ item.name || item.email }}
                            </mat-checkbox>
                        }
                    </div>
                </div>
            }
            @if (show_internal_or_external() && active_list().length) {
                <div class="mt-2 flex flex-col">
                    <label>{{
                        'BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL' | translate
                    }}</label>
                    <div class="flex flex-col gap-y-2">
                        @for (
                            item of active_list();
                            track item.id || item.email
                        ) {
                            <div class="flex flex-wrap items-center gap-x-4">
                                <span>{{ item.name || item.email }}</span>
                                <mat-radio-group
                                    [ngModel]="getAttendeeType(item)"
                                    (ngModelChange)="
                                        setAttendeeType(item, $event)
                                    "
                                    [ngModelOptions]="{
                                        standalone: true,
                                    }"
                                    [disabled]="disabled()"
                                >
                                    <mat-radio-button value="internal">
                                        {{ 'COMMON.TYPE_INTERNAL' | translate }}
                                    </mat-radio-button>
                                    <mat-radio-button value="external">
                                        {{ 'COMMON.TYPE_EXTERNAL' | translate }}
                                    </mat-radio-button>
                                </mat-radio-group>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `, providers: [provideValueAccessor(() => UserListFieldComponent)], imports: [
      CommonModule,
      MatFormFieldModule,
      MatChipsModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatRadioModule,
      FormsModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      UserAvatarComponent
    ] }]
  }], () => [], { time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], limit: [{ type: Input, args: [{ isSignal: true, alias: "limit", required: false }] }], guests: [{ type: Input, args: [{ isSignal: true, alias: "guests", required: false }] }], guests_only: [{ type: Input, args: [{ isSignal: true, alias: "guests_only", required: false }] }], hide_actions: [{ type: Input, args: [{ isSignal: true, alias: "hide_actions", required: false }] }], flags: [{ type: Input, args: [{ isSignal: true, alias: "flags", required: false }] }], custom_template: [{ type: Input, args: [{ isSignal: true, alias: "custom_template", required: false }] }], new_user: [{ type: Output, args: ["new_user"] }], download: [{ type: Output, args: ["download"] }], _search_el: [{ type: ViewChild, args: ["search_field", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListFieldComponent, { className: "UserListFieldComponent", filePath: "libs/form-fields/src/lib/user-list-field.component.ts", lineNumber: 396 });
})();

export {
  UserListFieldComponent
};
//# debugId=45560dbe-89ef-5fe5-b507-21cba4826c70
//# sourceMappingURL=chunk-F7JQBKMP.js.map
