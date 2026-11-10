import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-GO7C757U.js";
import "./chunk-BWVIGBB2.js";
import {
  ImageGenService
} from "./chunk-6RUTFYSL.js";
import "./chunk-A5VKNVMV.js";
import "./chunk-DIWTGF6Z.js";
import "./chunk-SFBDWMNX.js";
import "./chunk-BGHDI6YC.js";
import "./chunk-5INXWBHO.js";
import "./chunk-X4RFSNIM.js";
import "./chunk-PQVYNCOB.js";
import "./chunk-JOPZDPIP.js";
import "./chunk-VYHIXRTW.js";
import "./chunk-ZI47DHKY.js";
import "./chunk-SUHBQTO6.js";
import "./chunk-VXDPGMUS.js";
import "./chunk-2APKA6IB.js";
import {
  TranslatePipe
} from "./chunk-XDLX3ZVO.js";
import "./chunk-YVXYQM6B.js";
import "./chunk-BYJQITNS.js";
import "./chunk-4XDY7DFN.js";
import "./chunk-UXZGVRCR.js";
import "./chunk-KUBCKOBU.js";
import "./chunk-C3VLFLNG.js";
import "./chunk-PWFU2DHD.js";
import "./chunk-YXB236ED.js";
import "./chunk-SZ34I7U6.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-P3XWP5GT.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BKT2MDTY.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/manage/manage.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function ManageSectionComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", tab_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, tab_r1.label), " ");
  }
}
var ManageSectionComponent = class _ManageSectionComponent {
  constructor() {
    this._image_gen = inject(ImageGenService);
    this.tabs = computed(
      () => [
        { route: "/manage/report", label: "SIGNAGE_MANAGER.NAV_REPORT" },
        ...this._image_gen.enabled() ? [
          {
            route: "/manage/branding",
            label: "SIGNAGE_MANAGER.NAV_BRANDING"
          }
        ] : []
      ],
      ...ngDevMode ? [{ debugName: "tabs" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ManageSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageSectionComponent, selectors: [["manage-section"]], decls: 10, vars: 3, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "bg-base-100", "flex", "min-h-0", "min-w-0", "flex-1", "flex-col"], [1, "border-base-300", "flex", "shrink-0", "gap-2", "border-b", "px-4"], ["routerLinkActive", "", "ariaCurrentWhenActive", "page", "queryParamsHandling", "merge", 1, "aria-[current=page]:border-primary", "aria-[current=page]:text-primary", "-mb-px", "border-b-2", "border-transparent", "px-4", "py-3", "text-sm", "font-medium", "opacity-60", "aria-[current=page]:opacity-100", 3, "routerLink"], [1, "relative", "min-h-0", "flex-1"]], template: function ManageSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "nav", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275repeaterCreate(5, ManageSectionComponent_For_6_Template, 3, 4, "a", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.NAV_MANAGE"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs());
      }
    }, dependencies: [
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
      NavFooterComponent,
      NavSidebarComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageSectionComponent, [{
    type: Component,
    args: [{
      selector: "manage-section",
      template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="bg-base-100 flex min-h-0 min-w-0 flex-1 flex-col">
                <nav
                    class="border-base-300 flex shrink-0 gap-2 border-b px-4"
                    [attr.aria-label]="'SIGNAGE_MANAGER.NAV_MANAGE' | translate"
                >
                    @for (tab of tabs(); track tab.route) {
                        <a
                            class="aria-[current=page]:border-primary aria-[current=page]:text-primary -mb-px border-b-2 border-transparent px-4 py-3 text-sm font-medium opacity-60 aria-[current=page]:opacity-100"
                            routerLinkActive
                            ariaCurrentWhenActive="page"
                            queryParamsHandling="merge"
                            [routerLink]="tab.route"
                        >
                            {{ tab.label | translate }}
                        </a>
                    }
                </nav>
                <div class="relative min-h-0 flex-1">
                    <router-outlet />
                </div>
            </div>
            <nav-footer />
        </div>
    `,
      imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TranslatePipe,
        NavFooterComponent,
        NavSidebarComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageSectionComponent, { className: "ManageSectionComponent", filePath: "apps/signage-manager/src/app/manage/manage.component.ts", lineNumber: 50 });
})();
export {
  ManageSectionComponent
};
//# debugId=598f490c-71e6-5c7a-8273-786be637e294
//# sourceMappingURL=manage.component-O2JE7HO4.js.map
