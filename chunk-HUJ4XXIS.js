import {
  LoadErrorComponent
} from "./chunk-4QIUI4FW.js";
import {
  rxResource
} from "./chunk-M2TZLEYD.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-PNPURSUP.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-73GQPJSD.js";
import {
  requestSpacesForZone
} from "./chunk-QWJWGJBS.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-CQXOQ5CV.js";
import {
  AnnounceDirective
} from "./chunk-ESLDZ5QT.js";
import {
  TranslatePipe
} from "./chunk-SG45U3DS.js";
import {
  IconComponent
} from "./chunk-3FG7YPIO.js";
import {
  OrganisationService
} from "./chunk-Y4K5WHHN.js";
import {
  unique
} from "./chunk-UKH6PET6.js";
import {
  MatRippleModule
} from "./chunk-ZT4WQV5M.js";
import {
  MatRipple
} from "./chunk-EAD6DYEJ.js";
import {
  Component,
  Output,
  ViewChild,
  afterRenderEffect,
  computed,
  inject,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
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
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-AQIWUFR7.js";

// libs/components/src/lib/available-rooms-state-modal.component.ts
var _c0 = ["heading"];
var _c1 = (a0) => ({ type: a0 });
var _c2 = (a0) => ({ count: a0 });
function AvailableRoomsStateModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
  }
}
function AvailableRoomsStateModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "load-error", 7);
    \u0275\u0275listener("retry", function AvailableRoomsStateModalComponent_Conditional_7_Template_load_error_retry_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reloadRooms());
    });
    \u0275\u0275elementEnd()();
  }
}
function AvailableRoomsStateModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function AvailableRoomsStateModalComponent_Conditional_9_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 20);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_9_For_13_Template_tr_click_0_listener() {
      const space_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoom(space_r5.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "mat-checkbox", 21);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_9_For_13_Template_mat_checkbox_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function AvailableRoomsStateModalComponent_Conditional_9_For_13_Template_mat_checkbox_change_2_listener() {
      const space_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoom(space_r5.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 22)(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const space_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275ariaProperty("aria-label", space_r5.display_name || space_r5.name);
    \u0275\u0275property("checked", ctx_r1.selected().includes(space_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r5.display_name || space_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", !ctx_r1.disabled_rooms()?.includes(space_r5.id))("bg-error", ctx_r1.disabled_rooms()?.includes(space_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, !ctx_r1.disabled_rooms()?.includes(space_r5.id) ? "COMMON.ENABLED" : "COMMON.DISABLED"), " ");
  }
}
function AvailableRoomsStateModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 10)(1, "table", 11)(2, "thead", 12)(3, "tr")(4, "td", 13);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_9_Template_td_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRoom("*"));
    });
    \u0275\u0275elementStart(5, "mat-checkbox", 14);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_9_Template_mat_checkbox_click_5_listener($event) {
      return $event.stopPropagation();
    })("change", function AvailableRoomsStateModalComponent_Conditional_9_Template_mat_checkbox_change_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRoom("*"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "td");
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, AvailableRoomsStateModalComponent_Conditional_9_For_13_Template, 9, 10, "tr", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "footer", 17)(15, "button", 18);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableSelected());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275listener("click", function AvailableRoomsStateModalComponent_Conditional_9_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disableSelected());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(6, 8, "COMMON.SELECT_ALL"));
    \u0275\u0275property("checked", ctx_r1.rooms()?.length === ctx_r1.selected().length)("indeterminate", ctx_r1.selected().length > 0 && ctx_r1.rooms()?.length !== ctx_r1.selected().length);
    const rm_list_r6 = ctx_r1.rooms();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(10, 10, "APP.CONCIERGE.AVAILABLE_ROOMS_COUNT", \u0275\u0275pureFunction1(18, _c2, rm_list_r6?.length), rm_list_r6?.length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.rooms());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.selected().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selected().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE"), " ");
  }
}
function AvailableRoomsStateModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "APP.CONCIERGE.AVAILABLE_ROOMS_SAVING", \u0275\u0275pureFunction1(4, _c1, ctx_r1.type)), " ");
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
    this._rooms = rxResource({
      stream: () => requestSpacesForZone(this._org.building.id)
    });
    this.rooms = computed(
      () => this._rooms.hasValue() ? this._rooms.value() : void 0,
      ...ngDevMode ? [{ debugName: "rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rooms_error = computed(
      () => !!this._rooms.error(),
      ...ngDevMode ? [{ debugName: "rooms_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = this._data.type;
    this.disabled_rooms = signal(
      this._data.disabled_rooms,
      ...ngDevMode ? [{ debugName: "disabled_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._heading = viewChild.required(
      "heading",
      ...ngDevMode ? [{ debugName: "_heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._focus_on_save = afterRenderEffect(() => {
      if (this.loading())
        this._heading().nativeElement.focus();
    });
  }
  /**
   * Request the room list again after it fails to load. The loading view
   * removes the focused Retry button, so move focus to the title first.
   */
  reloadRooms() {
    this._heading().nativeElement.focus();
    this._rooms.reload();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailableRoomsStateModalComponent, selectors: [["available-rooms-state-modal"]], viewQuery: function AvailableRoomsStateModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._heading, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, outputs: { change: "change" }, decls: 11, vars: 8, consts: [["heading", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", "tabindex", "-1", 1, "px-2", "text-xl", "font-medium", "focus:outline-none"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-lg", "max-w-full"], [1, "flex", "h-48", "w-lg", "max-w-full", "flex-col", "items-center", "justify-center", "space-y-2", "text-center"], [1, "flex", "h-48", "w-full", "min-w-64", "flex-col", "items-center", "justify-center", "space-y-2", "p-16", "text-center"], [3, "retry"], ["diameter", "32", "aria-hidden", "true"], ["announce", ""], [1, "max-h-[65vh]", "w-lg", "overflow-auto"], [1, "min-w-lg"], [1, "border-base-200", "border-b"], [1, "w-12", "py-1", 3, "click"], [3, "click", "change", "aria-label", "checked", "indeterminate"], [1, "px-8", "text-right", "text-xs"], [1, "hover:bg-base-200"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click", "disabled"], [1, "hover:bg-base-200", 3, "click"], [3, "click", "change", "aria-label", "checked"], [1, "text-center"], [1, "ml-auto", "w-24", "rounded-full", "px-3", "py-2", "text-sm", "text-white"]], template: function AvailableRoomsStateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "header", 1)(2, "h2", 2, 0);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, AvailableRoomsStateModalComponent_Conditional_6_Template, 4, 3, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, AvailableRoomsStateModalComponent_Conditional_7_Template, 2, 0, "main", 4)(8, AvailableRoomsStateModalComponent_Conditional_8_Template, 5, 3, "main", 5)(9, AvailableRoomsStateModalComponent_Conditional_9_Template, 21, 20)(10, AvailableRoomsStateModalComponent_Conditional_10_Template, 5, 6, "main", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 3, "APP.CONCIERGE.AVAILABLE_ROOMS_HEADER", \u0275\u0275pureFunction1(6, _c1, ctx.type)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rooms_error() ? 7 : !ctx.rooms() ? 8 : !ctx.loading() ? 9 : 10);
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
      MatDialogTitle,
      IconComponent,
      AnnounceDirective,
      LoadErrorComponent,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */", "\ntd[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */"] });
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
                <h2
                    #heading
                    mat-dialog-title
                    tabindex="-1"
                    class="px-2 text-xl font-medium focus:outline-none"
                >
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_HEADER'
                            | translate: { type: type }
                    }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        [attr.aria-label]="'COMMON.CLOSE' | translate"
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (rooms_error()) {
                <main class="w-lg max-w-full">
                    <load-error (retry)="reloadRooms()" />
                </main>
            } @else if (!rooms()) {
                <main
                    class="flex h-48 w-lg max-w-full flex-col items-center justify-center space-y-2 text-center"
                >
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>{{ 'COMMON.LOADING' | translate }}</p>
                </main>
            } @else if (!loading()) {
                <main class="max-h-[65vh] w-lg overflow-auto">
                    <table class="min-w-lg">
                        <thead class="border-base-200 border-b">
                            <tr>
                                <td class="w-12 py-1" (click)="toggleRoom('*')">
                                    <mat-checkbox
                                        [aria-label]="
                                            'COMMON.SELECT_ALL' | translate
                                        "
                                        (click)="$event.stopPropagation()"
                                        (change)="toggleRoom('*')"
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
                                            [aria-label]="
                                                space.display_name || space.name
                                            "
                                            (click)="$event.stopPropagation()"
                                            (change)="toggleRoom(space.id)"
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
                    <button
                        btn
                        matRipple
                        [disabled]="!selected().length"
                        (click)="enableSelected()"
                    >
                        {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        [disabled]="!selected().length"
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
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>
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
      IconComponent,
      AnnounceDirective,
      LoadErrorComponent
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/available-rooms-state-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */\n", "/* angular:styles/component:css;44b25fd2b68917ac2104b8130dd323b9c27f1ea1ae596877dd198a37a47771fe;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/available-rooms-state-modal.component.ts */\ntd {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=available-rooms-state-modal.component.css.map */\n"] }]
  }], null, { change: [{ type: Output, args: ["change"] }], _heading: [{ type: ViewChild, args: ["heading", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailableRoomsStateModalComponent, { className: "AvailableRoomsStateModalComponent", filePath: "libs/components/src/lib/available-rooms-state-modal.component.ts", lineNumber: 208 });
})();

export {
  AvailableRoomsStateModalComponent
};
//# debugId=91ee52b4-191c-5330-9c47-7167fe7d78ac
//# sourceMappingURL=chunk-HUJ4XXIS.js.map
