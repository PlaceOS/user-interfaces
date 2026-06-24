import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-C6TYXUL4.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-HVG7NAGA.js";
import {
  AuthenticatedImageDirective,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  IconComponent,
  Input,
  MatCheckbox,
  MatCheckboxModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  MediaDurationPipe,
  NgControlStatus,
  NgModel,
  RouterLink,
  SignageService,
  TranslatePipe,
  computed,
  effect,
  i18n,
  inject,
  input,
  notifyError,
  playlistMediaThumbnailUrl,
  setClassMetadata,
  signal,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HFNBY3CF.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/media/media-list-header.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function MediaListHeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item_count() + " of " + \u0275\u0275pipeBind2(1, 1, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(4, _c0, ctx_r0.total_count())), " ");
  }
}
function MediaListHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(4, _c0, ctx_r0.total_count())), " ");
  }
}
function MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plugin_r4 = ctx.$implicit;
    \u0275\u0275property("value", plugin_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plugin_r4.name, " ");
  }
}
function MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-select", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selected_plugin, $event) || (ctx_r0.selected_plugin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_1_For_5_Template, 2, 2, "mat-option", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addFromPlugin());
    });
    \u0275\u0275elementStart(7, "icon", 19);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selected_plugin);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "SIGNAGE_MANAGER.SELECT_PLUGIN"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 7, "SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.available_plugins());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.selected_plugin());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "COMMON.ADD"));
  }
}
function MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_PLUGINS"), " ");
  }
}
function MediaListHeaderComponent_Conditional_13_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_1_Template, 12, 11)(2, MediaListHeaderComponent_Conditional_13_ng_template_5_Conditional_2_Template, 3, 3, "p", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.available_plugins().length ? 1 : 2);
  }
}
function MediaListHeaderComponent_Conditional_13_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-form-field", 15)(2, "input", 9);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MediaListHeaderComponent_Conditional_13_ng_template_12_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.link, $event) || (ctx_r0.link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_13_ng_template_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFromLink());
    });
    \u0275\u0275elementStart(6, "icon", 19);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 4, "COMMON.URL"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.link);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.MEDIA_URL_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "COMMON.ADD"));
  }
}
function MediaListHeaderComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "extension");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, MediaListHeaderComponent_Conditional_13_ng_template_5_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, MediaListHeaderComponent_Conditional_13_ng_template_12_Template, 11, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const upload_input_r6 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(upload_input_r6.click());
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 12, 2);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("change", function MediaListHeaderComponent_Conditional_13_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.previewFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const add_plugin_template_r7 = \u0275\u0275reference(6);
    const add_link_template_r8 = \u0275\u0275reference(13);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("content", add_plugin_template_r7)("matTooltip", \u0275\u0275pipeBind1(1, 10, "SIGNAGE_MANAGER.ADD_PLUGIN"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 12, "SIGNAGE_MANAGER.ADD_PLUGIN_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275property("content", add_link_template_r8)("matTooltip", \u0275\u0275pipeBind1(8, 14, "SIGNAGE_MANAGER.ADD_FROM_LINK"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 16, "SIGNAGE_MANAGER.ADD_FROM_LINK_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 18, "SIGNAGE_MANAGER.UPLOAD_MEDIA"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 20, "SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("accept", ctx_r0.file_accept)("aria-label", \u0275\u0275pipeBind1(21, 22, "SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA"));
  }
}
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
var MediaListHeaderComponent = class _MediaListHeaderComponent {
  constructor() {
    this._service = inject(SignageService);
    this._media = this._service.filtered_media;
    this._all_media = this._service.media;
    this._plugins = this._service.plugins;
    this.link = signal(
      "",
      ...ngDevMode ? [{ debugName: "link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_plugin = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_plugin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_plugins = computed(
      () => this._plugins(),
      ...ngDevMode ? [{ debugName: "available_plugins" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_count = computed(
      () => this._media().length,
      ...ngDevMode ? [{ debugName: "item_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total_count = computed(
      () => this._all_media().length,
      ...ngDevMode ? [{ debugName: "total_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._service.search_term;
    this.file_accept = this._service.media_upload_accept;
    this.can_create = this._service.can_create;
    this.previewFile = (event) => this._service.previewFileFromInput(event);
  }
  async addFromLink() {
    const link = this.link().trim();
    if (!link)
      return;
    const is_valid = isValidUrl(link);
    if (!is_valid) {
      notifyError(i18n("SIGNAGE_MANAGER.URL_INVALID"));
      return;
    }
    await this._service.addMediaFromLink(link);
    this.link.set("");
  }
  async addFromPlugin() {
    const plugin = this.selected_plugin();
    if (!plugin)
      return;
    await this._service.addMediaFromPlugin(plugin);
    this.selected_plugin.set(null);
  }
  static {
    this.\u0275fac = function MediaListHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaListHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaListHeaderComponent, selectors: [["media-list-header"]], decls: 14, vars: 12, consts: [["add_plugin_template", ""], ["add_link_template", ""], ["upload_input", ""], [1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript", "white", "order-last", "w-full", "sm:order-none", "sm:flex-1"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "type", "button", "matRipple", "", "customTooltip", "", "matTooltipPosition", "left", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-lg", 3, "content", "matTooltip"], ["icon", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-lg", 3, "click", "matTooltip"], ["type", "file", "multiple", "", 1, "sr-only", 3, "change"], [1, "border-base-300", "bg-base-100", "my-2", "flex", "w-[20rem]", "flex-col", "space-y-4", "rounded-lg", "border", "p-4", "shadow-sm"], [1, "text-base-content/60", "m-0", "text-sm"], ["appearance", "outline", 1, "no-subscript"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "type", "button", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "mr-2", "text-2xl"], ["btn", "", "type", "button", "matRipple", "", 1, "w-full", 3, "click"]], template: function MediaListHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3", 5);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275conditionalCreate(6, MediaListHeaderComponent_Conditional_6_Template, 2, 6)(7, MediaListHeaderComponent_Conditional_7_Template, 2, 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementStart(9, "mat-form-field", 8)(10, "input", 9);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275listener("ngModelChange", function MediaListHeaderComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, MediaListHeaderComponent_Conditional_13_Template, 22, 24);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.MEDIA_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.search() ? 6 : 7);
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 8, "SIGNAGE_MANAGER.MEDIA_SEARCH"))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 10, "SIGNAGE_MANAGER.SEARCH_MEDIA_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.can_create() ? 13 : -1);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      CustomTooltipComponent,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaListHeaderComponent, [{
    type: Component,
    args: [{
      selector: "media-list-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.MEDIA_TITLE' | translate }}
                </h3>
                <div class="text-sm opacity-60">
                    @if (search()) {
                        {{
                            item_count() +
                                ' of ' +
                                ('COMMON.ITEM_COUNT'
                                    | translate: { count: total_count() })
                        }}
                    } @else {
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate: { count: total_count() }
                        }}
                    }
                </div>
            </div>
            <div class="w-px flex-1"></div>
            <mat-form-field
                appearance="outline"
                class="no-subscript white order-last w-full sm:order-none sm:flex-1"
            >
                <input
                    matInput
                    [placeholder]="'SIGNAGE_MANAGER.MEDIA_SEARCH' | translate"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_MEDIA_ARIA' | translate
                    "
                />
            </mat-form-field>
            @if (can_create()) {
                <button
                    icon
                    type="button"
                    matRipple
                    customTooltip
                    [content]="add_plugin_template"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                    [matTooltip]="'SIGNAGE_MANAGER.ADD_PLUGIN' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_PLUGIN_ARIA' | translate
                    "
                >
                    <icon>extension</icon>
                </button>
                <ng-template #add_plugin_template>
                    <div
                        class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                    >
                        @if (available_plugins().length) {
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    [(ngModel)]="selected_plugin"
                                    [placeholder]="
                                        'SIGNAGE_MANAGER.SELECT_PLUGIN'
                                            | translate
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA'
                                            | translate
                                    "
                                >
                                    @for (
                                        plugin of available_plugins();
                                        track plugin.id
                                    ) {
                                        <mat-option [value]="plugin">
                                            {{ plugin.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <button
                                btn
                                type="button"
                                matRipple
                                class="w-full"
                                [disabled]="!selected_plugin()"
                                (click)="addFromPlugin()"
                            >
                                <icon class="mr-2 text-2xl">add</icon>
                                <div>{{ 'COMMON.ADD' | translate }}</div>
                            </button>
                        } @else {
                            <p class="text-base-content/60 m-0 text-sm">
                                {{ 'SIGNAGE_MANAGER.NO_PLUGINS' | translate }}
                            </p>
                        }
                    </div>
                </ng-template>
                <button
                    icon
                    type="button"
                    matRipple
                    customTooltip
                    [content]="add_link_template"
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                    [matTooltip]="'SIGNAGE_MANAGER.ADD_FROM_LINK' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.ADD_FROM_LINK_ARIA' | translate
                    "
                >
                    <icon>link</icon>
                </button>
                <ng-template #add_link_template>
                    <div
                        class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                    >
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <input
                                matInput
                                [placeholder]="'COMMON.URL' | translate"
                                [(ngModel)]="link"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.MEDIA_URL_ARIA' | translate
                                "
                            />
                        </mat-form-field>
                        <button
                            btn
                            type="button"
                            matRipple
                            class="w-full"
                            (click)="addFromLink()"
                        >
                            <icon class="mr-2 text-2xl">add</icon>
                            <div>{{ 'COMMON.ADD' | translate }}</div>
                        </button>
                    </div>
                </ng-template>
                <button
                    icon
                    type="button"
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                    [matTooltip]="'SIGNAGE_MANAGER.UPLOAD_MEDIA' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA' | translate
                    "
                    (click)="upload_input.click()"
                >
                    <icon>add</icon>
                </button>
                <input
                    #upload_input
                    type="file"
                    multiple
                    class="sr-only"
                    [attr.accept]="file_accept"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA' | translate
                    "
                    (change)="previewFile($event)"
                />
            }
        </div>
    `,
      imports: [
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaListHeaderComponent, { className: "MediaListHeaderComponent", filePath: "apps/signage-manager/src/app/media/media-list-header.component.ts", lineNumber: 214 });
})();

// apps/signage-manager/src/app/media/media-list.component.ts
var _c02 = (a0) => ({ name: a0 });
var _c1 = (a0) => ({ count: a0 });
var _forTrack02 = ($index, $item) => $item.group.id;
var _forTrack1 = ($index, $item) => $item.id;
function MediaListComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_0_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectGroup(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", !ctx_r1.selected_group_id());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.ALL_GROUPS"), " ");
  }
}
function MediaListComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_0_For_4_Template_button_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectGroup(item_r4.group.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r1.selected_group_id() === item_r4.group.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.group.name, " ");
  }
}
function MediaListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275conditionalCreate(2, MediaListComponent_Conditional_0_Conditional_2_Template, 3, 4, "button", 6);
    \u0275\u0275repeaterCreate(3, MediaListComponent_Conditional_0_For_4_Template, 2, 2, "button", 6, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-tab-nav-panel", null, 0);
  }
  if (rf & 2) {
    const group_tabs_panel_r5 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("tabPanel", group_tabs_panel_r5);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "SIGNAGE_MANAGER.MEDIA_GROUPS_ARIA"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.is_sys_admin() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groups());
  }
}
function MediaListComponent_Conditional_1_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "icon", 28);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.EXPIRED"), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 29);
    \u0275\u0275text(2, "http");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 29);
    \u0275\u0275text(2, "extension");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
    \u0275\u0275elementStart(1, "div", 31)(2, "icon", 24);
    \u0275\u0275text(3, "expand_content");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const media_item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.thumbnailUrl(media_item_r8))("alt", media_item_r8.name + " thumbnail");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const media_item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(media_item_r8.media_type === "video" ? "video_library" : "image");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, media_item_r8.play_time / 1e3), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const media_item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editItem(media_item_r8));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "icon", 24);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "COMMON.EDIT"), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const media_item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToPlaylist(media_item_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "icon", 24);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "SIGNAGE_MANAGER.ADD_TO_PLAYLIST"), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const media_item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareItem(media_item_r8));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "icon", 24);
    \u0275\u0275text(3, "ios_share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "SIGNAGE_MANAGER.SHARE"), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const media_item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(media_item_r8));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "icon", 32);
    \u0275\u0275text(3, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "COMMON.REMOVE"), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r13, " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r1.remainingTags(media_item_r8).join(", "));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.remainingTagCount(media_item_r8), " ");
  }
}
function MediaListComponent_Conditional_1_For_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, MediaListComponent_Conditional_1_For_2_Conditional_35_For_2_Template, 2, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, MediaListComponent_Conditional_1_For_2_Conditional_35_Conditional_3_Template, 2, 2, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleTags(media_item_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.remainingTagCount(media_item_r8) > 0 ? 3 : -1);
  }
}
function MediaListComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, MediaListComponent_Conditional_1_For_2_div_1_Template, 3, 0, "div", 11);
    \u0275\u0275elementStart(2, "mat-checkbox", 12);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Template_mat_checkbox_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function MediaListComponent_Conditional_1_For_2_Template_mat_checkbox_change_2_listener() {
      const media_item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(media_item_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Template_button_click_4_listener() {
      const media_item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_item_r8));
    });
    \u0275\u0275conditionalCreate(6, MediaListComponent_Conditional_1_For_2_Conditional_6_Template, 3, 3, "div", 14);
    \u0275\u0275conditionalCreate(7, MediaListComponent_Conditional_1_For_2_Conditional_7_Template, 3, 0, "div", 15)(8, MediaListComponent_Conditional_1_For_2_Conditional_8_Template, 3, 0, "div", 15)(9, MediaListComponent_Conditional_1_For_2_Conditional_9_Template, 4, 2)(10, MediaListComponent_Conditional_1_For_2_Conditional_10_Template, 3, 1, "div", 15);
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, MediaListComponent_Conditional_1_For_2_Conditional_14_Template, 3, 3, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "button", 19);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Template_button_click_16_listener() {
      const media_item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(media_item_r8.id));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 20);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "icon");
    \u0275\u0275text(21, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-menu", null, 1);
    \u0275\u0275conditionalCreate(24, MediaListComponent_Conditional_1_For_2_Conditional_24_Template, 7, 3, "button", 21);
    \u0275\u0275conditionalCreate(25, MediaListComponent_Conditional_1_For_2_Conditional_25_Template, 7, 3, "button", 21);
    \u0275\u0275conditionalCreate(26, MediaListComponent_Conditional_1_For_2_Conditional_26_Template, 7, 3, "button", 21);
    \u0275\u0275elementStart(27, "button", 22);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_For_2_Template_button_click_27_listener() {
      const media_item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_item_r8));
    });
    \u0275\u0275elementStart(28, "div", 23)(29, "icon", 24);
    \u0275\u0275text(30, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 25);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, MediaListComponent_Conditional_1_For_2_Conditional_34_Template, 7, 3, "button", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, MediaListComponent_Conditional_1_For_2_Conditional_35_Template, 4, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r8 = ctx.$implicit;
    const menu_r14 = \u0275\u0275reference(23);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-60", ctx_r1.isExpired(media_item_r8))("ring-2", ctx_r1.isSelected(media_item_r8.id))("ring-primary", ctx_r1.isSelected(media_item_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(media_item_r8.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 39, "SIGNAGE_MANAGER.SELECT_MEDIA", \u0275\u0275pureFunction1(51, _c02, media_item_r8.name)));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 42, "SIGNAGE_MANAGER.PREVIEW_MEDIA", \u0275\u0275pureFunction1(53, _c02, media_item_r8.name)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpired(media_item_r8) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_item_r8.media_type === "webpage" && !ctx_r1.thumbnailUrl(media_item_r8) ? 7 : media_item_r8.media_type === "plugin" && !ctx_r1.thumbnailUrl(media_item_r8) ? 8 : ctx_r1.thumbnailUrl(media_item_r8) ? 9 : 10);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-info", media_item_r8.media_type === "video")("text-info-content", media_item_r8.media_type === "video")("bg-warning", media_item_r8.media_type === "image")("text-warning-content", media_item_r8.media_type === "image")("bg-success", media_item_r8.media_type === "webpage")("text-success-content", media_item_r8.media_type === "webpage")("bg-error", media_item_r8.media_type === "plugin")("text-error-content", media_item_r8.media_type === "plugin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 45, media_item_r8.media_type === "image" ? "COMMON.IMAGE" : media_item_r8.media_type === "webpage" ? "COMMON.WEBPAGE" : media_item_r8.media_type === "plugin" ? "SIGNAGE_MANAGER.TYPE_PLUGIN" : "COMMON.VIDEO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(media_item_r8.play_time ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_item_r8.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_item_r8.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r14);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 47, "SIGNAGE_MANAGER.MEDIA_ACTIONS"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.can_update() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sidebar_hidden() && ctx_r1.can_update() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 26 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 49, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_delete() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_item_r8.tags?.length ? 35 : -1);
  }
}
function MediaListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("cdkDropListDropped", function MediaListComponent_Conditional_1_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275repeaterCreate(1, MediaListComponent_Conditional_1_For_2_Template, 36, 55, "div", 9, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", ctx_r1.media())("cdkDropListConnectedTo", ctx_r1.playlist_ids());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.media());
  }
}
function MediaListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 35);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_MEDIA"));
  }
}
function MediaListComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_3_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.DELETE"));
  }
}
function MediaListComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_3_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSelectedToPlaylist());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "playlist_add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.ADD_TO_PLAYLIST"));
  }
}
function MediaListComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_3_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareSelected());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "ios_share");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.SHARE"));
  }
}
function MediaListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "div", 36)(2, "button", 37);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 39);
    \u0275\u0275conditionalCreate(11, MediaListComponent_Conditional_3_Conditional_11_Template, 4, 3, "button", 40);
    \u0275\u0275conditionalCreate(12, MediaListComponent_Conditional_3_Conditional_12_Template, 4, 3, "button", 41);
    \u0275\u0275conditionalCreate(13, MediaListComponent_Conditional_3_Conditional_13_Template, 4, 3, "button", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 6, "SIGNAGE_MANAGER.CLEAR_SELECTED"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "SIGNAGE_MANAGER.CLEAR_SELECTED"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 10, "COMMON.SELECTED_COUNT", \u0275\u0275pureFunction1(13, _c1, ctx_r1.selected_count())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.can_delete() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 13 : -1);
  }
}
var MediaListComponent = class _MediaListComponent {
  constructor() {
    this._service = inject(SignageService);
    this._destroy = inject(DestroyRef);
    this.playlist_count = input(
      0,
      ...ngDevMode ? [{ debugName: "playlist_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sidebar_hidden = signal(
      false,
      ...ngDevMode ? [{ debugName: "sidebar_hidden" }] : (
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
    this.selected_ids = signal(
      /* @__PURE__ */ new Set(),
      ...ngDevMode ? [{ debugName: "selected_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_media = computed(
      () => {
        const selected_ids = this.selected_ids();
        return this.media().filter((item) => selected_ids.has(item.id));
      },
      ...ngDevMode ? [{ debugName: "selected_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_count = computed(
      () => this.selected_media().length,
      ...ngDevMode ? [{ debugName: "selected_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mql = window.matchMedia("(max-width: 767px)");
    this._onMediaChange = (e) => this.sidebar_hidden.set(e.matches);
    this.media = this._service.filtered_media;
    this.groups = this._service.signage_groups;
    this.selected_group_id = this._service.selected_group_id;
    this.is_sys_admin = this._service.is_sys_admin;
    this.can_switch_groups = computed(
      () => this.is_sys_admin() ? this.groups().length > 0 : this.groups().length > 1,
      ...ngDevMode ? [{ debugName: "can_switch_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.previewFile = (event) => this._service.previewFileFromInput(event);
    this.previewItem = (item) => this._service.previewMedia(item);
    this.editItem = (item) => this._service.editMedia(item);
    this.removeItem = (item) => this._service.removeMedia(item);
    this.addToPlaylist = (media_id) => this._service.openPlaylistSelectModal(media_id);
    this.shareItem = (item) => this._service.shareMedia(item);
    this.can_update = this._service.can_update;
    this.can_delete = this._service.can_delete;
    this.can_share = this._service.can_share;
  }
  ngOnInit() {
    this._onMediaChange(this._mql);
    this._mql.addEventListener("change", this._onMediaChange);
    this._destroy.onDestroy(() => this._mql.removeEventListener("change", this._onMediaChange));
  }
  selectGroup(group_id) {
    this.clearSelection();
    this._service.setSelectedGroup(group_id);
  }
  isSelected(id) {
    return this.selected_ids().has(id);
  }
  toggleSelection(id) {
    this.selected_ids.update((ids) => {
      const next_ids = new Set(ids);
      next_ids.has(id) ? next_ids.delete(id) : next_ids.add(id);
      return next_ids;
    });
  }
  clearSelection() {
    this.selected_ids.set(/* @__PURE__ */ new Set());
  }
  thumbnailUrl(item) {
    return playlistMediaThumbnailUrl(item);
  }
  isExpired(item) {
    return !!item.valid_until && item.valid_until * 1e3 < Date.now();
  }
  visibleTags(item) {
    return (item.tags || []).slice(0, 2);
  }
  remainingTags(item) {
    return (item.tags || []).slice(2);
  }
  remainingTagCount(item) {
    return this.remainingTags(item).length;
  }
  async deleteSelected() {
    if (await this._service.removeMediaItems(this.selected_media())) {
      this.clearSelection();
    }
  }
  async addSelectedToPlaylist() {
    const media_ids = this.selected_media().map((item) => item.id);
    if (await this._service.openBulkPlaylistSelectModal(media_ids)) {
      this.clearSelection();
    }
  }
  async shareSelected() {
    if (await this._service.shareMediaItems(this.selected_media())) {
      this.clearSelection();
    }
  }
  drop(_event) {
  }
  static {
    this.\u0275fac = function MediaListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaListComponent, selectors: [["media-list"]], inputs: { playlist_count: [1, "playlist_count"] }, decls: 4, vars: 3, consts: [["group_tabs_panel", ""], ["menu", "matMenu"], ["cdkDropList", "", "id", "media-list", "role", "list", 1, "grid", "w-full", "grid-cols-1", "gap-4", "p-4", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "text-base-content/70", "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["aria-live", "polite", 1, "bg-base-100", "border-base-300", "sticky", "bottom-2", "z-20", "mx-2", "mt-2", "flex", "items-center", "justify-between", "gap-2", "rounded-xl", "border", "p-2", "shadow-lg"], ["mat-tab-nav-bar", "", 1, "bg-base-100/95", "border-base-300", "sticky", "top-2", "z-30", "mx-2", "rounded-xl", "border", 3, "tabPanel"], ["mat-tab-link", "", "type", "button", 3, "active"], ["mat-tab-link", "", "type", "button", 3, "click", "active"], ["cdkDropList", "", "id", "media-list", "role", "list", 1, "grid", "w-full", "grid-cols-1", "gap-4", "p-4", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "hover:border-info", "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-3", "hover:opacity-80", "hover:shadow-xl", 3, "opacity-60", "ring-2", "ring-primary"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "hover:border-info", "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-3", "hover:opacity-80", "hover:shadow-xl"], ["class", "border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30", 4, "cdkDragPlaceholder"], [1, "absolute", "top-4", "right-4", "z-20", "rounded", 3, "click", "change", "checked"], ["preview", "", "type", "button", "matRipple", "", 1, "bg-base-200", "relative", "h-36", "w-full", "overflow-hidden", "rounded-lg", 3, "click"], [1, "bg-error", "text-error-content", "absolute", "inset-x-0", "top-1/2", "z-10", "-translate-y-1/2", "py-1", "text-center", "text-xs", "font-bold", "tracking-wide"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "absolute", "top-1", "left-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "bg-info", "text-info-content", "absolute", "right-1", "bottom-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "relative", "top-1", "flex", "w-full", "items-center", "justify-between"], [1, "text-base-content", "w-1/2", "flex-1", "truncate", "text-left", 3, "click", "matTooltip"], ["icon", "", "type", "button", "matRipple", "", 3, "matMenuTriggerFor"], ["type", "button", "mat-menu-item", ""], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "mt-3", "flex", "min-h-6", "w-full", "items-center", "gap-1", "overflow-hidden"], [1, "border-base-400", "bg-base-300", "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "opacity-30"], [1, "text-base-100", "text-2xl"], [1, "text-8xl", "opacity-30"], ["auth", "", 1, "absolute", "-inset-px", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-lg", "object-contain", "object-center", 3, "source", "alt"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "text-error", "text-2xl"], [1, "bg-base-200", "text-base-content/80", "max-w-[45%]", "truncate", "rounded", "px-2", "py-1", "text-xs"], [1, "bg-base-300", "text-base-content/80", "rounded", "px-2", "py-1", "text-xs", 3, "matTooltip"], [1, "text-6xl"], [1, "flex", "items-center", "gap-3"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "rounded-xl", 3, "click", "matTooltip"], [1, "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function MediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MediaListComponent_Conditional_0_Template, 7, 5);
        \u0275\u0275conditionalCreate(1, MediaListComponent_Conditional_1_Template, 3, 2, "div", 2)(2, MediaListComponent_Conditional_2_Template, 6, 3, "div", 3);
        \u0275\u0275conditionalCreate(3, MediaListComponent_Conditional_3_Template, 14, 15, "footer", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.can_switch_groups() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.media().length > 0 ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_count() > 0 ? 3 : -1);
      }
    }, dependencies: [
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragPlaceholder,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTabsModule,
      MatTabNav,
      MatTabNavPanel,
      MatTabLink,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      AuthenticatedImageDirective,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n  .cdk-drag-preview {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=media-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaListComponent, [{
    type: Component,
    args: [{ selector: "media-list", template: `
        @if (can_switch_groups()) {
            <nav
                mat-tab-nav-bar
                class="bg-base-100/95 border-base-300 sticky top-2 z-30 mx-2 rounded-xl border"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.MEDIA_GROUPS_ARIA' | translate
                "
                [tabPanel]="group_tabs_panel"
            >
                @if (is_sys_admin()) {
                    <button
                        mat-tab-link
                        type="button"
                        [active]="!selected_group_id()"
                        (click)="selectGroup('')"
                    >
                        {{ 'SIGNAGE_MANAGER.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (item of groups(); track item.group.id) {
                    <button
                        mat-tab-link
                        type="button"
                        [active]="selected_group_id() === item.group.id"
                        (click)="selectGroup(item.group.id)"
                    >
                        {{ item.group.name }}
                    </button>
                }
            </nav>
            <mat-tab-nav-panel #group_tabs_panel />
        }
        @if (media().length > 0) {
            <div
                class="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                cdkDropList
                id="media-list"
                role="list"
                [cdkDropListData]="media()"
                [cdkDropListConnectedTo]="playlist_ids()"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media_item of media(); track media_item.id) {
                    <div
                        cdkDrag
                        role="listitem"
                        class="border-base-300 bg-base-100 hover:border-info relative flex flex-col items-center justify-center rounded-lg border p-3 hover:opacity-80 hover:shadow-xl"
                        [class.opacity-60]="isExpired(media_item)"
                        [class.ring-2]="isSelected(media_item.id)"
                        [class.ring-primary]="isSelected(media_item.id)"
                    >
                        <div
                            class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                            *cdkDragPlaceholder
                        >
                            <icon class="text-base-100 text-2xl">add</icon>
                        </div>
                        <mat-checkbox
                            class="absolute top-4 right-4 z-20 rounded"
                            [checked]="isSelected(media_item.id)"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_MEDIA'
                                    | translate: { name: media_item.name }
                            "
                            (click)="$event.stopPropagation()"
                            (change)="toggleSelection(media_item.id)"
                        />
                        <button
                            preview
                            type="button"
                            matRipple
                            (click)="previewItem(media_item)"
                            class="bg-base-200 relative h-36 w-full overflow-hidden rounded-lg"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.PREVIEW_MEDIA'
                                    | translate: { name: media_item.name }
                            "
                        >
                            @if (isExpired(media_item)) {
                                <div
                                    class="bg-error text-error-content absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 py-1 text-center text-xs font-bold tracking-wide"
                                >
                                    {{ 'SIGNAGE_MANAGER.EXPIRED' | translate }}
                                </div>
                            }
                            @if (
                                media_item.media_type === 'webpage' &&
                                !thumbnailUrl(media_item)
                            ) {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >http</icon
                                    >
                                </div>
                            } @else if (
                                media_item.media_type === 'plugin' &&
                                !thumbnailUrl(media_item)
                            ) {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >extension</icon
                                    >
                                </div>
                            } @else if (thumbnailUrl(media_item)) {
                                <img
                                    auth
                                    [source]="thumbnailUrl(media_item)"
                                    [alt]="media_item.name + ' thumbnail'"
                                    class="absolute -inset-px flex h-full w-full items-center justify-center rounded-lg object-contain object-center"
                                />
                                <div
                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <icon class="text-2xl">expand_content</icon>
                                </div>
                            } @else {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30">{{
                                        media_item.media_type === 'video'
                                            ? 'video_library'
                                            : 'image'
                                    }}</icon>
                                </div>
                            }

                            <div
                                class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="
                                    media_item.media_type === 'video'
                                "
                                [class.text-info-content]="
                                    media_item.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media_item.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media_item.media_type === 'image'
                                "
                                [class.bg-success]="
                                    media_item.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    media_item.media_type === 'webpage'
                                "
                                [class.bg-error]="
                                    media_item.media_type === 'plugin'
                                "
                                [class.text-error-content]="
                                    media_item.media_type === 'plugin'
                                "
                            >
                                {{
                                    (media_item.media_type === 'image'
                                        ? 'COMMON.IMAGE'
                                        : media_item.media_type === 'webpage'
                                          ? 'COMMON.WEBPAGE'
                                          : media_item.media_type === 'plugin'
                                            ? 'SIGNAGE_MANAGER.TYPE_PLUGIN'
                                            : 'COMMON.VIDEO'
                                    ) | translate
                                }}
                            </div>
                            @if (media_item.play_time) {
                                <div
                                    class="bg-info text-info-content absolute right-1 bottom-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                >
                                    {{
                                        media_item.play_time / 1000
                                            | mediaDuration
                                    }}
                                </div>
                            }
                        </button>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <button
                                class="text-base-content w-1/2 flex-1 truncate text-left"
                                [matTooltip]="media_item.name"
                                (click)="toggleSelection(media_item.id)"
                            >
                                {{ media_item.name }}
                            </button>
                            <button
                                icon
                                type="button"
                                matRipple
                                [matMenuTriggerFor]="menu"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.MEDIA_ACTIONS' | translate
                                "
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                @if (can_update()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="editItem(media_item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">edit</icon>
                                            <div class="pr-2">
                                                {{ 'COMMON.EDIT' | translate }}
                                            </div>
                                        </div>
                                    </button>
                                }
                                @if (sidebar_hidden() && can_update()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="addToPlaylist(media_item.id)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">add</icon>
                                            <div class="pr-2">
                                                {{
                                                    'SIGNAGE_MANAGER.ADD_TO_PLAYLIST'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                                @if (can_share()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="shareItem(media_item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl"
                                                >ios_share</icon
                                            >
                                            <div class="pr-2">
                                                {{
                                                    'SIGNAGE_MANAGER.SHARE'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                                <button
                                    type="button"
                                    mat-menu-item
                                    (click)="previewItem(media_item)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">
                                            {{ 'COMMON.PREVIEW' | translate }}
                                        </div>
                                    </div>
                                </button>
                                @if (can_delete()) {
                                    <button
                                        type="button"
                                        mat-menu-item
                                        (click)="removeItem(media_item)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-error text-2xl">
                                                delete
                                            </icon>
                                            <div class="pr-2">
                                                {{
                                                    'COMMON.REMOVE' | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                        </div>
                        @if (media_item.tags?.length) {
                            <div
                                class="mt-3 flex min-h-6 w-full items-center gap-1 overflow-hidden"
                            >
                                @for (
                                    tag of visibleTags(media_item);
                                    track tag
                                ) {
                                    <span
                                        class="bg-base-200 text-base-content/80 max-w-[45%] truncate rounded px-2 py-1 text-xs"
                                    >
                                        {{ tag }}
                                    </span>
                                }
                                @if (remainingTagCount(media_item) > 0) {
                                    <span
                                        class="bg-base-300 text-base-content/80 rounded px-2 py-1 text-xs"
                                        [matTooltip]="
                                            remainingTags(media_item).join(', ')
                                        "
                                    >
                                        +{{ remainingTagCount(media_item) }}
                                    </span>
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        } @else {
            <div
                class="text-base-content/70 mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>{{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}</p>
            </div>
        }
        @if (selected_count() > 0) {
            <footer
                class="bg-base-100 border-base-300 sticky bottom-2 z-20 mx-2 mt-2 flex items-center justify-between gap-2 rounded-xl border p-2 shadow-lg"
                aria-live="polite"
            >
                <div class="flex items-center gap-3">
                    <button
                        icon
                        matRipple
                        class="hover:bg-base-200 rounded-xl"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.CLEAR_SELECTED' | translate
                        "
                        [matTooltip]="
                            'SIGNAGE_MANAGER.CLEAR_SELECTED' | translate
                        "
                        (click)="clearSelection()"
                    >
                        <icon>close</icon>
                    </button>
                    <div class="font-medium">
                        {{
                            'COMMON.SELECTED_COUNT'
                                | translate: { count: selected_count() }
                        }}
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    @if (can_delete()) {
                        <button
                            icon
                            default
                            matRipple
                            error
                            (click)="deleteSelected()"
                            [matTooltip]="'COMMON.DELETE' | translate"
                        >
                            <icon>delete</icon>
                        </button>
                    }
                    @if (can_update()) {
                        <button
                            icon
                            default
                            matRipple
                            (click)="addSelectedToPlaylist()"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.ADD_TO_PLAYLIST' | translate
                            "
                        >
                            <icon>playlist_add</icon>
                        </button>
                    }
                    @if (can_share()) {
                        <button
                            icon
                            default
                            matRipple
                            (click)="shareSelected()"
                            [matTooltip]="'SIGNAGE_MANAGER.SHARE' | translate"
                        >
                            <icon>ios_share</icon>
                        </button>
                    }
                </div>
            </footer>
        }
    `, imports: [
      DragDropModule,
      MatCheckboxModule,
      MatRippleModule,
      MatMenuModule,
      MatTabsModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective,
      MediaDurationPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;10dcc9facf87b8d75511c5e27303f91f43b86c54c7ba8a51e597baef06da70e7;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/media/media-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n::ng-deep .cdk-drag-preview {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=media-list.component.css.map */\n"] }]
  }], null, { playlist_count: [{ type: Input, args: [{ isSignal: true, alias: "playlist_count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaListComponent, { className: "MediaListComponent", filePath: "apps/signage-manager/src/app/media/media-list.component.ts", lineNumber: 453 });
})();

// apps/signage-manager/src/app/media/playlist-sidebar.component.ts
var _c03 = (a0) => ["/playlists", a0];
var _c12 = (a0) => ({ name: a0 });
var _c2 = () => ["media-list"];
var _forTrack03 = ($index, $item) => $item.id;
function PlaylistSidebarComponent_Conditional_13_For_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const media_r4 = ctx.$implicit;
    const \u0275$index_31_r5 = ctx.$index;
    const \u0275$count_31_r6 = ctx.$count;
    \u0275\u0275styleProp("top", 0.3 - (\u0275$count_31_r6 - 1) * 0.125 + (\u0275$count_31_r6 - 1 - \u0275$index_31_r5) * 0.25 + "rem")("left", 0.3 - (\u0275$count_31_r6 - 1) * 0.125 + (\u0275$count_31_r6 - 1 - \u0275$index_31_r5) * 0.25 + "rem")("z-index", \u0275$index_31_r5);
    \u0275\u0275property("source", media_r4);
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistSidebarComponent_Conditional_13_For_1_Conditional_4_For_1_Template, 1, 7, "img", 21, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const playlist_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.playlist_thumbnail_media()[playlist_r2.id]);
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 23);
    \u0275\u0275text(2, " playlist_play ");
    \u0275\u0275elementEnd()();
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_EXPIRED"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PENDING"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r2.description, " ");
  }
}
function PlaylistSidebarComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275listener("cdkDropListDropped", function PlaylistSidebarComponent_Conditional_13_For_1_Template_div_cdkDropListDropped_2_listener($event) {
      const playlist_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDrop(playlist_r2, $event));
    });
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275conditionalCreate(4, PlaylistSidebarComponent_Conditional_13_For_1_Conditional_4_Template, 2, 0)(5, PlaylistSidebarComponent_Conditional_13_For_1_Conditional_5_Template, 3, 0, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14);
    \u0275\u0275conditionalCreate(10, PlaylistSidebarComponent_Conditional_13_For_1_Conditional_10_Template, 3, 3, "span", 15);
    \u0275\u0275conditionalCreate(11, PlaylistSidebarComponent_Conditional_13_For_1_Case_11_Template, 3, 3, "span", 16)(12, PlaylistSidebarComponent_Conditional_13_For_1_Case_12_Template, 3, 3, "span", 17)(13, PlaylistSidebarComponent_Conditional_13_For_1_Case_13_Template, 3, 3, "span", 18)(14, PlaylistSidebarComponent_Conditional_13_For_1_Case_14_Template, 3, 3, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, PlaylistSidebarComponent_Conditional_13_For_1_Conditional_15_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const playlist_r2 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c03, playlist_r2.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 10, "SIGNAGE_MANAGER.OPEN_PLAYLIST", \u0275\u0275pureFunction1(15, _c12, playlist_r2.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "playlist-" + $index_r7)("cdkDropListConnectedTo", \u0275\u0275pureFunction0(17, _c2))("cdkDropListData", playlist_r2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.playlist_thumbnail_media()[playlist_r2.id]?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", playlist_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!playlist_r2.enabled ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r2.getStatus(playlist_r2)) === "expired" ? 11 : tmp_19_0 === "pending" ? 12 : tmp_19_0 === "awaiting_review" ? 13 : tmp_19_0 === "awaiting_approval" ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(playlist_r2.description ? 15 : -1);
  }
}
function PlaylistSidebarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistSidebarComponent_Conditional_13_For_1_Template, 16, 18, "a", 8, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filtered_playlists());
  }
}
function PlaylistSidebarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 24);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SIGNAGE_MANAGER.NO_PLAYLISTS_SHORT"), " ");
  }
}
var PlaylistSidebarComponent = class _PlaylistSidebarComponent {
  constructor() {
    this._service = inject(SignageService);
    this._playlists = this._service.playlists;
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist_thumbnail_media = this._service.playlist_thumbnail_media;
    this.playlist_approval_status = this._service.playlist_approval_status;
    this.playlist_approval_requested_status = this._service.playlist_approval_requested_status;
    this.filtered_playlists = computed(
      () => {
        const term = this.search().toLowerCase();
        const list = this._playlists();
        if (!term)
          return list;
        return list.filter((p) => p.name.toLowerCase().includes(term));
      },
      ...ngDevMode ? [{ debugName: "filtered_playlists" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_playlist_thumbnails = effect(
      () => {
        this._service.queuePlaylistMeta(this.filtered_playlists());
      },
      ...ngDevMode ? [{ debugName: "_load_playlist_thumbnails" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async onDrop(playlist, event) {
    const media = event.previousContainer.data[event.previousIndex];
    if (!playlist?.id || !media?.id)
      return;
    await this._service.addMediaToPlaylist(playlist.id, media.id);
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
  static {
    this.\u0275fac = function PlaylistSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistSidebarComponent, selectors: [["playlist-sidebar"]], decls: 15, vars: 14, consts: [[1, "border-base-300", "bg-base-100", "rounded-ld", "m-2", "hidden", "h-[calc(100%-1rem)]", "w-72", "shrink-0", "flex-col", "rounded-lg", "border", "md:flex"], [1, "border-base-300", "border-b", "px-4", "py-3"], [1, "text-lg", "font-medium"], [1, "mb-2", "text-xs", "opacity-60"], ["appearance", "outline", 1, "no-subscript", "-mx-2", "w-[calc(100%+1rem)]"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex-1", "overflow-auto", "p-2"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "routerLink"], ["cdkDropList", "", "matRipple", "", 1, "border-base-300", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "transition-colors", 3, "cdkDropListDropped", "id", "cdkDropListConnectedTo", "cdkDropListData"], [1, "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md"], [1, "text-base-content/35", "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "flex", "flex-wrap", "gap-1", "text-[0.625rem]"], [1, "bg-base-200", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-base-300", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "text-base-content/70", "mt-0.5", "truncate", "text-xs"], ["auth", "", "alt", "", 1, "border-base-300", "bg-base-200", "absolute", "h-9", "w-9", "rounded-sm", "border", "object-cover", "shadow", 3, "source", "top", "left", "z-index"], ["auth", "", "alt", "", 1, "border-base-300", "bg-base-200", "absolute", "h-9", "w-9", "rounded-sm", "border", "object-cover", "shadow", 3, "source"], [1, "text-2xl"], [1, "text-4xl"], [1, "mt-2", "text-sm"]], template: function PlaylistSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "input", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275listener("ngModelChange", function PlaylistSidebarComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275conditionalCreate(13, PlaylistSidebarComponent_Conditional_13_Template, 2, 0)(14, PlaylistSidebarComponent_Conditional_14_Template, 6, 3, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.NAV_PLAYLISTS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "SIGNAGE_MANAGER.DRAG_MEDIA_HINT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 10, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 12, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.filtered_playlists()?.length ? 13 : 14);
      }
    }, dependencies: [
      DragDropModule,
      CdkDropList,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      AuthenticatedImageDirective,
      IconComponent,
      RouterLink,
      MatRippleModule,
      MatRipple,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%], \n.cdk-drop-list-receiving[_ngcontent-%COMP%] {\n  border-color: var(--color-primary) !important;\n  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent) !important;\n}\n/*# sourceMappingURL=playlist-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistSidebarComponent, [{
    type: Component,
    args: [{ selector: "playlist-sidebar", template: `
        <div
            class="border-base-300 bg-base-100 rounded-ld m-2 hidden h-[calc(100%-1rem)] w-72 shrink-0 flex-col rounded-lg border md:flex"
        >
            <div class="border-base-300 border-b px-4 py-3">
                <h4 class="text-lg font-medium">
                    {{ 'SIGNAGE_MANAGER.NAV_PLAYLISTS' | translate }}
                </h4>
                <p class="mb-2 text-xs opacity-60">
                    {{ 'SIGNAGE_MANAGER.DRAG_MEDIA_HINT' | translate }}
                </p>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript -mx-2 w-[calc(100%+1rem)]"
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
            <div class="flex-1 overflow-auto p-2">
                @if (filtered_playlists()?.length) {
                    @for (playlist of filtered_playlists(); track playlist.id) {
                        <a
                            [routerLink]="['/playlists', playlist.id]"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                    | translate: { name: playlist.name }
                            "
                        >
                            <div
                                cdkDropList
                                [id]="'playlist-' + $index"
                                [cdkDropListConnectedTo]="['media-list']"
                                [cdkDropListData]="playlist"
                                (cdkDropListDropped)="onDrop(playlist, $event)"
                                class="border-base-300 mb-2 flex items-center gap-3 rounded-lg border p-0.5 transition-colors"
                                matRipple
                            >
                                <div
                                    class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                                >
                                    @if (
                                        playlist_thumbnail_media()[playlist.id]
                                            ?.length
                                    ) {
                                        @for (
                                            media of playlist_thumbnail_media()[
                                                playlist.id
                                            ];
                                            track media;
                                            let i = $index;
                                            let len = $count
                                        ) {
                                            <img
                                                auth
                                                [source]="media"
                                                alt=""
                                                class="border-base-300 bg-base-200 absolute h-9 w-9 rounded-sm border object-cover shadow"
                                                [style.top]="
                                                    0.3 -
                                                    (len - 1) * 0.125 +
                                                    (len - 1 - i) * 0.25 +
                                                    'rem'
                                                "
                                                [style.left]="
                                                    0.3 -
                                                    (len - 1) * 0.125 +
                                                    (len - 1 - i) * 0.25 +
                                                    'rem'
                                                "
                                                [style.z-index]="i"
                                            />
                                        }
                                    } @else {
                                        <div
                                            class="text-base-content/35 flex h-full w-full items-center justify-center"
                                        >
                                            <icon class="text-2xl">
                                                playlist_play
                                            </icon>
                                        </div>
                                    }
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ playlist.name }}
                                    </div>
                                    <div
                                        class="flex flex-wrap gap-1 text-[0.625rem]"
                                    >
                                        @if (!playlist.enabled) {
                                            <span
                                                class="bg-base-200 shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                            >
                                                {{
                                                    'COMMON.DISABLED'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                        @switch (getStatus(playlist)) {
                                            @case ('expired') {
                                                <span
                                                    class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('pending') {
                                                <span
                                                    class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'COMMON.PENDING'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('awaiting_review') {
                                                <span
                                                    class="bg-base-300 shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('awaiting_approval') {
                                                <span
                                                    class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
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
                                            {{ playlist.description }}
                                        </div>
                                    }
                                </div>
                            </div>
                        </a>
                    }
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center p-8"
                    >
                        <icon class="text-4xl">playlist_play</icon>
                        <p class="mt-2 text-sm">
                            {{
                                'SIGNAGE_MANAGER.NO_PLAYLISTS_SHORT' | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      DragDropModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      AuthenticatedImageDirective,
      IconComponent,
      RouterLink,
      MatRippleModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;e2669eb1b5922b8b28c48c8c324de76906a4299d14ec550eb44187ae60bc18d2;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/media/playlist-sidebar.component.ts */\n:host {\n  display: contents;\n}\n.cdk-drop-list-dragging,\n.cdk-drop-list-receiving {\n  border-color: var(--color-primary) !important;\n  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent) !important;\n}\n/*# sourceMappingURL=playlist-sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistSidebarComponent, { className: "PlaylistSidebarComponent", filePath: "apps/signage-manager/src/app/media/playlist-sidebar.component.ts", lineNumber: 232 });
})();

// apps/signage-manager/src/app/media/media.component.ts
function MediaSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("dragenter", function MediaSectionComponent_Conditional_7_Template_div_dragenter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDragEnter($event));
    })("dragover", function MediaSectionComponent_Conditional_7_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDragOver($event));
    })("dragleave", function MediaSectionComponent_Conditional_7_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDragLeave($event));
    })("drop", function MediaSectionComponent_Conditional_7_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleDrop($event));
    });
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "icon", 11);
    \u0275\u0275text(4, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 12);
    \u0275\u0275text(7, " Drop media to upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9, " Images and supported video files ");
    \u0275\u0275elementEnd()()()();
  }
}
var MediaSectionComponent = class _MediaSectionComponent {
  constructor() {
    this._service = inject(SignageService);
    this._drag_counter = 0;
    this.playlists = this._service.playlists;
    this.show_dropzone = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_dropzone" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  handleDragEnter(event) {
    if (!this.hasDraggedFiles(event))
      return;
    event.preventDefault();
    this._drag_counter += 1;
    this.show_dropzone.set(true);
  }
  handleDragOver(event) {
    if (!this.hasDraggedFiles(event))
      return;
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
    }
    this.show_dropzone.set(true);
  }
  handleDragLeave(event) {
    if (!this.show_dropzone() || !this.hasDraggedFiles(event))
      return;
    this._drag_counter = Math.max(0, this._drag_counter - 1);
    if (!this._drag_counter || this.isPointerOutsideWindow(event)) {
      this.hideDropzone();
    }
  }
  async handleDrop(event) {
    if (!this.hasDraggedFiles(event))
      return;
    event.preventDefault();
    event.stopPropagation();
    this.hideDropzone();
    await this._service.previewFiles(event.dataTransfer?.files);
  }
  hideDropzone() {
    this._drag_counter = 0;
    this.show_dropzone.set(false);
  }
  hasDraggedFiles(event) {
    return Array.from(event.dataTransfer?.types || []).includes("Files");
  }
  isPointerOutsideWindow(event) {
    return event.clientX <= 0 || event.clientY <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight;
  }
  static {
    this.\u0275fac = function MediaSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaSectionComponent, selectors: [["media-section"]], decls: 10, vars: 2, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row", 3, "dragenter", "dragover", "dragleave", "drop"], [1, "sm:h-full"], [1, "flex", "min-h-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "relative", "flex-1", "overflow-auto"], [1, "relative", "z-0", 3, "playlist_count"], [1, "absolute", "inset-0", "z-20"], [1, "absolute", "inset-0", "z-20", 3, "dragenter", "dragover", "dragleave", "drop"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60"], [1, "border-base-300", "text-base-100", "absolute", "inset-4", "flex", "flex-col", "items-center", "justify-center", "gap-4", "rounded-2xl", "border-4", "border-dashed", "text-center"], [1, "text-6xl"], [1, "text-lg", "font-medium"], [1, "text-sm", "opacity-80"]], template: function MediaSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("dragenter", function MediaSectionComponent_Template_div_dragenter_0_listener($event) {
          return ctx.handleDragEnter($event);
        }, \u0275\u0275resolveWindow)("dragover", function MediaSectionComponent_Template_div_dragover_0_listener($event) {
          return ctx.handleDragOver($event);
        }, \u0275\u0275resolveWindow)("dragleave", function MediaSectionComponent_Template_div_dragleave_0_listener($event) {
          return ctx.handleDragLeave($event);
        }, \u0275\u0275resolveWindow)("drop", function MediaSectionComponent_Template_div_drop_0_listener($event) {
          return ctx.handleDrop($event);
        }, \u0275\u0275resolveWindow);
        \u0275\u0275element(1, "nav-sidebar", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "media-list-header", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "main", 5);
        \u0275\u0275element(6, "media-list", 6);
        \u0275\u0275conditionalCreate(7, MediaSectionComponent_Conditional_7_Template, 10, 0, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "playlist-sidebar");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "nav-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("playlist_count", ctx.playlists()?.length);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_dropzone() ? 7 : -1);
      }
    }, dependencies: [
      NavSidebarComponent,
      MediaListComponent,
      MediaListHeaderComponent,
      PlaylistSidebarComponent,
      NavFooterComponent,
      IconComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaSectionComponent, [{
    type: Component,
    args: [{ selector: "media-section", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row"
            (window:dragenter)="handleDragEnter($event)"
            (window:dragover)="handleDragOver($event)"
            (window:dragleave)="handleDragLeave($event)"
            (window:drop)="handleDrop($event)"
        >
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <media-list-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <main class="relative flex-1 overflow-auto">
                        <media-list
                            class="relative z-0"
                            [playlist_count]="playlists()?.length"
                        />
                        @if (show_dropzone()) {
                            <div
                                class="absolute inset-0 z-20"
                                (dragenter)="handleDragEnter($event)"
                                (dragover)="handleDragOver($event)"
                                (dragleave)="handleDragLeave($event)"
                                (drop)="handleDrop($event)"
                            >
                                <div
                                    class="bg-base-content absolute inset-0 opacity-60"
                                ></div>
                                <div
                                    class="border-base-300 text-base-100 absolute inset-4 flex flex-col items-center justify-center gap-4 rounded-2xl border-4 border-dashed text-center"
                                >
                                    <icon class="text-6xl">cloud_upload</icon>
                                    <div>
                                        <p class="text-lg font-medium">
                                            Drop media to upload
                                        </p>
                                        <p class="text-sm opacity-80">
                                            Images and supported video files
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </main>
                    <playlist-sidebar />
                </div>
            </div>
            <nav-footer />
        </div>
    `, imports: [
      NavSidebarComponent,
      MediaListComponent,
      MediaListHeaderComponent,
      PlaylistSidebarComponent,
      NavFooterComponent,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaSectionComponent, { className: "MediaSectionComponent", filePath: "apps/signage-manager/src/app/media/media.component.ts", lineNumber: 72 });
})();
export {
  MediaSectionComponent
};
//# sourceMappingURL=media.component-OJIP7D37.js.map
