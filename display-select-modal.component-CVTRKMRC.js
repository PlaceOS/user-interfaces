import {
  SignageDisplayService
} from "./chunk-G6C4H3A6.js";
import "./chunk-F56S6HYV.js";
import {
  PickerItemDirective,
  PickerModalComponent
} from "./chunk-KZT5S2BH.js";
import "./chunk-2CB5CIWX.js";
import "./chunk-HGSZFS7U.js";
import "./chunk-5HDOJWSN.js";
import "./chunk-2JUQNATI.js";
import "./chunk-5JV5E5YZ.js";
import "./chunk-T274YGFR.js";
import "./chunk-NAOQR5JK.js";
import "./chunk-QK7GWYWU.js";
import "./chunk-4EWUBQI4.js";
import "./chunk-AJWWVR72.js";
import "./chunk-UQBWKX66.js";
import "./chunk-CJWV3V4U.js";
import "./chunk-RE3BHRSQ.js";
import "./chunk-KG6MFZ6B.js";
import "./chunk-SG57ZUUB.js";
import {
  PagedSearch,
  byDisplayName
} from "./chunk-5G4V6J43.js";
import "./chunk-GJUEDHEJ.js";
import "./chunk-AUV25AH4.js";
import "./chunk-MNAOEVWZ.js";
import {
  MatDialogClose,
  MatDialogModule
} from "./chunk-4MZUVPXU.js";
import "./chunk-NXFWFAR7.js";
import "./chunk-HRFYIX4C.js";
import "./chunk-ENFA7HCT.js";
import "./chunk-DHFZNGBM.js";
import "./chunk-WG7PJTZZ.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import "./chunk-LLQ7KT7L.js";
import "./chunk-HLJZZGGR.js";
import "./chunk-TYLQ2T3C.js";
import "./chunk-7NEE74GJ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AVEVXYGF.js";
import "./chunk-7H4OKNBG.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Y6KAMZVN.js";
import "./chunk-QQY67O5D.js";

// apps/signage-manager/src/app/shared/display-select-modal.component.ts
function DisplaySelectModalComponent_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r1.description, " ");
  }
}
function DisplaySelectModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon", 3);
    \u0275\u0275text(2, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DisplaySelectModalComponent_ng_template_1_Conditional_6_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r1 = ctx.$implicit;
    \u0275\u0275property("mat-dialog-close", display_r1.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", display_r1.display_name || display_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r1.description ? 6 : -1);
  }
}
var DisplaySelectModalComponent = class _DisplaySelectModalComponent {
  constructor() {
    this._display_service = inject(SignageDisplayService);
    this.list = new PagedSearch((search) => this._display_service.queryDisplays(search), byDisplayName);
  }
  static {
    this.\u0275fac = function DisplaySelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplaySelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplaySelectModalComponent, selectors: [["display-select-modal"]], decls: 2, vars: 2, consts: [["heading", "SIGNAGE_MANAGER.ADD_DISPLAY_TITLE", "close_label", "SIGNAGE_MANAGER.CLOSE_ADD_DISPLAY", "search_label", "SIGNAGE_MANAGER.SEARCH_DISPLAYS", "empty_icon", "tv", "empty_label", "SIGNAGE_MANAGER.NO_DISPLAYS", 3, "list"], [3, "pickerItem"], ["type", "button", "matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "text-base-content/60", "shrink-0", "text-2xl"], [1, "min-w-0", "flex-1"], [1, "truncate"], [1, "text-base-content/70", "truncate", "text-xs"]], template: function DisplaySelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "picker-modal", 0);
        \u0275\u0275template(1, DisplaySelectModalComponent_ng_template_1_Template, 7, 3, "ng-template", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("list", ctx.list);
        \u0275\u0275advance();
        \u0275\u0275property("pickerItem", ctx.list);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      PickerModalComponent,
      PickerItemDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplaySelectModalComponent, [{
    type: Component,
    args: [{
      selector: "display-select-modal",
      template: `
        <picker-modal
            heading="SIGNAGE_MANAGER.ADD_DISPLAY_TITLE"
            close_label="SIGNAGE_MANAGER.CLOSE_ADD_DISPLAY"
            search_label="SIGNAGE_MANAGER.SEARCH_DISPLAYS"
            empty_icon="tv"
            empty_label="SIGNAGE_MANAGER.NO_DISPLAYS"
            [list]="list"
        >
            <ng-template [pickerItem]="list" let-display>
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [mat-dialog-close]="display.id"
                >
                    <icon class="text-base-content/60 shrink-0 text-2xl"
                        >tv</icon
                    >
                    <div class="min-w-0 flex-1">
                        <div class="truncate">
                            {{ display.display_name || display.name }}
                        </div>
                        @if (display.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ display.description }}
                            </div>
                        }
                    </div>
                </button>
            </ng-template>
        </picker-modal>
    `,
      imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        PickerModalComponent,
        PickerItemDirective
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplaySelectModalComponent, { className: "DisplaySelectModalComponent", filePath: "apps/signage-manager/src/app/shared/display-select-modal.component.ts", lineNumber: 56 });
})();
export {
  DisplaySelectModalComponent
};
//# debugId=16be9f9c-0ad9-5631-a5e1-728e4372f30d
//# sourceMappingURL=display-select-modal.component-CVTRKMRC.js.map
