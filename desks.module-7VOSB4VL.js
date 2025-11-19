import {
  DesksManageComponent
} from "./chunk-2WHEEXPR.js";
import {
  ExploreDesksService,
  ExploreZoomControlComponent
} from "./chunk-SNSNG7QQ.js";
import "./chunk-YV7CLCVO.js";
import {
  DeskBookModalComponent,
  DeskBookingsComponent
} from "./chunk-JO23A3AA.js";
import {
  DesksStateService
} from "./chunk-YLLWODUB.js";
import "./chunk-C3LP5WQR.js";
import {
  BookingRulesModalComponent
} from "./chunk-YUTBF2L5.js";
import {
  DateOptionsComponent
} from "./chunk-TOCDSBS2.js";
import "./chunk-WNTCVLQI.js";
import {
  SearchbarComponent
} from "./chunk-AGB55ATH.js";
import "./chunk-YIO5MOBF.js";
import "./chunk-M6Q7N2W7.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  UserSearchFieldComponent
} from "./chunk-67VYHWAM.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
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
  csvToJson,
  downloadFile,
  generateQRCode,
  inject,
  jsonToCsv,
  loadTextFileFromInputEvent,
  map,
  nextValueFrom,
  notifyError,
  randomInt,
  setClassMetadata,
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
} from "./chunk-I4HSLPYT.js";

// apps/concierge/src/app/desks/desk-map-view.component.ts
var _DeskMapViewComponent = class _DeskMapViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._desk = inject(DesksStateService);
    this._desks_state = inject(ExploreDesksService);
    this._org = inject(OrganisationService);
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.actions = this._state.map_actions;
    this.features = this._state.map_features;
    this.setHost = (u) => this._desks_state.setOptions({ host: u });
  }
  ngOnInit() {
    this._desks_state.setOptions({ use_api: true });
    this.subscription("date", this._desk.filters.subscribe((opts) => {
      const level = this._org.levelWithID(opts.zones);
      if (level)
        this._state.setLevel(level.id);
      this._desks_state.setOptions({
        date: opts.date || Date.now(),
        all_day: true,
        zones: opts.zones
      });
    }));
  }
};
_DeskMapViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DeskMapViewComponent_BaseFactory;
  return function DeskMapViewComponent_Factory(__ngFactoryType__) {
    return (\u0275DeskMapViewComponent_BaseFactory || (\u0275DeskMapViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskMapViewComponent)))(__ngFactoryType__ || _DeskMapViewComponent);
  };
})();
_DeskMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskMapViewComponent, selectors: [["desk-map-view"]], features: [\u0275\u0275ProvidersFeature([ExploreDesksService]), \u0275\u0275InheritDefinitionFeature], decls: 13, vars: 19, consts: [["map", "", 1, "relative", "h-full", "w-full"], [3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"], [1, "absolute", "left-0", "top-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 1, "white", 3, "ngModelChange", "ngModel"], ["info", "", 1, "absolute", "bottom-0", "m-2", "rounded", "bg-base-100", "p-2", "text-center", "shadow"]], template: function DeskMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "interactive-map", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275element(8, "explore-zoom-controls", 2);
    \u0275\u0275elementStart(9, "div", 3)(10, "a-user-search-field", 4);
    \u0275\u0275listener("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_10_listener($event) {
      return ctx.setHost($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275text(12, " Click or Tap an available desk to book it. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, ctx.url))("zoom", \u0275\u0275pipeBind1(3, 9, ctx.positions).zoom)("center", \u0275\u0275pipeBind1(4, 11, ctx.positions).center)("styles", \u0275\u0275pipeBind1(5, 13, ctx.styles))("features", \u0275\u0275pipeBind1(6, 15, ctx.features))("actions", \u0275\u0275pipeBind1(7, 17, ctx.actions));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngModel", null);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
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
                [src]="url | async"
                [zoom]="(positions | async).zoom"
                [center]="(positions | async).center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
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
                class="absolute bottom-0 m-2 rounded bg-base-100 p-2 text-center shadow"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskMapViewComponent, { className: "DeskMapViewComponent", filePath: "apps/concierge/src/app/desks/desk-map-view.component.ts", lineNumber: 71 });
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
    this.desks = this._state.desks.pipe(map((list) => list.map((_) => {
      this.loadQrCode(_);
      return _;
    })));
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
_DeskQrCodeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQrCodeModalComponent, selectors: [["desk-qr-code-modal"]], decls: 12, vars: 5, consts: [[1, "relative", "min-h-screen", "w-screen", "rounded-none", "bg-base-100"], [1, "sticky", "top-0", "flex", "w-full", "items-center", "justify-between", "p-4", "print:hidden"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[calc(100vh-5rem)]", "flex-wrap", "overflow-auto", "print:h-auto"], ["target", "_blank", "ref", "noopener noreferrer", 1, "mx-auto", "flex", "w-[28%]", "flex-col", "items-center", "justify-center", "landscape:w-[21%]", "print:h-[25vh]", "print:landscape:h-[33.33vh]", 3, "href"], [1, "mx-4", "my-2", "block", "rounded-lg", "border", "border-base-200", "bg-base-100", "p-2"], [1, "w-48", 3, "src"], [1, "mx-4", "my-1", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-1", "text-center", "font-mono", "text-sm"]], template: function DeskQrCodeModalComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_ACTION_PRINT_QR_LIST"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 3, ctx.desks));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
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
                @for (desk of desks | async; track desk) {
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
                            class="mx-4 my-1 w-[calc(100%-2rem)] rounded bg-base-200 p-1 text-center font-mono text-sm"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQrCodeModalComponent, { className: "DeskQrCodeModalComponent", filePath: "apps/concierge/src/app/desks/desk-qr-code-modal.component.ts", lineNumber: 61 });
})();

// apps/concierge/src/app/desks/desks.component.ts
var _c0 = ["app-desks", ""];
function DesksComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_11_Template_button_click_0_listener() {
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
function DesksComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DesksComponent_Conditional_12_Template_button_click_0_listener() {
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
function DesksComponent_Conditional_14_For_5_Conditional_2_Template(rf, ctx) {
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
function DesksComponent_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_14_For_5_Conditional_2_Template, 5, 3, "div", 18);
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
function DesksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 15);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_14_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(4, DesksComponent_Conditional_14_For_5_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones)("placeholder", \u0275\u0275pipeBind1(3, 4, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 6, ctx_r1.levels));
  }
}
function DesksComponent_Conditional_15_For_6_Conditional_2_Template(rf, ctx) {
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
function DesksComponent_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16)(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DesksComponent_Conditional_15_For_6_Conditional_2_Template, 5, 3, "div", 18);
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
function DesksComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-select", 20);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ngModelChange", function DesksComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones([$event]));
    });
    \u0275\u0275repeaterCreate(5, DesksComponent_Conditional_15_For_6_Template, 5, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length) ? (tmp_1_0 = \u0275\u0275pipeBind1(3, 4, ctx_r1.filters)) == null ? null : tmp_1_0.zones[0] : "")("placeholder", \u0275\u0275pipeBind1(4, 6, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(7, 8, ctx_r1.levels));
  }
}
function DesksComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 21);
    \u0275\u0275listener("dateChange", function DesksComponent_Conditional_17_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 22);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275listener("click", function DesksComponent_Conditional_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "event_busy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "COMMON.REFRESH"))("disabled", \u0275\u0275pipeBind1(3, 6, ctx_r1.loading));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 8, "APP.CONCIERGE.REJECT_ALL"))("disabled", \u0275\u0275pipeBind1(8, 10, ctx_r1.loading));
  }
}
function DesksComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_18_Template_button_click_0_listener() {
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
    \u0275\u0275listener("change", function DesksComponent_Conditional_18_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_18_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 26);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function DesksComponent_Conditional_18_Template_button_click_13_listener() {
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
function DesksComponent_Conditional_21_Template(rf, ctx) {
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
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
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
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
        this._checkManage();
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
    this._checkManage();
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
  _checkManage() {
    this.manage = this.path.includes("manage");
    if (this.manage) {
      this.subscription("zone-changes", this._org.active_levels.subscribe(async (lvls) => {
        if (!lvls.length)
          return;
        const { zones } = await nextValueFrom(this._state.filters);
        const levels_in_zones = zones?.length && zones.some((z) => lvls.find((lvl) => lvl.id === z));
        if (!levels_in_zones)
          this.updateZones([lvls[0].id]);
      }));
    } else
      this.unsub("zone-changes");
  }
};
_DesksComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DesksComponent_BaseFactory;
  return function DesksComponent_Factory(__ngFactoryType__) {
    return (\u0275DesksComponent_BaseFactory || (\u0275DesksComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DesksComponent)))(__ngFactoryType__ || _DesksComponent);
  };
})();
_DesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesksComponent, selectors: [["", "app-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 23, vars: 15, consts: [[1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2"], [1, "mb-4", "flex", "w-full", "items-center", "space-x-2", "px-8"], ["appearance", "outline", 1, "no-subscript", "w-60"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], ["mode", "indeterminate", 1, "w-full"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], [1, "pl-2"], [1, "text-2xl"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "matTooltip", "disabled"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], ["btn", "", "icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"]], template: function DesksComponent_Template(rf, ctx) {
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
    \u0275\u0275pipe(10, "async");
    \u0275\u0275listener("modelChange", function DesksComponent_Template_searchbar_modelChange_9_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, DesksComponent_Conditional_11_Template, 6, 3, "button", 7);
    \u0275\u0275conditionalCreate(12, DesksComponent_Conditional_12_Template, 6, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275conditionalCreate(14, DesksComponent_Conditional_14_Template, 7, 8, "mat-form-field", 9);
    \u0275\u0275conditionalCreate(15, DesksComponent_Conditional_15_Template, 8, 10, "mat-form-field", 9);
    \u0275\u0275element(16, "div", 5);
    \u0275\u0275conditionalCreate(17, DesksComponent_Conditional_17_Template, 11, 12);
    \u0275\u0275conditionalCreate(18, DesksComponent_Conditional_18_Template, 17, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275element(20, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, DesksComponent_Conditional_21_Template, 1, 0, "mat-progress-bar", 11);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, ctx.manage ? "APP.CONCIERGE.DESKS_HEADER" : "APP.CONCIERGE.DESKS_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(10, 11, ctx.filters)) == null ? null : tmp_1_0.search);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.path !== "manage" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.manage ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.manage ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.path === "events" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.path === "manage" ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(22, 13, ctx.loading) && ctx.path === "events" ? 21 : -1);
  }
}, dependencies: [
  MatProgressBarModule,
  MatProgressBar,
  RouterModule,
  RouterOutlet,
  MatRippleModule,
  MatRipple,
  CommonModule,
  AsyncPipe,
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
                        [model]="(filters | async)?.search"
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
                                [ngModel]="(filters | async)?.zones"
                                (ngModelChange)="updateZones($event)"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                                multiple
                            >
                                @for (level of levels | async; track level) {
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
                                    (filters | async)?.zones?.length
                                        ? (filters | async)?.zones[0]
                                        : ''
                                "
                                (ngModelChange)="updateZones([$event])"
                                [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            >
                                @for (level of levels | async; track level) {
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
                            class="ml-2 rounded border border-base-200"
                            (click)="refresh()"
                            [disabled]="loading | async"
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
                            class="ml-2 rounded border border-base-200"
                            (click)="rejectAll()"
                            [disabled]="loading | async"
                        >
                            <icon>event_busy</icon>
                        </button>
                    }
                    @if (path === 'manage') {
                        <button
                            btn
                            icon
                            matRipple
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
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
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
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
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
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
                            class="h-12 w-12 rounded bg-secondary text-secondary-content"
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
                @if ((loading | async) && path === 'events') {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesksComponent, { className: "DesksComponent", filePath: "apps/concierge/src/app/desks/desks.component.ts", lineNumber: 297 });
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
//# sourceMappingURL=desks.module-7VOSB4VL.js.map
