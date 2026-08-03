import {
  decode_default,
  generateQRCode
} from "./chunk-R5XPVHHX.js";
import {
  CheckinStateService,
  parseTokenFromUrl
} from "./chunk-24EPPM3R.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AuthenticatedImageDirective,
  CateringItem,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  FormField,
  FormsModule,
  IconComponent,
  Input,
  MatCheckbox,
  MatCheckboxModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Output,
  Pipe,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SanitizePipe,
  SettingsService,
  TranslatePipe,
  UserAvatarComponent,
  ViewChild,
  ViewEncapsulation,
  VirtualKeyboardComponent,
  Zh,
  cl,
  computed,
  effect,
  email,
  findOldestByName,
  flatten,
  form,
  getGuestCateringItem,
  i18n,
  inject,
  input,
  isPublicMode,
  li,
  log,
  notifyError,
  notifyInfo,
  notifySuccess,
  output,
  parseJWT,
  required,
  roundToNearestMinutes,
  saveAssetCategory,
  setClassMetadata,
  setGuestCateringItem,
  settingSignal,
  signal,
  sl,
  startOfMinute,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵdefinePipe,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-7DXTUSV5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/level.pipe.ts
var LevelPipe = class _LevelPipe {
  constructor() {
    this._org = inject(OrganisationService);
  }
  transform(id) {
    return this._org.levelWithID(id instanceof Array ? id : [id]);
  }
  static {
    this.\u0275fac = function LevelPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LevelPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "level", type: _LevelPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LevelPipe, [{
    type: Pipe,
    args: [{
      name: "level"
    }]
  }], null, null);
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
    _hidden_categories_promise = cl({
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
    _catering_types_promise = resolveCateringCategoryId().then((category_id) => sl({ category_id, limit: 500 })).then((_) => _.data.filter((type) => isCateringTypeName(type.name))).catch(() => []);
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
  const results = await Promise.all(types.map((type) => Zh({
    zone_id,
    type_id: type.id,
    limit: 500
  }).then((assets) => assets.data.map((asset) => toCateringItem(asset, fromCateringTypeName(type.name))))));
  return flatten(results).sort((a, b) => a.name.localeCompare(b.name));
}

// libs/users/src/lib/user-label.component.ts
var _c0 = (a0) => ({ host_name: a0 });
var _c1 = (a0) => ({ location: a0 });
function UserLabelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const level_r1 = \u0275\u0275readContextLet(14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "APP.VISITOR_KIOSK.LABEL_LOCATION", \u0275\u0275pureFunction1(4, _c1, level_r1.display_name || level_r1.name)), " ");
  }
}
function UserLabelComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.user()?.pass_number);
  }
}
function UserLabelComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.user().qr_code, \u0275\u0275sanitizeUrl);
  }
}
var UserLabelComponent = class _UserLabelComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._theme = this._settings.theme_signal;
    this._logo_dark = this._settings.signal("logo_dark", null);
    this._logo_light = this._settings.signal("logo_light", null);
    this.user = input(
      {},
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.width = input(
      25,
      ...ngDevMode ? [{ debugName: "width" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.height = input(
      15,
      ...ngDevMode ? [{ debugName: "height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.landscape = computed(
      () => this.width() > this.height(),
      ...ngDevMode ? [{ debugName: "landscape" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.logo = computed(
      () => {
        const logo = this._theme() === "dark" ? this._logo_dark() : this._logo_light();
        return typeof logo === "function" ? logo() : logo;
      },
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  print() {
    console.log("Printing user label...");
  }
  static {
    this.\u0275fac = function UserLabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserLabelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLabelComponent, selectors: [["user-label"]], inputs: { user: [1, "user"], width: [1, "width"], height: [1, "height"] }, decls: 30, vars: 39, consts: [[1, "user-label", "border-neutral", "bg-base-100", "relative", "m-[0.5em]", "rounded-[0.75em]", "border", "p-[1em]"], [1, "flex", "h-full", "flex-col", "leading-tight"], [1, "border-base-400", "bg-base-200", "mb-[0.25em]", "flex", "h-[5em]", "w-[5em]", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border"], [1, "text-[2.25em]", 3, "user"], [1, "mb-[0.25em]", "text-[1.5em]", "text-black"], [1, "text-black"], [1, "absolute", "bottom-[1em]", "left-[1em]", "mt-[0.5em]", "w-[8em]", "rounded-[0.5em]", "border", "border-black", "px-[0.5em]", "py-[0.25em]", "text-center", "font-medium", "text-black", "uppercase"], [1, "absolute", "top-[1em]", "right-[1em]", "flex", "flex-col", "items-end", "space-y-[0.5em]"], ["auth", "", "alt", "Logo", 1, "h-[3em]", "object-contain", 3, "src"], [1, "text-right", "text-[0.75em]", "text-black"], [1, "text-right", "text-black"], [1, "absolute", "right-[1em]", "bottom-[1em]", "flex", "items-end"], [1, "text-right", "leading-tight", "font-medium", "text-black"], [1, "border-base-200", "relative", "flex", "h-[4em]", "w-[4em]", "items-center", "justify-center", "rounded-[0.5em]", "border"], [1, "h-[3.5em]", "w-[3.5em]", "object-contain", "object-center", 3, "src"]], template: function UserLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "a-user-avatar", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275element(13, "img", 8);
        \u0275\u0275declareLet(14);
        \u0275\u0275pipe(15, "level");
        \u0275\u0275conditionalCreate(16, UserLabelComponent_Conditional_16_Template, 3, 6, "div", 9);
        \u0275\u0275elementStart(17, "pre", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(19, UserLabelComponent_Conditional_19_Template, 2, 1, "pre", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "div");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13);
        \u0275\u0275conditionalCreate(29, UserLabelComponent_Conditional_29_Template, 1, 1, "img", 14);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.width() + "em")("height", ctx.height() + "em");
        \u0275\u0275advance(3);
        \u0275\u0275property("user", ctx.user());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.user().name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 23, "APP.VISITOR_KIOSK.LABEL_HOST", \u0275\u0275pureFunction1(37, _c0, ctx.user()?.host)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 26, "APP.VISITOR_KIOSK.VISITOR"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("max-width", ctx.landscape() ? "8em" : "");
        \u0275\u0275property("src", ctx.logo()?.src || ctx.logo(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        const level_r3 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(15, 28, ctx.user().zones));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(level_r3 ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.user()?.extra_details);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.user()?.pass_number ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("space-x-[0", !ctx.landscape())("space-y-[0", ctx.landscape())("flex-col", ctx.landscape());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 31, ctx.user().date, "shortTime"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 34, ctx.user().date, "mediumDate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.user().qr_code ? 29 : -1);
      }
    }, dependencies: [
      CommonModule,
      UserAvatarComponent,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe,
      LevelPipe
    ], styles: ["/* angular:styles/component:css;725153a99cf1545964099fddfcea602bed4f1c33b32c3fcd6d11ef23d4316b5e;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserLabelComponent, [{
    type: Component,
    args: [{ selector: `user-label`, template: `
        <div
            class="user-label border-neutral bg-base-100 relative m-[0.5em] rounded-[0.75em] border p-[1em]"
            [style.width]="width() + 'em'"
            [style.height]="height() + 'em'"
        >
            <div class="flex h-full flex-col leading-tight">
                <div
                    class="border-base-400 bg-base-200 mb-[0.25em] flex h-[5em] w-[5em] items-center justify-center overflow-hidden rounded-full border"
                >
                    <a-user-avatar
                        class="text-[2.25em]"
                        [user]="user()"
                    ></a-user-avatar>
                </div>
                <div class="mb-[0.25em] text-[1.5em] text-black">
                    {{ user().name }}
                </div>
                <div class="text-black">
                    {{
                        'APP.VISITOR_KIOSK.LABEL_HOST'
                            | translate
                                : {
                                      host_name: user()?.host,
                                  }
                    }}
                </div>
            </div>
            <div
                class="absolute bottom-[1em] left-[1em] mt-[0.5em] w-[8em] rounded-[0.5em] border border-black px-[0.5em] py-[0.25em] text-center font-medium text-black uppercase"
            >
                {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
            </div>
            <div
                class="absolute top-[1em] right-[1em] flex flex-col items-end space-y-[0.5em]"
            >
                <img
                    auth
                    class="h-[3em] object-contain"
                    [style.max-width]="landscape() ? '8em' : ''"
                    alt="Logo"
                    [src]="logo()?.src || logo()"
                />
                @let level = user().zones | level;
                @if (level) {
                    <div class="text-right text-[0.75em] text-black">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                | translate
                                    : {
                                          location:
                                              level.display_name || level.name,
                                      }
                        }}
                    </div>
                }
                <pre class="text-right text-black">{{
                    user()?.extra_details
                }}</pre>
                @if (user()?.pass_number) {
                    <pre class="text-right text-[0.75em] text-black">{{
                        user()?.pass_number
                    }}</pre>
                }
            </div>
            <div
                class="absolute right-[1em] bottom-[1em] flex items-end"
                [class.space-x-[0.5em]]="!landscape()"
                [class.space-y-[0.5em]]="landscape()"
                [class.flex-col]="landscape()"
            >
                <div class="text-right leading-tight font-medium text-black">
                    <div>
                        {{ user().date | date: 'shortTime' }}
                    </div>
                    <div>
                        {{ user().date | date: 'mediumDate' }}
                    </div>
                </div>
                <div
                    class="border-base-200 relative flex h-[4em] w-[4em] items-center justify-center rounded-[0.5em] border"
                >
                    @if (user().qr_code) {
                        <img
                            class="h-[3.5em] w-[3.5em] object-contain object-center"
                            [src]="user().qr_code"
                        />
                    }
                </div>
            </div>
        </div>
    `, encapsulation: ViewEncapsulation.None, imports: [
      CommonModule,
      UserAvatarComponent,
      TranslatePipe,
      LevelPipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;725153a99cf1545964099fddfcea602bed4f1c33b32c3fcd6d11ef23d4316b5e;/home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-label.component.ts */\n:host {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=user-label.component.css.map */\n"] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLabelComponent, { className: "UserLabelComponent", filePath: "libs/users/src/lib/user-label.component.ts", lineNumber: 141 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts
var _c02 = () => ["/welcome"];
var CheckinCovidComponent = class _CheckinCovidComponent {
  constructor() {
    this._router = inject(Router);
    this._checkin = inject(CheckinStateService);
    this.contact = signal(
      "",
      ...ngDevMode ? [{ debugName: "contact" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.symptoms = signal(
      "",
      ...ngDevMode ? [{ debugName: "symptoms" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  confirm() {
    const symptoms = this.symptoms();
    const contact = this.contact();
    if (!symptoms || !contact)
      return notifyError("Please select yes or no for each question");
    this._checkin.updateGuest({
      covid: contact === "true",
      symptoms: symptoms === "true"
    });
    if (symptoms === "false" && contact === "false") {
      this._router.navigate(["/checkin", "results"]);
    } else {
      this._checkin.setError("Please get tested for COVID-19 and self-isolate at home for 14 days");
      this._router.navigate(["/checkin", "error"]);
    }
  }
  static {
    this.\u0275fac = function CheckinCovidComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinCovidComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinCovidComponent, selectors: [["", "checkin-covid", ""]], decls: 55, vars: 5, consts: [[1, "bg-base-100", "relative", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "p-4"], [1, "mb-4", "text-xl", "font-medium"], [1, "list-inside", "list-decimal"], [1, "mb-4", "list-inside", "list-disc", "px-4"], ["aria-label", "Has Symptoms", 3, "ngModelChange", "ngModel"], ["value", "true"], ["value", "false", 1, "ml-4"], [1, "my-4"], ["aria-label", "COVID contact or self-isolated", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"]], template: function CheckinCovidComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "COVID Disclaimer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "ol", 2)(4, "li");
        \u0275\u0275text(5, " Do you have any of the following symptoms?");
        \u0275\u0275element(6, "br")(7, "br");
        \u0275\u0275elementStart(8, "ul", 3)(9, "li");
        \u0275\u0275text(10, "Fever");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "li");
        \u0275\u0275text(12, "Cough");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "li");
        \u0275\u0275text(14, "Shortness of breath");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "li");
        \u0275\u0275text(16, "Chills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "li");
        \u0275\u0275text(18, "Body aches");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20, "Sore or scratchy throat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22, "Headache");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "Runny nose");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275text(26, "Muscle pain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275text(28, "Vomitting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275text(30, "Nausea");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275text(32, "Diarrhoa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "li");
        \u0275\u0275text(34, "Loss of taste or smell");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "mat-radio-group", 4);
        \u0275\u0275twoWayListener("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.symptoms, $event) || (ctx.symptoms = $event);
          return $event;
        });
        \u0275\u0275elementStart(36, "mat-radio-button", 5);
        \u0275\u0275text(37, "Yes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-radio-button", 6);
        \u0275\u0275text(39, "No");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "hr", 7);
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275text(42, " Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?");
        \u0275\u0275element(43, "br")(44, "br");
        \u0275\u0275elementStart(45, "mat-radio-group", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.contact, $event) || (ctx.contact = $event);
          return $event;
        });
        \u0275\u0275elementStart(46, "mat-radio-button", 5);
        \u0275\u0275text(47, "Yes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-radio-button", 6);
        \u0275\u0275text(49, "No");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "button", 9);
        \u0275\u0275listener("click", function CheckinCovidComponent_Template_button_click_50_listener() {
          return ctx.confirm();
        });
        \u0275\u0275text(51, "Confirm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "a", 10)(53, "icon");
        \u0275\u0275text(54, "close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(35);
        \u0275\u0275twoWayProperty("ngModel", ctx.symptoms);
        \u0275\u0275control();
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.contact);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c02));
        \u0275\u0275attribute("disabled", !ctx.symptoms() && !ctx.contact());
      }
    }, dependencies: [
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatRippleModule,
      MatRipple,
      IconComponent,
      RouterModule,
      RouterLink,
      FormsModule,
      NgControlStatus,
      NgModel
    ], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n  max-height: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 1rem 11rem 0;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-covid.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinCovidComponent, [{
    type: Component,
    args: [{ selector: "[checkin-covid]", template: `
        <div
            class="bg-base-100 relative overflow-x-hidden overflow-y-auto rounded-sm p-4"
        >
            <h3 class="mb-4 text-xl font-medium">COVID Disclaimer</h3>
            <ol class="list-inside list-decimal">
                <li>
                    Do you have any of the following symptoms?<br /><br />
                    <ul class="mb-4 list-inside list-disc px-4">
                        <li>Fever</li>
                        <li>Cough</li>
                        <li>Shortness of breath</li>
                        <li>Chills</li>
                        <li>Body aches</li>
                        <li>Sore or scratchy throat</li>
                        <li>Headache</li>
                        <li>Runny nose</li>
                        <li>Muscle pain</li>
                        <li>Vomitting</li>
                        <li>Nausea</li>
                        <li>Diarrhoa</li>
                        <li>Loss of taste or smell</li>
                    </ul>
                    <mat-radio-group
                        aria-label="Has Symptoms"
                        [(ngModel)]="symptoms"
                    >
                        <mat-radio-button value="true">Yes</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4"
                            >No</mat-radio-button
                        >
                    </mat-radio-group>
                </li>
                <hr class="my-4" />
                <li>
                    Have you been in contact with a COVID-19 case in the last 14
                    days or been asked to self-isolate by a health offical?<br /><br />
                    <mat-radio-group
                        aria-label="COVID contact or self-isolated"
                        [(ngModel)]="contact"
                    >
                        <mat-radio-button value="true">Yes</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4"
                            >No</mat-radio-button
                        >
                    </mat-radio-group>
                </li>
            </ol>
            <button btn matRipple (click)="confirm()">Confirm</button>
            <a
                icon
                matRipple
                [attr.disabled]="!symptoms() && !contact()"
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
    `, imports: [
      MatRadioModule,
      MatRippleModule,
      IconComponent,
      RouterModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;00ca51ab2b0fca9ea7629e0f0e281c691c3476e0efceaf2ab9b0d2c29f476cb0;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts */\n:host > div {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n  max-height: calc(100% - 2rem);\n}\nbutton {\n  margin: 1rem 11rem 0;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-covid.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinCovidComponent, { className: "CheckinCovidComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts", lineNumber: 98 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts
var _c03 = () => ["/welcome"];
function CheckinDetailsComponent_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.VISITOR_PASS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.pass_number)("placeholder", \u0275\u0275pipeBind1(6, 5, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
function CheckinDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 0)(1, "h3", 2);
    \u0275\u0275text(2, "Confirm Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "label", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 3)(14, "label", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 5);
    \u0275\u0275element(18, "input", 6);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21, "Please enter your full name");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 3)(23, "label", 8);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 5);
    \u0275\u0275element(27, "input", 6);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(29, "mat-error");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 3)(33, "label", 8);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 5);
    \u0275\u0275element(37, "input", 9);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 3)(40, "label", 10);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 5);
    \u0275\u0275element(44, "input", 6);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(46, CheckinDetailsComponent_Conditional_0_Conditional_46_Template, 7, 7, "div", 3);
    \u0275\u0275elementStart(47, "button", 11);
    \u0275\u0275listener("click", function CheckinDetailsComponent_Conditional_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateGuest());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "a", 12)(51, "icon");
    \u0275\u0275text(52, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 20, "APP.VISITOR_KIOSK.HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.host)("placeholder", \u0275\u0275pipeBind1(9, 22, "APP.VISITOR_KIOSK.HOST"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 24, "APP.VISITOR_KIOSK.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 26, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.name)("placeholder", \u0275\u0275pipeBind1(19, 28, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 30, "APP.VISITOR_KIOSK.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.email)("placeholder", \u0275\u0275pipeBind1(28, 32, "APP.VISITOR_KIOSK.EMAIL"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 34, "APP.VISITOR_KIOSK.EMAIL_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 36, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.phone)("placeholder", \u0275\u0275pipeBind1(38, 38, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 40, "APP.VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.organisation)("placeholder", \u0275\u0275pipeBind1(45, 42, "APP.VISITOR_KIOSK.ORGANISATION"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_pass_number() ? 46 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 44, "APP.VISITOR_KIOSK.CONTINUE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(46, _c03));
  }
}
function CheckinDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 15);
    \u0275\u0275element(2, "mat-spinner", 16);
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.VISITOR_KIOSK.CHECKIN_LOADING"), " ");
  }
}
var CheckinDetailsComponent = class _CheckinDetailsComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this.form = form(this._checkin.form, (p) => {
      required(p.host, { message: "Host is required" });
      required(p.name, { message: "Name is required" });
      required(p.email, { message: "Email is required" });
      email(p.email, { message: "Email is invalid" });
      required(p.organisation, { message: "Organisation is required" });
    });
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ready_form = computed(
      () => !this.loading(),
      ...ngDevMode ? [{ debugName: "ready_form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.induction_after_details = settingSignal("induction_after_details", false);
    this.allow_pass_number = settingSignal("allow_pass_number", false);
    this.induction_enabled = settingSignal("induction_enabled", false);
    this.induction_details = settingSignal("induction_details");
    this.allow_printing_label = settingSignal("allow_printing_label", false);
    this.allow_user_photo_setting = settingSignal("allow_user_photo", false);
    this.induction_available = computed(
      () => this.induction_enabled() && this.induction_details(),
      ...ngDevMode ? [{ debugName: "induction_available" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_user_photo = computed(
      () => this.allow_user_photo_setting() && this.allow_printing_label(),
      ...ngDevMode ? [{ debugName: "allow_user_photo" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    const form_value = this._checkin.form();
    if (this._checkin.metadata === "registered") {
      this.updateGuest(false);
    } else {
      !form_value.email ? this.previous() : "";
    }
  }
  async updateGuest(update = true) {
    this.loading.set(true);
    if (update)
      await this._checkin.updateGuest();
    const result = await this._checkin.checkinGuest().then(() => true).catch(() => false);
    this.loading.set(false);
    if (!result)
      return;
    if (this.induction_after_details() && this.induction_available()) {
      this._router.navigate(["/checkin", "induction"]);
    } else {
      this._router.navigate([
        "/checkin",
        this.allow_user_photo() ? "photo" : "results"
      ]);
    }
  }
  previous() {
    this._router.navigate(["/checkin", "scan"]);
  }
  static {
    this.\u0275fac = function CheckinDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinDetailsComponent, selectors: [["", "checkin-details", ""]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "flex", "w-xl", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "m-4", "text-2xl"], ["field", "", 1, "flex", "flex-col"], ["form", "host"], ["appearance", "outline"], ["keyboard", "", "matInput", "", 3, "formField", "placeholder"], ["form", "name"], ["form", "email"], ["keyboard", "", "matInput", "", "type", "tel", 3, "formField", "placeholder"], ["form", "org"], ["next", "", "type", "button", "btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], ["form", "pass"], ["appearance", "outline", 1, "w-full"], [1, "bg-base-100", "flex", "flex-col", "items-center", "space-y-2", "rounded-sm", "p-16", "shadow-sm"], [3, "diameter"], [1, "my-4", "text-lg"]], template: function CheckinDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckinDetailsComponent_Conditional_0_Template, 53, 47, "form", 0)(1, CheckinDetailsComponent_Conditional_1_Template, 6, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.ready_form() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterModule,
      RouterLink,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      VirtualKeyboardComponent,
      TranslatePipe
    ], styles: ["\nform[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n[field][_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinDetailsComponent, [{
    type: Component,
    args: [{ selector: "[checkin-details]", template: `
        @if (ready_form()) {
            <form
                class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="m-4 text-2xl">Confirm Details</h3>
                <div field class="flex flex-col">
                    <label form="host">{{
                        'APP.VISITOR_KIOSK.HOST' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            [formField]="form.host"
                            [placeholder]="'APP.VISITOR_KIOSK.HOST' | translate"
                        />
                        <mat-error>
                            {{ 'APP.VISITOR_KIOSK.EMAIL_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="name">{{
                        'APP.VISITOR_KIOSK.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            [formField]="form.name"
                            [placeholder]="'APP.VISITOR_KIOSK.NAME' | translate"
                        />
                        <mat-error>Please enter your full name</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            [formField]="form.email"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.EMAIL' | translate
                            "
                        />
                        <mat-error>{{
                            'APP.VISITOR_KIOSK.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="email">{{
                        'APP.VISITOR_KIOSK.PHONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            type="tel"
                            [formField]="form.phone"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.PHONE' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div field class="flex flex-col">
                    <label form="org">{{
                        'APP.VISITOR_KIOSK.ORGANISATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            keyboard
                            matInput
                            [formField]="form.organisation"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.ORGANISATION' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                @if (allow_pass_number()) {
                    <div field class="flex flex-col">
                        <label form="pass">
                            {{ 'BOOKINGS.VISITOR_PASS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                [formField]="form.pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
                <button next type="button" btn matRipple (click)="updateGuest()">
                    {{ 'APP.VISITOR_KIOSK.CONTINUE' | translate }}
                </button>
                <a
                    icon
                    matRipple
                    class="absolute top-0 right-0"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </form>
        } @else {
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <div
                    class="bg-base-100 flex flex-col items-center space-y-2 rounded-sm p-16 shadow-sm"
                >
                    <mat-spinner [diameter]="48"></mat-spinner>
                    <div class="my-4 text-lg">
                        {{ 'APP.VISITOR_KIOSK.CHECKIN_LOADING' | translate }}
                    </div>
                </div>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      RouterModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;a33792e615dc48068535fd49c6ab78561fd4fd12d78fb032c7f5187e35f7c658;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts */\nform {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n[field] {\n  width: calc(100% - 2rem);\n}\nbutton {\n  margin-bottom: 1rem;\n  width: 8rem;\n}\n/*# sourceMappingURL=checkin-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinDetailsComponent, { className: "CheckinDetailsComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts", lineNumber: 186 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts
var _c04 = () => ["/welcome"];
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c04));
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

// apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts
var CheckinInductionComponent = class _CheckinInductionComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._allow_user_photo = settingSignal("allow_user_photo", false);
    this._allow_printing_label = settingSignal("allow_printing_label");
    this._induction_enabled = settingSignal("induction_enabled", false);
    this.event = this._checkin.event;
    this.agree = signal(
      false,
      ...ngDevMode ? [{ debugName: "agree" }] : (
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
    this.induction_details = settingSignal("induction_details");
    this.induction_after_details = settingSignal("induction_after_details", false);
    this.allow_user_photo = computed(
      () => this._allow_user_photo() && this._allow_printing_label() !== false,
      ...ngDevMode ? [{ debugName: "allow_user_photo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_enabled = computed(
      () => !!(this._induction_enabled() && this.induction_details()),
      ...ngDevMode ? [{ debugName: "is_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const event = this.event();
    if (!event)
      this._router.navigate(["/checkin"]);
    if (!this.is_enabled() || event.induction === "accepted") {
      if (this.induction_after_details()) {
        this._router.navigate(["/checkin", "results"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
    }
  }
  async decline() {
    this.loading.set(true);
    await this._checkin.declineInduction().catch((err) => {
      notifyError("Error declining induction", err);
      throw err;
    });
    this._checkin.setError("You have declined the induction.");
    notifyInfo("Induction declined successfully");
    this._router.navigate(["/checkin", "error"]);
  }
  async continue() {
    this.loading.set(true);
    await this._checkin.completeInduction().catch((err) => {
      notifyError("Error completing induction", err);
      throw err;
    });
    notifySuccess("Induction completed successfully");
    if (this.induction_after_details()) {
      this._router.navigate([
        "/checkin",
        this.allow_user_photo() ? "photo" : "results"
      ]);
    } else {
      this._router.navigate(["/checkin", "details"]);
    }
  }
  static {
    this.\u0275fac = function CheckinInductionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinInductionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinInductionComponent, selectors: [["", "checkin-induction", ""]], decls: 16, vars: 15, consts: [[1, "bg-base-100", "relative", "flex", "w-lg", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "my-4"], [1, "border-base-300", "max-h-[50vh]", "w-full", "overflow-x-hidden", "overflow-y-auto", "rounded-sm", "border", "p-4", "text-sm", "whitespace-pre-wrap", "opacity-60"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "w-32", "underline", 3, "click"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]], template: function CheckinInductionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-checkbox", 3);
        \u0275\u0275twoWayListener("ngModelChange", function CheckinInductionComponent_Template_mat_checkbox_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
          return $event;
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(9, "div", 4)(10, "button", 5);
        \u0275\u0275listener("click", function CheckinInductionComponent_Template_button_click_10_listener() {
          return ctx.decline();
        });
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275listener("click", function CheckinInductionComponent_Template_button_click_13_listener() {
          return ctx.continue();
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "APP.VISITOR_KIOSK.INDUCTION_MSG"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.induction_details(), " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.agree);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, "APP.VISITOR_KIOSK.ACCEPT_TERMS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "APP.VISITOR_KIOSK.DECLINE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.agree());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, "APP.VISITOR_KIOSK.ACCEPT"), " ");
      }
    }, dependencies: [MatRippleModule, MatRipple, MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinInductionComponent, [{
    type: Component,
    args: [{ selector: "[checkin-induction]", template: `
        <div
            class="bg-base-100 relative flex w-lg flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
        >
            <p class="my-4">
                {{ 'APP.VISITOR_KIOSK.INDUCTION_MSG' | translate }}
            </p>
            <div
                class="border-base-300 max-h-[50vh] w-full overflow-x-hidden overflow-y-auto rounded-sm border p-4 text-sm whitespace-pre-wrap opacity-60"
            >
                {{ induction_details() }}
            </div>
            <mat-checkbox [(ngModel)]="agree" class="my-4">
                {{ 'APP.VISITOR_KIOSK.ACCEPT_TERMS' | translate }}
            </mat-checkbox>
            <div class="flex items-center justify-center space-x-2">
                <button
                    btn
                    matRipple
                    class="clear w-32 underline"
                    (click)="decline()"
                >
                    {{ 'APP.VISITOR_KIOSK.DECLINE' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!agree()"
                    (click)="continue()"
                >
                    {{ 'APP.VISITOR_KIOSK.ACCEPT' | translate }}
                </button>
            </div>
        </div>
    `, imports: [TranslatePipe, MatRippleModule, MatCheckboxModule, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinInductionComponent, { className: "CheckinInductionComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts", lineNumber: 62 });
})();

// apps/visitor-kiosk/src/app/components/take-photo.component.ts
var _c05 = ["video"];
var _c12 = ["canvas"];
function TakePhotoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.VISITOR_KIOSK.PLEASE_WAIT"), " ");
  }
}
function TakePhotoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.takePhoto());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.back_text() || \u0275\u0275pipeBind1(2, 2, "COMMON.BACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "APP.VISITOR_KIOSK.TAKE_PHOTO_ACTION"), " ");
  }
}
function TakePhotoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelPhoto());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function TakePhotoComponent_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptPhoto());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.ACCEPT"), " ");
  }
}
var TakePhotoComponent = class _TakePhotoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.back_text = input(
      "",
      ...ngDevMode ? [{ debugName: "back_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.captured = output();
    this.back = output();
    this.has_photo = signal(
      false,
      ...ngDevMode ? [{ debugName: "has_photo" }] : (
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
    this._video_el = viewChild(
      "video",
      ...ngDevMode ? [{ debugName: "_video_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._canvas_el = viewChild(
      "canvas",
      ...ngDevMode ? [{ debugName: "_canvas_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.constraints = {
      audio: false,
      video: {
        aspectRatio: { ideal: 1, exact: 1 }
      }
    };
    this.image_url = signal(
      null,
      ...ngDevMode ? [{ debugName: "image_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.loading.set(true);
    this.startCapture();
  }
  ngOnDestroy() {
    this.stopCapture();
  }
  async startCapture() {
    this.image_url.set(null);
    const stream = await navigator.mediaDevices?.getUserMedia(this.constraints);
    this._video_el().nativeElement.srcObject = stream;
    this.loading.set(false);
  }
  stopCapture() {
    const el = this._video_el().nativeElement;
    if (!el?.srcObject)
      return;
    const stream = el.srcObject;
    for (const track of stream.getVideoTracks()) {
      track.stop();
    }
  }
  takePhoto() {
    this.loading.set(true);
    const canvas = this._canvas_el().nativeElement;
    const ctx = canvas.getContext("2d");
    const vid_el = this._video_el().nativeElement;
    const { videoWidth, videoHeight } = vid_el;
    const cw = canvas.width;
    const ch = canvas.height;
    const min_dim = Math.min(videoWidth, videoHeight);
    const sw = Math.min(min_dim, canvas.width);
    const sh = Math.min(min_dim, canvas.height);
    const sx = (videoWidth - sw) / 2;
    const sy = (videoHeight - sh) / 2;
    ctx.drawImage(vid_el, sx, sy, sw, sh, 0, 0, cw, ch);
    this.has_photo.set(true);
    this.stopCapture();
    this.loading.set(false);
  }
  cancelPhoto() {
    this.loading.set(true);
    const canvas = this._canvas_el().nativeElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.has_photo.set(false);
    this.startCapture();
  }
  acceptPhoto() {
    const canvas = this._canvas_el().nativeElement;
    try {
      this.image_url.set(canvas.toDataURL("image/jpeg", 0.75));
      this.captured.emit(this.image_url());
    } catch (err) {
      console.error("Failed to convert canvas blob into JPEG image. Error: ", err);
      this.captured.emit(null);
      this.cancelPhoto();
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275TakePhotoComponent_BaseFactory;
      return function TakePhotoComponent_Factory(__ngFactoryType__) {
        return (\u0275TakePhotoComponent_BaseFactory || (\u0275TakePhotoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TakePhotoComponent)))(__ngFactoryType__ || _TakePhotoComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TakePhotoComponent, selectors: [["a-take-photo"]], viewQuery: function TakePhotoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._video_el, _c05, 5)(ctx._canvas_el, _c12, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { back_text: [1, "back_text"] }, outputs: { captured: "captured", back: "back" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [["video", ""], ["canvas", ""], ["name", "camera", 1, "border-base-300", "bg-base-200", "relative", "flex", "h-88", "w-88", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2"], ["id", "video", "autoplay", "", 1, "absolute", "top-1/2", "left-1/2", "mx-auto", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover"], ["id", "canvas", "width", "400", "height", "400", 1, "absolute", "top-1/2", "left-1/2", "mx-auto", "h-full", "w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "mt-4", "flex", "w-full", "items-center", "justify-center", "space-x-2"], ["diameter", "32"], [1, "text"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "take-photo", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"]], template: function TakePhotoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "video", 3, 0)(3, "canvas", 4, 1);
        \u0275\u0275conditionalCreate(5, TakePhotoComponent_Conditional_5_Template, 5, 3, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, TakePhotoComponent_Conditional_7_Template, 6, 6)(8, TakePhotoComponent_Conditional_8_Template, 6, 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", ctx.has_photo());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("opacity-0", !ctx.has_photo());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.has_photo() ? 7 : 8);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[name=camera][_ngcontent-%COMP%] {\n  width: 22.5rem;\n  height: 25rem;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n/*# sourceMappingURL=take-photo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TakePhotoComponent, [{
    type: Component,
    args: [{ selector: "a-take-photo", template: `
        <div
            name="camera"
            class="border-base-300 bg-base-200 relative flex h-88 w-88 flex-col items-center justify-center overflow-hidden rounded-full border-2"
        >
            <video
                id="video"
                #video
                autoplay
                [class.opacity-0]="has_photo()"
                class="absolute top-1/2 left-1/2 mx-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            ></video>
            <canvas
                id="canvas"
                #canvas
                width="400"
                height="400"
                class="absolute top-1/2 left-1/2 mx-auto h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                [class.opacity-0]="!has_photo()"
            ></canvas>
            @if (loading()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <div class="text">
                        {{ 'APP.VISITOR_KIOSK.PLEASE_WAIT' | translate }}
                    </div>
                </div>
            }
        </div>
        <div class="mt-4 flex w-full items-center justify-center space-x-2">
            @if (!has_photo()) {
                <button
                    class="inverse flex-1"
                    btn
                    matRipple
                    (click)="back.emit()"
                >
                    {{ back_text() || ('COMMON.BACK' | translate) }}
                </button>
                <button
                    class="take-photo flex-1"
                    btn
                    matRipple
                    (click)="takePhoto()"
                >
                    {{ 'APP.VISITOR_KIOSK.TAKE_PHOTO_ACTION' | translate }}
                </button>
            } @else {
                <button
                    class="inverse flex-1"
                    btn
                    matRipple
                    (click)="cancelPhoto()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="acceptPhoto()">
                    {{ 'COMMON.ACCEPT' | translate }}
                </button>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, MatProgressSpinnerModule], styles: ["/* angular:styles/component:css;c3948da5e7161cbc96cfea419181985b0f256ccc8ea2b8830ee9778602d63cb6;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/components/take-photo.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[name=camera] {\n  width: 22.5rem;\n  height: 25rem;\n}\nbutton {\n  width: 8rem;\n}\n/*# sourceMappingURL=take-photo.component.css.map */\n"] }]
  }], null, { back_text: [{ type: Input, args: [{ isSignal: true, alias: "back_text", required: false }] }], captured: [{ type: Output, args: ["captured"] }], back: [{ type: Output, args: ["back"] }], _video_el: [{ type: ViewChild, args: ["video", { isSignal: true }] }], _canvas_el: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TakePhotoComponent, { className: "TakePhotoComponent", filePath: "apps/visitor-kiosk/src/app/components/take-photo.component.ts", lineNumber: 102 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts
function CheckinPhotoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-take-photo", 3);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("captured", function CheckinPhotoComponent_Conditional_0_Template_a_take_photo_captured_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePhoto($event));
    })("back", function CheckinPhotoComponent_Conditional_0_Template_a_take_photo_back_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.skip());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.VISITOR_KIOSK.TAKE_PHOTO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("back_text", \u0275\u0275pipeBind1(5, 4, "APP.VISITOR_KIOSK.SKIP"));
  }
}
function CheckinPhotoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.PRINT_LOADING"), " ");
  }
}
var CheckinPhotoComponent = class _CheckinPhotoComponent {
  constructor() {
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.loading.set(false);
  }
  skip() {
    this._router.navigate(["/checkin", "results"]);
  }
  async handlePhoto(event) {
    if (!event)
      return notifyError("Error saving image, please try again");
    this.loading.set(true);
    this._checkin.setPhoto(event);
    this.loading.set(false);
    this._router.navigate(["/checkin", "results"]);
  }
  static {
    this.\u0275fac = function CheckinPhotoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinPhotoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinPhotoComponent, selectors: [["checkin-photo"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "flex", "w-[24rem]", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "m-auto", "flex", "flex-col", "items-center"], [1, "mb-4", "text-xl"], [3, "captured", "back", "back_text"], [3, "diameter"], [1, "my-4", "text-lg", "text-white"]], template: function CheckinPhotoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckinPhotoComponent_Conditional_0_Template, 6, 6, "div", 0)(1, CheckinPhotoComponent_Conditional_1_Template, 5, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, TakePhotoComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinPhotoComponent, [{
    type: Component,
    args: [{ selector: "checkin-photo", template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-[24rem] flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="mb-4 text-xl">
                    {{ 'APP.VISITOR_KIOSK.TAKE_PHOTO' | translate }}
                </h3>
                <a-take-photo
                    (captured)="handlePhoto($event)"
                    [back_text]="'APP.VISITOR_KIOSK.SKIP' | translate"
                    (back)="skip()"
                ></a-take-photo>
            </div>
        } @else {
            <div class="m-auto flex flex-col items-center">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    {{ 'APP.VISITOR_KIOSK.PRINT_LOADING' | translate }}
                </div>
            </div>
        }
    `, imports: [TranslatePipe, MatProgressSpinnerModule, TakePhotoComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinPhotoComponent, { className: "CheckinPhotoComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts", lineNumber: 42 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts
var _c06 = () => ["/welcome"];
function CheckinPreferencesComponent_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
  }
}
function CheckinPreferencesComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " You have already selected a beverage. ");
    \u0275\u0275elementEnd();
  }
}
function CheckinPreferencesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-select", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CheckinPreferencesComponent_Conditional_0_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.beverage, $event) || (ctx_r1.beverage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(8, CheckinPreferencesComponent_Conditional_0_For_9_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, CheckinPreferencesComponent_Conditional_0_Conditional_10_Template, 2, 0, "div", 7);
    \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
    \u0275\u0275listener("click", function CheckinPreferencesComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 10)(16, "icon");
    \u0275\u0275text(17, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "APP.VISITOR_KIOSK.BEVERAGE_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.beverage);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 9, "APP.VISITOR_KIOSK.BEVERAGE_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.menu());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_beverage() ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.has_beverage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, ctx_r1.beverage() ? "APP.VISITOR_KIOSK.SAVE" : "APP.VISITOR_KIOSK.CONTINUE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c06));
  }
}
function CheckinPreferencesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r1.type() === "menu" ? "APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING" : "APP.VISITOR_KIOSK.BEVERAGE_LOADING"), " ");
  }
}
var CheckinPreferencesComponent = class _CheckinPreferencesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._checkin = inject(CheckinStateService);
    this._org = inject(OrganisationService);
    this._last_jwt = "";
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = signal(
      "menu",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.existing_beverage = signal(
      null,
      ...ngDevMode ? [{ debugName: "existing_beverage" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.beverage = signal(
      null,
      ...ngDevMode ? [{ debugName: "beverage" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_beverage = computed(
      () => !!this.existing_beverage(),
      ...ngDevMode ? [{ debugName: "has_beverage" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = this._checkin.event;
    this.bld_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "bld_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.menu = signal(
      [],
      ...ngDevMode ? [{ debugName: "menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_standalone = settingSignal("standalone_visitor_location", "");
    this._menu_load_id = 0;
    this._update_bld_id = effect(
      () => {
        this.bld_id.set(this._org.active_building()?.id || "");
      },
      ...ngDevMode ? [{ debugName: "_update_bld_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_menu = effect(
      async () => {
        const bld = this.bld_id();
        const load_id = ++this._menu_load_id;
        if (!bld) {
          this.menu.set([]);
          return;
        }
        const menu = await queryCateringItems(bld).catch(() => []);
        if (load_id !== this._menu_load_id)
          return;
        this.menu.set(menu.filter((_) => (_.tags || []).find((_2) => _2.toLowerCase() === "drink" || _2.toLowerCase() === "drinks" || _2.toLowerCase() === "beverage")));
      },
      ...ngDevMode ? [{ debugName: "_load_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_menu = effect(
      () => {
        const menu = this.menu();
        if (menu.length) {
          this.loading.set(false);
          this.clearTimeout("no_menu");
        } else if (this.bld_id()) {
          this.timeout("no_menu", () => {
            notifyError("No menu available");
            this.next();
          }, 1e3);
        }
      },
      ...ngDevMode ? [{ debugName: "_handle_menu" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.loading.set(true);
    this.loadJwtFromRoute();
    this.type.set("menu");
    this.timeout("event", () => this.loadExistingBeverage(), 1e3);
  }
  async update() {
    this.type.set("save");
    if (!this.beverage())
      return this.next();
    this.loading.set(true);
    const booking = this._checkin.event();
    if (!booking)
      return notifyError(i18n("APP.VISITOR_KIOSK.LOAD_ERROR"));
    const email2 = booking.asset_id;
    const catering_item = new CateringItem(__spreadProps(__spreadValues({}, this.beverage()), {
      quantity: 1
    }));
    await setGuestCateringItem(email2, catering_item, booking.id);
    notifySuccess(i18n("APP.VISITOR_KIOSK.BEVERAGE_SUCCESS"));
    this.loading.set(false);
    this.next();
  }
  next() {
    this._router.navigate(["/welcome"]);
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate(["/checkin", "error"]);
  }
  async loadJwtFromRoute() {
    const params = this._route.snapshot.queryParamMap;
    const jwt = params.get("jwt") || params.get("token") || parseTokenFromUrl(window.location.href);
    if (!jwt || jwt === this._last_jwt)
      return;
    this._last_jwt = jwt;
    li(jwt);
    const data = parseJWT(jwt);
    const user = data.u;
    if (!user)
      return;
    const email2 = user.e;
    const [event_id, , bld_zone] = user.r || [];
    this.bld_id.set(bld_zone);
    await this._checkin.loadGuestAndEvent(email2, event_id).catch((err) => {
      this.handleError("Unable to find visitor or a meeting associated with the given email address.");
      throw err;
    });
  }
  async loadExistingBeverage() {
    const event = this.event();
    if (!event)
      return this.next();
    if (!event.linked_event && !this.allow_standalone()) {
      log("CHECKIN", "Visitor booking does not support catering.", void 0, "info");
    }
    const existing = await getGuestCateringItem(event.asset_id, event.id).catch(() => null);
    if (existing) {
      this.existing_beverage.set(existing);
      this.beverage.set(existing);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckinPreferencesComponent_BaseFactory;
      return function CheckinPreferencesComponent_Factory(__ngFactoryType__) {
        return (\u0275CheckinPreferencesComponent_BaseFactory || (\u0275CheckinPreferencesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinPreferencesComponent)))(__ngFactoryType__ || _CheckinPreferencesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinPreferencesComponent, selectors: [["checkin-preferences"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "flex", "w-xl", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "bg-base-100", "relative", "flex", "h-80", "w-md", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded-sm", "p-8", "shadow-sm"], [1, "mb-2", "w-full", "text-xl"], [1, "w-full"], ["appearance", "outline", 1, "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "bg-warning", "text-warning-content", "rounded-sm", "px-2", "py-1"], [1, "flex", "w-full", "items-center", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", 3, "routerLink"], [3, "diameter"]], template: function CheckinPreferencesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckinPreferencesComponent_Conditional_0_Template, 18, 14, "div", 0)(1, CheckinPreferencesComponent_Conditional_1_Template, 5, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-preferences.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinPreferencesComponent, [{
    type: Component,
    args: [{ selector: "checkin-preferences", template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-xl flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.BEVERAGE_MSG' | translate }}
                </h3>
                <div class="w-full">
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [(ngModel)]="beverage"
                            [placeholder]="
                                'APP.VISITOR_KIOSK.BEVERAGE_SELECT' | translate
                            "
                        >
                            @for (item of menu(); track item) {
                                <mat-option [value]="item">
                                    {{ item.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (has_beverage()) {
                    <div
                        class="bg-warning text-warning-content rounded-sm px-2 py-1"
                    >
                        You have already selected a beverage.
                    </div>
                }
                <div class="flex w-full items-center justify-end">
                    <button
                        btn
                        matRipple
                        class="w-32"
                        [disabled]="has_beverage()"
                        (click)="update()"
                    >
                        {{
                            (beverage()
                                ? 'APP.VISITOR_KIOSK.SAVE'
                                : 'APP.VISITOR_KIOSK.CONTINUE'
                            ) | translate
                        }}
                    </button>
                </div>
                <a
                    icon
                    matRipple
                    class="absolute top-2 right-2"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="bg-base-100 relative flex h-80 w-md flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm p-8 shadow-sm"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{
                        (type() === 'menu'
                            ? 'APP.VISITOR_KIOSK.BEVERAGE_MENU_LOADING'
                            : 'APP.VISITOR_KIOSK.BEVERAGE_LOADING'
                        ) | translate
                    }}
                </div>
            </div>
        }
    `, imports: [
      FormsModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      RouterModule,
      MatFormFieldModule,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-preferences.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinPreferencesComponent, { className: "CheckinPreferencesComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts", lineNumber: 126 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts
var _c07 = ["video"];
var _c13 = () => ["/welcome"];
function CheckinQRScanComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "span", 16);
    \u0275\u0275text(2, " Ready to scan QR code ");
    \u0275\u0275elementEnd();
  }
}
var CheckinQRScanComponent = class _CheckinQRScanComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
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
    if (event.checked_in_at) {
      this._router.navigate(["/checkin", "checkout"]);
      return;
    }
    if (event.checked_out_at) {
      this.handleError("Your meeting has already finished.");
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
  async checkEmail(email2) {
    if (this.checking_code() || !email2 || !email2.includes("@") || email2.length < 5)
      return;
    this.checking_code.set(true);
    try {
      await this._checkin.loadGuestAndEvent(email2);
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
    if (event.checked_in_at) {
      this.checking_code.set(false);
      this._router.navigate(["/checkin", "checkout"]);
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
    this._router.navigate(["/checkin", "error"]);
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
        \u0275\u0275viewQuerySignal(ctx._video_el, _c07, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 31, vars: 23, consts: [["video", ""], [1, "bg-base-100", "relative", "flex", "w-xl", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "my-4"], [1, "flex", "w-full", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-px", "flex-1"], ["keyboard", "", "matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModelChange", "blur", "keyup.enter", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "mt-4", "overflow-hidden", "rounded-sm", "border"], [1, "absolute", "top-1/2", "left-1/2", "z-0", "flex", "-translate-x-1/2", "-translate-y-1/2", "flex-col", "items-center", "space-y-2", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "relative", "z-10", "object-cover"], [1, "bg-base-100/90", "text-base-content", "absolute", "right-2", "bottom-2", "z-20", "inline-flex", "items-center", "gap-2", "rounded", "px-2", "py-1", "text-sm", "shadow"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "bg-base-100", "relative", "flex", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-16", "shadow-sm"], ["diameter", "32"], [1, "status-dot"]], template: function CheckinQRScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "mat-form-field", 4)(6, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("blur", function CheckinQRScanComponent_Template_input_blur_6_listener() {
          return ctx.checkEmail(ctx.email());
        })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_6_listener() {
          return ctx.checkEmail(ctx.email());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(7, "mat-error");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275listener("click", function CheckinQRScanComponent_Template_button_click_10_listener() {
          return ctx.checkEmail(ctx.email());
        });
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "icon", 9);
        \u0275\u0275text(16, "videocam_off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "video", 11, 0);
        \u0275\u0275conditionalCreate(22, CheckinQRScanComponent_Conditional_22_Template, 3, 0, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "a", 13)(24, "icon");
        \u0275\u0275text(25, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 14);
        \u0275\u0275element(27, "mat-spinner", 15);
        \u0275\u0275elementStart(28, "p", 2);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("hidden", ctx.checking_code());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "APP.VISITOR_KIOSK.QR_CODE_MSG"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "APP.VISITOR_KIOSK.INVALID_EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 16, "APP.VISITOR_KIOSK.FIND_DETAILS"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 18, "APP.VISITOR_KIOSK.CAMERA_UNAVAILABLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.scanner_ready() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c13));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("hidden", !ctx.checking_code());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 20, "APP.VISITOR_KIOSK.LOADING_DETAILS"), " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinQRScanComponent, { className: "CheckinQRScanComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts", lineNumber: 145 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts
var _c08 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({ name: a0, email: a1, photo: a2, title: a3, host: a4, zones: a5, date: a6, extra_details: a7, pass_number: a8, qr_code: a9 });
function CheckinResultsComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function CheckinResultsComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.print());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.VISITOR_KIOSK.PRINT_LABEL"), " ");
  }
}
function CheckinResultsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function CheckinResultsComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.next());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.VISITOR_KIOSK.BEVERAGES"), " ");
  }
}
function CheckinResultsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "user-label", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const ev_r5 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r2.label_size().scale + "mm");
    \u0275\u0275property("user", \u0275\u0275pureFunctionV(5, _c08, [ev_r5?.asset_name || ev_r5?.description, ev_r5?.asset_id, ctx_r2.photo(), ev_r5?.title, ev_r5?.user_name || ev_r5.user_email, ev_r5?.zones, ev_r5?.date || ctx_r2.date(), ev_r5?.extension_data?.extra_details, ev_r5?.extension_data?.pass_number, ctx_r2.qr_code()]))("width", ctx_r2.label_size().width)("height", ctx_r2.label_size().height);
  }
}
function CheckinResultsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275declareLet(1);
    \u0275\u0275elementStart(2, "h3", 1);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 2);
    \u0275\u0275pipe(6, "sanitize");
    \u0275\u0275elementStart(7, "div", 3);
    \u0275\u0275conditionalCreate(8, CheckinResultsComponent_Conditional_0_Conditional_8_Template, 3, 3, "button", 4);
    \u0275\u0275conditionalCreate(9, CheckinResultsComponent_Conditional_0_Conditional_9_Template, 3, 3, "button", 5);
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function CheckinResultsComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.done());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, CheckinResultsComponent_Conditional_0_Conditional_13_Template, 2, 16, "div", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    const ev_r6 = \u0275\u0275storeLet(ctx_r2.event());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, ev_r6.extension_data?.self_registered ? "APP.VISITOR_KIOSK.CHECKED_IN_MSG_SELF_REG" : "APP.VISITOR_KIOSK.CHECKED_IN_MSG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(6, 9, ctx_r2.result_template(), "html"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.allow_printing_label ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_beverages() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "APP.VISITOR_KIOSK.CONFIRM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.printing() ? 13 : -1);
  }
}
var DEFAULT_TEMPLATE = `
<p class="text-center">
    Welcome, you have a meeting at {{ time }} with {{ host_name }}.
    <br />{{ host_name }} has been notified and will be with you shortly.
</p>
<p>{{ can_use_lift }}</p>
`;
var CheckinResultsComponent = class _CheckinResultsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._date = inject(DatePipe);
    this._checkin = inject(CheckinStateService);
    this.qr_code = signal(
      "",
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
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
    this.booking = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_beverages = signal(
      false,
      ...ngDevMode ? [{ debugName: "allow_beverages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.printing = signal(
      false,
      ...ngDevMode ? [{ debugName: "printing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label_size = signal(
      { width: 25, height: 15, scale: 4 },
      ...ngDevMode ? [{ debugName: "label_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = this._checkin.event;
    this.guest = this._checkin.guest;
    this.photo = this._checkin.photo;
    this.level = computed(
      () => {
        const event = this.event();
        this._org.initialised();
        return event ? this._org.levelWithID(event.zones) : null;
      },
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.result_template = computed(
      () => {
        const event = this.event();
        const guest = this.guest();
        if (!event || !guest)
          return DEFAULT_TEMPLATE;
        let template = this._settings.get("app.checked_in_template");
        if (!template)
          template = DEFAULT_TEMPLATE;
        let updated_template = template.replace(/{{ title }}/g, event?.title || "").replace(/{{ room_name }}/g, event?.extension_data?.location_id || "").replace(/{{ host_name }}/g, event?.user_name || "").replace(/{{ host_email }}/g, event?.user_email || "").replace(/{{ visitor_name }}/g, guest?.name || "").replace(/{{ visitor_email }}/g, guest?.email || "").replace(/{{ can_use_lift }}/g, event?.extension_data?.can_use_lift ? `Please use the vistor access lift over there` : `Please wait in the lobby.`);
        try {
          const date = event.date || event.event_start * 1e3 || event.booking_start * 1e3 || startOfMinute(Date.now());
          updated_template = updated_template.replace(/{{ date }}/g, this._date.transform(date, "mediumDate")).replace(/{{ time }}/g, this._date.transform(date, this.time_format));
        } catch {
        }
        return updated_template;
      },
      ...ngDevMode ? [{ debugName: "result_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.print = () => {
      this.printing.set(true);
      this.qr_code.set(generateQRCode(this.booking()?.asset_id));
      this.timeout("print", () => window.print());
    };
  }
  get time_format() {
    return this._settings.time_format;
  }
  get now() {
    return startOfMinute(roundToNearestMinutes(Date.now(), { nearestTo: 5 }));
  }
  get logo() {
    return this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light");
  }
  get allow_printing_label() {
    return this._settings.get("app.allow_printing_label") !== false;
  }
  async ngOnInit() {
    const event = this._checkin.event();
    !event ? this.previous() : "";
    if (!event)
      return;
    this.date.set(event.date || event.booking_start * 1e3);
    this.zones.set(event.zones);
    this.booking.set(event);
    const standalone_location = this._settings.get("app.standalone_visitor_location");
    this.allow_beverages.set(this._settings.get("app.allow_beverages") && (event.linked_event || standalone_location));
    const label_size = this._settings.get("app.visitor_label_size") || {};
    this.label_size.set({
      width: label_size.width || 25,
      height: label_size.height || 15,
      scale: label_size.scale || 4
    });
  }
  previous() {
    this._router.navigate(["/checkin"]);
  }
  done() {
    this._router.navigate(["/welcome"]);
  }
  async next() {
    const event = this._checkin.event();
    const standalone_location = this._settings.get("app.standalone_visitor_location");
    this._settings.get("app.allow_beverages") && (event.linked_event || standalone_location) ? this._router.navigate(["/checkin", "preferences"]) : this._router.navigate(["/welcome"]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckinResultsComponent_BaseFactory;
      return function CheckinResultsComponent_Factory(__ngFactoryType__) {
        return (\u0275CheckinResultsComponent_BaseFactory || (\u0275CheckinResultsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CheckinResultsComponent)))(__ngFactoryType__ || _CheckinResultsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckinResultsComponent, selectors: [["checkin-results"]], features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "bg-base-100", "relative", "flex", "w-xl", "flex-col", "items-center", "space-y-4", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm", "print:hidden"], [1, "text-xl"], [1, "", 3, "innerHTML"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-32"], ["btn", "", "matRipple", "", 1, "inverse", "w-32"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "print-only", "fixed", "top-0", "left-0"], ["btn", "", "matRipple", "", 1, "inverse", "w-32", 3, "click"], [3, "user", "width", "height"]], template: function CheckinResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckinResultsComponent_Conditional_0_Template, 14, 14);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.event() ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      UserLabelComponent,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-result.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinResultsComponent, [{
    type: Component,
    args: [{ selector: "checkin-results", template: `
        @if (event()) {
            <div
                class="bg-base-100 relative flex w-xl flex-col items-center space-y-4 overflow-hidden rounded-sm p-4 shadow-sm print:hidden"
            >
                @let ev = event();
                <h3 class="text-xl">
                    {{
                        (ev.extension_data?.self_registered
                            ? 'APP.VISITOR_KIOSK.CHECKED_IN_MSG_SELF_REG'
                            : 'APP.VISITOR_KIOSK.CHECKED_IN_MSG'
                        ) | translate
                    }}
                </h3>
                <div
                    class=""
                    [innerHTML]="result_template() | sanitize: 'html'"
                ></div>
                <div class="flex items-center space-x-2">
                    @if (allow_printing_label) {
                        <button btn matRipple class="w-32" (click)="print()">
                            {{ 'APP.VISITOR_KIOSK.PRINT_LABEL' | translate }}
                        </button>
                    }
                    @if (allow_beverages()) {
                        <button
                            btn
                            matRipple
                            class="inverse w-32"
                            (click)="next()"
                        >
                            {{ 'APP.VISITOR_KIOSK.BEVERAGES' | translate }}
                        </button>
                    }
                    <button btn matRipple class="w-32" (click)="done()">
                        {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                    </button>
                </div>
            </div>
            @if (printing()) {
                <div class="print-only fixed top-0 left-0">
                    <user-label
                        [user]="
                            $any({
                                name: ev?.asset_name || ev?.description,
                                email: ev?.asset_id,
                                photo: photo(),
                                title: ev?.title,
                                host: ev?.user_name || ev.user_email,
                                zones: ev?.zones,
                                date: ev?.date || date(),
                                extra_details:
                                    ev?.extension_data?.extra_details,
                                pass_number: ev?.extension_data?.pass_number,
                                qr_code: qr_code(),
                            })
                        "
                        [width]="label_size().width"
                        [height]="label_size().height"
                        [style.font-size]="label_size().scale + 'mm'"
                    />
                </div>
            }
        }
    `, providers: [DatePipe], imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      UserLabelComponent,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkin-result.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckinResultsComponent, { className: "CheckinResultsComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts", lineNumber: 114 });
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

// apps/visitor-kiosk/src/app/checkin/checkout.component.ts
var _c09 = () => ["/welcome"];
function CheckoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 6)(12, "icon");
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "APP.VISITOR_KIOSK.CHECKOUT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "APP.VISITOR_KIOSK.CHECKOUT_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "COMMON.CHECK_OUT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c09));
  }
}
function CheckoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.VISITOR_KIOSK.CHECKOUT_LOADING"), " ");
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this._state = inject(CheckinStateService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const event = this._state.event();
    if (!event)
      this._router.navigate(["/checkin"]);
  }
  async checkout() {
    this.loading.set(true);
    const result = await this._state.checkinGuest(false).then(() => true).catch(() => false);
    this.loading.set(false);
    if (!result)
      return;
    this._router.navigate(["/welcome"]);
    notifySuccess(i18n("APP.VISITOR_KIOSK.CHECKOUT_SUCCESS"));
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "flex", "w-md", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "p-4", "shadow-sm"], [1, "bg-base-100", "relative", "flex", "h-80", "w-md", "flex-col", "items-center", "justify-center", "space-y-2", "overflow-hidden", "rounded-sm", "p-8", "shadow-sm"], [1, "mb-2", "w-full", "text-xl"], [1, "mt-2", "mb-4", "w-full"], [1, "flex", "w-full", "items-center", "justify-end"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", 3, "routerLink"], [3, "diameter"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CheckoutComponent_Conditional_0_Template, 14, 11, "div", 0)(1, CheckoutComponent_Conditional_1_Template, 5, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterModule,
      RouterLink,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-md flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <h3 class="mb-2 w-full text-xl">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT' | translate }}
                </h3>
                <div class="mt-2 mb-4 w-full">
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_MSG' | translate }}
                </div>
                <div class="flex w-full items-center justify-end">
                    <button btn matRipple class="w-32" (click)="checkout()">
                        {{ 'COMMON.CHECK_OUT' | translate }}
                    </button>
                </div>
                <a
                    icon
                    matRipple
                    class="absolute top-2 right-2"
                    [routerLink]="['/welcome']"
                >
                    <icon>close</icon>
                </a>
            </div>
        } @else {
            <div
                class="bg-base-100 relative flex h-80 w-md flex-col items-center justify-center space-y-2 overflow-hidden rounded-sm p-8 shadow-sm"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <div>
                    {{ 'APP.VISITOR_KIOSK.CHECKOUT_LOADING' | translate }}
                </div>
            </div>
        }
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;45a1e70cbb4b993091add757337674b51f7e2cd5d8c6d8ffd9f9f0736356a592;/home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/app/checkin/checkout.component.ts */\n:host > div {\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "apps/visitor-kiosk/src/app/checkin/checkout.component.ts", lineNumber: 67 });
})();

// apps/visitor-kiosk/src/app/checkin/checkin.routes.ts
var ROUTES = [
  {
    path: "",
    component: CheckinComponent,
    children: [
      { path: "scan", component: CheckinQRScanComponent },
      { path: "details", component: CheckinDetailsComponent },
      { path: "preferences", component: CheckinPreferencesComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "photo", component: CheckinPhotoComponent },
      { path: "results", component: CheckinResultsComponent },
      { path: "error", component: CheckinErrorComponent },
      { path: "covid", component: CheckinCovidComponent },
      { path: "induction", component: CheckinInductionComponent },
      { path: "**", redirectTo: "scan" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=checkin.routes-L6R4KELE.js.map
