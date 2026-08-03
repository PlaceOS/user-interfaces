import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-MDW6HRGS.js";
import {
  IntersectDirective
} from "./chunk-F63WNHGW.js";
import {
  NavFooterComponent,
  NavSidebarComponent
} from "./chunk-JLZKETIV.js";
import {
  AuthenticatedImageDirective,
  Component,
  CustomTooltipComponent,
  DefaultValueAccessor,
  DestroyRef,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Input,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuContent,
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
  MatTooltip,
  MatTooltipModule,
  MediaDurationPipe,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
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
} from "./chunk-QZB4GUEW.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/media-add-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MediaAddModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 3)(4, "input", 4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MediaAddModalComponent_Conditional_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.link, $event) || (ctx_r1.link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "COMMON.URL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "COMMON.URL"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.link);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 8, "SIGNAGE_MANAGER.MEDIA_URL_ARIA"));
    \u0275\u0275control();
  }
}
function MediaAddModalComponent_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
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
function MediaAddModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 3)(4, "mat-select", 6);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MediaAddModalComponent_Conditional_4_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selected_plugin, $event) || (ctx_r1.selected_plugin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(7, MediaAddModalComponent_Conditional_4_For_8_Template, 2, 2, "mat-option", 7, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.SELECT_PLUGIN"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selected_plugin);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "SIGNAGE_MANAGER.SELECT_PLUGIN"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 8, "SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.available_plugins());
  }
}
function MediaAddModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_PLUGINS"), " ");
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
var MediaAddModalComponent = class _MediaAddModalComponent {
  constructor() {
    this._service = inject(SignageService);
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.mode = this._data.mode;
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
    this.available_plugins = this._service.plugins;
    this.can_add = computed(
      () => this.mode === "link" ? !!this.link().trim() : !!this.selected_plugin(),
      ...ngDevMode ? [{ debugName: "can_add" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async add() {
    if (this.mode === "link") {
      const link = this.link().trim();
      if (!isValidUrl(link)) {
        notifyError(i18n("SIGNAGE_MANAGER.URL_INVALID"));
        return;
      }
      this._dialog_ref.close();
      await this._service.addMediaFromLink(link);
    } else {
      const plugin = this.selected_plugin();
      if (!plugin)
        return;
      this._dialog_ref.close();
      await this._service.addMediaFromPlugin(plugin);
    }
  }
  static {
    this.\u0275fac = function MediaAddModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaAddModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaAddModalComponent, selectors: [["media-add-modal"]], decls: 6, vars: 8, consts: [[3, "confirm", "heading", "confirm_text", "confirm_disabled"], [1, "text-base-content/60", "m-0", "text-sm"], ["for", "media-url"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "id", "media-url", 3, "ngModelChange", "placeholder", "ngModel"], ["for", "plugin"], ["id", "plugin", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"]], template: function MediaAddModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function MediaAddModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.add();
        });
        \u0275\u0275conditionalCreate(3, MediaAddModalComponent_Conditional_3_Template, 7, 10)(4, MediaAddModalComponent_Conditional_4_Template, 9, 10)(5, MediaAddModalComponent_Conditional_5_Template, 3, 3, "p", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 4, ctx.mode === "plugin" ? "SIGNAGE_MANAGER.ADD_PLUGIN" : "SIGNAGE_MANAGER.ADD_FROM_LINK"))("confirm_text", \u0275\u0275pipeBind1(2, 6, "COMMON.ADD"))("confirm_disabled", !ctx.can_add());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.mode === "link" ? 3 : ctx.available_plugins().length ? 4 : 5);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FullscreenModalShellComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaAddModalComponent, [{
    type: Component,
    args: [{
      selector: "media-add-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="
                (mode === 'plugin'
                    ? 'SIGNAGE_MANAGER.ADD_PLUGIN'
                    : 'SIGNAGE_MANAGER.ADD_FROM_LINK'
                ) | translate
            "
            [confirm_text]="'COMMON.ADD' | translate"
            [confirm_disabled]="!can_add()"
            (confirm)="add()"
        >
            @if (mode === 'link') {
                <label for="media-url">{{ 'COMMON.URL' | translate }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="media-url"
                        [placeholder]="'COMMON.URL' | translate"
                        [(ngModel)]="link"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.MEDIA_URL_ARIA' | translate
                        "
                    />
                </mat-form-field>
            } @else if (available_plugins().length) {
                <label for="plugin">{{
                    'SIGNAGE_MANAGER.SELECT_PLUGIN' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        id="plugin"
                        [(ngModel)]="selected_plugin"
                        [placeholder]="
                            'SIGNAGE_MANAGER.SELECT_PLUGIN' | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA' | translate
                        "
                    >
                        @for (plugin of available_plugins(); track plugin.id) {
                            <mat-option [value]="plugin">
                                {{ plugin.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            } @else {
                <p class="text-base-content/60 m-0 text-sm">
                    {{ 'SIGNAGE_MANAGER.NO_PLUGINS' | translate }}
                </p>
            }
        </fullscreen-modal-shell>
    `,
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FullscreenModalShellComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaAddModalComponent, { className: "MediaAddModalComponent", filePath: "apps/signage-manager/src/app/shared/media-add-modal.component.ts", lineNumber: 92 });
})();

// apps/signage-manager/src/app/media/media-list-header.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack02 = ($index, $item) => $item.mode;
var _forTrack1 = ($index, $item) => $item.id;
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
function MediaListHeaderComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function MediaListHeaderComponent_For_12_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.view_mode.set(option_r3.mode));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-100", ctx_r0.view_mode() === option_r3.mode)("shadow", ctx_r0.view_mode() === option_r3.mode)("text-base-content/60", ctx_r0.view_mode() !== option_r3.mode);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 10, option_r3.label));
    \u0275\u0275attribute("aria-pressed", ctx_r0.view_mode() === option_r3.mode)("aria-label", \u0275\u0275pipeBind1(2, 12, option_r3.label));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r3.icon);
  }
}
function MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plugin_r6 = ctx.$implicit;
    \u0275\u0275property("value", plugin_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plugin_r6.name, " ");
  }
}
function MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 23)(1, "mat-select", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selected_plugin, $event) || (ctx_r0.selected_plugin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_1_For_5_Template, 2, 2, "mat-option", 25, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 26);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addFromPlugin());
    });
    \u0275\u0275elementStart(7, "icon", 27);
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
function MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_PLUGINS"), " ");
  }
}
function MediaListHeaderComponent_Conditional_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_1_Template, 12, 11)(2, MediaListHeaderComponent_Conditional_17_ng_template_5_Conditional_2_Template, 3, 3, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.available_plugins().length ? 1 : 2);
  }
}
function MediaListHeaderComponent_Conditional_17_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-form-field", 23)(2, "input", 12);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MediaListHeaderComponent_Conditional_17_ng_template_12_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.link, $event) || (ctx_r0.link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_17_ng_template_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFromLink());
    });
    \u0275\u0275elementStart(6, "icon", 27);
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
function MediaListHeaderComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "extension");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, MediaListHeaderComponent_Conditional_17_ng_template_5_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "icon");
    \u0275\u0275text(11, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, MediaListHeaderComponent_Conditional_17_ng_template_12_Template, 11, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(14, "button", 15);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_17_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const upload_input_r8 = \u0275\u0275reference(48);
      return \u0275\u0275resetView(upload_input_r8.click());
    });
    \u0275\u0275elementStart(17, "icon");
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 16);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "icon");
    \u0275\u0275text(23, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-menu", null, 2)(26, "button", 17);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_17_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAdd("plugin"));
    });
    \u0275\u0275elementStart(27, "div", 18)(28, "icon", 19);
    \u0275\u0275text(29, "extension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 17);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_17_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAdd("link"));
    });
    \u0275\u0275elementStart(34, "div", 18)(35, "icon", 19);
    \u0275\u0275text(36, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "button", 17);
    \u0275\u0275listener("click", function MediaListHeaderComponent_Conditional_17_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const upload_input_r8 = \u0275\u0275reference(48);
      return \u0275\u0275resetView(upload_input_r8.click());
    });
    \u0275\u0275elementStart(41, "div", 18)(42, "icon", 19);
    \u0275\u0275text(43, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "input", 20, 3);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275listener("change", function MediaListHeaderComponent_Conditional_17_Template_input_change_47_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.previewFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const add_plugin_template_r9 = \u0275\u0275reference(6);
    const add_link_template_r10 = \u0275\u0275reference(13);
    const actions_menu_r11 = \u0275\u0275reference(25);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("content", add_plugin_template_r9)("matTooltip", \u0275\u0275pipeBind1(1, 16, "SIGNAGE_MANAGER.ADD_PLUGIN"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 18, "SIGNAGE_MANAGER.ADD_PLUGIN_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275property("content", add_link_template_r10)("matTooltip", \u0275\u0275pipeBind1(8, 20, "SIGNAGE_MANAGER.ADD_FROM_LINK"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 22, "SIGNAGE_MANAGER.ADD_FROM_LINK_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 24, "SIGNAGE_MANAGER.UPLOAD_MEDIA"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 26, "SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matMenuTriggerFor", actions_menu_r11)("matTooltip", \u0275\u0275pipeBind1(20, 28, "SIGNAGE_MANAGER.MEDIA_ACTIONS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 30, "SIGNAGE_MANAGER.MEDIA_ACTIONS"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 32, "SIGNAGE_MANAGER.ADD_PLUGIN"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 34, "SIGNAGE_MANAGER.ADD_FROM_LINK"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 36, "SIGNAGE_MANAGER.UPLOAD_MEDIA"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("accept", ctx_r0.file_accept)("aria-label", \u0275\u0275pipeBind1(49, 38, "SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA"));
  }
}
function isValidUrl2(url) {
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
    this._dialog = inject(MatDialog);
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
    this.view_mode = this._service.media_view_mode;
    this.view_options = [
      { mode: "grid", icon: "grid_view", label: "SIGNAGE_MANAGER.VIEW_GRID" },
      {
        mode: "list",
        icon: "view_list",
        label: "SIGNAGE_MANAGER.VIEW_LIST"
      },
      {
        mode: "folder",
        icon: "folder",
        label: "SIGNAGE_MANAGER.VIEW_FOLDER"
      }
    ];
    this.file_accept = this._service.media_upload_accept;
    this.can_create = this._service.can_create;
    this.previewFile = (event) => this._service.previewFileFromInput(event);
  }
  openAdd(mode) {
    this._dialog.open(MediaAddModalComponent, {
      data: { mode },
      panelClass: "mobile-fullscreen"
    });
  }
  async addFromLink() {
    const link = this.link().trim();
    if (!link)
      return;
    const is_valid = isValidUrl2(link);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaListHeaderComponent, selectors: [["media-list-header"]], decls: 18, vars: 15, consts: [["add_plugin_template", ""], ["add_link_template", ""], ["actions_menu", "matMenu"], ["upload_input", ""], [1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-1", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap", "sm:gap-2"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["role", "group", 1, "border-base-300", "bg-base-200", "flex", "items-center", "rounded-lg", "border", "p-0.5"], ["icon", "", "type", "button", "matRipple", "", 1, "h-10", "w-10", "rounded-md", 3, "bg-base-100", "shadow", "text-base-content/60", "matTooltip"], ["appearance", "outline", 1, "no-subscript", "white", "order-last", "w-full", "sm:order-0", "sm:w-80"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["icon", "", "type", "button", "matRipple", "", 1, "h-10", "w-10", "rounded-md", 3, "click", "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", "customTooltip", "", "matTooltipPosition", "left", 1, "text-xl", "max-sm:hidden", 3, "content", "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 1, "text-xl", "max-sm:hidden", 3, "click", "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "left", 1, "text-xl", "sm:hidden", 3, "matMenuTriggerFor", "matTooltip"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "text-2xl"], ["type", "file", "multiple", "", 1, "sr-only", 3, "change"], [1, "border-base-300", "bg-base-100", "my-2", "flex", "w-[20rem]", "flex-col", "space-y-4", "rounded-lg", "border", "p-4", "shadow-sm"], [1, "text-base-content/60", "m-0", "text-sm"], ["appearance", "outline", 1, "no-subscript"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "type", "button", "matRipple", "", 1, "w-full", 3, "click", "disabled"], [1, "mr-2", "text-2xl"], ["btn", "", "type", "button", "matRipple", "", 1, "w-full", 3, "click"]], template: function MediaListHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3", 6);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 7);
        \u0275\u0275conditionalCreate(6, MediaListHeaderComponent_Conditional_6_Template, 2, 6)(7, MediaListHeaderComponent_Conditional_7_Template, 2, 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "div", 8);
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275repeaterCreate(11, MediaListHeaderComponent_For_12_Template, 5, 14, "button", 10, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 11)(14, "input", 12);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275listener("ngModelChange", function MediaListHeaderComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, MediaListHeaderComponent_Conditional_17_Template, 50, 40);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "SIGNAGE_MANAGER.MEDIA_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.search() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 9, "SIGNAGE_MANAGER.MEDIA_VIEW_ARIA"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.view_options);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 11, "SIGNAGE_MANAGER.MEDIA_SEARCH"))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 13, "SIGNAGE_MANAGER.SEARCH_MEDIA_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.can_create() ? 17 : -1);
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
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
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
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-1 border-b px-4 py-2 shadow sm:flex-nowrap sm:gap-2"
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
            <div
                class="border-base-300 bg-base-200 flex items-center rounded-lg border p-0.5"
                role="group"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.MEDIA_VIEW_ARIA' | translate
                "
            >
                @for (option of view_options; track option.mode) {
                    <button
                        icon
                        type="button"
                        matRipple
                        class="h-10 w-10 rounded-md"
                        [class.bg-base-100]="view_mode() === option.mode"
                        [class.shadow]="view_mode() === option.mode"
                        [class.text-base-content/60]="
                            view_mode() !== option.mode
                        "
                        [matTooltip]="option.label | translate"
                        [attr.aria-pressed]="view_mode() === option.mode"
                        [attr.aria-label]="option.label | translate"
                        (click)="view_mode.set(option.mode)"
                    >
                        <icon>{{ option.icon }}</icon>
                    </button>
                }
            </div>
            <mat-form-field
                appearance="outline"
                class="no-subscript white order-last w-full sm:order-0 sm:w-80"
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
                    default
                    type="button"
                    matRipple
                    customTooltip
                    [content]="add_plugin_template"
                    class="text-xl max-sm:hidden"
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
                    default
                    class="text-xl max-sm:hidden"
                    type="button"
                    matRipple
                    customTooltip
                    [content]="add_link_template"
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
                    default
                    type="button"
                    matRipple
                    class="text-xl max-sm:hidden"
                    [matTooltip]="'SIGNAGE_MANAGER.UPLOAD_MEDIA' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.UPLOAD_MEDIA_ARIA' | translate
                    "
                    (click)="upload_input.click()"
                >
                    <icon>add</icon>
                </button>
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl sm:hidden"
                    [matMenuTriggerFor]="actions_menu"
                    [matTooltip]="'SIGNAGE_MANAGER.MEDIA_ACTIONS' | translate"
                    matTooltipPosition="left"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.MEDIA_ACTIONS' | translate
                    "
                >
                    <icon>add</icon>
                </button>
                <mat-menu #actions_menu="matMenu">
                    <button
                        mat-menu-item
                        type="button"
                        (click)="openAdd('plugin')"
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-2xl">extension</icon>
                            <div>
                                {{ 'SIGNAGE_MANAGER.ADD_PLUGIN' | translate }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        type="button"
                        (click)="openAdd('link')"
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-2xl">link</icon>
                            <div>
                                {{ 'SIGNAGE_MANAGER.ADD_FROM_LINK' | translate }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        type="button"
                        (click)="upload_input.click()"
                    >
                        <div class="flex items-center gap-2">
                            <icon class="text-2xl">upload</icon>
                            <div>
                                {{ 'SIGNAGE_MANAGER.UPLOAD_MEDIA' | translate }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
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
        MatMenuModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaListHeaderComponent, { className: "MediaListHeaderComponent", filePath: "apps/signage-manager/src/app/media/media-list-header.component.ts", lineNumber: 301 });
})();

// apps/signage-manager/src/app/media/media-list.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0) => ({ item: a0 });
var _forTrack03 = ($index, $item) => $item.group.id;
var _forTrack12 = ($index, $item) => $item.id;
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
    \u0275\u0275repeaterCreate(3, MediaListComponent_Conditional_0_For_4_Template, 2, 2, "button", 6, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-tab-nav-panel", null, 2);
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
function MediaListComponent_Conditional_1_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.UNTAGGED"), " ");
  }
}
function MediaListComponent_Conditional_1_Conditional_0_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const folder_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", folder_r7.id, " ");
  }
}
function MediaListComponent_Conditional_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_1_Conditional_0_For_2_Template_button_click_0_listener() {
      const folder_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openFolder(folder_r7.id));
    });
    \u0275\u0275elementStart(1, "icon", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275conditionalCreate(5, MediaListComponent_Conditional_1_Conditional_0_For_2_Conditional_5_Template, 2, 3)(6, MediaListComponent_Conditional_1_Conditional_0_For_2_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const folder_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(folder_r7.untagged ? "folder_open" : "folder");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", folder_r7.untagged ? \u0275\u0275pipeBind1(4, 4, "SIGNAGE_MANAGER.UNTAGGED") : folder_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(folder_r7.untagged ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 6, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(9, _c02, folder_r7.count)), " ");
  }
}
function MediaListComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, MediaListComponent_Conditional_1_Conditional_0_For_2_Template, 10, 11, "button", 11, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.folders());
  }
}
function MediaListComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
  }
}
function MediaListComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 17);
    \u0275\u0275text(2, "folder_off");
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
function MediaListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MediaListComponent_Conditional_1_Conditional_0_Template, 3, 0, "div", 8)(1, MediaListComponent_Conditional_1_Conditional_1_Template, 2, 0, "div", 9)(2, MediaListComponent_Conditional_1_Conditional_2_Template, 6, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.folders().length > 0 ? 0 : ctx_r1.loading() ? 1 : 2);
  }
}
function MediaListComponent_Conditional_2_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "SIGNAGE_MANAGER.UNTAGGED"), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_folder(), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "button", 22);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeFolder());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 23);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275conditionalCreate(8, MediaListComponent_Conditional_2_Conditional_0_Conditional_8_Template, 2, 3)(9, MediaListComponent_Conditional_2_Conditional_0_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("top-2", !ctx_r1.can_switch_groups())("top-16", ctx_r1.can_switch_groups());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "SIGNAGE_MANAGER.VIEW_FOLDER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.selected_folder() === ctx_r1.untagged_id ? 8 : 9);
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "icon", 44);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.EXPIRED"), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, media_item_r11.play_time / 1e3), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r12, " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.remainingTags(media_item_r11).join(", "));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.remainingTagCount(media_item_r11), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275repeaterCreate(1, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_16_For_2_Template, 2, 1, "span", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_16_Conditional_3_Template, 2, 2, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleTags(media_item_r11));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.remainingTagCount(media_item_r11) > 0 ? 3 : -1);
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_div_1_Template, 3, 0, "div", 31);
    \u0275\u0275elementStart(2, "mat-checkbox", 32);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Template_mat_checkbox_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Template_mat_checkbox_change_2_listener() {
      \u0275\u0275restoreView(_r10);
      const media_item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(media_item_r11.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const media_item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_item_r11));
    });
    \u0275\u0275elementContainer(6, 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "button", 36);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const media_item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(media_item_r11.id));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 37)(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_14_Template, 3, 3, "span", 39);
    \u0275\u0275conditionalCreate(15, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_15_Template, 3, 3, "span", 40);
    \u0275\u0275conditionalCreate(16, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Conditional_16_Template, 4, 1, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 42);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "icon");
    \u0275\u0275text(20, "more_vert");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const menu_r13 = \u0275\u0275reference(4);
    const thumb_r14 = \u0275\u0275reference(7);
    \u0275\u0275classProp("opacity-60", ctx_r1.isExpired(media_item_r11))("ring-2", ctx_r1.isSelected(media_item_r11.id))("ring-primary", ctx_r1.isSelected(media_item_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(media_item_r11.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 22, "SIGNAGE_MANAGER.SELECT_MEDIA", \u0275\u0275pureFunction1(32, _c1, media_item_r11.name)));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 25, "SIGNAGE_MANAGER.PREVIEW_MEDIA", \u0275\u0275pureFunction1(34, _c1, media_item_r11.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", thumb_r14)("ngTemplateOutletContext", \u0275\u0275pureFunction1(36, _c2, media_item_r11));
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_item_r11.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_item_r11.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.typeBadgeClass(media_item_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 28, ctx_r1.typeLabelKey(media_item_r11)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpired(media_item_r11) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_item_r11.play_time ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_item_r11.tags?.length ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r13)("matMenuTriggerData", \u0275\u0275pureFunction1(38, _c2, media_item_r11));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 30, "SIGNAGE_MANAGER.MEDIA_ACTIONS"));
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "icon", 44);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.EXPIRED"), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "icon", 58);
    \u0275\u0275text(2, "expand_content");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, media_item_r11.play_time / 1e3), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r16, " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.remainingTags(media_item_r11).join(", "));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.remainingTagCount(media_item_r11), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275repeaterCreate(1, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_20_For_2_Template, 2, 1, "span", 59, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_20_Conditional_3_Template, 2, 2, "span", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visibleTags(media_item_r11));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.remainingTagCount(media_item_r11) > 0 ? 3 : -1);
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_div_1_Template, 3, 0, "div", 31);
    \u0275\u0275elementStart(2, "mat-checkbox", 48);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template_mat_checkbox_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template_mat_checkbox_change_2_listener() {
      \u0275\u0275restoreView(_r15);
      const media_item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(media_item_r11.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 49);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const media_item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_item_r11));
    });
    \u0275\u0275conditionalCreate(6, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_6_Template, 3, 3, "div", 50);
    \u0275\u0275elementContainer(7, 34);
    \u0275\u0275conditionalCreate(8, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_8_Template, 3, 0, "div", 51);
    \u0275\u0275elementStart(9, "div", 52);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_12_Template, 3, 3, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 54)(14, "button", 55);
    \u0275\u0275listener("click", function MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const media_item_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(media_item_r11.id));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 56);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Conditional_20_Template, 4, 1, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const menu_r13 = \u0275\u0275reference(4);
    const thumb_r14 = \u0275\u0275reference(7);
    \u0275\u0275classProp("opacity-60", ctx_r1.isExpired(media_item_r11))("ring-2", ctx_r1.isSelected(media_item_r11.id))("ring-primary", ctx_r1.isSelected(media_item_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(media_item_r11.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 23, "SIGNAGE_MANAGER.SELECT_MEDIA", \u0275\u0275pureFunction1(33, _c1, media_item_r11.name)));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(5, 26, "SIGNAGE_MANAGER.PREVIEW_MEDIA", \u0275\u0275pureFunction1(35, _c1, media_item_r11.name)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isExpired(media_item_r11) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", thumb_r14)("ngTemplateOutletContext", \u0275\u0275pureFunction1(37, _c2, media_item_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.thumbnailUrl(media_item_r11) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.typeBadgeClass(media_item_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 29, ctx_r1.typeLabelKey(media_item_r11)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(media_item_r11.play_time ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_item_r11.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_item_r11.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r13)("matMenuTriggerData", \u0275\u0275pureFunction1(39, _c2, media_item_r11));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 31, "SIGNAGE_MANAGER.MEDIA_ACTIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(media_item_r11.tags?.length ? 20 : -1);
  }
}
function MediaListComponent_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_0_Template, 21, 40, "div", 28)(1, MediaListComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template, 21, 41, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.view_mode() === "list" ? 0 : 1);
  }
}
function MediaListComponent_Conditional_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("intersect", function MediaListComponent_Conditional_2_Conditional_1_Conditional_3_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function MediaListComponent_Conditional_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function MediaListComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("cdkDropListDropped", function MediaListComponent_Conditional_2_Conditional_1_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275repeaterCreate(1, MediaListComponent_Conditional_2_Conditional_1_For_2_Template, 2, 1, null, null, _forTrack12);
    \u0275\u0275conditionalCreate(3, MediaListComponent_Conditional_2_Conditional_1_Conditional_3_Template, 1, 0, "div", 26)(4, MediaListComponent_Conditional_2_Conditional_1_Conditional_4_Template, 3, 3, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.view_mode() === "list" ? "flex w-full flex-col gap-2 p-4" : "grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4");
    \u0275\u0275property("cdkDropListData", ctx_r1.display_media())("cdkDropListConnectedTo", ctx_r1.playlist_ids());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.display_media());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 3 : 4);
  }
}
function MediaListComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
  }
}
function MediaListComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 17);
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
function MediaListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MediaListComponent_Conditional_2_Conditional_0_Template, 10, 8, "div", 18);
    \u0275\u0275conditionalCreate(1, MediaListComponent_Conditional_2_Conditional_1_Template, 5, 5, "div", 19)(2, MediaListComponent_Conditional_2_Conditional_2_Template, 2, 0, "div", 9)(3, MediaListComponent_Conditional_2_Conditional_3_Template, 6, 3, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.view_mode() === "folder" && ctx_r1.selected_folder() !== null ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.display_media().length > 0 ? 1 : ctx_r1.loading() ? 2 : 3);
  }
}
function MediaListComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function MediaListComponent_ng_template_5_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const media_item_r20 = \u0275\u0275nextContext().item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editItem(media_item_r20));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "icon", 58);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "COMMON.EDIT"), " ");
  }
}
function MediaListComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function MediaListComponent_ng_template_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const media_item_r20 = \u0275\u0275nextContext().item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToPlaylist(media_item_r20.id));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "icon", 58);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "SIGNAGE_MANAGER.ADD_TO_PLAYLIST"), " ");
  }
}
function MediaListComponent_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function MediaListComponent_ng_template_5_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const media_item_r20 = \u0275\u0275nextContext().item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareItem(media_item_r20));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "icon", 58);
    \u0275\u0275text(3, "ios_share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "SIGNAGE_MANAGER.SHARE"), " ");
  }
}
function MediaListComponent_ng_template_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function MediaListComponent_ng_template_5_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const media_item_r20 = \u0275\u0275nextContext().item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeItem(media_item_r20));
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "icon", 66);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "COMMON.REMOVE"), " ");
  }
}
function MediaListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, MediaListComponent_ng_template_5_Conditional_0_Template, 7, 3, "button", 62);
    \u0275\u0275conditionalCreate(1, MediaListComponent_ng_template_5_Conditional_1_Template, 7, 3, "button", 62);
    \u0275\u0275conditionalCreate(2, MediaListComponent_ng_template_5_Conditional_2_Template, 7, 3, "button", 62);
    \u0275\u0275elementStart(3, "button", 63);
    \u0275\u0275listener("click", function MediaListComponent_ng_template_5_Template_button_click_3_listener() {
      const media_item_r20 = \u0275\u0275restoreView(_r18).item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previewItem(media_item_r20));
    });
    \u0275\u0275elementStart(4, "div", 64)(5, "icon", 58);
    \u0275\u0275text(6, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 65);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, MediaListComponent_ng_template_5_Conditional_10_Template, 7, 3, "button", 62);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.can_update() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sidebar_hidden() && ctx_r1.can_update() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "COMMON.PREVIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_delete() ? 10 : -1);
  }
}
function MediaListComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "icon", 69);
    \u0275\u0275text(2, "http");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "icon", 69);
    \u0275\u0275text(2, "extension");
    \u0275\u0275elementEnd()();
  }
}
function MediaListComponent_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 68);
  }
  if (rf & 2) {
    const item_r24 = \u0275\u0275nextContext().item;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r1.thumbnailUrl(item_r24))("alt", item_r24.name + " thumbnail");
  }
}
function MediaListComponent_ng_template_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "icon", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r24 = \u0275\u0275nextContext().item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r24.media_type === "video" ? "video_library" : "image");
  }
}
function MediaListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MediaListComponent_ng_template_6_Conditional_0_Template, 3, 0, "div", 67)(1, MediaListComponent_ng_template_6_Conditional_1_Template, 3, 0, "div", 67)(2, MediaListComponent_ng_template_6_Conditional_2_Template, 1, 2, "img", 68)(3, MediaListComponent_ng_template_6_Conditional_3_Template, 3, 1, "div", 67);
  }
  if (rf & 2) {
    const item_r24 = ctx.item;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(item_r24.media_type === "webpage" && !ctx_r1.thumbnailUrl(item_r24) ? 0 : item_r24.media_type === "plugin" && !ctx_r1.thumbnailUrl(item_r24) ? 1 : ctx_r1.thumbnailUrl(item_r24) ? 2 : 3);
  }
}
function MediaListComponent_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_8_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
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
function MediaListComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_8_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
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
function MediaListComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_8_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
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
function MediaListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 4)(1, "div", 70)(2, "button", 71);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function MediaListComponent_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 72);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 73);
    \u0275\u0275conditionalCreate(11, MediaListComponent_Conditional_8_Conditional_11_Template, 4, 3, "button", 74);
    \u0275\u0275conditionalCreate(12, MediaListComponent_Conditional_8_Conditional_12_Template, 4, 3, "button", 75);
    \u0275\u0275conditionalCreate(13, MediaListComponent_Conditional_8_Conditional_13_Template, 4, 3, "button", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 6, "SIGNAGE_MANAGER.CLEAR_SELECTED"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 8, "SIGNAGE_MANAGER.CLEAR_SELECTED"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 10, "COMMON.SELECTED_COUNT", \u0275\u0275pureFunction1(13, _c02, ctx_r1.selected_count())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.can_delete() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_update() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_share() ? 13 : -1);
  }
}
var UNTAGGED = "\0untagged";
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
    this.media_tags = this._service.media_tags;
    this.loading = this._service.media_loading;
    this.view_mode = this._service.media_view_mode;
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
    this.selected_folder = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_folder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.untagged_id = UNTAGGED;
    this.folders = computed(
      () => {
        const media = this.media();
        const tags = this.media_tags();
        if (!media.length && !tags.length)
          return [];
        const counts = /* @__PURE__ */ new Map();
        let untagged_count = 0;
        for (const item of media) {
          const item_tags = item.tags || [];
          if (!item_tags.length) {
            untagged_count++;
            continue;
          }
          for (const tag of item_tags) {
            counts.set(tag, (counts.get(tag) || 0) + 1);
          }
        }
        return [
          { id: UNTAGGED, count: untagged_count, untagged: true },
          ...tags.map((id) => ({
            id,
            count: counts.get(id) || 0,
            untagged: false
          }))
        ];
      },
      ...ngDevMode ? [{ debugName: "folders" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_media = computed(
      () => {
        const folder = this.selected_folder();
        if (this.view_mode() !== "folder" || folder === null) {
          return this.media();
        }
        if (folder === UNTAGGED) {
          return this.media().filter((item) => !(item.tags || []).length);
        }
        return this.media().filter((item) => (item.tags || []).includes(folder));
      },
      ...ngDevMode ? [{ debugName: "display_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_more = this._service.media_has_more;
    this.previewFile = (event) => this._service.previewFileFromInput(event);
    this.previewItem = (item) => this._service.previewMedia(item);
    this.editItem = (item) => this._service.editMedia(item);
    this.removeItem = (item) => this._service.removeMedia(item);
    this.addToPlaylist = (media_id) => this._service.openPlaylistSelectModal(media_id);
    this.shareItem = (item) => this._service.shareMedia(item);
    this.can_update = this._service.can_update;
    this.can_delete = this._service.can_delete;
    this.can_share = this._service.can_share;
    effect(() => {
      if (this.view_mode() !== "folder")
        this.selected_folder.set(null);
    });
  }
  ngOnInit() {
    this._onMediaChange(this._mql);
    this._mql.addEventListener("change", this._onMediaChange);
    this._destroy.onDestroy(() => this._mql.removeEventListener("change", this._onMediaChange));
  }
  loadMore() {
    this._service.loadMoreMedia();
  }
  openFolder(folder_id) {
    this.selected_folder.set(folder_id);
  }
  closeFolder() {
    this.selected_folder.set(null);
  }
  selectGroup(group_id) {
    this.clearSelection();
    this.selected_folder.set(null);
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
  typeLabelKey(item) {
    switch (item.media_type) {
      case "image":
        return "COMMON.IMAGE";
      case "webpage":
        return "COMMON.WEBPAGE";
      case "plugin":
        return "SIGNAGE_MANAGER.TYPE_PLUGIN";
      default:
        return "COMMON.VIDEO";
    }
  }
  typeBadgeClass(item) {
    switch (item.media_type) {
      case "image":
        return "bg-warning text-warning-content";
      case "webpage":
        return "bg-success text-success-content";
      case "plugin":
        return "bg-error text-error-content";
      default:
        return "bg-info text-info-content";
    }
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaListComponent, selectors: [["media-list"]], inputs: { playlist_count: [1, "playlist_count"] }, decls: 9, vars: 3, consts: [["menu", "matMenu"], ["thumb", ""], ["group_tabs_panel", ""], ["matMenuContent", ""], ["aria-live", "polite", 1, "bg-base-100", "border-base-300", "sticky", "bottom-2", "z-20", "mx-2", "mt-2", "flex", "items-center", "justify-between", "gap-2", "rounded-xl", "border", "p-2", "shadow-lg"], ["mat-tab-nav-bar", "", 1, "bg-base-100/95", "border-base-300", "sticky", "top-2", "z-30", "mx-2", "rounded-xl", "border", 3, "tabPanel"], ["mat-tab-link", "", "type", "button", 3, "active"], ["mat-tab-link", "", "type", "button", 3, "click", "active"], ["role", "list", 1, "grid", "w-full", "grid-cols-2", "gap-4", "p-4", "sm:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-6"], [1, "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "p-8"], [1, "text-base-content/70", "mx-auto", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["type", "button", "role", "listitem", "matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-4", "hover:shadow-xl"], ["type", "button", "role", "listitem", "matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-4", "hover:shadow-xl", 3, "click"], [1, "text-warning", "-my-2", "text-8xl"], [1, "text-base-content", "w-full", "truncate", "text-center", "font-medium", 3, "matTooltip"], [1, "text-base-content/60", "text-xs"], ["diameter", "32"], [1, "text-6xl"], [1, "text-base-content/80", "sticky", "z-30", "mx-2", "mt-4", "items-center", "gap-1", "px-2", "text-sm", 3, "top-2", "top-16"], ["cdkDropList", "", "id", "media-list", "role", "list", 3, "class", "cdkDropListData", "cdkDropListConnectedTo"], [1, "text-base-content/80", "sticky", "z-30", "mx-2", "mt-4", "items-center", "gap-1", "px-2", "text-sm"], [1, "bg-base-100", "border-base-300", "inline-flex", "items-center", "rounded-xl", "border", "p-1"], ["type", "button", "matRipple", "", 1, "hover:text-base-content", "flex", "items-center", "gap-1", "rounded-lg", "px-4", "py-2", "underline", 3, "click"], [1, "text-base-content/60", "text-xl"], [1, "text-base-content", "px-4", "font-medium"], ["cdkDropList", "", "id", "media-list", "role", "list", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["intersect", "", 1, "col-span-full", "h-px", "w-full"], [1, "text-base-content/50", "bg-base-content/10", "col-span-full", "rounded-lg", "p-2", "text-center", "text-xs"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "hover:border-info", "relative", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-2", "hover:shadow-md", 3, "opacity-60", "ring-2", "ring-primary"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "hover:border-info", "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-3", "hover:opacity-80", "hover:shadow-xl", 3, "opacity-60", "ring-2", "ring-primary"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "hover:border-info", "relative", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-2", "hover:shadow-md"], ["class", "border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30", 4, "cdkDragPlaceholder"], [3, "click", "change", "checked"], ["preview", "", "type", "button", "matRipple", "", 1, "bg-base-200", "relative", "h-14", "w-20", "flex-none", "overflow-hidden", "rounded", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "w-px", "flex-1", "flex-col"], [1, "text-base-content", "w-full", "truncate", "text-left", 3, "click", "matTooltip"], [1, "flex", "items-center", "gap-2"], [1, "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "bg-error", "text-error-content", "rounded", "px-2", "py-1", "text-xs", "font-bold"], [1, "text-base-content/70", "hidden", "font-mono", "text-xs", "sm:block"], [1, "hidden", "items-center", "gap-1", "lg:flex"], ["icon", "", "default", "", "type", "button", "matRipple", "", 3, "matMenuTriggerFor", "matMenuTriggerData"], [1, "border-base-400", "bg-base-300", "flex", "min-h-10", "min-w-10", "items-center", "justify-center", "rounded-2xl", "border-4", "border-dashed", "opacity-30"], [1, "text-base-100", "text-2xl"], [1, "bg-info-light", "text-info", "max-w-32", "truncate", "rounded-full", "px-2", "py-1", "text-[0.625rem]", "font-medium"], [1, "bg-info-light", "text-info", "rounded-full", "px-2", "py-1", "text-[0.625rem]", "font-medium", 3, "matTooltip"], ["cdkDrag", "", "role", "listitem", 1, "border-base-300", "bg-base-100", "hover:border-info", "relative", "flex", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "p-3", "hover:opacity-80", "hover:shadow-xl"], [1, "absolute", "top-4", "right-4", "z-20", "rounded", 3, "click", "change", "checked"], ["preview", "", "type", "button", "matRipple", "", 1, "bg-base-200", "relative", "h-36", "w-full", "overflow-hidden", "rounded-lg", 3, "click"], [1, "bg-error", "text-error-content", "absolute", "inset-x-0", "top-1/2", "z-10", "-translate-y-1/2", "py-1", "text-center", "text-xs", "font-bold", "tracking-wide"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "absolute", "top-1", "left-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "bg-info", "text-info-content", "absolute", "right-1", "bottom-1", "rounded-lg", "px-2", "py-1", "font-mono", "text-xs", "capitalize"], [1, "relative", "top-1", "flex", "w-full", "items-center", "justify-between"], [1, "text-base-content", "w-1/2", "flex-1", "truncate", "text-left", 3, "click", "matTooltip"], ["icon", "", "type", "button", "matRipple", "", 3, "matMenuTriggerFor", "matMenuTriggerData"], [1, "flex", "min-h-6", "w-full", "items-center", "gap-1", "overflow-hidden"], [1, "text-2xl"], [1, "bg-info-light", "text-info", "max-w-[45%]", "truncate", "rounded-full", "px-2", "py-1", "text-xs", "font-medium"], [1, "bg-info-light", "text-info", "rounded-full", "px-2", "py-1", "text-xs", "font-medium", 3, "matTooltip"], ["intersect", "", 1, "col-span-full", "h-px", "w-full", 3, "intersect"], ["type", "button", "mat-menu-item", ""], ["type", "button", "mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "text-error", "text-2xl"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], ["auth", "", 1, "absolute", "-inset-px", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-lg", "object-contain", "object-center", 3, "source", "alt"], [1, "text-8xl", "opacity-30"], [1, "flex", "items-center", "gap-3"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "rounded-xl", 3, "click", "matTooltip"], [1, "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function MediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MediaListComponent_Conditional_0_Template, 7, 5);
        \u0275\u0275conditionalCreate(1, MediaListComponent_Conditional_1_Template, 3, 1)(2, MediaListComponent_Conditional_2_Template, 4, 2);
        \u0275\u0275elementStart(3, "mat-menu", null, 0);
        \u0275\u0275template(5, MediaListComponent_ng_template_5_Template, 11, 7, "ng-template", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, MediaListComponent_ng_template_6_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(8, MediaListComponent_Conditional_8_Template, 14, 15, "footer", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.can_switch_groups() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view_mode() === "folder" && ctx.selected_folder() === null ? 1 : 2);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.selected_count() > 0 ? 8 : -1);
      }
    }, dependencies: [
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragPlaceholder,
      NgTemplateOutlet,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuContent,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTabsModule,
      MatTabNav,
      MatTabNavPanel,
      MatTabLink,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      AuthenticatedImageDirective,
      IntersectDirective,
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

        <!-- Folder view: show tag folders until one is opened -->
        @if (view_mode() === 'folder' && selected_folder() === null) {
            @if (folders().length > 0) {
                <div
                    class="grid w-full grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                    role="list"
                >
                    @for (folder of folders(); track folder.id) {
                        <button
                            type="button"
                            role="listitem"
                            matRipple
                            class="border-base-300 bg-base-100 hover:border-info flex flex-col items-center justify-center rounded-lg border p-4 hover:shadow-xl"
                            (click)="openFolder(folder.id)"
                        >
                            <icon class="text-warning -my-2 text-8xl">{{
                                folder.untagged ? 'folder_open' : 'folder'
                            }}</icon>
                            <div
                                class="text-base-content w-full truncate text-center font-medium"
                                [matTooltip]="
                                    folder.untagged
                                        ? ('SIGNAGE_MANAGER.UNTAGGED'
                                          | translate)
                                        : folder.id
                                "
                            >
                                @if (folder.untagged) {
                                    {{ 'SIGNAGE_MANAGER.UNTAGGED' | translate }}
                                } @else {
                                    {{ folder.id }}
                                }
                            </div>
                            <div class="text-base-content/60 text-xs">
                                {{
                                    'COMMON.ITEM_COUNT'
                                        | translate: { count: folder.count }
                                }}
                            </div>
                        </button>
                    }
                </div>
            } @else if (loading()) {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32" />
                </div>
            } @else {
                <div
                    class="text-base-content/70 mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">folder_off</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}</p>
                </div>
            }
        } @else {
            <!-- Folder breadcrumb when inside an opened folder -->
            @if (view_mode() === 'folder' && selected_folder() !== null) {
                <div
                    class="text-base-content/80 sticky z-30 mx-2 mt-4 items-center gap-1 px-2 text-sm"
                    [class.top-2]="!can_switch_groups()"
                    [class.top-16]="can_switch_groups()"
                >
                    <div
                        class="bg-base-100 border-base-300 inline-flex items-center rounded-xl border p-1"
                    >
                        <button
                            type="button"
                            matRipple
                            class="hover:text-base-content flex items-center gap-1 rounded-lg px-4 py-2 underline"
                            (click)="closeFolder()"
                        >
                            {{ 'SIGNAGE_MANAGER.VIEW_FOLDER' | translate }}
                        </button>
                        <icon class="text-base-content/60 text-xl"
                            >chevron_right</icon
                        >
                        <span class="text-base-content px-4 font-medium">
                            @if (selected_folder() === untagged_id) {
                                {{ 'SIGNAGE_MANAGER.UNTAGGED' | translate }}
                            } @else {
                                {{ selected_folder() }}
                            }
                        </span>
                    </div>
                </div>
            }

            @if (display_media().length > 0) {
                <div
                    [class]="
                        view_mode() === 'list'
                            ? 'flex w-full flex-col gap-2 p-4'
                            : 'grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    "
                    cdkDropList
                    id="media-list"
                    role="list"
                    [cdkDropListData]="display_media()"
                    [cdkDropListConnectedTo]="playlist_ids()"
                    (cdkDropListDropped)="drop($event)"
                >
                    @for (media_item of display_media(); track media_item.id) {
                        @if (view_mode() === 'list') {
                            <!-- List (row) layout -->
                            <div
                                cdkDrag
                                role="listitem"
                                class="border-base-300 bg-base-100 hover:border-info relative flex items-center gap-3 rounded-lg border p-2 hover:shadow-md"
                                [class.opacity-60]="isExpired(media_item)"
                                [class.ring-2]="isSelected(media_item.id)"
                                [class.ring-primary]="isSelected(media_item.id)"
                            >
                                <div
                                    class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                                    *cdkDragPlaceholder
                                >
                                    <icon class="text-base-100 text-2xl"
                                        >add</icon
                                    >
                                </div>
                                <mat-checkbox
                                    [checked]="isSelected(media_item.id)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_MEDIA'
                                            | translate
                                                : { name: media_item.name }
                                    "
                                    (click)="$event.stopPropagation()"
                                    (change)="toggleSelection(media_item.id)"
                                />
                                <button
                                    preview
                                    type="button"
                                    matRipple
                                    (click)="previewItem(media_item)"
                                    class="bg-base-200 relative h-14 w-20 flex-none overflow-hidden rounded"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.PREVIEW_MEDIA'
                                            | translate
                                                : { name: media_item.name }
                                    "
                                >
                                    <ng-container
                                        [ngTemplateOutlet]="thumb"
                                        [ngTemplateOutletContext]="{
                                            item: media_item,
                                        }"
                                    />
                                </button>
                                <div class="flex w-px flex-1 flex-col">
                                    <button
                                        class="text-base-content w-full truncate text-left"
                                        [matTooltip]="media_item.name"
                                        (click)="toggleSelection(media_item.id)"
                                    >
                                        {{ media_item.name }}
                                    </button>
                                    <div class="flex items-center gap-2">
                                        <span
                                            class="rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                            [class]="typeBadgeClass(media_item)"
                                        >
                                            {{
                                                typeLabelKey(media_item)
                                                    | translate
                                            }}
                                        </span>
                                        @if (isExpired(media_item)) {
                                            <span
                                                class="bg-error text-error-content rounded px-2 py-1 text-xs font-bold"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.EXPIRED'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                        @if (media_item.play_time) {
                                            <span
                                                class="text-base-content/70 hidden font-mono text-xs sm:block"
                                            >
                                                {{
                                                    media_item.play_time / 1000
                                                        | mediaDuration
                                                }}
                                            </span>
                                        }
                                        @if (media_item.tags?.length) {
                                            <div
                                                class="hidden items-center gap-1 lg:flex"
                                            >
                                                @for (
                                                    tag of visibleTags(
                                                        media_item
                                                    );
                                                    track tag
                                                ) {
                                                    <span
                                                        class="bg-info-light text-info max-w-32 truncate rounded-full px-2 py-1 text-[0.625rem] font-medium"
                                                    >
                                                        {{ tag }}
                                                    </span>
                                                }
                                                @if (
                                                    remainingTagCount(
                                                        media_item
                                                    ) > 0
                                                ) {
                                                    <span
                                                        class="bg-info-light text-info rounded-full px-2 py-1 text-[0.625rem] font-medium"
                                                        [matTooltip]="
                                                            remainingTags(
                                                                media_item
                                                            ).join(', ')
                                                        "
                                                    >
                                                        +{{
                                                            remainingTagCount(
                                                                media_item
                                                            )
                                                        }}
                                                    </span>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    [matMenuTriggerFor]="menu"
                                    [matMenuTriggerData]="{ item: media_item }"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.MEDIA_ACTIONS'
                                            | translate
                                    "
                                >
                                    <icon>more_vert</icon>
                                </button>
                            </div>
                        } @else {
                            <!-- Grid (card) layout -->
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
                                    <icon class="text-base-100 text-2xl"
                                        >add</icon
                                    >
                                </div>
                                <mat-checkbox
                                    class="absolute top-4 right-4 z-20 rounded"
                                    [checked]="isSelected(media_item.id)"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.SELECT_MEDIA'
                                            | translate
                                                : { name: media_item.name }
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
                                            | translate
                                                : { name: media_item.name }
                                    "
                                >
                                    @if (isExpired(media_item)) {
                                        <div
                                            class="bg-error text-error-content absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 py-1 text-center text-xs font-bold tracking-wide"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.EXPIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                    <ng-container
                                        [ngTemplateOutlet]="thumb"
                                        [ngTemplateOutletContext]="{
                                            item: media_item,
                                        }"
                                    />
                                    @if (thumbnailUrl(media_item)) {
                                        <div
                                            class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                        >
                                            <icon class="text-2xl"
                                                >expand_content</icon
                                            >
                                        </div>
                                    }
                                    <div
                                        class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                        [class]="typeBadgeClass(media_item)"
                                    >
                                        {{
                                            typeLabelKey(media_item) | translate
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
                                        [matMenuTriggerData]="{
                                            item: media_item,
                                        }"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.MEDIA_ACTIONS'
                                                | translate
                                        "
                                    >
                                        <icon>more_vert</icon>
                                    </button>
                                </div>
                                @if (media_item.tags?.length) {
                                    <div
                                        class="flex min-h-6 w-full items-center gap-1 overflow-hidden"
                                    >
                                        @for (
                                            tag of visibleTags(media_item);
                                            track tag
                                        ) {
                                            <span
                                                class="bg-info-light text-info max-w-[45%] truncate rounded-full px-2 py-1 text-xs font-medium"
                                            >
                                                {{ tag }}
                                            </span>
                                        }
                                        @if (
                                            remainingTagCount(media_item) > 0
                                        ) {
                                            <span
                                                class="bg-info-light text-info rounded-full px-2 py-1 text-xs font-medium"
                                                [matTooltip]="
                                                    remainingTags(
                                                        media_item
                                                    ).join(', ')
                                                "
                                            >
                                                +{{
                                                    remainingTagCount(
                                                        media_item
                                                    )
                                                }}
                                            </span>
                                        }
                                    </div>
                                }
                            </div>
                        }
                    }
                    @if (has_more()) {
                        <div
                            class="col-span-full h-px w-full"
                            intersect
                            (intersect)="loadMore()"
                        ></div>
                    } @else {
                        <div
                            class="text-base-content/50 bg-base-content/10 col-span-full rounded-lg p-2 text-center text-xs"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    }
                </div>
            } @else if (loading()) {
                <div
                    class="mx-auto flex flex-1 flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32" />
                </div>
            } @else {
                <div
                    class="text-base-content/70 mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}</p>
                </div>
            }
        }

        <!-- Shared media actions menu (data passed per item) -->
        <mat-menu #menu="matMenu">
            <ng-template matMenuContent let-media_item="item">
                @if (can_update()) {
                    <button
                        type="button"
                        mat-menu-item
                        (click)="editItem(media_item)"
                    >
                        <div class="flex items-center space-x-2">
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
                        <div class="flex items-center space-x-2">
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
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">ios_share</icon>
                            <div class="pr-2">
                                {{ 'SIGNAGE_MANAGER.SHARE' | translate }}
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
                        <div class="flex items-center space-x-2">
                            <icon class="text-error text-2xl">delete</icon>
                            <div class="pr-2">
                                {{ 'COMMON.REMOVE' | translate }}
                            </div>
                        </div>
                    </button>
                }
            </ng-template>
        </mat-menu>

        <!-- Shared thumbnail visual (fills its container) -->
        <ng-template #thumb let-item="item">
            @if (item.media_type === 'webpage' && !thumbnailUrl(item)) {
                <div class="flex h-full w-full items-center justify-center">
                    <icon class="text-8xl opacity-30">http</icon>
                </div>
            } @else if (item.media_type === 'plugin' && !thumbnailUrl(item)) {
                <div class="flex h-full w-full items-center justify-center">
                    <icon class="text-8xl opacity-30">extension</icon>
                </div>
            } @else if (thumbnailUrl(item)) {
                <img
                    auth
                    [source]="thumbnailUrl(item)"
                    [alt]="item.name + ' thumbnail'"
                    class="absolute -inset-px flex h-full w-full items-center justify-center rounded-lg object-contain object-center"
                />
            } @else {
                <div class="flex h-full w-full items-center justify-center">
                    <icon class="text-8xl opacity-30">{{
                        item.media_type === 'video' ? 'video_library' : 'image'
                    }}</icon>
                </div>
            }
        </ng-template>

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
      NgTemplateOutlet,
      MatCheckboxModule,
      MatRippleModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatTabsModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective,
      MediaDurationPipe,
      TranslatePipe,
      IntersectDirective
    ], styles: ["/* angular:styles/component:css;10dcc9facf87b8d75511c5e27303f91f43b86c54c7ba8a51e597baef06da70e7;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/media/media-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n::ng-deep .cdk-drag-preview {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=media-list.component.css.map */\n"] }]
  }], () => [], { playlist_count: [{ type: Input, args: [{ isSignal: true, alias: "playlist_count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaListComponent, { className: "MediaListComponent", filePath: "apps/signage-manager/src/app/media/media-list.component.ts", lineNumber: 692 });
})();

// apps/signage-manager/src/app/media/playlist-sidebar.component.ts
var _c03 = (a0) => ["/playlists", a0];
var _c12 = (a0) => ({ name: a0 });
var _c22 = () => ["media-list"];
var _forTrack04 = ($index, $item) => $item.id;
function PlaylistSidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistSidebarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPlaylist());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "SIGNAGE_MANAGER.NEW_PLAYLIST"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST"));
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const media_r5 = ctx.$implicit;
    const \u0275$index_43_r6 = ctx.$index;
    const \u0275$count_43_r7 = ctx.$count;
    \u0275\u0275styleProp("top", 0.3 - (\u0275$count_43_r7 - 1) * 0.125 + (\u0275$count_43_r7 - 1 - \u0275$index_43_r6) * 0.25 + "rem")("left", 0.3 - (\u0275$count_43_r7 - 1) * 0.125 + (\u0275$count_43_r7 - 1 - \u0275$index_43_r6) * 0.25 + "rem")("z-index", \u0275$index_43_r6);
    \u0275\u0275property("source", media_r5);
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistSidebarComponent_Conditional_16_For_1_Conditional_4_For_1_Template, 1, 7, "img", 29, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const playlist_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.playlist_thumbnail_media()[playlist_r4.id]);
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 31);
    \u0275\u0275text(2, " playlist_play ");
    \u0275\u0275elementEnd()();
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DISABLED"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_EXPIRED"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.PENDING"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.APPROVAL_REQUIRED"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlist_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", playlist_r4.description, " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 28);
    \u0275\u0275text(1, "p2p");
    \u0275\u0275elementEnd();
  }
}
function PlaylistSidebarComponent_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275listener("cdkDropListDropped", function PlaylistSidebarComponent_Conditional_16_For_1_Template_div_cdkDropListDropped_2_listener($event) {
      const playlist_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop(playlist_r4, $event));
    });
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275conditionalCreate(4, PlaylistSidebarComponent_Conditional_16_For_1_Conditional_4_Template, 2, 0)(5, PlaylistSidebarComponent_Conditional_16_For_1_Conditional_5_Template, 3, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275conditionalCreate(10, PlaylistSidebarComponent_Conditional_16_For_1_Conditional_10_Template, 3, 3, "span", 22);
    \u0275\u0275conditionalCreate(11, PlaylistSidebarComponent_Conditional_16_For_1_Case_11_Template, 3, 3, "span", 23)(12, PlaylistSidebarComponent_Conditional_16_For_1_Case_12_Template, 3, 3, "span", 24)(13, PlaylistSidebarComponent_Conditional_16_For_1_Case_13_Template, 3, 3, "span", 25)(14, PlaylistSidebarComponent_Conditional_16_For_1_Case_14_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, PlaylistSidebarComponent_Conditional_16_For_1_Conditional_15_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, PlaylistSidebarComponent_Conditional_16_For_1_Conditional_16_Template, 2, 0, "icon", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const playlist_r4 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c03, playlist_r4.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 11, "SIGNAGE_MANAGER.OPEN_PLAYLIST", \u0275\u0275pureFunction1(16, _c12, playlist_r4.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "playlist-" + $index_r8)("cdkDropListConnectedTo", \u0275\u0275pureFunction0(18, _c22))("cdkDropListData", playlist_r4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.playlist_thumbnail_media()[playlist_r4.id]?.length ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", playlist_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!playlist_r4.enabled ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r1.getStatus(playlist_r4)) === "expired" ? 11 : tmp_19_0 === "pending" ? 12 : tmp_19_0 === "awaiting_review" ? 13 : tmp_19_0 === "awaiting_approval" ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(playlist_r4.description ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(playlist_r4.distribution ? 16 : -1);
  }
}
function PlaylistSidebarComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("intersect", function PlaylistSidebarComponent_Conditional_16_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function PlaylistSidebarComponent_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.END_OF_LIST"), " ");
  }
}
function PlaylistSidebarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaylistSidebarComponent_Conditional_16_For_1_Template, 17, 19, "a", 13, _forTrack04);
    \u0275\u0275conditionalCreate(2, PlaylistSidebarComponent_Conditional_16_Conditional_2_Template, 1, 0, "div", 14)(3, PlaylistSidebarComponent_Conditional_16_Conditional_3_Template, 3, 3, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.filtered_playlists());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.has_more() ? 2 : 3);
  }
}
function PlaylistSidebarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 33);
    \u0275\u0275elementEnd();
  }
}
function PlaylistSidebarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 34);
    \u0275\u0275text(2, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 35);
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
    this.can_create = this._service.can_create;
    this.loading = this._service.playlists_loading;
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
    this.has_more = this._service.playlists_has_more;
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
  loadMore() {
    this._service.loadMorePlaylists();
  }
  addPlaylist() {
    this._service.addPlaylist();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistSidebarComponent, selectors: [["playlist-sidebar"]], decls: 19, vars: 15, consts: [[1, "border-base-300", "bg-base-100", "rounded-ld", "m-2", "hidden", "h-[calc(100%-1rem)]", "w-72", "shrink-0", "flex-col", "rounded-lg", "border", "md:flex"], [1, "border-base-300", "border-b", "p-2"], [1, "flex", "justify-between"], [1, "px-2"], [1, "text-lg", "font-medium"], [1, "mb-2", "text-xs", "opacity-60"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "right", 3, "matTooltip"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex-1", "overflow-auto", "p-2"], [1, "flex", "items-center", "justify-center", "p-8"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "p-8"], ["icon", "", "default", "", "type", "button", "matRipple", "", "matTooltipPosition", "right", 3, "click", "matTooltip"], [3, "routerLink"], ["intersect", "", 1, "h-px", "w-full"], [1, "text-base-content/50", "bg-base-content/10", "col-span-full", "rounded-lg", "p-2", "text-center", "text-xs"], ["cdkDropList", "", "matRipple", "", 1, "border-base-300", "mb-2", "flex", "items-center", "gap-3", "rounded-lg", "border", "p-0.5", "transition-colors", 3, "cdkDropListDropped", "id", "cdkDropListConnectedTo", "cdkDropListData"], [1, "relative", "h-12", "w-12", "shrink-0", "overflow-hidden", "rounded-md"], [1, "text-base-content/35", "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-medium"], [1, "flex", "flex-wrap", "gap-1", "text-[0.625rem]"], [1, "bg-base-200", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-error", "text-error-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-info", "text-info-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-base-300", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "bg-warning", "text-warning-content", "shrink-0", "rounded", "px-1.5", "py-0.5", "font-bold", "uppercase"], [1, "text-base-content/70", "mt-0.5", "truncate", "text-xs"], [1, "mx-2"], ["auth", "", "alt", "", 1, "border-base-300", "bg-base-200", "absolute", "h-9", "w-9", "rounded-sm", "border", "object-cover", "shadow", 3, "source", "top", "left", "z-index"], ["auth", "", "alt", "", 1, "border-base-300", "bg-base-200", "absolute", "h-9", "w-9", "rounded-sm", "border", "object-cover", "shadow", 3, "source"], [1, "text-2xl"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], ["diameter", "32"], [1, "text-4xl"], [1, "mt-2", "text-sm"]], template: function PlaylistSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, PlaylistSidebarComponent_Conditional_10_Template, 5, 6, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-form-field", 7)(12, "input", 8);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275listener("ngModelChange", function PlaylistSidebarComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.search.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275conditionalCreate(16, PlaylistSidebarComponent_Conditional_16_Template, 4, 1)(17, PlaylistSidebarComponent_Conditional_17_Template, 2, 0, "div", 10)(18, PlaylistSidebarComponent_Conditional_18_Template, 6, 3, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "SIGNAGE_MANAGER.NAV_PLAYLISTS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SIGNAGE_MANAGER.DRAG_MEDIA_HINT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_create() ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 11, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"))("ngModel", ctx.search());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 13, "SIGNAGE_MANAGER.SEARCH_PLAYLISTS"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.filtered_playlists()?.length ? 16 : ctx.loading() ? 17 : 18);
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
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AuthenticatedImageDirective,
      IconComponent,
      RouterLink,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IntersectDirective,
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
            <div class="border-base-300 border-b p-2">
                <div class="flex justify-between">
                    <div class="px-2">
                        <h4 class="text-lg font-medium">
                            {{ 'SIGNAGE_MANAGER.NAV_PLAYLISTS' | translate }}
                        </h4>
                        <p class="mb-2 text-xs opacity-60">
                            {{ 'SIGNAGE_MANAGER.DRAG_MEDIA_HINT' | translate }}
                        </p>
                    </div>
                    @if (can_create()) {
                        <button
                            icon
                            default
                            type="button"
                            matRipple
                            (click)="addPlaylist()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.CREATE_NEW_PLAYLIST'
                                    | translate
                            "
                            [matTooltip]="
                                'SIGNAGE_MANAGER.NEW_PLAYLIST' | translate
                            "
                            matTooltipPosition="right"
                        >
                            <icon>add</icon>
                        </button>
                    }
                </div>
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
                                @if (playlist.distribution) {
                                    <icon class="mx-2">p2p</icon>
                                }
                            </div>
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
                            class="text-base-content/50 bg-base-content/10 col-span-full rounded-lg p-2 text-center text-xs"
                        >
                            {{ 'COMMON.END_OF_LIST' | translate }}
                        </div>
                    }
                } @else if (loading()) {
                    <div class="flex items-center justify-center p-8">
                        <mat-spinner diameter="32" />
                    </div>
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
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      IconComponent,
      RouterLink,
      MatRippleModule,
      TranslatePipe,
      MatTooltipModule,
      IntersectDirective
    ], styles: ["/* angular:styles/component:css;e2669eb1b5922b8b28c48c8c324de76906a4299d14ec550eb44187ae60bc18d2;/home/runner/work/user-interfaces/user-interfaces/apps/signage-manager/src/app/media/playlist-sidebar.component.ts */\n:host {\n  display: contents;\n}\n.cdk-drop-list-dragging,\n.cdk-drop-list-receiving {\n  border-color: var(--color-primary) !important;\n  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent) !important;\n}\n/*# sourceMappingURL=playlist-sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistSidebarComponent, { className: "PlaylistSidebarComponent", filePath: "apps/signage-manager/src/app/media/playlist-sidebar.component.ts", lineNumber: 281 });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaSectionComponent, selectors: [["media-section"]], decls: 10, vars: 2, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "sm:flex-row", 3, "dragenter", "dragover", "dragleave", "drop"], [1, "sm:h-full"], [1, "flex", "min-h-0", "min-w-0", "flex-1", "flex-col"], [1, "relative", "z-10"], [1, "flex", "min-h-0", "flex-1", "flex-row"], [1, "relative", "min-w-0", "flex-1", "overflow-auto"], [1, "relative", "z-0", 3, "playlist_count"], [1, "absolute", "inset-0", "z-20"], [1, "absolute", "inset-0", "z-20", 3, "dragenter", "dragover", "dragleave", "drop"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60"], [1, "border-base-300", "text-base-100", "absolute", "inset-4", "flex", "flex-col", "items-center", "justify-center", "gap-4", "rounded-2xl", "border-4", "border-dashed", "text-center"], [1, "text-6xl"], [1, "text-lg", "font-medium"], [1, "text-sm", "opacity-80"]], template: function MediaSectionComponent_Template(rf, ctx) {
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
            <div class="flex min-h-0 min-w-0 flex-1 flex-col">
                <media-list-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <main class="relative min-w-0 flex-1 overflow-auto">
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
//# sourceMappingURL=media.component-KXJJ6BUE.js.map
