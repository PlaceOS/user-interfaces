import {
  Component,
  GroupSelectModalComponent,
  IconComponent,
  MatDialog,
  MatRipple,
  MatRippleModule,
  SignageService,
  TranslatePipe,
  computed,
  dialogClosed,
  i18n,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RR3ZS7WE.js";

// apps/signage-manager/src/app/shared/group-breadcrumbs.component.ts
var _c0 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function GroupBreadcrumbsComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function GroupBreadcrumbsComponent_Conditional_0_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectGroup());
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
function GroupBreadcrumbsComponent_Conditional_0_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 5);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function GroupBreadcrumbsComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function GroupBreadcrumbsComponent_Conditional_0_For_7_Template_button_click_0_listener() {
      const ctx_r4 = \u0275\u0275restoreView(_r4);
      const group_r6 = ctx_r4.$implicit;
      const \u0275$index_15_r7 = ctx_r4.$index;
      const \u0275$count_15_r8 = ctx_r4.$count;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(\u0275$index_15_r7 === \u0275$count_15_r8 - 1 ? ctx_r1.selectGroup() : ctx_r1.applyGroup(group_r6.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, GroupBreadcrumbsComponent_Conditional_0_For_7_Conditional_3_Template, 2, 0, "icon", 5);
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const \u0275$index_15_r7 = ctx.$index;
    const \u0275$count_15_r8 = ctx.$count;
    \u0275\u0275classProp("text-base-content", \u0275$index_15_r7 === \u0275$count_15_r8 - 1)("font-medium", \u0275$index_15_r7 === \u0275$count_15_r8 - 1);
    \u0275\u0275attribute("aria-current", \u0275$index_15_r7 === \u0275$count_15_r8 - 1 ? "true" : null)("aria-label", \u0275$index_15_r7 === \u0275$count_15_r8 - 1 ? \u0275\u0275pipeBind2(1, 8, "SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL", \u0275\u0275pureFunction1(11, _c0, group_r6.name)) : group_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_15_r7 === \u0275$count_15_r8 - 1) ? 3 : -1);
  }
}
function GroupBreadcrumbsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "button", 1);
    \u0275\u0275listener("click", function GroupBreadcrumbsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectGroup());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, GroupBreadcrumbsComponent_Conditional_0_Conditional_5_Template, 3, 3, "button", 2);
    \u0275\u0275repeaterCreate(6, GroupBreadcrumbsComponent_Conditional_0_For_7_Template, 4, 13, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "SIGNAGE_MANAGER.GROUPS_TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.show_all_groups() ? "public" : "group");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.show_all_groups() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.hierarchy());
  }
}
var GroupBreadcrumbsComponent = class _GroupBreadcrumbsComponent {
  constructor() {
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.hierarchy = this._service.selected_group_hierarchy;
    this.show_all_groups = computed(
      () => this._service.is_sys_admin() && !this._service.selected_group_id() && !this.hierarchy().length,
      ...ngDevMode ? [{ debugName: "show_all_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  applyGroup(group_id) {
    this._service.setSelectedGroup(group_id);
  }
  async selectGroup() {
    const ref = this._dialog.open(GroupSelectModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP"),
        groups: this._service.signage_groups(),
        selected_group_id: this._service.selected_group_id(),
        show_all_groups: this._service.is_sys_admin()
      },
      panelClass: "mobile-fullscreen"
    });
    const group_id = await dialogClosed(ref);
    if (group_id === void 0)
      return;
    this.applyGroup(group_id);
  }
  static {
    this.\u0275fac = function GroupBreadcrumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupBreadcrumbsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupBreadcrumbsComponent, selectors: [["group-breadcrumbs"]], hostAttrs: [1, "flex", "min-w-0", "items-center", "gap-2"], decls: 1, vars: 1, consts: [[1, "border-base-300", "bg-base-200", "text-base-content/70", "flex", "min-w-0", "items-center", "gap-0.5", "overflow-hidden", "rounded-full", "border", "px-2", "py-0.5", "text-xs"], ["type", "button", "matRipple", "", 1, "hover:border-base-300", "border", "border-base-200", "mr-0.5", "shrink-0", "text-sm", "p-0", "m-0", "flex", "items-center", "justify-center", "rounded-full", 3, "click"], ["type", "button", "matRipple", "", "aria-current", "true", 1, "text-base-content", "hover:underline", "cursor-pointer", "truncate", "rounded-full", "px-1", "font-medium"], ["type", "button", "matRipple", "", "aria-current", "true", 1, "text-base-content", "hover:underline", "cursor-pointer", "truncate", "rounded-full", "px-1", "font-medium", 3, "click"], ["type", "button", "matRipple", "", 1, "hover:underline", "cursor-pointer", "truncate", "rounded-full", "px-1", 3, "click"], [1, "shrink-0", "text-sm"]], template: function GroupBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GroupBreadcrumbsComponent_Conditional_0_Template, 8, 5, "nav", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hierarchy().length || ctx.show_all_groups() ? 0 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupBreadcrumbsComponent, [{
    type: Component,
    args: [{
      // Existing signage-manager components use feature selectors without the app prefix.
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "group-breadcrumbs",
      template: `
        @if (hierarchy().length || show_all_groups()) {
            <nav
                class="border-base-300 bg-base-200 text-base-content/70 flex min-w-0 items-center gap-0.5 overflow-hidden rounded-full border px-2 py-0.5 text-xs"
                [attr.aria-label]="'SIGNAGE_MANAGER.GROUPS_TITLE' | translate"
            >
                <button type="button" matRipple class="hover:border-base-300 border border-base-200 mr-0.5 shrink-0 text-sm p-0 m-0 flex items-center justify-center rounded-full" (click)="selectGroup()">
                    <icon>{{ show_all_groups() ? 'public' : 'group' }}</icon>
                </button>
                @if (show_all_groups()) {
                    <button
                        type="button"
                        matRipple
                        class="text-base-content hover:underline cursor-pointer truncate rounded-full px-1 font-medium"
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
                        class="hover:underline cursor-pointer truncate rounded-full px-1"
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
      imports: [MatRippleModule, IconComponent, TranslatePipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupBreadcrumbsComponent, { className: "GroupBreadcrumbsComponent", filePath: "apps/signage-manager/src/app/shared/group-breadcrumbs.component.ts", lineNumber: 61 });
})();

export {
  GroupBreadcrumbsComponent
};
//# debugId=dde9d25b-b54b-55de-a7e2-55cca00c2bac
//# sourceMappingURL=chunk-SDT7SUSE.js.map
