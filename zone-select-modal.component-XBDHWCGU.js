import {
  ZoneSelectTreeComponent
} from "./chunk-ZFDUBZEH.js";
import "./chunk-CPQV5BWL.js";
import {
  PagedSearch,
  byDisplayName
} from "./chunk-IVRQIKS4.js";
import "./chunk-2NMXA65W.js";
import "./chunk-4ZPVAEUW.js";
import {
  SignageService
} from "./chunk-SGA7RFWJ.js";
import "./chunk-XASXFKEM.js";
import "./chunk-OZEEJTZM.js";
import "./chunk-442R65BD.js";
import "./chunk-LOC765HW.js";
import "./chunk-5PUHOZFV.js";
import "./chunk-CIOF3O5C.js";
import "./chunk-VOXI3UVZ.js";
import "./chunk-IROTSDQV.js";
import "./chunk-VATSXXH3.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import "./chunk-SAAU3CSL.js";
import "./chunk-6VI5IEKG.js";
import {
  Component,
  IconComponent,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatRipple,
  MatRippleModule,
  inject,
  linkedSignal,
  setClassMetadata,
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
} from "./chunk-JABNH3I5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/zone-select-modal.component.ts
var ZoneSelectModalComponent = class _ZoneSelectModalComponent {
  constructor() {
    this._service = inject(SignageService);
    this._dialog_ref = inject(MatDialogRef);
    this.roots = this._service.root_zones;
    this.selected_zone = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selected_zone" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.roots,
      computation: (roots, previous) => previous?.value || roots[0] || null
    }));
    this.list = new PagedSearch((search) => {
      const parent_id = this.selected_zone()?.id;
      return parent_id && search.trim() ? this._service.querySelectableZones(search, parent_id) : null;
    }, byDisplayName);
    this.loadChildren = (parent_id) => this._service.zoneChildren(parent_id);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSelectModalComponent, selectors: [["zone-select-modal"]], decls: 14, vars: 15, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "overflow-auto", "px-4", "pt-2", "pb-4", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], [3, "selectedChange", "list", "roots", "load_children", "scoped_search", "selected"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["btn", "", "type", "button", "matRipple", "", 1, "min-w-32", 3, "click", "disabled"]], template: function ZoneSelectModalComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(10, "footer", 5)(11, "button", 6);
        \u0275\u0275listener("click", function ZoneSelectModalComponent_Template_button_click_11_listener() {
          return ctx.addZone();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "SIGNAGE_MANAGER.ADD_ZONE_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 11, "SIGNAGE_MANAGER.CLOSE_ADD_ZONE"));
        \u0275\u0275advance(5);
        \u0275\u0275property("list", ctx.list)("roots", ctx.roots())("load_children", ctx.loadChildren)("scoped_search", true);
        \u0275\u0275twoWayProperty("selected", ctx.selected_zone);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.selected_zone());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "COMMON.ADD"), " ");
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
        <footer class="border-base-300 flex justify-end border-t p-2">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSelectModalComponent, { className: "ZoneSelectModalComponent", filePath: "apps/signage-manager/src/app/shared/zone-select-modal.component.ts", lineNumber: 61 });
})();
export {
  ZoneSelectModalComponent
};
//# debugId=9e0330da-762a-5df9-99b2-3c7fd6343d5c
//# sourceMappingURL=zone-select-modal.component-XBDHWCGU.js.map
