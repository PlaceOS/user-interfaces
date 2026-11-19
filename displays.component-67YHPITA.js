import {
  AssignedPlaylistsPanelComponent,
  LinkedItemRowComponent,
  TemplateMappingsComponent,
  selectRoutedItem
} from "./chunk-PBISI7UB.js";
import {
  scrollSelectionIntoView
} from "./chunk-YWPYYUSZ.js";
import {
  SectionHeaderComponent
} from "./chunk-WYB4X4UY.js";
import {
  SignageDisplayService
} from "./chunk-6VI6PBTG.js";
import {
  displayLastSeen,
  displayStatusKey,
  isDisplayOnline
} from "./chunk-JZMQYVW5.js";
import {
  routedTab
} from "./chunk-RLVHFB4G.js";
import {
  SectionTabsComponent
} from "./chunk-2L3MIKPJ.js";
import "./chunk-QNX2PB73.js";
import "./chunk-TIDLNL67.js";
import "./chunk-525VPDGK.js";
import "./chunk-S4MXT4LL.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-QDNMJPPA.js";
import "./chunk-KPG3MGQK.js";
import {
  IntersectDirective
} from "./chunk-2CB5CIWX.js";
import {
  LoadErrorComponent
} from "./chunk-W447C6JL.js";
import {
  SignagePlaylistService
} from "./chunk-NQAXVDGB.js";
import {
  DAY_COUNT,
  MINUTES_PER_DAY,
  buildDisplayScheduleAssignments,
  buildScheduleBlocks
} from "./chunk-UMOEY5YL.js";
import "./chunk-35KILWWS.js";
import "./chunk-ROVMIUT6.js";
import {
  signagePlayerUrl
} from "./chunk-LK3B7UMP.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-QK7GWYWU.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-4EWUBQI4.js";
import "./chunk-6V7YHCWT.js";
import "./chunk-IALFHMKU.js";
import "./chunk-Y7RYIDG7.js";
import {
  showSignageDisplay
} from "./chunk-B6VQIKDR.js";
import {
  SignageContextService
} from "./chunk-A6JGYOGI.js";
import "./chunk-SG57ZUUB.js";
import "./chunk-5G4V6J43.js";
import {
  AuthenticatedImageDirective
} from "./chunk-TGQUBEAW.js";
import "./chunk-32EAJLZH.js";
import {
  openConfirmModal
} from "./chunk-JPXMRFNV.js";
import "./chunk-3UZ5GRLW.js";
import "./chunk-MNAOEVWZ.js";
import {
  MatDialog
} from "./chunk-4MZUVPXU.js";
import "./chunk-NXFWFAR7.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-M4R2OMQ3.js";
import {
  TranslatePipe
} from "./chunk-ZH2HWGDO.js";
import {
  MatOption
} from "./chunk-ENFA7HCT.js";
import {
  OrganisationService,
  REMOTE_DEBUG_DEVICES,
  REMOTE_LOG_LEVELS,
  isRemoteDebugCommand,
  isRemoteDebugDeviceOnline,
  isRemoteLogRequest,
  readRemoteDebugModule,
  remoteDebugDeviceBinding,
  remoteDebugLogsBinding,
  remoteDebugMediaUrl,
  remoteDebugOrgId,
  remoteDebugResultsBinding,
  remoteSetupModule
} from "./chunk-5A4VHR6W.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-WG7PJTZZ.js";
import {
  IconComponent
} from "./chunk-BQWZIAG6.js";
import {
  AsyncHandler,
  settingSignal
} from "./chunk-BCYPXBSY.js";
import {
  addDays,
  addMinutes,
  br,
  downloadFile,
  format,
  isSameDay,
  notifyError,
  notifySuccess,
  startOfDay,
  startOfWeek
} from "./chunk-RCIO5PLG.js";
import "./chunk-TYLQ2T3C.js";
import "./chunk-7NEE74GJ.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AVEVXYGF.js";
import {
  Router,
  RouterLink
} from "./chunk-7H4OKNBG.js";
import {
  Component,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  Injectable,
  Input,
  JsonPipe,
  LOCALE_ID,
  ViewChildren,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  setClassMetadata,
  signal,
  untracked,
  viewChildren,
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
  ɵɵdefineInjectable,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-Y6KAMZVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QQY67O5D.js";

// libs/components/src/lib/remote-debug-view.service.ts
var RemoteDebugViewService = class _RemoteDebugViewService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._module = signal(
      null,
      ...ngDevMode ? [{ debugName: "_module" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._state = signal(
      "loading",
      ...ngDevMode ? [{ debugName: "_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._devices = signal(
      {},
      ...ngDevMode ? [{ debugName: "_devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.module = this._module.asReadonly();
    this.state = this._state.asReadonly();
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.devices = computed(
      () => Object.values(this._devices()).sort((a, b) => b.last_seen - a.last_seen),
      ...ngDevMode ? [{ debugName: "devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.interval("now", () => this.now.set(Date.now()), 60 * 1e3);
    effect(() => {
      if (!this._org.initialised())
        return;
      untracked(() => this.load());
    });
  }
  /** Find the driver again, for example after a failed read */
  async load() {
    this._state.set("loading");
    const mod = await readRemoteDebugModule(remoteDebugOrgId(this._org));
    this.unsub("devices");
    this._module.set(mod ?? null);
    this._state.set(mod ? "ready" : mod === null ? "missing" : "failed");
    if (!mod)
      return;
    this.subscription("devices", mod.variable(REMOTE_DEBUG_DEVICES).bindThenSubscribe((value) => this._devices.set(value && typeof value === "object" ? value : {})));
  }
  /**
   * Call a method of the driver for the people who debug, such as
   * `request_logs` or `send_command`. Resolves the result of the driver.
   * Shows an error and resolves `undefined` when the call fails.
   */
  async call(method, args) {
    const mod = this._module();
    if (!mod)
      return void 0;
    try {
      return await mod.execute(method, args);
    } catch (error) {
      notifyError(`Remote debugging failed: ${error?.message || error}`);
      return void 0;
    }
  }
  static {
    this.\u0275fac = function RemoteDebugViewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugViewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemoteDebugViewService, factory: _RemoteDebugViewService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugViewService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// libs/components/src/lib/remote-debug-panel.component.ts
var _forTrack0 = ($index, $item) => $item.seq;
var _forTrack1 = ($index, $item) => $item.id;
function RemoteDebugPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-success", ctx_r0.online())("text-success-content", ctx_r0.online())("bg-base-300", !ctx_r0.online());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.online() ? "Online" : "Offline", " ");
  }
}
function RemoteDebugPanelComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Last seen ", \u0275\u0275pipeBind2(2, 1, ctx, "MMM d, h:mm:ss a"), " ");
  }
}
function RemoteDebugPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, RemoteDebugPanelComponent_Conditional_5_Conditional_7_Template, 3, 4, "span", 4);
    \u0275\u0275elementStart(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const info_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(info_r2.app);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", info_r2.version, " (", info_r2.build, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Loaded ", \u0275\u0275pipeBind2(6, 6, info_r2.started_at, "MMM d, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r0.last_seen()) ? 7 : -1, tmp_5_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", info_r2.url, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, " The driver has no details of this device yet. Request logs or send a command to start. ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stopLogs());
    });
    \u0275\u0275text(1, " Stop live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startLogs());
    });
    \u0275\u0275text(1, " Start live logs ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function RemoteDebugPanelComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showNewest());
    });
    \u0275\u0275text(1, " Newest ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" Live at the ", ctx.level, " level. ");
  }
}
function RemoteDebugPanelComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Older than entry ", ctx_r0.older_than(), ". ");
  }
}
function RemoteDebugPanelComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, entry_r7.timestamp, "HH:mm:ss.SSS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.level_classes[entry_r7.level]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entry_r7.level, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r7.message, " ");
  }
}
function RemoteDebugPanelComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1, " No log entries ");
    \u0275\u0275elementEnd();
  }
}
function RemoteDebugPanelComponent_Conditional_62_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const command_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", command_r8.type, " ");
  }
}
function RemoteDebugPanelComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, " Waiting for the device: ");
    \u0275\u0275repeaterCreate(2, RemoteDebugPanelComponent_Conditional_62_For_3_Template, 2, 1, "span", 46, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.pending());
  }
}
function RemoteDebugPanelComponent_For_68_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.result.error);
  }
}
function RemoteDebugPanelComponent_For_68_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 52);
  }
  if (rf & 2) {
    const file_r10 = ctx;
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate6(" ", file_r10.width, " x ", file_r10.height, ", ", file_r10.frames, " ", file_r10.frames === 1 ? "frame" : "frames", ", ", \u0275\u0275pipeBind2(2, 8, file_r10.bytes / 1024, "1.0-0"), " KB, ", file_r10.mime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ctx_r0.mediaUrl(file_r10))("alt", item_r9.type + " of " + ctx_r0.device_id());
  }
}
function RemoteDebugPanelComponent_For_68_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r9.result.data));
  }
}
function RemoteDebugPanelComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 36)(1, "div", 47)(2, "icon", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, RemoteDebugPanelComponent_For_68_Conditional_9_Template, 2, 1, "pre", 50)(10, RemoteDebugPanelComponent_For_68_Conditional_10_Template, 4, 11)(11, RemoteDebugPanelComponent_For_68_Conditional_11_Template, 3, 3, "pre", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", item_r9.result.ok)("text-error", !item_r9.result.ok);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.result.ok ? "check_circle" : "error", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, item_r9.received_at, "MMM d, h:mm:ss a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!item_r9.result.ok ? 9 : (tmp_15_0 = ctx_r0.media(item_r9)) ? 10 : 11, tmp_15_0);
  }
}
function RemoteDebugPanelComponent_ForEmpty_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 37);
    \u0275\u0275text(1, " No results yet ");
    \u0275\u0275elementEnd();
  }
}
var MAX_SHOWN_ENTRIES = 500;
var MAX_SHOWN_RESULTS = 20;
var LOG_HISTORY = 1e3;
var LEVEL_CLASSES = {
  debug: "bg-base-300 text-base-content",
  info: "bg-info text-info-content",
  warn: "bg-warning text-warning-content",
  error: "bg-error text-error-content"
};
var RemoteDebugPanelComponent = class _RemoteDebugPanelComponent extends AsyncHandler {
  constructor() {
    super();
    this._view = inject(RemoteDebugViewService);
    this._dialog = inject(MatDialog);
    this._state = signal(
      {},
      ...ngDevMode ? [{ debugName: "_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._logs = signal(
      null,
      ...ngDevMode ? [{ debugName: "_logs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._results = signal(
      [],
      ...ngDevMode ? [{ debugName: "_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device_id = input.required(
      ...ngDevMode ? [{ debugName: "device_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = REMOTE_LOG_LEVELS;
    this.level_classes = LEVEL_CLASSES;
    this.level = signal(
      "info",
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings_keys = "";
    this.navigate_path = "";
    this.request = computed(
      () => {
        const logs = this._state().logs;
        return isRemoteLogRequest(logs) ? logs : null;
      },
      ...ngDevMode ? [{ debugName: "request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pending = computed(
      () => (this._state().commands ?? []).filter(isRemoteDebugCommand),
      ...ngDevMode ? [{ debugName: "pending" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.entries = computed(
      () => this._logs()?.entries ?? [],
      ...ngDevMode ? [{ debugName: "entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.older_than = signal(
      null,
      ...ngDevMode ? [{ debugName: "older_than" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._requests = Promise.resolve();
    this._older_wanted = null;
    this._request_id = "";
    this.shown_entries = computed(
      () => {
        const filter = this.filter().trim().toLowerCase();
        const older_than = this.older_than() ?? Infinity;
        const list = [];
        const entries = this.entries();
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i];
          if (entry.seq >= older_than)
            continue;
          if (filter && !entry.message.toLowerCase().includes(filter)) {
            continue;
          }
          list.push(entry);
          if (list.length >= MAX_SHOWN_ENTRIES)
            break;
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "shown_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.shown_results = computed(
      () => this._results().slice(-MAX_SHOWN_RESULTS).reverse(),
      ...ngDevMode ? [{ debugName: "shown_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.device = computed(
      () => this._view.devices().find((_) => _.id === this.device_id()) ?? this._logs()?.device ?? null,
      ...ngDevMode ? [{ debugName: "device" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_seen = computed(
      () => this._view.devices().find((_) => _.id === this.device_id())?.last_seen ?? 0,
      ...ngDevMode ? [{ debugName: "last_seen" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.online = computed(
      () => isRemoteDebugDeviceOnline({ last_seen: this.last_seen() }, this._view.now()),
      ...ngDevMode ? [{ debugName: "online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_load_older = computed(
      () => {
        const oldest = this.entries()[0];
        return !!oldest && (oldest.seq > 1 || this._canPageLocally());
      },
      ...ngDevMode ? [{ debugName: "can_load_older" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const mod = this._view.module();
      const id = this.device_id();
      untracked(() => this._bind(id, mod !== null));
    });
  }
  /** Start a log request at the selected level, with the buffered entries */
  async startLogs() {
    this.older_than.set(null);
    this._older_wanted = null;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("request_logs", [
      device_id,
      this.level(),
      { history: LOG_HISTORY }
    ]));
  }
  async stopLogs() {
    const device_id = this.device_id();
    await this._queue(() => this._view.call("stop_logs", [device_id]));
  }
  /** Select a level. An active request changes its level */
  /** Select a level. An active request at another level changes its level */
  async setLevel(level) {
    this.level.set(level);
    if (!this.request())
      return;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("set_level", [device_id, level]));
  }
  /** New request for the entries before the oldest entry that the driver has */
  /**
   * Show older entries. When the driver has more entries than the panel
   * shows, show the page before the oldest shown entry. Otherwise ask the
   * device for the entries before the oldest entry of the driver.
   */
  async loadOlder() {
    const oldest = this.entries()[0];
    if (!oldest)
      return;
    const oldest_shown = this.shown_entries().at(-1);
    if (oldest_shown && this._canPageLocally()) {
      this.older_than.set(oldest_shown.seq);
      return;
    }
    if (oldest.seq <= 1)
      return;
    this._older_wanted = oldest.seq;
    const device_id = this.device_id();
    await this._queue(() => this._view.call("request_logs", [
      device_id,
      this.level(),
      { history: LOG_HISTORY, before: oldest.seq }
    ]));
  }
  /**
   * Whether the panel has older matching entries than the shown page. Only
   * a full page can have them. Otherwise the page shows all entries before
   * the cursor that match the filter
   */
  _canPageLocally() {
    const shown = this.shown_entries();
    const oldest_shown = shown.at(-1);
    return !!oldest_shown && shown.length >= MAX_SHOWN_ENTRIES && this._hasMatchBefore(oldest_shown.seq);
  }
  /** Show the newest entries, also when older entries are on the way */
  showNewest() {
    this.older_than.set(null);
    this._older_wanted = null;
  }
  /** Run a log request call after the calls before it */
  _queue(call) {
    const next = this._requests.then(call);
    this._requests = next.catch(() => void 0);
    return next;
  }
  /** Whether an entry before `seq` matches the filter */
  _hasMatchBefore(seq) {
    const filter = this.filter().trim().toLowerCase();
    return this.entries().some((_) => _.seq < seq && (!filter || _.message.toLowerCase().includes(filter)));
  }
  /** Save the log entries as a text file */
  downloadLogs() {
    const text = this.entries().map((_) => `${new Date(_.timestamp).toISOString()} ${_.level.toUpperCase()} ${_.message}`).join("\n");
    downloadFile(`${this.device_id()}-logs.txt`, text);
  }
  async send(type, options = {}, device_id = this.device_id()) {
    const id = await this._view.call("send_command", [
      device_id,
      type,
      options
    ]);
    if (id === void 0)
      return;
    if (id)
      notifySuccess(`Sent ${type} to ${device_id}`);
    else {
      notifyError(`The driver did not take the ${type} command. The device can have 20 waiting commands maximum.`);
    }
  }
  /** Reload the app on the device, after the user confirms */
  async reload(type) {
    const device_id = this.device_id();
    const result = await openConfirmModal({
      title: type === "reload" ? "Reload app" : "Clear cache",
      content: type === "reload" ? `Reload the app on ${device_id}?` : `Remove the app caches on ${device_id} and reload it? The device must be online to load the app again.`,
      icon: { type: "icon", content: "restart_alt" },
      destructive: true
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.close();
    await this.send(type, {}, device_id);
  }
  async sendSettings() {
    const keys = this.settings_keys.split(",").map((_) => _.trim()).filter((_) => _);
    if (keys.length)
      await this.send("settings", { keys });
  }
  async sendNavigate() {
    const path = this.navigate_path.trim();
    if (path.startsWith("/"))
      await this.send("navigate", { path });
  }
  /** File details of a snapshot or animation result. `null` for other results */
  media(item) {
    if (item.type !== "snapshot" && item.type !== "animation")
      return null;
    const data = item.result.data;
    return typeof data?.upload_id === "string" ? data : null;
  }
  mediaUrl(file) {
    return remoteDebugMediaUrl(file.upload_id);
  }
  /** Listen to the bindings of the device */
  _bind(device_id, connected) {
    this.unsub("state");
    this.unsub("logs");
    this.unsub("results");
    this._state.set({});
    this._logs.set(null);
    this._results.set([]);
    this.older_than.set(null);
    this._older_wanted = null;
    this._request_id = "";
    const mod = this._view.module();
    if (!connected || !mod || !device_id)
      return;
    this.subscription("state", mod.variable(remoteDebugDeviceBinding(device_id)).bindThenSubscribe((value) => {
      const state = value && typeof value === "object" ? value : {};
      const logs = isRemoteLogRequest(state.logs) ? state.logs : null;
      if (logs && logs.id !== this._request_id) {
        this.level.set(logs.level);
      }
      this._request_id = logs?.id ?? "";
      this._state.set(state);
    }));
    this.subscription("logs", mod.variable(remoteDebugLogsBinding(device_id)).bindThenSubscribe((value) => {
      const started_at = value?.device?.started_at;
      if (started_at !== this._logs()?.device?.started_at) {
        this.older_than.set(null);
        this._older_wanted = null;
      }
      this._logs.set(value ?? null);
      const wanted = this._older_wanted;
      if (wanted !== null && this._hasMatchBefore(wanted)) {
        this.older_than.set(wanted);
        this._older_wanted = null;
      }
    }));
    this.subscription("results", mod.variable(remoteDebugResultsBinding(device_id)).bindThenSubscribe((value) => this._results.set(Array.isArray(value) ? value : [])));
  }
  static {
    this.\u0275fac = function RemoteDebugPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoteDebugPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteDebugPanelComponent, selectors: [["remote-debug-panel"]], inputs: { device_id: [1, "device_id"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 70, vars: 20, consts: [[1, "flex", "flex-col", "gap-3"], [1, "bg-base-100", "border-base-300", "flex", "flex-wrap", "items-center", "gap-x-4", "gap-y-1", "rounded-lg", "border", "px-4", "py-3"], [1, "font-mono", "text-lg", "font-medium"], ["online-state", "", 1, "rounded-full", "px-2", "py-0.5", "text-xs", 3, "bg-success", "text-success-content", "bg-base-300"], [1, "text-sm", "opacity-70"], ["logs", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "pt-3"], [1, "flex-1", "font-medium"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-32"], ["aria-label", "Log level", 3, "ngModelChange", "ngModel"], [3, "value"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button"], [1, "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "min-w-48", "flex-1"], ["matInput", "", "placeholder", "Filter logs", "aria-label", "Filter logs", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click", "disabled"], ["btn", "", "matRipple", "", "newest", "", "type", "button", 1, "inverse"], ["icon", "", "matRipple", "", "type", "button", "aria-label", "Download logs", 3, "click", "disabled"], [1, "px-4", "pb-2", "text-xs", "opacity-60"], [1, "border-base-300", "max-h-[32rem]", "overflow-auto", "border-t", "font-mono", "text-xs"], [1, "border-base-200", "flex", "gap-2", "border-b", "px-4", "py-1"], [1, "px-4", "py-6", "text-center", "opacity-60"], ["commands", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "gap-3", "rounded-lg", "border", "p-4"], [1, "font-medium"], [1, "flex", "flex-wrap", "gap-2"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2", 3, "ngSubmit"], ["matInput", "", "name", "keys", "placeholder", "Settings keys, such as app.title, app.features", "aria-label", "Settings keys", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], ["matInput", "", "name", "path", "placeholder", "App route, such as /bootstrap", "aria-label", "App route", 3, "ngModelChange", "ngModel"], ["pending", "", 1, "text-sm", "opacity-70"], ["results", "", 1, "bg-base-100", "border-base-300", "flex", "flex-col", "rounded-lg", "border"], [1, "px-4", "pt-3", "pb-2", "font-medium"], [1, "flex", "flex-col"], [1, "border-base-200", "flex", "flex-col", "gap-2", "border-t", "px-4", "py-3"], [1, "px-4", "pb-6", "text-center", "opacity-60"], ["online-state", "", 1, "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "w-full", "truncate", "text-xs", "opacity-60"], ["btn", "", "matRipple", "", "stop-logs", "", "type", "button", 1, "inverse", 3, "click"], ["btn", "", "matRipple", "", "start-logs", "", "type", "button", 3, "click"], ["btn", "", "matRipple", "", "newest", "", "type", "button", 1, "inverse", 3, "click"], [1, "shrink-0", "opacity-60"], [1, "h-fit", "shrink-0", "rounded", "px-1", "uppercase"], [1, "min-w-0", "break-words", "whitespace-pre-wrap"], [1, "bg-base-200", "ml-1", "rounded", "px-2", "py-0.5"], [1, "flex", "items-center", "gap-2"], [1, "text-xl"], [1, "text-sm", "opacity-60"], [1, "text-error", "max-h-48", "overflow-auto", "text-xs", "whitespace-pre-wrap"], [1, "bg-base-200", "max-h-64", "overflow-auto", "rounded", "p-2", "text-xs"], ["auth", "", 1, "border-base-300", "max-h-[32rem]", "w-fit", "max-w-full", "rounded", "border", "object-contain", 3, "source", "alt"]], template: function RemoteDebugPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, RemoteDebugPanelComponent_Conditional_4_Template, 2, 7, "span", 3);
        \u0275\u0275conditionalCreate(5, RemoteDebugPanelComponent_Conditional_5_Template, 10, 9)(6, RemoteDebugPanelComponent_Conditional_6_Template, 2, 0, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "section", 5)(8, "div", 6)(9, "h3", 7);
        \u0275\u0275text(10, "Logs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-form-field", 8)(12, "mat-select", 9);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_mat_select_ngModelChange_12_listener($event) {
          return ctx.setLevel($event);
        });
        \u0275\u0275repeaterCreate(13, RemoteDebugPanelComponent_For_14_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, RemoteDebugPanelComponent_Conditional_15_Template, 2, 0, "button", 11)(16, RemoteDebugPanelComponent_Conditional_16_Template, 2, 0, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "mat-form-field", 14)(19, "input", 15);
        \u0275\u0275listener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.filter.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 16);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_20_listener() {
          return ctx.loadOlder();
        });
        \u0275\u0275text(21, " Load older ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, RemoteDebugPanelComponent_Conditional_22_Template, 2, 0, "button", 17);
        \u0275\u0275elementStart(23, "button", 18);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_23_listener() {
          return ctx.downloadLogs();
        });
        \u0275\u0275elementStart(24, "icon");
        \u0275\u0275text(25, "download");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "p", 19);
        \u0275\u0275conditionalCreate(27, RemoteDebugPanelComponent_Conditional_27_Template, 1, 1);
        \u0275\u0275text(28);
        \u0275\u0275conditionalCreate(29, RemoteDebugPanelComponent_Conditional_29_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "ol", 20);
        \u0275\u0275repeaterCreate(31, RemoteDebugPanelComponent_For_32_Template, 8, 8, "li", 21, _forTrack0, false, RemoteDebugPanelComponent_ForEmpty_33_Template, 2, 0, "li", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "section", 23)(35, "h3", 24);
        \u0275\u0275text(36, "Commands");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 25)(38, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_38_listener() {
          return ctx.send("status");
        });
        \u0275\u0275text(39, " Status ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_40_listener() {
          return ctx.send("snapshot");
        });
        \u0275\u0275text(41, " Snapshot ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_42_listener() {
          return ctx.send("animation", { format: "webp" });
        });
        \u0275\u0275text(43, " Animation (WebP) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_44_listener() {
          return ctx.send("animation", { format: "gif" });
        });
        \u0275\u0275text(45, " Animation (GIF) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 26);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_46_listener() {
          return ctx.send("storage");
        });
        \u0275\u0275text(47, " Storage keys ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 27);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_48_listener() {
          return ctx.reload("reload");
        });
        \u0275\u0275text(49, " Reload app ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 27);
        \u0275\u0275listener("click", function RemoteDebugPanelComponent_Template_button_click_50_listener() {
          return ctx.reload("clear_cache");
        });
        \u0275\u0275text(51, " Clear cache and reload ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "form", 28);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_52_listener() {
          return ctx.sendSettings();
        });
        \u0275\u0275elementStart(53, "mat-form-field", 14)(54, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.settings_keys, $event) || (ctx.settings_keys = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 30);
        \u0275\u0275text(56, " Get settings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "form", 28);
        \u0275\u0275listener("ngSubmit", function RemoteDebugPanelComponent_Template_form_ngSubmit_57_listener() {
          return ctx.sendNavigate();
        });
        \u0275\u0275elementStart(58, "mat-form-field", 14)(59, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function RemoteDebugPanelComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.navigate_path, $event) || (ctx.navigate_path = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 30);
        \u0275\u0275text(61, " Open route ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(62, RemoteDebugPanelComponent_Conditional_62_Template, 4, 0, "p", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "section", 33)(64, "h3", 34);
        \u0275\u0275text(65, "Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "ol", 35);
        \u0275\u0275repeaterCreate(67, RemoteDebugPanelComponent_For_68_Template, 12, 11, "li", 36, _forTrack1, false, RemoteDebugPanelComponent_ForEmpty_69_Template, 2, 0, "li", 37);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_12_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.device_id());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_seen() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.device()) ? 5 : 6, tmp_2_0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.level());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.levels);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.request() ? 15 : 16);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.filter());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.can_load_older());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.older_than() !== null ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.entries().length);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_12_0 = ctx.request()) ? 27 : -1, tmp_12_0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" Showing ", ctx.shown_entries().length, " of ", ctx.entries().length, " entries, newest first. ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.older_than() !== null ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shown_entries());
        \u0275\u0275advance(23);
        \u0275\u0275twoWayProperty("ngModel", ctx.settings_keys);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.settings_keys.trim());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.navigate_path);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.navigate_path.startsWith("/"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.pending().length ? 62 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.shown_results());
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      AuthenticatedImageDirective,
      IconComponent,
      DatePipe,
      DecimalPipe,
      JsonPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteDebugPanelComponent, [{
    type: Component,
    args: [{
      selector: "remote-debug-panel",
      template: `
        <div class="flex flex-col gap-3">
            <section
                class="bg-base-100 border-base-300 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border px-4 py-3"
            >
                <h2 class="font-mono text-lg font-medium">{{ device_id() }}</h2>
                @if (last_seen()) {
                    <span
                        class="rounded-full px-2 py-0.5 text-xs"
                        [class.bg-success]="online()"
                        [class.text-success-content]="online()"
                        [class.bg-base-300]="!online()"
                        online-state
                    >
                        {{ online() ? 'Online' : 'Offline' }}
                    </span>
                }
                @if (device(); as info) {
                    <span class="text-sm opacity-70">{{ info.app }}</span>
                    <span class="text-sm opacity-70">
                        {{ info.version }} ({{ info.build }})
                    </span>
                    <span class="text-sm opacity-70">
                        Loaded {{ info.started_at | date: 'MMM d, h:mm a' }}
                    </span>
                    @if (last_seen(); as seen) {
                        <span class="text-sm opacity-70">
                            Last seen {{ seen | date: 'MMM d, h:mm:ss a' }}
                        </span>
                    }
                    <span class="w-full truncate text-xs opacity-60">
                        {{ info.url }}
                    </span>
                } @else {
                    <span class="text-sm opacity-70">
                        The driver has no details of this device yet. Request
                        logs or send a command to start.
                    </span>
                }
            </section>

            <section
                logs
                class="bg-base-100 border-base-300 flex flex-col rounded-lg border"
            >
                <div class="flex flex-wrap items-center gap-2 px-4 pt-3">
                    <h3 class="flex-1 font-medium">Logs</h3>
                    <mat-form-field
                        appearance="outline"
                        class="w-32"
                        subscriptSizing="dynamic"
                    >
                        <mat-select
                            aria-label="Log level"
                            [ngModel]="level()"
                            (ngModelChange)="setLevel($event)"
                        >
                            @for (option of levels; track option) {
                                <mat-option [value]="option">
                                    {{ option }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    @if (request()) {
                        <button
                            btn
                            matRipple
                            stop-logs
                            type="button"
                            class="inverse"
                            (click)="stopLogs()"
                        >
                            Stop live logs
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            start-logs
                            type="button"
                            (click)="startLogs()"
                        >
                            Start live logs
                        </button>
                    }
                </div>
                <div class="flex flex-wrap items-center gap-2 px-4 py-2">
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            placeholder="Filter logs"
                            aria-label="Filter logs"
                            [ngModel]="filter()"
                            (ngModelChange)="filter.set($event)"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="!can_load_older()"
                        (click)="loadOlder()"
                    >
                        Load older
                    </button>
                    @if (older_than() !== null) {
                        <button
                            btn
                            matRipple
                            newest
                            type="button"
                            class="inverse"
                            (click)="showNewest()"
                        >
                            Newest
                        </button>
                    }
                    <button
                        icon
                        matRipple
                        type="button"
                        aria-label="Download logs"
                        [disabled]="!entries().length"
                        (click)="downloadLogs()"
                    >
                        <icon>download</icon>
                    </button>
                </div>
                <p class="px-4 pb-2 text-xs opacity-60">
                    @if (request(); as active) {
                        Live at the {{ active.level }} level.
                    }
                    Showing {{ shown_entries().length }} of
                    {{ entries().length }} entries, newest first.
                    @if (older_than() !== null) {
                        Older than entry {{ older_than() }}.
                    }
                </p>
                <ol
                    class="border-base-300 max-h-[32rem] overflow-auto border-t font-mono text-xs"
                >
                    @for (entry of shown_entries(); track entry.seq) {
                        <li
                            class="border-base-200 flex gap-2 border-b px-4 py-1"
                        >
                            <span class="shrink-0 opacity-60">
                                {{ entry.timestamp | date: 'HH:mm:ss.SSS' }}
                            </span>
                            <span
                                class="h-fit shrink-0 rounded px-1 uppercase"
                                [class]="level_classes[entry.level]"
                            >
                                {{ entry.level }}
                            </span>
                            <span
                                class="min-w-0 break-words whitespace-pre-wrap"
                            >
                                {{ entry.message }}
                            </span>
                        </li>
                    } @empty {
                        <li class="px-4 py-6 text-center opacity-60">
                            No log entries
                        </li>
                    }
                </ol>
            </section>

            <section
                commands
                class="bg-base-100 border-base-300 flex flex-col gap-3 rounded-lg border p-4"
            >
                <h3 class="font-medium">Commands</h3>
                <div class="flex flex-wrap gap-2">
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('status')"
                    >
                        Status
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('snapshot')"
                    >
                        Snapshot
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('animation', { format: 'webp' })"
                    >
                        Animation (WebP)
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('animation', { format: 'gif' })"
                    >
                        Animation (GIF)
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('storage')"
                    >
                        Storage keys
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="reload('reload')"
                    >
                        Reload app
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="reload('clear_cache')"
                    >
                        Clear cache and reload
                    </button>
                </div>
                <form
                    class="flex flex-wrap items-center gap-2"
                    (ngSubmit)="sendSettings()"
                >
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            name="keys"
                            placeholder="Settings keys, such as app.title, app.features"
                            aria-label="Settings keys"
                            [(ngModel)]="settings_keys"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="submit"
                        [disabled]="!settings_keys.trim()"
                    >
                        Get settings
                    </button>
                </form>
                <form
                    class="flex flex-wrap items-center gap-2"
                    (ngSubmit)="sendNavigate()"
                >
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            name="path"
                            placeholder="App route, such as /bootstrap"
                            aria-label="App route"
                            [(ngModel)]="navigate_path"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="submit"
                        [disabled]="!navigate_path.startsWith('/')"
                    >
                        Open route
                    </button>
                </form>
                @if (pending().length) {
                    <p class="text-sm opacity-70" pending>
                        Waiting for the device:
                        @for (command of pending(); track command.id) {
                            <span class="bg-base-200 ml-1 rounded px-2 py-0.5">
                                {{ command.type }}
                            </span>
                        }
                    </p>
                }
            </section>

            <section
                results
                class="bg-base-100 border-base-300 flex flex-col rounded-lg border"
            >
                <h3 class="px-4 pt-3 pb-2 font-medium">Results</h3>
                <ol class="flex flex-col">
                    @for (item of shown_results(); track item.id) {
                        <li
                            class="border-base-200 flex flex-col gap-2 border-t px-4 py-3"
                        >
                            <div class="flex items-center gap-2">
                                <icon
                                    class="text-xl"
                                    [class.text-success]="item.result.ok"
                                    [class.text-error]="!item.result.ok"
                                >
                                    {{
                                        item.result.ok
                                            ? 'check_circle'
                                            : 'error'
                                    }}
                                </icon>
                                <span class="font-medium">{{ item.type }}</span>
                                <span class="text-sm opacity-60">
                                    {{
                                        item.received_at
                                            | date: 'MMM d, h:mm:ss a'
                                    }}
                                </span>
                            </div>
                            @if (!item.result.ok) {
                                <pre
                                    class="text-error max-h-48 overflow-auto text-xs whitespace-pre-wrap"
                                    >{{ item.result.error }}</pre
                                >
                            } @else if (media(item); as file) {
                                <p class="text-sm opacity-70">
                                    {{ file.width }} x {{ file.height }},
                                    {{ file.frames }}
                                    {{
                                        file.frames === 1 ? 'frame' : 'frames'
                                    }},
                                    {{ file.bytes / 1024 | number: '1.0-0' }}
                                    KB,
                                    {{ file.mime }}
                                </p>
                                <img
                                    auth
                                    class="border-base-300 max-h-[32rem] w-fit max-w-full rounded border object-contain"
                                    [source]="mediaUrl(file)"
                                    [alt]="item.type + ' of ' + device_id()"
                                />
                            } @else {
                                <pre
                                    class="bg-base-200 max-h-64 overflow-auto rounded p-2 text-xs"
                                    >{{ item.result.data | json }}</pre
                                >
                            }
                        </li>
                    } @empty {
                        <li class="px-4 pb-6 text-center opacity-60">
                            No results yet
                        </li>
                    }
                </ol>
            </section>
        </div>
    `,
      imports: [
        DatePipe,
        DecimalPipe,
        JsonPipe,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        AuthenticatedImageDirective,
        IconComponent
      ]
    }]
  }], () => [], { device_id: [{ type: Input, args: [{ isSignal: true, alias: "device_id", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteDebugPanelComponent, { className: "RemoteDebugPanelComponent", filePath: "libs/components/src/lib/remote-debug-panel.component.ts", lineNumber: 458 });
})();

// apps/signage-manager/src/app/displays/display-admin.component.ts
function DisplayAdminComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function DisplayAdminComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, " Remote debugging is off. Add a system with the RemoteDebug driver to the ");
    \u0275\u0275elementStart(2, "code");
    \u0275\u0275text(3, "remote_debug");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " binding of the organisation zone. ");
    \u0275\u0275elementEnd();
  }
}
function DisplayAdminComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 4);
    \u0275\u0275text(2, " The zone bindings could not be read. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function DisplayAdminComponent_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(4, " Try again ");
    \u0275\u0275elementEnd()();
  }
}
function DisplayAdminComponent_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function DisplayAdminComponent_Conditional_4_For_4_Template_button_click_0_listener() {
      const id_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pick(id_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary", id_r5 === ctx_r1.selected())("text-secondary-content", id_r5 === ctx_r1.selected());
    \u0275\u0275attribute("aria-pressed", id_r5 === ctx_r1.selected());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", id_r5, " ");
  }
}
function DisplayAdminComponent_Conditional_4_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, " No device is known to show this display. ");
    \u0275\u0275elementEnd();
  }
}
function DisplayAdminComponent_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "remote-debug-panel", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("device_id", ctx_r1.selected());
  }
}
function DisplayAdminComponent_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 17);
    \u0275\u0275text(2, "bug_report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select or enter a device to debug.");
    \u0275\u0275elementEnd()();
  }
}
function DisplayAdminComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "Devices:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DisplayAdminComponent_Conditional_4_For_4_Template, 2, 6, "button", 8, \u0275\u0275repeaterTrackByIdentity, false, DisplayAdminComponent_Conditional_4_ForEmpty_5_Template, 2, 0, "span", 9);
    \u0275\u0275elementStart(6, "form", 10);
    \u0275\u0275listener("ngSubmit", function DisplayAdminComponent_Conditional_4_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTyped());
    });
    \u0275\u0275elementStart(7, "mat-form-field", 11)(8, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function DisplayAdminComponent_Conditional_4_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.typed_id, $event) || (ctx_r1.typed_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 13);
    \u0275\u0275text(10, " Open ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, DisplayAdminComponent_Conditional_4_Conditional_11_Template, 1, 1, "remote-debug-panel", 14)(12, DisplayAdminComponent_Conditional_4_Conditional_12_Template, 5, 0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.device_ids());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.typed_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.typed_id.trim());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected() ? 11 : 12);
  }
}
var MAX_DEVICES = 20;
function displayDeviceIds(display_id, debug_devices, setup_devices) {
  const route = `#/signage/${encodeURIComponent(display_id)}`;
  const ids = /* @__PURE__ */ new Map();
  for (const device of setup_devices) {
    if (device.app === "signage" && device.config?.system_id === display_id) {
      ids.set(device.id, device.last_seen);
    }
  }
  for (const device of debug_devices) {
    const index = device.url.indexOf(route);
    const next = device.url.charAt(index + route.length);
    if (index >= 0 && (next === "" || next === "?" || next === "/")) {
      ids.set(device.id, Math.max(ids.get(device.id) ?? 0, device.last_seen));
    }
  }
  return Array.from(ids.entries()).sort((a, b) => b[1] - a[1]).slice(0, MAX_DEVICES).map(([id]) => id);
}
var DisplayAdminComponent = class _DisplayAdminComponent extends AsyncHandler {
  constructor() {
    super();
    this._view = inject(RemoteDebugViewService);
    this._setup_devices = signal(
      [],
      ...ngDevMode ? [{ debugName: "_setup_devices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_id = input.required(
      ...ngDevMode ? [{ debugName: "display_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.state = this._view.state;
    this.device_ids = computed(
      () => displayDeviceIds(this.display_id(), this._view.devices(), this._setup_devices()),
      ...ngDevMode ? [{ debugName: "device_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._picked = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_picked" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.display_id,
      computation: () => ""
    }));
    this.selected = computed(
      () => this._picked() || this.device_ids()[0] || "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.typed_id = "";
    const setup = remoteSetupModule();
    if (setup) {
      this.subscription("setup_devices", setup.variable("devices").bindThenSubscribe((value) => this._setup_devices.set(value && typeof value === "object" ? Object.values(value) : [])));
    }
  }
  pick(device_id) {
    this._picked.set(device_id);
  }
  openTyped() {
    const id = this.typed_id.trim();
    if (!id)
      return;
    this.pick(id);
    this.typed_id = "";
  }
  retry() {
    void this._view.load();
  }
  static {
    this.\u0275fac = function DisplayAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayAdminComponent, selectors: [["display-admin"]], inputs: { display_id: [1, "display_id"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [[1, "flex", "flex-col", "gap-3", "p-3"], ["role", "status", 1, "opacity-70"], ["missing", "", 1, "opacity-70"], [1, "flex", "items-center", "gap-4"], [1, "opacity-70"], ["btn", "", "matRipple", "", "type", "button", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-70"], ["matRipple", "", "type", "button", 1, "border-base-300", "rounded-full", "border", "px-3", "py-1", "font-mono", "text-sm", 3, "bg-secondary", "text-secondary-content"], ["no-devices", "", 1, "text-sm", "opacity-70"], [1, "ml-auto", "flex", "items-center", "gap-2", 3, "ngSubmit"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "name", "device", "placeholder", "Other device ID", "aria-label", "Other device ID", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", "type", "submit", 3, "disabled"], [3, "device_id"], [1, "flex", "flex-col", "items-center", "gap-2", "p-8", "opacity-70"], ["matRipple", "", "type", "button", 1, "border-base-300", "rounded-full", "border", "px-3", "py-1", "font-mono", "text-sm", 3, "click"], [1, "text-5xl"]], template: function DisplayAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, DisplayAdminComponent_Conditional_1_Template, 2, 0, "p", 1)(2, DisplayAdminComponent_Conditional_2_Template, 5, 0, "p", 2)(3, DisplayAdminComponent_Conditional_3_Template, 5, 0, "div", 3)(4, DisplayAdminComponent_Conditional_4_Template, 13, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.state() === "loading" ? 1 : ctx.state() === "missing" ? 2 : ctx.state() === "failed" ? 3 : 4);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      IconComponent,
      RemoteDebugPanelComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayAdminComponent, [{
    type: Component,
    args: [{
      selector: "display-admin",
      template: `
        <div class="flex flex-col gap-3 p-3">
            @if (state() === 'loading') {
                <p class="opacity-70" role="status">Loading\u2026</p>
            } @else if (state() === 'missing') {
                <p class="opacity-70" missing>
                    Remote debugging is off. Add a system with the RemoteDebug
                    driver to the <code>remote_debug</code> binding of the
                    organisation zone.
                </p>
            } @else if (state() === 'failed') {
                <div class="flex items-center gap-4">
                    <p class="opacity-70">
                        The zone bindings could not be read.
                    </p>
                    <button btn matRipple type="button" (click)="retry()">
                        Try again
                    </button>
                </div>
            } @else {
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-sm opacity-70">Devices:</span>
                    @for (id of device_ids(); track id) {
                        <button
                            matRipple
                            type="button"
                            class="border-base-300 rounded-full border px-3 py-1 font-mono text-sm"
                            [class.bg-secondary]="id === selected()"
                            [class.text-secondary-content]="id === selected()"
                            [attr.aria-pressed]="id === selected()"
                            (click)="pick(id)"
                        >
                            {{ id }}
                        </button>
                    } @empty {
                        <span class="text-sm opacity-70" no-devices>
                            No device is known to show this display.
                        </span>
                    }
                    <form
                        class="ml-auto flex items-center gap-2"
                        (ngSubmit)="openTyped()"
                    >
                        <mat-form-field
                            appearance="outline"
                            subscriptSizing="dynamic"
                        >
                            <input
                                matInput
                                name="device"
                                placeholder="Other device ID"
                                aria-label="Other device ID"
                                [(ngModel)]="typed_id"
                            />
                        </mat-form-field>
                        <button
                            btn
                            matRipple
                            type="submit"
                            [disabled]="!typed_id.trim()"
                        >
                            Open
                        </button>
                    </form>
                </div>
                @if (selected()) {
                    <remote-debug-panel [device_id]="selected()" />
                } @else {
                    <div
                        class="flex flex-col items-center gap-2 p-8 opacity-70"
                    >
                        <icon class="text-5xl">bug_report</icon>
                        <p>Select or enter a device to debug.</p>
                    </div>
                }
            }
        </div>
    `,
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        IconComponent,
        RemoteDebugPanelComponent
      ]
    }]
  }], () => [], { display_id: [{ type: Input, args: [{ isSignal: true, alias: "display_id", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayAdminComponent, { className: "DisplayAdminComponent", filePath: "apps/signage-manager/src/app/displays/display-admin.component.ts", lineNumber: 159 });
})();

// apps/signage-manager/src/app/displays/display-schedule.util.ts
function buildDisplayScheduleDays(playlists, mappings, days) {
  const templates = mappings.flatMap((mapping) => buildScheduleBlocks([
    {
      playlist: new br({
        id: mapping.id,
        name: mapping.template_details.name || mapping.template_id,
        schedules: mapping.schedule ? [mapping.schedule] : []
      })
    }
  ], days).map((block) => __spreadProps(__spreadValues({}, block), {
    mapping,
    children: []
  })));
  return days.map((day, day_index) => {
    const parents = templates.filter((block) => block.day_index === day_index);
    const standalone = [];
    for (const playlist of playlists.filter((block) => block.day_index === day_index)) {
      let remaining = [playlist];
      for (const parent of parents) {
        const start = Math.max(playlist.start_minutes, parent.start_minutes);
        const end = Math.min(blockEnd(playlist), blockEnd(parent));
        if (start >= end)
          continue;
        parent.children.push(sliceBlock(playlist, start, end, day));
        remaining = remaining.flatMap((block) => {
          const overlap_start = Math.max(block.start_minutes, start);
          const overlap_end = Math.min(blockEnd(block), end);
          if (overlap_start >= overlap_end)
            return [block];
          const parts = [];
          if (block.start_minutes < overlap_start) {
            parts.push(sliceBlock(block, block.start_minutes, overlap_start, day));
          }
          if (overlap_end < blockEnd(block)) {
            parts.push(sliceBlock(block, overlap_end, blockEnd(block), day));
          }
          return parts;
        });
      }
      standalone.push(...remaining.map((block) => __spreadProps(__spreadValues({}, block), { children: [] })));
    }
    const items = [...parents, ...standalone].sort(sortBlocks);
    for (const parent of parents)
      parent.children.sort(sortBlocks);
    return {
      items,
      all_day: items.filter((block) => block.all_day),
      timed: items.filter((block) => !block.all_day)
    };
  });
}
function blockEnd(block) {
  return Math.min(MINUTES_PER_DAY, block.start_minutes + block.duration_minutes);
}
function sliceBlock(block, start, end, day) {
  if (start === block.start_minutes && end === blockEnd(block))
    return block;
  const midnight = startOfDay(day);
  return __spreadProps(__spreadValues({}, block), {
    start_minutes: start,
    duration_minutes: end - start,
    all_day: start === 0 && end === MINUTES_PER_DAY,
    label: `${format(addMinutes(midnight, start), "HH:mm")} \u2013 ${format(addMinutes(midnight, end), "HH:mm")}`
  });
}
function sortBlocks(left, right) {
  return Number(right.all_day) - Number(left.all_day) || left.start_minutes - right.start_minutes || left.playlist.name.localeCompare(right.playlist.name);
}

// apps/signage-manager/src/app/displays/display-schedule.component.ts
var _c0 = (a0) => ["/templates", a0];
var _c1 = (a0) => ["/playlists", a0];
function DisplayScheduleComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function DisplayScheduleComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR"), " ");
  }
}
function DisplayScheduleComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 8);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_SCHEDULE_CONTENT"), " ");
  }
}
function DisplayScheduleComponent_Conditional_22_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function DisplayScheduleComponent_Conditional_22_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DisplayScheduleComponent_Conditional_22_For_3_Conditional_7_Template, 1, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today-column", ctx_r2.isToday(day_r1));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.isToday(day_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 11, day_r1, "EEE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.isToday(day_r1))("font-semibold", ctx_r2.isToday(day_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 14, day_r1, "MMM d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional($index_r2 !== 0 ? 7 : -1);
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), ")");
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.DEFAULT_TEMPLATE"), " ");
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_11_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), ")");
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 30)(2, "icon", 23);
    \u0275\u0275text(3, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_11_For_2_Conditional_7_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, child_r4.playlist.id))("matTooltip", ctx_r2.block_tooltip(child_r4));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", child_r4.text_color);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("line-through", !child_r4.playlist.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r4.playlist.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!child_r4.playlist.enabled ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r4.label, " ");
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 29);
    \u0275\u0275repeaterCreate(1, DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_11_For_2_Template, 10, 11, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(block_r5.children);
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20)(1, "a", 22)(2, "icon", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_7_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_10_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, DisplayScheduleComponent_Conditional_22_For_6_For_4_Conditional_11_Template, 3, 0, "ul", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", block_r5.mapping ? \u0275\u0275pureFunction1(12, _c0, block_r5.mapping.template_id) : \u0275\u0275pureFunction1(14, _c1, block_r5.playlist.id))("matTooltip", ctx_r2.block_tooltip(block_r5));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", block_r5.text_color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r5.mapping ? "dashboard" : "playlist_play", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", !block_r5.playlist.enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r5.playlist.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!block_r5.playlist.enabled ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", block_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r5.mapping && !block_r5.mapping.schedule ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r5.children.length ? 11 : -1);
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 33);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_SCHEDULE_CONTENT"), " ");
  }
}
function DisplayScheduleComponent_Conditional_22_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275elementStart(2, "ul", 19);
    \u0275\u0275repeaterCreate(3, DisplayScheduleComponent_Conditional_22_For_6_For_4_Template, 12, 16, "li", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DisplayScheduleComponent_Conditional_22_For_6_Conditional_5_Template, 6, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const \u0275$index_70_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today-column", ctx_r2.isToday(day_r6));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 5, day_r6, "EEEE MMM d"))("aria-current", ctx_r2.isToday(day_r6) ? "date" : null);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.day_blocks()[\u0275$index_70_r7].items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.day_blocks()[\u0275$index_70_r7].all_day.length && !ctx_r2.day_blocks()[\u0275$index_70_r7].timed.length ? 5 : -1);
  }
}
function DisplayScheduleComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10);
    \u0275\u0275repeaterCreate(2, DisplayScheduleComponent_Conditional_22_For_3_Template, 8, 17, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275repeaterCreate(5, DisplayScheduleComponent_Conditional_22_For_6_Template, 6, 8, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.days().length * 12 + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.days().length * 12 + "rem");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.days());
  }
}
var DisplayScheduleComponent = class _DisplayScheduleComponent {
  constructor() {
    this._display_service = inject(SignageDisplayService);
    this._playlist_service = inject(SignagePlaylistService);
    this.selected_display = this._display_service.selected_display;
    this._zones = this._display_service.selected_display_zones;
    this.week_offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "week_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_start = computed(
      () => {
        const base = startOfWeek(/* @__PURE__ */ new Date(), { weekStartsOn: 1 });
        return addDays(base, this.week_offset() * 7);
      },
      ...ngDevMode ? [{ debugName: "week_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.days = computed(
      () => Array.from({ length: DAY_COUNT }, (_, i) => addDays(this.week_start(), i)),
      ...ngDevMode ? [{ debugName: "days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_assignments = computed(
      () => {
        const display = this.selected_display();
        if (!display)
          return [];
        const zones = this._zones();
        const playlists = this._playlist_service.playlistsById([
          ...display.playlists || [],
          ...zones.flatMap(({ playlists: playlists2 }) => playlists2 || [])
        ]);
        return buildDisplayScheduleAssignments(display, zones, playlists);
      },
      ...ngDevMode ? [{ debugName: "display_assignments" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schedule_entries = computed(
      () => {
        const days = this.days();
        return buildScheduleBlocks(this.display_assignments(), days);
      },
      ...ngDevMode ? [{ debugName: "schedule_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_loading = this._display_service.selected_display_template_mappings_loading;
    this.templates_error = this._display_service.selected_display_template_mappings_error;
    this.template_mappings = this._display_service.selected_display_template_mappings;
    this.day_blocks = computed(
      () => buildDisplayScheduleDays(this.schedule_entries(), this.template_mappings(), this.days()),
      ...ngDevMode ? [{ debugName: "day_blocks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekLabel = computed(
      () => {
        const start = this.week_start();
        const end = addDays(start, 6);
        if (start.getFullYear() !== end.getFullYear()) {
          return `${format(start, "MMM d, yyyy")} \u2013 ${format(end, "MMM d, yyyy")}`;
        }
        if (start.getMonth() !== end.getMonth()) {
          return `${format(start, "MMM d")} \u2013 ${format(end, "MMM d, yyyy")}`;
        }
        return `${format(start, "MMM d")} \u2013 ${format(end, "d, yyyy")}`;
      },
      ...ngDevMode ? [{ debugName: "weekLabel" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  isToday(day) {
    return isSameDay(day, /* @__PURE__ */ new Date());
  }
  block_tooltip(block) {
    return `${block.playlist.name} \xB7 ${block.label}`;
  }
  previousWeek() {
    this.week_offset.update((v) => v - 1);
  }
  nextWeek() {
    this.week_offset.update((v) => v + 1);
  }
  goToToday() {
    this.week_offset.set(0);
  }
  static {
    this.\u0275fac = function DisplayScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayScheduleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayScheduleComponent, selectors: [["display-schedule"]], decls: 23, vars: 20, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "border-base-200", "flex", "items-center", "justify-center", "gap-0.5", "border-b", "px-3", "py-2"], ["icon", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["aria-live", "polite", 1, "ml-1.5", "text-sm", "font-medium"], ["role", "status", 1, "flex", "flex-1", "items-center", "justify-center", "p-8"], ["role", "alert", 1, "text-error", "p-8", "text-center"], [1, "text-base-content/40", "flex", "flex-1", "flex-col", "items-center", "justify-center", "gap-3"], ["timeline", "", 1, "z-0", "grid", "min-h-0", "flex-1", "overflow-auto"], [1, "text-4xl"], [1, "text-sm"], ["day-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-w-[calc(100%-5rem)]", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "py-2", "leading-tight", 3, "today-column"], ["date-blocks", "", 1, "relative", "flex", "min-w-[calc(100%-5rem)]"], ["role", "group", 1, "border-base-content/[0.06]", "min-w-48", "flex-1", "border-r", "p-2", "last:border-none", 3, "today-column"], [1, "relative", "flex", "h-full", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "py-2", "leading-tight"], [1, "text-base-content/45", "text-[10px]", "font-medium", "tracking-wide", "uppercase"], [1, "truncate", "text-sm"], [1, "bg-base-content/10", "absolute", "top-0", "-left-px", "h-2", "w-px"], ["role", "group", 1, "border-base-content/[0.06]", "min-w-48", "flex-1", "border-r", "p-2", "last:border-none"], [1, "space-y-2"], [1, "border-base-content/10", "rounded-md", "border"], [1, "border-base-content/10", "text-base-content/25", "flex", "min-h-20", "flex-col", "items-center", "justify-center", "gap-1", "rounded-md", "border", "border-dashed"], [1, "hover:bg-base-content/[0.04]", "flex", "items-start", "gap-2", "rounded-md", "px-2", "py-1.5", "no-underline", 3, "routerLink", "matTooltip"], [1, "mt-0.5", "shrink-0", "text-sm"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-[13px]", "font-medium"], [1, "sr-only"], [1, "text-base-content/60", "text-[11px]", "tabular-nums"], [1, "text-primary", "text-[11px]"], [1, "border-base-content/10", "mb-2", "ml-4", "space-y-1", "border-l", "pr-1", "pl-2"], [1, "hover:bg-base-content/[0.04]", "flex", "gap-2", "rounded-md", "px-2", "py-1", "no-underline", 3, "routerLink", "matTooltip"], [1, "min-w-0"], [1, "truncate", "text-[13px]"], [1, "text-base"], [1, "text-[11px]"]], template: function DisplayScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275listener("click", function DisplayScheduleComponent_Template_button_click_2_listener() {
          return ctx.previousWeek();
        });
        \u0275\u0275elementStart(5, "icon");
        \u0275\u0275text(6, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("click", function DisplayScheduleComponent_Template_button_click_7_listener() {
          return ctx.goToToday();
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span", 3);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 2);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("click", function DisplayScheduleComponent_Template_button_click_14_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275elementStart(17, "icon");
        \u0275\u0275text(18, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(19, DisplayScheduleComponent_Conditional_19_Template, 3, 3, "div", 4)(20, DisplayScheduleComponent_Conditional_20_Template, 3, 3, "div", 5)(21, DisplayScheduleComponent_Conditional_21_Template, 6, 3, "div", 6)(22, DisplayScheduleComponent_Conditional_22_Template, 7, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 8, "COMMON.PREVIOUS_WEEK"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 10, "SIGNAGE_MANAGER.PREV_WEEK_ARIA"));
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 12, "COMMON.WEEK_THIS"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 14, "SIGNAGE_MANAGER.THIS_WEEK_ARIA"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.weekLabel(), " ");
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 16, "COMMON.NEXT_WEEK"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 18, "SIGNAGE_MANAGER.NEXT_WEEK_ARIA"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.templates_loading() ? 19 : ctx.templates_error() ? 20 : !ctx.schedule_entries().length && !ctx.template_mappings().length ? 21 : 22);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 5rem;\n  grid-template-rows: 3.5rem;\n}\n.today-column[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--%NS%info) 4%, transparent);\n}\n/*# sourceMappingURL=display-schedule.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayScheduleComponent, [{
    type: Component,
    args: [{ selector: "display-schedule", template: `
        <div class="flex h-full flex-col overflow-hidden">
            <div
                class="border-base-200 flex items-center justify-center gap-0.5 border-b px-3 py-2"
            >
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'COMMON.PREVIOUS_WEEK' | translate"
                    (click)="previousWeek()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PREV_WEEK_ARIA' | translate
                    "
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'COMMON.WEEK_THIS' | translate"
                    (click)="goToToday()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.THIS_WEEK_ARIA' | translate
                    "
                >
                    <icon>today</icon>
                </button>
                <span class="ml-1.5 text-sm font-medium" aria-live="polite">
                    {{ weekLabel() }}
                </span>
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'COMMON.NEXT_WEEK' | translate"
                    (click)="nextWeek()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.NEXT_WEEK_ARIA' | translate
                    "
                >
                    <icon>chevron_right</icon>
                </button>
            </div>

            @if (templates_loading()) {
                <div
                    class="flex flex-1 items-center justify-center p-8"
                    role="status"
                >
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            } @else if (templates_error()) {
                <div class="text-error p-8 text-center" role="alert">
                    {{
                        'SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR'
                            | translate
                    }}
                </div>
            } @else if (
                !schedule_entries().length && !template_mappings().length
            ) {
                <div
                    class="text-base-content/40 flex flex-1 flex-col items-center justify-center gap-3"
                >
                    <icon class="text-4xl">event_busy</icon>
                    <p class="text-sm">
                        {{ 'SIGNAGE_MANAGER.NO_SCHEDULE_CONTENT' | translate }}
                    </p>
                </div>
            } @else {
                <div timeline class="z-0 grid min-h-0 flex-1 overflow-auto">
                    <div
                        day-headers
                        class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-[calc(100%-5rem)] items-center border-b"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (day of days(); track day) {
                            <div
                                class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center py-2 leading-tight"
                                [class.today-column]="isToday(day)"
                            >
                                <div
                                    class="text-base-content/45 text-[10px] font-medium tracking-wide uppercase"
                                    [class.text-info]="isToday(day)"
                                >
                                    {{ day | date: 'EEE' }}
                                </div>
                                <div
                                    class="truncate text-sm"
                                    [class.text-info]="isToday(day)"
                                    [class.font-semibold]="isToday(day)"
                                >
                                    {{ day | date: 'MMM d' }}
                                </div>
                                @if ($index !== 0) {
                                    <div
                                        class="bg-base-content/10 absolute top-0 -left-px h-2 w-px"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                    <div
                        date-blocks
                        class="relative flex min-w-[calc(100%-5rem)]"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (
                            day of days();
                            track day;
                            let day_index = $index
                        ) {
                            <div
                                class="border-base-content/[0.06] min-w-48 flex-1 border-r p-2 last:border-none"
                                [class.today-column]="isToday(day)"
                                role="group"
                                [attr.aria-label]="day | date: 'EEEE MMM d'"
                                [attr.aria-current]="
                                    isToday(day) ? 'date' : null
                                "
                            >
                                <ul class="space-y-2">
                                    @for (
                                        block of day_blocks()[day_index].items;
                                        track block
                                    ) {
                                        <li
                                            class="border-base-content/10 rounded-md border"
                                        >
                                            <a
                                                [routerLink]="
                                                    block.mapping
                                                        ? [
                                                              '/templates',
                                                              block.mapping
                                                                  .template_id,
                                                          ]
                                                        : [
                                                              '/playlists',
                                                              block.playlist.id,
                                                          ]
                                                "
                                                class="hover:bg-base-content/[0.04] flex items-start gap-2 rounded-md px-2 py-1.5 no-underline"
                                                [matTooltip]="
                                                    block_tooltip(block)
                                                "
                                            >
                                                <icon
                                                    class="mt-0.5 shrink-0 text-sm"
                                                    [style.color]="
                                                        block.text_color
                                                    "
                                                >
                                                    {{
                                                        block.mapping
                                                            ? 'dashboard'
                                                            : 'playlist_play'
                                                    }}
                                                </icon>
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-[13px] font-medium"
                                                        [class.line-through]="
                                                            !block.playlist
                                                                .enabled
                                                        "
                                                    >
                                                        {{
                                                            block.playlist.name
                                                        }}
                                                        @if (
                                                            !block.playlist
                                                                .enabled
                                                        ) {
                                                            <span
                                                                class="sr-only"
                                                                >({{
                                                                    'COMMON.DISABLED'
                                                                        | translate
                                                                }})</span
                                                            >
                                                        }
                                                    </div>
                                                    <div
                                                        class="text-base-content/60 text-[11px] tabular-nums"
                                                    >
                                                        {{ block.label }}
                                                    </div>
                                                    @if (
                                                        block.mapping &&
                                                        !block.mapping.schedule
                                                    ) {
                                                        <div
                                                            class="text-primary text-[11px]"
                                                        >
                                                            {{
                                                                'SIGNAGE_MANAGER.DEFAULT_TEMPLATE'
                                                                    | translate
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (block.children.length) {
                                                <ul
                                                    class="border-base-content/10 mb-2 ml-4 space-y-1 border-l pr-1 pl-2"
                                                >
                                                    @for (
                                                        child of block.children;
                                                        track child
                                                    ) {
                                                        <li>
                                                            <a
                                                                [routerLink]="[
                                                                    '/playlists',
                                                                    child
                                                                        .playlist
                                                                        .id,
                                                                ]"
                                                                class="hover:bg-base-content/[0.04] flex gap-2 rounded-md px-2 py-1 no-underline"
                                                                [matTooltip]="
                                                                    block_tooltip(
                                                                        child
                                                                    )
                                                                "
                                                            >
                                                                <icon
                                                                    class="mt-0.5 shrink-0 text-sm"
                                                                    [style.color]="
                                                                        child.text_color
                                                                    "
                                                                    >playlist_play</icon
                                                                >
                                                                <div
                                                                    class="min-w-0"
                                                                >
                                                                    <div
                                                                        class="truncate text-[13px]"
                                                                        [class.line-through]="
                                                                            !child
                                                                                .playlist
                                                                                .enabled
                                                                        "
                                                                    >
                                                                        {{
                                                                            child
                                                                                .playlist
                                                                                .name
                                                                        }}
                                                                        @if (
                                                                            !child
                                                                                .playlist
                                                                                .enabled
                                                                        ) {
                                                                            <span
                                                                                class="sr-only"
                                                                                >({{
                                                                                    'COMMON.DISABLED'
                                                                                        | translate
                                                                                }})</span
                                                                            >
                                                                        }
                                                                    </div>
                                                                    <div
                                                                        class="text-base-content/60 text-[11px] tabular-nums"
                                                                    >
                                                                        {{
                                                                            child.label
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    }
                                </ul>
                                @if (
                                    !day_blocks()[day_index].all_day.length &&
                                    !day_blocks()[day_index].timed.length
                                ) {
                                    <div
                                        class="border-base-content/10 text-base-content/25 flex min-h-20 flex-col items-center justify-center gap-1 rounded-md border border-dashed"
                                    >
                                        <icon class="text-base"
                                            >event_busy</icon
                                        >
                                        <span class="text-[11px]">
                                            {{
                                                'SIGNAGE_MANAGER.NO_SCHEDULE_CONTENT'
                                                    | translate
                                            }}
                                        </span>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `, imports: [
      DatePipe,
      MatRippleModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;6515e1f60dc646bcef03aea7e4c5d4f9043f829bbffa433d83cbb01f4c0bbb81;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/display-schedule.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[timeline] {\n  grid-template-columns: 5rem;\n  grid-template-rows: 3.5rem;\n}\n.today-column {\n  background-color: color-mix(in srgb, var(--info) 4%, transparent);\n}\n/*# sourceMappingURL=display-schedule.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayScheduleComponent, { className: "DisplayScheduleComponent", filePath: "apps/signage-manager/src/app/displays/display-schedule.component.ts", lineNumber: 357 });
})();

// apps/signage-manager/src/app/displays/display-content.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c12 = (a0) => ["/zones", a0];
var _forTrack02 = ($index, $item) => $item.id;
function DisplayContentComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "display-schedule");
    \u0275\u0275elementEnd();
  }
}
function DisplayContentComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "template-mappings", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("target_id", ctx_r0.selected_display().id);
  }
}
function DisplayContentComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "assigned-playlists-panel", 9);
    \u0275\u0275listener("add", function DisplayContentComponent_Conditional_0_Conditional_4_Template_assigned_playlists_panel_add_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addPlaylist());
    })("remove", function DisplayContentComponent_Conditional_0_Conditional_4_Template_assigned_playlists_panel_remove_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removePlaylist($event));
    })("retry", function DisplayContentComponent_Conditional_0_Conditional_4_Template_assigned_playlists_panel_retry_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reloadPlaylists());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("playlists", ctx_r0.display_playlists())("loading", ctx_r0.has_assigned_playlists() && ctx_r0.playlists_loading())("error", ctx_r0.has_assigned_playlists() && ctx_r0.playlists_error())("can_update", ctx_r0.can_update());
  }
}
function DisplayContentComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "display-admin", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("display_id", ctx_r0.selected_display().id);
  }
}
function DisplayContentComponent_Conditional_0_Conditional_6_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "linked-item-row", 17);
  }
  if (rf & 2) {
    const zone_r3 = ctx.$implicit;
    \u0275\u0275property("link", \u0275\u0275pureFunction1(3, _c12, zone_r3.id))("name", zone_r3.display_name || zone_r3.name)("description", zone_r3.description);
  }
}
function DisplayContentComponent_Conditional_0_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DisplayContentComponent_Conditional_0_Conditional_6_Conditional_8_For_1_Template, 1, 5, "linked-item-row", 17, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.display_zones());
  }
}
function DisplayContentComponent_Conditional_0_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 18);
    \u0275\u0275listener("retry", function DisplayContentComponent_Conditional_0_Conditional_6_Conditional_10_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.reloadZones());
    });
    \u0275\u0275elementEnd();
  }
}
function DisplayContentComponent_Conditional_0_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 19);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.DISPLAY_NO_ZONES"), " ");
  }
}
function DisplayContentComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11)(2, "h5", 12)(3, "icon", 13);
    \u0275\u0275text(4, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275conditionalCreate(8, DisplayContentComponent_Conditional_0_Conditional_6_Conditional_8_Template, 2, 0)(9, DisplayContentComponent_Conditional_0_Conditional_6_Conditional_9_Template, 3, 3, "div", 15)(10, DisplayContentComponent_Conditional_0_Conditional_6_Conditional_10_Template, 1, 0, "load-error")(11, DisplayContentComponent_Conditional_0_Conditional_6_Conditional_11_Template, 6, 3, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(6, 2, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(6, _c02, ctx_r0.display_zones().length), ctx_r0.display_zones().length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.display_zones().length > 0 ? 8 : ctx_r0.display_zones_loading() ? 9 : ctx_r0.display_zones_error() ? 10 : 11);
  }
}
function DisplayContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, DisplayContentComponent_Conditional_0_Conditional_2_Template, 2, 0, "div", 3);
    \u0275\u0275conditionalCreate(3, DisplayContentComponent_Conditional_0_Conditional_3_Template, 2, 1, "div", 4);
    \u0275\u0275conditionalCreate(4, DisplayContentComponent_Conditional_0_Conditional_4_Template, 2, 4, "div", 5);
    \u0275\u0275conditionalCreate(5, DisplayContentComponent_Conditional_0_Conditional_5_Template, 2, 1, "div", 6);
    \u0275\u0275conditionalCreate(6, DisplayContentComponent_Conditional_0_Conditional_6_Template, 12, 8, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeTab() === "schedule" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "templates" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "playlists" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "admin" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "zones" ? 6 : -1);
  }
}
function DisplayContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 21);
    \u0275\u0275text(2, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.DISPLAY_SELECT_DETAILS"), " ");
  }
}
var DisplayContentComponent = class _DisplayContentComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._display_service = inject(SignageDisplayService);
    this._playlist_service = inject(SignagePlaylistService);
    this.activeTab = input(
      "schedule",
      ...ngDevMode ? [{ debugName: "activeTab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_display = this._display_service.selected_display;
    this.can_update = this._context.can_update;
    this.display_playlists = computed(
      () => this._playlist_service.playlistsById(this.selected_display()?.playlists || []),
      ...ngDevMode ? [{ debugName: "display_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists_loading = this._playlist_service.playlists_loading;
    this.playlists_error = this._playlist_service.playlists_error;
    this.has_assigned_playlists = computed(
      () => !!this.selected_display()?.playlists?.length,
      ...ngDevMode ? [{ debugName: "has_assigned_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_zones = this._display_service.selected_display_zones;
    this.display_zones_loading = this._display_service.selected_display_zones_loading;
    this.display_zones_error = this._display_service.selected_display_zones_error;
  }
  reloadPlaylists() {
    this._playlist_service.reloadPlaylists();
  }
  reloadZones() {
    this._display_service.reloadSelectedDisplayZones();
  }
  addPlaylist() {
    const display = this.selected_display();
    if (display)
      this._display_service.addPlaylistToDisplay(display);
  }
  removePlaylist(playlist_id) {
    const display = this.selected_display();
    if (display)
      this._display_service.removePlaylistFromDisplay(display, playlist_id);
  }
  static {
    this.\u0275fac = function DisplayContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayContentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayContentComponent, selectors: [["display-content"]], inputs: { activeTab: [1, "activeTab"] }, decls: 2, vars: 1, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-3", "p-3"], ["id", "display-schedule-panel", "role", "tabpanel", "aria-labelledby", "display-schedule-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-hidden", "rounded-lg", "border"], ["id", "display-templates-panel", "role", "tabpanel", "aria-labelledby", "display-templates-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-hidden", "rounded-lg", "border"], ["id", "display-playlists-panel", "role", "tabpanel", "aria-labelledby", "display-playlists-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], ["id", "display-admin-panel", "role", "tabpanel", "aria-labelledby", "display-admin-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], ["id", "display-zones-panel", "role", "tabpanel", "aria-labelledby", "display-zones-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], ["target_type", "display", 3, "target_id"], ["add_label", "SIGNAGE_MANAGER.ADD_PLAYLIST_TO_DISPLAY_ARIA", "remove_label", "SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_DISPLAY", "empty_label", "SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY", 3, "add", "remove", "retry", "playlists", "loading", "error", "can_update"], [3, "display_id"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], [1, "gap-2", "p-2"], ["role", "status", 1, "text-base-content/70", "p-6", "text-center"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], ["icon", "layers", "open_label", "SIGNAGE_MANAGER.OPEN_ZONE", 3, "link", "name", "description"], [3, "retry"], [1, "text-4xl"], [1, "text-sm"], [1, "text-6xl"]], template: function DisplayContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DisplayContentComponent_Conditional_0_Template, 7, 5, "div", 0)(1, DisplayContentComponent_Conditional_1_Template, 6, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selected_display() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      LoadErrorComponent,
      AssignedPlaylistsPanelComponent,
      DisplayAdminComponent,
      DisplayScheduleComponent,
      LinkedItemRowComponent,
      TemplateMappingsComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-content.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayContentComponent, [{
    type: Component,
    args: [{ selector: "display-content", template: `
        @if (selected_display()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3">
                    @if (activeTab() === 'schedule') {
                        <!-- Schedule panel -->
                        <div
                            id="display-schedule-panel"
                            role="tabpanel"
                            aria-labelledby="display-schedule-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <display-schedule />
                        </div>
                    }

                    @if (activeTab() === 'templates') {
                        <div
                            id="display-templates-panel"
                            role="tabpanel"
                            aria-labelledby="display-templates-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <template-mappings
                                target_type="display"
                                [target_id]="selected_display().id"
                            />
                        </div>
                    }

                    @if (activeTab() === 'playlists') {
                        <!-- Playlists panel -->
                        <div
                            id="display-playlists-panel"
                            role="tabpanel"
                            aria-labelledby="display-playlists-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <assigned-playlists-panel
                                add_label="SIGNAGE_MANAGER.ADD_PLAYLIST_TO_DISPLAY_ARIA"
                                remove_label="SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_DISPLAY"
                                empty_label="SIGNAGE_MANAGER.NO_PLAYLISTS_DISPLAY"
                                [playlists]="display_playlists()"
                                [loading]="
                                    has_assigned_playlists() &&
                                    playlists_loading()
                                "
                                [error]="
                                    has_assigned_playlists() &&
                                    playlists_error()
                                "
                                [can_update]="can_update()"
                                (add)="addPlaylist()"
                                (remove)="removePlaylist($event)"
                                (retry)="reloadPlaylists()"
                            />
                        </div>
                    }

                    @if (activeTab() === 'admin') {
                        <div
                            id="display-admin-panel"
                            role="tabpanel"
                            aria-labelledby="display-admin-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <display-admin
                                [display_id]="selected_display().id"
                            />
                        </div>
                    }

                    @if (activeTab() === 'zones') {
                        <!-- Zones panel -->
                        <div
                            id="display-zones-panel"
                            role="tabpanel"
                            aria-labelledby="display-zones-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        >
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : {
                                                      count: display_zones()
                                                          .length,
                                                  }
                                                : display_zones().length
                                    }}
                                </h5>
                            </div>
                            <div class="gap-2 p-2">
                                @if (display_zones().length > 0) {
                                    @for (
                                        zone of display_zones();
                                        track zone.id
                                    ) {
                                        <linked-item-row
                                            icon="layers"
                                            open_label="SIGNAGE_MANAGER.OPEN_ZONE"
                                            [link]="['/zones', zone.id]"
                                            [name]="
                                                zone.display_name || zone.name
                                            "
                                            [description]="zone.description"
                                        />
                                    }
                                } @else if (display_zones_loading()) {
                                    <div
                                        class="text-base-content/70 p-6 text-center"
                                        role="status"
                                    >
                                        {{ 'COMMON.LOADING' | translate }}
                                    </div>
                                } @else if (display_zones_error()) {
                                    <load-error (retry)="reloadZones()" />
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                    >
                                        <icon class="text-4xl"
                                            >layers_clear</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.DISPLAY_NO_ZONES'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">tv</icon>
                <p>
                    {{ 'SIGNAGE_MANAGER.DISPLAY_SELECT_DETAILS' | translate }}
                </p>
            </div>
        }
    `, imports: [
      IconComponent,
      LoadErrorComponent,
      AssignedPlaylistsPanelComponent,
      DisplayAdminComponent,
      DisplayScheduleComponent,
      LinkedItemRowComponent,
      TemplateMappingsComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/display-content.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-content.component.css.map */\n"] }]
  }], null, { activeTab: [{ type: Input, args: [{ isSignal: true, alias: "activeTab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayContentComponent, { className: "DisplayContentComponent", filePath: "apps/signage-manager/src/app/displays/display-content.component.ts", lineNumber: 192 });
})();

// apps/signage-manager/src/app/displays/display-header.component.ts
function DisplayHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "qr_code_scanner");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "COMMON.REMOTE_SETUP_TITLE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "COMMON.REMOTE_SETUP_TITLE"));
  }
}
var DisplayHeaderComponent = class _DisplayHeaderComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._display_service = inject(SignageDisplayService);
    this._router = inject(Router);
    this.total_count = this._display_service.displays_total;
    this.can_create = this._context.can_create;
    this.has_remote_setup = !!remoteSetupModule();
  }
  async addDisplay() {
    const display = await this._display_service.addDisplay();
    if (display?.id)
      await this._router.navigate(["/displays", display.id]);
  }
  static {
    this.\u0275fac = function DisplayHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayHeaderComponent, selectors: [["display-header"]], decls: 2, vars: 3, consts: [["heading", "SIGNAGE_MANAGER.DISPLAYS_TITLE", "add_label", "SIGNAGE_MANAGER.CREATE_NEW_DISPLAY", "add_tooltip", "SIGNAGE_MANAGER.NEW_DISPLAY", 3, "add", "count", "can_add"], ["icon", "", "remote-setup", "", "matRipple", "", "routerLink", "/remote-setup", 1, "text-xl", 3, "matTooltip"]], template: function DisplayHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section-header", 0);
        \u0275\u0275listener("add", function DisplayHeaderComponent_Template_section_header_add_0_listener() {
          return ctx.addDisplay();
        });
        \u0275\u0275conditionalCreate(1, DisplayHeaderComponent_Conditional_1_Template, 5, 6, "a", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("count", ctx.total_count())("can_add", ctx.can_create());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_remote_setup ? 1 : -1);
      }
    }, dependencies: [
      SectionHeaderComponent,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayHeaderComponent, [{
    type: Component,
    args: [{
      selector: "display-header",
      template: `
        <section-header
            heading="SIGNAGE_MANAGER.DISPLAYS_TITLE"
            [count]="total_count()"
            [can_add]="can_create()"
            add_label="SIGNAGE_MANAGER.CREATE_NEW_DISPLAY"
            add_tooltip="SIGNAGE_MANAGER.NEW_DISPLAY"
            (add)="addDisplay()"
        >
            @if (has_remote_setup) {
                <a
                    icon
                    remote-setup
                    matRipple
                    class="text-xl"
                    routerLink="/remote-setup"
                    [attr.aria-label]="'COMMON.REMOTE_SETUP_TITLE' | translate"
                    [matTooltip]="'COMMON.REMOTE_SETUP_TITLE' | translate"
                >
                    <icon>qr_code_scanner</icon>
                </a>
            }
        </section-header>
    `,
      imports: [
        SectionHeaderComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        RouterLink,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayHeaderComponent, { className: "DisplayHeaderComponent", filePath: "apps/signage-manager/src/app/displays/display-header.component.ts", lineNumber: 46 });
})();

// apps/signage-manager/src/app/displays/display-list.component.ts
var _c03 = ["display_item"];
var _c13 = (a0) => ["/displays", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ({ time: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function DisplayListComponent_Conditional_6_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== display_r1.id)("opacity-90", ctx_r1.selected()?.id === display_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r1.description, " ");
  }
}
function DisplayListComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10, 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, DisplayListComponent_Conditional_6_For_1_Conditional_12_Template, 2, 5, "div", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === display_r1.id)("text-primary-content", ctx_r1.selected()?.id === display_r1.id)("hover:bg-base-200", ctx_r1.selected()?.id !== display_r1.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c13, display_r1.id));
    \u0275\u0275attribute("aria-current", ctx_r1.selected()?.id === display_r1.id ? "page" : null)("aria-describedby", "display-status-" + display_r1.id)("aria-label", \u0275\u0275pipeBind2(2, 20, "SIGNAGE_MANAGER.OPEN_DISPLAY", \u0275\u0275pureFunction1(31, _c2, display_r1.display_name || display_r1.name)));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "display-status-" + display_r1.id)("matTooltip", \u0275\u0275pipeBind2(4, 23, ctx_r1.statusLabel(display_r1), \u0275\u0275pureFunction1(33, _c3, ctx_r1.lastSeen(display_r1))));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 26, ctx_r1.statusLabel(display_r1), \u0275\u0275pureFunction1(35, _c3, ctx_r1.lastSeen(display_r1))));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isOnline(display_r1) ? "tv" : "tv_off");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r1.isOnline(display_r1))("bg-error", !ctx_r1.isOnline(display_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", display_r1.display_name || display_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r1.description ? 12 : -1);
  }
}
function DisplayListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("intersect", function DisplayListComponent_Conditional_6_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function DisplayListComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 19);
    \u0275\u0275listener("retry", function DisplayListComponent_Conditional_6_Conditional_3_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275elementEnd();
  }
}
function DisplayListComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function DisplayListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DisplayListComponent_Conditional_6_For_1_Template, 13, 37, "a", 7, _forTrack03);
    \u0275\u0275conditionalCreate(2, DisplayListComponent_Conditional_6_Conditional_2_Template, 1, 0, "div", 8)(3, DisplayListComponent_Conditional_6_Conditional_3_Template, 1, 0, "load-error")(4, DisplayListComponent_Conditional_6_Conditional_4_Template, 3, 3, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.displays());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 2 : ctx_r1.error() ? 3 : !ctx_r1.loading() ? 4 : -1);
  }
}
function DisplayListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function DisplayListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 19);
    \u0275\u0275listener("retry", function DisplayListComponent_Conditional_8_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275elementEnd();
  }
}
function DisplayListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 20);
    \u0275\u0275text(2, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_DISPLAYS"));
  }
}
var DisplayListComponent = class _DisplayListComponent {
  constructor() {
    this._display_service = inject(SignageDisplayService);
    this._display_items = viewChildren(
      "display_item",
      ...ngDevMode ? [{ debugName: "_display_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._display_service.display_search_term;
    this.displays = this._display_service.filtered_displays;
    this.selected = this._display_service.selected_display;
    this.has_more = this._display_service.displays_has_more;
    this.loading = this._display_service.displays_loading;
    this.error = this._display_service.displays_error;
    this._now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locale = inject(LOCALE_ID);
    const timer = setInterval(() => this._now.set(Date.now()), 60 * 1e3);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
    scrollSelectionIntoView(this.displays, this._display_items, this.selected);
  }
  loadMore() {
    this._display_service.loadMoreDisplays();
  }
  retry() {
    this._display_service.retryDisplays();
  }
  isOnline(display) {
    return isDisplayOnline(display.signage_last_seen, this._now());
  }
  /** Translation key for the status tooltip of a display */
  statusLabel(display) {
    return displayStatusKey(display.signage_last_seen, this._now());
  }
  /** When the display's player last checked in */
  lastSeen(display) {
    return displayLastSeen(display.signage_last_seen, this._now(), this._locale);
  }
  static {
    this.\u0275fac = function DisplayListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayListComponent, selectors: [["display-list"]], viewQuery: function DisplayListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._display_items, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 10, vars: 8, consts: [["display_item", ""], [1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["role", "status", 1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "p-8"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "motion-fade-in", "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "no-underline", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200", "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "p-3", "text-center", "text-xs"], ["matRipple", "", "queryParamsHandling", "merge", 1, "motion-fade-in", "border-base-300", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-4", "py-3", "text-left", "no-underline", "transition-colors", 3, "routerLink"], ["role", "img", 1, "relative", "shrink-0", 3, "id", "matTooltip"], [1, "text-2xl"], [1, "border-base-100", "absolute", "-right-0.5", "-bottom-0.5", "h-2.5", "w-2.5", "rounded-full", "border-2"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mt-0.5", "truncate", "text-xs"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [3, "retry"], [1, "text-6xl"]], template: function DisplayListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "input", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function DisplayListComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, DisplayListComponent_Conditional_6_Template, 5, 1)(7, DisplayListComponent_Conditional_7_Template, 3, 3, "div", 5)(8, DisplayListComponent_Conditional_8_Template, 1, 0, "load-error")(9, DisplayListComponent_Conditional_9_Template, 6, 3, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.SEARCH_DISPLAYS"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.SEARCH_DISPLAYS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.displays().length > 0 ? 6 : ctx.loading() ? 7 : ctx.error() ? 8 : 9);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      LoadErrorComponent,
      IntersectDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayListComponent, [{
    type: Component,
    args: [{ selector: "display-list", template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                        "
                        [(ngModel)]="search"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (displays().length > 0) {
                @for (display of displays(); track display.id) {
                    <a
                        #display_item
                        matRipple
                        class="motion-fade-in border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === display.id"
                        [class.text-primary-content]="
                            selected()?.id === display.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== display.id
                        "
                        [routerLink]="['/displays', display.id]"
                        queryParamsHandling="merge"
                        [attr.aria-current]="
                            selected()?.id === display.id ? 'page' : null
                        "
                        [attr.aria-describedby]="'display-status-' + display.id"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                | translate
                                    : {
                                          name:
                                              display.display_name ||
                                              display.name,
                                      }
                        "
                    >
                        <div
                            class="relative shrink-0"
                            role="img"
                            [id]="'display-status-' + display.id"
                            [matTooltip]="
                                statusLabel(display)
                                    | translate: { time: lastSeen(display) }
                            "
                            [attr.aria-label]="
                                statusLabel(display)
                                    | translate: { time: lastSeen(display) }
                            "
                        >
                            <icon class="text-2xl">{{
                                isOnline(display) ? 'tv' : 'tv_off'
                            }}</icon>
                            <span
                                class="border-base-100 absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2"
                                [class.bg-success]="isOnline(display)"
                                [class.bg-error]="!isOnline(display)"
                            ></span>
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ display.display_name || display.name }}
                            </div>
                            @if (display.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== display.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === display.id
                                    "
                                >
                                    {{ display.description }}
                                </div>
                            }
                        </div>
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else if (error()) {
                    <load-error (retry)="retry()" />
                } @else if (!loading()) {
                    <div class="text-base-content/50 p-3 text-center text-xs">
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else if (loading()) {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center p-8"
                    role="status"
                >
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            } @else if (error()) {
                <load-error (retry)="retry()" />
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">tv</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_DISPLAYS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      IconComponent,
      LoadErrorComponent,
      TranslatePipe,
      IntersectDirective
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/displays/display-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=display-list.component.css.map */\n"] }]
  }], () => [], { _display_items: [{ type: ViewChildren, args: ["display_item", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayListComponent, { className: "DisplayListComponent", filePath: "apps/signage-manager/src/app/displays/display-list.component.ts", lineNumber: 178 });
})();

// apps/signage-manager/src/app/displays/displays.component.ts
function DisplaysSectionComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_display().description, " ");
  }
}
function DisplaysSectionComponent_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_6_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.EDIT_DISPLAY_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.EDIT_SELECTED_DISPLAY"));
  }
}
function DisplaysSectionComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_6_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.DELETE_DISPLAY_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.DELETE_SELECTED_DISPLAY"));
  }
}
function DisplaysSectionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DisplaysSectionComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "h4", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, DisplaysSectionComponent_Conditional_6_Conditional_10_Template, 2, 1, "div", 12);
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, DisplaysSectionComponent_Conditional_6_Conditional_13_Template, 5, 6, "button", 14);
    \u0275\u0275conditionalCreate(14, DisplaysSectionComponent_Conditional_6_Conditional_14_Template, 5, 6, "button", 15);
    \u0275\u0275elementStart(15, "a", 16);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "open_in_new");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "section-tabs", 17);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("activeChange", function DisplaysSectionComponent_Conditional_6_Template_section_tabs_activeChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 12, "SIGNAGE_MANAGER.BACK_TO_DISPLAYS"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_display().display_name || ctx_r1.selected_display().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_display().description ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_display().orientation, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_delete_displays() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 14, "SIGNAGE_MANAGER.OPEN_PANEL"))("href", ctx_r1.panel_link(), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 16, "SIGNAGE_MANAGER.OPEN_PANEL_NEW_TAB"));
    \u0275\u0275advance(5);
    \u0275\u0275property("tabs", ctx_r1.tabs())("active", ctx_r1.view_tab());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 18, "SIGNAGE_MANAGER.DISPLAY_DETAILS_TABS"));
  }
}
function parseDisplayTab(value) {
  if (value === "templates" || value === "playlists" || value === "zones" || value === "admin") {
    return value;
  }
  return "schedule";
}
var DisplaysSectionComponent = class _DisplaysSectionComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._display_service = inject(SignageDisplayService);
    this._playlist_service = inject(SignagePlaylistService);
    this._router = inject(Router);
    this.id = input(
      "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = input(
      null,
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.signage_path = settingSignal("signage_path");
    this.templates_enabled = this._context.templates_enabled;
    this.can_admin = this._context.can_manage_all_groups;
    this._view_tab = routedTab(this.tab, (value) => {
      const tab = parseDisplayTab(value);
      if (tab === "templates" && !this.templates_enabled())
        return "schedule";
      if (tab === "admin" && !this.can_admin())
        return "schedule";
      return tab;
    });
    this.view_tab = this._view_tab.active;
    this.selected_display = this._display_service.selected_display;
    this.can_update = this._context.can_update;
    this.can_delete_displays = this._context.can_delete_displays;
    this.template_count_loading = this._display_service.selected_display_template_mappings_loading;
    this.playlist_count_loading = this._playlist_service.playlists_loading;
    this.zone_count_loading = this._display_service.selected_display_zones_loading;
    this.template_count = computed(
      () => this._display_service.selected_display_template_mappings().length,
      ...ngDevMode ? [{ debugName: "template_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_count = computed(
      () => this._playlist_service.playlistsById(this.selected_display()?.playlists || []).length,
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_count = computed(
      () => this._display_service.selected_display_zones().length,
      ...ngDevMode ? [{ debugName: "zone_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tabs = computed(
      () => [
        { id: "schedule", label: "SIGNAGE_MANAGER.SCHEDULE" },
        ...this.templates_enabled() ? [
          {
            id: "templates",
            label: "SIGNAGE_MANAGER.NAV_TEMPLATES",
            count: this.template_count(),
            count_loading: this.template_count_loading()
          }
        ] : [],
        {
          id: "playlists",
          label: "SIGNAGE_MANAGER.NAV_PLAYLISTS",
          count: this.playlist_count(),
          count_loading: this.playlist_count_loading()
        },
        {
          id: "zones",
          label: "SIGNAGE_MANAGER.NAV_ZONES",
          count: this.zone_count(),
          count_loading: this.zone_count_loading()
        },
        ...this.can_admin() ? [{ id: "admin", label: "SIGNAGE_MANAGER.NAV_ADMIN" }] : []
      ],
      ...ngDevMode ? [{ debugName: "tabs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel_link = computed(
      () => {
        const display = this.selected_display();
        if (!display?.id)
          return "";
        return signagePlayerUrl(this.signage_path(), `signage/${encodeURIComponent(display.id)}`);
      },
      ...ngDevMode ? [{ debugName: "panel_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    selectRoutedItem({
      id: this.id,
      list: this._display_service.displays,
      selected: this._display_service.selected_display,
      // The list holds only the pages loaded so far
      load: showSignageDisplay
    });
  }
  /** `selectRoutedItem` clears the selection when the id drops */
  deselectDisplay() {
    void this._router.navigate(["/displays"]);
  }
  editDisplay() {
    const display = this.selected_display();
    if (display)
      this._display_service.editDisplay(display);
  }
  async removeDisplay() {
    const display = this.selected_display();
    if (!display || !await this._display_service.removeDisplay(display))
      return;
    await this._router.navigate(["/displays"], {});
  }
  setViewTab(tab) {
    this._view_tab.select(tab);
  }
  static {
    this.\u0275fac = function DisplaysSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplaysSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplaysSectionComponent, selectors: [["displays-section"]], inputs: { id: [1, "id"], tab: [1, "tab"] }, decls: 8, vars: 6, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "min-h-0", "flex-1", "flex-col", "overflow-hidden"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], [1, "h-1/2", "flex-1", 3, "activeTab"], [1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "px-2", "py-1"], ["icon", "", "type", "button", "matRipple", "", 1, "desktop-hidden", 3, "click"], [1, "shrink-0", "text-2xl", "opacity-60"], [1, "min-w-0", "flex-1", "py-2"], [1, "truncate", "text-lg", "font-medium"], [1, "text-base-content/80", "truncate", "text-sm"], [1, "text-base-content/60", "truncate", "text-xs", "capitalize"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 3, "matTooltip", "href"], ["id_prefix", "display", 1, "bg-base-100", "border-base-300", "mx-2", "mt-2", "flex", "overflow-x-auto", "rounded-lg", "border", 3, "activeChange", "tabs", "active"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"]], template: function DisplaysSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "display-header", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "display-list", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275conditionalCreate(6, DisplaysSectionComponent_Conditional_6_Template, 22, 20);
        \u0275\u0275element(7, "display-content", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_display());
        \u0275\u0275advance();
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_display());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_display() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("activeTab", ctx.view_tab());
      }
    }, dependencies: [
      DisplayHeaderComponent,
      DisplayListComponent,
      DisplayContentComponent,
      SectionTabsComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplaysSectionComponent, [{
    type: Component,
    args: [{
      selector: "displays-section",
      template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col">
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <display-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <display-list
                        [class.mobile-hidden]="!!selected_display()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_display()"
                    >
                        @if (selected_display()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-2 py-1"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
                                    (click)="deselectDisplay()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_DISPLAYS'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <icon class="shrink-0 text-2xl opacity-60"
                                    >tv</icon
                                >
                                <div class="min-w-0 flex-1 py-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{
                                            selected_display().display_name ||
                                                selected_display().name
                                        }}
                                    </h4>
                                    @if (selected_display().description) {
                                        <div
                                            class="text-base-content/80 truncate text-sm"
                                        >
                                            {{ selected_display().description }}
                                        </div>
                                    }
                                    <div
                                        class="text-base-content/60 truncate text-xs capitalize"
                                    >
                                        {{ selected_display().orientation }}
                                    </div>
                                </div>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_DISPLAY'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                }
                                @if (can_delete_displays()) {
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removeDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_DISPLAY'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                                <a
                                    icon
                                    default
                                    matRipple
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.OPEN_PANEL' | translate
                                    "
                                    [href]="panel_link()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.OPEN_PANEL_NEW_TAB'
                                            | translate
                                    "
                                >
                                    <icon>open_in_new</icon>
                                </a>
                            </div>
                            <section-tabs
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-x-auto rounded-lg border"
                                id_prefix="display"
                                [tabs]="tabs()"
                                [active]="view_tab()"
                                (activeChange)="setViewTab($event)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.DISPLAY_DETAILS_TABS'
                                        | translate
                                "
                            />
                        }
                        <display-content
                            class="h-1/2 flex-1"
                            [activeTab]="view_tab()"
                        />
                    </div>
                </div>
            </div>
        </div>
    `,
      imports: [
        DisplayHeaderComponent,
        DisplayListComponent,
        DisplayContentComponent,
        SectionTabsComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplaysSectionComponent, { className: "DisplaysSectionComponent", filePath: "apps/signage-manager/src/app/displays/displays.component.ts", lineNumber: 180 });
})();
export {
  DisplaysSectionComponent
};
//# debugId=c95262a8-09ea-5515-8503-6a7c228cba6a
//# sourceMappingURL=displays.component-67YHPITA.js.map
