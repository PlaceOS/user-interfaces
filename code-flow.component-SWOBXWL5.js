import {
  scanForQRCode
} from "./chunk-6W45JX5A.js";
import {
  EventFormService
} from "./chunk-ORLV5Z2U.js";
import "./chunk-TQWVRBSO.js";
import {
  BookingFormService
} from "./chunk-MX6FHWCN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  checkinEventGuest,
  queryBookings,
  queryEvents,
  setBookingCheckedIn
} from "./chunk-2EHUPV2S.js";
import "./chunk-4ZPX43DB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-C6L5P757.js";
import "./chunk-LMAIQ4DZ.js";
import "./chunk-H2GPFJZZ.js";
import "./chunk-TWPPCAYQ.js";
import "./chunk-DLMEBJIG.js";
import "./chunk-KCAODCN5.js";
import "./chunk-3JQPS2OO.js";
import "./chunk-SQO5Y5ZU.js";
import {
  TranslatePipe
} from "./chunk-QGI2HD4I.js";
import {
  Booking,
  CalendarEvent,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  currentUser,
  getUnixTime
} from "./chunk-GRXVKFOQ.js";
import {
  IconComponent
} from "./chunk-ABUJTHF5.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import {
  Ua,
  addMinutes,
  endOfDay,
  i18n,
  notifyError
} from "./chunk-WSQPQHCZ.js";
import "./chunk-AWPFSUBU.js";
import "./chunk-J4TWZHWN.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JJMLMF3T.js";
import "./chunk-HXQPKKM6.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-CJAQVJ62.js";
import {
  Component,
  Output,
  ViewChild,
  inject,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-UL33YUHR.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/code-flow.component.ts
var _c0 = ["video"];
function BookCodeFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "video", 3, 0);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "h2", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function BookCodeFlowComponent_Conditional_0_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.room_code, $event) || (ctx_r1.room_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function BookCodeFlowComponent_Conditional_0_Template_input_keydown_enter_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCode());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function BookCodeFlowComponent_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCode());
    });
    \u0275\u0275elementStart(19, "icon", 13);
    \u0275\u0275text(20, "arrow_forward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function BookCodeFlowComponent_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.is_scanning.set(true));
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 15);
    \u0275\u0275listener("click", function BookCodeFlowComponent_Conditional_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.is_scanning.set(false));
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, ctx_r1.is_scanning() ? "APP.WORKPLACE.CODE_SCAN_TITLE" : "APP.WORKPLACE.CODE_ENTER_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 16, ctx_r1.is_scanning() ? "APP.WORKPLACE.CODE_SCAN_MSG" : "APP.WORKPLACE.CODE_ENTER_MSG"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("input", !ctx_r1.is_scanning());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 18, "COMMON.CODE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.room_code);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.room_code().trim());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 20, "COMMON.CHECK_IN"));
    \u0275\u0275advance(5);
    \u0275\u0275classMap("w-40 flex-1 border-none text-black " + (ctx_r1.is_scanning() ? "bg-base-100" : "bg-opacity-50 hover:bg-base-100 bg-transparent"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 22, "APP.WORKPLACE.CODE_SCAN_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-40 flex-1 border-none text-black " + (!ctx_r1.is_scanning() ? "bg-base-100" : "bg-opacity-50 hover:bg-base-100 bg-transparent"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 24, "APP.WORKPLACE.CODE_ENTER_TITLE"), " ");
  }
}
function BookCodeFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.CODE_CHECKING_IN"));
  }
}
var BookCodeFlowComponent = class _BookCodeFlowComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this.menu = output();
    this.is_scanning = signal(
      false,
      ...ngDevMode ? [{ debugName: "is_scanning" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_code = signal(
      "",
      ...ngDevMode ? [{ debugName: "room_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_invalid_qr = "";
    this._video_el = viewChild(
      "video",
      ...ngDevMode ? [{ debugName: "_video_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnDestroy() {
    this.unsub("scan_for_qr_code");
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("asset_id"))
        this._checkinBooking(params.get("asset_id"));
      if (params.has("space_id"))
        this._checkinEvent(params.get("space_id"), params.get("email"));
    }));
  }
  ngAfterViewInit() {
    const params = this._route.snapshot.queryParamMap;
    if (params.has("asset_id") || params.has("space_id"))
      return;
    this.timeout("initialise", () => this._startScanning());
  }
  /** Check in to the booking for the resource code that the user typed */
  submitCode() {
    const code = this.room_code().trim();
    if (!code || this.loading())
      return;
    this._checkinBooking(code);
  }
  handleQrCode(result) {
    if (this.loading())
      return;
    const url = result;
    const hashindex = url.indexOf("/#/");
    if (hashindex <= 0) {
      if (url === this._last_invalid_qr)
        return;
      this._last_invalid_qr = url;
      notifyError(i18n("APP.WORKPLACE.CODE_QR_INVALID"));
      return;
    }
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    const params = {};
    let match;
    while (match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    this._router.navigate([url.split("/#")[1].split("?")[0]], {
      queryParams: params
    });
  }
  async _checkinBooking(asset_id, type = "desk") {
    this.loading.set(true);
    this.unsub("scan_for_qr_code");
    const current_bookings = await queryBookings({
      period_start: getUnixTime(Date.now()),
      period_end: getUnixTime(addMinutes(Date.now(), 5)),
      type,
      email: currentUser().email
    }).catch((_) => []);
    const item = current_bookings.find((_) => _.asset_id === asset_id);
    if (item) {
      await setBookingCheckedIn(item, true).catch((_) => {
        notifyError(i18n("BOOKINGS.CHECK_IN_ERROR"));
        this.loading.set(false);
        throw _;
      });
      this._router.navigate(["/book", "code", "success"]);
    } else {
      const later_bookings = await queryBookings({
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(endOfDay(Date.now())),
        type,
        email: currentUser().email
      }).catch((_) => []);
      if (later_bookings.find((_) => _.asset_id === asset_id)) {
        this._router.navigate(["/book", "code", "error"], {
          queryParams: { type: "not_started", asset_id }
        });
        return;
      }
      if (current_bookings.length) {
        this._router.navigate(["/book", "code", "error"], {
          queryParams: { type: "wrong_resource", asset_id }
        });
        return;
      }
      this._router.navigate(["/book", "code", "error"], {
        queryParams: { type: "no_booking", asset_id }
      });
      this._booking_form.newForm(type, new Booking({ asset_id, type }));
      this._booking_form.setOptions({ type });
    }
    this.loading.set(false);
  }
  async _checkinEvent(space_id, email) {
    if (!email)
      email = currentUser().email;
    this.loading.set(true);
    this.unsub("scan_for_qr_code");
    const bookings = await queryEvents({
      period_start: getUnixTime(Date.now()),
      period_end: getUnixTime(Date.now() + 5 * 60 * 1e3)
    }).catch((_) => []);
    const item = bookings.find((_) => _.resources.find((s) => s.id === space_id || s.email === space_id));
    if (item) {
      await checkinEventGuest(item.id, email, true).catch((_) => {
        notifyError(i18n("BOOKINGS.CHECK_IN_ERROR"));
        this.loading.set(false);
        throw _;
      });
      this._router.navigate(["/book", "code", "success"]);
      this.loading.set(false);
    } else {
      let space;
      try {
        space = await Ua(space_id);
      } catch {
        this.loading.set(false);
        this._router.navigate(["/book", "code", "error"], {
          queryParams: { type: "space_error" }
        });
        return;
      }
      if (space) {
        this._event_form.newForm(new CalendarEvent({ system: space }));
      }
      this._router.navigate(["/book", "meeting"]);
    }
    this.loading.set(false);
  }
  _startScanning() {
    if (!navigator.mediaDevices?.getUserMedia || this.loading())
      return;
    const video_el = this._video_el()?.nativeElement;
    if (!video_el)
      return this.timeout("retry_start_scan", () => this._startScanning());
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video_el.srcObject = stream;
      this.subscription("scan_for_qr_code", scanForQRCode(video_el).subscribe({
        next: (qr_code) => qr_code ? this.handleQrCode(qr_code) : null,
        error: (error) => console.error("Error scanning QR code:", error)
      }));
    }).catch((e) => {
      console.error("Unable to fetch media devices!", e);
      this.is_scanning.set(false);
      notifyError(i18n("APP.WORKPLACE.CODE_CAMERA_ERROR"));
    });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BookCodeFlowComponent_BaseFactory;
      return function BookCodeFlowComponent_Factory(__ngFactoryType__) {
        return (\u0275BookCodeFlowComponent_BaseFactory || (\u0275BookCodeFlowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BookCodeFlowComponent)))(__ngFactoryType__ || _BookCodeFlowComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookCodeFlowComponent, selectors: [["book-code-flow"]], viewQuery: function BookCodeFlowComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._video_el, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, outputs: { menu: "menu" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["video", ""], [1, "bg-neutral", "relative", "flex", "flex-1", "items-center", "justify-center", "overflow-hidden"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["id", "video", 1, "min-h-full", "min-w-full", "object-cover"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-center", "text-white"], [1, "relative", "z-10", "flex", "flex-col", "items-center", "justify-end"], [1, "mb-1", "text-3xl", "uppercase", "subpixel-antialiased"], [1, "mb-4"], [1, "flex", "items-center", "justify-center"], ["box", "", 1, "m-8", "flex", "h-64", "w-64", "items-center", "justify-center", "space-x-2", "rounded-2xl", "p-8", "transition-all"], ["for", "room-code", 1, "uppercase"], ["matInput", "", "id", "room-code", "name", "room-code", "placeholder", "e.g. 12102910", 1, "w-full", "border-none", "bg-none", "text-left", "text-3xl", 3, "ngModelChange", "keydown.enter", "ngModel"], ["icon", "", "matRipple", "", "type", "button", 3, "click", "disabled"], [1, "text-2xl"], [1, "bg-base-100", "bg-opacity-50", "m-4", "flex", "items-center", "space-x-2", "rounded-sm", "p-2"], ["matRipple", "", 3, "click"], [3, "diameter"]], template: function BookCodeFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookCodeFlowComponent_Conditional_0_Template, 28, 26, "div", 1)(1, BookCodeFlowComponent_Conditional_1_Template, 5, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n[box][_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.5);\n}\n[box][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: none;\n}\n[box].input[_ngcontent-%COMP%] {\n  width: 32rem !important;\n  max-width: calc(100% - 2rem) !important;\n  padding: 1rem !important;\n  height: 4rem !important;\n  color: black !important;\n  background: white;\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.8);\n}\n[box].input[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: initial;\n}\n[box].input[_ngcontent-%COMP%]    > button[icon][_ngcontent-%COMP%] {\n  display: flex;\n}\n[box][_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: var(--%NS%heading-font);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=code-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookCodeFlowComponent, [{
    type: Component,
    args: [{ selector: "book-code-flow", template: `
        @if (!loading()) {
            <div
                class="bg-neutral relative flex flex-1 items-center justify-center overflow-hidden"
            >
                <video
                    class="min-h-full min-w-full object-cover"
                    id="video"
                    #video
                ></video>
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
                >
                    <div
                        class="relative z-10 flex flex-col items-center justify-end"
                    >
                        <h2
                            class="mb-1 text-3xl uppercase subpixel-antialiased"
                        >
                            {{
                                (is_scanning()
                                    ? 'APP.WORKPLACE.CODE_SCAN_TITLE'
                                    : 'APP.WORKPLACE.CODE_ENTER_TITLE'
                                ) | translate
                            }}
                        </h2>
                        <span class="mb-4">
                            {{
                                (is_scanning()
                                    ? 'APP.WORKPLACE.CODE_SCAN_MSG'
                                    : 'APP.WORKPLACE.CODE_ENTER_MSG'
                                ) | translate
                            }}
                        </span>
                    </div>
                    <div class="flex items-center justify-center">
                        <div
                            box
                            class="m-8 flex h-64 w-64 items-center justify-center space-x-2 rounded-2xl p-8 transition-all"
                            [class.input]="!is_scanning()"
                        >
                            <label for="room-code" class="uppercase">
                                {{ 'COMMON.CODE' | translate }}
                            </label>
                            <input
                                matInput
                                id="room-code"
                                class="w-full border-none bg-none text-left text-3xl"
                                [(ngModel)]="room_code"
                                name="room-code"
                                placeholder="e.g. 12102910"
                                (keydown.enter)="submitCode()"
                            />
                            <button
                                icon
                                matRipple
                                type="button"
                                [attr.aria-label]="
                                    'COMMON.CHECK_IN' | translate
                                "
                                [disabled]="!room_code().trim()"
                                (click)="submitCode()"
                            >
                                <icon class="text-2xl">arrow_forward</icon>
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-base-100 bg-opacity-50 m-4 flex items-center space-x-2 rounded-sm p-2"
                    >
                        <button
                            matRipple
                            [class]="
                                'w-40 flex-1 border-none text-black ' +
                                (is_scanning()
                                    ? 'bg-base-100'
                                    : 'bg-opacity-50 hover:bg-base-100 bg-transparent')
                            "
                            (click)="is_scanning.set(true)"
                        >
                            {{ 'APP.WORKPLACE.CODE_SCAN_TITLE' | translate }}
                        </button>
                        <button
                            matRipple
                            [class]="
                                'w-40 flex-1 border-none text-black ' +
                                (!is_scanning()
                                    ? 'bg-base-100'
                                    : 'bg-opacity-50 hover:bg-base-100 bg-transparent')
                            "
                            (click)="is_scanning.set(false)"
                        >
                            {{ 'APP.WORKPLACE.CODE_ENTER_TITLE' | translate }}
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.WORKPLACE.CODE_CHECKING_IN' | translate }}</p>
            </div>
        }
    `, imports: [
      MatInputModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      FormsModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;4c7a25e32d30c48fdc37e73e5d48891a6b6555c5fe039368d40fe300b7c4be72;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/code-flow.component.ts */\n:host {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n[box] {\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.5);\n}\n[box] > * {\n  display: none;\n}\n[box].input {\n  width: 32rem !important;\n  max-width: calc(100% - 2rem) !important;\n  padding: 1rem !important;\n  height: 4rem !important;\n  color: black !important;\n  background: white;\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.8);\n}\n[box].input > * {\n  display: initial;\n}\n[box].input > button[icon] {\n  display: flex;\n}\n[box] label {\n  font-family: var(--heading-font);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=code-flow.component.css.map */\n"] }]
  }], null, { menu: [{ type: Output, args: ["menu"] }], _video_el: [{ type: ViewChild, args: ["video", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCodeFlowComponent, { className: "BookCodeFlowComponent", filePath: "apps/workplace/src/app/book/code-flow.component.ts", lineNumber: 205 });
})();
export {
  BookCodeFlowComponent
};
//# debugId=26e38c02-6626-5d91-be29-5dd4fbd873c3
//# sourceMappingURL=code-flow.component-SWOBXWL5.js.map
