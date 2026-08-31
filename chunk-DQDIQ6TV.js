import {
  decode_default
} from "./chunk-Q4DQ62MM.js";
import {
  CheckinStateService
} from "./chunk-2FOWRUD4.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AuthenticatedImageDirective,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  IconComponent,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  TranslatePipe,
  ViewChild,
  VirtualKeyboardComponent,
  computed,
  inject,
  isPublicMode,
  notifyError,
  setClassMetadata,
  settingSignal,
  signal,
  startOfMinute,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-NRV4P55O.js";

// apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts
var _c0 = () => ["/welcome"];
function CheckinErrorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function CheckinErrorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.VISITOR_KIOSK.CONFIRM"), " ");
  }
}
var CheckinErrorComponent = class _CheckinErrorComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this.error = this._checkin.error;
    this.is_public_mode = isPublicMode;
  }
  static {
    this.\u0275fac = function CheckinErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinErrorComponent, selectors: [["checkin-error"]], decls: 7, vars: 2, consts: [[1, "bg-base-100", "relative", "m-4", "flex", "flex-col", "items-center", "space-y-4", "overflow-hidden", "rounded-sm", "px-16", "py-4", "text-center", "shadow-sm"], [1, "pb-2", "text-2xl"], ["btn", "", "matRipple", "", 1, "w-32", 3, "routerLink"]], template: function CheckinErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Please see reception.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, CheckinErrorComponent_Conditional_3_Template, 2, 1, "p");
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Our staff at reception will assist you.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, CheckinErrorComponent_Conditional_6_Template, 3, 5, "a", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_0_0 = ctx.error()) ? 3 : -1, tmp_0_0);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.is_public_mode() ? 6 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinErrorComponent, [{
    type: Component,
    args: [{ selector: "checkin-error", template: `
        <div
            class="bg-base-100 relative m-4 flex flex-col items-center space-y-4 overflow-hidden rounded-sm px-16 py-4 text-center shadow-sm"
        >
            <h3 class="pb-2 text-2xl">Please see reception.</h3>
            @if (error(); as error_message) {
                <p>{{ error_message }}</p>
            }
            <p>Our staff at reception will assist you.</p>
            @if (!is_public_mode()) {
                <a btn matRipple class="w-32" [routerLink]="['/welcome']">
                    {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                </a>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, RouterModule], styles: ["/* angular:styles/component:css;34ad53ca058d4bf3dd80f3650a92e5ea3d6f6a240f4ad5727b63ca6d2e8f6f4b;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts */\n:host > div {\n  width: 28rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-error.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinErrorComponent, { className: "CheckinErrorComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts", lineNumber: 36 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts
var _c02 = ["video"];
var _c1 = () => ["/welcome"];
function CheckinQRScanComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "span", 17);
    \u0275\u0275text(2, " Ready to scan QR code ");
    \u0275\u0275elementEnd();
  }
}
var CheckinQRScanComponent = class _CheckinQRScanComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.flow = this._route.snapshot.data["flow"] === "checkout" ? "checkout" : "checkin";
    this.checking_code = signal(
      false,
      ...ngDevMode ? [{ debugName: "checking_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scanner_ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "scanner_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.email = signal(
      "",
      ...ngDevMode ? [{ debugName: "email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_enabled = settingSignal("induction_enabled", false);
    this.induction_details = settingSignal("induction_details");
    this.is_induction_enabled = computed(
      () => this.induction_enabled() && this.induction_details(),
      ...ngDevMode ? [{ debugName: "is_induction_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_after_details = settingSignal("induction_after_details");
    this._video_el = viewChild(
      "video",
      ...ngDevMode ? [{ debugName: "_video_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._qr_scan_interval = null;
  }
  ngAfterViewInit() {
    this._checkin.metadata = "";
    this.setupQRReader();
  }
  ngOnDestroy() {
    const _video_el = this._video_el();
    if (_video_el.nativeElement.srcObject) {
      _video_el.nativeElement.srcObject.getTracks().forEach((track) => track?.stop());
    }
    this.stopQRReader();
  }
  async checkQRCode(raw_text) {
    if (this.checking_code())
      return;
    this.stopQRReader();
    this.checking_code.set(true);
    const chunks = raw_text.split(",");
    let [visit_block, system_id, event_id, host_email] = chunks;
    const [_, visitor_email] = visit_block.split(":");
    if (!visitor_email && !event_id) {
      notifyError("Invalid QRCode");
      this.setupQRReader();
      this.checking_code.set(false);
      return;
    }
    if (!/^\d+$/.test(event_id))
      event_id = void 0;
    await this._checkin.loadGuestAndEvent(visitor_email, event_id).catch((err) => {
      this.handleError(err.message || err);
      this.checking_code.set(false);
      throw err;
    });
    const event = this._checkin.event();
    if (!event) {
      this.handleError("Unable to find visitor booking.");
      this.checking_code.set(false);
      return;
    }
    if (event.rejected) {
      this.handleError("Your meeting has been rejected.");
      this.checking_code.set(false);
      return;
    }
    if (event.checked_out_at) {
      this.handleError("Your meeting has already finished.");
      this.checking_code.set(false);
      return;
    }
    if (this.flow === "checkout") {
      if (!event.checked_in_at) {
        this.handleError("You have not checked in yet.");
        this.checking_code.set(false);
        return;
      }
      this._router.navigate(["/checkout", "confirm"]);
      return;
    }
    if (event.checked_in_at) {
      this.handleError("You are already checked in.");
      this.checking_code.set(false);
      return;
    }
    if (this.is_induction_enabled() && event?.induction !== "accepted") {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
    this.checking_code.set(false);
  }
  async checkEmail(email) {
    if (this.checking_code() || !email || !email.includes("@") || email.length < 5)
      return;
    this.checking_code.set(true);
    try {
      await this._checkin.loadGuestAndEvent(email);
    } catch {
      this.handleError("Unable to find visitor or a meeting associated with the given email address.");
      this.checking_code.set(false);
      return;
    }
    const event = this._checkin.event();
    if (!event) {
      this.handleError("Unable to find visitor booking.");
      this.checking_code.set(false);
      return;
    }
    if (event.checked_out_at) {
      this.handleError("Your meeting has already finished.");
      this.checking_code.set(false);
      return;
    }
    if (this.flow === "checkout") {
      if (!event.checked_in_at) {
        this.handleError("You have not checked in yet.");
        this.checking_code.set(false);
        return;
      }
      this.checking_code.set(false);
      this._router.navigate(["/checkout", "confirm"]);
      return;
    }
    if (event.checked_in_at) {
      this.handleError("You are already checked in.");
      this.checking_code.set(false);
      return;
    }
    if (event.induction !== "accepted" && this.is_induction_enabled() && !this.induction_after_details()) {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
    this.checking_code.set(false);
  }
  setupQRReader() {
    const _video_el = this._video_el()?.nativeElement;
    if (!_video_el) {
      this.timeout("setup_qr_reader", () => this.setupQRReader(), 50);
      return;
    }
    if (navigator.mediaDevices?.getUserMedia && !_video_el.srcObject) {
      this.scanner_ready.set(false);
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 },
          frameRate: { ideal: 24, max: 30 }
        }
      }).then((stream) => {
        _video_el.srcObject = stream;
        _video_el.onloadedmetadata = () => this.scanner_ready.set(true);
        this.startQRScanner(_video_el);
      }).catch((e) => {
        this.scanner_ready.set(false);
        console.error("Unable to fetch media devices!", e);
      });
    } else if (_video_el.srcObject) {
      this.stopQRReader();
    }
  }
  stopQRReader() {
    if (this._qr_scan_interval)
      clearInterval(this._qr_scan_interval);
    this._qr_scan_interval = null;
  }
  startQRScanner(video_el) {
    this.stopQRReader();
    this._canvas = document.createElement("canvas");
    this._ctx = this._canvas.getContext("2d");
    if (!this._ctx) {
      console.error("Unable to get 2D context for QR scanning");
      return;
    }
    this._qr_scan_interval = setInterval(() => this.scanVideoFrame(video_el), 120);
    this.scanVideoFrame(video_el);
  }
  scanVideoFrame(video_el) {
    if (!video_el || video_el.videoWidth === 0 || video_el.videoHeight === 0)
      return;
    const source_width = video_el.videoWidth;
    const source_height = video_el.videoHeight;
    const scale = Math.min(1, 720 / Math.max(source_width, source_height));
    const target_width = Math.max(1, Math.floor(source_width * scale));
    const target_height = Math.max(1, Math.floor(source_height * scale));
    if (this._canvas.width !== target_width || this._canvas.height !== target_height) {
      this._canvas.width = target_width;
      this._canvas.height = target_height;
    }
    this._ctx.drawImage(video_el, 0, 0, target_width, target_height);
    try {
      const image_data = this._ctx.getImageData(0, 0, this._canvas.width, this._canvas.height);
      const qr_code = decode_default({
        height: image_data.height,
        width: image_data.width,
        data: image_data.data
      });
      if (qr_code)
        this.checkQRCode(qr_code);
    } catch {
    }
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate([`/${this.flow}`, "error"]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckinQRScanComponent_BaseFactory;
      return function CheckinQRScanComponent_Factory(__ngFactoryType__) {
        return (\u0275CheckinQRScanComponent_BaseFactory || (\u0275CheckinQRScanComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinQRScanComponent)))(__ngFactoryType__ || _CheckinQRScanComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinQRScanComponent, selectors: [["", "checkin-qr-scan", ""]], viewQuery: function CheckinQRScanComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._video_el, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 34, vars: 26, consts: [["video", ""], [1, "bg-base-100", "relative", "flex", "w-xl", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "mt-2", "text-xl"], [1, "my-4"], [1, "flex", "w-full", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-px", "flex-1"], ["keyboard", "", "matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModelChange", "blur", "keyup.enter", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "mt-4", "overflow-hidden", "rounded-sm", "border"], [1, "absolute", "top-1/2", "left-1/2", "z-0", "flex", "-translate-x-1/2", "-translate-y-1/2", "flex-col", "items-center", "space-y-2", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "relative", "z-10", "object-cover"], [1, "bg-base-100/90", "text-base-content", "absolute", "right-2", "bottom-2", "z-20", "inline-flex", "items-center", "gap-2", "rounded", "px-2", "py-1", "text-sm", "shadow"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "bg-base-100", "relative", "flex", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-16", "shadow-sm"], ["diameter", "32"], [1, "status-dot"]], template: function CheckinQRScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "mat-form-field", 5)(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("blur", function CheckinQRScanComponent_Template_input_blur_9_listener() {
          return ctx.checkEmail(ctx.email());
        })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_9_listener() {
          return ctx.checkEmail(ctx.email());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(10, "mat-error");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function CheckinQRScanComponent_Template_button_click_13_listener() {
          return ctx.checkEmail(ctx.email());
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "icon", 10);
        \u0275\u0275text(19, "videocam_off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "video", 12, 0);
        \u0275\u0275conditionalCreate(25, CheckinQRScanComponent_Conditional_25_Template, 3, 0, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 14)(27, "icon");
        \u0275\u0275text(28, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275element(30, "mat-spinner", 16);
        \u0275\u0275elementStart(31, "p", 3);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("hidden", ctx.checking_code());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, ctx.flow === "checkout" ? "COMMON.CHECK_OUT" : "COMMON.CHECK_IN"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "APP.VISITOR_KIOSK.QR_CODE_MSG"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "APP.VISITOR_KIOSK.INVALID_EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 19, "APP.VISITOR_KIOSK.FIND_DETAILS"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 21, "APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.scanner_ready() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("hidden", !ctx.checking_code());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 23, "APP.VISITOR_KIOSK.LOADING_DETAILS"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      VirtualKeyboardComponent,
      TranslatePipe
    ], styles: ["\nvideo[_ngcontent-%COMP%] {\n  width: 34rem;\n  height: 24rem;\n}\n.status-dot[_ngcontent-%COMP%] {\n  background: #22c55e;\n  border-radius: 9999px;\n  width: 0.5rem;\n  height: 0.5rem;\n  display: inline-block;\n}\na[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinQRScanComponent, [{
    type: Component,
    args: [{ selector: "[checkin-qr-scan]", template: `
        <div
            class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            [class.hidden]="checking_code()"
        >
            <h3 class="mt-2 text-xl">
                {{
                    (flow === 'checkout'
                        ? 'COMMON.CHECK_OUT'
                        : 'COMMON.CHECK_IN'
                    ) | translate
                }}
            </h3>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.QR_CODE_MSG' | translate }}
            </p>
            <div class="flex w-full items-center space-x-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-px flex-1"
                >
                    <input
                        keyboard
                        matInput
                        [(ngModel)]="email"
                        placeholder="Enter email..."
                        type="email"
                        autocomplete="off"
                        (blur)="checkEmail(email())"
                        (keyup.enter)="checkEmail(email())"
                    />
                    <mat-error>{{
                        'APP.VISITOR_KIOSK.INVALID_EMAIL' | translate
                    }}</mat-error>
                </mat-form-field>
                <button btn matRipple (click)="checkEmail(email())">
                    {{ 'APP.VISITOR_KIOSK.FIND_DETAILS' | translate }}
                </button>
            </div>
            <div
                class="border-base-200 bg-base-200 relative mt-4 overflow-hidden rounded-sm border"
            >
                <div
                    class="absolute top-1/2 left-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2 opacity-30"
                >
                    <icon class="text-6xl">videocam_off</icon>
                    <p class="text-center">
                        {{ 'APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE' | translate }}
                    </p>
                </div>
                <video
                    #video
                    id="qr-stream"
                    playsinline
                    width="640"
                    height="480"
                    autoplay
                    class="relative z-10 object-cover"
                ></video>
                @if (scanner_ready()) {
                    <div
                        class="bg-base-100/90 text-base-content absolute right-2 bottom-2 z-20 inline-flex items-center gap-2 rounded px-2 py-1 text-sm shadow"
                    >
                        <span class="status-dot"></span>
                        Ready to scan QR code
                    </div>
                }
            </div>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
        <div
            class="bg-base-100 relative flex flex-col items-center overflow-hidden rounded-sm p-16 shadow-sm"
            [class.hidden]="!checking_code()"
        >
            <mat-spinner diameter="32"></mat-spinner>
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.LOADING_DETAILS' | translate }}
            </p>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      RouterModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;3b1e2694af0e39b86ff117c517cf35a672dfdcf982b5c1c98c6eec6c28f78210;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts */\nvideo {\n  width: 34rem;\n  height: 24rem;\n}\n.status-dot {\n  background: #22c55e;\n  border-radius: 9999px;\n  width: 0.5rem;\n  height: 0.5rem;\n  display: inline-block;\n}\na {\n  position: absolute;\n}\n/*# sourceMappingURL=checkin-qr-scan.component.css.map */\n"] }]
  }], null, { _video_el: [{ type: ViewChild, args: ["video", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinQRScanComponent, { className: "CheckinQRScanComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts", lineNumber: 152 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.component.ts
function CheckinComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
}
var CheckinComponent = class _CheckinComponent {
  constructor() {
    this._destroy_ref = inject(DestroyRef);
    this.background = settingSignal("welcome_background");
    this.hide_building_image = settingSignal("hide_building_image");
    this.now = signal(
      startOfMinute(/* @__PURE__ */ new Date()),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const interval_id = setInterval(() => {
      this.now.set(startOfMinute(/* @__PURE__ */ new Date()));
    }, 1e3);
    this._destroy_ref.onDestroy(() => clearInterval(interval_id));
  }
  static {
    this.\u0275fac = function CheckinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinComponent, selectors: [["", "app-checkin", ""]], decls: 9, vars: 10, consts: [[1, "absolute", "inset-0", "flex", "items-center", "p-8", "print:static", "print:block", "print:p-0"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "print:hidden", 3, "source"], [1, "z-10", "flex", "w-full", "flex-col", "justify-center", "space-y-8"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white", "print:hidden"], ["src", "assets/img/building.png", 1, "absolute", "right-0", "bottom-0", "w-[60%]", "print:hidden"]], template: function CheckinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, CheckinComponent_Conditional_8_Template, 1, 0, "img", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.background());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 4, ctx.now(), "mediumDate"), " ", \u0275\u0275pipeBind2(7, 7, ctx.now(), "shortTime"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hide_building_image() ? 8 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterOutlet, AuthenticatedImageDirective, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinComponent, [{
    type: Component,
    args: [{ selector: "[app-checkin]", template: `
        <!-- <a-topbar-header class="w-full screen-only"></a-topbar-header> -->
        <div
            class="absolute inset-0 flex items-center p-8 print:static print:block print:p-0"
        >
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 print:hidden"
            />
            <div class="z-10 flex w-full flex-col justify-center space-y-8">
                <router-outlet></router-outlet>
            </div>
            <div
                class="absolute top-4 right-4 text-2xl text-white print:hidden"
            >
                {{ now() | date: 'mediumDate' }} {{ now() | date: 'shortTime' }}
            </div>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%] print:hidden"
                />
            }
        </div>
    `, imports: [CommonModule, RouterModule, AuthenticatedImageDirective], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=checkin.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinComponent, { className: "CheckinComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin.component.ts", lineNumber: 53 });
})();

export {
  CheckinErrorComponent,
  CheckinQRScanComponent,
  CheckinComponent
};
//# sourceMappingURL=chunk-DQDIQ6TV.js.map
