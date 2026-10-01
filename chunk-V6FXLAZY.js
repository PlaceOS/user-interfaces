import {
  filterManageNavItems,
  injectNavItems
} from "./chunk-J2XX4L6U.js";
import {
  GroupSelectModalComponent
} from "./chunk-GPVZOTFM.js";
import {
  CustomTooltipComponent
} from "./chunk-SV3SG26K.js";
import {
  AuthenticatedImageDirective
} from "./chunk-XDGIXLH2.js";
import {
  CommandPaletteService
} from "./chunk-EHZTDCMG.js";
import {
  SignageService,
  dialogClosed
} from "./chunk-O53Q6NO3.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-GPD2BVBF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-KPDVPN6G.js";
import {
  TranslatePipe
} from "./chunk-DP5CYN2A.js";
import {
  SettingsService
} from "./chunk-MNHTUKSZ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-MTHSXWL7.js";
import {
  Component,
  DestroyRef,
  IconComponent,
  Injectable,
  LocaleService,
  MatDialog,
  MatRipple,
  MatRippleModule,
  ViewChild,
  afterNextRender,
  computed,
  i18n,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-SQCVFJN7.js";

// apps/signage-manager/src/app/shared/nav-footer.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function NavFooterComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, item_r1.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, item_r1.label), " ");
  }
}
function NavFooterComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 9)(2, "icon", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, item_r2.label));
  }
}
function NavFooterComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 11);
    \u0275\u0275elementStart(1, "button", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function NavFooterComponent_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectGroup());
    });
    \u0275\u0275elementStart(3, "div", 13)(4, "icon", 10);
    \u0275\u0275text(5, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "SIGNAGE_MANAGER.SELECT_GROUP"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, ctx_r3.selected_label()), " ");
  }
}
var NavFooterComponent = class _NavFooterComponent {
  constructor() {
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.can_manage_groups = computed(
      () => this._service.can_manage_all_groups() || !!this._service.manageable_signage_groups().length,
      ...ngDevMode ? [{ debugName: "can_manage_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.MORE_MENU_ROUTES = [
      "/templates",
      "/schedules",
      "/manage",
      "/groups"
    ];
    this.primary_nav_items = computed(
      () => filterManageNavItems(this.can_manage_groups(), this._service.templates_enabled()).filter((item) => !this.MORE_MENU_ROUTES.includes(item.route)),
      ...ngDevMode ? [{ debugName: "primary_nav_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.more_nav_items = computed(
      () => filterManageNavItems(this.can_manage_groups(), this._service.templates_enabled()).filter((item) => this.MORE_MENU_ROUTES.includes(item.route)),
      ...ngDevMode ? [{ debugName: "more_nav_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.groups = this._service.signage_groups;
    this.selected_group_id = this._service.selected_group_id;
    this.selected_group = this._service.selected_group;
    this.is_sys_admin = this._service.is_sys_admin;
    this.show_selector = this._service.show_group_selector;
    this.selected_label = computed(
      () => this.selected_group()?.group.name || "SIGNAGE_MANAGER.ALL_GROUPS",
      ...ngDevMode ? [{ debugName: "selected_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async selectGroup() {
    const ref = this._dialog.open(GroupSelectModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP"),
        groups: this.groups(),
        selected_group_id: this.selected_group_id(),
        show_all_groups: this.is_sys_admin()
      },
      panelClass: "mobile-fullscreen"
    });
    const group_id = await dialogClosed(ref);
    if (group_id === void 0)
      return;
    this._service.setSelectedGroup(group_id);
  }
  static {
    this.\u0275fac = function NavFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavFooterComponent, selectors: [["nav-footer"]], decls: 17, vars: 11, consts: [["more_menu", "matMenu"], [1, "bg-secondary", "text-secondary-content", "border-base-100", "border-t", "px-2", "py-2", "shadow-[0_-8px_24px_rgba(0,0,0,0.18)]", "sm:hidden"], [1, "mx-auto", "flex", "max-w-screen-sm", "items-center", "justify-around", "gap-1"], ["routerLinkActive", "active bg-primary/30", "ariaCurrentWhenActive", "page", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "relative", "flex", "h-14", "min-w-0", "flex-1", "flex-col", "items-center", "justify-center", "rounded-lg", "px-1", "text-xs", 3, "routerLink"], ["icon", "", "type", "button", "matRipple", "", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "relative", "flex", "h-14", "min-w-0", "flex-1", "flex-col", "items-center", "justify-center", "rounded-lg", "px-1", "text-xs", 3, "matMenuTriggerFor"], [1, "text-2xl"], [1, "truncate", "font-medium"], ["mat-menu-item", "", 3, "routerLink"], ["active", "", 1, "bg-base-100", "absolute", "inset-x-2", "-top-2", "left-1", "h-1", "rounded-b"], [1, "flex", "items-center", "gap-2"], [1, "mr-2", "text-2xl"], ["role", "separator", 1, "border-base-300", "my-1", "border-t"], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2", "py-1"], [1, "min-w-0", "leading-tight"], [1, "font-medium"], [1, "text-base-content/70", "truncate", "text-xs"]], template: function NavFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275repeaterCreate(3, NavFooterComponent_For_4_Template, 8, 8, "a", 3, _forTrack0);
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "icon", 5);
        \u0275\u0275text(8, "more_horiz");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "mat-menu", null, 0);
        \u0275\u0275repeaterCreate(14, NavFooterComponent_For_15_Template, 7, 5, "a", 7, _forTrack0);
        \u0275\u0275conditionalCreate(16, NavFooterComponent_Conditional_16_Template, 13, 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const more_menu_r5 = \u0275\u0275reference(13);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "SIGNAGE_MANAGER.PRIMARY_NAV"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.primary_nav_items());
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", more_menu_r5);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 7, "SIGNAGE_MANAGER.MORE_NAV_OPTIONS"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "SIGNAGE_MANAGER.MORE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.more_nav_items());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_selector() && (ctx.is_sys_admin() || ctx.groups().length) ? 16 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      RouterLinkActive,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      IconComponent,
      TranslatePipe
    ], styles: ["\na[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%] {\n  transition: opacity 300ms;\n}\na[_ngcontent-%COMP%]:not(.active)   [active][_ngcontent-%COMP%] {\n  opacity: 0;\n}\na.active[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=nav-footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavFooterComponent, [{
    type: Component,
    args: [{ selector: "nav-footer", template: `
        <nav
            [attr.aria-label]="'SIGNAGE_MANAGER.PRIMARY_NAV' | translate"
            class="bg-secondary text-secondary-content border-base-100 border-t px-2 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.18)] sm:hidden"
        >
            <div
                class="mx-auto flex max-w-screen-sm items-center justify-around gap-1"
            >
                @for (item of primary_nav_items(); track item.route) {
                    <a
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-1 text-xs"
                        [routerLink]="item.route"
                        routerLinkActive="active bg-primary/30"
                        [attr.aria-label]="item.label | translate"
                        ariaCurrentWhenActive="page"
                    >
                        <icon class="text-2xl">{{ item.icon }}</icon>
                        <div class="truncate font-medium">
                            {{ item.label | translate }}
                        </div>
                        <div
                            active
                            class="bg-base-100 absolute inset-x-2 -top-2 left-1 h-1 rounded-b"
                        ></div>
                    </a>
                }
                <button
                    icon
                    type="button"
                    matRipple
                    class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-1 text-xs"
                    [matMenuTriggerFor]="more_menu"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.MORE_NAV_OPTIONS' | translate
                    "
                >
                    <icon class="text-2xl">more_horiz</icon>
                    <div class="truncate font-medium">
                        {{ 'SIGNAGE_MANAGER.MORE' | translate }}
                    </div>
                </button>
                <mat-menu #more_menu="matMenu">
                    @for (item of more_nav_items(); track item.route) {
                        <a mat-menu-item [routerLink]="item.route">
                            <div class="flex items-center gap-2">
                                <icon class="mr-2 text-2xl">{{
                                    item.icon
                                }}</icon>
                                <span>{{ item.label | translate }}</span>
                            </div>
                        </a>
                    }
                    @if (
                        show_selector() && (is_sys_admin() || groups().length)
                    ) {
                        <div
                            class="border-base-300 my-1 border-t"
                            role="separator"
                        ></div>
                        <button
                            type="button"
                            mat-menu-item
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'
                                    | translate
                            "
                            (click)="selectGroup()"
                        >
                            <div class="flex items-center gap-2 py-1">
                                <icon class="mr-2 text-2xl">group</icon>
                                <div class="min-w-0 leading-tight">
                                    <div class="font-medium">
                                        {{
                                            'SIGNAGE_MANAGER.SELECT_GROUP'
                                                | translate
                                        }}
                                    </div>
                                    <div
                                        class="text-base-content/70 truncate text-xs"
                                    >
                                        {{ selected_label() | translate }}
                                    </div>
                                </div>
                            </div>
                        </button>
                    }
                </mat-menu>
            </div>
        </nav>
    `, imports: [
      RouterModule,
      MatMenuModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;626ac16691641f7efb03e0c115feeb2b001229f18688fc44f2b42b8c809ccc32;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/nav-footer.component.ts */\na [active] {\n  transition: opacity 300ms;\n}\na:not(.active) [active] {\n  opacity: 0;\n}\na.active [active] {\n  opacity: 1;\n}\n/*# sourceMappingURL=nav-footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavFooterComponent, { className: "NavFooterComponent", filePath: "apps/signage-manager/src/app/shared/nav-footer.component.ts", lineNumber: 127 });
})();

// apps/signage-manager/src/app/shared/signage-group-selector.component.ts
var _c0 = (a0) => ({ name: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.STATE_ACTIVE"), " ");
  }
}
function SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8)(1, "div", 9);
    \u0275\u0275conditionalCreate(2, SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_For_2_Conditional_2_Template, 1, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_For_2_Conditional_6_Template, 3, 3, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const \u0275$index_22_r4 = ctx.$index;
    const \u0275$count_22_r5 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275classProp("border-primary", \u0275$index_22_r4 === \u0275$count_22_r5 - 1)("bg-primary", \u0275$index_22_r4 === \u0275$count_22_r5 - 1)("border-base-300", !(\u0275$index_22_r4 === \u0275$count_22_r5 - 1))("bg-base-100", !(\u0275$index_22_r4 === \u0275$count_22_r5 - 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_22_r4 === \u0275$count_22_r5 - 1) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-semibold", \u0275$index_22_r4 === \u0275$count_22_r5 - 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_22_r4 === \u0275$count_22_r5 - 1 ? 6 : -1);
  }
}
function SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 6);
    \u0275\u0275repeaterCreate(1, SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_For_2_Template, 7, 13, "li", 8, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.selected_hierarchy());
  }
}
function SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.ALL_GROUPS_ACTIVE"), " ");
  }
}
function SignageGroupSelectorComponent_Conditional_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_1_Template, 3, 0, "ol", 6)(2, SignageGroupSelectorComponent_Conditional_0_ng_template_9_Conditional_2_Template, 3, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_hierarchy().length ? 1 : 2);
  }
}
function SignageGroupSelectorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function SignageGroupSelectorComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectGroup());
    });
    \u0275\u0275elementStart(4, "icon", 3);
    \u0275\u0275text(5, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SignageGroupSelectorComponent_Conditional_0_ng_template_9_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const group_hierarchy_tooltip_r6 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", group_hierarchy_tooltip_r6)("hover", true)("backdrop", false)("xOffset", 96);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 8, "SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL", \u0275\u0275pureFunction1(13, _c0, \u0275\u0275pipeBind1(2, 6, ctx_r1.selected_label()))));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, ctx_r1.selected_label()), " ");
  }
}
var SignageGroupSelectorComponent = class _SignageGroupSelectorComponent {
  constructor() {
    this._service = inject(SignageService);
    this._dialog = inject(MatDialog);
    this.groups = this._service.signage_groups;
    this.selected_group = this._service.selected_group;
    this.selected_group_id = this._service.selected_group_id;
    this.is_sys_admin = this._service.is_sys_admin;
    this.show_selector = this._service.show_group_selector;
    this.selected_label = computed(
      () => this.selected_group()?.group.name || "SIGNAGE_MANAGER.ALL_GROUPS",
      ...ngDevMode ? [{ debugName: "selected_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_hierarchy = this._service.selected_group_hierarchy;
  }
  async selectGroup() {
    const ref = this._dialog.open(GroupSelectModalComponent, {
      data: {
        title: i18n("SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP"),
        groups: this.groups(),
        selected_group_id: this.selected_group_id(),
        show_all_groups: this.is_sys_admin()
      },
      panelClass: "mobile-fullscreen"
    });
    const group_id = await dialogClosed(ref);
    if (group_id === void 0)
      return;
    this._service.setSelectedGroup(group_id);
  }
  static {
    this.\u0275fac = function SignageGroupSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageGroupSelectorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageGroupSelectorComponent, selectors: [["signage-group-selector"]], decls: 1, vars: 1, consts: [["group_hierarchy_tooltip", ""], ["customTooltip", "", "xPosition", "start", "yPosition", "center", 3, "content", "hover", "backdrop", "xOffset"], ["icon", "", "type", "button", "matRipple", "", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "relative", "flex", "h-18", "w-18", "flex-col", "items-center", "justify-center", "rounded-xl", 3, "click"], [1, "text-3xl"], [1, "line-clamp-3", "max-w-14", "text-xs", "font-medium"], [1, "border-base-300", "bg-base-100", "text-base-content", "my-2", "w-72", "rounded-xl", "border", "p-3", "text-left", "shadow-xl"], [1, "m-0", "space-y-1", "p-0"], [1, "bg-base-200", "rounded-lg", "px-3", "py-2", "text-sm"], [1, "relative", "flex", "w-full", "items-center", "gap-2"], [1, "relative", "z-10", "h-3", "w-3", "shrink-0", "rounded-full", "border"], [1, "bg-base-300", "absolute", "top-3.5", "left-1/2", "h-1.5", "w-0.5", "-translate-x-1/2", "rounded"], [1, "flex", "min-w-0", "flex-1", "items-center", "justify-between", "gap-2", "rounded-md", "px-1"], [1, "flex-1", "truncate", "text-sm"], [1, "text-base-content/60", "text-xs"]], template: function SignageGroupSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SignageGroupSelectorComponent_Conditional_0_Template, 11, 15);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show_selector() && (ctx.is_sys_admin() || ctx.groups().length) ? 0 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      CustomTooltipComponent,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageGroupSelectorComponent, [{
    type: Component,
    args: [{
      // Existing signage-manager components use feature selectors without the app prefix.
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "signage-group-selector",
      template: `
        @if (show_selector() && (is_sys_admin() || groups().length)) {
            <div
                customTooltip
                [content]="group_hierarchy_tooltip"
                [hover]="true"
                [backdrop]="false"
                [xOffset]="96"
                xPosition="start"
                yPosition="center"
            >
                <button
                    icon
                    type="button"
                    matRipple
                    class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL'
                            | translate
                                : { name: (selected_label() | translate) }
                    "
                    (click)="selectGroup()"
                >
                    <icon class="text-3xl">group</icon>
                    <div class="line-clamp-3 max-w-14 text-xs font-medium">
                        {{ selected_label() | translate }}
                    </div>
                </button>
            </div>
            <ng-template #group_hierarchy_tooltip>
                <div
                    class="border-base-300 bg-base-100 text-base-content my-2 w-72 rounded-xl border p-3 text-left shadow-xl"
                >
                    @if (selected_hierarchy().length) {
                        <ol class="m-0 space-y-1 p-0">
                            @for (
                                group of selected_hierarchy();
                                track group.id;
                                let last = $last
                            ) {
                                <li
                                    class="relative flex w-full items-center gap-2"
                                >
                                    <div
                                        class="relative z-10 h-3 w-3 shrink-0 rounded-full border"
                                        [class.border-primary]="last"
                                        [class.bg-primary]="last"
                                        [class.border-base-300]="!last"
                                        [class.bg-base-100]="!last"
                                    >
                                        @if (!last) {
                                            <div
                                                class="bg-base-300 absolute top-3.5 left-1/2 h-1.5 w-0.5 -translate-x-1/2 rounded"
                                            ></div>
                                        }
                                    </div>
                                    <div
                                        class="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md px-1"
                                    >
                                        <div
                                            class="flex-1 truncate text-sm"
                                            [class.font-semibold]="last"
                                        >
                                            {{ group.name }}
                                        </div>
                                        @if (last) {
                                            <div
                                                class="text-base-content/60 text-xs"
                                            >
                                                {{
                                                    'COMMON.STATE_ACTIVE'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                    </div>
                                </li>
                            }
                        </ol>
                    } @else {
                        <div class="bg-base-200 rounded-lg px-3 py-2 text-sm">
                            {{
                                'SIGNAGE_MANAGER.ALL_GROUPS_ACTIVE' | translate
                            }}
                        </div>
                    }
                </div>
            </ng-template>
        }
    `,
      imports: [
        MatRippleModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageGroupSelectorComponent, { className: "SignageGroupSelectorComponent", filePath: "apps/signage-manager/src/app/shared/signage-group-selector.component.ts", lineNumber: 114 });
})();

// apps/signage-manager/src/app/shared/nav-sidebar.component.ts
var _c02 = ["scroller"];
var _c1 = ["scroll_content"];
var _c2 = () => ["/"];
var _forTrack03 = ($index, $item) => $item.route;
var _forTrack1 = ($index, $item) => $item.id;
function NavSidebarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("alt", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.LOGO_ALT"))("source", ctx);
  }
}
function NavSidebarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.LOGO_ALT"), " ");
  }
}
function NavSidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function NavSidebarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollNav(-1));
    });
    \u0275\u0275elementStart(1, "icon", 9);
    \u0275\u0275text(2, "keyboard_arrow_up");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.can_scroll_up());
  }
}
function NavSidebarComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 17, 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("isActiveChange", function NavSidebarComponent_For_16_Template_a_isActiveChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const nav_link_r4 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActiveChange($event, nav_link_r4));
    });
    \u0275\u0275elementStart(3, "icon", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.route);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, item_r5.label));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, item_r5.label), " ");
  }
}
function NavSidebarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function NavSidebarComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollNav(1));
    });
    \u0275\u0275elementStart(1, "icon", 9);
    \u0275\u0275text(2, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r1.can_scroll_down());
  }
}
function NavSidebarComponent_Conditional_19_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r8.local, " ");
  }
}
function NavSidebarComponent_Conditional_19_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function NavSidebarComponent_Conditional_19_For_10_Template_button_click_0_listener() {
      const lang_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setLocale(lang_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "icon", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NavSidebarComponent_Conditional_19_For_10_Conditional_8_Template, 2, 1, "div", 30);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("font-semibold", ctx_r1.active_locale() === lang_r8.id);
    \u0275\u0275property("matTooltip", ctx_r1.localeDetails(lang_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_locale() === lang_r8.id ? "check" : "language", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, lang_r8.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lang_r8.local && \u0275\u0275pipeBind1(9, 8, lang_r8.name) !== lang_r8.local ? 8 : -1);
  }
}
function NavSidebarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 18);
    \u0275\u0275text(3, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-menu", 24, 3);
    \u0275\u0275repeaterCreate(9, NavSidebarComponent_Conditional_19_For_10_Template, 10, 10, "button", 25, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_menu_r9 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", language_menu_r9)("matTooltip", ctx_r1.active_locale_details());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 4, "COMMON.LANGUAGE_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, ctx_r1.active_locale_label()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.locales());
  }
}
var NavScrollState = class _NavScrollState {
  constructor() {
    this.top = 0;
    this.can_scroll_up = signal(
      false,
      ...ngDevMode ? [{ debugName: "can_scroll_up" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_scroll_down = signal(
      false,
      ...ngDevMode ? [{ debugName: "can_scroll_down" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function NavScrollState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavScrollState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavScrollState, factory: _NavScrollState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavScrollState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var NavSidebarComponent = class _NavSidebarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._locale = inject(LocaleService);
    this.locales = this._settings.signal("locales", []);
    this.show_locale_selector = this._settings.signal("show_locale_selector", false);
    this.nav_items = injectNavItems();
    this._scroller = viewChild(
      "scroller",
      ...ngDevMode ? [{ debugName: "_scroller" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._scroll_content = viewChild(
      "scroll_content",
      ...ngDevMode ? [{ debugName: "_scroll_content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._scroll_state = inject(NavScrollState);
    this.can_scroll_up = this._scroll_state.can_scroll_up;
    this.can_scroll_down = this._scroll_state.can_scroll_down;
    this.overflowing = computed(
      () => this.can_scroll_up() || this.can_scroll_down(),
      ...ngDevMode ? [{ debugName: "overflowing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._palette = inject(CommandPaletteService);
    this._is_apple = /Mac|iPhone|iPad/.test(navigator.userAgent);
    this.palette_shortcut = this._is_apple ? "\u2318K" : "Ctrl+K";
    this.palette_aria_shortcut = this._is_apple ? "Meta+K" : "Control+K";
    this.active_locale = computed(
      () => this._locale.locale,
      ...ngDevMode ? [{ debugName: "active_locale" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_locale_label = computed(
      () => {
        const active_locale = this.active_locale();
        const locale = this.locales().find((item) => item.id === active_locale);
        return locale?.name || "LANGUAGE.ENGLISH";
      },
      ...ngDevMode ? [{ debugName: "active_locale_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_locale_details = computed(
      () => {
        const active_locale = this.active_locale();
        const locale = this.locales().find((item) => item.id === active_locale);
        return locale ? this.localeDetails(locale) : `${i18n("COMMON.LANGUAGE")}: ${active_locale}`;
      },
      ...ngDevMode ? [{ debugName: "active_locale_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const destroy_ref = inject(DestroyRef);
    afterNextRender(() => {
      const scroller = this._scroller()?.nativeElement;
      const content = this._scroll_content()?.nativeElement;
      if (!scroller || !content)
        return;
      scroller.scrollTop = this._scroll_state.top;
      this.updateScrollState();
      this.revealActiveLink();
      const observer = new ResizeObserver(() => {
        this.updateScrollState();
        this.revealActiveLink();
      });
      observer.observe(scroller);
      observer.observe(content);
      destroy_ref.onDestroy(() => observer.disconnect());
    });
  }
  /** Sync arrow state with the scroll position of the nav list. */
  updateScrollState() {
    const el = this._scroller()?.nativeElement;
    if (!el)
      return;
    this._scroll_state.top = el.scrollTop;
    this.can_scroll_up.set(el.scrollTop > 1);
    this.can_scroll_down.set(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  }
  /** Scroll the nav list by a third of its height, like mat-tabs. */
  scrollNav(direction) {
    const el = this._scroller()?.nativeElement;
    if (!el)
      return;
    el.scrollBy({
      top: direction * el.clientHeight / 3,
      behavior: "smooth"
    });
  }
  onActiveChange(active, link) {
    if (active)
      this._active_link = link;
    else if (this._active_link === link)
      this._active_link = void 0;
    this.revealActiveLink();
  }
  /**
   * Scroll the nav list the minimum distance to show the active link.
   * Sets scrollTop on the list only, so parent containers do not move.
   */
  revealActiveLink() {
    const scroller = this._scroller()?.nativeElement;
    const link = this._active_link;
    if (!scroller || !link)
      return;
    const outer = scroller.getBoundingClientRect();
    const inner = link.getBoundingClientRect();
    const padding = 8;
    if (inner.top < outer.top + padding) {
      scroller.scrollTop -= outer.top + padding - inner.top;
    } else if (inner.bottom > outer.bottom - padding) {
      scroller.scrollTop += inner.bottom - outer.bottom + padding;
    }
  }
  localeDetails(locale) {
    const name = i18n(locale.name);
    return locale.local && locale.local !== name ? `${name} (${locale.local}) \xB7 ${locale.id}` : `${name} \xB7 ${locale.id}`;
  }
  openPalette() {
    void this._palette.toggle();
  }
  setLocale(code) {
    if (code === this.active_locale())
      return;
    this._locale.setLocale(code);
    localStorage.setItem("PLACEOS.locale", code);
    setTimeout(() => location.reload(), 300);
  }
  get logo_src() {
    const logo = this._settings.get(this._settings.theme === "dark" ? "app.logo_dark" : "app.logo_light");
    return typeof logo === "string" ? logo : logo?.src || "";
  }
  static {
    this.\u0275fac = function NavSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavSidebarComponent, selectors: [["nav-sidebar"]], viewQuery: function NavSidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._scroller, _c02, 5)(ctx._scroll_content, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, decls: 21, vars: 16, consts: [["scroller", ""], ["scroll_content", ""], ["nav_link", ""], ["language_menu", "matMenu"], [1, "bg-secondary", "text-secondary-content", "border-base-100", "relative", "z-30", "hidden", "h-full", "flex-col", "border-r", "p-2", "shadow-lg", "sm:flex"], ["logo", "", 1, "bg-base-100/80", "mx-auto", "flex", "h-20", "w-20", "shrink-0", "items-center", "justify-center", "rounded-2xl", "shadow-xl", 3, "routerLink"], ["auth", "", 1, "max-h-18", "max-w-18", "object-contain", 3, "alt", "source"], [1, "opacity-20"], ["type", "button", "matRipple", "", "matTooltipPosition", "right", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "mx-auto", "mt-2", "flex", "h-10", "w-18", "shrink-0", "items-center", "justify-center", "gap-1", "rounded-xl", 3, "click", "matTooltip"], [1, "text-2xl"], ["type", "button", "matRipple", "", "scroll-up", "", "aria-hidden", "true", "tabindex", "-1", 1, "hover:bg-base-100/30", "mx-auto", "mt-2", "flex", "h-6", "w-18", "shrink-0", "items-center", "justify-center", "rounded-lg", "disabled:opacity-30", 3, "disabled"], [1, "no-scrollbar", "min-h-0", "w-[calc(100%+0.5rem)]", "flex-1", "overflow-x-hidden", "overflow-y-auto", "p-2", 3, "scroll"], [1, "flex", "flex-col", "gap-4"], ["routerLinkActive", "active bg-primary/30", "ariaCurrentWhenActive", "page", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "relative", "flex", "h-18", "w-18", "shrink-0", "flex-col", "items-center", "justify-center", "rounded-xl", 3, "routerLink"], ["type", "button", "matRipple", "", "scroll-down", "", "aria-hidden", "true", "tabindex", "-1", 1, "hover:bg-base-100/30", "mx-auto", "mb-2", "flex", "h-6", "w-18", "shrink-0", "items-center", "justify-center", "rounded-lg", "disabled:opacity-30", 3, "disabled"], [1, "shrink-0", "p-2"], ["type", "button", "matRipple", "", "scroll-up", "", "aria-hidden", "true", "tabindex", "-1", 1, "hover:bg-base-100/30", "mx-auto", "mt-2", "flex", "h-6", "w-18", "shrink-0", "items-center", "justify-center", "rounded-lg", "disabled:opacity-30", 3, "click", "disabled"], ["routerLinkActive", "active bg-primary/30", "ariaCurrentWhenActive", "page", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "relative", "flex", "h-18", "w-18", "shrink-0", "flex-col", "items-center", "justify-center", "rounded-xl", 3, "isActiveChange", "routerLink"], [1, "text-3xl"], [1, "text-center", "text-xs", "font-medium"], ["active", "", 1, "bg-base-100", "absolute", "inset-y-0", "top-0", "-right-4", "w-2", "rounded-l-lg"], ["type", "button", "matRipple", "", "scroll-down", "", "aria-hidden", "true", "tabindex", "-1", 1, "hover:bg-base-100/30", "mx-auto", "mb-2", "flex", "h-6", "w-18", "shrink-0", "items-center", "justify-center", "rounded-lg", "disabled:opacity-30", 3, "click", "disabled"], ["type", "button", "matRipple", "", "matTooltipPosition", "right", 1, "hover:bg-base-100/30", "focus-visible:bg-base-100/30", "mb-2", "flex", "h-18", "w-18", "flex-col", "items-center", "justify-center", "rounded-xl", "text-center", 3, "matMenuTriggerFor", "matTooltip"], [1, "mt-1", "line-clamp-2", "w-full", "px-1", "text-xs", "leading-tight", "font-medium"], ["xPosition", "after"], ["type", "button", "mat-menu-item", "", "matTooltipPosition", "right", 3, "matTooltip", "font-semibold"], ["type", "button", "mat-menu-item", "", "matTooltipPosition", "right", 3, "click", "matTooltip"], [1, "flex", "max-w-64", "min-w-44", "items-center", "gap-3"], [1, "text-xl"], [1, "min-w-0", "leading-tight"], [1, "text-base-content/60", "truncate", "text-xs"]], template: function NavSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 4);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275elementStart(2, "a", 5);
        \u0275\u0275conditionalCreate(3, NavSidebarComponent_Conditional_3_Template, 2, 4, "img", 6)(4, NavSidebarComponent_Conditional_4_Template, 3, 3, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 8);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function NavSidebarComponent_Template_button_click_5_listener() {
          return ctx.openPalette();
        });
        \u0275\u0275elementStart(8, "icon", 9);
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, NavSidebarComponent_Conditional_10_Template, 3, 1, "button", 10);
        \u0275\u0275elementStart(11, "div", 11, 0);
        \u0275\u0275listener("scroll", function NavSidebarComponent_Template_div_scroll_11_listener() {
          return ctx.updateScrollState();
        });
        \u0275\u0275elementStart(13, "div", 12, 1);
        \u0275\u0275repeaterCreate(15, NavSidebarComponent_For_16_Template, 9, 8, "a", 13, _forTrack03);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, NavSidebarComponent_Conditional_17_Template, 3, 1, "button", 14);
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275conditionalCreate(19, NavSidebarComponent_Conditional_19_Template, 11, 8);
        \u0275\u0275element(20, "signage-group-selector");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 9, "SIGNAGE_MANAGER.PRIMARY_NAV"));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c2));
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_4_0 = ctx.logo_src) ? 3 : 4, tmp_4_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 11, "SIGNAGE_MANAGER.PALETTE_OPEN") + " (" + ctx.palette_shortcut + ")");
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 13, "SIGNAGE_MANAGER.PALETTE_OPEN"))("aria-keyshortcuts", ctx.palette_aria_shortcut);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.overflowing() ? 10 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.nav_items());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.overflowing() ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_locale_selector() && ctx.locales().length > 1 ? 19 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      RouterLinkActive,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      AuthenticatedImageDirective,
      SignageGroupSelectorComponent,
      TranslatePipe
    ], styles: ["\na[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%] {\n  transition: opacity 300ms;\n}\na[_ngcontent-%COMP%]:not(.active)   [active][_ngcontent-%COMP%] {\n  opacity: 0;\n}\na.active[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=nav-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavSidebarComponent, [{
    type: Component,
    args: [{ selector: "nav-sidebar", template: `
        <nav
            [attr.aria-label]="'SIGNAGE_MANAGER.PRIMARY_NAV' | translate"
            class="bg-secondary text-secondary-content border-base-100 relative z-30 hidden h-full flex-col border-r p-2 shadow-lg sm:flex"
        >
            <a
                logo
                class="bg-base-100/80 mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl shadow-xl"
                [routerLink]="['/']"
            >
                @if (logo_src; as logo) {
                    <img
                        auth
                        class="max-h-18 max-w-18 object-contain"
                        [alt]="'SIGNAGE_MANAGER.LOGO_ALT' | translate"
                        [source]="logo"
                    />
                } @else {
                    <div class="opacity-20">
                        {{ 'SIGNAGE_MANAGER.LOGO_ALT' | translate }}
                    </div>
                }
            </a>
            <button
                type="button"
                matRipple
                class="hover:bg-base-100/30 focus-visible:bg-base-100/30 mx-auto mt-2 flex h-10 w-18 shrink-0 items-center justify-center gap-1 rounded-xl"
                [matTooltip]="
                    ('SIGNAGE_MANAGER.PALETTE_OPEN' | translate) +
                    ' (' +
                    palette_shortcut +
                    ')'
                "
                matTooltipPosition="right"
                [attr.aria-label]="'SIGNAGE_MANAGER.PALETTE_OPEN' | translate"
                [attr.aria-keyshortcuts]="palette_aria_shortcut"
                (click)="openPalette()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            @if (overflowing()) {
                <button
                    type="button"
                    matRipple
                    scroll-up
                    class="hover:bg-base-100/30 mx-auto mt-2 flex h-6 w-18 shrink-0 items-center justify-center rounded-lg disabled:opacity-30"
                    aria-hidden="true"
                    tabindex="-1"
                    [disabled]="!can_scroll_up()"
                    (click)="scrollNav(-1)"
                >
                    <icon class="text-2xl">keyboard_arrow_up</icon>
                </button>
            }
            <div
                #scroller
                class="no-scrollbar min-h-0 w-[calc(100%+0.5rem)] flex-1 overflow-x-hidden overflow-y-auto p-2"
                (scroll)="updateScrollState()"
            >
                <div #scroll_content class="flex flex-col gap-4">
                    @for (item of nav_items(); track item.route) {
                        <a
                            #nav_link
                            class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 shrink-0 flex-col items-center justify-center rounded-xl"
                            [routerLink]="item.route"
                            routerLinkActive="active bg-primary/30"
                            (isActiveChange)="onActiveChange($event, nav_link)"
                            [attr.aria-label]="item.label | translate"
                            ariaCurrentWhenActive="page"
                        >
                            <icon class="text-3xl">{{ item.icon }}</icon>
                            <div class="text-center text-xs font-medium">
                                {{ item.label | translate }}
                            </div>
                            <div
                                active
                                class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                            ></div>
                        </a>
                    }
                </div>
            </div>
            @if (overflowing()) {
                <button
                    type="button"
                    matRipple
                    scroll-down
                    class="hover:bg-base-100/30 mx-auto mb-2 flex h-6 w-18 shrink-0 items-center justify-center rounded-lg disabled:opacity-30"
                    aria-hidden="true"
                    tabindex="-1"
                    [disabled]="!can_scroll_down()"
                    (click)="scrollNav(1)"
                >
                    <icon class="text-2xl">keyboard_arrow_down</icon>
                </button>
            }
            <div class="shrink-0 p-2">
                @if (show_locale_selector() && locales().length > 1) {
                    <button
                        type="button"
                        matRipple
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 mb-2 flex h-18 w-18 flex-col items-center justify-center rounded-xl text-center"
                        [matMenuTriggerFor]="language_menu"
                        [matTooltip]="active_locale_details()"
                        matTooltipPosition="right"
                        [attr.aria-label]="'COMMON.LANGUAGE_SELECT' | translate"
                    >
                        <icon class="text-3xl">language</icon>
                        <div
                            class="mt-1 line-clamp-2 w-full px-1 text-xs leading-tight font-medium"
                        >
                            {{ active_locale_label() | translate }}
                        </div>
                    </button>
                    <mat-menu #language_menu="matMenu" xPosition="after">
                        @for (lang of locales(); track lang.id) {
                            <button
                                type="button"
                                mat-menu-item
                                (click)="setLocale(lang.id)"
                                [matTooltip]="localeDetails(lang)"
                                matTooltipPosition="right"
                                [class.font-semibold]="
                                    active_locale() === lang.id
                                "
                            >
                                <div
                                    class="flex max-w-64 min-w-44 items-center gap-3"
                                >
                                    <icon class="text-xl">
                                        {{
                                            active_locale() === lang.id
                                                ? 'check'
                                                : 'language'
                                        }}
                                    </icon>
                                    <div class="min-w-0 leading-tight">
                                        <div>{{ lang.name | translate }}</div>
                                        @if (
                                            lang.local &&
                                            (lang.name | translate) !==
                                                lang.local
                                        ) {
                                            <div
                                                class="text-base-content/60 truncate text-xs"
                                            >
                                                {{ lang.local }}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </button>
                        }
                    </mat-menu>
                }
                <signage-group-selector />
            </div>
        </nav>
    `, imports: [
      RouterModule,
      MatMenuModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective,
      SignageGroupSelectorComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;56044f539979aefc523aa0413f1d4cf465837fa2bdc4192c7cb7036ac8819a8c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/shared/nav-sidebar.component.ts */\na [active] {\n  transition: opacity 300ms;\n}\na:not(.active) [active] {\n  opacity: 0;\n}\na.active [active] {\n  opacity: 1;\n}\n.no-scrollbar {\n  scrollbar-width: none;\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=nav-sidebar.component.css.map */\n"] }]
  }], () => [], { _scroller: [{ type: ViewChild, args: ["scroller", { isSignal: true }] }], _scroll_content: [{ type: ViewChild, args: ["scroll_content", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavSidebarComponent, { className: "NavSidebarComponent", filePath: "apps/signage-manager/src/app/shared/nav-sidebar.component.ts", lineNumber: 231 });
})();

export {
  NavFooterComponent,
  NavSidebarComponent
};
//# debugId=3a8002de-e76b-5c2b-9ce3-e6e266ad8ec3
//# sourceMappingURL=chunk-V6FXLAZY.js.map
