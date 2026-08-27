import {
  DEFAULT_COLOURS
} from "./chunk-I254NESN.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-MEOQRCJE.js";
import {
  SettingsService
} from "./chunk-VGBRJ5YL.js";
import {
  Component,
  Input,
  MatRipple,
  MatRippleModule,
  Output,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XUPR3QCE.js";

// libs/bookings/src/lib/locker-grid.component.ts
var _c0 = () => [];
function LockerGridComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function LockerGridComponent_For_2_Template_button_click_0_listener() {
      const locker_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clicked.emit(locker_r2));
    });
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locker_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-column-start", locker_r2.position[0] + 1)("grid-row-start", locker_r2.position[1] + 1)("grid-column-end", locker_r2.position[0] + (locker_r2.size[0] + 1))("background-color", ctx_r2.status(locker_r2))("grid-row-end", locker_r2.position[1] + (locker_r2.size[1] + 1));
    \u0275\u0275classProp("opacity-60", ctx_r2.selected() && ctx_r2.selected() !== locker_r2.id);
    \u0275\u0275property("matTooltip", locker_r2.name)("disabled", locker_r2.bookable === false || locker_r2?.available === false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", locker_r2.name, " ");
  }
}
var LockerGridComponent = class _LockerGridComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_name = input(
      true,
      ...ngDevMode ? [{ debugName: "show_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.default_status = input(
      "busy",
      ...ngDevMode ? [{ debugName: "default_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bank = input(
      void 0,
      ...ngDevMode ? [{ debugName: "bank" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bank_status = input(
      {},
      ...ngDevMode ? [{ debugName: "bank_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = input(
      "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clicked = output();
    this.columns = computed(
      () => {
        let columns = 1;
        for (const locker of this.bank()?.lockers || []) {
          const x = locker.position[0] + locker.size[0];
          if (x > columns)
            columns = x;
        }
        return columns;
      },
      ...ngDevMode ? [{ debugName: "columns" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  color(status) {
    const colours = this._settings.get("app.explore.colors") || {};
    return colours[`lockers-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`];
  }
  status(locker) {
    if (!locker)
      return this.color("not-bookable");
    const selected = this.selected();
    if (selected && locker.id === selected) {
      return this.color("pending");
    }
    let value = this.bank_status()[locker.id] || "free";
    if (!this.bank_status()[locker.id] && !locker?.available) {
      value = this.default_status();
    }
    return this.color(value);
  }
  static {
    this.\u0275fac = function LockerGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LockerGridComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerGridComponent, selectors: [["locker-grid"]], inputs: { show_name: [1, "show_name"], default_status: [1, "default_status"], bank: [1, "bank"], bank_status: [1, "bank_status"], selected: [1, "selected"] }, outputs: { clicked: "clicked" }, decls: 3, vars: 7, consts: [[1, "grid", "flex-1", "gap-2", "p-2"], ["matRipple", "", 1, "border-base-200", "relative", "overflow-hidden", "rounded-sm", "border", 3, "opacity-60", "grid-column-start", "grid-row-start", "grid-column-end", "background-color", "grid-row-end", "matTooltip", "disabled"], ["matRipple", "", 1, "border-base-200", "relative", "overflow-hidden", "rounded-sm", "border", 3, "click", "matTooltip", "disabled"], ["handle", "", 1, "bg-base-400", "absolute", "top-1/2", "left-2", "h-6", "w-1", "-translate-y-1/2", "rounded-sm", "opacity-60"], ["vent", "", 1, "bg-base-400", "absolute", "top-2", "left-1/2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "opacity-60"], ["vent", "", 1, "bg-base-400", "absolute", "top-4", "left-1/2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "opacity-60"], ["vent", "", 1, "bg-base-400", "absolute", "top-6", "left-1/2", "h-1", "w-12", "-translate-x-1/2", "rounded-t", "opacity-60"], [1, "text-base-content", "absolute", "top-8", "left-1/2", "-translate-x-1/2", "text-[0.6rem]", "font-medium", "opacity-60"], [1, "hover:bg-base-content", "absolute", "inset-0", "opacity-10"]], template: function LockerGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, LockerGridComponent_For_2_Template, 8, 15, "button", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.columns() * 2.5 + "rem")("grid-template-columns", "repeat(" + ctx.columns() + ", 5rem)")("grid-template-rows", "repeat(" + ctx.bank()?.height + ", 5rem)");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bank()?.lockers || \u0275\u0275pureFunction0(6, _c0));
      }
    }, dependencies: [MatRippleModule, MatRipple, MatTooltipModule, MatTooltip], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockerGridComponent, [{
    type: Component,
    args: [{ selector: "locker-grid", template: `
        <div
            class="grid flex-1 gap-2 p-2"
            [style.width]="columns() * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns() + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank()?.height + ', 5rem)'"
        >
            @for (locker of bank()?.lockers || []; track locker) {
                <button
                    matRipple
                    class="border-base-200 relative overflow-hidden rounded-sm border"
                    [class.opacity-60]="selected() && selected() !== locker.id"
                    [style.grid-column-start]="locker.position[0] + 1"
                    [style.grid-row-start]="locker.position[1] + 1"
                    [style.grid-column-end]="
                        locker.position[0] + (locker.size[0] + 1)
                    "
                    [style.background-color]="status(locker)"
                    [style.grid-row-end]="
                        locker.position[1] + (locker.size[1] + 1)
                    "
                    [matTooltip]="locker.name"
                    [disabled]="
                        locker.bookable === false || locker?.available === false
                    "
                    (click)="clicked.emit(locker)"
                >
                    <div
                        handle
                        class="bg-base-400 absolute top-1/2 left-2 h-6 w-1 -translate-y-1/2 rounded-sm opacity-60"
                    ></div>
                    <div
                        vent
                        class="bg-base-400 absolute top-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t opacity-60"
                    ></div>
                    <div
                        vent
                        class="bg-base-400 absolute top-4 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t opacity-60"
                    ></div>
                    <div
                        vent
                        class="bg-base-400 absolute top-6 left-1/2 h-1 w-12 -translate-x-1/2 rounded-t opacity-60"
                    ></div>
                    <div
                        class="text-base-content absolute top-8 left-1/2 -translate-x-1/2 text-[0.6rem] font-medium opacity-60"
                    >
                        {{ locker.name }}
                    </div>
                    <div
                        class="hover:bg-base-content absolute inset-0 opacity-10"
                    ></div>
                </button>
            }
        </div>
    `, imports: [MatRippleModule, MatTooltipModule], styles: ["/* angular:styles/component:css;32afd79bdb50e1a260a311dcbbe42ad630e05ff005c6bd90901be0d3385e4315;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/locker-grid.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nbutton[disabled] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=locker-grid.component.css.map */\n"] }]
  }], null, { show_name: [{ type: Input, args: [{ isSignal: true, alias: "show_name", required: false }] }], default_status: [{ type: Input, args: [{ isSignal: true, alias: "default_status", required: false }] }], bank: [{ type: Input, args: [{ isSignal: true, alias: "bank", required: false }] }], bank_status: [{ type: Input, args: [{ isSignal: true, alias: "bank_status", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], clicked: [{ type: Output, args: ["clicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerGridComponent, { className: "LockerGridComponent", filePath: "libs/bookings/src/lib/locker-grid.component.ts", lineNumber: 79 });
})();

export {
  LockerGridComponent
};
//# sourceMappingURL=chunk-U26SUAVM.js.map
