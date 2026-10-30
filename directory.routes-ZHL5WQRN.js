import {
  VirtualConciergeButtonComponent
} from "./chunk-QVTVGJVI.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-RI34WIO7.js";
import "./chunk-5GR6LZDA.js";
import "./chunk-UFXUSO4O.js";
import "./chunk-TZJP3BD6.js";
import "./chunk-SWF2FTYD.js";
import "./chunk-R7ZSP4JA.js";
import "./chunk-XCC4AVVI.js";
import "./chunk-HIOO4OM6.js";
import {
  UserAvatarComponent
} from "./chunk-A4ULKLG5.js";
import "./chunk-ORLV5Z2U.js";
import {
  searchStaff
} from "./chunk-TQWVRBSO.js";
import "./chunk-MX6FHWCN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-2EHUPV2S.js";
import "./chunk-4ZPX43DB.js";
import "./chunk-2QAVTKHL.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatSuffix
} from "./chunk-C6L5P757.js";
import "./chunk-LMAIQ4DZ.js";
import "./chunk-UEIA54UA.js";
import "./chunk-H2GPFJZZ.js";
import "./chunk-TWPPCAYQ.js";
import "./chunk-DLMEBJIG.js";
import "./chunk-KCAODCN5.js";
import "./chunk-3JQPS2OO.js";
import "./chunk-SQO5Y5ZU.js";
import {
  TranslatePipe
} from "./chunk-QGI2HD4I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  SettingsService
} from "./chunk-GRXVKFOQ.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-ABUJTHF5.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import "./chunk-WSQPQHCZ.js";
import "./chunk-AWPFSUBU.js";
import "./chunk-J4TWZHWN.js";
import "./chunk-JJMLMF3T.js";
import "./chunk-HXQPKKM6.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-CJAQVJ62.js";
import {
  CommonModule,
  Component,
  computed,
  effect,
  inject,
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
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UL33YUHR.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/directory/user-list.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ user: a0 });
var _c2 = (a0) => ({ text: a0 });
function DirectoryUserListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 13);
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("user", user_r2);
  }
}
function DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_For_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 2, "tel:" + user_r2.phone, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.WORKPLACE.DIRECTORY_CALL"), " ");
  }
}
function DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_For_3_Conditional_1_Template, 1, 1, "a-user-avatar", 13);
    \u0275\u0275elementStart(2, "div", 14)(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 16);
    \u0275\u0275pipe(6, "safe");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17)(9, "a", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_For_3_Conditional_12_Template, 4, 7, "a", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("with-image", ctx_r2.show_image);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.show_image ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(6, 10, "mailto:" + user_r2.email, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0))("queryParams", \u0275\u0275pureFunction1(16, _c1, user_r2.email));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "APP.WORKPLACE.DIRECTORY_LOCATE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r2.phone ? 12 : -1);
  }
}
function DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_For_3_Template, 13, 18, "div", 11, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const letter_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const grouped_users_r5 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", letter_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(grouped_users_r5[letter_r4]);
  }
}
function DirectoryUserListComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DirectoryUserListComponent_Conditional_12_For_1_Conditional_0_Template, 4, 1);
  }
  if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const grouped_users_r5 = \u0275\u0275readContextLet(11);
    \u0275\u0275conditional(grouped_users_r5[letter_r4]?.length ? 0 : -1);
  }
}
function DirectoryUserListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DirectoryUserListComponent_Conditional_12_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.letters);
  }
}
function DirectoryUserListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 20);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275listener("click", function DirectoryUserListComponent_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retry());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "COMMON.LOAD_ERROR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"), " ");
  }
}
function DirectoryUserListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const search_str_r7 = ctx_r2.search();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(search_str_r7?.length >= ctx_r2.min_search_length ? "close" : "arrow_upward");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", search_str_r7?.length >= ctx_r2.min_search_length ? \u0275\u0275pipeBind2(5, 2, "APP.WORKPLACE.COLLEAGUE_SEARCH_NO_MATCH", \u0275\u0275pureFunction1(7, _c2, search_str_r7)) : \u0275\u0275pipeBind1(6, 5, "APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY"), " ");
  }
}
var OTHER_GROUP = "#";
var LETTERS = [...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(""), OTHER_GROUP];
function nameGroup(name) {
  const letter = (name || "").trim().charAt(0).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  return LETTERS.includes(letter) ? letter : OTHER_GROUP;
}
var DirectoryUserListComponent = class _DirectoryUserListComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._retry = signal(
      0,
      ...ngDevMode ? [{ debugName: "_retry" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.letters = LETTERS;
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_results = signal(
      [],
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.grouped_results = computed(
      () => this.buildGroups(this.search_results()),
      ...ngDevMode ? [{ debugName: "grouped_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      const query = this.search();
      this._retry();
      const timeout = setTimeout(async () => {
        this.failed.set(false);
        if (query.length < this.min_search_length) {
          this.search_results.set([]);
          this.loading.set(false);
          return;
        }
        this.loading.set(true);
        const list = await searchStaff(query).catch(() => {
          this.failed.set(true);
          return [];
        });
        this.search_results.set(list);
        this.loading.set(false);
      }, 400);
      onCleanup(() => clearTimeout(timeout));
    });
  }
  retry() {
    this._retry.update((count) => count + 1);
  }
  /** Minimum length of the search string needed to initial a search */
  get min_search_length() {
    const length = this._settings.get("app.users.min_search_length");
    return typeof length === "number" && length >= 0 ? length : 3;
  }
  get show_image() {
    return this._settings.get("app.users.show_avatars");
  }
  buildGroups(users) {
    const grouped_users = Object.fromEntries(LETTERS.map((letter) => [letter, []]));
    const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
    for (const user of sorted) {
      grouped_users[nameGroup(user.name)].push(user);
    }
    return grouped_users;
  }
  static {
    this.\u0275fac = function DirectoryUserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectoryUserListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryUserListComponent, selectors: [["", "a-directory-user-list", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 7, consts: [[1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded-sm"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["role", "alert", 1, "flex", "flex-col", "items-center", "space-y-4", "p-8", "text-center"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "px-4", "py-2", "font-medium"], ["user", "", 1, "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "flex-wrap", "items-center", "overflow-hidden", "p-4", "sm:space-x-4", 3, "with-image"], ["user", "", 1, "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "flex-wrap", "items-center", "overflow-hidden", "p-4", "sm:space-x-4"], [3, "user"], [1, "ml-4", "flex", "w-1/2", "flex-1", "flex-col", "sm:ml-0"], [1, "name"], ["name", "email", 1, "text-sm", "underline", 3, "href"], [1, "mt-4", "flex", "w-full", "items-center", "space-x-2", "sm:mt-0", "sm:w-auto", "sm:flex-col", "sm:space-y-2", "sm:space-x-0"], ["btn", "", "matRipple", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "sm:flex-nones", "w-32", "flex-1", 3, "href"], [1, "text-5xl"], ["btn", "", 3, "click"], [1, "text"]], template: function DirectoryUserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "icon", 4);
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(9, DirectoryUserListComponent_Conditional_9_Template, 1, 1, "mat-spinner", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "main", 7);
        \u0275\u0275declareLet(11);
        \u0275\u0275conditionalCreate(12, DirectoryUserListComponent_Conditional_12_Template, 2, 0)(13, DirectoryUserListComponent_Conditional_13_Template, 9, 6, "div", 8)(14, DirectoryUserListComponent_Conditional_14_Template, 7, 9, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(15, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 4, "COMMON.SELECT_USER_SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 9 : -1);
        const user_list_r8 = ctx.search_results();
        \u0275\u0275advance(2);
        \u0275\u0275storeLet(ctx.grouped_results());
        \u0275\u0275advance();
        \u0275\u0275conditional(user_list_r8.length ? 12 : ctx.failed() ? 13 : !ctx.loading() ? 14 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      FooterMenuComponent,
      TopbarComponent,
      VirtualConciergeButtonComponent,
      UserAvatarComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      RouterLink,
      SafePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectoryUserListComponent, [{
    type: Component,
    args: [{ selector: "[a-directory-user-list]", template: `
        <topbar />
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <div
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <div class="flex w-full items-center justify-center p-2">
                    <mat-form-field
                        overlay
                        class="rounded-sm"
                        appearance="outline"
                    >
                        <icon class="text-xl" matPrefix>search</icon>
                        <input
                            matInput
                            [(ngModel)]="search"
                            [placeholder]="
                                'COMMON.SELECT_USER_SEARCH' | translate
                            "
                        />
                        @if (loading()) {
                            <mat-spinner
                                matSuffix
                                class="top-2"
                                [diameter]="32"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                </div>
                <main class="h-1/2 w-full flex-1 overflow-auto">
                    @let user_list = search_results();
                    @let grouped_users = grouped_results();
                    @if (user_list.length) {
                        @for (letter of letters; track letter) {
                            @if (grouped_users[letter]?.length) {
                                <div class="px-4 py-2 font-medium">
                                    {{ letter }}
                                </div>
                                @for (
                                    user of grouped_users[letter];
                                    track user
                                ) {
                                    <div
                                        user
                                        class="bg-base-100 hover:bg-base-200 mb-2 flex flex-wrap items-center overflow-hidden p-4 sm:space-x-4"
                                        [class.with-image]="show_image"
                                    >
                                        @if (show_image) {
                                            <a-user-avatar
                                                [user]="user"
                                            ></a-user-avatar>
                                        }
                                        <div
                                            class="ml-4 flex w-1/2 flex-1 flex-col sm:ml-0"
                                        >
                                            <div class="name">
                                                {{ user.name }}
                                            </div>
                                            <a
                                                class="text-sm underline"
                                                name="email"
                                                [href]="
                                                    'mailto:' + user.email
                                                        | safe: 'url'
                                                "
                                            >
                                                {{ user.email }}
                                            </a>
                                        </div>
                                        <div
                                            class="mt-4 flex w-full items-center space-x-2 sm:mt-0 sm:w-auto sm:flex-col sm:space-y-2 sm:space-x-0"
                                        >
                                            <a
                                                btn
                                                matRipple
                                                class="w-32 flex-1 sm:flex-none"
                                                [routerLink]="['/explore']"
                                                [queryParams]="{
                                                    user: user.email,
                                                }"
                                            >
                                                {{
                                                    'APP.WORKPLACE.DIRECTORY_LOCATE'
                                                        | translate
                                                }}
                                            </a>
                                            @if (user.phone) {
                                                <a
                                                    btn
                                                    matRipple
                                                    class="sm:flex-nones w-32 flex-1"
                                                    [href]="
                                                        'tel:' + user.phone
                                                            | safe: 'url'
                                                    "
                                                >
                                                    {{
                                                        'APP.WORKPLACE.DIRECTORY_CALL'
                                                            | translate
                                                    }}
                                                </a>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        }
                    } @else if (failed()) {
                        <div
                            role="alert"
                            class="flex flex-col items-center space-y-4 p-8 text-center"
                        >
                            <icon class="text-5xl">error</icon>
                            <div>{{ 'COMMON.LOAD_ERROR' | translate }}</div>
                            <button btn (click)="retry()">
                                {{ 'COMMON.RETRY' | translate }}
                            </button>
                        </div>
                    } @else if (!loading()) {
                        @let search_str = search();
                        <div class="flex flex-col items-center p-8">
                            <icon class="text-5xl">{{
                                search_str?.length >= min_search_length
                                    ? 'close'
                                    : 'arrow_upward'
                            }}</icon>
                            <div class="text">
                                {{
                                    search_str?.length >= min_search_length
                                        ? ('APP.WORKPLACE.COLLEAGUE_SEARCH_NO_MATCH'
                                          | translate: { text: search_str })
                                        : ('APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                                          | translate)
                                }}
                            </div>
                        </div>
                    }
                </main>
            </div>
            <virtual-concierge-button />
        </div>
        <footer-menu />
    `, imports: [
      CommonModule,
      IconComponent,
      FooterMenuComponent,
      TopbarComponent,
      VirtualConciergeButtonComponent,
      SafePipe,
      UserAvatarComponent,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatInputModule,
      FormsModule,
      RouterModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;e2b40681428f504e90765c9b1d0c08e56afefc9250e31ac0ea417debac9edbfd;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/directory/user-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\nmat-form-field {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=user-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryUserListComponent, { className: "DirectoryUserListComponent", filePath: "apps/workplace/src/app/directory/user-list.component.ts", lineNumber: 213 });
})();

// apps/workplace/src/app/directory/directory.routes.ts
var ROUTES = [
  {
    path: "",
    component: DirectoryUserListComponent,
    title: "Directory"
  }
];
export {
  ROUTES
};
//# debugId=b4e039f9-1aef-5d3a-ab3a-2a2484f5c800
//# sourceMappingURL=directory.routes-ZHL5WQRN.js.map
