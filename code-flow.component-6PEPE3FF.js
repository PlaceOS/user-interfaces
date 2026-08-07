import {
  EventFormService,
  checkinEventGuest,
  queryEvents
} from "./chunk-WSVNX6WC.js";
import "./chunk-VJWWFIEW.js";
import {
  BookingFormService
} from "./chunk-BJEHABTQ.js";
import "./chunk-DQST64FR.js";
import {
  AsyncHandler,
  Booking,
  CalendarEvent,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  OrganisationService,
  checkinBooking,
  currentUser,
  getUnixTime,
  queryBookings,
  scanForQRCode
} from "./chunk-3XNRPS72.js";
import {
  ActivatedRoute,
  Component,
  DefaultValueAccessor,
  FormsModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  Router,
  ViewChild,
  addMinutes,
  endOfDay,
  inject,
  notifyError,
  oa,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-2XZZDWFL.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/code-flow.component.ts
var _c0 = ["video"];
function BookCodeFlowComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2", 12);
    \u0275\u0275text(2, " Scan QR Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, " Scan the QR code outside a PlaceOS room or space. ");
    \u0275\u0275elementEnd()();
  }
}
function BookCodeFlowComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2", 12);
    \u0275\u0275text(2, " Enter Room ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, " Enter the room ID number outisde a PlaceOS room or space. ");
    \u0275\u0275elementEnd()();
  }
}
function BookCodeFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "video", 3, 0);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275conditionalCreate(4, BookCodeFlowComponent_Conditional_0_Conditional_4_Template, 5, 0, "div", 5);
    \u0275\u0275conditionalCreate(5, BookCodeFlowComponent_Conditional_0_Conditional_5_Template, 5, 0, "div", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "span", 8);
    \u0275\u0275text(9, "Booking ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function BookCodeFlowComponent_Conditional_0_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.room_code, $event) || (ctx_r1.room_code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
    \u0275\u0275listener("click", function BookCodeFlowComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.is_scanning.set(true));
    });
    \u0275\u0275text(13, " Scan Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function BookCodeFlowComponent_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.is_scanning.set(false));
    });
    \u0275\u0275text(15, " Enter Code ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.is_scanning() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_scanning() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("input", !ctx_r1.is_scanning());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.room_code);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-40 flex-1 border-none text-black " + (ctx_r1.is_scanning() ? "bg-base-100" : "bg-opacity-50 hover:bg-base-100 bg-transparent"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("w-40 flex-1 border-none text-black " + (!ctx_r1.is_scanning() ? "bg-base-100" : "bg-opacity-50 hover:bg-base-100 bg-transparent"));
  }
}
function BookCodeFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Checking in booking...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
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
  handleQrCode(result) {
    if (this.loading())
      return;
    const url = result;
    const hashindex = url.indexOf("/#/");
    if (hashindex > 0) {
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
  }
  async _checkinBooking(asset_id, type = "desk") {
    this.loading.set(true);
    this.unsub("scan_for_qr_code");
    let bookings = await queryBookings({
      period_start: getUnixTime(Date.now()),
      period_end: getUnixTime(addMinutes(Date.now(), 5)),
      type,
      email: currentUser().email
    }).catch((_) => []);
    const item = bookings.find((_) => _.asset_id === asset_id);
    if (item) {
      await checkinBooking(item.id, true).catch((_) => {
        notifyError(`Unable to checkin booking with resource "${asset_id}"`);
        this.loading.set(false);
        throw _;
      });
      this._router.navigate(["/book", "code", "success"]);
    } else {
      bookings = await queryBookings({
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(endOfDay(Date.now())),
        type,
        email: currentUser().email
      }).catch((_) => []);
      let item2 = bookings.find((_) => _.asset_id === asset_id);
      if (item2) {
        this._router.navigate(["/book", "code", "error"], {
          queryParams: { type: "not_started", asset_id }
        });
        return;
      }
      bookings = await queryBookings({
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(addMinutes(Date.now(), 5)),
        type,
        email: currentUser().email
      }).catch((_) => []);
      item2 = bookings.find((_) => _.asset_id === asset_id);
      if (item2) {
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
        notifyError(`Unable to checkin event with resource "${space_id}"`);
        this.loading.set(false);
        throw _;
      });
      this._router.navigate(["/book", "code", "success"]);
      this.loading.set(false);
    } else {
      const space = await oa(space_id);
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
    }).catch((e) => console.error("Unable to fetch media devices!", e));
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
    }, outputs: { menu: "menu" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["video", ""], [1, "bg-neutral", "relative", "flex", "flex-1", "items-center", "justify-center", "overflow-hidden"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["id", "video", 1, "min-h-full", "min-w-full", "object-cover"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-center", "text-white"], [1, "relative", "z-10", "flex", "flex-col", "items-center", "justify-end"], [1, "flex", "items-center", "justify-center"], ["box", "", 1, "m-8", "flex", "h-64", "w-64", "items-center", "justify-center", "space-x-2", "rounded-2xl", "p-8", "transition-all"], [1, "uppercase"], ["matInput", "", "name", "booking-id", "placeholder", "e.g. 12102910", 1, "w-full", "border-none", "bg-none", "text-left", "text-3xl", 3, "ngModelChange", "ngModel"], [1, "bg-base-100", "bg-opacity-50", "m-4", "flex", "items-center", "space-x-2", "rounded-sm", "p-2"], ["matRipple", "", 3, "click"], [1, "mb-1", "text-3xl", "uppercase", "subpixel-antialiased"], [1, "mb-4"], [3, "diameter"]], template: function BookCodeFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookCodeFlowComponent_Conditional_0_Template, 16, 9, "div", 1)(1, BookCodeFlowComponent_Conditional_1_Template, 4, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [MatInputModule, MatInput, MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n[box][_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.5);\n}\n[box][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: none;\n}\n[box].input[_ngcontent-%COMP%] {\n  width: 32rem !important;\n  max-width: calc(100% - 2rem) !important;\n  padding: 1rem !important;\n  height: 4rem !important;\n  color: black !important;\n  background: white;\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.8);\n}\n[box].input[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: initial;\n}\n[box][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--heading-font);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=code-flow.component.css.map */"] });
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
                    @if (is_scanning()) {
                        <div
                            class="relative z-10 flex flex-col items-center justify-end"
                        >
                            <h2
                                class="mb-1 text-3xl uppercase subpixel-antialiased"
                            >
                                Scan QR Code
                            </h2>
                            <span class="mb-4">
                                Scan the QR code outside a PlaceOS room or
                                space.
                            </span>
                        </div>
                    }
                    @if (!is_scanning()) {
                        <div
                            class="relative z-10 flex flex-col items-center justify-end"
                        >
                            <h2
                                class="mb-1 text-3xl uppercase subpixel-antialiased"
                            >
                                Enter Room ID
                            </h2>
                            <span class="mb-4">
                                Enter the room ID number outisde a PlaceOS room
                                or space.
                            </span>
                        </div>
                    }
                    <div class="flex items-center justify-center">
                        <div
                            box
                            class="m-8 flex h-64 w-64 items-center justify-center space-x-2 rounded-2xl p-8 transition-all"
                            [class.input]="!is_scanning()"
                        >
                            <span class="uppercase">Booking ID</span>
                            <input
                                matInput
                                class="w-full border-none bg-none text-left text-3xl"
                                [(ngModel)]="room_code"
                                name="booking-id"
                                placeholder="e.g. 12102910"
                            />
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
                            Scan Code
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
                            Enter Code
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Checking in booking...</p>
            </div>
        }
    `, imports: [
      MatInputModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;234f9e46d27de0ca4f47b38a0a993410c486ecc5d4a4f2eed2857b2caf006ef8;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/code-flow.component.ts */\n:host {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n[box] {\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.5);\n}\n[box] > * {\n  display: none;\n}\n[box].input {\n  width: 32rem !important;\n  max-width: calc(100% - 2rem) !important;\n  padding: 1rem !important;\n  height: 4rem !important;\n  color: black !important;\n  background: white;\n  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.8);\n}\n[box].input > * {\n  display: initial;\n}\n[box] span {\n  font-family: var(--heading-font);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n/*# sourceMappingURL=code-flow.component.css.map */\n"] }]
  }], null, { menu: [{ type: Output, args: ["menu"] }], _video_el: [{ type: ViewChild, args: ["video", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookCodeFlowComponent, { className: "BookCodeFlowComponent", filePath: "apps/workplace/src/app/book/code-flow.component.ts", lineNumber: 189 });
})();
export {
  BookCodeFlowComponent
};
//# sourceMappingURL=code-flow.component-6PEPE3FF.js.map
