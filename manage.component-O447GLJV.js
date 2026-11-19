import {
  ImageGenService
} from "./chunk-FS7PNB34.js";
import "./chunk-YHPHCJFF.js";
import "./chunk-6HQGHYDN.js";
import "./chunk-AAM3XREZ.js";
import {
  TranslatePipe
} from "./chunk-3FBFZD7L.js";
import "./chunk-GIBEECFF.js";
import "./chunk-X25JVJEC.js";
import "./chunk-JKZNPX3J.js";
import "./chunk-UWUUBN6E.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-35VUMMTM.js";
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
} from "./chunk-W6NHZ5YT.js";
import "./chunk-GLT7DQUO.js";

// apps/signage-manager/src/app/manage/manage.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function ManageSectionComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageSectionComponent, selectors: [["manage-section"]], decls: 8, vars: 3, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col"], [1, "bg-base-100", "flex", "min-h-0", "min-w-0", "flex-1", "flex-col"], [1, "border-base-300", "flex", "shrink-0", "gap-2", "border-b", "px-4"], ["routerLinkActive", "", "ariaCurrentWhenActive", "page", "queryParamsHandling", "merge", 1, "aria-[current=page]:border-primary", "aria-[current=page]:text-primary", "-mb-px", "border-b-2", "border-transparent", "px-4", "py-3", "text-sm", "font-medium", "opacity-60", "aria-[current=page]:opacity-100", 3, "routerLink"], [1, "relative", "min-h-0", "flex-1"]], template: function ManageSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275repeaterCreate(4, ManageSectionComponent_For_5_Template, 3, 4, "a", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 1, "SIGNAGE_MANAGER.NAV_MANAGE"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.tabs());
      }
    }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageSectionComponent, [{
    type: Component,
    args: [{
      selector: "manage-section",
      template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col">
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
        </div>
    `,
      imports: [RouterLink, RouterLinkActive, RouterOutlet, TranslatePipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageSectionComponent, { className: "ManageSectionComponent", filePath: "apps/signage-manager/src/app/manage/manage.component.ts", lineNumber: 39 });
})();
export {
  ManageSectionComponent
};
//# debugId=876bb5b2-bc82-5694-b209-e39c5c88b7d0
//# sourceMappingURL=manage.component-O447GLJV.js.map
