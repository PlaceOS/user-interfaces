import {
  AuthenticatedImageDirective
} from "./chunk-7IYNAN5I.js";
import {
  IconComponent
} from "./chunk-OOXMEN3E.js";
import {
  Component,
  Input,
  MatRipple,
  MatRippleModule,
  TranslatePipe,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-P3URBYOL.js";

// libs/components/src/lib/image-carousel.component.ts
function ImageCarouselComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const image_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", image_r1?.url || image_r1);
  }
}
function ImageCarouselComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, ImageCarouselComponent_For_2_Conditional_1_Template, 1, 1, "img", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r1.offset_transform());
    \u0275\u0275advance();
    \u0275\u0275conditional(image_r1 ? 1 : -1);
  }
}
function ImageCarouselComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 8);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.IMAGES_EMPTY"));
  }
}
function ImageCarouselComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ImageCarouselComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offset.update((value) => value - 1));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.offset() === 0);
  }
}
function ImageCarouselComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ImageCarouselComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.offset.update((value) => value + 1));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "icon", 11);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.offset() >= ctx_r1.images()?.length - 1);
  }
}
function ImageCarouselComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ImageCarouselComponent_Conditional_6_For_2_Template_button_click_0_listener() {
      const \u0275$index_38_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.offset.set(\u0275$index_38_r6));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_38_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", ctx_r1.offset() !== \u0275$index_38_r6)("h-2", ctx_r1.offset() !== \u0275$index_38_r6)("w-2", ctx_r1.offset() !== \u0275$index_38_r6)("h-4", ctx_r1.offset() === \u0275$index_38_r6)("w-4", ctx_r1.offset() === \u0275$index_38_r6)("opacity-80", ctx_r1.offset() === \u0275$index_38_r6);
  }
}
function ImageCarouselComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ImageCarouselComponent_Conditional_6_For_2_Template, 2, 12, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.images());
  }
}
var ImageCarouselComponent = class _ImageCarouselComponent {
  constructor() {
    this.images = input(
      [],
      ...ngDevMode ? [{ debugName: "images" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_transform = computed(
      () => `translateX(-${this.offset() * 100}%)`,
      ...ngDevMode ? [{ debugName: "offset_transform" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ImageCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageCarouselComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageCarouselComponent, selectors: [["image-carousel"]], inputs: { images: [1, "images"] }, decls: 7, vars: 4, consts: [[1, "relative", "flex", "h-full", "w-full", "overflow-hidden"], ["image", "", 1, "relative", "flex", "h-full", "min-w-full", "items-center", "justify-center", "overflow-hidden", 3, "transform"], [1, "relative", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [1, "absolute", "inset-y-0", "left-0", "flex", "w-1/3", "items-center", "justify-center", "opacity-0", "hover:opacity-100", 3, "disabled"], [1, "absolute", "inset-y-0", "right-0", "flex", "w-1/3", "items-center", "justify-center", "text-white", "opacity-0", "hover:opacity-100", 3, "disabled"], [1, "absolute", "bottom-2", "left-1/2", "flex", "-translate-x-1/2", "items-center", "space-x-2", "text-sm"], ["image", "", 1, "relative", "flex", "h-full", "min-w-full", "items-center", "justify-center", "overflow-hidden"], ["auth", "", 1, "h-full", "object-contain", 3, "source"], [1, "text-6xl"], [1, "absolute", "inset-y-0", "left-0", "flex", "w-1/3", "items-center", "justify-center", "opacity-0", "hover:opacity-100", 3, "click", "disabled"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "text-base-content", "absolute", "top-1/2", "left-4", "h-10", "w-10", "-translate-y-1/2", "rounded-full", "border", "shadow-sm"], [1, "text-3xl"], [1, "absolute", "inset-y-0", "right-0", "flex", "w-1/3", "items-center", "justify-center", "text-white", "opacity-0", "hover:opacity-100", 3, "click", "disabled"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "text-base-content", "absolute", "top-1/2", "right-4", "h-10", "w-10", "-translate-y-1/2", "rounded-full", "border", "shadow-sm"], ["matRipple", "", 1, "flex", "h-4", "w-4", "items-center", "justify-center"], ["matRipple", "", 1, "flex", "h-4", "w-4", "items-center", "justify-center", 3, "click"], [1, "bg-base-100", "rounded-full", "shadow-sm", "transition-all"]], template: function ImageCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ImageCarouselComponent_For_2_Template, 2, 3, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(3, ImageCarouselComponent_Conditional_3_Template, 6, 3, "div", 2);
        \u0275\u0275conditionalCreate(4, ImageCarouselComponent_Conditional_4_Template, 4, 1, "button", 3);
        \u0275\u0275conditionalCreate(5, ImageCarouselComponent_Conditional_5_Template, 4, 1, "button", 4);
        \u0275\u0275conditionalCreate(6, ImageCarouselComponent_Conditional_6_Template, 3, 0, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.images());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.images()?.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.images()?.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.images()?.length ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.images()?.length ? 6 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      AuthenticatedImageDirective,
      IconComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[image][_ngcontent-%COMP%] {\n  transition: transform 300ms;\n}\nbutton[disabled][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=image-carousel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageCarouselComponent, [{
    type: Component,
    args: [{ selector: "image-carousel", template: `
        <div class="relative flex h-full w-full overflow-hidden">
            @for (image of images(); track image) {
                <div
                    image
                    class="relative flex h-full min-w-full items-center justify-center overflow-hidden"
                    [style.transform]="offset_transform()"
                >
                    @if (image) {
                        <img
                            auth
                            class="h-full object-contain"
                            [source]="$any(image)?.url || image"
                        />
                    }
                </div>
            }
            @if (!images()?.length) {
                <div
                    class="relative flex h-full w-full flex-col items-center justify-center space-y-2 opacity-30"
                >
                    <icon class="text-6xl">image</icon>
                    <p>{{ 'COMMON.IMAGES_EMPTY' | translate }}</p>
                </div>
            }
            @if (images()?.length) {
                <button
                    class="absolute inset-y-0 left-0 flex w-1/3 items-center justify-center opacity-0 hover:opacity-100"
                    [disabled]="offset() === 0"
                    (click)="offset.update((value) => value - 1)"
                >
                    <div
                        matRipple
                        class="border-base-300 bg-base-100 text-base-content absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 rounded-full border shadow-sm"
                    >
                        <icon class="text-3xl">chevron_left</icon>
                    </div>
                </button>
            }
            @if (images()?.length) {
                <button
                    class="absolute inset-y-0 right-0 flex w-1/3 items-center justify-center text-white opacity-0 hover:opacity-100"
                    [disabled]="offset() >= images()?.length - 1"
                    (click)="offset.update((value) => value + 1)"
                >
                    <div
                        matRipple
                        class="border-base-300 bg-base-100 text-base-content absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 rounded-full border shadow-sm"
                    >
                        <icon class="text-3xl">chevron_right</icon>
                    </div>
                </button>
            }
            @if (images()?.length) {
                <div
                    class="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center space-x-2 text-sm"
                >
                    @for (img of images(); track img; let i = $index) {
                        <button
                            matRipple
                            (click)="offset.set(i)"
                            class="flex h-4 w-4 items-center justify-center"
                        >
                            <div
                                class="bg-base-100 rounded-full shadow-sm transition-all"
                                [class.opacity-30]="offset() !== i"
                                [class.h-2]="offset() !== i"
                                [class.w-2]="offset() !== i"
                                [class.h-4]="offset() === i"
                                [class.w-4]="offset() === i"
                                [class.opacity-80]="offset() === i"
                            ></div>
                        </button>
                    }
                </div>
            }
        </div>
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      AuthenticatedImageDirective,
      IconComponent
    ], styles: ["/* angular:styles/component:css;689216c244746a44ce8495e5ddc0d8a4ad407f0899332d9a6e20f4c6e02d0df2;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/image-carousel.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[image] {\n  transition: transform 300ms;\n}\nbutton[disabled] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=image-carousel.component.css.map */\n"] }]
  }], null, { images: [{ type: Input, args: [{ isSignal: true, alias: "images", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageCarouselComponent, { className: "ImageCarouselComponent", filePath: "libs/components/src/lib/image-carousel.component.ts", lineNumber: 111 });
})();

export {
  ImageCarouselComponent
};
//# sourceMappingURL=chunk-MZYXSUUK.js.map
