import {
  CounterComponent
} from "./chunk-G6J7EJE5.js";
import {
  ImageCarouselComponent
} from "./chunk-YJXNKBR5.js";
import {
  DurationFieldComponent
} from "./chunk-FTZKDMD6.js";
import {
  SettingsToggleComponent
} from "./chunk-6GIBONXV.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-D3VYGJ6G.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-RVKWVUYC.js";
import {
  EventFormService
} from "./chunk-U66A4PGJ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatSelect,
  MatSelectModule,
  findOldestByName,
  saveAssetCategory
} from "./chunk-IVWYWRG7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-YEF7L372.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix
} from "./chunk-GBEZ2XD5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-I5IZZO3Z.js";
import {
  MatOption
} from "./chunk-AFTIF56Q.js";
import {
  subMinutes
} from "./chunk-7XGRKZYC.js";
import {
  SpacePipe
} from "./chunk-5XMRXOYP.js";
import {
  setHours
} from "./chunk-7VF5TD5Y.js";
import {
  TranslatePipe
} from "./chunk-VZSWYXPT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-JZU6NIMO.js";
import {
  BuildingLevel,
  CateringItem,
  CateringOrder,
  ExternalCateringService,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  Space,
  formatRecurrence,
  fromEventRecurrence,
  isAfter,
  isBefore,
  stringToMinutes
} from "./chunk-KTADYPHH.js";
import {
  IconComponent
} from "./chunk-3ZDLFGP6.js";
import {
  AsyncHandler
} from "./chunk-2FYBYRLM.js";
import {
  Ql,
  ac,
  addDays,
  addMinutes,
  differenceInMinutes,
  endOfDay,
  flatten,
  i18n,
  op,
  randomString,
  startOfDay,
  tp,
  unique
} from "./chunk-LSVIIU5S.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FFDIHN6G.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-ZTX66HDZ.js";
import {
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  Injectable,
  Input,
  Output,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6OEACKVR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component.ts
var _c0 = (a0, a1, a2, a3) => ({ level: a0, space: a1, date: a2, time: a3 });
var _c1 = () => ["/"];
var _c2 = (a0) => ({ name: a0 });
function MeetingFlowSuccessComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "icon", 9);
    \u0275\u0275text(5, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "CALENDAR_EVENT.ROOM_BOOKING_REQUESTED"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "CALENDAR_EVENT.SUCCESS_WAIT_APPROVED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, ctx_r0.last_event()?.all_day ? "CALENDAR_EVENT.SUCCESS_WITH_SPACE_ALLDAY" : "CALENDAR_EVENT.SUCCESS_WITH_SPACE", details_r2), " ");
  }
}
function MeetingFlowSuccessComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 12);
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(10, _c2, \u0275\u0275pipeBind1(2, 2, "RESOURCE.MEETING"))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, ctx_r0.last_event()?.all_day ? "CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE_ALLDAY" : "CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE", details_r2), " ");
  }
}
function MeetingFlowSuccessComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 13);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatted_recurrence(), " ");
  }
}
function MeetingFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 16);
    \u0275\u0275text(1, "progress_activity");
    \u0275\u0275elementEnd();
  }
}
function MeetingFlowSuccessComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function MeetingFlowSuccessComponent_Conditional_4_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startDeskBooking());
    });
    \u0275\u0275conditionalCreate(1, MeetingFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template, 2, 0, "icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.desk_loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.desk_loading() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "CALENDAR_EVENT.BOOK_NEARBY_DESK"), " ");
  }
}
function MeetingFlowSuccessComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
    \u0275\u0275conditionalCreate(2, MeetingFlowSuccessComponent_Conditional_4_Conditional_2_Template, 12, 10)(3, MeetingFlowSuccessComponent_Conditional_4_Conditional_3_Template, 8, 12);
    \u0275\u0275conditionalCreate(4, MeetingFlowSuccessComponent_Conditional_4_Conditional_4_Template, 5, 1, "div", 2);
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275conditionalCreate(6, MeetingFlowSuccessComponent_Conditional_4_Conditional_6_Template, 4, 5, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "footer", 5)(8, "a", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.space().email ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.formatted_recurrence() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.space().email && ctx_r0.allow_desk_booking ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.MEETING_FINISHED"), " ");
  }
}
var MeetingFlowSuccessComponent = class _MeetingFlowSuccessComponent {
  constructor() {
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._space_pipe = inject(SpacePipe);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "desk_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_event = this._event_form.last_success;
    this.space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => {
        return this._org.levelWithID(this.space().zones) || new BuildingLevel();
      },
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_recurrence = computed(
      () => {
        const event = this.last_event();
        if (!event?.recurrence?.pattern)
          return "";
        const recurrence_start = event.recurrence.start || event.date;
        return formatRecurrence(fromEventRecurrence(__spreadProps(__spreadValues({}, event.recurrence), {
          start: recurrence_start
        })), recurrence_start);
      },
      ...ngDevMode ? [{ debugName: "formatted_recurrence" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get allow_desk_booking() {
    return (this._settings.get("app.features") || []).includes("desks") && this._settings.get("app.events.hide_nearby_desks") !== true;
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    this.loading.set(true);
    const event_space = this.last_event()?.space;
    if (event_space) {
      this.space.set(new Space(event_space));
      try {
        const resolved_space = await this._space_pipe.transform(event_space.email || event_space.id);
        if (resolved_space && (resolved_space.id || resolved_space.email !== "empty.space@place.os")) {
          this.space.set(new Space(resolved_space));
        }
      } catch {
      }
    }
    setTimeout(() => this.loading.set(false), 500);
  }
  startDeskBooking() {
    this._router.navigate(["/book", "desk", "form"], {
      queryParams: {
        nearby_space: this.space().id || this.space().email,
        date: this.last_event().date
      }
    });
  }
  static {
    this.\u0275fac = function MeetingFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingFlowSuccessComponent, selectors: [["meeting-flow-success"]], features: [\u0275\u0275ProvidersFeature([SpacePipe])], decls: 5, vars: 16, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["recurrence", "", 1, "bg-base-200", "flex", "items-center", "space-x-2", "rounded-lg", "px-4", "py-2"], [1, "h-4"], ["btn", "", "matRipple", "", 1, "w-56", 3, "disabled"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "name", "meeting-created-continue", "matRipple", "", 1, "w-full", "max-w-lg", 3, "routerLink"], [1, "text-center", "text-2xl", "font-medium"], ["aria-hidden", "true", 1, "bg-warning", "text-warning-content", "flex", "h-32", "w-32", "shrink-0", "items-center", "justify-center", "rounded-full"], [1, "text-6xl"], [1, "max-w-lg", "text-center", "font-bold"], [1, "max-w-lg", "text-center"], ["src", "assets/icons/success.svg", "alt", ""], [1, "text-xl"], [1, "text-sm"], ["btn", "", "matRipple", "", 1, "w-56", 3, "click", "disabled"], [1, "mr-2", "animate-spin", "text-2xl"]], template: function MeetingFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275pipe(1, "date");
        \u0275\u0275pipe(2, "date");
        \u0275\u0275pipe(3, "date");
        \u0275\u0275conditionalCreate(4, MeetingFlowSuccessComponent_Conditional_4_Template, 11, 8, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275storeLet(\u0275\u0275pureFunction4(11, _c0, ctx.level().display_name || ctx.level().name, ctx.space().display_name || ctx.space().name, \u0275\u0275pipeBind2(1, 1, ctx.last_event()?.date, "mediumDate"), \u0275\u0275pipeBind2(2, 4, ctx.last_event()?.date, ctx.time_format) + " \u2014 " + \u0275\u0275pipeBind2(3, 7, ctx.last_event()?.date_end, ctx.time_format)));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, IconComponent, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "meeting-flow-success", template: `
        @let details =
            {
                level: level().display_name || level().name,
                space: space().display_name || space().name,
                date: last_event()?.date | date: 'mediumDate',
                time:
                    (last_event()?.date | date: time_format) +
                    ' \u2014 ' +
                    (last_event()?.date_end | date: time_format),
            };
        @if (!loading()) {
            <div
                class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
            >
                <main
                    class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    @if (space().email) {
                        <h2 class="text-center text-2xl font-medium">
                            {{
                                'CALENDAR_EVENT.ROOM_BOOKING_REQUESTED'
                                    | translate
                            }}
                        </h2>
                        <div
                            class="bg-warning text-warning-content flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
                            aria-hidden="true"
                        >
                            <icon class="text-6xl">schedule</icon>
                        </div>
                        <p class="max-w-lg text-center font-bold">
                            {{
                                'CALENDAR_EVENT.SUCCESS_WAIT_APPROVED'
                                    | translate
                            }}
                        </p>
                        <p class="max-w-lg text-center">
                            {{
                                (last_event()?.all_day
                                    ? 'CALENDAR_EVENT.SUCCESS_WITH_SPACE_ALLDAY'
                                    : 'CALENDAR_EVENT.SUCCESS_WITH_SPACE'
                                ) | translate: details
                            }}
                        </p>
                    } @else {
                        <h2 class="text-center text-2xl font-medium">
                            {{
                                'BOOKINGS.ITEM_BOOKED'
                                    | translate
                                        : { name: 'RESOURCE.MEETING' | translate }
                            }}
                        </h2>
                        <img src="assets/icons/success.svg" alt="" />
                        <p class="max-w-lg text-center">
                            {{
                                (last_event()?.all_day
                                    ? 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE_ALLDAY'
                                    : 'CALENDAR_EVENT.SUCCESS_WITHOUT_SPACE'
                                ) | translate: details
                            }}
                        </p>
                    }
                    @if (formatted_recurrence()) {
                        <div
                            recurrence
                            class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                        >
                            <icon class="text-xl">update</icon>
                            <div class="text-sm">
                                {{ formatted_recurrence() }}
                            </div>
                        </div>
                    }
                    <div class="h-4"></div>
                    @if (space().email && allow_desk_booking) {
                        <button
                            btn
                            matRipple
                            class="w-56"
                            [disabled]="desk_loading()"
                            (click)="startDeskBooking()"
                        >
                            @if (desk_loading()) {
                                <icon class="mr-2 animate-spin text-2xl"
                                    >progress_activity</icon
                                >
                            }
                            {{ 'CALENDAR_EVENT.BOOK_NEARBY_DESK' | translate }}
                        </button>
                    }
                </main>
                <footer
                    class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
                >
                    <a
                        btn
                        name="meeting-created-continue"
                        matRipple
                        class="w-full max-w-lg"
                        [routerLink]="['/']"
                    >
                        {{ 'APP.WORKPLACE.MEETING_FINISHED' | translate }}
                    </a>
                </footer>
            </div>
        }
    `, imports: [CommonModule, RouterModule, TranslatePipe, IconComponent], providers: [SpacePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingFlowSuccessComponent, { className: "MeetingFlowSuccessComponent", filePath: "apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component.ts", lineNumber: 129 });
})();

// libs/assets/src/lib/catering-assets.fn.ts
var CATERING_CATEGORY_NAME = "_CATERING_";
var CATERING_TYPE_PREFIX = "CATERING:";
var STANDALONE_CATERER_NAME = "_STANDALONE_";
var STANDALONE_CATERER_LABEL = "standalone";
var _catering_category_id = null;
var _catering_category_id_promise = null;
var _hidden_categories_promise = null;
var _catering_types_promise = null;
function reset_hidden_categories_cache() {
  _hidden_categories_promise = null;
}
async function query_hidden_categories() {
  if (!_hidden_categories_promise) {
    _hidden_categories_promise = op({
      hidden: true,
      limit: 500
    }).then((_) => _.data).catch(() => []);
  }
  return _hidden_categories_promise;
}
async function ensure_hidden_category(name) {
  let category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  reset_hidden_categories_cache();
  category = findOldestByName(await query_hidden_categories(), name);
  if (category)
    return category;
  try {
    category = await saveAssetCategory({
      name,
      hidden: true
    });
    reset_hidden_categories_cache();
    return category;
  } catch (error) {
    reset_hidden_categories_cache();
    category = findOldestByName(await query_hidden_categories(), name);
    if (category)
      return category;
    throw error;
  }
}
function fromCateringTypeName(type_name = "") {
  const name = type_name.startsWith(CATERING_TYPE_PREFIX) ? type_name.slice(CATERING_TYPE_PREFIX.length) : type_name;
  return name === STANDALONE_CATERER_NAME ? STANDALONE_CATERER_LABEL : name;
}
function isCateringTypeName(type_name = "") {
  return type_name.startsWith(CATERING_TYPE_PREFIX);
}
function resolveCateringCategoryId() {
  if (_catering_category_id)
    return Promise.resolve(_catering_category_id);
  if (!_catering_category_id_promise) {
    _catering_category_id_promise = ensure_hidden_category(CATERING_CATEGORY_NAME).then((category) => {
      _catering_category_id = category.id;
      return category.id;
    });
  }
  return _catering_category_id_promise;
}
function query_catering_types() {
  if (!_catering_types_promise) {
    _catering_types_promise = resolveCateringCategoryId().then((category_id) => tp({ category_id, limit: 500 })).then((_) => _.data.filter((type) => isCateringTypeName(type.name))).catch(() => []);
  }
  return _catering_types_promise;
}
function toCateringItem(asset, caterer) {
  const details = asset.other_data || {};
  return new CateringItem({
    id: asset.id,
    name: asset.name || asset.identifier || asset.id,
    caterer,
    category: details.category || "",
    description: details.description || "",
    unit_price: +details.unit_price || 0,
    quantity: +details.quantity || 0,
    options: details.options instanceof Array ? details.options : [],
    tags: details.tags instanceof Array ? details.tags : [],
    accept_points: !!details.accept_points,
    discount_cap: +details.discount_cap || 0,
    images: asset.images instanceof Array ? asset.images : details.images instanceof Array ? details.images : [],
    hide_for_zones: details.hide_for_zones instanceof Array ? details.hide_for_zones : []
  });
}
async function queryCateringItems(zone_id) {
  if (!zone_id)
    return [];
  const types = await query_catering_types();
  if (!types.length)
    return [];
  const results = await Promise.all(types.map((type) => Ql({
    zone_id,
    type_id: type.id,
    limit: 500
  }).then((assets) => assets.data.map((asset) => toCateringItem(asset, fromCateringTypeName(type.name))))));
  return flatten(results).sort((a, b) => a.name.localeCompare(b.name));
}

// libs/catering/src/lib/utilities.ts
var RULE_REQUESTS = {};
function getCateringRulesForZone(zone_id, fresh = false) {
  if (!zone_id)
    return Promise.resolve([]);
  if (!RULE_REQUESTS[zone_id] || fresh)
    RULE_REQUESTS[zone_id] = ac(zone_id, "catering_config").then((_) => _.details instanceof Array ? _.details : []).catch(() => []);
  return RULE_REQUESTS[zone_id];
}
function cateringItemAvailable(item, rules, event) {
  let is_available = true;
  const now = Date.now();
  for (const rule of rules) {
    if (item.category === rule.name || item.tags.includes(rule.name) || event.resources.find((_) => _.zones.includes(rule.name)) || event.space?.zones.includes(rule.name) || rule.name === "*") {
      let matches = 0;
      for (const [type, value] of rule.rules) {
        const date = new Date(event.date);
        const v = typeof value === "string" ? stringToMinutes(value) : +value * 60;
        switch (type) {
          case "is_before":
            matches += isBefore(now, subMinutes(date, v)) ? 1 : 0;
            break;
          case "within_hours":
            matches += isAfter(now, subMinutes(date, v)) ? 1 : 0;
            break;
          case "after_hour":
            matches += isAfter(date, setHours(date, v / 60)) ? 1 : 0;
            break;
          case "before_hour":
            matches += isBefore(date, setHours(date, v / 60)) ? 1 : 0;
            break;
          case "min_length":
            matches += event.duration >= v ? 1 : 0;
            break;
          case "max_length":
            matches += event.duration <= v ? 1 : 0;
            break;
          case "visitor_type":
            matches += event.ext("visitor_type") === value ? 1 : 0;
            break;
          default:
            matches += 1;
        }
      }
      is_available = matches >= rule.rules.length;
    }
    if (!is_available)
      return false;
  }
  return is_available;
}

// libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts
var CateringOrderStateService = class _CateringOrderStateService {
  get currency_code() {
    return this._org.currency_code;
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._external_catering = inject(ExternalCateringService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filters = signal(
      {
        search: "",
        tags: [],
        categories: [],
        caterer: ""
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settings_data = signal(
      {},
      ...ngDevMode ? [{ debugName: "_settings_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_menu = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filtered_menu = signal(
      [],
      ...ngDevMode ? [{ debugName: "_filtered_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._menu_load = 0;
    this.loading = this._loading.asReadonly();
    this.filters = this._filters.asReadonly();
    this.settings = this._settings_data.asReadonly();
    this.charge_codes = computed(
      () => this._settings_data().charge_codes || [],
      ...ngDevMode ? [{ debugName: "charge_codes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.availability = computed(
      () => this._settings_data().disabled_rooms || [],
      ...ngDevMode ? [{ debugName: "availability" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_menu = this._available_menu.asReadonly();
    this.categories = computed(
      () => unique(this._available_menu().map((i) => i.category)),
      ...ngDevMode ? [{ debugName: "categories" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.caterers = computed(
      () => {
        return this._settings.get("app.catering_provider") ? [] : unique(this._available_menu().map((i) => i.caterer));
      },
      ...ngDevMode ? [{ debugName: "caterers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_menu = this._filtered_menu.asReadonly();
    effect(() => {
      const bld = this._org.active_building();
      const { zone, building } = this._options();
      this._settings.signal("catering.backend")();
      const building_id = building || bld?.id;
      if (!building_id)
        return;
      this._loadSettings(building_id);
      this._loadMenu(zone || building_id);
    });
    effect(() => {
      const filters = this._filters();
      const menu = this._available_menu();
      this._filterMenu(filters, menu);
    });
  }
  setOptions(opts) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), opts));
  }
  setFilters(opts) {
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), opts));
  }
  getFilters() {
    return __spreadValues({}, this._filters());
  }
  /** Check that every item in an order is available for its assigned room. */
  async orderAvailable(order, resource, details) {
    if (this.availability().includes(resource.id))
      return false;
    const rules = await getCateringRulesForZone(details.zone_id);
    const available_items = this._available_menu().filter((item) => !item.hide_for_zones.some((zone) => resource.zones.includes(zone)) && cateringItemAvailable(item, rules, {
      date: details.date,
      duration: details.duration,
      resources: [resource]
    }));
    return order.items.every((order_item) => available_items.some((item) => item.id === order_item.id && item.caterer === order_item.caterer));
  }
  async _loadSettings(building_id) {
    const metadata = await ac(building_id, "catering-settings").catch(() => ({}));
    const settings = metadata.details;
    this._settings_data.set(settings || {});
    this._settings.post("require_catering_notes", !!settings?.require_notes);
  }
  async _loadMenu(zone_id) {
    const load = ++this._menu_load;
    this._loading.set("[MENU]");
    const items = this._external_catering.enabled ? await this._external_catering.loadMenu().catch(() => []) : await queryCateringItems(zone_id).catch(() => []);
    if (load !== this._menu_load)
      return;
    this._loading.set(this._loading().replace("[MENU]", ""));
    if (this._settings.get("app.catering_provider")) {
      this.setFilters({
        caterer: this._settings.get("app.catering_provider")
      });
    } else {
      const caterer_list = unique(items.map((i) => i.caterer).filter((_) => !!_));
      if (caterer_list.length > 1) {
        this.setFilters({ caterer: caterer_list[0] || "" });
      }
    }
    this._available_menu.set(items);
  }
  async _filterMenu({ search, tags, categories, zone_id, date, duration, resources, caterer }, menu) {
    const rules = await getCateringRulesForZone(zone_id);
    search = search.toLowerCase();
    let list = search ? menu.filter((_) => _.name.toLowerCase().includes(search)) : menu;
    list = tags.length ? list.filter((_) => tags.every((t) => _.tags.includes(t))) : list;
    list = categories.length ? list.filter((_) => categories.includes(_.category)) : list;
    list = caterer ? list.filter((_) => caterer === "<empty>" && !_.caterer || _.caterer === caterer) : list;
    this._filtered_menu.set(list.filter((_) => cateringItemAvailable(_, rules, {
      date,
      duration,
      resources
    })));
  }
  static {
    this.\u0275fac = function CateringOrderStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringOrderStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringOrderStateService, factory: _CateringOrderStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringOrderStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/catering/src/lib/catering-select-modal/catering-item-details.component.ts
function CateringItemDetailsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.item().unit_price / 100, ctx_r1.code()), " ");
  }
}
function CateringItemDetailsComponent_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r6.unit_price / 100, ctx_r1.code()), " ");
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Conditional_4_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r6.unit_price ? 4 : -1);
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-group", 18);
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template_mat_radio_group_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateGroupOption(group_r5, $event));
    });
    \u0275\u0275elementStart(1, "mat-radio-button", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_For_6_Template, 5, 3, "mat-radio-button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.group_state()[group_r5.name])("disabled", ctx_r1.item()?.in_order);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r5?.options);
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", \u0275\u0275pipeBind2(2, 1, opt_r8.unit_price / 100, ctx_r1.code()), " ");
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 26);
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateCheckedState(opt_r8.id, $event));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Conditional_4_Template, 3, 4, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.option_state()[opt_r8.id])("disabled", ctx_r1.item()?.in_order);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", opt_r8.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(opt_r8.unit_price ? 4 : -1);
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_For_1_Template, 5, 4, "mat-checkbox", 25, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(group_r5?.options);
  }
}
function CateringItemDetailsComponent_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275conditionalCreate(4, CateringItemDetailsComponent_Conditional_0_For_21_Conditional_4_Template, 7, 5, "mat-radio-group", 17)(5, CateringItemDetailsComponent_Conditional_0_For_21_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    \u0275\u0275attribute("group", group_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!group_r5.multiple ? 4 : 5);
  }
}
function CateringItemDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "image-carousel", 2);
    \u0275\u0275elementStart(2, "button", 3);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function CateringItemDetailsComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFav.emit());
    });
    \u0275\u0275elementStart(6, "icon", 5);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "section", 7)(10, "div")(11, "h2", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, CateringItemDetailsComponent_Conditional_0_Conditional_13_Template, 3, 4, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a-counter", 9);
    \u0275\u0275twoWayListener("ngModelChange", function CateringItemDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item().quantity, $event) || (ctx_r1.item().quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CateringItemDetailsComponent_Conditional_0_Template_a_counter_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active() ? ctx_r1.activeChange.emit(ctx_r1.active()) : "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "section", 10);
    \u0275\u0275repeaterCreate(16, CateringItemDetailsComponent_Conditional_0_For_17_Template, 2, 1, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "section", 12)(19, "div", 13);
    \u0275\u0275repeaterCreate(20, CateringItemDetailsComponent_Conditional_0_For_21_Template, 6, 3, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.item().images);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-info", ctx_r1.fav());
    \u0275\u0275advance();
    \u0275\u0275property("className", ctx_r1.fav() ? "material-symbols-rounded" : "material-symbols-outlined");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.item().unit_price ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item().quantity);
    \u0275\u0275property("min", 1)("max", ctx_r1.item().count || 10);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.item().tags);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.groups());
  }
}
function CateringItemDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDER_ITEM_SELECT"), " ");
  }
}
var CateringItemDetailsComponent = class _CateringItemDetailsComponent {
  constructor() {
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      false,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fav = input(
      false,
      ...ngDevMode ? [{ debugName: "fav" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.code = input(
      "USD",
      ...ngDevMode ? [{ debugName: "code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleFav = output();
    this.activeChange = output();
    this.close = output();
    this.option_state = signal(
      {},
      ...ngDevMode ? [{ debugName: "option_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_state = signal(
      {},
      ...ngDevMode ? [{ debugName: "group_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.groups = signal(
      [],
      ...ngDevMode ? [{ debugName: "groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnChanges(changes) {
    if (changes.item && this.item()) {
      this._update();
    }
  }
  updateGroupOption(group, id) {
    if (!group)
      return;
    this.group_state.update((state) => __spreadProps(__spreadValues({}, state), { [group.name]: id }));
    for (const option of group.options) {
      option.active = option.id === id;
    }
  }
  updateCheckedState(id, state) {
    this.option_state.update((option_state) => __spreadProps(__spreadValues({}, option_state), {
      [id]: state
    }));
    const option = this.item()?.options.find((_) => _.id === id);
    if (option)
      option.active = state;
  }
  _update() {
    const item = this.item();
    if (!item)
      return;
    if (!item.quantity) {
      item.quantity = 1;
    }
    this.option_state.set({});
    this.group_state.set({});
    const groups = unique(item.options.map((i) => i.group || "Other"));
    const group_list = [];
    for (const group of groups) {
      const options = item.options.filter((i) => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find((i) => i.multiple),
        options
      });
    }
    this.groups.set(group_list);
    if (item.option_list) {
      for (const opt of item.option_list) {
        const option = item.options.find((_) => _.id === opt.id);
        if (option) {
          option.active = true;
          this.option_state.update((state) => __spreadProps(__spreadValues({}, state), {
            [opt.id]: true
          }));
          this.updateGroupOption(this.groups().find((g) => g.name === option.group), option.id);
        }
      }
    }
  }
  static {
    this.\u0275fac = function CateringItemDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemDetailsComponent, selectors: [["catering-item-details"]], inputs: { item: [1, "item"], active: [1, "active"], fav: [1, "fav"], code: [1, "code"] }, outputs: { toggleFav: "toggleFav", activeChange: "activeChange", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], ["image", "", 1, "bg-base-200", "relative", "h-64", "w-full", "sm:h-40"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-catering-item-details", 1, "bg-base-100", "absolute", "top-2", "left-2", "lg:hidden", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite-details", 1, "bg-base-100", "absolute", "top-2", "right-2", 3, "click"], [3, "className"], [1, "flex-1", "space-y-4", "p-2"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "mt-4", "mb-2", "text-xl", "font-medium"], [3, "ngModelChange", "ngModel", "min", "max"], [1, "flex", "flex-wrap", "items-center"], [1, "bg-base-200", "m-1", "rounded-2xl", "px-2", "py-1", "text-sm", "capitalize"], ["details", "", 1, "space-y-2"], [1, "flex", "flex-col", "space-y-4"], [1, "border-base-400", "relative", "space-y-2", "rounded-sm", "border", "px-3", "pt-4", "pb-2"], [1, "text-md", "bg-base-100", "absolute", "top-0", "left-2", "-translate-y-1/2", "px-2", "font-medium"], [1, "flex", "flex-col"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModel", "disabled"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", 1, "m-0"], [1, "p-2", "font-medium", "opacity-60"], [1, "m-0", 3, "value"], [1, "flex", "max-w-[calc(100vw-4rem)]", "items-center", "justify-center", "sm:max-w-60"], [1, "w-1/2", "flex-1", "p-2", "font-medium", "whitespace-normal", "capitalize"], [1, "text-xs", "opacity-60"], [3, "ngModel", "disabled"], [3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center", "justify-center"], [1, "w-1/2", "flex-1", "p-2", "font-medium"], [1, "text-center", "opacity-30"]], template: function CateringItemDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CateringItemDetailsComponent_Conditional_0_Template, 22, 9)(1, CateringItemDetailsComponent_Conditional_1_Template, 4, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.item() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      FormsModule,
      NgControlStatus,
      NgModel,
      CounterComponent,
      ImageCarouselComponent,
      CurrencyPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemDetailsComponent, [{
    type: Component,
    args: [{ selector: "catering-item-details", template: `
        @if (item()) {
            <section image class="bg-base-200 relative h-64 w-full sm:h-40">
                <image-carousel
                    [images]="item().images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    name="close-catering-item-details"
                    (click)="close.emit()"
                    class="bg-base-100 absolute top-2 left-2 lg:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-catering-item-favourite-details"
                    [class.text-info]="fav()"
                    (click)="toggleFav.emit()"
                    class="bg-base-100 absolute top-2 right-2"
                >
                    <icon
                        [className]="
                            fav()
                                ? 'material-symbols-rounded'
                                : 'material-symbols-outlined'
                        "
                        >favorite</icon
                    >
                </button>
            </section>
            <div class="flex-1 space-y-4 p-2">
                <section actions class="z-0 flex items-center justify-between">
                    <div>
                        <h2 class="mt-4 mb-2 text-xl font-medium">
                            {{ item().name }}
                        </h2>
                        @if (item().unit_price) {
                            <p>
                                {{ item().unit_price / 100 | currency: code() }}
                            </p>
                        }
                    </div>
                    <a-counter
                        [(ngModel)]="item().quantity"
                        (ngModelChange)="
                            active() ? activeChange.emit(active()) : ''
                        "
                        [min]="1"
                        [max]="item().count || 10"
                    ></a-counter>
                </section>
                <section class="flex flex-wrap items-center">
                    @for (tag of item().tags; track tag) {
                        <div
                            class="bg-base-200 m-1 rounded-2xl px-2 py-1 text-sm capitalize"
                        >
                            {{ tag }}
                        </div>
                    }
                </section>
                <section details class="space-y-2">
                    <div class="flex flex-col space-y-4">
                        @for (group of groups(); track group) {
                            <div
                                [attr.group]="group.name"
                                class="border-base-400 relative space-y-2 rounded-sm border px-3 pt-4 pb-2"
                            >
                                <h3
                                    class="text-md bg-base-100 absolute top-0 left-2 -translate-y-1/2 px-2 font-medium"
                                >
                                    {{ group.name }}
                                </h3>
                                <div class="flex flex-col">
                                    @if (!group.multiple) {
                                        <mat-radio-group
                                            class="flex flex-col"
                                            aria-label="Select an option"
                                            [ngModel]="
                                                group_state()[group.name]
                                            "
                                            (ngModelChange)="
                                                updateGroupOption(group, $event)
                                            "
                                            [disabled]="item()?.in_order"
                                        >
                                            <mat-radio-button
                                                class="m-0"
                                                value=""
                                            >
                                                <div
                                                    class="p-2 font-medium opacity-60"
                                                >
                                                    {{
                                                        'COMMON.NONE'
                                                            | translate
                                                    }}
                                                </div>
                                            </mat-radio-button>
                                            @for (
                                                opt of group?.options;
                                                track opt
                                            ) {
                                                <mat-radio-button
                                                    class="m-0"
                                                    [value]="opt.id"
                                                >
                                                    <div
                                                        class="flex max-w-[calc(100vw-4rem)] items-center justify-center sm:max-w-60"
                                                    >
                                                        <div
                                                            class="w-1/2 flex-1 p-2 font-medium whitespace-normal capitalize"
                                                        >
                                                            {{ opt.name }}
                                                        </div>
                                                        @if (opt.unit_price) {
                                                            <div
                                                                class="text-xs opacity-60"
                                                            >
                                                                +{{
                                                                    opt.unit_price /
                                                                        100
                                                                        | currency
                                                                            : code()
                                                                }}
                                                            </div>
                                                        }
                                                    </div>
                                                </mat-radio-button>
                                            }
                                        </mat-radio-group>
                                    } @else {
                                        @for (
                                            opt of group?.options;
                                            track opt
                                        ) {
                                            <mat-checkbox
                                                [ngModel]="
                                                    option_state()[opt.id]
                                                "
                                                (ngModelChange)="
                                                    updateCheckedState(
                                                        opt.id,
                                                        $event
                                                    )
                                                "
                                                [disabled]="item()?.in_order"
                                            >
                                                <div
                                                    class="flex items-center justify-center"
                                                >
                                                    <div
                                                        class="w-1/2 flex-1 p-2 font-medium"
                                                    >
                                                        {{ opt.name }}
                                                    </div>
                                                    @if (opt.unit_price) {
                                                        <div
                                                            class="text-xs opacity-60"
                                                        >
                                                            +{{
                                                                opt.unit_price /
                                                                    100
                                                                    | currency
                                                                        : code()
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </mat-checkbox>
                                        }
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        } @else {
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CATERING.ORDER_ITEM_SELECT' | translate }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatCheckboxModule,
      MatRadioModule,
      FormsModule,
      CounterComponent,
      ImageCarouselComponent
    ] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], fav: [{ type: Input, args: [{ isSignal: true, alias: "fav", required: false }] }], code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: false }] }], toggleFav: [{ type: Output, args: ["toggleFav"] }], activeChange: [{ type: Output, args: ["activeChange"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemDetailsComponent, { className: "CateringItemDetailsComponent", filePath: "libs/catering/src/lib/catering-select-modal/catering-item-details.component.ts", lineNumber: 235 });
})();

// libs/catering/src/lib/catering-select-modal/catering-item-filters.component.ts
function CateringItemFiltersComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caterer_r3 = ctx.$implicit;
    \u0275\u0275property("value", caterer_r3 || "<empty>");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caterer_r3 || "[No caterer]", " ");
  }
}
function CateringItemFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-select", 11);
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Conditional_10_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilters({ caterer: $event }));
    });
    \u0275\u0275repeaterCreate(6, CateringItemFiltersComponent_Conditional_10_For_7_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "CATERING.CATERER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.filters().caterer || ctx_r1.caterers()[0]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.caterers());
  }
}
function CateringItemFiltersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.FILTERS"), " ");
  }
}
function CateringItemFiltersComponent_Conditional_12_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275property("value", day_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, day_r6.value, "mediumDate"), " ");
  }
}
function CateringItemFiltersComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 15)(4, "mat-select", 11);
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Conditional_12_Conditional_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset_day.set($event));
    });
    \u0275\u0275repeaterCreate(5, CateringItemFiltersComponent_Conditional_12_Conditional_3_For_6_Template, 3, 5, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "CATERING.ORDERS_DELIVER_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.offset_day());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.day_options());
  }
}
function CateringItemFiltersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "settings-toggle", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Conditional_12_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.at_time.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(3, CateringItemFiltersComponent_Conditional_12_Conditional_3_Template, 7, 4);
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-duration-field", 14);
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Conditional_12_Template_a_duration_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offset.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 11, "CATERING.ORDERS_DELIVER_EXACT"))("ngModel", ctx_r1.at_time())("matTooltip", ctx_r1.exact_tooltip());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.day_options().length > 1 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "CATERING.ORDERS_DELIVER_AFTER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.offset())("time", ctx_r1.offset_day() > 0 ? ctx_r1.start_of_date() : ctx_r1.filters().date)("step", ctx_r1.step_interval())("min", ctx_r1.min_offset())("max", ctx_r1.max_offset())("use_24hr", ctx_r1.use_24hr());
    \u0275\u0275control();
  }
}
function CateringItemFiltersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.CATEGORIES"), " ");
  }
}
function CateringItemFiltersComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 16);
    \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_For_16_Template_settings_toggle_ngModelChange_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCategory(item_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", item_r8)("ngModel", ctx_r1.filters().categories?.includes(item_r8));
    \u0275\u0275attribute("name", item_r8);
    \u0275\u0275control();
  }
}
var ICONS = {
  coffee: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_605_8664)">
    <path d="M38.388 21.2474C37.8243 20.7996 37.1598 20.4847 36.4474 20.3278C35.735 20.1708 34.9944 20.1762 34.2846 20.3434C34.2476 19.7774 34.2049 19.2037 34.1483 18.6155C34.1243 18.3664 34.0043 18.1349 33.8119 17.9668C33.6195 17.7986 33.3687 17.706 33.1088 17.707H1.26151C1.00166 17.706 0.750839 17.7986 0.558442 17.9668C0.366045 18.1349 0.246035 18.3664 0.222073 18.6155C-0.42931 25.3581 0.106585 30.5307 4.80024 35.4799C8.88062 39.7819 15.7271 39.9998 17.0599 39.9998H17.3047C18.6375 39.9998 25.4863 39.7774 29.5643 35.4799C30.5412 34.4597 31.3937 33.3353 32.1052 32.1286C32.2481 32.1199 32.3875 32.0819 32.514 32.0174C34.0959 31.2139 35.6169 30.3039 37.0656 29.2943C38.3815 28.4227 39.3664 27.1618 39.871 25.7028C40.0702 24.9006 40.0372 24.0612 39.7758 23.2757C39.5144 22.4902 39.0344 21.7887 38.388 21.2474ZM28.0329 34.13C24.4699 37.8905 18.0323 37.9984 17.3093 37.9984H17.0645C16.3426 37.9984 9.90389 37.8872 6.34092 34.13C2.37257 29.9436 1.75351 25.466 2.21549 19.7085H32.1583C32.6214 25.4649 32.0024 29.9425 28.0329 34.13ZM37.8498 25.2091C37.4485 26.2369 36.7212 27.117 35.771 27.7243C35.024 28.2636 34.2434 28.7582 33.4334 29.2053C34.1268 27.0036 34.4428 24.7078 34.3689 22.4082C34.3839 22.4027 34.3989 22.4082 34.4139 22.3982C34.8447 22.2182 35.3192 22.1579 35.7837 22.2242C36.2482 22.2905 36.6841 22.4808 37.0421 22.7733C37.4001 23.0659 37.6658 23.4491 37.8092 23.8796C37.9525 24.3101 37.9678 24.7707 37.8533 25.2091H37.8498Z" fill="currentcolor"/>
    <path d="M9.43243 8.16274C9.85735 8.48322 10.2069 8.88673 10.4582 9.34669C10.7094 9.80666 10.8565 10.3126 10.89 10.8313C10.7939 11.9569 10.2754 13.0103 9.43128 13.7946C9.32937 13.883 9.24664 13.9899 9.18786 14.1092C9.12907 14.2286 9.0954 14.3579 9.08878 14.4898C9.08216 14.6217 9.10275 14.7536 9.14931 14.8778C9.19588 15.002 9.26753 15.1161 9.36012 15.2136C9.45271 15.311 9.56442 15.3898 9.6888 15.4455C9.81319 15.5012 9.9478 15.5326 10.0849 15.538C10.2219 15.5433 10.3587 15.5225 10.4874 15.4767C10.6161 15.4309 10.734 15.3611 10.8345 15.2712C12.1048 14.1093 12.8679 12.5254 12.9688 10.8413C12.9432 10.042 12.7392 9.25727 12.3708 8.5405C12.0023 7.82373 11.478 7.19166 10.8334 6.68722C10.4067 6.38353 10.055 5.99283 9.80341 5.54303C9.55184 5.09323 9.40662 4.59547 9.37815 4.08534C9.51392 3.18283 10.0073 2.36595 10.7548 1.80591C10.9718 1.64618 11.1147 1.41065 11.1528 1.15024C11.1908 0.889843 11.1208 0.625512 10.958 0.414392C10.7951 0.203272 10.5525 0.062327 10.2826 0.0220596C10.0127 -0.0182078 9.73715 0.0454338 9.51559 0.199206C8.90219 0.651996 8.39004 1.21933 8.0098 1.86721C7.62956 2.5151 7.38907 3.2302 7.30273 3.9697C7.30292 4.77855 7.49485 5.5767 7.86392 6.30333C8.23298 7.02996 8.76944 7.66592 9.43243 8.16274Z" fill="currentcolor"/>
    <path d="M23.0984 8.16274C23.5234 8.48322 23.8729 8.88673 24.1242 9.34669C24.3754 9.80666 24.5225 10.3126 24.556 10.8313C24.4599 11.9569 23.9414 13.0103 23.0973 13.7946C22.9954 13.883 22.9126 13.9899 22.8539 14.1092C22.7951 14.2286 22.7614 14.3579 22.7548 14.4898C22.7482 14.6217 22.7687 14.7536 22.8153 14.8778C22.8619 15.002 22.9335 15.1161 23.0261 15.2136C23.1187 15.311 23.2304 15.3898 23.3548 15.4455C23.4792 15.5012 23.6138 15.5326 23.7509 15.538C23.8879 15.5433 24.0247 15.5225 24.1534 15.4767C24.2821 15.4309 24.4 15.3611 24.5005 15.2712C25.7708 14.1093 26.5339 12.5254 26.6348 10.8413C26.6092 10.042 26.4052 9.25727 26.0368 8.5405C25.6683 7.82373 25.144 7.19166 24.4994 6.68722C24.0727 6.38353 23.721 5.99283 23.4694 5.54303C23.2178 5.09323 23.0726 4.59547 23.0442 4.08534C23.1799 3.18283 23.6733 2.36595 24.4208 1.80591C24.6378 1.64618 24.7807 1.41065 24.8188 1.15024C24.8568 0.889843 24.7868 0.625512 24.624 0.414392C24.4611 0.203272 24.2185 0.062327 23.9486 0.0220596C23.6787 -0.0182078 23.4032 0.0454338 23.1816 0.199206C22.5682 0.651996 22.0561 1.21933 21.6758 1.86721C21.2956 2.5151 21.0551 3.2302 20.9688 3.9697C20.9689 4.77855 21.1609 5.5767 21.5299 6.30333C21.899 7.02996 22.4355 7.66592 23.0984 8.16274Z" fill="currentcolor"/>
    <path d="M16.2645 8.16274C16.6894 8.48322 17.039 8.88673 17.2902 9.34669C17.5414 9.80666 17.6886 10.3126 17.722 10.8313C17.626 11.9569 17.1074 13.0103 16.2633 13.7946C16.1614 13.883 16.0787 13.9899 16.0199 14.1092C15.9611 14.2286 15.9274 14.3579 15.9208 14.4898C15.9142 14.6217 15.9348 14.7536 15.9813 14.8778C16.0279 15.002 16.0996 15.1161 16.1922 15.2136C16.2847 15.311 16.3964 15.3898 16.5208 15.4455C16.6452 15.5012 16.7798 15.5326 16.9169 15.538C17.054 15.5433 17.1908 15.5225 17.3194 15.4767C17.4481 15.4309 17.5661 15.3611 17.6666 15.2712C18.9368 14.1093 19.6999 12.5254 19.8009 10.8413C19.7752 10.042 19.5713 9.25727 19.2028 8.5405C18.8343 7.82373 18.31 7.19166 17.6654 6.68722C17.2387 6.38353 16.887 5.99283 16.6354 5.54303C16.3839 5.09323 16.2386 4.59547 16.2102 4.08534C16.346 3.18283 16.8393 2.36595 17.5869 1.80591C17.8038 1.64618 17.9468 1.41065 17.9848 1.15024C18.0228 0.889843 17.9528 0.625512 17.79 0.414392C17.6271 0.203272 17.3845 0.062327 17.1146 0.0220596C16.8447 -0.0182078 16.5692 0.0454338 16.3476 0.199206C15.7342 0.651996 15.2221 1.21933 14.8418 1.86721C14.4616 2.5151 14.2211 3.2302 14.1348 3.9697C14.1349 4.77855 14.3269 5.5767 14.6959 6.30333C15.065 7.02996 15.6015 7.66592 16.2645 8.16274Z" fill="currentcolor"/>
    <path d="M7.16328 29.7138C5.86597 27.7051 5.17938 25.3866 5.18141 23.0212C5.18141 22.7558 5.07191 22.5013 4.87697 22.3136C4.68204 22.1259 4.41765 22.0205 4.14198 22.0205C3.8663 22.0205 3.60191 22.1259 3.40698 22.3136C3.21204 22.5013 3.10254 22.7558 3.10254 23.0212C3.10081 25.7653 3.89738 28.4551 5.40201 30.7857C5.55001 31.0072 5.78275 31.1637 6.04976 31.2211C6.31677 31.2784 6.59652 31.2322 6.82832 31.0923C7.06012 30.9524 7.22529 30.7301 7.288 30.4737C7.35071 30.2174 7.30588 29.9475 7.16328 29.7227V29.7138Z" fill="currentcolor"/>
    <path d="M9.06498 32.7103C8.94112 32.6482 8.84235 32.548 8.78434 32.4257C8.73082 32.3026 8.65227 32.1911 8.55334 32.0977C8.45441 32.0043 8.33708 31.9309 8.20825 31.8818C8.07942 31.8327 7.9417 31.8089 7.80317 31.8118C7.66464 31.8146 7.5281 31.8441 7.40159 31.8986C7.27508 31.953 7.16115 32.0312 7.06649 32.1286C6.97184 32.226 6.89837 32.3407 6.8504 32.4658C6.80244 32.591 6.78094 32.7241 6.78719 32.8574C6.79344 32.9906 6.8273 33.1213 6.88678 33.2418C7.13536 33.7758 7.56332 34.2136 8.10177 34.4849C8.34682 34.6079 8.63256 34.6321 8.89616 34.5523C9.15975 34.4724 9.37959 34.295 9.50732 34.0591C9.63505 33.8232 9.6602 33.5481 9.57725 33.2943C9.49429 33.0405 9.31003 32.8289 9.06498 32.7059V32.7103Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_605_8664">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  drinks: `<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8203)">
    <path d="M0 0L0.662157 8.11078C0.662157 8.12619 0.653028 8.1394 0.653028 8.15481C0.658117 8.18851 0.664982 8.22193 0.673584 8.25496L3.1852 39H25.1048L28.0034 0H0ZM25.7932 1.98093L25.4085 7.16985C25.3982 7.16985 25.3902 7.16985 25.3799 7.16985H2.64519L2.22279 1.98642L25.7932 1.98093ZM23.1948 37.0191H5.08147L2.80846 9.14527H25.2612L23.1948 37.0191Z" fill="currentcolor"/>
    <path d="M6.24983 23.3122C6.28864 23.3122 6.32861 23.3122 6.364 23.3122C6.49825 23.2972 6.6281 23.2567 6.74613 23.1933C6.86415 23.1298 6.96804 23.0445 7.05181 22.9423C7.13559 22.8401 7.19762 22.7229 7.23436 22.5975C7.2711 22.4722 7.28181 22.341 7.26589 22.2117C7.0661 20.5444 6.86517 18.8155 6.66538 17.0855C6.4576 15.2861 6.24869 13.4846 6.03862 11.7502C5.99894 11.4962 5.85848 11.267 5.64686 11.111C5.43525 10.955 5.16904 10.8843 4.90438 10.9138C4.63973 10.9434 4.39731 11.0708 4.22831 11.2694C4.0593 11.4679 3.9769 11.722 3.9985 11.978C4.20628 13.7091 4.41522 15.5084 4.623 17.3056C4.82392 19.0378 5.02485 20.77 5.22578 22.4395C5.25574 22.6807 5.37661 22.9029 5.56542 23.0638C5.75424 23.2247 5.99781 23.3131 6.24983 23.3122Z" fill="currentcolor"/>
    <path d="M6.05485 24.414C5.9204 24.4288 5.79029 24.469 5.67201 24.5323C5.55372 24.5957 5.44958 24.6809 5.36557 24.7832C5.28156 24.8854 5.21933 25.0027 5.18245 25.1282C5.14557 25.2537 5.13477 25.385 5.15067 25.5145L5.31392 26.8857C5.34197 27.1276 5.46141 27.351 5.64945 27.5134C5.83748 27.6758 6.08096 27.7658 6.33341 27.7662C6.37223 27.7662 6.41105 27.7662 6.44759 27.7607C6.5817 27.7462 6.71152 27.7063 6.82966 27.6434C6.9478 27.5806 7.05194 27.4959 7.13612 27.3942C7.22029 27.2925 7.28287 27.1758 7.32027 27.0508C7.35766 26.9258 7.36913 26.7949 7.35404 26.6656L7.1908 25.2889C7.15839 25.0286 7.02114 24.791 6.80864 24.6273C6.59614 24.4636 6.32541 24.387 6.05485 24.414Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8203">
    <rect width="28" height="39" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  snacks: `<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9739 12.3839H39.9673C39.8416 11.3068 39.529 10.2613 39.0441 9.29623C38.2937 7.89066 37.2396 6.67826 35.9616 5.75118C34.6837 4.82411 33.2156 4.20677 31.669 3.94605C31.658 3.94605 31.6471 3.94605 31.635 3.94605C29.7116 1.41671 26.4577 0.0219894 22.162 0.00292969C17.7851 0.0287164 14.3819 1.44362 12.4015 3.94605C12.3773 3.94605 12.3553 3.94605 12.3312 3.94605C10.7845 4.20721 9.31631 4.82484 8.03823 5.75207C6.76016 6.6793 5.70574 7.89174 4.95505 9.29734C4.47112 10.2623 4.15888 11.3074 4.03289 12.3839H4.02631C2.34137 14.0479 1.12087 16.1402 0.490328 18.4457C-0.140217 20.7512 -0.15805 23.1866 0.438675 25.5015C1.16762 28.1328 2.30494 29.6228 3.81991 29.9323C4.02143 29.975 4.22667 29.9968 4.43249 29.9973C5.03503 29.925 5.61546 29.722 6.13483 29.4017C6.6542 29.0815 7.1005 28.6516 7.44377 28.1407C8.13563 27.3077 8.96125 26.601 9.88529 26.0508C10.6588 25.658 11.4715 25.3513 12.3092 25.136C12.7407 25.007 13.2105 24.8624 13.7122 24.6875C14.2182 24.7717 14.7299 24.8148 15.2426 24.8164C16.5191 24.8132 17.7827 24.5561 18.963 24.0597C19.2243 24.1678 19.4915 24.2603 19.7633 24.3366C20.4624 24.5255 21.1737 24.6634 21.892 24.7492C21.9649 24.7584 22.0386 24.7584 22.1115 24.7492C22.8298 24.6634 23.5411 24.5255 24.2402 24.3366C24.5121 24.2602 24.7794 24.1674 25.0405 24.0585C26.6985 24.7663 28.5179 24.9843 30.2913 24.6875C30.7941 24.8568 31.2639 25.0014 31.6954 25.136C32.5326 25.3518 33.3449 25.6585 34.1182 26.0508C35.0422 26.6006 35.8675 27.3074 36.5586 28.1407C36.9021 28.6516 37.3486 29.0816 37.8682 29.4018C38.3877 29.722 38.9683 29.925 39.571 29.9973C39.7765 29.9968 39.9813 29.975 40.1825 29.9323C41.6986 29.6228 42.8359 28.1317 43.5648 25.5015C44.1604 23.1863 44.1418 20.7509 43.5107 18.4455C42.8796 16.1401 41.6588 14.0479 39.9739 12.3839ZM8.94886 24.276C7.83296 24.927 6.83512 25.7694 5.99906 26.7661C5.09447 27.7561 4.76074 28.07 4.20854 27.9568C3.49936 27.8111 2.83628 26.7459 2.34227 24.9543C1.92223 23.3112 1.86627 21.5932 2.17848 19.9252C2.4907 18.2572 3.16322 16.6814 4.14706 15.3124C4.29059 16.0686 4.52165 16.8048 4.83539 17.5054C6.01506 20.1182 8.00316 22.2624 10.4935 23.6078C9.96108 23.7857 9.44437 24.0092 8.94886 24.276ZM14.1514 22.7266C13.9962 22.6555 13.8256 22.6265 13.6562 22.6425C12.1235 22.2411 10.6976 21.4958 9.48221 20.461C8.26685 19.4261 7.2926 18.1277 6.63029 16.66C6.16216 15.6502 5.92631 14.5445 5.94077 13.4274C5.95523 12.3102 6.21962 11.2112 6.71373 10.2145C7.64306 8.45293 9.17618 7.10357 11.0193 6.42493C9.99726 9.36013 10.6472 13.6553 12.7165 17.6365C13.6785 19.5654 15.0132 21.2752 16.6401 22.6627C15.8195 22.8232 14.9787 22.8448 14.1514 22.7266ZM23.7451 22.3903C23.1716 22.5448 22.5889 22.6613 22.0007 22.7389C21.4117 22.6614 20.8283 22.5449 20.254 22.3903C18.2033 21.8521 16.0374 19.7219 14.462 16.6925C12.6704 13.2438 12.0469 9.47672 12.8834 7.09538C14.473 2.55356 19.9093 2.03223 22.1653 2.01765C25.4445 2.03783 29.66 2.93475 31.1157 7.09538C31.9501 9.4756 31.3353 13.2427 29.5393 16.6903C27.9628 19.7197 25.798 21.851 23.7451 22.3891V22.3903ZM27.3579 22.6649C28.9873 21.2782 30.3233 19.5673 31.2848 17.6365C33.353 13.6542 34.0019 9.36013 32.9798 6.42493C34.8231 7.1032 36.3564 8.45266 37.2854 10.2145C37.7798 11.2111 38.0446 12.31 38.0594 13.4271C38.0743 14.5442 37.8388 15.6501 37.371 16.66C36.7089 18.1267 35.7356 19.4246 34.5215 20.4595C33.3074 21.4945 31.883 22.2405 30.3517 22.6436C30.1773 22.6248 30.0013 22.6546 29.8423 22.73C29.0162 22.8474 28.1769 22.825 27.3579 22.6638V22.6649ZM41.6601 24.9555C41.165 26.7493 40.5009 27.8122 39.7939 27.9579C39.2516 28.07 38.9156 27.7595 38.0033 26.7673C37.1671 25.7707 36.1693 24.9284 35.0536 24.2772C34.5589 24.0089 34.0429 23.7839 33.5111 23.6045C36.0014 22.2591 37.9895 20.1148 39.1692 17.502C39.4825 16.8016 39.7135 16.0659 39.8575 15.3101C40.8408 16.6799 41.5127 18.2562 41.8245 19.9245C42.1364 21.5927 42.0802 23.311 41.6601 24.9543V24.9555Z" fill="currentColor"/>
    <path d="M17.3428 15.7782C16.1626 13.048 15.7674 10.0313 16.2032 7.08028C16.2231 6.94931 16.2174 6.81565 16.1867 6.68691C16.1559 6.55816 16.1006 6.43686 16.024 6.32994C15.9473 6.22302 15.8508 6.13257 15.7399 6.06375C15.629 5.99493 15.5059 5.94908 15.3777 5.92884C15.2495 5.90859 15.1186 5.91434 14.9925 5.94576C14.8665 5.97717 14.7477 6.03365 14.643 6.11194C14.5383 6.19023 14.4497 6.2888 14.3824 6.40205C14.315 6.5153 14.2701 6.641 14.2503 6.77197C13.7579 10.1061 14.2045 13.5144 15.538 16.5989C15.5889 16.7227 15.6636 16.8349 15.7575 16.9289C15.8515 17.0229 15.9628 17.0967 16.0851 17.1462C16.2074 17.1956 16.3381 17.2197 16.4695 17.2168C16.601 17.214 16.7306 17.1844 16.8507 17.1298C16.9709 17.0752 17.0791 16.9966 17.1691 16.8987C17.2591 16.8008 17.3291 16.6855 17.3749 16.5597C17.4208 16.4338 17.4415 16.2998 17.436 16.1656C17.4305 16.0315 17.3988 15.8997 17.3428 15.7782Z" fill="currentColor"/>
    <path d="M19.696 19.2067C19.2865 18.9533 18.9569 18.5852 18.7464 18.146C18.6921 18.023 18.6143 17.9124 18.5174 17.8206C18.4206 17.7288 18.3067 17.6578 18.1825 17.6118C18.0583 17.5658 17.9263 17.5456 17.7944 17.5526C17.6625 17.5596 17.5333 17.5935 17.4144 17.6524C17.2955 17.7112 17.1894 17.7939 17.1023 17.8953C17.0153 17.9968 16.949 18.1151 16.9075 18.2432C16.866 18.3712 16.85 18.5065 16.8606 18.641C16.8712 18.7755 16.908 18.9065 16.969 19.0262C17.3477 19.8156 17.9407 20.4772 18.6772 20.9321C18.7884 21.0004 18.9117 21.0457 19.0401 21.0654C19.1684 21.085 19.2993 21.0786 19.4253 21.0466C19.5512 21.0146 19.6698 20.9576 19.7741 20.8788C19.8785 20.8 19.9666 20.701 20.0335 20.5874C20.1004 20.4738 20.1448 20.3478 20.164 20.2168C20.1832 20.0857 20.177 19.952 20.1456 19.8234C20.1143 19.6947 20.0585 19.5737 19.9813 19.4671C19.9041 19.3605 19.8072 19.2705 19.696 19.2022V19.2067Z" fill="currentColor"/>
    </svg>
    `,
  meals: `<svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8219)">
    <path d="M42.941 2.11595C42.7415 1.9851 42.4981 1.93888 42.2644 1.98745C42.0307 2.03602 41.8259 2.1754 41.695 2.37496L34.006 14.102C33.3796 13.6496 32.7178 13.2483 32.027 12.902C32.0551 12.8557 32.0786 12.8068 32.097 12.756L35.4431 1.14795C35.5094 0.91841 35.4818 0.671927 35.3663 0.46273C35.2509 0.253533 35.0571 0.098759 34.8275 0.0324549C34.598 -0.0338492 34.3515 -0.0062506 34.1423 0.109178C33.9331 0.224607 33.7783 0.41841 33.712 0.647954L30.382 12.202C28.8498 11.6558 27.2357 11.3751 25.609 11.372C23.5868 11.3208 21.5789 11.7248 19.7337 12.5541C17.8886 13.3834 16.2534 14.6167 14.949 16.163C13.472 15.5617 11.8698 15.3326 10.2834 15.4959C8.69704 15.6593 7.17511 16.21 5.85156 17.0996C4.528 17.9893 3.44339 19.1906 2.69314 20.5978C1.94289 22.0051 1.54999 23.5752 1.54904 25.17H0.900049C0.781014 25.1699 0.663159 25.1936 0.553309 25.2394C0.443459 25.2853 0.343801 25.3524 0.260096 25.4371C0.176391 25.5217 0.110305 25.6221 0.0656684 25.7325C0.0210317 25.8428 -0.00126705 25.9609 5.5571e-05 26.08C0.0892682 29.5951 1.16582 33.0142 3.10662 35.9464C5.04743 38.8786 7.77413 41.2054 10.975 42.661V45.147C10.975 45.3856 11.0699 45.6146 11.2386 45.7834C11.4074 45.9521 11.6364 46.047 11.8751 46.047H29.692C29.9307 46.047 30.1596 45.9521 30.3284 45.7834C30.4972 45.6146 30.592 45.3856 30.592 45.147V42.665C33.7927 41.2092 36.5191 38.8822 38.4597 35.9501C40.4004 33.018 41.4768 29.599 41.566 26.084C41.5674 25.9649 41.5451 25.8468 41.5004 25.7365C41.4558 25.6261 41.3897 25.5257 41.306 25.4411C41.2223 25.3565 41.1226 25.2893 41.0128 25.2434C40.9029 25.1976 40.7851 25.1739 40.666 25.174H39.976C39.82 21.3924 38.1759 17.8258 35.402 15.251L43.197 3.36196C43.3282 3.16274 43.3749 2.91961 43.3269 2.68598C43.2789 2.45235 43.1401 2.24733 42.941 2.11595ZM11.292 17.249C13.3949 17.2513 15.4113 18.0864 16.9 19.5716C18.3887 21.0568 19.2286 23.0711 19.236 25.174H18.476C18.4537 23.2835 17.6871 21.4779 16.3423 20.149C14.9976 18.82 13.1832 18.0747 11.2925 18.0747C9.4019 18.0747 7.58747 18.82 6.24273 20.149C4.89799 21.4779 4.13134 23.2835 4.10903 25.174H3.34905C3.35619 23.0712 4.1959 21.0569 5.68447 19.5717C7.17304 18.0865 9.18928 17.2513 11.292 17.249ZM30.46 25.174C30.3295 24.0738 29.829 23.0506 29.0406 22.2723C28.2521 21.494 27.2226 21.0067 26.1208 20.8904C25.019 20.7742 23.9104 21.0358 22.9769 21.6324C22.0433 22.2291 21.3403 23.1252 20.983 24.174C20.8976 23.3879 20.7156 22.6154 20.441 21.874C21.2275 20.8287 22.312 20.0461 23.5519 19.6292C24.7917 19.2124 26.1287 19.1807 27.3869 19.5384C28.6451 19.8962 29.7655 20.6265 30.6005 21.6334C31.4356 22.6402 31.9461 23.8763 32.065 25.179L30.46 25.174ZM28.66 25.174H22.555C22.6942 24.4666 23.0746 23.8296 23.6314 23.3717C24.1882 22.9138 24.8867 22.6634 25.6075 22.6634C26.3284 22.6634 27.0269 22.9138 27.5837 23.3717C28.1404 23.8296 28.5209 24.4666 28.66 25.174ZM33.8661 25.174C33.7524 23.5697 33.1734 22.0335 32.1999 20.7533C31.2265 19.4731 29.9008 18.5046 28.3853 17.9663C26.8698 17.428 25.2303 17.3434 23.6674 17.7227C22.1045 18.102 20.6862 18.9288 19.5861 20.102C19.3425 19.7013 19.0704 19.3187 18.772 18.957C19.6483 18.0285 20.7095 17.2942 21.8871 16.8014C23.0648 16.3086 24.3327 16.0683 25.609 16.096C28.0701 16.1 30.4374 17.0409 32.2298 18.7275C34.0222 20.414 35.1053 22.7196 35.259 25.176L33.8661 25.174ZM15.376 25.174C15.376 24.0911 14.9459 23.0525 14.1802 22.2868C13.4145 21.5211 12.3759 21.091 11.2931 21.091C10.2102 21.091 9.17165 21.5211 8.40594 22.2868C7.64023 23.0525 7.21005 24.0911 7.21005 25.174H5.91003C5.92931 23.7594 6.5048 22.4093 7.51193 21.4158C8.51906 20.4223 9.87684 19.8653 11.2915 19.8653C12.7062 19.8653 14.064 20.4223 15.0712 21.4158C16.0783 22.4093 16.6537 23.7594 16.673 25.174H15.376ZM13.576 25.174H9.01205C9.02455 24.5769 9.27051 24.0085 9.6972 23.5906C10.1239 23.1728 10.6973 22.9387 11.2945 22.9387C11.8918 22.9387 12.4652 23.1728 12.8919 23.5906C13.3186 24.0085 13.5646 24.5769 13.5771 25.174H13.576ZM12.7761 44.251V43.132H28.792V44.251H12.7761ZM29.136 41.332H12.436C9.52258 40.1406 6.99281 38.1712 5.12332 35.6389C3.25383 33.1066 2.11663 30.109 1.83605 26.974H39.7281C39.4482 30.1081 38.3122 33.1051 36.4441 35.6373C34.5761 38.1695 32.048 40.1395 29.136 41.332ZM38.178 25.174H37.0601C36.9048 22.2401 35.6312 19.4773 33.5013 17.4538C31.3713 15.4303 28.547 14.2998 25.609 14.295C24.0957 14.2643 22.5927 14.55 21.1962 15.1338C19.7996 15.7176 18.5404 16.5865 17.499 17.685C17.2087 17.4481 16.9052 17.2277 16.5901 17.025C17.7218 15.7645 19.1155 14.7668 20.6734 14.1017C22.2314 13.4367 23.9159 13.1204 25.609 13.175C28.8438 13.1792 31.9531 14.4275 34.2929 16.6611C36.6327 18.8948 38.0237 21.9428 38.178 25.174Z" fill="currentColor"/>
    <path d="M3.39209 30.1722C4.045 32.6025 5.31628 34.8222 7.08209 36.6152C7.16443 36.7021 7.26327 36.7717 7.37286 36.8199C7.48244 36.8682 7.60056 36.8941 7.72027 36.8961C7.83999 36.8981 7.95888 36.8762 8.07003 36.8317C8.18118 36.7872 8.28235 36.7209 8.36758 36.6368C8.45281 36.5528 8.52038 36.4525 8.56637 36.342C8.61237 36.2314 8.63585 36.1128 8.63543 35.9931C8.63501 35.8733 8.6107 35.7549 8.56393 35.6447C8.51716 35.5344 8.44888 35.4347 8.36306 35.3512C6.81633 33.7796 5.70257 31.8346 5.13006 29.7052C5.1013 29.589 5.04966 29.4797 4.97815 29.3837C4.90663 29.2878 4.81669 29.207 4.71359 29.1462C4.61049 29.0854 4.49631 29.0458 4.37771 29.0297C4.25912 29.0136 4.1385 29.0213 4.02291 29.0523C3.90733 29.0834 3.7991 29.1372 3.70456 29.2106C3.61001 29.284 3.53106 29.3755 3.47232 29.4798C3.41357 29.584 3.3762 29.699 3.36242 29.8179C3.34865 29.9368 3.35875 30.0572 3.39209 30.1722Z" fill="#323232"/>
    <path d="M10.5356 39.5502C10.7282 39.6767 10.962 39.7245 11.1889 39.6838C11.4157 39.643 11.6182 39.5168 11.7547 39.3312C11.8913 39.1456 11.9514 38.9146 11.9227 38.6859C11.8941 38.4573 11.7788 38.2483 11.6006 38.1022L10.3336 37.1752C10.1407 37.0392 9.90209 36.9844 9.66918 37.0226C9.43627 37.0609 9.2277 37.1891 9.08843 37.3797C8.94915 37.5702 8.89031 37.8079 8.92458 38.0414C8.95884 38.2749 9.08345 38.4857 9.27159 38.6282L10.5356 39.5502Z" fill="#323232"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8219">
    <rect width="43.348" height="46.051" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
};
var CateringItemFiltersComponent = class _CateringItemFiltersComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(CateringOrderStateService);
    this._settings = inject(SettingsService);
    this.search = input(
      false,
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.at_time = model(
      false,
      ...ngDevMode ? [{ debugName: "at_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = model(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_day = model(
      0,
      ...ngDevMode ? [{ debugName: "offset_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._min_offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "_min_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._max_offset = signal(
      60,
      ...ngDevMode ? [{ debugName: "_max_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icons = ICONS;
    this.filters = this._state.filters;
    this.setFilters = (f) => this._state.setFilters(f);
    this.categories = this._state.categories;
    this.caterers = this._state.caterers;
    this.exact_tooltip = signal(
      "",
      ...ngDevMode ? [{ debugName: "exact_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_of_date = computed(
      () => {
        return startOfDay(addDays(this.filters().date, this.offset_day())).valueOf();
      },
      ...ngDevMode ? [{ debugName: "start_of_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_offset = computed(
      () => this.offset_day() > 0 ? 0 : this._min_offset(),
      ...ngDevMode ? [{ debugName: "min_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._step_interval = this._settings.signal("catering.step_interval", 5);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._min_offset_setting = this._settings.signal("catering.min_offset", 0);
    this._end_offset = this._settings.signal("catering.end_offset", 0);
    this.step_interval = this._step_interval;
    this.max_offset = computed(
      () => {
        const end = Math.min(endOfDay(addDays(this.filters().date, this.offset_day())).valueOf(), addMinutes(this.filters().date, this.filters().duration).valueOf());
        const diff = differenceInMinutes(end, this.filters().date);
        return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset()));
      },
      ...ngDevMode ? [{ debugName: "max_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = this._use_24hr;
    this.day_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "day_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._min_offset.set(Math.max(this._min_offset_setting(), 0));
    this.exact_tooltip.set(i18n("CATERING.ORDERS_DELIVER_EXACT_INFO"));
    this._max_offset.set(Math.max(15, (this._state.getFilters().duration || 60) - this._end_offset()));
    this._updateDayOptions();
  }
  toggleCategory(name) {
    const { categories } = this.filters();
    if (categories.includes(name))
      this.setFilters({
        categories: categories.filter((_) => _ !== name)
      });
    else
      this.setFilters({ categories: [...categories, name] });
  }
  toggleTag(tag) {
    const { tags } = this.filters();
    if (tags.includes(tag))
      this.setFilters({ tags: tags.filter((_) => _ !== tag) });
    else
      this.setFilters({ tags: [...tags, tag] });
  }
  _updateDayOptions() {
    const { date, duration } = this._state.getFilters();
    if (duration <= 24 * 60)
      return this.day_options.set([]);
    let day = startOfDay(date);
    let count = 0;
    const end = endOfDay(addMinutes(date, duration)).valueOf();
    const options = [];
    while (day.valueOf() <= end) {
      options.push({ id: count, value: day.valueOf() });
      day = addDays(day, 1);
      count++;
    }
    this.day_options.set(options);
  }
  static {
    this.\u0275fac = function CateringItemFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemFiltersComponent, selectors: [["catering-item-filters"]], inputs: { search: [1, "search"], at_time: [1, "at_time"], offset: [1, "offset"], offset_day: [1, "offset_day"] }, outputs: { at_time: "at_timeChange", offset: "offsetChange", offset_day: "offset_dayChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 15, consts: [[1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "flex", "items-center", "border-b", "px-4", "py-4"], [1, "text-xl", "font-medium"], [1, "mt-2", "mb-2", "px-2"], ["appearance", "outline", 1, "h-14", "w-full"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "hidden", "px-2", "py-2", "sm:block"], [1, "hidden", "px-2", "py-2", "font-medium", "sm:block"], [1, "flex", "flex-col", "space-y-2", "px-2"], [1, "hidden", "px-2", "py-4", "font-medium", "sm:block"], [3, "label", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngModelChange", "label", "ngModel", "matTooltip"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], [3, "ngModelChange", "label", "ngModel"]], template: function CateringItemFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "mat-form-field", 3)(6, "icon", 4);
        \u0275\u0275text(7, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "input", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("ngModelChange", function CateringItemFiltersComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.setFilters({ search: $event });
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, CateringItemFiltersComponent_Conditional_10_Template, 8, 4, "div", 6);
        \u0275\u0275conditionalCreate(11, CateringItemFiltersComponent_Conditional_11_Template, 3, 3, "h3", 7);
        \u0275\u0275conditionalCreate(12, CateringItemFiltersComponent_Conditional_12_Template, 8, 15, "div", 8);
        \u0275\u0275conditionalCreate(13, CateringItemFiltersComponent_Conditional_13_Template, 3, 3, "h3", 9);
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275repeaterCreate(15, CateringItemFiltersComponent_For_16_Template, 1, 3, "settings-toggle", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.filters().search)("placeholder", \u0275\u0275pipeBind1(9, 13, "CATERING.MENU_SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.search() && ctx.caterers().length > 1 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.search() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.search() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.search() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("sm:hidden", ctx.search())("sm:pt-1", !ctx.search());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.categories());
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      DurationFieldComponent,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      SettingsToggleComponent,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemFiltersComponent, [{
    type: Component,
    args: [{ selector: "catering-item-filters", template: `
        <div
            class="border-base-300 bg-base-100 sticky top-0 z-10 flex items-center border-b px-4 py-4"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        </div>
        <div class="mt-2 mb-2 px-2">
            <mat-form-field appearance="outline" class="h-14 w-full">
                <icon matPrefix class="text-xl">search</icon>
                <input
                    matInput
                    [ngModel]="filters().search"
                    (ngModelChange)="setFilters({ search: $event })"
                    [placeholder]="'CATERING.MENU_SEARCH' | translate"
                />
            </mat-form-field>
        </div>
        @if (!search() && caterers().length > 1) {
            <div class="hidden px-2 py-2 sm:block">
                <label>{{ 'CATERING.CATERER' | translate }}</label>
                <mat-form-field appearance="outline" class="h-14 w-full">
                    <mat-select
                        [ngModel]="filters().caterer || caterers()[0]"
                        (ngModelChange)="setFilters({ caterer: $event })"
                    >
                        @for (caterer of caterers(); track caterer) {
                            <mat-option [value]="caterer || '<empty>'">
                                {{ caterer || '[No caterer]' }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
        @if (!search()) {
            <h3 class="hidden px-2 py-2 font-medium sm:block">
                {{ 'COMMON.FILTERS' | translate }}
            </h3>
        }
        @if (!search()) {
            <div class="flex flex-col space-y-2 px-2">
                <settings-toggle
                    [label]="'CATERING.ORDERS_DELIVER_EXACT' | translate"
                    [ngModel]="at_time()"
                    (ngModelChange)="at_time.set($event)"
                    [matTooltip]="exact_tooltip()"
                ></settings-toggle>
                @if (day_options().length > 1) {
                    <label>{{
                        'CATERING.ORDERS_DELIVER_DATE' | translate
                    }}</label>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript mb-4 w-full"
                    >
                        <mat-select
                            [ngModel]="offset_day()"
                            (ngModelChange)="offset_day.set($event)"
                        >
                            @for (day of day_options(); track day) {
                                <mat-option [value]="day.id">
                                    {{ day.value | date: 'mediumDate' }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
                <label>{{ 'CATERING.ORDERS_DELIVER_AFTER' | translate }}</label>
                <a-duration-field
                    [ngModel]="offset()"
                    (ngModelChange)="offset.set($event)"
                    [time]="offset_day() > 0 ? start_of_date() : filters().date"
                    [step]="step_interval()"
                    [min]="min_offset()"
                    [max]="max_offset()"
                    [use_24hr]="use_24hr()"
                ></a-duration-field>
            </div>
        }
        @if (!search()) {
            <h3 class="hidden px-2 py-4 font-medium sm:block">
                {{ 'COMMON.CATEGORIES' | translate }}
            </h3>
        }
        <div
            class="flex flex-col space-y-2 px-2"
            [class.sm:hidden]="search()"
            [class.sm:pt-1]="!search()"
        >
            @for (item of categories(); track item) {
                <settings-toggle
                    [label]="item"
                    [attr.name]="item"
                    [ngModel]="filters().categories?.includes(item)"
                    (ngModelChange)="toggleCategory(item)"
                ></settings-toggle>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatFormFieldModule,
      DurationFieldComponent,
      MatSelectModule,
      MatInputModule,
      FormsModule,
      SettingsToggleComponent,
      MatTooltipModule
    ] }]
  }], () => [], { search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }], at_time: [{ type: Input, args: [{ isSignal: true, alias: "at_time", required: false }] }, { type: Output, args: ["at_timeChange"] }], offset: [{ type: Input, args: [{ isSignal: true, alias: "offset", required: false }] }, { type: Output, args: ["offsetChange"] }], offset_day: [{ type: Input, args: [{ isSignal: true, alias: "offset_day", required: false }] }, { type: Output, args: ["offset_dayChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemFiltersComponent, { className: "CateringItemFiltersComponent", filePath: "libs/catering/src/lib/catering-select-modal/catering-item-filters.component.ts", lineNumber: 197 });
})();

// libs/catering/src/lib/catering-select-modal/catering-item-list-item.component.ts
function CateringItemListItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item().quantity || "1", " ");
  }
}
function CateringItemListItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.item().images[0]);
  }
}
function CateringItemListItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function CateringItemListItemComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.item().unit_price / 100, ctx_r0.code()), " ");
  }
}
function CateringItemListItemComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.options(), " ");
  }
}
function CateringItemListItemComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " GF ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " VG ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " V ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " D ");
    \u0275\u0275elementEnd();
  }
}
function CateringItemListItemComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " N ");
    \u0275\u0275elementEnd();
  }
}
var CateringItemListItemComponent = class _CateringItemListItemComponent {
  constructor() {
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = input(
      false,
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_count = input(
      false,
      ...ngDevMode ? [{ debugName: "show_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favourite = input(
      false,
      ...ngDevMode ? [{ debugName: "favourite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.code = input(
      "USD",
      ...ngDevMode ? [{ debugName: "code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleFav = output();
    this.select = output();
    this.options = computed(
      () => {
        return this.item().option_list?.map((_) => _.name).join(", ");
      },
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function CateringItemListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemListItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemListItemComponent, selectors: [["catering-item-list-item"]], inputs: { item: [1, "item"], active: [1, "active"], show_count: [1, "show_count"], favourite: [1, "favourite"], code: [1, "code"] }, outputs: { toggleFav: "toggleFav", select: "select" }, decls: 23, vars: 20, consts: [["item", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "relative", "w-full", "rounded-lg", "border", "p-2", "shadow-sm"], ["name", "select-catering-item", 1, "z-0", "flex", "h-full", "w-full", "items-center", 3, "click"], [1, "border-base-200", "bg-neutral", "relative", "mr-4", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border"], [1, "bg-neutral", "absolute", "top-1", "left-1", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "border", "border-white", "text-xs", "text-white"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], ["src", "assets/icons/catering-placeholder.svg", 1, "m-auto"], [1, "flex-1", "space-y-2", "text-left"], [1, "flex", "flex-col", "pr-10", "font-medium"], [1, "text-xs", "opacity-60"], [1, "flex", "items-center", "space-x-1", "text-sm"], [1, "bg-base-100", "w-px", "flex-1", "rounded-sm"], [1, "border-base-200", "rounded-2xl", "border", "px-2", "py-1", "text-xs", "shadow-sm"], [1, "bg-success", "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "text-xs", "shadow-sm"], [1, "bg-info", "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "text-xs", "shadow-sm"], [1, "bg-warning", "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "text-xs", "shadow-sm"], [1, "flex", "h-5", "w-7", "items-center", "justify-center", "rounded-xl", "bg-orange-600", "text-xs", "shadow-sm"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [3, "className"]], template: function CateringItemListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 0)(1, "button", 1);
        \u0275\u0275listener("click", function CateringItemListItemComponent_Template_button_click_1_listener() {
          return ctx.select.emit();
        });
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275conditionalCreate(3, CateringItemListItemComponent_Conditional_3_Template, 2, 1, "div", 3);
        \u0275\u0275conditionalCreate(4, CateringItemListItemComponent_Conditional_4_Template, 1, 1, "img", 4)(5, CateringItemListItemComponent_Conditional_5_Template, 1, 0, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275conditionalCreate(13, CateringItemListItemComponent_Conditional_13_Template, 3, 4, "p", 10);
        \u0275\u0275conditionalCreate(14, CateringItemListItemComponent_Conditional_14_Template, 2, 1, "div", 11);
        \u0275\u0275conditionalCreate(15, CateringItemListItemComponent_Conditional_15_Template, 2, 0, "div", 12);
        \u0275\u0275conditionalCreate(16, CateringItemListItemComponent_Conditional_16_Template, 2, 0, "div", 13);
        \u0275\u0275conditionalCreate(17, CateringItemListItemComponent_Conditional_17_Template, 2, 0, "div", 13);
        \u0275\u0275conditionalCreate(18, CateringItemListItemComponent_Conditional_18_Template, 2, 0, "div", 14);
        \u0275\u0275conditionalCreate(19, CateringItemListItemComponent_Conditional_19_Template, 2, 0, "div", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "button", 16);
        \u0275\u0275listener("click", function CateringItemListItemComponent_Template_button_click_20_listener() {
          return ctx.toggleFav.emit();
        });
        \u0275\u0275elementStart(21, "icon", 17);
        \u0275\u0275text(22, "favorite");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-info!", ctx.active())("ring-2", ctx.active())("ring-info", ctx.active());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.item().quantity && ctx.show_count() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().images?.length ? 4 : 5);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.item().name || "Item");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.item().category, " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.item().unit_price ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().option_list?.length ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().tags?.includes("Gluten Free") ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().tags?.includes("Vegan") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().tags?.includes("Vegetarian") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().tags?.includes("Contains Dairy") ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().tags?.includes("Contains Nuts") ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("text-info", ctx.favourite());
        \u0275\u0275advance();
        \u0275\u0275property("className", ctx.favourite() ? "material-symbols-rounded" : "material-symbols-outlined");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      CurrencyPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemListItemComponent, [{
    type: Component,
    args: [{ selector: "catering-item-list-item", template: `
        <li
            item
            [class.border-info!]="active()"
            [class.ring-2]="active()"
            [class.ring-info]="active()"
            matRipple
            class="border-base-200 bg-base-100 relative w-full rounded-lg border p-2 shadow-sm"
        >
            <button
                name="select-catering-item"
                class="z-0 flex h-full w-full items-center"
                (click)="select.emit()"
            >
                <div
                    class="border-base-200 bg-neutral relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border"
                >
                    @if (item().quantity && show_count()) {
                        <div
                            class="bg-neutral absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border border-white text-xs text-white"
                        >
                            {{ item().quantity || '1' }}
                        </div>
                    }
                    @if (item().images?.length) {
                        <img
                            auth
                            class="min-h-full min-w-full object-cover"
                            [source]="item().images[0]"
                        />
                    } @else {
                        <img
                            class="m-auto"
                            src="assets/icons/catering-placeholder.svg"
                        />
                    }
                </div>
                <div class="flex-1 space-y-2 text-left">
                    <div class="flex flex-col pr-10 font-medium">
                        <div>{{ item().name || 'Item' }}</div>
                        <div class="text-xs opacity-60">
                            {{ item().category }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-1 text-sm">
                        @if (item().unit_price) {
                            <p class="bg-base-100 w-px flex-1 rounded-sm">
                                {{ item().unit_price / 100 | currency: code() }}
                            </p>
                        }
                        @if (item().option_list?.length) {
                            <div
                                class="border-base-200 rounded-2xl border px-2 py-1 text-xs shadow-sm"
                            >
                                {{ options() }}
                            </div>
                        }
                        @if (item().tags?.includes('Gluten Free')) {
                            <div
                                class="bg-success flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                GF
                            </div>
                        }
                        @if (item().tags?.includes('Vegan')) {
                            <div
                                class="bg-info flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                VG
                            </div>
                        }
                        @if (item().tags?.includes('Vegetarian')) {
                            <div
                                class="bg-info flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                V
                            </div>
                        }
                        @if (item().tags?.includes('Contains Dairy')) {
                            <div
                                class="bg-warning flex h-5 w-7 items-center justify-center rounded-xl text-xs shadow-sm"
                            >
                                D
                            </div>
                        }
                        @if (item().tags?.includes('Contains Nuts')) {
                            <div
                                class="flex h-5 w-7 items-center justify-center rounded-xl bg-orange-600 text-xs shadow-sm"
                            >
                                N
                            </div>
                        }
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                name="toggle-catering-item-favourite"
                class="absolute top-1 right-1"
                [class.text-info]="favourite()"
                (click)="toggleFav.emit()"
            >
                <icon
                    [className]="
                        favourite()
                            ? 'material-symbols-rounded'
                            : 'material-symbols-outlined'
                    "
                    >favorite</icon
                >
            </button>
        </li>
    `, imports: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      AuthenticatedImageDirective
    ] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], show_count: [{ type: Input, args: [{ isSignal: true, alias: "show_count", required: false }] }], favourite: [{ type: Input, args: [{ isSignal: true, alias: "favourite", required: false }] }], code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: false }] }], toggleFav: [{ type: Output, args: ["toggleFav"] }], select: [{ type: Output, args: ["select"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemListItemComponent, { className: "CateringItemListItemComponent", filePath: "libs/catering/src/lib/catering-select-modal/catering-item-list-item.component.ts", lineNumber: 133 });
})();

// libs/catering/src/lib/catering-select-modal/catering-item-list.component.ts
var _c02 = (a0) => ({ count: a0 });
function CateringItemListComponent_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "catering-item-list-item", 6);
    \u0275\u0275listener("toggleFav", function CateringItemListComponent_Conditional_1_For_8_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(item_r2));
    })("select", function CateringItemListComponent_Conditional_1_For_8_Template_catering_item_list_item_select_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r2, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("active", ctx_r2.isActive(item_r2))("show_count", true)("favourite", ctx_r2.isFavourite(item_r2.id));
  }
}
function CateringItemListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 4);
    \u0275\u0275repeaterCreate(7, CateringItemListComponent_Conditional_1_For_8_Template, 1, 4, "catering-item-list-item", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "CATERING.ORDER_SELECTED_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, "CATERING.ORDER_SELECTED_COUNT", \u0275\u0275pureFunction1(7, _c02, ctx_r2.list().length || 0)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.list());
  }
}
function CateringItemListComponent_Conditional_8_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "catering-item-list-item", 9);
    \u0275\u0275listener("toggleFav", function CateringItemListComponent_Conditional_8_Conditional_0_For_2_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFav.emit(item_r5));
    })("select", function CateringItemListComponent_Conditional_8_Conditional_0_For_2_Template_catering_item_list_item_select_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r5, true));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("item", item_r5)("active", ctx_r2.isActive(item_r5))("show_count", false)("favourite", ctx_r2.isFavourite(item_r5.id))("code", ctx_r2.code());
  }
}
function CateringItemListComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275repeaterCreate(1, CateringItemListComponent_Conditional_8_Conditional_0_For_2_Template, 1, 5, "catering-item-list-item", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.item_list());
  }
}
function CateringItemListComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CATERING.ORDER_ITEMS_EMPTY"), " ");
  }
}
function CateringItemListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringItemListComponent_Conditional_8_Conditional_0_Template, 3, 0, "ul", 4)(1, CateringItemListComponent_Conditional_8_Conditional_1_Template, 4, 3, "div", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.item_list().length ? 0 : 1);
  }
}
function CateringItemListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "CATERING.ORDER_ITEMS_LOADING"), " ");
  }
}
var CateringItemListComponent = class _CateringItemListComponent {
  constructor() {
    this._state = inject(CateringOrderStateService);
    this.active = input(
      "",
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = input(
      [],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_items = input(
      [],
      ...ngDevMode ? [{ debugName: "selected_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = input(
      [],
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleFav = output();
    this.onSelect = output();
    this.list = computed(
      () => this.selected_items() || [],
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.item_list = this._state.filtered_menu;
    this.code = computed(
      () => this._state.currency_code,
      ...ngDevMode ? [{ debugName: "code" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  isFavourite(item_id) {
    return this.favorites()?.includes(item_id);
  }
  isActive(item) {
    return this.active() === item.custom_id;
  }
  selectItem(item, clear_state = false) {
    this.onSelect.emit(item);
    if (clear_state) {
      item.options?.forEach((_) => delete _.active);
    }
  }
  static {
    this.\u0275fac = function CateringItemListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringItemListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringItemListComponent, selectors: [["catering-item-list"]], inputs: { active: [1, "active"], selected: [1, "selected"], selected_items: [1, "selected_items"], favorites: [1, "favorites"] }, outputs: { toggleFav: "toggleFav", onSelect: "onSelect" }, decls: 10, vars: 11, consts: [[1, "h-full", "w-full", "py-2"], [1, "px-2", "font-bold"], ["count", "", 1, "mb-2", "px-2", "text-sm", "opacity-60"], ["loading", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "list-style-none", "space-y-2", "p-2"], [1, "block", 3, "item", "active", "show_count", "favourite"], [1, "block", 3, "toggleFav", "select", "item", "active", "show_count", "favourite"], ["empty", "", 1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-16"], [1, "block", 3, "item", "active", "show_count", "favourite", "code"], [1, "block", 3, "toggleFav", "select", "item", "active", "show_count", "favourite", "code"], [1, "text-center", "opacity-30"], [3, "diameter"], [1, "opacity-30"]], template: function CateringItemListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, CateringItemListComponent_Conditional_1_Template, 9, 9);
        \u0275\u0275elementStart(2, "h3", 1);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, CateringItemListComponent_Conditional_8_Template, 2, 1)(9, CateringItemListComponent_Conditional_9_Template, 5, 4, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.list().length ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "COMMON.RESULTS"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "COMMON.RESULTS_COUNT", \u0275\u0275pureFunction1(9, _c02, ctx.item_list().length || 0)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 8 : 9);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      CateringItemListItemComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringItemListComponent, [{
    type: Component,
    args: [{ selector: "catering-item-list", template: `
        <div class="h-full w-full py-2">
            @if (list().length) {
                <h3 class="px-2 font-bold">
                    {{ 'CATERING.ORDER_SELECTED_HEADER' | translate }}
                </h3>
                <p count class="mb-2 px-2 text-sm opacity-60">
                    {{
                        'CATERING.ORDER_SELECTED_COUNT'
                            | translate: { count: list().length || 0 }
                    }}
                </p>
                <ul class="list-style-none space-y-2 p-2">
                    @for (item of list(); track item) {
                        <catering-item-list-item
                            class="block"
                            [item]="item"
                            [active]="isActive(item)"
                            [show_count]="true"
                            [favourite]="isFavourite(item.id)"
                            (toggleFav)="toggleFav.emit(item)"
                            (select)="selectItem(item, true)"
                        ></catering-item-list-item>
                    }
                </ul>
            }
            <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
            <p count class="mb-2 px-2 text-sm opacity-60">
                {{
                    'COMMON.RESULTS_COUNT'
                        | translate: { count: item_list().length || 0 }
                }}
            </p>
            @if (!loading()) {
                @if (item_list().length) {
                    <ul class="list-style-none space-y-2 p-2">
                        @for (item of item_list(); track item) {
                            <catering-item-list-item
                                class="block"
                                [item]="item"
                                [active]="isActive(item)"
                                [show_count]="false"
                                [favourite]="isFavourite(item.id)"
                                [code]="code()"
                                (toggleFav)="toggleFav.emit(item)"
                                (select)="selectItem(item, true)"
                            ></catering-item-list-item>
                        }
                    </ul>
                } @else {
                    <div
                        empty
                        class="flex flex-col items-center justify-center space-y-2 p-16"
                    >
                        <p class="text-center opacity-30">
                            {{ 'CATERING.ORDER_ITEMS_EMPTY' | translate }}
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
                        {{ 'CATERING.ORDER_ITEMS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      TranslatePipe,
      MatProgressSpinnerModule,
      CateringItemListItemComponent
    ] }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], selected_items: [{ type: Input, args: [{ isSignal: true, alias: "selected_items", required: false }] }], favorites: [{ type: Input, args: [{ isSignal: true, alias: "favorites", required: false }] }], toggleFav: [{ type: Output, args: ["toggleFav"] }], onSelect: [{ type: Output, args: ["onSelect"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringItemListComponent, { className: "CateringItemListComponent", filePath: "libs/catering/src/lib/catering-select-modal/catering-item-list.component.ts", lineNumber: 89 });
})();

// libs/catering/src/lib/catering-select-modal/catering-select-modal.component.ts
function CateringSelectModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CateringSelectModalComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_filters.update((_) => !_));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.show_filters() ? "close" : "filter_list");
  }
}
var EMPTY_FAVS = [];
var CateringSelectModalComponent = class _CateringSelectModalComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._order = inject(CateringOrderStateService);
    this._org = inject(OrganisationService);
    this._data = inject(MAT_DIALOG_DATA);
    this.displayed = signal(
      null,
      ...ngDevMode ? [{ debugName: "displayed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      [
        ...this._data.items || []
      ],
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.exact_time = signal(
      this._data.exact_time ?? false,
      ...ngDevMode ? [{ debugName: "exact_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_day = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._min_offset = this._settings.signal("catering.min_offset", 0);
    this._end_offset = this._settings.signal("catering.end_offset", 0);
    this.show_filters = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = computed(
      () => {
        return this._settings.signal(SETTING_KEYS.FAVORITE_DESKS, EMPTY_FAVS, true)() || EMPTY_FAVS;
      },
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_keys = computed(
      () => this.selected().map((_) => this.selectionKey(_)),
      ...ngDevMode ? [{ debugName: "selected_keys" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.count = computed(
      () => this.selected().reduce((t, i) => t + i.quantity, 0),
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.code = computed(
      () => {
        this._org.active_building?.();
        return this._org.currency_code;
      },
      ...ngDevMode ? [{ debugName: "code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const { duration } = this._data.details;
    this._order.setFilters(this._data.details);
    this.offset.set(Math.min(Math.max(this._min_offset(), this._data.offset || 0), (duration || 60) - this._end_offset()));
    this.offset_day.set(this._data.offset_day || 0);
    if (this._data.caterer) {
      this._order.setFilters({ caterer: this._data.caterer });
    }
  }
  itemSelectionId(item) {
    return item?.custom_id?.replace(/menu$/, "") || "";
  }
  selectionKey(item) {
    return `${item?.caterer || ""}::${this.itemSelectionId(item)}`;
  }
  setSelected(item, state) {
    if (!item)
      return;
    const selection_key = this.selectionKey(item);
    const selected = this.selected();
    const existing_index = selected.findIndex((_) => this.selectionKey(_) === selection_key);
    const existing = selected.find((_) => this.selectionKey(_) === selection_key);
    const list = selected.filter((_) => this.selectionKey(_) !== selection_key);
    if (!state) {
      if (this.displayed() && this.selectionKey(this.displayed()) === selection_key) {
        this.displayed.set(null);
      }
      this.selected.set(list);
      return;
    }
    if (item.in_order) {
      const new_item2 = new CateringItem(__spreadProps(__spreadValues({}, item), { in_order: true }));
      this.insertSelection(list, new_item2, existing_index);
      this.displayed.set(new_item2);
      this.selected.set(list);
      return;
    }
    const new_item = new CateringItem(__spreadProps(__spreadValues({}, item), {
      quantity: (existing?.quantity || 0) + (item.quantity || 1),
      in_order: true
    }));
    this.insertSelection(list, new_item, existing_index);
    this.resetMenuItem(item);
    this.displayed.set(new_item);
    this.selected.set(list);
  }
  insertSelection(list, item, existing_index) {
    if (existing_index < 0 || existing_index >= list.length) {
      list.push(item);
      return;
    }
    list.splice(existing_index, 0, item);
  }
  resetMenuItem(item) {
    item.quantity = 1;
    for (const option of item.options || []) {
      delete option.active;
    }
  }
  toggleFavourite(item) {
    const fav_list = this.favorites();
    const new_state = !fav_list.includes(item);
    if (new_state) {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, [
        ...fav_list,
        item
      ]);
    } else {
      this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, fav_list.filter((_) => _ !== item));
    }
  }
  static {
    this.\u0275fac = function CateringSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringSelectModalComponent, selectors: [["catering-select-modal"]], decls: 31, vars: 40, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "space-y-2", "overflow-hidden", "p-2", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "flex", "h-14", "w-full", "items-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "flex-1", "px-2", "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex", "h-1/2", "flex-1", "sm:h-[65vh]", "sm:flex-none", "sm:space-x-2"], [1, "border-base-300", "h-full", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "shadow-sm", "sm:block", "sm:w-[20rem]"], [3, "at_timeChange", "offsetChange", "offset_dayChange", "at_time", "offset", "offset_day"], [1, "border-base-300", "bg-base-200", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "sm:w-[20rem]", "lg:block"], [3, "toggleFav", "onSelect", "active", "selected", "selected_items", "favorites"], [1, "border-base-300", "h-full", "w-full", "overflow-auto", "rounded-sm", "border", "shadow-sm", "sm:w-[20rem]", "lg:block"], [3, "activeChange", "toggleFav", "close", "item", "active", "code", "fav"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden"], [1, "bg-base-200", "flex", "w-full", "items-center", "justify-between", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "name", "catering-return", 1, "inverse", "bg-base-100", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], ["btn", "", "matRipple", "", "name", "toggle-catering", 3, "click", "disabled"], [1, "flex", "items-center"], [1, "mr-1"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "absolute", "top-3", "right-2", "z-20", "border", "sm:hidden", 3, "click"]], template: function CateringSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 4)(9, "div", 5)(10, "catering-item-filters", 6);
        \u0275\u0275twoWayListener("at_timeChange", function CateringSelectModalComponent_Template_catering_item_filters_at_timeChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exact_time, $event) || (ctx.exact_time = $event);
          return $event;
        })("offsetChange", function CateringSelectModalComponent_Template_catering_item_filters_offsetChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offset, $event) || (ctx.offset = $event);
          return $event;
        })("offset_dayChange", function CateringSelectModalComponent_Template_catering_item_filters_offset_dayChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.offset_day, $event) || (ctx.offset_day = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "catering-item-list", 8);
        \u0275\u0275listener("toggleFav", function CateringSelectModalComponent_Template_catering_item_list_toggleFav_12_listener($event) {
          return ctx.toggleFavourite($event.id);
        })("onSelect", function CateringSelectModalComponent_Template_catering_item_list_onSelect_12_listener($event) {
          return ctx.displayed.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 9)(14, "catering-item-details", 10);
        \u0275\u0275listener("activeChange", function CateringSelectModalComponent_Template_catering_item_details_activeChange_14_listener($event) {
          return ctx.setSelected(ctx.displayed(), $event);
        })("toggleFav", function CateringSelectModalComponent_Template_catering_item_details_toggleFav_14_listener() {
          return ctx.toggleFavourite(ctx.displayed().id);
        })("close", function CateringSelectModalComponent_Template_catering_item_details_close_14_listener() {
          return ctx.displayed.set(null);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, CateringSelectModalComponent_Conditional_15_Template, 3, 1, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "footer", 12)(17, "button", 13)(18, "div", 14)(19, "icon", 15);
        \u0275\u0275text(20, "done");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 16);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275listener("click", function CateringSelectModalComponent_Template_button_click_24_listener() {
          return ctx.setSelected(ctx.displayed(), !ctx.displayed()?.in_order);
        });
        \u0275\u0275elementStart(25, "div", 18)(26, "icon", 15);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 19);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 34, "CATERING.ORDER"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("hidden", !ctx.show_filters());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("at_time", ctx.exact_time)("offset", ctx.offset)("offset_day", ctx.offset_day);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters() || ctx.displayed())("sm:hidden", ctx.displayed())("md:block", !ctx.displayed());
        \u0275\u0275advance();
        \u0275\u0275property("active", ctx.displayed()?.custom_id)("selected", ctx.selected_keys())("selected_items", ctx.selected())("favorites", ctx.favorites());
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.show_filters() || !ctx.displayed())("sm:hidden", !ctx.displayed())("md:block", ctx.displayed());
        \u0275\u0275advance();
        \u0275\u0275property("item", ctx.displayed())("active", ctx.displayed()?.in_order)("code", ctx.code())("fav", !!ctx.displayed() && ctx.favorites().includes(ctx.displayed()?.id || ""));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.displayed() ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.selected());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 36, "COMMON.CONFIRM_SELECTION"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.displayed()?.in_order);
        \u0275\u0275property("disabled", !ctx.displayed());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.displayed()?.in_order ? "remove" : "add");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 38, ctx.displayed()?.in_order ? "CATERING.ORDER_ITEM_REMOVE" : "CATERING.ORDER_ITEM_ADD"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      CateringItemListComponent,
      CateringItemDetailsComponent,
      CateringItemFiltersComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringSelectModalComponent, [{
    type: Component,
    args: [{ selector: "catering-select-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col space-y-2 overflow-hidden p-2 sm:h-auto sm:w-auto"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CATERING.ORDER' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <catering-item-filters
                        [(at_time)]="exact_time"
                        [(offset)]="offset"
                        [(offset_day)]="offset_day"
                    ></catering-item-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                >
                    <catering-item-list
                        [active]="displayed()?.custom_id"
                        [selected]="selected_keys()"
                        [selected_items]="selected()"
                        [favorites]="favorites()"
                        (toggleFav)="toggleFavourite($event.id)"
                        (onSelect)="displayed.set($event)"
                    ></catering-item-list>
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                >
                    <catering-item-details
                        [item]="displayed()!"
                        [active]="displayed()?.in_order"
                        (activeChange)="setSelected(displayed()!, $event)"
                        [code]="code()"
                        [fav]="
                            !!displayed() &&
                            favorites().includes(displayed()?.id || '')
                        "
                        (toggleFav)="toggleFavourite(displayed()!.id)"
                        (close)="displayed.set(null)"
                    ></catering-item-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.update((_) => !_)"
                    >
                        <icon>{{
                            show_filters() ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="bg-base-200 flex w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="catering-return"
                    [mat-dialog-close]="selected()"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">done</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CONFIRM_SELECTION' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-catering"
                    [disabled]="!displayed()"
                    [class.inverse]="displayed()?.in_order"
                    (click)="setSelected(displayed(), !displayed()?.in_order)"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            displayed()?.in_order ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (displayed()?.in_order
                                    ? 'CATERING.ORDER_ITEM_REMOVE'
                                    : 'CATERING.ORDER_ITEM_ADD'
                                ) | translate
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      CateringItemListComponent,
      CateringItemDetailsComponent,
      CateringItemFiltersComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringSelectModalComponent, { className: "CateringSelectModalComponent", filePath: "libs/catering/src/lib/catering-select-modal/catering-select-modal.component.ts", lineNumber: 149 });
})();

// libs/catering/src/lib/catering-list-field.component.ts
var _c03 = (a0, a1) => ({ date: a0, time: a1 });
var _c12 = (a0, a1) => ({ count: a0, cost: a1 });
var _c22 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.custom_id;
function CateringListFieldComponent_Conditional_0_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "arrow_drop_down");
    \u0275\u0275elementEnd();
  }
}
function CateringListFieldComponent_Conditional_0_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_For_12_Template_button_click_0_listener() {
      const room_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.editOrder(order_r5, room_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.spaceLabel(room_r4), " ");
  }
}
function CateringListFieldComponent_Conditional_0_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon");
    \u0275\u0275text(2, "priority_high");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r5.err_tooltip());
  }
}
function CateringListFieldComponent_Conditional_0_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.duplicateOrder(order_r5));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "content_copy");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CALENDAR_EVENT.CATERING_ORDER_DUPLICATE"));
  }
}
function CateringListFieldComponent_Conditional_0_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.editOrder(order_r5));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "CALENDAR_EVENT.CATERING_ORDER_EDIT"));
  }
}
function CateringListFieldComponent_Conditional_0_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.removeOrder(order_r5));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_Conditional_0_For_2_For_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r5.optionList(item_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c22, item_r11.option_list?.length || "0")), " ");
  }
}
function CateringListFieldComponent_Conditional_0_For_2_For_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_For_33_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const item_r11 = \u0275\u0275nextContext().$implicit;
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.removeOrderItem(order_r5, item_r11));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_Conditional_0_For_2_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, CateringListFieldComponent_Conditional_0_For_2_For_33_Conditional_3_Template, 3, 7, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CateringListFieldComponent_Conditional_0_For_2_For_33_Conditional_9_Template, 3, 0, "button", 26);
    \u0275\u0275elementStart(10, "button", 27);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_For_33_Template_button_click_10_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.toggleFavourite(item_r11));
    });
    \u0275\u0275elementStart(12, "icon", 28);
    \u0275\u0275text(13, "favorite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r11.name || "Item", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r11.option_list?.length ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r11.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, item_r11.unit_price_with_options / 100, ctx_r5.currency_code()), " ea ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r5.disabled() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-info", ctx_r5.favorites().includes(item_r11.id));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(11, 12, ctx_r5.favorites().includes(item_r11.id) ? "COMMON.FAVOURITES_REMOVE" : "COMMON.FAVOURITES_ADD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("className", ctx_r5.favorites().includes(item_r11.id) ? "material-symbols-rounded" : "material-symbols-outlined");
  }
}
function CateringListFieldComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "button", 10)(4, "icon", 11);
    \u0275\u0275text(5, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CateringListFieldComponent_Conditional_0_For_2_Conditional_8_Template, 2, 0, "icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-menu", null, 1);
    \u0275\u0275repeaterCreate(11, CateringListFieldComponent_Conditional_0_For_2_For_12_Template, 2, 1, "button", 2, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, CateringListFieldComponent_Conditional_0_For_2_Conditional_19_Template, 3, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, CateringListFieldComponent_Conditional_0_For_2_Conditional_24_Template, 4, 3, "button", 15);
    \u0275\u0275conditionalCreate(25, CateringListFieldComponent_Conditional_0_For_2_Conditional_25_Template, 4, 3, "button", 15);
    \u0275\u0275conditionalCreate(26, CateringListFieldComponent_Conditional_0_For_2_Conditional_26_Template, 3, 0, "button", 16);
    \u0275\u0275elementStart(27, "button", 17);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_For_2_Template_button_click_27_listener() {
      const order_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.toggleOrder(order_r5.id));
    });
    \u0275\u0275elementStart(29, "icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275repeaterCreate(32, CateringListFieldComponent_Conditional_0_For_2_For_33_Template, 14, 14, "div", 19, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const room_menu_r13 = \u0275\u0275reference(10);
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-error", ctx_r5.end_time() < order_r5.deliver_at)("border-base-300", ctx_r5.end_time() >= order_r5.deliver_at);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r5.disabled())("matMenuTriggerFor", room_menu_r13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r5.roomLabel(order_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r5.disabled() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r5.rooms());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 24, "CALENDAR_EVENT.CATERING_ORDER_AT_DATE", \u0275\u0275pureFunction2(35, _c03, \u0275\u0275pipeBind2(16, 18, order_r5.deliver_at_time, "mediumDate"), \u0275\u0275pipeBind2(17, 21, order_r5.deliver_at_time, ctx_r5.time_format()))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r5.end_time() < order_r5.deliver_at ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 30, "CALENDAR_EVENT.CATERING_ORDER_DETAILS", \u0275\u0275pureFunction2(38, _c12, order_r5.item_count, \u0275\u0275pipeBind2(22, 27, order_r5.total_cost / 100, ctx_r5.currency_code()))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r5.disabled() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r5.disabled() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r5.disabled() ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(28, 33, ctx_r5.show_order()[order_r5.id] ? "CALENDAR_EVENT.CATERING_ORDER_HIDE" : "CALENDAR_EVENT.CATERING_ORDER_SHOW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r5.show_order()[order_r5.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("contract-collapsed", !ctx_r5.show_order()[order_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275repeater(order_r5.items);
  }
}
function CateringListFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, CateringListFieldComponent_Conditional_0_For_2_Template, 34, 41, "div", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.addOrder());
    });
    \u0275\u0275elementStart(4, "div", 6)(5, "icon");
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const add_room_menu_r14 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.orders());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r5.disabled() || !ctx_r5.rooms().length)("matMenuTriggerFor", ctx_r5.requires_room_selection() ? add_room_menu_r14 : null);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 3, "CALENDAR_EVENT.CATERING_ORDER_ADD"), " ");
  }
}
function CateringListFieldComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "icon", 31);
    \u0275\u0275text(2, "hand_meal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4, " Catering is not available for the selected space and/or time ");
    \u0275\u0275elementEnd()();
  }
}
function CateringListFieldComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "p");
    \u0275\u0275text(2, "No catering orders for this booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function CateringListFieldComponent_Conditional_1_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.addOrder());
    });
    \u0275\u0275elementStart(4, "icon", 34);
    \u0275\u0275text(5, "add_notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    const add_room_menu_r14 = \u0275\u0275reference(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r5.rooms().length)("matMenuTriggerFor", ctx_r5.requires_room_selection() ? add_room_menu_r14 : null);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "CALENDAR_EVENT.CATERING_ORDER_ADD"), " ");
  }
}
function CateringListFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringListFieldComponent_Conditional_1_Conditional_0_Template, 5, 0, "div", 30)(1, CateringListFieldComponent_Conditional_1_Conditional_1_Template, 9, 5, "div", 30);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r5.disabled() ? 0 : 1);
  }
}
function CateringListFieldComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CateringListFieldComponent_For_5_Template_button_click_0_listener() {
      const room_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.addOrder(room_r17));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r17 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.spaceLabel(room_r17), " ");
  }
}
var EMPTY_FAVS2 = [];
var CateringListFieldComponent = class _CateringListFieldComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._state = inject(CateringOrderStateService);
    this.options = input(
      {},
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.rooms = computed(
      () => this.options().resources || [],
      ...ngDevMode ? [{ debugName: "rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._multiple_spaces = this._settings.signal("events.multiple_spaces", false);
    this._allow_multiple_spaces = this._settings.signal("events.allow_multiple_spaces", false);
    this.multiple_spaces = computed(
      () => !!this._multiple_spaces() || !!this._allow_multiple_spaces(),
      ...ngDevMode ? [{ debugName: "multiple_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.requires_room_selection = computed(
      () => this.rooms().length > 1 && !!this.multiple_spaces(),
      ...ngDevMode ? [{ debugName: "requires_room_selection" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.orders = signal(
      [],
      ...ngDevMode ? [{ debugName: "orders" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_order = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_order" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.err_tooltip = signal(
      "",
      ...ngDevMode ? [{ debugName: "err_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = computed(
      () => {
        const time = (this.options().date || Date.now()) + (this.options().duration || 30) * 60 * 1e3;
        return this.options().all_day ? endOfDay(time).valueOf() : time;
      },
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favorites = computed(
      () => {
        return this._settings.signal("favourite_menu_items", EMPTY_FAVS2, true)() || EMPTY_FAVS2;
      },
      ...ngDevMode ? [{ debugName: "favorites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this._settings.time_format_signal() || "shortTime",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currency_code = computed(
      () => {
        this._org.active_building();
        return this._org.currency_code;
      },
      ...ngDevMode ? [{ debugName: "currency_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
  }
  ngOnInit() {
    this.err_tooltip.set(i18n("CALENDAR_EVENT.CATERING_ORDER_ERROR"));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const orders = [...new_value || []];
    this.orders.set(orders);
    this.syncExpandedOrders(orders);
    if (this._onChange)
      this._onChange(orders);
    if (this._onTouch)
      this._onTouch(orders);
  }
  ngOnChanges(changes) {
    if (changes.options) {
      const options = this.options();
      const room_ids = new Set((options.resources || []).flatMap((_) => [_.id, _.email]));
      const orders = this.orders().filter((_) => !("resources" in options) || !_.system_id || room_ids.has(_.system_id)).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: options })));
      if (orders.length !== this.orders().length)
        this.setValue(orders);
      else
        this.orders.set(orders);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    const orders = (value || []).map((_) => new CateringOrder(__spreadProps(__spreadValues({}, _), { event: this.options() })));
    this.orders.set(orders);
    this.syncExpandedOrders(orders);
  }
  removeOrder(order) {
    const updated_list = this.orders().filter((_) => _.id !== order.id);
    this.setValue(updated_list);
  }
  duplicateOrder(order) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      id: `order-${randomString(8)}`
    }));
    this.setValue([...this.orders(), new_order]);
  }
  addOrder(room) {
    const assigned_room = room || this._defaultRoom();
    if (!assigned_room)
      return;
    this.editOrder(new CateringOrder({ system_id: assigned_room.id }), assigned_room);
  }
  removeOrderItem(order, item) {
    const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
      items: order.items.filter((_) => _.custom_id !== item.custom_id)
    }));
    const updated_list = this.orders().filter((_) => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else
      this.setValue(updated_list);
  }
  editOrder(order = new CateringOrder(), room) {
    const assigned_room = room || this.roomFor(order) || this._defaultRoom();
    if (!assigned_room)
      return;
    const options = this.options();
    const optionsValue = this.options();
    const location = this._org.locationWithID(assigned_room.zones);
    const zone_id = assigned_room.level?.parent_id || this._org.levelWithID(assigned_room.zones)?.parent_id || location.building?.id || options.zone_id;
    this._state.setOptions({
      building: location.building?.id,
      zone: zone_id
    });
    const ref = this._dialog.open(CateringSelectModalComponent, {
      data: {
        caterer: order.items[0]?.caterer,
        items: order.items,
        details: __spreadProps(__spreadValues({}, this.options()), {
          resources: [assigned_room],
          zone_id,
          date: options.all_day ? startOfDay(options.date).valueOf() : options.date,
          duration: optionsValue.all_day ? Math.max(24 * 60, optionsValue.duration) : optionsValue.duration
        }),
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset
      }
    });
    ref.afterClosed().subscribe((items) => {
      const orders = this.orders().filter((_) => _.id !== order.id);
      if (!items)
        return;
      if (!items.length) {
        this.setValue(orders);
        return;
      }
      const time = new Date(this.options().date);
      for (const item of items) {
        item.options = [
          ...item.options.map((_) => __spreadValues({}, _))
        ];
        for (const option of item.options) {
          const opt = item.option_list.find((_) => _.id === option.id);
          option.active = !!opt;
        }
      }
      const modal = ref.componentInstance;
      const exact_time = this.readDialogValue(modal.exact_time);
      const offset = this.readDialogValue(modal.offset);
      const offset_day = this.readDialogValue(modal.offset_day);
      const new_order = new CateringOrder(__spreadProps(__spreadValues({}, order), {
        system_id: assigned_room.id,
        items,
        caterer: items[0].caterer,
        event: this.options(),
        deliver_offset: offset,
        deliver_time: exact_time ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: offset_day || 0
      }));
      if (new_order.item_count <= 0) {
        this.setValue(orders);
        return;
      }
      this.setValue([...orders, new_order]);
    });
  }
  roomFor(order) {
    if (!order.system_id)
      return void 0;
    return this.rooms().find((_) => _.id === order.system_id || _.email === order.system_id);
  }
  roomLabel(order) {
    const room = this.roomFor(order);
    return room ? this.spaceLabel(room) : i18n("CALENDAR_EVENT.ROOM_REQUIRED");
  }
  spaceLabel(room) {
    const location = this._org.locationWithID(room.zones)?.label;
    const room_name = room.display_name || room.name;
    return [location, room_name].filter((_) => !!_).join(" / ");
  }
  _defaultRoom() {
    const rooms = this.rooms();
    return rooms.length === 1 || !this.multiple_spaces() ? rooms[0] : void 0;
  }
  readDialogValue(value) {
    return typeof value === "function" ? value() : value;
  }
  toggleOrder(order_id) {
    this.show_order.update((state) => __spreadProps(__spreadValues({}, state), {
      [order_id]: !state[order_id]
    }));
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  toggleFavourite(cateringitem) {
    const fav_list = this.favorites();
    const new_state = !fav_list.includes(cateringitem.id);
    if (new_state) {
      this._settings.saveUserSetting("favourite_menu_items", [
        ...fav_list,
        cateringitem.id
      ]);
    } else {
      this._settings.saveUserSetting("favourite_menu_items", fav_list.filter((_) => _ !== cateringitem.id));
    }
  }
  syncExpandedOrders(orders) {
    const order_ids = new Set(orders.map((_) => _.id));
    this.show_order.update((state) => Object.fromEntries(Object.entries(state).filter(([id]) => order_ids.has(id))));
  }
  static {
    this.\u0275fac = function CateringListFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CateringListFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringListFieldComponent, selectors: [["catering-list-field"]], inputs: { options: [1, "options"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => _CateringListFieldComponent),
        multi: true
      }
    ]), \u0275\u0275NgOnChangesFeature], decls: 6, vars: 1, consts: [["add_room_menu", "matMenu"], ["room_menu", "matMenu"], ["mat-menu-item", ""], ["list", "", 1, "space-y-2"], ["order", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow-sm", 3, "border-error", "border-base-300"], ["btn", "", "matRipple", "", "name", "add-catering-item", 1, "inverse", "mt-2", "w-full", 3, "click", "disabled", "matMenuTriggerFor"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["order", "", 1, "bg-base-100", "overflow-hidden", "rounded-xl", "border", "shadow-sm"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], ["room", "", 1, "mb-1", "flex", "items-center", "space-x-1", "text-left", "text-sm", 3, "disabled", "matMenuTriggerFor"], [1, "text-lg"], [1, "flex", "items-center", "space-x-4"], [1, "bg-error", "text-error-content", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "contract-expand", "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-4", "py-1", "hover:opacity-90"], ["mat-menu-item", "", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error", 3, "click"], [1, "flex", "flex-1", "items-center"], [1, "ml-4", "text-xs", "font-normal", "opacity-60", 3, "matTooltip"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [3, "className"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error", 3, "click"], [1, "bg-base-200", "flex", "w-full", "flex-col", "items-center", "space-y-2", "rounded-xl", "p-8"], [1, "text-6xl", "opacity-30"], [1, "opacity-30"], ["btn", "", "matRipple", "", 1, "inverse", "space-x-2", 3, "click", "disabled", "matMenuTriggerFor"], [1, "text-2xl"], [1, "pr-3"]], template: function CateringListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CateringListFieldComponent_Conditional_0_Template, 10, 5)(1, CateringListFieldComponent_Conditional_1_Template, 2, 1);
        \u0275\u0275elementStart(2, "mat-menu", null, 0);
        \u0275\u0275repeaterCreate(4, CateringListFieldComponent_For_5_Template, 2, 1, "button", 2, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.orders().length ? 0 : 1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.rooms());
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      MatDialogModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      CurrencyPipe,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringListFieldComponent, [{
    type: Component,
    args: [{ selector: `catering-list-field`, template: `
        @if (orders().length) {
            <div list class="space-y-2">
                @for (order of orders(); track order.id) {
                    <div
                        order
                        class="bg-base-100 overflow-hidden rounded-xl border shadow-sm"
                        [class.border-error]="end_time() < order.deliver_at"
                        [class.border-base-300]="end_time() >= order.deliver_at"
                    >
                        <div class="flex items-center space-x-2 p-4">
                            <div class="flex-1">
                                <button
                                    room
                                    class="mb-1 flex items-center space-x-1 text-left text-sm"
                                    [disabled]="disabled()"
                                    [matMenuTriggerFor]="room_menu"
                                >
                                    <icon class="text-lg">meeting_room</icon>
                                    <span>{{ roomLabel(order) }}</span>
                                    @if (!disabled()) {
                                        <icon class="text-lg"
                                            >arrow_drop_down</icon
                                        >
                                    }
                                </button>
                                <mat-menu #room_menu="matMenu">
                                    @for (room of rooms(); track room.id) {
                                        <button
                                            mat-menu-item
                                            (click)="editOrder(order, room)"
                                        >
                                            {{ spaceLabel(room) }}
                                        </button>
                                    }
                                </mat-menu>
                                <div class="flex items-center space-x-4">
                                    <div>
                                        {{
                                            'CALENDAR_EVENT.CATERING_ORDER_AT_DATE'
                                                | translate
                                                    : {
                                                          date:
                                                              order.deliver_at_time
                                                              | date
                                                                  : 'mediumDate',
                                                          time:
                                                              order.deliver_at_time
                                                              | date
                                                                  : time_format(),
                                                      }
                                        }}
                                    </div>
                                    @if (end_time() < order.deliver_at) {
                                        <div
                                            class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                            [matTooltip]="err_tooltip()"
                                        >
                                            <icon>priority_high</icon>
                                        </div>
                                    }
                                </div>
                                <div class="text-xs opacity-60">
                                    {{
                                        'CALENDAR_EVENT.CATERING_ORDER_DETAILS'
                                            | translate
                                                : {
                                                      count: order.item_count,
                                                      cost:
                                                          order.total_cost / 100
                                                          | currency
                                                              : currency_code(),
                                                  }
                                    }}
                                </div>
                            </div>
                            @if (!disabled()) {
                                <button
                                    icon
                                    matRipple
                                    [matTooltip]="
                                        'CALENDAR_EVENT.CATERING_ORDER_DUPLICATE'
                                            | translate
                                    "
                                    (click)="duplicateOrder(order)"
                                >
                                    <icon>content_copy</icon>
                                </button>
                            }
                            @if (!disabled()) {
                                <button
                                    icon
                                    matRipple
                                    [matTooltip]="
                                        'CALENDAR_EVENT.CATERING_ORDER_EDIT'
                                            | translate
                                    "
                                    (click)="editOrder(order)"
                                >
                                    <icon>edit</icon>
                                </button>
                            }
                            @if (!disabled()) {
                                <button
                                    icon
                                    matRipple
                                    matTooltip="Remove Order"
                                    class="text-error"
                                    (click)="removeOrder(order)"
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    (show_order()[order.id]
                                        ? 'CALENDAR_EVENT.CATERING_ORDER_HIDE'
                                        : 'CALENDAR_EVENT.CATERING_ORDER_SHOW'
                                    ) | translate
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
                            class="contract-expand divide-base-100 bg-base-200 flex flex-col divide-y"
                            [class.contract-collapsed]="!show_order()[order.id]"
                        >
                            @for (item of order.items; track item.custom_id) {
                                <div
                                    class="flex items-center space-x-2 px-4 py-1 hover:opacity-90"
                                >
                                    <div class="flex flex-1 items-center">
                                        {{ item.name || 'Item' }}
                                        @if (item.option_list?.length) {
                                            <span
                                                class="ml-4 text-xs font-normal opacity-60"
                                                [matTooltip]="optionList(item)"
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
                                            item.unit_price_with_options / 100
                                                | currency: currency_code()
                                        }}
                                        ea
                                    </div>
                                    @if (!disabled()) {
                                        <button
                                            icon
                                            matRipple
                                            matTooltip="Remove Order Item"
                                            class="text-error"
                                            (click)="
                                                removeOrderItem(order, item)
                                            "
                                        >
                                            <icon>delete</icon>
                                        </button>
                                    }
                                    <button
                                        icon
                                        matRipple
                                        name="toggle-catering-item-favourite"
                                        [matTooltip]="
                                            (favorites().includes(item.id)
                                                ? 'COMMON.FAVOURITES_REMOVE'
                                                : 'COMMON.FAVOURITES_ADD'
                                            ) | translate
                                        "
                                        [class.text-info]="
                                            favorites().includes(item.id)
                                        "
                                        (click)="toggleFavourite(item)"
                                    >
                                        <icon
                                            [className]="
                                                favorites().includes(item.id)
                                                    ? 'material-symbols-rounded'
                                                    : 'material-symbols-outlined'
                                            "
                                            >favorite</icon
                                        >
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            <button
                btn
                matRipple
                name="add-catering-item"
                class="inverse mt-2 w-full"
                [disabled]="disabled() || !rooms().length"
                [matMenuTriggerFor]="
                    requires_room_selection() ? add_room_menu : null
                "
                (click)="addOrder()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon>search</icon>
                    <span>
                        {{ 'CALENDAR_EVENT.CATERING_ORDER_ADD' | translate }}
                    </span>
                </div>
            </button>
        } @else {
            @if (disabled()) {
                <div
                    class="bg-base-200 flex w-full flex-col items-center space-y-2 rounded-xl p-8"
                >
                    <icon class="text-6xl opacity-30">hand_meal</icon>
                    <p class="opacity-30">
                        Catering is not available for the selected space and/or
                        time
                    </p>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex w-full flex-col items-center space-y-2 rounded-xl p-8"
                >
                    <p>No catering orders for this booking</p>
                    <button
                        btn
                        matRipple
                        class="inverse space-x-2"
                        [disabled]="!rooms().length"
                        [matMenuTriggerFor]="
                            requires_room_selection() ? add_room_menu : null
                        "
                        (click)="addOrder()"
                    >
                        <icon class="text-2xl">add_notes</icon>
                        <span class="pr-3">
                            {{
                                'CALENDAR_EVENT.CATERING_ORDER_ADD' | translate
                            }}
                        </span>
                    </button>
                </div>
            }
        }
        <mat-menu #add_room_menu="matMenu">
            @for (room of rooms(); track room.id) {
                <button mat-menu-item (click)="addOrder(room)">
                    {{ spaceLabel(room) }}
                </button>
            }
        </mat-menu>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CateringListFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatDialogModule,
      MatMenuModule
    ] }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringListFieldComponent, { className: "CateringListFieldComponent", filePath: "libs/catering/src/lib/catering-list-field.component.ts", lineNumber: 338 });
})();

export {
  CateringOrderStateService,
  CateringListFieldComponent,
  MeetingFlowSuccessComponent
};
//# debugId=c4b36d52-9410-501d-a5c9-f7c05e5de4c4
//# sourceMappingURL=chunk-VPJGEPU3.js.map
