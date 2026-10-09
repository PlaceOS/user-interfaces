import {
  SignageZoneService
} from "./chunk-UJ2O3SYI.js";
import {
  ZoneSelectTreeComponent
} from "./chunk-3ZUVV4MY.js";
import "./chunk-HXSW35PI.js";
import "./chunk-WZLYCRCE.js";
import "./chunk-A3ZHUTED.js";
import "./chunk-76L3RQJV.js";
import "./chunk-JKGJXOUJ.js";
import "./chunk-YVBXI2KA.js";
import "./chunk-TP37P6LZ.js";
import "./chunk-GF5I6UHA.js";
import "./chunk-STYUKBG2.js";
import "./chunk-EW627VC3.js";
import "./chunk-NVC2MTBW.js";
import {
  PagedSearch,
  byDisplayName
} from "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import "./chunk-ARJ6GFJX.js";
import {
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import "./chunk-2PPCVPFM.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import "./chunk-KABK725Z.js";
import "./chunk-4BHMYMLA.js";
import "./chunk-HGUL5NVP.js";
import "./chunk-E72MB55H.js";
import "./chunk-DMUGOB3K.js";
import {
  IconComponent
} from "./chunk-PRJCR3BE.js";
import "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6HUGPUMR.js";
import "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/shared/zone-select-modal.component.ts
var ZoneSelectModalComponent = class _ZoneSelectModalComponent {
  constructor() {
    this._zone_service = inject(SignageZoneService);
    this._dialog_ref = inject(MatDialogRef);
    this.roots = this._zone_service.root_zones;
    this.selected_zone = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.list = new PagedSearch((search) => {
      const parent_id = this.selected_zone()?.id;
      return search.trim() ? this._zone_service.querySelectableZones(search, parent_id || "") : null;
    }, byDisplayName);
    this.loadChildren = (parent_id) => this._zone_service.zoneChildren(parent_id);
  }
  addZone() {
    const zone = this.selected_zone();
    if (zone)
      this._dialog_ref.close(zone.id);
  }
  static {
    this.\u0275fac = function ZoneSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSelectModalComponent, selectors: [["zone-select-modal"]], decls: 16, vars: 16, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "overflow-auto", "px-4", "pt-2", "pb-4", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], [3, "selectedChange", "list", "roots", "load_children", "scoped_search", "selected"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-t", "p-2"], [1, "min-w-0", "flex-1", "truncate", "px-2"], ["btn", "", "type", "button", "matRipple", "", 1, "min-w-32", 3, "click", "disabled"]], template: function ZoneSelectModalComponent_Template(rf, ctx) {
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
        \u0275\u0275twoWayListener("selectedChange", function ZoneSelectModalComponent_Template_zone_select_tree_selectedChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected_zone, $event) || (ctx.selected_zone = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "footer", 5)(11, "div", 6);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function ZoneSelectModalComponent_Template_button_click_13_listener() {
          return ctx.addZone();
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "SIGNAGE_MANAGER.ADD_ZONE_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 12, "SIGNAGE_MANAGER.CLOSE_ADD_ZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("list", ctx.list)("roots", ctx.roots())("load_children", ctx.loadChildren)("scoped_search", true);
        \u0275\u0275twoWayProperty("selected", ctx.selected_zone);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.selected_zone()?.display_name || ctx.selected_zone()?.name, " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selected_zone());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "COMMON.ADD"), " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneSelectModalComponent, [{
    type: Component,
    args: [{
      selector: "zone-select-modal",
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
                [roots]="roots()"
                [load_children]="loadChildren"
                [scoped_search]="true"
                [(selected)]="selected_zone"
            />
        </main>
        <footer class="border-base-300 flex items-center gap-2 border-t p-2">
            <!-- A zone picked from the search can be hidden in the tree -->
            <div class="min-w-0 flex-1 truncate px-2">
                {{ selected_zone()?.display_name || selected_zone()?.name }}
            </div>
            <button
                btn
                type="button"
                matRipple
                class="min-w-32"
                [disabled]="!selected_zone()"
                (click)="addZone()"
            >
                {{ 'COMMON.ADD' | translate }}
            </button>
        </footer>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSelectModalComponent, { className: "ZoneSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/zone-select-modal.component.ts", lineNumber: 65 });
})();
export {
  ZoneSelectModalComponent
};
//# debugId=b0c9c894-8f2c-5666-a3dd-4efba1c31c53
//# sourceMappingURL=zone-select-modal.component-MDR7K55U.js.map
