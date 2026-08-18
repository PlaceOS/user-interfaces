import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-HHFOTCL2.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-IXQBID5O.js";
import {
  DurationFieldComponent
} from "./chunk-NBHL672N.js";
import {
  takeUntilDestroyed
} from "./chunk-MJQYOSXE.js";
import {
  DateFieldComponent
} from "./chunk-5OPPMSUI.js";
import "./chunk-BED4FLF7.js";
import {
  openConfirmModal
} from "./chunk-RRWKOH2N.js";
import "./chunk-B6EINQ2L.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AuthenticatedImageDirective,
  FullscreenModalShellComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  MatSlider,
  MatSliderModule,
  MatSliderThumb,
  SettingsToggleComponent,
  TimeFieldComponent,
  UploadPermissionsModalComponent
} from "./chunk-OUT5CQTV.js";
import {
  isValidUrl
} from "./chunk-CFVCOR7Y.js";
import "./chunk-K67HH6ZP.js";
import "./chunk-UAZJXFTB.js";
import {
  ActivatedRoute,
  Ah,
  AsyncHandler,
  AsyncPipe,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  Es,
  FormControl,
  FormControlName,
  FormField,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  Injectable,
  Input,
  Is,
  LowerCasePipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  Na,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgTemplateOutlet,
  OrganisationService,
  Output,
  Pipe,
  ReactiveFormsModule,
  Rh,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SettingsService,
  Sh,
  SlicePipe,
  TranslatePipe,
  UPLOAD_PERMISSIONS_MODAL,
  UploadsService,
  Validators,
  X,
  Yt,
  _a,
  _h,
  addYears,
  bh,
  computed,
  currentUser,
  da,
  effect,
  eh,
  endOfDay,
  fa,
  fh,
  form,
  forwardRef,
  getUnixTime,
  gh,
  ha,
  hr,
  i18n,
  inject,
  input,
  kh,
  lh,
  mh,
  nextValueFrom,
  nh,
  notifyError,
  notifyInfo,
  notifySuccess,
  oh,
  output,
  padLength,
  pt,
  qa,
  qh,
  qs,
  required,
  resource,
  setClassMetadata,
  settingSignal,
  sh,
  signal,
  startOfDay,
  startOfMinute,
  unique,
  vh,
  xh,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DXPN6VFM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/media-duration.pipe.ts
var MediaDurationPipe = class _MediaDurationPipe {
  transform(period_length, show_ms = false) {
    const hours = Math.floor(period_length / 60 / 60);
    const minutes = Math.floor(period_length / 60 % 60);
    const seconds = Math.floor(period_length % 60);
    const milliseconds = Math.floor(period_length * 1e3 % 1e3);
    let str = `${padLength(minutes)}:${padLength(seconds)}`;
    if (show_ms) {
      str += `.${padLength(milliseconds, 3)}`;
    }
    if (hours > 0)
      str = `${padLength(hours)}:${str}`;
    return str;
  }
  static {
    this.\u0275fac = function MediaDurationPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaDurationPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "mediaDuration", type: _MediaDurationPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaDurationPipe, [{
    type: Pipe,
    args: [{
      name: "mediaDuration"
    }]
  }], null, null);
})();

// libs/components/src/lib/zone.pipe.ts
var ZONE_LIST = {};
var EMPTY_ZONE = new Yt();
var ZonePipe = class _ZonePipe {
  async transform(id) {
    if (ZONE_LIST[id])
      return ZONE_LIST[id];
    const zone = await nh(id).catch((_) => null);
    if (!zone)
      return EMPTY_ZONE;
    ZONE_LIST[id] = zone;
    return zone;
  }
  static {
    this.\u0275fac = function ZonePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZonePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "zone", type: _ZonePipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonePipe, [{
    type: Pipe,
    args: [{
      name: "zone"
    }]
  }], null, null);
})();

// apps/concierge/src/app/signage/search-overlay.component.ts
var _c0 = (a0) => ({ item: a0 });
function SearchOverlayComponent_For_9_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchOverlayComponent_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SearchOverlayComponent_For_9_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.result_template())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, item_r2));
  }
}
function SearchOverlayComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.name || item_r2, " ");
  }
}
function SearchOverlayComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SearchOverlayComponent_For_9_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.emit(item_r2));
    });
    \u0275\u0275conditionalCreate(1, SearchOverlayComponent_For_9_Conditional_1_Template, 1, 4, "ng-container")(2, SearchOverlayComponent_For_9_Conditional_2_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.result_template() ? 1 : 2);
  }
}
function SearchOverlayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SearchOverlayComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close.emit());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SIGNAGE_SEARCH_EMPTY"), " ");
  }
}
var SearchOverlayComponent = class _SearchOverlayComponent {
  constructor() {
    this.item_list = input(
      [],
      ...ngDevMode ? [{ debugName: "item_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.result_template = input(
      void 0,
      ...ngDevMode ? [{ debugName: "result_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = output();
    this.close = output();
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_items = computed(
      () => {
        const term = this.search().trim().toLowerCase();
        const items = this.item_list() || [];
        if (!term)
          return items;
        return items.filter((item) => `${item?.name || item || ""}`.toLowerCase().includes(term));
      },
      ...ngDevMode ? [{ debugName: "filtered_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function SearchOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchOverlayComponent, selectors: [["search-overlay"]], inputs: { item_list: [1, "item_list"], result_template: [1, "result_template"] }, outputs: { selected: "selected", close: "close" }, decls: 14, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "items-center", "p-8", 3, "click", "keydown.esc"], [1, "bg-base-content", "absolute", "inset-0", "z-0", "opacity-70"], [1, "relative", "z-10", "mx-auto", "mb-4", "w-lg", "max-w-[calc(100%-2rem)]", 3, "click"], [1, "border-base-300", "bg-base-100", "text-base-content", "w-full", "rounded-[4rem]", "border", "py-4", "pr-6", "pl-14", "text-xl", "shadow-sm", 3, "ngModelChange", "ngModel", "placeholder"], [1, "pointer-events-none", "absolute", "top-1/2", "left-3", "-translate-y-1/2", "text-3xl"], [1, "z-10", "mx-auto", "max-h-[65%]", "w-lg", "max-w-[calc(100%-2rem)]", "overflow-auto", "rounded-sm", 3, "click"], ["matRipple", "", 1, "w-full", "text-left"], ["matRipple", "", 1, "text-base-100", "w-full", "p-4"], ["icon", "", "matRipple", "", 1, "text-base-100", "absolute", "top-10", "right-8", "h-12", "w-12", "text-xl"], ["matRipple", "", 1, "w-full", "text-left", 3, "click"], [1, "border-base-300", "bg-base-100", "hover:bg-base-200", "w-full", "border", "p-4"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matRipple", "", 1, "text-base-100", "w-full", "p-4", 3, "click"], [1, "opacity-30"]], template: function SearchOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_0_listener() {
          return ctx.close.emit();
        })("keydown.esc", function SearchOverlayComponent_Template_div_keydown_esc_0_listener() {
          return ctx.close.emit();
        }, \u0275\u0275resolveWindow);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_2_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(3, "input", 3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SearchOverlayComponent_Template_input_ngModelChange_3_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(5, "icon", 4);
        \u0275\u0275text(6, " search ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_7_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275repeaterCreate(8, SearchOverlayComponent_For_9_Template, 3, 1, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(10, SearchOverlayComponent_Conditional_10_Template, 4, 3, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8)(12, "icon");
        \u0275\u0275text(13, "close");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 3, "COMMON.SEARCH"));
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.filtered_items());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered_items().length ? 10 : -1);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatRippleModule,
      MatRipple,
      CommonModule,
      NgTemplateOutlet,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchOverlayComponent, [{
    type: Component,
    args: [{ selector: "search-overlay", template: `
        <div
            class="absolute inset-0 flex flex-col items-center p-8"
            (click)="close.emit()"
            (window:keydown.esc)="close.emit()"
        >
            <div class="bg-base-content absolute inset-0 z-0 opacity-70"></div>
            <div
                class="relative z-10 mx-auto mb-4 w-lg max-w-[calc(100%-2rem)]"
                (click)="$event.stopPropagation()"
            >
                <input
                    class="border-base-300 bg-base-100 text-base-content w-full rounded-[4rem] border py-4 pr-6 pl-14 text-xl shadow-sm"
                    [(ngModel)]="search"
                    [placeholder]="'COMMON.SEARCH' | translate"
                />
                <icon
                    class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-3xl"
                >
                    search
                </icon>
            </div>
            <div
                class="z-10 mx-auto max-h-[65%] w-lg max-w-[calc(100%-2rem)] overflow-auto rounded-sm"
                (click)="$event.stopPropagation()"
            >
                @for (item of filtered_items(); track item) {
                    <button
                        matRipple
                        class="w-full text-left"
                        (click)="selected.emit(item)"
                    >
                        @if (result_template()) {
                            <ng-container
                                *ngTemplateOutlet="
                                    result_template();
                                    context: { item: item }
                                "
                            ></ng-container>
                        } @else {
                            <div
                                class="border-base-300 bg-base-100 hover:bg-base-200 w-full border p-4"
                            >
                                {{ item.name || item }}
                            </div>
                        }
                    </button>
                }
                @if (!filtered_items().length) {
                    <button
                        matRipple
                        class="text-base-100 w-full p-4"
                        (click)="close.emit()"
                    >
                        <div class="opacity-30">
                            {{
                                'APP.CONCIERGE.SIGNAGE_SEARCH_EMPTY' | translate
                            }}
                        </div>
                    </button>
                }
            </div>
            <button
                icon
                matRipple
                class="text-base-100 absolute top-10 right-8 h-12 w-12 text-xl"
            >
                <icon>close</icon>
            </button>
        </div>
    `, imports: [
      FormsModule,
      IconComponent,
      MatRippleModule,
      TranslatePipe,
      CommonModule
    ] }]
  }], null, { item_list: [{ type: Input, args: [{ isSignal: true, alias: "item_list", required: false }] }], result_template: [{ type: Input, args: [{ isSignal: true, alias: "result_template", required: false }] }], selected: [{ type: Output, args: ["selected"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchOverlayComponent, { className: "SearchOverlayComponent", filePath: "apps/concierge/src/app/signage/search-overlay.component.ts", lineNumber: 101 });
})();

// apps/concierge/src/app/signage/signage-approve-playlist-modal.component.ts
var _c02 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item?.id;
function SignageApprovePlaylistModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
    \u0275\u0275elementStart(1, "div", 21)(2, "icon", 22);
    \u0275\u0275text(3, "expand_content");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r3.thumbnail_url);
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 18);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_For_14_Template_button_click_1_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previewItem(item_r3));
    });
    \u0275\u0275conditionalCreate(2, SignageApprovePlaylistModalComponent_Conditional_5_For_14_Conditional_2_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.thumbnail_url ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 23);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.NO_ITEMS"), " ");
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_For_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r6.thumbnail_url);
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 18);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_For_28_Template_button_click_1_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previewItem(item_r6));
    });
    \u0275\u0275conditionalCreate(2, SignageApprovePlaylistModalComponent_Conditional_5_For_28_Conditional_2_Template, 1, 1, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r6.thumbnail_url ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.name);
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 23);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.NO_ITEMS"), " ");
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h3");
    \u0275\u0275text(5, "Version to approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "div", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, SignageApprovePlaylistModalComponent_Conditional_5_For_14_Template, 5, 2, "div", 11, _forTrack0, false, SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_15_Template, 6, 3, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 7)(18, "h3");
    \u0275\u0275text(19, "Previous version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 8);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 9)(24, "div", 14);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(27, SignageApprovePlaylistModalComponent_Conditional_5_For_28_Template, 5, 2, "div", 11, _forTrack0, false, SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_29_Template, 6, 3, "div", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "footer", 15)(31, "button", 16);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.undoChanges());
    });
    \u0275\u0275text(32, " Undo Changes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 17);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve());
    });
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 7, ctx_r3.current_version()?.updated_at * 1e3, "dd MMM, HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(12, 10, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(23, _c02, ctx_r3.current_version()?.items.length || 0), ctx_r3.current_version()?.items.length || 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.current_media());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 14, ctx_r3.previous_version()?.updated_at * 1e3, "dd MMM, HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(26, 17, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(25, _c02, ctx_r3.previous_version()?.items.length || 0), ctx_r3.previous_version()?.items.length || 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.previous_media());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 21, "COMMON.APPROVE"), " ");
  }
}
function SignageApprovePlaylistModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main")(1, "div", 25);
    \u0275\u0275element(2, "mat-spinner", 26);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r3.loading()));
  }
}
var SignageApprovePlaylistModalComponent = class _SignageApprovePlaylistModalComponent {
  constructor() {
    this._playlist = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._service = inject(SignageStateService);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_id = signal(
      this._playlist?.id || "",
      ...ngDevMode ? [{ debugName: "_playlist_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_versions = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_playlist_versions" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._playlist_id(),
      defaultValue: [],
      loader: async ({ params: id }) => {
        if (!id)
          return [];
        this.loading.set("Loading versions...");
        const result = await Ah(id, {
          limit: 2
        });
        this.loading.set("");
        return result;
      }
    }));
    this.playlist_versions = this._playlist_versions.value;
    this.playlist_media = computed(
      () => {
        const playlists = this.playlist_versions();
        const media = this._service.media();
        return playlists.map((playlist) => playlist.items.map((id) => media.find((m) => m?.id === id)));
      },
      ...ngDevMode ? [{ debugName: "playlist_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_version = computed(
      () => this.playlist_versions()[0],
      ...ngDevMode ? [{ debugName: "current_version" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previous_version = computed(
      () => this.playlist_versions()[1],
      ...ngDevMode ? [{ debugName: "previous_version" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_media = computed(
      () => this.playlist_media()[0] || [],
      ...ngDevMode ? [{ debugName: "current_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previous_media = computed(
      () => this.playlist_media()[1] || [],
      ...ngDevMode ? [{ debugName: "previous_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async undoChanges() {
    this.loading.set("Undoing changes...");
    this._dialog_ref.disableClose = true;
    const [, previous] = this.playlist_versions();
    if (!previous) {
      this.loading.set("");
      this._dialog_ref.disableClose = false;
      return;
    }
    await Rh(this._playlist?.id, previous.items);
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_UNDONE"));
    this._dialog_ref.close();
    this._service.changed();
  }
  async approve() {
    this.loading.set("Approving playlist...");
    this._dialog_ref.disableClose = true;
    await qh(this._playlist?.id);
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVED"));
    this._dialog_ref.close();
    this._service.changed();
  }
  previewItem(item) {
    this._service.previewMedia(item);
  }
  static {
    this.\u0275fac = function SignageApprovePlaylistModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageApprovePlaylistModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageApprovePlaylistModalComponent, selectors: [["signage-approve-playlist-modal"]], decls: 7, vars: 2, consts: [[1, "p-2"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[60vh]", "gap-2", "overflow-auto", "py-2"], [1, "flex", "gap-2"], [1, "border-base-300", "bg-success-light", "w-[24rem]", "rounded-sm", "border"], [1, "border-base-300", "bg-base-200", "flex", "items-center", "space-x-8", "rounded-sm", "border-b", "px-4", "py-2"], [1, "font-mono", "text-xs", "opacity-50"], [1, "space-y-2", "p-2"], [1, "px-2", "text-sm"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], [1, "border-base-300", "bg-error-light", "w-[24rem]", "rounded-sm", "border"], [1, "space-y-2", "px-2", "text-sm"], [1, "bg-base-200", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "click"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["matRipple", "", 1, "bg-base-200", "h-10", "w-10", "shrink-0", "overflow-hidden", "rounded-sm", 3, "click"], [1, "truncate"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-lg"], [1, "text-4xl"], [1, "text-sm"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"]], template: function SignageApprovePlaylistModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Approve Playlist");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, SignageApprovePlaylistModalComponent_Conditional_4_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, SignageApprovePlaylistModalComponent_Conditional_5_Template, 36, 27)(6, SignageApprovePlaylistModalComponent_Conditional_6_Template, 6, 3, "main");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageApprovePlaylistModalComponent, [{
    type: Component,
    args: [{ selector: "signage-approve-playlist-modal", template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">Approve Playlist</h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] gap-2 overflow-auto py-2">
                    <div class="flex gap-2">
                        <div
                            class="border-base-300 bg-success-light w-[24rem] rounded-sm border"
                        >
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Version to approve</h3>
                                <div class="font-mono text-xs opacity-50">
                                    {{
                                        current_version()?.updated_at * 1000
                                            | date: 'dd MMM, HH:mm'
                                    }}
                                </div>
                            </div>
                            <div class="space-y-2 p-2">
                                <div class="px-2 text-sm">
                                    {{
                                        'COMMON.ITEM_COUNT'
                                            | translate
                                                : {
                                                      count:
                                                          current_version()
                                                              ?.items.length ||
                                                          0,
                                                  }
                                                : current_version()?.items
                                                      .length || 0
                                    }}
                                </div>
                                @for (item of current_media(); track item?.id) {
                                    <div
                                        class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
                                    >
                                        <button
                                            class="bg-base-200 h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                                            matRipple
                                            (click)="previewItem(item)"
                                        >
                                            @if (item.thumbnail_url) {
                                                <img
                                                    auth
                                                    [source]="
                                                        item.thumbnail_url
                                                    "
                                                    class="h-full w-full object-cover"
                                                />
                                                <div
                                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                                >
                                                    <icon class="text-lg"
                                                        >expand_content</icon
                                                    >
                                                </div>
                                            }
                                        </button>
                                        <span class="truncate">{{
                                            item.name
                                        }}</span>
                                    </div>
                                } @empty {
                                    <div
                                        class="flex flex-col items-center justify-center p-8 opacity-30"
                                    >
                                        <icon class="text-4xl">hide_image</icon>
                                        <p class="text-sm">
                                            {{ 'COMMON.NO_ITEMS' | translate }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-error-light w-[24rem] rounded-sm border"
                        >
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Previous version</h3>
                                <div class="font-mono text-xs opacity-50">
                                    {{
                                        previous_version()?.updated_at * 1000
                                            | date: 'dd MMM, HH:mm'
                                    }}
                                </div>
                            </div>
                            <div class="space-y-2 p-2">
                                <div class="space-y-2 px-2 text-sm">
                                    {{
                                        'COMMON.ITEM_COUNT'
                                            | translate
                                                : {
                                                      count:
                                                          previous_version()
                                                              ?.items.length ||
                                                          0,
                                                  }
                                                : previous_version()?.items
                                                      .length || 0
                                    }}
                                </div>
                                @for (
                                    item of previous_media();
                                    track item?.id
                                ) {
                                    <div
                                        class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
                                    >
                                        <button
                                            class="bg-base-200 h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                                            matRipple
                                            (click)="previewItem(item)"
                                        >
                                            @if (item.thumbnail_url) {
                                                <img
                                                    auth
                                                    [source]="
                                                        item.thumbnail_url
                                                    "
                                                    class="h-full w-full object-cover"
                                                />
                                            }
                                        </button>
                                        <span class="truncate">{{
                                            item.name
                                        }}</span>
                                    </div>
                                } @empty {
                                    <div
                                        class="flex flex-col items-center justify-center p-8 opacity-30"
                                    >
                                        <icon class="text-4xl">hide_image</icon>
                                        <p class="text-sm">
                                            {{ 'COMMON.NO_ITEMS' | translate }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </main>
                <footer
                    class="bg-base-200 flex items-center justify-end space-x-2 rounded-sm p-2"
                >
                    <button
                        btn
                        matRipple
                        class="inverse bg-base-100 w-40"
                        (click)="undoChanges()"
                    >
                        Undo Changes
                    </button>
                    <button btn matRipple class="w-40" (click)="approve()">
                        {{ 'COMMON.APPROVE' | translate }}
                    </button>
                </footer>
            } @else {
                <main>
                    <div
                        class="flex flex-col items-center justify-center space-y-4"
                    >
                        <mat-spinner diameter="32" />
                        <p>{{ loading() | translate }}</p>
                    </div>
                </main>
            }
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageApprovePlaylistModalComponent, { className: "SignageApprovePlaylistModalComponent", filePath: "apps/concierge/src/app/signage/signage-approve-playlist-modal.component.ts", lineNumber: 216 });
})();

// apps/concierge/src/app/signage/signage-display-modal.component.ts
var SignageDisplayModalComponent = class _SignageDisplayModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display = this._data.display;
    this.model = signal(
      {
        id: this._data.display?.id || "",
        name: this._data.display?.display_name || "",
        description: this._data.display?.description || "",
        orientation: this._data.display?.orientation || "unspecified"
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
    });
  }
  async save() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    const form_value = this.model();
    const new_display = new qs(__spreadProps(__spreadValues({}, form_value), {
      name: `SIGNAGE ${form_value.name}`,
      display_name: form_value.name,
      signage: true,
      zones: unique([
        this._org.organisation.id,
        this._org.region?.id,
        this._org.building?.id,
        ...this.display.zones
      ].filter((_) => !!_))
    }));
    const method = this.display.id ? da(this.display.id, new_display) : fa(new_display);
    const result = await method;
    this._dialog_ref.close(result);
  }
  static {
    this.\u0275fac = function SignageDisplayModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageDisplayModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplayModalComponent, selectors: [["signage-display-modal"]], decls: 42, vars: 42, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], ["for", "orientation"], [3, "formField", "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"]], template: function SignageDisplayModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageDisplayModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 1)(5, "label", 2);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span", 3);
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-form-field", 4);
        \u0275\u0275element(11, "input", 5);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 1)(17, "label", 6);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 4);
        \u0275\u0275element(21, "textarea", 7);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 1)(24, "label", 8);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 4)(28, "mat-select", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "mat-option", 10);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-option", 11);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 12);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-option", 13);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 16, ctx.display.id ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_EDIT" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 18, "APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 20, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 22, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 24, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 28, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 30, "APP.CONCIERGE.SIGNAGE_ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.orientation)("placeholder", \u0275\u0275pipeBind1(29, 32, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 34, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 36, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 38, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 40, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"));
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      FormField,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageDisplayModalComponent, [{
    type: Component,
    args: [{ selector: "signage-display-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (display.id
                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_NEW'
                ) | translate
            "
            (confirm)="save()"
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING' | translate)
                    : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="orientation">{{
                        'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [formField]="form.orientation"
                            [placeholder]="
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                    | translate
                            "
                        >
                            <mat-option value="unspecified">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="landscape">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                    | translate
                            }}</mat-option>
                            <mat-option value="portrait">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                    | translate
                            }}</mat-option>
                            <mat-option value="square">{{
                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      FormField,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplayModalComponent, { className: "SignageDisplayModalComponent", filePath: "apps/concierge/src/app/signage/signage-display-modal.component.ts", lineNumber: 107 });
})();

// apps/concierge/src/app/signage/signage-media-modal.component.ts
function SignageMediaModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 3);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.url, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
function SignageMediaModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.thumbnail || ctx_r0.url);
  }
}
function SignageMediaModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slider", 28);
    \u0275\u0275element(8, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "FORM.TIME_START"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx_r0.model().start_time / 1e3, true), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (ctx_r0.item.video_length || 3e5) - 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.start_time);
    \u0275\u0275control();
  }
}
function SignageMediaModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.model().play_time / 1e3, true), " ");
  }
}
function SignageMediaModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.DEFAULT"), " (", ctx_r0.item.video_length ? \u0275\u0275pipeBind1(3, 4, ctx_r0.item.video_length / 1e3) : "", ") ");
  }
}
var SignageMediaModalComponent = class _SignageMediaModalComponent {
  get media_type() {
    if (!this.file)
      return this.item.media_type;
    return (this.file.type.includes("video") ? "video" : this.file.type.includes("image") ? "image" : "") || this.item.media_type;
  }
  get url() {
    if (this.item.id)
      return this.item.media_url;
    if (this._file_url)
      return this._file_url;
    this._file_url = URL.createObjectURL(this.file);
    return this._file_url;
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item = this._data.media;
    this.file = this._data.file;
    this.thumbnail = this._data.file_thumbnail || this._data.media.thumbnail_url;
    this.model = signal(
      {
        name: "",
        description: "",
        animation: Is.Default,
        start_time: 0,
        play_time: null,
        valid_from: startOfDay(Date.now()).valueOf(),
        valid_until: addYears(endOfDay(Date.now()), 10).valueOf()
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
    });
    this.preview = () => this._data.preview({
      media_url: this.url,
      media_type: this.media_type,
      name: this.model().name
    });
    const media = this._data.media;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      name: media.name ?? m.name,
      description: media.description ?? m.description,
      animation: media.animation ?? m.animation,
      start_time: media.start_time ?? m.start_time,
      play_time: media.play_time ?? m.play_time,
      valid_from: (media.valid_from || 0) * 1e3,
      valid_until: (media.valid_until || 0) * 1e3
    }));
    if (this._data.file) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { name: this._data.file.name }));
    }
    if (this._data.file_metadata) {
      this.item.video_length = Math.floor(this._data.file_metadata[1] * 1e3);
    }
  }
  ngOnDestroy() {
    if (this._file_url)
      URL.revokeObjectURL(this._file_url);
  }
  async saveMedia() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const form_value = __spreadValues({}, this.model());
    const new_media = __spreadValues(__spreadValues({}, this.item), form_value);
    if (form_value.valid_from) {
      new_media.valid_from = getUnixTime(startOfDay(form_value.valid_from));
    } else
      delete new_media.valid_from;
    if (form_value.valid_until) {
      new_media.valid_until = getUnixTime(endOfDay(form_value.valid_until));
    } else
      delete new_media.valid_until;
    const onError = (e) => {
      this._dialog_ref.disableClose = false;
      this.loading.set(false);
      notifyError(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_ERROR", { error: e }));
      throw e;
    };
    if (this.item.id) {
      await fh(this.item.id, new_media).catch(onError);
    } else {
      await this._data.onAdd(this.file, new_media).catch(onError);
    }
    this._dialog_ref.disableClose = false;
    this._dialog_ref.close();
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS"));
  }
  static {
    this.\u0275fac = function SignageMediaModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaModalComponent, selectors: [["signage-media-modal"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ])], decls: 72, vars: 76, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col"], ["matRipple", "", 1, "bg-base-300", "border-base-300", "pointer-events-none", "relative", "mx-auto", "mb-4", "h-48", "w-full", "overflow-hidden", "rounded-xl", "border", "shadow", 3, "click"], [1, "h-screen", "w-full", "object-contain", "object-center", 3, "src"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "top-2", "left-2", "rounded-sm", "px-2", "py-1", "text-xs", "capitalize", "shadow"], ["for", "name"], ["appearance", "outline"], ["matInput", "", 3, "formField", "placeholder"], [1, "flex", "items-center", "space-x-4"], ["for", "play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "opacity-30"], ["step", "100", 3, "min", "max"], ["matSliderThumb", "", 3, "formField"], ["for", "animation"], ["placeholder", "Playlist Default", 3, "formField"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], [3, "formField", "clear"], ["for", "valid-until"], [3, "from", "formField", "clear"], ["for", "start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"]], template: function SignageMediaModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignageMediaModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveMedia();
        });
        \u0275\u0275elementStart(3, "form")(4, "div", 1)(5, "button", 2);
        \u0275\u0275listener("click", function SignageMediaModalComponent_Template_button_click_5_listener() {
          return ctx.preview();
        });
        \u0275\u0275conditionalCreate(6, SignageMediaModalComponent_Conditional_6_Template, 2, 4, "iframe", 3)(7, SignageMediaModalComponent_Conditional_7_Template, 1, 1, "img", 4);
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "label", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 7);
        \u0275\u0275element(14, "input", 8);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(16, "mat-error");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(19, SignageMediaModalComponent_Conditional_19_Template, 9, 9);
        \u0275\u0275elementStart(20, "div", 9)(21, "label", 10);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275conditionalCreate(25, SignageMediaModalComponent_Conditional_25_Template, 2, 4)(26, SignageMediaModalComponent_Conditional_26_Template, 4, 6, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-slider", 13);
        \u0275\u0275element(28, "input", 14);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "label", 15);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-form-field", 7)(33, "mat-select", 16)(34, "mat-option", 17);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-option", 17);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 17);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-option", 17);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 17);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-option", 17);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-option", 17);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "label", 18);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field", 19);
        \u0275\u0275element(59, "textarea", 20);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 21)(62, "div", 22)(63, "label", 23);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "a-date-field", 24);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 22)(68, "label", 25);
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "a-date-field", 26);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 40, ctx.item.id ? "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT" : "APP.CONCIERGE.SIGNAGE_MEDIA_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 42, "APP.CONCIERGE.SIGNAGE_MEDIA_SAVING") : "");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.media_type === "webpage" ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.media_type, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 44, "FORM.NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(15, 46, "FORM.NAME"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 48, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.media_type === "video" ? 19 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 50, "APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.model().play_time ? 25 : 26);
        \u0275\u0275advance(2);
        \u0275\u0275property("min", ctx.model().start_time)("max", ctx.item.video_length || 3e5);
        \u0275\u0275advance();
        \u0275\u0275property("formField", ctx.form.play_time);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 52, "APP.CONCIERGE.SIGNAGE_ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.animation);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 54, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 56, "APP.CONCIERGE.SIGNAGE_ANIMATION_CUT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 58, "APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 60, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 62, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 64, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 66, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 68, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 70, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 72, "APP.CONCIERGE.VALID_FROM"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.valid_from)("clear", true);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 74, "COMMON.VALID_UNTIL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.model().valid_from)("formField", ctx.form.valid_until)("clear", true);
        \u0275\u0275control();
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      FormField,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      AuthenticatedImageDirective,
      TranslatePipe,
      SafePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaModalComponent, [{
    type: Component,
    args: [{ selector: "signage-media-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (item.id
                    ? 'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_MEDIA_NEW'
                ) | translate
            "
            (confirm)="saveMedia()"
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_MEDIA_SAVING' | translate)
                    : ''
            "
        >
            <form>
                <div class="flex flex-col">
                    <button
                        matRipple
                        class="bg-base-300 border-base-300 pointer-events-none relative mx-auto mb-4 h-48 w-full overflow-hidden rounded-xl border shadow"
                        (click)="preview()"
                    >
                        @if (media_type === 'webpage') {
                            <iframe
                                class="h-screen w-full object-contain object-center"
                                [src]="url | safe: 'resource'"
                            ></iframe>
                        } @else {
                            <img
                                class="h-full w-full object-contain object-center"
                                auth
                                [source]="thumbnail || url"
                            />
                        }
                        <div
                            class="bg-info text-info-content absolute top-2 left-2 rounded-sm px-2 py-1 text-xs capitalize shadow"
                        >
                            {{ media_type }}
                        </div>
                    </button>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
                            [placeholder]="'FORM.NAME' | translate"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    @if (media_type === 'video') {
                        <div class="flex items-center space-x-4">
                            <label
                                for="start-time"
                                class="m-0 w-auto min-w-0"
                                >{{ 'FORM.TIME_START' | translate }}</label
                            >
                            <div class="font-mono text-xs">
                                {{
                                    model().start_time / 1000
                                        | mediaDuration: true
                                }}
                            </div>
                        </div>
                        <mat-slider
                            min="0"
                            [max]="(item.video_length || 300000) - 1000"
                            step="100"
                        >
                            <input
                                matSliderThumb
                                [formField]="form.start_time"
                            />
                        </mat-slider>
                    }
                    <div class="flex items-center space-x-4">
                        <label for="play-time" class="m-0 w-auto min-w-0">
                            {{
                                'APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME'
                                    | translate
                            }}</label
                        >
                        <div class="font-mono text-xs">
                            @if (model().play_time) {
                                {{
                                    model().play_time / 1000
                                        | mediaDuration: true
                                }}
                            } @else {
                                <span class="opacity-30">
                                    {{ 'COMMON.DEFAULT' | translate }} ({{
                                        item.video_length
                                            ? (item.video_length / 1000
                                              | mediaDuration)
                                            : ''
                                    }})
                                </span>
                            }
                        </div>
                    </div>
                    <mat-slider
                        [min]="model().start_time"
                        [max]="item.video_length || 300000"
                        step="100"
                    >
                        <input matSliderThumb [formField]="form.play_time" />
                    </mat-slider>
                    <label for="animation">{{
                        'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.animation"
                            placeholder="Playlist Default"
                        >
                            <mat-option [value]="0">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="1">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="2">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="3">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="4">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="5">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                    | translate
                            }}</mat-option>
                            <mat-option [value]="6">{{
                                'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            [formField]="form.description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'APP.CONCIERGE.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                [formField]="form.valid_from"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'COMMON.VALID_UNTIL' | translate
                            }}</label>
                            <a-date-field
                                [from]="model().valid_from"
                                [formField]="form.valid_until"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, providers: [
      {
        provide: UPLOAD_PERMISSIONS_MODAL,
        useValue: UploadPermissionsModalComponent
      }
    ], imports: [
      FullscreenModalShellComponent,
      FormField,
      DateFieldComponent,
      TranslatePipe,
      SafePipe,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSliderModule,
      AuthenticatedImageDirective,
      MediaDurationPipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaModalComponent, { className: "SignageMediaModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-modal.component.ts", lineNumber: 235 });
})();

// apps/concierge/src/app/signage/signage-media-preview-modal.component.ts
var _c03 = (a0) => ({ name: a0 });
function SignageMediaPreviewModalComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource());
  }
}
function SignageMediaPreviewModalComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 8);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.resource(), "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
function SignageMediaPreviewModalComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource());
  }
}
function SignageMediaPreviewModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, SignageMediaPreviewModalComponent_Conditional_7_Conditional_2_Template, 1, 1, "img", 7);
    \u0275\u0275conditionalCreate(3, SignageMediaPreviewModalComponent_Conditional_7_Conditional_3_Template, 2, 4, "iframe", 8);
    \u0275\u0275conditionalCreate(4, SignageMediaPreviewModalComponent_Conditional_7_Conditional_4_Template, 1, 1, "video", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.type() === "image" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type() === "webpage" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type() === "video" ? 4 : -1);
  }
}
function SignageMediaPreviewModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function SignageMediaPreviewModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 11);
    \u0275\u0275listener("click", function SignageMediaPreviewModalComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save.emit(true));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.SIGNAGE_MEDIA_SAVE"), " ");
  }
}
var SignageMediaPreviewModalComponent = class _SignageMediaPreviewModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.save = output();
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource = signal(
      this._data.url.toString(),
      ...ngDevMode ? [{ debugName: "resource" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = signal(
      this._data.name,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = signal(
      this._data.type,
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_save = signal(
      this._data.save !== false,
      ...ngDevMode ? [{ debugName: "can_save" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.file = this._data.file;
  }
  ngOnInit() {
    console.log("Data:", this._data);
  }
  static {
    this.\u0275fac = function SignageMediaPreviewModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaPreviewModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaPreviewModalComponent, selectors: [["signage-media-preview-modal"]], outputs: { save: "save" }, decls: 10, vars: 8, consts: [[1, "border-base-300", "flex", "items-center", "justify-between", "border-b", "p-2"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200"], [1, "flex", "h-80", "max-h-[65vh]", "w-md", "max-w-[80vw]", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], [1, "flex", "h-[65vh]", "max-h-[65vh]", "w-[80vw]", "max-w-[80vw]", "items-center", "justify-center"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "h-full", "w-full", "object-contain", "object-center", 3, "src"], ["auth", "", "autoplay", "", "controls", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, SignageMediaPreviewModalComponent_Conditional_7_Template, 5, 3, "main", 3)(8, SignageMediaPreviewModalComponent_Conditional_8_Template, 4, 2, "main", 4);
        \u0275\u0275conditionalCreate(9, SignageMediaPreviewModalComponent_Conditional_9_Template, 4, 3, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER", \u0275\u0275pureFunction1(6, _c03, ctx.name())), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.loading() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_save() && !ctx.loading() ? 9 : -1);
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      IconComponent,
      TranslatePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaPreviewModalComponent, [{
    type: Component,
    args: [{ selector: "signage-media-preview-modal", template: `
        <header
            class="border-base-300 flex items-center justify-between border-b p-2"
        >
            <h1 class="px-2">
                {{
                    'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW_HEADER'
                        | translate: { name: name() }
                }}
            </h1>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (!loading()) {
            <main class="bg-base-200">
                <div
                    class="flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center"
                >
                    @if (type() === 'image') {
                        <img
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource()"
                        />
                    }
                    @if (type() === 'webpage') {
                        <iframe
                            class="h-full w-full object-contain object-center"
                            [src]="resource() | safe: 'resource'"
                        ></iframe>
                    }
                    @if (type() === 'video') {
                        <video
                            class="h-full w-full object-contain object-center"
                            auth
                            [source]="resource()"
                            autoplay
                            controls
                        ></video>
                    }
                </div>
            </main>
        } @else {
            <main
                class="flex h-80 max-h-[65vh] w-md max-w-[80vw] flex-col items-center justify-center p-8"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (can_save() && !loading()) {
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="w-32" (click)="save.emit(true)">
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_SAVE' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      TranslatePipe,
      IconComponent,
      SafePipe
    ] }]
  }], null, { save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaPreviewModalComponent, { className: "SignageMediaPreviewModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-preview-modal.component.ts", lineNumber: 86 });
})();

// libs/form-fields/src/lib/cron-input-field.component.ts
function CronInputFieldComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, " Enter a valid 5-part CRON expression. ");
    \u0275\u0275elementEnd();
  }
}
var DEFAULT_CRON = "* * * * *";
var ALLOWED_KEYS = /* @__PURE__ */ new Set([
  "Backspace",
  "Delete",
  "Tab",
  "Enter",
  "Escape",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End"
]);
var CRON_CHARACTER = /^[\d*,/\-]$/;
function listPattern(field_pattern) {
  return `(?:${field_pattern})(?:,(?:${field_pattern}))*`;
}
function control(pattern) {
  return new FormControl("*", [
    Validators.required,
    Validators.pattern(pattern)
  ]);
}
var CronInputFieldComponent = class _CronInputFieldComponent {
  constructor() {
    this._destroy_ref = inject(DestroyRef);
    this.cron_string = DEFAULT_CRON;
    this.show_error = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = new FormGroup({
      minute: control(listPattern("(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)")),
      hour: control(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)")),
      day: control(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]\\d|3[01]))?(?:/\\d{1,2})?)")),
      month: control(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)")),
      day_of_week: control(listPattern("(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)"))
    });
    this._onChange = () => void 0;
    this._onTouched = () => void 0;
    this.form.valueChanges.pipe(takeUntilDestroyed(this._destroy_ref)).subscribe(() => {
      this._updateShowError();
      if (this.form.invalid)
        return;
      const value = this._formValue();
      this.cron_string = value;
      this._onChange(value);
    });
    this.form.statusChanges.pipe(takeUntilDestroyed(this._destroy_ref)).subscribe(() => this._updateShowError());
  }
  writeValue(value) {
    this._writeCron(value || DEFAULT_CRON, false);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(disabled) {
    if (disabled) {
      this.form.disable({ emitEvent: false });
    } else {
      this.form.enable({ emitEvent: false });
    }
    this._updateShowError();
  }
  setPreset(value) {
    this._writeCron(value, true);
    this.markTouched();
  }
  markTouched() {
    this.form.markAllAsTouched();
    this._updateShowError();
    this._onTouched();
  }
  preventInvalidCharacters(event) {
    if (event.ctrlKey || event.metaKey || ALLOWED_KEYS.has(event.key) || CRON_CHARACTER.test(event.key)) {
      return;
    }
    event.preventDefault();
  }
  _writeCron(value, emit_event) {
    const [minute, hour, day, month, day_of_week] = value.trim().split(/\s+/);
    this.form.setValue({
      minute: minute || "*",
      hour: hour || "*",
      day: day || "*",
      month: month || "*",
      day_of_week: day_of_week || "*"
    }, { emitEvent: emit_event });
    this.cron_string = this._formValue();
    this._updateShowError();
  }
  _formValue() {
    const value = this.form.getRawValue();
    return `${value.minute || "*"} ${value.hour || "*"} ${value.day || "*"} ${value.month || "*"} ${value.day_of_week || "*"}`;
  }
  _updateShowError() {
    this.show_error.set(this.form.invalid && (this.form.dirty || this.form.touched));
  }
  static {
    this.\u0275fac = function CronInputFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CronInputFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CronInputFieldComponent, selectors: [["cron-input-field"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _CronInputFieldComponent),
        multi: true
      }
    ])], decls: 32, vars: 6, consts: [[1, "space-y-2"], [1, "grid", "grid-cols-5", "gap-2", 3, "formGroup"], [1, "m-0", "block", "min-w-0"], [1, "block", "truncate", "text-xs", "opacity-70"], ["name", "minute", "placeholder", "*", "inputmode", "numeric", "autocomplete", "off", "formControlName", "minute", "aria-label", "Cron minute", 1, "border-base-300", "focus:border-base-content", "w-full", "rounded-sm", "border", "bg-transparent", "px-2", "py-3", "font-mono", "text-sm", "outline-hidden", 3, "keydown", "blur"], ["name", "hour", "placeholder", "*", "inputmode", "numeric", "autocomplete", "off", "formControlName", "hour", "aria-label", "Cron hour", 1, "border-base-300", "focus:border-base-content", "w-full", "rounded-sm", "border", "bg-transparent", "px-2", "py-3", "font-mono", "text-sm", "outline-hidden", 3, "keydown", "blur"], ["name", "day", "placeholder", "*", "inputmode", "numeric", "autocomplete", "off", "formControlName", "day", "aria-label", "Cron day of month", 1, "border-base-300", "focus:border-base-content", "w-full", "rounded-sm", "border", "bg-transparent", "px-2", "py-3", "font-mono", "text-sm", "outline-hidden", 3, "keydown", "blur"], ["name", "month", "placeholder", "*", "inputmode", "numeric", "autocomplete", "off", "formControlName", "month", "aria-label", "Cron month", 1, "border-base-300", "focus:border-base-content", "w-full", "rounded-sm", "border", "bg-transparent", "px-2", "py-3", "font-mono", "text-sm", "outline-hidden", 3, "keydown", "blur"], ["name", "day_of_week", "placeholder", "*", "inputmode", "numeric", "autocomplete", "off", "formControlName", "day_of_week", "aria-label", "Cron day of week", 1, "border-base-300", "focus:border-base-content", "w-full", "rounded-sm", "border", "bg-transparent", "px-2", "py-3", "font-mono", "text-sm", "outline-hidden", 3, "keydown", "blur"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "border-base-300", "rounded-sm", "border", "px-2", "py-1", "text-xs", 3, "click", "disabled"], [1, "text-error", "text-xs"]], template: function CronInputFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "div", 3);
        \u0275\u0275text(4, "Minute");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 4);
        \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_5_listener($event) {
          return ctx.preventInvalidCharacters($event);
        })("blur", function CronInputFieldComponent_Template_input_blur_5_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "label", 2)(7, "div", 3);
        \u0275\u0275text(8, "Hour");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "input", 5);
        \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_9_listener($event) {
          return ctx.preventInvalidCharacters($event);
        })("blur", function CronInputFieldComponent_Template_input_blur_9_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "label", 2)(11, "div", 3);
        \u0275\u0275text(12, "Day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 6);
        \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_13_listener($event) {
          return ctx.preventInvalidCharacters($event);
        })("blur", function CronInputFieldComponent_Template_input_blur_13_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "label", 2)(15, "div", 3);
        \u0275\u0275text(16, "Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 7);
        \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_17_listener($event) {
          return ctx.preventInvalidCharacters($event);
        })("blur", function CronInputFieldComponent_Template_input_blur_17_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "label", 2)(19, "div", 3);
        \u0275\u0275text(20, "Weekday");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 8);
        \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_21_listener($event) {
          return ctx.preventInvalidCharacters($event);
        })("blur", function CronInputFieldComponent_Template_input_blur_21_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "button", 10);
        \u0275\u0275listener("click", function CronInputFieldComponent_Template_button_click_23_listener() {
          return ctx.setPreset("* * * * *");
        });
        \u0275\u0275text(24, " Every minute ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 10);
        \u0275\u0275listener("click", function CronInputFieldComponent_Template_button_click_25_listener() {
          return ctx.setPreset("0 * * * *");
        });
        \u0275\u0275text(26, " Hourly ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 10);
        \u0275\u0275listener("click", function CronInputFieldComponent_Template_button_click_27_listener() {
          return ctx.setPreset("0 9 * * *");
        });
        \u0275\u0275text(28, " Daily 9am ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 10);
        \u0275\u0275listener("click", function CronInputFieldComponent_Template_button_click_29_listener() {
          return ctx.setPreset("0 9 * * 1-5");
        });
        \u0275\u0275text(30, " Weekdays 9am ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(31, CronInputFieldComponent_Conditional_31_Template, 2, 0, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.show_error() ? 31 : -1);
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CronInputFieldComponent, [{
    type: Component,
    args: [{ selector: "cron-input-field", template: `
        <div class="space-y-2">
            <div class="grid grid-cols-5 gap-2" [formGroup]="form">
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Minute</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="minute"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="minute"
                        aria-label="Cron minute"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Hour</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="hour"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="hour"
                        aria-label="Cron hour"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Day</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="day"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="day"
                        aria-label="Cron day of month"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Month</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="month"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="month"
                        aria-label="Cron month"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
                <label class="m-0 block min-w-0">
                    <div class="block truncate text-xs opacity-70">Weekday</div>
                    <input
                        class="border-base-300 focus:border-base-content w-full rounded-sm border bg-transparent px-2 py-3 font-mono text-sm outline-hidden"
                        name="day_of_week"
                        placeholder="*"
                        inputmode="numeric"
                        autocomplete="off"
                        formControlName="day_of_week"
                        aria-label="Cron day of week"
                        (keydown)="preventInvalidCharacters($event)"
                        (blur)="markTouched()"
                    />
                </label>
            </div>
            <div class="flex flex-wrap gap-2">
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('* * * * *')"
                >
                    Every minute
                </button>
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('0 * * * *')"
                >
                    Hourly
                </button>
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('0 9 * * *')"
                >
                    Daily 9am
                </button>
                <button
                    type="button"
                    class="border-base-300 rounded-sm border px-2 py-1 text-xs"
                    [disabled]="form.disabled"
                    (click)="setPreset('0 9 * * 1-5')"
                >
                    Weekdays 9am
                </button>
            </div>
            @if (show_error()) {
                <div class="text-error text-xs">
                    Enter a valid 5-part CRON expression.
                </div>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CronInputFieldComponent),
        multi: true
      }
    ], imports: [ReactiveFormsModule] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CronInputFieldComponent, { className: "CronInputFieldComponent", filePath: "libs/form-fields/src/lib/cron-input-field.component.ts", lineNumber: 172 });
})();

// apps/concierge/src/app/signage/signage-playlist-modal.component.ts
var _c04 = () => ({ standalone: true });
function SignagePlaylistModalComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 15)(2, "label", 40);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-time-field", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "label", 42);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-time-field", 43);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.PLAY_FROM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("no_past_times", false)("formField", ctx_r0.form.play_from);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "APP.CONCIERGE.PLAY_UNTIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("no_past_times", false)("from", ctx_r0.model().play_from)("formField", ctx_r0.form.play_until);
    \u0275\u0275control();
  }
}
function SignagePlaylistModalComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 15)(2, "label", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-date-field", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "label", 45);
    \u0275\u0275text(8, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a-time-field", 46);
    \u0275\u0275listener("ngModelChange", function SignagePlaylistModalComponent_Conditional_112_Template_a_time_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.model.update((m) => __spreadProps(__spreadValues({}, m), { play_at: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 47);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "a-duration-field", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "settings-toggle", 48);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.PLAY_AT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.play_at);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.model().play_at)("ngModelOptions", \u0275\u0275pureFunction0(14, _c04));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "APP.CONCIERGE.PLAY_DURATION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.play_duration);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.play_once);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "APP.CONCIERGE.PLAY_ONCE"), " ");
  }
}
function SignagePlaylistModalComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 15)(2, "label", 1);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "cron-input-field", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "label", 47);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 50);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "settings-toggle", 48);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "APP.CONCIERGE.PLAY_CRON"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.play_cron);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.PLAY_DURATION"));
    \u0275\u0275advance(2);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r0.form.play_once);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, "APP.CONCIERGE.PLAY_ONCE"), " ");
  }
}
var SignagePlaylistModalComponent = class _SignagePlaylistModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA) ?? new hr({});
    this._state = inject(SignageStateService);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist = this._data;
    this.media = this._state.media;
    this.schedule = signal(
      "",
      ...ngDevMode ? [{ debugName: "schedule" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: this.playlist.id || "",
        name: this.playlist.name || "",
        description: this.playlist.description || "",
        default_animation: Is.Cut,
        orientation: "unspecified",
        enabled: true,
        random: false,
        default_duration: 15 * 1e3,
        valid_from: 0,
        valid_until: 0,
        play_duration: 0,
        play_from: 0,
        play_until: 0,
        play_once: false,
        play_at: Date.now(),
        play_cron: "* * * * *"
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
    });
  }
  ngOnInit() {
    const p = this.playlist;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      id: p.id ?? m.id,
      name: p.name ?? m.name,
      description: p.description ?? m.description,
      default_animation: p.default_animation ?? m.default_animation,
      orientation: p.orientation || m.orientation,
      enabled: p.enabled ?? m.enabled,
      random: p.random ?? m.random,
      default_duration: p.default_duration ?? m.default_duration,
      valid_from: (p.valid_from || 0) * 1e3,
      valid_until: (p.valid_until || 0) * 1e3,
      play_duration: p.play_duration ?? m.play_duration,
      play_from: p.play_from ?? m.play_from,
      play_until: p.play_until ?? m.play_until,
      play_once: p.play_once ?? m.play_once,
      play_at: p.play_at ?? m.play_at,
      play_cron: p.play_cron ?? m.play_cron
    }));
    const { play_at, play_cron } = this.model();
    this.schedule.set(play_cron ? "recurring" : play_at ? "exact" : "");
    if (!this.model().orientation)
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { orientation: "unspecified" }));
  }
  async savePlaylist() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    const form_value = __spreadValues({}, this.model());
    if (this.schedule() === "between") {
      form_value.play_at = 0;
      form_value.play_cron = "";
      delete form_value.play_once;
    } else if (this.schedule() === "exact") {
      form_value.play_cron = "";
    } else if (this.schedule() === "recurring") {
      form_value.play_at = 0;
    } else {
      form_value.play_at = 0;
      form_value.play_cron = "";
    }
    delete form_value.play_from;
    delete form_value.play_until;
    delete form_value.play_duration;
    if (form_value.valid_from) {
      form_value.valid_from = getUnixTime(startOfDay(form_value.valid_from));
    } else
      delete form_value.valid_from;
    if (form_value.valid_until) {
      form_value.valid_until = getUnixTime(endOfDay(form_value.valid_until));
    } else
      delete form_value.valid_until;
    const result = await this._state.savePlaylist(__spreadValues({}, form_value)).catch((_) => {
      notifyError("Error saving playlist");
      this.loading.set(false);
      throw _;
    });
    this._dialog_ref.close(result);
  }
  static {
    this.\u0275fac = function SignagePlaylistModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignagePlaylistModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistModalComponent, selectors: [["signage-playlist-modal"]], decls: 114, vars: 102, consts: [[3, "confirm", "heading", "loading"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "flex-1", 3, "label", "formField"], [1, "pt-2", "pb-4"], [1, "border-base-300", "relative", "rounded-sm", "border"], ["for", "default-duration", 1, "bg-base-100", "absolute", "top-0", "left-2", "m-0", "flex", "w-auto", "min-w-0", "-translate-y-1/2", "items-center", "space-x-2", "px-2"], [1, "flex", "items-center", "px-2", "pt-2"], ["min", "5000", "max", "300000", "step", "1000", 1, "flex-1"], ["matSliderThumb", "", 3, "formField"], [1, "w-16", "px-2", "text-right", "font-mono", "text-xs"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], [3, "formField", "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], [3, "value"], ["for", "description"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], [1, "flex", "space-x-4"], ["for", "valid-from"], [1, "w-full", 3, "formField"], ["for", "valid-until"], [1, "w-full", 3, "from", "formField"], [1, "border-base-300", "relative", "mb-12", "space-y-2", "rounded-sm", "border", "px-4", "pt-4"], ["for", "schedule", 1, "bg-base-100", "absolute", "top-0", "left-2", "m-0", "flex", "w-auto", "min-w-0", "-translate-y-1/2", "items-center", "space-x-2", "px-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", ""], ["value", "between"], ["value", "exact", 3, "click"], ["value", "recurring", 3, "click"], [1, "pt-2"], ["for", "play-from"], [1, "w-full", 3, "no_past_times", "formField"], ["for", "play-until"], [1, "w-full", 3, "no_past_times", "from", "formField"], ["for", "play-at"], ["for", "play-at-time"], ["name", "play-at-time", 1, "w-full", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "play-duration"], [1, "mb-4", 3, "formField"], [3, "formField"], ["name", "play-duration", "formControlName", "play_duration", 1, "w-full"]], template: function SignagePlaylistModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function SignagePlaylistModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.savePlaylist();
        });
        \u0275\u0275elementStart(3, "form")(4, "label", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span", 2);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(12, "mat-error");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 5);
        \u0275\u0275element(16, "settings-toggle", 6);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275element(18, "settings-toggle", 6);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 7)(21, "div", 8)(22, "label", 9)(23, "div");
        \u0275\u0275text(24, "Default Play Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 10)(26, "mat-slider", 11);
        \u0275\u0275element(27, "input", 12);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 13);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "mediaDuration");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "div", 14)(32, "div", 15)(33, "label", 16);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 3)(37, "mat-select", 17);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "mat-option", 18);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 19);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-option", 20);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 21);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 15)(52, "label", 22);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-form-field", 3)(56, "mat-select", 17);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementStart(58, "mat-option", 23);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-option", 23);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-option", 23);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-option", 23);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-option", 23);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-option", 23);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "mat-option", 23);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "label", 24);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-form-field", 3);
        \u0275\u0275element(83, "textarea", 25);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 26)(86, "div", 15)(87, "label", 27);
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "a-date-field", 28);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 15)(92, "label", 29);
        \u0275\u0275text(93);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(95, "a-date-field", 30);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 31)(97, "label", 32)(98, "div");
        \u0275\u0275text(99, "Schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "mat-form-field", 33)(101, "mat-select", 34);
        \u0275\u0275twoWayListener("ngModelChange", function SignagePlaylistModalComponent_Template_mat_select_ngModelChange_101_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.schedule, $event) || (ctx.schedule = $event);
          return $event;
        });
        \u0275\u0275elementStart(102, "mat-option", 35);
        \u0275\u0275text(103, "No schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "mat-option", 36);
        \u0275\u0275text(105, "Play Between");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "mat-option", 37);
        \u0275\u0275listener("click", function SignagePlaylistModalComponent_Template_mat_option_click_106_listener() {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { play_duration: 30 }));
        });
        \u0275\u0275text(107, "Set Date & Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "mat-option", 38);
        \u0275\u0275listener("click", function SignagePlaylistModalComponent_Template_mat_option_click_108_listener() {
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { play_duration: 30 }));
        });
        \u0275\u0275text(109, "Recurring Schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 39);
        \u0275\u0275conditionalCreate(111, SignagePlaylistModalComponent_Conditional_111_Template, 11, 11, "div", 26)(112, SignagePlaylistModalComponent_Conditional_112_Template, 17, 15)(113, SignagePlaylistModalComponent_Conditional_113_Template, 14, 11);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 47, ctx.playlist.id ? "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 49, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 51, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 53, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 55, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 57, "COMMON.ENABLED"))("formField", ctx.form.enabled);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(19, 59, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE"))("formField", ctx.form.random);
        \u0275\u0275control();
        \u0275\u0275advance(9);
        \u0275\u0275property("formField", ctx.form.default_duration);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 61, ctx.model().default_duration / 1e3), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 63, "APP.CONCIERGE.SIGNAGE_ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.orientation)("placeholder", \u0275\u0275pipeBind1(38, 65, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 67, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 69, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 71, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 73, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 75, "APP.CONCIERGE.SIGNAGE_ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.default_animation)("placeholder", \u0275\u0275pipeBind1(57, 77, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 79, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 81, "APP.CONCIERGE.SIGNAGE_ANIMATION_CUT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 83, "APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 85, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 87, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 89, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 91, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 93, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(84, 95, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 97, "APP.CONCIERGE.VALID_FROM"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.valid_from);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 99, "COMMON.VALID_UNTIL"));
        \u0275\u0275advance(2);
        \u0275\u0275property("from", ctx.model().valid_from)("formField", ctx.form.valid_until);
        \u0275\u0275control();
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.schedule);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(101, _c04));
        \u0275\u0275control();
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.schedule() === "between" ? 111 : ctx.schedule() === "exact" ? 112 : ctx.schedule() === "recurring" ? 113 : -1);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      DurationFieldComponent,
      FormField,
      CronInputFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatInputModule,
      MatInput,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      TranslatePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePlaylistModalComponent, [{
    type: Component,
    args: [{ selector: "signage-playlist-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (playlist.id
                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW'
                ) | translate
            "
            (confirm)="savePlaylist()"
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING' | translate)
                    : ''
            "
        >
            <form>
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        class="flex-1"
                        [label]="'COMMON.ENABLED' | translate"
                        [formField]="form.enabled"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [label]="
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE'
                                | translate
                        "
                        [formField]="form.random"
                    >
                    </settings-toggle>
                </div>
                <div class="pt-2 pb-4">
                    <div class="border-base-300 relative rounded-sm border">
                        <label
                            for="default-duration"
                            class="bg-base-100 absolute top-0 left-2 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 px-2"
                        >
                            <div>Default Play Time</div>
                        </label>
                        <div class="flex items-center px-2 pt-2">
                            <mat-slider
                                class="flex-1"
                                min="5000"
                                max="300000"
                                step="1000"
                            >
                                <input
                                    matSliderThumb
                                    [formField]="form.default_duration"
                                />
                            </mat-slider>
                            <div class="w-16 px-2 text-right font-mono text-xs">
                                {{
                                    model().default_duration / 1000
                                        | mediaDuration
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex-1">
                        <label for="orientation">{{
                            'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.orientation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                "
                            >
                                <mat-option value="unspecified">
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                            | translate
                                    }}
                                </mat-option>
                                <mat-option value="landscape">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="portrait">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="square">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="animation">{{
                            'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.default_animation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                "
                            >
                                <mat-option [value]="0">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="1">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="2">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="3">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="4">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="5">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="6">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'APP.CONCIERGE.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            class="w-full"
                            [formField]="form.valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'COMMON.VALID_UNTIL' | translate
                        }}</label>
                        <a-date-field
                            class="w-full"
                            [from]="model().valid_from"
                            [formField]="form.valid_until"
                        ></a-date-field>
                    </div>
                </div>
                <div
                    class="border-base-300 relative mb-12 space-y-2 rounded-sm border px-4 pt-4"
                >
                    <label
                        for="schedule"
                        class="bg-base-100 absolute top-0 left-2 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 px-2"
                    >
                        <div>Schedule</div>
                    </label>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [(ngModel)]="schedule"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option value="">No schedule</mat-option>
                            <mat-option value="between"
                                >Play Between</mat-option
                            >
                            <mat-option
                                value="exact"
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        play_duration: 30,
                                    }))
                                "
                                >Set Date & Time</mat-option
                            >
                            <mat-option
                                value="recurring"
                                (click)="
                                    model.update((m) => ({
                                        ...m,
                                        play_duration: 30,
                                    }))
                                "
                                >Recurring Schedule</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                    <div class="pt-2">
                        @if (schedule() === 'between') {
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label for="play-from">{{
                                        'APP.CONCIERGE.PLAY_FROM' | translate
                                    }}</label>
                                    <a-time-field
                                        class="w-full"
                                        [no_past_times]="false"
                                        [formField]="form.play_from"
                                    ></a-time-field>
                                </div>
                                <div class="flex-1">
                                    <label for="play-until">{{
                                        'APP.CONCIERGE.PLAY_UNTIL' | translate
                                    }}</label>
                                    <a-time-field
                                        class="w-full"
                                        [no_past_times]="false"
                                        [from]="model().play_from"
                                        [formField]="form.play_until"
                                    ></a-time-field>
                                </div>
                            </div>
                        } @else if (schedule() === 'exact') {
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label for="play-at">{{
                                        'APP.CONCIERGE.PLAY_AT' | translate
                                    }}</label>
                                    <a-date-field
                                        class="w-full"
                                        [formField]="form.play_at"
                                    ></a-date-field>
                                </div>
                                <div class="flex-1">
                                    <label for="play-at-time">&nbsp;</label>
                                    <a-time-field
                                        name="play-at-time"
                                        class="w-full"
                                        [ngModel]="model().play_at"
                                        (ngModelChange)="
                                            model.update((m) => ({
                                                ...m,
                                                play_at: $event,
                                            }))
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                </div>
                            </div>
                            <label for="play-duration">{{
                                'APP.CONCIERGE.PLAY_DURATION' | translate
                            }}</label>
                            <a-duration-field
                                class="w-full"
                                [formField]="form.play_duration"
                            ></a-duration-field>
                            <settings-toggle
                                [formField]="form.play_once"
                                class="mb-4"
                            >
                                {{ 'APP.CONCIERGE.PLAY_ONCE' | translate }}
                            </settings-toggle>
                        } @else if (schedule() === 'recurring') {
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label for="name">{{
                                        'APP.CONCIERGE.PLAY_CRON' | translate
                                    }}</label>
                                    <cron-input-field
                                        [formField]="form.play_cron"
                                    />
                                </div>
                                <div class="flex-1">
                                    <label for="play-duration">{{
                                        'APP.CONCIERGE.PLAY_DURATION'
                                            | translate
                                    }}</label>
                                    <a-duration-field
                                        name="play-duration"
                                        class="w-full"
                                        formControlName="play_duration"
                                    ></a-duration-field>
                                </div>
                            </div>
                            <settings-toggle
                                [formField]="form.play_once"
                                class="mb-4"
                            >
                                {{ 'APP.CONCIERGE.PLAY_ONCE' | translate }}
                            </settings-toggle>
                        }
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      TranslatePipe,
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      DurationFieldComponent,
      FormField,
      CronInputFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatSliderModule,
      FormsModule,
      MediaDurationPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistModalComponent, { className: "SignagePlaylistModalComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-modal.component.ts", lineNumber: 373 });
})();

// apps/concierge/src/app/signage/signage-state.service.ts
function dataURLtoFile(dataURL, filename) {
  const [prefix, data] = dataURL.split(",");
  const mimeType = prefix.split(":")[1].split(";")[0];
  const byteString = atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new File([uint8Array], filename, { type: mimeType });
}
function cleanPlaylistPayload(playlist) {
  return Object.fromEntries(Object.entries(playlist).filter(([, value]) => value !== "" && value !== null && value !== void 0));
}
var SignageStateService = class _SignageStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._uploads = inject(UploadsService);
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._active_upload = signal(
      null,
      ...ngDevMode ? [{ debugName: "_active_upload" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.has_changed = this._change.asReadonly();
    this._media = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_media" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        change: this._change()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.building)
          return [];
        const resp = await lh({ limit: 2500 });
        return (resp.data || []).sort((a, b) => b.created_at - a.created_at);
      }
    }));
    this.media = this._media.value;
    this._playlists = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_playlists" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        change: this._change()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.building)
          return [];
        const resp = await bh({ limit: 500 });
        return (resp.data || []).sort((a, b) => a.name.localeCompare(b.name));
      }
    }));
    this.playlists = this._playlists.value;
    this._displays = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_displays" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        region: this._org.active_region()?.id,
        building: this._org.active_building()?.id,
        change: this._change()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.building)
          return [];
        const resp = await ha({
          zone_id: (this._settings.get("app.use_region") ? params.region : "") || params.building,
          limit: 500,
          signage: true
        });
        return (resp.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name)).filter((_) => _.signage);
      }
    }));
    this.displays = this._displays.value;
    this._zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zones" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        change: this._change()
      }),
      defaultValue: [],
      loader: async () => {
        const resp = await eh({
          limit: 250,
          tags: "signage"
        }).catch(() => ({ data: [] }));
        return (resp.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name));
      }
    }));
    this.zones = this._zones.value;
  }
  changed() {
    this._change.set(Date.now());
  }
  async editPlaylist(playlist = new hr({})) {
    const ref = this._dialog.open(SignagePlaylistModalComponent, {
      data: playlist
    });
    const result = await nextValueFrom(ref.afterClosed());
    this.timeout("changed", () => this._change.set(Date.now()));
    return result;
  }
  async editMedia(media = new Es({}), file, playlist_id = "") {
    const ref = this._dialog.open(SignageMediaModalComponent, {
      data: {
        media,
        file,
        file_metadata: file ? await this._getMediaMetadata(file) : [media.orientation === "landscape", 0],
        file_thumbnail: file ? await this._generateThumbnail(file, 1024, 720) : "",
        playlist_id,
        onAdd: (f, m) => this.addMedia(f, m),
        preview: (item) => this.previewMedia(item)
      }
    });
    const result = await nextValueFrom(ref.afterClosed());
    this.timeout("changed", () => this._change.set(Date.now()));
    return result;
  }
  async editDisplay(display = new qs({})) {
    console.log("Edit Display:", display);
    const ref = this._dialog.open(SignageDisplayModalComponent, {
      data: { display }
    });
    const result = await nextValueFrom(ref.afterClosed());
    this.timeout("changed", () => this._change.set(Date.now()));
    return result;
  }
  async removeDisplay(display) {
    const result = await openConfirmModal({
      title: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE"),
      content: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_MSG", {
        name: display.display_name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_LOADING"));
    if (display.map_id || display.email || display.module_list.length > 0) {
      await da(display.id, {
        signage: false
      });
    } else {
      await _a(display.id);
    }
    this._change.set(Date.now());
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_SUCCESS"));
    result.close();
  }
  async savePlaylist(playlist) {
    const clean_playlist = cleanPlaylistPayload(playlist);
    const call = clean_playlist.id ? vh(clean_playlist.id, clean_playlist, "put") : kh(clean_playlist);
    const new_playlist = await call;
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVE_SUCCESS"));
    this._change.set(Date.now());
  }
  async removePlaylist(playlist) {
    if (!playlist?.id)
      return;
    const result = await openConfirmModal({
      title: i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE"),
      content: i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_MSG", {
        name: playlist.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await Sh(playlist.id);
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_SUCCESS"));
    this._change.set(Date.now());
    result.close();
  }
  async updatePlaylistMedia(playlist_id, list) {
    await Rh(playlist_id, list);
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_SAVE_SUCCESS"));
    this.changed();
  }
  async getPlaylistMedia(playlist_id) {
    const { items } = await xh(playlist_id);
    return items;
  }
  previewMedia(item) {
    this._dialog.open(SignageMediaPreviewModalComponent, {
      data: {
        url: item.media_url,
        type: item.media_type,
        name: item.name,
        save: false
      }
    });
  }
  previewFileFromInput(event, playlist_id = "") {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const file = files[0];
    if (file && (file.type.includes("image") || file.type.includes("video"))) {
      this.editMedia(void 0, file, playlist_id);
    } else {
      notifyError(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_FILE_ERROR"));
    }
  }
  previewFileMedia(media, playlist_id = "") {
    const url = URL.createObjectURL(media);
    const type = media.type.includes("image") ? "image" : "video";
    const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
      data: { url, type, name: media.name, save: true, file: media }
    });
    nextValueFrom(ref.afterClosed()).then(() => URL.revokeObjectURL(url));
    ref.componentInstance.save.subscribe(async () => {
      ref.componentInstance.loading.set("Saving...");
      const new_media = await this.addMedia(media).catch((e) => {
        notifyError("Error saving media.");
        ref.componentInstance.loading.set("");
        throw e;
      });
      if (playlist_id && new_media.id) {
        const media_list = await xh(playlist_id);
        const new_media_list = [...media_list.items, new_media.id];
        await Rh(playlist_id, new_media_list);
      }
      ref.close();
    });
  }
  async addMediaFromLink(url, media_item = new Es({})) {
    const url_obj = new URL(url);
    const data = __spreadValues({}, new Es(__spreadProps(__spreadValues({}, media_item), {
      name: media_item.name || url_obj.hostname,
      media_uri: url,
      media_type: "webpage",
      orientation: "landscape"
    })));
    for (const key in data) {
      if (!data[key])
        delete data[key];
    }
    const result = await _h(data);
    this._active_upload.set(null);
    this._change.set(Date.now());
    notifySuccess("Successfully added media from link");
    return result;
  }
  async addMedia(file, media_item = new Es({})) {
    const uploadDetails = (id) => new Promise((resolve, reject) => {
      let state = null;
      let resolved = false;
      const check_state = () => {
        const list = this._uploads.upload_list();
        console.log("Upload List:", list, id);
        state = list.find((s) => id === s.id);
        if (state?.error) {
          this.clearInterval(`upload-${id}`);
          reject(state.error);
          return;
        }
        if (state && (state.link || state.progress >= 100)) {
          resolved = true;
          const uid = state.upload_id || state.upload?.id || id;
          const url = `/api/engine/v2/uploads/${encodeURIComponent(uid)}/url`;
          resolve({
            id: uid,
            link: state.link || url
          });
          this.clearInterval(`upload-${id}`);
        }
      };
      this.interval(`upload-${id}`, check_state, 100);
      check_state();
    });
    const [is_landscape] = await this._getMediaMetadata(file);
    const thumbnail_image = await this._generateThumbnail(file, 1280, 720).catch(() => null);
    const media_id = await this._uploads.uploadFileWithPermissions(file);
    const tkn = X();
    if (!tkn)
      throw new Error("Token expired. Try again.");
    pt.setToken(tkn);
    const media = await uploadDetails(media_id);
    let thumbnail = null;
    if (thumbnail_image) {
      const name_parts = file.name.split(".");
      name_parts.pop();
      const name = `thumb+${name_parts.join(".")}.jpg`;
      const thumb_id = await this._uploads.uploadFile(dataURLtoFile(thumbnail_image, name));
      thumbnail = await uploadDetails(thumb_id);
    }
    const data = __spreadValues({}, new Es(__spreadProps(__spreadValues({}, media_item), {
      name: media_item.name || file.name,
      media_id: media.id,
      media_uri: media.link,
      media_type: file.type.includes("image") ? "image" : "video",
      orientation: is_landscape ? "landscape" : "portrait",
      thumbnail_id: thumbnail.id
    })));
    for (const key in data) {
      if (!data[key])
        delete data[key];
    }
    const result = await _h(data);
    this._active_upload.set(null);
    this.timeout("changed", () => this._change.set(Date.now()), 500);
    return result;
  }
  async updateMedia(item) {
    if (!item?.id)
      return;
    await fh(item.id, item);
  }
  async approvePlaylist(playlist) {
    this._dialog.open(SignageApprovePlaylistModalComponent, {
      data: playlist
    });
  }
  async removeMedia(item) {
    if (!item?.id)
      return;
    const result = await openConfirmModal({
      title: i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"),
      content: i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_MSG", {
        name: item.name
      }),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_LOADING"));
    await mh(item.id);
    this._change.set(Date.now());
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE_SUCCESS"));
    result.close();
  }
  _getMediaMetadata(file) {
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      if (file.type.includes("video")) {
        const video = document.createElement("video");
        video.src = url.toString();
        video.addEventListener("loadedmetadata", () => {
          const { videoWidth, videoHeight } = video;
          resolve([videoWidth > videoHeight, video.duration]);
        });
        video.load();
      } else {
        const img = new Image();
        img.onload = () => resolve([img.width > img.height, 0]);
        img.src = url.toString();
      }
    });
  }
  async _generateThumbnail(file, max_width, max_height) {
    console.log("File:", file, max_width, max_height);
    if (file.type.includes("video")) {
      return this._generateVideoThumbnail(file, max_width, max_height);
    } else if (file.type.includes("image") || file.type.includes("svg")) {
      return this._generateImageThumbnail(file, max_width, max_height);
    }
    return "";
  }
  _generateImageThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      console.log("Image:", img.src);
      img.onload = () => {
        const image = this._generateThumbnailFromResource(img, img.width, img.height, max_width, max_height);
        URL.revokeObjectURL(img.src);
        resolve(image);
      };
      img.onerror = reject;
    });
  }
  _generateVideoThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.src = URL.createObjectURL(file);
      video.onloadeddata = () => {
        const image = this._generateThumbnailFromResource(video, video.videoWidth, video.videoHeight, max_width, max_height);
        URL.revokeObjectURL(video.src);
        resolve(image);
      };
      video.onerror = reject;
    });
  }
  _generateThumbnailFromResource(data, source_width, source_height, max_width, max_height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let thumbnailWidth = source_width;
    let thumbnailHeight = source_height;
    const aspectRatio = thumbnailWidth / thumbnailHeight;
    if (thumbnailWidth > max_width) {
      thumbnailWidth = max_height;
      thumbnailHeight = thumbnailWidth / aspectRatio;
    }
    if (thumbnailHeight > max_height) {
      thumbnailHeight = max_width;
      thumbnailWidth = thumbnailHeight * aspectRatio;
    }
    canvas.width = thumbnailWidth;
    canvas.height = thumbnailHeight;
    ctx.drawImage(data, 0, 0, thumbnailWidth, thumbnailHeight);
    const dataURL = canvas.toDataURL("image/jpeg");
    return dataURL;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SignageStateService_BaseFactory;
      return function SignageStateService_Factory(__ngFactoryType__) {
        return (\u0275SignageStateService_BaseFactory || (\u0275SignageStateService_BaseFactory = \u0275\u0275getInheritedFactory(_SignageStateService)))(__ngFactoryType__ || _SignageStateService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageStateService, factory: _SignageStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/signage/signage-item-playlists.component.ts
var _c05 = ["*"];
var _c1 = () => ["/signage", "media"];
var _c2 = (a0) => ({ playlist: a0 });
var _c3 = () => [];
var _c4 = (a0) => ({ count: a0 });
var _c5 = (a0) => ({ name: a0 });
var _forTrack02 = ($index, $item) => $item?.id;
function SignageItemPlaylistsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.extra(), " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.link(), \u0275\u0275sanitizeUrl)("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER"));
  }
}
function SignageItemPlaylistsComponent_Conditional_6_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function SignageItemPlaylistsComponent_Conditional_6_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const media_r4 = ctx.$implicit;
    const \u0275$index_36_r5 = ctx.$index;
    const \u0275$count_36_r6 = ctx.$count;
    \u0275\u0275styleProp("top", 0.45 - (\u0275$count_36_r6 - 1) * 0.125 + (\u0275$count_36_r6 - 1 - \u0275$index_36_r5) * 0.25 + "rem")("left", 0.45 - (\u0275$count_36_r6 - 1) * 0.125 + (\u0275$count_36_r6 - 1 - \u0275$index_36_r5) * 0.25 + "rem")("z-index", \u0275$index_36_r5);
    \u0275\u0275property("source", media_r4);
  }
}
function SignageItemPlaylistsComponent_Conditional_6_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.SCHEDULED"));
  }
}
function SignageItemPlaylistsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, SignageItemPlaylistsComponent_Conditional_6_For_2_div_1_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 14);
    \u0275\u0275repeaterCreate(7, SignageItemPlaylistsComponent_Conditional_6_For_2_For_8_Template, 1, 7, "img", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, SignageItemPlaylistsComponent_Conditional_6_For_2_Conditional_15_Template, 4, 3, "div", 19);
    \u0275\u0275elementStart(16, "button", 20)(17, "icon");
    \u0275\u0275text(18, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-menu", null, 0)(21, "a", 21)(22, "div", 9)(23, "icon", 10);
    \u0275\u0275text(24, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "button", 22);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_6_For_2_Template_button_click_28_listener() {
      const item_r7 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove.emit(item_r7));
    });
    \u0275\u0275elementStart(29, "div", 9)(30, "icon", 23);
    \u0275\u0275text(31, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 11);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_REORDER"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c1))("queryParams", \u0275\u0275pureFunction1(22, _c2, item_r7.id));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.playlist_thumbnail_media()[item_r7.id] || \u0275\u0275pureFunction0(24, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(14, 13, "APP.CONCIERGE.SIGNAGE_MEDIA_COUNT", \u0275\u0275pureFunction1(25, _c4, ctx_r0.playlist_count()[item_r7.id]?.count || 0), ctx_r0.playlist_count()[item_r7.id]?.count || 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isScheduled(item_r7) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c1))("queryParams", \u0275\u0275pureFunction1(28, _c2, item_r7.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 17, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_VIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 19, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE"), " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("cdkDropListDropped", function SignageItemPlaylistsComponent_Conditional_6_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ondrop.emit($event));
    });
    \u0275\u0275repeaterCreate(1, SignageItemPlaylistsComponent_Conditional_6_For_2_Template, 35, 30, "div", 7, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275elementStart(4, "div", 9)(5, "icon", 10);
    \u0275\u0275text(6, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.active_playlists());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 1, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"), " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 26)(2, "icon", 27);
    \u0275\u0275text(3, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275elementStart(8, "div", 9)(9, "icon", 10);
    \u0275\u0275text(10, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLISTS_EMPTY", \u0275\u0275pureFunction1(7, _c5, ctx_r0.name())), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 5, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"), " ");
  }
}
var PLAYLIST_ITEM_COUNTS = signal(
  {},
  ...ngDevMode ? [{ debugName: "PLAYLIST_ITEM_COUNTS" }] : (
    /* istanbul ignore next */
    []
  )
);
var SignageItemPlaylistsComponent = class _SignageItemPlaylistsComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this.item = input(
      void 0,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = input(
      "zone",
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extra = input(
      "",
      ...ngDevMode ? [{ debugName: "extra" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.link = input(
      "",
      ...ngDevMode ? [{ debugName: "link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add = output();
    this.remove = output();
    this.ondrop = output();
    this._update_counts = effect(
      () => {
        const playlists = this.active_playlists();
        for (const item of playlists) {
          const old_counts = this.playlist_count()[item.id];
          if (old_counts && old_counts.last_updated > item.updated_at * 1e3) {
            continue;
          }
          this._state.getPlaylistMedia(item.id).then((media) => {
            this.playlist_count.update((m) => __spreadProps(__spreadValues({}, m), {
              [item.id]: {
                count: media.length,
                media_ids: media.slice(0, 3),
                last_updated: Date.now()
              }
            }));
          });
        }
      },
      ...ngDevMode ? [{ debugName: "_update_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_playlists = computed(
      () => {
        const playlists = this._state.playlists();
        const ids = this.item()?.playlists || [];
        this._state.has_changed();
        return ids.map((id) => playlists.find((_) => _.id === id)).filter((_) => !!_);
      },
      ...ngDevMode ? [{ debugName: "active_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_count = PLAYLIST_ITEM_COUNTS;
    this.playlist_thumbnail_media = computed(
      () => {
        const counts = this.playlist_count();
        const result = {};
        for (const [playlist_id, data] of Object.entries(counts)) {
          result[playlist_id] = (data.media_ids || []).map((id) => gh(id));
        }
        return result;
      },
      ...ngDevMode ? [{ debugName: "playlist_thumbnail_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  isScheduled(item) {
    return !!item;
  }
  playlistCount(id) {
    return PLAYLIST_ITEM_COUNTS()[id]?.count || 0;
  }
  static {
    this.\u0275fac = function SignageItemPlaylistsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageItemPlaylistsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageItemPlaylistsComponent, selectors: [["signage-item-playlists"]], inputs: { item: [1, "item"], name: [1, "name"], extra: [1, "extra"], link: [1, "link"] }, outputs: { add: "add", remove: "remove", ondrop: "ondrop" }, ngContentSelectors: _c05, decls: 8, vars: 4, consts: [["menu", "matMenu"], [1, "bg-base-100", "flex", "items-center", "justify-center", "space-x-2", "rounded-xl", "p-2"], [1, "text-xl", "font-medium"], [1, "bg-base-200", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "uppercase"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 1, "text-xs", 3, "href", "matTooltip"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["cdkDropList", "", 1, "mt-4", "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "border-base-300", "bg-base-100", "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["class", "border-base-400 bg-base-300 h-20 w-full rounded-xl border-4 border-dashed", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", 1, "hover:bg-base-200", "m-0!", "flex", "h-full", "w-6", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], ["preview", "", "matRipple", "", 1, "border-base-200", "bg-base-200", "relative", "h-14", "w-14", "rounded-sm", "border", 3, "routerLink", "queryParams"], ["auth", "", 1, "border-base-300", "bg-base-200", "absolute", "h-10", "w-10", "rounded-sm", "border", "object-cover", "shadow", 3, "source", "top", "left", "z-index"], [1, "text-base-content", "w-1/2", "flex-1"], [1, "truncate"], [1, "truncate", "text-sm", "opacity-30"], [1, "border-info", "bg-info-light", "rounded-sm", "border", "p-1", "text-lg", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", "queryParams"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"], [1, "border-base-400", "bg-base-300", "h-20", "w-full", "rounded-xl", "border-4", "border-dashed"], ["auth", "", 1, "border-base-300", "bg-base-200", "absolute", "h-10", "w-10", "rounded-sm", "border", "object-cover", "shadow", 3, "source"], [1, "flex", "flex-col", "items-center", "justify-center", "opacity-30"], [1, "text-6xl"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function SignageItemPlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, SignageItemPlaylistsComponent_Conditional_3_Template, 2, 1, "div", 3);
        \u0275\u0275conditionalCreate(4, SignageItemPlaylistsComponent_Conditional_4_Template, 4, 4, "a", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(5);
        \u0275\u0275conditionalCreate(6, SignageItemPlaylistsComponent_Conditional_6_Template, 10, 3)(7, SignageItemPlaylistsComponent_Conditional_7_Template, 14, 9, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.item()?.display_name || ctx.item()?.name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.extra() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.link() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.active_playlists().length > 0 && ctx.item() ? 6 : 7);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      CdkDragPlaceholder,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageItemPlaylistsComponent, [{
    type: Component,
    args: [{ selector: `signage-item-playlists`, template: `
        <div
            class="bg-base-100 flex items-center justify-center space-x-2 rounded-xl p-2"
        >
            <h3 class="text-xl font-medium">
                {{ item()?.display_name || item()?.name }}
            </h3>
            @if (extra()) {
                <div
                    class="bg-base-200 rounded-lg px-2 py-1 font-mono text-xs uppercase"
                >
                    {{ extra() }}
                </div>
            }
            @if (link()) {
                <a
                    icon
                    matRipple
                    [href]="link()"
                    target="_blank"
                    class="text-xs"
                    [matTooltip]="
                        'APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER' | translate
                    "
                    rel="noopener noreferrer"
                >
                    <icon>open_in_new</icon>
                </a>
            }
        </div>
        <ng-content />
        @if (active_playlists().length > 0 && item()) {
            <div
                cdkDropList
                class="mt-4 flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                (cdkDropListDropped)="ondrop.emit($event)"
            >
                @for (item of active_playlists(); track item?.id) {
                    <div
                        cdkDrag
                        class="border-base-300 bg-base-100 flex h-20 w-full items-center space-x-2 rounded-lg border p-2"
                    >
                        <div
                            class="border-base-400 bg-base-300 h-20 w-full rounded-xl border-4 border-dashed"
                            *cdkDragPlaceholder
                        ></div>
                        <button
                            matRipple
                            cdkDragHandle
                            class="hover:bg-base-200 m-0! flex h-full w-6 items-center justify-center rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.SIGNAGE_MEDIA_REORDER'
                                    | translate
                            "
                        >
                            <icon>drag_handle</icon>
                        </button>
                        <a
                            preview
                            matRipple
                            [routerLink]="['/signage', 'media']"
                            [queryParams]="{ playlist: item.id }"
                            class="border-base-200 bg-base-200 relative h-14 w-14 rounded-sm border"
                        >
                            @for (
                                media of playlist_thumbnail_media()[item.id] ||
                                    [];
                                track media;
                                let i = $index;
                                let len = $count
                            ) {
                                <img
                                    auth
                                    [source]="media"
                                    class="border-base-300 bg-base-200 absolute h-10 w-10 rounded-sm border object-cover shadow"
                                    [style.top]="
                                        0.45 -
                                        (len - 1) * 0.125 +
                                        (len - 1 - i) * 0.25 +
                                        'rem'
                                    "
                                    [style.left]="
                                        0.45 -
                                        (len - 1) * 0.125 +
                                        (len - 1 - i) * 0.25 +
                                        'rem'
                                    "
                                    [style.z-index]="i"
                                />
                            }
                        </a>
                        <div class="text-base-content w-1/2 flex-1">
                            <div class="truncate">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-sm opacity-30">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      playlist_count()[item.id]
                                                          ?.count || 0,
                                              }
                                            : playlist_count()[item.id]
                                                  ?.count || 0
                                }}
                            </div>
                        </div>
                        @if (isScheduled(item)) {
                            <div
                                class="border-info bg-info-light rounded-sm border p-1 text-lg"
                                [matTooltip]="'COMMON.SCHEDULED' | translate"
                            >
                                <icon>event</icon>
                            </div>
                        }
                        <button
                            icon
                            matRipple
                            aria-label="Media Actions"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [routerLink]="['/signage', 'media']"
                                [queryParams]="{
                                    playlist: item.id,
                                }"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"> visibility </icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove.emit(item)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl">
                                        delete
                                    </icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            </div>
            <button btn matRipple (click)="add.emit()">
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">playlist_add</icon>
                    <div class="pr-2">
                        {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD' | translate }}
                    </div>
                </div>
            </button>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <div
                    class="flex flex-col items-center justify-center opacity-30"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLISTS_EMPTY'
                                | translate: { name: name() }
                        }}
                    </p>
                </div>
                <button btn matRipple (click)="add.emit()" class="w-48">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">playlist_add</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatMenuModule,
      DragDropModule,
      MatTooltipModule,
      RouterLink,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-item-playlists.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], extra: [{ type: Input, args: [{ isSignal: true, alias: "extra", required: false }] }], link: [{ type: Input, args: [{ isSignal: true, alias: "link", required: false }] }], add: [{ type: Output, args: ["add"] }], remove: [{ type: Output, args: ["remove"] }], ondrop: [{ type: Output, args: ["ondrop"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageItemPlaylistsComponent, { className: "SignageItemPlaylistsComponent", filePath: "apps/concierge/src/app/signage/signage-item-playlists.component.ts", lineNumber: 250 });
})();

// apps/concierge/src/app/signage/zone-select-modal.component.ts
function ZoneSelectModalComponent_Conditional_11_For_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r2, " ");
  }
}
function ZoneSelectModalComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, ZoneSelectModalComponent_Conditional_11_For_1_For_7_Template, 2, 1, "div", 11, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r3 = ctx.$implicit;
    \u0275\u0275property("mat-dialog-close", zone_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", zone_r3.display_name || zone_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r3.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(8, 3, zone_r3.tags, 0, 3));
  }
}
function ZoneSelectModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ZoneSelectModalComponent_Conditional_11_For_1_Template, 9, 7, "button", 7, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const zone_list_r4 = \u0275\u0275readContextLet(10);
    \u0275\u0275repeater(zone_list_r4);
  }
}
function ZoneSelectModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 12);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "No zones found");
    \u0275\u0275elementEnd()();
  }
}
var ZoneSelectModalComponent = class _ZoneSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.query = this._data.query || {};
    this.ignore = this._data.ignore || [];
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zones" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.search_term(),
      defaultValue: [],
      loader: async ({ params: term }) => {
        const resp = await eh(__spreadProps(__spreadValues({}, this.query), {
          q: term,
          limit: 100
        })).catch(() => ({ data: [] }));
        return resp.data;
      }
    }));
    this.zones = computed(
      () => this._zones.value().filter((zone) => !this.ignore.includes(zone.id)),
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ZoneSelectModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZoneSelectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSelectModalComponent, selectors: [["app-zone-select-modal"]], decls: 13, vars: 6, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", "placeholder", "Search zones", 3, "ngModelChange", "ngModel"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], ["matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "flex-1"], [1, ""], [1, "text-xs", "opacity-30"], [1, "bg-info", "text-info-content", "rounded-lg", "px-2", "py-1", "font-mono", "text-[0.625rem]"], [1, "text-8xl", "opacity-30"], [1, "opacity-30"]], template: function ZoneSelectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 3)(8, "mat-form-field", 4)(9, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function ZoneSelectModalComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275declareLet(10);
        \u0275\u0275conditionalCreate(11, ZoneSelectModalComponent_Conditional_11_Template, 2, 0)(12, ZoneSelectModalComponent_Conditional_12_Template, 5, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.ZONE_SELECT_HEADER"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
        \u0275\u0275control();
        \u0275\u0275advance();
        const zone_list_r5 = \u0275\u0275storeLet(ctx.zones());
        \u0275\u0275advance();
        \u0275\u0275conditional(zone_list_r5.length > 0 ? 11 : 12);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      SlicePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneSelectModalComponent, [{
    type: Component,
    args: [{ selector: "app-zone-select-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.ZONE_SELECT_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [(ngModel)]="search_term"
                    placeholder="Search zones"
                />
            </mat-form-field>
            @let zone_list = zones();
            @if (zone_list.length > 0) {
                @for (zone of zone_list; track zone) {
                    <button
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center justify-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="zone.id"
                    >
                        <div class="flex-1">
                            <div class="">
                                {{ zone.display_name || zone.name }}
                            </div>
                            <div class="text-xs opacity-30">
                                {{ zone.id }}
                            </div>
                        </div>
                        @for (tag of zone.tags | slice: 0 : 3; track $index) {
                            <div
                                class="bg-info text-info-content rounded-lg px-2 py-1 font-mono text-[0.625rem]"
                            >
                                {{ tag }}
                            </div>
                        }
                    </button>
                }
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-8xl opacity-30">layers_clear</icon>
                    <div class="opacity-30">No zones found</div>
                </div>
            }
        </main>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      TranslatePipe,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSelectModalComponent, { className: "ZoneSelectModalComponent", filePath: "apps/concierge/src/app/signage/zone-select-modal.component.ts", lineNumber: 84 });
})();

// apps/concierge/src/app/signage/signage-displays.component.ts
var _c06 = () => [];
var _c12 = (a0) => ({ display: a0 });
var _c22 = (a0, a1) => ({ display: a0, trigger: a1 });
var _c32 = () => ["/signage", "zones"];
var _c42 = (a0) => ({ zone: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const display_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected_trigger() === trigger_r1?.id)("text-secondary-content", ctx_r2.selected_trigger() === trigger_r1?.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c06))("queryParams", \u0275\u0275pureFunction2(8, _c22, display_r2.id, trigger_r1?.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(trigger_r1?.display_name || trigger_r1?.name || "Trigger");
  }
}
function SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_For_1_Template, 6, 11, "div", 14, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.triggers());
  }
}
function SignageDisplaysComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SignageDisplaysComponent_Conditional_8_For_2_Conditional_2_Template, 2, 0);
  }
  if (rf & 2) {
    const display_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected() === display_r2.id)("text-secondary-content", ctx_r2.selected() === display_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c06))("queryParams", \u0275\u0275pureFunction1(9, _c12, display_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r2.display_name || display_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.active_display()?.id === display_r2.id && !ctx_r2.switching() ? 2 : -1);
  }
}
function SignageDisplaysComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_8_For_2_Template, 3, 11, null, null, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.displays());
  }
}
function SignageDisplaysComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 19);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, ctx_r2.search() ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_EMPTY"), " ");
  }
}
function SignageDisplaysComponent_Conditional_11_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "zone");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "zone");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c32))("queryParams", \u0275\u0275pureFunction1(12, _c42, zone_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind1(2, 3, zone_r6))?.display_name || \u0275\u0275pipeBind1(5, 9, \u0275\u0275pipeBind1(4, 7, zone_r6))?.name, " ");
  }
}
function SignageDisplaysComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_11_Conditional_2_For_2_Template, 6, 14, "a", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_11_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addZone());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const display_r7 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(display_r7?.zones);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_DISPLAYS_ZONE_ADD"), " ");
  }
}
function SignageDisplaysComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "signage-item-playlists", 21);
    \u0275\u0275listener("add", function SignageDisplaysComponent_Conditional_11_Template_signage_item_playlists_add_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding.set(true));
    })("remove", function SignageDisplaysComponent_Conditional_11_Template_signage_item_playlists_remove_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePlaylist($event));
    })("ondrop", function SignageDisplaysComponent_Conditional_11_Template_signage_item_playlists_ondrop_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275conditionalCreate(2, SignageDisplaysComponent_Conditional_11_Conditional_2_Template, 6, 3, "div", 22);
    \u0275\u0275elementStart(3, "button", 23)(4, "icon");
    \u0275\u0275text(5, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-menu", null, 0)(8, "a", 24)(9, "div", 25)(10, "icon", 26);
    \u0275\u0275text(11, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 27);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 28)(16, "div", 25)(17, "icon", 26);
    \u0275\u0275text(18, "aspect_ratio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 27);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "mat-menu", null, 1)(24, "button", 29);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_11_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOrientation("landscape"));
    });
    \u0275\u0275elementStart(25, "div", 25)(26, "icon", 26);
    \u0275\u0275text(27, "crop_landscape");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "button", 29);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_11_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOrientation("portrait"));
    });
    \u0275\u0275elementStart(32, "div", 25)(33, "icon", 26);
    \u0275\u0275text(34, "crop_portrait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "button", 29);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_11_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOrientation("square"));
    });
    \u0275\u0275elementStart(39, "div", 25)(40, "icon", 26);
    \u0275\u0275text(41, "check_box_outline_blank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "button", 29);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_11_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setOrientation("unspecified"));
    });
    \u0275\u0275elementStart(46, "div", 25)(47, "icon", 26);
    \u0275\u0275text(48, "question_mark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "button", 29);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_11_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeDisplay());
    });
    \u0275\u0275elementStart(53, "div", 25)(54, "icon", 30);
    \u0275\u0275text(55, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 27);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const menu_r8 = \u0275\u0275reference(7);
    const orientationMenu_r9 = \u0275\u0275reference(23);
    const ctx_r2 = \u0275\u0275nextContext();
    const display_r10 = \u0275\u0275storeLet(ctx_r2.active_display());
    const trigger_r11 = ctx_r2.active_trigger();
    \u0275\u0275advance();
    \u0275\u0275property("item", trigger_r11 || display_r10)("name", trigger_r11 ? "trigger" : "display")("extra", trigger_r11 ? "" : display_r10?.orientation)("link", trigger_r11 ? "" : ctx_r2.signage_path + "/#/signage/" + display_r10?.id + "?debug=true");
    \u0275\u0275advance();
    \u0275\u0275conditional(!trigger_r11 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r2.signage_path + "/#/signage/" + ctx_r2.active_display()?.id + "?debug=true", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", orientationMenu_r9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 18, "APP.CONCIERGE.SIGNAGE_DISPLAYS_SET_ORIENTATION"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 20, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 22, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 24, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 26, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 28, "APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE"), " ");
  }
}
function SignageDisplaysComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 19);
    \u0275\u0275text(2, "desktop_windows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_DISPLAYS_SELECT"), " ");
  }
}
function SignageDisplaysComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 33);
    \u0275\u0275listener("selected", function SignageDisplaysComponent_Conditional_13_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageDisplaysComponent_Conditional_13_Template_search_overlay_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_list", ctx_r2.playlists());
  }
}
var SignageDisplaysComponent = class _SignageDisplaysComponent extends AsyncHandler {
  get signage_path() {
    return this._settings.get("app.signage_path") || "/signage";
  }
  constructor() {
    super();
    this._state = inject(SignageStateService);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.adding = signal(
      false,
      ...ngDevMode ? [{ debugName: "adding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.switching = signal(
      false,
      ...ngDevMode ? [{ debugName: "switching" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.displays = computed(
      () => {
        const search_value = this.search().toLowerCase();
        const list = this._state.displays();
        return list.filter((_) => _.name.toLowerCase().includes(search_value));
      },
      ...ngDevMode ? [{ debugName: "displays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_trigger = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_display = computed(
      () => {
        const displays = this.displays();
        const id = this.selected();
        return displays.find((item) => item.id === id);
      },
      ...ngDevMode ? [{ debugName: "active_display" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._triggers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_triggers" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.selected(),
      defaultValue: [],
      loader: async ({ params: id }) => {
        if (!id)
          return [];
        const resp = await qa(id);
        setTimeout(() => this.switching.set(false), 200);
        return resp.data;
      }
    }));
    this.triggers = this._triggers.value;
    this.active_trigger = computed(
      () => {
        const list = this.triggers();
        const id = this.selected_trigger();
        const sys_id = this.selected();
        return list.find((item) => item.id === id && item.control_system_id === sys_id);
      },
      ...ngDevMode ? [{ debugName: "active_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists = computed(
      () => {
        const display = this.active_display();
        const trigger = this.active_trigger();
        const playlists = this._state.playlists();
        this._state.has_changed();
        return playlists.filter((_) => !(trigger || display)?.playlists.find((id) => _.id === id));
      },
      ...ngDevMode ? [{ debugName: "playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.removeDisplay = async () => this._state.removeDisplay(this.active_display());
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (!params)
        return;
      this.switching.set(params.get("display") !== this.selected());
      this.selected.set(params.get("display") || "");
      this.selected_trigger.set(params.get("trigger") || "");
    }));
  }
  async addPlaylist(playlist) {
    const display = this.active_display();
    const trigger = this.active_trigger();
    const item = trigger || display;
    const playlists = [...item.playlists, playlist.id];
    const method = trigger ? Na : da;
    await method(item.id, { playlists, version: display.version }, "patch");
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_ADDED"));
    this._state.changed();
    this.adding.set(false);
  }
  async removePlaylist(playlist) {
    const display = this.active_display();
    const trigger = this.active_trigger();
    const item = trigger || display;
    const playlists = item.playlists.filter((id) => playlist.id !== id);
    const method = trigger ? Na : da;
    await method(item.id, { playlists, version: display.version }, "patch");
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVED" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_REMOVED"));
    this._state.changed();
    this.adding.set(false);
  }
  async drop(event) {
    const display = this.active_display();
    const trigger = this.active_trigger();
    const item = trigger || display;
    const old_playlist = item.playlists;
    const playlists = [...old_playlist];
    moveItemInArray(playlists, event.previousIndex, event.currentIndex);
    item.playlists = playlists;
    this._state.changed();
    const method = trigger ? Na : da;
    await method(item.id, { playlists, version: display.version }, "patch").catch((e) => {
      item.playlists = old_playlist;
      this._state.changed();
      throw e;
    });
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_REORDER"));
    this._state.changed();
  }
  async setOrientation(orientation) {
    const display = this.active_display();
    if (!display)
      return;
    await da(display.id, { orientation, version: display.version }, "patch").catch((e) => {
      notifyError(i18n("APP.CONCIERGE.SIGNAGE_ORIENTATION_ERROR", {
        error: e.message
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_ORIENTATION_CHANGED"));
    this._state.changed();
  }
  async addZone() {
    const display = this.active_display();
    if (!display)
      return;
    const ref = this._dialog.open(ZoneSelectModalComponent, {
      data: { ignore: display.zones }
    });
    const result = await nextValueFrom(ref.afterClosed());
    if (!result)
      return;
    await da(display.id, {
      zones: unique([...display.zones, result]),
      version: display.version
    }, "patch").catch((e) => {
      notifyError(i18n("APP.CONCIERGE.SIGNAGE_ZONE_ERROR", {
        error: e.message
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_ZONE_ADDED"));
    this._state.changed();
  }
  static {
    this.\u0275fac = function SignageDisplaysComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageDisplaysComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplaysComponent, selectors: [["signage-displays"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 10, consts: [["menu", "matMenu"], ["orientationMenu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "space-x-2", "overflow-visible"], ["sidebar", "", 1, "border-base-300", "flex", "h-full", "w-64", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "bg-base-200", "rounded-lg", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "border-base-300", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "flex", "flex-1", "flex-col", 3, "item", "name", "extra", "link"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list"], ["matRipple", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "relative", "z-10", "flex", "h-12", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "border", "px-6", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "border-base-300", "absolute", "top-1/2", "left-6", "z-0", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2"], ["matRipple", "", 1, "hover:bg-base-200", "relative", "z-10", "flex", "min-h-12", "w-1/2", "flex-1", "items-center", "truncate", "rounded-3xl", "px-6", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name", "extra", "link"], [1, "bg-base-100", "mt-2", "flex", "flex-wrap", "items-center", "overflow-auto", "rounded-xl", "p-1"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "m-0!", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"], ["matRipple", "", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs", "whitespace-nowrap", 3, "routerLink", "queryParams"], ["matRipple", "", 1, "m-1", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs", "underline", 3, "click"], [3, "selected", "close", "item_list"]], template: function SignageDisplaysComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SignageDisplaysComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SignageDisplaysComponent_Conditional_8_Template, 3, 0, "div", 7)(9, SignageDisplaysComponent_Conditional_9_Template, 6, 3, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275conditionalCreate(11, SignageDisplaysComponent_Conditional_11_Template, 59, 30, "signage-item-playlists", 10)(12, SignageDisplaysComponent_Conditional_12_Template, 6, 3, "div", 11);
        \u0275\u0275conditionalCreate(13, SignageDisplaysComponent_Conditional_13_Template, 1, 1, "search-overlay", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.SIGNAGE_DISPLAYS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "COMMON.SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.displays().length > 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.active_display() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.adding() ? 13 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      SearchOverlayComponent,
      RouterModule,
      RouterLink,
      SignageItemPlaylistsComponent,
      AsyncPipe,
      TranslatePipe,
      ZonePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageDisplaysComponent, [{
    type: Component,
    args: [{ selector: "signage-displays", template: `
        <div class="relative flex h-full w-full space-x-2 overflow-visible">
            <div
                sidebar
                class="border-base-300 flex h-full w-64 flex-col space-y-2 overflow-auto rounded-xl border p-2"
            >
                <h3
                    class="bg-base-200 rounded-lg p-2 text-center text-xl font-medium"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_DISPLAYS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
                @if (displays().length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (display of displays(); track display.id) {
                            <a
                                matRipple
                                class="border-base-100 even:border-base-200 even:bg-base-200 hover:border-info relative z-10 flex h-12 min-h-12 w-full items-center truncate rounded-3xl border px-6"
                                [class.bg-secondary!]="
                                    selected() === display.id
                                "
                                [class.text-secondary-content]="
                                    selected() === display.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ display: display.id }"
                            >
                                {{ display.display_name || display.name }}
                            </a>
                            @if (
                                active_display()?.id === display.id &&
                                !switching()
                            ) {
                                @for (trigger of triggers(); track trigger.id) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="border-base-300 absolute top-1/2 left-6 z-0 h-16 w-4 -translate-y-full border-b-2 border-l-2"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="hover:bg-base-200 relative z-10 flex min-h-12 w-1/2 flex-1 items-center truncate rounded-3xl px-6"
                                            [class.bg-secondary!]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [routerLink]="[]"
                                            [queryParams]="{
                                                display: display.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            <span class="max-w-full truncate">{{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}</span>
                                        </a>
                                    </div>
                                }
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search()
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="border-base-300 bg-base-200 relative flex h-full w-1/2 flex-1 flex-col space-y-2 overflow-auto rounded-lg border p-2 shadow-sm"
            >
                @if (active_display()) {
                    @let display = active_display();
                    @let trigger = active_trigger();
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="trigger || display"
                        [name]="trigger ? 'trigger' : 'display'"
                        [extra]="trigger ? '' : display?.orientation"
                        [link]="
                            trigger
                                ? ''
                                : signage_path +
                                  '/#/signage/' +
                                  display?.id +
                                  '?debug=true'
                        "
                        (add)="this.adding.set(true)"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    >
                        @if (!trigger) {
                            <div
                                class="bg-base-100 mt-2 flex flex-wrap items-center overflow-auto rounded-xl p-1"
                            >
                                @for (zone of display?.zones; track zone) {
                                    <a
                                        class="bg-base-200 m-1 rounded-sm px-2 py-1 font-mono text-xs whitespace-nowrap"
                                        matRipple
                                        [routerLink]="['/signage', 'zones']"
                                        [queryParams]="{ zone: zone }"
                                    >
                                        {{
                                            (zone | zone | async)
                                                ?.display_name ||
                                                (zone | zone | async)?.name
                                        }}
                                    </a>
                                }
                                <button
                                    class="m-1 rounded-sm px-2 py-1 font-mono text-xs underline"
                                    matRipple
                                    (click)="addZone()"
                                >
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_DISPLAYS_ZONE_ADD'
                                            | translate
                                    }}
                                </button>
                            </div>
                        }
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="menu"
                            class="absolute top-2 right-2 m-0!"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [href]="
                                    signage_path +
                                    '/#/signage/' +
                                    active_display()?.id +
                                    '?debug=true'
                                "
                                target="_blank"
                                ref="noopener noreferrer"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">open_in_new</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button
                                mat-menu-item
                                [matMenuTriggerFor]="orientationMenu"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">aspect_ratio</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_SET_ORIENTATION'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <mat-menu #orientationMenu="matMenu">
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('landscape')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >crop_landscape</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('portrait')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >crop_portrait</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('square')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >check_box_outline_blank</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('unspecified')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >question_mark</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                            <button mat-menu-item (click)="removeDisplay()">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl"
                                        >delete</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_DISPLAYS_SELECT'
                                    | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding()) {
                    <search-overlay
                        [item_list]="playlists()"
                        (selected)="addPlaylist($event)"
                        (close)="adding.set(false)"
                    ></search-overlay>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatMenuModule,
      SearchOverlayComponent,
      RouterModule,
      SignageItemPlaylistsComponent,
      ZonePipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplaysComponent, { className: "SignageDisplaysComponent", filePath: "apps/concierge/src/app/signage/signage-displays.component.ts", lineNumber: 344 });
})();

// apps/concierge/src/app/signage/signage-media-list.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function SignageMediaListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-form-field", 13)(2, "input", 6);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SignageMediaListComponent_ng_template_11_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.link, $event) || (ctx_r2.link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function SignageMediaListComponent_ng_template_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addFromLink(ctx_r2.link()));
    });
    \u0275\u0275elementStart(5, "icon", 15);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "COMMON.URL"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.link);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "COMMON.ADD"));
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
}
function SignageMediaListComponent_Conditional_18_For_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "icon", 39);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 40);
    \u0275\u0275text(2, "http");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
    \u0275\u0275elementStart(1, "div", 42)(2, "icon", 34);
    \u0275\u0275text(3, "expand_content");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const media_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("source", media_r6.thumbnail_url);
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const media_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(media_r6.media_type === "video" ? "video_library" : "image");
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignageMediaListComponent_Conditional_18_For_2_Conditional_6_Conditional_0_Template, 4, 1)(1, SignageMediaListComponent_Conditional_18_For_2_Conditional_6_Conditional_1_Template, 3, 1, "div", 22);
  }
  if (rf & 2) {
    const media_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(media_r6.thumbnail_url ? 0 : 1);
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, media_r6.play_time / 1e3), " ");
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY"), " ");
  }
}
function SignageMediaListComponent_Conditional_18_For_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_18_For_2_For_25_Template_button_click_0_listener() {
      const playlist_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const media_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToPlaylist(media_r6.id, playlist_r8));
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const playlist_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r8.name, " ");
  }
}
function SignageMediaListComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275conditionalCreate(1, SignageMediaListComponent_Conditional_18_For_2_Conditional_1_Template, 1, 0, "div", 18)(2, SignageMediaListComponent_Conditional_18_For_2_Conditional_2_Template, 1, 0, "div", 19);
    \u0275\u0275template(3, SignageMediaListComponent_Conditional_18_For_2_div_3_Template, 3, 0, "div", 20);
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_18_For_2_Template_button_click_4_listener() {
      const media_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previewItem(media_r6));
    });
    \u0275\u0275conditionalCreate(5, SignageMediaListComponent_Conditional_18_For_2_Conditional_5_Template, 3, 0, "div", 22)(6, SignageMediaListComponent_Conditional_18_For_2_Conditional_6_Template, 2, 1);
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, SignageMediaListComponent_Conditional_18_For_2_Conditional_10_Template, 3, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "div", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 27)(15, "icon");
    \u0275\u0275text(16, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-menu", null, 1)(19, "div", 28)(20, "mat-form-field", 29);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_18_For_2_Template_mat_form_field_click_20_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(21, "input", 6);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SignageMediaListComponent_Conditional_18_For_2_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.playlist_search, $event) || (ctx_r2.playlist_search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, SignageMediaListComponent_Conditional_18_For_2_Conditional_23_Template, 3, 4, "button", 30);
    \u0275\u0275repeaterCreate(24, SignageMediaListComponent_Conditional_18_For_2_For_25_Template, 4, 1, "button", 31, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-menu", null, 2)(28, "button", 32);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_18_For_2_Template_button_click_28_listener() {
      const media_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editItem(media_r6));
    });
    \u0275\u0275elementStart(29, "div", 33)(30, "icon", 34);
    \u0275\u0275text(31, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 35);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "button", 36)(36, "div", 33)(37, "icon", 34);
    \u0275\u0275text(38, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 35);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "button", 32);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_18_For_2_Template_button_click_42_listener() {
      const media_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previewItem(media_r6));
    });
    \u0275\u0275elementStart(43, "div", 33)(44, "icon", 34);
    \u0275\u0275text(45, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 35);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "button", 32);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_18_For_2_Template_button_click_49_listener() {
      const media_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(media_r6));
    });
    \u0275\u0275elementStart(50, "div", 33)(51, "icon", 37);
    \u0275\u0275text(52, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 35);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const media_r6 = ctx.$implicit;
    const playlist_menu_r9 = \u0275\u0275reference(18);
    const menu_r10 = \u0275\u0275reference(27);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_r6.valid_from && ctx_r2.now < media_r6.valid_from ? 1 : media_r6.valid_until && ctx_r2.now > media_r6.valid_until ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(media_r6.media_type === "webpage" ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-info", media_r6.media_type === "video")("text-info-content", media_r6.media_type === "video")("bg-warning", media_r6.media_type === "image")("text-warning-content", media_r6.media_type === "image")("bg-success", media_r6.media_type === "webpage")("text-success-content", media_r6.media_type === "webpage");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 27, media_r6.media_type === "image" ? "COMMON.IMAGE" : media_r6.media_type === "webpage" ? "COMMON.WEBPAGE" : "COMMON.VIDEO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(media_r6.play_time ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_r6.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 29, "COMMON.SEARCH"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.playlist_search);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx_r2.playlists()?.length > 0) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.playlists());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 31, "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", playlist_menu_r9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 33, "APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 35, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 37, "APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"), " ");
  }
}
function SignageMediaListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("cdkDropListDropped", function SignageMediaListComponent_Conditional_18_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275repeaterCreate(1, SignageMediaListComponent_Conditional_18_For_2_Template, 56, 39, "div", 17, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", ctx_r2.media())("cdkDropListConnectedTo", ctx_r2.playlist_ids());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.media());
  }
}
function SignageMediaListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 43);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_MEDIA_EMPTY"));
  }
}
var SignageMediaListComponent = class _SignageMediaListComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this.link = signal(
      "",
      ...ngDevMode ? [{ debugName: "link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_count = input(
      0,
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_search = signal(
      "",
      ...ngDevMode ? [{ debugName: "playlist_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists = computed(
      () => {
        const search_term = this.playlist_search();
        const list = this._state.playlists();
        return list.filter((_) => _.name.toLowerCase().includes(search_term.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media = computed(
      () => {
        const search_term = this.search();
        const media_list = this._state.media();
        return media_list.filter((_) => _.name.toLowerCase().includes(search_term.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_ids = computed(
      () => new Array(this.playlist_count()).fill(0).map((_, idx) => `playlist-${idx}`),
      ...ngDevMode ? [{ debugName: "playlist_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previewFile = (event) => this._state.previewFileFromInput(event);
    this.addFromLink = async (url) => {
      const is_valid = isValidUrl(url);
      if (!is_valid) {
        notifyError("Supplied URL is not valid.");
        return;
      }
      await this._state.addMediaFromLink(url);
      this.link.set("");
    };
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removeItem = async (item) => this._state.removeMedia(item);
  }
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  drop(event) {
  }
  async addToPlaylist(media_id, playlist) {
    const media_list = await xh(playlist.id);
    const new_media_list = [...media_list.items, media_id];
    await this._state.updatePlaylistMedia(playlist.id, new_media_list);
  }
  static {
    this.\u0275fac = function SignageMediaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaListComponent, selectors: [["signage-media-list"]], inputs: { playlist_count: [1, "playlist_count"] }, decls: 20, vars: 15, consts: [["add_link_template", ""], ["playlist_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "p-2"], [1, "bg-base-100", "mb-2", "rounded-xl", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "white", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "default", "", "matRipple", "", "customTooltip", "", "matTooltipPosition", "left", 1, "absolute", "top-2.5", "right-14", 3, "content", "matTooltip"], ["icon", "", "default", "", "matRipple", "", "matTooltipPosition", "left", 1, "absolute", "top-2.5", "right-3", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "border-base-300", "bg-base-100", "my-2", "flex", "w-[20rem]", "flex-col", "space-y-4", "rounded-lg", "border", "p-4", "shadow-sm"], ["appearance", "outline", 1, "no-subscript"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "mr-2", "text-2xl"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "border-base-300", "bg-base-100", "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-3", "hover:opacity-80"], [1, "bg-warning", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], [1, "bg-error", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], ["class", "border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30", 4, "cdkDragPlaceholder"], ["preview", "", "matRipple", "", 1, "bg-base-200", "relative", "h-36", "w-full", "overflow-hidden", "rounded-lg", 3, "click"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "absolute", "top-1", "left-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "bg-info", "text-info-content", "absolute", "right-1", "bottom-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "relative", "top-1", "flex", "w-full", "items-center", "justify-between"], [1, "text-base-content", "w-1/2", "flex-1", "truncate", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "px-2"], ["appearance", "outline", 1, "no-subscript", "w-full", 3, "click"], ["mat-menu-item", "", 3, "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "text-error", "text-2xl"], [1, "border-base-400", "bg-base-300", "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "opacity-30"], [1, "text-base-100", "text-2xl"], [1, "text-8xl", "opacity-30"], ["auth", "", 1, "absolute", "-inset-px", "rounded-lg", "object-contain", 3, "source"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-6xl"]], template: function SignageMediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "h3", 4);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "input", 6);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SignageMediaListComponent_Template_input_ngModelChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, SignageMediaListComponent_ng_template_11_Template, 10, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementStart(15, "icon");
        \u0275\u0275text(16, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 9);
        \u0275\u0275listener("change", function SignageMediaListComponent_Template_input_change_17_listener($event) {
          return ctx.previewFile($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(18, SignageMediaListComponent_Conditional_18_Template, 3, 2, "div", 10)(19, SignageMediaListComponent_Conditional_19_Template, 6, 3, "div", 11);
      }
      if (rf & 2) {
        const add_link_template_r11 = \u0275\u0275reference(12);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "APP.CONCIERGE.SIGNAGE_MEDIA"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "COMMON.SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("content", add_link_template_r11)("matTooltip", \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_LINK"));
        \u0275\u0275advance(6);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 13, "APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.media()?.length > 0 ? 18 : 19);
      }
    }, dependencies: [
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      CustomTooltipComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragPlaceholder,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      TranslatePipe,
      MediaDurationPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n  .cdk-drag-preview {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaListComponent, [{
    type: Component,
    args: [{ selector: "signage-media-list", template: `
        <div class="relative p-2">
            <h3
                class="bg-base-100 mb-2 rounded-xl p-2 text-center text-xl font-medium"
            >
                {{ 'APP.CONCIERGE.SIGNAGE_MEDIA' | translate }}
            </h3>
            <mat-form-field
                appearance="outline"
                class="no-subscript white w-full"
            >
                <input
                    matInput
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [(ngModel)]="search"
                />
            </mat-form-field>
            <button
                icon
                default
                matRipple
                customTooltip
                [content]="add_link_template"
                class="absolute top-2.5 right-14"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_LINK' | translate"
                matTooltipPosition="left"
            >
                <icon>link</icon>
            </button>
            <ng-template #add_link_template>
                <div
                    class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                >
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            [placeholder]="'COMMON.URL' | translate"
                            [(ngModel)]="link"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-full"
                        (click)="addFromLink(link())"
                    >
                        <icon class="mr-2 text-2xl">add</icon>
                        <div>{{ 'COMMON.ADD' | translate }}</div>
                    </button>
                </div>
            </ng-template>
            <button
                icon
                default
                matRipple
                class="absolute top-2.5 right-3"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD' | translate"
                matTooltipPosition="left"
            >
                <icon>add</icon>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="previewFile($event)"
                />
            </button>
        </div>
        @if (media()?.length > 0) {
            <div
                class="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media()"
                [cdkDropListConnectedTo]="playlist_ids()"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media of media(); track media.id) {
                    <div
                        class="border-base-300 bg-base-100 relative flex flex-col items-center justify-center rounded-lg border p-3 hover:opacity-80"
                        cdkDrag
                    >
                        @if (media.valid_from && now < media.valid_from) {
                            <div
                                class="bg-warning absolute inset-0 z-0 rounded-lg opacity-10"
                            ></div>
                        } @else if (
                            media.valid_until && now > media.valid_until
                        ) {
                            <div
                                class="bg-error absolute inset-0 z-0 rounded-lg opacity-10"
                            ></div>
                        }
                        <div
                            class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                            *cdkDragPlaceholder
                        >
                            <icon class="text-base-100 text-2xl"> add </icon>
                        </div>
                        <button
                            preview
                            matRipple
                            (click)="previewItem(media)"
                            class="bg-base-200 relative h-36 w-full overflow-hidden rounded-lg"
                        >
                            @if (media.media_type === 'webpage') {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >http</icon
                                    >
                                </div>
                            } @else {
                                @if (media.thumbnail_url) {
                                    <img
                                        auth
                                        [source]="media.thumbnail_url"
                                        class="absolute -inset-px rounded-lg object-contain"
                                    />
                                    <div
                                        class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                    >
                                        <icon class="text-2xl"
                                            >expand_content</icon
                                        >
                                    </div>
                                } @else {
                                    <div
                                        class="flex h-full w-full items-center justify-center"
                                    >
                                        <icon class="text-8xl opacity-30">{{
                                            media.media_type === 'video'
                                                ? 'video_library'
                                                : 'image'
                                        }}</icon>
                                    </div>
                                }
                            }
                            <div
                                class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="media.media_type === 'video'"
                                [class.text-info-content]="
                                    media.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media.media_type === 'image'
                                "
                                [class.bg-success]="
                                    media.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    media.media_type === 'webpage'
                                "
                            >
                                {{
                                    (media.media_type === 'image'
                                        ? 'COMMON.IMAGE'
                                        : media.media_type === 'webpage'
                                          ? 'COMMON.WEBPAGE'
                                          : 'COMMON.VIDEO'
                                    ) | translate
                                }}
                            </div>
                            @if (media.play_time) {
                                <div
                                    class="bg-info text-info-content absolute right-1 bottom-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                >
                                    {{ media.play_time / 1000 | mediaDuration }}
                                </div>
                            }
                        </button>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <div
                                class="text-base-content w-1/2 flex-1 truncate"
                                [matTooltip]="media.name"
                            >
                                {{ media.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                aria-label="Media Actions"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #playlist_menu="matMenu">
                                <div class="px-2">
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                        (click)="$event.stopPropagation()"
                                    >
                                        <input
                                            matInput
                                            [placeholder]="
                                                'COMMON.SEARCH' | translate
                                            "
                                            [(ngModel)]="playlist_search"
                                        />
                                    </mat-form-field>
                                </div>
                                @if (!(playlists()?.length > 0)) {
                                    <button mat-menu-item [disabled]="true">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                                | translate
                                        }}
                                    </button>
                                }

                                @for (
                                    playlist of playlists();
                                    track playlist.id
                                ) {
                                    <button
                                        mat-menu-item
                                        (click)="
                                            addToPlaylist(media.id, playlist)
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <div class="pr-2">
                                                {{ playlist.name }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(media)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">edit</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    [matMenuTriggerFor]="playlist_menu"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">add</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl">
                                            delete
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>{{ 'APP.CONCIERGE.SIGNAGE_MEDIA_EMPTY' | translate }}</p>
            </div>
        }
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      CustomTooltipComponent,
      FormsModule,
      DragDropModule,
      MatTooltipModule,
      MediaDurationPipe,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;f5a8e8d9dcc54932a5a9dc55391bbef5eabd69093a9e82c66ceb000099355f89;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-media-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n::ng-deep .cdk-drag-preview {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */\n"] }]
  }], null, { playlist_count: [{ type: Input, args: [{ isSignal: true, alias: "playlist_count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaListComponent, { className: "SignageMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-media-list.component.ts", lineNumber: 359 });
})();

// apps/concierge/src/app/signage/signage-playlist-media-list.component.ts
function SignagePlaylistMediaListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.SIGNAGE_SHUFFLE"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SCHEDULED"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      const playlist_r2 = \u0275\u0275readContextLet(1);
      return \u0275\u0275resetView(ctx_r3.approvePlaylist(playlist_r2));
    });
    \u0275\u0275elementStart(1, "icon", 26);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275text(7, "Click here to approve");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r3.is_admin);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_NOT_APPROVED"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"), "...");
  }
}
function SignagePlaylistMediaListComponent_Conditional_65_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
}
function SignagePlaylistMediaListComponent_Conditional_65_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function SignagePlaylistMediaListComponent_Conditional_65_For_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "icon", 41);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignagePlaylistMediaListComponent_Conditional_65_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275conditionalCreate(1, SignagePlaylistMediaListComponent_Conditional_65_For_2_Conditional_1_Template, 1, 0, "div", 31)(2, SignagePlaylistMediaListComponent_Conditional_65_For_2_Conditional_2_Template, 1, 0, "div", 32);
    \u0275\u0275template(3, SignagePlaylistMediaListComponent_Conditional_65_For_2_div_3_Template, 3, 0, "div", 33);
    \u0275\u0275elementStart(4, "button", 34)(5, "icon");
    \u0275\u0275text(6, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_65_For_2_Template_button_click_7_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previewItem(item_r7));
    });
    \u0275\u0275element(8, "img", 36);
    \u0275\u0275elementStart(9, "div", 37)(10, "icon", 9);
    \u0275\u0275text(11, "expand_content");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 39)(15, "icon");
    \u0275\u0275text(16, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-menu", null, 0)(19, "button", 7);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_65_For_2_Template_button_click_19_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editItem(item_r7));
    });
    \u0275\u0275elementStart(20, "div", 8)(21, "icon", 9);
    \u0275\u0275text(22, " edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 7);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_65_For_2_Template_button_click_26_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previewItem(item_r7));
    });
    \u0275\u0275elementStart(27, "div", 8)(28, "icon", 9);
    \u0275\u0275text(29, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 10);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 7);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_65_For_2_Template_button_click_33_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeItem(item_r7));
    });
    \u0275\u0275elementStart(34, "div", 8)(35, "icon", 12);
    \u0275\u0275text(36, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(18);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.valid_from && ctx_r3.now < item_r7.valid_from ? 1 : item_r7.valid_until && ctx_r3.now > item_r7.valid_until ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("source", item_r7.thumbnail_url);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 7, "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 9, "APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE"), " ");
  }
}
function SignagePlaylistMediaListComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("cdkDropListDropped", function SignagePlaylistMediaListComponent_Conditional_65_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.drop($event));
    });
    \u0275\u0275repeaterCreate(1, SignagePlaylistMediaListComponent_Conditional_65_For_2_Template, 40, 13, "div", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", ctx_r3.media())("cdkDropListConnectedTo", ctx_r3.playlist_ids());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.media());
  }
}
function SignagePlaylistMediaListComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "icon", 42);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_EMPTY"), " ");
  }
}
var SignagePlaylistMediaListComponent = class _SignagePlaylistMediaListComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this._clipboard = inject(Clipboard);
    this._settings = inject(SettingsService);
    this.playlist = input(
      "",
      ...ngDevMode ? [{ debugName: "playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_count = input(
      0,
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.approved = signal(
      0,
      ...ngDevMode ? [{ debugName: "approved" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_ids = computed(
      () => new Array(this.playlist_count()).fill(0).map((_, idx) => `playlist-${idx}`),
      ...ngDevMode ? [{ debugName: "playlist_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editPlaylist = () => {
      const playlist = this.selected_playlist();
      if (playlist) {
        this._state.editPlaylist(playlist);
      }
    };
    this.removeItem = async (item) => {
      const playlist = this._playlist_media();
      if (!playlist)
        return;
      const list = playlist.items.filter((_) => _ !== item.id);
      await this._state.updatePlaylistMedia(this.playlist(), list);
    };
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removePlaylist = () => {
      const playlist = this.selected_playlist();
      if (playlist) {
        this._state.removePlaylist(playlist);
        this._router.navigate(["/signage/media", {}]);
      }
    };
    this.approvePlaylist = async (plist) => {
      await this._state.approvePlaylist(plist);
    };
    this.selected_playlist = computed(
      () => {
        const playlist_id = this.playlist();
        const list = this._state.playlists();
        const item = list.find((_) => _.id === playlist_id);
        if (!item && playlist_id) {
          this._router.navigate(["/signage/media", {}]);
        }
        return item;
      },
      ...ngDevMode ? [{ debugName: "selected_playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._playlist_media_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_playlist_media_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        id: this.selected_playlist()?.id,
        change: this._state.has_changed()
      }),
      defaultValue: { id: "", items: [], approved: 0 },
      loader: async ({ params }) => {
        if (!params.id)
          return { id: "", items: [], approved: 0 };
        this.loading.set(true);
        try {
          const result = await xh(params.id).catch(() => ({ id: "", items: [], approved: 0 }));
          this.approved.set(result.approved);
          return result;
        } finally {
          this.loading.set(false);
        }
      }
    }));
    this._playlist_media = this._playlist_media_resource.value;
    this.media = computed(
      () => {
        const playlist = this._playlist_media();
        const media_list = this._state.media();
        if (!playlist)
          return [];
        return playlist.items.map((_) => media_list.find((m) => m.id === _)).filter((_) => _);
      },
      ...ngDevMode ? [{ debugName: "media" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get is_admin() {
    const groups = currentUser().groups || [];
    const admin_group = this._settings.get("app.admin_group") || "admin";
    return groups.includes(admin_group) || groups.includes("placeos_admin");
  }
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  isScheduled(item) {
    return !!item;
  }
  animation_name(value) {
    switch (value) {
      case Is.Cut:
        return "Cut";
      case Is.CrossFade:
        return "Cross Fade";
      case Is.SlideBottom:
        return "Slide Bottom";
      case Is.SlideLeft:
        return "Slide Left";
      case Is.SlideRight:
        return "Slide Right";
      case Is.SlideTop:
        return "Slide Top";
    }
    return "Default";
  }
  async drop(event) {
    if (event.previousIndex === event.currentIndex)
      return;
    const id = this.playlist();
    const playlist = this._playlist_media();
    if (!id || !playlist)
      return;
    const list = [...playlist.items];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    await this._state.updatePlaylistMedia(id, list);
  }
  async copyID(id) {
    this._clipboard.copy(id);
    notifyInfo("Copied playlist ID to clipboard.");
  }
  static {
    this.\u0275fac = function SignagePlaylistMediaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignagePlaylistMediaListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistMediaListComponent, selectors: [["signage-playlist-media-list"]], inputs: { playlist: [1, "playlist"], playlist_count: [1, "playlist_count"] }, decls: 67, vars: 45, consts: [["menu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "space-y-2", "p-2"], [1, "bg-base-100", "flex", "items-center", "justify-center", "space-x-2", "rounded-xl", "p-2"], [1, "text-xl", "font-medium"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], ["icon", "", "matRipple", "", 1, "absolute", "top-2.5", "right-2.5", "m-0!", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click", "disabled"], [1, "text-error", "text-2xl"], ["details", "", 1, "bg-base-100", "flex", "flex-wrap", "items-center", "rounded-xl", "p-1"], [1, "m-1", "ml-2", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-secondary", "text-secondary-content", "m-1", "ml-2", "rounded-sm", "px-2", "py-1", "text-xs"], ["matTooltip", "Default Transition Animation", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs"], [1, "bg-base-300", "ml-1", "rounded-sm", "px-2", "py-1", "uppercase"], ["matTooltip", "Default Playback Duration", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs"], [1, "bg-base-300", "ml-1", "rounded-sm", "px-2", "py-1", "font-mono"], ["matTooltip", "Prefered Orientation", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs"], [1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs", "uppercase"], ["matRipple", "", 1, "border-warning", "bg-warning", "text-warning-content", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-1", "text-xs", "shadow-sm", 3, "disabled", "matTooltip"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "p-2", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["matRipple", "", 1, "border-warning", "bg-warning", "text-warning-content", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-1", "text-xs", "shadow-sm", 3, "click", "disabled", "matTooltip"], [1, "text-warning-content", "ml-1", "text-xl"], [1, "underline"], ["diameter", "32"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "p-2", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "border-base-300", "bg-base-100", "relative", "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "p-2"], [1, "bg-warning", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], [1, "bg-error", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], ["class", "border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "hover:bg-base-200", "m-0!", "flex", "h-full", "w-6", "items-center", "justify-center", "rounded-sm"], ["preview", "", "matRipple", "", 1, "bg-base-200", "relative", "h-16", "w-18", "overflow-hidden", "rounded-lg", 3, "click"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-base-content", "w-1/2", "flex-1", "truncate"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "border-base-400", "bg-base-300", "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed"], [1, "text-base-100", "text-2xl"], [1, "text-6xl"]], template: function SignagePlaylistMediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275declareLet(1);
        \u0275\u0275elementStart(2, "div", 2)(3, "h3", 3)(4, "div", 4);
        \u0275\u0275text(5, "Playlist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 6)(9, "icon");
        \u0275\u0275text(10, "more_vert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 7);
        \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_13_listener() {
          return ctx.editPlaylist();
        });
        \u0275\u0275elementStart(14, "div", 8)(15, "icon", 9);
        \u0275\u0275text(16, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          const playlist_r2 = \u0275\u0275readContextLet(1);
          return \u0275\u0275resetView(ctx.approvePlaylist(playlist_r2));
        });
        \u0275\u0275elementStart(21, "div", 8)(22, "icon", 9);
        \u0275\u0275text(23, "order_approve");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 10);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "button", 7);
        \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          const playlist_r2 = \u0275\u0275readContextLet(1);
          return \u0275\u0275resetView(ctx.copyID(playlist_r2?.id));
        });
        \u0275\u0275elementStart(28, "div", 8)(29, "icon", 9);
        \u0275\u0275text(30, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 10);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "button", 7);
        \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_34_listener() {
          return ctx.removePlaylist();
        });
        \u0275\u0275elementStart(35, "div", 8)(36, "icon", 12);
        \u0275\u0275text(37, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 10);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 13)(42, "div", 14);
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(45, SignagePlaylistMediaListComponent_Conditional_45_Template, 3, 3, "div", 15);
        \u0275\u0275elementStart(46, "div", 16);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "span", 17);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 18);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "span", 19);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "mediaDuration");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 20);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "span", 17);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(62, SignagePlaylistMediaListComponent_Conditional_62_Template, 3, 3, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(63, SignagePlaylistMediaListComponent_Conditional_63_Template, 8, 4, "button", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(64, SignagePlaylistMediaListComponent_Conditional_64_Template, 5, 3, "div", 23)(65, SignagePlaylistMediaListComponent_Conditional_65_Template, 3, 2, "div", 24)(66, SignagePlaylistMediaListComponent_Conditional_66_Template, 6, 3, "div", 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const menu_r9 = \u0275\u0275reference(12);
        \u0275\u0275advance();
        const playlist_r10 = \u0275\u0275storeLet(ctx.selected_playlist());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", playlist_r10?.name, " ");
        \u0275\u0275advance();
        \u0275\u0275property("matMenuTriggerFor", menu_r9);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 27, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.approved() || !ctx.is_admin);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 29, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 31, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_COPY_ID"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 33, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-success", ctx.selected_playlist()?.enabled)("text-success-content", ctx.selected_playlist()?.enabled)("bg-error", !ctx.selected_playlist()?.enabled)("text-error-content", !ctx.selected_playlist()?.enabled);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 35, ctx.selected_playlist()?.enabled ? "COMMON.ENABLED" : "COMMON.DISABLED"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_playlist()?.random ? 45 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 37, "APP.CONCIERGE.SIGNAGE_ANIMATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.animation_name(ctx.selected_playlist()?.default_animation));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 39, "APP.CONCIERGE.SIGNAGE_DURATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 41, ctx.selected_playlist()?.default_duration / 1e3));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 43, "APP.CONCIERGE.SIGNAGE_ORIENTATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selected_playlist()?.orientation);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isScheduled(ctx.selected_playlist()) ? 62 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.approved() ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 64 : ctx.media().length > 0 ? 65 : 66);
      }
    }, dependencies: [
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      CdkDragPlaceholder,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslatePipe,
      MediaDurationPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePlaylistMediaListComponent, [{
    type: Component,
    args: [{ selector: "signage-playlist-media-list", template: `
        <div class="relative flex h-full w-full flex-col">
            @let playlist = selected_playlist();
            <div class="space-y-2 p-2">
                <h3
                    class="bg-base-100 flex items-center justify-center space-x-2 rounded-xl p-2"
                >
                    <div class="text-xl font-medium">Playlist</div>
                    <div
                        class="bg-base-200 rounded-sm px-2 py-1 font-mono text-xs"
                    >
                        {{ playlist?.name }}
                    </div>
                </h3>
                <button
                    icon
                    matRipple
                    [matMenuTriggerFor]="menu"
                    class="absolute top-2.5 right-2.5 m-0!"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editPlaylist()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">edit</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        [disabled]="approved() || !is_admin"
                        (click)="approvePlaylist(playlist)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">order_approve</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="copyID(playlist?.id)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">content_copy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_COPY_ID'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removePlaylist()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl">delete</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
                <div
                    details
                    class="bg-base-100 flex flex-wrap items-center rounded-xl p-1"
                >
                    <div
                        class="m-1 ml-2 rounded-sm px-2 py-1 text-xs"
                        [class.bg-success]="selected_playlist()?.enabled"
                        [class.text-success-content]="
                            selected_playlist()?.enabled
                        "
                        [class.bg-error]="!selected_playlist()?.enabled"
                        [class.text-error-content]="
                            !selected_playlist()?.enabled
                        "
                    >
                        {{
                            (selected_playlist()?.enabled
                                ? 'COMMON.ENABLED'
                                : 'COMMON.DISABLED'
                            ) | translate
                        }}
                    </div>
                    @if (selected_playlist()?.random) {
                        <div
                            class="bg-secondary text-secondary-content m-1 ml-2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'APP.CONCIERGE.SIGNAGE_SHUFFLE' | translate }}
                        </div>
                    }
                    <div
                        class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs"
                        matTooltip="Default Transition Animation"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate }}
                        <span
                            class="bg-base-300 ml-1 rounded-sm px-2 py-1 uppercase"
                            >{{
                                animation_name(
                                    selected_playlist()?.default_animation
                                )
                            }}</span
                        >
                    </div>
                    <div
                        class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs"
                        matTooltip="Default Playback Duration"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_DURATION' | translate }}
                        <span
                            class="bg-base-300 ml-1 rounded-sm px-2 py-1 font-mono"
                            >{{
                                selected_playlist()?.default_duration / 1000
                                    | mediaDuration
                            }}</span
                        >
                    </div>
                    <div
                        class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs"
                        matTooltip="Prefered Orientation"
                    >
                        {{ 'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate }}
                        <span
                            class="bg-base-300 ml-1 rounded-sm px-2 py-1 uppercase"
                            >{{ selected_playlist()?.orientation }}</span
                        >
                    </div>
                    @if (isScheduled(selected_playlist())) {
                        <div
                            class="bg-base-200 m-1 rounded-sm px-2 py-2 text-xs uppercase"
                        >
                            {{ 'COMMON.SCHEDULED' | translate }}
                        </div>
                    }
                </div>
                @if (!approved()) {
                    <button
                        matRipple
                        class="border-warning bg-warning text-warning-content flex w-full items-center space-x-2 rounded-sm p-1 text-xs shadow-sm"
                        [disabled]="!is_admin"
                        [matTooltip]=""
                        (click)="approvePlaylist(playlist)"
                    >
                        <icon class="text-warning-content ml-1 text-xl"
                            >warning</icon
                        >
                        <div>
                            {{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_NOT_APPROVED'
                                    | translate
                            }}
                        </div>
                        <div class="underline">Click here to approve</div>
                    </button>
                }
            </div>
            @if (loading()) {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ 'COMMON.LOADING' | translate }}...</p>
                </div>
            } @else if (media().length > 0) {
                <div
                    cdkDropList
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto p-2"
                    id="playlist-list"
                    [cdkDropListData]="media()"
                    [cdkDropListConnectedTo]="playlist_ids()"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (item of media(); track item) {
                        <div
                            cdkDrag
                            class="border-base-300 bg-base-100 relative flex h-20 w-full items-center space-x-2 rounded-lg border p-2"
                        >
                            @if (item.valid_from && now < item.valid_from) {
                                <div
                                    class="bg-warning absolute inset-0 z-0 rounded-lg opacity-10"
                                ></div>
                            } @else if (
                                item.valid_until && now > item.valid_until
                            ) {
                                <div
                                    class="bg-error absolute inset-0 z-0 rounded-lg opacity-10"
                                ></div>
                            }
                            <div
                                class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed"
                                *cdkDragPlaceholder
                            >
                                <icon class="text-base-100 text-2xl">
                                    add
                                </icon>
                            </div>
                            <button
                                matRipple
                                cdkDragHandle
                                class="hover:bg-base-200 m-0! flex h-full w-6 items-center justify-center rounded-sm"
                                matTooltip="Drag to reorder"
                            >
                                <icon>drag_handle</icon>
                            </button>
                            <button
                                preview
                                matRipple
                                class="bg-base-200 relative h-16 w-18 overflow-hidden rounded-lg"
                                (click)="previewItem(item)"
                            >
                                <img
                                    auth
                                    [source]="item.thumbnail_url"
                                    class="h-full w-full object-contain"
                                />
                                <div
                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <icon class="text-2xl">expand_content</icon>
                                </div>
                            </button>
                            <div
                                class="text-base-content w-1/2 flex-1 truncate"
                            >
                                {{ item.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                aria-label="Media Actions"
                                [matMenuTriggerFor]="menu"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(item)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"> edit </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">
                                            visibility
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl">
                                            delete
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_EMPTY'
                                | translate
                        }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatRippleModule,
      AuthenticatedImageDirective,
      DragDropModule,
      MatTooltipModule,
      MediaDurationPipe,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;53020ecd9eec6f24fc2e7595a27ffc73aeee295082b36352e0ab4548108a08a2;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-playlist-media-list.component.ts */\n:host {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */\n"] }]
  }], null, { playlist: [{ type: Input, args: [{ isSignal: true, alias: "playlist", required: false }] }], playlist_count: [{ type: Input, args: [{ isSignal: true, alias: "playlist_count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistMediaListComponent, { className: "SignagePlaylistMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-media-list.component.ts", lineNumber: 366 });
})();

// apps/concierge/src/app/signage/signage-media.component.ts
var _c07 = () => [];
var _c13 = () => ({ playlist: "" });
var _c23 = (a0) => ({ playlist: a0 });
var _c33 = () => ["media-list", "playlist-list"];
var _forTrack05 = ($index, $item) => $item.id;
function SignageMediaComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("cdkDropListDropped", function SignageMediaComponent_Conditional_12_For_1_Template_a_cdkDropListDropped_0_listener($event) {
      const playlist_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selected_playlist() === playlist_r2.id ? "" : ctx_r2.drop(playlist_r2, $event));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected_playlist() === playlist_r2.id)("text-secondary-content", ctx_r2.selected_playlist() === playlist_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c07))("queryParams", \u0275\u0275pureFunction1(10, _c23, playlist_r2.id))("id", "playlist-" + $index_r4)("cdkDropListConnectedTo", \u0275\u0275pureFunction0(12, _c33));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", playlist_r2.name, " ");
  }
}
function SignageMediaComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageMediaComponent_Conditional_12_For_1_Template, 3, 13, "a", 12, _forTrack05);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.playlists());
  }
}
function SignageMediaComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SignageMediaComponent_Conditional_13_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addPlaylist());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "icon", 21);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"));
  }
}
function SignageMediaComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 16);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, SignageMediaComponent_Conditional_13_Conditional_6_Template, 7, 3, "button", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r2.search() ? "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.search() ? 6 : -1);
  }
}
function SignageMediaComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-media-list", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist_count", ctx_r2.playlists()?.length);
  }
}
function SignageMediaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-playlist-media-list", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist", ctx_r2.selected_playlist())("playlist_count", ctx_r2.playlists()?.length);
  }
}
function SignageMediaComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("dragleave", function SignageMediaComponent_Conditional_18_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideOverlay($event));
    })("drop", function SignageMediaComponent_Conditional_18_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "icon", 16);
    \u0275\u0275text(4, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 26);
    \u0275\u0275listener("change", function SignageMediaComponent_Conditional_18_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 1, "APP.CONCIERGE.SIGNAGE_MEDIA_DROP_UPLOAD"), " ");
  }
}
var SignageMediaComponent = class _SignageMediaComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.playlists = computed(
      () => {
        const search_value = this.search();
        const list = this._state.playlists();
        return list.filter((_) => _.name.toLowerCase().includes(search_value.toLowerCase()));
      },
      ...ngDevMode ? [{ debugName: "playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_playlist = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_playlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_dropzone = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_dropzone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.addPlaylist = async () => {
      const result = await this._state.editPlaylist();
      if (result) {
        this._router.navigate([
          "/signage/media",
          { query: { playlist: result.id } }
        ]);
      }
    };
    this.previewMedia = (item) => this._state.previewMedia(item);
    this.previewFile = (event) => this._state.previewFileFromInput(event, this.selected_playlist());
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => this.selected_playlist.set(params.get("playlist") || "")));
  }
  onEnter(e) {
    this.clearTimeout("hide_overlay");
    this.show_dropzone.set(e?.dataTransfer?.types.includes("Files"));
  }
  hideOverlay(e) {
    if (!this.show_dropzone())
      return;
    if (!(e.target instanceof HTMLInputElement)) {
      e.preventDefault();
    }
    this.timeout("hide_overlay", () => this.show_dropzone.set(false));
  }
  async drop(playlist, event) {
    const media = event.previousContainer.data[event.previousIndex];
    const media_list = await xh(playlist.id);
    const new_media_list = [...media_list.items, media.id];
    await this._state.updatePlaylistMedia(playlist.id, new_media_list);
  }
  static {
    this.\u0275fac = function SignageMediaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaComponent, selectors: [["signage-media"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 22, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-2", "overflow-visible"], ["sidebar", "", 1, "border-base-300", "flex", "h-full", "w-64", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "bg-base-200", "rounded-lg", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-12", "w-full", "items-center", "rounded-xl", "px-6", 3, "routerLink", "queryParams"], [1, "border-base-300", "bg-base-300", "-mx-2", "w-[calc(100%+1rem)]"], [1, "border-base-300", "bg-base-200", "relative", "h-full", "w-1/2", "flex-1", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "dragover", "dragenter", "drop"], [1, "h-full", "w-full", "overflow-auto"], [3, "playlist_count"], [3, "playlist", "playlist_count"], [1, "absolute", "inset-0"], ["matRipple", "", "cdkDropList", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "border", "px-6", 3, "bg-secondary!", "text-secondary-content", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], ["matRipple", "", "cdkDropList", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "border", "px-6", 3, "cdkDropListDropped", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], [1, "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["btn", "", "matRipple", "", 1, "inverse"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-2xl"], [1, "mr-4", "ml-2"], [1, "absolute", "inset-0", 3, "dragleave", "drop"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60"], [1, "border-base-300", "text-base-100", "absolute", "inset-4", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-2xl", "border-4", "border-dashed"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function SignageMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "input", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SignageMediaComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "hr", 6);
        \u0275\u0275conditionalCreate(12, SignageMediaComponent_Conditional_12_Template, 2, 0)(13, SignageMediaComponent_Conditional_13_Template, 7, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275listener("dragover", function SignageMediaComponent_Template_div_dragover_14_listener($event) {
          return ctx.onEnter($event);
        })("dragenter", function SignageMediaComponent_Template_div_dragenter_14_listener($event) {
          return ctx.onEnter($event);
        })("drop", function SignageMediaComponent_Template_div_drop_14_listener($event) {
          return ctx.hideOverlay($event);
        }, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275conditionalCreate(16, SignageMediaComponent_Conditional_16_Template, 1, 1, "signage-media-list", 9);
        \u0275\u0275conditionalCreate(17, SignageMediaComponent_Conditional_17_Template, 1, 2, "signage-playlist-media-list", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, SignageMediaComponent_Conditional_18_Template, 9, 3, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "APP.CONCIERGE.SIGNAGE_PLAYLISTS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 16, "COMMON.SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-secondary!", !ctx.selected_playlist())("text-secondary-content", !ctx.selected_playlist());
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c07))("queryParams", \u0275\u0275pureFunction0(21, _c13));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 18, "APP.CONCIERGE.SIGNAGE_MEDIA_ALL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.playlists()?.length > 0 ? 12 : 13);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.selected_playlist() ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_playlist() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_dropzone() ? 18 : -1);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      RouterModule,
      RouterLink,
      DragDropModule,
      CdkDropList,
      MatRippleModule,
      MatRipple,
      SignageMediaListComponent,
      SignagePlaylistMediaListComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaComponent, [{
    type: Component,
    args: [{ selector: "signage-media", template: `
        <div class="relative flex h-full w-full space-x-2 overflow-visible">
            <div
                sidebar
                class="border-base-300 flex h-full w-64 flex-col space-y-2 overflow-auto rounded-xl border p-2"
            >
                <h3
                    class="bg-base-200 rounded-lg p-2 text-center text-xl font-medium"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
                <a
                    matRipple
                    class="hover:bg-base-200 flex min-h-12 w-full items-center rounded-xl px-6"
                    [class.bg-secondary!]="!selected_playlist()"
                    [class.text-secondary-content]="!selected_playlist()"
                    [routerLink]="[]"
                    [queryParams]="{ playlist: '' }"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_ALL' | translate }}
                </a>
                <hr
                    class="border-base-300 bg-base-300 -mx-2 w-[calc(100%+1rem)]"
                />
                @if (playlists()?.length > 0) {
                    @for (playlist of playlists(); track playlist.id) {
                        <a
                            matRipple
                            class="border-base-100 even:border-base-200 even:bg-base-200 hover:border-info flex h-12 min-h-12 w-full items-center rounded-3xl border px-6"
                            [class.bg-secondary!]="
                                selected_playlist() === playlist.id
                            "
                            [class.text-secondary-content]="
                                selected_playlist() === playlist.id
                            "
                            [routerLink]="[]"
                            [queryParams]="{ playlist: playlist.id }"
                            cdkDropList
                            [id]="'playlist-' + $index"
                            [cdkDropListConnectedTo]="[
                                'media-list',
                                'playlist-list',
                            ]"
                            (cdkDropListDropped)="
                                selected_playlist() === playlist.id
                                    ? ''
                                    : drop(playlist, $event)
                            "
                        >
                            <div class="flex-1">
                                {{ playlist.name }}
                            </div>
                            <!-- @if (!playlist.approved) {
                                <icon>warning</icon>
                            } -->
                        </a>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search()
                                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                    @if (!search()) {
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="addPlaylist()"
                        >
                            <div
                                class="flex w-full items-center justify-center"
                            >
                                <icon class="text-2xl">add</icon>
                                <span class="mr-4 ml-2">{{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                        | translate
                                }}</span>
                            </div>
                        </button>
                    }
                }
            </div>
            <div
                class="border-base-300 bg-base-200 relative h-full w-1/2 flex-1 overflow-hidden rounded-lg border shadow-sm"
                (dragover)="onEnter($event)"
                (dragenter)="onEnter($event)"
                (window:drop)="hideOverlay($event)"
            >
                <div class="h-full w-full overflow-auto">
                    @if (!selected_playlist()) {
                        <signage-media-list
                            [playlist_count]="playlists()?.length"
                        />
                    }
                    @if (selected_playlist()) {
                        <signage-playlist-media-list
                            [playlist]="selected_playlist()"
                            [playlist_count]="playlists()?.length"
                        />
                    }
                </div>
                @if (show_dropzone()) {
                    <div
                        class="absolute inset-0"
                        (dragleave)="hideOverlay($event)"
                        (drop)="previewFile($event)"
                    >
                        <div
                            class="bg-base-content absolute inset-0 opacity-60"
                        ></div>
                        <div
                            class="border-base-300 text-base-100 absolute inset-4 flex flex-col items-center justify-center space-y-4 rounded-2xl border-4 border-dashed"
                        >
                            <icon class="text-6xl">cloud_upload</icon>
                            <p>
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_DROP_UPLOAD'
                                        | translate
                                }}
                            </p>
                        </div>
                        <input
                            type="file"
                            (change)="previewFile($event)"
                            class="absolute inset-0 opacity-0"
                        />
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      RouterModule,
      DragDropModule,
      TranslatePipe,
      MatRippleModule,
      SignageMediaListComponent,
      SignagePlaylistMediaListComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;a948d1e278a7b95fd5dfd86e884f488f14cbb62f9cb471baf2ad93a52383c4aa;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-media.component.ts */\n:host {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaComponent, { className: "SignageMediaComponent", filePath: "apps/concierge/src/app/signage/signage-media.component.ts", lineNumber: 189 });
})();

// apps/concierge/src/app/signage/signage-zones.component.ts
var _c08 = () => [];
var _c14 = (a0) => ({ zone: a0 });
var _c24 = (a0, a1) => ({ zone: a0, trigger: a1 });
var _forTrack06 = ($index, $item) => $item.id;
function SignageZonesComponent_Conditional_8_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const zone_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected_trigger() === trigger_r1?.id)("text-secondary-content", ctx_r2.selected_trigger() === trigger_r1?.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c08))("queryParams", \u0275\u0275pureFunction2(8, _c24, zone_r2.id, trigger_r1?.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", trigger_r1?.display_name || trigger_r1?.name || "Trigger", " ");
  }
}
function SignageZonesComponent_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageZonesComponent_Conditional_8_For_2_Conditional_2_For_1_Template, 5, 11, "div", 12, _forTrack06);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.triggers());
  }
}
function SignageZonesComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SignageZonesComponent_Conditional_8_For_2_Conditional_2_Template, 2, 0);
  }
  if (rf & 2) {
    const zone_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected() === zone_r2.id)("text-secondary-content", ctx_r2.selected() === zone_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c08))("queryParams", \u0275\u0275pureFunction1(9, _c14, zone_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r2.display_name || zone_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.active_zone()?.id === zone_r2.id && !ctx_r2.switching() ? 2 : -1);
  }
}
function SignageZonesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SignageZonesComponent_Conditional_8_For_2_Template, 3, 11, null, null, _forTrack06);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.zones());
  }
}
function SignageZonesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon", 16);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, ctx_r2.search() ? "APP.CONCIERGE.SIGNAGE_ZONES_SEARCH_EMPTY" : "APP.CONCIERGE.SIGNAGE_ZONES_EMPTY"), " ");
  }
}
function SignageZonesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "signage-item-playlists", 18);
    \u0275\u0275listener("add", function SignageZonesComponent_Conditional_11_Template_signage_item_playlists_add_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding.set(true));
    })("remove", function SignageZonesComponent_Conditional_11_Template_signage_item_playlists_remove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePlaylist($event));
    })("ondrop", function SignageZonesComponent_Conditional_11_Template_signage_item_playlists_ondrop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r2.active_trigger() || ctx_r2.active_zone())("name", ctx_r2.active_trigger() ? "trigger" : "zone");
  }
}
function SignageZonesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon", 16);
    \u0275\u0275text(2, "desktop_windows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "APP.CONCIERGE.SIGNAGE_ZONES_SELECT"), " ");
  }
}
function SignageZonesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 19);
    \u0275\u0275listener("selected", function SignageZonesComponent_Conditional_13_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageZonesComponent_Conditional_13_Template_search_overlay_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_list", ctx_r2.playlists());
  }
}
var SignageZonesComponent = class _SignageZonesComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(SignageStateService);
    this._route = inject(ActivatedRoute);
    this.adding = signal(
      false,
      ...ngDevMode ? [{ debugName: "adding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.switching = signal(
      false,
      ...ngDevMode ? [{ debugName: "switching" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._state.loading;
    this.zones = computed(
      () => {
        const search_value = this.search().toLowerCase();
        const list = this._state.zones();
        return list.filter((_) => _.name.toLowerCase().includes(search_value));
      },
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_trigger = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_zone = computed(
      () => {
        const zones = this.zones();
        const id = this.selected();
        return zones.find((item) => item.id === id);
      },
      ...ngDevMode ? [{ debugName: "active_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._triggers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_triggers" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.selected(),
      defaultValue: [],
      loader: async ({ params: id }) => {
        if (!id)
          return [];
        const resp = await oh(id);
        setTimeout(() => this.switching.set(false), 100);
        return resp.data;
      }
    }));
    this.triggers = this._triggers.value;
    this.active_trigger = computed(
      () => {
        const list = this.triggers();
        const id = this.selected_trigger();
        return list.find((item) => item.id === id);
      },
      ...ngDevMode ? [{ debugName: "active_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlists = computed(
      () => {
        const zone = this.active_zone();
        const trigger = this.active_trigger();
        const playlists = this._state.playlists();
        this._state.has_changed();
        return playlists.filter((_) => !(trigger || zone)?.playlists.find((id) => _.id === id));
      },
      ...ngDevMode ? [{ debugName: "playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (!params)
        return;
      this.switching.set(params.get("zone") !== this.selected());
      this.selected.set(params.get("zone") || "");
      this.selected_trigger.set(params.get("trigger") || "");
    }));
  }
  async addPlaylist(playlist) {
    const zone = this.active_zone();
    const trigger = this.active_trigger();
    const item = trigger || zone;
    const playlists = [...item.playlists, playlist.id];
    const method = trigger ? Na : sh;
    await method(item.id, { playlists, version: zone.version }, "patch");
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_ADDED"));
    this._state.changed();
    this.adding.set(false);
  }
  async removePlaylist(playlist) {
    const zone = this.active_zone();
    const trigger = this.active_trigger();
    const item = trigger || zone;
    const playlists = item.playlists.filter((id) => playlist.id !== id);
    const method = trigger ? Na : sh;
    await method(item.id, { playlists, version: zone.version }, "patch");
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVED" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REMOVED"));
    this._state.changed();
    this.adding.set(false);
  }
  async drop(event) {
    const zone = this.active_zone();
    const trigger = this.active_trigger();
    const item = trigger || zone;
    const old_playlist = item.playlists;
    const playlists = [...old_playlist];
    moveItemInArray(playlists, event.previousIndex, event.currentIndex);
    item.playlists = playlists;
    this._state.changed();
    const method = trigger ? Na : sh;
    await method(item.id, { playlists, version: zone.version }, "patch").catch((e) => {
      item.playlists = old_playlist;
      this._state.changed();
      throw e;
    });
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REORDER"));
    this._state.changed();
  }
  static {
    this.\u0275fac = function SignageZonesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageZonesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageZonesComponent, selectors: [["signage-zones"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 10, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-2", "overflow-visible"], ["sidebar", "", 1, "border-base-300", "flex", "h-full", "w-64", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "bg-base-200", "rounded-lg", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "border-base-300", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "flex", "flex-1", "flex-col", 3, "item", "name"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list"], ["matRipple", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "z-10", "flex", "h-12", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "border", "px-6", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "border-base-300", "absolute", "top-1/2", "left-6", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", 3, "routerLink", "queryParams"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name"], [3, "selected", "close", "item_list"]], template: function SignageZonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "input", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SignageZonesComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SignageZonesComponent_Conditional_8_Template, 3, 0, "div", 5)(9, SignageZonesComponent_Conditional_9_Template, 6, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275conditionalCreate(11, SignageZonesComponent_Conditional_11_Template, 1, 2, "signage-item-playlists", 8)(12, SignageZonesComponent_Conditional_12_Template, 6, 3, "div", 9);
        \u0275\u0275conditionalCreate(13, SignageZonesComponent_Conditional_13_Template, 1, 1, "search-overlay", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.SIGNAGE_ZONES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "COMMON.SEARCH"));
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.zones().length > 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.active_zone() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.adding() ? 13 : -1);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      IconComponent,
      SearchOverlayComponent,
      SignageItemPlaylistsComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageZonesComponent, [{
    type: Component,
    args: [{ selector: "signage-zones", template: `
        <div class="relative flex h-full w-full space-x-2 overflow-visible">
            <div
                sidebar
                class="border-base-300 flex h-full w-64 flex-col space-y-2 overflow-auto rounded-xl border p-2"
            >
                <h3
                    class="bg-base-200 rounded-lg p-2 text-center text-xl font-medium"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_ZONES' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
                @if (zones().length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (zone of zones(); track zone.id) {
                            <a
                                matRipple
                                class="border-base-100 even:border-base-200 even:bg-base-200 hover:border-info z-10 flex h-12 min-h-12 w-full items-center truncate rounded-3xl border px-6"
                                [class.bg-secondary!]="selected() === zone.id"
                                [class.text-secondary-content]="
                                    selected() === zone.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ zone: zone.id }"
                            >
                                {{ zone.display_name || zone.name }}
                            </a>
                            @if (
                                active_zone()?.id === zone.id && !switching()
                            ) {
                                @for (trigger of triggers(); track trigger.id) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="border-base-300 absolute top-1/2 left-6 h-16 w-4 -translate-y-full border-b-2 border-l-2"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="hover:bg-base-200 flex min-h-12 w-full items-center truncate rounded-3xl px-6"
                                            [class.bg-secondary!]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [routerLink]="[]"
                                            [queryParams]="{
                                                zone: zone.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            {{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}
                                        </a>
                                    </div>
                                }
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search()
                                    ? 'APP.CONCIERGE.SIGNAGE_ZONES_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_ZONES_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="border-base-300 bg-base-200 relative flex h-full w-1/2 flex-1 flex-col space-y-2 overflow-auto rounded-lg border p-2 shadow-sm"
            >
                @if (active_zone()) {
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="active_trigger() || active_zone()"
                        [name]="active_trigger() ? 'trigger' : 'zone'"
                        (add)="this.adding.set(true)"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    ></signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_ZONES_SELECT' | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding()) {
                    <search-overlay
                        [item_list]="playlists()"
                        (selected)="addPlaylist($event)"
                        (close)="adding.set(false)"
                    ></search-overlay>
                }
            </div>
        </div>
    `, imports: [
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      RouterModule,
      IconComponent,
      SearchOverlayComponent,
      SignageItemPlaylistsComponent,
      FormsModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageZonesComponent, { className: "SignageZonesComponent", filePath: "apps/concierge/src/app/signage/signage-zones.component.ts", lineNumber: 162 });
})();

// apps/concierge/src/app/signage/signage.component.ts
var _forTrack07 = ($index, $item) => $item.id;
function SignageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sidebar");
  }
}
function SignageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SignageComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newItem(ctx_r1.active_link()));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.active_link() === "Displays" ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_ADD" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD"), " ");
  }
}
function SignageComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275pipe(1, "lowercase");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/signage/" + \u0275\u0275pipeBind1(1, 3, link_r3.id))("active", ctx_r1.active_link() == link_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r3.name, " ");
  }
}
var SignageComponent = class _SignageComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this.loading = this._state.loading;
    this.links = signal(
      [
        { id: "Media", name: i18n("APP.CONCIERGE.SIGNAGE_MEDIA") },
        { id: "Displays", name: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS") },
        { id: "Zones", name: i18n("APP.CONCIERGE.SIGNAGE_ZONES") }
      ],
      ...ngDevMode ? [{ debugName: "links" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._current_url = signal(
      this._router.url,
      ...ngDevMode ? [{ debugName: "_current_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_link = computed(
      () => {
        const current_url = this._current_url();
        return this.links().find((_) => current_url.includes(_.id.toLowerCase()))?.id || this.links()[0]?.id;
      },
      ...ngDevMode ? [{ debugName: "active_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_sidebar = settingSignal("hide_sidebar", false);
    this.previewFile = (event) => this._state.previewFileFromInput(event);
    this.subscription("router.events", this._router.events.subscribe(() => this._current_url.set(this._router.url)));
  }
  async newItem(name) {
    let result = null;
    switch (name) {
      case "Media":
      case "Playlists":
        result = await this._state.editPlaylist();
        if (result) {
          this._router.navigate(["/signage/media"], {
            queryParams: { playlist: result.id }
          });
        }
        break;
      case "Displays":
        result = await this._state.editDisplay();
        if (!result)
          return;
        this._router.navigate(["/signage/displays"], {
          queryParams: { display: result.id }
        });
        break;
    }
  }
  static {
    this.\u0275fac = function SignageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageComponent, selectors: [["", "app-new-staff", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 6, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "h-20", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40"], [1, "px-8"], [1, "bg-base-200", "overflow-hidden", "rounded-sm"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "flex-1", "overflow-auto", "px-8", "py-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function SignageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275conditionalCreate(2, SignageComponent_Conditional_2_Template, 1, 0, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SignageComponent_Conditional_8_Template, 3, 3, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "nav", 8);
        \u0275\u0275repeaterCreate(12, SignageComponent_For_13_Template, 3, 5, "a", 9, _forTrack07);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "mat-tab-nav-panel", 10, 0);
        \u0275\u0275element(16, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const tabPanel_r4 = \u0275\u0275reference(15);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_sidebar() ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.CONCIERGE.SIGNAGE_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.active_link() === "Media" || ctx.active_link() === "Displays" ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("tabPanel", tabPanel_r4);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.links());
      }
    }, dependencies: [
      CommonModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatRippleModule,
      MatRipple,
      MatTabsModule,
      MatTabNav,
      MatTabNavPanel,
      MatTabLink,
      RouterModule,
      RouterOutlet,
      RouterLink,
      LowerCasePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=signage.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageComponent, [{
    type: Component,
    args: [{ selector: "[app-new-staff]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            @if (!hide_sidebar()) {
                <app-sidebar></app-sidebar>
            }
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex h-20 items-center justify-between p-8">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.SIGNAGE_HEADER' | translate }}
                    </h2>
                    @if (
                        active_link() === 'Media' ||
                        active_link() === 'Displays'
                    ) {
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="newItem(active_link())"
                        >
                            {{
                                (active_link() === 'Displays'
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_ADD'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                ) | translate
                            }}
                        </button>
                    }
                </div>
                <div class="px-8">
                    <div class="bg-base-200 overflow-hidden rounded-sm">
                        <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                            @for (link of links(); track link.id) {
                                <a
                                    mat-tab-link
                                    [routerLink]="
                                        '/signage/' + (link.id | lowercase)
                                    "
                                    [active]="active_link() == link.id"
                                >
                                    {{ link.name }}
                                </a>
                            }
                        </nav>
                    </div>
                </div>
                <mat-tab-nav-panel
                    class="h-1/2 flex-1 overflow-auto px-8 py-2"
                    #tabPanel
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
            </main>
        </div>
    `, imports: [
      CommonModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      TranslatePipe,
      MatRippleModule,
      MatTabsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=signage.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageComponent, { className: "SignageComponent", filePath: "apps/concierge/src/app/signage/signage.component.ts", lineNumber: 91 });
})();

// apps/concierge/src/app/signage/signage.routes.ts
var ROUTES = [
  {
    path: "",
    component: SignageComponent,
    children: [
      { path: "", redirectTo: "media", pathMatch: "full" },
      {
        path: "media",
        component: SignageMediaComponent,
        title: "Signage Media"
      },
      {
        path: "displays",
        component: SignageDisplaysComponent,
        title: "Signage Displays"
      },
      {
        path: "zones",
        component: SignageZonesComponent,
        title: "Signage Zones"
      },
      { path: "*", redirectTo: "media", pathMatch: "full" }
    ]
  }
];
export {
  ROUTES
};
//# sourceMappingURL=signage.routes-CQL7P6FT.js.map
