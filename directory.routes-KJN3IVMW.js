import {
  VirtualConciergeButtonComponent
} from "./chunk-AWCFHJI3.js";
import "./chunk-FLIRSEWF.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-H2MFORLC.js";
import "./chunk-2OCOH6E4.js";
import "./chunk-7JLKZE3A.js";
import "./chunk-MNTSMAJL.js";
import "./chunk-ZBNSXOLK.js";
import "./chunk-3FDA4MLY.js";
import "./chunk-K54GFSEN.js";
import "./chunk-ZDW7RGW4.js";
import "./chunk-XU5LGBIF.js";
import "./chunk-O3QKWN4Q.js";
import "./chunk-AKUQCTIS.js";
import {
  UserAvatarComponent
} from "./chunk-WHO5X6TZ.js";
import {
  searchStaff
} from "./chunk-2XXM7YCK.js";
import {
  AsyncHandler,
  IconComponent,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix,
  SafePipe,
  SettingsService
} from "./chunk-KMSTPJH6.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RouterLink,
  RouterModule,
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
  ɵɵnextContext,
  ɵɵpipe,
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
} from "./chunk-6ZLDAW6F.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/directory/user-list.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ user: a0 });
function DirectoryUserListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 12);
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("user", user_r2);
  }
}
function DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275text(2, " Call ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 1, "tel:" + user_r2.phone, "url"), \u0275\u0275sanitizeUrl);
  }
}
function DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_For_3_Conditional_1_Template, 1, 1, "a-user-avatar", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275pipe(6, "safe");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16)(9, "a", 17);
    \u0275\u0275text(10, " Locate ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_For_3_Conditional_11_Template, 3, 4, "a", 18);
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
    \u0275\u0275property("href", \u0275\u0275pipeBind2(6, 9, "mailto:" + user_r2.email, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0))("queryParams", \u0275\u0275pureFunction1(13, _c1, user_r2.email));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r2.phone ? 11 : -1);
  }
}
function DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_For_3_Template, 12, 15, "div", 10, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const letter_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const grouped_users_r5 = \u0275\u0275readContextLet(10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", letter_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(grouped_users_r5[letter_r4]);
  }
}
function DirectoryUserListComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DirectoryUserListComponent_Conditional_11_For_1_Conditional_0_Template, 4, 1);
  }
  if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const grouped_users_r5 = \u0275\u0275readContextLet(10);
    \u0275\u0275conditional(grouped_users_r5[letter_r4]?.length ? 0 : -1);
  }
}
function DirectoryUserListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DirectoryUserListComponent_Conditional_11_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.letters);
  }
}
function DirectoryUserListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const search_str_r6 = ctx_r2.search();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(search_str_r6?.length >= ctx_r2.min_search_length ? "close" : "arrow_upward");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", search_str_r6?.length >= ctx_r2.min_search_length ? ' No matches for "' + search_str_r6 + '"' : "Type above to search for users", " ");
  }
}
var LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split("");
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
      const timeout = setTimeout(async () => {
        if (query.length < this.min_search_length) {
          this.search_results.set([]);
          this.loading.set(false);
          return;
        }
        this.loading.set(true);
        const list = await searchStaff(query).catch(() => []);
        this.search_results.set(list);
        this.loading.set(false);
      }, 400);
      onCleanup(() => clearTimeout(timeout));
    });
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
    const grouped_users = {};
    const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
    for (const letter of this.letters) {
      grouped_users[letter] = sorted.filter((f) => f.name.startsWith(letter));
    }
    return grouped_users;
  }
  static {
    this.\u0275fac = function DirectoryUserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectoryUserListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryUserListComponent, selectors: [["", "a-directory-user-list", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 15, vars: 4, consts: [[1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"], [1, "flex", "w-full", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded-sm"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search for a person...", 3, "ngModelChange", "ngModel"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [1, "h-1/2", "w-full", "flex-1"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "px-4", "py-2", "font-medium"], ["user", "", 1, "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "flex-wrap", "items-center", "overflow-hidden", "p-4", "sm:space-x-4", 3, "with-image"], ["user", "", 1, "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "flex-wrap", "items-center", "overflow-hidden", "p-4", "sm:space-x-4"], [3, "user"], [1, "ml-4", "flex", "w-1/2", "flex-1", "flex-col", "sm:ml-0"], [1, "name"], ["name", "email", 1, "text-sm", "underline", 3, "href"], [1, "mt-4", "flex", "w-full", "items-center", "space-x-2", "sm:mt-0", "sm:w-auto", "sm:flex-col", "sm:space-y-2", "sm:space-x-0"], ["btn", "", "matRipple", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "sm:flex-nones", "w-32", "flex-1", 3, "href"], [1, "text-5xl"], [1, "text"]], template: function DirectoryUserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "icon", 4);
        \u0275\u0275text(6, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(8, DirectoryUserListComponent_Conditional_8_Template, 1, 1, "mat-spinner", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "main", 7);
        \u0275\u0275declareLet(10);
        \u0275\u0275conditionalCreate(11, DirectoryUserListComponent_Conditional_11_Template, 2, 0)(12, DirectoryUserListComponent_Conditional_12_Template, 5, 2, "div", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 8 : -1);
        const user_list_r7 = ctx.search_results();
        \u0275\u0275advance(2);
        \u0275\u0275storeLet(ctx.grouped_results());
        \u0275\u0275advance();
        \u0275\u0275conditional(user_list_r7.length ? 11 : 12);
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
      SafePipe
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
                            placeholder="Search for a person..."
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
                <main class="h-1/2 w-full flex-1">
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
                                                Locate
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
                                                    Call
                                                </a>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        }
                    } @else {
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
                                        ? ' No matches for "' + search_str + '"'
                                        : 'Type above to search for users'
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
      RouterModule
    ], styles: ["/* angular:styles/component:css;e2b40681428f504e90765c9b1d0c08e56afefc9250e31ac0ea417debac9edbfd;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/directory/user-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\nmat-form-field {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=user-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryUserListComponent, { className: "DirectoryUserListComponent", filePath: "apps/workplace/src/app/directory/user-list.component.ts", lineNumber: 177 });
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
//# sourceMappingURL=directory.routes-KJN3IVMW.js.map
