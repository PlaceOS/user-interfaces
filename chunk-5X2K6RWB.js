import {
  MapPinComponent
} from "./chunk-DSZKP52E.js";
import {
  InteractiveMapComponent
} from "./chunk-GHBXTGZR.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-W4AN7G44.js";
import {
  SpacePipe,
  UserPipe,
  addEventGuest,
  checkinEventGuest,
  removeEventGuest
} from "./chunk-JLEHAM3Q.js";
import {
  AuthenticatedImageDirective,
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-JCGQECHU.js";
import {
  AsyncHandler,
  Building,
  BuildingLevel,
  CalendarEvent,
  Clipboard,
  GuestUser,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  OrganisationService,
  SanitizePipe,
  Space,
  currentUser,
  settingSignal
} from "./chunk-PUG6UMFT.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  Input,
  MatRipple,
  MatRippleModule,
  Output,
  TranslatePipe,
  computed,
  inject,
  input,
  model,
  notifyInfo,
  output,
  setClassMetadata,
  signal,
  unique,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-CUTJ2QPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/map-locate-modal.component.ts
var _c0 = () => ({ disable_pan: true, disable_zoom: true });
function MapLocateModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "interactive-map", 8);
    \u0275\u0275element(2, "mat-spinner", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.level().map_id)("focus", ctx_r0.item().map_id)("features", ctx_r0.features())("options", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.level().display_name || ctx_r0.level().name, " ");
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
      [],
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapLocateModalComponent, selectors: [["map-locate-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 2, consts: [[1, "h-[calc(100vh-4rem)]", "w-screen", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "space-x-2", "rounded", "border-none", "p-2"], [1, "text-2xl"], [1, "text-xl", "font-medium"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "px-2", "pb-2"], ["body", "", 1, "border-base-300", "relative", "h-[65vh]", "w-full", "overflow-hidden", "rounded-lg", "border", "sm:max-h-[65vh]"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["diameter", "64"], [1, "border-base-300", "bg-base-200", "absolute", "top-2", "right-2", "rounded-xl", "border", "px-4", "py-2", "font-medium"]], template: function MapLocateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "icon", 2);
        \u0275\u0275text(3, "place");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementStart(7, "button", 5)(8, "icon");
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275conditionalCreate(11, MapLocateModalComponent_Conditional_11_Template, 5, 6, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.item().display_name || ctx.item().name, " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.level() ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      InteractiveMapComponent
    ], styles: ["\n[body][_ngcontent-%COMP%] {\n  min-width: 80vw !important;\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=map-locate-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapLocateModalComponent, [{
    type: Component,
    args: [{ selector: "map-locate-modal", template: `
        <div class="h-[calc(100vh-4rem)] w-screen sm:h-auto sm:w-auto">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center space-x-2 rounded border-none p-2"
            >
                <icon class="text-2xl">place</icon>
                <h2 class="text-xl font-medium">
                    {{ item().display_name || item().name }}
                </h2>
                <div class="flex-1"></div>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <div class="px-2 pb-2">
                @if (level()) {
                    <div
                        body
                        class="border-base-300 relative h-[65vh] w-full overflow-hidden rounded-lg border sm:max-h-[65vh]"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level().map_id"
                            [focus]="item().map_id"
                            [features]="features()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        >
                            <mat-spinner diameter="64"></mat-spinner
                        ></interactive-map>
                        <div
                            class="border-base-300 bg-base-200 absolute top-2 right-2 rounded-xl border px-4 py-2 font-medium"
                        >
                            {{ level().display_name || level().name }}
                        </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapLocateModalComponent, { className: "MapLocateModalComponent", filePath: "libs/components/src/lib/map-locate-modal.component.ts", lineNumber: 96 });
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

// libs/events/src/lib/group-event-details-modal.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c1 = (a0, a1) => ({ going: a0, interested: a1 });
function GroupEventDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.event().extension_data?.images[0]);
  }
}
function GroupEventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 34);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
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
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "icon", 37);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
}
function GroupEventDetailsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "icon");
    \u0275\u0275text(8, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.is_interested())("text-base-content", !ctx_r0.is_interested())("opacity-30", !ctx_r0.is_interested())("bg-success", ctx_r0.is_interested())("text-success-content", ctx_r0.is_interested())("opacity-100", ctx_r0.is_interested());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 26, ctx_r0.is_interested() ? "CALENDAR_EVENT.GROUP_INTERESTED" : "CALENDAR_EVENT.GROUP_NOT_INTERESTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r0.is_going())("text-base-content", !ctx_r0.is_going())("opacity-30", !ctx_r0.is_going())("bg-success", ctx_r0.is_going())("text-success-content", ctx_r0.is_going())("opacity-100", ctx_r0.is_going());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 28, ctx_r0.is_going() ? "CALENDAR_EVENT.GROUP_GOING" : "CALENDAR_EVENT.GROUP_NOT_GOING"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.event(), false));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "icon", 40);
    \u0275\u0275text(3, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.GROUP_DELETE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.level().map_id)("features", ctx_r0.features())("styles", ctx_r0.styles());
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.building().display_name || ctx_r0.building().name, ", ", ctx_r0.level().display_name || ctx_r0.level().name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_LOCATION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("underline", ctx_r0.event().meeting_url);
    \u0275\u0275property("href", ctx_r0.event().meeting_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r0.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 41)(2, "button", 42);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_101_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_101_Conditional_3_Template, 1, 3, "interactive-map", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275conditionalCreate(5, GroupEventDetailsModalComponent_Conditional_101_Conditional_5_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(6, GroupEventDetailsModalComponent_Conditional_101_Conditional_6_Template, 3, 3, "div", 28);
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275conditionalCreate(8, GroupEventDetailsModalComponent_Conditional_101_Conditional_8_Template, 2, 2, "span");
    \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_101_Conditional_9_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, GroupEventDetailsModalComponent_Conditional_101_Conditional_10_Template, 3, 6, "a", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.showing_map() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.is_onsite() && ctx_r0.has_space() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_onsite() && !ctx_r0.has_space() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.building() && ctx_r0.level() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.building() || !ctx_r0.level() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_online() ? 10 : -1);
  }
}
function GroupEventDetailsModalComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 48);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_102_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_attendees.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 49)(3, "attendee-list", 50);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_102_Template_attendee_list_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("show_host", false)("list", ctx_r0.event().attendees)("host", ctx_r0.event().host)("show_host", false);
  }
}
var GroupEventDetailsModalComponent = class _GroupEventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
    this._dialog_ref = inject(MatDialogRef, { optional: true });
    this.edit = this._data?.edit_fn;
    this.space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = model(
      this._data?.event,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_limited = signal(
      !this._data,
      ...ngDevMode ? [{ debugName: "is_limited" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.concierge = signal(
      this._data?.concierge,
      ...ngDevMode ? [{ debugName: "concierge" }] : (
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
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = signal(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locate = signal(
      "",
      ...ngDevMode ? [{ debugName: "locate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showing_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "showing_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_attendees = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = signal(
      {},
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_description = signal(
      "",
      ...ngDevMode ? [{ debugName: "raw_description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.calendar_space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "calendar_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.featured = computed(
      () => this.event().featured || this.event().extension_data?.featured,
      ...ngDevMode ? [{ debugName: "featured" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.space().id,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_onsite = computed(
      () => this.event().extension_data.attendance_type !== "ONLINE",
      ...ngDevMode ? [{ debugName: "is_onsite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_online = computed(
      () => !this.is_onsite() || this.event().extension_data.attendance_type === "ANY",
      ...ngDevMode ? [{ debugName: "is_online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.body = computed(
      () => {
        if (this.is_online())
          return this.event().body;
        let body = this.event().body;
        const remove_blocks = [
          `<div style="margin-bottom:24px; overflow:hidden; white-space:nowrap">________________________________________________________________________________</div>`,
          `<p>________________________________________________________________________________</p>`
        ];
        for (const block of remove_blocks) {
          const first = body.indexOf(block);
          const last = body.lastIndexOf(block);
          body = body.substring(0, first) + body.substring(last);
        }
        for (const block of remove_blocks) {
          body = body.replace(block, "");
        }
        return body;
      },
      ...ngDevMode ? [{ debugName: "body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendance = computed(
      () => this.event().attendees?.filter((_) => _.checked_in)?.length || 0,
      ...ngDevMode ? [{ debugName: "attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendees = computed(
      () => this.event().attendees?.filter((user) => user.email !== this.group_event_calendar())?.length || 0,
      ...ngDevMode ? [{ debugName: "attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guest_details = computed(
      () => {
        const user = currentUser();
        return this.event().attendees?.find((_) => _.email === user.email);
      },
      ...ngDevMode ? [{ debugName: "guest_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_interested = computed(
      () => !!this.guest_details(),
      ...ngDevMode ? [{ debugName: "is_interested" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_going = computed(
      () => this.guest_details()?.checked_in,
      ...ngDevMode ? [{ debugName: "is_going" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_id = computed(
      () => this.space().id,
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.public_event_link = computed(
      () => {
        const system_id = this.calendar_space().id;
        const event_id = this.event()?.id;
        if (!system_id || !event_id)
          return "";
        const path = `${this.public_url_path() || "/public"}`.replace(/\/$/, "");
        return `${window.location.origin}${path}/#/event/${encodeURIComponent(system_id)}/${encodeURIComponent(event_id)}`;
      },
      ...ngDevMode ? [{ debugName: "public_event_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_event_calendar = settingSignal("group_events_calendar", "");
    this.public_url_path = settingSignal("public_url_path", "/public");
    this._use_24_hour = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(event, remove_series) {
    if (event?.state === "done")
      return;
    this._data?.remove_fn(event, remove_series);
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar());
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.calendar_space.set(await space_pipe.transform(this.group_event_calendar()));
    const map_id = this.event().extension_data?.map_id;
    const id = this.space()?.map_id || map_id;
    if (id) {
      this.styles.set({ [`#${id}`]: { fill: "green" } });
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
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: { item: this.space }
    });
    ref.afterClosed().subscribe(() => this.showing_map.set(false));
  }
  async toggleInterest() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (this.is_interested() && user) {
      await removeEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: (event.attendees || []).filter((_) => _.email !== user.email)
      })));
    } else {
      user = await addEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: unique([...event.attendees || [], user], "email")
      })));
    }
  }
  copyPublicEventLink() {
    const link = this.public_event_link();
    if (!link)
      return;
    if (this._clipboard.copy(link)) {
      notifyInfo("Copied public event link to clipboard.");
    }
  }
  async toggleAttendance() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (!user) {
      user = await addEventGuest(this.event().id, _user, {
        system_id: this.event().system?.id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: unique([...event.attendees || [], user], "email")
      })));
    }
    user = __spreadValues(__spreadValues({}, currentUser()), user || {});
    if (!user.email)
      return;
    await checkinEventGuest(this.event().id, user.email, !this.is_going(), {
      system_id: this.event().system?.id
    });
    const guest = this.event().attendees.find((_) => _.email === user.email);
    if (!guest)
      return;
    this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
      attendees: event.attendees.map((attendee) => attendee.email === user.email ? __spreadProps(__spreadValues({}, attendee), { checked_in: !this.is_going() }) : attendee)
    })));
  }
  static {
    this.\u0275fac = function GroupEventDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventDetailsModalComponent, selectors: [["group-event-details-modal"]], inputs: { event: [1, "event"] }, outputs: { event: "eventChange" }, decls: 103, vars: 72, consts: [["concierge_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "max-h-[80vh]", "w-3xl", "max-w-[calc(100vw-1rem)]", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-52", "w-full", "items-center", "justify-between", "overflow-hidden"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br", "py-2", "pr-4", "pl-2", "text-sm"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-1", "right-1", "overflow-hidden"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-8", "py-4"], [1, "text-left", "text-xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "bg-base-200", "text-base-content", "w-11", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], ["mat-menu-item", "", 3, "disabled"], [1, "mr-2"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "flex", "max-h-[calc(80vh-18rem)]", "flex-1", "space-x-6", "overflow-x-hidden", "overflow-y-auto", "p-8"], [1, "flex", "w-1/3", "flex-1", "flex-col", "space-y-2"], [1, "flex", "items-center", "space-x-4"], [1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full"], [1, "pt-4", "font-medium"], [1, "flex", "flex-col"], [1, "text-sm"], [1, "text-sm", "opacity-30"], [1, "flex", "flex-col", "text-sm"], [1, "opacity-30"], ["matRipple", "", 1, "flex", "min-h-12", "items-center", "space-x-4", "rounded-sm", 3, "click"], [1, "pb-4", "text-sm"], ["event-details", "", 3, "innerHTML"], [1, "flex", "w-[20rem]"], [1, "absolute", "inset-0", "z-50"], [1, "text-base"], [1, "uppercase"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-30"], [1, "z-10"], ["btn", "", 1, "flex", "h-10", "items-center", "space-x-2", "rounded-sm", "px-4"], [1, "pr-2"], [1, "text-error", "text-2xl"], [1, "border-base-300", "w-full", "border"], ["matRipple", "", 1, "bg-base-200", "relative", "h-40", "w-full", 3, "click"], [3, "src", "features", "styles"], [1, "space-y-2", "p-4"], [1, "mt-0!", "text-sm", "opacity-30"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "underline", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "href"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60", 3, "click"], [1, "absolute", "inset-y-8", "left-1/2", "w-[24rem]", "-translate-x-1/2", "overflow-hidden", "rounded-sm", "shadow-sm"], [3, "click", "show_host", "list", "host"]], template: function GroupEventDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
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
          return ctx.edit ? ctx.edit(ctx.event()) : "";
        });
        \u0275\u0275elementStart(23, "div", 9)(24, "icon", 11);
        \u0275\u0275text(25, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "button", 15);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_29_listener() {
          return ctx.copyPublicEventLink();
        });
        \u0275\u0275elementStart(30, "div", 9)(31, "icon", 11);
        \u0275\u0275text(32, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 13);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(36, GroupEventDetailsModalComponent_Conditional_36_Template, 7, 3, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-menu", null, 1)(39, "button", 17);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_39_listener() {
          return ctx.toggleInterest();
        });
        \u0275\u0275elementStart(40, "div", 9)(41, "icon");
        \u0275\u0275text(42, " star ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "button", 18);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_46_listener() {
          return ctx.toggleAttendance();
        });
        \u0275\u0275elementStart(47, "div", 9)(48, "icon");
        \u0275\u0275text(49, " help ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "div", 22)(57, "icon");
        \u0275\u0275text(58, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div");
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "h3", 23);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 21)(66, "div", 22)(67, "icon");
        \u0275\u0275text(68, "calendar_today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 24)(70, "div", 25);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 26);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "date");
        \u0275\u0275pipe(76, "date");
        \u0275\u0275pipe(77, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 21)(79, "div", 22)(80, "icon");
        \u0275\u0275text(81, "place");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 27);
        \u0275\u0275conditionalCreate(83, GroupEventDetailsModalComponent_Conditional_83_Template, 2, 1, "div");
        \u0275\u0275conditionalCreate(84, GroupEventDetailsModalComponent_Conditional_84_Template, 3, 3, "div", 28);
        \u0275\u0275conditionalCreate(85, GroupEventDetailsModalComponent_Conditional_85_Template, 3, 3, "div", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "button", 29);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_86_listener() {
          return ctx.show_attendees.set(!ctx.is_limited() && true);
        });
        \u0275\u0275elementStart(87, "div", 22)(88, "icon");
        \u0275\u0275text(89, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div");
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "h3", 23);
        \u0275\u0275text(94);
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 30);
        \u0275\u0275element(97, "span", 31);
        \u0275\u0275pipe(98, "sanitize");
        \u0275\u0275conditionalCreate(99, GroupEventDetailsModalComponent_Conditional_99_Template, 3, 3, "span", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div");
        \u0275\u0275conditionalCreate(101, GroupEventDetailsModalComponent_Conditional_101_Template, 11, 6, "div", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(102, GroupEventDetailsModalComponent_Conditional_102_Template, 4, 4, "div", 33);
      }
      if (rf & 2) {
        const concierge_menu_r5 = \u0275\u0275reference(14);
        const menu_r6 = \u0275\u0275reference(38);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event().extension_data?.images?.length ? 2 : -1);
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
        \u0275\u0275property("disabled", !ctx.public_event_link());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 38, "CALENDAR_EVENT.GROUP_COPY_URL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event().state !== "done" ? 36 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("text-error", ctx.is_interested());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 40, ctx.is_interested() ? "CALENDAR_EVENT.GROUP_INTEREST_REMOVE" : "CALENDAR_EVENT.GROUP_INTEREST_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("text-error", ctx.is_going());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 42, ctx.is_going() ? "CALENDAR_EVENT.GROUP_GOING_REMOVE" : "CALENDAR_EVENT.GROUP_GOING_ADD"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 44, "CALENDAR_EVENT.GROUP_HOST", \u0275\u0275pureFunction1(67, _c03, ctx.event().organiser?.name || ctx.event().host)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 47, "CALENDAR_EVENT.GROUP_WHEN_WHERE"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 49, "CALENDAR_EVENT.GROUP_DATE_TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(75, 51, ctx.event().date, "EEEE, d MMMM, yyyy"), " . ", \u0275\u0275pipeBind2(76, 54, ctx.event().date, ctx.time_format()), " - ", \u0275\u0275pipeBind2(77, 57, ctx.event().date + ctx.event().duration * 60 * 1e3, ctx.time_format()), " ");
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.is_onsite() && ctx.has_space() ? 83 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_onsite() && !ctx.has_space() ? 84 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_online() ? 85 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 60, "CALENDAR_EVENT.GROUP_ATTENDEES", \u0275\u0275pureFunction2(69, _c1, ctx.attendance(), ctx.attendees())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 63, "CALENDAR_EVENT.GROUP_ABOUT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(98, 65, ctx.body()), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.raw_description() ? 99 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.level() ? 101 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_attendees() ? 102 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      AttendeeListComponent,
      InteractiveMapComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatDialogClose,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe,
      SanitizePipe
    ], encapsulation: 2 });
  }
};
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
                        <button
                            mat-menu-item
                            [disabled]="!public_event_link()"
                            (click)="copyPublicEventLink()"
                        >
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
                        @if (event().state !== 'done') {
                            <button
                                mat-menu-item
                                (click)="remove(event(), false)"
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
                        }
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
                                . {{ event().date | date: time_format() }} -
                                {{
                                    event().date + event().duration * 60 * 1000
                                        | date: time_format()
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
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: false }] }, { type: Output, args: ["eventChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventDetailsModalComponent, { className: "GroupEventDetailsModalComponent", filePath: "libs/events/src/lib/group-event-details-modal.component.ts", lineNumber: 477 });
})();

export {
  MapLocateModalComponent,
  AttendeeListComponent,
  GroupEventDetailsModalComponent
};
//# sourceMappingURL=chunk-5X2K6RWB.js.map
