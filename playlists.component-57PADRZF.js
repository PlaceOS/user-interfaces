import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-S7XHSIXD.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-UVWI7PAK.js";
import {
  PlaylistThumbnailComponent
} from "./chunk-277XOJSC.js";
import {
  GroupBreadcrumbsComponent,
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-Q7SQZLCT.js";
import {
  ActivatedRoute,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  IntersectDirective,
  Is,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  MediaDurationPipe,
  MediaThumbnailComponent,
  NgControlStatus,
  NgModel,
  Router,
  RouterLink,
  SignageService,
  SignageSharedWithComponent,
  TranslatePipe,
  ViewChildren,
  afterRenderEffect,
  ar,
  computed,
  effect,
  fromUnixTime,
  i18n,
  inject,
  input,
  linkedSignal,
  playlistScheduleLabel,
  playlistScheduleNextPlayLabels,
  setClassMetadata,
  signal,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-2FXQT5UN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/playlists/playlist-header.component.ts
var _c0 = (a0) => ({ count: a0 });
function PlaylistHeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function PlaylistHeaderComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPlaylist());
    });
    \u0275\u0275elementStart(2, "icon", 8);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "SIGNAGE_MANAGER.NEW_PLAYLIST"));
  }
}
var PlaylistHeaderComponent = class _PlaylistHeaderComponent {
  constructor() {
    this._service = inject(SignageService);
    this.total_count = computed(
      () => this._service.filtered_playlists().length,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_create = this._service.can_create;
  }
  addPlaylist() {
    this._service.addPlaylist();
  }
  static {
    this.\u0275fac = function PlaylistHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistHeaderComponent, selectors: [["playlist-header"]], decls: 12, vars: 10, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "shrink-0", "rounded-lg", "px-4"], ["btn", "", "type", "button", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "shrink-0", "rounded-lg", "px-4", 3, "click"], [1, "mr-2", "text-2xl"]], template: function PlaylistHeaderComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(11, PlaylistHeaderComponent_Conditional_11_Template, 7, 6, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.PLAYLISTS_PAGE_TITLE"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(8, _c0, ctx.total_count())), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.can_create() ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      GroupBreadcrumbsComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistHeaderComponent, [{
    type: Component,
    args: [{
      selector: "playlist-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.PLAYLISTS_PAGE_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_create()) {
                <button
                    btn
                    type="button"
                    matRipple
                    class="bg-secondary text-secondary-content h-12 shrink-0 rounded-lg px-4"
                    (click)="addPlaylist()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST' | translate
                    "
                >
                    <icon class="mr-2 text-2xl">add</icon>
                    <div>{{ 'SIGNAGE_MANAGER.NEW_PLAYLIST' | translate }}</div>
                </button>
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistHeaderComponent, { className: "PlaylistHeaderComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-header.component.ts", lineNumber: 52 });
})();

// apps/signage-manager/src/app/playlists/playlist-item-details.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c1 = (a0) => ["/zones", a0];
var _c2 = (a0) => ({ name: a0 });
var _c3 = (a0) => ["/displays", a0];
var _forTrack0 = ($index, $item) => $item.id;
function PlaylistItemDetailsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().description, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.ENABLED"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.ORIENTATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().orientation || \u0275\u0275pipeBind1(6, 4, "COMMON.LOCATION_UNSPECIFIED"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.VALID_FROM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r1.valid_from(), "longDate"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.EXPIRES_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx_r1.valid_until(), "longDate"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(schedule_r3);
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const play_time_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", play_time_r4, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275repeaterCreate(5, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_6_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26);
    \u0275\u0275repeaterCreate(12, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_For_13_Template, 2, 1, "div", 27, \u0275\u0275repeaterTrackByIdentity, false, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_ForEmpty_14_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.SCHEDULE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.schedule_labels());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "SIGNAGE_MANAGER.NEXT_5_PLAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.next_play_sessions());
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SIGNAGE_MANAGER.PLAY_COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().play_count, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(5, _c02, ctx_r1.playlist_zones().length), ctx_r1.playlist_zones().length), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addZone());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_ZONE_TO_PLAYLIST_ARIA"));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r6.description, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const zone_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeZone($event, zone_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const zone_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.REMOVE_ZONE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.REMOVE_ZONE_FROM_PLAYLIST", \u0275\u0275pureFunction1(7, _c2, zone_r6.display_name || zone_r6.name)));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 32);
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "div", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_8_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Conditional_9_Template, 5, 9, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, zone_r6.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.OPEN_ZONE", \u0275\u0275pureFunction1(10, _c2, zone_r6.display_name || zone_r6.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", zone_r6.display_name || zone_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(zone_r6.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 9 : -1);
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_For_1_Template, 10, 12, "div", 30, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.playlist_zones());
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 38);
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_ZONES_USE_PLAYLIST"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(5, _c02, ctx_r1.playlist_displays().length), ctx_r1.playlist_displays().length), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addDisplay());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.ADD_DISPLAY_TO_PLAYLIST_ARIA"));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r9.description, " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const display_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeDisplay($event, display_r9));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.REMOVE_DISPLAY"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.REMOVE_DISPLAY_FROM_PLAYLIST", \u0275\u0275pureFunction1(7, _c2, display_r9.display_name || display_r9.name)));
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 31);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 32);
    \u0275\u0275text(4, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "div", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_8_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Conditional_9_Template, 5, 9, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c3, display_r9.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.OPEN_DISPLAY", \u0275\u0275pureFunction1(10, _c2, display_r9.display_name || display_r9.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", display_r9.display_name || display_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r9.description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 9 : -1);
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_For_1_Template, 10, 12, "div", 30, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.playlist_displays());
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 38);
    \u0275\u0275text(2, "tv_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_DISPLAYS_USE_PLAYLIST"), " ");
  }
}
function PlaylistItemDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 2);
    \u0275\u0275listener("selectedIndexChange", function PlaylistItemDetailsComponent_Conditional_0_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_tab.set($event));
    });
    \u0275\u0275elementStart(2, "mat-tab", 3);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, PlaylistItemDetailsComponent_Conditional_0_Conditional_12_Template, 6, 4, "div", 6);
    \u0275\u0275elementStart(13, "div")(14, "div", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, PlaylistItemDetailsComponent_Conditional_0_Conditional_17_Template, 3, 3, "span", 9)(18, PlaylistItemDetailsComponent_Conditional_0_Conditional_18_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 7);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "div", 7);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 12);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "div", 7);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 11);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, PlaylistItemDetailsComponent_Conditional_0_Conditional_40_Template, 7, 6, "div");
    \u0275\u0275elementStart(41, "div")(42, "div", 7);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 11);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(47, PlaylistItemDetailsComponent_Conditional_0_Conditional_47_Template, 7, 7, "div");
    \u0275\u0275conditionalCreate(48, PlaylistItemDetailsComponent_Conditional_0_Conditional_48_Template, 7, 7, "div");
    \u0275\u0275conditionalCreate(49, PlaylistItemDetailsComponent_Conditional_0_Conditional_49_Template, 15, 7, "div");
    \u0275\u0275conditionalCreate(50, PlaylistItemDetailsComponent_Conditional_0_Conditional_50_Template, 6, 4, "div");
    \u0275\u0275element(51, "signage-shared-with", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "mat-tab");
    \u0275\u0275template(53, PlaylistItemDetailsComponent_Conditional_0_ng_template_53_Template, 2, 7, "ng-template", 14);
    \u0275\u0275elementStart(54, "div", 15)(55, "div", 16)(56, "h5", 17)(57, "icon", 18);
    \u0275\u0275text(58, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(61, PlaylistItemDetailsComponent_Conditional_0_Conditional_61_Template, 5, 6, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 20);
    \u0275\u0275conditionalCreate(63, PlaylistItemDetailsComponent_Conditional_0_Conditional_63_Template, 2, 0)(64, PlaylistItemDetailsComponent_Conditional_0_Conditional_64_Template, 6, 3, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "mat-tab");
    \u0275\u0275template(66, PlaylistItemDetailsComponent_Conditional_0_ng_template_66_Template, 2, 7, "ng-template", 14);
    \u0275\u0275elementStart(67, "div", 15)(68, "div", 16)(69, "h5", 17)(70, "icon", 18);
    \u0275\u0275text(71, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(74, PlaylistItemDetailsComponent_Conditional_0_Conditional_74_Template, 5, 6, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 20);
    \u0275\u0275conditionalCreate(76, PlaylistItemDetailsComponent_Conditional_0_Conditional_76_Template, 2, 0)(77, PlaylistItemDetailsComponent_Conditional_0_Conditional_77_Template, 6, 3, "div", 21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("selectedIndex", ctx_r1.active_tab());
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 30, "COMMON.DETAILS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 32, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().description ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 34, "COMMON.STATUS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist().enabled ? 17 : 18);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 36, "SIGNAGE_MANAGER.PLAYBACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 38, ctx_r1.playlist().random ? "SIGNAGE_MANAGER.SHUFFLE" : "SIGNAGE_MANAGER.SEQUENTIAL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 40, "SIGNAGE_MANAGER.DEFAULT_DURATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 42, ctx_r1.playlist().default_duration / 1e3), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 44, "SIGNAGE_MANAGER.DEFAULT_ANIMATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 46, ctx_r1.animation_label()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist().orientation ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 48, "SIGNAGE_MANAGER.TAB_ITEMS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().valid_from ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().valid_until ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.playlist().distribution ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.playlist().play_count ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("item_id", ctx_r1.playlist().id)("group_id", ctx_r1.selected_group_id())("allow_unshare", ctx_r1.can_update())("compact_label", true);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(60, 50, "SIGNAGE_MANAGER.ZONES_COUNT", \u0275\u0275pureFunction1(58, _c02, ctx_r1.playlist_zones().length), ctx_r1.playlist_zones().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 61 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist_zones().length > 0 ? 63 : 64);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(73, 54, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(60, _c02, ctx_r1.playlist_displays().length), ctx_r1.playlist_displays().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 74 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist_displays().length > 0 ? 76 : 77);
  }
}
function PlaylistItemDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 39);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.SELECT_PLAYLIST_DETAILS"), " ");
  }
}
var DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
var WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function matchesCronPart(value, cron_part) {
  if (cron_part === "*")
    return true;
  if (cron_part.includes(",")) {
    return cron_part.split(",").some((item) => matchesCronPart(value, item));
  }
  if (cron_part.includes("/")) {
    const [base, step] = cron_part.split("/");
    return !!+step && value % +step === 0 && matchesCronPart(value, base);
  }
  if (cron_part.includes("-")) {
    const [start, end] = cron_part.split("-").map(Number);
    return value >= start && value <= end;
  }
  return Number(cron_part) === value;
}
function isCronMonthlyWeekday(day_part, weekday_part) {
  return /^\d+-\d+(,\d+-\d+)*$/.test(day_part || "") && weekday_part !== "*";
}
function doesCronMatchDate(cron, date) {
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5)
    return false;
  const [minute, hour, day, month, day_of_week] = parts;
  if (!matchesCronPart(date.getMinutes(), minute))
    return false;
  if (!matchesCronPart(date.getHours(), hour))
    return false;
  if (!matchesCronPart(date.getMonth() + 1, month))
    return false;
  const day_matches = matchesCronPart(date.getDate(), day);
  const weekday_matches = matchesCronPart(date.getDay(), day_of_week);
  if (day === "*" && day_of_week === "*")
    return true;
  if (day !== "*" && day_of_week === "*")
    return day_matches;
  if (day === "*" && day_of_week !== "*")
    return weekday_matches;
  if (isCronMonthlyWeekday(day, day_of_week)) {
    return day_matches && weekday_matches;
  }
  return day_matches || weekday_matches;
}
function ordinal(value) {
  if (value >= 11 && value <= 13)
    return `${value}th`;
  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}
function formatCronTime(hour_part, minute_part) {
  const date = /* @__PURE__ */ new Date();
  date.setHours(+hour_part || 0, +minute_part || 0, 0, 0);
  return date.toLocaleTimeString(void 0, {
    hour: "numeric",
    minute: "2-digit"
  });
}
function durationLabel(duration_minutes) {
  if (!duration_minutes)
    return "one playlist pass";
  if (duration_minutes < 60) {
    return `${duration_minutes} minute${duration_minutes === 1 ? "" : "s"}`;
  }
  if (duration_minutes % 60 === 0) {
    const hours2 = duration_minutes / 60;
    return `${hours2} hour${hours2 === 1 ? "" : "s"}`;
  }
  const hours = Math.floor(duration_minutes / 60);
  const minutes = duration_minutes % 60;
  return `${hours} hr ${minutes} min`;
}
function parseCronList(value, min, max) {
  const values = /* @__PURE__ */ new Set();
  if (!value || value === "*")
    return [];
  for (const part of value.split(",")) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      if (start < min || end > max || start > end)
        return [];
      for (let item = start; item <= end; item++)
        values.add(item);
    } else {
      const item = Number(part);
      if (item < min || item > max)
        return [];
      values.add(item);
    }
  }
  return [...values].sort((a, b) => a - b);
}
function listText(values) {
  if (values.length <= 1)
    return values[0] || "";
  if (values.length === 2)
    return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")} and ${values.at(-1)}`;
}
function weekOfMonthLabel(day_part) {
  const [start, end] = day_part.split("-").map(Number);
  if (start === 1 && end === 7)
    return "1st";
  if (start === 8 && end === 14)
    return "2nd";
  if (start === 15 && end === 21)
    return "3rd";
  if (start === 22 && end === 28)
    return "4th";
  if (start === 29 && end === 31)
    return "5th";
  return "";
}
function weekOfMonthLabels(day_part) {
  const labels = day_part.split(",").map((range) => weekOfMonthLabel(range));
  return labels.every((label) => label) ? labels : [];
}
function humanizeCronSchedule(cron, duration_minutes) {
  const parts = (cron || "0 0 * * *").trim().split(/\s+/);
  if (parts.length !== 5)
    return `Custom schedule (${cron})`;
  const [minute, hour, day, month, day_of_week] = parts;
  const duration = durationLabel(duration_minutes);
  const suffix = ` for ${duration}`;
  if (month !== "*")
    return `Custom schedule (${cron})`;
  const minute_interval = /^\*\/(\d+)$/.exec(minute)?.[1];
  if (minute === "*" && hour === "*" && day === "*" && day_of_week === "*") {
    return `Every minute${suffix}`;
  }
  if (minute_interval && hour === "*" && day === "*" && day_of_week === "*") {
    return `Every ${minute_interval} minutes${suffix}`;
  }
  const hour_interval = /^\*\/(\d+)$/.exec(hour)?.[1];
  if (minute === "0" && hour === "*" && day === "*" && day_of_week === "*") {
    return `Every hour${suffix}`;
  }
  if (minute === "0" && hour_interval && day === "*" && day_of_week === "*") {
    return `Every ${hour_interval} hours${suffix}`;
  }
  if (!/^\d+$/.test(minute) || !/^\d+$/.test(hour)) {
    return `Custom schedule (${cron})`;
  }
  const time = formatCronTime(hour, minute);
  if (day === "*" && day_of_week === "*") {
    return `Every day at ${time}${suffix}`;
  }
  if (day === "*" && day_of_week === "1-5") {
    return `Weekdays at ${time}${suffix}`;
  }
  if (day === "*" && day_of_week !== "*") {
    const weekdays = parseCronList(day_of_week, 0, 6).map((day_value) => WEEKDAY_NAMES[day_value]);
    return weekdays.length ? `Every ${listText(weekdays)} at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  if (day !== "*" && day_of_week === "*") {
    const days = parseCronList(day, 1, 31).map((day_value) => ordinal(day_value));
    return days.length ? `On the ${listText(days)} of each month at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  if (isCronMonthlyWeekday(day, day_of_week)) {
    const weeks = weekOfMonthLabels(day);
    const weekdays = parseCronList(day_of_week, 0, 6).map((day_value) => WEEKDAY_NAMES[day_value]);
    return weeks.length && weekdays.length ? `On the ${listText(weeks)} ${listText(weekdays)} of each month at ${time}${suffix}` : `Custom schedule (${cron})`;
  }
  return `Custom schedule (${cron})`;
}
function formatPlayDateTime(date) {
  return date.toLocaleString(void 0, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayTime(date) {
  return date.toLocaleTimeString(void 0, {
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayDateTimeRange(start, duration_minutes) {
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + Math.max(0, duration_minutes || 0));
  if (duration_minutes > 0)
    end.setSeconds(end.getSeconds() - 1);
  const end_text = start.toDateString() === end.toDateString() ? formatPlayTime(end) : formatPlayDateTime(end);
  return `${formatPlayDateTime(start)} \u2013 ${end_text}`;
}
function nextCronPlayDates(cron, count) {
  const result = [];
  if (!cron?.trim())
    return result;
  const date = /* @__PURE__ */ new Date();
  date.setSeconds(0, 0);
  date.setMinutes(date.getMinutes() + 1);
  const end = new Date(date);
  end.setFullYear(end.getFullYear() + 2);
  while (date <= end && result.length < count) {
    if (doesCronMatchDate(cron, date))
      result.push(new Date(date));
    date.setMinutes(date.getMinutes() + 1);
  }
  return result;
}
function playlistSchedules(playlist) {
  const legacy_playlist = playlist;
  if (playlist.schedules?.length)
    return playlist.schedules;
  return [
    {
      play_at: legacy_playlist.play_at,
      play_cron: legacy_playlist.play_cron || "0 0 * * *",
      play_period: legacy_playlist.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES,
      play_takeover: !!legacy_playlist.play_takeover
    }
  ];
}
function schedulePeriod(schedule) {
  return Number.isFinite(schedule.play_period) ? schedule.play_period || 0 : DEFAULT_PLAY_PERIOD_MINUTES;
}
function scheduleLabel(schedule) {
  const period = schedulePeriod(schedule);
  if (schedule.play_at) {
    const date = fromUnixTime(schedule.play_at);
    return `Plays once on ${date.toLocaleString()} for ${durationLabel(period)}`;
  }
  return `${humanizeCronSchedule(schedule.play_cron || "0 0 * * *", period)}${schedule.play_takeover ? " \xB7 takeover" : ""}`;
}
function nextSchedulePlaySessions(schedule, count) {
  const period = schedulePeriod(schedule);
  if (schedule.play_at) {
    const start = fromUnixTime(schedule.play_at);
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + Math.max(0, period || 0));
    if (period > 0)
      end.setSeconds(end.getSeconds() - 1);
    return end >= /* @__PURE__ */ new Date() ? [{ start, period }] : [];
  }
  return nextCronPlayDates(schedule.play_cron || "0 0 * * *", count).map((start) => ({ start, period }));
}
var PlaylistItemDetailsComponent = class _PlaylistItemDetailsComponent {
  constructor() {
    this._service = inject(SignageService);
    this.playlist = this._service.selected_playlist;
    this.active_tab = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "active_tab" } : (
      /* istanbul ignore next */
      {}
    )), {
      source: this.playlist,
      computation: (playlist, previous) => previous && playlist?.id === previous.source?.id ? previous.value : 0
    }));
    this._items = this._service.playlist_media_items;
    this._displays = this._service.displays;
    this._zones = this._service.zones;
    this.item_count = computed(
      () => this._items().length,
      ...ngDevMode ? [{ debugName: "item_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_update = this._service.can_update;
    this.selected_group_id = computed(
      () => this._service.selected_group()?.group.id || "",
      ...ngDevMode ? [{ debugName: "selected_group_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_displays = computed(
      () => {
        const pl = this.playlist();
        if (!pl)
          return [];
        return this._displays().filter((d) => d.playlists?.includes(pl.id));
      },
      ...ngDevMode ? [{ debugName: "playlist_displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_zones = computed(
      () => {
        const pl = this.playlist();
        if (!pl)
          return [];
        return this._zones().filter((z) => z.playlists?.includes(pl.id));
      },
      ...ngDevMode ? [{ debugName: "playlist_zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.animation_label = computed(
      () => {
        const pl = this.playlist();
        if (!pl)
          return "COMMON.DEFAULT";
        switch (pl.default_animation) {
          case Is.Cut:
            return "SIGNAGE_MANAGER.ANIM_CUT";
          case Is.CrossFade:
            return "SIGNAGE_MANAGER.ANIM_CROSS_FADE";
          case Is.SlideTop:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_TOP";
          case Is.SlideLeft:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT";
          case Is.SlideRight:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT";
          case Is.SlideBottom:
            return "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM";
          default:
            return "COMMON.DEFAULT";
        }
      },
      ...ngDevMode ? [{ debugName: "animation_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid_from = computed(
      () => {
        const pl = this.playlist();
        if (!pl?.valid_from)
          return "";
        return pl.valid_from * 1e3;
      },
      ...ngDevMode ? [{ debugName: "valid_from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid_until = computed(
      () => {
        const pl = this.playlist();
        if (!pl?.valid_until)
          return "";
        return pl.valid_until * 1e3;
      },
      ...ngDevMode ? [{ debugName: "valid_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schedule_labels = computed(
      () => {
        const pl = this.playlist();
        if (!pl || pl.distribution)
          return [];
        return playlistSchedules(pl).map((schedule) => scheduleLabel(schedule));
      },
      ...ngDevMode ? [{ debugName: "schedule_labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next_play_sessions = computed(
      () => {
        const pl = this.playlist();
        if (!pl || pl.distribution)
          return [];
        return playlistSchedules(pl).flatMap((schedule) => nextSchedulePlaySessions(schedule, 5)).sort((a, b) => a.start.getTime() - b.start.getTime()).slice(0, 5).map((session) => formatPlayDateTimeRange(session.start, session.period));
      },
      ...ngDevMode ? [{ debugName: "next_play_sessions" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  addDisplay() {
    const playlist = this.playlist();
    if (playlist)
      this._service.addDisplayToPlaylist(playlist);
  }
  addZone() {
    const playlist = this.playlist();
    if (playlist)
      this._service.addZoneToPlaylist(playlist);
  }
  removeDisplay(event, display) {
    event.preventDefault();
    event.stopPropagation();
    const playlist = this.playlist();
    if (playlist)
      this._service.removeDisplayFromPlaylist(playlist, display);
  }
  removeZone(event, zone) {
    event.preventDefault();
    event.stopPropagation();
    const playlist = this.playlist();
    if (playlist)
      this._service.removeZoneFromPlaylist(playlist, zone);
  }
  static {
    this.\u0275fac = function PlaylistItemDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistItemDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistItemDetailsComponent, selectors: [["playlist-item-details"]], decls: 2, vars: 1, consts: [[1, "border-base-300", "flex", "h-full", "min-w-60", "flex-col", "overflow-hidden", "border-l", "lg:w-84"], [1, "border-base-300", "text-base-content/70", "flex", "min-w-60", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "border-l", "p-8"], [1, "flex-1", "overflow-hidden", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], [1, "h-full", "overflow-auto"], [1, "flex", "w-full", "flex-col", "gap-2", "p-4"], [1, "w-full"], [1, "text-base-content/70", "mb-1", "text-xs", "font-medium", "tracking-wider", "uppercase"], [1, "text-sm", "font-medium"], [1, "bg-success", "text-success-content", "rounded", "px-2", "py-1", "text-xs", "font-bold", "uppercase"], [1, "bg-warning", "text-warning-content", "rounded", "px-2", "py-1", "text-xs", "font-bold", "uppercase"], [1, "text-sm"], [1, "font-mono", "text-sm"], ["type", "playlists", 1, "mt-2", 3, "item_id", "group_id", "allow_unshare", "compact_label"], ["mat-tab-label", ""], [1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], [1, "min-h-0", "flex-1", "gap-2", "overflow-auto", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-sm", "capitalize"], [1, "space-y-1", "text-sm"], [1, "mt-2"], [1, "text-base-content/60", "mb-1", "text-xs", "font-medium", "tracking-wide", "uppercase"], [1, "text-base-content/80", "space-y-0.5", "font-mono", "text-xs", "leading-tight"], [1, "truncate"], [1, "text-base-content/60"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "pl-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-lg", "p-1", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "text-base-content/70", "truncate", "text-xs"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 1, "m-1", "text-sm", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 1, "m-1", "text-sm", 3, "click", "matTooltip"], [1, "text-4xl"], [1, "text-6xl"]], template: function PlaylistItemDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PlaylistItemDetailsComponent_Conditional_0_Template, 78, 62, "div", 0)(1, PlaylistItemDetailsComponent_Conditional_1_Template, 6, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.playlist() ? 0 : 1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatTabsModule,
      MatTabLabel,
      MatTab,
      MatTabGroup,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      IconComponent,
      SignageSharedWithComponent,
      DatePipe,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-item-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistItemDetailsComponent, [{
    type: Component,
    args: [{ selector: "playlist-item-details", template: `
        @if (playlist()) {
            <div
                class="border-base-300 flex h-full min-w-60 flex-col overflow-hidden border-l lg:w-84"
            >
                <mat-tab-group
                    class="flex-1 overflow-hidden"
                    [selectedIndex]="active_tab()"
                    (selectedIndexChange)="active_tab.set($event)"
                >
                    <mat-tab [label]="'COMMON.DETAILS' | translate">
                        <div class="h-full overflow-auto">
                            <div class="flex w-full flex-col gap-2 p-4">
                                <div class="w-full">
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'FORM.NAME' | translate }}
                                    </div>
                                    <div class="text-sm font-medium">
                                        {{ playlist().name }}
                                    </div>
                                </div>
                                @if (playlist().description) {
                                    <div class="w-full">
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'COMMON.DESCRIPTION' | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().description }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'COMMON.STATUS' | translate }}
                                    </div>
                                    @if (playlist().enabled) {
                                        <span
                                            class="bg-success text-success-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.ENABLED' | translate }}
                                        </span>
                                    } @else {
                                        <span
                                            class="bg-warning text-warning-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.DISABLED' | translate }}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.PLAYBACK'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{
                                            (playlist().random
                                                ? 'SIGNAGE_MANAGER.SHUFFLE'
                                                : 'SIGNAGE_MANAGER.SEQUENTIAL'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_DURATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-mono text-sm">
                                        {{
                                            playlist().default_duration / 1000
                                                | mediaDuration
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_ANIMATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ animation_label() | translate }}
                                    </div>
                                </div>
                                @if (playlist().orientation) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.ORIENTATION'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm capitalize">
                                            {{
                                                playlist().orientation ||
                                                    ('COMMON.LOCATION_UNSPECIFIED'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TAB_ITEMS'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ item_count() }}
                                    </div>
                                </div>
                                @if (playlist().valid_from) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.VALID_FROM'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_from() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (playlist().valid_until) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{ 'FORM.EXPIRES_AT' | translate }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_until() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (!playlist().distribution) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.SCHEDULE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="space-y-1 text-sm">
                                            @for (
                                                schedule of schedule_labels();
                                                track schedule
                                            ) {
                                                <div>{{ schedule }}</div>
                                            }
                                        </div>
                                        <div class="mt-2">
                                            <div
                                                class="text-base-content/60 mb-1 text-xs font-medium tracking-wide uppercase"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.NEXT_5_PLAYS'
                                                        | translate
                                                }}
                                            </div>
                                            <div
                                                class="text-base-content/80 space-y-0.5 font-mono text-xs leading-tight"
                                            >
                                                @for (
                                                    play_time of next_play_sessions();
                                                    track play_time
                                                ) {
                                                    <div class="truncate">
                                                        {{ play_time }}
                                                    </div>
                                                } @empty {
                                                    <div
                                                        class="text-base-content/60"
                                                    >
                                                        {{
                                                            'SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES'
                                                                | translate
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                @if (playlist().play_count) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.PLAY_COUNT'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().play_count }}
                                        </div>
                                    </div>
                                }
                                <signage-shared-with
                                    class="mt-2"
                                    type="playlists"
                                    [item_id]="playlist().id"
                                    [group_id]="selected_group_id()"
                                    [allow_unshare]="can_update()"
                                    [compact_label]="true"
                                />
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.ZONES_COUNT'
                                    | translate
                                        : { count: playlist_zones().length }
                                        : playlist_zones().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_zones()
                                                          .length,
                                                  }
                                                : playlist_zones().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_zones().length > 0) {
                                    @for (
                                        zone of playlist_zones();
                                        track zone.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/zones',
                                                    zone.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_ZONE'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      zone.display_name ||
                                                                      zone.name,
                                                              }
                                                "
                                            >
                                                <icon
                                                    class="shrink-0 text-xl opacity-60"
                                                    >location_on</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{
                                                            zone.display_name ||
                                                                zone.name
                                                        }}
                                                    </div>
                                                    @if (zone.description) {
                                                        <div
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                zone.description
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
                                                    class="m-1 text-sm"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeZone($event, zone)
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          zone.display_name ||
                                                                          zone.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl"
                                            >location_off</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_ZONES_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                    | translate
                                        : { count: playlist_displays().length }
                                        : playlist_displays().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
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
                                                : {
                                                      count: playlist_displays()
                                                          .length,
                                                  }
                                                : playlist_displays().length
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
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_displays().length > 0) {
                                    @for (
                                        display of playlist_displays();
                                        track display.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/displays',
                                                    display.id,
                                                ]"
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
                                                            {{
                                                                display.description
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
                                                    class="m-1 text-sm"
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeDisplay(
                                                            $event,
                                                            display
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          display.display_name ||
                                                                          display.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl">tv_off</icon>
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_DISPLAYS_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        } @else {
            <div
                class="border-base-300 text-base-content/70 flex min-w-60 flex-1 flex-col items-center justify-center space-y-2 border-l p-8"
            >
                <icon class="text-6xl">info</icon>
                <p>
                    {{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_DETAILS' | translate }}
                </p>
            </div>
        }
    `, imports: [
      MatRippleModule,
      MatTabsModule,
      MatTooltipModule,
      RouterLink,
      IconComponent,
      DatePipe,
      MediaDurationPipe,
      TranslatePipe,
      SignageSharedWithComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-item-details.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-item-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemDetailsComponent, { className: "PlaylistItemDetailsComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-item-details.component.ts", lineNumber: 878 });
})();

// apps/signage-manager/src/app/playlists/playlist-items.component.ts
var _c03 = (a0) => ({ name: a0 });
var _forTrack02 = ($index, $item) => $item.id + "-" + $index;
function PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approvePlaylist());
    });
    \u0275\u0275elementStart(3, "icon", 14);
    \u0275\u0275text(4, "order_approve");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, "approval");
    \u0275\u0275elementEnd();
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestApproval());
    });
    \u0275\u0275conditionalCreate(3, PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Conditional_3_Template, 1, 0, "mat-spinner", 16)(4, PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Conditional_4_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP"))("disabled", ctx_r1.approval_request_loading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.approval_request_loading() ? 3 : 4);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_0_Template, 5, 6, "button", 7)(1, PlaylistItemsComponent_Conditional_0_Conditional_6_Conditional_1_Template, 5, 8, "button", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.can_approve() ? 0 : 1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sharePlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "ios_share");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST"));
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SIGNAGE_MANAGER.LOADING_PLAYLIST_ITEMS"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r10.play_time / 1e3), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r14 = \u0275\u0275nextContext();
      const item_r10 = ctx_r14.$implicit;
      const $index_r11 = ctx_r14.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeItem(item_r10, $index_r11));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 34);
    \u0275\u0275text(3, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template_div_click_0_listener() {
      const ctx_r8 = \u0275\u0275restoreView(_r8);
      const item_r10 = ctx_r8.$implicit;
      const $index_r11 = ctx_r8.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItem(item_r10, $index_r11));
    })("keydown.enter", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template_div_keydown_enter_0_listener($event) {
      const ctx_r11 = \u0275\u0275restoreView(_r8);
      const item_r10 = ctx_r11.$implicit;
      const $index_r11 = ctx_r11.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItemWithKeyboard($event, item_r10, $index_r11));
    })("keydown.space", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template_div_keydown_space_0_listener($event) {
      const ctx_r12 = \u0275\u0275restoreView(_r8);
      const item_r10 = ctx_r12.$implicit;
      const $index_r11 = ctx_r12.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItemWithKeyboard($event, item_r10, $index_r11));
    });
    \u0275\u0275elementStart(2, "icon", 22);
    \u0275\u0275text(3, "drag_indicator");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "media-thumbnail", 23);
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Conditional_11_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template_button_click_12_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 0)(18, "button", 29);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template_button_click_18_listener() {
      const item_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previewItem(item_r10));
    });
    \u0275\u0275elementStart(19, "div", 30)(20, "icon", 31);
    \u0275\u0275text(21, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 32);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Conditional_25_Template, 7, 3, "button", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    const item_menu_r16 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-primary", ctx_r1.isItemSelected(item_r10, $index_r11))("text-primary-content", ctx_r1.isItemSelected(item_r10, $index_r11))("hover:bg-base-200", !ctx_r1.isItemSelected(item_r10, $index_r11));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 32, "SIGNAGE_MANAGER.SELECT_MEDIA_ITEM", \u0275\u0275pureFunction1(39, _c03, item_r10.name)));
    \u0275\u0275advance(4);
    \u0275\u0275property("item", item_r10)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r10.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-info", item_r10.media_type === "video")("text-info-content", item_r10.media_type === "video")("bg-warning", item_r10.media_type === "image")("text-warning-content", item_r10.media_type === "image")("bg-success", item_r10.media_type === "webpage")("text-success-content", item_r10.media_type === "webpage")("bg-error", item_r10.media_type === "plugin")("text-error-content", item_r10.media_type === "plugin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r10.play_time ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", item_menu_r16);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 35, "SIGNAGE_MANAGER.ITEM_ACTIONS"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 37, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 25 : -1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("cdkDropListDropped", function PlaylistItemsComponent_Conditional_0_Conditional_11_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275repeaterCreate(1, PlaylistItemsComponent_Conditional_0_Conditional_11_For_2_Template, 26, 41, "div", 20, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.items());
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r20.play_time / 1e3), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      \u0275\u0275nextContext();
      const schedule_r25 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editItemSchedule(schedule_r25));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "icon", 31);
    \u0275\u0275text(3, "edit_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r25 = \u0275\u0275nextContext();
      const item_r20 = ctx_r25.$implicit;
      const $index_r21 = ctx_r25.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeItem(item_r20, $index_r21));
    });
    \u0275\u0275elementStart(8, "div", 30)(9, "icon", 34);
    \u0275\u0275text(10, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 32);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "SIGNAGE_MANAGER.EDIT_SCHEDULE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 4, "SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_schedule_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("matTooltip", ctx_r1.scheduleTooltip(item_schedule_r28));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.scheduleLabel(item_schedule_r28), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Conditional_0_For_1_Template, 2, 2, "div", 45, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const schedule_r25 = \u0275\u0275readContextLet(0);
    \u0275\u0275repeater(schedule_r25.schedules);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_SCHEDULES"), " ");
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Conditional_0_Template, 2, 0)(1, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Conditional_1_Template, 3, 3, "div", 44);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const schedule_r25 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(schedule_r25?.schedules?.length ? 0 : 1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template_div_click_1_listener() {
      const ctx_r18 = \u0275\u0275restoreView(_r18);
      const item_r20 = ctx_r18.$implicit;
      const $index_r21 = ctx_r18.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItem(item_r20, $index_r21));
    })("keydown.enter", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template_div_keydown_enter_1_listener($event) {
      const ctx_r21 = \u0275\u0275restoreView(_r18);
      const item_r20 = ctx_r21.$implicit;
      const $index_r21 = ctx_r21.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItemWithKeyboard($event, item_r20, $index_r21));
    })("keydown.space", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template_div_keydown_space_1_listener($event) {
      const ctx_r22 = \u0275\u0275restoreView(_r18);
      const item_r20 = ctx_r22.$implicit;
      const $index_r21 = ctx_r22.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectItemWithKeyboard($event, item_r20, $index_r21));
    });
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275element(4, "media-thumbnail", 23);
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_11_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 28);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template_button_click_12_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-menu", null, 1)(18, "button", 29);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template_button_click_18_listener() {
      const item_r20 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previewItem(item_r20));
    });
    \u0275\u0275elementStart(19, "div", 30)(20, "icon", 31);
    \u0275\u0275text(21, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 32);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(25, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_25_Template, 14, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 42)(27, "button", 43);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template_button_click_27_listener($event) {
      const ctx_r26 = \u0275\u0275restoreView(_r18);
      const item_r20 = ctx_r26.$implicit;
      const $index_r21 = ctx_r26.$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSchedules($event, item_r20, $index_r21));
    });
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Schedules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "icon", 37);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(32, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Conditional_32_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const $index_r21 = ctx.$index;
    const distribution_item_menu_r29 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275storeLet(ctx_r1.itemSchedule(item_r20, $index_r21));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r1.isItemSelected(item_r20, $index_r21))("text-primary-content", ctx_r1.isItemSelected(item_r20, $index_r21))("hover:bg-base-200", !ctx_r1.isItemSelected(item_r20, $index_r21));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 36, "SIGNAGE_MANAGER.SELECT_MEDIA_ITEM", \u0275\u0275pureFunction1(43, _c03, item_r20.name)));
    \u0275\u0275advance(3);
    \u0275\u0275property("item", item_r20)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r20.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-info", item_r20.media_type === "video")("text-info-content", item_r20.media_type === "video")("bg-warning", item_r20.media_type === "image")("text-warning-content", item_r20.media_type === "image")("bg-success", item_r20.media_type === "webpage")("text-success-content", item_r20.media_type === "webpage")("bg-error", item_r20.media_type === "plugin")("text-error-content", item_r20.media_type === "plugin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r20.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r20.play_time ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", distribution_item_menu_r29);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 39, "SIGNAGE_MANAGER.ITEM_ACTIONS"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 41, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.schedulesOpen(item_r20, $index_r21));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.schedulesOpen(item_r20, $index_r21) ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.schedulesOpen(item_r20, $index_r21) ? 32 : -1);
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 35)(2, "button", 36);
    \u0275\u0275listener("click", function PlaylistItemsComponent_Conditional_0_Conditional_12_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAllSchedules($event));
    });
    \u0275\u0275elementStart(3, "icon", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(7, PlaylistItemsComponent_Conditional_0_Conditional_12_For_8_Template, 33, 45, "div", 39, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.allSchedulesCollapsed() ? "unfold_more" : "unfold_less");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.allSchedulesCollapsed() ? "Expand all" : "Collapse all");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.items());
  }
}
function PlaylistItemsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 46);
    \u0275\u0275text(2, "queue_music");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLIST_ITEMS"));
  }
}
function PlaylistItemsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 4);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "h4", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, PlaylistItemsComponent_Conditional_0_Conditional_6_Template, 2, 1);
    \u0275\u0275conditionalCreate(7, PlaylistItemsComponent_Conditional_0_Conditional_7_Template, 5, 6, "button", 7);
    \u0275\u0275conditionalCreate(8, PlaylistItemsComponent_Conditional_0_Conditional_8_Template, 5, 6, "button", 7);
    \u0275\u0275conditionalCreate(9, PlaylistItemsComponent_Conditional_0_Conditional_9_Template, 5, 6, "button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, PlaylistItemsComponent_Conditional_0_Conditional_10_Template, 5, 3, "div", 9)(11, PlaylistItemsComponent_Conditional_0_Conditional_11_Template, 3, 0, "div", 10)(12, PlaylistItemsComponent_Conditional_0_Conditional_12_Template, 9, 2, "div", 11)(13, PlaylistItemsComponent_Conditional_0_Conditional_13_Template, 6, 3, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_playlist().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requires_approval() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_delete() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading() ? 10 : ctx_r1.items().length > 0 && !ctx_r1.is_distribution() ? 11 : ctx_r1.items().length > 0 ? 12 : 13);
  }
}
function PlaylistItemsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 46);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.SELECT_PLAYLIST_ITEMS"));
  }
}
var PlaylistItemsComponent = class _PlaylistItemsComponent {
  constructor() {
    this._service = inject(SignageService);
    this.selected_playlist = this._service.selected_playlist;
    this.selected_item = this._service.selected_playlist_item;
    this.selected_item_index = this._service.selected_playlist_item_index;
    this.requires_approval = this._service.selected_playlist_requires_approval;
    this.can_approve = this._service.can_approve;
    this.can_update = this._service.can_update;
    this.can_delete = this._service.can_delete;
    this.can_share = this._service.can_share;
    this.loading = this._service.playlist_media_loading;
    this.approval_request_loading = this._service.playlist_approval_request_loading;
    this.items = this._service.playlist_media_items;
    this.item_schedules = this._service.playlist_item_schedules;
    this.item_schedule_list = this._service.playlist_item_schedule_list;
    this.is_distribution = () => !!this.selected_playlist()?.distribution;
    this.collapsed_schedules = signal(
      {},
      ...ngDevMode ? [{ debugName: "collapsed_schedules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scheduleLabel = playlistScheduleLabel;
  }
  selectItem(item, index) {
    this._service.selected_playlist_item.set(item);
    this._service.selected_playlist_item_index.set(index);
  }
  isItemSelected(item, index) {
    return this.selected_item()?.id === item.id && this.selected_item_index() === index;
  }
  itemSchedule(item, index = -1) {
    const schedule = this.item_schedule_list()[index];
    if (schedule?.media?.id === item.id)
      return schedule;
    return this.item_schedules().get(item.id) || new ar({
      item_id: item.id,
      media: item
    });
  }
  scheduleTooltip(schedule) {
    const labels = playlistScheduleNextPlayLabels(schedule);
    return [
      `-- ${i18n("SIGNAGE_MANAGER.NEXT_5_PLAYS")} --`,
      ...labels.length ? labels : [i18n("SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES")]
    ].join("\n");
  }
  scheduleKey(item, index) {
    const schedule = this.itemSchedule(item, index);
    return `${schedule.id || schedule.item_id || item.id}:${index}`;
  }
  schedulesOpen(item, index) {
    return !this.collapsed_schedules()[this.scheduleKey(item, index)];
  }
  toggleSchedules(event, item, index) {
    event.preventDefault();
    event.stopPropagation();
    const key = this.scheduleKey(item, index);
    this.collapsed_schedules.update((state) => __spreadProps(__spreadValues({}, state), {
      [key]: !state[key]
    }));
  }
  allSchedulesCollapsed() {
    const items = this.items();
    return items.length > 0 && items.every((item, index) => !this.schedulesOpen(item, index));
  }
  toggleAllSchedules(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.allSchedulesCollapsed()) {
      this.collapsed_schedules.set({});
      return;
    }
    const collapsed = {};
    this.items().forEach((item, index) => {
      collapsed[this.scheduleKey(item, index)] = true;
    });
    this.collapsed_schedules.set(collapsed);
  }
  selectItemWithKeyboard(event, item, index) {
    event.preventDefault();
    event.stopPropagation();
    this.selectItem(item, index);
  }
  previewItem(item) {
    this._service.previewMedia(item);
  }
  editItemSchedule(schedule) {
    this._service.editPlaylistItemSchedule(schedule);
  }
  editPlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.editPlaylist(playlist);
  }
  removePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.removePlaylist(playlist);
  }
  approvePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.approvePlaylist(playlist);
  }
  requestApproval() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.requestPlaylistApproval(playlist);
  }
  sharePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.sharePlaylist(playlist);
  }
  async removeItem(item, item_index) {
    const playlist = this.selected_playlist();
    if (!playlist?.id || !item?.id)
      return;
    const schedule = playlist.distribution ? this.itemSchedule(item, item_index) : null;
    const playlist_item_id = schedule?.id || schedule?.item_id || item.id;
    await this._service.removeMediaFromPlaylist(playlist.id, playlist_item_id, item_index);
    if (this.isItemSelected(item, item_index)) {
      this._service.selected_playlist_item.set(null);
      this._service.selected_playlist_item_index.set(null);
    }
  }
  async onDrop(event) {
    if (!this.can_update() || this.is_distribution())
      return;
    const playlist = this.selected_playlist();
    if (!playlist?.id)
      return;
    const current_items = [...this.items()];
    moveItemInArray(current_items, event.previousIndex, event.currentIndex);
    const item_ids = current_items.map((m) => m.id);
    await this._service.reorderPlaylistMedia(playlist.id, item_ids);
  }
  static {
    this.\u0275fac = function PlaylistItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistItemsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistItemsComponent, selectors: [["playlist-items"]], decls: 2, vars: 1, consts: [["item_menu", "matMenu"], ["distribution_item_menu", "matMenu"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "bg-base-100", "border-base-300", "mx-2", "hidden", "items-center", "gap-2", "rounded-b-lg", "border", "px-4", "py-3", "lg:flex"], [1, "shrink-0", "text-2xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-medium"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-3", "p-8", "opacity-70"], ["cdkDropList", "", "role", "list", 1, "w-full", "flex-1", "overflow-auto", "px-3", "py-2"], ["role", "list", 1, "w-full", "flex-1", "overflow-auto", "px-3", "py-2"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip", "disabled"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-warning"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], ["diameter", "20"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["diameter", "32"], ["cdkDropList", "", "role", "list", 1, "w-full", "flex-1", "overflow-auto", "px-3", "py-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "role", "button", "tabindex", "0", 1, "bg-base-100", "border-base-300", "mb-2", "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "p-2", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200"], ["cdkDrag", "", "role", "button", "tabindex", "0", 1, "bg-base-100", "border-base-300", "mb-2", "flex", "cursor-pointer", "items-center", "gap-3", "rounded-lg", "border", "p-2", "transition-colors", 3, "click", "keydown.enter", "keydown.space"], ["cdkDragHandle", "", 1, "shrink-0", "cursor-grab", "opacity-40"], [1, "bg-base-300", "h-12", "w-16", "shrink-0", "overflow-hidden", "rounded", 3, "item", "cover"], [1, "truncate", "text-sm", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "rounded", "px-1.5", "py-0.5", "text-[10px]", "capitalize"], [1, "font-mono", "text-[10px]", "opacity-60"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matMenuTriggerFor"], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["type", "button", "mat-menu-item", ""], [1, "text-error", "text-2xl"], [1, "-mt-2", "mb-2", "flex", "justify-end", "lg:mt-0"], ["type", "button", "matRipple", "", 1, "text-base-content/70", "hover:bg-base-200", "flex", "w-28", "items-center", "justify-center", "gap-1", "rounded", "px-2", "py-1", "text-xs", "font-medium", 3, "click"], [1, "text-base"], [1, "mr-2"], ["role", "button", "tabindex", "0", 1, "bg-base-100", "border-base-300", "mb-2", "cursor-pointer", "rounded-lg", "border", "p-2", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200"], ["role", "button", "tabindex", "0", 1, "bg-base-100", "border-base-300", "mb-2", "cursor-pointer", "rounded-lg", "border", "p-2", "transition-colors", 3, "click", "keydown.enter", "keydown.space"], [1, "flex", "items-start", "gap-3"], [1, "border-base-300", "bg-base-100", "text-base-content", "relative", "mt-4", "flex", "flex-col", "gap-1", "rounded-lg", "border", "text-sm"], ["type", "button", 1, "bg-base-100", "absolute", "-top-3", "left-4", "flex", "items-center", "gap-1", "rounded-lg", "px-2", "text-xs", "font-medium", 3, "click"], [1, "text-base-content/60", "rounded-md", "p-2"], ["matTooltipClass", "playlist-schedule-tooltip", 1, "rounded-md", "p-2", 3, "matTooltip"], [1, "text-6xl"]], template: function PlaylistItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, PlaylistItemsComponent_Conditional_0_Template, 14, 6)(1, PlaylistItemsComponent_Conditional_1_Template, 6, 3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selected_playlist() ? 0 : 1);
      }
    }, dependencies: [
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      MediaThumbnailComponent,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n  .cdk-drag-preview {\n  opacity: 0.6;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n  .playlist-schedule-tooltip .mdc-tooltip__surface {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=playlist-items.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistItemsComponent, [{
    type: Component,
    args: [{ selector: "playlist-items", template: `
        @if (selected_playlist()) {
            <div
                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border px-4 py-3 lg:flex"
            >
                <icon class="shrink-0 text-2xl opacity-60">playlist_play</icon>
                <div class="min-w-0 flex-1">
                    <h4 class="truncate text-lg font-medium">
                        {{ selected_playlist().name }}
                    </h4>
                </div>
                @if (requires_approval()) {
                    @if (can_approve()) {
                        <button
                            icon
                            default
                            type="button"
                            matRipple
                            [matTooltip]="
                                'SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP'
                                    | translate
                            "
                            (click)="approvePlaylist()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST'
                                    | translate
                            "
                        >
                            <icon class="text-warning">order_approve</icon>
                        </button>
                    } @else {
                        <button
                            icon
                            default
                            type="button"
                            matRipple
                            [matTooltip]="
                                'SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP'
                                    | translate
                            "
                            (click)="requestApproval()"
                            [disabled]="approval_request_loading()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED'
                                    | translate
                            "
                        >
                            @if (approval_request_loading()) {
                                <mat-spinner diameter="20" />
                            } @else {
                                <icon class="text-warning">approval</icon>
                            }
                        </button>
                    }
                }
                @if (can_update()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP' | translate
                        "
                        (click)="editPlaylist()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                }
                @if (can_share()) {
                    <button
                        icon
                        default
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP' | translate
                        "
                        (click)="sharePlaylist()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST'
                                | translate
                        "
                    >
                        <icon>ios_share</icon>
                    </button>
                }
                @if (can_delete()) {
                    <button
                        icon
                        default
                        error
                        type="button"
                        matRipple
                        [matTooltip]="
                            'SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP'
                                | translate
                        "
                        (click)="removePlaylist()"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST'
                                | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                }
            </div>
            @if (loading()) {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-3 p-8 opacity-70"
                >
                    <mat-spinner diameter="32" />
                    <p>
                        {{
                            'SIGNAGE_MANAGER.LOADING_PLAYLIST_ITEMS' | translate
                        }}
                    </p>
                </div>
            } @else if (items().length > 0 && !is_distribution()) {
                <div
                    class="w-full flex-1 overflow-auto px-3 py-2"
                    cdkDropList
                    role="list"
                    (cdkDropListDropped)="onDrop($event)"
                >
                    @for (item of items(); track item.id + '-' + $index) {
                        <div
                            cdkDrag
                            role="button"
                            tabindex="0"
                            class="bg-base-100 border-base-300 mb-2 flex cursor-pointer items-center gap-3 rounded-lg border p-2 transition-colors"
                            [class.bg-primary]="isItemSelected(item, $index)"
                            [class.text-primary-content]="
                                isItemSelected(item, $index)
                            "
                            [class.hover:bg-base-200]="
                                !isItemSelected(item, $index)
                            "
                            (click)="selectItem(item, $index)"
                            (keydown.enter)="
                                selectItemWithKeyboard($event, item, $index)
                            "
                            (keydown.space)="
                                selectItemWithKeyboard($event, item, $index)
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                    | translate: { name: item.name }
                            "
                        >
                            <icon
                                cdkDragHandle
                                class="shrink-0 cursor-grab opacity-40"
                                >drag_indicator</icon
                            >
                            <media-thumbnail
                                [item]="item"
                                [cover]="true"
                                class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                            />
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ item.name }}
                                </div>
                                <div class="flex items-center gap-2">
                                    <span
                                        class="rounded px-1.5 py-0.5 text-[10px] capitalize"
                                        [class.bg-info]="
                                            item.media_type === 'video'
                                        "
                                        [class.text-info-content]="
                                            item.media_type === 'video'
                                        "
                                        [class.bg-warning]="
                                            item.media_type === 'image'
                                        "
                                        [class.text-warning-content]="
                                            item.media_type === 'image'
                                        "
                                        [class.bg-success]="
                                            item.media_type === 'webpage'
                                        "
                                        [class.text-success-content]="
                                            item.media_type === 'webpage'
                                        "
                                        [class.bg-error]="
                                            item.media_type === 'plugin'
                                        "
                                        [class.text-error-content]="
                                            item.media_type === 'plugin'
                                        "
                                    >
                                        {{ item.media_type }}
                                    </span>
                                    @if (item.play_time) {
                                        <span
                                            class="font-mono text-[10px] opacity-60"
                                        >
                                            {{
                                                item.play_time / 1000
                                                    | mediaDuration
                                            }}
                                        </span>
                                    }
                                </div>
                            </div>
                            <button
                                icon
                                default
                                type="button"
                                matRipple
                                [matMenuTriggerFor]="item_menu"
                                (click)="$event.stopPropagation()"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ITEM_ACTIONS' | translate
                                "
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #item_menu="matMenu">
                                <button
                                    type="button"
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">
                                            {{ 'COMMON.PREVIEW' | translate }}
                                        </div>
                                    </div>
                                </button>
                                @if (can_update()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="removeItem(item, $index)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-error text-2xl">
                                                delete
                                            </icon>
                                            <div class="pr-2">
                                                {{
                                                    'SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else if (items().length > 0) {
                <div class="w-full flex-1 overflow-auto px-3 py-2" role="list">
                    <div class="-mt-2 mb-2 flex justify-end lg:mt-0">
                        <button
                            type="button"
                            class="text-base-content/70 hover:bg-base-200 flex w-28 items-center justify-center gap-1 rounded px-2 py-1 text-xs font-medium"
                            matRipple
                            (click)="toggleAllSchedules($event)"
                        >
                            <icon class="text-base">{{
                                allSchedulesCollapsed()
                                    ? 'unfold_more'
                                    : 'unfold_less'
                            }}</icon>
                            <span class="mr-2">{{
                                allSchedulesCollapsed()
                                    ? 'Expand all'
                                    : 'Collapse all'
                            }}</span>
                        </button>
                    </div>
                    @for (item of items(); track item.id + '-' + $index) {
                        @let schedule = itemSchedule(item, $index);
                        <div
                            role="button"
                            tabindex="0"
                            class="bg-base-100 border-base-300 mb-2 cursor-pointer rounded-lg border p-2 transition-colors"
                            [class.bg-primary]="isItemSelected(item, $index)"
                            [class.text-primary-content]="
                                isItemSelected(item, $index)
                            "
                            [class.hover:bg-base-200]="
                                !isItemSelected(item, $index)
                            "
                            (click)="selectItem(item, $index)"
                            (keydown.enter)="
                                selectItemWithKeyboard($event, item, $index)
                            "
                            (keydown.space)="
                                selectItemWithKeyboard($event, item, $index)
                            "
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_MEDIA_ITEM'
                                    | translate: { name: item.name }
                            "
                        >
                            <div class="flex items-start gap-3">
                                <media-thumbnail
                                    [item]="item"
                                    [cover]="true"
                                    class="bg-base-300 h-12 w-16 shrink-0 overflow-hidden rounded"
                                />
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ item.name }}
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span
                                            class="rounded px-1.5 py-0.5 text-[10px] capitalize"
                                            [class.bg-info]="
                                                item.media_type === 'video'
                                            "
                                            [class.text-info-content]="
                                                item.media_type === 'video'
                                            "
                                            [class.bg-warning]="
                                                item.media_type === 'image'
                                            "
                                            [class.text-warning-content]="
                                                item.media_type === 'image'
                                            "
                                            [class.bg-success]="
                                                item.media_type === 'webpage'
                                            "
                                            [class.text-success-content]="
                                                item.media_type === 'webpage'
                                            "
                                            [class.bg-error]="
                                                item.media_type === 'plugin'
                                            "
                                            [class.text-error-content]="
                                                item.media_type === 'plugin'
                                            "
                                        >
                                            {{ item.media_type }}
                                        </span>
                                        @if (item.play_time) {
                                            <span
                                                class="font-mono text-[10px] opacity-60"
                                            >
                                                {{
                                                    item.play_time / 1000
                                                        | mediaDuration
                                                }}
                                            </span>
                                        }
                                    </div>
                                </div>
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    [matMenuTriggerFor]="distribution_item_menu"
                                    (click)="$event.stopPropagation()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.ITEM_ACTIONS'
                                            | translate
                                    "
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #distribution_item_menu="matMenu">
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="previewItem(item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >visibility</icon
                                            >
                                            <div class="pr-2">
                                                {{
                                                    'COMMON.PREVIEW' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    @if (can_update()) {
                                        <button
                                            type="button"
                                            mat-menu-item
                                            (click)="editItemSchedule(schedule)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >edit_calendar</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.EDIT_SCHEDULE'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            mat-menu-item
                                            (click)="removeItem(item, $index)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon
                                                    class="text-error text-2xl"
                                                >
                                                    delete
                                                </icon>
                                                <div class="pr-2">
                                                    {{
                                                        'SIGNAGE_MANAGER.REMOVE_FROM_PLAYLIST'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                            </div>
                            <div
                                class="border-base-300 bg-base-100 text-base-content relative mt-4 flex flex-col gap-1 rounded-lg border text-sm"
                            >
                                <button
                                    type="button"
                                    class="bg-base-100 absolute -top-3 left-4 flex items-center gap-1 rounded-lg px-2 text-xs font-medium"
                                    (click)="
                                        toggleSchedules($event, item, $index)
                                    "
                                    [attr.aria-expanded]="
                                        schedulesOpen(item, $index)
                                    "
                                >
                                    <span>Schedules</span>
                                    <icon class="text-base">{{
                                        schedulesOpen(item, $index)
                                            ? 'expand_less'
                                            : 'expand_more'
                                    }}</icon>
                                </button>
                                @if (schedulesOpen(item, $index)) {
                                    @if (schedule?.schedules?.length) {
                                        @for (
                                            item_schedule of schedule.schedules;
                                            track $index
                                        ) {
                                            <div
                                                class="rounded-md p-2"
                                                [matTooltip]="
                                                    scheduleTooltip(
                                                        item_schedule
                                                    )
                                                "
                                                matTooltipClass="playlist-schedule-tooltip"
                                            >
                                                {{
                                                    scheduleLabel(item_schedule)
                                                }}
                                            </div>
                                        }
                                    } @else {
                                        <div
                                            class="text-base-content/60 rounded-md p-2"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.NO_SCHEDULES'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                }
                            </div>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">queue_music</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_PLAYLIST_ITEMS' | translate }}</p>
                </div>
            }
        } @else {
            <div
                class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">playlist_play</icon>
                <p>{{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_ITEMS' | translate }}</p>
            </div>
        }
    `, imports: [
      DragDropModule,
      MatRippleModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      MediaDurationPipe,
      TranslatePipe,
      MediaThumbnailComponent
    ], styles: ["/* angular:styles/component:css;ea4bfd70c03f2b567778031b92344f469b9fe396e4a9146a22b45b9b2e409179;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-items.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n::ng-deep .cdk-drag-preview {\n  opacity: 0.6;\n}\n.cdk-drag-placeholder {\n  opacity: 0.3;\n}\n::ng-deep .playlist-schedule-tooltip .mdc-tooltip__surface {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=playlist-items.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemsComponent, { className: "PlaylistItemsComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-items.component.ts", lineNumber: 572 });
})();

// apps/signage-manager/src/app/playlists/playlist-list.component.ts
var _c04 = ["playlist_item"];
var _c12 = (a0) => ["/playlists", a0];
var _c22 = (a0) => ({ name: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function PlaylistListComponent_Conditional_6_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_EXPIRED"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PENDING"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== playlist_r1.id)("opacity-90", ctx_r1.selected()?.id === playlist_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r1.description, " ");
  }
}
function PlaylistListComponent_Conditional_6_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 20);
    \u0275\u0275text(1, "p2p");
    \u0275\u0275elementEnd();
  }
}
function PlaylistListComponent_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9, 0);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "playlist-thumbnail", 10);
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275conditionalCreate(8, PlaylistListComponent_Conditional_6_For_1_Conditional_8_Template, 3, 3, "span", 14);
    \u0275\u0275conditionalCreate(9, PlaylistListComponent_Conditional_6_For_1_Case_9_Template, 3, 3, "span", 15)(10, PlaylistListComponent_Conditional_6_For_1_Case_10_Template, 3, 3, "span", 16)(11, PlaylistListComponent_Conditional_6_For_1_Case_11_Template, 3, 3, "span", 17)(12, PlaylistListComponent_Conditional_6_For_1_Case_12_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, PlaylistListComponent_Conditional_6_For_1_Conditional_13_Template, 2, 5, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, PlaylistListComponent_Conditional_6_For_1_Conditional_14_Template, 2, 0, "icon", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const playlist_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === playlist_r1.id)("text-primary-content", ctx_r1.selected()?.id === playlist_r1.id)("hover:bg-base-200", ctx_r1.selected()?.id !== playlist_r1.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c12, playlist_r1.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 14, "SIGNAGE_MANAGER.OPEN_PLAYLIST", \u0275\u0275pureFunction1(19, _c22, playlist_r1.name)));
    \u0275\u0275advance(3);
    \u0275\u0275property("playlist", playlist_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!playlist_r1.enabled ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = ctx_r1.getStatus(playlist_r1)) === "expired" ? 9 : tmp_20_0 === "pending" ? 10 : tmp_20_0 === "awaiting_review" ? 11 : tmp_20_0 === "awaiting_approval" ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(playlist_r1.description ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(playlist_r1.distribution ? 14 : -1);
  }
}
function PlaylistListComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("intersect", function PlaylistListComponent_Conditional_6_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistListComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function PlaylistListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistListComponent_Conditional_6_For_1_Template, 15, 21, "a", 6, _forTrack03);
    \u0275\u0275conditionalCreate(2, PlaylistListComponent_Conditional_6_Conditional_2_Template, 1, 0, "div", 7)(3, PlaylistListComponent_Conditional_6_Conditional_3_Template, 3, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.playlists());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 2 : 3);
  }
}
function PlaylistListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 23);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS"));
  }
}
var PlaylistListComponent = class _PlaylistListComponent {
  constructor() {
    this._service = inject(SignageService);
    this._playlist_items = viewChildren(
      "playlist_item",
      ...ngDevMode ? [{ debugName: "_playlist_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._service.playlist_search_term;
    this.playlists = this._service.filtered_playlists;
    this.selected = this._service.selected_playlist;
    this.playlist_approval_status = this._service.playlist_approval_status;
    this.playlist_approval_requested_status = this._service.playlist_approval_requested_status;
    this.has_more = this._service.playlists_has_more;
    afterRenderEffect({
      earlyRead: () => {
        const selected_id = this.selected()?.id;
        if (!selected_id)
          return;
        const playlist_index = this.playlists().findIndex(({ id }) => id === selected_id);
        return this._playlist_items()[playlist_index]?.nativeElement;
      },
      write: (selected_item) => {
        selected_item()?.scrollIntoView?.({
          behavior: "instant",
          block: "nearest",
          inline: "nearest"
        });
      }
    });
  }
  loadMore() {
    this._service.loadMorePlaylists();
  }
  getStatus(playlist) {
    const now_s = Math.floor(Date.now() / 1e3);
    if (playlist.valid_until && playlist.valid_until < now_s)
      return "expired";
    if (playlist.valid_from && playlist.valid_from > now_s)
      return "pending";
    const approvals = this.playlist_approval_status();
    const approval_requests = this.playlist_approval_requested_status();
    if (playlist.id in approvals && !approvals[playlist.id] && approval_requests[playlist.id])
      return "awaiting_review";
    if (playlist.id in approvals && !approvals[playlist.id])
      return "awaiting_approval";
    return null;
  }
  editPlaylist(playlist) {
    this._service.editPlaylist(playlist);
  }
  removePlaylist(playlist) {
    this._service.removePlaylist(playlist);
  }
  static {
    this.\u0275fac = function PlaylistListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistListComponent, selectors: [["playlist-list"]], viewQuery: function PlaylistListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._playlist_items, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 8, vars: 8, consts: [["playlist_item", ""], [1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-10", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-1", "text-left", "no-underline", "transition-colors", 3, "bg-primary", "text-primary-content", "hover:bg-base-200", "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "bg-base-content/10", "col-span-full", "my-2", "p-2", "text-center", "text-xs"], ["matRipple", "", "queryParamsHandling", "merge", 1, "border-base-300", "relative", "z-0", "flex", "w-full", "cursor-pointer", "items-center", "gap-3", "border-b", "px-2", "py-1", "text-left", "no-underline", "transition-colors", 3, "routerLink"], [1, "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md", 3, "playlist"], [1, "min-w-0", "flex-1", "pr-2"], [1, "flex", "items-center", "gap-2", "truncate", "font-medium"], [1, "flex", "flex-wrap", "gap-1", "text-[0.625rem]", "font-medium", "uppercase"], [1, "bg-base-200", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "bg-base-300", "shrink-0", "rounded", "px-1.5", "py-0.5"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], [1, "mx-1"], [1, "mt-0.5", "truncate", "text-xs"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [1, "text-6xl"]], template: function PlaylistListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "input", 4);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275listener("ngModelChange", function PlaylistListComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, PlaylistListComponent_Conditional_6_Template, 4, 1)(7, PlaylistListComponent_Conditional_7_Template, 6, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.playlists().length > 0 ? 6 : 7);
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
      MatMenuModule,
      IconComponent,
      IntersectDirective,
      PlaylistThumbnailComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistListComponent, [{
    type: Component,
    args: [{ selector: "playlist-list", template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div
                class="border-base-300 bg-base-100 sticky top-0 z-10 border-b p-2"
            >
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (playlists().length > 0) {
                @for (playlist of playlists(); track playlist.id) {
                    <a
                        #playlist_item
                        matRipple
                        class="border-base-300 relative z-0 flex w-full cursor-pointer items-center gap-3 border-b px-2 py-1 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === playlist.id"
                        [class.text-primary-content]="
                            selected()?.id === playlist.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== playlist.id
                        "
                        [routerLink]="['/playlists', playlist.id]"
                        queryParamsHandling="merge"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                | translate: { name: playlist.name }
                        "
                    >
                        <playlist-thumbnail
                            [playlist]="playlist"
                            class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                        />
                        <div class="min-w-0 flex-1 pr-2">
                            <div
                                class="flex items-center gap-2 truncate font-medium"
                            >
                                {{ playlist.name }}
                            </div>
                            <div
                                class="flex flex-wrap gap-1 text-[0.625rem] font-medium uppercase"
                            >
                                @if (!playlist.enabled) {
                                    <span
                                        class="bg-base-200 shrink-0 rounded px-1.5 py-0.5"
                                    >
                                        {{ 'COMMON.DISABLED' | translate }}
                                    </span>
                                }
                                @switch (getStatus(playlist)) {
                                    @case ('expired') {
                                        <span
                                            class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('pending') {
                                        <span
                                            class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{ 'COMMON.PENDING' | translate }}
                                        </span>
                                    }
                                    @case ('awaiting_review') {
                                        <span
                                            class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                    @case ('awaiting_approval') {
                                        <span
                                            class="bg-base-300 shrink-0 rounded px-1.5 py-0.5"
                                        >
                                            {{
                                                'COMMON.APPROVAL_REQUIRED'
                                                    | translate
                                            }}
                                        </span>
                                    }
                                }
                            </div>
                            @if (playlist.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== playlist.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === playlist.id
                                    "
                                >
                                    {{ playlist.description }}
                                </div>
                            }
                        </div>
                        @if (playlist.distribution) {
                            <icon class="mx-1">p2p</icon>
                        }
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else {
                    <div
                        class="text-base-content/50 bg-base-content/10 col-span-full my-2 p-2 text-center text-xs"
                    >
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">playlist_play</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_PLAYLISTS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      FormsModule,
      RouterLink,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      IconComponent,
      TranslatePipe,
      IntersectDirective,
      PlaylistThumbnailComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlist-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=playlist-list.component.css.map */\n"] }]
  }], () => [], { _playlist_items: [{ type: ViewChildren, args: ["playlist_item", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistListComponent, { className: "PlaylistListComponent", filePath: "apps/signage-manager/src/app/playlists/playlist-list.component.ts", lineNumber: 197 });
})();

// apps/signage-manager/src/app/playlists/playlists.component.ts
function PlaylistsSectionComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_playlist().description, " ");
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approvePlaylist());
    });
    \u0275\u0275elementStart(3, "icon", 21);
    \u0275\u0275text(4, "order_approve");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST"));
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 21);
    \u0275\u0275text(1, "approval");
    \u0275\u0275elementEnd();
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.requestApproval());
    });
    \u0275\u0275conditionalCreate(3, PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_3_Template, 1, 0, "mat-spinner", 23)(4, PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Conditional_4_Template, 2, 0, "icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP"))("disabled", ctx_r1.approval_request_loading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.approval_request_loading() ? 3 : 4);
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_0_Template, 5, 6, "button", 14)(1, PlaylistsSectionComponent_Conditional_7_Conditional_10_Conditional_1_Template, 5, 8, "button", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.can_approve() ? 0 : 1);
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST"));
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sharePlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "ios_share");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST"));
  }
}
function PlaylistsSectionComponent_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST"));
  }
}
function PlaylistsSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deselectPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "h4", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PlaylistsSectionComponent_Conditional_7_Conditional_8_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div");
    \u0275\u0275conditionalCreate(10, PlaylistsSectionComponent_Conditional_7_Conditional_10_Template, 2, 1);
    \u0275\u0275conditionalCreate(11, PlaylistsSectionComponent_Conditional_7_Conditional_11_Template, 5, 6, "button", 14);
    \u0275\u0275conditionalCreate(12, PlaylistsSectionComponent_Conditional_7_Conditional_12_Template, 5, 6, "button", 14);
    \u0275\u0275conditionalCreate(13, PlaylistsSectionComponent_Conditional_7_Conditional_13_Template, 5, 6, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("items"));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275listener("click", function PlaylistsSectionComponent_Conditional_7_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("details"));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 28, "SIGNAGE_MANAGER.BACK_TO_PLAYLISTS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_playlist().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_playlist().description ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.requires_approval() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_delete() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 30, "SIGNAGE_MANAGER.PLAYLIST_DETAILS_TABS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "items")("border-b-2", ctx_r1.view_tab() === "items")("text-primary", ctx_r1.view_tab() === "items")("opacity-60", ctx_r1.view_tab() !== "items");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "items");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 32, "SIGNAGE_MANAGER.TAB_ITEMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "details")("border-b-2", ctx_r1.view_tab() === "details")("text-primary", ctx_r1.view_tab() === "details")("opacity-60", ctx_r1.view_tab() !== "details");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "details");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "COMMON.DETAILS"), " ");
  }
}
var TAB_QUERY_PARAM = "tab";
function parsePlaylistTab(value) {
  return value === "details" ? "details" : "items";
}
var PlaylistsSectionComponent = class _PlaylistsSectionComponent {
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
    this.item = input(
      null,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view_tab = signal(
      "items",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist = this._service.selected_playlist;
    this.requires_approval = this._service.selected_playlist_requires_approval;
    this.can_approve = this._service.can_approve;
    this.can_update = this._service.can_update;
    this.can_delete = this._service.can_delete;
    this.can_share = this._service.can_share;
    this.approval_request_loading = this._service.playlist_approval_request_loading;
    this._playlists = this._service.playlists;
    this._playlist_items = this._service.playlist_media_items;
    this._route_resolved = false;
    effect(() => {
      const route_tab = parsePlaylistTab(this.tab());
      if (route_tab !== this.view_tab()) {
        this.view_tab.set(route_tab);
      }
    });
    effect(() => {
      const id = this.id();
      const list = this._playlists();
      if (!list.length)
        return;
      if (id) {
        const match = list.find((p) => p.id === id);
        if (match && this._service.selected_playlist() !== match) {
          this._service.selected_playlist.set(match);
          this._service.selected_playlist_item.set(null);
          this._service.selected_playlist_item_index.set(null);
        }
        this._route_resolved = true;
      } else if (this._route_resolved) {
        this._service.selected_playlist.set(null);
        this._service.selected_playlist_item.set(null);
        this._service.selected_playlist_item_index.set(null);
      }
    });
    effect(() => {
      const item_id = this.item();
      if (!item_id)
        return;
      const items = this._playlist_items();
      if (!items.length)
        return;
      const matched_index = items.findIndex((item) => item.id === item_id);
      const matched_item = items[matched_index];
      this._service.selected_playlist_item.set(matched_item || null);
      this._service.selected_playlist_item_index.set(matched_item ? matched_index : null);
    });
  }
  editPlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.editPlaylist(playlist);
  }
  removePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.removePlaylist(playlist);
  }
  approvePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.approvePlaylist(playlist);
  }
  requestApproval() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.requestPlaylistApproval(playlist);
  }
  sharePlaylist() {
    const playlist = this.selected_playlist();
    if (playlist)
      this._service.sharePlaylist(playlist);
  }
  deselectPlaylist() {
    this._service.selected_playlist.set(null);
    this._service.selected_playlist_item.set(null);
    this._service.selected_playlist_item_index.set(null);
    this._router.navigate(["/playlists"], {});
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
    this.\u0275fac = function PlaylistsSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistsSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistsSectionComponent, selectors: [["playlists-section"]], inputs: { id: [1, "id"], tab: [1, "tab"], item: [1, "item"] }, decls: 12, vars: 11, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col"], ["id", "playlist-items-panel", "role", "tabpanel", "aria-labelledby", "playlist-items-tab", 1, "w-px", "max-w-full", "flex-1"], ["id", "playlist-details-panel", "role", "tabpanel", "aria-labelledby", "playlist-details-tab", 1, "bg-base-100"], [1, "bg-base-100", "border-base-300", "mx-2", "hidden", "items-center", "gap-2", "rounded-b-lg", "border", "p-2", "max-lg:flex"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "sm:hidden", 3, "click"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2"], [1, "truncate", "text-lg", "font-medium"], [1, "-mt-1", "truncate", "text-xs"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "mx-2", "my-2", "flex", "rounded-lg", "border", "lg:hidden"], ["type", "button", "role", "tab", "aria-controls", "playlist-items-panel", "id", "playlist-items-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "playlist-details-panel", "id", "playlist-details-tab", 1, "flex-1", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip", "disabled"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-warning"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip", "disabled"], ["diameter", "20"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"]], template: function PlaylistsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "playlist-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "playlist-list", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, PlaylistsSectionComponent_Conditional_7_Template, 22, 36);
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "playlist-items", 7)(10, "playlist-item-details", 8);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(11, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mobile-hidden", !!ctx.selected_playlist());
        \u0275\u0275advance();
        \u0275\u0275classProp("mobile-hidden", !ctx.selected_playlist());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_playlist() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tablet-hidden", ctx.view_tab() === "details");
        \u0275\u0275advance();
        \u0275\u0275classProp("tablet-hidden", ctx.view_tab() === "items")("tablet-full", ctx.view_tab() === "details");
      }
    }, dependencies: [
      NavSidebarComponent,
      NavFooterComponent,
      PlaylistHeaderComponent,
      PlaylistListComponent,
      PlaylistItemsComponent,
      PlaylistItemDetailsComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], styles: ["\n@media (max-width: 1023px) {\n  .tablet-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=playlists.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistsSectionComponent, [{
    type: Component,
    args: [{ selector: "playlists-section", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <playlist-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <playlist-list
                        [class.mobile-hidden]="!!selected_playlist()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_playlist()"
                    >
                        @if (selected_playlist()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border p-2 max-lg:flex"
                            >
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectPlaylist()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_PLAYLISTS'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="flex w-1/2 flex-1 flex-col px-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{ selected_playlist().name }}
                                    </h4>
                                    @if (selected_playlist().description) {
                                        <div class="-mt-1 truncate text-xs">
                                            {{
                                                selected_playlist().description
                                            }}
                                        </div>
                                    }
                                </div>
                                <div></div>
                                @if (requires_approval()) {
                                    @if (can_approve()) {
                                        <button
                                            icon
                                            default
                                            type="button"
                                            matRipple
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="approvePlaylist()"
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-warning"
                                                >order_approve</icon
                                            >
                                        </button>
                                    } @else {
                                        <button
                                            icon
                                            default
                                            type="button"
                                            matRipple
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="requestApproval()"
                                            [disabled]="
                                                approval_request_loading()
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED'
                                                    | translate
                                            "
                                        >
                                            @if (approval_request_loading()) {
                                                <mat-spinner diameter="20" />
                                            } @else {
                                                <icon class="text-warning"
                                                    >approval</icon
                                                >
                                            }
                                        </button>
                                    }
                                }
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editPlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                }
                                @if (can_share()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="sharePlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST'
                                                | translate
                                        "
                                    >
                                        <icon>ios_share</icon>
                                    </button>
                                }
                                @if (can_delete()) {
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removePlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 my-2 flex rounded-lg border lg:hidden"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PLAYLIST_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.border-b-2]="view_tab() === 'items'"
                                    [class.text-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.opacity-60]="view_tab() !== 'items'"
                                    (click)="setViewTab('items')"
                                    [attr.aria-selected]="
                                        view_tab() === 'items'
                                    "
                                    aria-controls="playlist-items-panel"
                                    id="playlist-items-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.TAB_ITEMS' | translate
                                    }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'details'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'details'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'details'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'details'
                                    "
                                    (click)="setViewTab('details')"
                                    [attr.aria-selected]="
                                        view_tab() === 'details'
                                    "
                                    aria-controls="playlist-details-panel"
                                    id="playlist-details-tab"
                                >
                                    {{ 'COMMON.DETAILS' | translate }}
                                </button>
                            </div>
                        }
                        <div class="flex min-h-0 flex-1 flex-row">
                            <playlist-items
                                id="playlist-items-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-items-tab"
                                class="w-px max-w-full flex-1"
                                [class.tablet-hidden]="view_tab() === 'details'"
                            />
                            <playlist-item-details
                                id="playlist-details-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-details-tab"
                                class="bg-base-100"
                                [class.tablet-hidden]="view_tab() === 'items'"
                                [class.tablet-full]="view_tab() === 'details'"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      NavFooterComponent,
      PlaylistHeaderComponent,
      PlaylistListComponent,
      PlaylistItemsComponent,
      PlaylistItemDetailsComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8f0ec758500a76429adaa395bb2c67c11f969c0788a1140a6bbb384e18334921;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/playlists/playlists.component.ts */\n@media (max-width: 1023px) {\n  .tablet-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 1023px) {\n  .tablet-full {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=playlists.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }], item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistsSectionComponent, { className: "PlaylistsSectionComponent", filePath: "apps/signage-manager/src/app/playlists/playlists.component.ts", lineNumber: 301 });
})();
export {
  PlaylistsSectionComponent
};
//# sourceMappingURL=playlists.component-57PADRZF.js.map
