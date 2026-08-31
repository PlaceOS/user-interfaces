import {
  TemplateMappingsComponent
} from "./chunk-NJTXY2LL.js";
import {
  PlaylistThumbnailComponent
} from "./chunk-Z2YUDEUA.js";
import {
  GroupBreadcrumbsComponent
} from "./chunk-PTG3LKTB.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-JYJXN535.js";
import {
  ActivatedRoute,
  CdkTree,
  CdkTreeModule,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodePadding,
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Router,
  RouterLink,
  SignageService,
  TranslatePipe,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WX6MSD54.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/zones/zone-content.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ["/playlists", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ["/displays", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ZoneContentComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneContentComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_PLAYLIST_TO_ZONE_ARIA"));
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_EXPIRED"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PENDING"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_APPROVAL"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r3.description, " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const playlist_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePlaylist($event, playlist_r3.id));
    });
    \u0275\u0275elementStart(3, "icon", 26);
    \u0275\u0275text(4, " close ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.REMOVE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_ZONE", \u0275\u0275pureFunction1(7, _c2, playlist_r3.name)));
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "playlist-thumbnail", 15);
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275conditionalCreate(8, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_8_Template, 3, 3, "span", 19);
    \u0275\u0275conditionalCreate(9, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_9_Template, 3, 3, "span", 20)(10, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_10_Template, 3, 3, "span", 21)(11, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_11_Template, 3, 3, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_12_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_13_Template, 5, 9, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const playlist_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, playlist_r3.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 8, "SIGNAGE_MANAGER.OPEN_PLAYLIST", \u0275\u0275pureFunction1(13, _c2, playlist_r3.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("playlist", playlist_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!playlist_r3.enabled ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.getStatus(playlist_r3)) === "expired" ? 9 : tmp_17_0 === "pending" ? 10 : tmp_17_0 === "awaiting_approval" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(playlist_r3.description ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 13 : -1);
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Template, 14, 15, "div", 13, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.zone_playlists());
  }
}
function ZoneContentComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 27);
    \u0275\u0275text(2, "playlist_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_ZONE"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneContentComponent_Conditional_0_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_DISPLAY_TO_ZONE_ARIA"));
  }
}
function ZoneContentComponent_Conditional_0_Conditional_22_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r6.description, " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 30);
    \u0275\u0275text(3, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ZoneContentComponent_Conditional_0_Conditional_22_For_1_Conditional_7_Template, 2, 1, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c3, display_r6.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 4, "SIGNAGE_MANAGER.OPEN_DISPLAY", \u0275\u0275pureFunction1(9, _c2, display_r6.display_name || display_r6.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", display_r6.display_name || display_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r6.description ? 7 : -1);
  }
}
function ZoneContentComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ZoneContentComponent_Conditional_0_Conditional_22_For_1_Template, 8, 11, "a", 29, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.zone_displays());
  }
}
function ZoneContentComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 27);
    \u0275\u0275text(2, "tv_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_DISPLAYS_ZONE"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "template-mappings", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("target_id", ctx_r1.selected_zone().id);
  }
}
function ZoneContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5)(5, "icon", 6);
    \u0275\u0275text(6, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ZoneContentComponent_Conditional_0_Conditional_9_Template, 5, 6, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275conditionalCreate(11, ZoneContentComponent_Conditional_0_Conditional_11_Template, 2, 0)(12, ZoneContentComponent_Conditional_0_Conditional_12_Template, 6, 3, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 4)(15, "h5", 5)(16, "icon", 6);
    \u0275\u0275text(17, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, ZoneContentComponent_Conditional_0_Conditional_20_Template, 5, 6, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 8);
    \u0275\u0275conditionalCreate(22, ZoneContentComponent_Conditional_0_Conditional_22_Template, 2, 0)(23, ZoneContentComponent_Conditional_0_Conditional_23_Template, 6, 3, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, ZoneContentComponent_Conditional_0_Conditional_24_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.activeTab() !== "playlists");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 11, "SIGNAGE_MANAGER.PLAYLISTS_COUNT", \u0275\u0275pureFunction1(19, _c0, ctx_r1.zone_playlists().length), ctx_r1.zone_playlists().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.zone_playlists().length > 0 ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.activeTab() !== "displays");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(19, 15, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(21, _c0, ctx_r1.zone_displays().length), ctx_r1.zone_displays().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.zone_displays().length > 0 ? 22 : 23);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "templates" ? 24 : -1);
  }
}
function ZoneContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 33);
    \u0275\u0275text(2, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.ZONE_SELECT_DETAILS"));
  }
}
var ZoneContentComponent = class _ZoneContentComponent {
  constructor() {
    this._service = inject(SignageService);
    this.activeTab = input(
      "playlists",
      ...ngDevMode ? [{ debugName: "activeTab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = this._service.selected_zone;
    this.playlist_approval_status = this._service.playlist_approval_status;
    this.can_update = this._service.can_update;
    this._playlists = this._service.playlists;
    this._displays = this._service.displays;
    this.zone_playlists = computed(
      () => {
        const zone = this.selected_zone();
        if (!zone)
          return [];
        return this._playlists().filter((p) => zone.playlists?.includes(p.id));
      },
      ...ngDevMode ? [{ debugName: "zone_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_displays = computed(
      () => {
        const zone = this.selected_zone();
        if (!zone)
          return [];
        return this._displays().filter((d) => d.zones?.includes(zone.id));
      },
      ...ngDevMode ? [{ debugName: "zone_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addPlaylist() {
    const zone = this.selected_zone();
    if (zone)
      this._service.addPlaylistToZone(zone);
  }
  removePlaylist(event, playlist_id) {
    event.preventDefault();
    event.stopPropagation();
    const zone = this.selected_zone();
    if (zone)
      this._service.removePlaylistFromZone(zone, playlist_id);
  }
  addDisplay() {
    const zone = this.selected_zone();
    if (zone)
      this._service.addDisplayToZone(zone);
  }
  getStatus(playlist) {
    const now_s = Math.floor(Date.now() / 1e3);
    if (playlist.valid_until && playlist.valid_until < now_s)
      return "expired";
    if (playlist.valid_from && playlist.valid_from > now_s)
      return "pending";
    const approvals = this.playlist_approval_status();
    if (playlist.id in approvals && !approvals[playlist.id])
      return "awaiting_approval";
    return null;
  }
  static {
    this.\u0275fac = function ZoneContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneContentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneContentComponent, selectors: [["zone-content"]], inputs: { activeTab: [1, "activeTab"] }, decls: 2, vars: 1, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-3", "p-3"], ["id", "zone-playlists-panel", "role", "tabpanel", "aria-labelledby", "zone-playlists-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], [1, "gap-2", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], ["id", "zone-displays-panel", "role", "tabpanel", "aria-labelledby", "zone-displays-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], ["id", "zone-templates-panel", "role", "tabpanel", "aria-labelledby", "zone-templates-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-hidden", "rounded-lg", "border"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "pr-2", "pl-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-lg", "p-1", "no-underline", "transition-colors", 3, "routerLink"], [1, "border-base-200", "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md", "border", 3, "playlist"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-secondary", "text-secondary-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "text-base-content/70", "mt-0.5", "truncate", "text-xs"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "text-4xl"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "text-base-content/70", "truncate", "text-xs"], ["target_type", "zone", 3, "target_id"], [1, "text-6xl"]], template: function ZoneContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ZoneContentComponent_Conditional_0_Template, 25, 23, "div", 0)(1, ZoneContentComponent_Conditional_1_Template, 6, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selected_zone() ? 0 : 1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      PlaylistThumbnailComponent,
      TemplateMappingsComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-content.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneContentComponent, [{
    type: Component,
    args: [{ selector: "zone-content", template: `
        @if (selected_zone()) {
            <div class="flex h-full flex-col overflow-hidden">
                <div class="flex min-h-0 flex-1 flex-col gap-3 p-3">
                    <div
                        id="zone-playlists-panel"
                        role="tabpanel"
                        aria-labelledby="zone-playlists-tab"
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        [class.hidden]="activeTab() !== 'playlists'"
                    >
                        <div
                            class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                        >
                            <h5
                                class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                            >
                                <icon class="text-lg">playlist_play</icon>
                                {{
                                    'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                                        | translate
                                            : { count: zone_playlists().length }
                                            : zone_playlists().length
                                }}
                            </h5>
                            @if (can_update()) {
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.ADD_PLAYLIST_TOOLTIP'
                                            | translate
                                    "
                                    (click)="addPlaylist()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.ADD_PLAYLIST_TO_ZONE_ARIA'
                                            | translate
                                    "
                                >
                                    <icon>add</icon>
                                </button>
                            }
                        </div>
                        <div class="gap-2 p-2">
                            @if (zone_playlists().length > 0) {
                                @for (
                                    playlist of zone_playlists();
                                    track playlist.id
                                ) {
                                    <div
                                        class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pr-2 pl-1"
                                    >
                                        <a
                                            matRipple
                                            class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                            [routerLink]="[
                                                '/playlists',
                                                playlist.id,
                                            ]"
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                                    | translate
                                                        : {
                                                              name: playlist.name,
                                                          }
                                            "
                                        >
                                            <playlist-thumbnail
                                                [playlist]="playlist"
                                                class="border-base-200 relative h-12 w-12 shrink-0 overflow-hidden rounded-md border"
                                            />
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="truncate text-sm font-medium"
                                                >
                                                    {{ playlist.name }}
                                                </div>
                                                <div
                                                    class="mt-1 flex flex-wrap gap-1"
                                                >
                                                    @if (!playlist.enabled) {
                                                        <span
                                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                        >
                                                            {{
                                                                'COMMON.DISABLED'
                                                                    | translate
                                                            }}
                                                        </span>
                                                    }
                                                    @switch (
                                                        getStatus(playlist)
                                                    ) {
                                                        @case ('expired') {
                                                            <span
                                                                class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                {{
                                                                    'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                                        | translate
                                                                }}
                                                            </span>
                                                        }
                                                        @case ('pending') {
                                                            <span
                                                                class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                {{
                                                                    'COMMON.PENDING'
                                                                        | translate
                                                                }}
                                                            </span>
                                                        }
                                                        @case ('awaiting_approval') {
                                                            <span
                                                                class="bg-secondary text-secondary-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                {{
                                                                    'SIGNAGE_MANAGER.STATUS_AWAITING_APPROVAL'
                                                                        | translate
                                                                }}
                                                            </span>
                                                        }
                                                    }
                                                </div>
                                                @if (playlist.description) {
                                                    <div
                                                        class="text-base-content/70 mt-0.5 truncate text-xs"
                                                    >
                                                        {{
                                                            playlist.description
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </a>
                                        @if (can_update()) {
                                            <button
                                                icon
                                                default
                                                error
                                                type="button"
                                                matRipple
                                                [matTooltip]="
                                                    'SIGNAGE_MANAGER.REMOVE_PLAYLIST_TOOLTIP'
                                                        | translate
                                                "
                                                (click)="
                                                    removePlaylist(
                                                        $event,
                                                        playlist.id
                                                    )
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.REMOVE_PLAYLIST_FROM_ZONE'
                                                        | translate
                                                            : {
                                                                  name: playlist.name,
                                                              }
                                                "
                                            >
                                                <icon class="text-error">
                                                    close
                                                </icon>
                                            </button>
                                        }
                                    </div>
                                }
                            } @else {
                                <div
                                    class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                >
                                    <icon class="text-4xl"
                                        >playlist_remove</icon
                                    >
                                    <p class="text-sm">
                                        {{
                                            'SIGNAGE_MANAGER.NO_PLAYLISTS_ZONE'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        id="zone-displays-panel"
                        role="tabpanel"
                        aria-labelledby="zone-displays-tab"
                        class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-auto rounded-lg border"
                        [class.hidden]="activeTab() !== 'displays'"
                    >
                        <div
                            class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                        >
                            <h5
                                class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                            >
                                <icon class="text-lg">tv</icon>
                                {{
                                    'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                        | translate
                                            : { count: zone_displays().length }
                                            : zone_displays().length
                                }}
                            </h5>
                            @if (can_update()) {
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP'
                                            | translate
                                    "
                                    (click)="addDisplay()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.ADD_DISPLAY_TO_ZONE_ARIA'
                                            | translate
                                    "
                                >
                                    <icon>add</icon>
                                </button>
                            }
                        </div>
                        <div class="gap-2 p-2">
                            @if (zone_displays().length > 0) {
                                @for (
                                    display of zone_displays();
                                    track display.id
                                ) {
                                    <a
                                        matRipple
                                        class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3 no-underline transition-colors"
                                        [routerLink]="['/displays', display.id]"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                                | translate
                                                    : {
                                                          name:
                                                              display.display_name ||
                                                              display.name,
                                                      }
                                        "
                                    >
                                        <icon
                                            class="shrink-0 text-xl opacity-60"
                                            >tv</icon
                                        >
                                        <div class="min-w-0 flex-1">
                                            <div
                                                class="truncate text-sm font-medium"
                                            >
                                                {{
                                                    display.display_name ||
                                                        display.name
                                                }}
                                            </div>
                                            @if (display.description) {
                                                <div
                                                    class="text-base-content/70 truncate text-xs"
                                                >
                                                    {{ display.description }}
                                                </div>
                                            }
                                        </div>
                                    </a>
                                }
                            } @else {
                                <div
                                    class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-6"
                                >
                                    <icon class="text-4xl">tv_off</icon>
                                    <p class="text-sm">
                                        {{
                                            'SIGNAGE_MANAGER.NO_DISPLAYS_ZONE'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    @if (activeTab() === 'templates') {
                        <div
                            id="zone-templates-panel"
                            role="tabpanel"
                            aria-labelledby="zone-templates-tab"
                            class="bg-base-100 border-base-300 min-h-0 flex-1 overflow-hidden rounded-lg border"
                        >
                            <template-mappings
                                target_type="zone"
                                [target_id]="selected_zone().id"
                            />
                        </div>
                    }
                </div>
            </div>
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">layers</icon>
                <p>{{ 'SIGNAGE_MANAGER.ZONE_SELECT_DETAILS' | translate }}</p>
            </div>
        }
    `, imports: [
      MatRippleModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      TranslatePipe,
      PlaylistThumbnailComponent,
      TemplateMappingsComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/zones/zone-content.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-content.component.css.map */\n"] }]
  }], null, { activeTab: [{ type: Input, args: [{ isSignal: true, alias: "activeTab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneContentComponent, { className: "ZoneContentComponent", filePath: "apps/signage-manager/src/app/zones/zone-content.component.ts", lineNumber: 344 });
})();

// apps/signage-manager/src/app/zones/zone-header.component.ts
var _c02 = (a0) => ({ count: a0 });
var ZoneHeaderComponent = class _ZoneHeaderComponent {
  constructor() {
    this._service = inject(SignageService);
    this.total_count = computed(
      () => this._service.filtered_zones().length,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ZoneHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneHeaderComponent, selectors: [["zone-header"]], decls: 11, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"]], template: function ZoneHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "group-breadcrumbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "SIGNAGE_MANAGER.ZONES_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 4, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(8, _c02, ctx.total_count()), ctx.total_count()), " ");
      }
    }, dependencies: [GroupBreadcrumbsComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneHeaderComponent, [{
    type: Component,
    args: [{
      selector: "zone-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.ZONES_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : { count: total_count() }
                                    : total_count()
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
        </div>
    `,
      imports: [TranslatePipe, GroupBreadcrumbsComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneHeaderComponent, { className: "ZoneHeaderComponent", filePath: "apps/signage-manager/src/app/zones/zone-header.component.ts", lineNumber: 33 });
})();

// apps/signage-manager/src/app/zones/zone-list.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c12 = (a0) => ["/zones", a0];
function ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const node_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.onExpandedChange(node_r3, !ctx_r3.isExpanded(node_r3));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "icon", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 2, ctx_r3.isExpanded(node_r3) ? "SIGNAGE_MANAGER.COLLAPSE_ZONE" : "SIGNAGE_MANAGER.EXPAND_ZONE", \u0275\u0275pureFunction1(5, _c03, node_r3.zone.display_name || node_r3.zone.name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.childCount(node_r3), " ");
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 16);
    \u0275\u0275text(1, "autorenew");
    \u0275\u0275elementEnd();
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r3.selected()?.id !== node_r3.zone.id)("opacity-90", ctx_r3.selected()?.id === node_r3.zone.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r3.zone.description, " ");
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-tree-node", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275conditionalCreate(2, ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_2_Template, 4, 7, "button", 9)(3, ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_3_Template, 1, 0, "div", 10);
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ZoneListComponent_Conditional_6_cdk_tree_node_1_Template_a_click_4_listener() {
      const node_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectZone(node_r3.zone));
    });
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13)(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_10_Template, 2, 1, "span", 15);
    \u0275\u0275conditionalCreate(11, ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_11_Template, 2, 0, "icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ZoneListComponent_Conditional_6_cdk_tree_node_1_Conditional_12_Template, 2, 5, "div", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r3.selected()?.id === node_r3.zone.id)("text-primary-content", ctx_r3.selected()?.id === node_r3.zone.id)("hover:bg-base-200", ctx_r3.selected()?.id !== node_r3.zone.id);
    \u0275\u0275property("cdkTreeNodePadding", node_r3.level)("cdkTreeNodePaddingIndent", 8);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * node_r3.level + "rem")("opacity", 0.1 * node_r3.level);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.childCount(node_r3) > 0 && !(ctx_r3.show_search_results() && node_r3.level === 0) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c12, node_r3.zone.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 19, "SIGNAGE_MANAGER.OPEN_ZONE", \u0275\u0275pureFunction1(24, _c03, node_r3.zone.display_name || node_r3.zone.name)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", node_r3.zone.display_name || node_r3.zone.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.childCount(node_r3) > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r3.children_loading ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r3.zone.description ? 12 : -1);
  }
}
function ZoneListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-tree", 4);
    \u0275\u0275template(1, ZoneListComponent_Conditional_6_cdk_tree_node_1_Template, 13, 26, "cdk-tree-node", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r3.flat_tree_nodes())("levelAccessor", ctx_r3.levelAccessor)("trackBy", ctx_r3.trackByNode);
  }
}
function ZoneListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 21);
    \u0275\u0275text(2, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_ZONES"));
  }
}
var ZoneListComponent = class _ZoneListComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._service = inject(SignageService);
    this._org_initialised = this._org.initialised;
    this._all_zones = this._service.all_zones;
    this._root_zones = this._service.root_zones;
    this._children_cache = this._service.zone_tree_children_cache;
    this.search = this._service.zone_search_term;
    this.zones = this._service.filtered_zones;
    this.selected = this._service.selected_zone;
    this.search_enabled = computed(
      () => !!this.selected()?.id,
      ...ngDevMode ? [{ debugName: "search_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_search_results = computed(
      () => this.search_enabled() && !!this.search().trim(),
      ...ngDevMode ? [{ debugName: "show_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tree_nodes = signal(
      [],
      ...ngDevMode ? [{ debugName: "tree_nodes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.expanded_zones = this._service.zone_tree_expanded;
    this.flat_tree_nodes = computed(
      () => {
        const nodes = [];
        for (const node of this.tree_nodes()) {
          this.flattenNode(node, 0, nodes);
        }
        return nodes;
      },
      ...ngDevMode ? [{ debugName: "flat_tree_nodes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levelAccessor = (node) => node.level;
    this.trackByNode = (_, node) => node.zone.id;
    this.child_count_lookup = computed(
      () => {
        const lookup = {};
        for (const zone of this._all_zones()) {
          if (!zone.parent_id)
            continue;
          lookup[zone.parent_id] = (lookup[zone.parent_id] || 0) + 1;
        }
        return lookup;
      },
      ...ngDevMode ? [{ debugName: "child_count_lookup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.children_lookup = computed(
      () => {
        const lookup = {};
        for (const zone of this._all_zones()) {
          if (!zone.parent_id)
            continue;
          lookup[zone.parent_id] ||= [];
          lookup[zone.parent_id].push(zone);
        }
        return lookup;
      },
      ...ngDevMode ? [{ debugName: "children_lookup" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const searching = this.show_search_results();
      const root_zones = searching ? this.zones() : this._root_zones();
      const selected_zone = searching ? this.selected() : null;
      if (!this._org_initialised())
        return;
      const existing_roots = untracked(() => this.tree_nodes());
      if (selected_zone) {
        const existing_children = existing_roots.find((node) => node.zone.id === selected_zone.id)?.children || [];
        this.tree_nodes.set([
          {
            zone: selected_zone,
            children: root_zones.map((zone) => {
              const existing = existing_children.find((node) => node.zone.id === zone.id);
              return existing ? this.syncNode(existing) : this.createNode(zone);
            }),
            children_loaded: true,
            children_loading: false
          }
        ]);
        return;
      }
      this.tree_nodes.set(root_zones.map((zone) => {
        const existing = existing_roots.find((node) => node.zone.id === zone.id);
        return existing ? this.syncNode(existing) : this.createNode(zone);
      }));
    });
    effect(() => {
      this._all_zones();
      const selected_zone = this.selected();
      if (!this._org_initialised() || this.show_search_results() || !selected_zone?.id) {
        return;
      }
      untracked(() => this.syncSelectedPath(selected_zone.id));
    });
    effect(() => {
      const root_zone = this._root_zones()[0];
      const root_node = this.tree_nodes().find((node) => node.zone.id === root_zone?.id);
      if (this.show_search_results() || !root_node || !this.isExpanded(root_node) || this.hasLoadedChildren(root_node) || root_node.children_loading || !this.childCount(root_node)) {
        return;
      }
      untracked(() => this.loadNodeChildren(root_node));
    });
  }
  onExpandedChange(node, expanded) {
    this.expanded_zones.update((state) => __spreadProps(__spreadValues({}, state), {
      [node.zone.id]: expanded
    }));
    if (!expanded || this.hasLoadedChildren(node) || node.children_loading) {
      return;
    }
    this.loadNodeChildren(node);
  }
  loadNodeChildren(node) {
    this.tree_nodes.update((nodes) => this.updateNode(nodes, node.zone.id, (item) => __spreadProps(__spreadValues({}, item), {
      children_loading: true
    })));
    this.loadChildren(node.zone.id);
  }
  selectZone(zone) {
    this.search.set("");
    this.selected.set(zone);
  }
  isExpanded(zone_or_node) {
    const zone_id = this.getZoneId(zone_or_node);
    if (this.show_search_results() && this.selected()?.id === zone_id) {
      return true;
    }
    const expanded_zones = this.expanded_zones();
    return zone_id in expanded_zones ? expanded_zones[zone_id] : this._root_zones()[0]?.id === zone_id;
  }
  childCount(zone_or_id) {
    if (typeof zone_or_id !== "string" && "children_loaded" in zone_or_id) {
      if (zone_or_id.children_loaded) {
        return zone_or_id.children.length;
      }
      zone_or_id = zone_or_id.zone;
    }
    const zone_id = this.getZoneId(zone_or_id);
    const lookup = this.child_count_lookup();
    if (zone_id in lookup) {
      return lookup[zone_id] || 0;
    }
    if (typeof zone_or_id !== "string") {
      return zone_or_id.children_count || zone_or_id.count || 0;
    }
    return 0;
  }
  createNode(zone) {
    const cached_children = this.cachedChildren(zone.id);
    const has_cached_children = this.hasUsableCachedChildren(zone.id, cached_children);
    return {
      zone,
      children: has_cached_children ? cached_children.map((child_zone) => this.createNode(child_zone)) : [],
      children_loaded: has_cached_children,
      children_loading: false
    };
  }
  async loadChildren(zone_id) {
    const cached_children = this.cachedChildren(zone_id);
    if (this.hasUsableCachedChildren(zone_id, cached_children)) {
      this.applyLoadedChildren(zone_id, cached_children);
      return;
    }
    const children = await this._service.zoneChildren(zone_id).catch(() => this.children_lookup()[zone_id] || []);
    this.cacheChildren(zone_id, children);
    this.applyLoadedChildren(zone_id, children);
  }
  cacheChildren(zone_id, children) {
    this._children_cache.update((cache) => __spreadProps(__spreadValues({}, cache), {
      [zone_id]: children
    }));
  }
  applyLoadedChildren(zone_id, children) {
    this.tree_nodes.update((nodes) => this.updateNode(nodes, zone_id, (item) => __spreadProps(__spreadValues({}, item), {
      children_loaded: true,
      children_loading: false,
      children: children.map((zone) => {
        const existing = item.children.find((child) => child.zone.id === zone.id);
        return existing ? this.syncNode(existing) : this.createNode(zone);
      })
    })));
  }
  syncNode(node) {
    const zone = this.findZone(node.zone.id) || node.zone;
    const cached_children = this.cachedChildren(node.zone.id);
    if (!node.children_loaded && !cached_children) {
      return __spreadProps(__spreadValues({}, node), { zone });
    }
    const existing_children = node.children;
    const zone_children = cached_children || this.children_lookup()[node.zone.id] || existing_children.map(({ zone: zone2 }) => zone2);
    const children = zone_children.map((child_zone) => {
      const child = existing_children.find(({ zone: zone2 }) => zone2.id === child_zone.id);
      return child ? this.syncNode(child) : this.createNode(child_zone);
    });
    return __spreadProps(__spreadValues({}, node), { zone, children });
  }
  findZone(zone_id) {
    return this._all_zones().find(({ id }) => id === zone_id);
  }
  getZonePath(zone_id) {
    const root_ids = new Set(this.tree_nodes().map(({ zone }) => zone.id));
    if (!zone_id || !root_ids.size)
      return [];
    if (root_ids.has(zone_id))
      return [zone_id];
    const zone_path = [zone_id];
    let current_zone = this.findZone(zone_id);
    while (current_zone?.parent_id) {
      zone_path.unshift(current_zone.parent_id);
      if (root_ids.has(current_zone.parent_id)) {
        return zone_path;
      }
      current_zone = this.findZone(current_zone.parent_id);
    }
    return root_ids.has(zone_path[0]) ? zone_path : [];
  }
  getExpansionPath(zone_id) {
    const zone_path = this.getZonePath(zone_id);
    if (!zone_path.length)
      return [];
    return this.childCount(zone_id) > 0 ? zone_path : zone_path.slice(0, -1);
  }
  syncSelectedPath(zone_id) {
    this.ensureZonePathLoaded(zone_id);
    this.expandZonePath(zone_id);
  }
  ensureZonePathLoaded(zone_id) {
    for (const current_zone_id of this.getExpansionPath(zone_id)) {
      const node = this.findTreeNode(this.tree_nodes(), current_zone_id);
      if (node?.children_loaded)
        continue;
      this.loadChildren(current_zone_id);
    }
  }
  expandZonePath(zone_id) {
    const expansion_path = this.getExpansionPath(zone_id);
    if (!expansion_path.length)
      return;
    const state = untracked(() => this.expanded_zones());
    let changed = false;
    const next_state = __spreadValues({}, state);
    for (const current_zone_id of expansion_path) {
      if (next_state[current_zone_id])
        continue;
      next_state[current_zone_id] = true;
      changed = true;
    }
    if (changed) {
      this.expanded_zones.set(next_state);
    }
  }
  getZoneId(zone_or_node) {
    if (typeof zone_or_node === "string") {
      return zone_or_node;
    }
    return "children_loaded" in zone_or_node ? zone_or_node.zone.id : zone_or_node.id;
  }
  cachedChildren(zone_id) {
    const cache = this._children_cache();
    return zone_id in cache ? cache[zone_id] : null;
  }
  hasUsableCachedChildren(zone_id, cached_children) {
    return !!cached_children && (cached_children.length > 0 || this.childCount(zone_id) === 0);
  }
  hasLoadedChildren(node) {
    return node.children_loaded && (node.children.length > 0 || this.childCount(node.zone.id) === 0);
  }
  findTreeNode(nodes, zone_id) {
    for (const node of nodes) {
      if (node.zone.id === zone_id) {
        return node;
      }
      if (!node.children.length)
        continue;
      const child_node = this.findTreeNode(node.children, zone_id);
      if (child_node) {
        return child_node;
      }
    }
    return null;
  }
  updateNode(nodes, zone_id, callback) {
    return nodes.map((node) => {
      if (node.zone.id === zone_id) {
        return callback(node);
      }
      if (!node.children.length)
        return node;
      return __spreadProps(__spreadValues({}, node), {
        children: this.updateNode(node.children, zone_id, callback)
      });
    });
  }
  flattenNode(node, level, flat_nodes) {
    flat_nodes.push(__spreadProps(__spreadValues({}, node), { level }));
    if (!this.isExpanded(node))
      return;
    for (const child of node.children) {
      this.flattenNode(child, level + 1, flat_nodes);
    }
  }
  static {
    this.\u0275fac = function ZoneListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneListComponent, selectors: [["zone-list"]], decls: 8, vars: 15, consts: [[1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "disabled", "placeholder", "ngModel"], [1, "zone-tree", 3, "dataSource", "levelAccessor", "trackBy"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["cdkTreeNodePadding", "", "class", "border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "bg-primary", "text-primary-content", "hover:bg-base-200", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", 1, "border-base-300", "bg-base-200/30", "relative", "flex", "min-h-0", "items-center", "gap-2", "border-b", "pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent"], [1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors"], [1, "min-w-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "flex", "min-w-0", "flex-1", "cursor-pointer", "items-center", "gap-3", "rounded-md", "py-3", "text-left", "no-underline", "transition-colors", 3, "click", "routerLink"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "animate-spin", "text-lg"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xl"], [1, "mt-0.5", "truncate", "text-xs"], [1, "text-6xl"]], template: function ZoneListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "input", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275listener("ngModelChange", function ZoneListComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, ZoneListComponent_Conditional_6_Template, 2, 3, "cdk-tree", 4)(7, ZoneListComponent_Conditional_7_Template, 6, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.search_enabled())("placeholder", \u0275\u0275pipeBind2(4, 5, "SIGNAGE_MANAGER.SEARCH_IN_ZONE", \u0275\u0275pureFunction1(11, _c03, ctx.selected()?.display_name || ctx.selected()?.name || "")))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 8, "SIGNAGE_MANAGER.SEARCH_IN_ZONE", \u0275\u0275pureFunction1(13, _c03, ctx.selected()?.display_name || ctx.selected()?.name || "")));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.tree_nodes().length ? 6 : 7);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      CdkTreeModule,
      CdkTreeNodeDef,
      CdkTreeNodePadding,
      CdkTree,
      CdkTreeNode,
      IconComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.zone-tree[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=zone-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneListComponent, [{
    type: Component,
    args: [{ selector: "zone-list", template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [disabled]="!search_enabled()"
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                                | translate
                                    : {
                                          name:
                                              selected()?.display_name ||
                                              selected()?.name ||
                                              '',
                                      }
                        "
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_IN_ZONE'
                                | translate
                                    : {
                                          name:
                                              selected()?.display_name ||
                                              selected()?.name ||
                                              '',
                                      }
                        "
                    />
                </mat-form-field>
            </div>

            @if (tree_nodes().length) {
                <cdk-tree
                    class="zone-tree"
                    [dataSource]="flat_tree_nodes()"
                    [levelAccessor]="levelAccessor"
                    [trackBy]="trackByNode"
                >
                    <cdk-tree-node
                        *cdkTreeNodeDef="let node"
                        cdkTreeNodePadding
                        [cdkTreeNodePadding]="node.level"
                        [cdkTreeNodePaddingIndent]="8"
                        class="border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2"
                        [class.bg-primary]="selected()?.id === node.zone.id"
                        [class.text-primary-content]="
                            selected()?.id === node.zone.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== node.zone.id
                        "
                    >
                        <div
                            class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                            [style.width]="0.25 * node.level + 'rem'"
                            [style.opacity]="0.1 * node.level"
                        ></div>
                        @if (
                            childCount(node) > 0 &&
                            !(show_search_results() && node.level === 0)
                        ) {
                            <button
                                type="button"
                                class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                [attr.aria-label]="
                                    (isExpanded(node)
                                        ? 'SIGNAGE_MANAGER.COLLAPSE_ZONE'
                                        : 'SIGNAGE_MANAGER.EXPAND_ZONE'
                                    )
                                        | translate
                                            : {
                                                  name:
                                                      node.zone.display_name ||
                                                      node.zone.name,
                                              }
                                "
                                (click)="
                                    onExpandedChange(node, !isExpanded(node));
                                    $event.stopPropagation()
                                "
                            >
                                <icon class="text-xl">
                                    {{
                                        isExpanded(node)
                                            ? 'expand_more'
                                            : 'chevron_right'
                                    }}
                                </icon>
                            </button>
                        } @else {
                            <div class="min-w-8"></div>
                        }
                        <a
                            matRipple
                            class="flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-md py-3 text-left no-underline transition-colors"
                            [routerLink]="['/zones', node.zone.id]"
                            queryParamsHandling="merge"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.OPEN_ZONE'
                                    | translate
                                        : {
                                              name:
                                                  node.zone.display_name ||
                                                  node.zone.name,
                                          }
                            "
                            (click)="selectZone(node.zone)"
                        >
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-2">
                                    <div
                                        class="min-w-0 flex-1 truncate font-medium"
                                    >
                                        {{
                                            node.zone.display_name ||
                                                node.zone.name
                                        }}
                                    </div>
                                    @if (childCount(node) > 0) {
                                        <span
                                            class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                        >
                                            {{ childCount(node) }}
                                        </span>
                                    }
                                    @if (node.children_loading) {
                                        <icon class="animate-spin text-lg"
                                            >autorenew</icon
                                        >
                                    }
                                </div>
                                @if (node.zone.description) {
                                    <div
                                        class="mt-0.5 truncate text-xs"
                                        [class.opacity-70]="
                                            selected()?.id !== node.zone.id
                                        "
                                        [class.opacity-90]="
                                            selected()?.id === node.zone.id
                                        "
                                    >
                                        {{ node.zone.description }}
                                    </div>
                                }
                            </div>
                        </a>
                    </cdk-tree-node>
                </cdk-tree>
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">layers</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_ZONES' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      CdkTreeModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;2c33652c16b5dcd3874c8129805436130ea38e934e2511f78004fd9a8bd9ca8c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/zones/zone-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.zone-tree {\n  background: transparent;\n}\n/*# sourceMappingURL=zone-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneListComponent, { className: "ZoneListComponent", filePath: "apps/signage-manager/src/app/zones/zone-list.component.ts", lineNumber: 222 });
})();

// apps/signage-manager/src/app/zones/zones.component.ts
var _c04 = (a0) => ({ count: a0 });
function ZonesSectionComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_zone().description, " ");
  }
}
function ZonesSectionComponent_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewTab("templates"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "templates")("border-b-2", ctx_r1.view_tab() === "templates")("text-primary", ctx_r1.view_tab() === "templates")("opacity-60", ctx_r1.view_tab() !== "templates");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "templates");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 10, "SIGNAGE_MANAGER.NAV_TEMPLATES"), " ");
  }
}
function ZonesSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectZone());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "icon", 10);
    \u0275\u0275text(6, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "h4", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ZonesSectionComponent_Conditional_7_Conditional_10_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "button", 15);
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("playlists"));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("displays"));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ZonesSectionComponent_Conditional_7_Conditional_19_Template, 3, 12, "button", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 25, "SIGNAGE_MANAGER.BACK_TO_ZONES"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_zone().display_name || ctx_r1.selected_zone().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_zone().description ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 27, "SIGNAGE_MANAGER.ZONE_DETAILS_TABS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "playlists")("border-b-2", ctx_r1.view_tab() === "playlists")("text-primary", ctx_r1.view_tab() === "playlists")("opacity-60", ctx_r1.view_tab() !== "playlists");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "playlists");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(15, 29, "SIGNAGE_MANAGER.PLAYLISTS_COUNT", \u0275\u0275pureFunction1(37, _c04, ctx_r1.playlist_count()), ctx_r1.playlist_count()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "displays")("border-b-2", ctx_r1.view_tab() === "displays")("text-primary", ctx_r1.view_tab() === "displays")("opacity-60", ctx_r1.view_tab() !== "displays");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "displays");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(18, 33, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(39, _c04, ctx_r1.display_count()), ctx_r1.display_count()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.templates_enabled() ? 19 : -1);
  }
}
var TAB_QUERY_PARAM = "tab";
function parseZoneTab(value) {
  if (value === "displays" || value === "templates")
    return value;
  return "playlists";
}
var ZonesSectionComponent = class _ZonesSectionComponent {
  constructor() {
    this._service = inject(SignageService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.id = input(
      "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tab = input(
      null,
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.templates_enabled = this._service.templates_enabled;
    this.view_tab = signal(
      "playlists",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = this._service.selected_zone;
    this._zones = this._service.all_zones;
    this._playlists = this._service.playlists;
    this._displays = this._service.displays;
    this.playlist_count = computed(
      () => {
        const zone = this.selected_zone();
        if (!zone)
          return 0;
        return this._playlists().filter((p) => zone.playlists?.includes(p.id)).length;
      },
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_count = computed(
      () => {
        const zone = this.selected_zone();
        if (!zone)
          return 0;
        return this._displays().filter((d) => d.zones?.includes(zone.id)).length;
      },
      ...ngDevMode ? [{ debugName: "display_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._route_resolved = false;
    effect(() => {
      const route_tab = parseZoneTab(this.tab());
      const available_tab = route_tab === "templates" && !this.templates_enabled() ? "playlists" : route_tab;
      if (available_tab !== this.view_tab()) {
        this.view_tab.set(available_tab);
      }
    });
    effect(() => {
      const id = this.id();
      const list = this._zones();
      if (!list.length)
        return;
      if (id) {
        const match = list.find((z) => z.id === id);
        if (match && this._service.selected_zone()?.id !== match.id) {
          this._service.selected_zone.set(match);
        }
        this._route_resolved = true;
      } else if (this._route_resolved) {
        this._service.selected_zone.set(null);
      }
    });
  }
  deselectZone() {
    this._service.selected_zone.set(null);
    this._router.navigate(["/zones"], {});
  }
  setViewTab(tab) {
    if (tab === this.view_tab())
      return;
    this.view_tab.set(tab);
    void this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { [TAB_QUERY_PARAM]: tab },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  static {
    this.\u0275fac = function ZonesSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZonesSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZonesSectionComponent, selectors: [["zones-section"]], inputs: { id: [1, "id"], tab: [1, "tab"] }, decls: 10, vars: 6, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], [1, "h-1/2", "flex-1", 3, "activeTab"], [1, "bg-base-100", "border-base-300", "mx-2", "flex", "items-center", "gap-2", "rounded-b-lg", "border", "px-4", "py-3"], ["icon", "", "type", "button", "matRipple", "", 1, "sm:hidden", 3, "click"], [1, "shrink-0", "text-2xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-medium"], [1, "text-base-content/80", "truncate", "text-sm"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "mt-2", "flex", "overflow-hidden", "rounded-lg", "border"], ["type", "button", "role", "tab", "aria-controls", "zone-playlists-panel", "id", "zone-playlists-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "zone-displays-panel", "id", "zone-displays-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "zone-templates-panel", "id", "zone-templates-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "border-primary", "border-b-2", "text-primary", "opacity-60"], ["type", "button", "role", "tab", "aria-controls", "zone-templates-panel", "id", "zone-templates-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"]], template: function ZonesSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "zone-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "zone-list", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, ZonesSectionComponent_Conditional_7_Template, 20, 41);
        \u0275\u0275element(8, "zone-content", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(9, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_zone());
        \u0275\u0275advance();
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_zone());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_zone() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("activeTab", ctx.view_tab());
      }
    }, dependencies: [
      NavSidebarComponent,
      NavFooterComponent,
      ZoneHeaderComponent,
      ZoneListComponent,
      ZoneContentComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=zones.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonesSectionComponent, [{
    type: Component,
    args: [{ selector: "zones-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <zone-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <zone-list
                        [class.mobile-hidden]="!!selected_zone()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_zone()"
                    >
                        @if (selected_zone()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-4 py-3"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectZone()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_ZONES'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <icon class="shrink-0 text-2xl opacity-60"
                                    >layers</icon
                                >
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-lg font-medium">
                                        {{
                                            selected_zone().display_name ||
                                                selected_zone().name
                                        }}
                                    </h4>
                                    @if (selected_zone().description) {
                                        <div
                                            class="text-base-content/80 truncate text-sm"
                                        >
                                            {{ selected_zone().description }}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ZONE_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'playlists'
                                    "
                                    (click)="setViewTab('playlists')"
                                    [attr.aria-selected]="
                                        view_tab() === 'playlists'
                                    "
                                    aria-controls="zone-playlists-panel"
                                    id="zone-playlists-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                                            | translate
                                                : { count: playlist_count() }
                                                : playlist_count()
                                    }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'displays'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'displays'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'displays'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'displays'
                                    "
                                    (click)="setViewTab('displays')"
                                    [attr.aria-selected]="
                                        view_tab() === 'displays'
                                    "
                                    aria-controls="zone-displays-panel"
                                    id="zone-displays-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                            | translate
                                                : { count: display_count() }
                                                : display_count()
                                    }}
                                </button>
                                @if (templates_enabled()) {
                                    <button
                                        type="button"
                                        role="tab"
                                        class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                        [class.border-primary]="
                                            view_tab() === 'templates'
                                        "
                                        [class.border-b-2]="
                                            view_tab() === 'templates'
                                        "
                                        [class.text-primary]="
                                            view_tab() === 'templates'
                                        "
                                        [class.opacity-60]="
                                            view_tab() !== 'templates'
                                        "
                                        (click)="setViewTab('templates')"
                                        [attr.aria-selected]="
                                            view_tab() === 'templates'
                                        "
                                        aria-controls="zone-templates-panel"
                                        id="zone-templates-tab"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.NAV_TEMPLATES'
                                                | translate
                                        }}
                                    </button>
                                }
                            </div>
                        }
                        <zone-content
                            class="h-1/2 flex-1"
                            [activeTab]="view_tab()"
                        />
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      ZoneHeaderComponent,
      ZoneListComponent,
      ZoneContentComponent,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8eac906e2c3493bde876d274a7a1452ede86c23d5ec71ac8ae62cdbdcc4a851c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/zones/zones.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=zones.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZonesSectionComponent, { className: "ZonesSectionComponent", filePath: "apps/signage-manager/src/app/zones/zones.component.ts", lineNumber: 216 });
})();
export {
  ZonesSectionComponent
};
//# sourceMappingURL=zones.component-TDPJI4Y4.js.map
