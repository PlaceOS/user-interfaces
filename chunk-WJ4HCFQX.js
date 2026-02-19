import {
  $h,
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BindingDirective,
  BreakpointObserver,
  Breakpoints,
  Building,
  BuildingLevel,
  BuildingPipe,
  CalendarEvent,
  CdkDialogContainer,
  CdkPortalOutlet,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  CurrencyPipe,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DatePipe,
  Dialog,
  DialogModule,
  DurationFieldComponent,
  ESCAPE,
  EventEmitter,
  EventFormService,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  GuestUser,
  IconComponent,
  ImageCarouselComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InteractiveMapComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapLocateModalComponent,
  MapPinComponent,
  MapsPeopleService,
  MatCheckbox,
  MatCheckboxModule,
  MatCommonModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  PortalModule,
  ReactiveFormsModule,
  RouterLink,
  RouterModule,
  SanitizePipe,
  SettingsService,
  SettingsToggleComponent,
  SlicePipe,
  Space,
  SpacePipe,
  SpacesService,
  Subject,
  TimeFieldComponent,
  TranslatePipe,
  UpperCasePipe,
  UserAvatarComponent,
  UserPipe,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  _animationsDisabled,
  addDays,
  addEventGuest,
  addMinutes,
  checkinEventGuest,
  combineLatest,
  computed,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  currentUser,
  debounceTime,
  endOfDay,
  filter,
  first,
  flatten,
  format,
  formatRecurrence,
  fromEventRecurrence,
  getEventMetadata,
  getTimezoneOffsetString,
  getUnixTime,
  hasModifierKey,
  i18n,
  inject,
  input,
  isSameDay,
  lastValueFrom,
  map,
  merge,
  model,
  notifyError,
  notifyInfo,
  notifySuccess,
  output,
  queryCalendarAvailability,
  queryCalendars,
  querySpaceFreeBusy,
  removeEventGuest,
  saveEvent,
  setClassMetadata,
  settingSignal,
  shareReplay,
  signal,
  startOfDay,
  take,
  tap,
  unique,
  updateEventMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2QHPUHR.js";

// libs/events/src/lib/attendee-list.component.ts
var _c0 = (a0) => ({ count: a0 });
function AttendeeListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function AttendeeListComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function AttendeeListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function AttendeeListComponent_For_9_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.HOST"), " ");
  }
}
function AttendeeListComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "a-user-avatar", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AttendeeListComponent_For_9_Conditional_0_Conditional_5_Template, 3, 3, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "div", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host() === user_r3.email ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", user_r3.checked_in)("bg-pending", !user_r3.checked_in);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 8, user_r3.checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECKED_IN_NOT"));
  }
}
function AttendeeListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AttendeeListComponent_For_9_Conditional_0_Template, 9, 10, "div", 7);
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!user_r3.resource && (ctx_r1.host() !== user_r3.email || ctx_r1.show_host()) ? 0 : -1);
  }
}
var _AttendeeListComponent = class _AttendeeListComponent {
  constructor() {
    this.host = input("");
    this.show_host = input(true);
    this.list = input([]);
    this.final_list = computed(() => this.show_host() ? this.list() : this.list().filter((user) => user.email !== this.host()));
    this.hide_close = input(false);
    this.custom_title = input("");
    this.close = output();
  }
};
_AttendeeListComponent.\u0275fac = function AttendeeListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendeeListComponent)();
};
_AttendeeListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendeeListComponent, selectors: [["attendee-list"]], inputs: { host: [1, "host"], show_host: [1, "show_host"], list: [1, "list"], hide_close: [1, "hide_close"], custom_title: [1, "custom_title"] }, outputs: { close: "close" }, decls: 10, vars: 9, consts: [[1, "bg-base-100", "flex", "h-full", "w-full", "flex-col", "overflow-hidden"], [1, "border-base-200", "flex", "min-h-12", "items-center", "border-b", "p-2"], ["close", "", "icon", "", "matRipple", ""], [1, "flex-1", "text-center", "font-medium"], [1, "w-12"], [1, "w-full", "flex-1", "overflow-auto"], ["close", "", "icon", "", "matRipple", "", 3, "click"], ["attendee", "", 1, "hover:bg-base-200", "flex", "items-center", "space-x-2", "p-2"], [3, "user"], [1, "w-1/2", "flex-1"], [1, "truncate"], [1, "text-sm", "opacity-60"], [1, "p-2"], [1, "h-3", "w-3", "rounded-full", 3, "matTooltip"]], template: function AttendeeListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, AttendeeListComponent_Conditional_2_Template, 3, 0, "button", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AttendeeListComponent_Conditional_6_Template, 1, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275repeaterCreate(8, AttendeeListComponent_For_9_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_close() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.custom_title() ? ctx.custom_title() : \u0275\u0275pipeBind3(5, 3, "CALENDAR_EVENT.ATTENDEES_COUNT", \u0275\u0275pureFunction1(7, _c0, ctx.final_list().length), ctx.final_list().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_close() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.final_list());
  }
}, dependencies: [
  CommonModule,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  UserAvatarComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var AttendeeListComponent = _AttendeeListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendeeListComponent, [{
    type: Component,
    args: [{ selector: "attendee-list", template: `
        <div class="bg-base-100 flex h-full w-full flex-col overflow-hidden">
            <div
                class="border-base-200 flex min-h-12 items-center border-b p-2"
            >
                @if (!hide_close()) {
                    <button close icon matRipple (click)="close.emit()">
                        <icon>arrow_back</icon>
                    </button>
                }
                <div class="flex-1 text-center font-medium">
                    {{
                        custom_title()
                            ? custom_title()
                            : ('CALENDAR_EVENT.ATTENDEES_COUNT'
                              | translate
                                  : { count: final_list().length }
                                  : final_list().length)
                    }}
                </div>
                @if (!hide_close()) {
                    <div class="w-12"></div>
                }
            </div>
            <div class="w-full flex-1 overflow-auto">
                @for (user of final_list(); track user) {
                    @if (
                        !user.resource && (host() !== user.email || show_host())
                    ) {
                        <div
                            attendee
                            class="hover:bg-base-200 flex items-center space-x-2 p-2"
                        >
                            <a-user-avatar [user]="user"></a-user-avatar>
                            <div class="w-1/2 flex-1">
                                <div class="truncate">{{ user.name }}</div>
                                @if (host() === user.email) {
                                    <div class="text-sm opacity-60">
                                        {{ 'FORM.HOST' | translate }}
                                    </div>
                                }
                            </div>
                            <div class="p-2">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-success]="user.checked_in"
                                    [class.bg-pending]="!user.checked_in"
                                    [matTooltip]="
                                        (user.checked_in
                                            ? 'COMMON.CHECKED_IN'
                                            : 'COMMON.CHECKED_IN_NOT'
                                        ) | translate
                                    "
                                ></div>
                            </div>
                        </div>
                    }
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      UserAvatarComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendeeListComponent, { className: "AttendeeListComponent", filePath: "libs/events/src/lib/attendee-list.component.ts", lineNumber: 84 });
})();

// libs/events/src/lib/group-event-details-modal.component.ts
var _c02 = (a0) => ({ name: a0 });
var _c1 = (a0, a1) => ({ going: a0, interested: a1 });
function GroupEventDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", (tmp_3_0 = ctx_r1.event().extension_data) == null ? null : tmp_3_0.images[0]);
  }
}
function GroupEventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 33);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
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
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementStart(2, "icon", 36);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
}
function GroupEventDetailsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "icon");
    \u0275\u0275text(8, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-200", !ctx_r1.is_interested())("text-base-content", !ctx_r1.is_interested())("opacity-30", !ctx_r1.is_interested())("bg-success", ctx_r1.is_interested())("text-success-content", ctx_r1.is_interested())("opacity-100", ctx_r1.is_interested());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 26, ctx_r1.is_interested() ? "CALENDAR_EVENT.GROUP_INTERESTED" : "CALENDAR_EVENT.GROUP_NOT_INTERESTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r1.is_going())("text-base-content", !ctx_r1.is_going())("opacity-30", !ctx_r1.is_going())("bg-success", ctx_r1.is_going())("text-success-content", ctx_r1.is_going())("opacity-100", ctx_r1.is_going());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 28, ctx_r1.is_going() ? "CALENDAR_EVENT.GROUP_GOING" : "CALENDAR_EVENT.GROUP_NOT_GOING"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.level().map_id)("features", ctx_r1.features())("styles", ctx_r1.styles());
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.building().display_name || ctx_r1.building().name, ", ", ctx_r1.level().display_name || ctx_r1.level().name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_LOCATION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("underline", ctx_r1.event().meeting_url);
    \u0275\u0275property("href", ctx_r1.event().meeting_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 39)(2, "button", 40);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_107_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewLocation());
    });
    \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_107_Conditional_3_Template, 1, 3, "interactive-map", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275conditionalCreate(5, GroupEventDetailsModalComponent_Conditional_107_Conditional_5_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(6, GroupEventDetailsModalComponent_Conditional_107_Conditional_6_Template, 3, 3, "div", 27);
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275conditionalCreate(8, GroupEventDetailsModalComponent_Conditional_107_Conditional_8_Template, 2, 2, "span");
    \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_107_Conditional_9_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, GroupEventDetailsModalComponent_Conditional_107_Conditional_10_Template, 3, 6, "a", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.showing_map() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.is_onsite() && ctx_r1.has_space() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_onsite() && !ctx_r1.has_space() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.building() && ctx_r1.level() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.building() || !ctx_r1.level() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_online() ? 10 : -1);
  }
}
function GroupEventDetailsModalComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 46);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_108_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_attendees.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 47)(3, "attendee-list", 48);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_108_Template_attendee_list_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("show_host", false)("list", ctx_r1.event().attendees)("host", ctx_r1.event().host)("show_host", false);
  }
}
var _GroupEventDetailsModalComponent = class _GroupEventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._dialog_ref = inject(MatDialogRef, { optional: true });
    this.edit = this._data?.edit_fn;
    this.remove = this._data?.remove_fn;
    this.space = signal(new Space());
    this.event = model(this._data?.event);
    this.is_limited = signal(!this._data);
    this.concierge = signal(this._data?.concierge);
    this.building = signal(new Building());
    this.level = signal(new BuildingLevel());
    this.features = signal([]);
    this.locate = signal("");
    this.showing_map = signal(false);
    this.show_attendees = signal(false);
    this.styles = signal({});
    this.raw_description = signal("");
    this.calendar_space = signal(new Space());
    this.featured = computed(() => this.event().featured || this.event().extension_data?.featured);
    this.has_space = computed(() => !!this.space().id);
    this.is_onsite = computed(() => this.event().extension_data.attendance_type !== "ONLINE");
    this.is_online = computed(() => !this.is_onsite() || this.event().extension_data.attendance_type === "ANY");
    this.body = computed(() => {
      if (this.is_online())
        return this.event().body;
      let body = this.event().body;
      const remove_blocks = [
        `<div style="margin-bottom:24px; overflow:hidden; white-space:nowrap">________________________________________________________________________________</div>`,
        `<p>________________________________________________________________________________</p>`
      ];
      for (const block of remove_blocks) {
        const first2 = body.indexOf(block);
        const last = body.lastIndexOf(block);
        body = body.substring(0, first2) + body.substring(last);
      }
      for (const block of remove_blocks) {
        body = body.replace(block, "");
      }
      return body;
    });
    this.attendance = computed(() => this.event().attendees?.filter((_) => _.checked_in)?.length || 0);
    this.attendees = computed(() => this.event().attendees?.filter((user) => user.email !== this.group_event_calendar)?.length || 0);
    this.guest_details = computed(() => {
      const user = currentUser();
      return this.event().attendees?.find((_) => _.email === user.email);
    });
    this.is_interested = computed(() => !!this.guest_details());
    this.is_going = computed(() => this.guest_details()?.checked_in);
    this.system_id = computed(() => this.space().id);
  }
  get group_event_calendar() {
    return this._settings.get("app.group_events_calendar") || "";
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar);
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.calendar_space.set(await space_pipe.transform(this.group_event_calendar));
    const map_id = this.event().extension_data?.map_id;
    const id = this.space()?.map_id || map_id;
    if (id) {
      this.styles[`#${id}`] = { fill: "green" };
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
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: { item: this.space }
    });
    ref.afterClosed().subscribe(() => this.showing_map.set(false));
  }
  async toggleInterest() {
    let user = this.guest_details();
    console.log("System", this.event, this.calendar_space);
    const _user = new GuestUser(currentUser());
    if (this.is_interested() && user) {
      await lastValueFrom(removeEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar
      }));
      this.event.update((e) => {
        e.attendees = (e.attendees || []).filter((_) => _.email !== user.email);
        return e;
      });
    } else {
      user = await lastValueFrom(addEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar
      }));
      this.event.update((e) => {
        e.attendees = unique([...e.attendees || [], user], "email");
        return e;
      });
    }
  }
  async toggleAttendance() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (!user) {
      user = await lastValueFrom(addEventGuest(this.event().id, _user, {
        system_id: this.event().system?.id,
        calendar: this.group_event_calendar
      }));
      this.event.attendees = unique([...this.event().attendees || [], user], "email");
    }
    user = __spreadValues(__spreadValues({}, currentUser()), user || {});
    if (!user.email)
      return;
    await lastValueFrom(checkinEventGuest(this.event().id, user.email, !this.is_going(), {
      system_id: this.event().system?.id
    }));
    const guest = this.event().attendees.find((_) => _.email === user.email);
    if (!guest)
      return;
    guest.checked_in = !this.is_going();
  }
};
_GroupEventDetailsModalComponent.\u0275fac = function GroupEventDetailsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventDetailsModalComponent)();
};
_GroupEventDetailsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventDetailsModalComponent, selectors: [["group-event-details-modal"]], inputs: { event: [1, "event"] }, outputs: { event: "eventChange" }, decls: 109, vars: 74, consts: [["concierge_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "max-h-[80vh]", "w-3xl", "max-w-[calc(100vw-1rem)]", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-52", "w-full", "items-center", "justify-between", "overflow-hidden"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br", "py-2", "pr-4", "pl-2", "text-sm"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-1", "right-1", "overflow-hidden"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-8", "py-4"], [1, "text-left", "text-xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "bg-base-200", "text-base-content", "w-11", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], ["mat-menu-item", "", 3, "disabled"], [1, "mr-2"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "flex", "max-h-[calc(80vh-18rem)]", "flex-1", "space-x-6", "overflow-x-hidden", "overflow-y-auto", "p-8"], [1, "flex", "w-1/3", "flex-1", "flex-col", "space-y-2"], [1, "flex", "items-center", "space-x-4"], [1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full"], [1, "pt-4", "font-medium"], [1, "flex", "flex-col"], [1, "text-sm"], [1, "text-sm", "opacity-30"], [1, "flex", "flex-col", "text-sm"], [1, "opacity-30"], ["matRipple", "", 1, "flex", "min-h-12", "items-center", "space-x-4", "rounded-sm", 3, "click"], [1, "pb-4", "text-sm"], ["event-details", "", 3, "innerHTML"], [1, "flex", "w-[20rem]"], [1, "absolute", "inset-0", "z-50"], [1, "text-base"], [1, "uppercase"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-30"], [1, "z-10"], ["btn", "", 1, "flex", "h-10", "items-center", "space-x-2", "rounded-sm", "px-4"], [1, "pr-2"], [1, "border-base-300", "w-full", "border"], ["matRipple", "", 1, "bg-base-200", "relative", "h-40", "w-full", 3, "click"], [3, "src", "features", "styles"], [1, "space-y-2", "p-4"], [1, "mt-0!", "text-sm", "opacity-30"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "underline", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "href"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60", 3, "click"], [1, "absolute", "inset-y-8", "left-1/2", "w-[24rem]", "-translate-x-1/2", "overflow-hidden", "rounded-sm", "shadow-sm"], [3, "click", "show_host", "list", "host"]], template: function GroupEventDetailsModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.edit ? ctx.edit(ctx.event()) : "");
    });
    \u0275\u0275elementStart(23, "div", 9)(24, "icon", 11);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 12)(30, "div", 9)(31, "icon", 11);
    \u0275\u0275text(32, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 13);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 15);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.remove ? ctx.remove(ctx.event(), false) : "");
    });
    \u0275\u0275elementStart(37, "div", 9)(38, "icon", 16);
    \u0275\u0275text(39, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 13);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "mat-menu", null, 1)(45, "button", 17);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleInterest());
    });
    \u0275\u0275elementStart(46, "div", 9)(47, "icon");
    \u0275\u0275text(48, " star ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "button", 15);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleAttendance());
    });
    \u0275\u0275elementStart(53, "div", 9)(54, "icon");
    \u0275\u0275text(55, " help ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(59, "div", 18)(60, "div", 19)(61, "div", 20)(62, "div", 21)(63, "icon");
    \u0275\u0275text(64, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "h3", 22);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 20)(72, "div", 21)(73, "icon");
    \u0275\u0275text(74, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 23)(76, "div", 24);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 25);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "date");
    \u0275\u0275pipe(82, "date");
    \u0275\u0275pipe(83, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 20)(85, "div", 21)(86, "icon");
    \u0275\u0275text(87, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 26);
    \u0275\u0275conditionalCreate(89, GroupEventDetailsModalComponent_Conditional_89_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(90, GroupEventDetailsModalComponent_Conditional_90_Template, 3, 3, "div", 27);
    \u0275\u0275conditionalCreate(91, GroupEventDetailsModalComponent_Conditional_91_Template, 3, 3, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "button", 28);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_attendees.set(!ctx.is_limited() && true));
    });
    \u0275\u0275elementStart(93, "div", 21)(94, "icon");
    \u0275\u0275text(95, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div");
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "h3", 22);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 29);
    \u0275\u0275element(103, "span", 30);
    \u0275\u0275pipe(104, "sanitize");
    \u0275\u0275conditionalCreate(105, GroupEventDetailsModalComponent_Conditional_105_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div");
    \u0275\u0275conditionalCreate(107, GroupEventDetailsModalComponent_Conditional_107_Template, 11, 6, "div", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(108, GroupEventDetailsModalComponent_Conditional_108_Template, 4, 4, "div", 32);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_19_0;
    const concierge_menu_r5 = \u0275\u0275reference(14);
    const menu_r6 = \u0275\u0275reference(44);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx.event().extension_data) == null ? null : tmp_2_0.images == null ? null : tmp_2_0.images.length) ? 2 : -1);
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
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 38, "CALENDAR_EVENT.GROUP_COPY_URL"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 40, "CALENDAR_EVENT.GROUP_DELETE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("text-error", ctx.is_interested());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 42, ctx.is_interested() ? "CALENDAR_EVENT.GROUP_INTEREST_REMOVE" : "CALENDAR_EVENT.GROUP_INTEREST_ADD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-error", ctx.is_going());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 44, ctx.is_going() ? "CALENDAR_EVENT.GROUP_GOING_REMOVE" : "CALENDAR_EVENT.GROUP_GOING_ADD"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 46, "CALENDAR_EVENT.GROUP_HOST", \u0275\u0275pureFunction1(69, _c02, ((tmp_19_0 = ctx.event().organiser) == null ? null : tmp_19_0.name) || ctx.event().host)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 49, "CALENDAR_EVENT.GROUP_WHEN_WHERE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 51, "CALENDAR_EVENT.GROUP_DATE_TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(81, 53, ctx.event().date, "EEEE, d MMMM, yyyy"), " . ", \u0275\u0275pipeBind2(82, 56, ctx.event().date, ctx.time_format), " - ", \u0275\u0275pipeBind2(83, 59, ctx.event().date + ctx.event().duration * 60 * 1e3, ctx.time_format), " ");
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.is_onsite() && ctx.has_space() ? 89 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_onsite() && !ctx.has_space() ? 90 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.is_online() ? 91 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(98, 62, "CALENDAR_EVENT.GROUP_ATTENDEES", \u0275\u0275pureFunction2(71, _c1, ctx.attendance(), ctx.attendees())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(101, 65, "CALENDAR_EVENT.GROUP_ABOUT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(104, 67, ctx.body()), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.raw_description() ? 105 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.level() ? 107 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_attendees() ? 108 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  AttendeeListComponent,
  InteractiveMapComponent,
  SanitizePipe,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatDialogModule,
  MatDialogClose,
  AuthenticatedImageDirective
], encapsulation: 2 });
var GroupEventDetailsModalComponent = _GroupEventDetailsModalComponent;
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
                        <button mat-menu-item [disabled]="true">
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
                        <button
                            mat-menu-item
                            (click)="remove ? remove(event(), false) : ''"
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
                                . {{ event().date | date: time_format }} -
                                {{
                                    event().date + event().duration * 60 * 1000
                                        | date: time_format
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventDetailsModalComponent, { className: "GroupEventDetailsModalComponent", filePath: "libs/events/src/lib/group-event-details-modal.component.ts", lineNumber: 471 });
})();

// libs/events/src/lib/space-select-modal/space-details.component.ts
var _c03 = (a0) => ({ count: a0 });
var _c12 = () => ({ disable_pan: true, disable_zoom: true });
function SpaceDetailsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "image-carousel", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("images", ctx_r1.space().images);
  }
}
function SpaceDetailsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-info", ctx_r1.alert()[0] === "info")("text-info-content", ctx_r1.alert()[0] === "info")("bg-warning", ctx_r1.alert()[0] === "warn")("text-warning-content", ctx_r1.alert()[0] === "warn")("bg-error", ctx_r1.alert()[0] === "closed")("text-error-content", ctx_r1.alert()[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert()[1], " ");
  }
}
function SpaceDetailsComponent_Conditional_0_Conditional_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r3);
  }
}
function SpaceDetailsComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SpaceDetailsComponent_Conditional_0_Conditional_35_For_5_Template, 3, 1, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.FACILITIES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.space().features);
  }
}
function SpaceDetailsComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "interactive-map", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.map_url)("focus", ctx_r1.space().map_id)("features", ctx_r1.features)("options", \u0275\u0275pureFunction0(4, _c12));
  }
}
function SpaceDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275conditionalCreate(1, SpaceDetailsComponent_Conditional_0_Conditional_1_Template, 1, 1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function SpaceDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function SpaceDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "section", 6)(10, "h2", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, SpaceDetailsComponent_Conditional_0_Conditional_12_Template, 2, 13, "div", 8);
    \u0275\u0275element(13, "hr");
    \u0275\u0275elementStart(14, "section", 9)(15, "h2", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 11)(19, "icon");
    \u0275\u0275text(20, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 11)(25, "icon");
    \u0275\u0275text(26, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 11)(30, "icon");
    \u0275\u0275text(31, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(34, "hr");
    \u0275\u0275conditionalCreate(35, SpaceDetailsComponent_Conditional_0_Conditional_35_Template, 6, 3, "section", 12);
    \u0275\u0275conditionalCreate(36, SpaceDetailsComponent_Conditional_0_Conditional_36_Template, 2, 5, "section", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 14)(38, "button", 15);
    \u0275\u0275listener("click", function SpaceDetailsComponent_Conditional_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeChange.emit(!ctx_r1.active()));
    });
    \u0275\u0275elementStart(39, "div", 16)(40, "icon", 17);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sm:h-64", (tmp_1_0 = ctx_r1.space().images) == null ? null : tmp_1_0.length)("h-40", (tmp_2_0 = ctx_r1.space().images) == null ? null : tmp_2_0.length)("sm:h-0", !((tmp_3_0 = ctx_r1.space().images) == null ? null : tmp_3_0.length))("h-12", !((tmp_4_0 = ctx_r1.space().images) == null ? null : tmp_4_0.length))("bg-transparent!", !((tmp_5_0 = ctx_r1.space().images) == null ? null : tmp_5_0.length));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.space().images) == null ? null : tmp_6_0.length) ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-white", !ctx_r1.fav())("text-info", ctx_r1.fav());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fav() ? "favorite" : "favorite_border");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alert() ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 28, "CALENDAR_EVENT.DETAILS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 30, "CALENDAR_EVENT.CAPACITY_COUNT", \u0275\u0275pureFunction1(35, _c03, ctx_r1.space().capacity)), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.building == null ? null : ctx_r1.building.address) || (ctx_r1.building == null ? null : ctx_r1.building.display_name) || (ctx_r1.building == null ? null : ctx_r1.building.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_16_0 = ctx_r1.space().features) == null ? null : tmp_16_0.length) ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_map() ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx_r1.active());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.active() ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 33, ctx_r1.active() ? "CALENDAR_EVENT.SPACE_REMOVE" : "CALENDAR_EVENT.SPACE_ADD_TO"), " ");
  }
}
function SpaceDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.SPACE_LIST_INFO"), " ");
  }
}
var _SpaceDetailsComponent = class _SpaceDetailsComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this.space = input(void 0);
    this.fav = input(false);
    this.active = input(false);
    this.hide_map = input(false);
    this.alert = input(void 0);
    this.activeChange = output();
    this.close = output();
    this.toggleFav = output();
    this.map_url = "";
    this.features = [];
  }
  get level() {
    const space = this.space();
    return this._org.levelWithID(space?.zones) || space?.level;
  }
  get building() {
    return this._org.buildings.find((_) => this.space()?.zones.includes(_.id));
  }
  ngOnChanges(changes) {
    if (changes.space && this.space()) {
      this._updateFeature();
    }
  }
  _updateFeature() {
    this.map_url = this.level?.map_id;
    this.features = [
      {
        location: this.space()?.map_id,
        content: MapPinComponent
      }
    ];
  }
};
_SpaceDetailsComponent.\u0275fac = function SpaceDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceDetailsComponent)();
};
_SpaceDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceDetailsComponent, selectors: [["space-details"]], inputs: { space: [1, "space"], fav: [1, "fav"], active: [1, "active"], hide_map: [1, "hide_map"], alert: [1, "alert"] }, outputs: { activeChange: "activeChange", close: "close", toggleFav: "toggleFav" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-neutral", "relative", "w-full"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-space-details", 1, "bg-neutral", "absolute", "top-2", "left-2", "text-white", "sm:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-space-favourite-details", 1, "bg-neutral", "absolute", "top-2", "right-2", 3, "click"], [1, "h-1/2", "flex-1", "space-y-2", "overflow-auto", "p-2"], ["actions", "", 1, "z-0"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], [1, "my-2", "rounded-sm", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], ["details", "", 1, "space-y-2"], [1, "text-xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["facilities", "", 1, "space-y-2"], ["map", "", 1, "border-base-200", "relative", "mx-auto", "h-64", "w-full", "overflow-hidden", "rounded-sm", "border", "sm:h-48"], [1, "border-base-200", "border-t", "px-2", "pt-2", "pb-22", "shadow-sm", "sm:hidden"], ["btn", "", "matRipple", "", "name", "toggle-space-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "my-2", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], [1, "text-center", "opacity-30"]], template: function SpaceDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SpaceDetailsComponent_Conditional_0_Template, 45, 37)(1, SpaceDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.space() ? 0 : 1);
  }
}, dependencies: [
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  InteractiveMapComponent,
  ImageCarouselComponent,
  IconComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=space-details.component.css.map */"] });
var SpaceDetailsComponent = _SpaceDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceDetailsComponent, [{
    type: Component,
    args: [{ selector: `space-details`, template: `
        @if (space()) {
            <section
                image
                class="bg-neutral relative w-full"
                [class.sm:h-64]="space().images?.length"
                [class.h-40]="space().images?.length"
                [class.sm:h-0]="!space().images?.length"
                [class.h-12]="!space().images?.length"
                [class.bg-transparent!]="!space().images?.length"
            >
                @if (space().images?.length) {
                    <image-carousel
                        [images]="space().images"
                        class="absolute inset-0"
                    ></image-carousel>
                }
                <button
                    icon
                    matRipple
                    name="close-space-details"
                    (click)="close.emit()"
                    class="bg-neutral absolute top-2 left-2 text-white sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite-details"
                    [class.text-white]="!fav()"
                    [class.text-info]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-neutral absolute top-2 right-2"
                >
                    <icon>{{ fav() ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 overflow-auto p-2">
                <section actions class="z-0">
                    <h2 class="mt-4 mb-2 text-xl font-medium">
                        {{ space().display_name || space().name }}
                    </h2>
                </section>
                @if (alert()) {
                    <div
                        class="my-2 rounded-sm px-2 py-1 text-xs"
                        [class.bg-info]="alert()[0] === 'info'"
                        [class.text-info-content]="alert()[0] === 'info'"
                        [class.bg-warning]="alert()[0] === 'warn'"
                        [class.text-warning-content]="alert()[0] === 'warn'"
                        [class.bg-error]="alert()[0] === 'closed'"
                        [class.text-error-content]="alert()[0] === 'closed'"
                    >
                        {{ alert()[1] }}
                    </div>
                }
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">
                        {{ 'CALENDAR_EVENT.DETAILS' | translate }}
                    </h2>
                    <div class="flex items-center space-x-2">
                        <icon>people</icon>
                        <p>
                            {{
                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                    | translate: { count: space().capacity }
                            }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>meeting_room</icon>
                        <p>
                            {{ level?.display_name || level?.name }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <p>
                            {{
                                building?.address ||
                                    building?.display_name ||
                                    building?.name
                            }}
                        </p>
                    </div>
                </section>
                <hr />
                @if (space().features?.length) {
                    <section facilities class="space-y-2">
                        <h2 class="text-xl font-medium">
                            {{ 'CALENDAR_EVENT.FACILITIES' | translate }}
                        </h2>
                        @for (feature of space().features; track feature) {
                            <div class="flex items-center space-x-2">
                                <!-- <icon>people</icon> -->
                                <p>{{ feature }}</p>
                            </div>
                        }
                    </section>
                }
                @if (!hide_map()) {
                    <section
                        map
                        class="border-base-200 relative mx-auto h-64 w-full overflow-hidden rounded-sm border sm:h-48"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="map_url"
                            [focus]="space().map_id"
                            [features]="features"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    </section>
                }
            </div>
            <div
                class="border-base-200 border-t px-2 pt-2 pb-22 shadow-sm sm:hidden"
            >
                <button
                    btn
                    matRipple
                    name="toggle-space-details"
                    [class.inverse]="active()"
                    class="w-full"
                    (click)="activeChange.emit(!active())"
                >
                    <div class="flex items-center justify-center">
                        <icon class="text-2xl">{{
                            active() ? 'remove' : 'add'
                        }}</icon>
                        <p>
                            {{
                                (active()
                                    ? 'CALENDAR_EVENT.SPACE_REMOVE'
                                    : 'CALENDAR_EVENT.SPACE_ADD_TO'
                                ) | translate
                            }}
                        </p>
                    </div>
                </button>
            </div>
        } @else {
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CALENDAR_EVENT.SPACE_LIST_INFO' | translate }}
                </p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      InteractiveMapComponent,
      ImageCarouselComponent,
      IconComponent
    ], styles: ["/* angular:styles/component:css;d859e9529a28e47107a95855e6320695d83a77a78689601ca3e362ce864c9ab1;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/space-select-modal/space-details.component.ts */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 20rem;\n  height: 100%;\n  min-height: 65vh;\n}\n/*# sourceMappingURL=space-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceDetailsComponent, { className: "SpaceDetailsComponent", filePath: "libs/events/src/lib/space-select-modal/space-details.component.ts", lineNumber: 200 });
})();

// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {
}
var ENTER_ANIMATION = "_mat-bottom-sheet-enter";
var EXIT_ANIMATION = "_mat-bottom-sheet-exit";
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
  _breakpointSubscription;
  _animationsDisabled = _animationsDisabled();
  /** The state of the bottom sheet animations. */
  _animationState = "void";
  /** Emits whenever the state of the animation changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether the component has been destroyed. */
  _destroyed;
  constructor() {
    super();
    const breakpointObserver = inject(BreakpointObserver);
    this._breakpointSubscription = breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(() => {
      const classList = this._elementRef.nativeElement.classList;
      classList.toggle("mat-bottom-sheet-container-medium", breakpointObserver.isMatched(Breakpoints.Medium));
      classList.toggle("mat-bottom-sheet-container-large", breakpointObserver.isMatched(Breakpoints.Large));
      classList.toggle("mat-bottom-sheet-container-xlarge", breakpointObserver.isMatched(Breakpoints.XLarge));
    });
  }
  /** Begin animation of bottom sheet entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      if (this._animationsDisabled) {
        this._simulateAnimation(ENTER_ANIMATION);
      }
    }
  }
  /** Begin animation of the bottom sheet exiting from view. */
  exit() {
    if (!this._destroyed) {
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      if (this._animationsDisabled) {
        this._simulateAnimation(EXIT_ANIMATION);
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }
  _simulateAnimation(name) {
    this._ngZone.run(() => {
      this._handleAnimationEvent(true, name);
      setTimeout(() => this._handleAnimationEvent(false, name));
    });
  }
  _trapFocus() {
    super._trapFocus({
      preventScroll: true
    });
  }
  _handleAnimationEvent(isStart, animationName) {
    const isEnter = animationName === ENTER_ANIMATION;
    const isExit = animationName === EXIT_ANIMATION;
    if (isEnter || isExit) {
      this._animationStateChanged.emit({
        toState: isEnter ? "visible" : "hidden",
        phase: isStart ? "start" : "done"
      });
    }
  }
  static \u0275fac = function MatBottomSheetContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatBottomSheetContainer,
    selectors: [["mat-bottom-sheet-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
    hostVars: 9,
    hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("animationstart", function MatBottomSheetContainer_animationstart_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(true, $event.animationName);
        })("animationend", function MatBottomSheetContainer_animationend_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        })("animationcancel", function MatBottomSheetContainer_animationcancel_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
        \u0275\u0275classProp("mat-bottom-sheet-container-animations-enabled", !ctx._animationsDisabled)("mat-bottom-sheet-container-enter", ctx._animationState === "visible")("mat-bottom-sheet-container-exit", ctx._animationState === "hidden");
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function MatBottomSheetContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetContainer, [{
    type: Component,
    args: [{
      selector: "mat-bottom-sheet-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-bottom-sheet-container",
        "[class.mat-bottom-sheet-container-animations-enabled]": "!_animationsDisabled",
        "[class.mat-bottom-sheet-container-enter]": '_animationState === "visible"',
        "[class.mat-bottom-sheet-container-exit]": '_animationState === "hidden"',
        "tabindex": "-1",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-label]": "_config.ariaLabel",
        "(animationstart)": "_handleAnimationEvent(true, $event.animationName)",
        "(animationend)": "_handleAnimationEvent(false, $event.animationName)",
        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName)"
      },
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
    }]
  }], () => [], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
  /** The view container to place the overlay for the bottom sheet into. */
  viewContainerRef;
  /** Extra CSS classes to be added to the bottom sheet container. */
  panelClass;
  /** Text layout direction for the bottom sheet. */
  direction;
  /** Data being injected into the child component. */
  data = null;
  /** Whether the bottom sheet has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass;
  /** Whether the user can use escape or clicking outside to close the bottom sheet. */
  disableClose = false;
  /** Aria label to assign to the bottom sheet element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Whether the bottom sheet should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Where the bottom sheet should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the bottom sheet should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Scroll strategy to be used for the bottom sheet. */
  scrollStrategy;
  /** Height for the bottom sheet. */
  height = "";
  /** Minimum height for the bottom sheet. If a number is provided, assumes pixel units. */
  minHeight;
  /** Maximum height for the bottom sheet. If a number is provided, assumes pixel units. */
  maxHeight;
};
var MatBottomSheetRef = class {
  _ref;
  /** Instance of the component making up the content of the bottom sheet. */
  get instance() {
    return this._ref.componentInstance;
  }
  /**
   * `ComponentRef` of the component opened into the bottom sheet. Will be
   * null when the bottom sheet is opened using a `TemplateRef`.
   */
  get componentRef() {
    return this._ref.componentRef;
  }
  /**
   * Instance of the component into which the bottom sheet content is projected.
   * @docs-private
   */
  containerInstance;
  /** Whether the user is allowed to close the bottom sheet. */
  disableClose;
  /** Subject for notifying the user that the bottom sheet has opened and appeared. */
  _afterOpened = new Subject();
  /** Result to be passed down to the `afterDismissed` stream. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "visible"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE))).subscribe((event) => {
      if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  /**
   * Dismisses the bottom sheet.
   * @param result Data to be passed back to the bottom sheet opener.
   */
  dismiss(result) {
    if (!this.containerInstance) {
      return;
    }
    this.containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "start"), take(1)).subscribe(() => {
      this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
      this._ref.overlayRef.detachBackdrop();
    });
    this._result = result;
    this.containerInstance.exit();
    this.containerInstance = null;
  }
  /** Gets an observable that is notified when the bottom sheet is finished closing. */
  afterDismissed() {
    return this._ref.closed;
  }
  /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
};
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken("mat-bottom-sheet-default-options");
var MatBottomSheet = class _MatBottomSheet {
  _injector = inject(Injector);
  _parentBottomSheet = inject(_MatBottomSheet, {
    optional: true,
    skipSelf: true
  });
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, {
    optional: true
  });
  _bottomSheetRefAtThisLevel = null;
  _dialog = inject(Dialog);
  /** Reference to the currently opened bottom sheet. */
  get _openedBottomSheetRef() {
    const parent = this._parentBottomSheet;
    return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
  }
  set _openedBottomSheetRef(value) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
    let ref;
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      maxWidth: "100%",
      container: MatBottomSheetContainer,
      scrollStrategy: _config.scrollStrategy || createBlockScrollStrategy(this._injector),
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().bottom("0"),
      disableAnimations: this._animationsDisabled,
      templateContext: () => ({
        bottomSheetRef: ref
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MatBottomSheetRef(cdkRef, _config, container);
        return [{
          provide: MatBottomSheetRef,
          useValue: ref
        }, {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: _config.data
        }];
      }
    }));
    ref.afterDismissed().subscribe(() => {
      if (this._openedBottomSheetRef === ref) {
        this._openedBottomSheetRef = null;
      }
    });
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      ref.containerInstance.enter();
    }
    this._openedBottomSheetRef = ref;
    return ref;
  }
  /**
   * Dismisses the currently-visible bottom sheet.
   * @param result Data to pass to the bottom sheet instance.
   */
  dismiss(result) {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }
  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }
  static \u0275fac = function MatBottomSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheet)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatBottomSheet,
    factory: _MatBottomSheet.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheet, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
  static \u0275fac = function MatBottomSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatBottomSheetModule,
    imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
    exports: [MatBottomSheetContainer, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatBottomSheet],
    imports: [DialogModule, MatCommonModule, PortalModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
      exports: [MatBottomSheetContainer, MatCommonModule],
      providers: [MatBottomSheet]
    }]
  }], null, null);
})();

// libs/events/src/lib/space-select-modal/space-filters.component.ts
var _c04 = () => ({ standalone: true });
function SpaceFiltersComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SpaceFiltersComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
  }
}
function SpaceFiltersComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r5 = ctx.$implicit;
    \u0275\u0275property("value", reg_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reg_r5.display_name || reg_r5.name, " ");
  }
}
function SpaceFiltersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRegion($event));
    });
    \u0275\u0275repeaterCreate(3, SpaceFiltersComponent_Conditional_16_For_4_Template, 2, 2, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.region)("ngModelOptions", \u0275\u0275pureFunction0(7, _c04))("placeholder", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.SPACE_REGION_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 5, ctx_r2.regions));
  }
}
function SpaceFiltersComponent_Conditional_18_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r7 = ctx.$implicit;
    \u0275\u0275property("value", bld_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r7.display_name || bld_r7.name, " ");
  }
}
function SpaceFiltersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 24);
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_18_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, SpaceFiltersComponent_Conditional_18_For_3_Template, 2, 2, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.bld)("ngModelOptions", \u0275\u0275pureFunction0(5, _c04))("placeholder", (ctx_r2.bld == null ? null : ctx_r2.bld.display_name) || (ctx_r2.bld == null ? null : ctx_r2.bld.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 3, ctx_r2.buildings));
  }
}
function SpaceFiltersComponent_Conditional_20_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const lvl_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, lvl_r9.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function SpaceFiltersComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, SpaceFiltersComponent_Conditional_20_For_5_Conditional_2_Template, 5, 3, "div", 27);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r9.display_name || lvl_r9.name, " ");
  }
}
function SpaceFiltersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 10)(1, "mat-select", 25);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_20_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ zones: $event }));
    });
    \u0275\u0275repeaterCreate(4, SpaceFiltersComponent_Conditional_20_For_5_Template, 5, 3, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(2, 4, ctx_r2.options)) == null ? null : tmp_2_0.zones)("ngModelOptions", \u0275\u0275pureFunction0(10, _c04))("placeholder", \u0275\u0275pipeBind1(3, 6, "CALENDAR_EVENT.SPACE_LEVEL_ANY"))("multiple", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 8, ctx_r2.levels));
  }
}
function SpaceFiltersComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-date-field", 29);
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_31_Template_a_date_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "FORM.DATE_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.getRawValue().date_end)("ngModelOptions", \u0275\u0275pureFunction0(13, _c04))("from", ctx_r2.start_date)("to", ctx_r2.end_date)("short", true)("timezone", ctx_r2.timezone)("range", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, "FORM.DATE_ERROR"), " ");
  }
}
function SpaceFiltersComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-checkbox", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function SpaceFiltersComponent_Conditional_33_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a-time-field", 35);
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_33_Conditional_8_Template_a_time_field_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date_end: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.value.date_end)("ngModelOptions", \u0275\u0275pureFunction0(8, _c04))("from", ctx_r2.form == null ? null : (tmp_6_0 = ctx_r2.form.getRawValue()) == null ? null : tmp_6_0.date)("use_24hr", ctx_r2.use_24hr)("timezone", ctx_r2.timezone);
  }
}
function SpaceFiltersComponent_Conditional_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-duration-field", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "FORM.TIME_END"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r2.form == null ? null : (tmp_4_0 = ctx_r2.form.getRawValue()) == null ? null : tmp_4_0.date)("max", ctx_r2.max_duration)("use_24hr", ctx_r2.use_24hr)("timezone", ctx_r2.timezone);
  }
}
function SpaceFiltersComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 31)(2, "label", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 33);
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_33_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, SpaceFiltersComponent_Conditional_33_Conditional_8_Template, 7, 9, "div", 31);
    \u0275\u0275conditionalCreate(9, SpaceFiltersComponent_Conditional_33_Conditional_9_Template, 7, 7, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(9, _c04))("use_24hr", ctx_r2.use_24hr)("timezone", ctx_r2.timezone);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.multiday() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.multiday() ? 9 : -1);
  }
}
function SpaceFiltersComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 18)(1, "h2", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "settings-toggle", 39);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_36_Template_settings_toggle_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOptions({ show_fav: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.FAVOURITES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(6, 6, "COMMON.FAVOURITES_ONLY"))("ngModel", (tmp_4_0 = \u0275\u0275pipeBind1(7, 8, ctx_r2.filters)) == null ? null : tmp_4_0.show_fav)("ngModelOptions", \u0275\u0275pureFunction0(10, _c04));
  }
}
function SpaceFiltersComponent_Conditional_37_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "settings-toggle", 39);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Conditional_37_For_4_Conditional_0_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const feat_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFeature(feat_r15, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const feat_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r2.feature_display[feat_r15] || feat_r15)("ngModel", (tmp_14_0 = \u0275\u0275pipeBind1(2, 3, ctx_r2.filters)) == null ? null : tmp_14_0.features == null ? null : tmp_14_0.features.includes(feat_r15))("ngModelOptions", \u0275\u0275pureFunction0(5, _c04));
  }
}
function SpaceFiltersComponent_Conditional_37_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SpaceFiltersComponent_Conditional_37_For_4_Conditional_0_Template, 3, 6, "div", 40);
  }
  if (rf & 2) {
    const feat_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r2.hide_features.includes(feat_r15) ? 0 : -1);
  }
}
function SpaceFiltersComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "h2", 37);
    \u0275\u0275text(2, "Facilities");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SpaceFiltersComponent_Conditional_37_For_4_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 0, ctx_r2.features));
  }
}
function SpaceFiltersComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 41);
    \u0275\u0275listener("click", function SpaceFiltersComponent_Conditional_39_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMON.APPLY"), " ");
  }
}
var _SpaceFiltersComponent = class _SpaceFiltersComponent {
  get allow_all_day() {
    return !!this._settings.get("app.events.allow_all_day");
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get bld() {
    return this._org.building;
  }
  get region() {
    return this._org.region;
  }
  get form() {
    return this._event_form.form;
  }
  get max_duration() {
    return this._settings.get("app.events.max_duration") || 480;
  }
  get feature_display() {
    return this._settings.get("app.events.feature_decriptions") || {};
  }
  get hide_features() {
    return this._settings.get("app.events.hide_features") || [];
  }
  get use_24hr() {
    return this._settings.get("app.use_24_hour_time");
  }
  get start_date() {
    return startOfDay(this.form.getRawValue().date).valueOf();
  }
  get end_date() {
    return endOfDay(addDays(Date.now(), this._settings.get("app.events.allowed_future_days") || 180)).valueOf();
  }
  constructor() {
    this._bsheet_ref = inject(MatBottomSheetRef, { optional: true });
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._mapspeople = inject(MapsPeopleService);
    this.multiday = input(void 0);
    this.hide_levels = input(void 0);
    this.viewing_map = input(void 0);
    this.can_close = false;
    this.options = this._event_form.options$;
    this.filters = this._event_form.filters$;
    this.building = this._org.active_building;
    this.buildings = this._org.active_buildings;
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.regions = this._org.region_list;
    this.using_mapspeople = this._mapspeople.available$;
    this.features = combineLatest([
      this._spaces.features,
      this._event_form.available_spaces
    ]).pipe(map(([features, spaces]) => unique(features.concat(flatten(spaces.map((_) => _.features))))));
    this.close = () => this._bsheet_ref.dismiss();
    this.setOptions = (o) => this._event_form.setOptions(o);
    this.can_close = !!this._bsheet_ref;
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  setRegion(region) {
    this._org.region = region;
  }
  async toggleFeature(feat, state) {
    const { features } = this._event_form.filters;
    const new_list = (features || []).filter((_) => feat !== _);
    if (state)
      new_list.push(feat);
    this._event_form.setFilters({ features: new_list });
  }
};
_SpaceFiltersComponent.\u0275fac = function SpaceFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceFiltersComponent)();
};
_SpaceFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceFiltersComponent, selectors: [["space-filters"]], inputs: { multiday: [1, "multiday"], hide_levels: [1, "hide_levels"], viewing_map: [1, "viewing_map"] }, decls: 40, vars: 41, consts: [[1, "border-base-200", "flex", "items-center", "border-b", "pb-2", "sm:hidden"], [1, "flex-1", "pl-2"], ["icon", "", "matRipple", "", "name", "close-space-filters"], [1, "flex-2", "text-center", "text-xl", "font-medium"], [1, "flex-1"], [1, "divide-base-200", "max-h-[65vh]", "w-full", "max-w-[100vw]", "divide-y", "overflow-x-hidden", "overflow-y-auto", "p-2", 3, "formGroup"], ["details", ""], [1, "mb-1", "text-lg", "font-medium"], [1, "flex", "min-w-32", "flex-1", "flex-col"], ["for", "location"], ["appearance", "outline", 1, "w-full"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-2"], [1, "min-w-32", "flex-1"], ["for", "date"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "to", "short", "timezone", "range"], [1, "relative", "min-w-32", "flex-1"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], ["favs", "", 1, "space-y-2", "pb-4"], ["features", "", 1, "space-y-2"], [1, "border-base-200", "w-full", "border-t", "px-2", "pt-2"], ["icon", "", "matRipple", "", "name", "close-space-filters", 3, "click"], ["name", "region", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value"], ["name", "building", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder", "multiple"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["name", "date", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "to", "short", "timezone", "range"], ["formControlName", "all_day"], [1, "w-1/3", "flex-1"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr", "timezone"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "timezone"], ["name", "end-time", "formControlName", "duration", 3, "time", "max", "use_24hr", "timezone"], [1, "mt-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center"], [1, "w-full", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "apply-space-filters", 1, "w-full", 3, "click"]], template: function SpaceFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, SpaceFiltersComponent_Conditional_2_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 5)(8, "section", 6)(9, "h2", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, SpaceFiltersComponent_Conditional_16_Template, 6, 8, "mat-form-field", 10);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275conditionalCreate(18, SpaceFiltersComponent_Conditional_18_Template, 5, 6, "mat-form-field", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275conditionalCreate(20, SpaceFiltersComponent_Conditional_20_Template, 7, 11, "mat-form-field", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "label", 13);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a-date-field", 14);
    \u0275\u0275listener("ngModelChange", function SpaceFiltersComponent_Template_a_date_field_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.form.patchValue({ date: $event }));
    });
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, SpaceFiltersComponent_Conditional_31_Template, 9, 14, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, SpaceFiltersComponent_Conditional_32_Template, 4, 3, "div", 16);
    \u0275\u0275conditionalCreate(33, SpaceFiltersComponent_Conditional_33_Template, 10, 10, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(34);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275conditionalCreate(36, SpaceFiltersComponent_Conditional_36_Template, 8, 11, "section", 18);
    \u0275\u0275conditionalCreate(37, SpaceFiltersComponent_Conditional_37_Template, 6, 2, "section", 19);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, SpaceFiltersComponent_Conditional_39_Template, 4, 3, "div", 20);
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_21_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 22, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 24, "CALENDAR_EVENT.DETAILS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "CALENDAR_EVENT.SPACE_LOCATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.use_region && ((tmp_5_0 = \u0275\u0275pipeBind1(17, 28, ctx.regions)) == null ? null : tmp_5_0.length) ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.use_region && ((tmp_6_0 = \u0275\u0275pipeBind1(19, 30, ctx.buildings)) == null ? null : tmp_6_0.length) > 1 ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_levels() ? 20 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 32, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.form.getRawValue().date)("ngModelOptions", \u0275\u0275pureFunction0(40, _c04))("to", ctx.end_date)("short", true)("timezone", ctx.timezone)("range", ctx.multiday() ? 1 : 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 34, "FORM.DATE_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.multiday() ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.allow_all_day ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.form.value.all_day ? 33 : -1);
    const has_mapspeople_r17 = \u0275\u0275pipeBind1(35, 36, ctx.using_mapspeople);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_levels() && (!ctx.viewing_map() || !has_mapspeople_r17) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = \u0275\u0275pipeBind1(38, 38, ctx.features)) == null ? null : tmp_21_0.length) && (!ctx.viewing_map() || !has_mapspeople_r17) && !ctx.hide_levels() ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.can_close ? 39 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  SettingsToggleComponent,
  DurationFieldComponent,
  TimeFieldComponent,
  MatCheckboxModule,
  MatCheckbox,
  DateFieldComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  IconComponent,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=space-filters.component.css.map */"] });
var SpaceFiltersComponent = _SpaceFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceFiltersComponent, [{
    type: Component,
    args: [{ selector: `space-filters`, template: `
        <div class="border-base-200 flex items-center border-b pb-2 sm:hidden">
            <div class="flex-1 pl-2">
                @if (can_close) {
                    <button
                        icon
                        matRipple
                        name="close-space-filters"
                        (click)="close()"
                    >
                        <icon>keyboard_arrow_left</icon>
                    </button>
                }
            </div>
            <h3 class="flex-2 text-center text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
            <div class="flex-1"></div>
        </div>
        <form
            class="divide-base-200 max-h-[65vh] w-full max-w-[100vw] divide-y overflow-x-hidden overflow-y-auto p-2"
            [formGroup]="form"
        >
            <section details>
                <h2 class="mb-1 text-lg font-medium">
                    {{ 'CALENDAR_EVENT.DETAILS' | translate }}
                </h2>
                <div class="flex min-w-32 flex-1 flex-col">
                    <label for="location">
                        {{ 'CALENDAR_EVENT.SPACE_LOCATION' | translate }}
                    </label>
                    @if (use_region && (regions | async)?.length) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="region"
                                [ngModel]="region"
                                (ngModelChange)="setRegion($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_REGION_ANY'
                                        | translate
                                "
                            >
                                @for (reg of regions | async; track reg) {
                                    <mat-option [value]="reg">
                                        {{ reg.display_name || reg.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!use_region && (buildings | async)?.length > 1) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="building"
                                [ngModel]="bld"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="bld?.display_name || bld?.name"
                            >
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (!hide_levels()) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="location"
                                [ngModel]="(options | async)?.zones"
                                (ngModelChange)="setOptions({ zones: $event })"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate
                                "
                                [multiple]="true"
                            >
                                @for (lvl of levels | async; track lvl) {
                                    <mat-option [value]="lvl.id">
                                        <div class="flex flex-col-reverse">
                                            @if (use_region) {
                                                <div class="text-xs opacity-30">
                                                    {{
                                                        (
                                                            lvl.parent_id
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
                </div>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-32 flex-1">
                        <label for="date">
                            {{ 'FORM.DATE' | translate }}<span>*</span>
                        </label>
                        <a-date-field
                            name="date"
                            [ngModel]="form.getRawValue().date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [to]="end_date"
                            [short]="true"
                            [timezone]="timezone"
                            [range]="multiday() ? 1 : 0"
                        >
                            {{ 'FORM.DATE_ERROR' | translate }}
                        </a-date-field>
                    </div>
                    @if (multiday()) {
                        <div class="relative min-w-32 flex-1">
                            <label for="date">
                                {{ 'FORM.DATE_END' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                [ngModel]="form.getRawValue().date_end"
                                (ngModelChange)="
                                    form.patchValue({ date_end: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [from]="start_date"
                                [to]="end_date"
                                [short]="true"
                                [timezone]="timezone"
                                [range]="2"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    }
                </div>
                <!-- All Day -->
                @if (allow_all_day) {
                    <div class="-mt-2 mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (!form.value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.getRawValue().date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        @if (multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="end-time"
                                    [ngModel]="form.value.date_end"
                                    (ngModelChange)="
                                        form.patchValue({ date_end: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="form?.getRawValue()?.date"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                        }
                        @if (!multiday()) {
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form?.getRawValue()?.date"
                                    [max]="max_duration"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                }
            </section>
            @let has_mapspeople = using_mapspeople | async;
            @if (!hide_levels() && (!viewing_map() || !has_mapspeople)) {
                <section favs class="space-y-2 pb-4">
                    <h2 class="mt-2 text-lg font-medium">
                        {{ 'COMMON.FAVOURITES' | translate }}
                    </h2>
                    <div class="flex w-full items-center">
                        <settings-toggle
                            class="w-full"
                            [name]="'COMMON.FAVOURITES_ONLY' | translate"
                            [ngModel]="(filters | async)?.show_fav"
                            (ngModelChange)="setOptions({ show_fav: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></settings-toggle>
                    </div>
                </section>
            }
            @if (
                (features | async)?.length &&
                (!viewing_map() || !has_mapspeople) &&
                !hide_levels()
            ) {
                <section features class="space-y-2">
                    <h2 class="mt-2 text-lg font-medium">Facilities</h2>
                    @for (feat of features | async; track feat) {
                        @if (!hide_features.includes(feat)) {
                            <div class="flex items-center">
                                <settings-toggle
                                    class="w-full"
                                    [name]="feature_display[feat] || feat"
                                    [ngModel]="
                                        (filters | async)?.features?.includes(
                                            feat
                                        )
                                    "
                                    (ngModelChange)="
                                        toggleFeature(feat, $event)
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                ></settings-toggle>
                            </div>
                        }
                    }
                </section>
            }
        </form>
        @if (can_close) {
            <div class="border-base-200 w-full border-t px-2 pt-2">
                <button
                    btn
                    matRipple
                    class="w-full"
                    name="apply-space-filters"
                    (click)="close()"
                >
                    {{ 'COMON.APPLY' | translate }}
                </button>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      SettingsToggleComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      MatCheckboxModule,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      ReactiveFormsModule,
      IconComponent,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;23008f9198b39e4d3c7440c4c7714beae90c2987553e297566829416db332df8;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/space-select-modal/space-filters.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 100vw;\n}\n/*# sourceMappingURL=space-filters.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceFiltersComponent, { className: "SpaceFiltersComponent", filePath: "libs/events/src/lib/space-select-modal/space-filters.component.ts", lineNumber: 334 });
})();

// libs/events/src/lib/space-select-modal/space-filters-display.component.ts
var _c05 = (a0) => ({ count: a0 });
function SpaceFiltersDisplayComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SpaceFiltersDisplayComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
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
function SpaceFiltersDisplayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location, " ");
  }
}
function SpaceFiltersDisplayComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r1.start, ctx_r1.time_format), " \u2014 ", \u0275\u0275pipeBind2(2, 5, ctx_r1.end, ctx_r1.time_format), " ");
  }
}
function SpaceFiltersDisplayComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.ALL_DAY"), " ");
  }
}
function SpaceFiltersDisplayComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function SpaceFiltersDisplayComponent_For_26_Template_button_click_3_listener() {
      const feat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFeature(feat_r4));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feat_r4);
  }
}
var _SpaceFiltersDisplayComponent = class _SpaceFiltersDisplayComponent extends AsyncHandler {
  get all_day() {
    return this._event_form.form.value.all_day;
  }
  get start() {
    return this._event_form.form.value.date;
  }
  get end() {
    const { date, duration } = this._event_form.form.value;
    return date + duration * 60 * 1e3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor() {
    super();
    this._bsheet = inject(MatBottomSheet);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = model("list");
    this.viewChange = output();
    this.options = this._event_form.options$;
    this.filters = this._event_form.filters$;
    this.location = "";
    this.editFilters = () => this._bsheet.open(SpaceFiltersComponent);
  }
  ngOnInit() {
    this.subscription("opts", this.options.subscribe(({ zones }) => this._updateLocation(zones)));
  }
  async removeFeature(feat) {
    const { features } = this._event_form.filters || {};
    this._event_form.setFilters({
      features: (features || []).filter((_) => _ !== feat)
    });
  }
  async removeAllFeatures() {
    this._event_form.setFilters({ features: [] });
  }
  _updateLocation(zone_ids = []) {
    const level = this._org.levelWithID(zone_ids);
    const item = level || this._org.building;
    this.location = item?.display_name || item?.name || "";
  }
};
_SpaceFiltersDisplayComponent.\u0275fac = function SpaceFiltersDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceFiltersDisplayComponent)();
};
_SpaceFiltersDisplayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceFiltersDisplayComponent, selectors: [["space-filters-display"]], inputs: { view: [1, "view"] }, outputs: { view: "viewChange", viewChange: "viewChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 33, consts: [["actions", "", 1, "flex", "items-center", "space-x-2", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "edit-space-filters", 1, "w-1/2", "flex-1", 3, "click"], [1, "flex", "items-center"], ["btn", "", "matRipple", "", "name", "view-space-map", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "name", "view-space-list", 1, "rounded-l-none", "rounded-r", 3, "click"], ["filters", "", 1, "flex", "w-140", "max-w-full", "flex-wrap", "items-center", "p-2", "sm:max-w-140"], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-8"], ["filter-item", "", "zone", ""], ["filter-item", "", "date", ""], ["filter-item", "", "time", ""], ["filter-item", "", "count", ""], ["filter-item", ""], ["btn", "", "matRipple", "", "name", "clear-space-filters", 1, "mr-2", "mb-2", "min-h-8", 3, "click"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "remove-space-filter", 1, "-mr-4", 3, "click"]], template: function SpaceFiltersDisplayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SpaceFiltersDisplayComponent_Template_button_click_1_listener() {
      return ctx.editFilters();
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function SpaceFiltersDisplayComponent_Template_button_click_5_listener() {
      ctx.view.set("map");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function SpaceFiltersDisplayComponent_Template_button_click_8_listener() {
      ctx.view.set("list");
      return ctx.viewChange.emit(ctx.view());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "section", 5);
    \u0275\u0275conditionalCreate(12, SpaceFiltersDisplayComponent_Conditional_12_Template, 3, 3, "button", 6);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275conditionalCreate(14, SpaceFiltersDisplayComponent_Conditional_14_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 9);
    \u0275\u0275conditionalCreate(19, SpaceFiltersDisplayComponent_Conditional_19_Template, 3, 8);
    \u0275\u0275conditionalCreate(20, SpaceFiltersDisplayComponent_Conditional_20_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, SpaceFiltersDisplayComponent_For_26_Template, 6, 1, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_10_0;
    let tmp_11_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view() !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view() !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "COMMON.LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(13, 19, ctx.filters)) == null ? null : tmp_5_0.features == null ? null : tmp_5_0.features.length) > 1 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.location ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 21, ctx.start, "mediumDate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.all_day ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.all_day ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 26, "CALENDAR_EVENT.SPACE_SELECT_SIZE_X", \u0275\u0275pureFunction1(31, _c05, ((tmp_10_0 = \u0275\u0275pipeBind1(23, 24, ctx.filters)) == null ? null : tmp_10_0.capacity) || 2)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_11_0 = \u0275\u0275pipeBind1(27, 29, ctx.filters)) == null ? null : tmp_11_0.features);
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, MatRippleModule, MatRipple, TranslatePipe, IconComponent], styles: ["\n\n[filter-item][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item][_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=space-filters-display.component.css.map */"] });
var SpaceFiltersDisplayComponent = _SpaceFiltersDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceFiltersDisplayComponent, [{
    type: Component,
    args: [{ selector: `space-filters-display`, template: `
        <section actions class="flex items-center space-x-2 p-2 sm:hidden">
            <button
                btn
                matRipple
                name="edit-space-filters"
                class="w-1/2 flex-1"
                (click)="editFilters()"
            >
                {{ 'COMMON.FILTERS' | translate }}
            </button>
            <div class="flex items-center">
                <button
                    btn
                    matRipple
                    name="view-space-map"
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view() !== 'map'"
                    (click)="view.set('map'); viewChange.emit(view())"
                >
                    {{ 'COMMON.MAP' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="view-space-list"
                    class="rounded-l-none rounded-r"
                    [class.inverse]="view() !== 'list'"
                    (click)="view.set('list'); viewChange.emit(view())"
                >
                    {{ 'COMMON.LIST' | translate }}
                </button>
            </div>
        </section>
        <section
            filters
            class="flex w-140 max-w-full flex-wrap items-center p-2 sm:max-w-140"
        >
            @if ((filters | async)?.features?.length > 1) {
                <button
                    btn
                    matRipple
                    name="clear-space-filters"
                    class="mr-2 mb-2 min-h-8"
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
                {{ start | date: 'mediumDate' }}
            </div>
            <div filter-item time>
                @if (!all_day) {
                    {{ start | date: time_format }} &mdash;
                    {{ end | date: time_format }}
                }
                @if (all_day) {
                    {{ 'COMMON.ALL_DAY' | translate }}
                }
            </div>
            <div filter-item count>
                {{
                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                        | translate: { count: (filters | async)?.capacity || 2 }
                }}
            </div>
            @for (feat of (filters | async)?.features; track feat) {
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
        </section>
    `, imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent], styles: ["/* angular:styles/component:css;7367fcdc1d41deb5f70ac612bc0908d1cf3b2ae54427a7cc03eba68710105e6a;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/space-select-modal/space-filters-display.component.ts */\n[filter-item] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 2rem;\n  font-size: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 1.25rem;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  max-width: 100%;\n  text-align: center;\n}\n[filter-item]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n[filter-item] > * + * {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=space-filters-display.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceFiltersDisplayComponent, { className: "SpaceFiltersDisplayComponent", filePath: "libs/events/src/lib/space-select-modal/space-filters-display.component.ts", lineNumber: 132 });
})();

// libs/events/src/lib/space-select-modal/space-list.component.ts
var _c06 = (a0) => ({ count: a0 });
function SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r2.images[0]);
  }
}
function SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
}
function SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("click", function SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_10_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-error", \u0275\u0275pipeBind1(1, 14, ctx_r2.room_alerts)[space_r2.id][0] === "closed")("bg-info", \u0275\u0275pipeBind1(2, 16, ctx_r2.room_alerts)[space_r2.id][0] === "info")("bg-warning", \u0275\u0275pipeBind1(3, 18, ctx_r2.room_alerts)[space_r2.id][0] === "warn")("text-error-content", \u0275\u0275pipeBind1(4, 20, ctx_r2.room_alerts)[space_r2.id][0] === "closed")("text-info-content", \u0275\u0275pipeBind1(5, 22, ctx_r2.room_alerts)[space_r2.id][0] === "info")("text-warning-content", \u0275\u0275pipeBind1(6, 24, ctx_r2.room_alerts)[space_r2.id][0] === "warn");
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 26, ctx_r2.room_alerts)[space_r2.id][1]);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 28, ctx_r2.room_alerts)[space_r2.id][0] === "warn" ? "warning" : \u0275\u0275pipeBind1(11, 30, ctx_r2.room_alerts)[space_r2.id][0] === "info" ? "info" : "close");
  }
}
function SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function SpaceListComponent_Conditional_6_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("click", function SpaceListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_3_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectSpace(space_r2));
    });
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275conditionalCreate(7, SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_7_Template, 3, 0, "div", 9);
    \u0275\u0275conditionalCreate(8, SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_8_Template, 1, 1, "img", 10)(9, SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_9_Template, 1, 0, "img", 11);
    \u0275\u0275conditionalCreate(10, SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_10_Template, 12, 32, "div", 12);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "icon", 16);
    \u0275\u0275text(17, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "icon", 16);
    \u0275\u0275text(22, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function SpaceListComponent_Conditional_6_Conditional_0_For_2_Template_button_click_26_listener() {
      const space_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(space_r2));
    });
    \u0275\u0275elementStart(27, "icon");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, SpaceListComponent_Conditional_6_Conditional_0_For_2_Conditional_29_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const space_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-info!", ctx_r2.active() === space_r2.id)("bg-error-light!", \u0275\u0275pipeBind1(1, 16, ctx_r2.room_alerts)[space_r2.id] ? \u0275\u0275pipeBind1(2, 18, ctx_r2.room_alerts)[space_r2.id][0] === "closed" : false);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pointer-events-none", \u0275\u0275pipeBind1(4, 20, ctx_r2.room_alerts)[space_r2.id] ? \u0275\u0275pipeBind1(5, 22, ctx_r2.room_alerts)[space_r2.id][0] === "closed" : false);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.selected().includes(space_r2.id) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((space_r2.images == null ? null : space_r2.images.length) ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 24, ctx_r2.room_alerts)[space_r2.id] ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name || "Meeting Space", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", space_r2.location || ((tmp_19_0 = ctx_r2.level(space_r2.zones)) == null ? null : tmp_19_0.display_name) || ((tmp_19_0 = ctx_r2.level(space_r2.zones)) == null ? null : tmp_19_0.name), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 26, "CALENDAR_EVENT.CAPACITY_COUNT", \u0275\u0275pureFunction1(29, _c06, space_r2.capacity < 1 ? 2 : space_r2.capacity)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-info", ctx_r2.isFavourite(space_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isFavourite(space_r2.id) ? "favorite" : "favorite_border");
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r2.approval ? 29 : -1);
  }
}
function SpaceListComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, SpaceListComponent_Conditional_6_Conditional_0_For_2_Template, 30, 31, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.available_spaces));
  }
}
function SpaceListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.SPACE_SELECT_EMPTY"), " ");
  }
}
function SpaceListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SpaceListComponent_Conditional_6_Conditional_0_Template, 4, 2, "ul", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, SpaceListComponent_Conditional_6_Conditional_2_Template, 4, 3, "div", 4);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.available_spaces)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function SpaceListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "CALENDAR_EVENT.SPACE_SELECT_LOADING"), " ");
  }
}
var _SpaceListComponent = class _SpaceListComponent {
  constructor() {
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this.active = input("");
    this.selected = input("");
    this.favorites = input([]);
    this.onSelect = output();
    this.toggleFav = output();
    this.loading = this._event_form.loading$;
    this.available_spaces = this._event_form.available_spaces;
    this.room_alerts = this._event_form.room_alerts;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  ngOnInit() {
    this._event_form.setView("find");
  }
  isFavourite(space_id) {
    return this.favorites().includes(space_id);
  }
  selectSpace(space) {
    this.onSelect.emit(space);
  }
};
_SpaceListComponent.\u0275fac = function SpaceListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceListComponent)();
};
_SpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceListComponent, selectors: [["space-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], favorites: [1, "favorites"] }, outputs: { onSelect: "onSelect", toggleFav: "toggleFav" }, decls: 9, vars: 9, consts: [[1, "font-bold"], ["count", "", 1, "mb-4", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm", 3, "border-info!", "bg-error-light!"], ["space", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["matRipple", "", "name", "select-space", 1, "flex", "h-full", "w-full", "items-center", "rounded-sm", 3, "click"], [1, "bg-base-200", "relative", "mr-4", "flex", "h-20", "w-20", "min-w-20", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "border-neutral", "bg-base-200", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "text-white"], ["auth", "", 1, "h-full", "object-cover", 3, "source"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "pointer-events-auto", "absolute", "bottom-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip", "bg-error", "bg-info", "bg-warning", "text-error-content", "text-info-content", "text-warning-content"], [1, "space-y-2"], [1, "mr-10", "truncate", "text-left", "font-medium"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, "truncate"], ["icon", "", "matRipple", "", "name", "toggle-space-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "bg-warning", "text-warning-content", "absolute", "right-1", "bottom-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "font-medium"], [1, "pointer-events-auto", "absolute", "bottom-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "click", "matTooltip"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function SpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SpaceListComponent_Conditional_6_Template, 3, 3);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalBranchCreate(8, SpaceListComponent_Conditional_8_Template, 5, 4, "div", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "COMMON.RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = \u0275\u0275pipeBind1(5, 5, ctx.available_spaces)) == null ? null : tmp_1_0.length) || 0, " result(s) found ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(7, 7, ctx.loading) ? 6 : 8);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective,
  MatTooltipModule,
  MatTooltip
], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=space-list.component.css.map */"] });
var SpaceListComponent = _SpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceListComponent, [{
    type: Component,
    args: [{ selector: `space-list`, template: `
        <h3 class="font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
        <p count class="mb-4 text-sm opacity-60">
            {{ (available_spaces | async)?.length || 0 }} result(s) found
        </p>
        @if (!(loading | async)) {
            @if ((available_spaces | async)?.length) {
                <ul class="list-style-none space-y-2">
                    @for (space of available_spaces | async; track space) {
                        <li
                            space
                            [class.border-info!]="active() === space.id"
                            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
                            [class.bg-error-light!]="
                                (room_alerts | async)[space.id]
                                    ? (room_alerts | async)[space.id][0] ===
                                      'closed'
                                    : false
                            "
                        >
                            <button
                                matRipple
                                name="select-space"
                                class="flex h-full w-full items-center rounded-sm"
                                (click)="selectSpace(space)"
                                [class.pointer-events-none]="
                                    (room_alerts | async)[space.id]
                                        ? (room_alerts | async)[space.id][0] ===
                                          'closed'
                                        : false
                                "
                            >
                                <div
                                    class="bg-base-200 relative mr-4 flex h-20 w-20 min-w-20 items-center justify-center overflow-hidden rounded-xl"
                                >
                                    @if (selected().includes(space.id)) {
                                        <div
                                            class="border-neutral bg-base-200 absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border text-white"
                                        >
                                            <icon>done</icon>
                                        </div>
                                    }
                                    @if (space.images?.length) {
                                        <img
                                            auth
                                            class="h-full object-cover"
                                            [source]="space.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            src="assets/icons/room-placeholder.svg"
                                        />
                                    }
                                    @if ((room_alerts | async)[space.id]) {
                                        <div
                                            class="pointer-events-auto absolute bottom-1 left-1 flex h-6 w-6 items-center justify-center rounded-full"
                                            [matTooltip]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][1]
                                            "
                                            [class.bg-error]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'closed'
                                            "
                                            [class.bg-info]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'info'
                                            "
                                            [class.bg-warning]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                            "
                                            [class.text-error-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'closed'
                                            "
                                            [class.text-info-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'info'
                                            "
                                            [class.text-warning-content]="
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                            "
                                            (click)="$event.stopPropagation()"
                                        >
                                            <icon>{{
                                                (room_alerts | async)[
                                                    space.id
                                                ][0] === 'warn'
                                                    ? 'warning'
                                                    : (room_alerts | async)[
                                                            space.id
                                                        ][0] === 'info'
                                                      ? 'info'
                                                      : 'close'
                                            }}</icon>
                                        </div>
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div
                                        class="mr-10 truncate text-left font-medium"
                                    >
                                        {{
                                            space.display_name ||
                                                space.name ||
                                                'Meeting Space'
                                        }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">place</icon>
                                        <p class="truncate">
                                            {{
                                                space.location ||
                                                    level(space.zones)
                                                        ?.display_name ||
                                                    level(space.zones)?.name
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-info">people</icon>
                                        <p>
                                            {{
                                                'CALENDAR_EVENT.CAPACITY_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  space.capacity <
                                                                  1
                                                                      ? 2
                                                                      : space.capacity,
                                                          }
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                name="toggle-space-favourite"
                                class="absolute top-1 right-1"
                                [class.text-info]="isFavourite(space.id)"
                                (click)="toggleFav.emit(space)"
                            >
                                <icon>{{
                                    isFavourite(space.id)
                                        ? 'favorite'
                                        : 'favorite_border'
                                }}</icon>
                            </button>
                            @if (space.approval) {
                                <div
                                    class="bg-warning text-warning-content absolute right-1 bottom-1 rounded-sm px-2 py-1 text-[0.625rem] font-medium"
                                >
                                    {{ 'COMMON.APPROVAL_REQUIRED' | translate }}
                                </div>
                            }
                        </li>
                    }
                </ul>
            } @else {
                <div
                    empty
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <p class="text-center opacity-30">
                        {{ 'CALENDAR_EVENT.SPACE_SELECT_EMPTY' | translate }}
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
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_LOADING' | translate }}
                    <!-- <br />
              {{ loading | async | json }} -->
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;24f101a51156c4881e8f3ec7d9a4da55f6e3c3a951b1bce21fa7949a1a188821;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/space-select-modal/space-list.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=space-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceListComponent, { className: "SpaceListComponent", filePath: "libs/events/src/lib/space-select-modal/space-list.component.ts", lineNumber: 235 });
})();

// libs/events/src/lib/space-select-modal/space-location-pin.component.ts
function SpaceLocationPinComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function SpaceLocationPinComponent_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 17);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
var _SpaceLocationPinComponent = class _SpaceLocationPinComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this.selected = this._data.selected === true;
    this.active = this._data.active === true;
  }
  get color() {
    return this.active ? "#F4511E" : this.selected ? "#D32F2F" : "#309251";
  }
};
_SpaceLocationPinComponent.\u0275fac = function SpaceLocationPinComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceLocationPinComponent)();
};
_SpaceLocationPinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceLocationPinComponent, selectors: [["space-location-pin"]], decls: 17, vars: 3, consts: [[1, "absolute", "bottom-0", "left-1/2", "-translate-x-1/2"], ["width", "44", "height", "60", "viewBox", "0 0 66 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_d_1065_10313)"], ["d", "M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z", "stroke", "#0B421D", "stroke-width", "2"], ["id", "filter0_d_1065_10313", "x", "0", "y", "0", "width", "65.3353", "height", "80.001", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", "result", "hardAlpha"], ["dy", "4"], ["stdDeviation", "4"], ["in2", "hardAlpha", "operator", "out"], ["type", "matrix", "values", "0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow_1065_10313"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow_1065_10313", "result", "shape"], [1, "absolute", "top-0", "left-0", "flex", "h-3/4", "w-full", "items-center", "justify-center"], ["class", "bg-base-100 relative z-10 h-4 w-4 rounded-full border-2 border-[#0B421D]", 4, "ngIf"], ["class", "relative z-10 text-2xl text-white", 4, "ngIf"], [1, "bg-base-100", "relative", "z-10", "h-4", "w-4", "rounded-full", "border-2", "border-[#0B421D]"], [1, "relative", "z-10", "text-2xl", "text-white"]], template: function SpaceLocationPinComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 1)(2, "g", 2);
    \u0275\u0275element(3, "path", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "defs")(5, "filter", 4);
    \u0275\u0275element(6, "feFlood", 5)(7, "feColorMatrix", 6)(8, "feOffset", 7)(9, "feGaussianBlur", 8)(10, "feComposite", 9)(11, "feColorMatrix", 10)(12, "feBlend", 11)(13, "feBlend", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275template(15, SpaceLocationPinComponent_div_15_Template, 1, 0, "div", 14)(16, SpaceLocationPinComponent_icon_16_Template, 2, 0, "icon", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275attribute("fill", ctx.color);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", !ctx.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selected);
  }
}, dependencies: [CommonModule, NgIf, IconComponent], encapsulation: 2 });
var SpaceLocationPinComponent = _SpaceLocationPinComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceLocationPinComponent, [{
    type: Component,
    args: [{ selector: "space-location-pin", template: `
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <svg
                width="44"
                height="60"
                viewBox="0 0 66 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_1065_10313)">
                    <path
                        d="M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z"
                        [attr.fill]="color"
                        stroke="#0B421D"
                        stroke-width="2"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_1065_10313"
                        x="0"
                        y="0"
                        width="65.3353"
                        height="80.001"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1065_10313"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1065_10313"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
            <div
                class="absolute top-0 left-0 flex h-3/4 w-full items-center justify-center"
            >
                <div
                    class="bg-base-100 relative z-10 h-4 w-4 rounded-full border-2 border-[#0B421D]"
                    *ngIf="!selected"
                ></div>
                <icon
                    class="relative z-10 text-2xl text-white"
                    *ngIf="selected"
                >
                    done
                </icon>
            </div>
        </div>
    `, imports: [CommonModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceLocationPinComponent, { className: "SpaceLocationPinComponent", filePath: "libs/events/src/lib/space-select-modal/space-location-pin.component.ts", lineNumber: 85 });
})();

// libs/events/src/lib/space-select-modal/space-map.component.ts
var _c07 = () => ({ controls: true });
var _c13 = () => ({ standalone: true });
function SpaceSelectMapComponent_mat_form_field_1_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, lvl_r3.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function SpaceSelectMapComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "div", 8);
    \u0275\u0275template(2, SpaceSelectMapComponent_mat_form_field_1_mat_option_3_div_2_Template, 5, 3, "div", 9);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lvl_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function SpaceSelectMapComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 4)(1, "mat-select", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SpaceSelectMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.level, $event) || (ctx_r1.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SpaceSelectMapComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOptions({ zone_ids: [$event.id] }));
    });
    \u0275\u0275template(3, SpaceSelectMapComponent_mat_form_field_1_mat_option_3_Template, 5, 3, "mat-option", 6);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.level);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c13))("placeholder", \u0275\u0275pipeBind1(2, 4, "CALENDAR_EVENT.SPACE_LEVEL_ANY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx_r1.levels));
  }
}
var _SpaceSelectMapComponent = class _SpaceSelectMapComponent extends AsyncHandler {
  get map_url() {
    return this.level?.map_id || "";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor() {
    super();
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.selected = [];
    this.is_displayed = false;
    this.onSelect = new EventEmitter();
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
    this.coordinates = void 0;
    this._seletedSpace = (s) => () => {
      this.onSelect.emit(s);
      this._change.next(Date.now());
    };
    this.level = null;
    this._change = new BehaviorSubject(0);
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, bld]) => {
      const level_list = this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld);
      const viewable_levels = level_list.filter((lvl) => !lvl.tags.includes("parking"));
      return viewable_levels.sort((a, b) => a.parent_id.localeCompare(b.parent_id) || (a.display_name || "").localeCompare(b.display_name || ""));
    }));
    this.setOptions = (o) => this._event_form.setOptions(o);
    this.features = combineLatest([
      this._event_form.available_spaces,
      this._change
    ]).pipe(debounceTime(300), map(([l]) => l.map((space) => ({
      location: space.map_id,
      content: SpaceLocationPinComponent,
      data: __spreadProps(__spreadValues({}, space), {
        active: this.active === space.id,
        selected: this.selected.includes(space.id)
      })
    }))));
    this.actions = this._event_form.available_spaces.pipe(map((l) => l.map((space) => ({
      id: space.map_id,
      action: ["touchend", "mouseup"],
      callback: this._seletedSpace(space)
    }))));
    this.styles = combineLatest([
      this._event_form.spaces$,
      this._event_form.available_spaces
    ]).pipe(map(([spaces, free_spaces]) => spaces.reduce((styles, space) => {
      const colours = this._settings.get("app.explore.colors") || {};
      const status = free_spaces.find((_) => _.id === space.id) ? "free" : "busy";
      styles[`#${space.map_id || space.id}`] = {
        fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`]
      };
      return styles;
    }, {})));
  }
  ngOnInit() {
    this.subscription("levels_update", this._event_form.options$.subscribe(({ zones }) => {
      const level = this._org.levelWithID(zones);
      if (level)
        this.level = level;
    }));
  }
  setLevel(level) {
    this.setOptions({ zone_ids: [level?.id] });
    const bld = this._org.buildings.find((_) => _.id === level?.parent_id);
    if (bld) {
      const [latitude, longitude] = (level.location || bld.location).split(",").map((_) => parseFloat(_));
      this.coordinates = { latitude, longitude };
    }
    this.level = level;
  }
  setZoom(new_zoom) {
    this.zoom = Math.max(0.5, Math.min(10, new_zoom));
  }
  resetMap() {
    this.zoom = 1;
    this.center = { x: 0.5, y: 0.5 };
  }
};
_SpaceSelectMapComponent.\u0275fac = function SpaceSelectMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceSelectMapComponent)();
};
_SpaceSelectMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceSelectMapComponent, selectors: [["space-map"]], inputs: { selected: "selected", active: "active", is_displayed: "is_displayed" }, outputs: { onSelect: "onSelect" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 17, consts: [[1, "border-base-200", "bg-base-100", "w-full", "border-b", "p-2"], ["appearance", "outline", "class", "w-full", 4, "ngIf"], [1, "relative", "w-full", "flex-1"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "options"], ["appearance", "outline", 1, "w-full"], ["name", "location", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function SpaceSelectMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, SpaceSelectMapComponent_mat_form_field_1_Template, 5, 9, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "interactive-map", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275twoWayListener("zoomChange", function SpaceSelectMapComponent_Template_interactive_map_zoomChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zoom, $event) || (ctx.zoom = $event);
      return $event;
    })("centerChange", function SpaceSelectMapComponent_Template_interactive_map_centerChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.center, $event) || (ctx.center = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(2, 8, ctx.levels)) == null ? null : tmp_0_0.length);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.map_url);
    \u0275\u0275twoWayProperty("zoom", ctx.zoom)("center", ctx.center);
    \u0275\u0275property("styles", \u0275\u0275pipeBind1(5, 10, ctx.styles))("features", \u0275\u0275pipeBind1(6, 12, ctx.features))("actions", \u0275\u0275pipeBind1(7, 14, ctx.actions))("options", \u0275\u0275pureFunction0(16, _c07));
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  AsyncPipe,
  InteractiveMapComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe,
  BuildingPipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=space-map.component.css.map */"] });
var SpaceSelectMapComponent = _SpaceSelectMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceSelectMapComponent, [{
    type: Component,
    args: [{ selector: `space-map`, template: `
        <div class="border-base-200 bg-base-100 w-full border-b p-2">
            <mat-form-field
                appearance="outline"
                class="w-full"
                *ngIf="(levels | async)?.length"
            >
                <mat-select
                    name="location"
                    [(ngModel)]="level"
                    (ngModelChange)="setOptions({ zone_ids: [$event.id] })"
                    [ngModelOptions]="{ standalone: true }"
                    [placeholder]="'CALENDAR_EVENT.SPACE_LEVEL_ANY' | translate"
                >
                    <mat-option
                        *ngFor="let lvl of levels | async"
                        [value]="lvl"
                    >
                        <div class="flex flex-col-reverse">
                            <div class="text-xs opacity-30" *ngIf="use_region">
                                {{ (lvl.parent_id | building)?.display_name }}
                                <span class="opacity-0"> - </span>
                            </div>
                            <div>
                                {{ lvl.display_name || lvl.name }}
                            </div>
                        </div>
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div class="relative w-full flex-1">
            <interactive-map
                [src]="map_url"
                [(zoom)]="zoom"
                [(center)]="center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [options]="{ controls: true }"
            ></interactive-map>
        </div>
    `, imports: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      TranslatePipe,
      BuildingPipe
    ], styles: ["/* angular:styles/component:css;3e52039fa2b2dc4b43d4f232e06fb31261aaccd73f5b7c706cba74f59e7ddeb1;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/space-select-modal/space-map.component.ts */\n:host {\n  position: relative;\n  background: rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=space-map.component.css.map */\n"] }]
  }], () => [], { selected: [{
    type: Input
  }], active: [{
    type: Input
  }], is_displayed: [{
    type: Input
  }], onSelect: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceSelectMapComponent, { className: "SpaceSelectMapComponent", filePath: "libs/events/src/lib/space-select-modal/space-map.component.ts", lineNumber: 95 });
})();

// libs/events/src/lib/space-select-modal/space-select-modal.component.ts
var _c08 = (a0) => ({ count: a0 });
function SpaceSelectModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "space-list", 24);
    \u0275\u0275listener("toggleFav", function SpaceSelectModalComponent_Conditional_19_Template_space_list_toggleFav_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavourite($event));
    })("onSelect", function SpaceSelectModalComponent_Conditional_19_Template_space_list_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id)("selected", ctx_r1.selected_ids)("favorites", ctx_r1.favorites);
  }
}
function SpaceSelectModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "space-map", 25);
    \u0275\u0275listener("onSelect", function SpaceSelectModalComponent_Conditional_20_Template_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", ctx_r1.selected_ids_list)("is_displayed", !!ctx_r1.displayed)("active", ctx_r1.displayed == null ? null : ctx_r1.displayed.id);
  }
}
function SpaceSelectModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SpaceSelectModalComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.displayed = null);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BACK"), " ");
  }
}
var _SpaceSelectModalComponent = class _SpaceSelectModalComponent {
  get selected_ids() {
    return this.selected.map((_) => _.id).join(",");
  }
  get selected_ids_list() {
    return this.selected.map((_) => _.id);
  }
  get favorites() {
    return this._settings.get("favourite_spaces") || [];
  }
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._data = inject(MAT_DIALOG_DATA);
    this.selected = [];
    this.view = "list";
    this.multiday = !!this._data.multiday;
    this.room_alerts = this._event_form.room_alerts;
    const _data = this._data;
    this.selected = [..._data.spaces || []];
    this._event_form.setOptions(_data.options);
    this._event_form.setFilters(_data.options);
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter((_) => _.id !== item.id);
    if (state)
      list.push(item);
    this.selected = list;
    if (!this._settings.get("app.events.allow_multiple_spaces") && state) {
      this.selected = [item];
      this._dialog_ref.close([item]);
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_spaces", [
        ...fav_list,
        item.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_spaces", fav_list.filter((_) => _ !== item.id));
    }
  }
};
_SpaceSelectModalComponent.\u0275fac = function SpaceSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpaceSelectModalComponent)();
};
_SpaceSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpaceSelectModalComponent, selectors: [["space-select-modal"]], decls: 46, vars: 53, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "sm:relative", "sm:h-auto", "sm:w-auto"], [1, "flex", "w-full", "items-center", "space-x-4"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-base-200"], [1, "hidden", "flex-1", "items-center", "justify-end", "sm:flex"], ["btn", "", "matRipple", "", "map", "", 1, "rounded-l", "rounded-r-none", 3, "click"], ["btn", "", "matRipple", "", "list", "", 1, "rounded-l-none", "rounded-r", 3, "click"], [1, "divide-base-200", "flex", "h-[65vh]", "min-h-[65vh]", "w-full", "flex-1", "items-center", "divide-x", "overflow-hidden", "sm:max-h-[65vh]", "sm:max-w-[95vw]"], [1, "hidden", "h-full", "max-w-[20rem]", "sm:flex", "sm:h-[65vh]", "sm:max-h-full", 3, "multiday", "hide_levels", "viewing_map"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col", "items-center", "sm:h-[65vh]"], [1, "border-base-200", "w-full", "border-b", 3, "viewChange", "view"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "active", "selected", "favorites"], [1, "h-1/2", "w-full", "flex-1", 3, "selected", "is_displayed", "active"], [1, "bg-base-100", "absolute", "z-20", "flex", "h-full", "w-full", "min-w-[20rem]", "sm:relative", "sm:h-[65vh]", "sm:max-w-[20rem]", "sm:flex-col", 3, "activeChange", "toggleFav", "close", "space", "alert", "hide_map", "active", "fav"], [1, "border-base-200", "flex", "w-full", "flex-col-reverse", "items-center", "justify-end", "border-t", "px-2", "pt-2", "pb-22", "sm:hidden"], ["btn", "", "matRipple", "", "name", "spaces-return", 1, "inverse", "w-full", "sm:hidden"], ["btn", "", "matRipple", "", "name", "save-spaces", 1, "w-full", "sm:mb-0", "sm:w-32", 3, "mat-dialog-close"], [1, "border-base-200", "hidden", "w-full", "items-center", "justify-between", "border-t", "p-2", "sm:flex"], ["btn", "", "matRipple", "", "name", "spaces-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "text-sm", "opacity-60"], ["btn", "", "matRipple", "", "name", "toggle-space", 3, "click", "disabled"], [1, "mr-1"], [1, "bg-base-200", "h-1/2", "flex-1", 3, "toggleFav", "onSelect", "active", "selected", "favorites"], [1, "h-1/2", "w-full", "flex-1", 3, "onSelect", "selected", "is_displayed", "active"], ["btn", "", "matRipple", "", "name", "spaces-return", 1, "inverse", "w-full", "sm:hidden", 3, "click"]], template: function SpaceSelectModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2)(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
    \u0275\u0275listener("click", function SpaceSelectModalComponent_Template_button_click_9_listener() {
      return ctx.view = "map";
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 5);
    \u0275\u0275listener("click", function SpaceSelectModalComponent_Template_button_click_12_listener() {
      return ctx.view = "list";
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "main", 6);
    \u0275\u0275element(16, "space-filters", 7);
    \u0275\u0275elementStart(17, "div", 8)(18, "space-filters-display", 9);
    \u0275\u0275twoWayListener("viewChange", function SpaceSelectModalComponent_Template_space_filters_display_viewChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, SpaceSelectModalComponent_Conditional_19_Template, 1, 3, "space-list", 10)(20, SpaceSelectModalComponent_Conditional_20_Template, 1, 3, "space-map", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "space-details", 12);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275listener("activeChange", function SpaceSelectModalComponent_Template_space_details_activeChange_21_listener($event) {
      return ctx.setSelected(ctx.displayed, $event);
    })("toggleFav", function SpaceSelectModalComponent_Template_space_details_toggleFav_21_listener() {
      return ctx.toggleFavourite(ctx.displayed);
    })("close", function SpaceSelectModalComponent_Template_space_details_close_21_listener() {
      return ctx.displayed = null;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "footer", 13);
    \u0275\u0275conditionalCreate(24, SpaceSelectModalComponent_Conditional_24_Template, 3, 3, "button", 14);
    \u0275\u0275elementStart(25, "button", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "footer", 16)(29, "button", 17)(30, "div", 18)(31, "icon", 19);
    \u0275\u0275text(32, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 20);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "p", 21);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 22);
    \u0275\u0275listener("click", function SpaceSelectModalComponent_Template_button_click_39_listener() {
      return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    });
    \u0275\u0275elementStart(40, "div", 18)(41, "icon", 19);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 23);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 34, "CALENDAR_EVENT.SPACE_SELECT_FIND"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", ctx.view !== "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 36, "COMMON.MAP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.view !== "list");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 38, "COMMON.LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("multiday", ctx.multiday)("hide_levels", ctx.view !== "list")("viewing_map", ctx.view === "map");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("view", ctx.view);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view === "list" ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx.displayed)("inset-0", ctx.displayed);
    \u0275\u0275property("space", ctx.displayed)("alert", \u0275\u0275pipeBind1(22, 40, ctx.room_alerts)[ctx.displayed == null ? null : ctx.displayed.id])("hide_map", ctx.view === "map")("active", ctx.selected_ids.includes(ctx.displayed == null ? null : ctx.displayed.id))("fav", ctx.displayed && ctx.favorites.includes(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.displayed ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mb-2", ctx.displayed);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 42, "COMMON.VIEW_LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", ctx.selected);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 44, "COMMON.BACK_TO_FORM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 46, "CALENDAR_EVENT.SPACE_SELECT_COUNT", \u0275\u0275pureFunction1(51, _c08, ctx.selected.length)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id));
    \u0275\u0275property("disabled", !ctx.displayed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "remove" : "add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 49, ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.id) ? "COMMON.REMOVE_FROM" : "COMMON.ADD_TO"), " ");
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  SpaceDetailsComponent,
  SpaceListComponent,
  SpaceFiltersComponent,
  SpaceFiltersDisplayComponent,
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  SpaceSelectMapComponent
], encapsulation: 2 });
var SpaceSelectModalComponent = _SpaceSelectModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpaceSelectModalComponent, [{
    type: Component,
    args: [{ selector: "space-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'CALENDAR_EVENT.SPACE_SELECT_FIND' | translate }}</h3>
                <div class="hidden flex-1 items-center justify-end sm:flex">
                    <button
                        btn
                        matRipple
                        map
                        class="rounded-l rounded-r-none"
                        [class.inverse]="view !== 'map'"
                        (click)="view = 'map'"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        list
                        class="rounded-l-none rounded-r"
                        [class.inverse]="view !== 'list'"
                        (click)="view = 'list'"
                    >
                        {{ 'COMMON.LIST' | translate }}
                    </button>
                </div>
            </header>
            <main
                class="divide-base-200 flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <space-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [multiday]="multiday"
                    [hide_levels]="view !== 'list'"
                    [viewing_map]="view === 'map'"
                ></space-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <space-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></space-filters-display>
                    @if (view === 'list') {
                        <space-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="bg-base-200 h-1/2 flex-1"
                        ></space-list>
                    } @else {
                        <space-map
                            class="h-1/2 w-full flex-1"
                            [selected]="selected_ids_list"
                            [is_displayed]="!!displayed"
                            [active]="displayed?.id"
                            (onSelect)="displayed = $event"
                        >
                        </space-map>
                    }
                </div>
                <space-details
                    [space]="displayed"
                    [alert]="(room_alerts | async)[displayed?.id]"
                    class="bg-base-100 absolute z-20 flex h-full w-full min-w-[20rem] sm:relative sm:h-[65vh] sm:max-w-[20rem] sm:flex-col"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [hide_map]="view === 'map'"
                    [active]="selected_ids.includes(displayed?.id)"
                    (activeChange)="setSelected(displayed, $event)"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                ></space-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="spaces-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-spaces"
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:mb-0 sm:w-32"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                <button
                    btn
                    matRipple
                    name="spaces-return"
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <p class="text-sm opacity-60">
                    {{
                        'CALENDAR_EVENT.SPACE_SELECT_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-space"
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
                                ) | translate
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      SpaceDetailsComponent,
      SpaceListComponent,
      SpaceFiltersComponent,
      SpaceFiltersDisplayComponent,
      IconComponent,
      MatDialogModule,
      SpaceSelectMapComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpaceSelectModalComponent, { className: "SpaceSelectModalComponent", filePath: "libs/events/src/lib/space-select-modal/space-select-modal.component.ts", lineNumber: 193 });
})();

// libs/components/src/lib/status-pill.component.ts
var _c09 = ["*"];
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
    \u0275\u0275text(0, " warning ");
  }
}
var _StatusPillComponent = class _StatusPillComponent {
  constructor() {
    this.status = input(void 0);
  }
};
_StatusPillComponent.\u0275fac = function StatusPillComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StatusPillComponent)();
};
_StatusPillComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusPillComponent, selectors: [["status-pill"]], inputs: { status: [1, "status"] }, ngContentSelectors: _c09, decls: 10, vars: 25, consts: [[1, "border-base-200", "bg-opacity-30", "flex", "items-center", "space-x-2", "rounded-full", "border", "px-2", "py-1", "text-base", "font-medium", "text-black"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"]], template: function StatusPillComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "icon", 2);
    \u0275\u0275conditionalCreate(3, StatusPillComponent_Case_3_Template, 1, 0)(4, StatusPillComponent_Case_4_Template, 1, 0)(5, StatusPillComponent_Case_5_Template, 1, 0)(6, StatusPillComponent_Case_6_Template, 1, 0)(7, StatusPillComponent_Case_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275projection(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    \u0275\u0275classProp("bg-success-light", ctx.status() === "success")("bg-warning-light", ctx.status() === "warning")("bg-error-light", ctx.status() === "error")("bg-info-light", ctx.status() === "info")("bg-base-200", ctx.status() === "neutral");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", ctx.status() === "success")("text-warning", ctx.status() === "warning")("text-error", ctx.status() === "error")("text-info", ctx.status() === "info")("text-base-content", ctx.status() === "neutral")("opacity-40", ctx.status() === "neutral");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_11_0 = ctx.status()) === "success" ? 3 : tmp_11_0 === "error" ? 4 : tmp_11_0 === "neutral" ? 5 : tmp_11_0 === "info" ? 6 : 7);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("opacity-40", ctx.status() === "neutral");
  }
}, dependencies: [IconComponent], encapsulation: 2 });
var StatusPillComponent = _StatusPillComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusPillComponent, [{
    type: Component,
    args: [{ selector: "status-pill", template: `
        <div
            class="border-base-200 bg-opacity-30 flex items-center space-x-2 rounded-full border px-2 py-1 text-base font-medium text-black"
            [class.bg-success-light]="status() === 'success'"
            [class.bg-warning-light]="status() === 'warning'"
            [class.bg-error-light]="status() === 'error'"
            [class.bg-info-light]="status() === 'info'"
            [class.bg-base-200]="status() === 'neutral'"
        >
            <div
                class="flex h-5 w-5 items-center justify-center rounded-full"
                [class.text-success]="status() === 'success'"
                [class.text-warning]="status() === 'warning'"
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusPillComponent, { className: "StatusPillComponent", filePath: "libs/components/src/lib/status-pill.component.ts", lineNumber: 54 });
})();

// libs/events/src/lib/event-details-modal.component.ts
var _c010 = (a0) => ({ time: a0 });
var _c14 = (a0, a1) => ({ count: a0, cost: a1 });
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
    \u0275\u0275element(1, "image-carousel", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", (tmp_2_0 = ctx_r1.event()) == null ? null : tmp_2_0.system == null ? null : tmp_2_0.system.images);
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
    \u0275\u0275property("matTooltip", ctx_r1.recurr_tooltip);
  }
}
function EventDetailsModalComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_15_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkin());
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "icon", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
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
    \u0275\u0275elementStart(0, "button", 45)(1, "icon");
    \u0275\u0275text(2, "more_horiz");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const menu_r4 = \u0275\u0275reference(95);
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
  }
}
function EventDetailsModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, EventDetailsModalComponent_Conditional_15_Conditional_1_Template, 7, 10, "button", 44);
    \u0275\u0275conditionalCreate(2, EventDetailsModalComponent_Conditional_15_Conditional_2_Template, 3, 1, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.room_status() && ((tmp_2_0 = ctx_r1.event()) == null ? null : tmp_2_0.can_check_in) && ctx_r1.room_status() !== "free" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_edit ? 2 : -1);
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
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx_r1.level()) == null ? null : tmp_2_0.display_name) || ((tmp_2_0 = ctx_r1.level()) == null ? null : tmp_2_0.name), ", ");
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
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ((tmp_2_0 = ctx_r1.building()) == null ? null : tmp_2_0.display_name) || ((tmp_2_0 = ctx_r1.building()) == null ? null : tmp_2_0.name), ", ", (tmp_2_0 = ctx_r1.building()) == null ? null : tmp_2_0.address, " ");
  }
}
function EventDetailsModalComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 50);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "user");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, \u0275\u0275pipeBind1(5, 1, ctx_r1.event().creator))) == null ? null : tmp_2_0.name) || ctx_r1.event().creator, " ");
  }
}
function EventDetailsModalComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 51);
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
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "a-user-avatar", 29);
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r5 == null ? null : user_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", user_r5.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.email, " ");
  }
}
function EventDetailsModalComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventDetailsModalComponent_For_74_Conditional_0_Template, 7, 4, "div", 52);
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(user_r5.email !== ctx_r1.event().host ? 0 : -1);
  }
}
function EventDetailsModalComponent_Conditional_85_For_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r7.caterer, " ");
  }
}
function EventDetailsModalComponent_Conditional_85_For_6_For_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.optionList(item_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c2, (item_r8.option_list == null ? null : item_r8.option_list.length) || "0")), " ");
  }
}
function EventDetailsModalComponent_Conditional_85_For_6_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_85_For_6_For_18_Conditional_4_Template, 3, 7, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 68);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name || "Item");
    \u0275\u0275advance();
    \u0275\u0275conditional((item_r8.option_list == null ? null : item_r8.option_list.length) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r8.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 4, item_r8.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
  }
}
function EventDetailsModalComponent_Conditional_85_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 59)(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, EventDetailsModalComponent_Conditional_85_For_6_Conditional_12_Template, 2, 1, "div", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 62);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_85_For_6_Template_button_click_13_listener() {
      const order_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.show_order[order_r7.id] = !ctx_r1.show_order[order_r7.id]);
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 63);
    \u0275\u0275repeaterCreate(17, EventDetailsModalComponent_Conditional_85_For_6_For_18_Template, 10, 7, "div", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 9, "CALENDAR_EVENT.CATERING_ORDER_AT", \u0275\u0275pureFunction1(18, _c010, \u0275\u0275pipeBind2(5, 6, order_r7.deliver_at, "MMM d, " + ctx_r1.time_format))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 15, "CALENDAR_EVENT.CATERING_ORDER_DETAILS", \u0275\u0275pureFunction2(20, _c14, order_r7.item_count, \u0275\u0275pipeBind2(10, 12, order_r7.total_cost / 100, ctx_r1.currency_code))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(order_r7.caterer ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r1.show_order[order_r7.id] ? "Hide order items" : "Show order items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_order[order_r7.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.print || ctx_r1.show_order[order_r7.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(order_r7.items);
  }
}
function EventDetailsModalComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275repeaterCreate(5, EventDetailsModalComponent_Conditional_85_For_6_Template, 19, 23, "div", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CALENDAR_EVENT.CATERING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.event().valid_catering);
  }
}
function EventDetailsModalComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 34);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_2_0 = ctx_r1.level()) == null ? null : tmp_2_0.map_id)("features", ctx_r1.features())("options", \u0275\u0275pureFunction0(3, _c3));
  }
}
function EventDetailsModalComponent_Conditional_88_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 70);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.body()) || ctx_r1.empty_notes, \u0275\u0275sanitizeHtml);
  }
}
function EventDetailsModalComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_88_Conditional_4_Template, 2, 3, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "CALENDAR_EVENT.NOTES_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.raw_body() ? 4 : -1);
  }
}
function EventDetailsModalComponent_Conditional_89_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r11.quantity, " ");
  }
}
function EventDetailsModalComponent_Conditional_89_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "button", 73);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_89_For_6_Template_button_click_1_listener() {
      const request_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.show_request[request_r10.id] = !ctx_r1.show_request[request_r10.id]);
    });
    \u0275\u0275elementStart(2, "div", 74)(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 75)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 76)(11, "icon", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 63);
    \u0275\u0275repeaterCreate(14, EventDetailsModalComponent_Conditional_89_For_6_For_15_Template, 6, 2, "div", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 20, "CALENDAR_EVENT.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(23, _c010, \u0275\u0275pipeBind2(5, 17, request_r10.deliver_at, "MMM d, " + ctx_r1.time_format))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r10.state === "approved")("text-success-content", request_r10.state === "approved")("bg-warning", request_r10.state !== "approved" && request_r10.state !== "rejected")("text-warning-content", request_r10.state !== "approved" && request_r10.state !== "rejected")("bg-error", request_r10.state === "rejected")("text-error-content", request_r10.state === "rejected");
    \u0275\u0275property("matTooltip", request_r10.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r10.state === "approved" ? "done" : request_r10.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_request[request_r10.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r1.print || ctx_r1.show_request[request_r10.id] ? "show" : "hide");
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r10.items);
  }
}
function EventDetailsModalComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275repeaterCreate(5, EventDetailsModalComponent_Conditional_89_For_6_Template, 16, 25, "div", 72, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "CALENDAR_EVENT.ASSETS_HEADER"), " (", ((tmp_2_0 = ctx_r1.event().valid_assets) == null ? null : tmp_2_0.length) || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.event().valid_assets);
  }
}
function EventDetailsModalComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "attendee-list", 77);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_93_Template_attendee_list_click_1_listener() {
      \u0275\u0275restoreView(_r12);
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
function EventDetailsModalComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_96_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit ? ctx_r1.edit(ctx_r1.event()) : "");
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "icon", 48);
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
function EventDetailsModalComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_104_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printEvent());
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "icon", 48);
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
function EventDetailsModalComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_105_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove ? ctx_r1.remove(ctx_r1.event(), true) : "");
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "icon", 41);
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
function EventDetailsModalComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function EventDetailsModalComponent_For_107_Template_button_click_0_listener() {
      const act_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.action.emit(act_r17.id));
    });
    \u0275\u0275elementStart(1, "div", 40)(2, "icon", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const act_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r17.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r17.name);
  }
}
var EMPTY_ACTIONS = [];
var _EventDetailsModalComponent = class _EventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._space_pipe = inject(SpacePipe);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.action = output();
    this.edit = this._data.edit_fn;
    this.remove = this._data.remove_fn;
    this.empty_notes = '<div class="p-4 w-full rounded-md bg-base-200 text-center"><span class="opacity-30">No notes</span></div>';
    this.show_order = {};
    this.show_request = {};
    this.room_status = signal("");
    this.hide_map = signal(false);
    this.hide_edit = signal(false);
    this.raw_body = signal("");
    this.print = signal(false);
    this.show_attendees = signal(false);
    this.event = signal(this._data.event);
    this.no_edit_message = signal("Editing bookings long than \n a day is not available");
    this.features = computed(() => [
      {
        location: this.space().map_id || this.event()?.system?.map_id,
        content: MapPinComponent
      }
    ]);
    this.has_catering = computed(() => this.event()?.ext("catering")?.length > 0);
    this.has_assets = computed(() => !!this.event()?.linked_bookings?.find((_) => _.booking_type === "asset-request"));
    this.can_edit = computed(() => {
      return true;
    });
    this.space = signal(new Space());
    this.level = computed(() => this._org.levelWithID(this.space().zones) || new BuildingLevel());
    this.building = computed(() => this._org.buildings.find((b) => this.space().zones.includes(b.id)) || new Building());
    this.timezone = computed(() => settingSignal("events.use_building_timezone") ? this._org.building.timezone : "");
    this.tz = computed(() => {
      const tz = this.timezone();
      if (!tz)
        return "";
      const tz_offset = getTimezoneOffsetString(tz);
      return tz_offset === this._local_tz ? "" : tz_offset;
    });
    this.tz_date_same = computed(() => {
      return !this._date.transform(this.event().date, "yyyy-MM-dd", this.tz()).localeCompare(this._date.transform(this.event().date, "yyyy-MM-dd"));
    });
    this.accept_count = computed(() => this.event().attendees.reduce((count, user) => count += user.response_status === "accepted" ? 1 : 0, 0));
    this.declined_count = computed(() => this.event().attendees.reduce((count, user) => count += user.response_status === "declined" ? 1 : 0, 0));
    this.pending_count = computed(() => this.event().attendees.reduce((count, user) => count += user.response_status === "tentative" || user.response_status === "needsAction" ? 1 : 0, 0));
    this.body = computed(() => (this.event().body || "").replace(/\\n\\n\[ID\|.*\]/gm, ""));
    this.allow_edit = computed(() => !settingSignal("events.booking_unavailable")());
    this.custom_actions = settingSignal("events.custom_actions", EMPTY_ACTIONS);
    this.event_status = computed(() => {
      if (this.event()?.state === "done")
        return "neutral";
      if (this.event()?.status === "approved")
        return "success";
      if (this.event()?.status === "tentative")
        return "warning";
      if (this.event()?.status === "declined")
        return "error";
      return "warning";
    });
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.period = computed(() => this.event()?.all_day ? "All Day" : this.formattedTime());
    this.period_tz = computed(() => this.formattedTime(this.tz()));
    this._date = new DatePipe("en");
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
  get time_format() {
    return this._settings.time_format;
  }
  get currency_code() {
    return this._org.currency_code;
  }
  ngOnInit() {
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
    const start_time = this._date.transform(date, this.time_format, tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format, tz);
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
  get recurr_tooltip() {
    return formatRecurrence(fromEventRecurrence(this.event().recurrence)) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
  }
  async checkin() {
    const mod = $h(this.space()?.id, "Bookings");
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
    const metadata = await lastValueFrom(getEventMetadata(this.event().id, this.space().id));
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
      maxWidth: "95vw",
      maxHeight: "95vh",
      data: { item: this.space }
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
};
_EventDetailsModalComponent.\u0275fac = function EventDetailsModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventDetailsModalComponent)();
};
_EventDetailsModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailsModalComponent, selectors: [["event-details-modal"]], outputs: { action: "action" }, features: [\u0275\u0275ProvidersFeature([SpacePipe])], decls: 108, vars: 65, consts: [["menu", "matMenu"], [1, "bg-base-100", "sm:bg-base-200", "h-screen", "w-screen", "space-y-2", "overflow-auto", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-204", "sm:rounded-sm", "print:min-h-screen", "print:w-screen", "print:overflow-visible"], [1, "border-base-200", "bg-base-100", "max-h-screen", "flex-col", "items-center", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16", "print:border-none"], ["binding", "", "mod", "Bookings", "bind", "status", 3, "modelChange", "model", "sys"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "bg-neutral", "h-64", "w-full", "overflow-hidden", "sm:rounded-b", "print:hidden"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2", "print:hidden"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "border-base-200", "sm:bg-base-100", "min-w-1/3", "grow-3", "space-y-2", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "mt-2", "mb-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], [1, "border-base-200", "sm:bg-base-100", "mt-4", "min-w-1/3", "grow-3", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "border-base-200", "mx-3", "flex", "items-center", "justify-between", "border-t", "sm:border-none"], [1, "text-lg", "font-medium"], ["matRipple", "", "show-attendees", "", 1, "clear", "text-xs", "underline", "print:hidden", 3, "click"], [1, "flex", "items-center", "p-1"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-1"], [1, "text-lg"], [1, "text-sm", "uppercase"], [1, "hidden", "print:block"], [1, "border-base-200", "mx-3", "mt-2", "border-t", "pt-2", "text-lg", "font-medium"], ["host", "", 1, "flex", "items-center", "space-x-2", "px-2"], [3, "user"], [1, "w-px", "flex-1", "text-sm"], [1, "w-full", "truncate"], [1, "w-full", "truncate", "opacity-60", 3, "title"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:mt-2", "sm:h-48", "sm:w-[16rem]", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "bg-neutral", "absolute", "top-2", "left-2", "text-white", "print:hidden"], [1, "absolute", "inset-0", "z-50"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "matTooltip", "disabled"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2", "text-base"], [1, "text-error", "text-2xl"], ["mat-menu-item", ""], [1, "h-64", "w-full", 3, "images"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", 3, "bg-success", "border-none", "pointer-events-none"], ["icon", "", "matRipple", "", 1, "bg-secondary", "h-12", "w-12", "rounded-sm", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "pr-4"], ["matTooltip", "Created By"], ["matTooltip", "Visibility"], ["attendee", "", 1, "flex", "items-center", "space-x-2", "px-2"], [1, "mx-3", "my-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["order", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], [1, "flex", "items-center", "space-x-2", "p-3"], [1, "flex-1"], [1, "text-sm"], [1, "flex", "items-center", "space-x-2"], [1, "text-xs", "opacity-60"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", 1, "print:hidden", 3, "click", "matTooltip"], [1, "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "ml-4", "text-xs", "font-normal", "opacity-60", 3, "matTooltip"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "border-base-200", "mx-3", "border-t", "text-lg", "font-medium", "sm:border-none"], ["notes", "", 1, "mx-4", "max-w-full", "overflow-hidden", 3, "innerHTML"], [1, "mx-3", "pt-2", "text-lg", "font-medium"], ["request", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "print:hidden", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "print:hidden"], [3, "click", "list", "host"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click", "matTooltip", "disabled"]], template: function EventDetailsModalComponent_Template(rf, ctx) {
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
    \u0275\u0275conditionalCreate(43, EventDetailsModalComponent_Conditional_43_Template, 7, 5, "div", 17);
    \u0275\u0275conditionalCreate(44, EventDetailsModalComponent_Conditional_44_Template, 7, 5, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18)(46, "div", 19)(47, "h3", 20);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 21);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_attendees.set(true));
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
    \u0275\u0275element(79, "a-user-avatar", 29);
    \u0275\u0275elementStart(80, "div", 30)(81, "div", 31);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 32);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(85, EventDetailsModalComponent_Conditional_85_Template, 7, 3, "div", 18);
    \u0275\u0275elementStart(86, "button", 33);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.viewLocation());
    });
    \u0275\u0275conditionalCreate(87, EventDetailsModalComponent_Conditional_87_Template, 1, 4, "interactive-map", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(88, EventDetailsModalComponent_Conditional_88_Template, 5, 4, "div", 18);
    \u0275\u0275conditionalCreate(89, EventDetailsModalComponent_Conditional_89_Template, 7, 4, "div", 18);
    \u0275\u0275elementStart(90, "button", 35)(91, "icon");
    \u0275\u0275text(92, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(93, EventDetailsModalComponent_Conditional_93_Template, 2, 2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "mat-menu", 37, 0);
    \u0275\u0275conditionalCreate(96, EventDetailsModalComponent_Conditional_96_Template, 7, 5, "button", 38);
    \u0275\u0275elementStart(97, "button", 39);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.remove ? ctx.remove(ctx.event(), false) : "");
    });
    \u0275\u0275elementStart(98, "div", 40)(99, "icon", 41);
    \u0275\u0275text(100, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div");
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(104, EventDetailsModalComponent_Conditional_104_Template, 7, 3, "button", 42);
    \u0275\u0275conditionalCreate(105, EventDetailsModalComponent_Conditional_105_Template, 7, 3, "button", 42);
    \u0275\u0275repeaterCreate(106, EventDetailsModalComponent_For_107_Template, 6, 2, "button", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_19_0;
    let tmp_34_0;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("model", ctx.room_status);
    \u0275\u0275property("sys", (tmp_2_0 = ctx.space()) == null ? null : tmp_2_0.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_3_0 = ctx.event()) == null ? null : tmp_3_0.system == null ? null : tmp_3_0.system.images == null ? null : tmp_3_0.system.images.length) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx.event()) == null ? null : tmp_4_0.system == null ? null : tmp_4_0.system.images == null ? null : tmp_4_0.system.images.length) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("pt-4", !((tmp_5_0 = ctx.event()) == null ? null : tmp_5_0.system == null ? null : tmp_5_0.system.images == null ? null : tmp_5_0.system.images.length));
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 46, "CALENDAR_EVENT.DETAILS"), " ");
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
    \u0275\u0275textInterpolate1(" ", ((tmp_19_0 = ctx.event()) == null ? null : tmp_19_0.system == null ? null : tmp_19_0.system.display_name) || ((tmp_19_0 = ctx.event()) == null ? null : tmp_19_0.system == null ? null : tmp_19_0.system.name) || ((tmp_19_0 = ctx.event()) == null ? null : tmp_19_0.location), " ");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 55, "COMMON.TRUE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.declined_count() || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 57, "COMMON.FALSE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.pending_count() || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 59, "COMMON.PENDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.event().attendees);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 61, "FORM.HOST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("user", ctx.event().organiser);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_34_0 = ctx.event().organiser) == null ? null : tmp_34_0.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx.event().host);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.event().host, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.has_catering() ? 85 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_map() ? 87 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.raw_body() ? 88 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.has_assets() ? 89 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.show_attendees() ? 93 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.hide_edit() ? 96 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 63, "CALENDAR_EVENT.ACTION_DELETE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.is_concierge ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.event().recurring_event_id ? 105 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.custom_actions());
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  UpperCasePipe,
  CurrencyPipe,
  DatePipe,
  TranslatePipe,
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
  SanitizePipe,
  InteractiveMapComponent,
  UserAvatarComponent,
  StatusPillComponent,
  ImageCarouselComponent,
  BindingDirective,
  MatTooltipModule,
  MatTooltip,
  UserPipe
], encapsulation: 2, data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var EventDetailsModalComponent = _EventDetailsModalComponent;
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
                            <icon class="text-2xl" [matTooltip]="recurr_tooltip"
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
                            @if (allow_edit) {
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
                        {{ 'CALENDAR_EVENT.DETAILS' | translate }}
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
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Created By">person</icon>
                            <div>
                                {{
                                    (event().creator | user | async)?.name ||
                                        event().creator
                                }}
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
                                {{ 'COMMON.TRUE' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ declined_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.FALSE' | translate }}
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
                        <a-user-avatar
                            [user]="event().organiser"
                        ></a-user-avatar>
                        <div class="w-px flex-1 text-sm">
                            <div class="w-full truncate">
                                {{ event().organiser?.name }}
                            </div>
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
                            {{ 'CALENDAR_EVENT.CATERING' | translate }}
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
                                                                                time_format,
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
                                                show_order[order.id]
                                                    ? 'Hide order items'
                                                    : 'Show order items'
                                            "
                                            (click)="
                                                show_order[order.id] =
                                                    !show_order[order.id]
                                            "
                                        >
                                            <icon>
                                                {{
                                                    show_order[order.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </button>
                                    </div>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            print || show_order[order.id]
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
                            {{ 'CALENDAR_EVENT.NOTES_HEADER' | translate }}
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
                            {{ 'CALENDAR_EVENT.ASSETS_HEADER' | translate }} ({{
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
                                        (click)="
                                            show_request[request.id] =
                                                !show_request[request.id]
                                        "
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
                                                                                time_format,
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
                                                    show_request[request.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            print || show_request[request.id]
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
                    matRipple
                    mat-dialog-close
                    class="bg-neutral absolute top-2 left-2 text-white print:hidden"
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
                <button
                    mat-menu-item
                    (click)="remove ? remove(event(), false) : ''"
                >
                    <div class="flex items-center space-x-2 pr-2 text-base">
                        <icon class="text-error text-2xl">delete</icon>
                        <div>
                            {{ 'CALENDAR_EVENT.ACTION_DELETE' | translate }}
                        </div>
                    </div>
                </button>
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
                @if (event().recurring_event_id) {
                    <button
                        mat-menu-item
                        (click)="remove ? remove(event(), true) : ''"
                    >
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailsModalComponent, { className: "EventDetailsModalComponent", filePath: "libs/events/src/lib/event-details-modal.component.ts", lineNumber: 762 });
})();

// libs/events/src/lib/event-card.component.ts
var _c011 = () => ["./"];
var _c15 = (a0) => ({ event: a0 });
var _c22 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id || $item.email;
function EventCardComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.day, ",\xA0");
  }
}
function EventCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 0);
    \u0275\u0275conditionalCreate(1, EventCardComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_day() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, (tmp_2_0 = ctx_r0.event()) == null ? null : tmp_2_0.date, ctx_r0.time_format), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(6, 6, (tmp_3_0 = ctx_r0.event()) == null ? null : tmp_3_0.date, "zzzz"), ")");
  }
}
function EventCardComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.period_tz, " ");
  }
}
function EventCardComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip);
  }
}
function EventCardComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon");
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CALENDAR_EVENT.CATERED"), " ");
  }
}
function EventCardComponent_Conditional_1_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "a-user-avatar", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3);
  }
}
function EventCardComponent_Conditional_1_Conditional_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" +", ((tmp_3_0 = ctx_r0.event()) == null ? null : tmp_3_0.attendees == null ? null : tmp_3_0.attendees.length) - 5, " ");
  }
}
function EventCardComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, EventCardComponent_Conditional_1_Conditional_32_For_2_Template, 2, 1, "div", 19, _forTrack0);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275conditionalCreate(4, EventCardComponent_Conditional_1_Conditional_32_Conditional_4_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 1, (tmp_2_0 = ctx_r0.event()) == null ? null : tmp_2_0.attendees, 0, ((tmp_2_0 = ctx_r0.event()) == null ? null : tmp_2_0.attendees == null ? null : tmp_2_0.attendees.length) === 6 ? 6 : 5));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r0.event()) == null ? null : tmp_3_0.attendees == null ? null : tmp_3_0.attendees.length) > 6 ? 4 : -1);
  }
}
function EventCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function EventCardComponent_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "h4", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "status-pill", 8)(6, "div", 9)(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, EventCardComponent_Conditional_1_Conditional_9_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, EventCardComponent_Conditional_1_Conditional_10_Template, 2, 1, "icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "div", 13)(13, "icon", 14);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275text(15, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "icon");
    \u0275\u0275text(20, "person_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, EventCardComponent_Conditional_1_Conditional_23_Template, 6, 3, "div", 13);
    \u0275\u0275elementStart(24, "div", 13)(25, "icon");
    \u0275\u0275text(26, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 16);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "icon", 17);
    \u0275\u0275text(31, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, EventCardComponent_Conditional_1_Conditional_32_Template, 5, 5, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c011))("queryParams", \u0275\u0275pureFunction1(21, _c15, (tmp_2_0 = ctx_r0.event()) == null ? null : tmp_2_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.event()) == null ? null : tmp_3_0.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status);
    \u0275\u0275advance();
    \u0275\u0275classProp("pr-4", ctx_r0.timezone && ctx_r0.tz);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.period);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.timezone && ctx_r0.tz ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.event().recurring_event_id ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 15, "RESOURCE.ROOM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.location(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = ctx_r0.event()) == null ? null : tmp_11_0.organiser == null ? null : tmp_11_0.organiser.name) || ((tmp_11_0 = ctx_r0.event()) == null ? null : tmp_11_0.organiser == null ? null : tmp_11_0.organiser.email), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r0.event()) == null ? null : (tmp_12_0 = tmp_12_0.ext("catering")) == null ? null : tmp_12_0.length) ? 23 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 17, "CALENDAR_EVENT.ATTENDEE_COUNT", \u0275\u0275pureFunction1(23, _c22, ((tmp_13_0 = ctx_r0.event()) == null ? null : tmp_13_0.attendees == null ? null : tmp_13_0.attendees.length) || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_14_0 = ctx_r0.event()) == null ? null : tmp_14_0.attendees == null ? null : tmp_14_0.attendees.length) ? 32 : -1);
  }
}
var _EventCardComponent = class _EventCardComponent extends AsyncHandler {
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get period() {
    if (this.event()?.all_day)
      return i18n("COMMON.ALL_DAY");
    return this.formattedTime();
  }
  get period_tz() {
    return this.formattedTime(this.tz);
  }
  get recurr_tooltip() {
    return formatRecurrence(fromEventRecurrence(this.event().recurrence)) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
  }
  formattedTime(tz) {
    const date = this.event().date;
    const date_end = this.event().date_end;
    const all_day = this.event().all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format, tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format, tz);
    const is_multiday = this.event()?.duration > 24 * 60;
    if (is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return i18n("COMMON.ALL_DAY");
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  get status() {
    const event = this.event();
    if (event?.state === "done")
      return "neutral";
    if (event?.status === "approved")
      return "success";
    if (event?.status === "tentative")
      return "warning";
    if (event?.status === "declined")
      return "error";
    return "warning";
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._space_pipe = inject(SpacePipe);
    this._settings = inject(SettingsService);
    this.event = input(void 0);
    this.show_day = input(false);
    this.edit_fn = input((d) => null);
    this.remove_fn = input((d, t) => null);
    this.location = signal("");
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._date = new DatePipe("en");
  }
  async ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("event")) {
        this.event()?.id === params.get("event") ? this.viewDetails() : "";
      }
    }));
    this.location.set(await this.getLocationString());
  }
  async ngOnChanges(changes) {
    if (changes.event && this.event()) {
      this.location.set(await this.getLocationString());
    }
  }
  get day() {
    const date = this.event()?.date || Date.now();
    const is_today = isSameDay(Date.now(), date);
    return `${is_today ? i18n("COMMON.TODAY") : format(date, "EEEE")}`;
  }
  async getLocationString() {
    const event = this.event();
    const system = event?.resources[0] || event?.system || event?.space || {};
    const space = await this._space_pipe.transform(system.id || system.email);
    const zone_list = space?.zones || [];
    const zone = this._org.levelWithID(zone_list) || this._org.buildings.find((_) => zone_list.includes(_.id));
    return `${zone ? (zone.display_name || zone.name) + ", " : ""} ${space?.display_name || space?.name}`;
  }
  viewDetails() {
    if (!this.event())
      return;
    this.timeout("open", () => {
      this._dialog.closeAll();
      const event = this.event();
      if (event.extension_data?.shared_event) {
        this._dialog.open(GroupEventDetailsModalComponent, {
          data: {
            event,
            edit_fn: this.edit_fn(),
            remove_fn: this.remove_fn(),
            concierge: false
          }
        });
        return;
      }
      this._dialog.open(EventDetailsModalComponent, {
        data: {
          event,
          edit_fn: this.edit_fn(),
          remove_fn: this.remove_fn()
        }
      });
    });
  }
};
_EventCardComponent.\u0275fac = function EventCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventCardComponent)();
};
_EventCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCardComponent, selectors: [["event-card"]], inputs: { event: [1, "event"], show_day: [1, "show_day"], edit_fn: [1, "edit_fn"], remove_fn: [1, "remove_fn"] }, features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["date", "", 1, "mb-2", "flex", "items-center"], ["name", "view-event-details", 1, "relative", "w-full", "cursor-pointer", 3, "routerLink", "queryParams"], ["day", ""], [1, "px-2", "text-xs"], ["name", "view-event-details", 1, "relative", "w-full", "cursor-pointer", 3, "click", "routerLink", "queryParams"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-xl", "border", "py-4", "shadow-sm"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-2xl", 3, "matTooltip"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "items-center", "px-4"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "mx-2", "truncate"], [1, "mx-2"], [1, "absolute", "top-1/2", "right-1", "-translate-y-1/2", "text-4xl"], [1, "absolute", "right-2", "bottom-2", "flex", "items-center", "pr-4", "text-sm", "sm:top-2", "sm:bottom-auto", "sm:text-base"], [1, "z-10", "h-10", "w-6"], [1, "h-10", "w-6"], [3, "user"], [1, "border-base-100", "bg-secondary", "text-secondary-content", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2"]], template: function EventCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventCardComponent_Conditional_0_Template, 7, 9, "h4", 0);
    \u0275\u0275conditionalCreate(1, EventCardComponent_Conditional_1_Template, 33, 25, "a", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.event() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.event() ? 1 : -1);
  }
}, dependencies: [
  CommonModule,
  SlicePipe,
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  RouterModule,
  RouterLink,
  MatTooltipModule,
  MatTooltip,
  StatusPillComponent,
  IconComponent,
  UserAvatarComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=event-card.component.css.map */"] });
var EventCardComponent = _EventCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCardComponent, [{
    type: Component,
    args: [{ selector: "event-card", template: `
        @if (event()) {
            <h4 class="mb-2 flex items-center" date>
                @if (show_day()) {
                    <span day>{{ day }},&nbsp;</span>
                }
                {{ event()?.date | date: time_format }}
                <span class="px-2 text-xs"
                    >({{ event()?.date | date: 'zzzz' }})</span
                >
            </h4>
        }
        @if (event()) {
            <a
                name="view-event-details"
                class="relative w-full cursor-pointer"
                [routerLink]="['./']"
                [queryParams]="{ event: event()?.id }"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                >
                    <h4 class="px-4 text-lg">{{ event()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status">
                            <div
                                class="flex flex-col leading-tight"
                                [class.pr-4]="timezone && tz"
                            >
                                <div>{{ period }}</div>
                                @if (timezone && tz) {
                                    <div class="text-xs opacity-30">
                                        {{ period_tz }}
                                    </div>
                                }
                            </div>
                        </status-pill>
                        @if (event().recurring_event_id) {
                            <icon class="text-2xl" [matTooltip]="recurr_tooltip"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex items-center px-4">
                            <icon
                                [matTooltip]="'RESOURCE.ROOM' | translate"
                                matTooltipPosition="right"
                                >meeting_room</icon
                            >
                            <div class="mx-2 truncate">
                                {{ location() }}
                            </div>
                        </div>
                        <div class="flex items-center px-4">
                            <icon>person_outline</icon>
                            <div class="mx-2">
                                {{
                                    event()?.organiser?.name ||
                                        event()?.organiser?.email
                                }}
                            </div>
                        </div>
                        @if (event()?.ext('catering')?.length) {
                            <div class="flex items-center px-4">
                                <icon>restaurant</icon>
                                <div class="mx-2">
                                    {{ 'CALENDAR_EVENT.CATERED' | translate }}
                                </div>
                            </div>
                        }
                        <div class="flex items-center px-4">
                            <icon>people</icon>
                            <div class="mx-2">
                                {{
                                    'CALENDAR_EVENT.ATTENDEE_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      event()?.attendees
                                                          ?.length || 0,
                                              }
                                }}
                            </div>
                        </div>
                    </div>
                    <icon
                        class="absolute top-1/2 right-1 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (event()?.attendees?.length) {
                        <div
                            class="absolute right-2 bottom-2 flex items-center pr-4 text-sm sm:top-2 sm:bottom-auto sm:text-base"
                        >
                            @for (
                                user of event()?.attendees
                                    | slice
                                        : 0
                                        : (event()?.attendees?.length === 6
                                              ? 6
                                              : 5);
                                track user.id || user.email
                            ) {
                                <div class="z-10 h-10 w-6">
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                </div>
                            }
                            @if (event()?.attendees?.length > 6) {
                                <div class="h-10 w-6">
                                    <div
                                        class="border-base-100 bg-secondary text-secondary-content flex h-10 w-10 items-center justify-center rounded-full border-2"
                                    >
                                        +{{ event()?.attendees?.length - 5 }}
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </a>
        }
    `, providers: [SpacePipe], imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      RouterModule,
      MatTooltipModule,
      StatusPillComponent,
      IconComponent,
      UserAvatarComponent
    ], styles: ["/* angular:styles/component:css;90c7ea3359a529ac871b05907f35a5977bf5db6008218c40ad219ab280ccfa5d;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event-card.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=event-card.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCardComponent, { className: "EventCardComponent", filePath: "libs/events/src/lib/event-card.component.ts", lineNumber: 185 });
})();

// libs/events/src/lib/group-event-card.component.ts
var _c012 = (a0) => ({ count: a0 });
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
    let tmp_1_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.event().images) == null ? null : tmp_1_0.length) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 11, ctx_r1.event().date, "EEE d MMM"), ", ", \u0275\u0275pipeBind2(7, 14, ctx_r1.event().date, ctx_r1.time_format), " ");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 17, "CALENDAR_EVENT.GROUP_ATTENDING", \u0275\u0275pureFunction1(20, _c012, ((tmp_10_0 = ctx_r1.event().attendees) == null ? null : tmp_10_0.length) || "0")), " ");
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
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.event().images) == null ? null : tmp_1_0.length) ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 15, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 17, ctx_r1.event().date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 20, ctx_r1.event().date, "d"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.event().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(22, 23, ctx_r1.event().date, "EEEE"), " ", \u0275\u0275pipeBind2(23, 26, ctx_r1.event().date, ctx_r1.time_format), " - ", \u0275\u0275pipeBind2(24, 29, ctx_r1.event().date + ctx_r1.event().duration * 60 * 1e3, ctx_r1.time_format), " ");
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 32, "CALENDAR_EVENT.GROUP_ATTENDING", \u0275\u0275pureFunction1(37, _c012, ctx_r1.attendee_count() || "0")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 35, "COMMON.VIEW_DETAILS"), " ");
  }
}
var _GroupEventCardComponent = class _GroupEventCardComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this.event = input(void 0);
    this.featured = input(void 0);
    this.space = signal(new Space());
    this.raw_description = signal("");
    this.is_onsite = computed(() => this.event()?.extension_data.attendance_type !== "ONLINE");
    this.has_space = computed(() => !!this.space()?.id);
    this.is_online = computed(() => !this.is_onsite || this.event()?.extension_data.attendance_type === "ANY");
    this.group_event_calendar = settingSignal("group_events_calendar");
    this.attendee_count = computed(() => this.event()?.attendees?.filter((user) => user.email !== this.group_event_calendar())?.length || 0);
  }
  get time_format() {
    return this._settings.time_format;
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
};
_GroupEventCardComponent.\u0275fac = function GroupEventCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventCardComponent)();
};
_GroupEventCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventCardComponent, selectors: [["group-event-card"]], inputs: { event: [1, "event"], featured: [1, "featured"] }, decls: 2, vars: 1, consts: [["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-80", "w-60", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "h-56", "w-252", "max-w-full", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-80", "w-60", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-28", "min-h-28", "w-full", "items-center", "justify-between", "overflow-hidden", "border-b"], ["auth", "", 1, "absolute", "top-0", "left-0", "h-full", "w-full", "object-cover", "object-center", 3, "source"], [1, "h-1/2", "w-full", "flex-1", "p-4"], [1, "text-left", "text-sm", "opacity-60"], [1, "mb-2", "w-full", "truncate", "text-left", "text-xl", 3, "title"], [1, "mb-2", "h-18", "flex-1", "overflow-hidden", "text-left", "text-xs", "opacity-60"], [1, "line-clamp-4"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, ""], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "h-56", "w-252", "max-w-full", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "max-w-[18rem]", "items-center", "justify-between", "overflow-hidden", "border-r"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br-xl", "py-2", "pr-4", "pl-2", "text-sm"], [1, "text-base"], [1, "uppercase"], ["details", "", 1, "flex", "w-1/2", "max-w-[calc(100%-18rem)]", "flex-1", "space-x-4", "overflow-hidden", "px-4", "py-4"], [1, "flex", "flex-col", "items-center"], [1, "text-sm", "opacity-30"], [1, "text-lg"], [1, "flex", "w-px", "flex-1", "flex-col", "space-y-2"], [1, "text-left"], ["time", "", 1, "text-left", "text-sm", "opacity-30"], [1, "h-20", "overflow-hidden", "text-left"], [1, "line-clamp-3"], [1, "bg-secondary", "text-secondary-content", "absolute", "top-4", "right-4", "w-32", "truncate", "rounded-sm", "px-4", "py-2", "text-center"]], template: function GroupEventCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GroupEventCardComponent_Conditional_0_Template, 26, 22, "button", 0)(1, GroupEventCardComponent_Conditional_1_Template, 44, 39, "button", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.featured() ? 0 : 1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  RouterModule,
  MatTooltipModule,
  IconComponent,
  AuthenticatedImageDirective
], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  transition: box-shadow 300ms, border 200ms;\n}\n/*# sourceMappingURL=group-event-card.component.css.map */"] });
var GroupEventCardComponent = _GroupEventCardComponent;
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
                        {{ event().date | date: time_format }}
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
                            {{ event().date | date: time_format }} -
                            {{
                                event().date + event().duration * 60 * 1000
                                    | date: time_format
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventCardComponent, { className: "GroupEventCardComponent", filePath: "libs/events/src/lib/group-event-card.component.ts", lineNumber: 239 });
})();

// libs/events/src/lib/setup-breakdown-modal.component.ts
var _c013 = () => [5, 10];
function SetupBreakdownModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SetupBreakdownModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2)(1, "div", 5)(2, "label", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-duration-field", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "label", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "CALENDAR_EVENT.SETUP_DURATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("custom_options", \u0275\u0275pureFunction0(11, _c013));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "CALENDAR_EVENT.BREAKDOWN_DURATION"), "Breakdown Duration");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("custom_options", \u0275\u0275pureFunction0(12, _c013));
  }
}
function SetupBreakdownModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3, " Saving setup and breakdown durations... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function SetupBreakdownModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "button", 12);
    \u0275\u0275listener("click", function SetupBreakdownModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
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
var _SetupBreakdownModalComponent = class _SetupBreakdownModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = false;
    this.form = new FormGroup({
      setup: new FormControl(this._event.setup_time || 0),
      breakdown: new FormControl(this._event.breakdown_time || 0)
    });
  }
  async save() {
    this.loading = true;
    this._dialog_ref.disableClose = true;
    const { host, creator } = this._event;
    const query = {
      system_id: this._event?.resources[0]?.id || this._event?.system?.id,
      ical_uid: this._event?.ical_uid
    };
    let event = await saveEvent(new CalendarEvent(__spreadProps(__spreadValues({}, this._event), {
      setup_time: this.form.value.setup,
      breakdown_time: this.form.value.breakdown
    })).toJSON(), query).toPromise().catch((_) => null);
    if (!event) {
      event = await updateEventMetadata(this._event.id, query.system_id, __spreadProps(__spreadValues({}, this._event.extension_data), {
        setup_time: this.form.value.setup,
        breakdown_time: this.form.value.breakdown,
        setup: this.form.value.setup,
        breakdown: this.form.value.breakdown
      })).toPromise().catch((_) => null);
    }
    if (!event) {
      this.loading = false;
      this._dialog_ref.disableClose = false;
      notifyError(`Error updating setup and breakdown.`);
      return;
    }
    notifySuccess("Succesfully updated setup and breakdown period.");
    this._dialog_ref.disableClose = false;
    this.loading = false;
    this._dialog_ref.close(event);
  }
};
_SetupBreakdownModalComponent.\u0275fac = function SetupBreakdownModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SetupBreakdownModalComponent)();
};
_SetupBreakdownModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupBreakdownModalComponent, selectors: [["setup-breakdown-modal"]], decls: 8, vars: 6, consts: [[1, "min-h-16", "space-x-4"], ["btn", "", "icon", "", "mat-dialog-close", "", "matRipple", ""], [1, "w-full", "min-w-[20rem]", "p-4", 3, "formGroup"], [1, "flex", "h-64", "w-64", "flex-col", "items-center", "justify-center"], [1, "border-base-200", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "flex", "flex-col", "space-y-2"], ["for", "setup"], ["name", "setup", "formControlName", "setup", 3, "min", "custom_options"], ["for", "breakdown"], ["name", "breakdown", "formControlName", "breakdown", 3, "min", "custom_options"], [3, "diameter"], [1, "p-4", "text-center"], ["btn", "", "matRipple", "", 3, "click"]], template: function SetupBreakdownModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SetupBreakdownModalComponent_Conditional_4_Template, 3, 0, "button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SetupBreakdownModalComponent_Conditional_5_Template, 11, 13, "main", 2)(6, SetupBreakdownModalComponent_Conditional_6_Template, 4, 1, "div", 3);
    \u0275\u0275conditionalCreate(7, SetupBreakdownModalComponent_Conditional_7_Template, 4, 3, "footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "CALENDAR_EVENT.SETUP_BREAKDOWN_HEADER"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 7 : -1);
  }
}, dependencies: [
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  IconComponent,
  MatDialogModule,
  MatDialogClose,
  DurationFieldComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ReactiveFormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], encapsulation: 2 });
var SetupBreakdownModalComponent = _SetupBreakdownModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupBreakdownModalComponent, [{
    type: Component,
    args: [{ selector: "setup-breakdown-modal", template: `
        <header class="min-h-16 space-x-4">
            <h2>{{ 'CALENDAR_EVENT.SETUP_BREAKDOWN_HEADER' | translate }}</h2>
            @if (!loading) {
                <button btn icon mat-dialog-close matRipple>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="w-full min-w-[20rem] p-4" [formGroup]="form">
                <div class="flex flex-col space-y-2">
                    <label for="setup">{{
                        'CALENDAR_EVENT.SETUP_DURATION' | translate
                    }}</label>
                    <a-duration-field
                        name="setup"
                        formControlName="setup"
                        [min]="0"
                        [custom_options]="[5, 10]"
                    ></a-duration-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="breakdown">
                        {{
                            'CALENDAR_EVENT.BREAKDOWN_DURATION' | translate
                        }}Breakdown Duration</label
                    >
                    <a-duration-field
                        name="breakdown"
                        [min]="0"
                        formControlName="breakdown"
                        [custom_options]="[5, 10]"
                    ></a-duration-field>
                </div>
            </main>
        } @else {
            <div class="flex h-64 w-64 flex-col items-center justify-center">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="p-4 text-center">
                    Saving setup and breakdown durations...
                </p>
            </div>
        }
        @if (!loading) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button btn matRipple (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatDialogModule,
      DurationFieldComponent,
      MatProgressSpinnerModule,
      ReactiveFormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupBreakdownModalComponent, { className: "SetupBreakdownModalComponent", filePath: "libs/events/src/lib/setup-breakdown-modal.component.ts", lineNumber: 83 });
})();

// libs/events/src/lib/calendar.service.ts
var _CalendarService = class _CalendarService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._calendars = new BehaviorSubject([]);
    this.calendar_list = queryCalendars().pipe(tap((l) => this._calendars.next(l)), shareReplay(1));
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._org.initialised.pipe(first((_) => _)).subscribe(() => this.init());
  }
  async init() {
    if (this._settings.get("app.events.use_bookings"))
      return;
    this._initialised.next(true);
  }
  get calendars() {
    return this._calendars.getValue();
  }
  /** Get Free busy for the selected day
   * @param calendars User calendar
   * @param date Selected day
   */
  getFreeBusyDate(date, calendars) {
    return querySpaceFreeBusy({
      period_start: getUnixTime(startOfDay(date)),
      period_end: getUnixTime(endOfDay(date)),
      calendars
    }, this._org);
  }
  /** Check rooms availability */
  async checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
    const result = await queryCalendarAvailability({
      period_start,
      period_end,
      system_ids: system_ids.join(",")
    }).toPromise();
    const start = new Date(old_booking?.date).valueOf();
    const end = addMinutes(start, old_booking?.duration).valueOf();
    const available = result.every((i) => {
      const availability = i.availability;
      if (old_booking && i.id === old_booking.system?.email) {
        const index = availability.findIndex((block) => {
          return block.date >= start && addMinutes(block.date, block.duration).valueOf() <= end;
        });
        if (index !== -1) {
          availability.splice(index, 1);
        }
      }
      return !availability.length;
    });
    return !!available;
  }
};
_CalendarService.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CalendarService)();
};
_CalendarService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
var CalendarService = _CalendarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  MatBottomSheetRef,
  MatBottomSheet,
  StatusPillComponent,
  AttendeeListComponent,
  EventDetailsModalComponent,
  GroupEventDetailsModalComponent,
  GroupEventCardComponent,
  SetupBreakdownModalComponent
};
//# sourceMappingURL=chunk-WJ4HCFQX.js.map
