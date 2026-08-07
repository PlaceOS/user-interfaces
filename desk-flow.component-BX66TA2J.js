import {
  AutoAssignedDeskModalComponent
} from "./chunk-X2DJQXWI.js";
import {
  ExploreDeskInfoComponent
} from "./chunk-6OP2CAF2.js";
import {
  FindAvailabilityModalComponent,
  RecurrenceFieldComponent
} from "./chunk-DPUBWDZS.js";
import {
  UserListFieldComponent
} from "./chunk-NDJUG67W.js";
import {
  LevelPipe
} from "./chunk-PAPH6FGZ.js";
import "./chunk-ZDF774B7.js";
import "./chunk-ICIEQV5A.js";
import {
  BuildingPipe
} from "./chunk-B2USWTXX.js";
import {
  DEFAULT_COLOURS
} from "./chunk-CH6VF5H3.js";
import {
  DurationFieldComponent
} from "./chunk-DAIPARM3.js";
import {
  InteractiveMapComponent
} from "./chunk-R7NMGDJJ.js";
import {
  DateFieldComponent
} from "./chunk-WA25NW6S.js";
import {
  UserSearchFieldComponent
} from "./chunk-UDBPC5TB.js";
import "./chunk-ASGUZFOX.js";
import {
  SpacesService
} from "./chunk-G2QIDIZH.js";
import "./chunk-KTCI2VVT.js";
import "./chunk-25Y4PDI3.js";
import {
  TimeFieldComponent
} from "./chunk-NECT2IIR.js";
import {
  SpacePipe
} from "./chunk-WSVNX6WC.js";
import "./chunk-VJWWFIEW.js";
import {
  BookingFormService
} from "./chunk-BJEHABTQ.js";
import {
  SettingsToggleComponent
} from "./chunk-WGZQI6NL.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  UserAvatarComponent
} from "./chunk-XX2O3ISY.js";
import "./chunk-DQST64FR.js";
import {
  AsyncHandler,
  Building,
  BuildingLevel,
  CdkScrollable,
  FormField,
  IconComponent,
  MatDialog,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  OrganisationService,
  SETTING_KEYS,
  SafePipe,
  SanitizePipe,
  SettingsService,
  currentUser,
  findNearbyFeature,
  formatRecurrence,
  fromBookingRecurrence,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  settingSignal,
  showBooking
} from "./chunk-3XNRPS72.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Injector,
  Input,
  Ju,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  Router,
  RouterLink,
  RouterModule,
  SlicePipe,
  TranslatePipe,
  addDays,
  computed,
  effect,
  endOfDay,
  flatten,
  getInvalidSignalFields,
  i18n,
  inject,
  input,
  model,
  notifyError,
  notifySuccess,
  output,
  set,
  setClassMetadata,
  signal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2XZZDWFL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/desk-flow-new/desk-flow-auto-assign.component.ts
var DeskFlowAutoAssignComponent = class _DeskFlowAutoAssignComponent {
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this.autoAssignDesk = () => {
      const { date, duration } = this.model();
      const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
        maxWidth: "100vw",
        maxHeight: "100vh",
        panelClass: "auto-assigned-desk-modal"
      });
      dialog_ref.componentInstance.show_close.set(true);
      if (date) {
        dialog_ref.componentInstance.date.set(date);
      }
      if (duration) {
        dialog_ref.componentInstance.duration.set(duration);
      }
      dialog_ref.afterClosed().subscribe((confirmed) => {
        if (confirmed) {
          this._booking_form.setView("success");
        }
      });
    };
  }
  get model() {
    return this._booking_form.model;
  }
  static {
    this.\u0275fac = function DeskFlowAutoAssignComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowAutoAssignComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowAutoAssignComponent, selectors: [["desk-flow-auto-assign"]], decls: 27, vars: 0, consts: [[1, "bg-grad", "relative", "mx-auto", "w-full", "max-w-full", "space-y-2", "rounded-xl", "border", "border-base-300", "p-4", "text-white", "shadow"], [1, "flex", "items-center", "justify-between", "pb-2"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm", "capitalize"], [1, "absolute", "inset-0", "bg-brand-content", "opacity-20"], [1, "flex", "items-center", "space-x-2"], [1, "text-sm"], [1, "mb-1", "text-2xl", "font-medium"], [1, "flex", "flex-col", "items-center", "space-y-2", "pt-2", "sm:flex-row", "sm:space-x-4", "sm:space-y-0"], ["btn", "", "matRipple", "", 1, "white", "w-full", "flex-1", "space-x-2", 3, "click"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "flex-1", "space-x-2"]], template: function DeskFlowAutoAssignComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5, "Quick Action");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "icon");
        \u0275\u0275text(8, "auto_awesome");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275text(10, "Smart Selection");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div")(12, "h3", 6);
        \u0275\u0275text(13, "Auto-Assign");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 5);
        \u0275\u0275text(15, " We'll always try to book you in your home neighbourhood\u2014if it's full, we'll find you a spot nearby. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
        \u0275\u0275listener("click", function DeskFlowAutoAssignComponent_Template_button_click_17_listener() {
          return ctx.autoAssignDesk();
        });
        \u0275\u0275elementStart(18, "icon", 9);
        \u0275\u0275text(19, "bolt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div");
        \u0275\u0275text(21, "Auto-Assign");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 10)(23, "icon", 9);
        \u0275\u0275text(24, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div");
        \u0275\u0275text(26, "View Homebase");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [IconComponent], styles: ["\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=desk-flow-auto-assign.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFlowAutoAssignComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-auto-assign", template: `
        <div
            class="bg-grad relative mx-auto w-full max-w-full space-y-2 rounded-xl border border-base-300 p-4 text-white shadow"
        >
            <div class="flex items-center justify-between pb-2">
                <div
                    class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                >
                    <div
                        class="absolute inset-0 bg-brand-content opacity-20"
                    ></div>
                    <div>Quick Action</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>auto_awesome</icon>
                    <div class="text-sm">Smart Selection</div>
                </div>
            </div>
            <div>
                <h3 class="mb-1 text-2xl font-medium">Auto-Assign</h3>
                <p class="text-sm">
                    We'll always try to book you in your home neighbourhood\u2014if
                    it's full, we'll find you a spot nearby.
                </p>
            </div>
            <div
                class="flex flex-col items-center space-y-2 pt-2 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
                <button
                    btn
                    matRipple
                    class="white w-full flex-1 space-x-2"
                    (click)="autoAssignDesk()"
                >
                    <icon class="text-2xl">bolt</icon>
                    <div>Auto-Assign</div>
                </button>
                <button
                    btn
                    matRipple
                    class="inverse white w-full flex-1 space-x-2"
                >
                    <icon class="text-2xl">map</icon>
                    <div>View Homebase</div>
                </button>
            </div>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;c8abda7309ed85adf85fe922798ae661c676d08c3d0155d4e4eb34a85f1a66c1;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/desk-flow-new/desk-flow-auto-assign.component.ts */\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=desk-flow-auto-assign.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowAutoAssignComponent, { className: "DeskFlowAutoAssignComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-auto-assign.component.ts", lineNumber: 71 });
})();

// apps/workplace/src/app/book/desk-flow-new/desk-flow-details.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [];
function DeskFlowDetailsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.BOOK_FOR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form.user);
    \u0275\u0275control();
  }
}
function DeskFlowDetailsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 23);
    \u0275\u0275element(7, "input", 24);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "FORM.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r0.form.title)("placeholder", \u0275\u0275pipeBind1(8, 6, "BOOKINGS.DESK_TITLE_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "FORM.TITLE_REQUIRED"));
  }
}
function DeskFlowDetailsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r0.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFlowDetailsComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "time-field", 27);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailsComponent_Conditional_54_Template_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "label", 28);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "duration-field", 29);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "FORM.TIME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.model().date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 14, "FORM.DURATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("time", ctx_r0.model().date)("max", ctx_r0.max_duration())("min", ctx_r0.min_duration())("custom_options", ctx_r0.custom_duration_options())("step", ctx_r0.duration_step())("use_24hr", ctx_r0.use_24hr())("timezone", ctx_r0.timezone)("formField", ctx_r0.form.duration);
    \u0275\u0275control();
  }
}
function DeskFlowDetailsComponent_Conditional_55_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.update_master);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "FORM.UPDATE_FUTURE"), " ");
  }
}
function DeskFlowDetailsComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "recurrence-field", 31);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailsComponent_Conditional_55_Template_recurrence_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onRecurrenceChange($event));
    })("first_instance", function DeskFlowDetailsComponent_Conditional_55_Template_recurrence_field_first_instance_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFirstInstanceChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, DeskFlowDetailsComponent_Conditional_55_Conditional_7_Template, 3, 4, "mat-checkbox", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.RECURRENCE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("date", ctx_r0.model().date)("ngModel", ctx_r0.model())("ngModelOptions", \u0275\u0275pureFunction0(8, _c0))("available_days", ctx_r0.available_days());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.model().id ? 7 : -1);
  }
}
function DeskFlowDetailsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-checkbox", 3);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailsComponent_Conditional_56_Template_mat_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.model.update((m) => __spreadProps(__spreadValues({}, m), { secondary_resource: $event ? "locker" : "" })));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !!ctx_r0.form_value().secondary_resource)("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.DESK_REQUIRE_LOCKER"), " ");
  }
}
function DeskFlowDetailsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-user-list-field", 33);
    \u0275\u0275listener("ngModelChange", function DeskFlowDetailsComponent_Conditional_57_Template_a_user_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOptions({ members: $event }));
    });
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function DeskFlowDetailsComponent_Conditional_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.findAvailableTime());
    });
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36);
    \u0275\u0275text(9, "Availability");
    \u0275\u0275elementEnd()()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "p", 37)(11, "icon", 5);
    \u0275\u0275text(12, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "BOOKINGS.DESK_GROUP_MEMBERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.options()?.members || \u0275\u0275pureFunction0(10, _c1))("ngModelOptions", \u0275\u0275pureFunction0(11, _c0))("time", ctx_r0.model().date);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Find Available time", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, "BOOKINGS.DESK_GROUP_MEMBERS_INFO"));
  }
}
var DeskFlowDetailsComponent = class _DeskFlowDetailsComponent {
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.active_form = signal(
      "single",
      ...ngDevMode ? [{ debugName: "active_form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_type_config = signal(
      {
        single: { icon: "person", label: "Single" },
        group: { icon: "group_add", label: "Group" },
        other: { icon: "person_add", label: "Book for other" }
      },
      ...ngDevMode ? [{ debugName: "form_type_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_value = this._booking_form.model;
    this.options = this._booking_form.options;
    this._options_sync = effect(
      () => {
        const options = this.options();
        if (options?.group && this.active_form() !== "group") {
          this.active_form.set("group");
        }
      },
      ...ngDevMode ? [{ debugName: "_options_sync" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_title = settingSignal("desks.hide_title", false);
    this.available_days = settingSignal("desks.available_period", 90);
    this.end_date = computed(
      () => {
        return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
      },
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration_step = computed(
      () => settingSignal("desks.duration_step")() || settingSignal("bookings.duration_step", 15)(),
      ...ngDevMode ? [{ debugName: "duration_step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = computed(
      () => settingSignal("desks.min_duration")() || settingSignal("bookings.min_duration", 30)(),
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => settingSignal("desks.max_duration")() || settingSignal("bookings.max_duration", 8 * 60)(),
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_duration_options = computed(
      () => settingSignal("desks.custom_duration_options")() || settingSignal("bookings.custom_duration_options", [])(),
      ...ngDevMode ? [{ debugName: "custom_duration_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_lockers = settingSignal("desks.can_book_lockers", false);
    this.can_recurr = settingSignal("desks.allow_recurrence", false);
    this.allow_time_changes = computed(
      () => settingSignal("desks.allow_time_changes")() !== false,
      ...ngDevMode ? [{ debugName: "allow_time_changes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = computed(
      () => this.allow_time_changes() && (settingSignal("desks.allow_all_day")() || settingSignal("bookings.allow_all_day")()),
      ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = settingSignal("use_24_hour_time", false);
  }
  get form() {
    return this._booking_form.form;
  }
  get model() {
    return this._booking_form.model;
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.desks.use_building_timezone") ? this._org.building.timezone : "";
  }
  setActiveForm(form) {
    this.active_form.set(form);
    this._booking_form.setOptions({ group: form === "group" });
    if (form === "single") {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        user: currentUser(),
        attendees: []
      }));
    } else if (form === "group") {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { user: currentUser() }));
    } else {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { user: null, attendees: [] }));
    }
  }
  setOptions(options) {
    this._booking_form.setOptions(options);
  }
  onRecurrenceChange(recurrence) {
    this.model.update((m) => __spreadValues(__spreadValues({}, m), recurrence));
  }
  onFirstInstanceChange(date) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { date }));
  }
  findAvailableTime() {
    const { date, duration } = this.model();
    const members = this.options()?.members ?? [];
    const ref = this._dialog.open(FindAvailabilityModalComponent, {
      data: {
        users: members,
        host: currentUser(),
        date,
        duration
      }
    });
    ref.afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: ref.componentInstance.date(),
        duration: ref.componentInstance.duration()
      }));
      this.setOptions({ members: ref.componentInstance.users() });
    });
  }
  static {
    this.\u0275fac = function DeskFlowDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowDetailsComponent, selectors: [["desk-flow-details"]], decls: 58, vars: 23, consts: [[1, "w-full", "p-4"], [1, "mb-4", "flex", "w-full", "sm:hidden"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["value", "single"], ["value", "group"], ["value", "other"], [1, "bg-base-200", "hidden", "w-full", "items-center", "space-x-1", "rounded-lg", "p-1", "sm:flex"], ["btn", "", "matRipple", "", 1, "border-base-300", "hover:bg-base-300", "flex-1", "space-x-2", "border", 3, "click"], [1, "mt-4"], [1, "mb-4", "w-full"], [1, "flex", "flex-col", "space-y-2", "sm:hidden", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "relative", "flex-1"], ["for", "date"], [3, "formField", "to"], [1, "absolute", "-top-2", "right-2", 3, "formField"], [1, "flex", "flex-col"], ["for", "user"], ["required", ""], [3, "formField"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formField", "placeholder"], [1, "flex-1"], ["for", "time"], ["name", "time", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "duration"], [3, "time", "max", "min", "custom_options", "step", "use_24hr", "timezone", "formField"], ["for", "recurrence"], ["name", "recurrence", 3, "ngModelChange", "first_instance", "date", "ngModel", "ngModelOptions", "available_days"], ["for", "members"], [3, "ngModelChange", "ngModel", "ngModelOptions", "time"], ["btn", "", "matRipple", "", "type", "button", 1, "inverse", "min-w-1/4", "flex-1", "sm:flex-none", 3, "click"], [1, "hidden", "sm:flex"], [1, "flex", "sm:hidden"], [1, "bg-info", "text-info-content", "mt-1", "flex", "items-center", "space-x-1", "rounded", "p-1", "text-sm", "shadow"]], template: function DeskFlowDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-select", 3);
        \u0275\u0275listener("ngModelChange", function DeskFlowDetailsComponent_Template_mat_select_ngModelChange_3_listener($event) {
          return ctx.setActiveForm($event);
        });
        \u0275\u0275elementStart(4, "mat-select-trigger")(5, "div", 4)(6, "icon", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "mat-option", 6)(11, "div", 4)(12, "icon", 5);
        \u0275\u0275text(13, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15, "Single");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "mat-option", 7)(17, "div", 4)(18, "icon", 5);
        \u0275\u0275text(19, "group_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "Group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "mat-option", 8)(23, "div", 4)(24, "icon", 5);
        \u0275\u0275text(25, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "Book for other");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "button", 10);
        \u0275\u0275listener("click", function DeskFlowDetailsComponent_Template_button_click_29_listener() {
          return ctx.setActiveForm("single");
        });
        \u0275\u0275elementStart(30, "icon", 5);
        \u0275\u0275text(31, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div");
        \u0275\u0275text(33, "Single");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 10);
        \u0275\u0275listener("click", function DeskFlowDetailsComponent_Template_button_click_34_listener() {
          return ctx.setActiveForm("group");
        });
        \u0275\u0275elementStart(35, "icon", 5);
        \u0275\u0275text(36, "group_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div");
        \u0275\u0275text(38, "Group");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "button", 10);
        \u0275\u0275listener("click", function DeskFlowDetailsComponent_Template_button_click_39_listener() {
          return ctx.setActiveForm("other");
        });
        \u0275\u0275elementStart(40, "icon", 5);
        \u0275\u0275text(41, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div");
        \u0275\u0275text(43, "Book for other");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 11);
        \u0275\u0275conditionalCreate(45, DeskFlowDetailsComponent_Conditional_45_Template, 7, 4, "div", 12);
        \u0275\u0275conditionalCreate(46, DeskFlowDetailsComponent_Conditional_46_Template, 12, 10, "div");
        \u0275\u0275elementStart(47, "div", 13)(48, "div", 14)(49, "label", 15);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "date-field", 16);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(53, DeskFlowDetailsComponent_Conditional_53_Template, 3, 4, "mat-checkbox", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(54, DeskFlowDetailsComponent_Conditional_54_Template, 10, 17);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(55, DeskFlowDetailsComponent_Conditional_55_Template, 8, 9, "div", 18);
        \u0275\u0275conditionalCreate(56, DeskFlowDetailsComponent_Conditional_56_Template, 4, 6, "div", 4);
        \u0275\u0275conditionalCreate(57, DeskFlowDetailsComponent_Conditional_57_Template, 16, 12, "div", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.active_form())("ngModelOptions", \u0275\u0275pureFunction0(22, _c0));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.form_type_config()[ctx.active_form()].icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.form_type_config()[ctx.active_form()].label);
        \u0275\u0275advance(20);
        \u0275\u0275classProp("clear", ctx.active_form() !== "single");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("clear", ctx.active_form() !== "group");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("clear", ctx.active_form() !== "other");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.active_form() === "other" ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_title() ? 46 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 20, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_all_day() ? 53 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.form_value().all_day ? 54 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_recurr() ? 55 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_book_lockers() ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.active_form() === "group" ? 57 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatCheckboxModule,
      MatCheckbox,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      IconComponent,
      RecurrenceFieldComponent,
      UserSearchFieldComponent,
      UserListFieldComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFlowDetailsComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-details", template: `
        <div class="w-full p-4">
            <!-- Mobile select dropdown -->
            <div class="mb-4 flex w-full sm:hidden">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [ngModel]="active_form()"
                        (ngModelChange)="setActiveForm($event)"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-select-trigger>
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">{{
                                    form_type_config()[active_form()].icon
                                }}</icon>
                                <span>{{
                                    form_type_config()[active_form()].label
                                }}</span>
                            </div>
                        </mat-select-trigger>
                        <mat-option value="single">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">person</icon>
                                <span>Single</span>
                            </div>
                        </mat-option>
                        <mat-option value="group">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">group_add</icon>
                                <span>Group</span>
                            </div>
                        </mat-option>
                        <mat-option value="other">
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">person_add</icon>
                                <span>Book for other</span>
                            </div>
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <!-- Desktop button toggle -->
            <div
                class="bg-base-200 hidden w-full items-center space-x-1 rounded-lg p-1 sm:flex"
            >
                <button
                    btn
                    matRipple
                    class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                    [class.clear]="active_form() !== 'single'"
                    (click)="setActiveForm('single')"
                >
                    <icon class="text-xl">person</icon>
                    <div>Single</div>
                </button>
                <button
                    btn
                    matRipple
                    class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                    [class.clear]="active_form() !== 'group'"
                    (click)="setActiveForm('group')"
                >
                    <icon class="text-xl">group_add</icon>
                    <div>Group</div>
                </button>
                <button
                    btn
                    matRipple
                    class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                    [class.clear]="active_form() !== 'other'"
                    (click)="setActiveForm('other')"
                >
                    <icon class="text-xl">person_add</icon>
                    <div>Book for other</div>
                </button>
            </div>
            <div class="mt-4">
                @if (active_form() === 'other') {
                    <div class="mb-4 w-full">
                        <label for="user"
                            >{{ 'FORM.BOOK_FOR' | translate
                            }}<span required>*</span></label
                        >
                        <a-user-search-field
                            [formField]="form.user"
                        ></a-user-search-field>
                    </div>
                }
                @if (!hide_title()) {
                    <div>
                        <label for="title"
                            >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.title"
                                [placeholder]="
                                    'BOOKINGS.DESK_TITLE_PLACEHOLDER'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                'FORM.TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div
                    class="flex flex-col space-y-2 sm:hidden sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <div class="relative flex-1">
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field
                            [formField]="form.date"
                            [to]="end_date()"
                        />
                        @if (allow_all_day()) {
                            <mat-checkbox
                                [formField]="form.all_day"
                                class="absolute -top-2 right-2"
                            >
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                    @if (!form_value().all_day) {
                        <div class="flex-1">
                            <label for="time">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <time-field
                                name="time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({ ...m, date: $event }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </div>
                        <div class="flex-1">
                            <label for="duration">{{
                                'FORM.DURATION' | translate
                            }}</label>
                            <duration-field
                                [time]="model().date"
                                [max]="max_duration()"
                                [min]="min_duration()"
                                [custom_options]="custom_duration_options()"
                                [step]="duration_step()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                                [formField]="form.duration"
                            />
                        </div>
                    }
                </div>
                @if (can_recurr()) {
                    <div class="flex flex-col">
                        <label for="recurrence">
                            {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                        </label>
                        <recurrence-field
                            name="recurrence"
                            [date]="model().date"
                            [ngModel]="model()"
                            (ngModelChange)="onRecurrenceChange($event)"
                            (first_instance)="onFirstInstanceChange($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [available_days]="available_days()"
                        ></recurrence-field>
                        @if (model().id) {
                            <mat-checkbox [formField]="form.update_master">
                                {{ 'FORM.UPDATE_FUTURE' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                }
                @if (can_book_lockers()) {
                    <div class="flex items-center space-x-2">
                        <mat-checkbox
                            [ngModel]="!!form_value().secondary_resource"
                            (ngModelChange)="
                                model.update((m) => ({
                                    ...m,
                                    secondary_resource: $event ? 'locker' : '',
                                }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'BOOKINGS.DESK_REQUIRE_LOCKER' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (active_form() === 'group') {
                    <div class="flex flex-col">
                        <label for="members">
                            {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                        </label>
                        <a-user-list-field
                            [ngModel]="options()?.members || []"
                            (ngModelChange)="setOptions({ members: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [time]="model().date"
                        >
                            <button
                                btn
                                matRipple
                                type="button"
                                class="inverse min-w-1/4 flex-1 sm:flex-none"
                                (click)="findAvailableTime()"
                            >
                                <div class="hidden sm:flex">
                                    {{ 'Find Available time' }}
                                </div>
                                <div class="flex sm:hidden">Availability</div>
                            </button>
                        </a-user-list-field>
                        <p
                            class="bg-info text-info-content mt-1 flex items-center space-x-1 rounded p-1 text-sm shadow"
                        >
                            <icon class="text-xl">info</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_MEMBERS_INFO' | translate
                            }}</span>
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatSelectModule,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      FormsModule,
      FormField,
      TranslatePipe,
      IconComponent,
      RecurrenceFieldComponent,
      UserSearchFieldComponent,
      UserListFieldComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowDetailsComponent, { className: "DeskFlowDetailsComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-details.component.ts", lineNumber: 286 });
})();

// apps/workplace/src/app/book/desk-flow-new/desk-flow-select-list.component.ts
var _c02 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 10);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r2.images[0]);
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Template_button_click_2_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.item_selected.emit(item_r2));
    });
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275conditionalCreate(4, DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_4_Template, 2, 0, "icon", 10);
    \u0275\u0275conditionalCreate(5, DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_5_Template, 1, 1, "img", 11)(6, DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_6_Template, 1, 0, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "icon", 16);
    \u0275\u0275text(12, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "button", 18);
    \u0275\u0275listener("click", function DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Template_button_click_15_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFavourite(item_r2));
    });
    \u0275\u0275elementStart(16, "icon", 19);
    \u0275\u0275text(17, "favorite");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Conditional_18_Template, 3, 3, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("!border-success", ctx_r2.selected_items().includes(item_r2.id));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.selected_items().includes(item_r2.id) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.images?.length ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.display_name || item_r2.name || item_r2.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r2.location || item_r2.zone?.display_name || item_r2.zone?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r2.favourites().includes(item_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r2.favourites().includes(item_r2.id) ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r2.approval ? 18 : -1);
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 22);
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function DeskFlowSelectListComponent_Conditional_0_Conditional_0_Conditional_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.page.set(ctx_r2.page() - 1));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function DeskFlowSelectListComponent_Conditional_0_Conditional_0_Conditional_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.page.set(ctx_r2.page() + 1));
    });
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "keyboard_arrow_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    const range_r5 = ctx_r2.active_range();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", range_r5[0], " - ", range_r5[1], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r2.page() + 1, " of ", ctx_r2.max_pages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page() <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.page() + 1 >= ctx_r2.max_pages());
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 3);
    \u0275\u0275repeaterCreate(4, DeskFlowSelectListComponent_Conditional_0_Conditional_0_For_5_Template, 19, 10, "li", 4, _forTrack0);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DeskFlowSelectListComponent_Conditional_0_Conditional_0_Conditional_7_Template, 12, 6, "div", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(10, _c02, ctx_r2.available_items().length), ctx_r2.available_items().length), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(6, 6, ctx_r2.available_items(), ctx_r2.page() * ctx_r2.page_size(), ctx_r2.page() * ctx_r2.page_size() + ctx_r2.page_size()));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.available_items().length > ctx_r2.page_size() ? 7 : -1);
  }
}
function DeskFlowSelectListComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "BOOKINGS.DESK_LIST_EMPTY"), " ");
  }
}
function DeskFlowSelectListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskFlowSelectListComponent_Conditional_0_Conditional_0_Template, 8, 12)(1, DeskFlowSelectListComponent_Conditional_0_Conditional_1_Template, 4, 3, "div", 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.available_items()?.length ? 0 : 1);
  }
}
function DeskFlowSelectListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
var DeskFlowSelectListComponent = class _DeskFlowSelectListComponent {
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.selected_items = model(
      [],
      ...ngDevMode ? [{ debugName: "selected_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.promote_selected = input(
      false,
      ...ngDevMode ? [{ debugName: "promote_selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_selected = output();
    this.loading = this._booking_form.loading;
    this._available_items = this._booking_form.available_resources;
    this.form_value = this._booking_form.model;
    this._promote_on_list_change = signal(
      false,
      ...ngDevMode ? [{ debugName: "_promote_on_list_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_items = computed(
      () => {
        const available = this._available_items();
        const form = this.form_value();
        const resources = form.resources || [];
        if (resources.length > 0 && (this.promote_selected() || this._promote_on_list_change())) {
          const selected_ids = resources.map((r) => r.id);
          const selected_resources = resources.map((resource) => available.find((item) => item.id === resource.id) || resource);
          const remaining_resources = available.filter((item) => !selected_ids.includes(item.id));
          return [...selected_resources, ...remaining_resources];
        }
        if (resources.length > 0) {
          const existing_ids = available.map((r) => r.id);
          const missing_resources = resources.filter((r) => !existing_ids.includes(r.id));
          if (missing_resources.length > 0) {
            return [...missing_resources, ...available];
          }
        }
        return available;
      },
      ...ngDevMode ? [{ debugName: "available_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page = signal(
      0,
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page_size = signal(
      10,
      ...ngDevMode ? [{ debugName: "page_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_pages = computed(
      () => Math.ceil(this.available_items().length / this.page_size()),
      ...ngDevMode ? [{ debugName: "max_pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_range = computed(
      () => [
        this.page() * this.page_size() + 1,
        Math.min(this.page() * this.page_size() + this.page_size(), this.available_items()?.length)
      ],
      ...ngDevMode ? [{ debugName: "active_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_auto_page_key = "";
    this._last_available_key = "";
    this._last_selected_key = "";
    this.favourites = settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true);
    effect(() => {
      const available_key = this._available_items().map((item) => item.id).join("|");
      const selected_key = this.selected_items().join("|");
      const selected_changed = selected_key !== this._last_selected_key;
      const available_changed = available_key !== this._last_available_key;
      if (!selected_key || selected_changed) {
        this._promote_on_list_change.set(false);
      } else if (available_changed && this._last_available_key) {
        this._promote_on_list_change.set(true);
      }
      this._last_available_key = available_key;
      this._last_selected_key = selected_key;
    });
    effect(() => {
      const selected_id = this.selected_items()?.[0];
      if (!selected_id)
        return;
      const merged_items = this.available_items();
      const selected_index = merged_items.findIndex((item) => item.id === selected_id);
      if (selected_index < 0)
        return;
      const target_page = Math.floor(selected_index / this.page_size());
      const page_key = `${selected_id}:${selected_index}:${this.page_size()}`;
      if (page_key === this._last_auto_page_key)
        return;
      this._last_auto_page_key = page_key;
      this.page.set(target_page);
    });
  }
  toggleFavourite(item) {
    const existing = this.favourites();
    console.log("Toggle Favourites:", item, existing);
    const updated = existing.find((id) => item.id === id) ? existing.filter((id) => id !== item.id) : [...existing, item.id];
    this.favourites.set(updated);
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, updated);
  }
  static {
    this.\u0275fac = function DeskFlowSelectListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowSelectListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowSelectListComponent, selectors: [["desk-flow-select-list"]], inputs: { selected_items: [1, "selected_items"], promote_selected: [1, "promote_selected"] }, outputs: { selected_items: "selected_itemsChange", item_selected: "item_selected" }, decls: 2, vars: 1, consts: [["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "mb-2", "text-sm", "font-medium"], [1, "list-style-none", "flex-1", "space-y-2"], ["item", "", 1, "relative", "w-full", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow", "hover:border-info", 3, "!border-success"], [1, "mt-2", "flex", "w-full", "items-center", "space-x-2", "rounded-xl", "border", "border-base-300", "bg-base-100", "p-1"], ["item", "", 1, "relative", "w-full", "rounded-lg", "border", "border-base-200", "bg-base-100", "shadow", "hover:border-info"], ["matRipple", "", 1, "p-2"], ["name", "select-item", 1, "flex", "h-full", "w-full", "items-center", "rounded", 3, "click"], [1, "relative", "mr-4", "flex", "h-16", "w-16", "min-w-[4rem]", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-base-200"], [1, "absolute", "left-1", "top-1", "rounded-full", "bg-base-200"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "max-w-[calc(100%-6rem)]", "space-y-2"], [1, "mr-10", "truncate", "text-left", "font-medium"], [1, "item-x-2", "flex", "items-center", "text-sm"], [1, "-ml-1", "text-lg", "text-info"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "toggle-item-favourite", 1, "absolute", "right-1", "top-1", 3, "click"], [3, "className"], [1, "absolute", "bottom-1", "right-1", "w-14", "rounded", "bg-warning", "px-2", "py-1", "text-center", "text-[0.625rem]", "font-medium", "leading-tight", "text-warning-content"], [1, "!ml-2", "rounded-md", "bg-base-200", "px-2", "py-1", "font-mono", "text-xs"], [1, "flex-1"], [1, "p-2"], ["icon", "", "matRipple", "", 1, "rounded-xl", "border", "border-base-300", 3, "click", "disabled"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function DeskFlowSelectListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskFlowSelectListComponent_Conditional_0_Template, 2, 1)(1, DeskFlowSelectListComponent_Conditional_1_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      SlicePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=desk-flow-select-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFlowSelectListComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-select-list", template: `
        @if (!loading()) {
            @if (available_items()?.length) {
                <div class="mb-2 text-sm font-medium">
                    {{
                        'COMMON.RESULTS_COUNT'
                            | translate
                                : { count: available_items().length }
                                : available_items().length
                    }}
                </div>
                <ul class="list-style-none flex-1 space-y-2">
                    @for (
                        item of available_items()
                            | slice
                                : page() * page_size()
                                : page() * page_size() + page_size();
                        track item.id
                    ) {
                        <li
                            item
                            [class.!border-success]="
                                selected_items().includes(item.id)
                            "
                            class="relative w-full rounded-lg border border-base-200 bg-base-100 shadow hover:border-info"
                        >
                            <div matRipple class="p-2">
                                <button
                                    name="select-item"
                                    class="flex h-full w-full items-center rounded"
                                    (click)="item_selected.emit(item)"
                                >
                                    <div
                                        class="relative mr-4 flex h-16 w-16 min-w-[4rem] items-center justify-center overflow-hidden rounded-xl bg-base-200"
                                    >
                                        @if (
                                            selected_items().includes(item.id)
                                        ) {
                                            <icon
                                                class="absolute left-1 top-1 rounded-full bg-base-200"
                                                >task_alt</icon
                                            >
                                        }
                                        @if (item.images?.length) {
                                            <img
                                                auth
                                                class="h-full object-cover"
                                                [source]="item.images[0]"
                                            />
                                        } @else {
                                            <img
                                                class="m-auto"
                                                src="assets/icons/desk-placeholder.svg"
                                            />
                                        }
                                    </div>
                                    <div class="max-w-[calc(100%-6rem)] space-y-2">
                                        <div
                                            class="mr-10 truncate text-left font-medium"
                                        >
                                            {{
                                                item.display_name ||
                                                    item.name ||
                                                    item.id
                                            }}
                                        </div>
                                        <div
                                            class="item-x-2 flex items-center text-sm"
                                        >
                                            <icon
                                                class="-ml-1 text-lg text-info"
                                                >place</icon
                                            >
                                            <p class="truncate">
                                                {{
                                                    item.location ||
                                                        item.zone
                                                            ?.display_name ||
                                                        item.zone?.name
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <button
                                icon
                                matRipple
                                name="toggle-item-favourite"
                                class="absolute right-1 top-1"
                                [class.text-info]="
                                    favourites().includes(item.id)
                                "
                                (click)="toggleFavourite(item)"
                            >
                                <icon
                                    [className]="
                                        favourites().includes(item.id)
                                            ? 'material-symbols-rounded'
                                            : 'material-symbols-outlined'
                                    "
                                    >favorite</icon
                                >
                            </button>
                            @if (item.approval) {
                                <div
                                    class="absolute bottom-1 right-1 w-14 rounded bg-warning px-2 py-1 text-center text-[0.625rem] font-medium leading-tight text-warning-content"
                                >
                                    {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
                                </div>
                            }
                        </li>
                    }
                </ul>
                @if (available_items().length > page_size()) {
                    <div
                        class="mt-2 flex w-full items-center space-x-2 rounded-xl border border-base-300 bg-base-100 p-1"
                    >
                        <div
                            class="!ml-2 rounded-md bg-base-200 px-2 py-1 font-mono text-xs"
                        >
                            @let range = active_range();
                            {{ range[0] }} - {{ range[1] }}
                        </div>
                        <div class="flex-1"></div>
                        <div class="p-2">
                            Page {{ page() + 1 }} of {{ max_pages() }}
                        </div>
                        <button
                            icon
                            matRipple
                            [disabled]="page() <= 0"
                            (click)="page.set(page() - 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [disabled]="page() + 1 >= max_pages()"
                            (click)="page.set(page() + 1)"
                            class="rounded-xl border border-base-300"
                        >
                            <icon>keyboard_arrow_right</icon>
                        </button>
                    </div>
                }
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'BOOKINGS.DESK_LIST_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'BOOKINGS.DESK_LIST_LOADING' | translate }}
                    <!-- <br />
  {{ loading | async | json }} -->
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent,
      MatRippleModule,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;16acf1d9baeea8a52dbebd8012c2041b0495c58e0446b770da3b170e181f97ad;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/desk-flow-new/desk-flow-select-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=desk-flow-select-list.component.css.map */\n"] }]
  }], () => [], { selected_items: [{ type: Input, args: [{ isSignal: true, alias: "selected_items", required: false }] }, { type: Output, args: ["selected_itemsChange"] }], promote_selected: [{ type: Input, args: [{ isSignal: true, alias: "promote_selected", required: false }] }], item_selected: [{ type: Output, args: ["item_selected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowSelectListComponent, { className: "DeskFlowSelectListComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-select-list.component.ts", lineNumber: 216 });
})();

// apps/workplace/src/app/book/desk-flow-new/desk-flow-select-map.component.ts
var _c03 = () => ({ controls: true });
var _c12 = () => ({ standalone: true });
function DeskFlowSelectMapComponent_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r3?.parent_id)?.display_name, " ");
  }
}
function DeskFlowSelectMapComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6)(1, "div", 7);
    \u0275\u0275conditionalCreate(2, DeskFlowSelectMapComponent_Conditional_0_For_5_Conditional_2_Template, 5, 3, "div", 8);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lvl_r3.display_name || lvl_r3.name);
  }
}
function DeskFlowSelectMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 4)(2, "mat-select", 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectMapComponent_Conditional_0_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(4, DeskFlowSelectMapComponent_Conditional_0_For_5_Template, 5, 3, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.level())("ngModelOptions", \u0275\u0275pureFunction0(5, _c12))("placeholder", \u0275\u0275pipeBind1(3, 3, "COMMON.LEVEL_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DeskFlowSelectMapComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.selected_desk().images[0]);
  }
}
function DeskFlowSelectMapComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 13);
  }
}
function DeskFlowSelectMapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DeskFlowSelectMapComponent_Conditional_3_Conditional_4_Template, 1, 1, "img", 12)(5, DeskFlowSelectMapComponent_Conditional_3_Conditional_5_Template, 1, 0, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "icon", 17);
    \u0275\u0275text(11, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selected_desk().images?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_desk().display_name || ctx_r1.selected_desk().name || ctx_r1.selected_desk().id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_desk().location || ctx_r1.selected_desk().zone?.display_name || ctx_r1.selected_desk().zone?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 4, "COMMON.SELECTED"), " ");
  }
}
var DeskFlowSelectMapComponent = class _DeskFlowSelectMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._injector = inject(Injector);
    this._use_region = this._settings.signal("use_region", false);
    this.selected_items = input(
      [],
      ...ngDevMode ? [{ debugName: "selected_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      void 0,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_displayed = input(
      false,
      ...ngDevMode ? [{ debugName: "is_displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_selected = output();
    this.zoom = signal(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.center = signal(
      { x: 0.5, y: 0.5 },
      ...ngDevMode ? [{ debugName: "center" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.coordinates = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "coordinates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._selectedItem = (s) => () => this.item_selected.emit(s);
    this.setOptions = (o) => this._booking_form.setOptions(o);
    this.level = signal(
      null,
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_resources = this._booking_form.available_resources;
    this.form_value = this._booking_form.model;
    this.current_available = computed(
      () => {
        const available = this.available_resources();
        const form = this.form_value();
        const resources = form.resources || [];
        if (resources.length > 0) {
          const existing_ids = available.map((r) => r.id);
          const missing_resources = resources.filter((r) => !existing_ids.includes(r.id));
          if (missing_resources.length > 0) {
            return [...missing_resources, ...available];
          }
        }
        return available;
      },
      ...ngDevMode ? [{ debugName: "current_available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_url = computed(
      () => this.level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_list = this._booking_form.resources;
    this.features = computed(
      () => this.resource_list().map((space) => {
        const map_id = this._mapId(space);
        return {
          track_id: `desk:hover:${map_id}`,
          location: map_id,
          content: ExploreDeskInfoComponent,
          full_size: true,
          no_scale: true,
          data: {
            id: space.id,
            map_id,
            name: space.display_name || space.name || space.id,
            user: signal(""),
            status: computed(() => this._deskStatus(space)),
            bookings: signal([])
          },
          z_index: 20
        };
      }),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_region = this._use_region;
    this.levels = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const resources = this._booking_form.resources();
        const level_list = this.use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const level_ids = new Set(resources.filter((resource) => resource.bookable !== false).map((resource) => resource.zone?.id).filter((_) => _));
        return level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id)).sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_desk = computed(
      () => {
        const selected_ids = this.selected_items();
        if (!selected_ids?.length)
          return null;
        const available = this.current_available();
        return available.find((desk) => selected_ids.includes(desk.id)) || null;
      },
      ...ngDevMode ? [{ debugName: "selected_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actions = computed(
      () => this.current_available().map((space) => ({
        id: this._mapId(space),
        action: ["touchend", "mouseup"],
        callback: this._selectedItem(space)
      })),
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = computed(
      () => {
        const spaces = this.resource_list();
        return spaces.reduce((styles, space) => {
          const colours = this._settings.get("app.explore.colors") || {};
          const status = this._deskStatus(space);
          styles[`#${this._mapId(space)}`] = {
            fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
          };
          return styles;
        }, {});
      },
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  _mapId(space) {
    return space.map_id || space.id;
  }
  _deskStatus(space) {
    return this.current_available().some((item) => item.id === space.id) ? this.selected_items().includes(space.id) ? "pending" : "free" : "busy";
  }
  ngOnInit() {
    const ref = effect(() => {
      const details = this._booking_form.options();
      const level = this._org.levelWithID(details.zones || [details.zone_id]);
      if (level)
        this.level.set(level);
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "ref" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
    this.subscription("levels_update", {
      unsubscribe: () => ref.destroy()
    });
  }
  setLevel(level) {
    this.setOptions({ zones: [level?.id], zone_id: level?.id });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = (level.location || bld.location).split(",").map((_) => parseFloat(_));
      this.coordinates.set({ latitude, longitude });
    }
    this.level.set(level);
  }
  setZoom(new_zoom) {
    this.zoom.set(Math.max(0.5, Math.min(10, new_zoom)));
  }
  resetMap() {
    this.zoom.set(1);
    this.center.set({ x: 0.5, y: 0.5 });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DeskFlowSelectMapComponent_BaseFactory;
      return function DeskFlowSelectMapComponent_Factory(__ngFactoryType__) {
        return (\u0275DeskFlowSelectMapComponent_BaseFactory || (\u0275DeskFlowSelectMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskFlowSelectMapComponent)))(__ngFactoryType__ || _DeskFlowSelectMapComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowSelectMapComponent, selectors: [["desk-flow-select-map"]], inputs: { selected_items: [1, "selected_items"], active: [1, "active"], is_displayed: [1, "is_displayed"] }, outputs: { item_selected: "item_selected" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 10, consts: [[1, "absolute", "top-2", "right-2", "left-2", "z-10", "rounded", "border", "border-base-300", "bg-base-100", "p-2", "shadow"], [1, "absolute", "inset-0", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], [1, "absolute", "bottom-4", "left-4", "right-16", "z-10", "flex", "items-center", "rounded-lg", "border", "border-success", "bg-base-100", "p-2", "shadow-lg"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "relative", "mr-2", "flex", "h-12", "w-12", "min-w-[3rem]", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "bg-base-200"], [1, "absolute", "left-0", "top-0", "rounded-full", "bg-base-200", "text-success"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto", "max-h-8", "max-w-8"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "flex", "items-center", "text-sm", "opacity-60"], [1, "-ml-1", "text-lg"], [1, "truncate"], [1, "ml-2", "text-xs", "font-medium", "text-success"]], template: function DeskFlowSelectMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskFlowSelectMapComponent_Conditional_0_Template, 6, 6, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "interactive-map", 2);
        \u0275\u0275twoWayListener("zoomChange", function DeskFlowSelectMapComponent_Template_interactive_map_zoomChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
          return $event;
        })("centerChange", function DeskFlowSelectMapComponent_Template_interactive_map_centerChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(3, DeskFlowSelectMapComponent_Conditional_3_Template, 17, 6, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.levels()?.length ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.map_url());
        \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
        \u0275\u0275property("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("options", \u0275\u0275pureFunction0(9, _c03));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_desk() ? 3 : -1);
      }
    }, dependencies: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      AuthenticatedImageDirective,
      TranslatePipe,
      BuildingPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFlowSelectMapComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-select-map", template: `
        @if (levels()?.length) {
            <div
                class="absolute top-2 right-2 left-2 z-10 rounded border border-base-300 bg-base-100 p-2 shadow"
            >
                <mat-form-field appearance="outline" class="no-subscript w-full">
                    <mat-select
                        name="location"
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="'COMMON.LEVEL_ANY' | translate"
                    >
                        @for (lvl of levels(); track lvl) {
                            <mat-option [value]="lvl">
                                <div class="flex flex-col-reverse">
                                    @if (use_region()) {
                                        <div class="text-xs opacity-30">
                                            {{
                                                (lvl?.parent_id | building)
                                                    ?.display_name
                                            }}
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>{{ lvl.display_name || lvl.name }}</div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        <div class="absolute inset-0 w-full flex-1">
            <interactive-map
                [src]="map_url()"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
        @if (selected_desk()) {
            <div
                class="absolute bottom-4 left-4 right-16 z-10 flex items-center rounded-lg border border-success bg-base-100 p-2 shadow-lg"
            >
                <div
                    class="relative mr-2 flex h-12 w-12 min-w-[3rem] items-center justify-center overflow-hidden rounded-lg bg-base-200"
                >
                    <icon
                        class="absolute left-0 top-0 rounded-full bg-base-200 text-success"
                        >task_alt</icon
                    >
                    @if (selected_desk().images?.length) {
                        <img
                            auth
                            class="h-full object-cover"
                            [source]="selected_desk().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto max-h-8 max-w-8"
                            src="assets/icons/desk-placeholder.svg"
                        />
                    }
                </div>
                <div class="min-w-0 flex-1">
                    <div class="truncate font-medium">
                        {{
                            selected_desk().display_name ||
                                selected_desk().name ||
                                selected_desk().id
                        }}
                    </div>
                    <div class="flex items-center text-sm opacity-60">
                        <icon class="-ml-1 text-lg">place</icon>
                        <p class="truncate">
                            {{
                                selected_desk().location ||
                                    selected_desk().zone?.display_name ||
                                    selected_desk().zone?.name
                            }}
                        </p>
                    </div>
                </div>
                <div class="ml-2 text-xs font-medium text-success">
                    {{ 'COMMON.SELECTED' | translate }}
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      IconComponent,
      TranslatePipe,
      BuildingPipe,
      AuthenticatedImageDirective
    ] }]
  }], null, { selected_items: [{ type: Input, args: [{ isSignal: true, alias: "selected_items", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], is_displayed: [{ type: Input, args: [{ isSignal: true, alias: "is_displayed", required: false }] }], item_selected: [{ type: Output, args: ["item_selected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowSelectMapComponent, { className: "DeskFlowSelectMapComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-select-map.component.ts", lineNumber: 142 });
})();

// apps/workplace/src/app/book/desk-flow-new/desk-flow-select.component.ts
var _c04 = () => [];
var _c13 = () => ({ standalone: true });
function DeskFlowSelectComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function DeskFlowSelectComponent_Conditional_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filters_open.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function DeskFlowSelectComponent_Conditional_22_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r4 = ctx.$implicit;
    \u0275\u0275property("value", reg_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r4.display_name || reg_r4.name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 35);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_22_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, DeskFlowSelectComponent_Conditional_22_For_4_Template, 2, 2, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region())("ngModelOptions", \u0275\u0275pureFunction0(5, _c13))("placeholder", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.SPACE_REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function DeskFlowSelectComponent_Conditional_23_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r6 = ctx.$implicit;
    \u0275\u0275property("value", bld_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r6.display_name || bld_r6.name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 37);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_23_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, DeskFlowSelectComponent_Conditional_23_For_3_Template, 2, 2, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c13))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function DeskFlowSelectComponent_Conditional_24_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r8?.parent_id)?.display_name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_24_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36)(1, "div", 39);
    \u0275\u0275conditionalCreate(2, DeskFlowSelectComponent_Conditional_24_For_4_Conditional_2_Template, 5, 3, "div", 40);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 38);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_24_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(3, DeskFlowSelectComponent_Conditional_24_For_4_Template, 5, 3, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zones)("ngModelOptions", \u0275\u0275pureFunction0(6, _c13))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"))("multiple", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DeskFlowSelectComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "time-field", 43);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_32_Template_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275element(5, "duration-field", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 13, "FORM.TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.field("date"))("ngModelOptions", \u0275\u0275pureFunction0(15, _c13))("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.field("date"))("max", ctx_r1.max_duration())("min", ctx_r1.min_duration())("custom_options", ctx_r1.custom_duration_options())("step", ctx_r1.duration_step())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function DeskFlowSelectComponent_Conditional_33_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 49);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_33_For_8_Conditional_0_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const feat_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feat_r12, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const feat_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r1.feature_display()[feat_r12] || feat_r12)("ngModel", ctx_r1.options()?.features?.includes(feat_r12))("ngModelOptions", \u0275\u0275pureFunction0(3, _c13));
    \u0275\u0275control();
  }
}
function DeskFlowSelectComponent_Conditional_33_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskFlowSelectComponent_Conditional_33_For_8_Conditional_0_Template, 1, 4, "settings-toggle", 48);
  }
  if (rf & 2) {
    const feat_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.hide_features().includes(feat_r12) ? 0 : -1);
  }
}
function DeskFlowSelectComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 45);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_33_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "h2", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275repeaterCreate(7, DeskFlowSelectComponent_Conditional_33_For_8_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.options()?.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(8, _c13));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.FAVOURITES_ONLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "BOOKINGS.FACILITIES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.features());
  }
}
function DeskFlowSelectComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function DeskFlowSelectComponent_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAllFeatures());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS_CLEAR"), " ");
  }
}
function DeskFlowSelectComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const location_r14 = \u0275\u0275readContextLet(41);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r14, " ");
  }
}
function DeskFlowSelectComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const event_r15 = \u0275\u0275readContextLet(37);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, event_r15.date, ctx_r1.time_format), " \u2014 ", \u0275\u0275pipeBind2(2, 5, event_r15.date_end, ctx_r1.time_format), " ");
  }
}
function DeskFlowSelectComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function DeskFlowSelectComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function DeskFlowSelectComponent_For_51_Template_button_click_3_listener() {
      const feat_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFeature(feat_r17));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r17);
  }
}
function DeskFlowSelectComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-flow-select-map", 53);
    \u0275\u0275listener("item_selected", function DeskFlowSelectComponent_Conditional_66_Template_desk_flow_select_map_item_selected_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDesk($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected_items", ctx_r1.selected());
  }
}
function DeskFlowSelectComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-flow-select-list", 54);
    \u0275\u0275listener("item_selected", function DeskFlowSelectComponent_Conditional_67_Template_desk_flow_select_list_item_selected_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDesk($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected_items", ctx_r1.selected())("promote_selected", ctx_r1.promote_selected());
  }
}
function DeskFlowSelectComponent_Conditional_80_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r21 = ctx.$implicit;
    \u0275\u0275property("value", reg_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r21.display_name || reg_r21.name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 35);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_80_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, DeskFlowSelectComponent_Conditional_80_For_4_Template, 2, 2, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.region())("ngModelOptions", \u0275\u0275pureFunction0(5, _c13))("placeholder", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.SPACE_REGION_ANY"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.regions());
  }
}
function DeskFlowSelectComponent_Conditional_81_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r23 = ctx.$implicit;
    \u0275\u0275property("value", bld_r23);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r23.display_name || bld_r23.name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 37);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_81_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, DeskFlowSelectComponent_Conditional_81_For_3_Template, 2, 2, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building())("ngModelOptions", \u0275\u0275pureFunction0(3, _c13))("placeholder", ctx_r1.building()?.display_name || ctx_r1.building()?.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function DeskFlowSelectComponent_Conditional_82_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, lvl_r25?.parent_id)?.display_name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_82_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 36)(1, "div", 39);
    \u0275\u0275conditionalCreate(2, DeskFlowSelectComponent_Conditional_82_For_4_Conditional_2_Template, 5, 3, "div", 40);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r25.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r25.display_name || lvl_r25.name, " ");
  }
}
function DeskFlowSelectComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 55);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_82_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(3, DeskFlowSelectComponent_Conditional_82_For_4_Template, 5, 3, "mat-option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.options()?.zones)("ngModelOptions", \u0275\u0275pureFunction0(6, _c13))("placeholder", \u0275\u0275pipeBind1(2, 4, "COMMON.LEVEL_ANY"))("multiple", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DeskFlowSelectComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "time-field", 43);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_90_Template_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275element(5, "duration-field", 56);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 13, "FORM.TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.field("date"))("ngModelOptions", \u0275\u0275pureFunction0(15, _c13))("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.field("date"))("min", ctx_r1.min_duration())("max", ctx_r1.max_duration())("step", ctx_r1.duration_step())("custom_options", ctx_r1.custom_duration_options())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function DeskFlowSelectComponent_Conditional_91_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 49);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_91_For_8_Conditional_0_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const feat_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feat_r29, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const feat_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r1.feature_display()[feat_r29] || feat_r29)("ngModel", ctx_r1.options()?.features?.includes(feat_r29))("ngModelOptions", \u0275\u0275pureFunction0(3, _c13));
    \u0275\u0275control();
  }
}
function DeskFlowSelectComponent_Conditional_91_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskFlowSelectComponent_Conditional_91_For_8_Conditional_0_Template, 1, 4, "settings-toggle", 48);
  }
  if (rf & 2) {
    const feat_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.hide_features().includes(feat_r29) ? 0 : -1);
  }
}
function DeskFlowSelectComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 45);
    \u0275\u0275listener("ngModelChange", function DeskFlowSelectComponent_Conditional_91_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ show_fav: $event }));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "h2", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275repeaterCreate(7, DeskFlowSelectComponent_Conditional_91_For_8_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.options()?.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(8, _c13));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.FAVOURITES_ONLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "BOOKINGS.FACILITIES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.features());
  }
}
var DeskFlowSelectComponent = class _DeskFlowSelectComponent extends AsyncHandler {
  constructor() {
    super();
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._spaces = inject(SpacesService);
    this._injector = inject(Injector);
    this.use_24hr = settingSignal("use_24_hour_time", false);
    this.use_region = settingSignal("use_region", false);
    this.available_days = settingSignal("desks.available_period", 90);
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration_step = computed(
      () => settingSignal("desks.duration_step")() || settingSignal("bookings.duration_step", 15)(),
      ...ngDevMode ? [{ debugName: "duration_step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = computed(
      () => settingSignal("desks.min_duration")() || settingSignal("bookings.min_duration", 30)(),
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => settingSignal("desks.max_duration")() || settingSignal("bookings.max_duration", 8 * 60)(),
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_duration_options = computed(
      () => settingSignal("desks.custom_duration_options")() || settingSignal("bookings.custom_duration_options", [])(),
      ...ngDevMode ? [{ debugName: "custom_duration_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.feature_display = settingSignal("desks.feature_decriptions", {});
    this.hide_features = settingSignal("desks.hide_features", []);
    this.form = this._booking_form.form;
    this.model = this._booking_form.model;
    this.selected = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.promote_selected = signal(
      false,
      ...ngDevMode ? [{ debugName: "promote_selected" }] : (
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
    this.filters_open = signal(
      false,
      ...ngDevMode ? [{ debugName: "filters_open" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_value = this._booking_form.model;
    this.has_item = computed(
      () => !!this.form_value()?.resources && this.form_value()?.resources.length > 0,
      ...ngDevMode ? [{ debugName: "has_item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._booking_form.options;
    this.options_value = this._booking_form.options;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.region = this._org.active_region;
    this.regions = this._org.region_list;
    this.setBuilding = (bld) => this._org.building = bld;
    this.setRegion = (region) => this._org.region = region;
    this.setOptions = (o) => this._booking_form.setOptions(o);
    this.loading = this._booking_form.loading;
    this.active = signal(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._manual_selection = false;
    this.bookable_resources = this._booking_form.resources;
    this.levels = computed(
      () => {
        const region = this._org.active_region();
        const bld = this._org.active_building();
        const resources = this._booking_form.resources();
        const level_list = this.use_region() ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
        const level_ids = new Set(resources.filter((resource) => resource.bookable !== false).map((resource) => resource.zone?.id).filter((_) => _));
        const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id));
        return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this._booking_form.resources().map((_) => _.features)).filter((_) => _.trim())),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const selected_ids = (this.form_value()?.resources || []).map(({ id }) => id);
      this.selected.set(selected_ids);
      this.promote_selected.set(!!selected_ids.length && !this._manual_selection);
      this._manual_selection = false;
    });
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") ? this._org.building.timezone : "";
  }
  get time_format() {
    return this.use_24hr() ? "HH:mm" : "h:mm a";
  }
  ngOnInit() {
    let previous_building_id = this._org.active_building()?.id;
    this.subscription("clear_selected_desk_on_building_change", this._effect(() => {
      const bld = this._org.active_building();
      const selected_resources = this.field("resources") || [];
      const selected_for_building = !!selected_resources.length && selected_resources.every((resource) => resource.zone?.parent_id === bld?.id);
      if (previous_building_id && bld?.id && previous_building_id !== bld.id && !selected_for_building) {
        this.clearSelectedDesk();
      }
      previous_building_id = bld?.id;
    }));
    const resources = this.field("resources") || [];
    const selected_ids = resources.map(({ id }) => id);
    if (this.field("id") && !resources.length) {
      const asset_id = this.field("asset_id");
      if (asset_id) {
        selected_ids.push(asset_id);
        this.subscription("load_existing_resource", this._effect(() => {
          const available = this._booking_form.available_resources();
          if (!available.length)
            return;
          const matching_resource = available.find((r) => r.id === asset_id);
          if (matching_resource && !this.field("resources")?.length) {
            this.model.update((m) => __spreadProps(__spreadValues({}, m), {
              resources: [matching_resource],
              asset_id: matching_resource.id
            }));
            this.selected.set([matching_resource.id]);
          }
        }));
      }
    }
    this.selected.set(selected_ids);
  }
  /** Create an effect and return a teardown compatible with subscription() */
  _effect(fn) {
    const ref = effect(fn, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "ref" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
    return { unsubscribe: () => ref.destroy() };
  }
  field(name) {
    return this.model()?.[name];
  }
  clearSelectedDesk() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { resources: [], asset_id: "" }));
    this.selected.set([]);
  }
  async toggleFeature(feat, state) {
    const { features } = this.options_value();
    const new_list = (features || []).filter((_) => feat !== _);
    if (state)
      new_list.push(feat);
    this._booking_form.setOptions({ features: new_list });
  }
  removeFeature(feat) {
    const { features } = this.options_value();
    const new_list = (features || []).filter((_) => feat !== _);
    this._booking_form.setOptions({ features: new_list });
  }
  removeAllFeatures() {
    this._booking_form.setOptions({ features: [] });
  }
  setMapView() {
    this.view.set("map");
    const level_list = this.use_region() ? this._org.levelsForRegion(this._org.region) : this._org.levelsForBuilding(this._org.building);
    const level_ids = new Set(this.bookable_resources().filter((resource) => resource.bookable !== false).map((resource) => resource.zone?.id).filter((_) => _));
    const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking") && level_ids.has(lvl.id)).sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    if (!viewable_levels.length)
      return;
    const current_zones = this.options_value()?.zones || [];
    const active_level = viewable_levels.find((lvl) => current_zones.includes(lvl.id)) || viewable_levels[0];
    this.setOptions({ zones: [active_level.id], zone_id: active_level.id });
  }
  toggleDesk(space) {
    const resources = this.field("resources") || [];
    this._manual_selection = true;
    if (this._settings.get("app.desks.allow_multiple")) {
      const new_resources = resources.find(({ id }) => id === space.id) ? resources.filter(({ id }) => id !== space.id) : [...resources, space];
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: new_resources,
        asset_id: new_resources[0]?.id || ""
      }));
      this.selected.set(new_resources.map(({ id }) => id));
    } else {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: [space],
        asset_id: space.id
      }));
      this.selected.set([space.id]);
      this.filters_open.set(false);
    }
  }
  static {
    this.\u0275fac = function DeskFlowSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskFlowSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowSelectComponent, selectors: [["desk-flow-select"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 92, vars: 82, consts: [[1, "bg-base-100", "relative", "w-full"], [1, "gradient", "border-base-content", "relative", "flex", "h-14", "items-center", "justify-between", "space-x-2", "border-l-8", "px-4", "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "sm:hidden", 3, "click"], [1, "fixed", "inset-0", "z-[60]", "bg-black/50", "sm:hidden"], [1, "relative", "flex", "w-full", "overflow-hidden", "p-2", "sm:space-x-2"], [1, "hidden", "sm:sticky", "sm:top-0", "sm:block", "sm:w-[20rem]", "sm:max-w-[20rem]"], [1, "flex", "w-full", "items-center", "justify-between", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["cdkScrollable", "", 1, "flex", "flex-col", "overflow-y-auto", "px-4", "pb-4"], ["for", "location"], ["appearance", "outline", 1, "w-full"], ["for", "date"], [3, "formField", "to"], [1, "mb-2", 3, "formField"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [1, "mb-2", "flex", "space-x-2"], ["filters", "", 1, "border-base-300", "bg-base-100", "flex", "flex-1", "flex-wrap", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-[2rem]"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", ""], [1, "space-y-2"], ["btn", "", "matRipple", "", 1, "w-full", "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "border-base-300", "bg-base-200", "relative", "flex", "flex-col", "overflow-hidden", "rounded-lg", "border", "p-2"], [3, "selected_items"], [3, "selected_items", "promote_selected"], [1, "filters-panel-mobile", "border-base-300", "bg-base-100", "fixed", "right-0", "bottom-0", "left-0", "z-[70]", "w-full", "border-t", "shadow-lg", "transition-transform", "duration-300", "sm:hidden"], [1, "border-base-300", "flex", "w-full", "items-center", "justify-between", "border-b", "p-2"], ["icon", "", "matRipple", "", 3, "click"], ["cdkScrollable", "", 1, "flex", "max-h-[60vh]", "flex-col", "overflow-y-auto", "p-4"], [1, "fixed", "inset-0", "z-[60]", "bg-black/50", "sm:hidden", 3, "click"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location-multi", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [1, "flex", "space-x-2"], [1, "flex-1", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], [1, "w-1/3", "flex-1", 3, "formField", "time", "max", "min", "custom_options", "step", "use_24hr", "timezone"], [1, "mb-4", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "text-lg", "font-medium"], [1, "mb-4", "flex", "flex-col", "space-y-2"], [1, "w-full", 3, "label", "ngModel", "ngModelOptions"], [1, "w-full", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-[2rem]", 3, "click"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "remove-space-filter", 1, "-mr-4", 3, "click"], [3, "item_selected", "selected_items"], [3, "item_selected", "selected_items", "promote_selected"], ["name", "location-multi-mobile", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"], [1, "w-1/3", "flex-1", 3, "formField", "time", "min", "max", "step", "custom_options", "use_24hr", "timezone"]], template: function DeskFlowSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "icon");
        \u0275\u0275text(4, "desk");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function DeskFlowSelectComponent_Template_button_click_8_listener() {
          return ctx.filters_open.set(!ctx.filters_open());
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(11, DeskFlowSelectComponent_Conditional_11_Template, 1, 0, "div", 4);
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "div", 7)(15, "h3", 8);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 10);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, DeskFlowSelectComponent_Conditional_22_Template, 5, 6, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(23, DeskFlowSelectComponent_Conditional_23_Template, 4, 4, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(24, DeskFlowSelectComponent_Conditional_24_Template, 5, 7, "mat-form-field", 11);
        \u0275\u0275elementStart(25, "label", 12);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "date-field", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(29, "settings-toggle", 14);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(32, DeskFlowSelectComponent_Conditional_32_Template, 6, 16);
        \u0275\u0275conditionalCreate(33, DeskFlowSelectComponent_Conditional_33_Template, 9, 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 15)(35, "div", 16)(36, "div", 17);
        \u0275\u0275declareLet(37)(38);
        \u0275\u0275pipe(39, "level");
        \u0275\u0275pipe(40, "building");
        \u0275\u0275declareLet(41);
        \u0275\u0275conditionalCreate(42, DeskFlowSelectComponent_Conditional_42_Template, 3, 3, "button", 18);
        \u0275\u0275conditionalCreate(43, DeskFlowSelectComponent_Conditional_43_Template, 2, 1, "div", 19);
        \u0275\u0275elementStart(44, "div", 20);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 21);
        \u0275\u0275conditionalCreate(48, DeskFlowSelectComponent_Conditional_48_Template, 3, 8);
        \u0275\u0275conditionalCreate(49, DeskFlowSelectComponent_Conditional_49_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(50, DeskFlowSelectComponent_For_51_Template, 6, 1, "div", 22, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 23)(53, "button", 24);
        \u0275\u0275listener("click", function DeskFlowSelectComponent_Template_button_click_53_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275elementStart(54, "icon", 25);
        \u0275\u0275text(55, "list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 26);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "button", 24);
        \u0275\u0275listener("click", function DeskFlowSelectComponent_Template_button_click_59_listener() {
          return ctx.setMapView();
        });
        \u0275\u0275elementStart(60, "icon", 25);
        \u0275\u0275text(61, "Map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 26);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(65, "div", 27);
        \u0275\u0275conditionalCreate(66, DeskFlowSelectComponent_Conditional_66_Template, 1, 1, "desk-flow-select-map", 28)(67, DeskFlowSelectComponent_Conditional_67_Template, 1, 2, "desk-flow-select-list", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 30)(69, "div", 31)(70, "h3", 8);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "button", 32);
        \u0275\u0275listener("click", function DeskFlowSelectComponent_Template_button_click_73_listener() {
          return ctx.filters_open.set(false);
        });
        \u0275\u0275elementStart(74, "icon");
        \u0275\u0275text(75, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 33)(77, "label", 10);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(80, DeskFlowSelectComponent_Conditional_80_Template, 5, 6, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(81, DeskFlowSelectComponent_Conditional_81_Template, 4, 4, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(82, DeskFlowSelectComponent_Conditional_82_Template, 5, 7, "mat-form-field", 11);
        \u0275\u0275elementStart(83, "label", 12);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(86, "date-field", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(87, "settings-toggle", 14);
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(90, DeskFlowSelectComponent_Conditional_90_Template, 6, 16);
        \u0275\u0275conditionalCreate(91, DeskFlowSelectComponent_Conditional_91_Template, 9, 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 49, "BOOKINGS.DESK_SELECT_HEADER"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.filters_open() ? "close" : "filter_list");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters_open() ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 51, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 53, "COMMON.LOCATION"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.use_region() && ctx.regions()?.length ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_region() && ctx.buildings()?.length > 1 ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 24 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 55, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.all_day);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 57, "COMMON.ALL_DAY"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.field("all_day") ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 33 : -1);
        const feature_list_r30 = ctx.options()?.features || \u0275\u0275pureFunction0(80, _c04);
        const zones_r31 = ctx.options()?.zones || \u0275\u0275pureFunction0(81, _c04);
        \u0275\u0275advance(4);
        const event_r32 = \u0275\u0275storeLet(ctx.model());
        const zone_r33 = \u0275\u0275pipeBind1(39, 60, zones_r31) || \u0275\u0275pipeBind1(40, 62, zones_r31);
        \u0275\u0275advance(4);
        const location_r34 = \u0275\u0275storeLet(zone_r33?.display_name || zone_r33?.name || "");
        \u0275\u0275advance();
        \u0275\u0275conditional(feature_list_r30.length > 1 ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(location_r34 ? 43 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 65, event_r32.date, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!event_r32.all_day ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(event_r32.all_day ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(feature_list_r30);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("inverse", ctx.view() !== "list");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 68, "COMMON.LIST"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.view() !== "map");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 70, "COMMON.MAP"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("flex-1", ctx.view() !== "map")("h-[600px]", ctx.view() === "map")("min-h-[600px]", ctx.view() === "map");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "map" ? 66 : 67);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("translate-y-full", !ctx.filters_open())("translate-y-0", ctx.filters_open());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 72, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 74, "COMMON.LOCATION"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.use_region() && ctx.regions()?.length ? 80 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_region() && ctx.buildings()?.length > 1 ? 81 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 82 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 76, "FORM.DATE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.date)("to", ctx.end_date());
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.all_day);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 78, "COMMON.ALL_DAY"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.field("all_day") ? 90 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 91 : -1);
      }
    }, dependencies: [
      CdkScrollable,
      CommonModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      FormField,
      FormsModule,
      NgControlStatus,
      NgModel,
      SettingsToggleComponent,
      DeskFlowSelectListComponent,
      DeskFlowSelectMapComponent,
      DatePipe,
      TranslatePipe,
      BuildingPipe,
      LevelPipe
    ], styles: ["\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n.filters-panel-mobile[_ngcontent-%COMP%] {\n  border-radius: 1rem 1rem 0 0;\n  max-height: 70vh;\n}\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid var(--base-300);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-flow-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFlowSelectComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-select", template: `
        <div class="bg-base-100 relative w-full">
            <div
                class="gradient border-base-content relative flex h-14 items-center justify-between space-x-2 border-l-8 px-4 text-xl font-medium"
            >
                <div class="flex items-center space-x-2">
                    <icon>desk</icon>
                    <div>
                        {{ 'BOOKINGS.DESK_SELECT_HEADER' | translate }}
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="sm:hidden"
                    (click)="filters_open.set(!filters_open())"
                >
                    <icon>{{ filters_open() ? 'close' : 'filter_list' }}</icon>
                </button>
            </div>
            <!-- Mobile backdrop -->
            @if (filters_open()) {
                <div
                    class="fixed inset-0 z-[60] bg-black/50 sm:hidden"
                    (click)="filters_open.set(false)"
                ></div>
            }
            <div class="relative flex w-full overflow-hidden p-2 sm:space-x-2">
                <!-- Filters Sidebar - Desktop -->
                <div
                    class="hidden sm:sticky sm:top-0 sm:block sm:w-[20rem] sm:max-w-[20rem]"
                >
                    <div class="flex w-full items-center justify-between p-2">
                        <h3 class="px-2 text-xl font-medium">
                            {{ 'COMMON.FILTERS' | translate }}
                        </h3>
                    </div>
                    <div
                        cdkScrollable
                        class="flex flex-col overflow-y-auto px-4 pb-4"
                    >
                        <label for="location">{{
                            'COMMON.LOCATION' | translate
                        }}</label>
                        @if (use_region() && regions()?.length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="region"
                                    [ngModel]="region()"
                                    (ngModelChange)="setRegion($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'CALENDAR_EVENT.SPACE_REGION_ANY'
                                            | translate
                                    "
                                >
                                    @for (reg of regions(); track reg) {
                                        <mat-option [value]="reg">
                                            {{ reg.display_name || reg.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (!use_region() && buildings()?.length > 1) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="building"
                                    [ngModel]="building()"
                                    (ngModelChange)="setBuilding($event)"
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        building()?.display_name ||
                                        building()?.name
                                    "
                                >
                                    @for (bld of buildings(); track bld) {
                                        <mat-option [value]="bld">
                                            {{ bld.display_name || bld.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        @if (view() === 'list') {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="location-multi"
                                    [ngModel]="options()?.zones"
                                    (ngModelChange)="
                                        setOptions({ zones: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [placeholder]="
                                        'COMMON.LEVEL_ANY' | translate
                                    "
                                    [multiple]="true"
                                >
                                    @for (lvl of levels(); track lvl) {
                                        <mat-option [value]="lvl.id">
                                            <div class="flex flex-col-reverse">
                                                @if (use_region()) {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        {{
                                                            (
                                                                lvl?.parent_id
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
                                                        lvl.display_name ||
                                                            lvl.name
                                                    }}
                                                </div>
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        }
                        <label for="date">{{ 'FORM.DATE' | translate }}</label>
                        <date-field [formField]="form.date" [to]="end_date()" />
                        <settings-toggle
                            class="mb-2"
                            [formField]="form.all_day"
                            >{{ 'COMMON.ALL_DAY' | translate }}</settings-toggle
                        >
                        @if (!field('all_day')) {
                            <label for="date">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <div class="flex space-x-2">
                                <time-field
                                    class="flex-1"
                                    [ngModel]="field('date')"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                                <duration-field
                                    class="w-1/3 flex-1"
                                    [formField]="form.duration"
                                    [time]="field('date')"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [custom_options]="custom_duration_options()"
                                    [step]="duration_step()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                />
                            </div>
                        }
                        @if (view() === 'list') {
                            <settings-toggle
                                class="mb-4"
                                [ngModel]="options()?.show_fav"
                                (ngModelChange)="
                                    setOptions({ show_fav: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                >{{
                                    'COMMON.FAVOURITES_ONLY' | translate
                                }}</settings-toggle
                            >
                            <h2 class="text-lg font-medium">
                                {{ 'BOOKINGS.FACILITIES' | translate }}
                            </h2>
                            <div class="mb-4 flex flex-col space-y-2">
                                @for (feat of features(); track feat) {
                                    @if (!hide_features().includes(feat)) {
                                        <settings-toggle
                                            class="w-full"
                                            [label]="
                                                feature_display()[feat] || feat
                                            "
                                            [ngModel]="
                                                options()?.features?.includes(
                                                    feat
                                                )
                                            "
                                            (ngModelChange)="
                                                toggleFeature(feat, $event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></settings-toggle>
                                    }
                                }
                            </div>
                        }
                    </div>
                </div>
                <!-- Main content area -->
                <div class="flex min-w-0 flex-1 flex-col">
                    <div class="mb-2 flex space-x-2">
                        <div
                            filters
                            class="border-base-300 bg-base-100 flex flex-1 flex-wrap rounded-lg border p-2"
                        >
                            @let feature_list = options()?.features || [];
                            @let zones = options()?.zones || [];
                            @let event = model();
                            @let zone = (zones | level) || (zones | building);
                            @let location =
                                zone?.display_name || zone?.name || '';
                            @if (feature_list.length > 1) {
                                <button
                                    btn
                                    matRipple
                                    name="clear-space-filters"
                                    class="mr-2 mb-2 min-h-[2rem]"
                                    (click)="removeAllFeatures()"
                                >
                                    {{ 'COMMON.FILTERS_CLEAR' | translate }}
                                </button>
                            }
                            @if (location) {
                                <div filter-item zone>
                                    {{ location }}
                                </div>
                            }
                            <div filter-item date>
                                {{ event.date | date: 'mediumDate' }}
                            </div>
                            <div filter-item time>
                                @if (!event.all_day) {
                                    {{ event.date | date: time_format }} &mdash;
                                    {{ event.date_end | date: time_format }}
                                }
                                @if (event.all_day) {
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                }
                            </div>
                            @for (feat of feature_list; track feat) {
                                <div filter-item>
                                    <p class="truncate">{{ feat }}</p>
                                    <button
                                        icon
                                        matRipple
                                        name="remove-space-filter"
                                        class="-mr-4"
                                        (click)="removeFeature(feat)"
                                    >
                                        <icon>close</icon>
                                    </button>
                                </div>
                            }
                        </div>
                        <div class="space-y-2">
                            <button
                                btn
                                matRipple
                                class="w-full space-x-2"
                                [class.inverse]="view() !== 'list'"
                                (click)="view.set('list')"
                            >
                                <icon class="text-2xl">list</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.LIST' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full space-x-2"
                                [class.inverse]="view() !== 'map'"
                                (click)="setMapView()"
                            >
                                <icon class="text-2xl">Map</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.MAP' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div
                        class="border-base-300 bg-base-200 relative flex flex-col overflow-hidden rounded-lg border p-2"
                        [class.flex-1]="view() !== 'map'"
                        [class.h-[600px]]="view() === 'map'"
                        [class.min-h-[600px]]="view() === 'map'"
                    >
                        @if (view() === 'map') {
                            <desk-flow-select-map
                                [selected_items]="selected()"
                                (item_selected)="toggleDesk($event)"
                            />
                        } @else {
                            <desk-flow-select-list
                                [selected_items]="selected()"
                                [promote_selected]="promote_selected()"
                                (item_selected)="toggleDesk($event)"
                            />
                        }
                    </div>
                </div>
            </div>
            <!-- Mobile Filters Panel - Bottom Sheet -->
            <div
                class="filters-panel-mobile border-base-300 bg-base-100 fixed right-0 bottom-0 left-0 z-[70] w-full border-t shadow-lg transition-transform duration-300 sm:hidden"
                [class.translate-y-full]="!filters_open()"
                [class.translate-y-0]="filters_open()"
            >
                <div
                    class="border-base-300 flex w-full items-center justify-between border-b p-2"
                >
                    <h3 class="px-2 text-xl font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h3>
                    <button icon matRipple (click)="filters_open.set(false)">
                        <icon>close</icon>
                    </button>
                </div>
                <div
                    cdkScrollable
                    class="flex max-h-[60vh] flex-col overflow-y-auto p-4"
                >
                    <label for="location">{{
                        'COMMON.LOCATION' | translate
                    }}</label>
                    @if (use_region() && regions()?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region()"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_REGION_ANY'
                                        | translate
                                "
                            >
                                @for (reg of regions(); track reg) {
                                    <mat-option [value]="reg">
                                        {{ reg.display_name || reg.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!use_region() && buildings()?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="building"
                                [ngModel]="building()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building()?.display_name || building()?.name
                                "
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (view() === 'list') {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location-multi-mobile"
                                [ngModel]="options()?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'COMMON.LEVEL_ANY' | translate"
                                [multiple]="true"
                            >
                                @for (lvl of levels(); track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region()) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl?.parent_id
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
                                                    lvl.display_name || lvl.name
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    <label for="date">{{ 'FORM.DATE' | translate }}</label>
                    <date-field [formField]="form.date" [to]="end_date()" />
                    <settings-toggle class="mb-2" [formField]="form.all_day">{{
                        'COMMON.ALL_DAY' | translate
                    }}</settings-toggle>
                    @if (!field('all_day')) {
                        <label for="date">{{ 'FORM.TIME' | translate }}</label>
                        <div class="flex space-x-2">
                            <time-field
                                class="flex-1"
                                [ngModel]="field('date')"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                            <duration-field
                                class="w-1/3 flex-1"
                                [formField]="form.duration"
                                [time]="field('date')"
                                [min]="min_duration()"
                                [max]="max_duration()"
                                [step]="duration_step()"
                                [custom_options]="custom_duration_options()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                    }
                    @if (view() === 'list') {
                        <settings-toggle
                            class="mb-4"
                            [ngModel]="options()?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            >{{
                                'COMMON.FAVOURITES_ONLY' | translate
                            }}</settings-toggle
                        >
                        <h2 class="text-lg font-medium">
                            {{ 'BOOKINGS.FACILITIES' | translate }}
                        </h2>
                        <div class="mb-4 flex flex-col space-y-2">
                            @for (feat of features(); track feat) {
                                @if (!hide_features().includes(feat)) {
                                    <settings-toggle
                                        class="w-full"
                                        [label]="
                                            feature_display()[feat] || feat
                                        "
                                        [ngModel]="
                                            options()?.features?.includes(feat)
                                        "
                                        (ngModelChange)="
                                            toggleFeature(feat, $event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></settings-toggle>
                                }
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `, imports: [
      CdkScrollable,
      CommonModule,
      MatRippleModule,
      IconComponent,
      MatFormFieldModule,
      MatSelectModule,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      FormField,
      FormsModule,
      SettingsToggleComponent,
      TranslatePipe,
      BuildingPipe,
      LevelPipe,
      DeskFlowSelectListComponent,
      DeskFlowSelectMapComponent
    ], styles: ["/* angular:styles/component:css;c6c878bc4c9ecad0f8214184097818cc75e37e26d1c15d9fc906b1a156948497;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/desk-flow-new/desk-flow-select.component.ts */\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n.filters-panel-mobile {\n  border-radius: 1rem 1rem 0 0;\n  max-height: 70vh;\n}\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid var(--base-300);\n  border-radius: 1.25rem;\n  margin: 0.25rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=desk-flow-select.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowSelectComponent, { className: "DeskFlowSelectComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-select.component.ts", lineNumber: 585 });
})();

// apps/workplace/src/app/book/desk-flow-new/desk-flow-success.component.ts
var _c05 = () => ["/"];
var _c14 = (a0) => ({ name: a0 });
var _c2 = (a0, a1, a2, a3) => ({ date: a0, time: a1, size: a2, location: a3 });
var _c3 = (a0, a1) => ({ name: a0, email: a1 });
var _c4 = (a0) => ({ count: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function NewDeskFlowSuccessComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(4, _c14, ctx_r0.last_event()?.asset_name || ctx_r0.last_event()?.asset_id)), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.last_event()?.all_day ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE_ALLDAY", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.last_event()?.all_day ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275conditionalCreate(5, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Template, 2, 1)(6, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275storeLet(\u0275\u0275pureFunction4(11, _c2, \u0275\u0275pipeBind2(2, 1, ctx_r0.last_event()?.date || 0, "mediumDate"), \u0275\u0275pipeBind2(3, 4, ctx_r0.last_event()?.date || 0, ctx_r0.time_format) + " - " + \u0275\u0275pipeBind2(4, 7, ctx_r0.last_event().date + ctx_r0.last_event().duration * 60 * 1e3, ctx_r0.time_format), ctx_r0.group_size(), ctx_r0.location()));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.is_group() ? 5 : 6);
  }
}
function NewDeskFlowSuccessComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 12);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatted_recurrence());
  }
}
function NewDeskFlowSuccessComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Booked for ", ctx_r0.booked_for_name());
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.error, " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, " error ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, " check_circle ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "a-user-avatar", 17);
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_7_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_8_Template, 2, 0, "icon", 22)(9, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_9_Template, 2, 0, "icon", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("border-error", item_r3.failed);
    \u0275\u0275advance();
    \u0275\u0275property("user", \u0275\u0275pureFunction2(7, _c3, item_r3.name, item_r3.email));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name || item_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.failed ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.failed ? 8 : 9);
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 13)(2, "icon", 12);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275repeaterCreate(8, NewDeskFlowSuccessComponent_Conditional_7_For_9_Template, 10, 10, "div", 15, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_GROUP_BOOKINGS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.group_booking_items());
  }
}
function NewDeskFlowSuccessComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ASSETS_BOOKED", \u0275\u0275pureFunction1(4, _c4, ctx_r0.last_event()?.extension_data?.assets?.length)), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.SUCCESS_WAIT_APPROVED"), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 24);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 25);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 26);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 27);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 28);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "icon", 12);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r0.outlook_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r0.google_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r0.ical_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var NewDeskFlowSuccessComponent = class _NewDeskFlowSuccessComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._level_pipe = inject(LevelPipe);
    this._building_pipe = inject(BuildingPipe);
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
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
    this.outlook_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "outlook_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.google_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "google_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ical_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "ical_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "group_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_failures = signal(
      [],
      ...ngDevMode ? [{ debugName: "group_failures" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desk_names = signal(
      /* @__PURE__ */ new Map(),
      ...ngDevMode ? [{ debugName: "_desk_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => {
        return `${this.building()?.display_name || this.level()?.name}, ${this.level()?.display_name || this.level()?.name}`;
      },
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_event = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_members = computed(
      () => {
        return unique(this.last_event()?.extension_data?.group_members || [], "email");
      },
      ...ngDevMode ? [{ debugName: "group_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_group = computed(
      () => this.group_members().length > 1,
      ...ngDevMode ? [{ debugName: "is_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_size = computed(
      () => {
        const members = this.group_members();
        return members?.length || this.group_bookings().length || 1;
      },
      ...ngDevMode ? [{ debugName: "group_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_booking_items = computed(
      () => {
        const desk_names = this._desk_names();
        const items = this.group_bookings().map((booking) => ({
          id: booking.id,
          name: booking.user_name || booking.user_email,
          email: booking.user_email,
          asset_name: desk_names.get(booking.asset_id) || booking.asset_id,
          failed: false
        }));
        const booked_emails = new Set(items.map((_) => _.email));
        const failed = this.group_failures().filter((_) => !booked_emails.has(_.email)).map((failure) => ({
          id: `failed-${failure.email}`,
          name: failure.name || failure.email,
          email: failure.email,
          asset_name: failure.asset_id ? desk_names.get(failure.asset_id) || failure.asset_id : "No desk assigned",
          failed: true,
          error: failure.error
        }));
        return [...items, ...failed];
      },
      ...ngDevMode ? [{ debugName: "group_booking_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_for_name = computed(
      () => {
        return this.last_event()?.user_name || this.last_event()?.user_email || "";
      },
      ...ngDevMode ? [{ debugName: "booked_for_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_booked_for = computed(
      () => {
        if (!this.booked_for_name())
          return false;
        const current_email = currentUser()?.email?.toLowerCase() || "";
        const booked_for_email = this.last_event()?.user_email?.toLowerCase() || "";
        if (!booked_for_email || !current_email)
          return false;
        return booked_for_email !== current_email;
      },
      ...ngDevMode ? [{ debugName: "show_booked_for" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_recurrence = computed(
      () => {
        const event = this.last_event();
        const recurrence = fromBookingRecurrence(event);
        if (!recurrence.type || recurrence.type == "none")
          return "";
        return formatRecurrence(recurrence);
      },
      ...ngDevMode ? [{ debugName: "formatted_recurrence" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewCalendarLinks = () => this._state.openBookingLinkModal();
  }
  get show_links() {
    return this._settings.get("app.desks.show_calendar_links");
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.last_event.set(this._state.last_success);
    const event = __spreadProps(__spreadValues({}, this.last_event()), {
      location: `${this.location()}, ${this.last_event()?.asset_name || ""}`
    });
    this.outlook_link.set(generateMicrosoftCalendarLink(event));
    this.google_link.set(generateGoogleCalendarLink(event));
    this.ical_link.set(generateCalendarFileLink(event));
    this.level.set(this._level_pipe.transform(event.zones));
    this.building.set(this._building_pipe.transform(event.zones));
    this._group_bookings_timer = setTimeout(async () => {
      if (this.is_group())
        await this._loadGroupBookings();
    }, 100);
  }
  ngOnDestroy() {
    clearTimeout(this._group_bookings_timer);
  }
  async _loadGroupBookings() {
    const stored_ids = localStorage.getItem("PLACEOS.last_group_booking_ids");
    const booking_ids = stored_ids ? JSON.parse(stored_ids) : [];
    const stored_errors = localStorage.getItem("PLACEOS.last_group_booking_errors");
    this.group_failures.set(stored_errors ? JSON.parse(stored_errors) : []);
    if (booking_ids.length <= 1)
      return;
    try {
      const [bookings, desks] = await Promise.all([
        Promise.all(booking_ids.map((id) => showBooking(id))),
        this._state.listResources()
      ]);
      this._desk_names.set(new Map(desks.map((desk) => [desk.id, desk.name || desk.id])));
      this.group_bookings.set(bookings.filter((_) => _.booking_type !== "group"));
    } catch (e) {
      console.error("Failed to load group bookings", e);
    }
  }
  static {
    this.\u0275fac = function NewDeskFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowSuccessComponent, selectors: [["desk-flow-success"]], features: [\u0275\u0275ProvidersFeature([LevelPipe, BuildingPipe])], decls: 15, vars: 13, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-center", "text-2xl", "font-medium"], ["src", "assets/icons/success.svg"], [1, "max-w-160", "text-center"], [1, "bg-base-200", "flex", "items-center", "space-x-2", "rounded-lg", "px-4", "py-2"], [1, "text-sm"], [1, "border-base-300", "bg-base-100", "mt-4", "w-full", "max-w-lg", "rounded-lg", "border", "p-4"], ["assets", ""], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "name", "desk-confirm-continue", "matRipple", "", 1, "mx-auto", "w-full", "max-w-lg", 3, "routerLink"], [1, "text-xl"], [1, "mb-3", "flex", "items-center", "space-x-2", "font-medium"], [1, "flex", "flex-col", "space-y-2"], [1, "bg-base-200/50", "border-base-200", "flex", "items-center", "space-x-3", "rounded", "border", "p-2", 3, "border-error"], [1, "bg-base-200/50", "border-base-200", "flex", "items-center", "space-x-3", "rounded", "border", "p-2"], [3, "user"], [1, "flex", "flex-1", "flex-col"], [1, "font-medium"], [1, "text-sm", "opacity-60"], [1, "text-error", "text-xs"], [1, "text-error", "text-2xl"], [1, "text-success", "text-2xl"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"]], template: function NewDeskFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
        \u0275\u0275conditionalCreate(2, NewDeskFlowSuccessComponent_Conditional_2_Template, 3, 6, "h2", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275conditionalCreate(4, NewDeskFlowSuccessComponent_Conditional_4_Template, 7, 16, "p", 4);
        \u0275\u0275conditionalCreate(5, NewDeskFlowSuccessComponent_Conditional_5_Template, 5, 1, "div", 5);
        \u0275\u0275conditionalCreate(6, NewDeskFlowSuccessComponent_Conditional_6_Template, 2, 1, "p", 6);
        \u0275\u0275conditionalCreate(7, NewDeskFlowSuccessComponent_Conditional_7_Template, 10, 3, "div", 7);
        \u0275\u0275conditionalCreate(8, NewDeskFlowSuccessComponent_Conditional_8_Template, 3, 6, "p", 8);
        \u0275\u0275conditionalCreate(9, NewDeskFlowSuccessComponent_Conditional_9_Template, 3, 3, "p");
        \u0275\u0275conditionalCreate(10, NewDeskFlowSuccessComponent_Conditional_10_Template, 20, 21, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "footer", 10)(12, "a", 11);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.is_group() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.last_event() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.recurrence_type && ctx.last_event()?.recurrence_type !== "none" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_booked_for() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_group() && ctx.group_booking_items().length > 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.extension_data?.assets?.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(true ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_links ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c05));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      UserAvatarComponent,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-success", template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                @if (!is_group()) {
                    <h2 class="text-center text-2xl font-medium">
                        {{
                            'BOOKINGS.ITEM_BOOKED'
                                | translate
                                    : {
                                          name:
                                              last_event()?.asset_name ||
                                              last_event()?.asset_id,
                                      }
                        }}
                    </h2>
                }
                <img src="assets/icons/success.svg" />
                @if (last_event()) {
                    <p class="max-w-160 text-center">
                        @let details =
                            {
                                date:
                                    last_event()?.date || 0
                                    | date: 'mediumDate',
                                time:
                                    (last_event()?.date || 0
                                        | date: time_format) +
                                    ' - ' +
                                    (last_event().date +
                                        last_event().duration * 60 * 1000
                                        | date: time_format),
                                size: group_size(),
                                location: location(),
                            };
                        @if (is_group()) {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP'
                                        | translate: details
                                }}
                            }
                        } @else {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE'
                                        | translate: details
                                }}
                            }
                        }
                    </p>
                }
                @if (
                    last_event()?.recurrence_type &&
                    last_event()?.recurrence_type !== 'none'
                ) {
                    <div
                        class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                    >
                        <icon class="text-xl">update</icon>
                        <div class="text-sm">{{ formatted_recurrence() }}</div>
                    </div>
                }
                @if (show_booked_for()) {
                    <p class="text-sm">Booked for {{ booked_for_name() }}</p>
                }
                @if (is_group() && group_booking_items().length > 0) {
                    <div
                        class="border-base-300 bg-base-100 mt-4 w-full max-w-lg rounded-lg border p-4"
                    >
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon class="text-xl">group</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_BOOKINGS' | translate
                            }}</span>
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                item of group_booking_items();
                                track item.id
                            ) {
                                <div
                                    class="bg-base-200/50 border-base-200 flex items-center space-x-3 rounded border p-2"
                                    [class.border-error]="item.failed"
                                >
                                    <a-user-avatar
                                        [user]="
                                            $any({
                                                name: item.name,
                                                email: item.email,
                                            })
                                        "
                                    />
                                    <div class="flex flex-1 flex-col">
                                        <span class="font-medium">{{
                                            item.name || item.email
                                        }}</span>
                                        <span class="text-sm opacity-60">
                                            {{ item.asset_name }}
                                        </span>
                                        @if (item.failed) {
                                            <span class="text-error text-xs">
                                                {{ item.error }}
                                            </span>
                                        }
                                    </div>
                                    @if (item.failed) {
                                        <icon class="text-error text-2xl">
                                            error
                                        </icon>
                                    } @else {
                                        <icon class="text-success text-2xl">
                                            check_circle
                                        </icon>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (last_event()?.extension_data?.assets?.length) {
                    <p assets>
                        {{
                            'BOOKINGS.ASSETS_BOOKED'
                                | translate
                                    : {
                                          count: last_event()?.extension_data
                                              ?.assets?.length,
                                      }
                        }}
                    </p>
                }
                @if (true) {
                    <p>
                        {{ 'BOOKINGS.SUCCESS_WAIT_APPROVED' | translate }}
                    </p>
                }
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="outlook_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/outlook.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_OUTLOOK' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="google_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/gcal.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_GOOGLE' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | safe: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </main>
            <footer
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a
                    btn
                    name="desk-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `, providers: [LevelPipe, BuildingPipe], imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      RouterModule,
      SanitizePipe,
      SafePipe,
      UserAvatarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowSuccessComponent, { className: "NewDeskFlowSuccessComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-success.component.ts", lineNumber: 281 });
})();

// apps/workplace/src/app/book/desk-flow-new/desk-flow.component.ts
function DeskFlowNewComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-flow-auto-assign", 2);
  }
}
function DeskFlowNewComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 8);
    \u0275\u0275text(1, "progress_activity");
    \u0275\u0275elementEnd();
  }
}
function DeskFlowNewComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function DeskFlowNewComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 9);
    \u0275\u0275text(1, "keyboard_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function DeskFlowNewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, DeskFlowNewComponent_Conditional_0_Conditional_2_Template, 1, 0, "desk-flow-auto-assign", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "icon");
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "desk-flow-details")(11, "desk-flow-select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5);
    \u0275\u0275element(13, "div");
    \u0275\u0275elementStart(14, "button", 6);
    \u0275\u0275listener("click", function DeskFlowNewComponent_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmBooking());
    });
    \u0275\u0275elementStart(15, "div", 7);
    \u0275\u0275conditionalCreate(16, DeskFlowNewComponent_Conditional_0_Conditional_16_Template, 2, 0, "icon", 8)(17, DeskFlowNewComponent_Conditional_0_Conditional_17_Template, 2, 0, "icon", 9);
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, DeskFlowNewComponent_Conditional_0_Conditional_22_Template, 2, 0, "icon", 9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.is_edit_mode() ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "BOOKINGS.DESK_DETAILS_HEADER"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(20, 8, "COMMON.CONFIRMING") : \u0275\u0275pipeBind1(21, 10, "COMMON.CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.loading() ? 22 : -1);
  }
}
function DeskFlowNewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-flow-success");
  }
}
var DeskFlowNewComponent = class _DeskFlowNewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._space_pipe = new SpacePipe(this._org);
    this.view = this._booking_form.view;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._booking_form.options;
    this.form_value = this._booking_form.model;
    this.has_title = computed(
      () => !!this.form_value()?.title?.trim(),
      ...ngDevMode ? [{ debugName: "has_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_item = computed(
      () => !!this.form_value()?.resources && this.form_value()?.resources.length > 0,
      ...ngDevMode ? [{ debugName: "has_item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_edit_mode = computed(
      () => !!this.form_value()?.id,
      ...ngDevMode ? [{ debugName: "is_edit_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const { id, booking_type } = this._booking_form.model();
    if (!id || booking_type !== "desk")
      this._booking_form.newForm("desk");
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      booking_type: "desk"
    }));
    this._booking_form.setOptions({ type: "desk" });
    if (!this._booking_form.model().id)
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        title: "Booking"
      }));
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._booking_form.setView(param.get("step"));
    }));
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("nearby_space")) {
        await this._initNearbyDeskBooking(params.get("nearby_space"), parseInt(params.get("date"), 10) || Date.now());
        return;
      }
      if (!params.has("asset_id"))
        return;
      const asset_id = params.get("asset_id");
      const form = this._booking_form.model();
      if (asset_id === form.asset_id && (form.resources || []).some(({ id: id2 }) => id2 === asset_id)) {
        return;
      }
      await this._waitForLoaded();
      if (!asset_id)
        return;
      const resource = await this._findDeskResource(asset_id);
      if (!resource)
        return;
      const building = resource.zone?.parent_id ? this._org.find(resource.zone.parent_id) : null;
      if (building && building.id !== this._org.building?.id) {
        this._org.building = building;
      }
      this._booking_form.setOptions(__spreadValues({
        type: "desk"
      }, resource.zone?.id ? { zones: [resource.zone.id] } : {}));
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        booking_type: "desk",
        resources: [resource],
        asset_id: resource.id
      }));
    }));
  }
  /** Resolve once the booking form has finished its current load */
  async _waitForLoaded() {
    while (this._booking_form.loading()) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  async _findDeskResource(asset_id) {
    const resource = await this._findDeskResourceFromStream(asset_id, 50);
    if (resource)
      return resource;
    const building_resource = await this._findDeskResourceFromBuildings(asset_id);
    return building_resource || await this._findDeskResourceFromStream(asset_id, 5e3);
  }
  async _findDeskResourceFromStream(asset_id, wait_ms) {
    const deadline = Date.now() + wait_ms;
    do {
      const resources = await this._booking_form.listResources();
      const resource = resources.find((item) => item.id === asset_id);
      if (resource)
        return resource;
      if (Date.now() >= deadline)
        break;
      await new Promise((resolve) => setTimeout(resolve, 50));
    } while (Date.now() < deadline);
    return null;
  }
  async _findDeskResourceFromBuildings(asset_id) {
    for (const building of this._org.buildings || []) {
      const data = await Ju(building.id, {
        name: "desks"
      }).catch(() => []);
      const resources = flatten(data.map((metadata) => (metadata?.metadata?.desks?.details instanceof Array ? metadata.metadata.desks.details : []).map((desk) => __spreadProps(__spreadValues({}, desk), {
        id: desk.id || desk.map_id,
        zone: metadata.zone
      }))));
      const resource = resources.find((item) => item.id === asset_id);
      if (resource)
        return resource;
    }
    return null;
  }
  async _initNearbyDeskBooking(space_id, event_date) {
    const space = await this._space_pipe.transform(space_id);
    const level = this._org.levelWithID(space?.zones);
    this._booking_form.setOptions({ type: "desk", zone_id: level?.id });
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
      duration: 10 * 60,
      all_day: true,
      booking_type: "desk",
      user: currentUser()
    }));
    const resources = await this._booking_form.listAvailableResources();
    const bookable_desks = resources.map((_) => _.map_id || _.id).filter((i) => i);
    const nearby = await findNearbyFeature(level.map_id, space?.map_id, bookable_desks);
    if (!nearby)
      return notifyError(i18n("APP.WORKPLACE.MEETING_DESK_ERROR"));
    const resource = resources.find((_) => _.map_id === nearby || _.id === nearby);
    if (!resource)
      return notifyError(i18n("APP.WORKPLACE.MEETING_DESK_ERROR"));
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      date: set(event_date, { hours: 8, minutes: 0 }).valueOf(),
      duration: 10 * 60,
      all_day: true,
      booking_type: "desk",
      asset_id: resource.id,
      asset_name: resource.name,
      resources: [resource]
    }));
  }
  async confirmBooking() {
    const { asset_id, resources } = this._booking_form.model();
    if (resources?.length && asset_id !== resources[0].id) {
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        asset_id: resources[0].id
      }));
    }
    this._booking_form.form().markAsTouched();
    if (!this._booking_form.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this._booking_form.form, this._booking_form.model).join(", ").replace("asset_id", i18n("RESOURCE.DESK"))
      }));
    }
    this.loading.set(true);
    try {
      await (this.options()?.group ? this._booking_form.postFormForGroup() : this._booking_form.postForm());
      notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_SUCCESS"));
      this._router.navigate(["/book/desk/success"]);
    } catch (e) {
      notifyError(typeof e === "string" ? e : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`));
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DeskFlowNewComponent_BaseFactory;
      return function DeskFlowNewComponent_Factory(__ngFactoryType__) {
        return (\u0275DeskFlowNewComponent_BaseFactory || (\u0275DeskFlowNewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskFlowNewComponent)))(__ngFactoryType__ || _DeskFlowNewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskFlowNewComponent, selectors: [["desk-flow-new"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["cdkScrollable", "", 1, "bg-base-200", "relative", "flex", "h-full", "w-full", "flex-col", "overflow-auto"], [1, "mx-auto", "min-h-full", "w-7xl", "max-w-full", "flex-1", "space-y-4", "px-4", "pt-4"], [1, "block"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-xl", "border"], [1, "gradient", "border-base-content", "relative", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "text-xl", "font-medium"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-20", "flex", "justify-between", "rounded-t-xl", "border-x", "border-t", "p-3"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "animate-spin", "text-2xl"], [1, "text-2xl"], [1, "flex-1", "pr-4"]], template: function DeskFlowNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskFlowNewComponent_Conditional_0_Template, 23, 12, "div", 0)(1, DeskFlowNewComponent_Conditional_1_Template, 1, 0, "desk-flow-success");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.view() !== "success" ? 0 : 1);
      }
    }, dependencies: [
      CdkScrollable,
      IconComponent,
      MatRippleModule,
      MatRipple,
      DeskFlowAutoAssignComponent,
      DeskFlowDetailsComponent,
      DeskFlowSelectComponent,
      NewDeskFlowSuccessComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=desk-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskFlowNewComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-new", template: `
        @if (view() !== 'success') {
            <div
                cdkScrollable
                class="bg-base-200 relative flex h-full w-full flex-col overflow-auto"
            >
                <div
                    class="mx-auto min-h-full w-7xl max-w-full flex-1 space-y-4 px-4 pt-4"
                >
                    @if (!is_edit_mode()) {
                        <desk-flow-auto-assign class="block" />
                    }
                    <div
                        class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
                    >
                        <div
                            class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>info</icon>
                            <div>
                                {{ 'BOOKINGS.DESK_DETAILS_HEADER' | translate }}
                            </div>
                        </div>
                        <desk-flow-details />
                        <desk-flow-select />
                    </div>
                    <div
                        class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t p-3"
                    >
                        <div></div>
                        <button
                            btn
                            matRipple
                            (click)="confirmBooking()"
                            [disabled]="loading()"
                        >
                            <div class="flex items-center space-x-2">
                                @if (loading()) {
                                    <icon class="animate-spin text-2xl"
                                        >progress_activity</icon
                                    >
                                } @else {
                                    <icon class="text-2xl">task_alt</icon>
                                }
                                <div class="flex-1 pr-4">
                                    {{
                                        loading()
                                            ? ('COMMON.CONFIRMING' | translate)
                                            : ('COMMON.CONFIRM' | translate)
                                    }}
                                </div>
                                @if (!loading()) {
                                    <icon class="text-2xl"
                                        >keyboard_arrow_right</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <desk-flow-success />
        }
    `, imports: [
      CdkScrollable,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      DeskFlowAutoAssignComponent,
      DeskFlowDetailsComponent,
      DeskFlowSelectComponent,
      NewDeskFlowSuccessComponent
    ], styles: ["/* angular:styles/component:css;919852813613464840a7d2077c918cfcb937d6606492f2eda58b97a420fca396;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/desk-flow-new/desk-flow.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=desk-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskFlowNewComponent, { className: "DeskFlowNewComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow.component.ts", lineNumber: 124 });
})();
export {
  DeskFlowNewComponent
};
//# sourceMappingURL=desk-flow.component-BX66TA2J.js.map
