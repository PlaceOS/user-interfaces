import {
  AttendeeListComponent,
  MapLocateModalComponent
} from "./chunk-7CDTZI6Y.js";
import {
  MapPinComponent
} from "./chunk-R7RHDRXW.js";
import {
  ImageCarouselComponent
} from "./chunk-CPODVJS5.js";
import {
  InteractiveMapComponent
} from "./chunk-JUFCKXCV.js";
import {
  DeskHeightPresetsComponent,
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-WY2GTBXG.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-47NZTP77.js";
import {
  SpacePipe,
  UserPipe,
  getEventMetadata
} from "./chunk-JIBZ6RVA.js";
import {
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-6HO3BPOA.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  AsyncHandler,
  Booking,
  Building,
  BuildingLevel,
  CalendarEvent,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SanitizePipe,
  SettingsService,
  Space,
  checkinBooking,
  checkinBookingInstance,
  formatRecurrence,
  fromBookingRecurrence,
  fromEventRecurrence,
  getUnixTime,
  openConfirmModal,
  parkingRequestStatus,
  settingSignal,
  userSignal,
  visitorDisplayNameFor
} from "./chunk-JHZN42UC.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  Directive,
  ElementRef,
  FormsModule,
  Input,
  It,
  Kr,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  Renderer2,
  TranslatePipe,
  UpperCasePipe,
  addMinutes,
  computed,
  dp,
  format,
  formatDuration,
  getTimezoneOffsetString,
  hi,
  i18n,
  inject,
  input,
  linkedSignal,
  notifyError,
  notifySuccess,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CCSQ2VSC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/binding.directive.ts
var BindingDirective = class _BindingDirective extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._renderer = inject(Renderer2);
    this.sys = input(
      "",
      ...ngDevMode ? [{ debugName: "sys" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mod = input(
      "",
      ...ngDevMode ? [{ debugName: "mod" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.index = input(
      1,
      ...ngDevMode ? [{ debugName: "index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bind = input(
      "",
      ...ngDevMode ? [{ debugName: "bind" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.exec = input(
      "",
      ...ngDevMode ? [{ debugName: "exec" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.delay = input(
      100,
      ...ngDevMode ? [{ debugName: "delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.on_event = input("", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "on_event" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "onEvent" }));
    this.params = input(
      null,
      ...ngDevMode ? [{ debugName: "params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ignore = input(
      false,
      ...ngDevMode ? [{ debugName: "ignore" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "modelInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "model" }));
    this.model = linkedSignal(
      this.modelInput,
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelChange = output();
    this._binding = false;
    this._old_model = null;
  }
  ngOnInit() {
    hi(Kr(), (_) => _).then(() => this.bindVariable());
  }
  ngOnChanges(changes) {
    if (changes.sys || changes.mod || changes.bind) {
      this.bindVariable();
    }
    const model = this.model();
    if ((changes.model || changes.modelInput) && this._old_model !== model && this.model != null) {
      this._old_model = model;
      this.execute();
    }
    const on_event = this.on_event();
    if (changes.on_event && on_event) {
      this.subscription("on_event", this._renderer.listen(this._element.nativeElement, on_event, () => this.execute()));
    }
  }
  /** Bind to set status variable */
  bindVariable() {
    if (It() && this.bind() && this.sys() && this.mod() && !this._binding) {
      this.timeout("bind", () => {
        const module = dp(this.sys(), this.mod(), this.index());
        const binding = module.variable(this.bind());
        this._binding = true;
        this.subscription("on_changes", binding.bindThenSubscribe((value) => {
          setTimeout(() => {
            this._binding = false;
            this.clearTimeout("bound");
            if (this.ignore())
              return;
            this._old_model = this.model();
            this.model.set(value);
            this.modelChange.emit(this.model());
          }, 10);
        }));
        this.timeout("bound", () => this._binding = false, 200);
      }, 20);
    }
  }
  /** Excute the set method on the module */
  execute() {
    if (It() && this.exec() && this.sys() && this.mod() && !this._timers["execute"]) {
      this.timeout("execute", () => {
        const module = dp(this.sys(), this.mod(), this.index());
        let params = this.params();
        if (this.bind())
          params = this.params() || [this.model()];
        module.execute(this.exec(), params || []).then((result) => {
          if (!this.bind()) {
            this.model.set(result);
            this._old_model = this.model();
            this.modelChange.emit(this.model());
          }
        });
      }, this.delay());
    }
  }
  static {
    this.\u0275fac = function BindingDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BindingDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: [1, "sys"], mod: [1, "mod"], index: [1, "index"], bind: [1, "bind"], exec: [1, "exec"], delay: [1, "delay"], on_event: [1, "onEvent", "on_event"], params: [1, "params"], ignore: [1, "ignore"], modelInput: [1, "model", "modelInput"] }, outputs: { modelChange: "modelChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirective, [{
    type: Directive,
    args: [{
      selector: "i[bind], [binding], co-bind"
    }]
  }], () => [], { sys: [{ type: Input, args: [{ isSignal: true, alias: "sys", required: false }] }], mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], bind: [{ type: Input, args: [{ isSignal: true, alias: "bind", required: false }] }], exec: [{ type: Input, args: [{ isSignal: true, alias: "exec", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], on_event: [{ type: Input, args: [{ isSignal: true, alias: "onEvent", required: false }] }], params: [{ type: Input, args: [{ isSignal: true, alias: "params", required: false }] }], ignore: [{ type: Input, args: [{ isSignal: true, alias: "ignore", required: false }] }], modelInput: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();

// libs/components/src/lib/status-pill.component.ts
var _c0 = ["*"];
function StatusPillComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " check_circle ");
  }
}
function StatusPillComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " cancel ");
  }
}
function StatusPillComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " block ");
  }
}
function StatusPillComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " info ");
  }
}
function StatusPillComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " gavel ");
  }
}
function StatusPillComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " warning ");
  }
}
var StatusPillComponent = class _StatusPillComponent {
  constructor() {
    this.status = input(
      void 0,
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function StatusPillComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatusPillComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusPillComponent, selectors: [["status-pill"]], inputs: { status: [1, "status"] }, ngContentSelectors: _c0, decls: 11, vars: 29, consts: [[1, "border-base-200", "bg-opacity-30", "flex", "items-center", "space-x-2", "rounded-full", "border", "px-2", "py-1", "text-base", "font-medium", "text-black"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"]], template: function StatusPillComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "icon", 2);
        \u0275\u0275conditionalCreate(3, StatusPillComponent_Case_3_Template, 1, 0)(4, StatusPillComponent_Case_4_Template, 1, 0)(5, StatusPillComponent_Case_5_Template, 1, 0)(6, StatusPillComponent_Case_6_Template, 1, 0)(7, StatusPillComponent_Case_7_Template, 1, 0)(8, StatusPillComponent_Case_8_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div");
        \u0275\u0275projection(10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_13_0;
        \u0275\u0275classProp("bg-success-light", ctx.status() === "success")("bg-warning-light", ctx.status() === "warning")("bg-approval-light", ctx.status() === "approval")("bg-error-light", ctx.status() === "error")("bg-info-light", ctx.status() === "info")("bg-base-200", ctx.status() === "neutral");
        \u0275\u0275advance();
        \u0275\u0275classProp("text-success", ctx.status() === "success")("text-warning", ctx.status() === "warning")("text-approval", ctx.status() === "approval")("text-error", ctx.status() === "error")("text-info", ctx.status() === "info")("text-base-content", ctx.status() === "neutral")("opacity-40", ctx.status() === "neutral");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_13_0 = ctx.status()) === "success" ? 3 : tmp_13_0 === "error" ? 4 : tmp_13_0 === "neutral" ? 5 : tmp_13_0 === "info" ? 6 : tmp_13_0 === "approval" ? 7 : 8);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("opacity-40", ctx.status() === "neutral");
      }
    }, dependencies: [IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusPillComponent, [{
    type: Component,
    args: [{ selector: "status-pill", template: `
        <div
            class="border-base-200 bg-opacity-30 flex items-center space-x-2 rounded-full border px-2 py-1 text-base font-medium text-black"
            [class.bg-success-light]="status() === 'success'"
            [class.bg-warning-light]="status() === 'warning'"
            [class.bg-approval-light]="status() === 'approval'"
            [class.bg-error-light]="status() === 'error'"
            [class.bg-info-light]="status() === 'info'"
            [class.bg-base-200]="status() === 'neutral'"
        >
            <div
                class="flex h-5 w-5 items-center justify-center rounded-full"
                [class.text-success]="status() === 'success'"
                [class.text-warning]="status() === 'warning'"
                [class.text-approval]="status() === 'approval'"
                [class.text-error]="status() === 'error'"
                [class.text-info]="status() === 'info'"
                [class.text-base-content]="status() === 'neutral'"
                [class.opacity-40]="status() === 'neutral'"
            >
                <icon class="text-2xl">
                    @switch (status()) {
                        @case ('success') {
                            check_circle
                        }
                        @case ('error') {
                            cancel
                        }
                        @case ('neutral') {
                            block
                        }
                        @case ('info') {
                            info
                        }
                        @case ('approval') {
                            gavel
                        }
                        @default {
                            warning
                        }
                    }
                </icon>
            </div>
            <div [class.opacity-40]="status() === 'neutral'">
                <ng-content></ng-content>
            </div>
        </div>
    `, imports: [IconComponent] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusPillComponent, { className: "StatusPillComponent", filePath: "libs/components/src/lib/status-pill.component.ts", lineNumber: 65 });
})();

// libs/events/src/lib/event-details-modal.component.ts
var _c02 = (a0) => ({ time: a0 });
var _c1 = (a0, a1) => ({ count: a0, cost: a1 });
var _c2 = (a0) => ({ count: a0 });
var _c3 = () => ({ disable_pan: true, disable_zoom: true });
function EventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function EventDetailsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "image-carousel", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.event()?.system?.images);
  }
}
function EventDetailsModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.period_tz(), " ");
  }
}
function EventDetailsModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.recurr_tooltip());
  }
}
function EventDetailsModalComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_15_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkin());
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "icon", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-success", ctx_r1.room_status() !== "pending")("border-none", ctx_r1.room_status() !== "pending")("pointer-events-none", ctx_r1.room_status() !== "pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.room_status() === "pending" ? "arrow_back" : "done");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, ctx_r1.room_status() === "pending" ? "COMMON.CHECK_IN" : "COMMON.CHECKED_IN"), " ");
  }
}
function EventDetailsModalComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 42)(1, "icon");
    \u0275\u0275text(2, "more_horiz");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const menu_r4 = \u0275\u0275reference(98);
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
  }
}
function EventDetailsModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, EventDetailsModalComponent_Conditional_15_Conditional_1_Template, 7, 10, "button", 41);
    \u0275\u0275conditionalCreate(2, EventDetailsModalComponent_Conditional_15_Conditional_2_Template, 3, 1, "button", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.room_status() && ctx_r1.event()?.can_check_in && ctx_r1.room_status() !== "free" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_edit() ? 2 : -1);
  }
}
function EventDetailsModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r1.event().date, "EEEE, dd LLLL y (z)", ctx_r1.tz()), " ");
  }
}
function EventDetailsModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.period_tz(), " ");
  }
}
function EventDetailsModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.level()?.display_name || ctx_r1.level()?.name, ", ");
  }
}
function EventDetailsModalComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.building()?.display_name || ctx_r1.building()?.name, ", ", ctx_r1.building()?.address, " ");
  }
}
function EventDetailsModalComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 17)(4, "icon", 47);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const creator_r5 = \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.event().creator))?.name || ctx_r1.event().creator;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", creator_r5, " ");
  }
}
function EventDetailsModalComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 48);
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "COMMON.VISIBILITY_" + \u0275\u0275pipeBind1(5, 1, ctx_r1.event().visibility)), " ");
  }
}
function EventDetailsModalComponent_For_74_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "a-user-avatar", 29);
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r6?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", user_r6.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r6.email, " ");
  }
}
function EventDetailsModalComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventDetailsModalComponent_For_74_Conditional_0_Template, 7, 4, "div", 49);
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(user_r6.email !== ctx_r1.event().host ? 0 : -1);
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r8.caterer, " ");
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_For_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.optionList(item_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c2, item_r9.option_list?.length || "0")), " ");
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_88_For_6_For_18_Conditional_4_Template, 3, 7, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 65);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.name || "Item");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.option_list?.length ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r9.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 4, item_r9.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 56)(8, "div", 57);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, EventDetailsModalComponent_Conditional_88_For_6_Conditional_12_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 59);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_88_For_6_Template_button_click_13_listener() {
      const order_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleOrder(order_r8.id));
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 60);
    \u0275\u0275repeaterCreate(17, EventDetailsModalComponent_Conditional_88_For_6_For_18_Template, 10, 7, "div", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 9, "CALENDAR_EVENT.CATERING_ORDER_AT", \u0275\u0275pureFunction1(18, _c02, \u0275\u0275pipeBind2(5, 6, order_r8.deliver_at, "MMM d, " + ctx_r1.time_format()))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 15, "CALENDAR_EVENT.CATERING_ORDER_DETAILS", \u0275\u0275pureFunction2(20, _c1, order_r8.item_count, \u0275\u0275pipeBind2(10, 12, order_r8.total_cost / 100, ctx_r1.currency_code))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(order_r8.caterer ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r1.show_order()[order_r8.id] ? "Hide order items" : "Show order items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_order()[order_r8.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.print() || ctx_r1.show_order()[order_r8.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(order_r8.items);
  }
}
function EventDetailsModalComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275repeaterCreate(5, EventDetailsModalComponent_Conditional_88_For_6_Template, 19, 23, "div", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.CATERING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.event().valid_catering);
  }
}
function EventDetailsModalComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.level()?.map_id)("features", ctx_r1.features())("options", \u0275\u0275pureFunction0(3, _c3));
  }
}
function EventDetailsModalComponent_Conditional_91_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 67);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.body()) || ctx_r1.empty_notes, \u0275\u0275sanitizeHtml);
  }
}
function EventDetailsModalComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_91_Conditional_4_Template, 2, 3, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.raw_body() ? 4 : -1);
  }
}
function EventDetailsModalComponent_Conditional_92_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r12.quantity, " ");
  }
}
function EventDetailsModalComponent_Conditional_92_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "button", 70);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_92_For_6_Template_button_click_1_listener() {
      const request_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRequest(request_r11.id));
    });
    \u0275\u0275elementStart(2, "div", 71)(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 72)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 73)(11, "icon", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 60);
    \u0275\u0275repeaterCreate(14, EventDetailsModalComponent_Conditional_92_For_6_For_15_Template, 6, 2, "div", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 20, "CALENDAR_EVENT.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(23, _c02, \u0275\u0275pipeBind2(5, 17, request_r11.deliver_at, "MMM d, " + ctx_r1.time_format()))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r11.state === "approved")("text-success-content", request_r11.state === "approved")("bg-warning", request_r11.state !== "approved" && request_r11.state !== "rejected")("text-warning-content", request_r11.state !== "approved" && request_r11.state !== "rejected")("bg-error", request_r11.state === "rejected")("text-error-content", request_r11.state === "rejected");
    \u0275\u0275property("matTooltip", request_r11.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r11.state === "approved" ? "done" : request_r11.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_request()[request_r11.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.print() || ctx_r1.show_request()[request_r11.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r11.items);
  }
}
function EventDetailsModalComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 68);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275repeaterCreate(5, EventDetailsModalComponent_Conditional_92_For_6_Template, 16, 25, "div", 69, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.ASSETS"), " (", ctx_r1.event().valid_assets?.length || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.event().valid_assets);
  }
}
function EventDetailsModalComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "attendee-list", 74);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_96_Template_attendee_list_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("list", ctx_r1.event().attendees)("host", ctx_r1.event().host);
  }
}
function EventDetailsModalComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_99_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit ? ctx_r1.edit(ctx_r1.event()) : "");
    });
    \u0275\u0275elementStart(1, "div", 76)(2, "icon", 45);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", !ctx_r1.can_edit() ? ctx_r1.no_edit_message() : "")("disabled", !ctx_r1.can_edit());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "CALENDAR_EVENT.ACTION_EDIT"), " ");
  }
}
function EventDetailsModalComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_100_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(ctx_r1.event(), false));
    });
    \u0275\u0275elementStart(1, "div", 76)(2, "icon", 78);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_DELETE"), " ");
  }
}
function EventDetailsModalComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_101_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printEvent());
    });
    \u0275\u0275elementStart(1, "div", 76)(2, "icon", 45);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_PRINT"), " ");
  }
}
function EventDetailsModalComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_102_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(ctx_r1.event(), true));
    });
    \u0275\u0275elementStart(1, "div", 76)(2, "icon", 78);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_DELETE_SERIES"), " ");
  }
}
function EventDetailsModalComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function EventDetailsModalComponent_For_104_Template_button_click_0_listener() {
      const act_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.action.emit(act_r19.id));
    });
    \u0275\u0275elementStart(1, "div", 76)(2, "icon", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const act_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r19.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r19.name);
  }
}
var EMPTY_ACTIONS = [];
var EventDetailsModalComponent = class _EventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._space_pipe = inject(SpacePipe);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.action = output();
    this.edit = this._data.edit_fn;
    this.empty_notes = '<div class="p-4 w-full rounded-md bg-base-200 text-center"><span class="opacity-30">No notes</span></div>';
    this.show_order = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_order" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_request = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_status = signal(
      "",
      ...ngDevMode ? [{ debugName: "room_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_edit = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_body = signal(
      "",
      ...ngDevMode ? [{ debugName: "raw_body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.print = signal(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_attendees = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = signal(
      new CalendarEvent(this._data.event),
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_edit_message = signal(
      "Editing bookings long than \n a day is not available",
      ...ngDevMode ? [{ debugName: "no_edit_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => [
        {
          location: this.space().map_id || this.event()?.system?.map_id,
          content: MapPinComponent
        }
      ],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_catering = computed(
      () => this.event()?.ext("catering")?.length > 0,
      ...ngDevMode ? [{ debugName: "has_catering" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_assets = computed(
      () => !!this.event()?.linked_bookings?.find((_) => _.booking_type === "asset-request"),
      ...ngDevMode ? [{ debugName: "has_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = computed(
      () => {
        return true;
      },
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => this._org.levelWithID(this.space().zones) || new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = computed(
      () => this._org.buildings.find((b) => this.space().zones.includes(b.id)) || new Building(),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = computed(
      () => settingSignal("events.use_building_timezone")() ? this._org.building.timezone : "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tz = computed(
      () => {
        const tz = this.timezone();
        if (!tz)
          return "";
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? "" : tz_offset;
      },
      ...ngDevMode ? [{ debugName: "tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tz_date_same = computed(
      () => {
        return !this._date.transform(this.event().date, "yyyy-MM-dd", this.tz()).localeCompare(this._date.transform(this.event().date, "yyyy-MM-dd"));
      },
      ...ngDevMode ? [{ debugName: "tz_date_same" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.accept_count = computed(
      () => this.event().attendees?.reduce((count, user) => count += user.response_status === "accepted" ? 1 : 0, 0) || 0,
      ...ngDevMode ? [{ debugName: "accept_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.declined_count = computed(
      () => this.event().attendees?.reduce((count, user) => count += user.response_status === "declined" ? 1 : 0, 0) || 0,
      ...ngDevMode ? [{ debugName: "declined_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pending_count = computed(
      () => this.event().attendees?.reduce((count, user) => count += user.response_status === "tentative" || user.response_status === "needsAction" ? 1 : 0, 0) || 0,
      ...ngDevMode ? [{ debugName: "pending_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.body = computed(
      () => (this.event().body || "").replace(/\\n\\n\[ID\|.*\]/gm, ""),
      ...ngDevMode ? [{ debugName: "body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_edit = computed(
      () => !settingSignal("events.booking_unavailable")(),
      ...ngDevMode ? [{ debugName: "allow_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_actions = settingSignal("events.custom_actions", EMPTY_ACTIONS);
    this._use_24_hour = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_status = computed(
      () => {
        if (this.event()?.state === "done")
          return "neutral";
        if (this.event()?.status === "approved")
          return "success";
        if (this.event()?.status === "tentative")
          return "warning";
        if (this.event()?.status === "declined")
          return "error";
        return "warning";
      },
      ...ngDevMode ? [{ debugName: "event_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.period = computed(
      () => this.event()?.all_day ? "All Day" : this.formattedTime(),
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period_tz = computed(
      () => this.formattedTime(this.tz()),
      ...ngDevMode ? [{ debugName: "period_tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date = new DatePipe("en");
    this.recurr_tooltip = computed(
      () => formatRecurrence(fromEventRecurrence(this.event().recurrence), this.event()?.date) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP"),
      ...ngDevMode ? [{ debugName: "recurr_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(event, remove_series) {
    if (event?.state === "done")
      return;
    this._data.remove_fn(event, remove_series);
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
  get currency_code() {
    return this._org.currency_code;
  }
  ngOnInit() {
    console.log("Event:", this._data);
    this.event.set(new CalendarEvent(this._data.event));
    const doc = new DOMParser().parseFromString(this.event().body, "text/html");
    this.raw_body.set((doc.body.textContent || "").trim());
    this._load().then();
    this.no_edit_message.set(i18n("CALENDAR_EVENT.NO_LONG_EDIT_MSG"));
  }
  formattedTime(tz) {
    const date = this.event().date;
    const date_end = this.event().date_end;
    const all_day = this.event().all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format(), tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format(), tz);
    const is_multiday = this.event()?.duration > 24 * 60;
    if (is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return "All Day";
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  toggleOrder(id) {
    this.show_order.update((show_order) => __spreadProps(__spreadValues({}, show_order), {
      [id]: !show_order[id]
    }));
  }
  toggleRequest(id) {
    this.show_request.update((show_request) => __spreadProps(__spreadValues({}, show_request), {
      [id]: !show_request[id]
    }));
  }
  async checkin() {
    const mod = dp(this.space()?.id, "Bookings");
    if (!mod)
      return;
    await mod.execute("checkin", [getUnixTime(this.event().date)]).catch((e) => notifyError(`Error checking in booking. ${e}`));
    this.room_status.set("busy");
  }
  async _load() {
    this.space.set(await this._space_pipe.transform(this.event().system?.id || this.event().system?.email));
    const doc = new DOMParser().parseFromString(this.event().body, "text/html");
    this.raw_body.set((doc.body.textContent || "").trim());
    if (this.event().extension_data.catering?.length || this.event().extension_data.assets?.length) {
      return;
    }
    const metadata = await getEventMetadata(this.event().id, this.space().id);
    if (metadata) {
      this.event.set(new CalendarEvent(__spreadProps(__spreadValues({}, this.event()), {
        extension_data: __spreadValues(__spreadValues({}, this.event().extension_data), metadata)
      })));
    }
  }
  status(id) {
    const booking = this.event().linked_bookings.find((_) => _.asset_id === id);
    if (booking.status)
      return booking.status;
    return booking ? booking.approved ? "approved" : booking.rejected ? "rejected" : "pending" : "pending";
  }
  viewLocation() {
    this.hide_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: { item: this.space() }
    });
    ref.afterClosed().subscribe(() => this.hide_map.set(false));
  }
  printEvent() {
    this.print.set(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => this.print.set(false), 100);
    }, 300);
  }
  static {
    this.\u0275fac = function EventDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailsModalComponent, selectors: [["event-details-modal"]], outputs: { action: "action" }, features: [\u0275\u0275ProvidersFeature([SpacePipe])], decls: 105, vars: 67, consts: [["menu", "matMenu"], [1, "bg-base-100", "sm:bg-base-200", "h-screen", "w-screen", "space-y-2", "overflow-auto", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-204", "sm:rounded-sm", "print:min-h-screen", "print:w-screen", "print:overflow-visible"], [1, "border-base-200", "bg-base-100", "max-h-screen", "flex-col", "items-center", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16", "print:border-none"], ["binding", "", "mod", "Bookings", "bind", "status", 3, "modelChange", "model", "sys"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "bg-neutral", "h-64", "w-full", "overflow-hidden", "sm:rounded-b", "print:hidden"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2", "print:hidden"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "border-base-200", "sm:bg-base-100", "min-w-1/3", "grow-3", "space-y-2", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "mt-2", "mb-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], [1, "border-base-200", "sm:bg-base-100", "mt-4", "min-w-1/3", "grow-3", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "border-base-200", "mx-3", "flex", "items-center", "justify-between", "border-t", "sm:border-none"], [1, "text-lg", "font-medium"], ["matRipple", "", "show-attendees", "", 1, "clear", "text-xs", "underline", "print:hidden", 3, "click"], [1, "flex", "items-center", "p-1"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-1"], [1, "text-lg"], [1, "text-sm", "uppercase"], [1, "hidden", "print:block"], [1, "border-base-200", "mx-3", "mt-2", "border-t", "pt-2", "text-lg", "font-medium"], ["host", "", 1, "flex", "items-center", "space-x-2", "px-2"], [3, "user"], [1, "w-px", "flex-1", "text-sm"], [1, "w-full", "truncate"], [1, "w-full", "truncate", "opacity-60", 3, "title"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:mt-2", "sm:h-48", "sm:w-[16rem]", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["icon", "", "default", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "left-2", "print:hidden"], [1, "absolute", "inset-0", "z-50"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "matTooltip", "disabled"], ["mat-menu-item", ""], [1, "h-64", "w-full", 3, "images"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", 3, "bg-success", "border-none", "pointer-events-none"], ["icon", "", "matRipple", "", 1, "bg-secondary", "h-12", "w-12", "rounded-sm", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "pr-4"], ["matTooltip", "Created By"], ["matTooltip", "Visibility"], ["attendee", "", 1, "flex", "items-center", "space-x-2", "px-2"], [1, "mx-3", "my-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["order", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], [1, "flex", "items-center", "space-x-2", "p-3"], [1, "flex-1"], [1, "text-sm"], [1, "flex", "items-center", "space-x-2"], [1, "text-xs", "opacity-60"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", 1, "print:hidden", 3, "click", "matTooltip"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "ml-4", "text-xs", "font-normal", "opacity-60", 3, "matTooltip"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "border-base-200", "mx-3", "border-t", "text-lg", "font-medium", "sm:border-none"], ["notes", "", 1, "mx-4", "max-w-full", "overflow-hidden", 3, "innerHTML"], [1, "mx-3", "pt-2", "text-lg", "font-medium"], ["request", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "print:hidden", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "print:hidden"], [3, "click", "list", "host"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click", "matTooltip", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "text-base"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"]], template: function EventDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "i", 3);
        \u0275\u0275twoWayListener("modelChange", function EventDetailsModalComponent_Template_i_modelChange_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.room_status, $event) || (ctx.room_status = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, EventDetailsModalComponent_Conditional_3_Template, 1, 0, "div", 4);
        \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_4_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(5, "h3", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "status-pill", 9)(10, "div", 10)(11, "div");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, EventDetailsModalComponent_Conditional_13_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, EventDetailsModalComponent_Conditional_14_Template, 2, 1, "icon", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, EventDetailsModalComponent_Conditional_15_Template, 3, 2, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 14)(17, "div", 15)(18, "h3", 16);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 17)(22, "icon");
        \u0275\u0275text(23, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 10)(25, "div");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(28, EventDetailsModalComponent_Conditional_28_Template, 3, 5, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 17)(30, "icon");
        \u0275\u0275text(31, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 10)(33, "div");
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(35, EventDetailsModalComponent_Conditional_35_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "icon");
        \u0275\u0275text(38, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div");
        \u0275\u0275conditionalCreate(40, EventDetailsModalComponent_Conditional_40_Template, 1, 1);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(42, EventDetailsModalComponent_Conditional_42_Template, 5, 2, "div", 17);
        \u0275\u0275conditionalCreate(43, EventDetailsModalComponent_Conditional_43_Template, 8, 5, "div", 17);
        \u0275\u0275conditionalCreate(44, EventDetailsModalComponent_Conditional_44_Template, 7, 5, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 18)(46, "div", 19)(47, "h3", 20);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 21);
        \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_50_listener() {
          return ctx.show_attendees.set(true);
        });
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 22)(54, "div", 23)(55, "div", 24);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 25);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 23)(61, "div", 24);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 25);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 23)(67, "div", 24);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 25);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 26);
        \u0275\u0275repeaterCreate(73, EventDetailsModalComponent_For_74_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h3", 27);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 28);
        \u0275\u0275declareLet(79);
        \u0275\u0275pipe(80, "user");
        \u0275\u0275pipe(81, "async");
        \u0275\u0275element(82, "a-user-avatar", 29);
        \u0275\u0275elementStart(83, "div", 30)(84, "div", 31);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 32);
        \u0275\u0275text(87);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(88, EventDetailsModalComponent_Conditional_88_Template, 7, 3, "div", 18);
        \u0275\u0275elementStart(89, "button", 33);
        \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_89_listener() {
          return ctx.viewLocation();
        });
        \u0275\u0275conditionalCreate(90, EventDetailsModalComponent_Conditional_90_Template, 1, 4, "interactive-map", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(91, EventDetailsModalComponent_Conditional_91_Template, 5, 4, "div", 18);
        \u0275\u0275conditionalCreate(92, EventDetailsModalComponent_Conditional_92_Template, 7, 4, "div", 18);
        \u0275\u0275elementStart(93, "button", 35)(94, "icon");
        \u0275\u0275text(95, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(96, EventDetailsModalComponent_Conditional_96_Template, 2, 2, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "mat-menu", 37, 0);
        \u0275\u0275conditionalCreate(99, EventDetailsModalComponent_Conditional_99_Template, 7, 5, "button", 38);
        \u0275\u0275conditionalCreate(100, EventDetailsModalComponent_Conditional_100_Template, 7, 3, "button", 39);
        \u0275\u0275conditionalCreate(101, EventDetailsModalComponent_Conditional_101_Template, 7, 3, "button", 39);
        \u0275\u0275conditionalCreate(102, EventDetailsModalComponent_Conditional_102_Template, 7, 3, "button", 39);
        \u0275\u0275repeaterCreate(103, EventDetailsModalComponent_For_104_Template, 6, 2, "button", 39, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("model", ctx.room_status);
        \u0275\u0275property("sys", ctx.space()?.id);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.event()?.system?.images?.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event()?.system?.images?.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("pt-4", !ctx.event()?.system?.images?.length);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.event().title, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("status", ctx.event_status());
        \u0275\u0275advance();
        \u0275\u0275classProp("pr-4", ctx.timezone() && ctx.tz());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.period());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().recurring_event_id ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().state !== "done" ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 46, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 48, ctx.event().date, "EEEE, dd LLLL y"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() && !ctx.tz_date_same() ? 28 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.period());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 35 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.level() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.event()?.system?.display_name || ctx.event()?.system?.name || ctx.event()?.location, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.building() ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().creator !== ctx.event().host ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().visibility && ctx.event().visibility !== "normal" ? 44 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 51, "CALENDAR_EVENT.ATTENDEES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 53, "COMMON.VIEW_ALL"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.accept_count() || 0);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 55, "COMMON.YES"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.declined_count() || 0, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 57, "COMMON.NO"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.pending_count() || 0, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 59, "COMMON.PENDING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.event().attendees);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 61, "FORM.HOST"), " ");
        const host_r20 = \u0275\u0275pipeBind1(81, 65, \u0275\u0275pipeBind1(80, 63, ctx.event().host))?.name || ctx.event().host;
        \u0275\u0275advance(6);
        \u0275\u0275property("user", ctx.event().organiser);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(host_r20);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.event().host);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.event().host, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_catering() ? 88 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_map() ? 90 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.raw_body() ? 91 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_assets() ? 92 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.show_attendees() ? 96 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hide_edit() ? 99 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().state !== "done" ? 100 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_concierge ? 101 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().state !== "done" && ctx.event().recurring_event_id ? 102 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.custom_actions());
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatDialogClose,
      AttendeeListComponent,
      InteractiveMapComponent,
      UserAvatarComponent,
      StatusPillComponent,
      ImageCarouselComponent,
      BindingDirective,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      UpperCasePipe,
      CurrencyPipe,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      UserPipe
    ], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "event-details-modal", template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm print:min-h-screen print:w-screen print:overflow-visible"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16 print:border-none"
            >
                <i
                    binding
                    [(model)]="room_status"
                    [sys]="space()?.id"
                    mod="Bookings"
                    bind="status"
                ></i>
                @if (!event()?.system?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (event()?.system?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b print:hidden"
                    >
                        <image-carousel
                            [images]="event()?.system?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!event()?.system?.images?.length"
                >
                    {{ event().title }}
                </h3>
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="event_status()">
                            <div
                                class="flex flex-col leading-tight"
                                [class.pr-4]="timezone() && tz()"
                            >
                                <div>{{ period() }}</div>
                                @if (timezone() && tz()) {
                                    <div class="text-xs opacity-30">
                                        {{ period_tz() }}
                                    </div>
                                }
                            </div>
                        </status-pill>
                        @if (event().recurring_event_id) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (event().state !== 'done') {
                        <div
                            actions
                            class="flex items-center space-x-2 px-2 print:hidden"
                        >
                            @if (
                                room_status() &&
                                event()?.can_check_in &&
                                room_status() !== 'free'
                            ) {
                                <button
                                    btn
                                    matRipple
                                    class="h-10 flex-1"
                                    [class.bg-success]="
                                        room_status() !== 'pending'
                                    "
                                    [class.border-none]="
                                        room_status() !== 'pending'
                                    "
                                    [class.pointer-events-none]="
                                        room_status() !== 'pending'
                                    "
                                    (click)="checkin()"
                                >
                                    <div
                                        class="flex items-center justify-center space-x-2"
                                    >
                                        <icon class="text-2xl">{{
                                            room_status() === 'pending'
                                                ? 'arrow_back'
                                                : 'done'
                                        }}</icon>
                                        <div class="pr-4">
                                            {{
                                                (room_status() === 'pending'
                                                    ? 'COMMON.CHECK_IN'
                                                    : 'COMMON.CHECKED_IN'
                                                ) | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (allow_edit()) {
                                <button
                                    icon
                                    matRipple
                                    [matMenuTriggerFor]="menu"
                                    class="bg-secondary h-12 w-12 rounded-sm text-white"
                                >
                                    <icon>more_horiz</icon>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-3 space-y-2 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>event</icon>
                        <div class="flex flex-col leading-tight">
                            <div>
                                {{ event().date | date: 'EEEE, dd LLLL y' }}
                            </div>
                            @if (timezone() && tz() && !tz_date_same()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        event().date
                                            | date: 'EEEE, dd LLLL y (z)' : tz()
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>schedule</icon>
                        <div class="flex flex-col leading-tight">
                            <div>{{ period() }}</div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{ period_tz() }}
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>map</icon>
                        <div>
                            @if (level()) {
                                {{ level()?.display_name || level()?.name }},
                            }
                            {{
                                event()?.system?.display_name ||
                                    event()?.system?.name ||
                                    event()?.location
                            }}
                        </div>
                    </div>
                    @if (building()) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon>place</icon>
                            <div>
                                {{
                                    building()?.display_name ||
                                        building()?.name
                                }},
                                {{ building()?.address }}
                            </div>
                        </div>
                    }
                    @if (event().creator !== event().host) {
                        @let creator =
                            (event().creator | user | async)?.name ||
                            event().creator;
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Created By">person</icon>
                            <div>
                                {{ creator }}
                            </div>
                        </div>
                    }
                    @if (
                        event().visibility && event().visibility !== 'normal'
                    ) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Visibility">visibility</icon>
                            <div>
                                {{
                                    'COMMON.VISIBILITY_' +
                                        (event().visibility | uppercase)
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <div
                        class="border-base-200 mx-3 flex items-center justify-between border-t sm:border-none"
                    >
                        <h3 class="text-lg font-medium">
                            {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                        </h3>
                        <button
                            matRipple
                            show-attendees
                            class="clear text-xs underline print:hidden"
                            (click)="show_attendees.set(true)"
                        >
                            {{ 'COMMON.VIEW_ALL' | translate }}
                        </button>
                    </div>
                    <div class="flex items-center p-1">
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ accept_count() || 0 }}</div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.YES' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ declined_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.NO' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ pending_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.PENDING' | translate }}
                            </div>
                        </div>
                    </div>
                    <div class="hidden print:block">
                        @for (user of event().attendees; track user) {
                            @if (user.email !== event().host) {
                                <div
                                    class="flex items-center space-x-2 px-2"
                                    attendee
                                >
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                    <div class="w-px flex-1 text-sm">
                                        <div class="w-full truncate">
                                            {{ user?.name }}
                                        </div>
                                        <div
                                            class="w-full truncate opacity-60"
                                            [title]="user.email"
                                        >
                                            {{ user.email }}
                                        </div>
                                    </div>
                                </div>
                            }
                        }
                    </div>
                    <h3
                        class="border-base-200 mx-3 mt-2 border-t pt-2 text-lg font-medium"
                    >
                        {{ 'FORM.HOST' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2" host>
                        @let host =
                            (event().host | user | async)?.name || event().host;
                        <a-user-avatar
                            [user]="event().organiser"
                        ></a-user-avatar>
                        <div class="w-px flex-1 text-sm">
                            <div class="w-full truncate">{{ host }}</div>
                            <div
                                class="w-full truncate opacity-60"
                                [title]="event().host"
                            >
                                {{ event().host }}
                            </div>
                        </div>
                    </div>
                </div>
                @if (has_catering()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 my-2 text-lg font-medium">
                            {{ 'RESOURCE.CATERING' | translate }}
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                order of event().valid_catering;
                                track order
                            ) {
                                <div
                                    order
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <div
                                        class="flex items-center space-x-2 p-3"
                                    >
                                        <div class="flex-1">
                                            <div class="text-sm">
                                                {{
                                                    'CALENDAR_EVENT.CATERING_ORDER_AT'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      order.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <div class="text-xs opacity-60">
                                                    {{
                                                        'CALENDAR_EVENT.CATERING_ORDER_DETAILS'
                                                            | translate
                                                                : {
                                                                      count: order.item_count,
                                                                      cost:
                                                                          order.total_cost /
                                                                              100
                                                                          | currency
                                                                              : currency_code,
                                                                  }
                                                    }}
                                                </div>
                                                @if (order.caterer) {
                                                    <div
                                                        class="bg-base-200 rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        {{ order.caterer }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            class="print:hidden"
                                            [matTooltip]="
                                                show_order()[order.id]
                                                    ? 'Hide order items'
                                                    : 'Show order items'
                                            "
                                            (click)="toggleOrder(order.id)"
                                        >
                                            <icon>
                                                {{
                                                    show_order()[order.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </button>
                                    </div>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            print() || show_order()[order.id]
                                                ? 'show'
                                                : 'hide'
                                        "
                                    >
                                        @for (item of order.items; track item) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                    @if (
                                                        item.option_list?.length
                                                    ) {
                                                        <span
                                                            class="ml-4 text-xs font-normal opacity-60"
                                                            [matTooltip]="
                                                                optionList(item)
                                                            "
                                                        >
                                                            {{
                                                                'CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT'
                                                                    | translate
                                                                        : {
                                                                              count:
                                                                                  item
                                                                                      .option_list
                                                                                      ?.length ||
                                                                                  '0',
                                                                          }
                                                            }}
                                                        </span>
                                                    }
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                                <div
                                                    class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    {{
                                                        item.unit_price_with_options /
                                                            100
                                                            | currency
                                                                : currency_code
                                                    }}
                                                    ea
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <button
                    map
                    class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:mt-2 sm:h-48 sm:w-[16rem]"
                    (click)="viewLocation()"
                >
                    @if (!hide_map()) {
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level()?.map_id"
                            [features]="features()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    }
                </button>
                @if (raw_body()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3
                            class="border-base-200 mx-3 border-t text-lg font-medium sm:border-none"
                        >
                            {{ 'FORM.NOTES' | translate }}
                        </h3>
                        @if (raw_body()) {
                            <div
                                notes
                                class="mx-4 max-w-full overflow-hidden"
                                [innerHTML]="(body() | sanitize) || empty_notes"
                            ></div>
                        }
                    </div>
                }
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 pt-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                event().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of event().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="toggleRequest(request.id)"
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'CALENDAR_EVENT.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full print:hidden"
                                            [class.bg-success]="
                                                request.state === 'approved'
                                            "
                                            [class.text-success-content]="
                                                request.state === 'approved'
                                            "
                                            [class.bg-warning]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.text-warning-content]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.bg-error]="
                                                request.state === 'rejected'
                                            "
                                            [class.text-error-content]="
                                                request.state === 'rejected'
                                            "
                                            [matTooltip]="
                                                request.state || 'Tentative'
                                            "
                                        >
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full print:hidden"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    show_request()[request.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            print() ||
                                            show_request()[request.id]
                                                ? 'show'
                                                : 'hide'
                                        "
                                    >
                                        @for (
                                            item of request.items;
                                            track item
                                        ) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <button
                    icon
                    default
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 left-2 print:hidden"
                >
                    <icon>close</icon>
                </button>
                @if (show_attendees()) {
                    <div class="absolute inset-0 z-50">
                        <attendee-list
                            [list]="event().attendees"
                            [host]="event().host"
                            (click)="show_attendees.set(false)"
                        ></attendee-list>
                    </div>
                }
            </div>
            <mat-menu #menu="matMenu" xPosition="before">
                @if (!hide_edit()) {
                    <button
                        mat-menu-item
                        mat-dialog-close
                        (click)="edit ? edit(event()) : ''"
                        [matTooltip]="!can_edit() ? no_edit_message() : ''"
                        [disabled]="!can_edit()"
                    >
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">edit</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (event().state !== 'done') {
                    <button mat-menu-item (click)="remove(event(), false)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-error text-2xl">delete</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_DELETE' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (is_concierge) {
                    <button mat-menu-item (click)="printEvent()">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">print</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_PRINT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (event().state !== 'done' && event().recurring_event_id) {
                    <button mat-menu-item (click)="remove(event(), true)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-error text-2xl">delete</icon>
                            <div>
                                {{
                                    'CALENDAR_EVENT.ACTION_DELETE_SERIES'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                }
                @for (act of custom_actions(); track act) {
                    <button mat-menu-item (click)="action.emit(act.id)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">{{ act.icon }}</icon>
                            <div>{{ act.name }}</div>
                        </div>
                    </button>
                }
            </mat-menu>
        </div>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], providers: [SpacePipe], imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatMenuModule,
      MatDialogModule,
      AttendeeListComponent,
      SanitizePipe,
      InteractiveMapComponent,
      UserAvatarComponent,
      StatusPillComponent,
      ImageCarouselComponent,
      BindingDirective,
      MatTooltipModule,
      UserPipe
    ] }]
  }], null, { action: [{ type: Output, args: ["action"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailsModalComponent, { className: "EventDetailsModalComponent", filePath: "libs/events/src/lib/event-details-modal.component.ts", lineNumber: 755 });
})();

// libs/bookings/src/lib/desk-settings-modal.component.ts
function DeskSettingsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275text(2, "Desk Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, " Set your desk height for the best experience ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "label");
    \u0275\u0275text(7, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-select", 7);
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPreset($event));
    });
    \u0275\u0275elementStart(11, "mat-option", 8);
    \u0275\u0275text(12, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 9);
    \u0275\u0275text(14, "Standing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 10);
    \u0275\u0275text(16, "Seated");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets.set(true));
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, "Current Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "mat-slider", 13)(24, "input", 14);
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateHeight($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 16);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeskHeight());
    });
    \u0275\u0275text(28, " Apply Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 17)(30, "icon");
    \u0275\u0275text(31, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.preset());
    \u0275\u0275control();
    \u0275\u0275advance(13);
    \u0275\u0275property("displayWith", ctx_r1.formatLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.height());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.height().toFixed(1), "cm ");
  }
}
function DeskSettingsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-height-presets", 18);
    \u0275\u0275listener("close", function DeskSettingsModalComponent_Conditional_1_Template_desk_height_presets_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show_close", true);
  }
}
var DeskSettingsModalComponent = class _DeskSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog_ref = inject(MatDialogRef);
    this.desk_id = this._data.id;
    this.edit_presets = signal(
      false,
      ...ngDevMode ? [{ debugName: "edit_presets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preset = signal(
      null,
      ...ngDevMode ? [{ debugName: "preset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.height = signal(
      71,
      ...ngDevMode ? [{ debugName: "height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._sitting_height = this._settings.signal("desk_sitting_height", 71, true);
    this._standing_height = this._settings.signal("desk_standing_height", 102, true);
  }
  ngOnInit() {
    const sitting_height = this._sitting_height();
    const standing_height = this._standing_height();
    if (!sitting_height && !standing_height) {
      this.edit_presets.set(true);
    }
    const last_height = parseInt(localStorage.getItem("PLACEOS.last_desk_height"), 10);
    this.height.set(last_height || sitting_height || 71);
    if (this.height() === sitting_height) {
      this.preset.set("sitting");
    } else if (this.height() === standing_height) {
      this.preset.set("standing");
    }
  }
  updatePreset(new_height) {
    const sitting_height = this._sitting_height() || 71;
    const standing_height = this._standing_height() || 102;
    if (new_height === sitting_height) {
      this.preset.set("sitting");
    } else if (new_height === standing_height) {
      this.preset.set("standing");
    } else {
      this.preset.set(null);
    }
  }
  updateHeight(new_height) {
    this.height.set(new_height);
    this.updatePreset(new_height);
  }
  setPreset(value) {
    this.preset.set(value || null);
    switch (value) {
      case "standing":
        this.height.set(this._standing_height() || 102);
        break;
      case "sitting":
        this.height.set(this._sitting_height() || 71);
        break;
      default:
        this.height.set(70);
        break;
    }
  }
  async setDeskHeight() {
    const mod = this._org.module("desks", "DeskControl");
    localStorage.setItem("PLACEOS.last_desk_height", `${this.height()}`);
    if (!mod)
      return this._dialog_ref.close();
    await mod.execute("set_desk_height", [this.desk_id, this.height()]).catch((_) => {
      notifyError("Error setting desk height." + _);
      throw _;
    });
    notifySuccess("Successfully set desk height");
    this._dialog_ref.close();
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  static {
    this.\u0275fac = function DeskSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSettingsModalComponent, selectors: [["desk-settings-modal"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "w-[20rem]", "rounded-sm", "p-4", "shadow-sm"], [3, "show_close"], [1, "text-lg"], [1, "mb-4", "text-xs", "opacity-60"], [1, "mt-2", "mb-4", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-1/2", "flex-1"], ["placeholder", "No selected preset", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "standing"], ["value", "sitting"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "w-12", "text-right", "text-sm"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-2"], [3, "close", "show_close"]], template: function DeskSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskSettingsModalComponent_Conditional_0_Template, 32, 4, "div", 0)(1, DeskSettingsModalComponent_Conditional_1_Template, 1, 1, "desk-height-presets", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.edit_presets() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      MatRippleModule,
      MatRipple,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DeskHeightPresetsComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-settings-modal", template: `
        @if (!edit_presets()) {
            <div
                class="bg-base-100 relative w-[20rem] rounded-sm p-4 shadow-sm"
            >
                <div class="text-lg">Desk Height</div>
                <div class="mb-4 text-xs opacity-60">
                    Set your desk height for the best experience
                </div>
                <div class="mt-2 mb-4 flex flex-col">
                    <label>Presets</label>
                    <div class="flex items-center space-x-2 pb-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1"
                        >
                            <mat-select
                                placeholder="No selected preset"
                                [ngModel]="preset()"
                                (ngModelChange)="setPreset($event)"
                            >
                                <mat-option value="">None</mat-option>
                                <mat-option value="standing"
                                    >Standing</mat-option
                                >
                                <mat-option value="sitting">Seated</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            (click)="edit_presets.set(true)"
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                        >
                            <icon>edit</icon>
                        </button>
                    </div>
                    <label>Current Height</label>
                    <div class="flex items-center space-x-2">
                        <mat-slider
                            min="60"
                            max="120"
                            step="0.5"
                            discrete
                            class="flex-1"
                            [displayWith]="formatLabel"
                        >
                            <input
                                matSliderThumb
                                [ngModel]="height()"
                                (ngModelChange)="updateHeight($event)"
                            />
                        </mat-slider>
                        <div class="w-12 text-right text-sm">
                            {{ height().toFixed(1) }}cm
                        </div>
                    </div>
                </div>
                <button btn matRipple (click)="setDeskHeight()" class="w-full">
                    Apply Settings
                </button>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 right-2"
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <desk-height-presets
                [show_close]="true"
                (close)="edit_presets.set(false)"
            />
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSliderModule,
      MatRippleModule,
      FormsModule,
      DeskHeightPresetsComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSettingsModalComponent, { className: "DeskSettingsModalComponent", filePath: "libs/bookings/src/lib/desk-settings-modal.component.ts", lineNumber: 112 });
})();

// libs/bookings/src/lib/booking-details-modal.component.ts
var _c03 = (a0) => ({ time: a0 });
var _c12 = () => ({ disable_pan: true, disable_zoom: true });
function BookingDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function BookingDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "image-carousel", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r0.booking()?.extension_data?.images);
  }
}
function BookingDetailsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.visitor_display_name(), " ");
  }
}
function BookingDetailsModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 10);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip());
  }
}
function BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 31);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Conditional_1_Conditional_1_Template, 2, 0, "icon", 31);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking().checked_in ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mr-4", ctx_r0.booking().checked_in);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx_r0.booking().checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleCheckedIn());
    });
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Conditional_1_Template, 5, 6, "div", 29)(2, BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Conditional_2_Template, 1, 1, "mat-spinner", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-success", ctx_r0.booking().checked_in)("text-success-content", ctx_r0.booking().checked_in);
    \u0275\u0275property("disabled", ctx_r0.checking_in());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.checking_in() ? 1 : 2);
  }
}
function BookingDetailsModalComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookingDetailsModalComponent_Conditional_12_Conditional_1_Conditional_0_Template, 3, 6, "button", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.booking().checked_out_at && !ctx_r0.checked_out() && !ctx_r0.auto_checkin() && (ctx_r0.booking().state === "upcoming" || ctx_r0.booking().state === "started" || ctx_r0.booking().state === "in_progress") && ctx_r0.booking().status !== "declined" ? 0 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_12_Conditional_1_Template, 1, 1);
    \u0275\u0275elementStart(2, "button", 26)(3, "icon");
    \u0275\u0275text(4, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r3 = \u0275\u0275reference(45);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_checkin() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
  }
}
function BookingDetailsModalComponent_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.visitor_email_label(), " ");
  }
}
function BookingDetailsModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, BookingDetailsModalComponent_Conditional_33_Conditional_2_Template, 2, 1, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.visitor_display_name());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.visitor_email_label() ? 2 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource_details_label(), " ");
  }
}
function BookingDetailsModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 33);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.building()?.display_name || ctx_r0.building()?.name, " ", ctx_r0.building()?.address ? ", " + ctx_r0.building().address : "", " ");
  }
}
function BookingDetailsModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 34);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "user");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, \u0275\u0275pipeBind1(5, 1, ctx_r0.booking().user_email))?.name || ctx_r0.booking().user_name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 35);
    \u0275\u0275text(2, "edit_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "user");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, \u0275\u0275pipeBind1(5, 1, ctx_r0.booking().booked_by_email))?.name || ctx_r0.booking().booked_by_name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "icon", 40);
    \u0275\u0275text(2, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r4.resource_type);
  }
}
function BookingDetailsModalComponent_Conditional_38_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "icon", 41);
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", group_r4.name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 36);
    \u0275\u0275text(2, " Group Booking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "div", 38)(5, "icon", 39);
    \u0275\u0275text(6, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, BookingDetailsModalComponent_Conditional_38_Conditional_9_Template, 5, 1, "div", 38);
    \u0275\u0275conditionalCreate(10, BookingDetailsModalComponent_Conditional_38_Conditional_10_Template, 5, 1, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", group_r4.size, " people");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r4.resource_type ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r4.name ? 10 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_39_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r7.quantity, " ");
  }
}
function BookingDetailsModalComponent_Conditional_39_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_39_For_6_Template_button_click_1_listener() {
      const request_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleRequest(request_r6.id));
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 48)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 49)(11, "icon", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 51);
    \u0275\u0275repeaterCreate(14, BookingDetailsModalComponent_Conditional_39_For_6_For_15_Template, 6, 2, "div", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 20, "BOOKINGS.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(23, _c03, \u0275\u0275pipeBind2(5, 17, request_r6.deliver_at, "MMM d, " + ctx_r0.time_format()))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r6.state === "approved")("text-success-content", request_r6.state === "approved")("bg-warning", request_r6.state !== "approved" && request_r6.state !== "rejected")("text-warning-content", request_r6.state !== "approved" && request_r6.state !== "rejected")("bg-error", request_r6.state === "rejected")("text-error-content", request_r6.state === "rejected");
    \u0275\u0275property("matTooltip", request_r6.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r6.state === "approved" ? "done" : request_r6.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showRequest(request_r6.id) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r0.showRequest(request_r6.id) ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r6.items);
  }
}
function BookingDetailsModalComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275repeaterCreate(5, BookingDetailsModalComponent_Conditional_39_For_6_Template, 16, 25, "div", 44, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.ASSETS"), " (", ctx_r0.booking().valid_assets?.length || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.booking().valid_assets);
  }
}
function BookingDetailsModalComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 56);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.level()?.map_id)("features", ctx_r0.features())("options", \u0275\u0275pureFunction0(3, _c12));
  }
}
function BookingDetailsModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_40_Conditional_1_Template, 1, 4, "interactive-map", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hide_map() ? 1 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit(ctx_r0.booking()));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_EDIT"));
  }
}
function BookingDetailsModalComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setDeskHeight());
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "icon", 60);
    \u0275\u0275text(3, " height ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_SET_DESK_HEIGHT"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking(), false));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "icon", 61);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE"));
  }
}
function BookingDetailsModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.group_parent_booking(), false));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "icon", 61);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "Delete group");
    \u0275\u0275elementEnd()()();
  }
}
function BookingDetailsModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking(), true));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "icon", 61);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE_SERIES"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.end(ctx_r0.booking()));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "icon", 61);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_END"));
  }
}
function canEditBooking(booking) {
  const is_visitor = booking.booking_type === "visitor";
  const visitor_edit_allowed = is_visitor && settingSignal("visitors.allow_editing", false)();
  const is_parking = booking.booking_type === "parking";
  const features = settingSignal("features", [])();
  const parking_allocated_edit_blocked = is_parking && !!booking.asset_id && !features.includes("parking");
  return !booking.is_done && !booking.checked_in && (!is_visitor || visitor_edit_allowed) && !parking_allocated_edit_blocked;
}
var BookingDetailsModalComponent = class _BookingDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.hide_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checked_out = signal(
      false,
      ...ngDevMode ? [{ debugName: "checked_out" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checking_in = signal(
      false,
      ...ngDevMode ? [{ debugName: "checking_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking = signal(
      this._data.booking,
      ...ngDevMode ? [{ debugName: "booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_user = userSignal();
    this.edit = this._data.edit_fn;
    this.end = this._data.end_fn;
    this._show_request = signal(
      {},
      ...ngDevMode ? [{ debugName: "_show_request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => [
        {
          location: this.booking()?.extension_data?.map_id || this.booking()?.asset_id,
          content: MapPinComponent
        }
      ],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_assets = computed(
      () => !!this.booking()?.valid_assets.length,
      ...ngDevMode ? [{ debugName: "has_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => this._org.levelWithID(this.booking()?.zones || []),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_or_building = computed(
      () => this.level() || this.building(),
      ...ngDevMode ? [{ debugName: "level_or_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_location = computed(
      () => {
        const location_name = this.level_or_building()?.display_name || this.level_or_building()?.name || "";
        const resource_name = this.booking().asset_name || this.booking().location || this.booking().asset_id;
        return location_name ? `${location_name}, ${resource_name}` : resource_name;
      },
      ...ngDevMode ? [{ debugName: "resource_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_region = this._settings.signal("use_region", false);
    this.building = computed(
      () => {
        const zones = this.booking()?.zones || [];
        const level = this.level();
        const building = this._org.buildings.find((bld) => zones.includes(bld.id) || bld.id === level?.parent_id);
        if (this._use_region()) {
          const region = this._org.regions.find((region2) => zones.includes(region2.id) || region2.id === building?.parent_id);
          if (region)
            return region;
        }
        return building;
      },
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = computed(
      () => canEditBooking(this.booking()),
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_cancel = computed(
      () => !this.booking().is_done && !this.booking().checked_in,
      ...ngDevMode ? [{ debugName: "can_cancel" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_checkin = computed(
      () => {
        const booking = this.booking();
        return !(booking.booking_type === "parking" && booking.asset_id.startsWith("unallocated")) && !settingSignal(`${(booking.type || "booking") + "s"}.hide_checkin`)() && !settingSignal(`${booking.type || "bookings"}.hide_checkin`)() && !settingSignal("bookings.hide_checkin")();
      },
      ...ngDevMode ? [{ debugName: "can_checkin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_series_delete = computed(
      () => {
        const is_assigned = this.booking().extension_data.is_assigned;
        const check_list = [
          `${this.booking()?.type}s`,
          this.booking()?.type,
          "bookings"
        ];
        const key = is_assigned ? `app.{v}.allow_assigned_series_delete` : `app.{v}.allow_series_delete`;
        for (const check of check_list) {
          const check_key = key.replace("{v}", check);
          const value = this._settings.get(check_key);
          if (value != null)
            return !!value;
        }
        return false;
      },
      ...ngDevMode ? [{ debugName: "allow_series_delete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_checkin = settingSignal(`${this.booking()?.type || "bookings"}.auto_checkin`, false);
    this.show_waitlist = this._settings.signal("parking.show_waitlist", true);
    this._hide_selected_parking_space = this._settings.signal("parking.hide_selected_space", false);
    this.hide_selected_parking_space = computed(
      () => this.booking()?.booking_type === "parking" && this._hide_selected_parking_space(),
      ...ngDevMode ? [{ debugName: "hide_selected_parking_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_checked_in = computed(
      () => this.booking().checked_in,
      ...ngDevMode ? [{ debugName: "is_checked_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_height_enabled = computed(
      () => this.booking()?.type === "desk" && settingSignal("desks.height_enabled")(),
      ...ngDevMode ? [{ debugName: "desk_height_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_visitor = computed(
      () => this.booking()?.booking_type === "visitor",
      ...ngDevMode ? [{ debugName: "is_visitor" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_title = computed(
      () => {
        const booking = this.booking();
        if (!booking)
          return "";
        return booking.title || booking.asset_name || booking.asset_id;
      },
      ...ngDevMode ? [{ debugName: "display_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_details_label = computed(
      () => {
        const level_name = this.level()?.display_name || this.level()?.name || "";
        if (this.hide_selected_parking_space()) {
          return level_name || i18n("RESOURCE.PARKING");
        }
        const resource_name = this.booking()?.asset_name || this.booking()?.asset_id || "";
        return [level_name, resource_name].filter((_) => !!_).join(", ");
      },
      ...ngDevMode ? [{ debugName: "resource_details_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_display_name = computed(
      () => visitorDisplayNameFor(this.booking()) || "Visitor",
      ...ngDevMode ? [{ debugName: "visitor_display_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_reason = computed(
      () => {
        const booking = this.booking();
        if (!booking || !this.is_visitor())
          return "";
        const visitor_name = (visitorDisplayNameFor(booking) || "Visitor").toLowerCase();
        const reason = `${booking.title || booking.description || ""}`.trim();
        if (!reason.length)
          return "";
        return reason.toLowerCase() === visitor_name ? "" : reason;
      },
      ...ngDevMode ? [{ debugName: "visitor_reason" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_email_label = computed(
      () => {
        const booking = this.booking();
        const asset_id = `${booking?.asset_id || ""}`.trim();
        if (!asset_id || !this._looksLikeEmail(asset_id))
          return "";
        const display_name = visitorDisplayNameFor(booking) || "Visitor";
        return display_name.toLowerCase() === asset_id.toLowerCase() ? "" : asset_id;
      },
      ...ngDevMode ? [{ debugName: "visitor_email_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_parent_booking = computed(
      () => {
        const booking = this.booking();
        if (booking.booking_type === "group")
          return booking;
        const parent = booking.linked_parent_booking;
        if (parent?.booking_type !== "group")
          return null;
        return new Booking(__spreadProps(__spreadValues({}, parent), {
          booking_type: "group",
          type: "group",
          date: parent.date || booking.date,
          duration: parent.duration || booking.duration,
          user_email: parent.user_email || booking.user_email,
          booked_by_email: parent.booked_by_email || booking.booked_by_email
        }));
      },
      ...ngDevMode ? [{ debugName: "group_parent_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_group = computed(
      () => {
        const group_booking = this.group_parent_booking();
        if (!group_booking || group_booking.is_done)
          return false;
        const current_email = this.current_user()?.email?.toLowerCase();
        const host_emails = [
          group_booking.user_email,
          group_booking.booked_by_email
        ].map((_) => _?.toLowerCase());
        return !!current_email && host_emails.includes(current_email);
      },
      ...ngDevMode ? [{ debugName: "can_manage_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_details = computed(
      () => {
        const booking = this.booking();
        const group_booking = this.group_parent_booking();
        const extension_data = group_booking?.extension_data || booking.extension_data || {};
        const group_members = extension_data.group_members || [];
        const linked_children = (booking.linked_bookings || []).filter((_) => _.parent_id === group_booking?.id);
        const size = group_members.length || linked_children.length;
        if (!group_booking && !size)
          return null;
        return {
          name: extension_data.group || booking.group,
          resource_type: extension_data.group_resource_type || "",
          size
        };
      },
      ...ngDevMode ? [{ debugName: "group_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_in_progress = computed(
      () => {
        const ts = Date.now();
        const start = this.booking()?.booking_start * 1e3;
        const end = this.booking()?.booking_end * 1e3;
        if (this.booking()?.all_day)
          return start <= ts;
        return start <= ts && ts <= end;
      },
      ...ngDevMode ? [{ debugName: "is_in_progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = this._settings.time_format_signal;
    this._parking_status = computed(
      () => {
        const booking = this.booking();
        const is_parking_request = booking?.booking_type === "parking" && booking?.status === "tentative";
        return is_parking_request ? parkingRequestStatus(booking) : "pending";
      },
      ...ngDevMode ? [{ debugName: "_parking_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking_status = computed(
      () => {
        if (this.booking()?.is_done)
          return "neutral";
        if (this.booking()?.status === "approved")
          return "success";
        if (this.booking()?.status === "declined")
          return "error";
        if (this.booking()?.status === "tentative") {
          if (this._parking_status() === "waitlist" && this.show_waitlist())
            return "info";
          if (this._parking_status() === "approval_required")
            return "approval";
          return "warning";
        }
        return "warning";
      },
      ...ngDevMode ? [{ debugName: "booking_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => {
        if (this.booking()?.is_all_day)
          return i18n("COMMON.ALL_DAY");
        const start = this.booking()?.date || Date.now();
        const duration = this.booking()?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
          hours: Math.floor(duration / 60),
          minutes: duration % 60
        }).replace(" hour", "hr").replace(" minute", "min");
        return `${format(start, this.time_format())} - ${format(end, this.time_format())} (${dur})`;
      },
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recurr_tooltip = computed(
      () => formatRecurrence(fromBookingRecurrence(this.booking()), this.booking()?.date) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP"),
      ...ngDevMode ? [{ debugName: "recurr_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(booking, remove_series) {
    if (booking?.is_done || booking?.checked_in && !remove_series)
      return;
    if (remove_series === void 0)
      this._data.remove_fn(booking);
    else
      this._data.remove_fn(booking, remove_series);
  }
  showRequest(id) {
    return this._show_request()[id];
  }
  toggleRequest(id) {
    this._show_request.update((value) => __spreadProps(__spreadValues({}, value), {
      [id]: !value[id]
    }));
  }
  async toggleCheckedIn() {
    const bkn = this.booking();
    if (bkn.checked_in) {
      const resource_name = bkn.booking_type === "parking" ? "parking space" : bkn.booking_type;
      const response = await openConfirmModal({
        title: i18n("COMMON.CHECK_OUT"),
        content: `You are currently checked in.<br/>Would you like to check out of your ${resource_name} now?<br/>This will make the ${resource_name} available for others to book.`,
        confirm_text: i18n("COMMON.CHECK_OUT"),
        icon: { content: "logout" }
      }, this._dialog);
      if (response.reason !== "done")
        return;
      response.close();
    }
    this.checking_in.set(true);
    const updated_booking = await (bkn.instance ? checkinBookingInstance(bkn.id, bkn.instance, !bkn.checked_in) : checkinBooking(bkn.id, !bkn.checked_in)).catch((_) => {
      notifyError(i18n(bkn.checked_in ? "BOOKINGS.CHECK_OUT_ERROR" : "BOOKINGS.CHECK_IN_ERROR"));
      this.checking_in.set(false);
      throw _;
    });
    this.booking.set(updated_booking);
    this.checked_out.set(!updated_booking.checked_in);
    notifySuccess(i18n(updated_booking.checked_in ? "BOOKINGS.CHECK_IN_SUCCESS" : "BOOKINGS.CHECK_OUT_SUCCESS"));
    this._data.refresh_fn?.();
    this.checking_in.set(false);
  }
  status(id) {
    const booking = this.booking().linked_bookings.find((_) => _.asset_id === id);
    if (booking.status)
      return booking.status;
    return booking ? booking.approved ? "approved" : booking.rejected ? "rejected" : "pending" : "pending";
  }
  viewLocation() {
    this.hide_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: {
        item: {
          id: this.booking().asset_id,
          name: this.booking().asset_name,
          map_id: this.booking().extension_data.map_id || this.booking().asset_id,
          level: this.level
        }
      }
    });
    ref.afterClosed().subscribe(() => this.hide_map.set(false));
  }
  setDeskHeight() {
    this._dialog.open(DeskSettingsModalComponent, {
      data: {
        id: this.booking().asset_ids[0] || this.booking().asset_id
      }
    });
  }
  _looksLikeEmail(value) {
    return !!value && value.includes("@");
  }
  static {
    this.\u0275fac = function BookingDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailsModalComponent, selectors: [["booking-details-modal"]], decls: 52, vars: 32, consts: [["menu", "matMenu"], [1, "bg-base-100", "sm:bg-base-200", "h-screen", "w-screen", "space-y-2", "overflow-auto", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-204", "sm:rounded-sm"], [1, "border-base-200", "bg-base-100", "max-h-screen", "flex-col", "items-center", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "bg-neutral", "h-64", "w-full", "overflow-hidden", "sm:rounded-b"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "px-3", "text-sm", "opacity-70"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "border-base-200", "sm:bg-base-100", "min-w-1/3", "grow-4", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "mt-2", "mb-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], ["matTooltip", "Date"], ["matTooltip", "Time"], ["matTooltip", "Level and Resource"], [1, "border-base-200", "sm:bg-base-100", "mt-4", "min-w-1/3", "grow-3", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]"], ["icon", "", "default", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "left-2"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", ""], ["mat-menu-item", ""], [1, "h-64", "w-full", 3, "images"], ["icon", "", "matRipple", "", 1, "bg-secondary", "h-12", "w-12", "rounded-sm", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "h-10", "min-w-40", "flex-1", "border-none", 3, "bg-success", "text-success-content", "disabled"], ["btn", "", "matRipple", "", 1, "h-10", "min-w-40", "flex-1", "border-none", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-1"], [1, "mx-auto", 3, "diameter"], [1, "text-xl"], [1, "text-xs", "opacity-60"], ["matTooltip", "Location"], ["matTooltip", "Host"], ["matTooltip", "Booked By"], [1, "mx-3", "py-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2", "px-3", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["matTooltip", "Group Size"], ["matTooltip", "Resource Type"], ["matTooltip", "Group Reference"], [1, "break-all"], [1, "flex", "flex-col", "space-y-2"], ["request", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "text-sm"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-base"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded"], [1, "text-error"]], template: function BookingDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275conditionalCreate(2, BookingDetailsModalComponent_Conditional_2_Template, 1, 0, "div", 3);
        \u0275\u0275conditionalCreate(3, BookingDetailsModalComponent_Conditional_3_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(4, "h3", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, BookingDetailsModalComponent_Conditional_6_Template, 2, 1, "p", 6);
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "status-pill", 9);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, BookingDetailsModalComponent_Conditional_11_Template, 2, 1, "icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, BookingDetailsModalComponent_Conditional_12_Template, 5, 2, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "h3", 14);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15)(19, "icon", 16);
        \u0275\u0275text(20, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 15)(25, "icon", 17);
        \u0275\u0275text(26, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15)(30, "icon", 18);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div");
        \u0275\u0275conditionalCreate(33, BookingDetailsModalComponent_Conditional_33_Template, 3, 2)(34, BookingDetailsModalComponent_Conditional_34_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(35, BookingDetailsModalComponent_Conditional_35_Template, 5, 2, "div", 15);
        \u0275\u0275conditionalCreate(36, BookingDetailsModalComponent_Conditional_36_Template, 7, 5, "div", 15);
        \u0275\u0275conditionalCreate(37, BookingDetailsModalComponent_Conditional_37_Template, 7, 5, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(38, BookingDetailsModalComponent_Conditional_38_Template, 11, 3, "div", 19);
        \u0275\u0275conditionalCreate(39, BookingDetailsModalComponent_Conditional_39_Template, 7, 4, "div", 19);
        \u0275\u0275conditionalCreate(40, BookingDetailsModalComponent_Conditional_40_Template, 2, 1, "button", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 21)(42, "icon");
        \u0275\u0275text(43, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "mat-menu", 22, 0);
        \u0275\u0275conditionalCreate(46, BookingDetailsModalComponent_Conditional_46_Template, 7, 3, "button", 23);
        \u0275\u0275conditionalCreate(47, BookingDetailsModalComponent_Conditional_47_Template, 7, 3, "button", 24);
        \u0275\u0275conditionalCreate(48, BookingDetailsModalComponent_Conditional_48_Template, 7, 3, "button", 24);
        \u0275\u0275conditionalCreate(49, BookingDetailsModalComponent_Conditional_49_Template, 6, 0, "button", 24);
        \u0275\u0275conditionalCreate(50, BookingDetailsModalComponent_Conditional_50_Template, 7, 3, "button", 24);
        \u0275\u0275conditionalCreate(51, BookingDetailsModalComponent_Conditional_51_Template, 7, 3, "button", 24);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_18_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.booking()?.extension_data?.images?.length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking()?.extension_data?.images?.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("pt-4", !ctx.booking()?.extension_data?.images);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.display_title(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_visitor() ? 6 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("status", ctx.booking_status());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.period(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking().instance ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.booking().is_done ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 27, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 29, ctx.booking().date, "EEEE, dd LLLL y"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.period());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.is_visitor() ? "person" : "place");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_visitor() ? 33 : 34);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_visitor() ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.current_user()?.email !== ctx.booking().user_email ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking().booked_by_email !== ctx.booking().user_email ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_18_0 = ctx.group_details()) ? 38 : -1, tmp_18_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_assets() ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.level()?.map_id && !ctx.hide_selected_parking_space() ? 40 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.can_edit() ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_checked_in() && ctx.desk_height_enabled() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_cancel() ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_manage_group() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.booking().is_done && ctx.booking().instance && ctx.allow_series_delete() ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_in_progress() ? 51 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      InteractiveMapComponent,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      StatusPillComponent,
      ImageCarouselComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      UserPipe
    ], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "booking-details-modal", template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16"
            >
                @if (!booking()?.extension_data?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (booking()?.extension_data?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b"
                    >
                        <image-carousel
                            [images]="booking()?.extension_data?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!booking()?.extension_data?.images"
                >
                    {{ display_title() }}
                </h3>
                @if (is_visitor()) {
                    <p class="w-full px-3 text-sm opacity-70">
                        {{ visitor_display_name() }}
                    </p>
                }
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="booking_status()">
                            {{ period() }}
                        </status-pill>
                        @if (booking().instance) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (!booking().is_done) {
                        <div actions class="flex items-center space-x-2 px-2">
                            @if (can_checkin()) {
                                @if (
                                    !booking().checked_out_at &&
                                    !checked_out() &&
                                    !auto_checkin() &&
                                    (booking().state === 'upcoming' ||
                                        booking().state === 'started' ||
                                        booking().state === 'in_progress') &&
                                    booking().status !== 'declined'
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="h-10 min-w-40 flex-1 border-none"
                                        [class.bg-success]="
                                            booking().checked_in
                                        "
                                        [class.text-success-content]="
                                            booking().checked_in
                                        "
                                        [disabled]="checking_in()"
                                        (click)="toggleCheckedIn()"
                                    >
                                        @if (!checking_in()) {
                                            <div
                                                class="flex items-center justify-center gap-1"
                                            >
                                                @if (booking().checked_in) {
                                                    <icon class="text-xl"
                                                        >done</icon
                                                    >
                                                }
                                                <div
                                                    [class.mr-4]="
                                                        booking().checked_in
                                                    "
                                                >
                                                    {{
                                                        (booking().checked_in
                                                            ? 'COMMON.CHECKED_IN'
                                                            : 'COMMON.CHECK_IN'
                                                        ) | translate
                                                    }}
                                                </div>
                                            </div>
                                        } @else {
                                            <mat-spinner
                                                class="mx-auto"
                                                [diameter]="32"
                                            ></mat-spinner>
                                        }
                                    </button>
                                }
                            }
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                class="bg-secondary h-12 w-12 rounded-sm text-white"
                            >
                                <icon>more_horiz</icon>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-4 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Date">event</icon>
                        <div>
                            {{ booking().date | date: 'EEEE, dd LLLL y' }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Time">schedule</icon>
                        <div>{{ period() }}</div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Level and Resource">{{
                            is_visitor() ? 'person' : 'place'
                        }}</icon>
                        <div>
                            @if (is_visitor()) {
                                <div>{{ visitor_display_name() }}</div>
                                @if (visitor_email_label()) {
                                    <div class="text-xs opacity-60">
                                        {{ visitor_email_label() }}
                                    </div>
                                }
                            } @else {
                                {{ resource_details_label() }}
                            }
                        </div>
                    </div>
                    @if (is_visitor()) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Location">place</icon>
                            <div>
                                {{
                                    building()?.display_name || building()?.name
                                }}
                                {{
                                    building()?.address
                                        ? ', ' + building().address
                                        : ''
                                }}
                            </div>
                        </div>
                    }
                    @if (current_user()?.email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Host">person</icon>
                            <div>
                                {{
                                    (booking().user_email | user | async)
                                        ?.name || booking().user_name
                                }}
                            </div>
                        </div>
                    }
                    @if (booking().booked_by_email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Booked By">edit_calendar</icon>
                            <div>
                                {{
                                    (booking().booked_by_email | user | async)
                                        ?.name || booking().booked_by_name
                                }}
                            </div>
                        </div>
                    }
                </div>
                @if (group_details(); as group) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            Group Booking
                        </h3>
                        <div class="flex flex-col space-y-2 px-3 text-sm">
                            <div class="flex items-center space-x-2">
                                <icon matTooltip="Group Size">groups</icon>
                                <div>{{ group.size }} people</div>
                            </div>
                            @if (group.resource_type) {
                                <div class="flex items-center space-x-2">
                                    <icon matTooltip="Resource Type"
                                        >category</icon
                                    >
                                    <div>{{ group.resource_type }}</div>
                                </div>
                            }
                            @if (group.name) {
                                <div class="flex items-center space-x-2">
                                    <icon matTooltip="Group Reference"
                                        >tag</icon
                                    >
                                    <div class="break-all">
                                        {{ group.name }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                booking().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of booking().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="toggleRequest(request.id)"
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'BOOKINGS.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                            [class.bg-success]="
                                                request.state === 'approved'
                                            "
                                            [class.text-success-content]="
                                                request.state === 'approved'
                                            "
                                            [class.bg-warning]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.text-warning-content]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.bg-error]="
                                                request.state === 'rejected'
                                            "
                                            [class.text-error-content]="
                                                request.state === 'rejected'
                                            "
                                            [matTooltip]="
                                                request.state || 'Tentative'
                                            "
                                        >
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    showRequest(request.id)
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            showRequest(request.id)
                                                ? 'show'
                                                : 'hide'
                                        "
                                    >
                                        @for (
                                            item of request.items;
                                            track item
                                        ) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (level()?.map_id && !hide_selected_parking_space()) {
                    <button
                        map
                        class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:my-2 sm:h-48 sm:w-[16rem]"
                        (click)="viewLocation()"
                    >
                        @if (!hide_map()) {
                            <interactive-map
                                class="pointer-events-none"
                                [src]="level()?.map_id"
                                [features]="features()"
                                [options]="{
                                    disable_pan: true,
                                    disable_zoom: true,
                                }"
                            ></interactive-map>
                        }
                    </button>
                }
            </div>
            <button
                icon
                default
                matRipple
                mat-dialog-close
                class="absolute top-2 left-2"
            >
                <icon>close</icon>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            @if (can_edit()) {
                <button
                    mat-menu-item
                    mat-dialog-close
                    (click)="edit(booking())"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon>edit</icon>
                        <div>{{ 'BOOKINGS.ACTION_EDIT' | translate }}</div>
                    </div>
                </button>
            }
            @if (is_checked_in() && desk_height_enabled()) {
                <button mat-menu-item (click)="setDeskHeight()">
                    <div class="flex items-center space-x-2 text-base">
                        <icon className="material-symbols-rounded">
                            height
                        </icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_SET_DESK_HEIGHT' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (can_cancel()) {
                <button mat-menu-item (click)="remove(booking(), false)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_DELETE' | translate }}</div>
                    </div>
                </button>
            }
            @if (can_manage_group()) {
                <button
                    mat-menu-item
                    (click)="remove(group_parent_booking(), false)"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>Delete group</div>
                    </div>
                </button>
            }
            @if (
                !booking().is_done &&
                booking().instance &&
                allow_series_delete()
            ) {
                <button mat-menu-item (click)="remove(booking(), true)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_DELETE_SERIES' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (is_in_progress()) {
                <button mat-menu-item (click)="end(booking())">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_END' | translate }}</div>
                    </div>
                </button>
            }
        </mat-menu>
    `, animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
      CommonModule,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      MatDialogModule,
      MatProgressSpinnerModule,
      StatusPillComponent,
      ImageCarouselComponent,
      MatRippleModule,
      UserPipe,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailsModalComponent, { className: "BookingDetailsModalComponent", filePath: "libs/bookings/src/lib/booking-details-modal.component.ts", lineNumber: 517 });
})();

export {
  BindingDirective,
  StatusPillComponent,
  EventDetailsModalComponent,
  canEditBooking,
  BookingDetailsModalComponent
};
//# sourceMappingURL=chunk-VOWR4BCJ.js.map
