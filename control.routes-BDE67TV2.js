import {
  VirtualConciergeButtonComponent
} from "./chunk-LUIPEHT2.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-IY4LPDTW.js";
import "./chunk-UODLNYTJ.js";
import {
  SpacesService
} from "./chunk-2GRBD76Z.js";
import "./chunk-H2DZYM74.js";
import "./chunk-HHH2GUUY.js";
import "./chunk-MZN7WG5R.js";
import "./chunk-6GIBONXV.js";
import "./chunk-TC3NM2KE.js";
import "./chunk-HEWP2W5O.js";
import "./chunk-D3VYGJ6G.js";
import "./chunk-RVKWVUYC.js";
import "./chunk-U66A4PGJ.js";
import "./chunk-I3OEOK2P.js";
import "./chunk-56C27J3X.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IVWYWRG7.js";
import "./chunk-YEF7L372.js";
import "./chunk-2QAVTKHL.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatSuffix
} from "./chunk-GBEZ2XD5.js";
import "./chunk-N4IXGM4A.js";
import "./chunk-DVFRHLZI.js";
import "./chunk-I5IZZO3Z.js";
import "./chunk-AFTIF56Q.js";
import "./chunk-5XMRXOYP.js";
import "./chunk-CRZDCPNP.js";
import "./chunk-7VF5TD5Y.js";
import {
  TranslatePipe
} from "./chunk-VZSWYXPT.js";
import "./chunk-IB6WR7JO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JZU6NIMO.js";
import {
  OrganisationService,
  SettingsService
} from "./chunk-KTADYPHH.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-3ZDLFGP6.js";
import {
  AsyncHandler
} from "./chunk-2FYBYRLM.js";
import {
  i18n
} from "./chunk-LSVIIU5S.js";
import "./chunk-3E4LH6FR.js";
import "./chunk-CL7UDZVD.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FFDIHN6G.js";
import "./chunk-CENZX4JC.js";
import "./chunk-WWAEQFU7.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZTX66HDZ.js";
import {
  CommonModule,
  Component,
  Input,
  computed,
  inject,
  input,
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
  ɵɵgetInheritedFactory,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6OEACKVR.js";
import "./chunk-653SOEEV.js";

// apps/workplace/src/app/control/list-item.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ space: a0 });
function ControlSpaceListItemComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0))("queryParams", \u0275\u0275pureFunction1(6, _c1, ctx_r0.space().id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.WORKPLACE.CONTROL_LOCATE"), " ");
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
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, ControlSpaceListItemComponent_Conditional_0_Conditional_17_Template, 3, 8, "a", 10);
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
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 8, ctx_r0.space().support_url, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "APP.WORKPLACE.CONTROL_OPEN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_locate ? 17 : -1);
  }
}
var ControlSpaceListItemComponent = class _ControlSpaceListItemComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.space = input(
      void 0,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
      return i18n("APP.WORKPLACE.CONTROL_LOCATION_UNKNOWN");
    }
    const level = space.level;
    const bld = this._org.buildings.find((building) => building.id === level?.parent_id);
    return `${bld ? (bld.display_name || bld.name) + ", " : ""}${level?.display_name || level?.name || i18n("COMMON.LEVEL_EMPTY")}`;
  }
  static {
    this.\u0275fac = function ControlSpaceListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ControlSpaceListItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlSpaceListItemComponent, selectors: [["a-control-space-list-item"]], inputs: { space: [1, "space"] }, decls: 1, vars: 1, consts: [[1, "border-base-200", "bg-base-100", "hover:border-info", "mx-auto", "mb-2", "flex", "max-w-160", "flex-wrap", "items-center", "overflow-hidden", "rounded-sm", "border", "p-2", "pl-4", "sm:space-x-4", 3, "with-image"], [1, "border-base-200", "bg-base-100", "hover:border-info", "mx-auto", "mb-2", "flex", "max-w-160", "flex-wrap", "items-center", "overflow-hidden", "rounded-sm", "border", "p-2", "pl-4", "sm:space-x-4"], [1, "flex", "flex-1", "flex-col"], [1, "text-xl"], [1, "flex", "w-full", "items-center", "text-sm"], [1, "flex-1"], [1, "flex", "items-center", "space-x-2", "text-lg"], [1, "text-2xl"], [1, "mt-4", "flex", "w-full", "items-center", "space-x-2", "sm:mt-0", "sm:w-auto", "sm:flex-col", "sm:space-y-2", "sm:space-x-0"], ["btn", "", "matRipple", "", "control", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "href"], ["btn", "", "matRipple", "", "locate", "", 1, "inverse", "w-32", "flex-1", "sm:flex-none", 3, "routerLink", "queryParams"]], template: function ControlSpaceListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ControlSpaceListItemComponent_Conditional_0_Template, 18, 13, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.space() ? 0 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      IconComponent,
      SafePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
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
                        {{ 'APP.WORKPLACE.CONTROL_OPEN' | translate }}
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
                            {{ 'APP.WORKPLACE.CONTROL_LOCATE' | translate }}
                        </a>
                    }
                </div>
            </div>
        }
    `, imports: [
      MatRippleModule,
      RouterModule,
      IconComponent,
      SafePipe,
      TranslatePipe
    ] }]
  }], null, { space: [{ type: Input, args: [{ isSignal: true, alias: "space", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlSpaceListItemComponent, { className: "ControlSpaceListItemComponent", filePath: "apps/workplace/src/app/control/list-item.component.ts", lineNumber: 70 });
})();

// apps/workplace/src/app/control/space-list.component.ts
var _c02 = (a0) => ({ search: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function ControlSpaceListComponent_Conditional_6_Template(rf, ctx) {
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
    const spaces_r3 = \u0275\u0275readContextLet(7);
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
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.search() ? \u0275\u0275pipeBind2(5, 1, "APP.WORKPLACE.CONTROL_SEARCH_EMPTY", \u0275\u0275pureFunction1(6, _c02, ctx_r3.search())) : \u0275\u0275pipeBind1(6, 4, "APP.WORKPLACE.CONTROL_EMPTY"), " ");
  }
}
var ControlSpaceListComponent = class _ControlSpaceListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_list = computed(
      () => {
        const bld = this._org.active_building();
        if (!bld)
          return [];
        const all_spaces = this._spaces.all_spaces;
        const list = typeof all_spaces === "function" ? all_spaces() : all_spaces?.getValue?.() || [];
        return list.filter((s) => !!s.support_url && s.zones.includes(bld.id)).sort((a, b) => this.sortSpaces(a, b));
      },
      ...ngDevMode ? [{ debugName: "space_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_spaces = computed(
      () => {
        const list = this.space_list();
        const search = (this.search() || "").toLowerCase();
        if (!search)
          return list;
        return list.filter((space) => {
          const bld = this._org.buildings.find((building) => building.id === space.level?.parent_id);
          const space_name = (space.name || "").toLowerCase();
          const level_name = ((space.level ? space.level.name : "") || "").toLowerCase();
          const bld_name = ((bld ? bld.name : "") || "").toLowerCase();
          return space_name.indexOf(search) >= 0 || level_name && level_name.indexOf(search) >= 0 || bld_name && bld_name.indexOf(search) >= 0;
        });
      },
      ...ngDevMode ? [{ debugName: "filtered_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => {
        const initialised = this._spaces.initialised;
        return typeof initialised === "function" ? !initialised() : !initialised?.getValue?.();
      },
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ControlSpaceListComponent_BaseFactory;
      return function ControlSpaceListComponent_Factory(__ngFactoryType__) {
        return (\u0275ControlSpaceListComponent_BaseFactory || (\u0275ControlSpaceListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ControlSpaceListComponent)))(__ngFactoryType__ || _ControlSpaceListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlSpaceListComponent, selectors: [["a-control-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 7, consts: [[1, "border-base-300", "bg-base-100", "flex", "w-full", "items-center", "justify-center", "border-b", "p-2"], ["overlay", "", "appearance", "outline", 1, "h-12", "rounded-sm"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [1, "flex", "w-full", "flex-1", "flex-col", "overflow-auto", "p-4"], [1, "flex", "flex-col", "items-center", "space-y-4", "p-8", "opacity-30"], [3, "space"], [1, "text-6xl"]], template: function ControlSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "icon", 2);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function ControlSpaceListComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(6, ControlSpaceListComponent_Conditional_6_Template, 1, 1, "mat-spinner", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275declareLet(7);
        \u0275\u0275conditionalCreate(8, ControlSpaceListComponent_Conditional_8_Template, 3, 0, "div", 5)(9, ControlSpaceListComponent_Conditional_9_Template, 7, 8, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 4, "COMMON.SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 6 : -1);
        \u0275\u0275advance();
        const spaces_r5 = \u0275\u0275storeLet(ctx.filtered_spaces());
        \u0275\u0275advance();
        \u0275\u0275conditional(spaces_r5.length ? 8 : !ctx.loading() ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
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
      MatProgressSpinner,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=space-list.component.css.map */"] });
  }
};
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
                    [(ngModel)]="search"
                    [placeholder]="'COMMON.SEARCH' | translate"
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
        @let spaces = filtered_spaces();
        @if (spaces.length) {
            <div class="flex w-full flex-1 flex-col overflow-auto p-4">
                @for (space of spaces; track space.id) {
                    <a-control-space-list-item
                        [space]="space"
                    ></a-control-space-list-item>
                }
            </div>
        } @else if (!loading()) {
            <div class="flex flex-col items-center space-y-4 p-8 opacity-30">
                <icon class="text-6xl">no_meeting_room</icon>
                <p>
                    {{
                        search()
                            ? ('APP.WORKPLACE.CONTROL_SEARCH_EMPTY'
                              | translate: { search: search() })
                            : ('APP.WORKPLACE.CONTROL_EMPTY' | translate)
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
      MatProgressSpinnerModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;72efec7db9e4775fcedb0dcf62af53bcc009951792b869c9087285830ca9607e;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/control/space-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\nmat-form-field {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=space-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlSpaceListComponent, { className: "ControlSpaceListComponent", filePath: "apps/workplace/src/app/control/space-list.component.ts", lineNumber: 88 });
})();

// apps/workplace/src/app/control/control.component.ts
var ControlComponent = class _ControlComponent {
  constructor() {
    this._settings = inject(SettingsService);
  }
  ngOnInit() {
    this._settings.title = i18n("APP.WORKPLACE.MENU_CONTROL");
  }
  static {
    this.\u0275fac = function ControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ControlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlComponent, selectors: [["", "app-control", ""]], decls: 6, vars: 0, consts: [[1, "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"]], template: function ControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
        \u0275\u0275element(3, "a-control-space-list");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "footer-menu");
      }
    }, dependencies: [
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      ControlSpaceListComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\n/*# sourceMappingURL=control.component.css.map */"] });
  }
};
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
            <virtual-concierge-button />
        </div>
        <footer-menu />
    `, imports: [
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      ControlSpaceListComponent
    ], styles: ["/* angular:styles/component:css;5d6460723ad27e35d5af25e4c81c6e701df8a06f6f8a8f5e09050e089d59691a;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/control/control.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\n/*# sourceMappingURL=control.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlComponent, { className: "ControlComponent", filePath: "apps/workplace/src/app/control/control.component.ts", lineNumber: 40 });
})();

// apps/workplace/src/app/control/control.routes.ts
var ROUTES = [
  { path: "", component: ControlComponent, title: "Control" }
];
export {
  ROUTES
};
//# debugId=845ccd40-739b-54b1-be87-55af31916cfd
//# sourceMappingURL=control.routes-BDE67TV2.js.map
