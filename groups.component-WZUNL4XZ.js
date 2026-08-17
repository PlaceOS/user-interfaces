import {
  GroupBreadcrumbsComponent,
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-GNABOKG3.js";
import {
  CdkTree,
  CdkTreeModule,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodePadding,
  Component,
  DefaultValueAccessor,
  DestroyRef,
  FormField,
  FormsModule,
  FullscreenModalShellComponent,
  HotkeysService,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  PagedSearch,
  SettingsToggleComponent,
  SignageService,
  TranslatePipe,
  ZoneSelectTreeComponent,
  byDisplayName,
  computed,
  debounced,
  dialogClosed,
  effect,
  form,
  i18n,
  inject,
  required,
  resource,
  setClassMetadata,
  signal,
  submit,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
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
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MDW4Q3JB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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
  { key: "read", label: "SIGNAGE_MANAGER.PERM_READ", value: 1 },
  { key: "create", label: "SIGNAGE_MANAGER.PERM_CREATE", value: 2 },
  { key: "update", label: "SIGNAGE_MANAGER.PERM_UPDATE", value: 4 },
  { key: "delete", label: "COMMON.DELETE", value: 8 },
  { key: "operate", label: "SIGNAGE_MANAGER.PERM_OPERATE", value: 16 },
  { key: "approve", label: "COMMON.APPROVE", value: 32 },
  { key: "manage", label: "SIGNAGE_MANAGER.PERM_MANAGE", value: 64 },
  { key: "share", label: "SIGNAGE_MANAGER.PERM_SHARE", value: 128 }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupPermissionsModalComponent, { className: "SignageGroupPermissionsModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-permissions-modal.component.ts", lineNumber: 61 });
})();
function groupPermissionLabels(permissions) {
  return GROUP_PERMISSION_FLAGS.filter((permission) => ((+permissions || 0) & permission.value) === permission.value).map((permission) => permission.label);
}

// apps/signage-manager/src/app/groups/signage-group-user-select-modal.component.ts
var _forTrack02 = ($index, $item) => $item.id || $item.email;
function SignageGroupUserSelectModalComponent_Conditional_13_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function SignageGroupUserSelectModalComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "icon", 8);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignageGroupUserSelectModalComponent_Conditional_13_For_1_Conditional_6_Template, 2, 1, "div", 11);
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
function SignageGroupUserSelectModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupUserSelectModalComponent_Conditional_13_For_1_Template, 7, 3, "button", 7, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.users());
  }
}
function SignageGroupUserSelectModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 12);
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    this._service = inject(SignageService);
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
      loader: ({ params }) => this._service.searchGroupUsers(params)
    }));
    this.users = computed(
      () => {
        const exclude_ids = new Set(this._data.exclude_ids || []);
        return (this._users.value() || []).filter((user) => !exclude_ids.has(user.id) && !exclude_ids.has(user.email));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupUserSelectModalComponent, selectors: [["signage-group-user-select-modal"]], decls: 15, vars: 14, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "text-base-content/60", "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-base-content/70", "text-8xl"], [1, "text-base-content/70"]], template: function SignageGroupUserSelectModalComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, SignageGroupUserSelectModalComponent_Conditional_13_Template, 2, 0)(14, SignageGroupUserSelectModalComponent_Conditional_14_Template, 6, 3, "div", 6);
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
        \u0275\u0275conditional(ctx.users().length > 0 ? 13 : 14);
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
            @if (users().length > 0) {
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
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupUserSelectModalComponent, { className: "SignageGroupUserSelectModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-user-select-modal.component.ts", lineNumber: 99 });
})();

// apps/signage-manager/src/app/groups/signage-group-users.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack03 = ($index, $item) => $item.user_id;
function SignageGroupUsersComponent_Conditional_13_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.user?.email, " ");
  }
}
function SignageGroupUsersComponent_Conditional_13_For_1_Conditional_9_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function SignageGroupUsersComponent_Conditional_13_For_1_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275conditionalCreate(2, SignageGroupUsersComponent_Conditional_13_For_1_Conditional_9_For_1_Conditional_2_Template, 1, 0);
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    const \u0275$index_41_r4 = ctx.$index;
    const \u0275$count_41_r5 = ctx.$count;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, label_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_41_r4 === \u0275$count_41_r5 - 1) ? 2 : -1);
  }
}
function SignageGroupUsersComponent_Conditional_13_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupUsersComponent_Conditional_13_For_1_Conditional_9_For_1_Template, 3, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const labels_r6 = \u0275\u0275readContextLet(8);
    \u0275\u0275repeater(labels_r6);
  }
}
function SignageGroupUsersComponent_Conditional_13_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.DEFAULT_PERMISSIONS"));
  }
}
function SignageGroupUsersComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 8);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignageGroupUsersComponent_Conditional_13_For_1_Conditional_6_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275declareLet(8);
    \u0275\u0275conditionalCreate(9, SignageGroupUsersComponent_Conditional_13_For_1_Conditional_9_Template, 2, 0)(10, SignageGroupUsersComponent_Conditional_13_For_1_Conditional_10_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function SignageGroupUsersComponent_Conditional_13_For_1_Template_button_click_11_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.editUserPermissions(row_r2));
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 14);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function SignageGroupUsersComponent_Conditional_13_For_1_Template_button_click_16_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeUser(row_r2));
    });
    \u0275\u0275elementStart(19, "icon");
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r2.user?.name || row_r2.user_id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r2.user?.email ? 6 : -1);
    \u0275\u0275advance(2);
    const labels_r8 = \u0275\u0275storeLet(\u0275\u0275nextContext(2).permissionLabels(row_r2.permissions));
    \u0275\u0275advance();
    \u0275\u0275conditional(labels_r8.length ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 8, "SIGNAGE_MANAGER.EDIT_USER_PERMS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 10, "SIGNAGE_MANAGER.EDIT_USER_PERMS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 12, "SIGNAGE_MANAGER.REMOVE_USER"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 14, "SIGNAGE_MANAGER.REMOVE_USER"));
  }
}
function SignageGroupUsersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupUsersComponent_Conditional_13_For_1_Template, 21, 16, "div", 7, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r6.users());
  }
}
function SignageGroupUsersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 15);
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
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
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.users = this._service.managed_group_users;
    this.permissionLabels = groupPermissionLabels;
  }
  async addUser() {
    const user = await dialogClosed(this._dialog.open(SignageGroupUserSelectModalComponent, {
      data: {
        exclude_ids: this.users().map((item) => item.user_id)
      },
      panelClass: "mobile-fullscreen"
    }));
    if (user)
      await this._service.addManagedGroupUser(user);
  }
  async editUserPermissions(row) {
    const result = await dialogClosed(this._dialog.open(SignageGroupPermissionsModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.USER_PERMISSIONS"),
        permissions: row.permissions
      }
    }));
    if (result) {
      await this._service.updateManagedGroupUser(row, result.permissions);
    }
  }
  removeUser(row) {
    this._service.removeManagedGroupUser(row);
  }
  static {
    this.\u0275fac = function SignageGroupUsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupUsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupUsersComponent, selectors: [["signage-group-users"]], decls: 15, vars: 14, consts: [[1, "bg-base-100", "border-base-300", "flex", "h-full", "min-h-0", "flex-col", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "gap-2", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/70", "truncate", "text-xs"], [1, "text-base-content/70", "mt-1", "truncate", "text-xs"], [1, "italic"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-4xl"], [1, "text-sm"]], template: function SignageGroupUsersComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, SignageGroupUsersComponent_Conditional_13_Template, 2, 0)(14, SignageGroupUsersComponent_Conditional_14_Template, 6, 3, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 4, "SIGNAGE_MANAGER.USERS_COUNT", \u0275\u0275pureFunction1(12, _c0, ctx.users().length), ctx.users().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 8, "SIGNAGE_MANAGER.ADD_USER_TOOLTIP"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 10, "SIGNAGE_MANAGER.ADD_USER_ARIA"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.users().length ? 13 : 14);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, IconComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-users.component.css.map */"] });
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
                    (click)="addUser()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
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
                                    @let labels =
                                        permissionLabels(row.permissions);
                                    @if (labels.length) {
                                        @for (label of labels; track label) {
                                            {{ label | translate }}
                                            @if (!$last) {
                                                ,
                                            }
                                        }
                                    } @else {
                                        <span class="italic">{{
                                            'SIGNAGE_MANAGER.DEFAULT_PERMISSIONS'
                                                | translate
                                        }}</span>
                                    }
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
    `, imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/signage-group-users.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-users.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupUsersComponent, { className: "SignageGroupUsersComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-users.component.ts", lineNumber: 151 });
})();

// apps/signage-manager/src/app/groups/signage-group-zone-select-modal.component.ts
var SignageGroupZoneSelectModalComponent = class _SignageGroupZoneSelectModalComponent {
  constructor() {
    this._service = inject(SignageService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.list = new PagedSearch((search) => this._service.queryGroupZones(search), byDisplayName, 300);
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
function SignageGroupZonesComponent_Conditional_13_For_1_Conditional_8_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function SignageGroupZonesComponent_Conditional_13_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275conditionalCreate(2, SignageGroupZonesComponent_Conditional_13_For_1_Conditional_8_For_1_Conditional_2_Template, 1, 0);
  }
  if (rf & 2) {
    const label_r2 = ctx.$implicit;
    const \u0275$index_37_r3 = ctx.$index;
    const \u0275$count_37_r4 = ctx.$count;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, label_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_37_r3 === \u0275$count_37_r4 - 1) ? 2 : -1);
  }
}
function SignageGroupZonesComponent_Conditional_13_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupZonesComponent_Conditional_13_For_1_Conditional_8_For_1_Template, 3, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const labels_r5 = \u0275\u0275readContextLet(7);
    \u0275\u0275repeater(labels_r5);
  }
}
function SignageGroupZonesComponent_Conditional_13_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.DEFAULT_PERMISSIONS"));
  }
}
function SignageGroupZonesComponent_Conditional_13_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.DENIED"));
  }
}
function SignageGroupZonesComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 8);
    \u0275\u0275text(2, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275declareLet(7);
    \u0275\u0275conditionalCreate(8, SignageGroupZonesComponent_Conditional_13_For_1_Conditional_8_Template, 2, 0)(9, SignageGroupZonesComponent_Conditional_13_For_1_Conditional_9_Template, 3, 3, "span", 12);
    \u0275\u0275conditionalCreate(10, SignageGroupZonesComponent_Conditional_13_For_1_Conditional_10_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function SignageGroupZonesComponent_Conditional_13_For_1_Template_button_click_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.editZonePermissions(row_r6));
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 14);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function SignageGroupZonesComponent_Conditional_13_For_1_Template_button_click_16_listener() {
      const row_r6 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removeZone(row_r6));
    });
    \u0275\u0275elementStart(19, "icon");
    \u0275\u0275text(20, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r6.zone?.display_name || row_r6.zone?.name || row_r6.zone_id, " ");
    \u0275\u0275advance(2);
    const labels_r8 = \u0275\u0275storeLet(\u0275\u0275nextContext(2).permissionLabels(row_r6.permissions));
    \u0275\u0275advance();
    \u0275\u0275conditional(labels_r8.length ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.deny ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 8, "SIGNAGE_MANAGER.EDIT_ZONE_PERMS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 10, "SIGNAGE_MANAGER.EDIT_ZONE_PERMS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 12, "SIGNAGE_MANAGER.REMOVE_ZONE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 14, "SIGNAGE_MANAGER.REMOVE_ZONE"));
  }
}
function SignageGroupZonesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageGroupZonesComponent_Conditional_13_For_1_Template, 21, 16, "div", 7, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r6.zones());
  }
}
function SignageGroupZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 15);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
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
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.zones = this._service.managed_group_zones;
    this.permissionLabels = groupPermissionLabels;
  }
  async addZone() {
    const zone = await dialogClosed(this._dialog.open(SignageGroupZoneSelectModalComponent, {
      data: {
        exclude_ids: this.zones().map((item) => item.zone_id)
      },
      panelClass: "mobile-fullscreen"
    }));
    if (zone)
      await this._service.addManagedGroupZone(zone);
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
      await this._service.updateManagedGroupZone(row, result.permissions, result.deny);
    }
  }
  removeZone(row) {
    this._service.removeManagedGroupZone(row);
  }
  static {
    this.\u0275fac = function SignageGroupZonesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupZonesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupZonesComponent, selectors: [["signage-group-zones"]], decls: 15, vars: 14, consts: [[1, "bg-base-100", "border-base-300", "flex", "h-full", "min-h-0", "flex-col", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "gap-2", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/70", "mt-1", "truncate", "text-xs"], [1, "italic"], [1, "text-error"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-4xl"], [1, "text-sm"]], template: function SignageGroupZonesComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, SignageGroupZonesComponent_Conditional_13_Template, 2, 0)(14, SignageGroupZonesComponent_Conditional_14_Template, 6, 3, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 4, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(12, _c02, ctx.zones().length), ctx.zones().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 8, "SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 10, "SIGNAGE_MANAGER.ADD_ZONE_ARIA"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.zones().length ? 13 : 14);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, IconComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-zones.component.css.map */"] });
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
                    (click)="addZone()"
                >
                    <icon>add</icon>
                </button>
            </div>
            <div class="gap-2 p-2">
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
                                    @let labels =
                                        permissionLabels(row.permissions);
                                    @if (labels.length) {
                                        @for (label of labels; track label) {
                                            {{ label | translate }}
                                            @if (!$last) {
                                                ,
                                            }
                                        }
                                    } @else {
                                        <span class="italic">{{
                                            'SIGNAGE_MANAGER.DEFAULT_PERMISSIONS'
                                                | translate
                                        }}</span>
                                    }
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
    `, imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/groups/signage-group-zones.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-group-zones.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupZonesComponent, { className: "SignageGroupZonesComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-zones.component.ts", lineNumber: 156 });
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
    this._service = inject(SignageService);
    this.selected_group = this._service.managed_group;
    this.active_tab = this._service.managed_group_tab;
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

// apps/signage-manager/src/app/groups/signage-group-edit-modal.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function SignageGroupEditModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SignageGroupEditModalComponent_Conditional_27_Template(rf, ctx) {
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
function SignageGroupEditModalComponent_For_29_Template(rf, ctx) {
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
    this._service = inject(SignageService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group = this._data.group || {};
    this.parent_groups = () => this._service.manageable_signage_groups().filter((group) => group.id !== this.group.id);
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
  }
  async save() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      try {
        const result = await this._service.saveSignageGroup(this.group, this.model());
        this._dialog_ref.disableClose = false;
        if (result)
          this._dialog_ref.close(result);
      } catch {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function SignageGroupEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupEditModalComponent, selectors: [["signage-group-edit-modal"]], decls: 33, vars: 32, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "signage-group-name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "signage-group-name", 3, "placeholder", "formField"], ["for", "signage-group-description"], ["matInput", "", "id", "signage-group-description", 1, "min-h-32", 3, "placeholder", "formField"], ["for", "signage-group-parent"], ["id", "signage-group-parent", 3, "placeholder", "formField"], ["value", ""], [3, "value"]], template: function SignageGroupEditModalComponent_Template(rf, ctx) {
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
        \u0275\u0275text(22, "Parent Group ");
        \u0275\u0275conditionalCreate(23, SignageGroupEditModalComponent_Conditional_23_Template, 2, 0, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-form-field", 4)(25, "mat-select", 9);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275conditionalCreate(27, SignageGroupEditModalComponent_Conditional_27_Template, 3, 3, "mat-option", 10);
        \u0275\u0275repeaterCreate(28, SignageGroupEditModalComponent_For_29_Template, 2, 2, "mat-option", 11, _forTrack05);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(30, "mat-error");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 14, ctx.group.id ? "SIGNAGE_MANAGER.GROUP_EDIT_HEADING" : "SIGNAGE_MANAGER.GROUP_NEW_HEADING"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 16, "SIGNAGE_MANAGER.GROUP_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 18, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 20, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 22, "SIGNAGE_MANAGER.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 26, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.group.id ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 28, "SIGNAGE_MANAGER.SELECT_PARENT"))("formField", ctx.form.parent_id);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.group.id ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.parent_groups());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 30, "SIGNAGE_MANAGER.PARENT_REQUIRED"));
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
                    >Parent Group
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
                        @if (group.id) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupEditModalComponent, { className: "SignageGroupEditModalComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-edit-modal.component.ts", lineNumber: 100 });
})();

// apps/signage-manager/src/app/groups/signage-group-detail-header.component.ts
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
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Template_button_click_9_listener() {
      const group_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editGroup(group_r3));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 5);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function SignageGroupDetailHeaderComponent_Conditional_0_Template_button_click_13_listener() {
      const group_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeGroup(group_r3));
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.BACK_TO_GROUPS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.name || \u0275\u0275pipeBind1(8, 6, "SIGNAGE_MANAGER.UNNAMED_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "SIGNAGE_MANAGER.EDIT_GROUP_TOOLTIP"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 10, "SIGNAGE_MANAGER.REMOVE_GROUP_TOOLTIP"));
  }
}
var SignageGroupDetailHeaderComponent = class _SignageGroupDetailHeaderComponent {
  constructor() {
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.selected_group = this._service.managed_group;
  }
  clearSelection() {
    this._service.managed_group_id.set("");
  }
  editGroup(group = {}) {
    this._dialog.open(SignageGroupEditModalComponent, {
      data: { group },
      panelClass: "mobile-fullscreen"
    });
  }
  removeGroup(group) {
    this._service.removeSignageGroup(group);
  }
  static {
    this.\u0275fac = function SignageGroupDetailHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupDetailHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupDetailHeaderComponent, selectors: [["signage-group-detail-header"]], decls: 1, vars: 1, consts: [[1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "px-4", "py-3"], ["icon", "", "matRipple", "", "type", "button", 1, "sm:hidden", 3, "click"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-medium"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"]], template: function SignageGroupDetailHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SignageGroupDetailHeaderComponent_Conditional_0_Template, 17, 12, "div", 0);
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
                    class="sm:hidden"
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
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupDetailHeaderComponent, { className: "SignageGroupDetailHeaderComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-detail-header.component.ts", lineNumber: 67 });
})();

// apps/signage-manager/src/app/groups/signage-group-header.component.ts
var _c03 = (a0) => ({ count: a0 });
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
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.groups = this._service.manageable_signage_groups;
    this.group_count = computed(
      () => this.groups().length,
      ...ngDevMode ? [{ debugName: "group_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_add_groups = computed(
      () => this._service.can_manage_all_groups() || this.group_count() > 0,
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupHeaderComponent, selectors: [["signage-group-header"]], decls: 12, vars: 11, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "z-10", "flex", "flex-nowrap", "items-center", "gap-4", "border-b", "px-4", "py-3", "shadow"], [1, "flex-1", "shrink-0"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "gap-4"], [1, "text-sm", "opacity-60"], [1, "min-w-0", "flex-1", "overflow-hidden"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 3, "click", "matTooltip"]], template: function SignageGroupHeaderComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 5, "SIGNAGE_MANAGER.GROUP_COUNT", \u0275\u0275pureFunction1(9, _c03, ctx.group_count()), ctx.group_count()), " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupHeaderComponent, { className: "SignageGroupHeaderComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-header.component.ts", lineNumber: 59 });
})();

// apps/signage-manager/src/app/groups/signage-group-list.component.ts
var _c04 = (a0) => ({ name: a0 });
var _forTrack06 = ($index, $item) => $item.id;
function SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
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
    \u0275\u0275elementStart(0, "div", 15);
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
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Template_button_click_0_listener() {
      const group_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectGroup(group_r2));
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_7_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Conditional_8_Template, 2, 5, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-primary", group_r2.id === ctx_r2.selected_group()?.id)("text-primary-content", group_r2.id === ctx_r2.selected_group()?.id)("hover:bg-base-200", group_r2.id !== ctx_r2.selected_group()?.id);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 10, "SIGNAGE_MANAGER.OPEN_GROUP", \u0275\u0275pureFunction1(15, _c04, group_r2.name || group_r2.id)));
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
    \u0275\u0275repeaterCreate(0, SignageGroupListComponent_Conditional_7_Conditional_0_For_1_Template, 9, 17, "button", 8, _forTrack06);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filtered_groups());
  }
}
function SignageGroupListComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 16);
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
    \u0275\u0275conditionalCreate(0, SignageGroupListComponent_Conditional_7_Conditional_0_Template, 2, 0)(1, SignageGroupListComponent_Conditional_7_Conditional_1_Template, 6, 3, "div", 7);
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
      ctx_r2.onExpandedChange(row_r6, !ctx_r2.isExpanded(row_r6));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "icon", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 2, ctx_r2.isExpanded(row_r6.group) ? "SIGNAGE_MANAGER.COLLAPSE_GROUP" : "SIGNAGE_MANAGER.EXPAND_GROUP", \u0275\u0275pureFunction1(5, _c04, row_r6.group.name || row_r6.group.id)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isExpanded(row_r6.group) ? "expand_more" : "chevron_right", " ");
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
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
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, "autorenew");
    \u0275\u0275elementEnd();
  }
}
function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
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
    \u0275\u0275elementStart(0, "cdk-tree-node", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275conditionalCreate(2, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_2_Template, 4, 7, "button", 20)(3, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_3_Template, 1, 0, "div", 21);
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Template_button_click_4_listener() {
      const row_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectGroup(row_r6.group));
    });
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11)(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_10_Template, 2, 1, "span", 13);
    \u0275\u0275conditionalCreate(11, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_11_Template, 2, 0, "icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Conditional_12_Template, 2, 5, "div", 14);
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
    \u0275\u0275textInterpolate1(" ", row_r6.group.name || \u0275\u0275pipeBind1(9, 17, "SIGNAGE_MANAGER.UNNAMED_GROUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.childCount(row_r6.group) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.children_loading ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.group.description ? 12 : -1);
  }
}
function SignageGroupListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-tree", 5);
    \u0275\u0275template(1, SignageGroupListComponent_Conditional_8_cdk_tree_node_1_Template, 13, 19, "cdk-tree-node", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r2.visible_group_rows())("levelAccessor", ctx_r2.levelAccessor)("trackBy", ctx_r2.trackByRow);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_MANAGEABLE_GROUPS"), " ");
  }
}
var SignageGroupListComponent = class _SignageGroupListComponent {
  constructor() {
    this._service = inject(SignageService);
    this.groups = this._service.manageable_signage_groups;
    this.root_groups = this._service.root_manageable_signage_groups;
    this.selected_group = this._service.managed_group;
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded_groups = this._service.signage_group_tree_expanded;
    this.tree_nodes = signal(
      [],
      ...ngDevMode ? [{ debugName: "tree_nodes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_search_results = computed(
      () => !!this.search().trim(),
      ...ngDevMode ? [{ debugName: "show_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levelAccessor = (row) => row.level;
    this.trackByRow = (_, row) => row.group.id;
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
        const rows = [];
        for (const node of this.tree_nodes()) {
          this.flattenNode(node, 0, rows);
        }
        return rows;
      },
      ...ngDevMode ? [{ debugName: "visible_group_rows" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const root_groups = this.root_groups();
      const existing_roots = untracked(() => this.tree_nodes());
      this.tree_nodes.set(root_groups.map((group) => {
        const existing = existing_roots.find((node) => node.group.id === group.id);
        return existing ? this.syncNode(existing) : this.createNode(group);
      }));
    });
    effect(() => {
      this.groups();
      const selected_group = this.selected_group();
      if (this.show_search_results() || !selected_group?.id)
        return;
      untracked(() => this.syncSelectedPath(selected_group.id));
    });
  }
  onExpandedChange(node, expanded) {
    this.expanded_groups.update((state) => __spreadProps(__spreadValues({}, state), {
      [node.group.id]: expanded
    }));
    if (!expanded || this.hasLoadedChildren(node) || node.children_loading) {
      return;
    }
    this.tree_nodes.update((nodes) => this.updateNode(nodes, node.group.id, (item) => __spreadProps(__spreadValues({}, item), {
      children_loading: true
    })));
    this.loadChildren(node.group.id);
  }
  isExpanded(group_or_node) {
    return !!this.expanded_groups()[this.getGroupId(group_or_node)];
  }
  childCount(group_or_id) {
    if (typeof group_or_id !== "string" && "children_loaded" in group_or_id) {
      if (group_or_id.children_loaded)
        return group_or_id.children.length;
      group_or_id = group_or_id.group;
    }
    const group_id = this.getGroupId(group_or_id);
    return this.child_lookup()[group_id]?.length || (typeof group_or_id === "string" ? 0 : group_or_id.children_count || 0);
  }
  selectGroup(group) {
    this._service.managed_group_id.set(group.id);
  }
  createNode(group) {
    return {
      group,
      children: [],
      children_loaded: false,
      children_loading: false
    };
  }
  async loadChildren(group_id) {
    const children = await this._service.groupChildren(group_id).catch(() => this.child_lookup()[group_id] || []);
    this.applyLoadedChildren(group_id, children);
  }
  applyLoadedChildren(group_id, children) {
    this.tree_nodes.update((nodes) => this.updateNode(nodes, group_id, (item) => __spreadProps(__spreadValues({}, item), {
      children_loaded: true,
      children_loading: false,
      children: children.map((group) => {
        const existing = item.children.find((child) => child.group.id === group.id);
        return existing ? this.syncNode(existing) : this.createNode(group);
      })
    })));
  }
  syncNode(node) {
    const group = this.findGroup(node.group.id) || node.group;
    if (!node.children_loaded)
      return __spreadProps(__spreadValues({}, node), { group });
    const children = node.children.map((child) => this.syncNode(child));
    return __spreadProps(__spreadValues({}, node), { group, children });
  }
  findGroup(group_id) {
    return this.groups().find(({ id }) => id === group_id);
  }
  getGroupPath(group_id) {
    const groups = this.groups();
    const root_ids = new Set(this.tree_nodes().map(({ group }) => group.id));
    if (!group_id || !root_ids.size)
      return [];
    if (root_ids.has(group_id))
      return [group_id];
    const group_path = [group_id];
    let current_group = groups.find((group) => group.id === group_id);
    while (current_group?.parent_id) {
      group_path.unshift(current_group.parent_id);
      if (root_ids.has(current_group.parent_id)) {
        return group_path;
      }
      current_group = groups.find((group) => group.id === current_group.parent_id);
    }
    return root_ids.has(group_path[0]) ? group_path : [];
  }
  getExpansionPath(group_id) {
    const group_path = this.getGroupPath(group_id);
    if (!group_path.length)
      return [];
    return this.childCount(group_id) > 0 ? group_path : group_path.slice(0, -1);
  }
  syncSelectedPath(group_id) {
    this.ensureGroupPathLoaded(group_id);
    this.expandGroupPath(group_id);
  }
  ensureGroupPathLoaded(group_id) {
    for (const current_group_id of this.getExpansionPath(group_id)) {
      const node = this.findTreeNode(this.tree_nodes(), current_group_id);
      if (node?.children_loaded)
        continue;
      this.loadChildren(current_group_id);
    }
  }
  expandGroupPath(group_id) {
    const expansion_path = this.getExpansionPath(group_id);
    if (!expansion_path.length)
      return;
    const state = untracked(() => this.expanded_groups());
    let changed = false;
    const next_state = __spreadValues({}, state);
    for (const current_group_id of expansion_path) {
      if (next_state[current_group_id])
        continue;
      next_state[current_group_id] = true;
      changed = true;
    }
    if (changed) {
      this.expanded_groups.set(next_state);
    }
  }
  getGroupId(group_or_node) {
    if (typeof group_or_node === "string")
      return group_or_node;
    return "children_loaded" in group_or_node ? group_or_node.group.id : group_or_node.id;
  }
  hasLoadedChildren(node) {
    return node.children_loaded && (node.children.length > 0 || this.childCount(node.group.id) === 0);
  }
  findTreeNode(nodes, group_id) {
    for (const node of nodes) {
      if (node.group.id === group_id)
        return node;
      if (!node.children.length)
        continue;
      const child_node = this.findTreeNode(node.children, group_id);
      if (child_node)
        return child_node;
    }
    return null;
  }
  updateNode(nodes, group_id, callback) {
    return nodes.map((node) => {
      if (node.group.id === group_id)
        return callback(node);
      if (!node.children.length)
        return node;
      return __spreadProps(__spreadValues({}, node), {
        children: this.updateNode(node.children, group_id, callback)
      });
    });
  }
  flattenNode(node, level, flat_nodes) {
    flat_nodes.push(__spreadProps(__spreadValues({}, node), { level }));
    if (!this.isExpanded(node))
      return;
    for (const child of node.children) {
      this.flattenNode(child, level + 1, flat_nodes);
    }
  }
  static {
    this.\u0275fac = function SignageGroupListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupListComponent, selectors: [["signage-group-list"]], decls: 10, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "flex", "h-full", "min-w-64", "flex-col", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "id", "group-search", "name", "group-search", 3, "ngModelChange", "placeholder", "ngModel"], [1, "min-h-0", "flex-1", "overflow-auto"], [1, "group-tree", 3, "dataSource", "levelAccessor", "trackBy"], [1, "p-6", "text-center", "opacity-60"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["type", "button", "matRipple", "", 1, "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200"], ["type", "button", "matRipple", "", 1, "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "transition-colors", 3, "click"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mt-0.5", "truncate", "text-xs"], [1, "text-6xl"], ["cdkTreeNodePadding", "", "class", "border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "bg-primary", "text-primary-content", "hover:bg-base-200", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", 1, "border-base-300", "bg-base-200/30", "relative", "flex", "min-h-0", "items-center", "gap-2", "border-b", "pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent"], [1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors"], [1, "min-w-8"], ["type", "button", "matRipple", "", 1, "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-md", "py-3", "text-left", "transition-colors", 3, "click"], [1, "animate-spin", "text-lg"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xl"]], template: function SignageGroupListComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(7, SignageGroupListComponent_Conditional_7_Template, 2, 1)(8, SignageGroupListComponent_Conditional_8_Template, 2, 3, "cdk-tree", 5)(9, SignageGroupListComponent_Conditional_9_Template, 3, 3, "div", 6);
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
        \u0275\u0275conditional(ctx.show_search_results() ? 7 : ctx.visible_group_rows().length ? 8 : 9);
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
                                        onExpandedChange(row, !isExpanded(row));
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
                                        @if (row.children_loading) {
                                            <icon class="animate-spin text-lg"
                                                >autorenew</icon
                                            >
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
var _forTrack07 = ($index, $item) => $item.id;
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
    \u0275\u0275attribute("aria-selected", ctx_r2.active_tab() === tab_r2.id)("aria-controls", "group-" + tab_r2.id + "-panel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 10, tab_r2.label), " ");
  }
}
var SignageGroupTabsComponent = class _SignageGroupTabsComponent {
  constructor() {
    this._service = inject(SignageService);
    this.active_tab = this._service.managed_group_tab;
    this.tabs = [
      { id: "users", label: "SIGNAGE_MANAGER.TAB_USERS" },
      { id: "zones", label: "SIGNAGE_MANAGER.TAB_ZONES" }
    ];
  }
  static {
    this.\u0275fac = function SignageGroupTabsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupTabsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupTabsComponent, selectors: [["signage-group-tabs"]], decls: 4, vars: 3, consts: [[1, "bg-base-100", "border-base-300", "mx-2", "mt-2", "flex", "overflow-hidden", "rounded-lg", "border"], ["type", "button", "role", "tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "border-b-2", "text-primary", "opacity-60", "id"], ["type", "button", "role", "tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click", "id"]], template: function SignageGroupTabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "nav", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275repeaterCreate(2, SignageGroupTabsComponent_For_3_Template, 3, 12, "button", 1, _forTrack07);
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
        <nav
            class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
            [attr.aria-label]="'SIGNAGE_MANAGER.GROUP_DETAILS_TABS' | translate"
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
                    [id]="'group-' + tab.id + '-tab'"
                >
                    {{ tab.label | translate }}
                </button>
            }
        </nav>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupTabsComponent, { className: "SignageGroupTabsComponent", filePath: "apps/signage-manager/src/app/groups/signage-group-tabs.component.ts", lineNumber: 32 });
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
    this._service = inject(SignageService);
    this.selected_group = this._service.managed_group;
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
//# sourceMappingURL=groups.component-WZUNL4XZ.js.map
