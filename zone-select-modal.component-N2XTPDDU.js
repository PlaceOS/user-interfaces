import {
  SignageZoneService
} from "./chunk-PXINODZJ.js";
import {
  ZoneSelectTreeComponent
} from "./chunk-GYZVXOG6.js";
import "./chunk-QVCXHNXH.js";
import "./chunk-4RQHXHWB.js";
import "./chunk-RRB2KGTS.js";
import "./chunk-KPIQKT3I.js";
import "./chunk-SNTKCJZA.js";
import "./chunk-QWNBTLSW.js";
import "./chunk-5HHIMVHG.js";
import "./chunk-7MGS6UY4.js";
import "./chunk-LSRYU32B.js";
import "./chunk-ORKMPFOU.js";
import "./chunk-5INXWBHO.js";
import "./chunk-ORNCOXEQ.js";
import "./chunk-S4TGVV2L.js";
import "./chunk-6P5AKWIU.js";
import "./chunk-GEJ763SF.js";
import {
  PagedSearch,
  byDisplayName
} from "./chunk-VXDPGMUS.js";
import "./chunk-H3YU5OJJ.js";
import {
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-CHDADISI.js";
import "./chunk-FYBK3ORD.js";
import {
  TranslatePipe
} from "./chunk-T2VWHNJH.js";
import "./chunk-BYJQITNS.js";
import "./chunk-4IL6MTBN.js";
import "./chunk-4XDY7DFN.js";
import {
  IconComponent
} from "./chunk-7MADQ4JT.js";
import "./chunk-Q3DBHKJK.js";
import "./chunk-AAF65IVH.js";
import "./chunk-PWFU2DHD.js";
import "./chunk-YXB236ED.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import "./chunk-P3XWP5GT.js";
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
} from "./chunk-BKT2MDTY.js";
import "./chunk-653SOEEV.js";

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
//# debugId=c65130ab-0e52-531e-b807-bafb73db0f07
//# sourceMappingURL=zone-select-modal.component-N2XTPDDU.js.map
