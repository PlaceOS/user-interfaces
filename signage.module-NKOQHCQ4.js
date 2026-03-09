import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-T6QHZ766.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-XEZHXF4D.js";
import "./chunk-KE7VEEOS.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-G7GB7ZWW.js";
import "./chunk-WADFJ4AT.js";
import {
  DateFieldComponent,
  DurationFieldComponent
} from "./chunk-ATM6RBBO.js";
import {
  $a,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  Ka,
  LowerCasePipe,
  Lr,
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
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatSlider,
  MatSliderModule,
  MatSliderThumb,
  MatTooltip,
  MatTooltipModule,
  MediaDurationPipe,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  OrganisationService,
  Qr,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SettingsService,
  SettingsToggleComponent,
  SlicePipe,
  TimeFieldComponent,
  TranslatePipe,
  UPLOAD_PERMISSIONS_MODAL,
  UploadPermissionsModalComponent,
  UploadsService,
  Va,
  Validators,
  Wa,
  X,
  Xa,
  Zc,
  ZonePipe,
  addDays,
  addYears,
  al,
  catchError,
  cl,
  combineLatest,
  computed,
  ct,
  currentUser,
  da,
  debounceTime,
  effect,
  el,
  endOfDay,
  filter,
  format,
  forwardRef,
  getUnixTime,
  hl,
  ho,
  i18n,
  inject,
  input,
  isValidUrl,
  ja,
  lastValueFrom,
  ll,
  lo,
  map,
  na,
  nextValueFrom,
  nl,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  ol,
  openConfirmModal,
  output,
  padLength,
  ra,
  rl,
  set,
  setClassMetadata,
  settingSignal,
  shareReplay,
  signal,
  sl,
  startOfDay,
  startOfMinute,
  startWith,
  switchMap,
  ta,
  tap,
  tl,
  toObservable,
  toSignal,
  ul,
  unique,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵqueryAdvance,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-2YDW5TOP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
var _SearchOverlayComponent = class _SearchOverlayComponent {
  constructor() {
    this.item_list = input([]);
    this.result_template = input(void 0);
    this.selected = output();
    this.close = output();
    this.search = signal("");
    this._items = signal([]);
  }
  ngOnChanges(changes) {
    if (changes.item_list) {
      this._items.set(this.item_list() || []);
    }
  }
};
_SearchOverlayComponent.\u0275fac = function SearchOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchOverlayComponent)();
};
_SearchOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchOverlayComponent, selectors: [["search-overlay"]], inputs: { item_list: [1, "item_list"], result_template: [1, "result_template"] }, outputs: { selected: "selected", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 14, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "items-center", "p-8", 3, "click", "keydown.esc"], [1, "bg-base-content", "absolute", "inset-0", "z-0", "opacity-70"], [1, "relative", "z-10", "mx-auto", "mb-4", "w-lg", "max-w-[calc(100%-2rem)]", 3, "click"], [1, "border-base-300", "bg-base-100", "text-base-content", "w-full", "rounded-[4rem]", "border", "py-4", "pr-6", "pl-14", "text-xl", "shadow-sm", 3, "ngModelChange", "ngModel", "placeholder"], [1, "pointer-events-none", "absolute", "top-1/2", "left-3", "-translate-y-1/2", "text-3xl"], [1, "z-10", "mx-auto", "max-h-[65%]", "w-lg", "max-w-[calc(100%-2rem)]", "overflow-auto", "rounded-sm", 3, "click"], ["matRipple", "", 1, "w-full", "text-left"], ["matRipple", "", 1, "text-base-100", "w-full", "p-4"], ["icon", "", "matRipple", "", 1, "text-base-100", "absolute", "top-10", "right-8", "h-12", "w-12", "text-xl"], ["matRipple", "", 1, "w-full", "text-left", 3, "click"], [1, "border-base-300", "bg-base-100", "hover:bg-base-200", "w-full", "border", "p-4"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matRipple", "", 1, "text-base-100", "w-full", "p-4", 3, "click"], [1, "opacity-30"]], template: function SearchOverlayComponent_Template(rf, ctx) {
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
    \u0275\u0275listener("ngModelChange", function SearchOverlayComponent_Template_input_ngModelChange_3_listener($event) {
      return ctx.search.set($event);
    });
    \u0275\u0275elementEnd();
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
    let tmp_3_0;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.search())("placeholder", \u0275\u0275pipeBind1(4, 3, "COMMON.SEARCH"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.item_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_3_0 = ctx.item_list()) == null ? null : tmp_3_0.length) ? 10 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent,
  MatRippleModule,
  MatRipple,
  TranslatePipe,
  CommonModule,
  NgTemplateOutlet
], encapsulation: 2 });
var SearchOverlayComponent = _SearchOverlayComponent;
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
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
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
                @for (item of item_list(); track item) {
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
                                {{ $any(item).name || item }}
                            </div>
                        }
                    </button>
                }
                @if (!item_list()?.length) {
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchOverlayComponent, { className: "SearchOverlayComponent", filePath: "apps/concierge/src/app/signage/search-overlay.component.ts", lineNumber: 98 });
})();

// apps/concierge/src/app/signage/signage-approve-playlist-modal.component.ts
var _c02 = () => [];
var _c1 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function SignageApprovePlaylistModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_For_18_Conditional_2_Template(rf, ctx) {
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
function SignageApprovePlaylistModalComponent_Conditional_5_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 18);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_For_18_Template_button_click_1_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previewItem(item_r3));
    });
    \u0275\u0275conditionalCreate(2, SignageApprovePlaylistModalComponent_Conditional_5_For_18_Conditional_2_Template, 4, 1);
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
function SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_19_Template(rf, ctx) {
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
function SignageApprovePlaylistModalComponent_Conditional_5_For_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r6.thumbnail_url);
  }
}
function SignageApprovePlaylistModalComponent_Conditional_5_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 18);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_For_32_Template_button_click_1_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.previewItem(item_r6));
    });
    \u0275\u0275conditionalCreate(2, SignageApprovePlaylistModalComponent_Conditional_5_For_32_Conditional_2_Template, 1, 1, "img", 20);
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
function SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_33_Template(rf, ctx) {
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
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275declareLet(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h3");
    \u0275\u0275text(9, "Version to approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, SignageApprovePlaylistModalComponent_Conditional_5_For_18_Template, 5, 2, "div", 11, _forTrack0, false, SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_19_Template, 6, 3, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 13)(21, "div", 7)(22, "h3");
    \u0275\u0275text(23, "Previous version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 8);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 14);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, SignageApprovePlaylistModalComponent_Conditional_5_For_32_Template, 5, 2, "div", 11, _forTrack0, false, SignageApprovePlaylistModalComponent_Conditional_5_ForEmpty_33_Template, 6, 3, "div", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "footer", 15)(35, "button", 16);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.undoChanges());
    });
    \u0275\u0275text(36, " Undo Changes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 17);
    \u0275\u0275listener("click", function SignageApprovePlaylistModalComponent_Conditional_5_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve());
    });
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const versions_r7 = \u0275\u0275pipeBind1(2, 7, ctx_r3.playlist_versions);
    const media_r8 = \u0275\u0275pipeBind1(4, 9, ctx_r3.playlist_media);
    const current_version_r9 = versions_r7 == null ? null : versions_r7[0];
    const current_media_r10 = (media_r8 == null ? null : media_r8[0]) || \u0275\u0275pureFunction0(27, _c02);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, (current_version_r9 == null ? null : current_version_r9.updated_at) * 1e3, "dd MMM, HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(16, 14, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(28, _c1, (current_version_r9 == null ? null : current_version_r9.items.length) || 0), (current_version_r9 == null ? null : current_version_r9.items.length) || 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(current_media_r10);
    const previous_version_r11 = versions_r7 == null ? null : versions_r7[1];
    const previous_media_r12 = (media_r8 == null ? null : media_r8[1]) || \u0275\u0275pureFunction0(30, _c02);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 18, (previous_version_r11 == null ? null : previous_version_r11.updated_at) * 1e3, "dd MMM, HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(30, 21, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(31, _c1, (previous_version_r11 == null ? null : previous_version_r11.items.length) || 0), (previous_version_r11 == null ? null : previous_version_r11.items.length) || 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(previous_media_r12);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 25, "COMMON.APPROVE"), " ");
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
var _SignageApprovePlaylistModalComponent = class _SignageApprovePlaylistModalComponent {
  constructor() {
    this._playlist_id = new BehaviorSubject("");
    this._playlist = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._service = inject(SignageStateService);
    this.loading = signal("");
    this.playlist_versions = this._playlist_id.pipe(filter((_) => !!_), tap(() => this.loading.set("Loading versions...")), switchMap((id) => al(id, { limit: 2 })), shareReplay(1));
    this.playlist_media = combineLatest([
      this.playlist_versions,
      this._service.media
    ]).pipe(map(([playlists, media]) => playlists.map((playlist) => playlist.items.map((id) => media.find((m) => m.id === id)))), tap(() => this.loading.set("")), shareReplay(1));
  }
  ngOnInit() {
    console.log("Playlist", this._playlist);
    this._playlist_id.next(this._playlist.id);
  }
  async undoChanges() {
    this.loading.set("Undoing changes...");
    this._dialog_ref.disableClose = true;
    const [, previous] = await nextValueFrom(this.playlist_versions);
    await lastValueFrom(hl(this._playlist.id, previous.items));
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_UNDONE"));
    this._dialog_ref.close();
    this._service.changed();
  }
  async approve() {
    this.loading.set("Approving playlist...");
    this._dialog_ref.disableClose = true;
    await lastValueFrom(ll(this._playlist.id));
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVED"));
    this._dialog_ref.close();
    this._service.changed();
  }
  previewItem(item) {
    this._service.previewMedia(item);
  }
};
_SignageApprovePlaylistModalComponent.\u0275fac = function SignageApprovePlaylistModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageApprovePlaylistModalComponent)();
};
_SignageApprovePlaylistModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageApprovePlaylistModalComponent, selectors: [["signage-approve-playlist-modal"]], decls: 7, vars: 2, consts: [[1, "p-2"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[60vh]", "gap-2", "overflow-auto", "py-2"], [1, "flex", "gap-2"], [1, "border-base-300", "bg-success-light", "w-[24rem]", "rounded-sm", "border"], [1, "border-base-300", "bg-base-200", "flex", "items-center", "space-x-8", "rounded-sm", "border-b", "px-4", "py-2"], [1, "font-mono", "text-xs", "opacity-50"], [1, "space-y-2", "p-2"], [1, "px-2", "text-sm"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "opacity-30"], [1, "border-base-300", "bg-error-light", "w-[24rem]", "rounded-sm", "border"], [1, "space-y-2", "px-2", "text-sm"], [1, "bg-base-200", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", "w-40", 3, "click"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["matRipple", "", 1, "bg-base-200", "h-10", "w-10", "shrink-0", "overflow-hidden", "rounded-sm", 3, "click"], [1, "truncate"], ["auth", "", 1, "h-full", "w-full", "object-cover", 3, "source"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-lg"], [1, "text-4xl"], [1, "text-sm"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32"]], template: function SignageApprovePlaylistModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Approve Playlist");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SignageApprovePlaylistModalComponent_Conditional_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SignageApprovePlaylistModalComponent_Conditional_5_Template, 40, 33)(6, SignageApprovePlaylistModalComponent_Conditional_6_Template, 6, 3, "main");
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
  AsyncPipe,
  DatePipe,
  IconComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective
], encapsulation: 2 });
var SignageApprovePlaylistModalComponent = _SignageApprovePlaylistModalComponent;
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
                    @let versions = playlist_versions | async;
                    @let media = playlist_media | async;
                    <div class="flex gap-2">
                        <div
                            class="border-base-300 bg-success-light w-[24rem] rounded-sm border"
                        >
                            @let current_version = versions?.[0];
                            @let current_media = media?.[0] || [];
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Version to approve</h3>
                                <div class="font-mono text-xs opacity-50">
                                    {{
                                        current_version?.updated_at * 1000
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
                                                          current_version?.items
                                                              .length || 0,
                                                  }
                                                : current_version?.items
                                                      .length || 0
                                    }}
                                </div>
                                @for (item of current_media; track item.id) {
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
                            @let previous_version = versions?.[1];
                            @let previous_media = media?.[1] || [];
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Previous version</h3>
                                <div class="font-mono text-xs opacity-50">
                                    {{
                                        previous_version?.updated_at * 1000
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
                                                          previous_version
                                                              ?.items.length ||
                                                          0,
                                                  }
                                                : previous_version?.items
                                                      .length || 0
                                    }}
                                </div>
                                @for (item of previous_media; track item.id) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageApprovePlaylistModalComponent, { className: "SignageApprovePlaylistModalComponent", filePath: "apps/concierge/src/app/signage/signage-approve-playlist-modal.component.ts", lineNumber: 228 });
})();

// apps/concierge/src/app/signage/signage-display-modal.component.ts
var _SignageDisplayModalComponent = class _SignageDisplayModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this.loading = false;
    this.display = this._data.display;
    this.form = new FormGroup({
      id: new FormControl(this._data.display?.id || ""),
      name: new FormControl(this._data.display?.display_name || "", [
        Validators.required
      ]),
      description: new FormControl(this._data.display?.description || ""),
      orientation: new FormControl(this._data.display?.orientation || "unspecified")
    });
  }
  async save() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid)
      return;
    this.loading = true;
    const form_value = this.form.getRawValue();
    const new_display = new Lr(__spreadProps(__spreadValues({}, form_value), {
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
    const method = this.display.id ? ta(this.display.id, new_display) : na(new_display);
    const result = await lastValueFrom(method);
    this._dialog_ref.close(result);
  }
};
_SignageDisplayModalComponent.\u0275fac = function SignageDisplayModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageDisplayModalComponent)();
};
_SignageDisplayModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplayModalComponent, selectors: [["signage-display-modal"]], decls: 42, vars: 40, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", 3, "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"]], template: function SignageDisplayModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function SignageDisplayModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "label", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 5);
    \u0275\u0275element(11, "input", 6);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "mat-error");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 2)(17, "label", 7);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 5);
    \u0275\u0275element(21, "textarea", 8);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 2)(24, "label", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 5)(28, "mat-select", 10);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "mat-option", 11);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 12);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option", 13);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-option", 14);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 14, ctx.display.id ? "APP.CONCIERGE.SIGNAGE_DISPLAYS_EDIT" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_NEW"))("loading", ctx.loading ? \u0275\u0275pipeBind1(2, 16, "APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 18, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 20, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 22, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 26, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "APP.CONCIERGE.SIGNAGE_ORIENTATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 30, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 34, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 36, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 38, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"));
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
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  FormGroupDirective,
  FormControlName,
  TranslatePipe
], encapsulation: 2 });
var SignageDisplayModalComponent = _SignageDisplayModalComponent;
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
                loading
                    ? ('APP.CONCIERGE.SIGNAGE_DISPLAYS_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate
                        }}<span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            [placeholder]="'FORM.NAME' | translate"
                            formControlName="name"
                            required
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
                            name="description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            formControlName="description"
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
                            name="orientation"
                            formControlName="orientation"
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
      ReactiveFormsModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplayModalComponent, { className: "SignageDisplayModalComponent", filePath: "apps/concierge/src/app/signage/signage-display-modal.component.ts", lineNumber: 117 });
})();

// apps/concierge/src/app/signage/signage-media-modal.component.ts
function SignageMediaModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 4);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.url, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
function SignageMediaModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.thumbnail || ctx_r0.url);
  }
}
function SignageMediaModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slider", 29);
    \u0275\u0275element(8, "input", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "FORM.TIME_START"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r0.form.value.start_time / 1e3, true), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (ctx_r0.item.video_length || 3e5) - 1e3);
  }
}
function SignageMediaModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.form.value.play_time / 1e3, true), " ");
  }
}
function SignageMediaModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
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
var _SignageMediaModalComponent = class _SignageMediaModalComponent {
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
    this.loading = signal(false);
    this.item = this._data.media;
    this.file = this._data.file;
    this.thumbnail = this._data.file_thumbnail || this._data.media.thumbnail_url;
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      animation: new FormControl(Qr.Default),
      start_time: new FormControl(0),
      play_time: new FormControl(null),
      valid_from: new FormControl(startOfDay(Date.now()).valueOf()),
      valid_until: new FormControl(addYears(endOfDay(Date.now()), 10).valueOf())
    });
    this.preview = () => this._data.preview({
      media_url: this.url,
      media_type: this.media_type,
      name: this.form.value.name
    });
    this.form.patchValue(__spreadProps(__spreadValues({}, this._data.media), {
      valid_from: this._data.media.valid_from * 1e3,
      valid_until: this._data.media.valid_until * 1e3
    }));
    if (this._data.file) {
      this.form.patchValue({
        name: this._data.file.name
      });
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
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (!this.form.valid)
      return;
    this.loading.set(true);
    this._dialog_ref.disableClose = true;
    const form_value = this.form.getRawValue();
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
      await lastValueFrom(Xa(this.item.id, new_media)).catch(onError);
    } else {
      await this._data.onAdd(this.file, new_media).catch(onError);
    }
    this._dialog_ref.disableClose = false;
    this._dialog_ref.close();
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_MEDIA_SAVE_SUCCESS"));
  }
};
_SignageMediaModalComponent.\u0275fac = function SignageMediaModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaModalComponent)();
};
_SignageMediaModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaModalComponent, selectors: [["signage-media-modal"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: UPLOAD_PERMISSIONS_MODAL,
    useValue: UploadPermissionsModalComponent
  }
])], decls: 72, vars: 69, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], [1, "flex", "flex-col"], ["matRipple", "", 1, "bg-base-300", "border-base-300", "pointer-events-none", "relative", "mx-auto", "mb-4", "h-48", "w-full", "overflow-hidden", "rounded-xl", "border", "shadow", 3, "click"], [1, "h-screen", "w-full", "object-contain", "object-center", 3, "src"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "top-2", "left-2", "rounded-sm", "px-2", "py-1", "text-xs", "capitalize", "shadow"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], [1, "flex", "items-center", "space-x-4"], ["for", "play-time", 1, "m-0", "w-auto", "min-w-0"], [1, "font-mono", "text-xs"], [1, "opacity-30"], ["step", "100", 3, "min", "max"], ["name", "play-time", "matSliderThumb", "", "formControlName", "play_time"], ["for", "animation"], ["name", "animation", "formControlName", "animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from"], ["for", "start-time", 1, "m-0", "w-auto", "min-w-0"], ["min", "0", "step", "100", 3, "max"], ["name", "start-time", "matSliderThumb", "", "formControlName", "start_time"]], template: function SignageMediaModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function SignageMediaModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.saveMedia();
    });
    \u0275\u0275elementStart(3, "form", 1)(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function SignageMediaModalComponent_Template_button_click_5_listener() {
      return ctx.preview();
    });
    \u0275\u0275conditionalCreate(6, SignageMediaModalComponent_Conditional_6_Template, 2, 4, "iframe", 4)(7, SignageMediaModalComponent_Conditional_7_Template, 1, 1, "img", 5);
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 8);
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "mat-error");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, SignageMediaModalComponent_Conditional_19_Template, 9, 8);
    \u0275\u0275elementStart(20, "div", 10)(21, "label", 11);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 12);
    \u0275\u0275conditionalCreate(25, SignageMediaModalComponent_Conditional_25_Template, 2, 4)(26, SignageMediaModalComponent_Conditional_26_Template, 4, 6, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-slider", 14);
    \u0275\u0275element(28, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 16);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 8)(33, "mat-select", 17)(34, "mat-option", 18);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 18);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-option", 18);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-option", 18);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-option", 18);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-option", 18);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-option", 18);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "label", 19);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 20);
    \u0275\u0275element(59, "textarea", 21);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 22)(62, "div", 23)(63, "label", 24);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "a-date-field", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 23)(68, "label", 26);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "a-date-field", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 33, ctx.item.id ? "APP.CONCIERGE.SIGNAGE_MEDIA_EDIT" : "APP.CONCIERGE.SIGNAGE_MEDIA_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 35, "APP.CONCIERGE.SIGNAGE_MEDIA_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.media_type === "webpage" ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.media_type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 37, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 39, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 41, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.media_type === "video" ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 43, "APP.CONCIERGE.SIGNAGE_MEDIA_PLAY_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.form.value.play_time ? 25 : 26);
    \u0275\u0275advance(2);
    \u0275\u0275property("min", ctx.form.value.start_time)("max", ctx.item.video_length || 3e5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 45, "APP.CONCIERGE.SIGNAGE_ANIMATION"));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 47, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 49, "APP.CONCIERGE.SIGNAGE_ANIMATION_CUT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 51, "APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 53, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 55, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 57, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 59, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 61, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 63, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 65, "APP.CONCIERGE.VALID_FROM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 67, "APP.CONCIERGE.VALID_UNTIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("from", ctx.form.value.valid_from);
  }
}, dependencies: [
  FullscreenModalShellComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  DateFieldComponent,
  TranslatePipe,
  SafePipe,
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
  MediaDurationPipe
], encapsulation: 2 });
var SignageMediaModalComponent = _SignageMediaModalComponent;
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
            <form [formGroup]="form">
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
                            name="name"
                            formControlName="name"
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
                                    form.value.start_time / 1000
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
                                name="start-time"
                                matSliderThumb
                                formControlName="start_time"
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
                            @if (form.value.play_time) {
                                {{
                                    form.value.play_time / 1000
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
                        [min]="form.value.start_time"
                        [max]="item.video_length || 300000"
                        step="100"
                    >
                        <input
                            name="play-time"
                            matSliderThumb
                            formControlName="play_time"
                        />
                    </mat-slider>
                    <label for="animation">{{
                        'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="animation"
                            formControlName="animation"
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
                            name="description"
                            [placeholder]="'COMMON.DESCRIPTION' | translate"
                            formControlName="description"
                            class="min-h-32"
                        ></textarea>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'APP.CONCIERGE.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                formControlName="valid_from"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'APP.CONCIERGE.VALID_UNTIL' | translate
                            }}</label>
                            <a-date-field
                                name="valid-until"
                                [from]="form.value.valid_from"
                                formControlName="valid_until"
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
      ReactiveFormsModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaModalComponent, { className: "SignageMediaModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-modal.component.ts", lineNumber: 249 });
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
var _SignageMediaPreviewModalComponent = class _SignageMediaPreviewModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.save = output();
    this.loading = signal("");
    this.resource = signal(this._data.url.toString());
    this.name = signal(this._data.name);
    this.type = signal(this._data.type);
    this.can_save = signal(this._data.save !== false);
    this.file = this._data.file;
  }
  ngOnInit() {
    console.log("Data:", this._data);
  }
};
_SignageMediaPreviewModalComponent.\u0275fac = function SignageMediaPreviewModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaPreviewModalComponent)();
};
_SignageMediaPreviewModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaPreviewModalComponent, selectors: [["signage-media-preview-modal"]], outputs: { save: "save" }, decls: 10, vars: 8, consts: [[1, "border-base-300", "flex", "items-center", "justify-between", "border-b", "p-2"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200"], [1, "flex", "h-80", "max-h-[65vh]", "w-md", "max-w-[80vw]", "flex-col", "items-center", "justify-center", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "p-2"], [1, "flex", "h-[65vh]", "max-h-[65vh]", "w-[80vw]", "max-w-[80vw]", "items-center", "justify-center"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "h-full", "w-full", "object-contain", "object-center", 3, "src"], ["auth", "", "autoplay", "", "controls", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [3, "diameter"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
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
  TranslatePipe,
  IconComponent,
  SafePipe
], encapsulation: 2 });
var SignageMediaPreviewModalComponent = _SignageMediaPreviewModalComponent;
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaPreviewModalComponent, { className: "SignageMediaPreviewModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-preview-modal.component.ts", lineNumber: 86 });
})();

// libs/form-fields/src/lib/cron-input-field.component.ts
var VALID_INPUT = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "/",
  "-",
  ",",
  "Backspace",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Delete"
];
function listPattern(fieldPattern) {
  return `(?:${fieldPattern})(?:,(?:${fieldPattern}))*`;
}
var _CronInputFieldComponent = class _CronInputFieldComponent {
  constructor() {
    this.form = new FormGroup({
      minute: new FormControl("*", [
        Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|[0-5]?\\d(?:-[0-5]?\\d)?(?:/\\d{1,2})?)"))
      ]),
      hour: new FormControl("*", [
        Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[01]?\\d|2[0-3])(?:-(?:[01]?\\d|2[0-3]))?(?:/\\d{1,2})?)"))
      ]),
      day: new FormControl("*", [
        Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[1-9]|[12]\\d|3[01])(?:-(?:[1-9]|[12]d|3[01]))?(?:/\\d{1,2})?)"))
      ]),
      month: new FormControl("*", [
        Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|(?:[1-9]|1[0-2])(?:-(?:[1-9]|1[0-2]))?(?:/\\d{1,2})?)"))
      ]),
      day_of_week: new FormControl("*", [
        Validators.pattern(listPattern("(?:\\*(?:/\\d{1,2})?|[0-6](?:-[0-6])?(?:/\\d{1,2})?)"))
      ])
    });
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      if (!this.form.valid)
        return;
      this.setValue(`${value.minute || "*"} ${value.hour || "*"} ${value.day || "*"} ${value.month || "*"} ${value.day_of_week || "*"}`);
    });
  }
  setValue(value) {
    this.cron_string = value;
    if (this._onChange)
      this._onChange(value);
  }
  writeValue(value) {
    if (!value)
      return;
    this.cron_string = value;
    const parts = value.split(" ");
    this.form.setValue({
      minute: parts[0] || "*",
      hour: parts[1] || "*",
      day: parts[2] || "*",
      month: parts[3] || "*",
      day_of_week: parts[4] || "*"
    });
  }
  preventInvalidCharacters(event) {
    console.log("Key:", event.key);
    if (!VALID_INPUT.includes(event.key))
      event.preventDefault();
  }
};
_CronInputFieldComponent.\u0275fac = function CronInputFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CronInputFieldComponent)();
};
_CronInputFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CronInputFieldComponent, selectors: [["cron-input-field"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _CronInputFieldComponent),
    multi: true
  }
])], decls: 8, vars: 3, consts: [[1, "border-base-300", "focus-within:border-base-content", "focus-within:outline-base-content", "mb-1", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "border", "focus-within:outline-4", 3, "formGroup"], ["placeholder", "*", "name", "minute", "formControlName", "minute", 1, "w-px", "flex-1", "border-none", "bg-none", "px-2", "py-3", "text-base", "outline-hidden", 3, "keydown"], ["placeholder", "*", "name", "hour", "formControlName", "hour", 1, "w-px", "flex-1", "border-none", "bg-none", "px-2", "py-3", "text-base", "outline-hidden"], ["placeholder", "*", "name", "day", "formControlName", "day", 1, "w-px", "flex-1", "border-none", "bg-none", "px-2", "py-3", "text-base", "outline-hidden"], ["placeholder", "*", "name", "month", "formControlName", "month", 1, "w-px", "flex-1", "border-none", "bg-none", "px-2", "py-3", "text-base", "outline-hidden"], ["placeholder", "*", "name", "day_of_week", "formControlName", "day_of_week", 1, "w-px", "flex-1", "border-none", "bg-none", "px-2", "py-3", "text-base", "outline-hidden"], [1, "text-error", "text-xs"]], template: function CronInputFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
    \u0275\u0275listener("keydown", function CronInputFieldComponent_Template_input_keydown_1_listener($event) {
      return ctx.preventInvalidCharacters($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "input", 2)(3, "input", 3)(4, "input", 4)(5, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7, " CRON expression is invalid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("opacity-0", ctx.form.valid);
  }
}, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
var CronInputFieldComponent = _CronInputFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CronInputFieldComponent, [{
    type: Component,
    args: [{ selector: "cron-input-field", template: `
        <div
            class="border-base-300 focus-within:border-base-content focus-within:outline-base-content mb-1 flex w-full items-center space-x-2 rounded-sm border focus-within:outline-4"
            [formGroup]="form"
        >
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-hidden"
                placeholder="*"
                name="minute"
                formControlName="minute"
                (keydown)="preventInvalidCharacters($event)"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-hidden"
                placeholder="*"
                name="hour"
                formControlName="hour"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-hidden"
                placeholder="*"
                name="day"
                formControlName="day"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-hidden"
                placeholder="*"
                name="month"
                formControlName="month"
            />
            <input
                class="w-px flex-1 border-none bg-none px-2 py-3 text-base outline-hidden"
                placeholder="*"
                name="day_of_week"
                formControlName="day_of_week"
            />
        </div>
        <div class="text-error text-xs" [class.opacity-0]="form.valid">
            CRON expression is invalid
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CronInputFieldComponent),
        multi: true
      }
    ], imports: [ReactiveFormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CronInputFieldComponent, { className: "CronInputFieldComponent", filePath: "libs/form-fields/src/lib/cron-input-field.component.ts", lineNumber: 91 });
})();

// apps/concierge/src/app/signage/signage-playlist-modal.component.ts
var _c04 = ["search_input"];
var _c12 = () => ({ standalone: true });
function SignagePlaylistModalComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 17)(2, "label", 43);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-time-field", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "label", 45);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-time-field", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "APP.CONCIERGE.PLAY_FROM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("no_past_times", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "APP.CONCIERGE.PLAY_UNTIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("no_past_times", false)("from", ctx_r0.form.value.play_from);
  }
}
function SignagePlaylistModalComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 17)(2, "label", 47);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-date-field", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "label", 49);
    \u0275\u0275text(8, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a-time-field", 50);
    \u0275\u0275listener("ngModelChange", function SignagePlaylistModalComponent_Conditional_112_Template_a_time_field_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.patchValue({ play_at: $event }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "label", 51);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "a-duration-field", 52);
    \u0275\u0275elementStart(14, "settings-toggle", 53);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "APP.CONCIERGE.PLAY_AT"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.form.value.play_at)("ngModelOptions", \u0275\u0275pureFunction0(11, _c12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "APP.CONCIERGE.PLAY_DURATION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "APP.CONCIERGE.PLAY_ONCE"), " ");
  }
}
function SignagePlaylistModalComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 17)(2, "label", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "cron-input-field", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "label", 51);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "settings-toggle", 53);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.PLAY_CRON"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "APP.CONCIERGE.PLAY_DURATION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "APP.CONCIERGE.PLAY_ONCE"), " ");
  }
}
var _SignagePlaylistModalComponent = class _SignagePlaylistModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA) ?? new ho({});
    this._state = inject(SignageStateService);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(false);
    this.playlist = this._data;
    this.media = this._state.media;
    this.schedule = signal("");
    this.search = new BehaviorSubject("");
    this.form = new FormGroup({
      id: new FormControl(this.playlist.id || ""),
      name: new FormControl(this.playlist.name || "", [Validators.required]),
      description: new FormControl(this.playlist.description || ""),
      default_animation: new FormControl(Qr.Cut),
      orientation: new FormControl("unspecified"),
      enabled: new FormControl(true),
      random: new FormControl(false),
      default_duration: new FormControl(15 * 1e3),
      valid_from: new FormControl(0),
      valid_until: new FormControl(0),
      play_hours: new FormControl("00:00-00:00"),
      play_duration: new FormControl(0),
      play_from: new FormControl(0),
      play_until: new FormControl(0),
      play_once: new FormControl(false),
      play_at: new FormControl(Date.now()),
      play_cron: new FormControl("* * * * *")
    });
    this.search_input = viewChild("search_input");
  }
  ngOnInit() {
    this.form.patchValue(__spreadProps(__spreadValues({}, this.playlist), {
      valid_from: this.playlist.valid_from * 1e3,
      valid_until: this.playlist.valid_until * 1e3
    }));
    const { play_hours, play_at, play_cron } = this.form.value;
    let [from, to] = (play_hours || "").split("-");
    if (!from)
      from = "00:00";
    if (!to)
      to = "00:00";
    this.form.patchValue({
      play_from: addDays(set(Date.now(), {
        hours: parseInt(from.split(":")[0]),
        minutes: parseInt(from.split(":")[1])
      }), 1).valueOf(),
      play_until: addDays(set(Date.now(), {
        hours: parseInt(to.split(":")[0]),
        minutes: parseInt(to.split(":")[1])
      }), 1).valueOf(),
      play_duration: parseInt(from.split(":")[0]) * 60 + parseInt(from.split(":")[1]),
      play_once: !play_hours
    });
    this.schedule.set(play_cron ? "recurring" : play_at ? "exact" : from !== to ? "between" : "");
    if (!this.form.value.orientation)
      this.form.patchValue({ orientation: "unspecified" });
  }
  async savePlaylist() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.invalid)
      return;
    this.loading.set(true);
    const form_value = this.form.getRawValue();
    if (this.schedule() === "between") {
      form_value.play_hours = `${format(form_value.play_from, "HH:mm")}-${format(form_value.play_until, "HH:mm")}`;
      form_value.play_at = 0;
      form_value.play_cron = "";
      delete form_value.play_once;
    } else if (this.schedule() === "exact") {
      form_value.play_cron = "";
      const hours = padLength(Math.floor(form_value.play_duration / 60));
      const minutes = padLength(form_value.play_duration % 60);
      form_value.play_hours = `${hours}:${minutes}`;
    } else if (this.schedule() === "recurring") {
      const hours = padLength(Math.floor(form_value.play_duration / 60));
      const minutes = padLength(form_value.play_duration % 60);
      form_value.play_hours = `${hours}:${minutes}`;
      form_value.play_at = 0;
    } else {
      form_value.play_hours = "";
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
    if (form_value.play_once)
      form_value.play_hours = "";
    const result = await this._state.savePlaylist(__spreadValues({}, form_value)).catch((_) => {
      notifyError("Error saving playlist");
      this.loading.set(false);
      throw _;
    });
    this._dialog_ref.close(result);
  }
};
_SignagePlaylistModalComponent.\u0275fac = function SignagePlaylistModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignagePlaylistModalComponent)();
};
_SignagePlaylistModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistModalComponent, selectors: [["signage-playlist-modal"]], viewQuery: function SignagePlaylistModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.search_input, _c04, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 114, vars: 94, consts: [[3, "confirm", "heading", "loading"], [3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], [1, "mb-4", "flex", "items-center", "space-x-4"], ["formControlName", "enabled", 1, "flex-1", 3, "name"], ["formControlName", "random", 1, "flex-1", 3, "name"], [1, "pt-2", "pb-4"], [1, "border-base-300", "relative", "rounded-sm", "border"], ["for", "default-duration", 1, "bg-base-100", "absolute", "top-0", "left-2", "m-0", "flex", "w-auto", "min-w-0", "-translate-y-1/2", "items-center", "space-x-2", "px-2"], [1, "flex", "items-center", "px-2", "pt-2"], ["min", "5000", "max", "300000", "step", "1000", 1, "flex-1"], ["name", "default-duration", "matSliderThumb", "", "formControlName", "default_duration"], [1, "w-16", "px-2", "text-right", "font-mono", "text-xs"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", 3, "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], ["name", "animation", "formControlName", "default_animation", 3, "placeholder"], [3, "value"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 1, "min-h-32", 3, "placeholder"], [1, "flex", "space-x-4"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from", 1, "w-full"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 1, "w-full", 3, "from"], [1, "border-base-300", "relative", "mb-12", "space-y-2", "rounded-sm", "border", "px-4", "pt-4"], ["for", "schedule", 1, "bg-base-100", "absolute", "top-0", "left-2", "m-0", "flex", "w-auto", "min-w-0", "-translate-y-1/2", "items-center", "space-x-2", "px-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", ""], ["value", "between"], ["value", "exact", 3, "click"], ["value", "recurring", 3, "click"], [1, "pt-2"], ["for", "play-from"], ["name", "play-from", "formControlName", "play_from", 1, "w-full", 3, "no_past_times"], ["for", "play-until"], ["name", "play-until", "formControlName", "play_until", 1, "w-full", 3, "no_past_times", "from"], ["for", "play-at"], ["name", "play-at", "formControlName", "play_at", 1, "w-full"], ["for", "play-at-time"], ["name", "play-at-time", 1, "w-full", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "play-duration"], ["name", "play-duration", "formControlName", "play_duration", 1, "w-full"], ["formControlName", "play_once", 1, "mb-4"], ["formControlName", "play_cron"]], template: function SignagePlaylistModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("confirm", function SignagePlaylistModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
      return ctx.savePlaylist();
    });
    \u0275\u0275elementStart(3, "form", 1)(4, "label", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span", 3);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-form-field", 4);
    \u0275\u0275element(10, "input", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "mat-error");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 6);
    \u0275\u0275element(16, "settings-toggle", 7);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275element(18, "settings-toggle", 8);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 9)(21, "div", 10)(22, "label", 11)(23, "div");
    \u0275\u0275text(24, "Default Play Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 12)(26, "mat-slider", 13);
    \u0275\u0275element(27, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "mediaDuration");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 16)(32, "div", 17)(33, "label", 18);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 4)(37, "mat-select", 19);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementStart(39, "mat-option", 20);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 21);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-option", 22);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-option", 23);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 17)(52, "label", 24);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-form-field", 4)(56, "mat-select", 25);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementStart(58, "mat-option", 26);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "mat-option", 26);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "mat-option", 26);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-option", 26);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-option", 26);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-option", 26);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-option", 26);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(79, "label", 27);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-form-field", 4);
    \u0275\u0275element(83, "textarea", 28);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 29)(86, "div", 17)(87, "label", 30);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "a-date-field", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 17)(92, "label", 32);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(95, "a-date-field", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 34)(97, "label", 35)(98, "div");
    \u0275\u0275text(99, "Schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "mat-form-field", 36)(101, "mat-select", 37);
    \u0275\u0275listener("ngModelChange", function SignagePlaylistModalComponent_Template_mat_select_ngModelChange_101_listener($event) {
      return ctx.schedule.set($event);
    });
    \u0275\u0275elementStart(102, "mat-option", 38);
    \u0275\u0275text(103, "No schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "mat-option", 39);
    \u0275\u0275text(105, "Play Between");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "mat-option", 40);
    \u0275\u0275listener("click", function SignagePlaylistModalComponent_Template_mat_option_click_106_listener() {
      return ctx.form.patchValue({ play_duration: 30 });
    });
    \u0275\u0275text(107, "Set Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "mat-option", 41);
    \u0275\u0275listener("click", function SignagePlaylistModalComponent_Template_mat_option_click_108_listener() {
      return ctx.form.patchValue({ play_duration: 30 });
    });
    \u0275\u0275text(109, "Recurring Schedule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "div", 42);
    \u0275\u0275conditionalCreate(111, SignagePlaylistModalComponent_Conditional_111_Template, 11, 9, "div", 29)(112, SignagePlaylistModalComponent_Conditional_112_Template, 17, 12)(113, SignagePlaylistModalComponent_Conditional_113_Template, 14, 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 39, ctx.playlist.id ? "APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT" : "APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 41, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING") : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 43, "FORM.NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 45, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 47, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(17, 49, "COMMON.ENABLED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(19, 51, "APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 53, ctx.form.value.default_duration / 1e3), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 55, "APP.CONCIERGE.SIGNAGE_ORIENTATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 57, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 59, "APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 61, "APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 63, "APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 65, "APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 67, "APP.CONCIERGE.SIGNAGE_ANIMATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 69, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 71, "APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 73, "APP.CONCIERGE.SIGNAGE_ANIMATION_CUT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 75, "APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 77, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 79, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 81, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 83, "APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 85, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(84, 87, "COMMON.DESCRIPTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 89, "APP.CONCIERGE.VALID_FROM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 91, "APP.CONCIERGE.VALID_UNTIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("from", ctx.form.value.valid_from);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx.schedule())("ngModelOptions", \u0275\u0275pureFunction0(93, _c12));
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx.schedule() === "between" ? 111 : ctx.schedule() === "exact" ? 112 : ctx.schedule() === "recurring" ? 113 : -1);
  }
}, dependencies: [
  TranslatePipe,
  FullscreenModalShellComponent,
  SettingsToggleComponent,
  DurationFieldComponent,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
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
  NgModel,
  MediaDurationPipe
], encapsulation: 2 });
var SignagePlaylistModalComponent = _SignagePlaylistModalComponent;
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
            <form [formGroup]="form">
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="name"
                        [placeholder]="'FORM.NAME' | translate"
                        formControlName="name"
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        class="flex-1"
                        [name]="'COMMON.ENABLED' | translate"
                        formControlName="enabled"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [name]="
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE'
                                | translate
                        "
                        formControlName="random"
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
                                    name="default-duration"
                                    matSliderThumb
                                    formControlName="default_duration"
                                />
                            </mat-slider>
                            <div class="w-16 px-2 text-right font-mono text-xs">
                                {{
                                    form.value.default_duration / 1000
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
                                name="orientation"
                                formControlName="orientation"
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
                                name="animation"
                                formControlName="default_animation"
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
                        name="description"
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'APP.CONCIERGE.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            name="valid-from"
                            class="w-full"
                            formControlName="valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'APP.CONCIERGE.VALID_UNTIL' | translate
                        }}</label>
                        <a-date-field
                            name="valid-until"
                            class="w-full"
                            [from]="form.value.valid_from"
                            formControlName="valid_until"
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
                            [ngModel]="schedule()"
                            (ngModelChange)="schedule.set($event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option value="">No schedule</mat-option>
                            <mat-option value="between"
                                >Play Between</mat-option
                            >
                            <mat-option
                                value="exact"
                                (click)="form.patchValue({ play_duration: 30 })"
                                >Set Date & Time</mat-option
                            >
                            <mat-option
                                value="recurring"
                                (click)="form.patchValue({ play_duration: 30 })"
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
                                        name="play-from"
                                        class="w-full"
                                        [no_past_times]="false"
                                        formControlName="play_from"
                                    ></a-time-field>
                                </div>
                                <div class="flex-1">
                                    <label for="play-until">{{
                                        'APP.CONCIERGE.PLAY_UNTIL' | translate
                                    }}</label>
                                    <a-time-field
                                        name="play-until"
                                        class="w-full"
                                        [no_past_times]="false"
                                        [from]="form.value.play_from"
                                        formControlName="play_until"
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
                                        name="play-at"
                                        class="w-full"
                                        formControlName="play_at"
                                    ></a-date-field>
                                </div>
                                <div class="flex-1">
                                    <label for="play-at-time">&nbsp;</label>
                                    <a-time-field
                                        name="play-at-time"
                                        class="w-full"
                                        [ngModel]="form.value.play_at"
                                        (ngModelChange)="
                                            form.patchValue({ play_at: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                </div>
                            </div>
                            <label for="play-duration">{{
                                'APP.CONCIERGE.PLAY_DURATION' | translate
                            }}</label>
                            <a-duration-field
                                name="play-duration"
                                class="w-full"
                                formControlName="play_duration"
                            ></a-duration-field>
                            <settings-toggle
                                formControlName="play_once"
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
                                        formControlName="play_cron"
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
                                formControlName="play_once"
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
      ReactiveFormsModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistModalComponent, { className: "SignagePlaylistModalComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-modal.component.ts", lineNumber: 392 });
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
var _SignageStateService = class _SignageStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._uploads = inject(UploadsService);
    this._loading = new BehaviorSubject(false);
    this._change = new BehaviorSubject(0);
    this._active_upload = new BehaviorSubject(null);
    this.loading = this._loading.asObservable();
    this.has_changed = this._change.asObservable();
    this.media = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(() => Ka({ limit: 2500 })), map((_) => _.data.sort((a, b) => b.created_at - a.created_at)), shareReplay(1));
    this.playlists = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(() => rl({ limit: 500 })), map((_) => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))), shareReplay(1));
    this.displays = combineLatest([
      this._org.active_region,
      this._org.active_building,
      this._change
    ]).pipe(filter(([, bld]) => !!bld?.id), switchMap(([region, bld]) => Zc({
      zone_id: (this._settings.get("app.use_region") ? region?.id : "") || bld?.id,
      limit: 500,
      signage: true
    }).pipe(map((_) => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name)).filter((_2) => _2.signage)))), shareReplay(1));
    this.zones = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(() => ja({
      limit: 250,
      tags: "signage"
    }).pipe(catchError(() => of({ data: [] })))), map((_) => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name))));
  }
  changed() {
    this._change.next(Date.now());
  }
  editPlaylist(playlist = new ho({})) {
    return new Promise((resolve) => {
      const ref = this._dialog.open(SignagePlaylistModalComponent, {
        data: playlist
      });
      ref.afterClosed().subscribe((result) => {
        this.timeout("changed", () => this._change.next(Date.now()));
        resolve(result);
      });
    });
  }
  editMedia(media = new lo({}), file, playlist_id = "") {
    return new Promise(async (resolve) => {
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
      ref.afterClosed().subscribe((result) => {
        this.timeout("changed", () => this._change.next(Date.now()));
        resolve(result);
      });
    });
  }
  async editDisplay(display = new Lr({})) {
    console.log("Edit Display:", display);
    const ref = this._dialog.open(SignageDisplayModalComponent, {
      data: { display }
    });
    const result = await lastValueFrom(ref.afterClosed());
    this.timeout("changed", () => this._change.next(Date.now()));
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
      await lastValueFrom(ta(display.id, {
        signage: false
      }));
    } else {
      await lastValueFrom(ra(display.id));
    }
    this._change.next(Date.now());
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE_SUCCESS"));
    result.close();
  }
  async savePlaylist(playlist) {
    const call = lastValueFrom(playlist.id ? sl(playlist.id, playlist, "put") : ol(playlist));
    const new_playlist = await call;
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVE_SUCCESS"));
    this._change.next(Date.now());
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
    await lastValueFrom(ul(playlist.id));
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE_SUCCESS"));
    this._change.next(Date.now());
    result.close();
  }
  async updatePlaylistMedia(playlist_id, list) {
    await lastValueFrom(hl(playlist_id, list));
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_PLAYLISTS_MEDIA_SAVE_SUCCESS"));
    this.changed();
  }
  async getPlaylistMedia(playlist_id) {
    const { items } = await lastValueFrom(cl(playlist_id));
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
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    ref.componentInstance.save.subscribe(async () => {
      ref.componentInstance.loading.set("Saving...");
      const new_media = await this.addMedia(media).catch((e) => {
        notifyError("Error saving media.");
        ref.componentInstance.loading.set("");
        throw e;
      });
      if (playlist_id && new_media.id) {
        const media_list = await lastValueFrom(cl(playlist_id));
        const new_media_list = [...media_list.items, new_media.id];
        await lastValueFrom(hl(playlist_id, new_media_list));
      }
      ref.close();
    });
  }
  async addMediaFromLink(url, media_item = new lo({})) {
    const url_obj = new URL(url);
    const data = __spreadValues({}, new lo(__spreadProps(__spreadValues({}, media_item), {
      name: media_item.name || url_obj.hostname,
      media_uri: url,
      media_type: "webpage",
      orientation: "landscape"
    })));
    for (const key in data) {
      if (!data[key])
        delete data[key];
    }
    const result = await lastValueFrom(el(data));
    this._active_upload.next(null);
    this._change.next(Date.now());
    notifySuccess("Successfully added media from link");
    return result;
  }
  async addMedia(file, media_item = new lo({})) {
    const uploadDetails = (id) => new Promise((resolve, reject) => {
      let state = null;
      let resolved = false;
      this.subscription(`upload-${id}`, this._uploads.upload_list.subscribe((list) => {
        console.log("Upload List:", list, id);
        state = list.find((s) => id === s.id);
        if (state && (state.link || state.progress >= 100)) {
          resolved = true;
          const uid = state.upload_id || state.upload?.id || id;
          const url = `/api/engine/v2/uploads/${encodeURIComponent(uid)}/url`;
          resolve({
            id: uid,
            link: state.link || url
          });
          this.unsub(`upload-${id}`);
        }
      }, reject, () => !resolved ? resolve(state) : null));
    });
    const [is_landscape] = await this._getMediaMetadata(file);
    const thumbnail_image = await this._generateThumbnail(file, 1280, 720).catch(() => null);
    const media_id = await this._uploads.uploadFileWithPermissions(file);
    const tkn = X();
    if (!tkn)
      throw new Error("Token expired. Try again.");
    ct.setToken(tkn);
    const media = await uploadDetails(media_id);
    let thumbnail = null;
    if (thumbnail_image) {
      const name_parts = file.name.split(".");
      name_parts.pop();
      const name = `thumb+${name_parts.join(".")}.jpg`;
      const thumb_id = await this._uploads.uploadFile(dataURLtoFile(thumbnail_image, name));
      thumbnail = await uploadDetails(thumb_id);
    }
    const data = __spreadValues({}, new lo(__spreadProps(__spreadValues({}, media_item), {
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
    const result = await lastValueFrom(el(data));
    this._active_upload.next(null);
    this.timeout("changed", () => this._change.next(Date.now()), 500);
    return result;
  }
  async updateMedia(item) {
    if (!item?.id)
      return;
    await lastValueFrom(Xa(item.id, item));
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
    await tl(item.id).toPromise();
    this._change.next(Date.now());
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
};
_SignageStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SignageStateService_BaseFactory;
  return function SignageStateService_Factory(__ngFactoryType__) {
    return (\u0275SignageStateService_BaseFactory || (\u0275SignageStateService_BaseFactory = \u0275\u0275getInheritedFactory(_SignageStateService)))(__ngFactoryType__ || _SignageStateService);
  };
})();
_SignageStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageStateService, factory: _SignageStateService.\u0275fac, providedIn: "root" });
var SignageStateService = _SignageStateService;
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
var _c13 = () => ["/signage", "media"];
var _c2 = (a0) => ({ playlist: a0 });
var _c3 = () => [];
var _c4 = (a0) => ({ count: a0 });
var _c5 = (a0) => ({ name: a0 });
var _forTrack02 = ($index, $item) => $item == null ? null : $item.id;
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
    let tmp_17_0;
    const item_r7 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_REORDER"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c13))("queryParams", \u0275\u0275pureFunction1(22, _c2, item_r7.id));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.playlist_thumbnail_media()[item_r7.id] || \u0275\u0275pureFunction0(24, _c3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(14, 13, "APP.CONCIERGE.SIGNAGE_MEDIA_COUNT", \u0275\u0275pureFunction1(25, _c4, ((tmp_17_0 = ctx_r0.playlist_count()[item_r7.id]) == null ? null : tmp_17_0.count) || 0), ((tmp_17_0 = ctx_r0.playlist_count()[item_r7.id]) == null ? null : tmp_17_0.count) || 0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isScheduled(item_r7) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c13))("queryParams", \u0275\u0275pureFunction1(28, _c2, item_r7.id));
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
var PLAYLIST_ITEM_COUNTS = signal({});
var _SignageItemPlaylistsComponent = class _SignageItemPlaylistsComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this.item = input(void 0);
    this.name = input("zone");
    this.extra = input("");
    this.link = input("");
    this.add = output();
    this.remove = output();
    this.ondrop = output();
    this._playlist_ids = signal([]);
    this._playlists = toSignal(this._state.playlists, {
      initialValue: []
    });
    this._has_changed = toSignal(this._state.has_changed, {
      initialValue: 0
    });
    this._update_counts = effect(() => {
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
    });
    this.active_playlists = computed(() => {
      const playlists = this._playlists();
      const ids = this._playlist_ids();
      this._has_changed();
      return ids.map((id) => playlists.find((_) => _.id === id)).filter((_) => !!_);
    });
    this.playlist_count = PLAYLIST_ITEM_COUNTS;
    this.playlist_thumbnail_media = computed(() => {
      const counts = this.playlist_count();
      const result = {};
      for (const [playlist_id, data] of Object.entries(counts)) {
        result[playlist_id] = (data.media_ids || []).map((id) => nl(id));
      }
      return result;
    });
  }
  isScheduled(item) {
    return !!item.play_at || !!item.play_cron || item.play_hours.includes("-");
  }
  playlistCount(id) {
    return PLAYLIST_ITEM_COUNTS()[id]?.count || 0;
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this._playlist_ids.set(this.item()?.playlists || []);
    }
  }
};
_SignageItemPlaylistsComponent.\u0275fac = function SignageItemPlaylistsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageItemPlaylistsComponent)();
};
_SignageItemPlaylistsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageItemPlaylistsComponent, selectors: [["signage-item-playlists"]], inputs: { item: [1, "item"], name: [1, "name"], extra: [1, "extra"], link: [1, "link"] }, outputs: { add: "add", remove: "remove", ondrop: "ondrop" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c05, decls: 8, vars: 4, consts: [["menu", "matMenu"], [1, "bg-base-100", "flex", "items-center", "justify-center", "space-x-2", "rounded-xl", "p-2"], [1, "text-xl", "font-medium"], [1, "bg-base-200", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "uppercase"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 1, "text-xs", 3, "href", "matTooltip"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["cdkDropList", "", 1, "mt-4", "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "border-base-300", "bg-base-100", "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["class", "border-base-400 bg-base-300 h-20 w-full rounded-xl border-4 border-dashed", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", 1, "hover:bg-base-200", "m-0!", "flex", "h-full", "w-6", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], ["preview", "", "matRipple", "", 1, "border-base-200", "bg-base-200", "relative", "h-14", "w-14", "rounded-sm", "border", 3, "routerLink", "queryParams"], ["auth", "", 1, "border-base-300", "bg-base-200", "absolute", "h-10", "w-10", "rounded-sm", "border", "object-cover", "shadow", 3, "source", "top", "left", "z-index"], [1, "text-base-content", "w-1/2", "flex-1"], [1, "truncate"], [1, "truncate", "text-sm", "opacity-30"], [1, "border-info", "bg-info-light", "rounded-sm", "border", "p-1", "text-lg", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", "queryParams"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"], [1, "border-base-400", "bg-base-300", "h-20", "w-full", "rounded-xl", "border-4", "border-dashed"], ["auth", "", 1, "border-base-300", "bg-base-200", "absolute", "h-10", "w-10", "rounded-sm", "border", "object-cover", "shadow", 3, "source"], [1, "flex", "flex-col", "items-center", "justify-center", "opacity-30"], [1, "text-6xl"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"]], template: function SignageItemPlaylistsComponent_Template(rf, ctx) {
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
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.display_name) || ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.extra() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.link() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.active_playlists().length > 0 && ctx.item() ? 6 : 7);
  }
}, dependencies: [
  CommonModule,
  TranslatePipe,
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
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */"] });
var SignageItemPlaylistsComponent = _SignageItemPlaylistsComponent;
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
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatMenuModule,
      DragDropModule,
      MatTooltipModule,
      RouterLink,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;988165d096528c7b51347b92b4b6dc221c4aacfd0a189d7585a5c637e136471a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/signage/signage-item-playlists.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageItemPlaylistsComponent, { className: "SignageItemPlaylistsComponent", filePath: "apps/concierge/src/app/signage/signage-item-playlists.component.ts", lineNumber: 254 });
})();

// apps/concierge/src/app/signage/zone-select-modal.component.ts
function ZoneSelectModalComponent_Conditional_12_button_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r2, " ");
  }
}
function ZoneSelectModalComponent_Conditional_12_button_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, ZoneSelectModalComponent_Conditional_12_button_0_For_7_Template, 2, 1, "div", 12, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r3 = ctx.$implicit;
    \u0275\u0275property("mat-dialog-close", zone_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(zone_r3.display_name || zone_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r3.id, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(8, 3, zone_r3.tags, 0, 3));
  }
}
function ZoneSelectModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ZoneSelectModalComponent_Conditional_12_button_0_Template, 9, 7, "button", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const zone_list_r4 = \u0275\u0275readContextLet(10);
    \u0275\u0275property("ngForOf", zone_list_r4);
  }
}
function ZoneSelectModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 13);
    \u0275\u0275text(2, "layers_clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4, "No zones found");
    \u0275\u0275elementEnd()();
  }
}
var _ZoneSelectModalComponent = class _ZoneSelectModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.query = this._data.query || {};
    this.ignore = this._data.ignore || [];
    this.search_term = new BehaviorSubject("");
    this.zones = this.search_term.pipe(debounceTime(300), switchMap((term) => ja(__spreadProps(__spreadValues({}, this.query), { q: term, limit: 100 })).pipe(map((_) => _.data), catchError(() => of([])))), map((zones) => zones.filter((zone) => !this.ignore.includes(zone.id))), startWith([]), shareReplay(1));
  }
};
_ZoneSelectModalComponent.\u0275fac = function ZoneSelectModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ZoneSelectModalComponent)();
};
_ZoneSelectModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneSelectModalComponent, selectors: [["app-zone-select-modal"]], decls: 14, vars: 8, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", "placeholder", "Search zones", 3, "ngModelChange", "ngModel"], ["matRipple", "", 1, "border-base-300", "hover:bg-base-200", "z-0", "flex", "h-16", "w-full", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "p-2", "text-left", 3, "mat-dialog-close"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], ["matRipple", "", "class", "border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center justify-center space-x-2 rounded-sm border p-2 text-left", 3, "mat-dialog-close", 4, "ngFor", "ngForOf"], [1, "flex-1"], [1, ""], [1, "text-xs", "opacity-30"], [1, "bg-info", "text-info-content", "rounded-lg", "px-2", "py-1", "font-mono", "text-[0.625rem]"], [1, "text-8xl", "opacity-30"], [1, "opacity-30"]], template: function ZoneSelectModalComponent_Template(rf, ctx) {
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
    \u0275\u0275listener("ngModelChange", function ZoneSelectModalComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search_term.next($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275conditionalCreate(12, ZoneSelectModalComponent_Conditional_12_Template, 1, 1, "button", 6)(13, ZoneSelectModalComponent_Conditional_13_Template, 5, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.ZONE_SELECT_HEADER"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx.search_term.getValue());
    \u0275\u0275advance();
    const zone_list_r5 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(11, 5, ctx.zones));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(zone_list_r5.length > 0 ? 12 : 13);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  AsyncPipe,
  SlicePipe,
  MatRippleModule,
  MatRipple,
  MatDialogModule,
  MatDialogClose,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  IconComponent,
  TranslatePipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var ZoneSelectModalComponent = _ZoneSelectModalComponent;
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
                    [ngModel]="search_term.getValue()"
                    (ngModelChange)="search_term.next($event)"
                    placeholder="Search zones"
                />
            </mat-form-field>
            @let zone_list = zones | async;
            @if (zone_list.length > 0) {
                <button
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center justify-center space-x-2 rounded-sm border p-2 text-left"
                    *ngFor="let zone of zone_list"
                    [mat-dialog-close]="zone.id"
                >
                    <div class="flex-1">
                        <div class="">{{ zone.display_name || zone.name }}</div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneSelectModalComponent, { className: "ZoneSelectModalComponent", filePath: "apps/concierge/src/app/signage/zone-select-modal.component.ts", lineNumber: 92 });
})();

// apps/concierge/src/app/signage/signage-displays.component.ts
var _c06 = () => [];
var _c14 = (a0) => ({ display: a0 });
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
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected_trigger() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger() === (trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c06))("queryParams", \u0275\u0275pureFunction2(8, _c22, display_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger");
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
    let tmp_16_0;
    const display_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected() === display_r2.id)("text-secondary-content", ctx_r2.selected() === display_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c06))("queryParams", \u0275\u0275pureFunction1(9, _c14, display_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r2.display_name || display_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx_r2.active_display()) == null ? null : tmp_16_0.id) === display_r2.id && !ctx_r2.switching() ? 2 : -1);
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
    let tmp_18_0;
    const zone_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c32))("queryParams", \u0275\u0275pureFunction1(12, _c42, zone_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_18_0 = \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind1(2, 3, zone_r6))) == null ? null : tmp_18_0.display_name) || ((tmp_18_0 = \u0275\u0275pipeBind1(5, 9, \u0275\u0275pipeBind1(4, 7, zone_r6))) == null ? null : tmp_18_0.name), " ");
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
    \u0275\u0275repeater(display_r7 == null ? null : display_r7.zones);
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
    let tmp_11_0;
    const menu_r8 = \u0275\u0275reference(7);
    const orientationMenu_r9 = \u0275\u0275reference(23);
    const ctx_r2 = \u0275\u0275nextContext();
    const display_r10 = \u0275\u0275storeLet(ctx_r2.active_display());
    const trigger_r11 = ctx_r2.active_trigger();
    \u0275\u0275advance();
    \u0275\u0275property("item", trigger_r11 || display_r10)("name", trigger_r11 ? "trigger" : "display")("extra", trigger_r11 ? "" : display_r10 == null ? null : display_r10.orientation)("link", trigger_r11 ? "" : ctx_r2.signage_path + "/#/signage/" + (display_r10 == null ? null : display_r10.id) + "?debug=true");
    \u0275\u0275advance();
    \u0275\u0275conditional(!trigger_r11 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r2.signage_path + "/#/signage/" + ((tmp_11_0 = ctx_r2.active_display()) == null ? null : tmp_11_0.id) + "?debug=true", \u0275\u0275sanitizeUrl);
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
var _SignageDisplaysComponent = class _SignageDisplaysComponent {
  get signage_path() {
    return this._settings.get("app.signage_path") || "/signage";
  }
  constructor() {
    this._state = inject(SignageStateService);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.adding = signal(false);
    this.switching = signal(false);
    this.search = signal("");
    this.loading = this._state.loading;
    this._state_displays = toSignal(this._state.displays, {
      initialValue: []
    });
    this.displays = computed(() => {
      const search_value = this.search().toLowerCase();
      const list = this._state_displays();
      return list.filter((_) => _.name.toLowerCase().includes(search_value));
    });
    this.selected = signal("");
    this.selected_trigger = signal("");
    this.active_display = computed(() => {
      const displays = this.displays();
      const id = this.selected();
      return displays.find((item) => item.id === id);
    });
    this._triggers = signal([]);
    this.triggers = this._triggers.asReadonly();
    this.active_trigger = computed(() => {
      const list = this.triggers();
      const id = this.selected_trigger();
      const sys_id = this.selected();
      return list.find((item) => item.id === id && item.control_system_id === sys_id);
    });
    this._state_playlists = toSignal(this._state.playlists, {
      initialValue: []
    });
    this._state_has_changed = toSignal(this._state.has_changed, {
      initialValue: 0
    });
    this.playlists = computed(() => {
      const display = this.active_display();
      const trigger = this.active_trigger();
      const playlists = this._state_playlists();
      this._state_has_changed();
      return playlists.filter((_) => !(trigger || display)?.playlists.find((id) => _.id === id));
    });
    this.removeDisplay = async () => this._state.removeDisplay(this.active_display());
    const queryParams = toSignal(this._route.queryParamMap);
    effect(() => {
      const params = queryParams();
      if (!params)
        return;
      this.switching.set(params.get("display") !== this.selected());
      this.selected.set(params.get("display") || "");
      this.selected_trigger.set(params.get("trigger") || "");
    });
    effect(() => {
      const id = this.selected();
      if (!id) {
        this._triggers.set([]);
        return;
      }
      da(id).pipe(map((_) => _.data), tap((_) => setTimeout(() => this.switching.set(false), 200))).subscribe((data) => this._triggers.set(data));
    });
  }
  async addPlaylist(playlist) {
    const display = this.active_display();
    const trigger = this.active_trigger();
    const item = trigger || display;
    const playlists = [...item.playlists, playlist.id];
    const method = trigger ? $a : ta;
    await method(item.id, { playlists, version: display.version }, "patch").toPromise();
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED" : "APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_ADDED"));
    this._state.changed();
    this.adding.set(false);
  }
  async removePlaylist(playlist) {
    const display = this.active_display();
    const trigger = this.active_trigger();
    const item = trigger || display;
    const playlists = item.playlists.filter((id) => playlist.id !== id);
    const method = trigger ? $a : ta;
    await method(item.id, { playlists, version: display.version }, "patch").toPromise();
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
    const method = trigger ? $a : ta;
    await method(item.id, { playlists, version: display.version }, "patch").toPromise().catch((e) => {
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
    await lastValueFrom(ta(display.id, { orientation, version: display.version }, "patch")).catch((e) => {
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
    const result = await lastValueFrom(ref.afterClosed());
    if (!result)
      return;
    await lastValueFrom(ta(display.id, {
      zones: unique([...display.zones, result]),
      version: display.version
    }, "patch")).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.SIGNAGE_ZONE_ERROR", {
        error: e.message
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.SIGNAGE_ZONE_ADDED"));
    this._state.changed();
  }
};
_SignageDisplaysComponent.\u0275fac = function SignageDisplaysComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageDisplaysComponent)();
};
_SignageDisplaysComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplaysComponent, selectors: [["signage-displays"]], decls: 14, vars: 10, consts: [["menu", "matMenu"], ["orientationMenu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "space-x-2", "overflow-visible"], ["sidebar", "", 1, "border-base-300", "flex", "h-full", "w-64", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "bg-base-200", "rounded-lg", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "border-base-300", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "flex", "flex-1", "flex-col", 3, "item", "name", "extra", "link"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list"], ["matRipple", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "relative", "z-10", "flex", "h-12", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "border", "px-6", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "border-base-300", "absolute", "top-1/2", "left-6", "z-0", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2"], ["matRipple", "", 1, "hover:bg-base-200", "relative", "z-10", "flex", "min-h-12", "w-1/2", "flex-1", "items-center", "truncate", "rounded-3xl", "px-6", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name", "extra", "link"], [1, "bg-base-100", "mt-2", "flex", "flex-wrap", "items-center", "overflow-auto", "rounded-xl", "p-1"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "m-0!", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"], ["matRipple", "", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs", "whitespace-nowrap", 3, "routerLink", "queryParams"], ["matRipple", "", 1, "m-1", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs", "underline", 3, "click"], [3, "selected", "close", "item_list"]], template: function SignageDisplaysComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function SignageDisplaysComponent_Template_input_ngModelChange_6_listener($event) {
      return ctx.search.set($event);
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "COMMON.SEARCH"))("ngModel", ctx.search());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.displays().length > 0 ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.active_display() ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.adding() ? 13 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
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
  ZonePipe
], encapsulation: 2 });
var SignageDisplaysComponent = _SignageDisplaysComponent;
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
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplaysComponent, { className: "SignageDisplaysComponent", filePath: "apps/concierge/src/app/signage/signage-displays.component.ts", lineNumber: 346 });
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
    \u0275\u0275elementEnd()();
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
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "input", 6);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("ngModelChange", function SignageMediaListComponent_Conditional_18_For_2_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.playlist_search.set($event));
    });
    \u0275\u0275elementEnd()()();
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
    let tmp_29_0;
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
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 29, "COMMON.SEARCH"))("ngModel", ctx_r2.playlist_search());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(((tmp_29_0 = ctx_r2.playlists()) == null ? null : tmp_29_0.length) > 0) ? 23 : -1);
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
    \u0275\u0275property("cdkDropListData", ctx_r2.media())("cdkDropListConnectedTo", ctx_r2.playlist_ids);
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
var _SignageMediaListComponent = class _SignageMediaListComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this.link = signal("");
    this.playlist_count = input(0);
    this.search = signal("");
    this.playlist_search = signal("");
    this._playlists = toSignal(this._state.playlists, {
      initialValue: []
    });
    this._media = toSignal(this._state.media, {
      initialValue: []
    });
    this.playlists = computed(() => {
      const search_term = this.playlist_search();
      const list = this._playlists();
      return list.filter((_) => _.name.toLowerCase().includes(search_term.toLowerCase()));
    });
    this.media = computed(() => {
      const search_term = this.search();
      const media_list = this._media();
      return media_list.filter((_) => _.name.toLowerCase().includes(search_term.toLowerCase()));
    });
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
    this.playlist_ids = [];
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removeItem = async (item) => this._state.removeMedia(item);
  }
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  ngOnChanges(changes) {
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count()).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  drop(event) {
  }
  async addToPlaylist(media_id, playlist) {
    const media_list = await lastValueFrom(cl(playlist.id));
    const new_media_list = [...media_list.items, media_id];
    await this._state.updatePlaylistMedia(playlist.id, new_media_list);
  }
};
_SignageMediaListComponent.\u0275fac = function SignageMediaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaListComponent)();
};
_SignageMediaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaListComponent, selectors: [["signage-media-list"]], inputs: { playlist_count: [1, "playlist_count"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 20, vars: 15, consts: [["add_link_template", ""], ["playlist_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "p-2"], [1, "bg-base-100", "mb-2", "rounded-xl", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "white", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "matRipple", "", "customTooltip", "", "matTooltipPosition", "left", 1, "border-base-300", "absolute", "top-3", "right-14", "h-9!", "max-h-9", "w-9!", "max-w-9", "min-w-0", "border", 3, "content", "matTooltip"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "border-base-300", "absolute", "top-3", "right-3", "h-9!", "max-h-9", "w-9!", "max-w-9", "min-w-0", "border", 3, "matTooltip"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "border-base-300", "bg-base-100", "my-2", "flex", "w-[20rem]", "flex-col", "space-y-4", "rounded-lg", "border", "p-4", "shadow-sm"], ["appearance", "outline", 1, "no-subscript"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "mr-2", "text-2xl"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "p-4", "md:grid-cols-2", "lg:grid-cols-3", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "border-base-300", "bg-base-100", "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-3", "hover:opacity-80"], [1, "bg-warning", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], [1, "bg-error", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], ["class", "border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30", 4, "cdkDragPlaceholder"], ["preview", "", "matRipple", "", 1, "bg-base-200", "relative", "h-36", "w-full", "overflow-hidden", "rounded-lg", 3, "click"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "absolute", "top-1", "left-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "bg-info", "text-info-content", "absolute", "right-1", "bottom-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "relative", "top-1", "flex", "w-full", "items-center", "justify-between"], [1, "text-base-content", "w-1/2", "flex-1", "truncate", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "px-2"], ["appearance", "outline", 1, "no-subscript", "w-full", 3, "click"], ["mat-menu-item", "", 3, "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "text-error", "text-2xl"], [1, "border-base-400", "bg-base-300", "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "opacity-30"], [1, "text-base-100", "text-2xl"], [1, "text-8xl", "opacity-30"], ["auth", "", 1, "absolute", "-inset-px", "rounded-lg", "object-contain", 3, "source"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-6xl"]], template: function SignageMediaListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function SignageMediaListComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search.set($event));
    });
    \u0275\u0275elementEnd()();
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.previewFile($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, SignageMediaListComponent_Conditional_18_Template, 3, 2, "div", 10)(19, SignageMediaListComponent_Conditional_19_Template, 6, 3, "div", 11);
  }
  if (rf & 2) {
    let tmp_7_0;
    const add_link_template_r11 = \u0275\u0275reference(12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "APP.CONCIERGE.SIGNAGE_MEDIA"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "COMMON.SEARCH"))("ngModel", ctx.search());
    \u0275\u0275advance(2);
    \u0275\u0275property("content", add_link_template_r11)("matTooltip", \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.SIGNAGE_MEDIA_LINK"));
    \u0275\u0275advance(6);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 13, "APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_7_0 = ctx.media()) == null ? null : tmp_7_0.length) > 0 ? 18 : 19);
  }
}, dependencies: [
  CommonModule,
  TranslatePipe,
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
  MediaDurationPipe,
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n  .cdk-drag-preview {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */"] });
var SignageMediaListComponent = _SignageMediaListComponent;
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
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                />
            </mat-form-field>
            <button
                icon
                matRipple
                customTooltip
                [content]="add_link_template"
                class="border-base-300 absolute top-3 right-14 h-9! max-h-9 w-9! max-w-9 min-w-0 border"
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
                matRipple
                class="border-base-300 absolute top-3 right-3 h-9! max-h-9 w-9! max-w-9 min-w-0 border"
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
                [cdkDropListConnectedTo]="playlist_ids"
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
                                            [ngModel]="playlist_search()"
                                            (ngModelChange)="
                                                playlist_search.set($event)
                                            "
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
      CommonModule,
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaListComponent, { className: "SignageMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-media-list.component.ts", lineNumber: 372 });
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
    \u0275\u0275property("cdkDropListData", ctx_r3.media())("cdkDropListConnectedTo", ctx_r3.playlist_ids);
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
var _SignagePlaylistMediaListComponent = class _SignagePlaylistMediaListComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this._clipboard = inject(Clipboard);
    this._settings = inject(SettingsService);
    this.playlist = input("");
    this.playlist_count = input(0);
    this.approved = signal(0);
    this.loading = signal(false);
    this.playlist_ids = [];
    this._playlist = signal("");
    this._playlists = toSignal(this._state.playlists, { initialValue: [] });
    this._state_media = toSignal(this._state.media, { initialValue: [] });
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
      this._playlist.set(this.playlist());
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
    this.selected_playlist = computed(() => {
      const playlist_id = this._playlist();
      const list = this._playlists();
      const item = list.find((_) => _.id === playlist_id);
      if (!item && playlist_id) {
        this._router.navigate(["/signage/media", {}]);
      }
      return item;
    });
    this._playlist_media_observable = computed(() => {
      const playlist = this.selected_playlist();
      return playlist;
    });
    this._playlist_media = toSignal(combineLatest([
      toObservable(this._playlist_media_observable),
      this._state.has_changed
    ]).pipe(map(([playlist]) => playlist), filter((playlist) => !!playlist), debounceTime(300), tap(() => this.loading.set(true)), switchMap((playlist) => cl(playlist.id).pipe(catchError(() => of({ id: "", items: [], approved: 0 })))), tap((_) => {
      this.approved.set(_.approved);
      this.loading.set(false);
    })), { initialValue: { id: "", items: [], approved: 0 } });
    this.media = computed(() => {
      const playlist = this._playlist_media();
      const media_list = this._state_media();
      if (!playlist)
        return [];
      return playlist.items.map((_) => media_list.find((m) => m.id === _)).filter((_) => _);
    });
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
    return item && (!!item.play_at || !!item.play_cron || item.play_hours.includes("-"));
  }
  ngOnChanges(changes) {
    if (changes.playlist) {
      this._playlist.set(this.playlist());
    }
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count()).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  animation_name(value) {
    switch (value) {
      case Qr.Cut:
        return "Cut";
      case Qr.CrossFade:
        return "Cross Fade";
      case Qr.SlideBottom:
        return "Slide Bottom";
      case Qr.SlideLeft:
        return "Slide Left";
      case Qr.SlideRight:
        return "Slide Right";
      case Qr.SlideTop:
        return "Slide Top";
    }
    return "Default";
  }
  async drop(event) {
    if (event.previousIndex === event.currentIndex)
      return;
    const id = this._playlist();
    const playlist = this._playlist_media();
    if (!id || !playlist)
      return;
    const list = [...playlist.items];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    await this._state.updatePlaylistMedia(id, list);
    this._playlist.set(this.playlist());
  }
  async copyID(id) {
    this._clipboard.copy(id);
    notifyInfo("Copied playlist ID to clipboard.");
  }
};
_SignagePlaylistMediaListComponent.\u0275fac = function SignagePlaylistMediaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignagePlaylistMediaListComponent)();
};
_SignagePlaylistMediaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistMediaListComponent, selectors: [["signage-playlist-media-list"]], inputs: { playlist: [1, "playlist"], playlist_count: [1, "playlist_count"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 67, vars: 45, consts: [["menu", "matMenu"], [1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "space-y-2", "p-2"], [1, "bg-base-100", "flex", "items-center", "justify-center", "space-x-2", "rounded-xl", "p-2"], [1, "text-xl", "font-medium"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], ["icon", "", "matRipple", "", 1, "absolute", "top-2.5", "right-2.5", "m-0!", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click", "disabled"], [1, "text-error", "text-2xl"], ["details", "", 1, "bg-base-100", "flex", "flex-wrap", "items-center", "rounded-xl", "p-1"], [1, "m-1", "ml-2", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-secondary", "text-secondary-content", "m-1", "ml-2", "rounded-sm", "px-2", "py-1", "text-xs"], ["matTooltip", "Default Transition Animation", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs"], [1, "bg-base-300", "ml-1", "rounded-sm", "px-2", "py-1", "uppercase"], ["matTooltip", "Default Playback Duration", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs"], [1, "bg-base-300", "ml-1", "rounded-sm", "px-2", "py-1", "font-mono"], ["matTooltip", "Prefered Orientation", 1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs"], [1, "bg-base-200", "m-1", "rounded-sm", "px-2", "py-2", "text-xs", "uppercase"], ["matRipple", "", 1, "border-warning", "bg-warning", "text-warning-content", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-1", "text-xs", "shadow-sm", 3, "disabled", "matTooltip"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "p-2", 3, "cdkDropListData", "cdkDropListConnectedTo"], ["matRipple", "", 1, "border-warning", "bg-warning", "text-warning-content", "flex", "w-full", "items-center", "space-x-2", "rounded-sm", "p-1", "text-xs", "shadow-sm", 3, "click", "disabled", "matTooltip"], [1, "text-warning-content", "ml-1", "text-xl"], [1, "underline"], ["diameter", "32"], ["cdkDropList", "", "id", "playlist-list", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "p-2", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "border-base-300", "bg-base-100", "relative", "flex", "h-20", "w-full", "items-center", "space-x-2", "rounded-lg", "border", "p-2"], [1, "bg-warning", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], [1, "bg-error", "absolute", "inset-0", "z-0", "rounded-lg", "opacity-10"], ["class", "border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "hover:bg-base-200", "m-0!", "flex", "h-full", "w-6", "items-center", "justify-center", "rounded-sm"], ["preview", "", "matRipple", "", 1, "bg-base-200", "relative", "h-16", "w-18", "overflow-hidden", "rounded-lg", 3, "click"], ["auth", "", 1, "h-full", "w-full", "object-contain", 3, "source"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-base-content", "w-1/2", "flex-1", "truncate"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "border-base-400", "bg-base-300", "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed"], [1, "text-base-100", "text-2xl"], [1, "text-6xl"]], template: function SignagePlaylistMediaListComponent_Template(rf, ctx) {
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editPlaylist());
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
      return \u0275\u0275resetView(ctx.copyID(playlist_r2 == null ? null : playlist_r2.id));
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
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removePlaylist());
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
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    const menu_r9 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    const playlist_r10 = \u0275\u0275storeLet(ctx.selected_playlist());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", playlist_r10 == null ? null : playlist_r10.name, " ");
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
    \u0275\u0275classProp("bg-success", (tmp_9_0 = ctx.selected_playlist()) == null ? null : tmp_9_0.enabled)("text-success-content", (tmp_10_0 = ctx.selected_playlist()) == null ? null : tmp_10_0.enabled)("bg-error", !((tmp_11_0 = ctx.selected_playlist()) == null ? null : tmp_11_0.enabled))("text-error-content", !((tmp_12_0 = ctx.selected_playlist()) == null ? null : tmp_12_0.enabled));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 35, ((tmp_13_0 = ctx.selected_playlist()) == null ? null : tmp_13_0.enabled) ? "COMMON.ENABLED" : "COMMON.DISABLED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_14_0 = ctx.selected_playlist()) == null ? null : tmp_14_0.random) ? 45 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 37, "APP.CONCIERGE.SIGNAGE_ANIMATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.animation_name((tmp_16_0 = ctx.selected_playlist()) == null ? null : tmp_16_0.default_animation));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 39, "APP.CONCIERGE.SIGNAGE_DURATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 41, ((tmp_18_0 = ctx.selected_playlist()) == null ? null : tmp_18_0.default_duration) / 1e3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 43, "APP.CONCIERGE.SIGNAGE_ORIENTATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_20_0 = ctx.selected_playlist()) == null ? null : tmp_20_0.orientation);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isScheduled(ctx.selected_playlist()) ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.approved() ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading() ? 64 : ctx.media().length > 0 ? 65 : 66);
  }
}, dependencies: [
  CommonModule,
  TranslatePipe,
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
  MediaDurationPipe,
  MatProgressSpinnerModule,
  MatProgressSpinner
], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */"] });
var SignagePlaylistMediaListComponent = _SignagePlaylistMediaListComponent;
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
                    [cdkDropListConnectedTo]="playlist_ids"
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
      CommonModule,
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistMediaListComponent, { className: "SignagePlaylistMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-media-list.component.ts", lineNumber: 378 });
})();

// apps/concierge/src/app/signage/signage-media.component.ts
var _c07 = () => [];
var _c15 = () => ({ playlist: "" });
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
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist_count", (tmp_1_0 = ctx_r2.playlists()) == null ? null : tmp_1_0.length);
  }
}
function SignageMediaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-playlist-media-list", 10);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist", ctx_r2.selected_playlist())("playlist_count", (tmp_2_0 = ctx_r2.playlists()) == null ? null : tmp_2_0.length);
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
var _SignageMediaComponent = class _SignageMediaComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.search = signal("");
    this.loading = this._state.loading;
    this._playlists_signal = toSignal(this._state.playlists, {
      initialValue: []
    });
    this.playlists = computed(() => {
      const search_value = this.search();
      const list = this._playlists_signal();
      return list.filter((_) => _.name.toLowerCase().includes(search_value.toLowerCase()));
    });
    this.selected_playlist = signal("");
    this.show_dropzone = signal(false);
    this._route_query = toSignal(this._route.queryParamMap);
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
    effect(() => {
      const params = this._route_query();
      if (params?.has("playlist")) {
        this.selected_playlist.set(params.get("playlist"));
      }
    });
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
    const media_list = await cl(playlist.id).toPromise();
    const new_media_list = [...media_list.items, media.id];
    await this._state.updatePlaylistMedia(playlist.id, new_media_list);
  }
};
_SignageMediaComponent.\u0275fac = function SignageMediaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaComponent)();
};
_SignageMediaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaComponent, selectors: [["signage-media"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 22, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-2", "overflow-visible"], ["sidebar", "", 1, "border-base-300", "flex", "h-full", "w-64", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "bg-base-200", "rounded-lg", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-12", "w-full", "items-center", "rounded-xl", "px-6", 3, "routerLink", "queryParams"], [1, "border-base-300", "bg-base-300", "-mx-2", "w-[calc(100%+1rem)]"], [1, "border-base-300", "bg-base-200", "relative", "h-full", "w-1/2", "flex-1", "overflow-hidden", "rounded-lg", "border", "shadow-sm", 3, "dragover", "dragenter", "drop"], [1, "h-full", "w-full", "overflow-auto"], [3, "playlist_count"], [3, "playlist", "playlist_count"], [1, "absolute", "inset-0"], ["matRipple", "", "cdkDropList", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "border", "px-6", 3, "bg-secondary!", "text-secondary-content", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], ["matRipple", "", "cdkDropList", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "flex", "h-12", "min-h-12", "w-full", "items-center", "rounded-3xl", "border", "px-6", 3, "cdkDropListDropped", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], [1, "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["btn", "", "matRipple", "", 1, "inverse"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "w-full", "items-center", "justify-center"], [1, "text-2xl"], [1, "mr-4", "ml-2"], [1, "absolute", "inset-0", 3, "dragleave", "drop"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60"], [1, "border-base-300", "text-base-100", "absolute", "inset-4", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-2xl", "border-4", "border-dashed"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function SignageMediaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "input", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function SignageMediaComponent_Template_input_ngModelChange_6_listener($event) {
      return ctx.search.set($event);
    });
    \u0275\u0275elementEnd()();
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
    let tmp_8_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 14, "APP.CONCIERGE.SIGNAGE_PLAYLISTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 16, "COMMON.SEARCH"))("ngModel", ctx.search());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary!", !ctx.selected_playlist())("text-secondary-content", !ctx.selected_playlist());
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(20, _c07))("queryParams", \u0275\u0275pureFunction0(21, _c15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 18, "APP.CONCIERGE.SIGNAGE_MEDIA_ALL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_8_0 = ctx.playlists()) == null ? null : tmp_8_0.length) > 0 ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.selected_playlist() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selected_playlist() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.show_dropzone() ? 18 : -1);
  }
}, dependencies: [
  CommonModule,
  MatFormFieldModule,
  MatFormField,
  MatInputModule,
  MatInput,
  IconComponent,
  RouterModule,
  RouterLink,
  DragDropModule,
  CdkDropList,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  SignageMediaListComponent,
  SignagePlaylistMediaListComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n[_nghost-%COMP%] {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */"] });
var SignageMediaComponent = _SignageMediaComponent;
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
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
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
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaComponent, { className: "SignageMediaComponent", filePath: "apps/concierge/src/app/signage/signage-media.component.ts", lineNumber: 192 });
})();

// apps/concierge/src/app/signage/signage-zones.component.ts
var _c08 = () => [];
var _c16 = (a0) => ({ zone: a0 });
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
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected_trigger() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger() === (trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c08))("queryParams", \u0275\u0275pureFunction2(8, _c24, zone_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger", " ");
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
    let tmp_16_0;
    const zone_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-secondary!", ctx_r2.selected() === zone_r2.id)("text-secondary-content", ctx_r2.selected() === zone_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c08))("queryParams", \u0275\u0275pureFunction1(9, _c16, zone_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r2.display_name || zone_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx_r2.active_zone()) == null ? null : tmp_16_0.id) === zone_r2.id && !ctx_r2.switching() ? 2 : -1);
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
var _SignageZonesComponent = class _SignageZonesComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this._route = inject(ActivatedRoute);
    this.adding = signal(false);
    this.switching = signal(false);
    this.search = signal("");
    this.loading = this._state.loading;
    this._state_zones = toSignal(this._state.zones, {
      initialValue: []
    });
    this.zones = computed(() => {
      const search_value = this.search().toLowerCase();
      const list = this._state_zones();
      return list.filter((_) => _.name.toLowerCase().includes(search_value));
    });
    this.selected = signal("");
    this.selected_trigger = signal("");
    this.active_zone = computed(() => {
      const zones = this.zones();
      const id = this.selected();
      return zones.find((item) => item.id === id);
    });
    this._triggers = signal([]);
    this.triggers = this._triggers.asReadonly();
    this.active_trigger = computed(() => {
      const list = this.triggers();
      const id = this.selected_trigger();
      return list.find((item) => item.id === id);
    });
    this._state_playlists = toSignal(this._state.playlists, {
      initialValue: []
    });
    this._state_has_changed = toSignal(this._state.has_changed, {
      initialValue: 0
    });
    this.playlists = computed(() => {
      const zone = this.active_zone();
      const trigger = this.active_trigger();
      const playlists = this._state_playlists();
      this._state_has_changed();
      return playlists.filter((_) => !(trigger || zone)?.playlists.find((id) => _.id === id));
    });
    const queryParams = toSignal(this._route.queryParamMap);
    effect(() => {
      const params = queryParams();
      if (!params)
        return;
      this.switching.set(params.get("zone") !== this.selected());
      this.selected.set(params.get("zone") || "");
      this.selected_trigger.set(params.get("trigger") || "");
    });
    effect(() => {
      const id = this.selected();
      if (!id) {
        this._triggers.set([]);
        return;
      }
      Va(id).pipe(map((_) => _.data), tap((_) => setTimeout(() => this.switching.set(false), 100))).subscribe((data) => this._triggers.set(data));
    });
  }
  async addPlaylist(playlist) {
    const zone = this.active_zone();
    const trigger = this.active_trigger();
    const item = trigger || zone;
    const playlists = [...item.playlists, playlist.id];
    const method = trigger ? $a : Wa;
    await method(item.id, { playlists, version: zone.version }, "patch").toPromise();
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_ADDED"));
    this._state.changed();
    this.adding.set(false);
  }
  async removePlaylist(playlist) {
    const zone = this.active_zone();
    const trigger = this.active_trigger();
    const item = trigger || zone;
    const playlists = item.playlists.filter((id) => playlist.id !== id);
    const method = trigger ? $a : Wa;
    await method(item.id, { playlists, version: zone.version }, "patch").toPromise();
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVE" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REMOVE"));
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
    const method = trigger ? $a : Wa;
    await method(item.id, { playlists, version: zone.version }, "patch").toPromise().catch((e) => {
      item.playlists = old_playlist;
      this._state.changed();
      throw e;
    });
    notifySuccess(i18n(trigger ? "APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER" : "APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REORDER"));
    this._state.changed();
  }
};
_SignageZonesComponent.\u0275fac = function SignageZonesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageZonesComponent)();
};
_SignageZonesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageZonesComponent, selectors: [["signage-zones"]], decls: 14, vars: 10, consts: [[1, "relative", "flex", "h-full", "w-full", "space-x-2", "overflow-visible"], ["sidebar", "", 1, "border-base-300", "flex", "h-full", "w-64", "flex-col", "space-y-2", "overflow-auto", "rounded-xl", "border", "p-2"], [1, "bg-base-200", "rounded-lg", "p-2", "text-center", "text-xl", "font-medium"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "space-y-2", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "opacity-30"], [1, "border-base-300", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "flex", "flex-1", "flex-col", 3, "item", "name"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list"], ["matRipple", "", 1, "border-base-100", "even:border-base-200", "even:bg-base-200", "hover:border-info", "z-10", "flex", "h-12", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "border", "px-6", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "flex", "items-center", "space-x-2"], [1, "w-6"], [1, "border-base-300", "absolute", "top-1/2", "left-6", "h-16", "w-4", "-translate-y-full", "border-b-2", "border-l-2"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-12", "w-full", "items-center", "truncate", "rounded-3xl", "px-6", 3, "routerLink", "queryParams"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-1", "flex-col", 3, "add", "remove", "ondrop", "item", "name"], [3, "selected", "close", "item_list"]], template: function SignageZonesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 3)(6, "input", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function SignageZonesComponent_Template_input_ngModelChange_6_listener($event) {
      return ctx.search.set($event);
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "COMMON.SEARCH"))("ngModel", ctx.search());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.zones().length > 0 ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.active_zone() ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.adding() ? 13 : -1);
  }
}, dependencies: [
  TranslatePipe,
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
  CommonModule,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var SignageZonesComponent = _SignageZonesComponent;
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
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
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
      CommonModule,
      FormsModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageZonesComponent, { className: "SignageZonesComponent", filePath: "apps/concierge/src/app/signage/signage-zones.component.ts", lineNumber: 166 });
})();

// apps/concierge/src/app/signage/signage.component.ts
var _c09 = ["app-new-staff", ""];
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
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275pipe(1, "lowercase");
    \u0275\u0275listener("click", function SignageComponent_For_13_Template_a_click_0_listener() {
      const link_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_link.set(link_r4.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/signage/" + \u0275\u0275pipeBind1(1, 3, link_r4.id))("active", ctx_r1.active_link() == link_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r4.name, " ");
  }
}
var _SignageComponent = class _SignageComponent {
  constructor() {
    this._state = inject(SignageStateService);
    this._router = inject(Router);
    this.loading = this._state.loading;
    this.links = signal([
      { id: "Media", name: i18n("APP.CONCIERGE.SIGNAGE_MEDIA") },
      { id: "Displays", name: i18n("APP.CONCIERGE.SIGNAGE_DISPLAYS") },
      { id: "Zones", name: i18n("APP.CONCIERGE.SIGNAGE_ZONES") }
    ]);
    this.active_link = signal(this.links()[0]?.id);
    this.hide_sidebar = settingSignal("hide_sidebar", false);
    this.previewFile = (event) => this._state.previewFileFromInput(event);
    const current_url = this._router.url;
    const matching_link = this.links().find((_) => current_url.includes(_.id.toLowerCase()));
    if (matching_link) {
      this.active_link.set(matching_link.id);
    }
    effect(() => {
      this._router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const link = this.links().find((_) => event.url.includes(_.id.toLowerCase()));
          if (link) {
            this.active_link.set(link.id);
          }
        }
      });
    });
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
};
_SignageComponent.\u0275fac = function SignageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageComponent)();
};
_SignageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageComponent, selectors: [["", "app-new-staff", ""]], attrs: _c09, decls: 17, vars: 6, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "h-20", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 1, "w-40"], [1, "px-8"], [1, "bg-base-200", "overflow-hidden", "rounded-sm"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "h-1/2", "flex-1", "overflow-auto", "px-8", "py-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["mat-tab-link", "", 3, "click", "routerLink", "active"]], template: function SignageComponent_Template(rf, ctx) {
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
    const tabPanel_r5 = \u0275\u0275reference(15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.hide_sidebar() ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.CONCIERGE.SIGNAGE_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.active_link() === "Media" || ctx.active_link() === "Displays" ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("tabPanel", tabPanel_r5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.links());
  }
}, dependencies: [
  CommonModule,
  LowerCasePipe,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  MatTabsModule,
  MatTabNav,
  MatTabNavPanel,
  MatTabLink,
  RouterModule,
  RouterOutlet,
  RouterLink
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=signage.component.css.map */"] });
var SignageComponent = _SignageComponent;
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
                                    (click)="active_link.set(link.id)"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageComponent, { className: "SignageComponent", filePath: "apps/concierge/src/app/signage/signage.component.ts", lineNumber: 93 });
})();

// apps/concierge/src/app/signage/signage.module.ts
var ROUTES = [
  {
    path: "",
    component: SignageComponent,
    children: [
      { path: "", redirectTo: "media", pathMatch: "full" },
      { path: "media", component: SignageMediaComponent },
      { path: "displays", component: SignageDisplaysComponent },
      { path: "zones", component: SignageZonesComponent },
      { path: "*", redirectTo: "media", pathMatch: "full" }
    ]
  }
];
var _SignageModule = class _SignageModule {
};
_SignageModule.\u0275fac = function SignageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageModule)();
};
_SignageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignageModule });
_SignageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SignageComponent,
  SignageMediaComponent,
  SignageDisplaysComponent,
  SignageZonesComponent,
  RouterModule.forChild(ROUTES)
] });
var SignageModule = _SignageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        SignageComponent,
        SignageMediaComponent,
        SignageDisplaysComponent,
        SignageZonesComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  SignageModule
};
//# sourceMappingURL=signage.module-NKOQHCQ4.js.map
