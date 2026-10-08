import {
  TemplateMappingsComponent,
  selectRoutedItem
} from "./chunk-ROQ5PZNO.js";
import {
  SignageDisplayService
} from "./chunk-7NTQIMJS.js";
import {
  PlaylistThumbnailComponent
} from "./chunk-C2W43Y64.js";
import {
  GroupBreadcrumbsComponent
} from "./chunk-RPIKSTML.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-6N2AQO23.js";
import "./chunk-ZMRF6RSE.js";
import {
  CdkTree,
  CdkTreeModule,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodePadding
} from "./chunk-7QBAPECA.js";
import {
  SignageZoneService
} from "./chunk-X25SZVTO.js";
import {
  LoadErrorComponent
} from "./chunk-QQANERJJ.js";
import "./chunk-7J7LTBQQ.js";
import "./chunk-3QKGP3YM.js";
import "./chunk-PZOQ7KMB.js";
import "./chunk-DZ75ROTS.js";
import {
  SignagePlaylistService
} from "./chunk-FSD5ODU2.js";
import {
  playlistStatus
} from "./chunk-VTNUNR3F.js";
import {
  SignageTemplateService
} from "./chunk-VHG5CUDZ.js";
import "./chunk-M3RPYBOW.js";
import "./chunk-4625PWRO.js";
import "./chunk-GBUKG7S5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BUXOUYWY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BZ7UY2RA.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-G4RAFQJW.js";
import "./chunk-DKQ77FMR.js";
import "./chunk-Y465EEIV.js";
import "./chunk-CANWIIRQ.js";
import "./chunk-WEGWBEFP.js";
import {
  SignageContextService
} from "./chunk-IC6PDIJY.js";
import {
  decodeEntityNames
} from "./chunk-P5YDCKEY.js";
import {
  TranslatePipe
} from "./chunk-4R7BTQAK.js";
import {
  OrganisationService
} from "./chunk-DQYXLEKZ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-VCQ7GNNO.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  computed,
  effect,
  inject,
  input,
  ph,
  resource,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VC4MJRPT.js";
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
    \u0275\u0275elementStart(0, "button", 13);
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
    \u0275\u0275elementStart(0, "span", 20);
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
    \u0275\u0275elementStart(0, "span", 21);
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
    \u0275\u0275elementStart(0, "span", 22);
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
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r3.description, " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_14_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const playlist_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePlaylist($event, playlist_r3.id));
    });
    \u0275\u0275elementStart(3, "icon", 27);
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
    \u0275\u0275elementStart(0, "div", 14)(1, "a", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "playlist-thumbnail", 16);
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275conditionalCreate(8, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_8_Template, 3, 3, "span", 20);
    \u0275\u0275conditionalCreate(9, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_9_Template, 3, 3, "span", 21)(10, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_10_Template, 3, 3, "span", 22)(11, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_11_Template, 3, 3, "span", 20)(12, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Case_12_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_13_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Conditional_14_Template, 5, 9, "button", 25);
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
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.getStatus(playlist_r3)) === "expired" ? 9 : tmp_17_0 === "pending" ? 10 : tmp_17_0 === "awaiting_review" ? 11 : tmp_17_0 === "awaiting_approval" ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(playlist_r3.description ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 14 : -1);
  }
}
function ZoneContentComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ZoneContentComponent_Conditional_0_Conditional_11_For_1_Template, 15, 15, "div", 14, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.zone_playlists());
  }
}
function ZoneContentComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 28);
    \u0275\u0275listener("retry", function ZoneContentComponent_Conditional_0_Conditional_13_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadPlaylists());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneContentComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 29);
    \u0275\u0275text(2, "playlist_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_ZONE"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneContentComponent_Conditional_0_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
function ZoneContentComponent_Conditional_0_Conditional_24_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const display_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r7.description, " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_24_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 32);
    \u0275\u0275text(3, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ZoneContentComponent_Conditional_0_Conditional_24_For_1_Conditional_7_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const display_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c3, display_r7.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 4, "SIGNAGE_MANAGER.OPEN_DISPLAY", \u0275\u0275pureFunction1(9, _c2, display_r7.display_name || display_r7.name)));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", display_r7.display_name || display_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(display_r7.description ? 7 : -1);
  }
}
function ZoneContentComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ZoneContentComponent_Conditional_0_Conditional_24_For_1_Template, 8, 11, "a", 31, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.zone_displays());
  }
}
function ZoneContentComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 28);
    \u0275\u0275listener("retry", function ZoneContentComponent_Conditional_0_Conditional_26_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reloadDisplays());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneContentComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 29);
    \u0275\u0275text(2, "tv_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_DISPLAYS_ZONE"), " ");
  }
}
function ZoneContentComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "template-mappings", 34);
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
    \u0275\u0275conditionalCreate(11, ZoneContentComponent_Conditional_0_Conditional_11_Template, 2, 0)(12, ZoneContentComponent_Conditional_0_Conditional_12_Template, 3, 3, "div", 9)(13, ZoneContentComponent_Conditional_0_Conditional_13_Template, 1, 0, "load-error")(14, ZoneContentComponent_Conditional_0_Conditional_14_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "div", 4)(17, "h5", 5)(18, "icon", 6);
    \u0275\u0275text(19, "tv");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, ZoneContentComponent_Conditional_0_Conditional_22_Template, 5, 6, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 8);
    \u0275\u0275conditionalCreate(24, ZoneContentComponent_Conditional_0_Conditional_24_Template, 2, 0)(25, ZoneContentComponent_Conditional_0_Conditional_25_Template, 3, 3, "div", 9)(26, ZoneContentComponent_Conditional_0_Conditional_26_Template, 1, 0, "load-error")(27, ZoneContentComponent_Conditional_0_Conditional_27_Template, 6, 3, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, ZoneContentComponent_Conditional_0_Conditional_28_Template, 2, 1, "div", 12);
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
    \u0275\u0275conditional(ctx_r1.zone_playlists().length > 0 ? 11 : ctx_r1.has_assigned_playlists() && ctx_r1.playlists_loading() ? 12 : ctx_r1.has_assigned_playlists() && ctx_r1.playlists_error() ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("hidden", ctx_r1.activeTab() !== "displays");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(21, 15, "SIGNAGE_MANAGER.DISPLAYS_COUNT", \u0275\u0275pureFunction1(21, _c0, ctx_r1.zone_displays().length), ctx_r1.zone_displays().length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_update() ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.zone_displays().length > 0 ? 24 : ctx_r1.zone_displays_loading() ? 25 : ctx_r1.zone_displays_error() ? 26 : 27);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.activeTab() === "templates" ? 28 : -1);
  }
}
function ZoneContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "icon", 35);
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
    this._context = inject(SignageContextService);
    this._display_service = inject(SignageDisplayService);
    this._playlist_service = inject(SignagePlaylistService);
    this._zone_service = inject(SignageZoneService);
    this.activeTab = input(
      "playlists",
      ...ngDevMode ? [{ debugName: "activeTab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = this._zone_service.selected_zone;
    this.playlist_approval_status = this._playlist_service.playlist_approval_status;
    this.can_update = this._context.can_update;
    this.zone_playlists = computed(
      () => this._playlist_service.playlistsById(this.selected_zone()?.playlists || []),
      ...ngDevMode ? [{ debugName: "zone_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists_loading = this._playlist_service.playlists_loading;
    this.playlists_error = this._playlist_service.playlists_error;
    this.has_assigned_playlists = computed(
      () => !!this.selected_zone()?.playlists?.length,
      ...ngDevMode ? [{ debugName: "has_assigned_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zone_displays = this._display_service.selected_zone_displays;
    this.zone_displays_loading = this._display_service.selected_zone_displays_loading;
    this.zone_displays_error = this._display_service.selected_zone_displays_error;
  }
  reloadPlaylists() {
    this._playlist_service.reloadPlaylists();
  }
  reloadDisplays() {
    this._display_service.reloadSelectedZoneDisplays();
  }
  addPlaylist() {
    const zone = this.selected_zone();
    if (zone)
      this._zone_service.addPlaylistToZone(zone);
  }
  removePlaylist(event, playlist_id) {
    event.preventDefault();
    event.stopPropagation();
    const zone = this.selected_zone();
    if (zone)
      this._zone_service.removePlaylistFromZone(zone, playlist_id);
  }
  addDisplay() {
    const zone = this.selected_zone();
    if (zone)
      this._display_service.addDisplayToZone(zone);
  }
  getStatus(playlist) {
    return playlistStatus(playlist, this.playlist_approval_status(), this._playlist_service.playlist_approval_requested_status());
  }
  static {
    this.\u0275fac = function ZoneContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneContentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneContentComponent, selectors: [["zone-content"]], inputs: { activeTab: [1, "activeTab"] }, decls: 2, vars: 1, consts: [[1, "flex", "h-full", "flex-col", "overflow-hidden"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "min-h-0", "flex-1", "flex-col", "gap-3", "p-3"], ["id", "zone-playlists-panel", "role", "tabpanel", "aria-labelledby", "zone-playlists-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-b", "px-4", "py-3"], [1, "text-base-content/80", "flex", "flex-1", "items-center", "gap-2", "font-medium", "tracking-wider", "uppercase"], [1, "text-lg"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matTooltip"], [1, "gap-2", "p-2"], ["role", "status", 1, "text-base-content/70", "p-6", "text-center"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-6"], ["id", "zone-displays-panel", "role", "tabpanel", "aria-labelledby", "zone-displays-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-auto", "rounded-lg", "border"], ["id", "zone-templates-panel", "role", "tabpanel", "aria-labelledby", "zone-templates-tab", 1, "bg-base-100", "border-base-300", "min-h-0", "flex-1", "overflow-hidden", "rounded-lg", "border"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "border-base-300", "bg-base-100", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "pr-2", "pl-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-w-0", "flex-1", "items-center", "gap-3", "rounded-lg", "p-1", "no-underline", "transition-colors", 3, "routerLink"], [1, "border-base-200", "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md", "border", 3, "playlist"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "mt-1", "flex", "flex-wrap", "gap-1"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "bg-secondary", "text-secondary-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "text-[10px]", "font-bold", "uppercase"], [1, "text-base-content/70", "mt-0.5", "truncate", "text-xs"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [3, "retry"], [1, "text-4xl"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:bg-base-200", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3", "no-underline", "transition-colors", 3, "routerLink"], [1, "shrink-0", "text-xl", "opacity-60"], [1, "text-base-content/70", "truncate", "text-xs"], ["target_type", "zone", 3, "target_id"], [1, "text-6xl"]], template: function ZoneContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ZoneContentComponent_Conditional_0_Template, 29, 23, "div", 0)(1, ZoneContentComponent_Conditional_1_Template, 6, 3, "div", 1);
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
      LoadErrorComponent,
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
                                                        @case ('awaiting_review') {
                                                            <span
                                                                class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                                                            >
                                                                {{
                                                                    'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                                        | translate
                                                                }}
                                                            </span>
                                                        }
                                                        @case ('awaiting_approval') {
                                                            <span
                                                                class="bg-secondary text-secondary-content shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
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
                            } @else if (
                                has_assigned_playlists() && playlists_loading()
                            ) {
                                <div
                                    class="text-base-content/70 p-6 text-center"
                                    role="status"
                                >
                                    {{ 'COMMON.LOADING' | translate }}
                                </div>
                            } @else if (
                                has_assigned_playlists() && playlists_error()
                            ) {
                                <load-error (retry)="reloadPlaylists()" />
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
                            } @else if (zone_displays_loading()) {
                                <div
                                    class="text-base-content/70 p-6 text-center"
                                    role="status"
                                >
                                    {{ 'COMMON.LOADING' | translate }}
                                </div>
                            } @else if (zone_displays_error()) {
                                <load-error (retry)="reloadDisplays()" />
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
      LoadErrorComponent,
      TranslatePipe,
      PlaylistThumbnailComponent,
      TemplateMappingsComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/zones/zone-content.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=zone-content.component.css.map */\n"] }]
  }], null, { activeTab: [{ type: Input, args: [{ isSignal: true, alias: "activeTab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneContentComponent, { className: "ZoneContentComponent", filePath: "apps/signage-manager/src/app/zones/zone-content.component.ts", lineNumber: 383 });
})();

// apps/signage-manager/src/app/zones/zone-header.component.ts
var _c02 = (a0) => ({ count: a0 });
function ZoneHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const count_r1 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(5, _c02, count_r1), count_r1), " ");
  }
}
function ZoneHeaderComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneHeaderComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addZone());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.NEW_ZONE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.CREATE_NEW_ZONE"));
  }
}
var ZoneHeaderComponent = class _ZoneHeaderComponent {
  constructor() {
    this._context = inject(SignageContextService);
    this._zone_service = inject(SignageZoneService);
    this._router = inject(Router);
    this.total_count = computed(
      () => this._zone_service.selected_zone()?.id && this._zone_service.zone_search_term().trim() ? this._zone_service.filtered_zones().length : this._zone_service.signage_zone_count(),
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_zones = this._context.can_manage_zones;
  }
  async addZone() {
    const zone = await this._zone_service.addZone();
    if (zone?.id)
      await this._router.navigate(["/zones", zone.id]);
  }
  static {
    this.\u0275fac = function ZoneHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneHeaderComponent, selectors: [["zone-header"]], decls: 11, vars: 6, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "click", "matTooltip"]], template: function ZoneHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275declareLet(6);
        \u0275\u0275conditionalCreate(7, ZoneHeaderComponent_Conditional_7_Template, 3, 7, "div", 4);
        \u0275\u0275element(8, "group-breadcrumbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "div", 5);
        \u0275\u0275conditionalCreate(10, ZoneHeaderComponent_Conditional_10_Template, 5, 6, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "SIGNAGE_MANAGER.ZONES_TITLE"), " ");
        \u0275\u0275advance(3);
        const count_r4 = \u0275\u0275storeLet(ctx.total_count());
        \u0275\u0275advance();
        \u0275\u0275conditional(count_r4 !== null ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.can_manage_zones() ? 10 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      GroupBreadcrumbsComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
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
                    @let count = total_count();
                    @if (count !== null) {
                        <div class="text-sm opacity-60">
                            {{
                                'COMMON.ITEM_COUNT'
                                    | translate: { count } : count
                            }}
                        </div>
                    }
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_manage_zones()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="addZone()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_ZONE' | translate
                    "
                    [matTooltip]="'SIGNAGE_MANAGER.NEW_ZONE' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
        MatTooltipModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneHeaderComponent, { className: "ZoneHeaderComponent", filePath: "apps/signage-manager/src/app/zones/zone-header.component.ts", lineNumber: 60 });
})();

// apps/signage-manager/src/app/zones/zone-list.component.ts
var _c03 = (a0) => ({ name: a0 });
var _c12 = (a0) => ["/zones", a0];
function ZoneListComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 8);
    \u0275\u0275listener("retry", function ZoneListComponent_Conditional_6_Conditional_0_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const node_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.onExpandedChange(node_r4, !ctx_r1.isExpanded(node_r4));
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "icon", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 2, ctx_r1.isExpanded(node_r4) ? "SIGNAGE_MANAGER.COLLAPSE_ZONE" : "SIGNAGE_MANAGER.EXPAND_ZONE", \u0275\u0275pureFunction1(5, _c03, node_r4.zone.display_name || node_r4.zone.name)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isExpanded(node_r4) ? "expand_more" : "chevron_right", " ");
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.childCount(node_r4), " ");
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 18);
    \u0275\u0275text(1, "autorenew");
    \u0275\u0275elementEnd();
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", ctx_r1.selected()?.id !== node_r4.zone.id)("opacity-90", ctx_r1.selected()?.id === node_r4.zone.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", node_r4.zone.description, " ");
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const node_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.retryChildren(node_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "icon", 22);
    \u0275\u0275text(4, "refresh");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 2, "SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY", \u0275\u0275pureFunction1(8, _c03, node_r4.zone.display_name || node_r4.zone.name)));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY", \u0275\u0275pureFunction1(10, _c03, node_r4.zone.display_name || node_r4.zone.name)));
  }
}
function ZoneListComponent_Conditional_6_cdk_tree_node_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "cdk-tree-node", 9);
    \u0275\u0275listener("expandedChange", function ZoneListComponent_Conditional_6_cdk_tree_node_2_Template_cdk_tree_node_expandedChange_0_listener($event) {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onExpandedChange(node_r4, $event));
    })("activation", function ZoneListComponent_Conditional_6_cdk_tree_node_2_Template_cdk_tree_node_activation_0_listener() {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openZone(node_r4.zone));
    });
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275conditionalCreate(2, ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_2_Template, 4, 7, "button", 11)(3, ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_3_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(4, "a", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ZoneListComponent_Conditional_6_cdk_tree_node_2_Template_a_click_4_listener() {
      const node_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectZone(node_r4.zone));
    });
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15)(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_10_Template, 2, 1, "span", 17);
    \u0275\u0275conditionalCreate(11, ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_11_Template, 2, 0, "icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_12_Template, 2, 5, "div", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, ZoneListComponent_Conditional_6_cdk_tree_node_2_Conditional_13_Template, 5, 12, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", ctx_r1.selected()?.id === node_r4.zone.id)("text-primary-content", ctx_r1.selected()?.id === node_r4.zone.id)("hover:bg-base-200", ctx_r1.selected()?.id !== node_r4.zone.id);
    \u0275\u0275property("cdkTreeNodePadding", node_r4.level)("cdkTreeNodePaddingIndent", 8)("isExpandable", ctx_r1.canExpand(node_r4))("isExpanded", ctx_r1.isExpanded(node_r4));
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 0.25 * node_r4.level + "rem")("opacity", 0.1 * node_r4.level);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canExpand(node_r4) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c12, node_r4.zone.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 22, "SIGNAGE_MANAGER.OPEN_ZONE", \u0275\u0275pureFunction1(27, _c03, node_r4.zone.display_name || node_r4.zone.name)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", node_r4.zone.display_name || node_r4.zone.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.childCount(node_r4) > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.children_loading ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.zone.description ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.children_error ? 13 : -1);
  }
}
function ZoneListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ZoneListComponent_Conditional_6_Conditional_0_Template, 1, 0, "load-error");
    \u0275\u0275elementStart(1, "cdk-tree", 6);
    \u0275\u0275template(2, ZoneListComponent_Conditional_6_cdk_tree_node_2_Template, 14, 29, "cdk-tree-node", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.error() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.flat_tree_nodes())("levelAccessor", ctx_r1.levelAccessor)("expansionKey", ctx_r1.expansionKey)("trackBy", ctx_r1.trackByNode);
  }
}
function ZoneListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ZoneListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 8);
    \u0275\u0275listener("retry", function ZoneListComponent_Conditional_8_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275elementEnd();
  }
}
function ZoneListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 25);
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
    this._router = inject(Router);
    this._zone_service = inject(SignageZoneService);
    this._org_initialised = this._org.initialised;
    this._all_zones = this._zone_service.all_zones;
    this._root_zones = this._zone_service.root_zones;
    this._children_cache = this._zone_service.zone_tree_children_cache;
    this.search = this._zone_service.zone_search_term;
    this.zones = this._zone_service.filtered_zones;
    this.selected = this._zone_service.selected_zone;
    this.loading = this._zone_service.zones_loading;
    this.error = this._zone_service.zones_error;
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
    this.expanded_zones = this._zone_service.zone_tree_expanded;
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
    this.expansionKey = (node) => node.zone.id;
    this._zone_map = computed(
      () => new Map(this._all_zones().map((zone) => [zone.id, zone])),
      ...ngDevMode ? [{ debugName: "_zone_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
            children: this.syncNodes(root_zones, existing_children),
            children_loaded: true,
            children_loading: false,
            children_error: false
          }
        ]);
        return;
      }
      this.tree_nodes.set(this.syncNodes(root_zones, existing_roots));
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
      if (this.show_search_results() || !root_node || !this.isExpanded(root_node) || this.hasLoadedChildren(root_node) || root_node.children_loading || root_node.children_error || !this.childCount(root_node)) {
        return;
      }
      untracked(() => this.loadNodeChildren(root_node));
    });
  }
  /**
   * Expand or collapse a node, from the chevron or from the arrow keys of
   * cdk-tree. Loads the children on the first expand.
   */
  onExpandedChange(node, expanded) {
    if (this.isExpanded(node) === expanded)
      return;
    this.expanded_zones.update((state) => __spreadProps(__spreadValues({}, state), {
      [node.zone.id]: expanded
    }));
    const current = this.findTreeNode(this.tree_nodes(), node.zone.id);
    if (!expanded || !current || this.hasLoadedChildren(current) || current.children_loading) {
      return;
    }
    this.loadNodeChildren(current);
  }
  retry() {
    this._zone_service.reloadZones();
  }
  retryChildren(node) {
    this.loadNodeChildren(node);
  }
  loadNodeChildren(node) {
    this.tree_nodes.update((nodes) => this.updateNode(nodes, node.zone.id, (item) => __spreadProps(__spreadValues({}, item), {
      children_loading: true,
      children_error: false
    })));
    this.loadChildren(node.zone.id);
  }
  selectZone(zone) {
    this.search.set("");
    this.selected.set(zone);
  }
  /** Open a zone from the keyboard, as a click on its link does */
  openZone(zone) {
    this.selectZone(zone);
    void this._router.navigate(["/zones", zone.id], {
      queryParamsHandling: "merge"
    });
  }
  /** Whether the node shows an expand control */
  canExpand(node) {
    return this.childCount(node) > 0 && !(this.show_search_results() && node.level === 0);
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
      children_loading: false,
      children_error: false
    };
  }
  async loadChildren(zone_id) {
    const cached_children = this.cachedChildren(zone_id);
    if (this.hasUsableCachedChildren(zone_id, cached_children)) {
      this.applyLoadedChildren(zone_id, cached_children);
      return;
    }
    const children = await this._zone_service.zoneChildren(zone_id).catch(() => null);
    if (!children) {
      this.tree_nodes.update((nodes) => this.updateNode(nodes, zone_id, (item) => __spreadProps(__spreadValues({}, item), {
        children_loading: false,
        children_error: true
      })));
      return;
    }
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
      children_error: false,
      children: this.syncNodes(children, item.children)
    })));
  }
  /**
   * Nodes for a list of zones, keeping the state of existing nodes.
   * Looks up existing nodes by id, as a zone can have thousands of children.
   */
  syncNodes(zones, existing_nodes) {
    const existing = new Map(existing_nodes.map((node) => [node.zone.id, node]));
    return zones.map((zone) => {
      const node = existing.get(zone.id);
      return node ? this.syncNode(node) : this.createNode(zone);
    });
  }
  syncNode(node) {
    const zone = this.findZone(node.zone.id) || node.zone;
    const cached_children = this.cachedChildren(node.zone.id);
    if (!node.children_loaded && !cached_children) {
      return __spreadProps(__spreadValues({}, node), { zone });
    }
    const existing_children = node.children;
    const zone_children = cached_children || this.children_lookup()[node.zone.id] || existing_children.map(({ zone: zone2 }) => zone2);
    return __spreadProps(__spreadValues({}, node), {
      zone,
      children: this.syncNodes(zone_children, existing_children)
    });
  }
  findZone(zone_id) {
    return this._zone_map().get(zone_id);
  }
  getZonePath(zone_id) {
    const root_ids = new Set(this.tree_nodes().map(({ zone }) => zone.id));
    if (!zone_id || !root_ids.size)
      return [];
    if (root_ids.has(zone_id))
      return [zone_id];
    const zone_path = [zone_id];
    const visited = new Set(zone_path);
    let current_zone = this.findZone(zone_id);
    while (current_zone?.parent_id && !visited.has(current_zone.parent_id)) {
      visited.add(current_zone.parent_id);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneListComponent, selectors: [["zone-list"]], decls: 10, vars: 15, consts: [[1, "bg-base-100", "border-base-300", "h-full", "min-w-64", "overflow-auto", "border-r", "sm:max-w-80"], [1, "border-base-300", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "disabled", "placeholder", "ngModel"], ["role", "status", 1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "p-8"], [1, "text-base-content/70", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "zone-tree", 3, "dataSource", "levelAccessor", "expansionKey", "trackBy"], ["cdkTreeNodePadding", "", "class", "border-base-300 bg-base-200/30 relative flex min-h-0 items-center gap-2 border-b pr-2", 3, "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "isExpandable", "isExpanded", "bg-primary", "text-primary-content", "hover:bg-base-200", "expandedChange", "activation", 4, "cdkTreeNodeDef"], [3, "retry"], ["cdkTreeNodePadding", "", 1, "border-base-300", "bg-base-200/30", "relative", "flex", "min-h-0", "items-center", "gap-2", "border-b", "pr-2", 3, "expandedChange", "activation", "cdkTreeNodePadding", "cdkTreeNodePaddingIndent", "isExpandable", "isExpanded"], [1, "bg-base-content", "absolute", "inset-y-1", "left-1", "rounded-sm"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors"], [1, "min-w-8"], ["matRipple", "", "queryParamsHandling", "merge", 1, "flex", "min-w-0", "flex-1", "cursor-pointer", "items-center", "gap-3", "rounded-md", "py-3", "text-left", "no-underline", "transition-colors", 3, "click", "routerLink"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-2"], [1, "min-w-0", "flex-1", "truncate", "font-medium"], [1, "bg-base-200/70", "rounded-full", "px-2", "py-0.5", "text-xs"], [1, "animate-spin", "text-lg"], [1, "mt-0.5", "truncate", "text-xs", 3, "opacity-70", "opacity-90"], ["type", "button", 1, "hover:bg-base-content/20", "text-error", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "matTooltip"], ["type", "button", 1, "hover:bg-base-content/20", "ml-1", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click"], [1, "text-xl"], [1, "mt-0.5", "truncate", "text-xs"], ["type", "button", 1, "hover:bg-base-content/20", "text-error", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-lg", "transition-colors", 3, "click", "matTooltip"], [1, "text-6xl"]], template: function ZoneListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "input", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function ZoneListComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(6, ZoneListComponent_Conditional_6_Template, 3, 5)(7, ZoneListComponent_Conditional_7_Template, 3, 3, "div", 4)(8, ZoneListComponent_Conditional_8_Template, 1, 0, "load-error")(9, ZoneListComponent_Conditional_9_Template, 6, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.search_enabled())("placeholder", \u0275\u0275pipeBind2(4, 5, "SIGNAGE_MANAGER.SEARCH_IN_ZONE", \u0275\u0275pureFunction1(11, _c03, ctx.selected()?.display_name || ctx.selected()?.name || "")));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 8, "SIGNAGE_MANAGER.SEARCH_IN_ZONE", \u0275\u0275pureFunction1(13, _c03, ctx.selected()?.display_name || ctx.selected()?.name || "")));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.tree_nodes().length ? 6 : ctx.loading() ? 7 : ctx.error() ? 8 : 9);
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
      MatTooltipModule,
      MatTooltip,
      CdkTreeModule,
      CdkTreeNodeDef,
      CdkTreeNodePadding,
      CdkTree,
      CdkTreeNode,
      IconComponent,
      LoadErrorComponent,
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
                        [(ngModel)]="search"
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
                @if (error()) {
                    <!-- Some lists loaded, so the tree may lack zones -->
                    <load-error (retry)="retry()" />
                }
                <cdk-tree
                    class="zone-tree"
                    [dataSource]="flat_tree_nodes()"
                    [levelAccessor]="levelAccessor"
                    [expansionKey]="expansionKey"
                    [trackBy]="trackByNode"
                >
                    <cdk-tree-node
                        *cdkTreeNodeDef="let node"
                        cdkTreeNodePadding
                        [cdkTreeNodePadding]="node.level"
                        [cdkTreeNodePaddingIndent]="8"
                        [isExpandable]="canExpand(node)"
                        [isExpanded]="isExpanded(node)"
                        (expandedChange)="onExpandedChange(node, $event)"
                        (activation)="openZone(node.zone)"
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
                        @if (canExpand(node)) {
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
                        @if (node.children_error) {
                            <button
                                type="button"
                                class="hover:bg-base-content/20 text-error flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY'
                                        | translate
                                            : {
                                                  name:
                                                      node.zone.display_name ||
                                                      node.zone.name,
                                              }
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ZONE_CHILDREN_RETRY'
                                        | translate
                                            : {
                                                  name:
                                                      node.zone.display_name ||
                                                      node.zone.name,
                                              }
                                "
                                (click)="
                                    retryChildren(node);
                                    $event.stopPropagation()
                                "
                            >
                                <icon class="text-xl">refresh</icon>
                            </button>
                        }
                    </cdk-tree-node>
                </cdk-tree>
            } @else if (loading()) {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center p-8"
                    role="status"
                >
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            } @else if (error()) {
                <load-error (retry)="retry()" />
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
      MatTooltipModule,
      CdkTreeModule,
      IconComponent,
      LoadErrorComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;2c33652c16b5dcd3874c8129805436130ea38e934e2511f78004fd9a8bd9ca8c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/zones/zone-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.zone-tree {\n  background: transparent;\n}\n/*# sourceMappingURL=zone-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneListComponent, { className: "ZoneListComponent", filePath: "apps/signage-manager/src/app/zones/zone-list.component.ts", lineNumber: 275 });
})();

// apps/signage-manager/src/app/zones/zones.component.ts
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
function ZonesSectionComponent_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editZone());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeZone());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.EDIT_ZONE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.EDIT_SELECTED_ZONE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 8, "SIGNAGE_MANAGER.DELETE_ZONE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "SIGNAGE_MANAGER.DELETE_SELECTED_ZONE"));
  }
}
function ZonesSectionComponent_Conditional_7_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setViewTab("templates"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "templates")("border-b-2", ctx_r1.view_tab() === "templates")("text-primary", ctx_r1.view_tab() === "templates")("opacity-60", ctx_r1.view_tab() !== "templates");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "templates");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 12, "SIGNAGE_MANAGER.NAV_TEMPLATES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r1.template_count_loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.template_count_loading() ? "?" : ctx_r1.template_count(), " ");
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
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ZonesSectionComponent_Conditional_7_Conditional_11_Template, 10, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "button", 15);
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("playlists"));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 17);
    \u0275\u0275listener("click", function ZonesSectionComponent_Conditional_7_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewTab("displays"));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, ZonesSectionComponent_Conditional_7_Conditional_24_Template, 5, 14, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 30, "SIGNAGE_MANAGER.BACK_TO_ZONES"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_zone().display_name || ctx_r1.selected_zone().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selected_zone().description ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_manage_selected_zone() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 32, "SIGNAGE_MANAGER.ZONE_DETAILS_TABS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "playlists")("border-b-2", ctx_r1.view_tab() === "playlists")("text-primary", ctx_r1.view_tab() === "playlists")("opacity-60", ctx_r1.view_tab() !== "playlists");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "playlists");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 34, "SIGNAGE_MANAGER.NAV_PLAYLISTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r1.playlist_count_loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.playlist_count_loading() ? "?" : ctx_r1.playlist_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-primary", ctx_r1.view_tab() === "displays")("border-b-2", ctx_r1.view_tab() === "displays")("text-primary", ctx_r1.view_tab() === "displays")("opacity-60", ctx_r1.view_tab() !== "displays");
    \u0275\u0275attribute("aria-selected", ctx_r1.view_tab() === "displays");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 36, "SIGNAGE_MANAGER.NAV_DISPLAYS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r1.display_count_loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.display_count_loading() ? "?" : ctx_r1.display_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.templates_enabled() ? 24 : -1);
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
    this._context = inject(SignageContextService);
    this._display_service = inject(SignageDisplayService);
    this._playlist_service = inject(SignagePlaylistService);
    this._template_service = inject(SignageTemplateService);
    this._zone_service = inject(SignageZoneService);
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
    this.templates_enabled = this._context.templates_enabled;
    this.view_tab = signal(
      "playlists",
      ...ngDevMode ? [{ debugName: "view_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = this._zone_service.selected_zone;
    this.can_manage_selected_zone = computed(
      () => {
        const zone = this.selected_zone();
        return this._context.can_manage_zones() && !!zone?.tags?.includes("signage");
      },
      ...ngDevMode ? [{ debugName: "can_manage_selected_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_mappings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_template_mappings" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const id = this.selected_zone()?.id;
        return this.templates_enabled() && id ? {
          id,
          revision: this._template_service.template_mappings_revision()
        } : void 0;
      },
      loader: ({ params }) => this._template_service.listTemplateMappings({ zone_id: params.id })
    }));
    this.template_count_loading = this._template_mappings.isLoading;
    this.playlist_count_loading = this._playlist_service.playlists_loading;
    this.display_count_loading = this._display_service.selected_zone_displays_loading;
    this.template_count = computed(
      () => this._template_mappings.hasValue() ? this._template_mappings.value().length : 0,
      ...ngDevMode ? [{ debugName: "template_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_count = computed(
      () => this._playlist_service.playlistsById(this.selected_zone()?.playlists || []).length,
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_count = computed(
      () => this._display_service.selected_zone_displays().length,
      ...ngDevMode ? [{ debugName: "display_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const route_tab = parseZoneTab(this.tab());
      const available_tab = route_tab === "templates" && !this.templates_enabled() ? "playlists" : route_tab;
      if (available_tab !== this.view_tab()) {
        this.view_tab.set(available_tab);
      }
    });
    selectRoutedItem({
      id: this.id,
      list: this._zone_service.all_zones,
      selected: this._zone_service.selected_zone,
      // `all_zones` holds only the first 500 zones of the group
      load: async (id) => decodeEntityNames(await ph(id))
    });
  }
  deselectZone() {
    this._zone_service.selected_zone.set(null);
    this._router.navigate(["/zones"], {});
  }
  editZone() {
    const zone = this.selected_zone();
    if (zone)
      this._zone_service.editZone(zone);
  }
  async removeZone() {
    const zone = this.selected_zone();
    if (!zone || !await this._zone_service.removeZone(zone))
      return;
    await this._router.navigate(["/zones"], {});
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZonesSectionComponent, selectors: [["zones-section"]], inputs: { id: [1, "id"], tab: [1, "tab"] }, decls: 10, vars: 6, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "mobile-full"], [1, "flex", "min-h-0", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "h-1/2", "flex-1", 3, "activeTab"], [1, "bg-base-100", "border-base-300", "relative", "z-10", "mx-2", "flex", "shrink-0", "items-center", "gap-2", "rounded-b-lg", "border", "px-4", "py-3"], ["icon", "", "type", "button", "matRipple", "", 1, "desktop-hidden", 3, "click"], [1, "shrink-0", "text-2xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-lg", "font-medium"], [1, "text-base-content/80", "truncate", "text-sm"], ["role", "tablist", 1, "bg-base-100", "border-base-300", "relative", "z-10", "mx-2", "mt-2", "flex", "shrink-0", "overflow-hidden", "rounded-lg", "border"], ["type", "button", "role", "tab", "aria-controls", "zone-playlists-panel", "id", "zone-playlists-tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "bg-base-content/5", "inline-flex", "h-6", "min-w-6", "items-center", "justify-center", "rounded-full", "px-1.5", "text-xs", "tabular-nums"], ["type", "button", "role", "tab", "aria-controls", "zone-displays-panel", "id", "zone-displays-tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "zone-templates-panel", "id", "zone-templates-tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "border-primary", "border-b-2", "text-primary", "opacity-60"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "type", "button", "matRipple", "", 3, "click", "matTooltip"], ["type", "button", "role", "tab", "aria-controls", "zone-templates-panel", "id", "zone-templates-tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click"]], template: function ZonesSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "zone-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "zone-list", 5);
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275conditionalCreate(7, ZonesSectionComponent_Conditional_7_Template, 25, 38);
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
      MatTooltipModule,
      MatTooltip,
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
                        class="flex min-h-0 w-px flex-1 flex-col overflow-hidden"
                        [class.mobile-hidden]="!selected_zone()"
                    >
                        @if (selected_zone()) {
                            <div
                                class="bg-base-100 border-base-300 relative z-10 mx-2 flex shrink-0 items-center gap-2 rounded-b-lg border px-4 py-3"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
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
                                @if (can_manage_selected_zone()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_ZONE'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removeZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_ZONE'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                            </div>
                            <div
                                class="bg-base-100 border-base-300 relative z-10 mx-2 mt-2 flex shrink-0 overflow-hidden rounded-lg border"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ZONE_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors"
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
                                        'SIGNAGE_MANAGER.NAV_PLAYLISTS'
                                            | translate
                                    }}
                                    <span
                                        class="bg-base-content/5 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs tabular-nums"
                                        [attr.aria-busy]="
                                            playlist_count_loading()
                                        "
                                    >
                                        {{
                                            playlist_count_loading()
                                                ? '?'
                                                : playlist_count()
                                        }}
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors"
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
                                        'SIGNAGE_MANAGER.NAV_DISPLAYS'
                                            | translate
                                    }}
                                    <span
                                        class="bg-base-content/5 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs tabular-nums"
                                        [attr.aria-busy]="
                                            display_count_loading()
                                        "
                                    >
                                        {{
                                            display_count_loading()
                                                ? '?'
                                                : display_count()
                                        }}
                                    </span>
                                </button>
                                @if (templates_enabled()) {
                                    <button
                                        type="button"
                                        role="tab"
                                        class="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors"
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
                                        <span
                                            class="bg-base-content/5 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs tabular-nums"
                                            [attr.aria-busy]="
                                                template_count_loading()
                                            "
                                        >
                                            {{
                                                template_count_loading()
                                                    ? '?'
                                                    : template_count()
                                            }}
                                        </span>
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
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;8eac906e2c3493bde876d274a7a1452ede86c23d5ec71ac8ae62cdbdcc4a851c;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/zones/zones.component.ts */\n@media (max-width: 639px) {\n  .mobile-hidden {\n    display: none !important;\n  }\n}\n@media (max-width: 639px) {\n  .mobile-full {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=zones.component.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZonesSectionComponent, { className: "ZonesSectionComponent", filePath: "apps/signage-manager/src/app/zones/zones.component.ts", lineNumber: 295 });
})();
export {
  ZonesSectionComponent
};
//# debugId=28320d7d-607c-599d-9cc3-75b4326021ac
//# sourceMappingURL=zones.component-GLSCYZVL.js.map
