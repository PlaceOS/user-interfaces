import {
  MapPinComponent
} from "./chunk-K6XHC5XT.js";
import {
  InteractiveMapComponent
} from "./chunk-G4YM3N3T.js";
import {
  BookingFormService
} from "./chunk-RZ5IGKLP.js";
import {
  AsyncHandler,
  IconComponent,
  MatDialogRef,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  OrganisationService,
  SettingsService,
  currentUser,
  findNearbyFeature,
  isBefore
} from "./chunk-QOLUT6QZ.js";
import {
  CommonModule,
  Component,
  Input,
  MatRipple,
  MatRippleModule,
  Output,
  Router,
  TranslatePipe,
  computed,
  i18n,
  inject,
  model,
  notifyError,
  setClassMetadata,
  signal,
  startOfMinute,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-P3URBYOL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/desk-flow/auto-assigned-desk-modal.component.ts
var _c0 = () => ({ controls: true });
function AutoAssignedDeskModalComponent_Conditional_0_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AutoAssignedDeskModalComponent_Conditional_0_Conditional_5_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.dismiss());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AutoAssignedDeskModalComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AutoAssignedDeskModalComponent_Conditional_0_Conditional_5_Conditional_0_Template, 3, 0, "button", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.show_close() ? 0 : -1);
  }
}
function AutoAssignedDeskModalComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r2.loading() == "booking" ? "BOOKINGS.DESK_REQUESTING" : "BOOKINGS.DESK_LIST_LOADING"), " ");
  }
}
function AutoAssignedDeskModalComponent_Conditional_0_Conditional_8_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.map_url())("styles", ctx_r2.styles())("features", ctx_r2.features())("options", \u0275\u0275pureFunction0(4, _c0));
  }
}
function AutoAssignedDeskModalComponent_Conditional_0_Conditional_8_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "icon", 29);
    \u0275\u0275text(3, "map");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_NO_MAP_AVAILABLE"), " ");
  }
}
function AutoAssignedDeskModalComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "icon", 14);
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "h3", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 18)(13, "icon", 19);
    \u0275\u0275text(14, "chair");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20)(16, "div", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 18)(22, "icon", 19);
    \u0275\u0275text(23, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20)(25, "div", 21);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 22);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 18)(31, "icon", 19);
    \u0275\u0275text(32, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 23)(34, "div", 21);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 22);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 24);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 25);
    \u0275\u0275conditionalCreate(43, AutoAssignedDeskModalComponent_Conditional_0_Conditional_8_Conditional_43_Template, 1, 5, "interactive-map", 26)(44, AutoAssignedDeskModalComponent_Conditional_0_Conditional_8_Conditional_44_Template, 7, 3, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "BOOKINGS.DESK_FOUND"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "BOOKINGS.DESK_PERFECT_DESK_MESSAGE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "RESOURCE.DESK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.assigned_desk()?.name || ctx_r2.assigned_desk()?.id, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 16, "COMMON.FLOOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.level_name(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 18, "BOOKINGS.DESK_NEIGHBOURHOOD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.location(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 20, "BOOKINGS.DESK_LOCATION_ON_MAP"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.map_url() ? 43 : 44);
  }
}
function AutoAssignedDeskModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AutoAssignedDeskModalComponent_Conditional_0_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "main", 3);
    \u0275\u0275conditionalCreate(7, AutoAssignedDeskModalComponent_Conditional_0_Conditional_7_Template, 5, 4, "div", 4)(8, AutoAssignedDeskModalComponent_Conditional_0_Conditional_8_Template, 45, 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "footer", 5)(10, "button", 6);
    \u0275\u0275listener("click", function AutoAssignedDeskModalComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 7);
    \u0275\u0275listener("click", function AutoAssignedDeskModalComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "BOOKINGS.DESK_AUTO_ASSIGNED_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.loading() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loading() ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "BOOKINGS.DESK_CONFIRM_BOOKING"), " ");
  }
}
var AutoAssignedDeskModalComponent = class _AutoAssignedDeskModalComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._dialog_ref = inject(MatDialogRef, {
      optional: true
    });
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_close = model(
      false,
      ...ngDevMode ? [{ debugName: "show_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.assigned_desk = signal(
      null,
      ...ngDevMode ? [{ debugName: "assigned_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = model(
      void 0,
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = model(
      void 0,
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.nearby_desk_id = model(
      void 0,
      ...ngDevMode ? [{ debugName: "nearby_desk_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_id = model(
      void 0,
      ...ngDevMode ? [{ debugName: "level_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom = 1.5;
    this.center = signal(
      { x: 0.5, y: 0.5 },
      ...ngDevMode ? [{ debugName: "center" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => {
        const desk = this.assigned_desk();
        if (!desk?.zone?.id)
          return null;
        return this._org.levelWithID([desk.zone.id]);
      },
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_url = computed(
      () => {
        return this.level()?.map_id || "";
      },
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => {
        const desk = this.assigned_desk();
        if (!desk?.zone?.parent_id)
          return "N/A";
        const building = this._org.buildings.find((b) => b.id === desk.zone.parent_id);
        return building?.display_name || building?.name || "N/A";
      },
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_name = computed(
      () => {
        const desk = this.assigned_desk();
        if (!desk?.zone?.id)
          return "N/A";
        const level = this._org.levels.find((l) => l.id === desk.zone.id);
        return level?.display_name || level?.name || "N/A";
      },
      ...ngDevMode ? [{ debugName: "level_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desks = this._state.resources;
    this.styles = computed(
      () => {
        const assigned = this.assigned_desk();
        if (!assigned)
          return {};
        return {
          ["#" + assigned.map_id]: {
            fill: "#22c55e"
          }
        };
      },
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const assigned = this.assigned_desk();
        if (!assigned)
          return [];
        console.log("Assigned:", assigned);
        return [
          {
            location: assigned.map_id,
            content: MapPinComponent,
            data: {
              message: assigned.name || assigned.id || "Assigned Desk",
              fill: "#22c55e",
              stroke: "#fff"
            }
          }
        ];
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm = async () => {
      this.loading.set("booking");
      this._state.setOptions({ type: "desk" });
      this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
        booking_type: "desk",
        asset_id: this.assigned_desk().id,
        resources: [this.assigned_desk()]
      }));
      try {
        if (this._state.options()?.group) {
          await this._state.postFormForGroup();
        } else {
          await this._state.postForm();
        }
        await this._router.navigate(["/book", "desk", "success"]);
        this._dialog_ref?.close(true);
      } catch (e) {
        this.loading.set("");
        notifyError(typeof e === "string" ? e : i18n(`BOOKINGS.DESK_AUTO_ASSIGN_EMPTY`));
      }
    };
    this.dismiss = () => {
      this._dialog_ref?.close(false);
    };
  }
  async ngOnInit() {
    await this.initializeAndAutoAssign();
  }
  async initializeAndAutoAssign() {
    try {
      this.loading.set("available");
      this._state.setOptions({ type: "desk" });
      this._state.model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "desk" }));
      const now = Date.now();
      const current_date = this._state.model().date;
      const booking_date = this.date() || (isBefore(current_date || 0, now) ? startOfMinute(now).valueOf() : current_date);
      const booking_duration = this.duration() || this._settings.get("app.desks.default_duration") || 60;
      this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: booking_date,
        duration: booking_duration,
        all_day: true
      }));
      let available_desks = await this._state.listAvailableResources();
      if (!available_desks?.length) {
        notifyError(i18n("BOOKINGS.DESK_AUTO_ASSIGN_EMPTY"));
        this.dismiss();
        return;
      }
      this.show.set(true);
      let assigned_desk;
      const nearby_desk_id = this.nearby_desk_id();
      const level_id = this.level_id();
      if (nearby_desk_id) {
        if (level_id) {
          const level_desks = available_desks.filter((desk) => desk.zone?.id === level_id);
          if (level_desks.length > 0) {
            available_desks = level_desks;
          }
        }
        const all_resources = await this._state.listResources();
        const nearby_resource = all_resources.find((r) => r.id === nearby_desk_id || r.map_id === nearby_desk_id);
        if (nearby_resource?.zone?.id) {
          const level = this._org.levelWithID([
            nearby_resource.zone.id
          ]);
          if (level?.map_id) {
            const desk_ids = available_desks.map((d) => d.map_id || d.id);
            const closest_id = await findNearbyFeature(level.map_id, nearby_desk_id, desk_ids);
            if (closest_id) {
              assigned_desk = available_desks.find((d) => d.id === closest_id || d.map_id === closest_id);
            }
          }
        }
      }
      if (!assigned_desk) {
        const user_groups = currentUser()?.groups || [];
        const tag_matched = user_groups.length ? available_desks.filter((desk) => desk.tags?.length && desk.tags.some((tag) => user_groups.includes(tag))) : [];
        const homebase_matched = user_groups.length ? available_desks.filter((desk) => desk.homebase && user_groups.includes(desk.homebase)) : [];
        const both_matched = tag_matched.filter((desk) => desk.homebase && user_groups.includes(desk.homebase));
        const pool = both_matched.length ? both_matched : homebase_matched.length ? homebase_matched : tag_matched.length ? tag_matched : available_desks;
        const desks_by_level = pool.reduce((acc, desk) => {
          const zone_id = desk.zone?.id || "unknown";
          if (!acc[zone_id]) {
            acc[zone_id] = [];
          }
          acc[zone_id].push(desk);
          return acc;
        }, {});
        const level_with_most_desks = Object.entries(desks_by_level).sort(([, a], [, b]) => b.length - a.length)[0];
        assigned_desk = level_with_most_desks[1][0];
      }
      this._state.model.update((m) => __spreadProps(__spreadValues({}, m), {
        asset_id: assigned_desk.id,
        resources: [assigned_desk]
      }));
      this.assigned_desk.set(assigned_desk);
      this.loading.set("");
    } catch (error) {
      console.error("Error auto-assigning desk:", error);
      notifyError(i18n("BOOKINGS.DESK_AUTO_ASSIGN_EMPTY"));
      this.dismiss();
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AutoAssignedDeskModalComponent_BaseFactory;
      return function AutoAssignedDeskModalComponent_Factory(__ngFactoryType__) {
        return (\u0275AutoAssignedDeskModalComponent_BaseFactory || (\u0275AutoAssignedDeskModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AutoAssignedDeskModalComponent)))(__ngFactoryType__ || _AutoAssignedDeskModalComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoAssignedDeskModalComponent, selectors: [["auto-assigned-desk-modal"]], inputs: { show_close: [1, "show_close"], date: [1, "date"], duration: [1, "duration"], nearby_desk_id: [1, "nearby_desk_id"], level_id: [1, "level_id"] }, outputs: { show_close: "show_closeChange", date: "dateChange", duration: "durationChange", nearby_desk_id: "nearby_desk_idChange", level_id: "level_idChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "relative", "flex", "h-screen", "w-screen", "flex-col", "sm:h-auto", "sm:w-[32rem]"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex-1", "overflow-auto", "p-4"], [1, "flex", "h-full", "min-h-[20rem]", "flex-col", "items-center", "justify-center"], [1, "border-base-200", "flex", "items-center", "justify-between", "gap-2", "border-t", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], ["icon", "", "matRipple", "", 1, "h-10", "w-10"], ["icon", "", "matRipple", "", 1, "h-10", "w-10", 3, "click"], [3, "diameter"], [1, "mt-4", "opacity-60"], [1, "mb-6", "flex", "items-start", "space-x-3"], [1, "bg-success", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white"], [1, "text-xl"], [1, "text-xl", "font-medium"], [1, "text-sm", "opacity-60"], [1, "border-base-200", "bg-base-100", "mb-4", "space-y-3", "rounded-lg", "border", "p-4"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "leading-tight"], [1, "text-xs", "tracking-wide", "uppercase"], [1, "text-lg", "font-medium"], [1, "leading-none"], [1, "mb-2", "text-sm", "font-medium"], [1, "border-base-200", "bg-base-200", "relative", "h-64", "overflow-hidden", "rounded-lg", "border"], [3, "src", "styles", "features", "options"], [1, "text-base-content", "flex", "h-full", "w-full", "items-center", "justify-center", "opacity-30"], [1, "text-center"], [1, "mb-2", "text-4xl"], [1, "text-sm"]], template: function AutoAssignedDeskModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AutoAssignedDeskModalComponent_Conditional_0_Template, 16, 12, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      InteractiveMapComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoAssignedDeskModalComponent, [{
    type: Component,
    args: [{ selector: "auto-assigned-desk-modal", standalone: true, template: `
        @if (show()) {
            <div
                class="relative flex h-screen w-screen flex-col sm:h-auto sm:w-[32rem]"
            >
                <!-- Header -->
                <header
                    class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none p-2"
                >
                    <h2 class="px-2 text-xl font-medium">
                        {{ 'BOOKINGS.DESK_AUTO_ASSIGNED_TITLE' | translate }}
                    </h2>
                    @if (!loading()) {
                        @if (show_close()) {
                            <button
                                icon
                                matRipple
                                class="h-10 w-10"
                                (click)="dismiss()"
                            >
                                <icon>close</icon>
                            </button>
                        }
                    }
                </header>

                <!-- Content -->
                <main class="flex-1 overflow-auto p-4">
                    @if (loading()) {
                        <!-- Loading State -->
                        <div
                            class="flex h-full min-h-[20rem] flex-col items-center justify-center"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <p class="mt-4 opacity-60">
                                {{
                                    (loading() == 'booking'
                                        ? 'BOOKINGS.DESK_REQUESTING'
                                        : 'BOOKINGS.DESK_LIST_LOADING'
                                    ) | translate
                                }}
                            </p>
                        </div>
                    } @else {
                        <!-- Success Message -->
                        <div class="mb-6 flex items-start space-x-3">
                            <div
                                class="bg-success flex h-8 w-8 items-center justify-center rounded-full text-white"
                            >
                                <icon class="text-xl">done</icon>
                            </div>
                            <div>
                                <h3 class="text-xl font-medium">
                                    {{ 'BOOKINGS.DESK_FOUND' | translate }}
                                </h3>
                                <p class="text-sm opacity-60">
                                    {{
                                        'BOOKINGS.DESK_PERFECT_DESK_MESSAGE'
                                            | translate
                                    }}
                                </p>
                            </div>
                        </div>

                        <!-- Desk Details Card -->
                        <div
                            class="border-base-200 bg-base-100 mb-4 space-y-3 rounded-lg border p-4"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">chair</icon>
                                <div class="leading-tight">
                                    <div
                                        class="text-xs tracking-wide uppercase"
                                    >
                                        {{ 'RESOURCE.DESK' | translate }}
                                    </div>
                                    <div class="text-lg font-medium">
                                        {{
                                            assigned_desk()?.name ||
                                                assigned_desk()?.id
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">layers</icon>
                                <div class="leading-tight">
                                    <div
                                        class="text-xs tracking-wide uppercase"
                                    >
                                        {{ 'COMMON.FLOOR' | translate }}
                                    </div>
                                    <div class="text-lg font-medium">
                                        {{ level_name() }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">place</icon>
                                <div class="leading-none">
                                    <div
                                        class="text-xs tracking-wide uppercase"
                                    >
                                        {{
                                            'BOOKINGS.DESK_NEIGHBOURHOOD'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-lg font-medium">
                                        {{ location() }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Location on Map -->
                        <div class="mb-2 text-sm font-medium">
                            {{ 'BOOKINGS.DESK_LOCATION_ON_MAP' | translate }}
                        </div>
                        <div
                            class="border-base-200 bg-base-200 relative h-64 overflow-hidden rounded-lg border"
                        >
                            @if (map_url()) {
                                <interactive-map
                                    [src]="map_url()"
                                    [styles]="styles()"
                                    [features]="features()"
                                    [options]="{ controls: true }"
                                ></interactive-map>
                            } @else {
                                <div
                                    class="text-base-content flex h-full w-full items-center justify-center opacity-30"
                                >
                                    <div class="text-center">
                                        <icon class="mb-2 text-4xl">map</icon>
                                        <p class="text-sm">
                                            {{
                                                'BOOKINGS.DESK_NO_MAP_AVAILABLE'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </main>

                <!-- Footer -->
                <footer
                    class="border-base-200 flex items-center justify-between gap-2 border-t p-4"
                >
                    <button
                        btn
                        matRipple
                        class="inverse flex-1"
                        (click)="dismiss()"
                    >
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        [disabled]="loading()"
                        (click)="confirm()"
                    >
                        {{ 'BOOKINGS.DESK_CONFIRM_BOOKING' | translate }}
                    </button>
                </footer>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      InteractiveMapComponent
    ] }]
  }], null, { show_close: [{ type: Input, args: [{ isSignal: true, alias: "show_close", required: false }] }, { type: Output, args: ["show_closeChange"] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }, { type: Output, args: ["dateChange"] }], duration: [{ type: Input, args: [{ isSignal: true, alias: "duration", required: false }] }, { type: Output, args: ["durationChange"] }], nearby_desk_id: [{ type: Input, args: [{ isSignal: true, alias: "nearby_desk_id", required: false }] }, { type: Output, args: ["nearby_desk_idChange"] }], level_id: [{ type: Input, args: [{ isSignal: true, alias: "level_id", required: false }] }, { type: Output, args: ["level_idChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoAssignedDeskModalComponent, { className: "AutoAssignedDeskModalComponent", filePath: "apps/workplace/src/app/book/desk-flow/auto-assigned-desk-modal.component.ts", lineNumber: 222 });
})();

export {
  AutoAssignedDeskModalComponent
};
//# sourceMappingURL=chunk-XJL2DJS3.js.map
