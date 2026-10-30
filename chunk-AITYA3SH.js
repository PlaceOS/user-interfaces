import {
  toSignal
} from "./chunk-RGXOCRUM.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-I52JNSOJ.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-TW5QCAQQ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-2K5G7CFD.js";
import {
  requestSpacesForZone
} from "./chunk-3TOA4G7Y.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import {
  OrganisationService
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  unique
} from "./chunk-JYQPCPCB.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import {
  Component,
  Output,
  inject,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QAVCSYNX.js";

// libs/components/src/lib/available-rooms-state-modal.component.ts
var _c0 = (a0) => ({ type: a0 });
var _c1 = (a0) => ({ count: a0 });
function AvailableRoomsStateModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AvailableRoomsStateModalComponent_Conditional_6_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 14);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_For_12_Template_tr_click_0_listener() {
      const space_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoom(space_r4.id));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "mat-checkbox", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 16)(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selected().includes(space_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r4.display_name || space_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", !ctx_r1.disabled_rooms()?.includes(space_r4.id))("bg-error", ctx_r1.disabled_rooms()?.includes(space_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, !ctx_r1.disabled_rooms()?.includes(space_r4.id) ? "COMMON.ENABLED" : "COMMON.DISABLED"), " ");
  }
}
function AvailableRoomsStateModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "table", 5)(2, "thead", 6)(3, "tr")(4, "td", 7);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_Template_td_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRoom("*"));
    });
    \u0275\u0275element(5, "mat-checkbox", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementStart(7, "td", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, AvailableRoomsStateModalComponent_Conditional_6_For_12_Template, 9, 9, "tr", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "footer", 11)(14, "button", 12);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableSelected());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_6_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disableSelected());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.rooms()?.length === ctx_r1.selected().length)("indeterminate", ctx_r1.selected().length > 0 && ctx_r1.rooms()?.length !== ctx_r1.selected().length);
    const rm_list_r5 = ctx_r1.rooms();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(9, 5, "APP.CONCIERGE.AVAILABLE_ROOMS_COUNT", \u0275\u0275pureFunction1(13, _c1, rm_list_r5?.length), rm_list_r5?.length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rooms());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 11, "APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE"), " ");
  }
}
function AvailableRoomsStateModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "APP.CONCIERGE.AVAILABLE_ROOMS_SAVING", \u0275\u0275pureFunction1(4, _c0, ctx_r1.type)), " ");
  }
}
var AvailableRoomsStateModalComponent = class _AvailableRoomsStateModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.change = output();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rooms = toSignal(requestSpacesForZone(this._org.building.id));
    this.type = this._data.type;
    this.disabled_rooms = signal(
      this._data.disabled_rooms,
      ...ngDevMode ? [{ debugName: "disabled_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async toggleRoom(id) {
    if (id === "*") {
      const rooms = this.rooms() || [];
      if (this.selected().length !== rooms.length)
        this.selected.set(rooms.map((_) => _.id));
      else
        this.selected.set([]);
    } else {
      if (this.selected().includes(id))
        this.selected.set(this.selected().filter((_) => _ !== id));
      else
        this.selected.set([...this.selected(), id]);
    }
  }
  async enableSelected() {
    this.loading.set(true);
    const disabled_list = this.disabled_rooms();
    const list = disabled_list.filter((_) => !this.selected().includes(_));
    this.disabled_rooms.set(list);
    this.change.emit(list);
  }
  async disableSelected() {
    this.loading.set(true);
    const disabled_list = this.disabled_rooms();
    const list = unique(disabled_list.concat(this.selected()));
    this.disabled_rooms.set(list);
    this.change.emit(list);
  }
  static {
    this.\u0275fac = function AvailableRoomsStateModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AvailableRoomsStateModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailableRoomsStateModalComponent, selectors: [["available-rooms-state-modal"]], outputs: { change: "change" }, decls: 8, vars: 8, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-48", "w-full", "min-w-64", "flex-col", "items-center", "justify-center", "space-y-2", "p-16", "text-center"], [1, "max-h-[65vh]", "w-lg", "overflow-auto"], [1, "min-w-lg"], [1, "border-base-200", "border-b"], [1, "w-12", "py-1", 3, "click"], [1, "pointer-events-none", 3, "checked", "indeterminate"], [1, "px-8", "text-right", "text-xs"], [1, "hover:bg-base-200"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "hover:bg-base-200", 3, "click"], [1, "pointer-events-none", 3, "checked"], [1, "text-center"], [1, "ml-auto", "w-24", "rounded-full", "px-3", "py-2", "text-sm", "text-white"], ["diameter", "32"]], template: function AvailableRoomsStateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "header", 0)(2, "h2", 1);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, AvailableRoomsStateModalComponent_Conditional_5_Template, 3, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, AvailableRoomsStateModalComponent_Conditional_6_Template, 20, 15)(7, AvailableRoomsStateModalComponent_Conditional_7_Template, 5, 6, "main", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, "APP.CONCIERGE.AVAILABLE_ROOMS_HEADER", \u0275\u0275pureFunction1(6, _c0, ctx.type)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      TranslatePipe
    ], styles: ["\ntd[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvailableRoomsStateModalComponent, [{
    type: Component,
    args: [{ selector: "available-rooms-state-modal", template: `
        <div>
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_HEADER'
                            | translate: { type: type }
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[65vh] w-lg overflow-auto">
                    <table class="min-w-lg">
                        <thead class="border-base-200 border-b">
                            <tr>
                                <td class="w-12 py-1" (click)="toggleRoom('*')">
                                    <mat-checkbox
                                        class="pointer-events-none"
                                        [checked]="
                                            rooms()?.length ===
                                            selected().length
                                        "
                                        [indeterminate]="
                                            selected().length > 0 &&
                                            rooms()?.length !==
                                                selected().length
                                        "
                                    ></mat-checkbox>
                                </td>
                                <td></td>
                                <td class="px-8 text-right text-xs">
                                    @let rm_list = rooms();
                                    {{
                                        'APP.CONCIERGE.AVAILABLE_ROOMS_COUNT'
                                            | translate
                                                : {
                                                      count: rm_list?.length,
                                                  }
                                                : rm_list?.length
                                    }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            @for (space of rooms(); track space) {
                                <tr
                                    class="hover:bg-base-200"
                                    (click)="toggleRoom(space.id)"
                                >
                                    <td>
                                        <mat-checkbox
                                            class="pointer-events-none"
                                            [checked]="
                                                selected().includes(space.id)
                                            "
                                        ></mat-checkbox>
                                    </td>
                                    <td>
                                        {{ space.display_name || space.name }}
                                    </td>
                                    <td class="text-center">
                                        <div
                                            class="ml-auto w-24 rounded-full px-3 py-2 text-sm text-white"
                                            [class.bg-success]="
                                                !disabled_rooms()?.includes(
                                                    space.id
                                                )
                                            "
                                            [class.bg-error]="
                                                disabled_rooms()?.includes(
                                                    space.id
                                                )
                                            "
                                        >
                                            {{
                                                (!disabled_rooms()?.includes(
                                                    space.id
                                                )
                                                    ? 'COMMON.ENABLED'
                                                    : 'COMMON.DISABLED'
                                                ) | translate
                                            }}
                                        </div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </main>
                <footer
                    class="border-base-200 flex items-center justify-end space-x-2 border-t p-2"
                >
                    <button btn matRipple (click)="enableSelected()">
                        {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        (click)="disableSelected()"
                    >
                        {{
                            'APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE' | translate
                        }}
                    </button>
                </footer>
            } @else {
                <main
                    class="flex h-48 w-full min-w-64 flex-col items-center justify-center space-y-2 p-16 text-center"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>
                        {{
                            'APP.CONCIERGE.AVAILABLE_ROOMS_SAVING'
                                | translate: { type: type }
                        }}
                    </p>
                </main>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      MatRippleModule,
      MatCheckboxModule,
      MatDialogModule,
      TranslatePipe,
      IconComponent
    ], styles: ["/* angular:styles/component:css;44b25fd2b68917ac2104b8130dd323b9c27f1ea1ae596877dd198a37a47771fe;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/available-rooms-state-modal.component.ts */\ntd {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */\n"] }]
  }], null, { change: [{ type: Output, args: ["change"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailableRoomsStateModalComponent, { className: "AvailableRoomsStateModalComponent", filePath: "libs/components/src/lib/available-rooms-state-modal.component.ts", lineNumber: 158 });
})();

export {
  AvailableRoomsStateModalComponent
};
//# debugId=81f74614-a9ab-5c11-842c-686a8952ffe9
//# sourceMappingURL=chunk-AITYA3SH.js.map
