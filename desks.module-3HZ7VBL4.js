import {
  DesksManageComponent
} from "./chunk-OP5L7L7L.js";
import {
  ExploreDesksService,
  ExploreZoomControlComponent
} from "./chunk-OYYTELB5.js";
import "./chunk-QVUG6G2J.js";
import {
  DeskBookModalComponent,
  DeskBookingsComponent
} from "./chunk-KPC2GBRT.js";
import {
  DesksStateService
} from "./chunk-CLYK2JGC.js";
import "./chunk-RSB53MCB.js";
import {
  BookingRulesModalComponent
} from "./chunk-ZBNWJ5JX.js";
import {
  DateOptionsComponent
} from "./chunk-6PAIEHXO.js";
import "./chunk-XUCZMKRG.js";
import {
  SearchbarComponent
} from "./chunk-U5E5ZIR7.js";
import "./chunk-DCC25PBS.js";
import "./chunk-ORXW5ROT.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  UserSearchFieldComponent
} from "./chunk-2TMQ6H3Q.js";
import {
  ActivatedRoute,
  AsyncHandler,
  CommonModule,
  Component,
  Desk,
  ExploreStateService,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SettingsService,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  combineLatest,
  computed,
  csvToJson,
  downloadFile,
  effect,
  generateQRCode,
  inject,
  jsonToCsv,
  loadTextFileFromInputEvent,
  map,
  notifyError,
  randomInt,
  setClassMetadata,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-B2WI2KLR.js";

// apps/concierge/src/app/desks/desk-map-view.component.ts
var _DeskMapViewComponent = class _DeskMapViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._desk = inject(DesksStateService);
    this._desks_state = inject(ExploreDesksService);
    this._org = inject(OrganisationService);
    this.url = toSignal(this._state.map_url, { initialValue: "" });
    this.styles = toSignal(this._state.map_styles);
    this.positions = toSignal(this._state.map_positions);
    this.actions = toSignal(this._state.map_actions);
    this.features = toSignal(this._state.map_features);
    this.setHost = (u) => this._desks_state.setOptions({ host: u });
    this._filtersEffect = effect(() => {
      const opts = this._desk.filters();
      const level = this._org.levelWithID(opts.zones);
      if (level)
        this._state.setLevel(level.id);
      this._desks_state.setOptions({
        date: opts.date || Date.now(),
        all_day: true,
        zones: opts.zones
      });
    });
  }
  ngOnInit() {
    this._desks_state.setOptions({ use_api: true });
  }
};
_DeskMapViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DeskMapViewComponent_BaseFactory;
  return function DeskMapViewComponent_Factory(__ngFactoryType__) {
    return (\u0275DeskMapViewComponent_BaseFactory || (\u0275DeskMapViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskMapViewComponent)))(__ngFactoryType__ || _DeskMapViewComponent);
  };
})();
_DeskMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapViewComponent, selectors: [["desk-map-view"]], features: [\u0275\u0275ProvidersFeature([ExploreDesksService]), \u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [["map", "", 1, "relative", "h-full", "w-full"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "left-0", "top-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "absolute", "bottom-0", "m-2", "rounded-sm", "bg-base-100", "p-2", "text-center", "shadow-sm"]], template: function DeskMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "interactive-map", 1)(2, "explore-zoom-controls", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "a-user-search-field", 4);
    \u0275\u0275listener("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_4_listener($event) {
      return ctx.setHost($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6, " Click or Tap an available desk to book it. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx.url())("zoom", (tmp_1_0 = ctx.positions()) == null ? null : tmp_1_0.zoom)("center", (tmp_2_0 = ctx.positions()) == null ? null : tmp_2_0.center)("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", null);
  }
}, dependencies: [
  CommonModule,
  InteractiveMapComponent,
  ExploreZoomControlComponent,
  UserSearchFieldComponent,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info][_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */"] });
var DeskMapViewComponent = _DeskMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskMapViewComponent, [{
    type: Component,
    args: [{ selector: "desk-map-view", template: `
        <div map class="relative h-full w-full">
            <interactive-map
                [src]="url()"
                [zoom]="positions()?.zoom"
                [center]="positions()?.center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
            ></interactive-map>
            <explore-zoom-controls
                class="absolute bottom-2 right-2"
            ></explore-zoom-controls>
            <div class="absolute left-0 top-0 p-2 text-black">
                <a-user-search-field
                    [ngModel]="null"
                    (ngModelChange)="setHost($event)"
                    class="white"
                    placeholder="User for bookings..."
                ></a-user-search-field>
            </div>
            <div
                info
                class="absolute bottom-0 m-2 rounded-sm bg-base-100 p-2 text-center shadow-sm"
            >
                Click or Tap an available desk to book it.
            </div>
        </div>
    `, providers: [ExploreDesksService], imports: [
      CommonModule,
      InteractiveMapComponent,
      ExploreZoomControlComponent,
      UserSearchFieldComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;dd93bc8719393a35a70acaea5bd7405d99fe2e9b226de04eba8ae5416d008453;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desk-map-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[info] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=desk-map-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapViewComponent, { className: "DeskMapViewComponent", filePath: "apps/concierge/src/app/desks/desk-map-view.component.ts", lineNumber: 72 });
})();

// apps/concierge/src/app/desks/desk-qr-code-modal.component.ts
function DeskQrCodeModalComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275element(3, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const desk_r1 = ctx.$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 3, desk_r1.qr_link, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", desk_r1.qr_code, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", desk_r1.name || desk_r1.id, " ");
  }
}
var _DeskQrCodeModalComponent = class _DeskQrCodeModalComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(DesksStateService);
    this.print = () => window.print();
    this.desks = computed(() => this._state.desks().map((_) => {
      this.loadQrCode(_);
      return _;
    }));
  }
  get kiosk_url() {
    const path = this._settings.get("app.workplace_url_path") || "/workplace";
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = generateQRCode(link);
    return item.qr_code;
  }
};
_DeskQrCodeModalComponent.\u0275fac = function DeskQrCodeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskQrCodeModalComponent)();
};
_DeskQrCodeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQrCodeModalComponent, selectors: [["desk-qr-code-modal"]], decls: 11, vars: 3, consts: [[1, "relative", "min-h-screen", "w-screen", "rounded-none", "bg-base-100"], [1, "sticky", "top-0", "flex", "w-full", "items-center", "justify-between", "p-4", "print:hidden"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-5rem)]", "flex-wrap", "overflow-auto", "print:h-auto"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-auto", "flex", "w-[28%]", "flex-col", "items-center", "justify-center", "landscape:w-[21%]", "print:h-[25vh]", "print:landscape:h-[33.33vh]", 3, "href"], [1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2"], [1, "w-48", 3, "src"], [1, "mx-4", "my-1", "w-[calc(100%-2rem)]", "rounded-sm", "bg-base-200", "p-1", "text-center", "font-mono", "text-sm"]], template: function DeskQrCodeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function DeskQrCodeModalComponent_Template_button_click_2_listener() {
      return ctx.print();
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, DeskQrCodeModalComponent_For_10_Template, 6, 6, "a", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.desks());
  }
}, dependencies: [
  CommonModule,
  MatDialogModule,
  MatDialogClose,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  SafePipe
], encapsulation: 2 });
var DeskQrCodeModalComponent = _DeskQrCodeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQrCodeModalComponent, [{
    type: Component,
    args: [{ selector: "desk-qr-code-modal", template: `
        <div class="relative min-h-screen w-screen rounded-none bg-base-100">
            <div
                class="sticky top-0 flex w-full items-center justify-between p-4 print:hidden"
            >
                <button btn matRipple (click)="print()">
                    {{ 'APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST' | translate }}
                </button>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
            <div
                class="flex h-[calc(100vh-5rem)] flex-wrap overflow-auto print:h-auto"
            >
                @for (desk of desks(); track desk) {
                    <a
                        [href]="desk.qr_link | safe: 'url'"
                        target="_blank"
                        ref="noopener noreferrer"
                        class="mx-auto flex w-[28%] flex-col items-center justify-center landscape:w-[21%] print:h-[25vh] print:landscape:h-[33.33vh]"
                    >
                        <div
                            class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                        >
                            <img class="w-48" [src]="desk.qr_code" />
                        </div>
                        <div
                            class="mx-4 my-1 w-[calc(100%-2rem)] rounded-sm bg-base-200 p-1 text-center font-mono text-sm"
                        >
                            {{ desk.name || desk.id }}
                        </div>
                    </a>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      SafePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQrCodeModalComponent, { className: "DeskQrCodeModalComponent", filePath: "apps/concierge/src/app/desks/desk-qr-code-modal.component.ts", lineNumber: 60 });
})();

// apps/concierge/src/app/desks/desks.component.ts
var _c0 = ["app-desks", ""];
function DesksComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newDeskBooking());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 14);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.NEW_BOOKING"), " ");
  }
}
function DesksComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editDesk());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon", 14);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.DESKS_NEW"), " ");
  }
}
function DesksComponent_Conditional_13_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DesksComponent_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_13_For_4_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function DesksComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_13_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(3, DesksComponent_Conditional_13_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filters().zones)("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DesksComponent_Conditional_14_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r7.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function DesksComponent_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_14_For_4_Conditional_2_Template, 5, 3, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r7.display_name || level_r7.name, " ");
  }
}
function DesksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones([$event]));
    });
    \u0275\u0275repeaterCreate(3, DesksComponent_Conditional_14_For_4_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = ctx_r1.filters().zones) == null ? null : tmp_1_0.length) ? ctx_r1.filters().zones[0] : "")("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DesksComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 21);
    \u0275\u0275listener("dateChange", function DesksComponent_Conditional_16_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "event_busy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "COMMON.REFRESH"))("disabled", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.REJECT_ALL"))("disabled", ctx_r1.loading());
  }
}
function DesksComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewQRCodes());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "qr_code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 25);
    \u0275\u0275listener("change", function DesksComponent_Conditional_17_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 6, "APP.CONCIERGE.DESKS_LIST_UPLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 8, "APP.CONCIERGE.DESKS_LIST_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 10, "APP.CONCIERGE.DESKS_BOOKING_RULES"));
  }
}
function DesksComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 11);
  }
}
var _DesksComponent = class _DesksComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(DesksStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.manage = false;
    this.filters = this._state.filters;
    this.levels = toSignal(combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld))), { initialValue: [] });
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllDesks();
    this.editDesk = () => this._state.editDesk();
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[url_parts.length - 1].split("?")[0];
        this._updateView();
      }
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (!zones.length)
          return;
        const level = this._org.levelWithID(zones);
        this._state.setFilters({ zones });
        if (!level)
          return;
        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
    this._updateView();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  viewQRCodes() {
    this._dialog.open(DeskQrCodeModalComponent);
  }
  newDeskBooking() {
    const ref = this._dialog.open(DeskBookModalComponent, {});
    ref.afterClosed().subscribe((_) => {
      this._state.refresh();
    });
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "desk" }
    });
  }
  downloadTemplate() {
    const desk = new Desk({
      id: "desk-123",
      name: "Test Desk",
      bookable: true,
      groups: ["test-desk-group", "desk-bookers"],
      features: ["Standing Desk", "Dual Monitor"]
    }).toJSON();
    delete desk.images;
    const data = jsonToCsv([desk]);
    downloadFile("desk-template.csv", data);
  }
  async loadCSVData(event) {
    const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
      notifyError(m);
      throw e;
    });
    try {
      const list = csvToJson(data) || [];
      this._state.addDesks(list.map((_) => new Desk(__spreadProps(__spreadValues({}, _), {
        id: _.id || `desk-${randomInt(999999)}`
      }))));
    } catch (e) {
      console.error(e);
    }
  }
  _getViewFromPath() {
    if (this.path.includes("manage"))
      return "manage";
    if (this.path.includes("map"))
      return "map";
    return "events";
  }
  _updateView() {
    const view = this._getViewFromPath();
    this.manage = view === "manage";
    this._state.setFilters({ view });
    if (this.manage) {
      this.subscription("zone-changes", this._org.active_levels.subscribe(async (lvls) => {
        if (!lvls.length)
          return;
        const { zones } = this._state.filters();
        const levels_in_zones = zones?.length && zones.some((z) => lvls.find((lvl) => lvl.id === z));
        if (!levels_in_zones)
          this.updateZones([lvls[0].id]);
      }));
    } else {
      this.unsub("zone-changes");
    }
  }
};
_DesksComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksComponent_BaseFactory;
  return function DesksComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksComponent_BaseFactory || (\u0275DesksComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksComponent)))(__ngFactoryType__ || _DesksComponent);
  };
})();
_DesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksComponent, selectors: [["", "app-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 21, vars: 11, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2"], [1, "mb-4", "flex", "w-full", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["mode", "indeterminate", 1, "w-full"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", 1, "ml-2", "rounded-sm", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"]], template: function DesksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 5);
    \u0275\u0275elementStart(9, "searchbar", 6);
    \u0275\u0275listener("modelChange", function DesksComponent_Template_searchbar_modelChange_9_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DesksComponent_Conditional_10_Template, 6, 3, "button", 7);
    \u0275\u0275conditionalCreate(11, DesksComponent_Conditional_11_Template, 6, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275conditionalCreate(13, DesksComponent_Conditional_13_Template, 5, 4, "mat-form-field", 9);
    \u0275\u0275conditionalCreate(14, DesksComponent_Conditional_14_Template, 5, 4, "mat-form-field", 9);
    \u0275\u0275element(15, "div", 5);
    \u0275\u0275conditionalCreate(16, DesksComponent_Conditional_16_Template, 9, 8);
    \u0275\u0275conditionalCreate(17, DesksComponent_Conditional_17_Template, 17, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275element(19, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, DesksComponent_Conditional_20_Template, 1, 0, "mat-progress-bar", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, ctx.manage ? "APP.CONCIERGE.DESKS_HEADER" : "APP.CONCIERGE.DESKS_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", ctx.filters().search);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path !== "manage" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.manage ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.path === "events" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading() && ctx.path === "events" ? 20 : -1);
  }
}, dependencies: [
  MatProgressBarModule,
  MatProgressBar,
  RouterModule,
  RouterOutlet,
  MatRippleModule,
  MatRipple,
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  DateOptionsComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  SearchbarComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=desks.component.css.map */"] });
var DesksComponent = _DesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksComponent, [{
    type: Component,
    args: [{ selector: "[app-desks]", template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex w-full items-center space-x-2 px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{
                            (manage
                                ? 'APP.CONCIERGE.DESKS_HEADER'
                                : 'APP.CONCIERGE.DESKS_BOOK_HEADER'
                            ) | translate
                        }}
                    </h2>
                    <div class="w-px flex-1"></div>
                    <searchbar
                        class="mr-2"
                        [model]="filters().search"
                        (modelChange)="setFilters({ search: $event })"
                    ></searchbar>
                    @if (path !== 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="newDeskBooking()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.NEW_BOOKING' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            matRipple
                            class="w-44 space-x-2"
                            (click)="editDesk()"
                        >
                            <div class="pl-2">
                                {{ 'APP.CONCIERGE.DESKS_NEW' | translate }}
                            </div>
                            <icon class="text-2xl">add</icon>
                        </button>
                    }
                </div>
                <div class="mb-4 flex w-full items-center space-x-2 px-8">
                    @if (!manage) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="filters().zones"
                                (ngModelChange)="updateZones($event)"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                                multiple
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (manage) {
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-60"
                        >
                            <mat-select
                                [ngModel]="
                                    filters().zones?.length
                                        ? filters().zones[0]
                                        : ''
                                "
                                (ngModelChange)="updateZones([$event])"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            level.parent_id
                                                            | building
                                                        )?.display_name
                                                    }}
                                                    <span class="opacity-0">
                                                        -
                                                    </span>
                                                </div>
                                            }
                                            <div>
                                                {{
                                                    level.display_name ||
                                                        level.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    <div class="w-px flex-1"></div>
                    @if (path === 'events') {
                        <date-options
                            (dateChange)="setDate($event)"
                        ></date-options>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="'COMMON.REFRESH' | translate"
                            class="ml-2 rounded-sm border border-base-200"
                            (click)="refresh()"
                            [disabled]="loading()"
                        >
                            <icon>refresh</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REJECT_ALL' | translate
                            "
                            class="ml-2 rounded-sm border border-base-200"
                            (click)="rejectAll()"
                            [disabled]="loading()"
                        >
                            <icon>event_busy</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_VIEW_QR_CODE_LIST'
                                    | translate
                            "
                            (click)="viewQRCodes()"
                        >
                            <icon>qr_code</icon>
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_UPLOAD' | translate
                            "
                        >
                            <icon>cloud_upload</icon>
                            <input
                                type="file"
                                class="absolute inset-0 opacity-0"
                                (change)="loadCSVData($event)"
                            />
                        </button>
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            (click)="downloadTemplate()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_LIST_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                            (click)="manageRestrictions()"
                            [matTooltip]="
                                'APP.CONCIERGE.DESKS_BOOKING_RULES' | translate
                            "
                        >
                            <icon>lock_open</icon>
                        </button>
                    }
                </div>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <router-outlet></router-outlet>
                </div>
                @if (loading() && path === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      MatProgressBarModule,
      RouterModule,
      MatRippleModule,
      CommonModule,
      FormsModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      DateOptionsComponent,
      MatFormFieldModule,
      MatSelectModule,
      ApplicationSidebarComponent,
      ApplicationTopbarComponent,
      SearchbarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/desks/desks.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=desks.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksComponent, { className: "DesksComponent", filePath: "apps/concierge/src/app/desks/desks.component.ts", lineNumber: 300 });
})();

// apps/concierge/src/app/desks/desks.module.ts
var ROUTES = [
  {
    path: "",
    component: DesksComponent,
    children: [
      { path: "events", component: DeskBookingsComponent },
      { path: "map", component: DeskMapViewComponent },
      { path: "manage", component: DesksManageComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var _DesksModule = class _DesksModule {
};
_DesksModule.\u0275fac = function DesksModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksModule)();
};
_DesksModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DesksModule });
_DesksModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  DesksComponent,
  DeskBookingsComponent,
  DeskMapViewComponent,
  DesksManageComponent,
  RouterModule.forChild(ROUTES)
] });
var DesksModule = _DesksModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        DesksComponent,
        DeskBookingsComponent,
        DeskMapViewComponent,
        DesksManageComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  DesksModule
};
//# sourceMappingURL=desks.module-3HZ7VBL4.js.map
