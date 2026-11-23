import {
  SignageContextService
} from "./chunk-4LBM7TMW.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-M4R2OMQ3.js";
import {
  TranslatePipe
} from "./chunk-KVJNDFNX.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AVEVXYGF.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Y6KAMZVN.js";

// apps/signage-manager/src/app/shared/group-breadcrumbs.component.ts
var _c0 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function GroupBreadcrumbsComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "public");
    \u0275\u0275elementEnd();
  }
}
function GroupBreadcrumbsComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const can_toggle_r2 = \u0275\u0275readContextLet(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(can_toggle_r2 && !ctx_r2.include_child_data() ? "person" : "group");
  }
}
function GroupBreadcrumbsComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function GroupBreadcrumbsComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectGroup());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.ALL_GROUPS"), " ");
  }
}
function GroupBreadcrumbsComponent_Conditional_0_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 5);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function GroupBreadcrumbsComponent_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function GroupBreadcrumbsComponent_Conditional_0_For_10_Template_button_click_0_listener() {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const group_r7 = ctx_r5.$implicit;
      const \u0275$index_23_r8 = ctx_r5.$index;
      const \u0275$count_23_r9 = ctx_r5.$count;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(\u0275$index_23_r8 === \u0275$count_23_r9 - 1 ? ctx_r2.selectGroup() : ctx_r2.applyGroup(group_r7.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GroupBreadcrumbsComponent_Conditional_0_For_10_Conditional_3_Template, 2, 0, "icon", 5);
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const \u0275$index_23_r8 = ctx.$index;
    const \u0275$count_23_r9 = ctx.$count;
    \u0275\u0275classProp("text-base-content", \u0275$index_23_r8 === \u0275$count_23_r9 - 1)("font-medium", \u0275$index_23_r8 === \u0275$count_23_r9 - 1);
    \u0275\u0275attribute("aria-current", \u0275$index_23_r8 === \u0275$count_23_r9 - 1 ? "true" : null)("aria-label", \u0275$index_23_r8 === \u0275$count_23_r9 - 1 ? \u0275\u0275pipeBind2(1, 8, "SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL", \u0275\u0275pureFunction1(11, _c0, group_r7.name)) : group_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_23_r8 === \u0275$count_23_r9 - 1) ? 3 : -1);
  }
}
function GroupBreadcrumbsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275declareLet(2)(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "button", 1);
    \u0275\u0275listener("click", function GroupBreadcrumbsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const can_toggle_r2 = \u0275\u0275readContextLet(2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(can_toggle_r2 ? ctx_r2.toggleChildContent() : ctx_r2.selectGroup());
    });
    \u0275\u0275conditionalCreate(6, GroupBreadcrumbsComponent_Conditional_0_Conditional_6_Template, 2, 0, "icon")(7, GroupBreadcrumbsComponent_Conditional_0_Conditional_7_Template, 2, 1, "icon");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, GroupBreadcrumbsComponent_Conditional_0_Conditional_8_Template, 3, 3, "button", 2);
    \u0275\u0275repeaterCreate(9, GroupBreadcrumbsComponent_Conditional_0_For_10_Template, 4, 13, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 12, "SIGNAGE_MANAGER.GROUPS_TITLE"));
    \u0275\u0275advance(2);
    const can_toggle_r10 = \u0275\u0275storeLet(ctx_r2.show_child_content_toggle() && !ctx_r2.show_all_groups());
    const label_r11 = \u0275\u0275pipeBind1(4, 15, can_toggle_r10 ? "SIGNAGE_MANAGER.INCLUDE_CHILD_DATA" : "SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("min-w-6", can_toggle_r10)("min-h-6", can_toggle_r10)("cursor-pointer", can_toggle_r10);
    \u0275\u0275property("matTooltip", can_toggle_r10 ? label_r11 : "");
    \u0275\u0275attribute("aria-label", label_r11)("aria-pressed", can_toggle_r10 ? ctx_r2.include_child_data() : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_all_groups() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.show_all_groups() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.hierarchy());
  }
}
var GroupBreadcrumbsComponent = class _GroupBreadcrumbsComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this.show_child_content_toggle = input(
      false,
      ...ngDevMode ? [{ debugName: "show_child_content_toggle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.include_child_data = this._context.include_child_data;
    this.hierarchy = this._context.selected_group_hierarchy;
    this.show_all_groups = computed(
      () => this._context.can_manage_all_groups() && !this._context.selected_group_id() && !this.hierarchy().length,
      ...ngDevMode ? [{ debugName: "show_all_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  applyGroup(group_id) {
    this._context.setSelectedGroup(group_id);
  }
  selectGroup() {
    return this._context.selectGroup();
  }
  toggleChildContent() {
    this._context.setIncludeChildData(!this.include_child_data());
  }
  static {
    this.\u0275fac = function GroupBreadcrumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupBreadcrumbsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupBreadcrumbsComponent, selectors: [["group-breadcrumbs"]], hostAttrs: [1, "flex", "min-w-0", "items-center", "gap-2"], inputs: { show_child_content_toggle: [1, "show_child_content_toggle"] }, decls: 1, vars: 1, consts: [[1, "border-base-300", "bg-base-200", "text-base-content/70", "flex", "min-w-0", "items-center", "gap-0.5", "overflow-hidden", "rounded-full", "border", "px-2", "py-0.5", "text-xs"], ["type", "button", "matRipple", "", 1, "hover:border-base-300", "border-base-200", "m-0", "mr-0.5", "flex", "shrink-0", "items-center", "justify-center", "rounded-full", "border", "p-0", "text-sm", 3, "click", "matTooltip"], ["type", "button", "matRipple", "", "aria-current", "true", 1, "text-base-content", "cursor-pointer", "truncate", "rounded-full", "px-1", "font-medium", "hover:underline"], ["type", "button", "matRipple", "", "aria-current", "true", 1, "text-base-content", "cursor-pointer", "truncate", "rounded-full", "px-1", "font-medium", "hover:underline", 3, "click"], ["type", "button", "matRipple", "", 1, "cursor-pointer", "truncate", "rounded-full", "px-1", "hover:underline", 3, "click"], [1, "shrink-0", "text-sm"]], template: function GroupBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GroupBreadcrumbsComponent_Conditional_0_Template, 11, 17, "nav", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hierarchy().length || ctx.show_all_groups() ? 0 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupBreadcrumbsComponent, [{
    type: Component,
    args: [{
      // Existing signage-manager components use feature selectors without the app prefix.
      selector: "group-breadcrumbs",
      template: `
        @if (hierarchy().length || show_all_groups()) {
            <nav
                class="border-base-300 bg-base-200 text-base-content/70 flex min-w-0 items-center gap-0.5 overflow-hidden rounded-full border px-2 py-0.5 text-xs"
                [attr.aria-label]="'SIGNAGE_MANAGER.GROUPS_TITLE' | translate"
            >
                @let can_toggle =
                    show_child_content_toggle() && !show_all_groups();
                @let label =
                    (can_toggle
                        ? 'SIGNAGE_MANAGER.INCLUDE_CHILD_DATA'
                        : 'SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'
                    ) | translate;
                <button
                    type="button"
                    matRipple
                    class="hover:border-base-300 border-base-200 m-0 mr-0.5 flex shrink-0 items-center justify-center rounded-full border p-0 text-sm"
                    [class.min-w-6]="can_toggle"
                    [class.min-h-6]="can_toggle"
                    [class.cursor-pointer]="can_toggle"
                    [attr.aria-label]="label"
                    [matTooltip]="can_toggle ? label : ''"
                    [attr.aria-pressed]="
                        can_toggle ? include_child_data() : null
                    "
                    (click)="can_toggle ? toggleChildContent() : selectGroup()"
                >
                    @if (show_all_groups()) {
                        <icon>public</icon>
                    } @else {
                        <icon>{{
                            can_toggle && !include_child_data()
                                ? 'person'
                                : 'group'
                        }}</icon>
                    }
                </button>
                @if (show_all_groups()) {
                    <button
                        type="button"
                        matRipple
                        class="text-base-content cursor-pointer truncate rounded-full px-1 font-medium hover:underline"
                        aria-current="true"
                        (click)="selectGroup()"
                    >
                        {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (group of hierarchy(); track group.id; let last = $last) {
                    <button
                        type="button"
                        matRipple
                        class="cursor-pointer truncate rounded-full px-1 hover:underline"
                        [class.text-base-content]="last"
                        [class.font-medium]="last"
                        [attr.aria-current]="last ? 'true' : null"
                        [attr.aria-label]="
                            last
                                ? ('SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL'
                                  | translate: { name: group.name })
                                : group.name
                        "
                        (click)="last ? selectGroup() : applyGroup(group.id)"
                    >
                        {{ group.name }}
                    </button>
                    @if (!last) {
                        <icon class="shrink-0 text-sm">chevron_right</icon>
                    }
                }
            </nav>
        }
    `,
      host: { class: "flex min-w-0 items-center gap-2" },
      imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe]
    }]
  }], null, { show_child_content_toggle: [{ type: Input, args: [{ isSignal: true, alias: "show_child_content_toggle", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupBreadcrumbsComponent, { className: "GroupBreadcrumbsComponent", filePath: "apps/signage-manager/src/app/shared/group-breadcrumbs.component.ts", lineNumber: 86 });
})();

export {
  GroupBreadcrumbsComponent
};
//# debugId=2ecd9618-7aa9-5230-bab0-db58c189eafc
//# sourceMappingURL=chunk-VTCNYFSZ.js.map
