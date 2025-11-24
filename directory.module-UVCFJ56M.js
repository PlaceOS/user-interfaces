import {
  AsyncHandler,
  CommonModule,
  DefaultValueAccessor,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MatFormField,
  MatInput,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSuffix,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  RouterLink,
  RouterModule,
  SafePipe,
  SettingsService,
  SharedComponentModule,
  Subject,
  TopbarComponent,
  UserAvatarComponent,
  debounceTime,
  distinctUntilChanged,
  map,
  searchStaff,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W3HSAJDS.js";
import "./chunk-4MWRP73S.js";

// apps/workplace/src/app/directory/user-details.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ user: a0 });
function DirectoryUserListItemComponent_div_0_a_user_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("user", ctx_r1.user);
  }
}
function DirectoryUserListItemComponent_div_0_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275listener("click", function DirectoryUserListItemComponent_div_0_a_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendCallEvent());
    });
    \u0275\u0275text(2, " Call ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 1, "tel:" + ctx_r1.user.phone, "url"), \u0275\u0275sanitizeUrl);
  }
}
function DirectoryUserListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, DirectoryUserListItemComponent_div_0_a_user_avatar_1_Template, 1, 1, "a-user-avatar", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 5);
    \u0275\u0275pipe(6, "safe");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
    \u0275\u0275listener("click", function DirectoryUserListItemComponent_div_0_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendLocateEvent());
    });
    \u0275\u0275text(10, " Locate ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DirectoryUserListItemComponent_div_0_a_11_Template, 3, 4, "a", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("with-image", ctx_r1.show_image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.show_image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user.name);
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(6, 9, "mailto:" + ctx_r1.user.email, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0))("queryParams", \u0275\u0275pureFunction1(13, _c1, ctx_r1.user.email));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.user.phone);
  }
}
var _DirectoryUserListItemComponent = class _DirectoryUserListItemComponent {
  get show_image() {
    return this._settings.get("app.users.show_avatars");
  }
  sendLocateEvent() {
  }
  sendCallEvent() {
  }
  constructor(_settings) {
    this._settings = _settings;
  }
};
_DirectoryUserListItemComponent.\u0275fac = function DirectoryUserListItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DirectoryUserListItemComponent)(\u0275\u0275directiveInject(SettingsService));
};
_DirectoryUserListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryUserListItemComponent, selectors: [["a-directory-user-list-item"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "flex flex-wrap items-center sm:space-x-4 bg-base-100 hover:bg-base-200 overflow-hidden p-4 mb-2", 3, "with-image", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-4", "bg-base-100", "hover:bg-base-200", "overflow-hidden", "p-4", "mb-2"], [3, "user", 4, "ngIf"], [1, "flex", "flex-col", "flex-1", "w-1/2", "ml-4", "sm:ml-0"], [1, "name"], ["name", "email", 1, "text-sm", "underline", 3, "href"], [1, "flex", "w-full", "sm:w-auto", "sm:flex-col", "items-center", "space-x-2", "sm:space-x-0", "sm:space-y-2", "mt-4", "sm:mt-0"], ["btn", "", "matRipple", "", "locate", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "click", "routerLink", "queryParams"], ["btn", "", "matRipple", "", "class", "w-32 flex-1 sm:flex-nones", "call", "", 3, "href", "click", 4, "ngIf"], [3, "user"], ["btn", "", "matRipple", "", "call", "", 1, "w-32", "flex-1", "sm:flex-nones", 3, "click", "href"]], template: function DirectoryUserListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DirectoryUserListItemComponent_div_0_Template, 12, 15, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.user);
  }
}, dependencies: [NgIf, RouterLink, UserAvatarComponent, MatRipple, SafePipe] });
var DirectoryUserListItemComponent = _DirectoryUserListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryUserListItemComponent, { className: "DirectoryUserListItemComponent", filePath: "apps/workplace/src/app/directory/user-details.component.ts", lineNumber: 55 });
})();

// apps/workplace/src/app/directory/user-list.component.ts
var _c02 = ["a-directory-user-list", ""];
function DirectoryUserListComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_a_directory_user_list_item_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-directory-user-list-item", 15);
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275property("user", user_r2);
  }
}
function DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_a_directory_user_list_item_3_Template, 1, 1, "a-directory-user-list-item", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const letter_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", letter_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.groupedUsers[letter_r3]);
  }
}
function DirectoryUserListComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const letter_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.groupedUsers[letter_r3].length);
  }
}
function DirectoryUserListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DirectoryUserListComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.letters);
  }
}
function DirectoryUserListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "app-icon", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.search_str && ctx_r3.search_str.length >= ctx_r3.min_search_length ? "close" : "arrow_upward");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.search_str && ctx_r3.search_str.length >= ctx_r3.min_search_length ? ' No matches for "' + ctx_r3.search_str + '"' : "Type above to search for users", " ");
  }
}
var LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split("");
var _DirectoryUserListComponent = class _DirectoryUserListComponent extends AsyncHandler {
  /** Minimum length of the search string needed to initial a search */
  get min_search_length() {
    const length = this._settings.get("app.users.min_search_length");
    return typeof length === "number" && length >= 0 ? length : 3;
  }
  constructor(_settings) {
    super();
    this._settings = _settings;
    this.user_list = [];
    this.groupedUsers = {};
    this.search$ = new Subject();
    this.search_results$ = this.search$.pipe(debounceTime(400), distinctUntilChanged(), switchMap((query) => {
      this.loading = true;
      const retVal = query.length >= this.min_search_length ? searchStaff(query).toPromise().catch(() => []) : Promise.resolve(this.user_list || []);
      return retVal;
    }), map((list) => {
      this.loading = false;
      return list;
    }));
  }
  ngOnInit() {
    this.subscription("search_results", this.search_results$.subscribe((list) => {
      this.user_list = list;
      this.buildGroups(this.user_list);
    }));
    this.search$.next("");
  }
  get letters() {
    return LETTERS;
  }
  buildGroups(users) {
    const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
    for (const letter of this.letters) {
      this.groupedUsers[letter] = sorted.filter((f) => f.name.startsWith(letter));
    }
  }
};
_DirectoryUserListComponent.\u0275fac = function DirectoryUserListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DirectoryUserListComponent)(\u0275\u0275directiveInject(SettingsService));
};
_DirectoryUserListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryUserListComponent, selectors: [["", "a-directory-user-list", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 14, vars: 4, consts: [["empty_state", ""], [1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"], [1, "w-full", "flex", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search for a person...", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "class", "top-2", 3, "diameter", 4, "ngIf"], [1, "flex-1", "h-1/2", "w-full"], [4, "ngIf", "ngIfElse"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "py-2", "px-4", "font-medium"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "text-5xl"], [1, "text"]], template: function DirectoryUserListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-form-field", 4)(5, "app-icon", 5);
    \u0275\u0275text(6, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search$.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DirectoryUserListComponent_mat_spinner_8_Template, 1, 1, "mat-spinner", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "main", 8);
    \u0275\u0275template(10, DirectoryUserListComponent_ng_container_10_Template, 2, 1, "ng-container", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "footer-menu");
    \u0275\u0275template(12, DirectoryUserListComponent_ng_template_12_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const empty_state_r5 = \u0275\u0275reference(13);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.groupedUsers && ctx.user_list.length)("ngIfElse", empty_state_r5);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, TopbarComponent, FooterMenuComponent, IconComponent, MatFormField, MatPrefix, MatSuffix, MatInput, MatProgressSpinner, DirectoryUserListItemComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
var DirectoryUserListComponent = _DirectoryUserListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryUserListComponent, { className: "DirectoryUserListComponent", filePath: "apps/workplace/src/app/directory/user-list.component.ts", lineNumber: 101 });
})();

// apps/workplace/src/app/directory/directory.module.ts
var ROUTES = [{ path: "", component: DirectoryUserListComponent }];
var _DirectoryModule = class _DirectoryModule {
};
_DirectoryModule.\u0275fac = function DirectoryModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DirectoryModule)();
};
_DirectoryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DirectoryModule });
_DirectoryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  RouterModule.forChild(ROUTES),
  SharedComponentModule
] });
var DirectoryModule = _DirectoryModule;
export {
  DirectoryModule
};
//# sourceMappingURL=directory.module-UVCFJ56M.js.map
