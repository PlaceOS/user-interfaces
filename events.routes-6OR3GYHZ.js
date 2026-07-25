import {
  AttendeeListComponent,
  MapLocateModalComponent
} from "./chunk-5PMKOBVV.js";
import {
  MapPinComponent
} from "./chunk-JI2SOAOT.js";
import {
  loadPersistedZones,
  persistZones
} from "./chunk-2IX3MLLC.js";
import {
  EventFormService
} from "./chunk-LWIWPWUF.js";
import "./chunk-VHR53HBH.js";
import {
  LevelPipe
} from "./chunk-G6XAELYK.js";
import "./chunk-HCL3RA2Y.js";
import {
  DateFieldComponent
} from "./chunk-KZDZFIVE.js";
import {
  InteractiveMapComponent
} from "./chunk-EKF7RISY.js";
import "./chunk-SAI7TC3T.js";
import "./chunk-YKMMNMAH.js";
import {
  openConfirmModal
} from "./chunk-LNOJ6XQY.js";
import "./chunk-CKKTHWGK.js";
import {
  UserSearchFieldComponent
} from "./chunk-GYWSDCCU.js";
import "./chunk-P455C3NH.js";
import {
  addEventGuest,
  checkinEventGuest,
  queryEvents,
  removeEvent,
  removeEventGuest,
  showEvent,
  showEventMetadata
} from "./chunk-UDVMSZEZ.js";
import "./chunk-NUDT4HX3.js";
import {
  BuildingPipe
} from "./chunk-B5SCQ5WH.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-FWHJWQP4.js";
import {
  SimpleTableComponent
} from "./chunk-4EAV2GUH.js";
import "./chunk-TTBT7DJ4.js";
import {
  isSameMonth,
  startOfMonth
} from "./chunk-DZLP6NNM.js";
import "./chunk-BSTXQDO3.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AuthenticatedImageDirective,
  ImageListFieldComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  RichTextInputComponent,
  SettingsToggleComponent,
  TimeFieldComponent
} from "./chunk-OFJN4OYD.js";
import {
  subMonths
} from "./chunk-XHSHJOQP.js";
import "./chunk-WA7E7Z6Q.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-523TYXQA.js";
import "./chunk-HAOQJFXT.js";
import "./chunk-LC5X23VX.js";
import {
  SpacePipe
} from "./chunk-AEPOHWC2.js";
import "./chunk-JFVJO2JL.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  Building,
  BuildingLevel,
  COMMA,
  CalendarEvent,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  ENTER,
  FormField,
  FormsModule,
  GuestUser,
  IconComponent,
  Injectable,
  Input,
  MAT_DIALOG_DATA,
  MINUTES,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  OrganisationService,
  Output,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SPACE,
  SanitizePipe,
  SettingsService,
  SlicePipe,
  Space,
  StaffUser,
  TIMEZONES_IANA,
  TranslatePipe,
  addDays,
  addMonths,
  addWeeks,
  computed,
  currentUser,
  differenceInMinutes,
  effect,
  endOfDay,
  format,
  formatDuration,
  getInvalidSignalFields,
  getUnixTime,
  i18n,
  inject,
  input,
  isSameDay,
  model,
  notifyError,
  notifyInfo,
  notifySuccess,
  setClassMetadata,
  settingSignal,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  unique,
  untracked,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GGSGOQ6N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/events/events.component.ts
var EventsComponent = class _EventsComponent {
  static {
    this.\u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["", "app-events", ""]], decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule,
      RouterOutlet
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=events.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsComponent, [{
    type: Component,
    args: [{ selector: "[app-events]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/events.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=events.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "apps/concierge/src/app/events/events.component.ts", lineNumber: 34 });
})();

// libs/events/src/lib/group-event-details-modal.component.ts
var _c0 = (a0) => ({ name: a0 });
var _c1 = (a0, a1) => ({ going: a0, interested: a1 });
function GroupEventDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.event().extension_data?.images[0]);
  }
}
function GroupEventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 34);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "icon", 37);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
}
function GroupEventDetailsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "icon");
    \u0275\u0275text(8, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.is_interested())("text-base-content", !ctx_r0.is_interested())("opacity-30", !ctx_r0.is_interested())("bg-success", ctx_r0.is_interested())("text-success-content", ctx_r0.is_interested())("opacity-100", ctx_r0.is_interested());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 26, ctx_r0.is_interested() ? "CALENDAR_EVENT.GROUP_INTERESTED" : "CALENDAR_EVENT.GROUP_NOT_INTERESTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r0.is_going())("text-base-content", !ctx_r0.is_going())("opacity-30", !ctx_r0.is_going())("bg-success", ctx_r0.is_going())("text-success-content", ctx_r0.is_going())("opacity-100", ctx_r0.is_going());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 28, ctx_r0.is_going() ? "CALENDAR_EVENT.GROUP_GOING" : "CALENDAR_EVENT.GROUP_NOT_GOING"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.event(), false));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "icon", 40);
    \u0275\u0275text(3, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.GROUP_DELETE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.level().map_id)("features", ctx_r0.features())("styles", ctx_r0.styles());
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.building().display_name || ctx_r0.building().name, ", ", ctx_r0.level().display_name || ctx_r0.level().name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_LOCATION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("underline", ctx_r0.event().meeting_url);
    \u0275\u0275property("href", ctx_r0.event().meeting_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r0.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 41)(2, "button", 42);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_101_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_101_Conditional_3_Template, 1, 3, "interactive-map", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275conditionalCreate(5, GroupEventDetailsModalComponent_Conditional_101_Conditional_5_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(6, GroupEventDetailsModalComponent_Conditional_101_Conditional_6_Template, 3, 3, "div", 28);
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275conditionalCreate(8, GroupEventDetailsModalComponent_Conditional_101_Conditional_8_Template, 2, 2, "span");
    \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_101_Conditional_9_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, GroupEventDetailsModalComponent_Conditional_101_Conditional_10_Template, 3, 6, "a", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.showing_map() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.is_onsite() && ctx_r0.has_space() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_onsite() && !ctx_r0.has_space() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.building() && ctx_r0.level() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.building() || !ctx_r0.level() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_online() ? 10 : -1);
  }
}
function GroupEventDetailsModalComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 48);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_102_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_attendees.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 49)(3, "attendee-list", 50);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_102_Template_attendee_list_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("show_host", false)("list", ctx_r0.event().attendees)("host", ctx_r0.event().host)("show_host", false);
  }
}
var GroupEventDetailsModalComponent = class _GroupEventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
    this._dialog_ref = inject(MatDialogRef, { optional: true });
    this.edit = this._data?.edit_fn;
    this.space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = model(
      this._data?.event,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_limited = signal(
      !this._data,
      ...ngDevMode ? [{ debugName: "is_limited" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.concierge = signal(
      this._data?.concierge,
      ...ngDevMode ? [{ debugName: "concierge" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = signal(
      new Building(),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = signal(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locate = signal(
      "",
      ...ngDevMode ? [{ debugName: "locate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showing_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "showing_map" }] : (
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
    this.styles = signal(
      {},
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_description = signal(
      "",
      ...ngDevMode ? [{ debugName: "raw_description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.calendar_space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "calendar_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.featured = computed(
      () => this.event().featured || this.event().extension_data?.featured,
      ...ngDevMode ? [{ debugName: "featured" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.space().id,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_onsite = computed(
      () => this.event().extension_data.attendance_type !== "ONLINE",
      ...ngDevMode ? [{ debugName: "is_onsite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_online = computed(
      () => !this.is_onsite() || this.event().extension_data.attendance_type === "ANY",
      ...ngDevMode ? [{ debugName: "is_online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.body = computed(
      () => {
        if (this.is_online())
          return this.event().body;
        let body = this.event().body;
        const remove_blocks = [
          `<div style="margin-bottom:24px; overflow:hidden; white-space:nowrap">________________________________________________________________________________</div>`,
          `<p>________________________________________________________________________________</p>`
        ];
        for (const block of remove_blocks) {
          const first = body.indexOf(block);
          const last = body.lastIndexOf(block);
          body = body.substring(0, first) + body.substring(last);
        }
        for (const block of remove_blocks) {
          body = body.replace(block, "");
        }
        return body;
      },
      ...ngDevMode ? [{ debugName: "body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendance = computed(
      () => this.event().attendees?.filter((_) => _.checked_in)?.length || 0,
      ...ngDevMode ? [{ debugName: "attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendees = computed(
      () => this.event().attendees?.filter((user) => user.email !== this.group_event_calendar())?.length || 0,
      ...ngDevMode ? [{ debugName: "attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guest_details = computed(
      () => {
        const user = currentUser();
        return this.event().attendees?.find((_) => _.email === user.email);
      },
      ...ngDevMode ? [{ debugName: "guest_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_interested = computed(
      () => !!this.guest_details(),
      ...ngDevMode ? [{ debugName: "is_interested" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_going = computed(
      () => this.guest_details()?.checked_in,
      ...ngDevMode ? [{ debugName: "is_going" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_id = computed(
      () => this.space().id,
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.public_event_link = computed(
      () => {
        const system_id = this.calendar_space().id;
        const event_id = this.event()?.id;
        if (!system_id || !event_id)
          return "";
        const path = `${this.public_url_path() || "/public"}`.replace(/\/$/, "");
        return `${window.location.origin}${path}/#/event/${encodeURIComponent(system_id)}/${encodeURIComponent(event_id)}`;
      },
      ...ngDevMode ? [{ debugName: "public_event_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_event_calendar = settingSignal("group_events_calendar", "");
    this.public_url_path = settingSignal("public_url_path", "/public");
    this._use_24_hour = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(event, remove_series) {
    if (event?.state === "done")
      return;
    this._data?.remove_fn(event, remove_series);
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar());
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.calendar_space.set(await space_pipe.transform(this.group_event_calendar()));
    const map_id = this.event().extension_data?.map_id;
    const id = this.space()?.map_id || map_id;
    if (id) {
      this.styles.set({ [`#${id}`]: { fill: "green" } });
      this.features.set([
        {
          location: id,
          content: MapPinComponent,
          data: {}
        }
      ]);
    }
    const zones = this.space().zones || [];
    this.level.set(this._org.levelWithID(zones) || this.level());
    this.building.set(this._org.buildings.find((_) => zones.includes(_.id)) || this._org.building);
    this.locate.set(map_id || "");
    this.raw_description.set(this.removeHtmlTags(this.event().body).trim());
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return (doc.body.textContent || "").trim();
  }
  viewLocation() {
    if (!this.space().map_id) {
      return notifyInfo("Unable to locate space on map.");
    }
    this.showing_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: { item: this.space }
    });
    ref.afterClosed().subscribe(() => this.showing_map.set(false));
  }
  async toggleInterest() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (this.is_interested() && user) {
      await removeEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: (event.attendees || []).filter((_) => _.email !== user.email)
      })));
    } else {
      user = await addEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: unique([...event.attendees || [], user], "email")
      })));
    }
  }
  copyPublicEventLink() {
    const link = this.public_event_link();
    if (!link)
      return;
    if (this._clipboard.copy(link)) {
      notifyInfo("Copied public event link to clipboard.");
    }
  }
  async toggleAttendance() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (!user) {
      user = await addEventGuest(this.event().id, _user, {
        system_id: this.event().system?.id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: unique([...event.attendees || [], user], "email")
      })));
    }
    user = __spreadValues(__spreadValues({}, currentUser()), user || {});
    if (!user.email)
      return;
    await checkinEventGuest(this.event().id, user.email, !this.is_going(), {
      system_id: this.event().system?.id
    });
    const guest = this.event().attendees.find((_) => _.email === user.email);
    if (!guest)
      return;
    this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
      attendees: event.attendees.map((attendee) => attendee.email === user.email ? __spreadProps(__spreadValues({}, attendee), { checked_in: !this.is_going() }) : attendee)
    })));
  }
  static {
    this.\u0275fac = function GroupEventDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventDetailsModalComponent, selectors: [["group-event-details-modal"]], inputs: { event: [1, "event"] }, outputs: { event: "eventChange" }, decls: 103, vars: 72, consts: [["concierge_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "max-h-[80vh]", "w-3xl", "max-w-[calc(100vw-1rem)]", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-52", "w-full", "items-center", "justify-between", "overflow-hidden"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br", "py-2", "pr-4", "pl-2", "text-sm"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-1", "right-1", "overflow-hidden"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-8", "py-4"], [1, "text-left", "text-xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "bg-base-200", "text-base-content", "w-11", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], ["mat-menu-item", "", 3, "disabled"], [1, "mr-2"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "flex", "max-h-[calc(80vh-18rem)]", "flex-1", "space-x-6", "overflow-x-hidden", "overflow-y-auto", "p-8"], [1, "flex", "w-1/3", "flex-1", "flex-col", "space-y-2"], [1, "flex", "items-center", "space-x-4"], [1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full"], [1, "pt-4", "font-medium"], [1, "flex", "flex-col"], [1, "text-sm"], [1, "text-sm", "opacity-30"], [1, "flex", "flex-col", "text-sm"], [1, "opacity-30"], ["matRipple", "", 1, "flex", "min-h-12", "items-center", "space-x-4", "rounded-sm", 3, "click"], [1, "pb-4", "text-sm"], ["event-details", "", 3, "innerHTML"], [1, "flex", "w-[20rem]"], [1, "absolute", "inset-0", "z-50"], [1, "text-base"], [1, "uppercase"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-30"], [1, "z-10"], ["btn", "", 1, "flex", "h-10", "items-center", "space-x-2", "rounded-sm", "px-4"], [1, "pr-2"], [1, "text-error", "text-2xl"], [1, "border-base-300", "w-full", "border"], ["matRipple", "", 1, "bg-base-200", "relative", "h-40", "w-full", 3, "click"], [3, "src", "features", "styles"], [1, "space-y-2", "p-4"], [1, "mt-0!", "text-sm", "opacity-30"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "underline", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "href"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60", 3, "click"], [1, "absolute", "inset-y-8", "left-1/2", "w-[24rem]", "-translate-x-1/2", "overflow-hidden", "rounded-sm", "shadow-sm"], [3, "click", "show_host", "list", "host"]], template: function GroupEventDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275conditionalCreate(2, GroupEventDetailsModalComponent_Conditional_2_Template, 1, 1, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_3_Template, 6, 3, "div", 5);
        \u0275\u0275conditionalCreate(4, GroupEventDetailsModalComponent_Conditional_4_Template, 4, 0, "button", 6);
        \u0275\u0275elementStart(5, "div", 7)(6, "h3", 8);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 9);
        \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_9_Template, 12, 30);
        \u0275\u0275elementStart(10, "button", 10)(11, "icon", 11);
        \u0275\u0275text(12, "more_horiz");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-menu", null, 0)(15, "button", 12)(16, "div", 9)(17, "icon", 11);
        \u0275\u0275text(18, " confirmation_number ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "button", 14);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_22_listener() {
          return ctx.edit ? ctx.edit(ctx.event()) : "";
        });
        \u0275\u0275elementStart(23, "div", 9)(24, "icon", 11);
        \u0275\u0275text(25, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "button", 15);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_29_listener() {
          return ctx.copyPublicEventLink();
        });
        \u0275\u0275elementStart(30, "div", 9)(31, "icon", 11);
        \u0275\u0275text(32, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 13);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(36, GroupEventDetailsModalComponent_Conditional_36_Template, 7, 3, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-menu", null, 1)(39, "button", 17);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_39_listener() {
          return ctx.toggleInterest();
        });
        \u0275\u0275elementStart(40, "div", 9)(41, "icon");
        \u0275\u0275text(42, " star ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "button", 18);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_46_listener() {
          return ctx.toggleAttendance();
        });
        \u0275\u0275elementStart(47, "div", 9)(48, "icon");
        \u0275\u0275text(49, " help ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "div", 22)(57, "icon");
        \u0275\u0275text(58, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div");
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "h3", 23);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 21)(66, "div", 22)(67, "icon");
        \u0275\u0275text(68, "calendar_today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 24)(70, "div", 25);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 26);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "date");
        \u0275\u0275pipe(76, "date");
        \u0275\u0275pipe(77, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 21)(79, "div", 22)(80, "icon");
        \u0275\u0275text(81, "place");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 27);
        \u0275\u0275conditionalCreate(83, GroupEventDetailsModalComponent_Conditional_83_Template, 2, 1, "div");
        \u0275\u0275conditionalCreate(84, GroupEventDetailsModalComponent_Conditional_84_Template, 3, 3, "div", 28);
        \u0275\u0275conditionalCreate(85, GroupEventDetailsModalComponent_Conditional_85_Template, 3, 3, "div", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "button", 29);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_86_listener() {
          return ctx.show_attendees.set(!ctx.is_limited() && true);
        });
        \u0275\u0275elementStart(87, "div", 22)(88, "icon");
        \u0275\u0275text(89, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div");
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "h3", 23);
        \u0275\u0275text(94);
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 30);
        \u0275\u0275element(97, "span", 31);
        \u0275\u0275pipe(98, "sanitize");
        \u0275\u0275conditionalCreate(99, GroupEventDetailsModalComponent_Conditional_99_Template, 3, 3, "span", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div");
        \u0275\u0275conditionalCreate(101, GroupEventDetailsModalComponent_Conditional_101_Template, 11, 6, "div", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(102, GroupEventDetailsModalComponent_Conditional_102_Template, 4, 4, "div", 33);
      }
      if (rf & 2) {
        const concierge_menu_r5 = \u0275\u0275reference(14);
        const menu_r6 = \u0275\u0275reference(38);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event().extension_data?.images?.length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.featured() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_limited() ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.event().title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.concierge() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.event().state === "done")("matMenuTriggerFor", ctx.concierge() ? concierge_menu_r5 : menu_r6);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", true);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "CALENDAR_EVENT.GROUP_PROMOTE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 36, "CALENDAR_EVENT.GROUP_EDIT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.public_event_link());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 38, "CALENDAR_EVENT.GROUP_COPY_URL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event().state !== "done" ? 36 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("text-error", ctx.is_interested());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 40, ctx.is_interested() ? "CALENDAR_EVENT.GROUP_INTEREST_REMOVE" : "CALENDAR_EVENT.GROUP_INTEREST_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("text-error", ctx.is_going());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 42, ctx.is_going() ? "CALENDAR_EVENT.GROUP_GOING_REMOVE" : "CALENDAR_EVENT.GROUP_GOING_ADD"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 44, "CALENDAR_EVENT.GROUP_HOST", \u0275\u0275pureFunction1(67, _c0, ctx.event().organiser?.name || ctx.event().host)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 47, "CALENDAR_EVENT.GROUP_WHEN_WHERE"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 49, "CALENDAR_EVENT.GROUP_DATE_TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(75, 51, ctx.event().date, "EEEE, d MMMM, yyyy"), " . ", \u0275\u0275pipeBind2(76, 54, ctx.event().date, ctx.time_format()), " - ", \u0275\u0275pipeBind2(77, 57, ctx.event().date + ctx.event().duration * 60 * 1e3, ctx.time_format()), " ");
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.is_onsite() && ctx.has_space() ? 83 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_onsite() && !ctx.has_space() ? 84 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_online() ? 85 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 60, "CALENDAR_EVENT.GROUP_ATTENDEES", \u0275\u0275pureFunction2(69, _c1, ctx.attendance(), ctx.attendees())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 63, "CALENDAR_EVENT.GROUP_ABOUT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(98, 65, ctx.body()), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.raw_description() ? 99 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.level() ? 101 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_attendees() ? 102 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      AttendeeListComponent,
      InteractiveMapComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatDialogClose,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe,
      SanitizePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventDetailsModalComponent, [{
    type: Component,
    args: [{ selector: `group-event-details-modal`, template: `
        <div
            class="relative max-h-[80vh] w-3xl max-w-[calc(100vw-1rem)] overflow-hidden"
        >
            <div
                class="bg-base-200 relative flex h-52 w-full items-center justify-between overflow-hidden"
            >
                @if (event().extension_data?.images?.length) {
                    <img
                        auth
                        [source]="event().extension_data?.images[0]"
                        class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                }
            </div>

            @if (featured()) {
                <div
                    class="bg-info text-info-content absolute top-0 left-0 flex items-center space-x-2 rounded-br py-2 pr-4 pl-2 text-sm"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
            }
            @if (!is_limited()) {
                <button
                    icon
                    mat-dialog-close
                    class="absolute top-1 right-1 overflow-hidden"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-30"
                    ></div>
                    <icon class="z-10">close</icon>
                </button>
            }
            <div
                class="border-base-200 flex items-center justify-between border-b px-8 py-4"
            >
                <h3 class="text-left text-xl">
                    {{ event().title }}
                </h3>
                <div class="flex items-center space-x-2">
                    @if (!concierge()) {
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded-sm px-4"
                            [class.bg-base-200]="!is_interested()"
                            [class.text-base-content]="!is_interested()"
                            [class.opacity-30]="!is_interested()"
                            [class.bg-success]="is_interested()"
                            [class.text-success-content]="is_interested()"
                            [class.opacity-100]="is_interested()"
                        >
                            <icon>star</icon>
                            <div class="pr-2">
                                {{
                                    (is_interested()
                                        ? 'CALENDAR_EVENT.GROUP_INTERESTED'
                                        : 'CALENDAR_EVENT.GROUP_NOT_INTERESTED'
                                    ) | translate
                                }}
                            </div>
                        </div>
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded-sm px-4"
                            [class.bg-base-200]="!is_going()"
                            [class.text-base-content]="!is_going()"
                            [class.opacity-30]="!is_going()"
                            [class.bg-success]="is_going()"
                            [class.text-success-content]="is_going()"
                            [class.opacity-100]="is_going()"
                        >
                            <icon>help</icon>
                            <div class="pr-2">
                                {{
                                    (is_going()
                                        ? 'CALENDAR_EVENT.GROUP_GOING'
                                        : 'CALENDAR_EVENT.GROUP_NOT_GOING'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    }
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content w-11"
                        [disabled]="event().state === 'done'"
                        [matMenuTriggerFor]="
                            concierge() ? concierge_menu : menu
                        "
                    >
                        <icon class="text-2xl">more_horiz</icon>
                    </button>
                    <mat-menu #concierge_menu="matMenu">
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    confirmation_number
                                </icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_PROMOTE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="edit ? edit(event()) : ''"
                            mat-dialog-close
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">edit</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_EDIT' | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            [disabled]="!public_event_link()"
                            (click)="copyPublicEventLink()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">content_copy</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_COPY_URL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        @if (event().state !== 'done') {
                            <button
                                mat-menu-item
                                (click)="remove(event(), false)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl">
                                        delete
                                    </icon>
                                    <div class="mr-2">
                                        {{
                                            'CALENDAR_EVENT.GROUP_DELETE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </mat-menu>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                            (click)="toggleInterest()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_interested()">
                                    star
                                </icon>
                                <span>
                                    {{
                                        (is_interested()
                                            ? 'CALENDAR_EVENT.GROUP_INTEREST_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_INTEREST_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="toggleAttendance()">
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_going()">
                                    help
                                </icon>
                                <span>
                                    {{
                                        (is_going()
                                            ? 'CALENDAR_EVENT.GROUP_GOING_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_GOING_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </div>
            <div
                class="flex max-h-[calc(80vh-18rem)] flex-1 space-x-6 overflow-x-hidden overflow-y-auto p-8"
            >
                <div class="flex w-1/3 flex-1 flex-col space-y-2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_HOST'
                                    | translate
                                        : {
                                              name:
                                                  event().organiser?.name ||
                                                  event().host,
                                          }
                            }}
                        </div>
                    </div>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_WHEN_WHERE' | translate }}
                    </h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>calendar_today</icon>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm">
                                {{
                                    'CALENDAR_EVENT.GROUP_DATE_TIME' | translate
                                }}
                            </div>
                            <div class="text-sm opacity-30">
                                {{ event().date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ event().date | date: time_format() }} -
                                {{
                                    event().date + event().duration * 60 * 1000
                                        | date: time_format()
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex flex-col text-sm">
                            @if (is_onsite() && has_space()) {
                                <div>
                                    {{ space().display_name }}
                                </div>
                            }
                            @if (is_onsite() && !has_space()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (is_online()) {
                                <div class="opacity-30">
                                    {{
                                        (is_onsite()
                                            ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                            : 'CALENDAR_EVENT.GROUP_REMOTE'
                                        ) | translate
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <button
                        matRipple
                        (click)="show_attendees.set(!is_limited() && true)"
                        class="flex min-h-12 items-center space-x-4 rounded-sm"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDEES'
                                    | translate
                                        : {
                                              going: attendance(),
                                              interested: attendees(),
                                          }
                            }}
                        </div>
                    </button>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_ABOUT' | translate }}
                    </h3>
                    <div class="pb-4 text-sm">
                        <span
                            event-details
                            [innerHTML]="body() | sanitize"
                        ></span>
                        @if (!raw_description()) {
                            <span class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </span>
                        }
                    </div>
                </div>
                <div>
                    @if (level()) {
                        <div class="flex w-[20rem]">
                            <div class="border-base-300 w-full border">
                                <button
                                    matRipple
                                    class="bg-base-200 relative h-40 w-full"
                                    (click)="viewLocation()"
                                >
                                    @if (!showing_map()) {
                                        <interactive-map
                                            [src]="level().map_id"
                                            [features]="features()"
                                            [styles]="styles()"
                                        ></interactive-map>
                                    }
                                </button>
                                <div class="space-y-2 p-4">
                                    @if (is_onsite() && has_space()) {
                                        <div>
                                            {{ space().display_name }}
                                        </div>
                                    }
                                    @if (is_onsite() && !has_space()) {
                                        <div class="opacity-30">
                                            {{
                                                'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                    <div class="mt-0! text-sm opacity-30">
                                        @if (building() && level()) {
                                            <span>
                                                {{
                                                    building().display_name ||
                                                        building().name
                                                }},
                                                {{
                                                    level().display_name ||
                                                        level().name
                                                }}
                                            </span>
                                        }
                                        @if (!building() || !level()) {
                                            <span class="opacity-30">
                                                {{
                                                    'CALENDAR_EVENT.GROUP_NO_LOCATION'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    @if (is_online()) {
                                        <a
                                            class="mt-4 opacity-30"
                                            [class.underline]="
                                                event().meeting_url
                                            "
                                            [href]="event().meeting_url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{
                                                (is_onsite()
                                                    ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                                    : 'CALENDAR_EVENT.GROUP_REMOTE'
                                                ) | translate
                                            }}
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (show_attendees()) {
            <div class="absolute inset-0 z-50">
                <button
                    class="bg-base-content absolute inset-0 opacity-60"
                    (click)="show_attendees.set(false)"
                ></button>
                <div
                    class="absolute inset-y-8 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded-sm shadow-sm"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="event().attendees"
                        [host]="event().host"
                        [show_host]="false"
                        (click)="show_attendees.set(false)"
                    ></attendee-list>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      AttendeeListComponent,
      InteractiveMapComponent,
      SanitizePipe,
      MatMenuModule,
      MatDialogModule,
      AuthenticatedImageDirective
    ] }]
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: false }] }, { type: Output, args: ["eventChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventDetailsModalComponent, { className: "GroupEventDetailsModalComponent", filePath: "libs/events/src/lib/group-event-details-modal.component.ts", lineNumber: 477 });
})();

// libs/events/src/lib/group-event-card.component.ts
var _c02 = (a0) => ({ count: a0 });
function GroupEventCardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.event().images[0]);
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name || "", " ");
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function GroupEventCardComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275conditionalCreate(2, GroupEventCardComponent_Conditional_0_Conditional_2_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "p", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, GroupEventCardComponent_Conditional_0_Conditional_13_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "icon", 12);
    \u0275\u0275text(16, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, GroupEventCardComponent_Conditional_0_Conditional_17_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(18, GroupEventCardComponent_Conditional_0_Conditional_18_Template, 3, 3, "div", 10);
    \u0275\u0275conditionalCreate(19, GroupEventCardComponent_Conditional_0_Conditional_19_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "icon", 12);
    \u0275\u0275text(22, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.event().images?.length ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 11, ctx_r1.event().date, "EEE d MMM"), ", ", \u0275\u0275pipeBind2(7, 14, ctx_r1.event().date, ctx_r1.time_format()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.event().title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.event().title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.raw_description());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.raw_description().trim() ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.is_onsite() && ctx_r1.has_space() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_onsite() && !ctx_r1.has_space() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_onsite() ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 17, "CALENDAR_EVENT.GROUP_ATTENDING", \u0275\u0275pureFunction1(20, _c02, ctx_r1.event().attendees?.length || "0")), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.event().images[0]);
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name || "", " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function GroupEventCardComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275conditionalCreate(2, GroupEventCardComponent_Conditional_1_Conditional_2_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "icon", 17);
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "div", 21);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "h3", 24);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275pipe(23, "date");
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 26)(26, "p", 27);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, GroupEventCardComponent_Conditional_1_Conditional_28_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11)(30, "icon", 12);
    \u0275\u0275text(31, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, GroupEventCardComponent_Conditional_1_Conditional_32_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(33, GroupEventCardComponent_Conditional_1_Conditional_33_Template, 3, 3, "div", 10);
    \u0275\u0275conditionalCreate(34, GroupEventCardComponent_Conditional_1_Conditional_34_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 11)(36, "icon", 12);
    \u0275\u0275text(37, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 13);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 28);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.event().images?.length ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 15, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 17, ctx_r1.event().date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 20, ctx_r1.event().date, "d"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.event().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(22, 23, ctx_r1.event().date, "EEEE"), " ", \u0275\u0275pipeBind2(23, 26, ctx_r1.event().date, ctx_r1.time_format()), " - ", \u0275\u0275pipeBind2(24, 29, ctx_r1.event().date + ctx_r1.event().duration * 60 * 1e3, ctx_r1.time_format()), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.raw_description());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.raw_description().trim() ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.is_onsite() && ctx_r1.has_space() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_onsite() && !ctx_r1.has_space() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_onsite() ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 32, "CALENDAR_EVENT.GROUP_ATTENDING", \u0275\u0275pureFunction1(37, _c02, ctx_r1.attendee_count() || "0")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 35, "COMMON.VIEW_DETAILS"), " ");
  }
}
var GroupEventCardComponent = class _GroupEventCardComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this.event = input(
      void 0,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.featured = input(
      void 0,
      ...ngDevMode ? [{ debugName: "featured" }] : (
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
    this.raw_description = signal(
      "",
      ...ngDevMode ? [{ debugName: "raw_description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_onsite = computed(
      () => this.event()?.extension_data.attendance_type !== "ONLINE",
      ...ngDevMode ? [{ debugName: "is_onsite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.space()?.id,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_online = computed(
      () => !this.is_onsite || this.event()?.extension_data.attendance_type === "ANY",
      ...ngDevMode ? [{ debugName: "is_online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_event_calendar = settingSignal("group_events_calendar");
    this.attendee_count = computed(
      () => this.event()?.attendees?.filter((user) => user.email !== this.group_event_calendar())?.length || 0,
      ...ngDevMode ? [{ debugName: "attendee_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_24_hour = settingSignal("use_24_hour_time");
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar());
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.raw_description.set(this.removeHtmlTags(this.event().body));
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  viewDetails() {
    this._dialog.open(GroupEventDetailsModalComponent, {
      data: { event: this.event(), concierge: false }
    });
  }
  static {
    this.\u0275fac = function GroupEventCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventCardComponent, selectors: [["group-event-card"]], inputs: { event: [1, "event"], featured: [1, "featured"] }, decls: 2, vars: 1, consts: [["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-80", "w-60", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "h-56", "w-252", "max-w-full", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-80", "w-60", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-28", "min-h-28", "w-full", "items-center", "justify-between", "overflow-hidden", "border-b"], ["auth", "", 1, "absolute", "top-0", "left-0", "h-full", "w-full", "object-cover", "object-center", 3, "source"], [1, "h-1/2", "w-full", "flex-1", "p-4"], [1, "text-left", "text-sm", "opacity-60"], [1, "mb-2", "w-full", "truncate", "text-left", "text-xl", 3, "title"], [1, "mb-2", "h-18", "flex-1", "overflow-hidden", "text-left", "text-xs", "opacity-60"], [1, "line-clamp-4"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, ""], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "h-56", "w-252", "max-w-full", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "max-w-[18rem]", "items-center", "justify-between", "overflow-hidden", "border-r"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br-xl", "py-2", "pr-4", "pl-2", "text-sm"], [1, "text-base"], [1, "uppercase"], ["details", "", 1, "flex", "w-1/2", "max-w-[calc(100%-18rem)]", "flex-1", "space-x-4", "overflow-hidden", "px-4", "py-4"], [1, "flex", "flex-col", "items-center"], [1, "text-sm", "opacity-30"], [1, "text-lg"], [1, "flex", "w-px", "flex-1", "flex-col", "space-y-2"], [1, "text-left"], ["time", "", 1, "text-left", "text-sm", "opacity-30"], [1, "h-20", "overflow-hidden", "text-left"], [1, "line-clamp-3"], [1, "bg-secondary", "text-secondary-content", "absolute", "top-4", "right-4", "w-32", "truncate", "rounded-sm", "px-4", "py-2", "text-center"]], template: function GroupEventCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GroupEventCardComponent_Conditional_0_Template, 26, 22, "button", 0)(1, GroupEventCardComponent_Conditional_1_Template, 44, 39, "button", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.featured() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      RouterModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe
    ], styles: ["\nbutton[_ngcontent-%COMP%] {\n  transition: box-shadow 300ms, border 200ms;\n}\n/*# sourceMappingURL=group-event-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventCardComponent, [{
    type: Component,
    args: [{ selector: "group-event-card", template: `
        @if (!featured()) {
            <button
                matRipple
                (click)="viewDetails()"
                class="border-base-300 bg-base-100 hover:border-info flex h-80 w-60 flex-col overflow-hidden rounded-xl border shadow-sm hover:shadow-2xl"
            >
                <div
                    class="border-base-200 bg-base-200 relative flex h-28 min-h-28 w-full items-center justify-between overflow-hidden border-b"
                >
                    @if (event().images?.length) {
                        <img
                            auth
                            [source]="event().images[0]"
                            class="absolute top-0 left-0 h-full w-full object-cover object-center"
                        />
                    }
                </div>
                <div class="h-1/2 w-full flex-1 p-4">
                    <div class="text-left text-sm opacity-60">
                        {{ event().date | date: 'EEE d MMM' }},
                        {{ event().date | date: time_format() }}
                    </div>
                    <h2
                        class="mb-2 w-full truncate text-left text-xl"
                        [title]="event().title"
                    >
                        {{ event().title }}
                    </h2>
                    <div
                        class="mb-2 h-18 flex-1 overflow-hidden text-left text-xs opacity-60"
                    >
                        <p class="line-clamp-4">{{ raw_description() }}</p>
                        @if (!raw_description().trim()) {
                            <p class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </p>
                        }
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <icon class="text-info">place</icon>
                        @if (is_onsite() && has_space()) {
                            <div>
                                {{ space().display_name || space().name || '' }}
                            </div>
                        }
                        @if (is_onsite() && !has_space()) {
                            <div class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                        | translate
                                }}
                            </div>
                        }
                        @if (!is_onsite()) {
                            <div class="opacity-30">
                                {{ 'CALENDAR_EVENT.GROUP_REMOTE' | translate }}
                            </div>
                        }
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <icon class="text-info">people</icon>
                        <div class="">
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDING'
                                    | translate
                                        : {
                                              count:
                                                  event().attendees?.length ||
                                                  '0',
                                          }
                            }}
                        </div>
                    </div>
                </div>
            </button>
        } @else {
            <button
                matRipple
                (click)="viewDetails()"
                class="border-base-300 bg-base-100 hover:border-info mx-auto flex h-56 w-252 max-w-full overflow-hidden rounded-xl border shadow-sm hover:shadow-2xl"
            >
                <div
                    class="border-base-200 bg-base-200 relative flex h-full w-1/2 max-w-[18rem] items-center justify-between overflow-hidden border-r"
                >
                    @if (event().images?.length) {
                        <img
                            auth
                            [source]="event().images[0]"
                            class="absolute top-0 left-0 h-full w-full object-cover object-center"
                        />
                    }
                </div>
                <div
                    class="bg-info text-info-content absolute top-0 left-0 flex items-center space-x-2 rounded-br-xl py-2 pr-4 pl-2 text-sm"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
                <div
                    details
                    class="flex w-1/2 max-w-[calc(100%-18rem)] flex-1 space-x-4 overflow-hidden px-4 py-4"
                >
                    <div class="flex flex-col items-center">
                        <div class="text-sm opacity-30">
                            {{ event().date | date: 'MMM' }}
                        </div>
                        <div class="text-lg">
                            {{ event().date | date: 'd' }}
                        </div>
                    </div>
                    <div class="flex w-px flex-1 flex-col space-y-2">
                        <h3 class="text-left">{{ event().title }}</h3>
                        <div time class="text-left text-sm opacity-30">
                            {{ event().date | date: 'EEEE' }}
                            {{ event().date | date: time_format() }} -
                            {{
                                event().date + event().duration * 60 * 1000
                                    | date: time_format()
                            }}
                        </div>
                        <div class="h-20 overflow-hidden text-left">
                            <p class="line-clamp-3">{{ raw_description() }}</p>
                            @if (!raw_description().trim()) {
                                <p class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                            | translate
                                    }}
                                </p>
                            }
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">place</icon>
                            @if (is_onsite() && has_space()) {
                                <div>
                                    {{
                                        space().display_name ||
                                            space().name ||
                                            ''
                                    }}
                                </div>
                            }
                            @if (is_onsite() && !has_space()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (!is_onsite()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_REMOTE'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">people</icon>
                            <div class="">
                                {{
                                    'CALENDAR_EVENT.GROUP_ATTENDING'
                                        | translate
                                            : {
                                                  count:
                                                      attendee_count() || '0',
                                              }
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-secondary text-secondary-content absolute top-4 right-4 w-32 truncate rounded-sm px-4 py-2 text-center"
                >
                    {{ 'COMMON.VIEW_DETAILS' | translate }}
                </div>
            </button>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      RouterModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;8c74ff6cf8408fff8ffe57cc48d0258398d7d0d3ddd3849e71b02b24c0576926;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/group-event-card.component.ts */\nbutton {\n  transition: box-shadow 300ms, border 200ms;\n}\n/*# sourceMappingURL=group-event-card.component.css.map */\n"] }]
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: false }] }], featured: [{ type: Input, args: [{ isSignal: true, alias: "featured", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventCardComponent, { className: "GroupEventCardComponent", filePath: "libs/events/src/lib/group-event-card.component.ts", lineNumber: 237 });
})();

// apps/concierge/src/app/events/event-state.service.ts
var EventStateService = class _EventStateService extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._changed = signal(
      0,
      ...ngDevMode ? [{ debugName: "_changed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = signal(
      { period: "week" },
      ...ngDevMode ? [{ debugName: "options" }] : (
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
    this.event_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "event_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_day_map = computed(
      () => {
        const map = {};
        for (const event of this.event_list()) {
          const date = format(event.date, "yyyy-MM-dd");
          if (!map[date])
            map[date] = [];
          const start = new Date(event.date);
          map[date].push(__spreadProps(__spreadValues({}, event), {
            offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
            length: event.duration / (24 * 60)
          }));
        }
        return map;
      },
      ...ngDevMode ? [{ debugName: "event_day_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const bld = this._org.active_building();
      const options = this.options();
      this._changed();
      this._poll();
      if (!bld)
        return;
      this.timeout("load", () => this._load(options), 310);
    });
  }
  async _load(options) {
    this.loading.set(i18n("APP.CONCIERGE.EVENTS_LOADING"));
    let list = await queryEvents({
      period_start: getUnixTime(startOfDay(options.date)),
      period_end: getUnixTime(endOfDay(options.end || options.date || Date.now())),
      calendars: this.calendar
    });
    const zone_ids = options.zone_ids || [];
    if (zone_ids.length) {
      list = list.filter((event) => event.resources?.some((space) => (space.zones || []).some((zone) => zone_ids.includes(zone))));
    }
    list = list.filter((_) => _.extension_data?.shared_event).sort((a, b) => a.date - b.date);
    this.event_list.set(list);
    this.loading.set("");
  }
  changed() {
    this.timeout("changed", () => this._changed.set(Date.now()), 100);
  }
  get period() {
    return this.options()?.period;
  }
  get calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  startPolling(delay = 3 * MINUTES) {
    const poll_delay = Math.max(delay, 3 * MINUTES);
    this.interval("poll", () => document.hasFocus() ? this._poll.set(Date.now()) : "", poll_delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    const current_options = this.options();
    const next_options = __spreadValues(__spreadValues({}, current_options), options);
    if (this._sameOptions(current_options, next_options))
      return;
    this.options.set(next_options);
  }
  _sameOptions(current_options, next_options) {
    return current_options?.period === next_options?.period && current_options?.date === next_options?.date && current_options?.end === next_options?.end && this._sameZoneIds(current_options?.zone_ids, next_options?.zone_ids);
  }
  _sameZoneIds(zone_ids_a = [], zone_ids_b = []) {
    if (zone_ids_a === zone_ids_b)
      return true;
    if (zone_ids_a.length !== zone_ids_b.length)
      return false;
    return zone_ids_a.every((zone_id, index) => zone_id === zone_ids_b[index]);
  }
  viewEvent(event) {
    const ref = this._dialog.open(GroupEventDetailsModalComponent, {
      data: {
        event,
        concierge: true,
        edit_fn: (i) => this._router.navigate([
          "/entertainment",
          "events",
          "manage",
          event.id
        ]),
        remove_fn: async () => {
          await this.removeEvent(event);
          ref.close();
        }
      }
    });
  }
  async removeEvent(event) {
    const result = await openConfirmModal({
      title: i18n("APP.CONCIERGE.EVENTS_REMOVE_TITLE"),
      content: i18n("APP.CONCIERGE.EVENTS_REMOVE_MSG", {
        title: event.title
      }),
      icon: { content: "delete" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("APP.CONCIERGE.EVENTS_REMOVE_LOADING"));
    await removeEvent(event.id, {
      calendar: this.calendar
    }).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.EVENTS_REMOVE_ERROR", { error: e }));
      result.close();
      throw e;
    });
    result.close();
    notifySuccess(i18n("APP.CONCIERGE.EVENTS_REMOVE_SUCCESS"));
    this._changed.set(Date.now());
  }
  static {
    this.\u0275fac = function EventStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventStateService, factory: _EventStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/events/event-manage.component.ts
var _c03 = () => ["/entertainment", "events"];
var _c12 = () => ({ standalone: true });
function EventManageComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c03));
  }
}
function EventManageComponent_Conditional_0_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 48);
    \u0275\u0275listener("removed", function EventManageComponent_Conditional_0_For_32_Template_mat_chip_row_removed_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeTag(tag_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 49);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 50)(2, "label", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 52);
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_71_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50)(9, "label", 53);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "a-time-field", 54);
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_71_Template_a_time_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.model.update((m) => __spreadProps(__spreadValues({}, m), { date_end: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.model().date)("disabled", ctx_r3.form.date().disabled())("ngModelOptions", \u0275\u0275pureFunction0(15, _c12))("use_24hr", ctx_r3.use_24hr);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.model().date_end || ctx_r3.model().date + ctx_r3.model().duration * 60 * 1e3)("ngModelOptions", \u0275\u0275pureFunction0(16, _c12))("from", ctx_r3.model().date + 30 * 60 * 1e3)("use_24hr", ctx_r3.use_24hr)("extra_info_fn", ctx_r3.duration_info);
    \u0275\u0275control();
  }
}
function EventManageComponent_Conditional_0_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    \u0275\u0275property("value", tz_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r6, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const building_r8 = ctx.$implicit;
    \u0275\u0275property("value", building_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", building_r8.display_name || building_r8.name, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r9 = ctx.$implicit;
    \u0275\u0275property("value", level_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r9.display_name || level_r9.name, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r10 = ctx.$implicit;
    \u0275\u0275property("value", room_r10.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", room_r10.display_name || room_r10.name, " ");
  }
}
function EventManageComponent_Conditional_0_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 35)(4, "mat-select", 56);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_109_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(6, EventManageComponent_Conditional_0_Conditional_109_For_7_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 57)(9, "div", 58)(10, "label", 59);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 35)(14, "mat-select", 56);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_109_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLevel($event));
    });
    \u0275\u0275repeaterCreate(16, EventManageComponent_Conditional_0_Conditional_109_For_17_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 60)(19, "label", 59);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 35)(23, "mat-select", 61);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventManageComponent_Conditional_0_Conditional_109_Template_mat_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.resource, $event) || (ctx_r3.resource = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "mat-option")(26, "i");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(29, EventManageComponent_Conditional_0_Conditional_109_For_30_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 14, "RESOURCE.BUILDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.building_zone)("ngModelOptions", \u0275\u0275pureFunction0(28, _c12))("placeholder", \u0275\u0275pipeBind1(5, 16, "COMMON.BUILDING_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.building_list());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "RESOURCE.LEVEL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r3.level_zone)("ngModelOptions", \u0275\u0275pureFunction0(29, _c12))("placeholder", \u0275\u0275pipeBind1(15, 20, "COMMON.LEVEL_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.active_levels());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 22, "RESOURCE.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.resource);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(30, _c12))("disabled", ctx_r3.available_spaces().length === 0)("placeholder", \u0275\u0275pipeBind1(24, 24, "COMMON.ROOM_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 26, "COMMON.NONE"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.available_spaces());
  }
}
function EventManageComponent_Conditional_0_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 47)(1, "button", 62);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Conditional_124_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.SAVE"), " ");
  }
}
function EventManageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "header", 4)(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, EventManageComponent_Conditional_0_Conditional_5_Template, 3, 2, "a", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 7)(7, "section", 8)(8, "label", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 10);
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 12);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275element(24, "a-user-search-field", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 16)(29, "mat-chip-grid", 17, 0);
    \u0275\u0275repeaterCreate(31, EventManageComponent_Conditional_0_For_32_Template, 4, 2, "mat-chip-row", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(33, "input", 19);
    \u0275\u0275listener("matChipInputTokenEnd", function EventManageComponent_Conditional_0_Template_input_matChipInputTokenEnd_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addTag($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 20);
    \u0275\u0275element(35, "settings-toggle", 21);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(37, "mat-form-field", 16)(38, "mat-select", 14)(39, "mat-option", 22);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 23);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-option", 24);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275element(48, "div", 25);
    \u0275\u0275elementStart(49, "h3", 26);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 27)(53, "div", 28)(54, "label", 29);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "a-date-field", 30);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 28)(63, "label", 29);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "a-date-field", 31);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(71, EventManageComponent_Conditional_0_Conditional_71_Template, 15, 17, "div", 32);
    \u0275\u0275elementStart(72, "div", 33)(73, "label", 34);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-form-field", 35)(77, "icon", 36);
    \u0275\u0275text(78, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 37);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(83, EventManageComponent_Conditional_0_For_84_Template, 2, 2, "mat-option", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(85, EventManageComponent_Conditional_0_Conditional_85_Template, 3, 4, "mat-option", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(86, "div", 25);
    \u0275\u0275elementStart(87, "h3", 26);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 40)(91, "button", 41);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.model.update((m) => __spreadProps(__spreadValues({}, m), { attendance_type: "ONSITE" })));
    });
    \u0275\u0275elementStart(92, "icon", 42);
    \u0275\u0275text(93, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 43);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "button", 41);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.model.update((m) => __spreadProps(__spreadValues({}, m), { attendance_type: "ONLINE" })));
    });
    \u0275\u0275elementStart(98, "icon", 42);
    \u0275\u0275text(99, "laptop_mac");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 43);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "button", 41);
    \u0275\u0275listener("click", function EventManageComponent_Conditional_0_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.model.update((m) => __spreadProps(__spreadValues({}, m), { attendance_type: "ANY" })));
    });
    \u0275\u0275elementStart(104, "icon", 42);
    \u0275\u0275text(105, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 43);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(109, EventManageComponent_Conditional_0_Conditional_109_Template, 31, 31);
    \u0275\u0275element(110, "div", 25);
    \u0275\u0275elementStart(111, "h3", 26);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(114);
    \u0275\u0275elementStart(115, "label", 44);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 45);
    \u0275\u0275element(119, "rich-text-input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "label", 46);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(123, "image-list-field", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(124, EventManageComponent_Conditional_0_Conditional_124_Template, 4, 3, "footer", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chipList_r12 = \u0275\u0275reference(30);
    const auto_r13 = \u0275\u0275reference(82);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 52, ctx_r3.model().id ? "APP.CONCIERGE.EVENTS_EDIT" : "APP.CONCIERGE.EVENTS_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.loading() ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 54, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r3.form.title);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 56, "FORM.TITLE_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 58, "FORM.HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r3.form.organiser);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 60, "COMMON.TAGS"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.tag_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r12)("matChipInputSeparatorKeyCodes", ctx_r3.separators)("matChipInputAddOnBlur", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(36, 62, "CALENDAR_EVENT.GROUP_FEATURED"))("formField", ctx_r3.form.featured);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.view_access);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 64, "APP.CONCIERGE.EVENTS_DRAFT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 66, "APP.CONCIERGE.EVENTS_PUBLISH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 68, "APP.CONCIERGE.EVENTS_PUBLISH_PUBLIC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 70, "APP.CONCIERGE.EVENTS_DATE_TIME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 72, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r3.form.date)("to", ctx_r3.end_date);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 74, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 76, "FORM.DATE_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r3.form.date_end)("from", ctx_r3.start_date())("to", ctx_r3.end_date);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 78, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.model().all_day ? 71 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 80, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r3.form.timezone)("placeholder", \u0275\u0275pipeBind1(80, 82, "COMMON.TIMEZONE"))("matAutocomplete", auto_r13);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.filtered_timezones());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.filtered_timezones().length ? 85 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 84, "COMMON.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", false)("inverse", ctx_r3.model().attendance_type !== "ONSITE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 86, "APP.CONCIERGE.EVENTS_LOCATION_ONSITE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r3.model().attendance_type !== "ONLINE");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(102, 88, "APP.CONCIERGE.EVENTS_LOCATION_ONLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r3.model().attendance_type !== "ANY");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(108, 90, "APP.CONCIERGE.EVENTS_LOCATION_BOTH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.model().attendance_type !== "ONLINE" ? 109 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 92, "APP.CONCIERGE.EVENTS_INFO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(117, 94, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r3.form.body);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(122, 96, "COMMON.IMAGES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r3.form.images);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.loading() ? 124 : -1);
  }
}
function EventManageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 63);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.EVENTS_SAVING"));
  }
}
var EMPTY = [];
var EventManageComponent = class _EventManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._form_state = inject(EventFormService);
    this._state = inject(EventStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource = signal(
      "",
      ...ngDevMode ? [{ debugName: "resource" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = this._form_state.form;
    this.model = this._form_state.model;
    this._form_value = this.model;
    this.separators = [ENTER, COMMA, SPACE];
    this.building_list = this._org.building_list;
    this.active_levels = this._org.active_levels;
    this.available_spaces = this._form_state.available_spaces;
    this.tag_list = computed(
      () => this._form_value()?.tags || EMPTY,
      ...ngDevMode ? [{ debugName: "tag_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_timezones = computed(
      () => {
        const timezone = this._form_value()?.timezone || "";
        return TIMEZONES_IANA.filter((_) => _.toLowerCase().includes(timezone.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_date = computed(
      () => this._form_value()?.date,
      ...ngDevMode ? [{ debugName: "start_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration_info = (time) => {
      const date = this.model().date;
      if (format(date, "yyyy-MM-dd") !== format(time, "yyyy-MM-dd"))
        return "";
      const diff = differenceInMinutes(time, date);
      return ` (${formatDuration({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      })})`;
    };
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get end_date() {
    return this._settings.get("app.events.available_period") ? startOfDay(Date.now()).valueOf() + this._settings.get("app.events.available_period") * 24 * 60 * 60 * 1e3 : void 0;
  }
  get building_zone() {
    const level = this.level_zone;
    const building = this._org.buildings.find((b) => b.id === level?.parent_id);
    return building || this._org.building;
  }
  get level_zone() {
    const zones = this._form_state.options().zones || [];
    return this._org.levelWithID(zones);
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const space_pipe = new SpacePipe();
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      location: this._org.building.address || this._org.building.display_name,
      organiser: currentUser(),
      attendance_type: "ONSITE",
      shared_event: true
    }));
    if (!this.model().view_access)
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { view_access: "OPEN" }));
    this.subscription("route.params", this._route.paramMap.subscribe(async (params) => {
      if (params.has("id")) {
        let booking = await showEvent(params.get("id"), {
          calendar: this._state.calendar
        });
        const space = await space_pipe.transform(this._state.calendar);
        const metadata = await showEventMetadata(params.get("id"), space?.id || booking.system?.id, { ical_uid: booking.ical_uid }).catch(() => ({}));
        booking = new CalendarEvent(__spreadProps(__spreadValues({}, booking), {
          extension_data: __spreadValues(__spreadValues({}, booking.extension_data), metadata)
        }));
        if (!booking)
          return this._router.navigate([
            "/entertainment",
            "events"
          ]);
        this._form_state.newForm(booking);
        this.resource.set(booking.resources.find((_) => _.email !== this._state.calendar)?.email);
        this.model.update((m) => __spreadValues(__spreadProps(__spreadValues({}, m), {
          tags: booking.extension_data?.tags || [],
          organiser: new StaffUser({
            id: booking.organiser?.id,
            email: booking.host,
            name: booking.organiser?.name
          }),
          resources: booking.resources.filter((_) => _.email !== this._state.calendar)
        }), metadata));
        if (!this.model().view_access)
          this.model.update((m) => __spreadProps(__spreadValues({}, m), {
            view_access: "OPEN"
          }));
      }
    }));
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  setLevel(level) {
    const new_zones = unique([
      this._org.organisation.id,
      this._org.building.parent_id,
      this._org.building.id,
      level.id
    ]);
    this._form_state.setOptions({ zones: [level.id] });
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.tags)
      return;
    const input2 = event.chipInput.inputElement;
    const value = event.value;
    const feature_list = [...this.tag_list()];
    if ((value || "").trim()) {
      feature_list.push(value);
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { tags: feature_list }));
    }
    if (input2)
      input2.value = "";
  }
  /**
   * Remove tag from the list
   * @param existing_tag Feature to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.tags)
      return;
    const tag_list = [...this.tag_list()];
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { tags: tag_list }));
    }
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(`Some form fields are invalid. [${getInvalidSignalFields(this.form, this.model)}]`);
    }
    this.loading.set(true);
    let resources = this.model().resources;
    const space = await new SpacePipe().transform(this._state.calendar);
    resources.push(space || new Space({
      id: this._state.calendar,
      email: this._state.calendar
    }));
    if (this.resource()) {
      const resource = await new SpacePipe().transform(this.resource());
      resources.push(resource);
    }
    resources = unique(resources, "email");
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      resources,
      creator: currentUser()?.email,
      host: this._state.calendar,
      shared_event: true
    }));
    const date = this.model().date;
    const res = await this._form_state.postForm(false, [this._state.calendar], true, true).catch((e) => notifyError(e));
    this._state.changed();
    this.loading.set(false);
    if (res) {
      this._router.navigate(["/entertainment", "events"], {
        queryParams: { range: startOfDay(date).valueOf() }
      });
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EventManageComponent_BaseFactory;
      return function EventManageComponent_Factory(__ngFactoryType__) {
        return (\u0275EventManageComponent_BaseFactory || (\u0275EventManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventManageComponent)))(__ngFactoryType__ || _EventManageComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventManageComponent, selectors: [["app-event-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["chipList", ""], ["auto", "matAutocomplete"], [1, "bg-base-100", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "mx-auto", "my-2", "flex", "w-160", "max-w-full", "flex-col", "px-4", "pb-16"], [1, "flex", "flex-col", "space-y-2"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "e.g. Team Meeting", 3, "formField"], ["for", "host"], [1, "pb-4"], [3, "formField"], ["for", "tags"], ["appearance", "outline", 1, "no-subscript"], ["aria-label", "Event Tags"], [3, "removable"], ["placeholder", "Add new tags relevant to this event...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "flex", "items-center", "space-x-2", "py-4"], [1, "flex-1", 3, "label", "formField"], ["value", "PRIVATE"], ["value", "OPEN"], ["value", "PUBLIC"], [1, "bg-base-200", "h-px", "w-full"], [1, "py-4", "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "relative", "min-w-[256px]", "flex-1"], ["for", "date"], [3, "formField", "to"], [3, "formField", "from", "to"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], [1, "flex", "items-center", "space-x-2", "pb-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "text-2xl"], [1, "mx-2"], ["for", "description"], [1, "mb-16"], ["for", "images"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], [3, "removed", "removable"], ["matChipRemove", ""], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "use_24hr"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "extra_info_fn"], ["for", "location"], [3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "flex", "space-x-2"], [1, "flex", "flex-2", "flex-col"], ["for", "level"], [1, "flex", "flex-3", "flex-col"], [3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["diameter", "48"]], template: function EventManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, EventManageComponent_Conditional_0_Template, 125, 98, "div", 2)(1, EventManageComponent_Conditional_1_Template, 5, 3, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ImageListFieldComponent,
      RichTextInputComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatPrefix,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      MatChipsModule,
      MatChipGrid,
      MatChipInput,
      MatChipRemove,
      MatChipRow,
      MatAutocompleteModule,
      MatAutocomplete,
      MatAutocompleteTrigger,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      FormField,
      SettingsToggleComponent,
      DateFieldComponent,
      TimeFieldComponent,
      UserSearchFieldComponent,
      RouterModule,
      RouterLink,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManageComponent, [{
    type: Component,
    args: [{ selector: "app-event-manage", template: `
        @if (!loading()) {
            <div class="bg-base-100 absolute inset-0 overflow-auto">
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (model().id
                                ? 'APP.CONCIERGE.EVENTS_EDIT'
                                : 'APP.CONCIERGE.EVENTS_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a
                            icon
                            matRipple
                            [routerLink]="['/entertainment', 'events']"
                        >
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="mx-auto my-2 flex w-160 max-w-full flex-col px-4 pb-16"
                >
                    <section class="flex flex-col space-y-2">
                        <label for="title"
                            >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.title"
                                placeholder="e.g. Team Meeting"
                            />
                            <mat-error>
                                {{ 'FORM.TITLE_ERROR' | translate }}
                            </mat-error>
                        </mat-form-field>
                        <label for="host"
                            >{{ 'FORM.HOST' | translate }}<span>*</span></label
                        >
                        <div class="pb-4">
                            <a-user-search-field
                                [formField]="form.organiser"
                            ></a-user-search-field>
                        </div>
                        <label for="tags">{{
                            'COMMON.TAGS' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-chip-grid #chipList aria-label="Event Tags">
                                @for (tag of tag_list(); track tag) {
                                    <mat-chip-row
                                        [removable]="true"
                                        (removed)="removeTag(tag)"
                                    >
                                        {{ tag }}
                                        <icon matChipRemove>close</icon>
                                    </mat-chip-row>
                                }
                                <input
                                    placeholder="Add new tags relevant to this event..."
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addTag($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                        <div class="flex items-center space-x-2 py-4">
                            <settings-toggle
                                class="flex-1"
                                [label]="
                                    'CALENDAR_EVENT.GROUP_FEATURED' | translate
                                "
                                [formField]="form.featured"
                            >
                            </settings-toggle>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select [formField]="form.view_access">
                                    <mat-option value="PRIVATE">{{
                                        'APP.CONCIERGE.EVENTS_DRAFT' | translate
                                    }}</mat-option>
                                    <mat-option value="OPEN">{{
                                        'APP.CONCIERGE.EVENTS_PUBLISH'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="PUBLIC">{{
                                        'APP.CONCIERGE.EVENTS_PUBLISH_PUBLIC'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- END BASIC DETAILS -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_DATE_TIME' | translate }}
                        </h3>
                        <div class="flex flex-wrap items-center sm:space-x-2">
                            <div class="relative min-w-[256px] flex-1">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    [formField]="form.date"
                                    [to]="end_date"
                                >
                                    {{ 'FORM.DATE_ERROR' | translate }}
                                </a-date-field>
                            </div>
                            <div class="relative min-w-[256px] flex-1">
                                <label for="date">
                                    {{ 'FORM.DATE_END' | translate }}
                                    <span>*</span>
                                </label>
                                <a-date-field
                                    [formField]="form.date_end"
                                    [from]="start_date()"
                                    [to]="end_date"
                                >
                                    {{ 'FORM.DATE_ERROR' | translate }}
                                </a-date-field>
                            </div>
                        </div>
                        @if (!model().all_day) {
                            <div class="flex items-center space-x-2">
                                <div class="w-1/3 flex-1">
                                    <label for="start-time">
                                        {{ 'FORM.TIME_START' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="start-time"
                                        [ngModel]="model().date"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                date: $event,
                                            }))
                                        "
                                        [disabled]="form.date().disabled()"
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [use_24hr]="use_24hr"
                                    ></a-time-field>
                                </div>
                                <div class="w-1/3 flex-1">
                                    <label for="end-time">
                                        {{ 'FORM.TIME_END' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="end-time"
                                        [ngModel]="
                                            model().date_end ||
                                            model().date +
                                                model().duration * 60 * 1000
                                        "
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                date_end: $event,
                                            }))
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [from]="model().date + 30 * 60 * 1000"
                                        [use_24hr]="use_24hr"
                                        [extra_info_fn]="duration_info"
                                    ></a-time-field>
                                </div>
                            </div>
                        }
                        <div class="flex flex-col">
                            <label for="display-name">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <icon matPrefix class="text-2xl"> search </icon>
                                <input
                                    matInput
                                    [formField]="form.timezone"
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [matAutocomplete]="auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                @for (tz of filtered_timezones(); track tz) {
                                    <mat-option [value]="tz">
                                        {{ tz }}
                                    </mat-option>
                                }
                                @if (!filtered_timezones().length) {
                                    <mat-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                        <!-- END DATE TIME -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'COMMON.LOCATION' | translate }}
                        </h3>
                        <div class="flex items-center space-x-2 pb-2">
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="false"
                                [class.inverse]="
                                    model().attendance_type !== 'ONSITE'
                                "
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        attendance_type: 'ONSITE',
                                    }))
                                "
                            >
                                <icon class="text-2xl">domain</icon>
                                <div class="mx-2">
                                    {{
                                        'APP.CONCIERGE.EVENTS_LOCATION_ONSITE'
                                            | translate
                                    }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="
                                    model().attendance_type !== 'ONLINE'
                                "
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        attendance_type: 'ONLINE',
                                    }))
                                "
                            >
                                <icon class="text-2xl">laptop_mac</icon>
                                <div class="mx-2">
                                    {{
                                        'APP.CONCIERGE.EVENTS_LOCATION_ONLINE'
                                            | translate
                                    }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="
                                    model().attendance_type !== 'ANY'
                                "
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        attendance_type: 'ANY',
                                    }))
                                "
                            >
                                <icon class="text-2xl">add</icon>
                                <div class="mx-2">
                                    {{
                                        'APP.CONCIERGE.EVENTS_LOCATION_BOTH'
                                            | translate
                                    }}
                                </div>
                            </button>
                        </div>
                        @if (model().attendance_type !== 'ONLINE') {
                            <label for="location">
                                {{ 'RESOURCE.BUILDING' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [ngModel]="building_zone"
                                    [ngModelOptions]="{ standalone: true }"
                                    (ngModelChange)="setBuilding($event)"
                                    [placeholder]="
                                        'COMMON.BUILDING_SELECT' | translate
                                    "
                                >
                                    @for (
                                        building of building_list();
                                        track building
                                    ) {
                                        <mat-option [value]="building">
                                            {{
                                                building.display_name ||
                                                    building.name
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <div class="flex space-x-2">
                                <div class="flex flex-2 flex-col">
                                    <label for="level">{{
                                        'RESOURCE.LEVEL' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="level_zone"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="setLevel($event)"
                                            [placeholder]="
                                                'COMMON.LEVEL_SELECT'
                                                    | translate
                                            "
                                        >
                                            @for (
                                                level of active_levels();
                                                track level
                                            ) {
                                                <mat-option [value]="level">
                                                    {{
                                                        level.display_name ||
                                                            level.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex flex-3 flex-col">
                                    <label for="level">{{
                                        'RESOURCE.ROOM' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [(ngModel)]="resource"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [disabled]="
                                                available_spaces().length === 0
                                            "
                                            [placeholder]="
                                                'COMMON.ROOM_SELECT' | translate
                                            "
                                        >
                                            <mat-option
                                                ><i>{{
                                                    'COMMON.NONE' | translate
                                                }}</i></mat-option
                                            >
                                            @for (
                                                room of available_spaces();
                                                track room
                                            ) {
                                                <mat-option
                                                    [value]="room.email"
                                                >
                                                    {{
                                                        room.display_name ||
                                                            room.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                        }
                        <!-- END LOCATION -->
                        <div class="bg-base-200 h-px w-full"></div>
                        <h3 class="py-4 text-2xl font-medium">
                            {{ 'APP.CONCIERGE.EVENTS_INFO' | translate }}
                        </h3>
                        <ng-container>
                            <label for="description">
                                {{ 'COMMON.DESCRIPTION' | translate }}
                            </label>
                            <div class="mb-16">
                                <rich-text-input
                                    [formField]="form.body"
                                ></rich-text-input>
                            </div>
                            <label for="images">
                                {{ 'COMMON.IMAGES' | translate }}
                            </label>
                            <image-list-field
                                [formField]="form.images"
                            ></image-list-field>
                        </ng-container>
                    </section>
                    @if (!loading()) {
                        <footer
                            class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                        >
                            <button btn matRipple class="w-32" (click)="save()">
                                {{ 'COMMON.SAVE' | translate }}
                            </button>
                        </footer>
                    }
                </form>
            </div>
        } @else {
            <div
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.EVENTS_SAVING' | translate }}</p>
            </div>
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      ImageListFieldComponent,
      RichTextInputComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatChipsModule,
      MatAutocompleteModule,
      FormsModule,
      FormField,
      SettingsToggleComponent,
      DateFieldComponent,
      TimeFieldComponent,
      UserSearchFieldComponent,
      RouterModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventManageComponent, { className: "EventManageComponent", filePath: "apps/concierge/src/app/events/event-manage.component.ts", lineNumber: 505 });
})();

// apps/concierge/src/app/events/event-view.component.ts
function EventViewComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "group-event-details-modal", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("event", ctx_r0.event());
  }
}
function EventViewComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "icon", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Event not found.");
    \u0275\u0275elementEnd()();
  }
}
function EventViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventViewComponent_Conditional_1_Conditional_0_Template, 2, 1, "div", 2)(1, EventViewComponent_Conditional_1_Conditional_1_Template, 4, 0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.event() ? 0 : 1);
  }
}
function EventViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading event details...");
    \u0275\u0275elementEnd()();
  }
}
var EventViewComponent = class _EventViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = signal(
      null,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id"))
        this._loadEvent(params.get("id"));
    }));
  }
  async _loadEvent(id) {
    const calendar = this._settings.get("app.group_events_calendar") || "";
    this.loading.set(true);
    const space_pipe = new SpacePipe();
    const booking = await showEvent(id, { calendar }).catch();
    if (!booking)
      return this.loading.set(false);
    const space = await space_pipe.transform(calendar);
    const metadata = await showEventMetadata(id, space?.id || booking.system?.id, {
      ical_uid: booking.ical_uid
    }).catch(() => ({}));
    this.event.set(new CalendarEvent(__spreadProps(__spreadValues({}, booking), {
      extension_data: __spreadValues(__spreadValues({}, booking.extension_data), metadata)
    })));
    this.loading.set(false);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EventViewComponent_BaseFactory;
      return function EventViewComponent_Factory(__ngFactoryType__) {
        return (\u0275EventViewComponent_BaseFactory || (\u0275EventViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EventViewComponent)))(__ngFactoryType__ || _EventViewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventViewComponent, selectors: [["group-event-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "items-center", "p-4"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-sm", "border"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "opacity-30"], [3, "event"], [1, "text-6xl"], ["diameter", "32"]], template: function EventViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, EventViewComponent_Conditional_1_Template, 2, 1)(2, EventViewComponent_Conditional_2_Template, 4, 0, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 1 : 2);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      GroupEventDetailsModalComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventViewComponent, [{
    type: Component,
    args: [{ selector: "group-event-view", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center p-4"
        >
            @if (!loading()) {
                @if (event()) {
                    <div
                        class="border-base-300 bg-base-100 overflow-hidden rounded-sm border"
                    >
                        <group-event-details-modal [event]="event()" />
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-4 opacity-30"
                    >
                        <icon class="text-6xl"></icon>
                        <p>Event not found.</p>
                    </div>
                }
            } @else {
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" />
                    <p>Loading event details...</p>
                </div>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      IconComponent,
      GroupEventDetailsModalComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventViewComponent, { className: "EventViewComponent", filePath: "apps/concierge/src/app/events/event-view.component.ts", lineNumber: 56 });
})();

// apps/concierge/src/app/events/event-month-view.component.ts
var _c04 = () => [];
var _c13 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function EventMonthViewComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, weekday_r1, "EEEE"), " ");
  }
}
function EventMonthViewComponent_For_5_For_5_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "group-event-card", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("event", event_r3);
  }
}
function EventMonthViewComponent_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function EventMonthViewComponent_For_5_For_5_Template_button_click_0_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEvent(event_r3));
    });
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 13);
    \u0275\u0275template(6, EventMonthViewComponent_For_5_For_5_ng_template_6_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const event_card_r5 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 4, event_r3.date, "shortTime"), " \u2014 ", event_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", event_card_r5)("hover", true);
  }
}
function EventMonthViewComponent_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = \u0275\u0275nextContext().$implicit;
    const menu_r7 = \u0275\u0275reference(9);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "APP.CONCIERGE.EVENTS_MORE_COUNT", \u0275\u0275pureFunction1(6, _c13, (ctx_r3.event_day_map()[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(5, _c04)).length - 3)), " ");
  }
}
function EventMonthViewComponent_For_5_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function EventMonthViewComponent_For_5_For_11_Template_button_click_0_listener() {
      const event_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewEvent(event_r9));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r9.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, event_r9.date, "shortTime"), " ");
  }
}
function EventMonthViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, EventMonthViewComponent_For_5_For_5_Template, 8, 7, "button", 7, _forTrack0);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275conditionalCreate(7, EventMonthViewComponent_For_5_Conditional_7_Template, 3, 8, "button", 8);
    \u0275\u0275elementStart(8, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(10, EventMonthViewComponent_For_5_For_11_Template, 7, 5, "button", 9, _forTrack0);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !day_r6.is_month)("bg-secondary", day_r6.is_today)("text-secondary-content", day_r6.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 8, day_r6.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(6, 11, ctx_r3.event_day_map()[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(18, _c04), 0, 3));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r3.event_day_map()[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(19, _c04)).length > 3 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(12, 15, ctx_r3.event_day_map()[ctx_r3.dateString(day_r6.id)] || \u0275\u0275pureFunction0(20, _c04), 3));
  }
}
var EventMonthViewComponent = class _EventMonthViewComponent {
  constructor() {
    this._state = inject(EventStateService);
    this._settings = inject(SettingsService);
    this._options = this._state.options;
    this.month = computed(
      () => startOfDay(this._options().date || Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "month" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_weekday = this._settings.get("app.week_start") || 0;
    this.weekdays = computed(
      () => {
        const start = startOfWeek(Date.now(), {
          weekStartsOn: this.offset_weekday
        });
        return Array.from(Array(7).keys()).map((i) => addDays(start, i));
      },
      ...ngDevMode ? [{ debugName: "weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.month_days = computed(
      () => {
        const start = startOfWeek(startOfMonth(this.month()), {
          weekStartsOn: this.offset_weekday
        });
        return Array.from(Array(7 * 6).keys()).map((i) => {
          const date = addDays(start, i).valueOf();
          return {
            id: date,
            is_today: isSameDay(date, Date.now()),
            is_month: isSameMonth(date, this.month())
          };
        });
      },
      ...ngDevMode ? [{ debugName: "month_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_day_map = this._state.event_day_map;
    this.viewEvent = (event) => this._state.viewEvent(event);
  }
  dateString(date) {
    if (!date)
      return "";
    return format(date, "yyyy-MM-dd");
  }
  static {
    this.\u0275fac = function EventMonthViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventMonthViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventMonthViewComponent, selectors: [["event-month-view"]], decls: 6, vars: 0, consts: [["menu", "matMenu"], ["event_card", ""], [1, "absolute", "inset-0", "overflow-auto"], [1, "border-base-200", "m-2", "grid", "h-224", "min-h-full", "w-7xl", "min-w-full", "grid-cols-7", "border-b"], ["weekday", "", 1, "relative", "flex", "h-12", "items-center", "justify-center", "p-2", "text-sm", "opacity-60"], ["monthday", "", 1, "border-base-200", "relative", "flex", "flex-col", "space-y-1", "border"], [1, "mt-1", "ml-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm"], ["matRipple", "", "matTooltip", "More events", 1, "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded-sm", "py-1", "pr-2", "pl-3", "text-sm", "underline", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "relative", "mx-1", "h-7", "w-[calc(100%-0.5rem)]", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm", 3, "click"], [1, "bg-info", "absolute", "inset-y-0", "left-0", "w-1.5"], [1, "h-full", "truncate", "text-left", "text-sm", "opacity-60"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "pointer-events-none", "p-2"], [3, "event"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], [1, "bg-base-200", "text-base-content", "rounded-sm", "px-2", "py-1", "text-xs", "opacity-60"]], template: function EventMonthViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275repeaterCreate(2, EventMonthViewComponent_For_3_Template, 3, 4, "div", 4, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(4, EventMonthViewComponent_For_5_Template, 13, 21, "div", 5, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.month_days());
      }
    }, dependencies: [
      CommonModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      GroupEventCardComponent,
      CustomTooltipComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      SlicePipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.grid[_ngcontent-%COMP%] {\n  grid-template-rows: 3rem repeat(6, minmax(0, 1fr));\n}\n/*# sourceMappingURL=event-month-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventMonthViewComponent, [{
    type: Component,
    args: [{ selector: "event-month-view", template: `
        <div class="absolute inset-0 overflow-auto">
            <div
                class="border-base-200 m-2 grid h-224 min-h-full w-7xl min-w-full grid-cols-7 border-b"
            >
                @for (weekday of weekdays(); track $index) {
                    <div
                        weekday
                        class="relative flex h-12 items-center justify-center p-2 text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEEE' }}
                    </div>
                }
                @for (day of month_days(); track day.id) {
                    <div
                        monthday
                        class="border-base-200 relative flex flex-col space-y-1 border"
                    >
                        <div
                            class="mt-1 ml-1 flex h-8 w-8 items-center justify-center rounded-full"
                            [class.opacity-30]="!day.is_month"
                            [class.bg-secondary]="day.is_today"
                            [class.text-secondary-content]="day.is_today"
                        >
                            {{ day.id | date: 'd' }}
                        </div>
                        @for (
                            event of event_day_map()[dateString(day.id)] || []
                                | slice: 0 : 3;
                            track $any(event).id
                        ) {
                            <button
                                matRipple
                                (click)="viewEvent(event)"
                                class="border-base-200 bg-base-100 hover:border-info relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded-sm border py-1 pr-2 pl-3 shadow-sm"
                            >
                                <div
                                    class="bg-info absolute inset-y-0 left-0 w-1.5"
                                ></div>
                                <div
                                    class="h-full truncate text-left text-sm opacity-60"
                                >
                                    {{ $any(event).date | date: 'shortTime' }}
                                    &mdash;
                                    {{ $any(event).title }}
                                </div>
                                <div
                                    class="absolute inset-0"
                                    customTooltip
                                    [content]="event_card"
                                    xPosition="center"
                                    yPosition="bottom"
                                    [hover]="true"
                                ></div>
                                <ng-template #event_card>
                                    <div class="pointer-events-none p-2">
                                        <group-event-card
                                            [event]="$any(event)"
                                        ></group-event-card>
                                    </div>
                                </ng-template>
                            </button>
                        }
                        @if (
                            (event_day_map()[dateString(day.id)] || []).length >
                            3
                        ) {
                            <button
                                matRipple
                                matTooltip="More events"
                                class="relative mx-1 h-7 w-[calc(100%-0.5rem)] overflow-hidden rounded-sm py-1 pr-2 pl-3 text-sm underline"
                                [matMenuTriggerFor]="menu"
                            >
                                {{
                                    'APP.CONCIERGE.EVENTS_MORE_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      (
                                                          event_day_map()[
                                                              dateString(day.id)
                                                          ] || []
                                                      ).length - 3,
                                              }
                                }}
                            </button>
                        }
                        <mat-menu #menu="matMenu">
                            @for (
                                event of event_day_map()[dateString(day.id)] ||
                                    [] | slice: 3;
                                track $any(event).id
                            ) {
                                <button
                                    mat-menu-item
                                    (click)="viewEvent(event)"
                                >
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1">
                                            {{ $any(event).title }}
                                        </div>
                                        <div
                                            class="bg-base-200 text-base-content rounded-sm px-2 py-1 text-xs opacity-60"
                                        >
                                            {{
                                                $any(event).date
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                        </mat-menu>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatMenuModule,
      GroupEventCardComponent,
      CustomTooltipComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;621b776a5c5c572a196a31eafa7dd26229f2e236f44d1e7e1ede4ba9fb207c2d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-month-view.component.ts */\n.grid {\n  grid-template-rows: 3rem repeat(6, minmax(0, 1fr));\n}\n/*# sourceMappingURL=event-month-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventMonthViewComponent, { className: "EventMonthViewComponent", filePath: "apps/concierge/src/app/events/event-month-view.component.ts", lineNumber: 157 });
})();

// apps/concierge/src/app/events/event-week-view.component.ts
var _c05 = () => [];
var _forTrack02 = ($index, $item) => $item + "" + $index;
var _forTrack1 = ($index, $item) => $item.id;
function EventWeekViewComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const \u0275$index_13_r2 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", hour_r1, " ", \u0275$index_13_r2 >= 12 ? "PM" : "AM", " ");
  }
}
function EventWeekViewComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, date_r3, "EEEE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r3, "d"));
  }
}
function EventWeekViewComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function EventWeekViewComponent_For_16_For_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "group-event-card", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("event", event_r5);
  }
}
function EventWeekViewComponent_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function EventWeekViewComponent_For_16_For_2_Template_button_click_0_listener() {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.viewEvent(event_r5));
    });
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 20);
    \u0275\u0275template(6, EventWeekViewComponent_For_16_For_2_ng_template_6_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const event_card_r7 = \u0275\u0275reference(7);
    \u0275\u0275styleProp("top", event_r5.offset * 100 + "%")("height", event_r5.length * 100 + "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 8, event_r5.date, "shortTime"), " \u2014 ", event_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("content", event_card_r7)("hover", true);
  }
}
function EventWeekViewComponent_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r5.now_offset * 100 + "%");
  }
}
function EventWeekViewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, EventWeekViewComponent_For_16_For_2_Template, 8, 11, "button", 15, _forTrack1);
    \u0275\u0275conditionalCreate(3, EventWeekViewComponent_For_16_Conditional_3_Template, 2, 2, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    const \u0275$index_37_r9 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateX(" + \u0275$index_37_r9 * 100 + "%)");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.event_day_map()[ctx_r5.dateString(date_r8)] || \u0275\u0275pureFunction0(3, _c05));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r5.isCurrentDay(date_r8) ? 3 : -1);
  }
}
var EventWeekViewComponent = class _EventWeekViewComponent {
  constructor() {
    this._state = inject(EventStateService);
    this._options = this._state.options;
    this.days = computed(
      () => {
        const date = this._options().date;
        if (!date)
          return new Array(7).fill(0).map((_, idx) => idx + 1);
        return new Array(7).fill(0).map((_, idx) => addDays(date, idx).valueOf());
      },
      ...ngDevMode ? [{ debugName: "days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hours = new Array(24).fill(0).map((_, idx) => idx % 12 ? idx % 12 : 12);
    this.event_day_map = this._state.event_day_map;
    this.viewEvent = (event) => this._state.viewEvent(event);
  }
  dateString(date) {
    if (!date)
      return "";
    return format(date, "yyyy-MM-dd");
  }
  isCurrentDay(date) {
    if (!date)
      return false;
    return format(Date.now(), "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get now_offset() {
    const now = new Date(this.now);
    return (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  }
  static {
    this.\u0275fac = function EventWeekViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventWeekViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventWeekViewComponent, selectors: [["event-week-view"]], decls: 17, vars: 4, consts: [["event_card", ""], [1, "absolute", "inset-0", "flex", "overflow-auto"], [1, "bg-base-100", "sticky", "left-0", "z-20", "flex", "min-h-full", "w-24", "flex-col", "items-end"], ["header", "", 1, "sticky", "top-0", "z-10", "flex", "h-16", "min-h-16", "justify-end"], [1, "bg-base-100", "h-10", "pt-6"], [1, "px-2", "text-xs", "opacity-30"], [1, "bg-base-100", "relative", "min-h-10", "w-full", "flex-1"], [1, "relative", "z-10", "min-h-full", "min-w-336"], ["header", "", 1, "border-base-200", "bg-base-100", "sticky", "top-0", "z-10", "flex", "h-16", "min-h-16", "border-b"], ["date", "", 1, "border-base-200", "flex", "min-w-48", "flex-1", "flex-col", "items-center", "justify-center", "border-r", "p-4"], [1, "border-base-200", "pointer-events-none", "relative", "flex", "min-h-10", "min-w-336", "flex-1", "border-x", "border-b"], ["date", "", 1, "border-base-200", "pointer-events-none", "absolute", "top-16", "left-0", "h-240", "w-[calc(100%/7)]", "flex-1", "border-r", 3, "transform"], ["hour", "", 1, "absolute", "top-0", "right-1", "-translate-y-1/2", "text-xs", "whitespace-nowrap", "opacity-60"], [1, "text-sm", "opacity-60"], ["date", "", 1, "border-base-200", "pointer-events-none", "absolute", "top-16", "left-0", "h-240", "w-[calc(100%/7)]", "flex-1", "border-r"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "pointer-events-auto", "absolute", "inset-x-1", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm", 3, "top", "height"], ["now", "", 1, "border-base-content", "absolute", "inset-x-0", "h-0", "border-y-2", 3, "top"], ["matRipple", "", 1, "border-base-200", "bg-base-100", "hover:border-info", "pointer-events-auto", "absolute", "inset-x-1", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-2", "pl-3", "shadow-sm", 3, "click"], [1, "bg-info", "absolute", "inset-y-0", "left-0", "w-1.5"], [1, "h-full", "text-left", "text-sm", "opacity-60"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "pointer-events-none", "p-2"], [3, "event"], ["now", "", 1, "border-base-content", "absolute", "inset-x-0", "h-0", "border-y-2"], [1, "bg-base-content", "absolute", "top-0", "left-0", "h-4", "w-4", "-translate-x-1/2", "-translate-y-1/2", "rounded-full"]], template: function EventWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(7, EventWeekViewComponent_For_8_Template, 3, 2, "div", 6, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275repeaterCreate(11, EventWeekViewComponent_For_12_Template, 7, 8, "div", 9, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, EventWeekViewComponent_For_14_Template, 1, 0, "div", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(15, EventWeekViewComponent_For_16_Template, 4, 4, "div", 11, _forTrack02);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 1, ctx.now, "zzzz"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hours);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.days());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hours);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.days());
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      GroupEventCardComponent,
      CustomTooltipComponent,
      DatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventWeekViewComponent, [{
    type: Component,
    args: [{ selector: "event-week-view", template: `
        <div class="absolute inset-0 flex overflow-auto">
            <div
                class="bg-base-100 sticky left-0 z-20 flex min-h-full w-24 flex-col items-end"
            >
                <div
                    header
                    class="sticky top-0 z-10 flex h-16 min-h-16 justify-end"
                >
                    <div class="bg-base-100 h-10 pt-6">
                        <div class="px-2 text-xs opacity-30">
                            {{ now | date: 'zzzz' }}
                        </div>
                    </div>
                </div>
                @for (hour of hours; track i; let i = $index) {
                    <div class="bg-base-100 relative min-h-10 w-full flex-1">
                        <div
                            hour
                            class="absolute top-0 right-1 -translate-y-1/2 text-xs whitespace-nowrap opacity-60"
                        >
                            {{ hour }} {{ i >= 12 ? 'PM' : 'AM' }}
                        </div>
                    </div>
                }
            </div>
            <div class="relative z-10 min-h-full min-w-336">
                <div
                    header
                    class="border-base-200 bg-base-100 sticky top-0 z-10 flex h-16 min-h-16 border-b"
                >
                    @for (date of days(); track date + '' + $index) {
                        <div
                            date
                            class="border-base-200 flex min-w-48 flex-1 flex-col items-center justify-center border-r p-4"
                        >
                            <div class="text-sm opacity-60">
                                {{ date | date: 'EEEE' }}
                            </div>
                            <div>{{ date | date: 'd' }}</div>
                        </div>
                    }
                </div>
                @for (hour of hours; track i; let i = $index) {
                    <div
                        class="border-base-200 pointer-events-none relative flex min-h-10 min-w-336 flex-1 border-x border-b"
                    ></div>
                }
                @for (date of days(); track date + '' + i; let i = $index) {
                    <div
                        date
                        class="border-base-200 pointer-events-none absolute top-16 left-0 h-240 w-[calc(100%/7)] flex-1 border-r"
                        [style.transform]="'translateX(' + i * 100 + '%)'"
                    >
                        @for (
                            event of event_day_map()[dateString(date)] || [];
                            track event.id
                        ) {
                            <button
                                matRipple
                                class="border-base-200 bg-base-100 hover:border-info pointer-events-auto absolute inset-x-1 overflow-hidden rounded-sm border py-1 pr-2 pl-3 shadow-sm"
                                [style.top]="event.offset * 100 + '%'"
                                [style.height]="event.length * 100 + '%'"
                                (click)="viewEvent(event)"
                            >
                                <div
                                    class="bg-info absolute inset-y-0 left-0 w-1.5"
                                ></div>
                                <div
                                    class="h-full text-left text-sm opacity-60"
                                >
                                    {{ event.date | date: 'shortTime' }} &mdash;
                                    {{ event.title }}
                                </div>
                                <div
                                    class="absolute inset-0"
                                    customTooltip
                                    [content]="event_card"
                                    xPosition="center"
                                    yPosition="bottom"
                                    [hover]="true"
                                ></div>
                                <ng-template #event_card>
                                    <div class="pointer-events-none p-2">
                                        <group-event-card
                                            [event]="event"
                                        ></group-event-card>
                                    </div>
                                </ng-template>
                            </button>
                        }
                        @if (isCurrentDay(date)) {
                            <div
                                now
                                class="border-base-content absolute inset-x-0 h-0 border-y-2"
                                [style.top]="now_offset * 100 + '%'"
                            >
                                <div
                                    class="bg-base-content absolute top-0 left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                ></div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      GroupEventCardComponent,
      CustomTooltipComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventWeekViewComponent, { className: "EventWeekViewComponent", filePath: "apps/concierge/src/app/events/event-week-view.component.ts", lineNumber: 127 });
})();

// apps/concierge/src/app/events/event-calendar.component.ts
function EventCalendarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.period() === "week" ? "COMMON.WEEK_THIS" : "COMMON.MONTH_THIS"));
  }
}
function EventCalendarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-week-view");
  }
}
function EventCalendarComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-month-view");
  }
}
var EventCalendarComponent = class _EventCalendarComponent {
  constructor() {
    this._state = inject(EventStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.options = computed(
      () => __spreadValues({
        date: Date.now(),
        end: Date.now()
      }, this._state.options()),
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => this.options().period,
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_today = computed(
      () => this.options().date <= Date.now() && this.options().end > Date.now(),
      ...ngDevMode ? [{ debugName: "is_today" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setPeriod(period) {
    this._state.setOptions({ period });
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { period },
      queryParamsHandling: "merge"
    });
  }
  nextPeriod() {
    const { date, period } = this.options();
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        range: period === "week" ? addWeeks(date, 1).valueOf() : addMonths(date, 1).valueOf()
      },
      queryParamsHandling: "merge"
    });
  }
  previousPeriod() {
    const { date, period } = this.options();
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        range: period === "week" ? addWeeks(date, -1).valueOf() : addMonths(date, -1).valueOf()
      },
      queryParamsHandling: "merge"
    });
  }
  static {
    this.\u0275fac = function EventCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCalendarComponent, selectors: [["event-calendar"]], decls: 24, vars: 16, consts: [[1, "border-base-200", "flex", "w-full", "items-center", "border-y"], [1, "flex-1", "px-2", "py-4"], [1, "text-info", "text-xs"], [1, "flex", "flex-2", "items-center", "justify-center", "space-x-2"], [1, "pl-4", "font-medium"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "flex-1", "items-center", "justify-end", "space-x-2", "py-2"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "h-4", "w-full"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto"]], template: function EventCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, EventCalendarComponent_Conditional_2_Template, 3, 3, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_7_listener() {
          return ctx.previousPeriod();
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_10_listener() {
          return ctx.nextPeriod();
        });
        \u0275\u0275elementStart(11, "icon");
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 6)(14, "button", 7);
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_14_listener() {
          return ctx.setPeriod("week");
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275listener("click", function EventCalendarComponent_Template_button_click_17_listener() {
          return ctx.setPeriod("month");
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(20, "div", 8);
        \u0275\u0275elementStart(21, "div", 9);
        \u0275\u0275conditionalCreate(22, EventCalendarComponent_Conditional_22_Template, 1, 0, "event-week-view")(23, EventCalendarComponent_Conditional_23_Template, 1, 0, "event-month-view");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_today() ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 9, ctx.options().date, "MMM yyyy"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("inverse", ctx.period() !== "week");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.period() !== "month");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "COMMON.MONTH"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.period() !== "month" ? 22 : 23);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      EventWeekViewComponent,
      EventMonthViewComponent,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=event-calendar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCalendarComponent, [{
    type: Component,
    args: [{ selector: "event-calendar", template: `
        <div class="border-base-200 flex w-full items-center border-y">
            <div class="flex-1 px-2 py-4">
                @if (is_today()) {
                    <span class="text-info text-xs">{{
                        (period() === 'week'
                            ? 'COMMON.WEEK_THIS'
                            : 'COMMON.MONTH_THIS'
                        ) | translate
                    }}</span>
                }
            </div>
            <div class="flex flex-2 items-center justify-center space-x-2">
                <div class="pl-4 font-medium">
                    {{ options().date | date: 'MMM yyyy' }}
                </div>
                <button icon matRipple (click)="previousPeriod()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextPeriod()">
                    <icon>chevron_right</icon>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-end space-x-2 py-2">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="period() !== 'week'"
                    (click)="setPeriod('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="period() !== 'month'"
                    (click)="setPeriod('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
        </div>
        <div class="h-4 w-full"></div>
        <div class="relative h-1/2 w-full flex-1 overflow-auto">
            @if (period() !== 'month') {
                <event-week-view></event-week-view>
            } @else {
                <event-month-view></event-month-view>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      EventWeekViewComponent,
      EventMonthViewComponent,
      IconComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/event-calendar.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=event-calendar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCalendarComponent, { className: "EventCalendarComponent", filePath: "apps/concierge/src/app/events/event-calendar.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/events/event-listing.component.ts
var _c06 = (a0) => ({ key: "date", name: "Event", content: a0 });
var _c14 = (a0, a1) => ({ key: "level", name: a0, content: a1, size: "8rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "room", name: a0, content: a1, size: "12rem", sortable: false });
var _c3 = (a0, a1) => ({ key: "interested", name: a0, content: a1, size: "6rem", sortable: false });
var _c4 = (a0, a1) => ({ key: "attending", name: a0, content: a1, size: "6rem", sortable: false });
var _c5 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "8.5rem" });
var _c6 = (a0, a1) => ({ key: "permission", name: a0, content: a1, size: "6rem", sortable: false });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ["/entertainment", "events", "manage", a0];
function EventListingComponent_ng_template_9_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().row;
    \u0275\u0275property("source", item_r1.images[0]);
  }
}
function EventListingComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275template(9, EventListingComponent_ng_template_9_img_9_Template, 1, 1, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "space");
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "building");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, item_r1.date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, item_r1.date, "d"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", item_r1.images?.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 13, item_r1.date, "EEEE, " + ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(16, 16, item_r1.date + item_r1.duration * 60 * 1e3, ctx_r1.time_format + " (z)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, \u0275\u0275pipeBind1(20, 21, \u0275\u0275pipeBind1(19, 19, item_r1.linked_event?.system_id))?.zones)?.address, " ");
  }
}
function EventListingComponent_ng_template_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LEVEL_EMPTY"), " ");
  }
}
function EventListingComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "level");
    \u0275\u0275template(5, EventListingComponent_ng_template_11_span_5_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, ctx_r1.room(item_r3)?.email))?.zones)?.display_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.room(item_r3)?.email);
  }
}
function EventListingComponent_ng_template_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ROOM_EMPTY"), " ");
  }
}
function EventListingComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, EventListingComponent_ng_template_13_span_4_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, ctx_r1.room(item_r4)?.email))?.display_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.room(item_r4)?.email);
  }
}
function EventListingComponent_ng_template_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "attendee-list", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("list", ctx_r1.attendeeList(item_r5.attendees))("host", item_r5.user_email || item_r5.host)("show_host", false)("hide_close", true)("custom_title", \u0275\u0275pipeBind1(2, 5, "CALENDAR_EVENT.GROUP_INTERESTED"));
  }
}
function EventListingComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EventListingComponent_ng_template_15_ng_template_2_Template, 3, 7, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    const view_attendees_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", view_attendees_r6)("disabled", !ctx_r1.attendeeCount(item_r5.attendees));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.attendeeCount(item_r5.attendees) || 0, " ");
  }
}
function EventListingComponent_ng_template_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "attendee-list", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("show_host", false)("list", ctx_r1.checkedInList(item_r7.attendees))("host", item_r7.user_email || item_r7.host)("hide_close", true);
  }
}
function EventListingComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, EventListingComponent_ng_template_17_ng_template_2_Template, 2, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r7 = ctx.row;
    const view_attendees_r8 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", view_attendees_r8)("disabled", !ctx_r1.checkedInCount(item_r7.attendees));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.checkedInCount(item_r7.attendees), " ");
  }
}
function EventListingComponent_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function EventListingComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EventListingComponent_ng_template_19_div_0_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275property("ngIf", data_r9 !== "PRIVATE" && data_r9 !== "private");
  }
}
function EventListingComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("text-success-content", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("bg-warning", item_r10.state === "in_progress" || item_r10.state === "started")("text-warning-content", item_r10.state === "in_progress" || item_r10.state === "started")("bg-base-200", item_r10.state === "done")("text-base-content", item_r10.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, item_r10.state === "done" ? "COMMON.STATE_DONE" : item_r10.state === "in_progress" || item_r10.state === "started" ? "COMMON.STATE_IN_PROGRESS" : "COMMON.STATE_ACTIVE"), " ");
  }
}
function EventListingComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 9)(5, "button", 35)(6, "div", 36)(7, "icon", 37);
    \u0275\u0275text(8, " confirmation_number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_23_Template_button_click_12_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewEvent(row_r12));
    });
    \u0275\u0275elementStart(13, "div", 36)(14, "icon", 37);
    \u0275\u0275text(15, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "a", 40)(20, "div", 36)(21, "icon", 37);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 38);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 35)(27, "div", 36)(28, "icon", 37);
    \u0275\u0275text(29, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 38);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 39);
    \u0275\u0275listener("click", function EventListingComponent_ng_template_23_Template_button_click_33_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEvent(row_r12));
    });
    \u0275\u0275elementStart(34, "div", 36)(35, "icon", 41);
    \u0275\u0275text(36, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 38);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const menu_r13 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r13)("disabled", row_r12.state === "done");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.EVENTS_PROMOTE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 12, "APP.CONCIERGE.EVENTS_VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c9, row_r12?.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 14, "APP.CONCIERGE.EVENTS_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 16, "APP.CONCIERGE.EVENTS_COPY_URL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 18, "APP.CONCIERGE.EVENTS_REMOVE"), " ");
  }
}
var EventListingComponent = class _EventListingComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._state = inject(EventStateService);
    this.loading = this._state.loading;
    this.event_list = this._state.event_list;
    this.time_format = this._settings.time_format;
    this.viewEvent = (event) => this._state.viewEvent(event);
    this.removeEvent = (event) => this._state.removeEvent(event);
  }
  room(item) {
    return item.resources.find((_) => _.email !== this._state.calendar);
  }
  attendeeCount(attendees) {
    if (!attendees?.length)
      return 0;
    return attendees.filter((user) => user.email !== this._state.calendar).length;
  }
  attendeeList(attendees) {
    if (!attendees?.length)
      return [];
    return attendees.filter((user) => user.email !== this._state.calendar);
  }
  checkedInCount(attendees) {
    if (!attendees?.length)
      return 0;
    return attendees.filter((user) => user.checked_in).length;
  }
  checkedInList(attendees) {
    if (!attendees?.length)
      return [];
    return attendees.filter((user) => user.checked_in);
  }
  static {
    this.\u0275fac = function EventListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventListingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventListingComponent, selectors: [["event-listing"]], decls: 25, vars: 48, consts: [["event_template", ""], ["level_template", ""], ["room_template", ""], ["interested_template", ""], ["attending_template", ""], ["published_template", ""], ["status_template", ""], ["actions_template", ""], ["view_attendees", ""], ["menu", "matMenu"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-6xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-20", "w-full"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2"], ["date", "", 1, "flex", "w-8", "flex-col", "items-center", "leading-tight"], ["month", "", 1, "relative", "top-0.5", "text-sm", "font-medium", "opacity-60"], ["day", "", 1, "relative", "-top-0.5", "text-2xl", "font-light"], [1, "border-base-200", "bg-base-200", "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "rounded-sm", "border"], ["auth", "", "class", "min-h-full min-w-full object-cover", 3, "source", 4, "ngIf"], ["details", "", 1, "flex", "flex-col"], [1, "text-sm"], [1, "text-xs", "opacity-40"], [1, "text-xs"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", 1, "mx-auto", 3, "content", "disabled"], [1, "relative", "h-112", "w-[20rem]", "overflow-auto", "rounded-sm", "bg-white", "shadow-sm"], [3, "list", "host", "show_host", "hide_close", "custom_title"], [3, "show_host", "list", "host", "hide_close"], ["class", "bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl", 4, "ngIf"], [1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "rounded-full", "px-4", "py-1"], ["icon", "", "default", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor", "disabled"], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "mr-2"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-error", "text-2xl"]], template: function EventListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 10)(1, "simple-table", 11);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275element(8, "div", 12);
        \u0275\u0275template(9, EventListingComponent_ng_template_9_Template, 22, 25, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, EventListingComponent_ng_template_11_Template, 6, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, EventListingComponent_ng_template_13_Template, 5, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, EventListingComponent_ng_template_15_Template, 4, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(17, EventListingComponent_ng_template_17_Template, 4, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(19, EventListingComponent_ng_template_19_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(21, EventListingComponent_ng_template_21_Template, 4, 15, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(23, EventListingComponent_ng_template_23_Template, 40, 22, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const event_template_r14 = \u0275\u0275reference(10);
        const level_template_r15 = \u0275\u0275reference(12);
        const room_template_r16 = \u0275\u0275reference(14);
        const interested_template_r17 = \u0275\u0275reference(16);
        const attending_template_r18 = \u0275\u0275reference(18);
        const published_template_r19 = \u0275\u0275reference(20);
        const status_template_r20 = \u0275\u0275reference(22);
        const actions_template_r21 = \u0275\u0275reference(24);
        \u0275\u0275classProp("opacity-0", !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.event_list())("columns", \u0275\u0275pureFunction8(39, _c8, \u0275\u0275pureFunction1(17, _c06, event_template_r14), \u0275\u0275pureFunction2(19, _c14, \u0275\u0275pipeBind1(2, 5, "RESOURCE.LEVEL"), level_template_r15), \u0275\u0275pureFunction2(22, _c2, \u0275\u0275pipeBind1(3, 7, "RESOURCE.ROOM"), room_template_r16), \u0275\u0275pureFunction2(25, _c3, \u0275\u0275pipeBind1(4, 9, "CALENDAR_EVENT.GROUP_INTERESTED"), interested_template_r17), \u0275\u0275pureFunction2(28, _c4, \u0275\u0275pipeBind1(5, 11, "CALENDAR_EVENT.GROUP_ATTENDING_FIELD"), attending_template_r18), \u0275\u0275pureFunction2(31, _c5, \u0275\u0275pipeBind1(6, 13, "COMMON.STATUS"), status_template_r20), \u0275\u0275pureFunction2(34, _c6, \u0275\u0275pipeBind1(7, 15, "COMMON.PUBLISHED"), published_template_r19), \u0275\u0275pureFunction1(37, _c7, actions_template_r21)))("sortable", true);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      SimpleTableComponent,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      RouterModule,
      RouterLink,
      MatRippleModule,
      MatRipple,
      AttendeeListComponent,
      MatProgressBarModule,
      MatProgressBar,
      AuthenticatedImageDirective,
      CustomTooltipComponent,
      AsyncPipe,
      DatePipe,
      SpacePipe,
      TranslatePipe,
      LevelPipe,
      BuildingPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventListingComponent, [{
    type: Component,
    args: [{ selector: "event-listing", template: `
        <mat-progress-bar
            class="w-full"
            [class.opacity-0]="!loading()"
            mode="indeterminate"
        />
        <simple-table
            class="block w-full min-w-6xl text-sm"
            [data]="event_list()"
            empty_message="No group events for selected period"
            [columns]="[
                { key: 'date', name: 'Event', content: event_template },
                {
                    key: 'level',
                    name: 'RESOURCE.LEVEL' | translate,
                    content: level_template,
                    size: '8rem',
                    sortable: false,
                },
                {
                    key: 'room',
                    name: 'RESOURCE.ROOM' | translate,
                    content: room_template,
                    size: '12rem',
                    sortable: false,
                },
                {
                    key: 'interested',
                    name: 'CALENDAR_EVENT.GROUP_INTERESTED' | translate,
                    content: interested_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'attending',
                    name: 'CALENDAR_EVENT.GROUP_ATTENDING_FIELD' | translate,
                    content: attending_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'state',
                    name: 'COMMON.STATUS' | translate,
                    content: status_template,
                    size: '8.5rem',
                },
                {
                    key: 'permission',
                    name: 'COMMON.PUBLISHED' | translate,
                    content: published_template,
                    size: '6rem',
                    sortable: false,
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '3.25rem',
                    sortable: false,
                },
            ]"
            [sortable]="true"
        />
        <div class="h-20 w-full"></div>
        <ng-template #event_template let-item="row">
            <div class="flex items-center space-x-2 px-3 py-2">
                <div date class="flex w-8 flex-col items-center leading-tight">
                    <div
                        month
                        class="relative top-0.5 text-sm font-medium opacity-60"
                    >
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="relative -top-0.5 text-2xl font-light">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div
                    class="border-base-200 bg-base-200 flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm border"
                >
                    <img
                        *ngIf="item.images?.length"
                        auth
                        [source]="item.images[0]"
                        class="min-h-full min-w-full object-cover"
                    />
                </div>
                <div details class="flex flex-col">
                    <div class="text-sm">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, ' + time_format }} &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format + ' (z)'
                        }}
                    </div>
                    <div class="text-xs">
                        {{
                            (
                                (item.linked_event?.system_id | space | async)
                                    ?.zones | building
                            )?.address
                        }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #level_template let-item="row">
            <div class="p-4">
                {{
                    ((room(item)?.email | space | async)?.zones | level)
                        ?.display_name
                }}
                <span *ngIf="!room(item)?.email" class="opacity-30">
                    {{ 'COMMON.LEVEL_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #room_template let-item="row">
            <div class="p-4">
                {{ (room(item)?.email | space | async)?.display_name }}
                <span *ngIf="!room(item)?.email" class="opacity-30">
                    {{ 'COMMON.ROOM_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #interested_template let-item="row">
            <button
                icon
                default
                matRipple
                customTooltip
                [content]="view_attendees"
                class="mx-auto"
                [disabled]="!attendeeCount(item.attendees)"
            >
                {{ attendeeCount(item.attendees) || 0 }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative h-112 w-[20rem] overflow-auto rounded-sm bg-white shadow-sm"
                >
                    <attendee-list
                        [list]="attendeeList(item.attendees)"
                        [host]="item.user_email || item.host"
                        [show_host]="false"
                        [hide_close]="true"
                        [custom_title]="
                            'CALENDAR_EVENT.GROUP_INTERESTED' | translate
                        "
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #attending_template let-item="row">
            <button
                icon
                default
                matRipple
                customTooltip
                [content]="view_attendees"
                class="mx-auto"
                [disabled]="!checkedInCount(item.attendees)"
            >
                {{ checkedInCount(item.attendees) }}
            </button>
            <ng-template #view_attendees>
                <div
                    class="relative h-112 w-[20rem] overflow-auto rounded-sm bg-white shadow-sm"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="checkedInList(item.attendees)"
                        [host]="item.user_email || item.host"
                        [hide_close]="true"
                    ></attendee-list>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #published_template let-data="data">
            <div
                *ngIf="data !== 'PRIVATE' && data !== 'private'"
                class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
            >
                <icon>done</icon>
            </div>
        </ng-template>
        <ng-template #status_template let-item="row">
            <div class="p-4">
                <div
                    class="rounded-full px-4 py-1"
                    [class.bg-success]="
                        item.state !== 'done' &&
                        item.state !== 'in_progress' &&
                        item.state !== 'started'
                    "
                    [class.text-success-content]="
                        item.state !== 'done' &&
                        item.state !== 'in_progress' &&
                        item.state !== 'started'
                    "
                    [class.bg-warning]="
                        item.state === 'in_progress' || item.state === 'started'
                    "
                    [class.text-warning-content]="
                        item.state === 'in_progress' || item.state === 'started'
                    "
                    [class.bg-base-200]="item.state === 'done'"
                    [class.text-base-content]="item.state === 'done'"
                >
                    {{
                        (item.state === 'done'
                            ? 'COMMON.STATE_DONE'
                            : item.state === 'in_progress' ||
                                item.state === 'started'
                              ? 'COMMON.STATE_IN_PROGRESS'
                              : 'COMMON.STATE_ACTIVE'
                        ) | translate
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <button
                icon
                default
                matRipple
                class="mx-auto"
                [matMenuTriggerFor]="menu"
                [disabled]="row.state === 'done'"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl"> confirmation_number </icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_PROMOTE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="viewEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">visibility</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_VIEW' | translate }}
                        </div>
                    </div>
                </button>
                <a
                    mat-menu-item
                    [routerLink]="[
                        '/entertainment',
                        'events',
                        'manage',
                        row?.id,
                    ]"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">edit</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_EDIT' | translate }}
                        </div>
                    </div>
                </a>
                <button mat-menu-item [disabled]="true">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">content_copy</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_COPY_URL' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="removeEvent(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl">delete</icon>
                        <div class="mr-2">
                            {{ 'APP.CONCIERGE.EVENTS_REMOVE' | translate }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      SpacePipe,
      IconComponent,
      MatMenuModule,
      RouterModule,
      MatRippleModule,
      TranslatePipe,
      AttendeeListComponent,
      MatProgressBarModule,
      AuthenticatedImageDirective,
      LevelPipe,
      BuildingPipe,
      CustomTooltipComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventListingComponent, { className: "EventListingComponent", filePath: "apps/concierge/src/app/events/event-listing.component.ts", lineNumber: 326 });
})();

// apps/concierge/src/app/events/events-list.component.ts
var _c07 = () => ["/entertainment", "events", "manage"];
var _forTrack03 = ($index, $item) => $item.id;
function EventsListComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    \u0275\u0275property("value", range_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1.display, " ");
  }
}
function EventsListComponent_For_44_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r2.parent_id)?.display_name, " ");
  }
}
function EventsListComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "div", 24);
    \u0275\u0275conditionalCreate(2, EventsListComponent_For_44_Conditional_2_Template, 5, 3, "div", 25);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function EventsListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "event-listing", 27);
    \u0275\u0275elementEnd();
  }
}
function EventsListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-calendar");
  }
}
function EventsListComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementStart(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.EVENTS_CONFIG_ERROR"), " ");
  }
}
var EventsListComponent = class _EventsListComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._state = inject(EventStateService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.period = computed(
      () => this._state.options().period,
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "period_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_range = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "selected_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zones = signal(
      [],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const bld = this._org.active_building();
        const region = this._org.active_region();
        return this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.period();
      untracked(() => {
        this._generatePeriods();
        this._initPeriod();
      });
    });
    effect(() => {
      const levels = this.levels();
      untracked(() => {
        if (!levels.length)
          return;
        const valid = this.zones().filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (valid.length !== this.zones().length) {
          this._applyZones(valid, true);
          return;
        }
        if (this.zones().length)
          return;
        const persisted = loadPersistedZones("events", this._persistScopeId()).filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (persisted.length)
          this._applyZones(persisted, true);
      });
    });
  }
  get has_calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  ngOnInit() {
    this.subscription("poll_events", this._state.startPolling());
    this._generatePeriods();
    this._initPeriod();
    this.subscription("route.query", this._route.queryParamMap.subscribe((q) => {
      if (q.has("view")) {
        this.view.set(q.get("view"));
      }
      if (q.has("period") && q.get("period") !== this._state.period) {
        this.setPeriodType(q.get("period"), false);
      }
      this._generatePeriods();
      if (q.has("zone_ids")) {
        const zones = (q.get("zone_ids") || "").split(",").filter(Boolean);
        this._applyZones(zones, false);
      }
      if (q.has("range")) {
        this.timeout("update", () => {
          const id = parseInt(q.get("range"), 10);
          const item = this.period_list().find((_) => id >= _.start && id < _.end) || this.period_list()[0] || {
            start: id,
            end: this._state.period === "week" ? addWeeks(id, 1).valueOf() : addMonths(id, 1).valueOf()
          };
          const range_id = item.id || id;
          this.selected_range.set(range_id);
          this._state.setOptions({
            date: item.start,
            end: item.end
          });
          if (range_id !== id)
            this.setPeriod(range_id);
        });
      }
    }));
  }
  updateZones(zones) {
    this._applyZones((zones || []).filter((_) => !!_), true);
  }
  _applyZones(zones, persist) {
    this.zones.set(zones);
    this._state.setOptions({ zone_ids: zones });
    if (persist) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: zones.length ? zones.join(",") : null
        },
        queryParamsHandling: "merge"
      });
      persistZones("events", this._persistScopeId(), zones);
    }
  }
  _persistScopeId() {
    return this._settings.get("app.use_region") ? this._org.region?.id || "" : this._org.building?.id || "";
  }
  setView(view) {
    this.view.set(view);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { view },
      queryParamsHandling: "merge"
    });
  }
  setPeriodType(type, set_route = true) {
    this._state.setOptions({ period: type });
    if (set_route) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: type },
        queryParamsHandling: "merge"
      });
    }
  }
  setPeriod(id) {
    this.timeout("set_period", () => {
      const item = this.period_list().find((_) => id >= _.start && id < _.end) || this.period_list()[0];
      if (!item)
        return;
      this.selected_range.set(item.id);
      const { start, end } = item;
      this._state.setOptions({ date: start, end });
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { range: id },
        queryParamsHandling: "merge"
      });
    });
  }
  _generatePeriods() {
    this.timeout("generate_periods", async () => {
      const periods = [];
      const period_type = this.period();
      let date = subMonths(Date.now(), 6).valueOf();
      const end_date = addMonths(Date.now(), 6).valueOf();
      const week_offset = this._settings.get("app.week_start") || 0;
      if (period_type === "month") {
        date = startOfMonth(date).valueOf();
      } else if (period_type === "week") {
        date = startOfWeek(date, {
          weekStartsOn: week_offset
        }).valueOf();
      }
      while (date < end_date) {
        if (period_type === "week") {
          const end = endOfDay(addDays(date, 6)).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${format(date, "EEE, do MMM")} \u2013 ${format(end, "do MMM")}`
          });
          date = addDays(date, 7).valueOf();
        } else if (period_type === "month") {
          const end = addDays(addMonths(date, 1), -1).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${format(date, "MMMM yyyy")}`
          });
          date = addMonths(date, 1).valueOf();
        } else
          break;
      }
      this.period_list.set(periods);
    });
  }
  _initPeriod() {
    this.timeout("update", () => {
      if (this.period_list().length) {
        let index = this.period_list().findIndex((_) => _.start <= Date.now() && _.end >= Date.now());
        if (index < 0)
          index = 0;
        this.setPeriod(this.period_list()[index].id);
        this.selected_range.set(this.period_list()[index].id);
      }
    }, 350);
  }
  static {
    this.\u0275fac = function EventsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsListComponent, selectors: [["app-event-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 49, vars: 33, consts: [[1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "items-center", "space-x-2", "px-8", "pb-4"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], [1, "h-full", "px-2"], [1, "bg-base-300", "h-full", "w-px"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "week"], ["value", "month"], ["appearance", "outline", 1, "no-subscript", "w-64"], [3, "value"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "block"], [1, "bg-base-100", "absolute", "inset-0", "opacity-80"], [1, "max-w-lg", "text-lg", "opacity-60"]], template: function EventsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "icon", 5);
        \u0275\u0275text(10, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
        \u0275\u0275listener("click", function EventsListComponent_Template_button_click_12_listener() {
          return ctx.setView("list");
        });
        \u0275\u0275elementStart(13, "div", 8)(14, "icon", 9);
        \u0275\u0275text(15, "list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 7);
        \u0275\u0275listener("click", function EventsListComponent_Template_button_click_19_listener() {
          return ctx.setView("calendar");
        });
        \u0275\u0275elementStart(20, "div", 8)(21, "icon", 9);
        \u0275\u0275text(22, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275element(27, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-form-field", 13)(29, "mat-select", 14);
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_29_listener($event) {
          return ctx.setPeriodType($event);
        });
        \u0275\u0275elementStart(30, "mat-option", 15);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 16);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 17)(37, "mat-select", 14);
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_37_listener($event) {
          return ctx.setPeriod($event);
        });
        \u0275\u0275repeaterCreate(38, EventsListComponent_For_39_Template, 2, 2, "mat-option", 18, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-form-field", 19)(41, "mat-select", 20);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275listener("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_41_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(43, EventsListComponent_For_44_Template, 5, 3, "mat-option", 18, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 21);
        \u0275\u0275conditionalCreate(46, EventsListComponent_Conditional_46_Template, 2, 0, "div", 22);
        \u0275\u0275conditionalCreate(47, EventsListComponent_Conditional_47_Template, 1, 0, "event-calendar");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(48, EventsListComponent_Conditional_48_Template, 5, 3, "div", 23);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "APP.CONCIERGE.EVENTS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(32, _c07));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "APP.CONCIERGE.EVENTS_ADD"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("inverse", ctx.view() !== "list");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 22, "COMMON.LIST"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view() !== "calendar");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 24, "COMMON.CALENDAR"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.period());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 26, "COMMON.WEEK"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 28, "COMMON.MONTH"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.selected_range());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.period_list());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.zones())("placeholder", \u0275\u0275pipeBind1(42, 30, "COMMON.LEVEL_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.view() === "list" ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "calendar" ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.has_calendar ? 48 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      EventCalendarComponent,
      EventListingComponent,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=events-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsListComponent, [{
    type: Component,
    args: [{ selector: "app-event-list", template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.EVENTS_HEADER' | translate }}
                </h2>
                <a
                    btn
                    matRipple
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.EVENTS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">chevron_right</icon>
                </a>
            </div>
            <div filters class="flex items-center space-x-2 px-8 pb-4">
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view() !== 'list'"
                    (click)="setView('list')"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">list</icon>
                        <div class="pr-2">{{ 'COMMON.LIST' | translate }}</div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-3xl"
                    [class.inverse]="view() !== 'calendar'"
                    (click)="setView('calendar')"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">event</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CALENDAR' | translate }}
                        </div>
                    </div>
                </button>
                <div class="h-full px-2">
                    <div class="bg-base-300 h-full w-px"></div>
                </div>
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period()"
                        (ngModelChange)="setPeriodType($event)"
                    >
                        <mat-option value="week">{{
                            'COMMON.WEEK' | translate
                        }}</mat-option>
                        <mat-option value="month">{{
                            'COMMON.MONTH' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript w-64">
                    <mat-select
                        [ngModel]="selected_range()"
                        (ngModelChange)="setPeriod($event)"
                    >
                        @for (range of period_list(); track range.id) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field appearance="outline" class="no-subscript w-56">
                    <mat-select
                        [ngModel]="zones()"
                        (ngModelChange)="updateZones($event)"
                        [placeholder]="'COMMON.LEVEL_ALL' | translate"
                        multiple
                    >
                        @for (level of levels(); track level.id) {
                            <mat-option [value]="level.id">
                                <div class="flex flex-col-reverse">
                                    @if (use_region) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (level.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ level.display_name || level.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-y-auto px-8">
                @if (view() === 'list') {
                    <div class="min-h-full w-full overflow-x-auto">
                        <event-listing class="block"></event-listing>
                    </div>
                }
                @if (view() === 'calendar') {
                    <event-calendar></event-calendar>
                }
            </div>
        </div>
        @if (!has_calendar) {
            <div class="absolute inset-0 z-50 flex items-center justify-center">
                <div class="bg-base-100 absolute inset-0 opacity-80"></div>
                <p class="max-w-lg text-lg opacity-60">
                    {{ 'APP.CONCIERGE.EVENTS_CONFIG_ERROR' | translate }}
                </p>
            </div>
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      EventCalendarComponent,
      EventListingComponent,
      MatRippleModule,
      RouterModule,
      FormsModule,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;f992f808f00abdb3d341f52af27489d2a52f705030fa77da9b19706093ffd928;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/events/events-list.component.ts */\n:host {\n  flex: 1;\n}\n/*# sourceMappingURL=events-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsListComponent, { className: "EventsListComponent", filePath: "apps/concierge/src/app/events/events-list.component.ts", lineNumber: 182 });
})();

// apps/concierge/src/app/events/events.routes.ts
var ROUTES = [
  {
    path: "",
    component: EventsComponent,
    children: [
      { path: "", component: EventsListComponent, title: "Events" }
    ]
  },
  { path: "manage", component: EventManageComponent, title: "Manage Event" },
  {
    path: "manage/:id",
    component: EventManageComponent,
    title: "Manage Event"
  },
  { path: "view/:id", component: EventViewComponent, title: "Event Details" },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=events.routes-6OR3GYHZ.js.map
