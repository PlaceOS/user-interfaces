import {
  SignageDisplayService
} from "./chunk-DVI7WNM7.js";
import "./chunk-PXINODZJ.js";
import {
  PickerItemDirective,
  PickerModalComponent
} from "./chunk-6SNU6QHL.js";
import "./chunk-QVCXHNXH.js";
import "./chunk-4RQHXHWB.js";
import "./chunk-RRB2KGTS.js";
import "./chunk-KPIQKT3I.js";
import "./chunk-SNTKCJZA.js";
import "./chunk-QWNBTLSW.js";
import "./chunk-7MGS6UY4.js";
import "./chunk-LSRYU32B.js";
import "./chunk-ORKMPFOU.js";
import "./chunk-JJLSKVCV.js";
import "./chunk-UAAPVMKS.js";
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
  MatDialogModule
} from "./chunk-CHDADISI.js";
import "./chunk-FYBK3ORD.js";
import "./chunk-T2VWHNJH.js";
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
} from "./chunk-BKT2MDTY.js";
import "./chunk-653SOEEV.js";

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
//# debugId=a7cca8d7-8b13-52ff-ad37-b2dbbdcaeb63
//# sourceMappingURL=display-select-modal.component-RQKSFZU4.js.map
