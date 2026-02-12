import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-BNK6OWAQ.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  RouterLink,
  RouterModule,
  SafePipe,
  SettingsService,
  SpacesService,
  combineLatest,
  filter,
  inject,
  input,
  map,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7QG6NVBP.js";

// apps/workplace/src/app/control/list-item.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ space: a0 });
function ControlSpaceListItemComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1, " Find ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0))("queryParams", \u0275\u0275pureFunction1(3, _c1, ctx_r0.space().id));
  }
}
function ControlSpaceListItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "icon", 7);
    \u0275\u0275text(9, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 8)(13, "a", 9);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275text(15, " Control ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, ControlSpaceListItemComponent_Conditional_0_Conditional_16_Template, 2, 5, "a", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("with-image", ctx_r0.show_image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name || ctx_r0.space().name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.space().capacity || "0");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 7, ctx_r0.space().support_url, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.allow_locate ? 16 : -1);
  }
}
var _ControlSpaceListItemComponent = class _ControlSpaceListItemComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.space = input(void 0);
  }
  get show_image() {
    return this._settings.get("app.spaces.show_images");
  }
  get allow_locate() {
    return (this._settings.get("app.features") || []).includes("explore");
  }
  /** Display location of the space */
  get location() {
    const space = this.space();
    if (!space) {
      return "Unable to determine location";
    }
    const level = space.level;
    const bld = this._org.buildings.find((building) => building.id === level.parent_id);
    return `${bld ? (bld.display_name || bld.name) + ", " : ""}${level?.display_name || level?.name || "<No Level>"}`;
  }
};
_ControlSpaceListItemComponent.\u0275fac = function ControlSpaceListItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlSpaceListItemComponent)();
};
_ControlSpaceListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlSpaceListItemComponent, selectors: [["a-control-space-list-item"]], inputs: { space: [1, "space"] }, decls: 1, vars: 1, consts: [[1, "border-base-200", "bg-base-100", "hover:border-info", "mx-auto", "mb-2", "flex", "max-w-160", "flex-wrap", "items-center", "overflow-hidden", "rounded-sm", "border", "p-2", "pl-4", "sm:space-x-4", 3, "with-image"], [1, "border-base-200", "bg-base-100", "hover:border-info", "mx-auto", "mb-2", "flex", "max-w-160", "flex-wrap", "items-center", "overflow-hidden", "rounded-sm", "border", "p-2", "pl-4", "sm:space-x-4"], [1, "flex", "flex-1", "flex-col"], [1, "text-xl"], [1, "flex", "w-full", "items-center", "text-sm"], [1, "flex-1"], [1, "flex", "items-center", "space-x-2", "text-lg"], [1, "text-2xl"], [1, "mt-4", "flex", "w-full", "items-center", "space-x-2", "sm:mt-0", "sm:w-auto", "sm:flex-col", "sm:space-y-2", "sm:space-x-0"], ["btn", "", "matRipple", "", "control", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "href"], ["btn", "", "matRipple", "", "locate", "", 1, "inverse", "w-32", "flex-1", "sm:flex-none", 3, "routerLink", "queryParams"]], template: function ControlSpaceListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ControlSpaceListItemComponent_Conditional_0_Template, 17, 10, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.space() ? 0 : -1);
  }
}, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, IconComponent, SafePipe], encapsulation: 2 });
var ControlSpaceListItemComponent = _ControlSpaceListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlSpaceListItemComponent, [{
    type: Component,
    args: [{ selector: "a-control-space-list-item", template: `
        @if (space()) {
            <div
                class="border-base-200 bg-base-100 hover:border-info mx-auto mb-2 flex max-w-160 flex-wrap items-center overflow-hidden rounded-sm border p-2 pl-4 sm:space-x-4"
                [class.with-image]="show_image"
            >
                <div class="flex flex-1 flex-col">
                    <div class="text-xl">
                        {{ space().display_name || space().name }}
                    </div>
                    <div class="flex w-full items-center text-sm">
                        <div class="flex-1">{{ location }}</div>
                        <div class="flex items-center space-x-2 text-lg">
                            <icon class="text-2xl">account_circle</icon>
                            <div>{{ space().capacity || '0' }}</div>
                        </div>
                    </div>
                </div>
                <div
                    class="mt-4 flex w-full items-center space-x-2 sm:mt-0 sm:w-auto sm:flex-col sm:space-y-2 sm:space-x-0"
                >
                    <a
                        btn
                        matRipple
                        control
                        class="w-32 flex-1 sm:flex-none"
                        [href]="space().support_url | safe: 'url'"
                    >
                        Control
                    </a>
                    @if (allow_locate) {
                        <a
                            btn
                            matRipple
                            locate
                            class="inverse w-32 flex-1 sm:flex-none"
                            [routerLink]="['/explore']"
                            [queryParams]="{ space: space().id }"
                        >
                            Find
                        </a>
                    }
                </div>
            </div>
        }
    `, imports: [MatRippleModule, RouterModule, IconComponent, SafePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlSpaceListItemComponent, { className: "ControlSpaceListItemComponent", filePath: "apps/workplace/src/app/control/list-item.component.ts", lineNumber: 59 });
})();

// apps/workplace/src/app/control/space-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ControlSpaceListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ControlSpaceListComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-control-space-list-item", 7);
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    \u0275\u0275property("space", space_r2);
  }
}
function ControlSpaceListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ControlSpaceListComponent_Conditional_8_For_2_Template, 1, 1, "a-control-space-list-item", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const spaces_r3 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance();
    \u0275\u0275repeater(spaces_r3);
  }
}
function ControlSpaceListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 8);
    \u0275\u0275text(2, "no_meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.search.getValue() ? ' No matches for "' + ctx_r3.search.getValue() + '"' : "No controllable spaces", " ");
  }
}
var _ControlSpaceListComponent = class _ControlSpaceListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this.search = new BehaviorSubject("");
    this.space_list = combineLatest([
      this._org.active_building,
      this._spaces.all_spaces,
      this._spaces.initialised
    ]).pipe(filter(([_]) => !!_), map(([bld, list]) => list.filter((s) => !!s.support_url && s.zones.includes(bld.id))), map((spaces) => spaces.sort((a, b) => this.sortSpaces(a, b))));
    this.filtered_spaces = combineLatest([
      this.space_list,
      this.search
    ]).pipe(map(([list, s]) => {
      const search = (s || "").toLowerCase();
      if (!search)
        return list;
      return (list || []).filter((space) => {
        const bld = this._org.buildings.find((building) => building.id === space.level.parent_id);
        const space_name = (space.name || "").toLowerCase();
        const level_name = ((space.level ? space.level.name : "") || "").toLowerCase();
        const bld_name = ((bld ? bld.name : "") || "").toLowerCase();
        return space_name.indexOf(search) >= 0 || level_name && level_name.indexOf(search) >= 0 || bld_name && bld_name.indexOf(search) >= 0;
      });
    }), startWith([]));
  }
  sortSpaces(first, second) {
    const bld_a = this._org.buildings.find((building) => building.id === first.level?.parent_id);
    const space_a_name = (first.name || "").toLowerCase();
    const level_a_name = ((first.level ? first.level.name : "") || "").toLowerCase();
    const bld_a_name = (bld_a?.name || "").toLowerCase();
    const bld_b = this._org.buildings.find((building) => building.id === second.level?.parent_id);
    const space_b_name = (second.name || "").toLowerCase();
    const level_b_name = ((second.level ? second.level.name : "") || "").toLowerCase();
    const bld_b_name = (bld_b?.name || "").toLowerCase();
    return bld_a_name.localeCompare(bld_b_name) || level_a_name.localeCompare(level_b_name) || space_a_name.localeCompare(space_b_name);
  }
};
_ControlSpaceListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ControlSpaceListComponent_BaseFactory;
  return function ControlSpaceListComponent_Factory(__ngFactoryType__) {
    return (\u0275ControlSpaceListComponent_BaseFactory || (\u0275ControlSpaceListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ControlSpaceListComponent)))(__ngFactoryType__ || _ControlSpaceListComponent);
  };
})();
_ControlSpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlSpaceListComponent, selectors: [["a-control-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 6, consts: [[1, "border-base-300", "bg-base-100", "flex", "w-full", "items-center", "justify-center", "border-b", "p-2"], ["overlay", "", "appearance", "outline", 1, "h-12", "rounded-sm"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [1, "flex", "w-full", "flex-1", "flex-col", "overflow-auto", "p-4"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-8", "opacity-30"], [3, "space"], [1, "text-6xl"]], template: function ControlSpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "icon", 2);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 3);
    \u0275\u0275listener("ngModelChange", function ControlSpaceListComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ControlSpaceListComponent_Conditional_5_Template, 1, 1, "mat-spinner", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275conditionalCreate(8, ControlSpaceListComponent_Conditional_8_Template, 3, 0, "div", 5)(9, ControlSpaceListComponent_Conditional_9_Template, 5, 1, "div", 6);
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    const spaces_r5 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(7, 3, ctx.filtered_spaces));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(spaces_r5.length ? 8 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  MatFormFieldModule,
  MatFormField,
  MatPrefix,
  MatSuffix,
  MatInputModule,
  MatInput,
  IconComponent,
  ControlSpaceListItemComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=space-list.component.css.map */"] });
var ControlSpaceListComponent = _ControlSpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlSpaceListComponent, [{
    type: Component,
    args: [{ selector: "a-control-space-list", template: `
        <div
            class="border-base-300 bg-base-100 flex w-full items-center justify-center border-b p-2"
        >
            <mat-form-field
                overlay
                class="h-12 rounded-sm"
                appearance="outline"
            >
                <icon class="text-xl" matPrefix>search</icon>
                <input
                    matInput
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                    placeholder="Search..."
                />
                @if (loading) {
                    <mat-spinner
                        matSuffix
                        class="top-2"
                        [diameter]="32"
                    ></mat-spinner>
                }
            </mat-form-field>
        </div>
        @let spaces = filtered_spaces | async;
        @if (spaces.length) {
            <div class="flex w-full flex-1 flex-col overflow-auto p-4">
                @for (space of spaces; track space.id) {
                    <a-control-space-list-item
                        [space]="space"
                    ></a-control-space-list-item>
                }
            </div>
        } @else {
            <div class="flex flex-col items-center space-y-4 p-8 opacity-30">
                <icon class="text-6xl">no_meeting_room</icon>
                <p>
                    {{
                        search.getValue()
                            ? ' No matches for "' + search.getValue() + '"'
                            : 'No controllable spaces'
                    }}
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      ControlSpaceListItemComponent,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;72efec7db9e4775fcedb0dcf62af53bcc009951792b869c9087285830ca9607e;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/control/space-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\nmat-form-field {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=space-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlSpaceListComponent, { className: "ControlSpaceListComponent", filePath: "apps/workplace/src/app/control/space-list.component.ts", lineNumber: 89 });
})();

// apps/workplace/src/app/control/control.component.ts
var _c02 = ["app-control", ""];
var _ControlComponent = class _ControlComponent {
  constructor() {
    this._settings = inject(SettingsService);
  }
  ngOnInit() {
    this._settings.title = "Control";
  }
};
_ControlComponent.\u0275fac = function ControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlComponent)();
};
_ControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlComponent, selectors: [["", "app-control", ""]], attrs: _c02, decls: 5, vars: 0, consts: [[1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"]], template: function ControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
    \u0275\u0275element(3, "a-control-space-list");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "footer-menu");
  }
}, dependencies: [TopbarComponent, FooterMenuComponent, ControlSpaceListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\n/*# sourceMappingURL=control.component.css.map */"] });
var ControlComponent = _ControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlComponent, [{
    type: Component,
    args: [{ selector: "[app-control]", template: `
        <topbar />
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <a-control-space-list></a-control-space-list>
            </main>
        </div>
        <footer-menu />
    `, imports: [TopbarComponent, FooterMenuComponent, ControlSpaceListComponent], styles: ["/* angular:styles/component:css;5d6460723ad27e35d5af25e4c81c6e701df8a06f6f8a8f5e09050e089d59691a;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/control/control.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\n/*# sourceMappingURL=control.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlComponent, { className: "ControlComponent", filePath: "apps/workplace/src/app/control/control.component.ts", lineNumber: 33 });
})();

// apps/workplace/src/app/control/control.module.ts
var ROUTES = [{ path: "", component: ControlComponent }];
var _ControlModule = class _ControlModule {
};
_ControlModule.\u0275fac = function ControlModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlModule)();
};
_ControlModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ControlModule });
_ControlModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [ControlComponent, RouterModule.forChild(ROUTES)] });
var ControlModule = _ControlModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [ControlComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  ControlModule
};
//# sourceMappingURL=control.module-MG25CJZU.js.map
