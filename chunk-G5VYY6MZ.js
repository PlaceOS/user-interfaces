import {
  MediaThumbnailComponent
} from "./chunk-NGE2X4Y2.js";
import {
  playlistMediaThumbnailUrl
} from "./chunk-BL3MYKDU.js";
import {
  TranslatePipe
} from "./chunk-4DBHNJWE.js";
import {
  CommonModule,
  Component,
  DatePipe,
  IconComponent,
  Input,
  MatRipple,
  MatRippleModule,
  NgTemplateOutlet,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JL3PENQK.js";

// apps/signage-manager/src/app/shared/playlist-approval-preview.component.ts
var _c0 = () => [];
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ item: a0 });
var _c3 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item?.id;
function PlaylistApprovalPreviewComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275nextContext();
    const media_item_r3 = \u0275\u0275reference(32);
    \u0275\u0275property("ngTemplateOutlet", media_item_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, item_r2));
  }
}
function PlaylistApprovalPreviewComponent_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 9);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const empty_state_r1 = \u0275\u0275reference(34);
    \u0275\u0275property("ngTemplateOutlet", empty_state_r1);
  }
}
function PlaylistApprovalPreviewComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275nextContext();
    const media_item_r3 = \u0275\u0275reference(32);
    \u0275\u0275property("ngTemplateOutlet", media_item_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, item_r4));
  }
}
function PlaylistApprovalPreviewComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 9);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const empty_state_r1 = \u0275\u0275reference(34);
    \u0275\u0275property("ngTemplateOutlet", empty_state_r1);
  }
}
function PlaylistApprovalPreviewComponent_ng_template_31_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon", 16);
    \u0275\u0275text(2, "expand_content");
    \u0275\u0275elementEnd()();
  }
}
function PlaylistApprovalPreviewComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaylistApprovalPreviewComponent_ng_template_31_Template_button_click_1_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).item;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.preview.emit(item_r6));
    });
    \u0275\u0275element(3, "media-thumbnail", 13);
    \u0275\u0275conditionalCreate(4, PlaylistApprovalPreviewComponent_ng_template_31_Conditional_4_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 4, "SIGNAGE_MANAGER.PREVIEW_MEDIA", \u0275\u0275pureFunction1(7, _c3, item_r6.name)));
    \u0275\u0275advance(2);
    \u0275\u0275property("item", item_r6);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.thumbnailUrl(item_r6) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.name);
  }
}
function PlaylistApprovalPreviewComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 18);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.NO_ITEMS"), " ");
  }
}
var PlaylistApprovalPreviewComponent = class _PlaylistApprovalPreviewComponent {
  constructor() {
    this.versions = input(
      [],
      ...ngDevMode ? [{ debugName: "versions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media = input(
      [],
      ...ngDevMode ? [{ debugName: "media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preview = output();
  }
  thumbnailUrl(item) {
    return playlistMediaThumbnailUrl(item);
  }
  static {
    this.\u0275fac = function PlaylistApprovalPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistApprovalPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistApprovalPreviewComponent, selectors: [["playlist-approval-preview"]], inputs: { versions: [1, "versions"], media: [1, "media"] }, outputs: { preview: "preview" }, decls: 35, vars: 36, consts: [["media_item", ""], ["empty_state", ""], [1, "flex", "gap-2", "max-md:flex-col"], [1, "border-base-300", "bg-success-light", "min-w-0", "flex-1", "rounded-sm", "border"], [1, "border-base-300", "bg-base-200", "flex", "items-center", "justify-between", "gap-2", "rounded-sm", "border-b", "px-4", "py-2"], [1, "text-base-content/70", "font-mono", "text-xs"], [1, "space-y-2", "p-2"], [1, "px-2", "text-sm"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], [1, "border-base-300", "bg-error-light", "min-w-0", "flex-1", "rounded-sm", "border"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "space-x-2", "rounded-sm", "border", "p-2"], ["type", "button", "matRipple", "", 1, "bg-base-200", "relative", "h-10", "w-10", "shrink-0", "overflow-hidden", "rounded-sm", 3, "click"], [1, "h-full", "w-full", 3, "item"], [1, "absolute", "inset-0", "flex", "items-end", "justify-end", "p-1", "opacity-0", "transition-opacity", "duration-200", "hover:opacity-100"], [1, "truncate"], [1, "text-lg"], [1, "text-base-content/70", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "text-4xl"], [1, "text-sm"]], template: function PlaylistApprovalPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, PlaylistApprovalPreviewComponent_For_14_Template, 1, 4, "ng-container", 8, _forTrack0, false, PlaylistApprovalPreviewComponent_ForEmpty_15_Template, 1, 1, "ng-container", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 4)(18, "h3");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 6)(25, "div", 7);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, PlaylistApprovalPreviewComponent_For_29_Template, 1, 4, "ng-container", 8, _forTrack0, false, PlaylistApprovalPreviewComponent_ForEmpty_30_Template, 1, 1, "ng-container", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(31, PlaylistApprovalPreviewComponent_ng_template_31_Template, 7, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(33, PlaylistApprovalPreviewComponent_ng_template_33_Template, 6, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const current_version_r8 = ctx.versions()?.[0];
        const current_media_r9 = ctx.media()?.[0] || \u0275\u0275pureFunction0(26, _c0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "SIGNAGE_MANAGER.VERSION_TO_APPROVE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 10, current_version_r8?.updated_at * 1e3, "dd MMM, HH:mm"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(12, 13, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(28, _c1, (current_version_r8?.items || \u0275\u0275pureFunction0(27, _c0)).length), (current_version_r8?.items || \u0275\u0275pureFunction0(30, _c0)).length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(current_media_r9);
        const previous_version_r10 = ctx.versions()?.[1];
        const previous_media_r11 = ctx.media()?.[1] || \u0275\u0275pureFunction0(31, _c0);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 17, "SIGNAGE_MANAGER.PREVIOUS_VERSION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 19, previous_version_r10?.updated_at * 1e3, "dd MMM, HH:mm"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(27, 22, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(33, _c1, (previous_version_r10?.items || \u0275\u0275pureFunction0(32, _c0)).length), (previous_version_r10?.items || \u0275\u0275pureFunction0(35, _c0)).length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(previous_media_r11);
      }
    }, dependencies: [
      CommonModule,
      NgTemplateOutlet,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MediaThumbnailComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistApprovalPreviewComponent, [{
    type: Component,
    args: [{
      selector: "playlist-approval-preview",
      template: `
        <div class="flex gap-2 max-md:flex-col">
            <div
                class="border-base-300 bg-success-light min-w-0 flex-1 rounded-sm border"
            >
                @let current_version = versions()?.[0];
                @let current_media = media()?.[0] || [];
                <div
                    class="border-base-300 bg-base-200 flex items-center justify-between gap-2 rounded-sm border-b px-4 py-2"
                >
                    <h3>
                        {{ 'SIGNAGE_MANAGER.VERSION_TO_APPROVE' | translate }}
                    </h3>
                    <div class="text-base-content/70 font-mono text-xs">
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
                                          count: (current_version?.items || [])
                                              .length,
                                      }
                                    : (current_version?.items || []).length
                        }}
                    </div>
                    @for (item of current_media; track item?.id) {
                        <ng-container
                            [ngTemplateOutlet]="media_item"
                            [ngTemplateOutletContext]="{ item }"
                        />
                    } @empty {
                        <ng-container [ngTemplateOutlet]="empty_state" />
                    }
                </div>
            </div>
            <div
                class="border-base-300 bg-error-light min-w-0 flex-1 rounded-sm border"
            >
                @let previous_version = versions()?.[1];
                @let previous_media = media()?.[1] || [];
                <div
                    class="border-base-300 bg-base-200 flex items-center justify-between gap-2 rounded-sm border-b px-4 py-2"
                >
                    <h3>
                        {{ 'SIGNAGE_MANAGER.PREVIOUS_VERSION' | translate }}
                    </h3>
                    <div class="text-base-content/70 font-mono text-xs">
                        {{
                            previous_version?.updated_at * 1000
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
                                          count: (previous_version?.items || [])
                                              .length,
                                      }
                                    : (previous_version?.items || []).length
                        }}
                    </div>
                    @for (item of previous_media; track item?.id) {
                        <ng-container
                            [ngTemplateOutlet]="media_item"
                            [ngTemplateOutletContext]="{ item }"
                        />
                    } @empty {
                        <ng-container [ngTemplateOutlet]="empty_state" />
                    }
                </div>
            </div>
        </div>

        <ng-template #media_item let-item="item">
            <div
                class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
            >
                <button
                    type="button"
                    class="bg-base-200 relative h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                    matRipple
                    (click)="preview.emit(item)"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PREVIEW_MEDIA'
                            | translate: { name: item.name }
                    "
                >
                    <media-thumbnail [item]="item" class="h-full w-full" />
                    @if (thumbnailUrl(item)) {
                        <div
                            class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                        >
                            <icon class="text-lg">expand_content</icon>
                        </div>
                    }
                </button>
                <span class="truncate">{{ item.name }}</span>
            </div>
        </ng-template>

        <ng-template #empty_state>
            <div
                class="text-base-content/70 flex flex-col items-center justify-center p-8"
            >
                <icon class="text-4xl">hide_image</icon>
                <p class="text-sm">
                    {{ 'COMMON.NO_ITEMS' | translate }}
                </p>
            </div>
        </ng-template>
    `,
      imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MediaThumbnailComponent
      ]
    }]
  }], null, { versions: [{ type: Input, args: [{ isSignal: true, alias: "versions", required: false }] }], media: [{ type: Input, args: [{ isSignal: true, alias: "media", required: false }] }], preview: [{ type: Output, args: ["preview"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistApprovalPreviewComponent, { className: "PlaylistApprovalPreviewComponent", filePath: "apps/signage-manager/src/app/shared/playlist-approval-preview.component.ts", lineNumber: 141 });
})();

export {
  PlaylistApprovalPreviewComponent
};
//# debugId=f8f50f9e-fe78-585b-8f3b-1fa92535b4a2
//# sourceMappingURL=chunk-G5VYY6MZ.js.map
