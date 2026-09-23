import {
  ControlStateService,
  DialpadComponent,
  VideoCallStateService
} from "./chunk-XNRMOYPT.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  TranslatePipe
} from "./chunk-K6HXCN7K.js";
import {
  AsyncHandler,
  Component,
  Dd,
  FormsModule,
  IconComponent,
  Injector,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Router,
  computed,
  firstValueWhere,
  i18n,
  inject,
  input,
  notifyError,
  setClassMetadata,
  signal,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HHO3QMCS.js";

// apps/control/src/app/video-call/video-call-page.component.ts
function VideoCallPageComponent_Conditional_0_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cam_r4 = ctx.$implicit;
    \u0275\u0275property("value", cam_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cam_r4.name, " ");
  }
}
function VideoCallPageComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 19);
    \u0275\u0275listener("ngModelChange", function VideoCallPageComponent_Conditional_0_Conditional_3_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCamera($event));
    });
    \u0275\u0275repeaterCreate(2, VideoCallPageComponent_Conditional_0_Conditional_3_For_3_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.selected_camera());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.camera_list());
  }
}
function VideoCallPageComponent_Conditional_0_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r6.name);
  }
}
function VideoCallPageComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-select", 20);
    \u0275\u0275listener("ngModelChange", function VideoCallPageComponent_Conditional_0_Conditional_4_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPresentationSource($event));
    });
    \u0275\u0275repeaterCreate(2, VideoCallPageComponent_Conditional_0_Conditional_4_For_3_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.presentables());
  }
}
function VideoCallPageComponent_Conditional_0_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r7 = ctx.$implicit;
    \u0275\u0275property("value", layout_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", layout_r7, " ");
  }
}
function VideoCallPageComponent_Conditional_0_Template(rf, ctx) {
  var _a, _b, _c, _d;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3);
    \u0275\u0275conditionalCreate(3, VideoCallPageComponent_Conditional_0_Conditional_3_Template, 4, 1, "mat-form-field", 4);
    \u0275\u0275conditionalCreate(4, VideoCallPageComponent_Conditional_0_Conditional_4_Template, 4, 0, "mat-form-field", 5);
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 5)(9, "mat-select", 7);
    \u0275\u0275listener("ngModelChange", function VideoCallPageComponent_Conditional_0_Template_mat_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPresentationMode($event));
    });
    \u0275\u0275elementStart(10, "mat-option", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-option", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 6);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 5)(23, "mat-select", 11);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("ngModelChange", function VideoCallPageComponent_Conditional_0_Template_mat_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVideoLayout($event));
    });
    \u0275\u0275repeaterCreate(25, VideoCallPageComponent_Conditional_0_For_26_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 13)(28, "dialpad", 14);
    \u0275\u0275listener("pressed", function VideoCallPageComponent_Conditional_0_Template_dialpad_pressed_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sentDTMF($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 15)(30, "button", 16);
    \u0275\u0275listener("click", function VideoCallPageComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.endCall());
    });
    \u0275\u0275elementStart(31, "div", 17)(32, "icon");
    \u0275\u0275text(33, "call_end");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "button", 18);
    \u0275\u0275listener("click", function VideoCallPageComponent_Conditional_0_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMute());
    });
    \u0275\u0275elementStart(38, "div", 17)(39, "icon");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 18);
    \u0275\u0275listener("click", function VideoCallPageComponent_Conditional_0_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleOnHold());
    });
    \u0275\u0275elementStart(45, "div", 17)(46, "icon");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "button", 18);
    \u0275\u0275listener("click", function VideoCallPageComponent_Conditional_0_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCamera());
    });
    \u0275\u0275elementStart(52, "div", 17)(53, "icon");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((_a = ctx_r2.camera_list()) == null ? void 0 : _a.length) > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.present_output() && ctx_r2.presentables() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 24, "APP.CONTROL.VC_CONTENT_DEST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.presentation_mode());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 26, "APP.CONTROL.VC_CONTENT_DEST_HIDE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 28, "APP.CONTROL.VC_CONTENT_DEST_LOCAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 30, "APP.CONTROL.VC_CONTENT_DEST_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 32, "APP.CONTROL.VC_LAYOUT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.video_layout())("placeholder", \u0275\u0275pipeBind1(24, 34, "APP.CONTROL.VC_LAYOUT_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.video_layouts);
    \u0275\u0275advance(3);
    \u0275\u0275property("backspace", false);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 36, "APP.CONTROL.VC_END_CALL"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", !ctx_r2.mic_mute());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.mic_mute() ? "mic_off" : "mic");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 38, ctx_r2.mic_mute() ? "APP.CONTROL.VC_MICS_UNMUTE" : "APP.CONTROL.VC_MICS_MUTE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ((_b = ctx_r2.call()) == null ? void 0 : _b.Status) !== "OnHold");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((_c = ctx_r2.call()) == null ? void 0 : _c.Status) !== "OnHold" ? "stop" : "play_arrow");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 40, ((_d = ctx_r2.call()) == null ? void 0 : _d.Status) !== "OnHold" ? "APP.CONTROL.VC_ON_HOLD" : "APP.CONTROL.VC_RESUME"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r2.show_camera_pip());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(!ctx_r2.show_camera_pip() ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 42, ctx_r2.show_camera_pip() ? "APP.CONTROL.VC_PIP_HIDE" : "APP.CONTROL.VC_PIP_SHOW"));
  }
}
function VideoCallPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading());
  }
}
var _VideoCallPageComponent = class _VideoCallPageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VideoCallStateService);
    this._control = inject(ControlStateService);
    this._router = inject(Router);
    this._injector = inject(Injector);
    this.redirect = input(
      true,
      ...ngDevMode ? [{ debugName: "redirect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.present_output = input(
      "",
      ...ngDevMode ? [{ debugName: "present_output" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.call = this._state.call;
    this._show_camera_pip = this._state.show_camera_pip;
    this.show_camera_pip = computed(
      () => !!this._show_camera_pip(),
      ...ngDevMode ? [{ debugName: "show_camera_pip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mic_mute = this._state.mic_mute;
    this.mic_mute = computed(
      () => !!this._mic_mute(),
      ...ngDevMode ? [{ debugName: "mic_mute" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.video_layout = computed(
      () => this._state.video_layout(),
      ...ngDevMode ? [{ debugName: "video_layout" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.presentation_mode = computed(
      () => this._state.presentation_mode(),
      ...ngDevMode ? [{ debugName: "presentation_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.presentables = this._control.presentables;
    this.camera_list = this._control.camera_list;
    this.video_layouts = [
      "Auto",
      "Equal",
      "Overlay",
      "Prominent",
      "Single"
    ];
    this.selected_camera = this._control.selected_camera;
    this.sentDTMF = (d) => this._state.sendDTMF(d);
    this.setPresentationSource = (i) => this._control.setRoute(i.id, this.present_output(), false);
    this.setPresentationMode = (d) => this._state.setPresentationMode(d);
    this.setVideoLayout = (d) => this._state.setVideoLayout(d);
    this.toggleCamera = async () => this._state.showCameraPIP(!this.show_camera_pip());
    this.toggleMute = async () => this._state.muteMicrophone(!this.mic_mute());
    this.toggleOnHold = () => this._state.toggleCallOnHold();
    this.endCall = async () => {
      this.loading.set(i18n("APP.CONTROL.VC_LEAVE_LOADING"));
      await this._state.hangup().catch((_) => {
        this.loading.set("");
        notifyError(i18n("APP.CONTROL.VC_LEAVE_ERROR", { error: _ }));
        throw _;
      });
      this._onCallEnded();
    };
  }
  async ngOnInit() {
    this.loading.set(i18n("APP.CONTROL.VC_LOADING"));
    this.timeout("check_call", () => {
      notifyError(i18n("APP.CONTROL.VC_JOIN_ERROR"));
      this._onCallEnded();
    }, 5e3);
    await firstValueWhere(this._state.call, (_) => !!_, this._injector);
    this.loading.set("");
    this.clearTimeout("check_call");
  }
  selectCamera(camera) {
    const mod = Dd(this._control.id, "System");
    if (!mod)
      return;
    mod.execute("selected_camera", [camera]);
  }
  _onCallEnded() {
    if (this.redirect())
      this._router.navigate(["/panel", this._control.id]);
  }
};
_VideoCallPageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VideoCallPageComponent_BaseFactory;
  return function VideoCallPageComponent_Factory(__ngFactoryType__) {
    return (\u0275VideoCallPageComponent_BaseFactory || (\u0275VideoCallPageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VideoCallPageComponent)))(__ngFactoryType__ || _VideoCallPageComponent);
  };
})();
_VideoCallPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCallPageComponent, selectors: [["", "video-call-page", ""]], inputs: { redirect: [1, "redirect"], present_output: [1, "present_output"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "h-full", "w-full", "p-2"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "p-24", "text-black"], [1, "flex", "h-1/2", "flex-1"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-2"], ["appearance", "outline", 1, "h-12", "w-full"], ["appearance", "outline", 1, "h-14", "w-full"], [1, "pb-2"], ["placeholder", "Select HDMI content destination", 3, "ngModelChange", "ngModel"], ["value", "None"], ["value", "Local"], ["value", "Remote"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-1", "items-center", "justify-center", "p-2"], [3, "pressed", "backspace"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4", "p-2"], ["btn", "", "matRipple", "", 1, "error", "w-full", 3, "click"], [1, "flex", "items-center", "space-x-4"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["placeholder", "Select Camera", 3, "ngModelChange", "ngModel"], ["ngModel", "", "placeholder", "Select presentation source", 3, "ngModelChange"], [3, "diameter"]], template: function VideoCallPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VideoCallPageComponent_Conditional_0_Template, 58, 44, "div", 0)(1, VideoCallPageComponent_Conditional_1_Template, 4, 2, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
  }
}, dependencies: [
  FormsModule,
  NgControlStatus,
  NgModel,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  DialpadComponent,
  TranslatePipe
], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=video-call-page.component.css.map */"] });
var VideoCallPageComponent = _VideoCallPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCallPageComponent, [{
    type: Component,
    args: [{ selector: "[video-call-page]", template: `
        @if (!loading()) {
            <div class="h-full w-full p-2">
                <div class="flex h-1/2 flex-1">
                    <div
                        class="flex flex-1 flex-col items-center justify-center space-y-2 p-2"
                    >
                        @if (camera_list()?.length > 1) {
                            <mat-form-field
                                appearance="outline"
                                class="h-12 w-full"
                            >
                                <mat-select
                                    [ngModel]="selected_camera()"
                                    (ngModelChange)="selectCamera($event)"
                                    placeholder="Select Camera"
                                >
                                    @for (cam of camera_list(); track cam) {
                                        <mat-option [value]="cam.id">
                                            {{ cam.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (present_output() && presentables()) {
                            <mat-form-field
                                appearance="outline"
                                class="h-14 w-full"
                            >
                                <mat-select
                                    ngModel
                                    (ngModelChange)="
                                        setPresentationSource($event)
                                    "
                                    placeholder="Select presentation source"
                                >
                                    @for (opt of presentables(); track opt) {
                                        <mat-option [value]="opt">{{
                                            opt.name
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <p class="pb-2">
                            {{ 'APP.CONTROL.VC_CONTENT_DEST' | translate }}
                        </p>
                        <mat-form-field
                            appearance="outline"
                            class="h-14 w-full"
                        >
                            <mat-select
                                [ngModel]="presentation_mode()"
                                (ngModelChange)="setPresentationMode($event)"
                                placeholder="Select HDMI content destination"
                            >
                                <mat-option value="None">{{
                                    'APP.CONTROL.VC_CONTENT_DEST_HIDE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="Local">{{
                                    'APP.CONTROL.VC_CONTENT_DEST_LOCAL'
                                        | translate
                                }}</mat-option>
                                <mat-option value="Remote">{{
                                    'APP.CONTROL.VC_CONTENT_DEST_ALL'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <p class="pb-2">
                            {{ 'APP.CONTROL.VC_LAYOUT' | translate }}
                        </p>
                        <mat-form-field
                            appearance="outline"
                            class="h-14 w-full"
                        >
                            <mat-select
                                [ngModel]="video_layout()"
                                (ngModelChange)="setVideoLayout($event)"
                                [placeholder]="
                                    'APP.CONTROL.VC_LAYOUT_SELECT' | translate
                                "
                            >
                                @for (layout of video_layouts; track layout) {
                                    <mat-option [value]="layout">
                                        {{ layout }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 items-center justify-center p-2">
                        <dialpad
                            [backspace]="false"
                            (pressed)="sentDTMF($event)"
                        ></dialpad>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center space-y-4 p-2"
                    >
                        <button
                            btn
                            matRipple
                            class="error w-full"
                            (click)="endCall()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>call_end</icon>
                                <span>{{
                                    'APP.CONTROL.VC_END_CALL' | translate
                                }}</span>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            (click)="toggleMute()"
                            [class.inverse]="!mic_mute()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>{{
                                    mic_mute() ? 'mic_off' : 'mic'
                                }}</icon>
                                <span>{{
                                    (mic_mute()
                                        ? 'APP.CONTROL.VC_MICS_UNMUTE'
                                        : 'APP.CONTROL.VC_MICS_MUTE'
                                    ) | translate
                                }}</span>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            [class.inverse]="call()?.Status !== 'OnHold'"
                            (click)="toggleOnHold()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>{{
                                    call()?.Status !== 'OnHold'
                                        ? 'stop'
                                        : 'play_arrow'
                                }}</icon>
                                <span>{{
                                    (call()?.Status !== 'OnHold'
                                        ? 'APP.CONTROL.VC_ON_HOLD'
                                        : 'APP.CONTROL.VC_RESUME'
                                    ) | translate
                                }}</span>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            (click)="toggleCamera()"
                            [class.inverse]="show_camera_pip()"
                        >
                            <div class="flex items-center space-x-4">
                                <icon>{{
                                    !show_camera_pip()
                                        ? 'visibility_off'
                                        : 'visibility'
                                }}</icon>
                                <span>{{
                                    (show_camera_pip()
                                        ? 'APP.CONTROL.VC_PIP_HIDE'
                                        : 'APP.CONTROL.VC_PIP_SHOW'
                                    ) | translate
                                }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-2 p-24 text-black"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading() }}</p>
            </div>
        }
    `, imports: [
      FormsModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatFormFieldModule,
      MatSelectModule,
      DialpadComponent
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/apps/control/src/app/video-call/video-call-page.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=video-call-page.component.css.map */\n"] }]
  }], null, { redirect: [{ type: Input, args: [{ isSignal: true, alias: "redirect", required: false }] }], present_output: [{ type: Input, args: [{ isSignal: true, alias: "present_output", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCallPageComponent, { className: "VideoCallPageComponent", filePath: "apps/control/src/app/video-call/video-call-page.component.ts", lineNumber: 236 });
})();

export {
  VideoCallPageComponent
};
//# debugId=ba9dac99-6965-55cf-a043-1bbda467c39d
//# sourceMappingURL=chunk-MDSAQTOY.js.map
