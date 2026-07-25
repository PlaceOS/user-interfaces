import {
  MapPinComponent
} from "./chunk-JI2SOAOT.js";
import {
  InteractiveMapComponent
} from "./chunk-EKF7RISY.js";
import {
  UserPipe
} from "./chunk-P455C3NH.js";
import {
  MatProgressSpinnerModule,
  UserAvatarComponent
} from "./chunk-OFJN4OYD.js";
import {
  AsyncHandler,
  AsyncPipe,
  Component,
  IconComponent,
  Input,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  OrganisationService,
  Output,
  TranslatePipe,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GGSGOQ6N.js";

// libs/components/src/lib/map-locate-modal.component.ts
var _c0 = () => ({ disable_pan: true, disable_zoom: true });
function MapLocateModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 5);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.level()?.map_id)("focus", ctx_r0.item()?.map_id)("features", ctx_r0.features())("options", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.level()?.display_name || ctx_r0.level()?.name, " ");
  }
}
var MapLocateModalComponent = class _MapLocateModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = output();
    this.item = signal(
      this._data.item,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_map = signal(
      {},
      ...ngDevMode ? [{ debugName: "style_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => this.item().level || this._org.levelWithID(this.item().zones || []),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    console.log("Date:", this._data);
    if (!this.item().level?.id) {
      this.item.update((item) => {
        delete item.level;
        return item;
      });
    }
  }
  ngOnInit() {
    this.timeout("init", () => {
      this.processFeature();
      this.processStyles();
    }, 1e3);
  }
  processStyles() {
    const styles = {};
    if (this.item()?.map_id) {
      styles[`#zones`] = { display: "none" };
      styles[`#Zones`] = { display: "none" };
    }
    this.style_map.set(styles);
  }
  /** Point on map to focus on */
  processFeature() {
    const item = this.item();
    if (!item)
      return null;
    const focus = {
      location: item.map_id,
      track_id: `focus_item`,
      content: MapPinComponent,
      data: {
        name: item.name
      },
      z_index: 99,
      zoom: 100
    };
    this.features.set([focus]);
  }
  static {
    this.\u0275fac = function MapLocateModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapLocateModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapLocateModalComponent, selectors: [["map-locate-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 2, consts: [[1, "flex", "h-screen", "w-screen", "flex-col"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "default", "", "matRipple", "", "mat-dialog-close", ""], ["body", "", 1, "border-base-300", "bg-base-200", "relative", "mx-2", "mb-2", "w-[calc(100%-1rem)]", "flex-1", "overflow-hidden", "rounded-xl", "border"], [1, "pointer-events-none", "absolute", "inset-0", "block", "h-full", "w-full", 3, "src", "focus", "features", "options"], [1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "rounded-3xl", "border", "px-4", "py-2", "shadow-lg"]], template: function MapLocateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275conditionalCreate(8, MapLocateModalComponent_Conditional_8_Template, 3, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" Location of ", ctx.item().display_name || ctx.item().name, " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.level() ? 8 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      IconComponent,
      InteractiveMapComponent
    ], styles: ["\n[body][_ngcontent-%COMP%] {\n  min-width: 80vw !important;\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=map-locate-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapLocateModalComponent, [{
    type: Component,
    args: [{ selector: "map-locate-modal", template: `
        <div class="flex h-screen w-screen flex-col">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    Location of {{ item().display_name || item().name }}
                </h2>
                <button icon default matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <div
                body
                class="border-base-300 bg-base-200 relative mx-2 mb-2 w-[calc(100%-1rem)] flex-1 overflow-hidden rounded-xl border"
            >
                @if (level()) {
                    <interactive-map
                        class="pointer-events-none absolute inset-0 block h-full w-full"
                        [src]="level()?.map_id"
                        [focus]="item()?.map_id"
                        [features]="features()"
                        [options]="{
                            disable_pan: true,
                            disable_zoom: true,
                        }"
                    >
                    </interactive-map>
                    <div
                        class="border-base-300 bg-base-100 absolute top-2 right-2 rounded-3xl border px-4 py-2 shadow-lg"
                    >
                        {{ level()?.display_name || level()?.name }}
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      IconComponent,
      InteractiveMapComponent
    ], styles: ["/* angular:styles/component:css;2baa1fda6ea3b96c7a4270190aaa6f907bbb8cb2cac1deb4c0fa4faa4357c97c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-locate-modal.component.ts */\n[body] {\n  min-width: 80vw !important;\n}\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=map-locate-modal.component.css.map */\n"] }]
  }], () => [], { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapLocateModalComponent, { className: "MapLocateModalComponent", filePath: "libs/components/src/lib/map-locate-modal.component.ts", lineNumber: 91 });
})();

// libs/events/src/lib/attendee-list.component.ts
var _c02 = (a0) => ({ count: a0 });
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
function AttendeeListComponent_For_9_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
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
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275element(4, "a-user-avatar", 8);
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, AttendeeListComponent_For_9_Conditional_0_Conditional_10_Template, 3, 3, "div", 12);
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275element(12, "div", 14);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const usr_r4 = ctx_r1.host() === user_r3.email ? \u0275\u0275pipeBind1(3, 11, \u0275\u0275pipeBind1(2, 9, ctx_r1.host())) || user_r3 : user_r3;
    \u0275\u0275advance(4);
    \u0275\u0275property("user", usr_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(usr_r4?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", usr_r4?.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host() === user_r3.email ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", user_r3.checked_in)("bg-pending", !user_r3.checked_in);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 13, user_r3.checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECKED_IN_NOT"));
  }
}
function AttendeeListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AttendeeListComponent_For_9_Conditional_0_Template, 14, 15, "div", 7);
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!user_r3.resource && (ctx_r1.host() !== user_r3.email || ctx_r1.show_host()) ? 0 : -1);
  }
}
var AttendeeListComponent = class _AttendeeListComponent {
  constructor() {
    this.host = input(
      "",
      ...ngDevMode ? [{ debugName: "host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_host = input(
      true,
      ...ngDevMode ? [{ debugName: "show_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.list = input(
      [],
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.final_list = computed(
      () => this.show_host() ? this.list() : this.list().filter((user) => user.email !== this.host()),
      ...ngDevMode ? [{ debugName: "final_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_close = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_title = input(
      "",
      ...ngDevMode ? [{ debugName: "custom_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
  }
  static {
    this.\u0275fac = function AttendeeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttendeeListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendeeListComponent, selectors: [["attendee-list"]], inputs: { host: [1, "host"], show_host: [1, "show_host"], list: [1, "list"], hide_close: [1, "hide_close"], custom_title: [1, "custom_title"] }, outputs: { close: "close" }, decls: 10, vars: 9, consts: [[1, "bg-base-100", "flex", "h-full", "w-full", "flex-col", "overflow-hidden"], [1, "border-base-200", "flex", "min-h-12", "items-center", "border-b", "p-2"], ["close", "", "icon", "", "matRipple", ""], [1, "flex-1", "text-center", "font-medium"], [1, "w-12"], [1, "w-full", "flex-1", "overflow-auto"], ["close", "", "icon", "", "matRipple", "", 3, "click"], ["attendee", "", 1, "even:bg-base-200/40", "hover:bg-base-200", "flex", "items-center", "space-x-2", "p-2"], [3, "user"], [1, "w-1/2", "flex-1"], [1, "truncate"], [1, "text-xs", "opacity-60"], [1, "bg-info-light", "rounded", "px-2", "py-1", "font-mono", "text-xs", "shadow"], [1, "p-2"], [1, "h-3", "w-3", "rounded-full", 3, "matTooltip"]], template: function AttendeeListComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1(" ", ctx.custom_title() ? ctx.custom_title() : \u0275\u0275pipeBind3(5, 3, "CALENDAR_EVENT.ATTENDEES_COUNT", \u0275\u0275pureFunction1(7, _c02, ctx.final_list().length), ctx.final_list().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_close() ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.final_list());
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe,
      AsyncPipe,
      UserPipe
    ], encapsulation: 2 });
  }
};
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
                            class="even:bg-base-200/40 hover:bg-base-200 flex items-center space-x-2 p-2"
                        >
                            @let usr =
                                host() === user.email
                                    ? (host() | user | async) || user
                                    : user;
                            <a-user-avatar [user]="usr"></a-user-avatar>
                            <div class="w-1/2 flex-1">
                                <div class="truncate">{{ usr?.name }}</div>
                                <div class="text-xs opacity-60">
                                    {{ usr?.email }}
                                </div>
                            </div>

                            @if (host() === user.email) {
                                <div
                                    class="bg-info-light rounded px-2 py-1 font-mono text-xs shadow"
                                >
                                    {{ 'FORM.HOST' | translate }}
                                </div>
                            }
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
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      UserAvatarComponent,
      MatTooltipModule,
      AsyncPipe,
      UserPipe
    ] }]
  }], null, { host: [{ type: Input, args: [{ isSignal: true, alias: "host", required: false }] }], show_host: [{ type: Input, args: [{ isSignal: true, alias: "show_host", required: false }] }], list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], hide_close: [{ type: Input, args: [{ isSignal: true, alias: "hide_close", required: false }] }], custom_title: [{ type: Input, args: [{ isSignal: true, alias: "custom_title", required: false }] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendeeListComponent, { className: "AttendeeListComponent", filePath: "libs/events/src/lib/attendee-list.component.ts", lineNumber: 96 });
})();

export {
  MapLocateModalComponent,
  AttendeeListComponent
};
//# sourceMappingURL=chunk-5PMKOBVV.js.map
