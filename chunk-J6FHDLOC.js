import {
  listSignageSharedGroups,
  openConfirmModal,
  signage_shared_groups_change,
  unshareSignageItem
} from "./chunk-7YL2E6BC.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-C7ELQ7TP.js";
import {
  TranslatePipe
} from "./chunk-OQHCC7EM.js";
import {
  Component,
  IconComponent,
  Input,
  MatDialog,
  MatRipple,
  MatRippleModule,
  computed,
  i18n,
  inject,
  input,
  notifyError,
  notifySuccess,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QSNPLM4U.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/signage-shared-with.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
function SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "delete");
    \u0275\u0275elementEnd();
  }
}
function SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const group_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.unshare(group_r2));
    });
    \u0275\u0275conditionalCreate(2, SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Conditional_2_Template, 1, 0, "mat-spinner", 6)(3, SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Conditional_3_Template, 2, 0, "icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !!ctx_r2.unsharing_group_id());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "SIGNAGE_MANAGER.SHARED_WITH_REMOVE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.unsharing_group_id() === group_r2.id ? 2 : 3);
  }
}
function SignageSharedWithComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1)(1, "icon", 2);
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SignageSharedWithComponent_Conditional_0_For_5_Conditional_5_Template, 4, 5, "button", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", group_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_unshare() ? 5 : -1);
  }
}
function SignageSharedWithComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 0);
    \u0275\u0275repeaterCreate(4, SignageSharedWithComponent_Conditional_0_For_5_Template, 6, 2, "li", 1, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.compact_label() ? "text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.SHARED_WITH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.shared_groups());
  }
}
var SignageSharedWithComponent = class _SignageSharedWithComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.type = input.required(
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_id = input(
      "",
      ...ngDevMode ? [{ debugName: "item_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_id = input(
      "",
      ...ngDevMode ? [{ debugName: "group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_unshare = input(
      true,
      ...ngDevMode ? [{ debugName: "allow_unshare" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.compact_label = input(
      false,
      ...ngDevMode ? [{ debugName: "compact_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.unsharing_group_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "unsharing_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._shared_groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_shared_groups" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        type: this.type(),
        id: this.item_id(),
        group_id: this.group_id(),
        shared_groups_change: signage_shared_groups_change()
      }),
      loader: ({ params }) => listSignageSharedGroups(params.type, params.id, params.group_id),
      defaultValue: []
    }));
    this.shared_groups = computed(
      () => this._shared_groups.value() ?? [],
      ...ngDevMode ? [{ debugName: "shared_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible = computed(
      () => {
        const groups = this.shared_groups();
        if (!groups.length)
          return false;
        return groups.length > 1 || groups[0].id !== this.group_id();
      },
      ...ngDevMode ? [{ debugName: "visible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_unshare = computed(
      () => this.allow_unshare() && this.shared_groups().length > 1,
      ...ngDevMode ? [{ debugName: "can_unshare" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async unshare(group) {
    if (this.unsharing_group_id())
      return;
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SHARED_WITH_REMOVE_TITLE"),
      content: i18n("SIGNAGE_MANAGER.SHARED_WITH_REMOVE_CONTENT", {
        name: group.name
      }),
      icon: { content: "link_off" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    this.unsharing_group_id.set(group.id);
    result.loading(i18n("SIGNAGE_MANAGER.SHARED_WITH_REMOVING"));
    try {
      await unshareSignageItem(this.type(), this.item_id(), group.id);
      result.close();
      notifySuccess(i18n("SIGNAGE_MANAGER.SHARED_WITH_REMOVED"));
      this._shared_groups.reload();
    } catch (error) {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SHARED_WITH_REMOVE_ERROR", {
        error: error instanceof Error ? error.message : `${error}`
      }));
    } finally {
      this.unsharing_group_id.set("");
    }
  }
  static {
    this.\u0275fac = function SignageSharedWithComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageSharedWithComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageSharedWithComponent, selectors: [["signage-shared-with"]], inputs: { type: [1, "type"], item_id: [1, "item_id"], group_id: [1, "group_id"], allow_unshare: [1, "allow_unshare"], compact_label: [1, "compact_label"] }, decls: 1, vars: 1, consts: [[1, "border-base-300", "divide-base-300", "mb-4", "flex", "list-none", "flex-col", "divide-y", "rounded-lg", "border", "p-0"], [1, "flex", "items-center", "gap-2", "py-1", "pr-2", "pl-3"], [1, "text-base-content/60", "text-xl"], [1, "flex-1", "truncate", "text-sm"], ["icon", "", "type", "button", "matRipple", "", 1, "text-error", "hover:bg-error/10", 3, "disabled"], ["icon", "", "type", "button", "matRipple", "", 1, "text-error", "hover:bg-error/10", 3, "click", "disabled"], ["diameter", "20"]], template: function SignageSharedWithComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SignageSharedWithComponent_Conditional_0_Template, 6, 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.visible() ? 0 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageSharedWithComponent, [{
    type: Component,
    args: [{
      // Existing signage-manager components use feature selectors without the app prefix.
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "signage-shared-with",
      template: `
        @if (visible()) {
            <label
                [class]="
                    compact_label()
                        ? 'text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase'
                        : ''
                "
            >
                {{ 'SIGNAGE_MANAGER.SHARED_WITH' | translate }}
            </label>
            <ul
                class="border-base-300 divide-base-300 mb-4 flex list-none flex-col divide-y rounded-lg border p-0"
            >
                @for (group of shared_groups(); track group.id) {
                    <li class="flex items-center gap-2 py-1 pr-2 pl-3">
                        <icon class="text-base-content/60 text-xl">groups</icon>
                        <span class="flex-1 truncate text-sm">
                            {{ group.name }}
                        </span>
                        @if (can_unshare()) {
                            <button
                                icon
                                type="button"
                                matRipple
                                class="text-error hover:bg-error/10"
                                [disabled]="!!unsharing_group_id()"
                                (click)="unshare(group)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SHARED_WITH_REMOVE'
                                        | translate
                                "
                            >
                                @if (unsharing_group_id() === group.id) {
                                    <mat-spinner diameter="20" />
                                } @else {
                                    <icon>delete</icon>
                                }
                            </button>
                        }
                    </li>
                }
            </ul>
        }
    `,
      imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule
      ]
    }]
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: true }] }], item_id: [{ type: Input, args: [{ isSignal: true, alias: "item_id", required: false }] }], group_id: [{ type: Input, args: [{ isSignal: true, alias: "group_id", required: false }] }], allow_unshare: [{ type: Input, args: [{ isSignal: true, alias: "allow_unshare", required: false }] }], compact_label: [{ type: Input, args: [{ isSignal: true, alias: "compact_label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageSharedWithComponent, { className: "SignageSharedWithComponent", filePath: "apps/signage-manager/src/app/shared/signage-shared-with.component.ts", lineNumber: 82 });
})();

export {
  SignageSharedWithComponent
};
//# debugId=f0364114-0609-51fb-8ee7-7dbe1e1a9ca1
//# sourceMappingURL=chunk-J6FHDLOC.js.map
