import {
  IntersectDirective
} from "./chunk-QVCXHNXH.js";
import {
  LoadErrorComponent
} from "./chunk-XGU4SF5P.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-EFQKIWYD.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-HFJLXBV4.js";
import {
  MatDialogClose,
  MatDialogModule
} from "./chunk-2APKA6IB.js";
import {
  TranslatePipe
} from "./chunk-XDLX3ZVO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-4XDY7DFN.js";
import {
  IconComponent
} from "./chunk-KUBCKOBU.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import {
  Component,
  ContentChild,
  Directive,
  Input,
  NgTemplateOutlet,
  TemplateRef,
  contentChild,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/picker-modal.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function PickerModalComponent_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.item_template().template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, entry_r1));
  }
}
function PickerModalComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("intersect", function PickerModalComponent_Conditional_13_Conditional_2_Template_div_intersect_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.list().loadMore());
    });
    \u0275\u0275elementEnd();
  }
}
function PickerModalComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 11);
    \u0275\u0275listener("retry", function PickerModalComponent_Conditional_13_Conditional_3_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.list().retry());
    });
    \u0275\u0275elementEnd();
  }
}
function PickerModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PickerModalComponent_Conditional_13_For_1_Template, 1, 4, "ng-container", 8, _forTrack0);
    \u0275\u0275conditionalCreate(2, PickerModalComponent_Conditional_13_Conditional_2_Template, 1, 0, "div", 9)(3, PickerModalComponent_Conditional_13_Conditional_3_Template, 1, 0, "load-error");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.list().items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.list().has_more() ? 2 : ctx_r1.list().error() ? 3 : -1);
  }
}
function PickerModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), " ");
  }
}
function PickerModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "load-error", 11);
    \u0275\u0275listener("retry", function PickerModalComponent_Conditional_15_Template_load_error_retry_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.list().retry());
    });
    \u0275\u0275elementEnd();
  }
}
function PickerModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.empty_icon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r1.empty_label()), " ");
  }
}
var PickerItemDirective = class _PickerItemDirective {
  constructor() {
    this.pickerItem = input.required(
      ...ngDevMode ? [{ debugName: "pickerItem" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = inject(TemplateRef);
  }
  static ngTemplateContextGuard(_directive, context) {
    return true;
  }
  static {
    this.\u0275fac = function PickerItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickerItemDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PickerItemDirective, selectors: [["ng-template", "pickerItem", ""]], inputs: { pickerItem: [1, "pickerItem"] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerItemDirective, [{
    type: Directive,
    args: [{ selector: "ng-template[pickerItem]" }]
  }], null, { pickerItem: [{ type: Input, args: [{ isSignal: true, alias: "pickerItem", required: true }] }] });
})();
var PickerModalComponent = class _PickerModalComponent {
  constructor() {
    this.list = input.required(
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = input.required(
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close_label = input.required(
      ...ngDevMode ? [{ debugName: "close_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_label = input.required(
      ...ngDevMode ? [{ debugName: "search_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.empty_icon = input.required(
      ...ngDevMode ? [{ debugName: "empty_icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.empty_label = input.required(
      ...ngDevMode ? [{ debugName: "empty_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.item_template = contentChild.required(
      PickerItemDirective,
      ...ngDevMode ? [{ debugName: "item_template" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function PickerModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickerModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PickerModalComponent, selectors: [["picker-modal"]], contentQueries: function PickerModalComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.item_template, PickerItemDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "contents"], inputs: { list: [1, "list"], heading: [1, "heading"], close_label: [1, "close_label"], search_label: [1, "search_label"], empty_icon: [1, "empty_icon"], empty_label: [1, "empty_label"] }, decls: 17, vars: 14, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "type", "button", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "max-w-lg", "min-w-lg", "space-y-2", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center", "max-md:h-auto", "max-md:max-w-none", "max-md:min-w-0", "max-md:flex-1"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "sticky", "top-0", "z-10", "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "rounded-lg", "p-16"], [1, "bg-base-200", "flex", "h-[calc(100%-3.5rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-lg", "p-16"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["intersect", "", 1, "h-px", "w-full"], ["intersect", "", 1, "h-px", "w-full", 3, "intersect"], [3, "retry"], [1, "text-base-content/70"], [1, "text-base-content/70", "text-8xl"]], template: function PickerModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3)(9, "mat-form-field", 4)(10, "input", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function PickerModalComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.list().search, $event) || (ctx.list().search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, PickerModalComponent_Conditional_13_Template, 4, 1)(14, PickerModalComponent_Conditional_14_Template, 4, 3, "div", 6)(15, PickerModalComponent_Conditional_15_Template, 1, 0, "load-error")(16, PickerModalComponent_Conditional_16_Template, 6, 4, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, ctx.heading()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 8, ctx.close_label()));
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.list().search);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 10, ctx.search_label()));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 12, ctx.search_label()));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.list().items().length > 0 ? 13 : ctx.list().loading() ? 14 : ctx.list().error() ? 15 : 16);
      }
    }, dependencies: [
      NgTemplateOutlet,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      IconComponent,
      LoadErrorComponent,
      IntersectDirective,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerModalComponent, [{
    type: Component,
    args: [{
      selector: "picker-modal",
      template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ heading() | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="close_label() | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [(ngModel)]="list().search"
                    [placeholder]="search_label() | translate"
                    [attr.aria-label]="search_label() | translate"
                />
            </mat-form-field>
            @if (list().items().length > 0) {
                @for (entry of list().items(); track entry.id) {
                    <ng-container
                        [ngTemplateOutlet]="item_template().template"
                        [ngTemplateOutletContext]="{ $implicit: entry }"
                    />
                }
                @if (list().has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="list().loadMore()"
                    ></div>
                } @else if (list().error()) {
                    <load-error (retry)="list().retry()" />
                }
            } @else if (list().loading()) {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else if (list().error()) {
                <load-error (retry)="list().retry()" />
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">{{
                        empty_icon()
                    }}</icon>
                    <div class="text-base-content/70">
                        {{ empty_label() | translate }}
                    </div>
                </div>
            }
        </main>
    `,
      // Lays the header and the main out as children of the dialog component
      host: { class: "contents" },
      imports: [
        NgTemplateOutlet,
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        LoadErrorComponent,
        TranslatePipe,
        IntersectDirective
      ]
    }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: true }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], close_label: [{ type: Input, args: [{ isSignal: true, alias: "close_label", required: true }] }], search_label: [{ type: Input, args: [{ isSignal: true, alias: "search_label", required: true }] }], empty_icon: [{ type: Input, args: [{ isSignal: true, alias: "empty_icon", required: true }] }], empty_label: [{ type: Input, args: [{ isSignal: true, alias: "empty_label", required: true }] }], item_template: [{ type: ContentChild, args: [forwardRef(() => PickerItemDirective), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PickerModalComponent, { className: "PickerModalComponent", filePath: "apps/signage-manager/src/app/shared/picker-modal.component.ts", lineNumber: 139 });
})();

export {
  PickerItemDirective,
  PickerModalComponent
};
//# debugId=661dbbda-2486-598e-847a-4150b7e1d2d2
//# sourceMappingURL=chunk-DLXWMD7J.js.map
